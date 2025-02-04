import { Notice, Plugin } from "obsidian";
import {
	DEFAULT_SETTINGS,
	MoodTrackerSettings,
} from "./settings/moodTrackerSettings";
import { MoodTrackerSettingsTab } from "./settings/settingsTab";
import { MoodTrackerModal } from "./trackerModal/trackerModal";
import { IMoodTrackerEntry } from "./entities/MoodTrackerEntry";
import { EmotionGroup } from "./entities/IEmotionGroup";

import type moment from "moment";
import { FileService } from "./filesIntegration/fileService";
import { EmotionsService } from "./services/emotionsService";

declare global {
	interface Window {
		moment: typeof moment;
	}
}

export default class MoodTrackerPlugin extends Plugin {
	settings: MoodTrackerSettings;
	noteService = new FileService(this);
	emotionService = new EmotionsService(this);

	async onload() {
		await this.loadSettings();
		this.addRibbonIcons();
		this.addCommands();
		this.addSettingTab(new MoodTrackerSettingsTab(this, this.app));
	}

	onunload() {}

	openTrackerModal(
		entry: IMoodTrackerEntry | undefined = undefined,
		reopenStatsModalOnClose = false
	) {
		new MoodTrackerModal(
			this.app,
			this,
			entry,
			reopenStatsModalOnClose
		).open();
	}

	public showNotice(message: string, durationMs = 5000, title?: string) {
		if (typeof title !== 'undefined') {
			const notice = new Notice("", durationMs);
			notice.noticeEl.append(
				createEl("strong", { text: title, cls: "mood-tracker-notice-header"}),
				createEl("br"),
				message,
			);
		} else {
			new Notice(message, durationMs);
		}
	}

	async loadSettings() {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const loadedData: MoodTrackerSettings | any = Object.assign(
			{},
			DEFAULT_SETTINGS,
			await this.loadData()
		);
		// look out for legacy settings!
		const legacyEmotions = loadedData.emotions;
		if (
			legacyEmotions &&
			Array.isArray(legacyEmotions) &&
			legacyEmotions.length > 0 &&
			typeof legacyEmotions[0] === "string"
		) {
			const migratedSettings = new MoodTrackerSettings();
			migratedSettings.folderPath = loadedData.folderPath;
			migratedSettings.moodRatingLabelDict =
				loadedData.moodRatingLabelDict;
			const emotionGroup = new EmotionGroup();
			emotionGroup.color = "#b8c1cf";
			emotionGroup.name = "";
			emotionGroup.emotions = legacyEmotions;
			migratedSettings.emotionGroups = [];
			migratedSettings.emotionGroups.push(emotionGroup);
			this.settings = Object.assign(
				{},
				DEFAULT_SETTINGS,
				migratedSettings
			);
			this.showNotice(
				"Mood Tracker has been updated. Check out the new emotion settings!",
				15000
			);
			await this.saveSettings();
		} else {
			this.settings = loadedData;
			const legacyEmotionSections = loadedData.emotionSections;
			if (legacyEmotionSections) {
				const convertedLegacyEmotionSections =
					this.dataIntegrityService.legacyEmotionSectionsToEmotionGroups(
						legacyEmotionSections
					);
				this.settings.emotionGroups.push(
					...convertedLegacyEmotionSections
				);
				// @ts-expect-error
				this.settings["emotionSections"] = null;
				// @ts-expect-error
				delete this.settings["emotionSections"];
			}
			this.settings.emotionGroups = this.emotionService.sortEmotionGroups(
				this.settings.emotionGroups
			);
			this.dataIntegrityService.fillMissingIds(
				this.settings.emotionGroups
			);
			await this.saveSettings();
		}
	}

	async saveSettings() {
		this.settings.emotionGroups = this.emotionService.sortEmotionGroups(
			this.settings.emotionGroups
		);
		await this.saveData(this.settings);
	}

	private addRibbonIcons() {
		this.addRibbonIcon(
			"smile-plus",
			"Open Mood Tracker",
			(evt: MouseEvent) => {
				this.openTrackerModal();
			}
		);
	}

	private addCommands() {
		this.addCommand({
			id: "open-mood-tracker",
			name: "Open Tracker",
			callback: () => {
				this.openTrackerModal();
			},
		});
	}
}
