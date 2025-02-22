// MARK: définitions de variables (pas compris)
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to2, from2, except, desc) => {
  if (from2 && typeof from2 === "object" || typeof from2 === "function") {
    for (let key of __getOwnPropNames(from2))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from2[key], enumerable: !(desc = __getOwnPropDesc(from2, key)) || desc.enumerable });
  }
  return to2;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};

// MARK: main ? (pas compris)
// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MoodTrackerPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian9 = require("obsidian");

// MARK: émotions par défault (compris)
// src/data/defaultEmotions.ts
var defaultEmotions = [
  {
    id: "17c2b0b6-cead-4281-a830-e09dd2d851f2",
    name: "Love and joy",
    sortOrder: 0,
    color: "#76de91",
    textColor: void 0,
    emotions: [
      "joyful",
      "content",
      "pleased",
      "satisfied",
      "happy",
      "amused",
      "delighted",
      "cheerful",
      "jovial",
      "blissful",
      "proud",
      "triumphant",
      "optimistic",
      "eager",
      "hopeful",
      "enthusiastic",
      "excited",
      "euphoric",
      "enchanted",
      "loving",
      "romantic",
      "affectionate",
      "passionate",
      "attracted",
      "sentimental",
      "compassionate",
      "peaceful",
      "relieved"
    ]
  },
  {
    id: "f4e5cdb9-a24d-4a16-9c10-ca567d419de2",
    name: "Neutral and surprise",
    sortOrder: 1,
    color: "#f2d05e",
    textColor: void 0,
    emotions: [
      "ok",
      "fine",
      "bored",
      "surprised",
      "shocked",
      "dismayed",
      "confused",
      "disillusioned",
      "perplexed",
      "amazed",
      "astonished",
      "moved",
      "touched"
    ]
  },
  {
    id: "5f18d172-d07b-4914-8715-e6e656a21697",
    name: "Anger and stress",
    sortOrder: 2,
    color: "#f04a1d",
    textColor: void 0,
    emotions: [
      "stressed",
      "angry",
      "enraged",
      "hateful",
      "hostile",
      "agitated",
      "frustrated",
      "irritated",
      "annoyed",
      "aggravated",
      "envious",
      "jealous",
      "disgusted",
      "contemptful "
    ]
  },
  {
    id: "275e754f-7186-4c5c-9e56-17c75aac623d",
    name: "Sadness and fear",
    sortOrder: 3,
    color: "#837ff0",
    textColor: void 0,
    emotions: [
      "sad",
      "hurt",
      "agonizing",
      "depressed",
      "sorrowful",
      "disappointed",
      "dismayed",
      "displeased",
      "shameful",
      "regretful",
      "guilty",
      "neglected",
      "isolated",
      "lonely",
      "despaired",
      "grieving",
      "powerless",
      "fearful",
      "scared",
      "helpless",
      "frightened",
      "panicking",
      "hystetical",
      "insecure",
      "inferior",
      "inadequate",
      "nervous",
      "anxious",
      "worried",
      "dreadful",
      "mortified"
    ]
  }
];

// MARK: settings (compris)
// src/settings/moodTrackerSettings.ts
var MoodTrackerSettings = class {
  constructor() {
    this.emotionGroups = [];
  }
};
var DEFAULT_SETTINGS = {
  emotionGroups: defaultEmotions,
  moodRatingLabelDict: {
    1: "\u{1F628}",
    2: "\u2639\uFE0F",
    3: "\u{1F610}",
    4: "\u{1F642}",
    5: "\u{1F60A}"
  },
  moodRatingLabelSize: 3,
  entryTemplate: "- {{ICON}} {{NOTE}}",
  trackerModalTitle: "How are you feeling?",
  useEmotions: true,
  journalPosition: "## Mood Tracker",
  journalFilePath: "",
  chartColor: "#b26aba"
};

// src/settings/settingsTab.ts
var import_obsidian5 = require("obsidian");


// MARK: suggester ? (pas compris)
// src/settings/folderSetting/suggest.ts
var wrapAround = (value, size) => {
  return (value % size + size) % size;
};


// MARK: groupe d'émotions (compris mais pas le pourquoi)
// src/entities/IEmotionGroup.ts
var import_crypto = require("crypto");
var EmotionGroup = class {
  constructor() {
    this.id = (0, import_crypto.randomUUID)();
    this.name = "emotion group";
    this.color = "#b84444";
    this.emotions = [];
  }
};

// MARK: confirmation modal, pour confirmer les émotions dans les settings (un peu près compris)
// src/common/confirmationModal.ts
var import_obsidian2 = require("obsidian");
var ConfirmationModal = class extends import_obsidian2.Modal {
  constructor(app2, title, onConfirmCallback, onCancelCallback) {
    super(app2);
    this.title = title;
    this.onConfirmCallback = onConfirmCallback;
    this.onCancelCallback = onCancelCallback;
  }
  onOpen() {
    const { contentEl } = this;
    this.titleEl.setText(this.title);
    const btnsDiv = contentEl.createDiv();
    btnsDiv.style.marginTop = "10px";
    const okBtn = btnsDiv.createEl("button", { text: "Ok" });
    okBtn.style.marginRight = "0.5rem";
    okBtn.tabIndex = 0;
    okBtn.onClickEvent(async () => await this.onConfirmCallback());
    const cancelBtn = btnsDiv.createEl("button", { text: "Cancel" });
    cancelBtn.tabIndex = 1;
    cancelBtn.onClickEvent(() => {
      if (this.onCancelCallback) {
        this.onCancelCallback();
      }
      this.close();
    });
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
// src/settings/emotionGroup/emotionGroupEditModal.ts
var import_obsidian3 = require("obsidian");

// MARK: dépendances (pas compris ni si utile et à garder par rapport aux autres codes)
// node_modules/svelte/internal/index.mjs
function noop() {
}
function assign(tar, src) {
  for (const k in src)
    tar[k] = src[k];
  return tar;
}
function run(fn2) {
  return fn2();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function is_function(thing) {
  return typeof thing === "function";
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function is_empty(obj) {
  return Object.keys(obj).length === 0;
}
function exclude_internal_props(props) {
  const result = {};
  for (const k in props)
    if (k[0] !== "$")
      result[k] = props[k];
  return result;
}
var is_hydrating = false;
function start_hydrating() {
  is_hydrating = true;
}
function end_hydrating() {
  is_hydrating = false;
}
function append(target, node) {
  target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
  const append_styles_to = get_root_for_style(target);
  if (!append_styles_to.getElementById(style_sheet_id)) {
    const style = element("style");
    style.id = style_sheet_id;
    style.textContent = styles;
    append_stylesheet(append_styles_to, style);
  }
}
function get_root_for_style(node) {
  if (!node)
    return document;
  const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
  if (root && root.host) {
    return root;
  }
  return node.ownerDocument;
}
function append_stylesheet(node, style) {
  append(node.head || node, style);
  return style.sheet;
}
function insert(target, node, anchor) {
  target.insertBefore(node, anchor || null);
}
function detach(node) {
  if (node.parentNode) {
    node.parentNode.removeChild(node);
  }
}
function destroy_each(iterations, detaching) {
  for (let i = 0; i < iterations.length; i += 1) {
    if (iterations[i])
      iterations[i].d(detaching);
  }
}
function element(name2) {
  return document.createElement(name2);
}
function text(data) {
  return document.createTextNode(data);
}
function space() {
  return text(" ");
}
function empty() {
  return text("");
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
  if (value == null)
    node.removeAttribute(attribute);
  else if (node.getAttribute(attribute) !== value)
    node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
  const descriptors2 = Object.getOwnPropertyDescriptors(node.__proto__);
  for (const key in attributes) {
    if (attributes[key] == null) {
      node.removeAttribute(key);
    } else if (key === "style") {
      node.style.cssText = attributes[key];
    } else if (key === "__value") {
      node.value = node[key] = attributes[key];
    } else if (descriptors2[key] && descriptors2[key].set) {
      node[key] = attributes[key];
    } else {
      attr(node, key, attributes[key]);
    }
  }
}
function to_number(value) {
  return value === "" ? null : +value;
}
function children(element2) {
  return Array.from(element2.childNodes);
}
function set_data(text2, data) {
  data = "" + data;
  if (text2.data === data)
    return;
  text2.data = data;
}
function set_input_value(input, value) {
  input.value = value == null ? "" : value;
}
function set_style(node, key, value, important) {
  if (value === null) {
    node.style.removeProperty(key);
  } else {
    node.style.setProperty(key, value, important ? "important" : "");
  }
}
function toggle_class(element2, name2, toggle) {
  element2.classList[toggle ? "add" : "remove"](name2);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
  const e = document.createEvent("CustomEvent");
  e.initCustomEvent(type, bubbles, cancelable, detail);
  return e;
}
var current_component;
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function onMount(fn2) {
  get_current_component().$$.on_mount.push(fn2);
}
function afterUpdate(fn2) {
  get_current_component().$$.after_update.push(fn2);
}
function onDestroy(fn2) {
  get_current_component().$$.on_destroy.push(fn2);
}
function createEventDispatcher() {
  const component = get_current_component();
  return (type, detail, { cancelable = false } = {}) => {
    const callbacks = component.$$.callbacks[type];
    if (callbacks) {
      const event = custom_event(type, detail, { cancelable });
      callbacks.slice().forEach((fn2) => {
        fn2.call(component, event);
      });
      return !event.defaultPrevented;
    }
    return true;
  };
}
function bubble(component, event) {
  const callbacks = component.$$.callbacks[event.type];
  if (callbacks) {
    callbacks.slice().forEach((fn2) => fn2.call(this, event));
  }
}
var dirty_components = [];
var binding_callbacks = [];
var render_callbacks = [];
var flush_callbacks = [];
var resolved_promise = /* @__PURE__ */ Promise.resolve();
var update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function add_render_callback(fn2) {
  render_callbacks.push(fn2);
}
function add_flush_callback(fn2) {
  flush_callbacks.push(fn2);
}
var seen_callbacks = /* @__PURE__ */ new Set();
var flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback2 = render_callbacks[i];
      if (!seen_callbacks.has(callback2)) {
        seen_callbacks.add(callback2);
        callback2();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
function flush_render_callbacks(fns) {
  const filtered = [];
  const targets = [];
  render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
  targets.forEach((c) => c());
  render_callbacks = filtered;
}
var outroing = /* @__PURE__ */ new Set();
var outros;
function group_outros() {
  outros = {
    r: 0,
    c: [],
    p: outros
    // parent group
  };
}
function check_outros() {
  if (!outros.r) {
    run_all(outros.c);
  }
  outros = outros.p;
}
function transition_in(block, local) {
  if (block && block.i) {
    outroing.delete(block);
    block.i(local);
  }
}
function transition_out(block, local, detach2, callback2) {
  if (block && block.o) {
    if (outroing.has(block))
      return;
    outroing.add(block);
    outros.c.push(() => {
      outroing.delete(block);
      if (callback2) {
        if (detach2)
          block.d(1);
        callback2();
      }
    });
    block.o(local);
  } else if (callback2) {
    callback2();
  }
}
var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
var _boolean_attributes = [
  "allowfullscreen",
  "allowpaymentrequest",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected"
];
var boolean_attributes = /* @__PURE__ */ new Set([..._boolean_attributes]);
function bind(component, name2, callback2) {
  const index = component.$$.props[name2];
  if (index !== void 0) {
    component.$$.bound[index] = callback2;
    callback2(component.$$.ctx[index]);
  }
}
function create_component(block) {
  block && block.c();
}
function mount_component(component, target, anchor, customElement) {
  const { fragment, after_update } = component.$$;
  fragment && fragment.m(target, anchor);
  if (!customElement) {
    add_render_callback(() => {
      const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
      if (component.$$.on_destroy) {
        component.$$.on_destroy.push(...new_on_destroy);
      } else {
        run_all(new_on_destroy);
      }
      component.$$.on_mount = [];
    });
  }
  after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
  const $$ = component.$$;
  if ($$.fragment !== null) {
    flush_render_callbacks($$.after_update);
    run_all($$.on_destroy);
    $$.fragment && $$.fragment.d(detaching);
    $$.on_destroy = $$.fragment = null;
    $$.ctx = [];
  }
}
function make_dirty(component, i) {
  if (component.$$.dirty[0] === -1) {
    dirty_components.push(component);
    schedule_update();
    component.$$.dirty.fill(0);
  }
  component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance11, create_fragment11, not_equal, props, append_styles2, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    // state
    props,
    update: noop,
    not_equal,
    bound: blank_object(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
    // everything else
    callbacks: blank_object(),
    dirty,
    skip_bound: false,
    root: options.target || parent_component.$$.root
  };
  append_styles2 && append_styles2($$.root);
  let ready = false;
  $$.ctx = instance11 ? instance11(component, options.props || {}, (i, ret, ...rest) => {
    const value = rest.length ? rest[0] : ret;
    if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
      if (!$$.skip_bound && $$.bound[i])
        $$.bound[i](value);
      if (ready)
        make_dirty(component, i);
    }
    return ret;
  }) : [];
  $$.update();
  ready = true;
  run_all($$.before_update);
  $$.fragment = create_fragment11 ? create_fragment11($$.ctx) : false;
  if (options.target) {
    if (options.hydrate) {
      start_hydrating();
      const nodes = children(options.target);
      $$.fragment && $$.fragment.l(nodes);
      nodes.forEach(detach);
    } else {
      $$.fragment && $$.fragment.c();
    }
    if (options.intro)
      transition_in(component.$$.fragment);
    mount_component(component, options.target, options.anchor, options.customElement);
    end_hydrating();
    flush();
  }
  set_current_component(parent_component);
}
var SvelteElement;
if (typeof HTMLElement === "function") {
  SvelteElement = class extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      const { on_mount } = this.$$;
      this.$$.on_disconnect = on_mount.map(run).filter(is_function);
      for (const key in this.$$.slotted) {
        this.appendChild(this.$$.slotted[key]);
      }
    }
    attributeChangedCallback(attr2, _oldValue, newValue) {
      this[attr2] = newValue;
    }
    disconnectedCallback() {
      run_all(this.$$.on_disconnect);
    }
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback2) {
      if (!is_function(callback2)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback2);
      return () => {
        const index = callbacks.indexOf(callback2);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };
}
var SvelteComponent = class {
  $destroy() {
    destroy_component(this, 1);
    this.$destroy = noop;
  }
  $on(type, callback2) {
    if (!is_function(callback2)) {
      return noop;
    }
    const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
    callbacks.push(callback2);
    return () => {
      const index = callbacks.indexOf(callback2);
      if (index !== -1)
        callbacks.splice(index, 1);
    };
  }
  $set($$props) {
    if (this.$$set && !is_empty($$props)) {
      this.$$.skip_bound = true;
      this.$$set($$props);
      this.$$.skip_bound = false;
    }
  }
};

// node_modules/svelte/store/index.mjs
var subscriber_queue = [];
function writable(value, start2 = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set2(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update2(fn2) {
    set2(fn2(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start2(set2) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set: set2, update: update2, subscribe: subscribe2 };
}

// MARK: fin des dépendances


// MARK: store ? (pas compris ni son implémentation)
// src/store.ts
var plugin = writable();
var store_default = { plugin };

// MARK: pour éditer les groupes d'émotions (pas compris)
// src/settings/emotionGroup/EmotionGroupEditComponent.svelte
function add_css(target) {
  append_styles(target, "svelte-1qnq7kl", ".edit-modal.svelte-1qnq7kl{height:100%;min-height:300px;display:flex;flex-direction:column;justify-content:space-between}.edit-modal-section.svelte-1qnq7kl{display:flex;flex-direction:row;justify-content:space-between}#emotionsInput.svelte-1qnq7kl{min-height:120px}");
}
function create_fragment(ctx) {
  let div4;
  let div0;
  let label0;
  let t1;
  let input0;
  let t2;
  let div1;
  let label1;
  let t4;
  let input1;
  let t5;
  let div2;
  let label2;
  let t7;
  let textarea;
  let textarea_value_value;
  let t8;
  let div3;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      div4 = element("div");
      div0 = element("div");
      label0 = element("label");
      label0.textContent = "Group name";
      t1 = space();
      input0 = element("input");
      t2 = space();
      div1 = element("div");
      label1 = element("label");
      label1.textContent = "Background color";
      t4 = space();
      input1 = element("input");
      t5 = space();
      div2 = element("div");
      label2 = element("label");
      label2.textContent = "Emotions (separated by commas or newlines)";
      t7 = space();
      textarea = element("textarea");
      t8 = space();
      div3 = element("div");
      button = element("button");
      button.textContent = "Save";
      attr(label0, "for", "nameInput");
      attr(input0, "id", "nameInput");
      attr(input0, "type", "text");
      attr(div0, "class", "edit-modal-section svelte-1qnq7kl");
      attr(label1, "for", "colorInput");
      attr(input1, "id", "colorInput");
      attr(input1, "type", "color");
      attr(div1, "class", "edit-modal-section svelte-1qnq7kl");
      attr(label2, "for", "emotionsInput");
      attr(textarea, "id", "emotionsInput");
      textarea.value = textarea_value_value = /*emotionGroup*/
      ctx[0].emotions.join("\n");
      attr(textarea, "class", "svelte-1qnq7kl");
      attr(div2, "class", "edit-modal-section svelte-1qnq7kl");
      attr(div4, "class", "edit-modal svelte-1qnq7kl");
    },
    m(target, anchor) {
      insert(target, div4, anchor);
      append(div4, div0);
      append(div0, label0);
      append(div0, t1);
      append(div0, input0);
      set_input_value(
        input0,
        /*emotionGroup*/
        ctx[0].name
      );
      append(div4, t2);
      append(div4, div1);
      append(div1, label1);
      append(div1, t4);
      append(div1, input1);
      set_input_value(
        input1,
        /*emotionGroup*/
        ctx[0].color
      );
      append(div4, t5);
      append(div4, div2);
      append(div2, label2);
      append(div2, t7);
      append(div2, textarea);
      append(div4, t8);
      append(div4, div3);
      append(div3, button);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[4]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[5]
          ),
          listen(
            textarea,
            "change",
            /*onEmotionsChange*/
            ctx[1]
          ),
          listen(
            button,
            "click",
            /*save*/
            ctx[2]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*emotionGroup*/
      1 && input0.value !== /*emotionGroup*/
      ctx2[0].name) {
        set_input_value(
          input0,
          /*emotionGroup*/
          ctx2[0].name
        );
      }
      if (dirty & /*emotionGroup*/
      1) {
        set_input_value(
          input1,
          /*emotionGroup*/
          ctx2[0].color
        );
      }
      if (dirty & /*emotionGroup*/
      1 && textarea_value_value !== (textarea_value_value = /*emotionGroup*/
      ctx2[0].emotions.join("\n"))) {
        textarea.value = textarea_value_value;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div4);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { emotionGroup } = $$props;
  let { closeModalFunc } = $$props;
  let plugin2;
  store_default.plugin.subscribe((p) => {
    plugin2 = p;
  });
  function onEmotionsChange(event) {
    $$invalidate(0, emotionGroup.emotions = event.target.value.split(/[\n,]/g), emotionGroup);
  }
  function save() {
    plugin2.emotionService.saveEmotionsGroup(emotionGroup);
    closeModalFunc();
  }
  function input0_input_handler() {
    emotionGroup.name = this.value;
    $$invalidate(0, emotionGroup);
  }
  function input1_input_handler() {
    emotionGroup.color = this.value;
    $$invalidate(0, emotionGroup);
  }
  $$self.$$set = ($$props2) => {
    if ("emotionGroup" in $$props2)
      $$invalidate(0, emotionGroup = $$props2.emotionGroup);
    if ("closeModalFunc" in $$props2)
      $$invalidate(3, closeModalFunc = $$props2.closeModalFunc);
  };
  return [
    emotionGroup,
    onEmotionsChange,
    save,
    closeModalFunc,
    input0_input_handler,
    input1_input_handler
  ];
}
var EmotionGroupEditComponent = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { emotionGroup: 0, closeModalFunc: 3 }, add_css);
  }
};
var EmotionGroupEditComponent_default = EmotionGroupEditComponent;


// src/settings/emotionGroup/emotionGroupEditModal.ts
var EmotionGroupEditModal = class extends import_obsidian3.Modal {
  constructor(_plugin, _emotionGroup, app2) {
    super(app2);
    this._plugin = _plugin;
    this._emotionGroup = _emotionGroup;
  }
  onOpen() {
    store_default.plugin.set(this._plugin);
    this.modalEl.addClass("mood-tracker-modal");
    this.titleEl.innerText = "Edit emotion group";
    this.component = new EmotionGroupEditComponent_default({
      target: this.contentEl,
      props: {
        emotionGroup: this._emotionGroup,
        closeModalFunc: () => this.close()
      }
    });
  }
  onClose() {
    this.component.$destroy();
  }
};


// src/settings/emotionGroup/emotionGroupDeleteModal.ts
var EmotionGroupDeleteModal = class extends ConfirmationModal {
  constructor(app2, plugin2, settingsTab, emotionGroup) {
    super(
      app2,
      `Delete emotion group "${emotionGroup.name}" ?`,
      () => this.onConfirmation()
    );
    this.plugin = plugin2;
    this.settingsTab = settingsTab;
    this.emotionGroup = emotionGroup;
  }
  async onConfirmation() {
    this.plugin.settings.emotionGroups.remove(this.emotionGroup);
    this.plugin.saveSettings();
    this.settingsTab.display();
    this.close();
  }
};


// src/settings/moodRatingLabel/moodRatingLabelsEditModal.ts
var import_obsidian4 = require("obsidian");

// MARK: pour éditer les moods (pas compris)
// src/settings/moodRatingLabel/MoodRatingLabelsEditComponent.svelte
function add_css2(target) {
  append_styles(target, "svelte-j6wv8j", ".labels-aligned.svelte-j6wv8j div.svelte-j6wv8j{display:flex;flex-direction:row;justify-content:space-between}.mv-5.svelte-j6wv8j.svelte-j6wv8j{margin:5px 0}");
}
function create_fragment2(ctx) {
  let div11;
  let div6;
  let div0;
  let label0;
  let t1;
  let input0;
  let t2;
  let div1;
  let label1;
  let t4;
  let input1;
  let t5;
  let div2;
  let label2;
  let t7;
  let input2;
  let t8;
  let div3;
  let label3;
  let t10;
  let input3;
  let t11;
  let div4;
  let label4;
  let t13;
  let input4;
  let t14;
  let div5;
  let label5;
  let t15;
  let t16_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelSize + ""
  );
  let t16;
  let t17;
  let t18;
  let input5;
  let t19;
  let div9;
  let div7;
  let t21;
  let div8;
  let t22_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelDict[1] + ""
  );
  let t22;
  let t23;
  let t24_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelDict[2] + ""
  );
  let t24;
  let t25;
  let t26_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelDict[3] + ""
  );
  let t26;
  let t27;
  let t28_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelDict[4] + ""
  );
  let t28;
  let t29;
  let t30_value = (
    /*plugin*/
    ctx[0].settings.moodRatingLabelDict[5] + ""
  );
  let t30;
  let t31;
  let div10;
  let button;
  let mounted;
  let dispose;
  return {
    c() {
      div11 = element("div");
      div6 = element("div");
      div0 = element("div");
      label0 = element("label");
      label0.textContent = "Very Good";
      t1 = space();
      input0 = element("input");
      t2 = space();
      div1 = element("div");
      label1 = element("label");
      label1.textContent = "Good";
      t4 = space();
      input1 = element("input");
      t5 = space();
      div2 = element("div");
      label2 = element("label");
      label2.textContent = "Ok";
      t7 = space();
      input2 = element("input");
      t8 = space();
      div3 = element("div");
      label3 = element("label");
      label3.textContent = "Bad";
      t10 = space();
      input3 = element("input");
      t11 = space();
      div4 = element("div");
      label4 = element("label");
      label4.textContent = "Very bad";
      t13 = space();
      input4 = element("input");
      t14 = space();
      div5 = element("div");
      label5 = element("label");
      t15 = text("Label size: ");
      t16 = text(t16_value);
      t17 = text(" rem");
      t18 = space();
      input5 = element("input");
      t19 = space();
      div9 = element("div");
      div7 = element("div");
      div7.textContent = "Preview:";
      t21 = space();
      div8 = element("div");
      t22 = text(t22_value);
      t23 = space();
      t24 = text(t24_value);
      t25 = space();
      t26 = text(t26_value);
      t27 = space();
      t28 = text(t28_value);
      t29 = space();
      t30 = text(t30_value);
      t31 = space();
      div10 = element("div");
      button = element("button");
      button.textContent = "Save";
      attr(label0, "for", "veryGood");
      attr(input0, "id", "veryGood");
      attr(input0, "type", "text");
      attr(div0, "class", "mv-5 svelte-j6wv8j");
      attr(label1, "for", "good");
      attr(input1, "id", "good");
      attr(input1, "type", "text");
      attr(div1, "class", "mv-5 svelte-j6wv8j");
      attr(label2, "for", "ok");
      attr(input2, "id", "ok");
      attr(input2, "type", "text");
      attr(div2, "class", "mv-5 svelte-j6wv8j");
      attr(label3, "for", "bad");
      attr(input3, "id", "bad");
      attr(input3, "type", "text");
      attr(div3, "class", "mv-5 svelte-j6wv8j");
      attr(label4, "for", "veryBad");
      attr(input4, "id", "veryBad");
      attr(input4, "type", "text");
      attr(div4, "class", "mv-5 svelte-j6wv8j");
      attr(label5, "for", "size");
      attr(input5, "id", "size");
      attr(input5, "type", "range");
      attr(input5, "min", "0.5");
      attr(input5, "max", "5");
      attr(input5, "step", "0.5");
      attr(div5, "class", "mv-5 svelte-j6wv8j");
      attr(div6, "class", "labels-aligned svelte-j6wv8j");
      set_style(
        div8,
        "font-size",
        /*plugin*/
        ctx[0].settings.moodRatingLabelSize + "rem"
      );
      attr(div9, "class", "mv-5 svelte-j6wv8j");
      attr(div11, "class", "edit-mood-labels-modal");
    },
    m(target, anchor) {
      insert(target, div11, anchor);
      append(div11, div6);
      append(div6, div0);
      append(div0, label0);
      append(div0, t1);
      append(div0, input0);
      set_input_value(
        input0,
        /*plugin*/
        ctx[0].settings.moodRatingLabelDict[5]
      );
      append(div6, t2);
      append(div6, div1);
      append(div1, label1);
      append(div1, t4);
      append(div1, input1);
      set_input_value(
        input1,
        /*plugin*/
        ctx[0].settings.moodRatingLabelDict[4]
      );
      append(div6, t5);
      append(div6, div2);
      append(div2, label2);
      append(div2, t7);
      append(div2, input2);
      set_input_value(
        input2,
        /*plugin*/
        ctx[0].settings.moodRatingLabelDict[3]
      );
      append(div6, t8);
      append(div6, div3);
      append(div3, label3);
      append(div3, t10);
      append(div3, input3);
      set_input_value(
        input3,
        /*plugin*/
        ctx[0].settings.moodRatingLabelDict[2]
      );
      append(div6, t11);
      append(div6, div4);
      append(div4, label4);
      append(div4, t13);
      append(div4, input4);
      set_input_value(
        input4,
        /*plugin*/
        ctx[0].settings.moodRatingLabelDict[1]
      );
      append(div6, t14);
      append(div6, div5);
      append(div5, label5);
      append(label5, t15);
      append(label5, t16);
      append(label5, t17);
      append(div5, t18);
      append(div5, input5);
      set_input_value(
        input5,
        /*plugin*/
        ctx[0].settings.moodRatingLabelSize
      );
      append(div11, t19);
      append(div11, div9);
      append(div9, div7);
      append(div9, t21);
      append(div9, div8);
      append(div8, t22);
      append(div8, t23);
      append(div8, t24);
      append(div8, t25);
      append(div8, t26);
      append(div8, t27);
      append(div8, t28);
      append(div8, t29);
      append(div8, t30);
      append(div11, t31);
      append(div11, div10);
      append(div10, button);
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[3]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[4]
          ),
          listen(
            input2,
            "input",
            /*input2_input_handler*/
            ctx[5]
          ),
          listen(
            input3,
            "input",
            /*input3_input_handler*/
            ctx[6]
          ),
          listen(
            input4,
            "input",
            /*input4_input_handler*/
            ctx[7]
          ),
          listen(
            input5,
            "change",
            /*input5_change_input_handler*/
            ctx[8]
          ),
          listen(
            input5,
            "input",
            /*input5_change_input_handler*/
            ctx[8]
          ),
          listen(
            button,
            "click",
            /*save*/
            ctx[1]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*plugin*/
      1 && input0.value !== /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[5]) {
        set_input_value(
          input0,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelDict[5]
        );
      }
      if (dirty & /*plugin*/
      1 && input1.value !== /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[4]) {
        set_input_value(
          input1,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelDict[4]
        );
      }
      if (dirty & /*plugin*/
      1 && input2.value !== /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[3]) {
        set_input_value(
          input2,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelDict[3]
        );
      }
      if (dirty & /*plugin*/
      1 && input3.value !== /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[2]) {
        set_input_value(
          input3,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelDict[2]
        );
      }
      if (dirty & /*plugin*/
      1 && input4.value !== /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[1]) {
        set_input_value(
          input4,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelDict[1]
        );
      }
      if (dirty & /*plugin*/
      1 && t16_value !== (t16_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelSize + ""))
        set_data(t16, t16_value);
      if (dirty & /*plugin*/
      1) {
        set_input_value(
          input5,
          /*plugin*/
          ctx2[0].settings.moodRatingLabelSize
        );
      }
      if (dirty & /*plugin*/
      1 && t22_value !== (t22_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[1] + ""))
        set_data(t22, t22_value);
      if (dirty & /*plugin*/
      1 && t24_value !== (t24_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[2] + ""))
        set_data(t24, t24_value);
      if (dirty & /*plugin*/
      1 && t26_value !== (t26_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[3] + ""))
        set_data(t26, t26_value);
      if (dirty & /*plugin*/
      1 && t28_value !== (t28_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[4] + ""))
        set_data(t28, t28_value);
      if (dirty & /*plugin*/
      1 && t30_value !== (t30_value = /*plugin*/
      ctx2[0].settings.moodRatingLabelDict[5] + ""))
        set_data(t30, t30_value);
      if (dirty & /*plugin*/
      1) {
        set_style(
          div8,
          "font-size",
          /*plugin*/
          ctx2[0].settings.moodRatingLabelSize + "rem"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div11);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance2($$self, $$props, $$invalidate) {
  let { closeModalFunc } = $$props;
  let plugin2;
  store_default.plugin.subscribe((p) => {
    $$invalidate(0, plugin2 = p);
  });
  function save() {
    plugin2.saveSettings();
    closeModalFunc();
  }
  function input0_input_handler() {
    plugin2.settings.moodRatingLabelDict[5] = this.value;
    $$invalidate(0, plugin2);
  }
  function input1_input_handler() {
    plugin2.settings.moodRatingLabelDict[4] = this.value;
    $$invalidate(0, plugin2);
  }
  function input2_input_handler() {
    plugin2.settings.moodRatingLabelDict[3] = this.value;
    $$invalidate(0, plugin2);
  }
  function input3_input_handler() {
    plugin2.settings.moodRatingLabelDict[2] = this.value;
    $$invalidate(0, plugin2);
  }
  function input4_input_handler() {
    plugin2.settings.moodRatingLabelDict[1] = this.value;
    $$invalidate(0, plugin2);
  }
  function input5_change_input_handler() {
    plugin2.settings.moodRatingLabelSize = to_number(this.value);
    $$invalidate(0, plugin2);
  }
  $$self.$$set = ($$props2) => {
    if ("closeModalFunc" in $$props2)
      $$invalidate(2, closeModalFunc = $$props2.closeModalFunc);
  };
  return [
    plugin2,
    save,
    closeModalFunc,
    input0_input_handler,
    input1_input_handler,
    input2_input_handler,
    input3_input_handler,
    input4_input_handler,
    input5_change_input_handler
  ];
}
var MoodRatingLabelsEditComponent = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance2, create_fragment2, safe_not_equal, { closeModalFunc: 2 }, add_css2);
  }
};
var MoodRatingLabelsEditComponent_default = MoodRatingLabelsEditComponent;

// src/settings/moodRatingLabel/moodRatingLabelsEditModal.ts
var MoodRatingLabelsEditModal = class extends import_obsidian4.Modal {
  constructor(_plugin, app2) {
    super(app2);
    this._plugin = _plugin;
  }
  onOpen() {
    store_default.plugin.set(this._plugin);
    this.titleEl.innerText = "Edit mood rating labels";
    this.component = new MoodRatingLabelsEditComponent_default({
      target: this.contentEl,
      props: {
        closeModalFunc: () => this.close()
      }
    });
  }
  onClose() {
    this.component.$destroy();
  }
};


// MARK: settings tab (un peu près compris)
// src/settings/settingsTab.ts
var MoodTrackerSettingsTab = class extends import_obsidian5.PluginSettingTab {
  constructor(_plugin, app2) {
    super(app2, _plugin);
    this._plugin = _plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    this.addTrackerModalTitleSetting();
    this.addMoodRatingLabelsSetting();
    this.addJournalPathSetting();
    this.addJournalLocation();
    this.addTemplateSetting();
    this.addUseEmotionsSetting();
    if (this._plugin.settings.useEmotions) {
      this.addEmotionsSetting();
    }
  }
  addTrackerModalTitleSetting() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Tracker modal title");
    setting.setDesc("Title for mood tracker modal");
    setting.addText((input) => {
      input.inputEl.style.width = "min(400px, 35vw)";
      input.setValue(this._plugin.settings.trackerModalTitle).onChange(async (value) => {
        this._plugin.settings.trackerModalTitle = value;
        await this._plugin.saveSettings();
      });
    });
  }
  addMoodRatingLabelsSetting() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Mood rating labels");
    setting.setDesc("Labels to use for mood rating. Used in tracker modal and stats.");
    setting.addButton((button) => {
      button.setButtonText("Edit").onClick(async () => {
        new MoodRatingLabelsEditModal(this._plugin, app).open();
      });
    });
  }
  addJournalPathSetting() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Note path");
    setting.descEl.innerHTML = `Use a static file path, or {{DATE}} variable.<br>
		Supports <a href="https://momentjs.com/docs/#/displaying/format/" target="_blank">moment.js formatting</a>.<br>
		Example: journals/daily/{{DATE:YYYY-MM-DD}}.md
		`;
    setting.addText((input) => {
      input.inputEl.style.width = "min(400px, 35vw)";
      input.setValue(this._plugin.settings.journalFilePath).onChange(async (value) => {
        this._plugin.settings.journalFilePath = value;
        await this._plugin.saveSettings();
      });
    });
  }
  addJournalLocation() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Entry location");
    setting.descEl.innerHTML = `Where in the journal should the Mood-Tracker entry be placed?<br>
		Example: ## Mood Tracker
		`;
    setting.addText((input) => {
      input.inputEl.style.width = "min(400px, 35vw)";
      input.setValue(this._plugin.settings.journalPosition).onChange(async (value) => {
        this._plugin.settings.journalPosition = value;
        await this._plugin.saveSettings();
      });
    });
  }
  addTemplateSetting() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Template for inserting mood tracking entry in a note");
    setting.descEl.innerHTML = `Available variables:<br>
		{{DATE}} - date of entry <br>
		{{TIME}} - time of entry <br>
		{{ICON}} - entry's mood icon <br>
		{{NOTE}} - entry's note <br>
		{{EMOTIONS}} - comma-separated list of emotions, if any <br>
		`;
    setting.addText((input) => {
      input.inputEl.style.width = "min(400px, 35vw)";
      input.setValue(this._plugin.settings.entryTemplate).onChange(async (value) => {
        this._plugin.settings.entryTemplate = value;
        await this._plugin.saveSettings();
      });
    });
  }
  addUseEmotionsSetting() {
    const setting = new import_obsidian5.Setting(this.containerEl);
    setting.setName("Use emotions");
    setting.setDesc("Track more nuanced emotions in addition to simple mood rating");
    setting.addToggle((input) => {
      input.setValue(this._plugin.settings.useEmotions).onChange(async (value) => {
        this._plugin.settings.useEmotions = value;
        await this._plugin.saveSettings();
        this.display();
      });
    });
  }
  addEmotionsSetting() {
    var _a;
    const settingGroupEl = this.containerEl.createEl("div");
    settingGroupEl.createEl("h4", { text: "Emotions" });
    settingGroupEl.createEl("small", {
      text: "A list of emotions, separated by commas or newlines. You can define one or many emotion groups, each with own color, if needed."
    });
    for (const [
      index,
      emotionGroup
    ] of this._plugin.settings.emotionGroups.entries()) {
      const setting = new import_obsidian5.Setting(settingGroupEl);
      setting.setName((_a = emotionGroup.name) != null ? _a : `Emotions group ${index}`);
      setting.addExtraButton((cb) => {
        cb.setIcon("arrow-up").setTooltip("Move element up").setDisabled(index === 0).onClick(() => {
          if (index > 0) {
            const temp = this._plugin.settings.emotionGroups[index - 1].sortOrder;
            this._plugin.settings.emotionGroups[index - 1].sortOrder = emotionGroup.sortOrder;
            emotionGroup.sortOrder = temp;
            this._plugin.saveSettings();
            this.display();
          }
        });
      });
      setting.addExtraButton((cb) => {
        cb.setIcon("arrow-down").setTooltip("Move element down").setDisabled(index >= this._plugin.settings.emotionGroups.length - 1).onClick(() => {
          if (index < this._plugin.settings.emotionGroups.length - 1) {
            const temp = this._plugin.settings.emotionGroups[index + 1].sortOrder;
            this._plugin.settings.emotionGroups[index + 1].sortOrder = emotionGroup.sortOrder;
            emotionGroup.sortOrder = temp;
            this._plugin.saveSettings();
            this.display();
          }
        });
      });
      setting.addExtraButton((cb) => {
        cb.setIcon("edit").setTooltip("Edit Group").onClick(() => {
          const modal = new EmotionGroupEditModal(this._plugin, emotionGroup, this.app);
          modal.open();
          modal.onClose = () => {
            this.display();
          };
        });
      });
      setting.addExtraButton((cb) => {
        cb.setIcon("trash").setTooltip("Delete note set").onClick(async () => {
          new EmotionGroupDeleteModal(
            this.app,
            this._plugin,
            this,
            emotionGroup
          ).open();
        });
      });
    }
    const addMoodSectionBtn = new import_obsidian5.ButtonComponent(settingGroupEl);
    addMoodSectionBtn.setButtonText("Add Group");
    addMoodSectionBtn.onClick(async () => {
      this._plugin.settings.emotionGroups.push(new EmotionGroup());
      await this._plugin.saveSettings();
      this.display();
    });
  }
};


// MARK: tracker modal (compris)
// src/trackerModal/trackerModal.ts
var import_obsidian6 = require("obsidian");

// MARK: tracker modal (mood rating svelte) (pas compris ni son implémentation)
// src/trackerModal/MoodRating.svelte
function add_css3(target) {
  append_styles(target, "svelte-12cys5g", "span.svelte-12cys5g{margin:5px;transition:border 0.2s;border-radius:var(--radius-s);border:1px solid;border-color:transparent}span.svelte-12cys5g:hover,span.active.svelte-12cys5g{cursor:pointer;border-color:var(--text-faint);background-color:var(--color-base-40)}");
}
function create_fragment3(ctx) {
  let span;
  let t;
  let mounted;
  let dispose;
  return {
    c() {
      span = element("span");
      t = text(
        /*emoji*/
        ctx[0]
      );
      set_style(
        span,
        "font-size",
        /*fontSize*/
        ctx[2] + "rem"
      );
      attr(
        span,
        "title",
        /*title*/
        ctx[1]
      );
      attr(span, "class", "svelte-12cys5g");
      toggle_class(
        span,
        "active",
        /*isActive*/
        ctx[3] === true
      );
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
      if (!mounted) {
        dispose = [
          listen(
            span,
            "click",
            /*setRating*/
            ctx[4]
          ),
          listen(
            span,
            "keypress",
            /*setRating*/
            ctx[4]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*emoji*/
      1)
        set_data(
          t,
          /*emoji*/
          ctx2[0]
        );
      if (dirty & /*fontSize*/
      4) {
        set_style(
          span,
          "font-size",
          /*fontSize*/
          ctx2[2] + "rem"
        );
      }
      if (dirty & /*title*/
      2) {
        attr(
          span,
          "title",
          /*title*/
          ctx2[1]
        );
      }
      if (dirty & /*isActive*/
      8) {
        toggle_class(
          span,
          "active",
          /*isActive*/
          ctx2[3] === true
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance3($$self, $$props, $$invalidate) {
  let isActive;
  let { emoji = "" } = $$props;
  let { title = "" } = $$props;
  let { rating } = $$props;
  let { activeRating } = $$props;
  let { fontSize } = $$props;
  const dispatch = createEventDispatcher();
  function setRating() {
    dispatch("setRating", { rating: Number(rating) });
    1;
  }
  $$self.$$set = ($$props2) => {
    if ("emoji" in $$props2)
      $$invalidate(0, emoji = $$props2.emoji);
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("rating" in $$props2)
      $$invalidate(5, rating = $$props2.rating);
    if ("activeRating" in $$props2)
      $$invalidate(6, activeRating = $$props2.activeRating);
    if ("fontSize" in $$props2)
      $$invalidate(2, fontSize = $$props2.fontSize);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*activeRating, rating*/
    96) {
      $:
        $$invalidate(3, isActive = activeRating === Number(rating));
    }
  };
  return [emoji, title, fontSize, isActive, setRating, rating, activeRating];
}
var MoodRating = class extends SvelteComponent {
  constructor(options) {
    super();
    init(
      this,
      options,
      instance3,
      create_fragment3,
      safe_not_equal,
      {
        emoji: 0,
        title: 1,
        rating: 5,
        activeRating: 6,
        fontSize: 2
      },
      add_css3
    );
  }
};
var MoodRating_default = MoodRating;

// src/trackerModal/MoodSelector.svelte
function add_css4(target) {
  append_styles(target, "svelte-1vx9ttc", ".mood-section.svelte-1vx9ttc{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;align-items:center;padding:5px 0}.mood-item.svelte-1vx9ttc{margin:3px;padding:5px;border-radius:var(--radius-s);border:1px solid;cursor:pointer;filter:opacity(60%)}.svelte-1vx9ttc:not(.mood-item.active, .mood-item:hover){background-color:var(--modal-background) !important}.mood-item.active.svelte-1vx9ttc,.mood-item.svelte-1vx9ttc:hover{filter:opacity(100%);border:1px solid;box-shadow:var(--shadow-s)}");
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[9] = list[i];
  return child_ctx;
}
function create_each_block_1(ctx) {
  let span;
  let t_value = (
    /*mood*/
    ctx[9] + ""
  );
  let t;
  let mounted;
  let dispose;
  function click_handler(...args) {
    return (
      /*click_handler*/
      ctx[3](
        /*mood*/
        ctx[9],
        ...args
      )
    );
  }
  function keypress_handler(...args) {
    return (
      /*keypress_handler*/
      ctx[4](
        /*mood*/
        ctx[9],
        ...args
      )
    );
  }
  return {
    c() {
      span = element("span");
      t = text(t_value);
      attr(span, "class", "mood-item svelte-1vx9ttc");
      set_style(
        span,
        "border-color",
        /*moodSection*/
        ctx[6].color
      );
      set_style(
        span,
        "background-color",
        /*moodSection*/
        ctx[6].color
      );
      toggle_class(
        span,
        "active",
        /*activeMoods*/
        ctx[1].includes(
          /*mood*/
          ctx[9]
        )
      );
    },
    m(target, anchor) {
      insert(target, span, anchor);
      append(span, t);
      if (!mounted) {
        dispose = [
          listen(span, "click", click_handler),
          listen(span, "keypress", keypress_handler)
        ];
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & /*moodSections*/
      1 && t_value !== (t_value = /*mood*/
      ctx[9] + ""))
        set_data(t, t_value);
      if (dirty & /*moodSections*/
      1) {
        set_style(
          span,
          "border-color",
          /*moodSection*/
          ctx[6].color
        );
      }
      if (dirty & /*moodSections*/
      1) {
        set_style(
          span,
          "background-color",
          /*moodSection*/
          ctx[6].color
        );
      }
      if (dirty & /*activeMoods, moodSections*/
      3) {
        toggle_class(
          span,
          "active",
          /*activeMoods*/
          ctx[1].includes(
            /*mood*/
            ctx[9]
          )
        );
      }
    },
    d(detaching) {
      if (detaching)
        detach(span);
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let t;
  let each_value_1 = (
    /*moodSection*/
    ctx[6].emotions
  );
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t = space();
      attr(div, "class", "mood-section svelte-1vx9ttc");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      append(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*moodSections, activeMoods, toogleMood*/
      7) {
        each_value_1 = /*moodSection*/
        ctx2[6].emotions;
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, t);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value_1.length;
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_fragment4(ctx) {
  let div;
  let each_value = (
    /*moodSections*/
    ctx[0]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      attr(div, "class", "mood-selector svelte-1vx9ttc");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*moodSections, activeMoods, toogleMood*/
      7) {
        each_value = /*moodSections*/
        ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_each(each_blocks, detaching);
    }
  };
}
function instance4($$self, $$props, $$invalidate) {
  let { moodSections } = $$props;
  let { activeMoods } = $$props;
  const dispatch = createEventDispatcher();
  function toogleMood(mood) {
    dispatch("toggleMood", { mood });
    $$invalidate(0, moodSections);
  }
  const click_handler = (mood, e) => toogleMood(mood);
  const keypress_handler = (mood, e) => toogleMood(mood);
  $$self.$$set = ($$props2) => {
    if ("moodSections" in $$props2)
      $$invalidate(0, moodSections = $$props2.moodSections);
    if ("activeMoods" in $$props2)
      $$invalidate(1, activeMoods = $$props2.activeMoods);
  };
  return [moodSections, activeMoods, toogleMood, click_handler, keypress_handler];
}
var MoodSelector = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance4, create_fragment4, safe_not_equal, { moodSections: 0, activeMoods: 1 }, add_css4);
  }
};
var MoodSelector_default = MoodSelector;


// MARK: Date service ? (pas compris où c'est implémenté)
// src/services/dateService.ts
var DateService = class {
  static createDateString(date) {
    return window.moment(date).format("YYYY-MM-DD");
  }
  static createDateTimeString(date) {
    return window.moment(date).format("YYYY-MM-DDTHH:mm");
  }
};

// MARK: tracker modal (svelte) (pas compris)
// src/trackerModal/TrackerModal.svelte
function add_css5(target) {
  append_styles(target, "svelte-1yfab55", ".modal-inner-container.svelte-1yfab55>div.svelte-1yfab55{margin:0.5rem}.mood-rating-container.svelte-1yfab55.svelte-1yfab55{display:flex;flex-direction:row;align-items:center;justify-content:center;height:100%;width:100%}.note.svelte-1yfab55.svelte-1yfab55{width:100%;height:100%;resize:none;border:none;outline:none;padding:0.5rem;border:1px solid var(--background-modifier-border)}");
}
function create_if_block(ctx) {
  let div;
  let moodselector;
  let updating_activeMoods;
  let current;
  function moodselector_activeMoods_binding(value) {
    ctx[15](value);
  }
  let moodselector_props = { moodSections: (
    /*moodSections*/
    ctx[2]
  ) };
  if (
    /*entry*/
    ctx[0].emotions !== void 0
  ) {
    moodselector_props.activeMoods = /*entry*/
    ctx[0].emotions;
  }
  moodselector = new MoodSelector_default({ props: moodselector_props });
  binding_callbacks.push(() => bind(moodselector, "activeMoods", moodselector_activeMoods_binding));
  moodselector.$on(
    "toggleMood",
    /*handleToggleMood*/
    ctx[6]
  );
  return {
    c() {
      div = element("div");
      create_component(moodselector.$$.fragment);
      attr(div, "class", "feelings-container svelte-1yfab55");
    },
    m(target, anchor) {
      insert(target, div, anchor);
      mount_component(moodselector, div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const moodselector_changes = {};
      if (dirty & /*moodSections*/
      4)
        moodselector_changes.moodSections = /*moodSections*/
        ctx2[2];
      if (!updating_activeMoods && dirty & /*entry*/
      1) {
        updating_activeMoods = true;
        moodselector_changes.activeMoods = /*entry*/
        ctx2[0].emotions;
        add_flush_callback(() => updating_activeMoods = false);
      }
      moodselector.$set(moodselector_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(moodselector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(moodselector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      destroy_component(moodselector);
    }
  };
}
function create_fragment5(ctx) {
  let div5;
  let div0;
  let h3;
  let t0_value = (
    /*plugin*/
    ctx[1].settings.trackerModalTitle + ""
  );
  let t0;
  let t1;
  let if_block = (
    /*plugin*/
    ctx[1].settings.useEmotions && create_if_block(ctx)
  );
  let t2;
  let div2;
  let textarea;
  let t3;
  let div1;
  let moodrating0;
  let updating_activeRating;
  let t4;
  let moodrating1;
  let updating_activeRating_1;
  let t5;
  let moodrating2;
  let updating_activeRating_2;
  let t6;
  let moodrating3;
  let updating_activeRating_3;
  let t7;
  let moodrating4;
  let updating_activeRating_4;
  let t8;
  let div4;
  let div3;
  let span;
  let input;
  let label;
  let t10;
  let button;
  let current;
  let mounted;
  let dispose;
  function moodrating0_activeRating_binding(value) {
    ctx[10](value);
  }
  let moodrating0_props = {
    emoji: (
      /*moodRatingLabelDict*/
      ctx[3][1]
    ),
    fontSize: (
      /*plugin*/
      ctx[1].settings.moodRatingLabelSize
    ),
    title: "very bad",
    rating: "1"
  };
  if (
    /*entry*/
    ctx[0].moodRating !== void 0
  ) {
    moodrating0_props.activeRating = /*entry*/
    ctx[0].moodRating;
  }
  moodrating0 = new MoodRating_default({ props: moodrating0_props });
  binding_callbacks.push(() => bind(moodrating0, "activeRating", moodrating0_activeRating_binding));
  moodrating0.$on(
    "setRating",
    /*handleSetRating*/
    ctx[5]
  );
  function moodrating1_activeRating_binding(value) {
    ctx[11](value);
  }
  let moodrating1_props = {
    emoji: (
      /*moodRatingLabelDict*/
      ctx[3][2]
    ),
    fontSize: (
      /*plugin*/
      ctx[1].settings.moodRatingLabelSize
    ),
    title: "bad",
    rating: "2"
  };
  if (
    /*entry*/
    ctx[0].moodRating !== void 0
  ) {
    moodrating1_props.activeRating = /*entry*/
    ctx[0].moodRating;
  }
  moodrating1 = new MoodRating_default({ props: moodrating1_props });
  binding_callbacks.push(() => bind(moodrating1, "activeRating", moodrating1_activeRating_binding));
  moodrating1.$on(
    "setRating",
    /*handleSetRating*/
    ctx[5]
  );
  function moodrating2_activeRating_binding(value) {
    ctx[12](value);
  }
  let moodrating2_props = {
    emoji: (
      /*moodRatingLabelDict*/
      ctx[3][3]
    ),
    fontSize: (
      /*plugin*/
      ctx[1].settings.moodRatingLabelSize
    ),
    title: "ok",
    rating: "3"
  };
  if (
    /*entry*/
    ctx[0].moodRating !== void 0
  ) {
    moodrating2_props.activeRating = /*entry*/
    ctx[0].moodRating;
  }
  moodrating2 = new MoodRating_default({ props: moodrating2_props });
  binding_callbacks.push(() => bind(moodrating2, "activeRating", moodrating2_activeRating_binding));
  moodrating2.$on(
    "setRating",
    /*handleSetRating*/
    ctx[5]
  );
  function moodrating3_activeRating_binding(value) {
    ctx[13](value);
  }
  let moodrating3_props = {
    emoji: (
      /*moodRatingLabelDict*/
      ctx[3][4]
    ),
    fontSize: (
      /*plugin*/
      ctx[1].settings.moodRatingLabelSize
    ),
    title: "good",
    rating: "4"
  };
  if (
    /*entry*/
    ctx[0].moodRating !== void 0
  ) {
    moodrating3_props.activeRating = /*entry*/
    ctx[0].moodRating;
  }
  moodrating3 = new MoodRating_default({ props: moodrating3_props });
  binding_callbacks.push(() => bind(moodrating3, "activeRating", moodrating3_activeRating_binding));
  moodrating3.$on(
    "setRating",
    /*handleSetRating*/
    ctx[5]
  );
  function moodrating4_activeRating_binding(value) {
    ctx[14](value);
  }
  let moodrating4_props = {
    emoji: (
      /*moodRatingLabelDict*/
      ctx[3][5]
    ),
    fontSize: (
      /*plugin*/
      ctx[1].settings.moodRatingLabelSize
    ),
    title: "very good",
    rating: "5"
  };
  if (
    /*entry*/
    ctx[0].moodRating !== void 0
  ) {
    moodrating4_props.activeRating = /*entry*/
    ctx[0].moodRating;
  }
  moodrating4 = new MoodRating_default({ props: moodrating4_props });
  binding_callbacks.push(() => bind(moodrating4, "activeRating", moodrating4_activeRating_binding));
  moodrating4.$on(
    "setRating",
    /*handleSetRating*/
    ctx[5]
  );
  return {
    c() {
      div5 = element("div");
      div0 = element("div");
      h3 = element("h3");
      t0 = text(t0_value);
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      div2 = element("div");
      textarea = element("textarea");
      t3 = space();
      div1 = element("div");
      create_component(moodrating0.$$.fragment);
      t4 = space();
      create_component(moodrating1.$$.fragment);
      t5 = space();
      create_component(moodrating2.$$.fragment);
      t6 = space();
      create_component(moodrating3.$$.fragment);
      t7 = space();
      create_component(moodrating4.$$.fragment);
      t8 = space();
      div4 = element("div");
      div3 = element("div");
      span = element("span");
      span.textContent = "date & time of entry ";
      input = element("input");
      label = element("label");
      t10 = space();
      button = element("button");
      button.textContent = "Save";
      set_style(div0, "display", "flex");
      set_style(div0, "justify-content", "center");
      attr(div0, "class", "svelte-1yfab55");
      attr(div2, "class", "note-container svelte-1yfab55");
      attr(textarea, "class", "note svelte-1yfab55");
      attr(textarea, "placeholder", "add a note about what you feel (optional)");
      attr(div1, "class", "mood-rating-container svelte-1yfab55");
      attr(input, "id", "datetime");
      attr(input, "type", "datetime-local");
      input.value = /*dateTimeString*/ ctx[4];
      set_style(input, "cursor", "pointer");
      attr(label, "for", "datetime");
      set_style(div3, "display", "flex");
      set_style(div3, "align-items", "center");
      set_style(div3, "gap", "0.8rem");
      set_style(button, "cursor", "pointer");
      set_style(div4, "display", "flex");
      set_style(div4, "justify-content", "space-between");
      attr(div4, "class", "svelte-1yfab55");
      attr(div5, "class", "modal-inner-container svelte-1yfab55");
    },
    m(target, anchor) {
      insert(target, div5, anchor);
      append(div5, div0);
      append(div0, h3);
      append(h3, t0);
      append(div5, t1);
      if (if_block) if_block.m(div5, null);
      append(div5, t2);
      append(div5, div2);
      append(div2, textarea);
      set_input_value(textarea, /*entry*/ ctx[0].note);
      append(div5, t3);
      append(div5, div1);
      mount_component(moodrating0, div1, null);
      append(div1, t4);
      mount_component(moodrating1, div1, null);
      append(div1, t5);
      mount_component(moodrating2, div1, null);
      append(div1, t6);
      mount_component(moodrating3, div1, null);
      append(div1, t7);
      mount_component(moodrating4, div1, null);
      append(div5, t8);
      append(div5, div4);
      append(div4, div3);
      append(div3, span);
      append(div3, input);
      append(div3, label);
      append(div4, t10);
      append(div4, button);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            textarea,
            "input",
            /*textarea_input_handler*/
            ctx[16]
          ),
          listen(
            input,
            "change",
            /*handleDateTimeChange*/
            ctx[7]
          ),
          listen(
            button,
            "click",
            /*saveEntry*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & /*plugin*/
      2) && t0_value !== (t0_value = /*plugin*/
      ctx2[1].settings.trackerModalTitle + ""))
        set_data(t0, t0_value);
      const moodrating0_changes = {};
      if (dirty & /*moodRatingLabelDict*/
      8)
        moodrating0_changes.emoji = /*moodRatingLabelDict*/
        ctx2[3][1];
      if (dirty & /*plugin*/
      2)
        moodrating0_changes.fontSize = /*plugin*/
        ctx2[1].settings.moodRatingLabelSize;
      if (!updating_activeRating && dirty & /*entry*/
      1) {
        updating_activeRating = true;
        moodrating0_changes.activeRating = /*entry*/
        ctx2[0].moodRating;
        add_flush_callback(() => updating_activeRating = false);
      }
      moodrating0.$set(moodrating0_changes);
      const moodrating1_changes = {};
      if (dirty & /*moodRatingLabelDict*/
      8)
        moodrating1_changes.emoji = /*moodRatingLabelDict*/
        ctx2[3][2];
      if (dirty & /*plugin*/
      2)
        moodrating1_changes.fontSize = /*plugin*/
        ctx2[1].settings.moodRatingLabelSize;
      if (!updating_activeRating_1 && dirty & /*entry*/
      1) {
        updating_activeRating_1 = true;
        moodrating1_changes.activeRating = /*entry*/
        ctx2[0].moodRating;
        add_flush_callback(() => updating_activeRating_1 = false);
      }
      moodrating1.$set(moodrating1_changes);
      const moodrating2_changes = {};
      if (dirty & /*moodRatingLabelDict*/
      8)
        moodrating2_changes.emoji = /*moodRatingLabelDict*/
        ctx2[3][3];
      if (dirty & /*plugin*/
      2)
        moodrating2_changes.fontSize = /*plugin*/
        ctx2[1].settings.moodRatingLabelSize;
      if (!updating_activeRating_2 && dirty & /*entry*/
      1) {
        updating_activeRating_2 = true;
        moodrating2_changes.activeRating = /*entry*/
        ctx2[0].moodRating;
        add_flush_callback(() => updating_activeRating_2 = false);
      }
      moodrating2.$set(moodrating2_changes);
      const moodrating3_changes = {};
      if (dirty & /*moodRatingLabelDict*/
      8)
        moodrating3_changes.emoji = /*moodRatingLabelDict*/
        ctx2[3][4];
      if (dirty & /*plugin*/
      2)
        moodrating3_changes.fontSize = /*plugin*/
        ctx2[1].settings.moodRatingLabelSize;
      if (!updating_activeRating_3 && dirty & /*entry*/
      1) {
        updating_activeRating_3 = true;
        moodrating3_changes.activeRating = /*entry*/
        ctx2[0].moodRating;
        add_flush_callback(() => updating_activeRating_3 = false);
      }
      moodrating3.$set(moodrating3_changes);
      const moodrating4_changes = {};
      if (dirty & /*moodRatingLabelDict*/
      8)
        moodrating4_changes.emoji = /*moodRatingLabelDict*/
        ctx2[3][5];
      if (dirty & /*plugin*/
      2)
        moodrating4_changes.fontSize = /*plugin*/
        ctx2[1].settings.moodRatingLabelSize;
      if (!updating_activeRating_4 && dirty & /*entry*/
      1) {
        updating_activeRating_4 = true;
        moodrating4_changes.activeRating = /*entry*/
        ctx2[0].moodRating;
        add_flush_callback(() => updating_activeRating_4 = false);
      }
      moodrating4.$set(moodrating4_changes);
      if (
        /*plugin*/
        ctx2[1].settings.useEmotions
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*plugin*/
          2) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div5, t8);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
      if (dirty & /*entry*/
      1) {
        set_input_value(
          textarea,
          /*entry*/
          ctx2[0].note
        );
      }
      if (!current || dirty & /*dateTimeString*/
      16) {
        input.value = /*dateTimeString*/
        ctx2[4];
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(moodrating0.$$.fragment, local);
      transition_in(moodrating1.$$.fragment, local);
      transition_in(moodrating2.$$.fragment, local);
      transition_in(moodrating3.$$.fragment, local);
      transition_in(moodrating4.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(moodrating0.$$.fragment, local);
      transition_out(moodrating1.$$.fragment, local);
      transition_out(moodrating2.$$.fragment, local);
      transition_out(moodrating3.$$.fragment, local);
      transition_out(moodrating4.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div5);
      destroy_component(moodrating0);
      destroy_component(moodrating1);
      destroy_component(moodrating2);
      destroy_component(moodrating3);
      destroy_component(moodrating4);
      if (if_block)
        if_block.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance5($$self, $$props, $$invalidate) {
  let dateTimeString;
  let plugin2;
  let moodSections = [];
  let moodRatingLabelDict = {};
  let insertToNote = false;
  let { entry } = $$props;
  store_default.plugin.subscribe((p) => {
    $$invalidate(2, moodSections = p.settings.emotionGroups);
    $$invalidate(1, plugin2 = p);
    $$invalidate(3, moodRatingLabelDict = p.settings.moodRatingLabelDict);
    insertToNote = true;
  });
  function handleSetRating(event) {
    $$invalidate(0, entry.moodRating = Number(event.detail.rating), entry);
  }
  function handleToggleMood(event) {
    if (entry.emotions.includes(event.detail.mood)) {
      $$invalidate(0, entry.emotions = entry.emotions.filter((m) => m !== event.detail.mood), entry);
    } else {
      entry.emotions.push(event.detail.mood);
    }
  }
  function handleDateTimeChange(event) {
    $$invalidate(0, entry.dateTime = window.moment(event.target.value).toDate(), entry);
  }
  function saveEntry() {
    return __awaiter(this, void 0, void 0, function* () {
      if (insertToNote) {
        plugin2.noteService.addEntryToJournal(entry);
      }
      closeModalFunc();
    });
  }
  let { closeModalFunc } = $$props;
  function moodrating0_activeRating_binding(value) {
    if ($$self.$$.not_equal(entry.moodRating, value)) {
      entry.moodRating = value;
      $$invalidate(0, entry);
    }
  }
  function moodrating1_activeRating_binding(value) {
    if ($$self.$$.not_equal(entry.moodRating, value)) {
      entry.moodRating = value;
      $$invalidate(0, entry);
    }
  }
  function moodrating2_activeRating_binding(value) {
    if ($$self.$$.not_equal(entry.moodRating, value)) {
      entry.moodRating = value;
      $$invalidate(0, entry);
    }
  }
  function moodrating3_activeRating_binding(value) {
    if ($$self.$$.not_equal(entry.moodRating, value)) {
      entry.moodRating = value;
      $$invalidate(0, entry);
    }
  }
  function moodrating4_activeRating_binding(value) {
    if ($$self.$$.not_equal(entry.moodRating, value)) {
      entry.moodRating = value;
      $$invalidate(0, entry);
    }
  }
  function moodselector_activeMoods_binding(value) {
    if ($$self.$$.not_equal(entry.emotions, value)) {
      entry.emotions = value;
      $$invalidate(0, entry);
    }
  }
  function textarea_input_handler() {
    entry.note = this.value;
    $$invalidate(0, entry);
  }
  $$self.$$set = ($$props2) => {
    if ("entry" in $$props2)
      $$invalidate(0, entry = $$props2.entry);
    if ("closeModalFunc" in $$props2)
      $$invalidate(9, closeModalFunc = $$props2.closeModalFunc);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*entry*/
    1) {
      $:
        $$invalidate(4, dateTimeString = DateService.createDateTimeString(entry.dateTime));
    }
  };
  return [
    entry,
    plugin2,
    moodSections,
    moodRatingLabelDict,
    dateTimeString,
    handleSetRating,
    handleToggleMood,
    handleDateTimeChange,
    saveEntry,
    closeModalFunc,
    moodrating0_activeRating_binding,
    moodrating1_activeRating_binding,
    moodrating2_activeRating_binding,
    moodrating3_activeRating_binding,
    moodrating4_activeRating_binding,
    moodselector_activeMoods_binding,
    textarea_input_handler
  ];
}
var TrackerModal = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance5, create_fragment5, safe_not_equal, { entry: 0, closeModalFunc: 9 }, add_css5);
  }
};
var TrackerModal_default = TrackerModal;


// MARK: MoodTrackerEntry ? a l'air de définir les attributs d'une entrée ( pas compris le pourquoi)
// src/entities/MoodTrackerEntry.ts
var MoodTrackerEntry = class {
  constructor(moodRating = 3, emotions = [], note = "", dateTime = new Date()) {
    this.id = crypto.randomUUID();
    this.dateTime = dateTime;
    this.moodRating = Number(moodRating);
    this.emotions = emotions;
    this.note = note;
  }
};

// MARK: tracker modal (encore) (pas compris  ni son implémentation)
// src/trackerModal/trackerModal.ts
var MoodTrackerModal = class extends import_obsidian6.Modal {
  constructor(app2, plugin2, entry = new MoodTrackerEntry(), reopenStatsModalOnClose = false) {
    super(app2);
    this.plugin = plugin2;
    this.entry = entry;
    this.reopenStatsModalOnClose = reopenStatsModalOnClose;
  }
  async onOpen() {
    store_default.plugin.set(this.plugin);
    this.modalEl.addClass("mood-tracker-modal");
    this.modal = new TrackerModal_default({
      target: this.contentEl,
      props: {
        closeModalFunc: () => {
          if (this.reopenStatsModalOnClose) {
            this.plugin.openStatsModal(this.entry.dateTime);
          }
          this.close();
        },
        entry: this.entry
      }
    });
  }
  onClose() {
    this.modal.$destroy();
  }
};

// MARK: Import d'obsidian pour l'enrigstrement dans la note (compris)
// src/filesIntegration/fileService.ts
var import_obsidian8 = require("obsidian");

// MARK: modal qui propose de créer la note si manquante (compris mais pas l'implémentation)
// src/filesIntegration/createFileModal.ts
var CreateFileModal = class extends ConfirmationModal {
  constructor(app2, path, content) {
    super(app2, "File does not exist", () => this.createFile(path, content));
    this.setContent(`The file at location "${path}" doesn't exist.
Would you like to create it?`);
  }
  async createFile(path, content) {
    const { vault } = this.app;
    const directoryPath = path.substring(0, path.lastIndexOf("/"));
    if (directoryPath != "" && !vault.getFolderByPath(directoryPath)) {
      await vault.createFolder(directoryPath);
    }
    await vault.create(path, content);
    this.close();
  }
};

// MARK: Ajout de l'entrée dans la note (un peu près compris)
// src/filesIntegration/fileService.ts
var FileService = class {
  constructor(_plugin) {
    this._plugin = _plugin;
  }
  async addEntryToJournal(entry) {
    if (!this._plugin.settings.journalFilePath) {
      await this.appendToCurrentNote(entry);
    }
    const filePath = this.replaceVariablesInTemplatedPath(
      this._plugin.settings.journalFilePath,
      entry.dateTime
    );
    const file = this._plugin.app.vault.getFileByPath(filePath);
    if (file !== null) {
      await this.appendEntryToFile(entry, file);
      return;
    }
    const modal = new CreateFileModal(
      this._plugin.app,
      filePath,
      this.getEntryAsString(entry)
    );
    modal.open();
  }
  async appendToCurrentNote(entry) {
    const file = this._plugin.app.workspace.getActiveFile();
    this.appendEntryToFile(entry, file);
  }
  replaceVariablesInTemplatedPath(templatedPath, date) {
    const regex = /{{DATE:(.*?)}}/g;
    return templatedPath.replace(regex, (match, dateFormat) => {
      dateFormat != null ? dateFormat : dateFormat = "yyyy-MM-dd";
      return window.moment(date).format(dateFormat);
    });
  }
  async appendEntryToFile(entry, file) {
    if (!(file instanceof import_obsidian8.TFile)) {
        return;
    }
    const result = this.getEntryAsString(entry);
    const content = await this._plugin.app.vault.read(file);
    const contentArray = content.split("\n");
    let index = contentArray.indexOf(this._plugin.settings.journalPosition);
    if (index != -1 && index != contentArray.length && index + 1 != contentArray.length) {
        index = index + 1;
        let lastNonEmptyLineIndex = index;
        while (index < contentArray.length && !contentArray[index].startsWith("#")) {
            if (contentArray[index].trim() !== "") {
                lastNonEmptyLineIndex = index;
            }
            index = index + 1;
        }
        contentArray.splice(lastNonEmptyLineIndex + 1, 0, `${result}`);
        if (lastNonEmptyLineIndex + 2 < contentArray.length && contentArray[lastNonEmptyLineIndex + 2] !== "") {
            contentArray.splice(lastNonEmptyLineIndex + 2, 0, "");
        }
        this._plugin.app.vault.modify(file, contentArray.join("\n"));
    } else {
        if (index + 1 != contentArray.length) {
            this._plugin.showNotice(
                `could not find the selected position in your journal-file -> Adding mood to the bottom.`,
                5e3,
                `Mood Tracker`
            );
        }
        let original_content = content.replace(/\n+$/g, "");
        this._plugin.app.vault.modify(file, original_content + "\n" + result);
    }
    return;
  }
  getEntryAsString(entry) {
    const templ = this._plugin.settings.entryTemplate;
    return templ.replace("{{TIME}}", window.moment(entry.dateTime).format("HH:mm")).replace("{{DATE}}", window.moment(entry.dateTime).format("YYYY-MM-DD")).replace(
      "{{ICON}}",
      this._plugin.settings.moodRatingLabelDict[entry.moodRating]
    ).replace("{{EMOTIONS}}", entry.emotions.join(", ")).replace("{{NOTE}}", entry.note);
  }
};

// MARK: data integrity sercice ? (pas compris)
// src/services/dataIntegrityService.ts
var import_crypto2 = require("crypto");
var DataIntegrityService = class {
  safeMergeData(entries1, entries2) {
    const entryMap = /* @__PURE__ */ new Map();
    const addEntriesToMap = (entries) => {
      for (const entry of entries) {
        entryMap.set(entry.id, entry);
      }
    };
    addEntriesToMap(entries1);
    addEntriesToMap(entries2);
    return Array.from(entryMap.values());
  }
  fillMissingIds(emotionGroups) {
    emotionGroups.forEach((eg) => {
      if (!eg.id) {
        eg.id = (0, import_crypto2.randomUUID)();
      }
    });
  }
  legacyEmotionSectionsToEmotionGroups(emotionSections) {
    return emotionSections.map((x) => {
      var _a;
      const eg = new EmotionGroup();
      eg.color = x.color;
      eg.emotions = x.emotions;
      eg.name = (_a = x.name) != null ? _a : "unnamed group";
      eg.id = (0, import_crypto2.randomUUID)();
      return eg;
    });
  }
};

// MARK: émotions services, a l'air de gérer les groupes d'émotions (compris)
// src/services/emotionsService.ts
var EmotionsService = class {
  constructor(_plugin) {
    this._plugin = _plugin;
  }
  async saveEmotionsGroup(emotionGroup) {
    this._plugin.settings.emotionGroups.forEach((x) => {
      if (x.id === emotionGroup.id) {
        x = emotionGroup;
      }
    });
    await this._plugin.saveSettings();
  }
  async deleteEmotionsGroup(emotionGroup) {
    this._plugin.settings.emotionGroups.remove(emotionGroup);
    await this._plugin.saveSettings();
  }
  sortEmotionGroups(emotionGroups) {
    const maxSortOrder = emotionGroups.reduce((max2, group) => {
      if (group.sortOrder !== void 0 && group.sortOrder > max2) {
        return group.sortOrder;
      }
      return max2;
    }, 0);
    let nextSortOrder = maxSortOrder + 1;
    const filledGroups = emotionGroups.map((emotionGroup) => ({
      ...emotionGroup,
      sortOrder: emotionGroup.sortOrder !== void 0 ? emotionGroup.sortOrder : nextSortOrder++
    }));
    filledGroups.sort((a, b) => a.sortOrder - b.sortOrder);
    return filledGroups;
  }
};

// MARK: main (un peu près compris)
// src/main.ts
var MoodTrackerPlugin = class extends import_obsidian9.Plugin {
  constructor() {
    super(...arguments);
    this.entries = [];
    this.dataIntegrityService = new DataIntegrityService();
    this.noteService = new FileService(this);
    this.emotionService = new EmotionsService(this);
  }
  async onload() {
    await this.loadSettings();
    this.addRibbonIcons();
    this.addCommands();
    this.addSettingTab(new MoodTrackerSettingsTab(this, this.app));
  }
  onunload() {
  }
  openTrackerModal(entry = void 0, reopenStatsModalOnClose = false) {
    new MoodTrackerModal(
      this.app,
      this,
      entry,
      reopenStatsModalOnClose
    ).open();
  }
  showNotice(message, durationMs = 5e3, title) {
    if (typeof title !== "undefined") {
      const notice = new import_obsidian9.Notice("", durationMs);
      notice.noticeEl.append(
        createEl("strong", { text: title, cls: "mood-tracker-notice-header" }),
        createEl("br"),
        message
      );
    } else {
      new import_obsidian9.Notice(message, durationMs);
    }
  }
  async loadSettings() {
    const loadedData = Object.assign(
      {},
      DEFAULT_SETTINGS,
      await this.loadData()
    );
    const legacyEmotions = loadedData.emotions;
    if (legacyEmotions && Array.isArray(legacyEmotions) && legacyEmotions.length > 0 && typeof legacyEmotions[0] === "string") {
      const migratedSettings = new MoodTrackerSettings();
      migratedSettings.moodRatingLabelDict = loadedData.moodRatingLabelDict;
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
        15e3
      );
      await this.saveSettings();
    } else {
      this.settings = loadedData;
      const legacyEmotionSections = loadedData.emotionSections;
      if (legacyEmotionSections) {
        const convertedLegacyEmotionSections = this.dataIntegrityService.legacyEmotionSectionsToEmotionGroups(
          legacyEmotionSections
        );
        this.settings.emotionGroups.push(
          ...convertedLegacyEmotionSections
        );
        this.settings["emotionSections"] = null;
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
  addRibbonIcons() {
    this.addRibbonIcon(
      "smile-plus",
      "Open Mood Tracker",
      (evt) => {
        this.openTrackerModal();
      }
    );
  }
  addCommands() {
    this.addCommand({
      id: "open-mood-tracker",
      name: "Open Tracker",
      callback: () => {
        this.openTrackerModal();
      }
    });
  }
};
