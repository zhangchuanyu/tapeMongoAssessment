import {
  CounterDisposer,
  Disposer,
  DisposerClass,
  EventDispatcher,
  MultiDisposer,
  PLACEHOLDER,
  Template,
  Theme,
  compare,
  compareArray,
  each,
  each2,
  eachReverse,
  find,
  findReverse,
  getFirstSortedIndex,
  indexOf,
  insertIndex,
  isDate,
  isNaN as isNaN2,
  isNumber,
  isObject,
  isString,
  keys,
  keysOrdered,
  map,
  pushOne,
  remove,
  removeFirst,
  removeIndex,
  toDate,
  toNumber
} from "./chunk-QF7X2JEG.js";
import {
  __awaiter
} from "./chunk-GJAHRQ4T.js";
import {
  __export
} from "./chunk-XWLXMCJQ.js";

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Percent.js
var Percent = class _Percent {
  /**
   * Constructor.
   *
   * @param percent  Percent value
   */
  constructor(percent2) {
    Object.defineProperty(this, "_value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._value = percent2;
  }
  /**
   * Relative value.
   *
   * E.g. 100% is 1, 50% is 0.5, etc.
   *
   * This is useful to apply transformations to other values. E.g.:
   *
   * ```TypeScript
   * let value = 256;
   * let percent = new am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   * ```JavaScript
   * var value = 256;
   * var percent = new am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   *
   * Alternatively, you can use `am5.percent()` helper function:
   *
   * ```TypeScript
   * let value = 256;
   * let percent = am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   * ```JavaScript
   * var value = 256;
   * var percent = am5.p50;
   * console.log(value * percent.value); // outputs 128
   * ```
   *
   * @readonly
   * @return Relative value
   */
  get value() {
    return this._value / 100;
  }
  /**
   * Value in percent.
   *
   * @readonly
   * @return Percent
   */
  get percent() {
    return this._value;
  }
  toString() {
    return "" + this._value + "%";
  }
  interpolate(min2, max2) {
    return min2 + this.value * (max2 - min2);
  }
  static normalize(percent2, min2, max2) {
    if (percent2 instanceof _Percent) {
      return percent2;
    } else {
      if (min2 === max2) {
        return new _Percent(0);
      } else {
        return new _Percent(Math.min(Math.max((percent2 - min2) * (1 / (max2 - min2)), 0), 1) * 100);
      }
    }
  }
};
function percent(value) {
  return new Percent(value);
}
var p0 = percent(0);
var p100 = percent(100);
var p50 = percent(50);
function isPercent(value) {
  return value instanceof Percent;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Utils.js
var Utils_exports = {};
__export(Utils_exports, {
  StyleRule: () => StyleRule,
  StyleSheet: () => StyleSheet,
  addClass: () => addClass,
  addEventListener: () => addEventListener,
  addSpacing: () => addSpacing,
  alternativeColor: () => alternativeColor,
  blur: () => blur,
  brighten: () => brighten,
  capitalizeFirst: () => capitalizeFirst,
  cleanFormat: () => cleanFormat,
  contains: () => contains,
  decimalPlaces: () => decimalPlaces,
  escapeForRgex: () => escapeForRgex,
  focus: () => focus,
  get12Hours: () => get12Hours,
  getBrightnessStep: () => getBrightnessStep,
  getDayFromWeek: () => getDayFromWeek,
  getEventKey: () => getEventKey,
  getEventTarget: () => getEventTarget,
  getFormat: () => getFormat,
  getLightnessStep: () => getLightnessStep,
  getMonthWeek: () => getMonthWeek,
  getPointerId: () => getPointerId,
  getRendererEvent: () => getRendererEvent,
  getSafeResolution: () => getSafeResolution,
  getShadowRoot: () => getShadowRoot,
  getStyle: () => getStyle,
  getTimeZone: () => getTimeZone,
  getTimezoneOffset: () => getTimezoneOffset,
  getWeek: () => getWeek,
  getWeekYear: () => getWeekYear,
  getYearDay: () => getYearDay,
  hslToHsv: () => hslToHsv,
  hslToRgb: () => hslToRgb,
  hsvToHsl: () => hsvToHsl,
  iOS: () => iOS,
  isLight: () => isLight,
  isLocalEvent: () => isLocalEvent,
  isTouchEvent: () => isTouchEvent,
  lighten: () => lighten,
  mergeTags: () => mergeTags,
  onZoom: () => onZoom,
  padString: () => padString,
  plainText: () => plainText,
  ready: () => ready,
  relativeToValue: () => relativeToValue,
  removeClass: () => removeClass,
  removeElement: () => removeElement,
  rgbToHsl: () => rgbToHsl,
  sameBounds: () => sameBounds,
  saturate: () => saturate,
  setInteractive: () => setInteractive,
  setStyle: () => setStyle,
  splitString: () => splitString,
  stripTags: () => stripTags,
  supports: () => supports,
  trim: () => trim,
  trimLeft: () => trimLeft,
  trimRight: () => trimRight,
  truncateTextWithEllipsis: () => truncateTextWithEllipsis
});
function ready(f) {
  if (document.readyState !== "loading") {
    f();
  } else {
    const listener = () => {
      if (document.readyState !== "loading") {
        document.removeEventListener("readystatechange", listener);
        f();
      }
    };
    document.addEventListener("readystatechange", listener);
  }
}
function removeElement(el) {
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}
function addEventListener(dom, type, listener, options) {
  dom.addEventListener(type, listener, options || false);
  return new Disposer(() => {
    dom.removeEventListener(type, listener, options || false);
  });
}
function onZoom(listener) {
  return addEventListener(window, "resize", (_ev) => {
    listener();
  });
}
function supports(cap) {
  switch (cap) {
    case "touchevents":
      return window.hasOwnProperty("TouchEvent");
    case "pointerevents":
      return window.hasOwnProperty("PointerEvent");
    case "mouseevents":
      return window.hasOwnProperty("MouseEvent");
    case "wheelevents":
      return window.hasOwnProperty("WheelEvent");
    case "keyboardevents":
      return window.hasOwnProperty("KeyboardEvent");
  }
  return false;
}
function getPointerId(event) {
  let id = event.pointerId || 0;
  return id;
}
function blur() {
  if (document.activeElement && document.activeElement != document.body) {
    if (document.activeElement.blur) {
      document.activeElement.blur();
    } else {
      let input = document.createElement("button");
      input.style.position = "fixed";
      input.style.top = "0px";
      input.style.left = "-10000px";
      document.body.appendChild(input);
      input.focus();
      input.blur();
      document.body.removeChild(input);
    }
  }
}
function focus(el) {
  if (el) {
    el.focus();
  }
}
function getRendererEvent(key) {
  if (supports("pointerevents")) {
    return key;
  } else if (supports("touchevents")) {
    switch (key) {
      case "pointerover":
        return "touchstart";
      case "pointerout":
        return "touchend";
      case "pointerleave":
        return "touchend";
      case "pointerdown":
        return "touchstart";
      case "pointermove":
        return "touchmove";
      case "pointerup":
        return "touchend";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  } else if (supports("mouseevents")) {
    switch (key) {
      case "pointerover":
        return "mouseover";
      case "pointerout":
        return "mouseout";
      case "pointerleave":
        return "mouseleave";
      case "pointerdown":
        return "mousedown";
      case "pointermove":
        return "mousemove";
      case "pointerup":
        return "mouseup";
      case "click":
        return "click";
      case "dblclick":
        return "dblclick";
    }
  }
  return key;
}
function isTouchEvent(ev) {
  if (typeof Touch !== "undefined" && ev instanceof Touch) {
    return true;
  } else if (typeof PointerEvent !== "undefined" && ev instanceof PointerEvent && ev.pointerType != null) {
    switch (ev.pointerType) {
      case "touch":
      case "pen":
      case 2:
        return true;
      case "mouse":
      case 4:
        return false;
      default:
        return !(ev instanceof MouseEvent);
    }
  } else if (ev.type != null) {
    if (ev.type.match(/^mouse/)) {
      return false;
    }
  }
  return true;
}
function setStyle(dom, property, value) {
  dom.style[property] = value;
}
function getStyle(dom, property) {
  return dom.style[property];
}
function getEventTarget(event) {
  if (event.composedPath) {
    const path2 = event.composedPath();
    if (path2.length === 0) {
      return null;
    } else {
      return path2[0];
    }
  } else {
    return event.target;
  }
}
function contains(a2, b) {
  let cursor = b;
  while (true) {
    if (a2 === cursor) {
      return true;
    } else if (cursor.parentNode === null) {
      if (cursor.host == null) {
        return false;
      } else {
        cursor = cursor.host;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
function isLocalEvent(event, target) {
  return event.target && contains(target.root.dom, event.target);
}
function setInteractive(target, interactive) {
  if (interactive) {
    target.style.pointerEvents = "auto";
  } else {
    target.style.pointerEvents = "none";
  }
}
function getEventKey(event) {
  if (event.key !== void 0) {
    return event.key;
  }
  switch (event.keyCode) {
    case 9:
      return "Tab";
    case 13:
      return "Enter";
    case 16:
      return "Shift";
    case 17:
      return "Control";
    case 27:
      return "Escape";
    case 32:
      return " ";
    case 37:
      return "ArrowLeft";
    case 38:
      return "ArrowUp";
    case 39:
      return "ArrowRight";
    case 40:
      return "ArrowDown";
    case 46:
      return "Delete";
  }
  return "" + event.keyCode;
}
function getShadowRoot(a2) {
  let cursor = a2;
  while (true) {
    if (cursor.parentNode === null) {
      if (cursor.host != null) {
        return cursor;
      } else {
        return null;
      }
    } else {
      cursor = cursor.parentNode;
    }
  }
}
var rootStylesheet;
function createStylesheet(element, text, nonce = "") {
  const e = document.createElement("style");
  e.type = "text/css";
  if (nonce != "") {
    e.setAttribute("nonce", nonce);
  }
  e.textContent = text;
  if (element === null) {
    document.head.appendChild(e);
  } else {
    element.appendChild(e);
  }
  return e;
}
function getStylesheet(element, nonce = "") {
  if (element === null) {
    if (rootStylesheet == null) {
      const e = document.createElement("style");
      e.type = "text/css";
      if (nonce != "") {
        e.setAttribute("nonce", nonce);
      }
      document.head.appendChild(e);
      rootStylesheet = e.sheet;
    }
    return rootStylesheet;
  } else {
    const e = document.createElement("style");
    e.type = "text/css";
    if (nonce != "") {
      e.setAttribute("nonce", nonce);
    }
    element.appendChild(e);
    return e.sheet;
  }
}
function appendStylesheet(root, selector) {
  const index = root.cssRules.length;
  root.insertRule(selector + "{}", index);
  return root.cssRules[index];
}
var StyleRule = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param selector  CSS selector
   * @param styles    An object of style attribute - value pairs
   */
  constructor(element, selector, styles, nonce = "") {
    super();
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rule", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._root = getStylesheet(element, nonce);
    try {
      this._rule = appendStylesheet(this._root, selector);
    } catch (err) {
      this._rule = appendStylesheet(this._root, ":not(*)");
    }
    each2(styles, (key, value) => {
      this.setStyle(key, value);
    });
  }
  /**
   * A CSS selector text.
   *
   * E.g.: `.myClass p`
   *
   * @param selector  CSS selector
   */
  set selector(selector) {
    this._rule.selectorText = selector;
  }
  /**
   * @return CSS selector
   */
  get selector() {
    return this._rule.selectorText;
  }
  // TODO test this
  _dispose() {
    const index = indexOf(this._root.cssRules, this._rule);
    if (index === -1) {
      throw new Error("Could not dispose StyleRule");
    } else {
      this._root.deleteRule(index);
    }
  }
  /**
   * Sets the same style properties with browser-specific prefixes.
   *
   * @param name   Attribute name
   * @param value  Attribute value
   */
  _setVendorPrefixName(name, value) {
    const style = this._rule.style;
    style.setProperty("-webkit-" + name, value, "");
    style.setProperty("-moz-" + name, value, "");
    style.setProperty("-ms-" + name, value, "");
    style.setProperty("-o-" + name, value, "");
    style.setProperty(name, value, "");
  }
  /**
   * Sets a value for specific style attribute.
   *
   * @param name   Attribute
   * @param value  Value
   */
  setStyle(name, value) {
    if (name === "transition") {
      this._setVendorPrefixName(name, value);
    } else {
      this._rule.style.setProperty(name, value, "");
    }
  }
};
var StyleSheet = class extends DisposerClass {
  /**
   * Constructor.
   *
   * @param text  CSS stylesheet
   */
  constructor(element, text, nonce = "") {
    super();
    Object.defineProperty(this, "_element", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._element = createStylesheet(element, text, nonce);
  }
  _dispose() {
    if (this._element.parentNode) {
      this._element.parentNode.removeChild(this._element);
    }
  }
};
function addClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    const classes = className.split(" ");
    each(classes, (name) => {
      element.classList.add(name);
    });
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" ") + " " + className);
    } else {
      element.setAttribute("class", className);
    }
  }
}
function removeClass(element, className) {
  if (!element) {
    return;
  }
  if (element.classList) {
    element.classList.remove(className);
  } else {
    let currentClassName = element.getAttribute("class");
    if (currentClassName) {
      element.setAttribute("class", currentClassName.split(" ").filter((item) => {
        return item !== className;
      }).join(" "));
    }
  }
}
function iOS() {
  return /apple/i.test(navigator.vendor) && "ontouchend" in document;
}
function getSafeResolution() {
  return iOS() ? 1 : void 0;
}
function relativeToValue(percent2, full) {
  if (isNumber(percent2)) {
    return percent2;
  } else if (percent2 != null && isNumber(percent2.value) && isNumber(full)) {
    return full * percent2.value;
  } else {
    return 0;
  }
}
function decimalPlaces(number) {
  let match = ("" + number).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  if (!match) {
    return 0;
  }
  return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
}
function padString(value, len = 0, char = "0") {
  if (typeof value !== "string") {
    value = value.toString();
  }
  return len > value.length ? Array(len - value.length + 1).join(char) + value : value;
}
function trimLeft(text) {
  return text.replace(/^[\s]*/, "");
}
function trimRight(text) {
  return text.replace(/[\s]*$/, "");
}
function trim(text) {
  return trimLeft(trimRight(text));
}
function truncateTextWithEllipsis(text, maxLength, breakWords = false, ellipsis = "...") {
  if (text.length > maxLength) {
    let lastNonAlphanumericIndex = maxLength - 1;
    while (lastNonAlphanumericIndex >= 0 && text.charAt(lastNonAlphanumericIndex).match(/\w/)) {
      lastNonAlphanumericIndex--;
    }
    if (lastNonAlphanumericIndex >= 0 && breakWords == false) {
      return text.substring(0, lastNonAlphanumericIndex + 1) + "...";
    } else {
      return text.substring(0, maxLength) + ellipsis;
    }
  } else {
    return text;
  }
}
function getFormat(format) {
  if (typeof format === "undefined") {
    return "string";
  }
  format = format.toLowerCase().replace(/^\[[^\]]*\]/, "");
  format = format.replace(/\[[^\]]+\]/, "");
  format = format.trim();
  let hints = format.match(/\/(date|number|duration)$/);
  if (hints) {
    return hints[1];
  }
  if (format === "number") {
    return "number";
  }
  if (format === "date") {
    return "date";
  }
  if (format === "duration") {
    return "duration";
  }
  if (format.match(/[#0]/)) {
    return "number";
  }
  if (format.match(/[ymwdhnsqaxkzgtei]/)) {
    return "date";
  }
  return "string";
}
function cleanFormat(format) {
  return format.replace(/\/(date|number|duration)$/i, "");
}
function stripTags(text) {
  return text ? text.replace(/<[^>]*>/g, "") : text;
}
function plainText(text) {
  return text ? stripTags(("" + text).replace(/[\n\r]+/g, ". ")) : text;
}
function escapeForRgex(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
function addSpacing(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (char.toUpperCase() == char && i != 0) {
      result += " ";
    }
    result += char;
  }
  return result;
}
function splitString(source) {
  const rtlChar = /[\u0590-\u05FF\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  const splitPattern = /([^اأدذرزو]*[اأدذرزو])/gi;
  let segments = source.split(/(\s+)/);
  let result = [];
  segments.forEach((segment) => {
    if (segment.match(/^\s+$/)) {
      if (segment = " ") {
        segment = "  ";
      }
      result.push(segment);
    } else if (rtlChar.test(segment)) {
      let parts = segment.split(splitPattern).filter((part) => part !== "");
      result = result.concat(parts);
    } else {
      result = result.concat([...segment]);
    }
  });
  return result;
}
function getYearDay(date, utc = false) {
  utc;
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1e3;
  const oneDay = 1e3 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}
function getWeek(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.getTime() - firstDay.getTime()) / 864e5 + 1) / 7);
}
function getWeekYear(date, _utc = false) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const firstDay = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return firstDay.getFullYear();
}
function getMonthWeek(date, utc = false) {
  const firstWeek = getWeek(new Date(date.getFullYear(), date.getMonth(), 1), utc);
  let currentWeek = getWeek(date, utc);
  if (currentWeek == 1) {
    currentWeek = 53;
  }
  return currentWeek - firstWeek + 1;
}
function getDayFromWeek(week, year, weekday = 1, utc = false) {
  let date = new Date(year, 0, 4, 0, 0, 0, 0);
  if (utc) {
    date.setUTCFullYear(year);
  }
  let day = week * 7 + weekday - ((date.getDay() || 7) + 3);
  return day;
}
function get12Hours(hours, base) {
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return base != null ? hours + (base - 1) : hours;
}
function getTimeZone(date, long = false, savings = false, utc = false, timezone) {
  if (utc) {
    return long ? "Coordinated Universal Time" : "UTC";
  } else if (timezone) {
    const d1 = date.toLocaleString("en-US", {
      timeZone: timezone
    });
    const d2 = date.toLocaleString("en-US", {
      timeZone: timezone,
      timeZoneName: long ? "long" : "short"
    });
    return trim(d2.substr(d1.length));
  }
  let wotz = date.toLocaleString("UTC");
  let wtz = date.toLocaleString("UTC", {
    timeZoneName: long ? "long" : "short"
  }).substr(wotz.length);
  if (savings === false) {
    wtz = wtz.replace(/ (standard|daylight|summer|winter) /i, " ");
  }
  return trim(wtz);
}
function getTimezoneOffset(timezone, targetDate) {
  const date = targetDate || new Date(Date.UTC(2012, 0, 1, 0, 0, 0, 0));
  const utcDate = new Date(date.toLocaleString("en-US", {
    timeZone: "UTC"
  }));
  const tzDate = new Date(date.toLocaleString("en-US", {
    timeZone: timezone
  }));
  return (tzDate.getTime() - utcDate.getTime()) / 6e4 * -1;
}
function capitalizeFirst(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
function hslToRgb(color2) {
  let r, g, b;
  let h = color2.h;
  let s3 = color2.s;
  let l = color2.l;
  if (s3 == 0) {
    r = g = b = l;
  } else {
    let hue2rgb = function hue2rgb2(p2, q2, t) {
      if (t < 0) {
        t += 1;
      }
      if (t > 1) {
        t -= 1;
      }
      if (t < 1 / 6) {
        return p2 + (q2 - p2) * 6 * t;
      }
      if (t < 1 / 2) {
        return q2;
      }
      if (t < 2 / 3) {
        return p2 + (q2 - p2) * (2 / 3 - t) * 6;
      }
      return p2;
    };
    let q = l < 0.5 ? l * (1 + s3) : l + s3 - l * s3;
    let p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}
function rgbToHsl(color2) {
  let r = color2.r / 255;
  let g = color2.g / 255;
  let b = color2.b / 255;
  let max2 = Math.max(r, g, b);
  let min2 = Math.min(r, g, b);
  let h = 0;
  let s3 = 0;
  let l = (max2 + min2) / 2;
  if (max2 === min2) {
    h = s3 = 0;
  } else {
    let d = max2 - min2;
    s3 = l > 0.5 ? d / (2 - max2 - min2) : d / (max2 + min2);
    switch (max2) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return {
    h,
    s: s3,
    l
  };
}
function hsvToHsl(hsv) {
  const l = hsv.v * (1 - hsv.s / 2);
  const s3 = l === 0 || l === 1 ? 0 : (hsv.v - l) / Math.min(l, 1 - l);
  return {
    h: hsv.h,
    s: s3,
    l,
    a: hsv.a
  };
}
function hslToHsv(hsl) {
  const v = hsl.l + hsl.s * Math.min(hsl.l, 1 - hsl.l);
  const s3 = v === 0 ? 0 : 2 * (1 - hsl.l / v);
  return {
    h: hsl.h,
    s: s3,
    v,
    a: hsl.a
  };
}
function lighten(rgb, percent2) {
  if (rgb) {
    return {
      r: Math.max(0, Math.min(255, rgb.r + getLightnessStep(rgb.r, percent2))),
      g: Math.max(0, Math.min(255, rgb.g + getLightnessStep(rgb.g, percent2))),
      b: Math.max(0, Math.min(255, rgb.b + getLightnessStep(rgb.b, percent2))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getLightnessStep(value, percent2) {
  let base = percent2 > 0 ? 255 - value : value;
  return Math.round(base * percent2);
}
function brighten(rgb, percent2) {
  if (rgb) {
    let base = Math.min(Math.max(rgb.r, rgb.g, rgb.b), 230);
    let step = getLightnessStep(base, percent2);
    return {
      r: Math.max(0, Math.min(255, Math.round(rgb.r + step))),
      g: Math.max(0, Math.min(255, Math.round(rgb.g + step))),
      b: Math.max(0, Math.min(255, Math.round(rgb.b + step))),
      a: rgb.a
    };
  } else {
    return rgb;
  }
}
function getBrightnessStep(_value, percent2) {
  let base = 255;
  return Math.round(base * percent2);
}
function isLight(color2) {
  return (color2.r * 299 + color2.g * 587 + color2.b * 114) / 1e3 >= 128;
}
function saturate(rgb, saturation) {
  if (rgb === void 0 || saturation == 1) {
    return rgb;
  }
  let hsl = rgbToHsl(rgb);
  hsl.s = saturation;
  return hslToRgb(hsl);
}
function alternativeColor(color2, lightAlternative = {
  r: 255,
  g: 255,
  b: 255
}, darkAlternative = {
  r: 255,
  g: 255,
  b: 255
}) {
  let light = lightAlternative;
  let dark = darkAlternative;
  if (isLight(darkAlternative)) {
    light = darkAlternative;
    dark = lightAlternative;
  }
  return isLight(color2) ? dark : light;
}
function mergeTags(tags1, tags2) {
  if (!tags1) {
    tags1 = [];
  }
  return [...tags1, ...tags2].filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
function sameBounds(a2, b) {
  if (!b) {
    return false;
  }
  if (a2.left != b.left) {
    return false;
  }
  if (a2.right != b.right) {
    return false;
  }
  if (a2.top != b.top) {
    return false;
  }
  if (a2.bottom != b.bottom) {
    return false;
  }
  return true;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Animation.js
function waitForAnimations(animations) {
  return __awaiter(this, void 0, void 0, function* () {
    if (animations !== void 0) {
      const promises = [];
      each2(animations, (_, animation) => {
        promises.push(animation.waitForStop());
      });
      yield Promise.all(promises);
    }
  });
}
function range(diff, from, to) {
  return from + diff * (to - from);
}
function defaultInterpolate(diff, from, to) {
  if (diff >= 1) {
    return to;
  } else {
    return from;
  }
}
function percentInterpolate(diff, from, to) {
  return new Percent(range(diff, from.percent, to.percent));
}
function colorInterpolate(diff, from, to) {
  return Color.interpolate(diff, from, to);
}
function getInterpolate(from, to) {
  if (typeof from === "number" && typeof to === "number") {
    return range;
  }
  if (from instanceof Percent && to instanceof Percent) {
    return percentInterpolate;
  }
  if (from instanceof Color && to instanceof Color) {
    return colorInterpolate;
  }
  return defaultInterpolate;
}
var AnimationState;
(function(AnimationState2) {
  AnimationState2[AnimationState2["Stopped"] = 0] = "Stopped";
  AnimationState2[AnimationState2["Playing"] = 1] = "Playing";
  AnimationState2[AnimationState2["Paused"] = 2] = "Paused";
})(AnimationState || (AnimationState = {}));

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Color.js
function string2hex(string) {
  if (string[0] === "#") {
    string = string.substr(1);
  }
  if (string.length == 3) {
    string = string[0].repeat(2) + string[1].repeat(2) + string[2].repeat(2);
  }
  return parseInt(string, 16);
}
function rgba2hex(color2) {
  color2 = color2.replace(/[ ]/g, "");
  let matches = color2.match(/^rgb\(([0-9]*),([0-9]*),([0-9]*)\)/i);
  if (matches) {
    matches.push("1");
  } else {
    matches = color2.match(/^rgba\(([0-9]*),([0-9]*),([0-9]*),([.0-9]*)\)/i);
    if (!matches) {
      return 0;
    }
  }
  let hex = "";
  for (let i = 1; i <= 3; i++) {
    let val = parseInt(matches[i]).toString(16);
    if (val.length == 1) {
      val = "0" + val;
    }
    hex += val;
  }
  return string2hex(hex);
}
function color(input) {
  return Color.fromAny(input);
}
var Color = class _Color {
  constructor(hex) {
    Object.defineProperty(this, "_hex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._hex = hex | 0;
  }
  /**
   * Color numeric value.
   */
  get hex() {
    return this._hex;
  }
  /**
   * Value of color's R channel.
   * @return R value
   */
  get r() {
    return this._hex >>> 16;
  }
  /**
   * Value of color's G channel.
   * @return G value
   */
  get g() {
    return this._hex >> 8 & 255;
  }
  /**
   * Value of color's B channel.
   * @return B value
   */
  get b() {
    return this._hex & 255;
  }
  /**
   * Returns color CSS representation in form of `rgba(r, g, b, a)` string.
   *
   * @param   alpha  Opacity
   * @return         CSS string
   */
  toCSS(alpha = 1) {
    return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + alpha + ")";
  }
  /**
   * Returns color CSS representation in form of `#rgb` string.
   *
   * @return         CSS string
   */
  toCSSHex() {
    return "#" + padString(this.r.toString(16), 2) + padString(this.g.toString(16), 2) + padString(this.b.toString(16), 2);
  }
  /**
   * Returns color's HSL info.
   * @param   alpha Opacity
   * @return        HSL info
   */
  toHSL(alpha = 1) {
    return rgbToHsl({
      r: this.r,
      g: this.g,
      b: this.b,
      a: alpha
    });
  }
  /**
   * Converts HSL values into a new [[Color]] object.
   *
   * @param   h H value
   * @param   s S value
   * @param   l L value
   * @return    Color object
   */
  static fromHSL(h, s3, l) {
    const rgb = hslToRgb({
      h,
      s: s3,
      l
    });
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  toString() {
    return this.toCSSHex();
  }
  /**
   * Converts hex number into a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromHex(0xff0000) // red
   * ```
   * ```JavaScript
   * Color.fromHex(0xff0000) // red
   * ```
   *
   * @param   hex  Hex color
   * @return       Color
   */
  static fromHex(hex) {
    return new _Color(hex);
  }
  /**
   * Converts RGB values to a new [[Color]] object.
   *
   * @param   r  R value
   * @param   g  G value
   * @param   b  B value
   * @return     Color
   */
  static fromRGB(r, g, b) {
    return new _Color((b | 0) + (g << 8) + (r << 16));
  }
  /**
   * Converts RGB string to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromString("#ff0000") // red
   * ```
   * ```JavaScript
   * Color.fromString("#ff0000") // red
   * ```
   *
   * @param   s  RGB string
   * @return     Color
   */
  static fromString(s3) {
    return new _Color(string2hex(s3));
  }
  /**
   * Converts CSS rgba() syntax to a new [[Color]] object.
   *
   * ```TypeScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   * ```JavaScript
   * Color.fromCSS("rgba(255, 0, 0, 1)") // red
   * ```
   *
   * @param  {string} s [description]
   * @return {Color}    [description]
   */
  static fromCSS(s3) {
    return new _Color(rgba2hex(s3));
  }
  /**
   * Convert to color from virtually anything.
   *
   * Will throw an exception if unable to resolve the color.
   *
   * @param   s  Source
   * @return     Color
   */
  static fromAny(s3) {
    if (isString(s3)) {
      if (s3[0] == "#") {
        return _Color.fromString(s3);
      } else if (s3.substr(0, 3) == "rgb") {
        return _Color.fromCSS(s3);
      }
    } else if (isNumber(s3)) {
      return _Color.fromHex(s3);
    } else if (s3 instanceof _Color) {
      return _Color.fromHex(s3.hex);
    }
    throw new Error("Unknown color syntax: " + s3);
  }
  /**
   * Returns a new [[Color]] object based on either `lightAlternative` or
   * `darkAlternative` depending on which one is more contrasting with
   * the `color`.
   *
   * @param   color             Reference color
   * @param   lightAlternative  Light color
   * @param   darkAlternative   Dark color
   * @return                    Alternative color
   */
  static alternative(color2, lightAlternative, darkAlternative) {
    const rgb = alternativeColor({
      r: color2.r,
      g: color2.g,
      b: color2.b
    }, lightAlternative ? {
      r: lightAlternative.r,
      g: lightAlternative.g,
      b: lightAlternative.b
    } : void 0, darkAlternative ? {
      r: darkAlternative.r,
      g: darkAlternative.g,
      b: darkAlternative.b
    } : void 0);
    return this.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns an intermediate Color between two reference colors depending on
   * the progress (`diff`) between the two.
   *
   * @param   diff  Progress
   * @param   from  Source color
   * @param   to    Target color
   * @param   mode  Interpolation mode
   * @return        Color
   */
  static interpolate(diff, from, to, mode = "rgb") {
    if (mode == "hsl") {
      const fromHSL = from.toHSL();
      const toHSL = to.toHSL();
      return _Color.fromHSL(range(diff, fromHSL.h, toHSL.h), range(diff, fromHSL.s, toHSL.s), range(diff, fromHSL.l, toHSL.l));
    } else {
      return _Color.fromRGB(range(diff, from.r, to.r), range(diff, from.g, to.g), range(diff, from.b, to.b));
    }
  }
  /**
   * Returns a new [[Color]] lightened by `percent` value.
   *
   * Use negative value to darken the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static lighten(color2, percent2) {
    const rgb = lighten({
      r: color2.r,
      g: color2.g,
      b: color2.b
    }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] brightened by `percent` value.
   *
   * Use negative value to dim the color.
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static brighten(color2, percent2) {
    const rgb = brighten({
      r: color2.r,
      g: color2.g,
      b: color2.b
    }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
  /**
   * Returns a new [[Color]] saturated by `percent` value.
   *
   * Value range is between `0` (fully desaturated), to `1` (full color).
   *
   * @param   color    Source color
   * @param   percent  Percent
   * @return           New color
   */
  static saturate(color2, percent2) {
    const rgb = saturate({
      r: color2.r,
      g: color2.g,
      b: color2.b
    }, percent2);
    return _Color.fromRGB(rgb.r, rgb.g, rgb.b);
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/List.js
function checkBounds(index, len) {
  if (!(index >= 0 && index < len)) {
    throw new Error("Index out of bounds: " + index);
  }
}
var List = class {
  /**
   * Constructor
   *
   * @param initial  Inital list of values to add to list
   */
  constructor(initial = []) {
    Object.defineProperty(this, "_values", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new EventDispatcher()
    });
    this._values = initial;
  }
  /**
   * An array of values in the list.
   *
   * Do not use this property to add values. Rather use dedicated methods, like
   * `push()`, `removeIndex()`, etc.
   *
   * @readonly
   * @return List values
   */
  get values() {
    return this._values;
  }
  /**
   * Checks if list contains specific item reference.
   *
   * @param item  Item to search for
   * @return `true` if found, `false` if not found
   */
  contains(value) {
    return this._values.indexOf(value) !== -1;
  }
  /**
   * Removes specific item from the list.
   *
   * @param item An item to remove
   */
  removeValue(value) {
    let i = 0;
    let length = this._values.length;
    while (i < length) {
      if (this._values[i] === value) {
        this.removeIndex(i);
        --length;
      } else {
        ++i;
      }
    }
  }
  /**
   * Searches the list for specific item and returns its index.
   *
   * @param item  An item to search for
   * @return Index or -1 if not found
   */
  indexOf(value) {
    return indexOf(this._values, value);
  }
  /**
   * Number of items in list.
   *
   * @readonly
   * @return Number of items
   */
  get length() {
    return this._values.length;
  }
  /**
   * Checks if there's a value at specific index.
   *
   * @param index  Index
   * @return Value exists?
   */
  hasIndex(index) {
    return index >= 0 && index < this._values.length;
  }
  /**
   * Returns an item at specified index.
   *
   * @param index  Index
   * @return List item
   */
  getIndex(index) {
    return this._values[index];
  }
  _onPush(newValue) {
    if (this.events.isEnabled("push")) {
      this.events.dispatch("push", {
        type: "push",
        target: this,
        newValue
      });
    }
  }
  _onInsertIndex(index, newValue) {
    if (this.events.isEnabled("insertIndex")) {
      this.events.dispatch("insertIndex", {
        type: "insertIndex",
        target: this,
        index,
        newValue
      });
    }
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.events.isEnabled("setIndex")) {
      this.events.dispatch("setIndex", {
        type: "setIndex",
        target: this,
        index,
        oldValue,
        newValue
      });
    }
  }
  _onSwap(a2, b) {
    if (this.events.isEnabled("swap")) {
      this.events.dispatch("swap", {
        type: "swap",
        target: this,
        a: a2,
        b
      });
    }
  }
  _onRemoveIndex(index, oldValue) {
    if (this.events.isEnabled("removeIndex")) {
      this.events.dispatch("removeIndex", {
        type: "removeIndex",
        target: this,
        index,
        oldValue
      });
    }
  }
  _onMoveIndex(oldIndex, newIndex, value) {
    if (this.events.isEnabled("moveIndex")) {
      this.events.dispatch("moveIndex", {
        type: "moveIndex",
        target: this,
        oldIndex,
        newIndex,
        value
      });
    }
  }
  _onClear(oldValues) {
    if (this.events.isEnabled("clear")) {
      this.events.dispatch("clear", {
        type: "clear",
        target: this,
        oldValues
      });
    }
  }
  /**
   * Sets value at specific index.
   *
   * If there's already a value at the index, it is overwritten.
   *
   * @param index  Index
   * @param value  New value
   * @return New value
   */
  setIndex(index, value) {
    checkBounds(index, this._values.length);
    const oldValue = this._values[index];
    if (oldValue !== value) {
      this._values[index] = value;
      this._onSetIndex(index, oldValue, value);
    }
    return oldValue;
  }
  /**
   * Adds an item to the list at a specific index, which pushes all the other
   * items further down the list.
   *
   * @param index Index
   * @param item  An item to add
   */
  insertIndex(index, value) {
    checkBounds(index, this._values.length + 1);
    insertIndex(this._values, index, value);
    this._onInsertIndex(index, value);
    return value;
  }
  /**
   * Swaps indexes of two items in the list.
   *
   * @param a  Item 1
   * @param b  Item 2
   */
  swap(a2, b) {
    const len = this._values.length;
    checkBounds(a2, len);
    checkBounds(b, len);
    if (a2 !== b) {
      const value_a = this._values[a2];
      const value_b = this._values[b];
      this._values[a2] = value_b;
      this._values[b] = value_a;
      this._onSwap(value_a, value_b);
    }
  }
  /**
   * Removes a value at specific index.
   *
   * @param index  Index of value to remove
   * @return Removed value
   */
  removeIndex(index) {
    checkBounds(index, this._values.length);
    const oldValue = this._values[index];
    removeIndex(this._values, index);
    this._onRemoveIndex(index, oldValue);
    return oldValue;
  }
  /**
   * Moves an item to a specific index within the list.
   *
   * If the index is not specified it will move the item to the end of the
   * list.
   *
   * @param value  Item to move
   * @param index  Index to place item at
   */
  moveValue(value, toIndex) {
    let index = this.indexOf(value);
    if (index !== -1) {
      removeIndex(this._values, index);
      if (toIndex == null) {
        const toIndex2 = this._values.length;
        this._values.push(value);
        this._onMoveIndex(index, toIndex2, value);
      } else {
        insertIndex(this._values, toIndex, value);
        this._onMoveIndex(index, toIndex, value);
      }
    } else if (toIndex == null) {
      this._values.push(value);
      this._onPush(value);
    } else {
      insertIndex(this._values, toIndex, value);
      this._onInsertIndex(toIndex, value);
    }
    return value;
  }
  /**
   * Adds an item to the end of the list.
   *
   * @param item  An item to add
   */
  push(value) {
    this._values.push(value);
    this._onPush(value);
    return value;
  }
  /**
   * Adds an item as a first item in the list.
   *
   * @param item  An item to add
   */
  unshift(value) {
    this.insertIndex(0, value);
    return value;
  }
  /**
   * Adds multiple items to the list.
   *
   * @param items  An Array of items to add
   */
  pushAll(values) {
    each(values, (value) => {
      this.push(value);
    });
  }
  /**
   * Copies and adds items from abother list.
   *
   * @param source  A list top copy items from
   */
  copyFrom(source) {
    this.pushAll(source._values);
  }
  /**
   * Returns the last item from the list, and removes it.
   *
   * @return Item
   */
  pop() {
    let index = this._values.length - 1;
    return index < 0 ? void 0 : this.removeIndex(this._values.length - 1);
  }
  /**
   * Returns the first item from the list, and removes it.
   *
   * @return Item
   */
  shift() {
    return this._values.length ? this.removeIndex(0) : void 0;
  }
  /**
   * Sets multiple items to the list.
   *
   * All current items are removed.
   *
   * @param newArray  New items
   */
  setAll(newArray) {
    const old = this._values;
    this._values = [];
    this._onClear(old);
    each(newArray, (value) => {
      this._values.push(value);
      this._onPush(value);
    });
  }
  /**
   * Removes all items from the list.
   */
  clear() {
    this.setAll([]);
  }
  /**
   * Returns an ES6 iterator for the list.
   */
  *[Symbol.iterator]() {
    const length = this._values.length;
    for (let i = 0; i < length; ++i) {
      yield this._values[i];
    }
  }
  /**
   * Calls `f` for each element in the list.
   *
   * `f` should have at least one parameter defined which will get a current
   * item, with optional second argument - index.
   */
  each(f) {
    each(this._values, f);
  }
  /**
   * Calls `f` for each element in the list, from right to left.
   *
   * `f` should have at least one parameter defined which will get a current
   * item, with optional second argument - index.
   */
  eachReverse(f) {
    eachReverse(this._values, f);
  }
};
var ListAutoDispose = class extends List {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "autoDispose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  /**
   * Swaps indexes of two items in the list.
   *
   * @param a  Item 1
   * @param b  Item 2
   */
  swap(a2, b) {
    const currentAutoDispose = this.autoDispose;
    this.autoDispose = false;
    super.swap(a2, b);
    this.autoDispose = currentAutoDispose;
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.autoDispose) {
      oldValue.dispose();
    }
    super._onSetIndex(index, oldValue, newValue);
  }
  _onRemoveIndex(index, oldValue) {
    if (this.autoDispose) {
      oldValue.dispose();
    }
    super._onRemoveIndex(index, oldValue);
  }
  _onClear(oldValues) {
    if (this.autoDispose) {
      each(oldValues, (x2) => {
        x2.dispose();
      });
    }
    super._onClear(oldValues);
  }
  _dispose() {
    if (this.autoDispose) {
      each(this._values, (x2) => {
        x2.dispose();
      });
    }
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var ListTemplate = class extends ListAutoDispose {
  constructor(template, make) {
    super();
    Object.defineProperty(this, "template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "make", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.template = template;
    this.make = make;
  }
  _dispose() {
    super._dispose();
    if (this.autoDispose) {
      this.template.dispose();
    }
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Math.js
var Math_exports = {};
__export(Math_exports, {
  DEGREES: () => DEGREES,
  HALFPI: () => HALFPI,
  PI: () => PI,
  RADIANS: () => RADIANS,
  boundsOverlap: () => boundsOverlap,
  ceil: () => ceil,
  circlesOverlap: () => circlesOverlap,
  closest: () => closest,
  cos: () => cos,
  fitAngleToRange: () => fitAngleToRange,
  fitToRange: () => fitToRange,
  getAngle: () => getAngle,
  getArcBounds: () => getArcBounds,
  getArcPoint: () => getArcPoint,
  getCubicControlPointA: () => getCubicControlPointA,
  getCubicControlPointB: () => getCubicControlPointB,
  getPointOnLine: () => getPointOnLine,
  getPointOnQuadraticCurve: () => getPointOnQuadraticCurve,
  inBounds: () => inBounds,
  mergeBounds: () => mergeBounds,
  normalizeAngle: () => normalizeAngle,
  round: () => round,
  sin: () => sin,
  spiralPoints: () => spiralPoints,
  tan: () => tan
});
var PI = Math.PI;
var HALFPI = PI / 2;
var RADIANS = PI / 180;
var DEGREES = 180 / PI;
function round(value, precision, floor) {
  if (!isNumber(precision) || precision <= 0) {
    let rounded = Math.round(value);
    if (floor) {
      if (rounded - value == 0.5) {
        rounded--;
      }
    }
    return rounded;
  } else {
    let d = Math.pow(10, precision);
    return Math.round(value * d) / d;
  }
}
function ceil(value, precision) {
  if (!isNumber(precision) || precision <= 0) {
    return Math.ceil(value);
  } else {
    let d = Math.pow(10, precision);
    return Math.ceil(value * d) / d;
  }
}
function getCubicControlPointA(p02, p1, p2, tensionX, tensionY) {
  return {
    x: (-p02.x + p1.x / tensionX + p2.x) * tensionX,
    y: (-p02.y + p1.y / tensionY + p2.y) * tensionY
  };
}
function getCubicControlPointB(p1, p2, p3, tensionX, tensionY) {
  return {
    x: (p1.x + p2.x / tensionX - p3.x) * tensionX,
    y: (p1.y + p2.y / tensionY - p3.y) * tensionY
  };
}
function fitToRange(value, min2, max2) {
  return Math.min(Math.max(value, min2), max2);
}
function sin(angle) {
  return Math.sin(RADIANS * angle);
}
function tan(angle) {
  return Math.tan(RADIANS * angle);
}
function cos(angle) {
  return Math.cos(RADIANS * angle);
}
function normalizeAngle(value) {
  value = value % 360;
  if (value < 0) {
    value += 360;
  }
  return value;
}
function getArcBounds(cx, cy, startAngle, endAngle, radius) {
  let minX = Number.MAX_VALUE;
  let minY = Number.MAX_VALUE;
  let maxX = -Number.MAX_VALUE;
  let maxY = -Number.MAX_VALUE;
  let bpoints = [];
  bpoints.push(getArcPoint(radius, startAngle));
  bpoints.push(getArcPoint(radius, endAngle));
  let fromAngle = Math.min(Math.floor(startAngle / 90) * 90, Math.floor(endAngle / 90) * 90);
  let toAngle = Math.max(Math.ceil(startAngle / 90) * 90, Math.ceil(endAngle / 90) * 90);
  for (let angle = fromAngle; angle <= toAngle; angle += 90) {
    if (angle >= startAngle && angle <= endAngle) {
      bpoints.push(getArcPoint(radius, angle));
    }
  }
  for (let i = 0; i < bpoints.length; i++) {
    let pt = bpoints[i];
    if (pt.x < minX) {
      minX = pt.x;
    }
    if (pt.y < minY) {
      minY = pt.y;
    }
    if (pt.x > maxX) {
      maxX = pt.x;
    }
    if (pt.y > maxY) {
      maxY = pt.y;
    }
  }
  return {
    left: cx + minX,
    top: cy + minY,
    right: cx + maxX,
    bottom: cy + maxY
  };
}
function getArcPoint(radius, arc) {
  return {
    x: radius * cos(arc),
    y: radius * sin(arc)
  };
}
function mergeBounds(bounds) {
  const len = bounds.length;
  if (len > 0) {
    let bound = bounds[0];
    let left = bound.left;
    let top = bound.top;
    let right = bound.right;
    let bottom = bound.bottom;
    if (len > 1) {
      for (let i = 1; i < len; i++) {
        bound = bounds[i];
        left = Math.min(bound.left, left);
        right = Math.max(bound.right, right);
        top = Math.min(bound.top, top);
        bottom = Math.max(bound.bottom, bottom);
      }
    }
    return {
      left,
      right,
      top,
      bottom
    };
  }
  return {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  };
}
function fitAngleToRange(value, startAngle, endAngle) {
  if (startAngle > endAngle) {
    let temp = startAngle;
    startAngle = endAngle;
    endAngle = temp;
  }
  value = normalizeAngle(value);
  let count = (startAngle - normalizeAngle(startAngle)) / 360;
  if (value < startAngle) {
    value += 360 * (count + 1);
  }
  let maxEnd = startAngle + (endAngle - startAngle) / 2 + 180;
  let maxStart = startAngle + (endAngle - startAngle) / 2 - 180;
  if (value > endAngle) {
    if (value - 360 > startAngle) {
      value -= 360;
    } else {
      if (value < maxEnd) {
        value = endAngle;
      } else {
        value = startAngle;
      }
    }
  }
  if (value < startAngle) {
    if (value > maxStart) {
      value = startAngle;
    } else {
      value = endAngle;
    }
  }
  return value;
}
function inBounds(point5, bounds) {
  if (point5.x >= bounds.left && point5.y >= bounds.top && point5.x <= bounds.right && point5.y <= bounds.bottom) {
    return true;
  }
  return false;
}
function getAngle(point1, point22) {
  if (!point22) {
    point22 = {
      x: point1.x * 2,
      y: point1.y * 2
    };
  }
  let diffX = point22.x - point1.x;
  let diffY = point22.y - point1.y;
  let angle = Math.atan2(diffY, diffX) * DEGREES;
  if (angle < 0) {
    angle += 360;
  }
  return normalizeAngle(angle);
}
function getPointOnQuadraticCurve(pointA, pointB, controlPoint, position) {
  let x2 = (1 - position) * (1 - position) * pointA.x + 2 * (1 - position) * position * controlPoint.x + position * position * pointB.x;
  let y2 = (1 - position) * (1 - position) * pointA.y + 2 * (1 - position) * position * controlPoint.y + position * position * pointB.y;
  return {
    x: x2,
    y: y2
  };
}
function getPointOnLine(pointA, pointB, position) {
  return {
    x: pointA.x + (pointB.x - pointA.x) * position,
    y: pointA.y + (pointB.y - pointA.y) * position
  };
}
function closest(values, referenceValue) {
  return values.reduce(function(prev, curr) {
    return Math.abs(curr - referenceValue) < Math.abs(prev - referenceValue) ? curr : prev;
  });
}
function boundsOverlap(bounds1, bounds2) {
  const horizontalOverlap = bounds1.left < bounds2.right && bounds1.right > bounds2.left;
  const verticalOverlap = bounds1.top < bounds2.bottom && bounds1.bottom > bounds2.top;
  return horizontalOverlap && verticalOverlap;
}
function spiralPoints(cx, cy, radius, radiusY, innerRadius, step, radiusStep, startAngle, endAngle) {
  let r = innerRadius + 0.01;
  startAngle = normalizeAngle(startAngle);
  endAngle = normalizeAngle(endAngle);
  let angle = startAngle * RADIANS;
  if (endAngle < startAngle) {
    endAngle += 360;
  }
  let points = [];
  while (r < radius + radiusStep) {
    let stepSize = step;
    if (stepSize / 2 > r) {
      stepSize = 2 * r;
    }
    let c = Math.max(0.01, Math.min(1, r / 200));
    stepSize = stepSize * c;
    let degrees = angle * DEGREES;
    let point5 = {
      x: cx + r * Math.cos(angle),
      y: cy + r * radiusY / radius * Math.sin(angle)
    };
    points.push(point5);
    r = innerRadius + 0.01 + (degrees - startAngle) / 360 * radiusStep;
    angle += 2 * Math.asin(stepSize / 2 / r);
    if (angle * DEGREES > endAngle + 360 * Math.ceil((radius - innerRadius) / radiusStep)) {
      break;
    }
  }
  points.shift();
  return points;
}
function circlesOverlap(circle1, circle2) {
  return Math.hypot(circle1.x - circle2.x, circle1.y - circle2.y) <= circle1.radius + circle2.radius;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js
var Ease_exports = {};
__export(Ease_exports, {
  bounce: () => bounce,
  circle: () => circle,
  cubic: () => cubic,
  elastic: () => elastic,
  exp: () => exp,
  inOut: () => inOut,
  linear: () => linear,
  out: () => out,
  pow: () => pow,
  quad: () => quad,
  sine: () => sine,
  yoyo: () => yoyo
});
function linear(t) {
  return t;
}
function quad(t) {
  return t * t;
}
function cubic(t) {
  return t * t * t;
}
function pow(t, e) {
  return Math.pow(t, e);
}
function exp(t) {
  return Math.pow(2, 10 * t - 10);
}
function sine(t) {
  return 1 - Math.cos(t * HALFPI);
}
function circle(t) {
  return 1 - Math.sqrt(1 - t * t);
}
function yoyo(ease) {
  return function(t) {
    if (t < 0.5) {
      return ease(t * 2);
    } else {
      return ease((1 - t) * 2);
    }
  };
}
function out(ease) {
  return function(t) {
    return 1 - ease(1 - t);
  };
}
function inOut(ease) {
  return function(t) {
    if (t <= 0.5) {
      return ease(t * 2) / 2;
    } else {
      return 1 - ease((1 - t) * 2) / 2;
    }
  };
}
var b1 = 4 / 11;
var b2 = 6 / 11;
var b3 = 8 / 11;
var b4 = 3 / 4;
var b5 = 9 / 11;
var b6 = 10 / 11;
var b7 = 15 / 16;
var b8 = 21 / 22;
var b9 = 63 / 64;
var b0 = 1 / b1 / b1;
function bounce(t) {
  return 1 - bounceOut(1 - t);
}
function bounceOut(t) {
  t = t;
  if (t < b1) {
    return b0 * t * t;
  } else if (t < b3) {
    return b0 * (t -= b2) * t + b4;
  } else if (t < b6) {
    return b0 * (t -= b5) * t + b7;
  } else {
    return b0 * (t -= b8) * t + b9;
  }
}
var tau = 2 * Math.PI;
var amplitude = 1;
var period = 0.3 / tau;
var s = Math.asin(1 / amplitude) * period;
function elastic(t) {
  let v = t;
  return amplitude * Math.pow(2, 10 * --v) * Math.sin((s - v) / period);
}

// ../node_modules/@amcharts/amcharts5/.internal/core/Registry.js
var Registry = class {
  constructor() {
    Object.defineProperty(this, "version", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "5.13.3"
    });
    Object.defineProperty(this, "licenses", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "entitiesById", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "rootElements", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
var registry = new Registry();
function addLicense(license) {
  registry.licenses.push(license);
}
function disposeAllRootElements() {
  let root;
  while (root = registry.rootElements.pop()) {
    root.dispose();
  }
}
function getRootById(id) {
  let found;
  registry.rootElements.forEach((item) => {
    if (item.dom.id == id) {
      found = item;
    }
  });
  return found;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/States.js
var State = class {
  constructor(entity, settings) {
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_userSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._entity = entity;
    this._settings = settings;
    each2(settings, (key) => {
      this._userSettings[key] = true;
    });
  }
  get(key, fallback) {
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    this._settings[key] = value;
  }
  /**
   * Sets a setting `value` for the specified `key` to be set when the state
   * is applied.
   *
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._userSettings[key] = true;
    this.setRaw(key, value);
  }
  /**
   * Removes a setting value for the specified `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    delete this._userSettings[key];
    delete this._settings[key];
  }
  /**
   * Sets multiple settings at once.
   *
   * `settings` must be an object with key: value pairs.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param settings Settings
   */
  setAll(settings) {
    keys(settings).forEach((key) => {
      this.set(key, settings[key]);
    });
  }
  _eachSetting(f) {
    each2(this._settings, f);
  }
  /**
   * Applies the state to the target element.
   *
   * All setting values are set immediately.
   */
  apply() {
    const seen = {};
    seen["stateAnimationEasing"] = true;
    seen["stateAnimationDuration"] = true;
    const defaultState = this._entity.states.lookup("default");
    this._eachSetting((key, value) => {
      if (!seen[key]) {
        seen[key] = true;
        if (this !== defaultState) {
          if (!(key in defaultState._settings)) {
            defaultState._settings[key] = this._entity.get(key);
          }
        }
        this._entity.set(key, value);
      }
    });
  }
  /**
   * Applies the state to the target element.
   *
   * Returns an object representing all [[Animation]] objects created for
   * each setting key transition.
   *
   * @return           Animations
   */
  applyAnimate(duration) {
    if (duration == null) {
      duration = this._settings.stateAnimationDuration;
    }
    if (duration == null) {
      duration = this.get("stateAnimationDuration", this._entity.get("stateAnimationDuration", 0));
    }
    let easing = this._settings.stateAnimationEasing;
    if (easing == null) {
      easing = this.get("stateAnimationEasing", this._entity.get("stateAnimationEasing", cubic));
    }
    const defaultState = this._entity.states.lookup("default");
    const seen = {};
    seen["stateAnimationEasing"] = true;
    seen["stateAnimationDuration"] = true;
    const animations = {};
    this._eachSetting((key, value) => {
      if (!seen[key]) {
        seen[key] = true;
        if (this != defaultState) {
          if (!(key in defaultState._settings)) {
            defaultState._settings[key] = this._entity.get(key);
          }
        }
        const animation = this._entity.animate({
          key,
          to: value,
          duration,
          easing
        });
        if (animation) {
          animations[key] = animation;
        }
      }
    });
    return animations;
  }
};
var States = class {
  constructor(entity) {
    Object.defineProperty(this, "_states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._entity = entity;
  }
  /**
   * Checks if a state by `name` exists. Returns it there is one.
   *
   * @param  name  State name
   * @return       State
   */
  lookup(name) {
    return this._states[name];
  }
  /**
   * Sets supplied `settings` on a state by the `name`.
   *
   * If such state does not yet exists, it is created.
   *
   * @param   name      State name
   * @param   settings  Settings
   * @return            New State
   */
  create(name, settings) {
    const state = this._states[name];
    if (state) {
      state.setAll(settings);
      return state;
    } else {
      const state2 = new State(this._entity, settings);
      this._states[name] = state2;
      return state2;
    }
  }
  /**
   * Removes the state called `name`.
   *
   * @param   name      State name
   */
  remove(name) {
    delete this._states[name];
  }
  /**
   * Applies a named state to the target element.
   *
   * @param  newState  State name
   */
  apply(newState) {
    const state = this._states[newState];
    if (state) {
      state.apply();
    }
    this._entity._applyState(newState);
  }
  /**
   * Applies a named state to the element.
   *
   * Returns an object representing all [[Animation]] objects created for
   * each setting key transition.
   *
   * @param   newState  State name
   * @return            Animations
   */
  applyAnimate(newState, duration) {
    let animations;
    const state = this._states[newState];
    if (state) {
      animations = state.applyAnimate(duration);
    }
    this._entity._applyStateAnimated(newState, duration);
    return animations;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Entity.js
var Adapters = class {
  constructor(entity) {
    Object.defineProperty(this, "_entity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_callbacks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_disabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._entity = entity;
  }
  /**
   * Add a function (`callback`) that will modify value for setting `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/adapters/} for more info
   */
  add(key, callback) {
    let callbacks = this._callbacks[key];
    if (callbacks === void 0) {
      callbacks = this._callbacks[key] = [];
    }
    callbacks.push(callback);
    this._entity._markDirtyKey(key);
    return new Disposer(() => {
      if (removeFirst(callbacks, callback)) {
        this._entity._markDirtyKey(key);
      }
    });
  }
  /**
   * Removes all adapters for the specific key.
   *
   * @since 5.1.0
   */
  remove(key) {
    const callbacks = this._callbacks[key];
    if (callbacks !== void 0) {
      delete this._callbacks[key];
      if (callbacks.length !== 0) {
        this._entity._markDirtyKey(key);
      }
    }
  }
  /**
   * Enables (previously disabled) adapters for specific key.
   *
   * @since 5.1.0
   */
  enable(key) {
    if (this._disabled[key]) {
      delete this._disabled[key];
      this._entity._markDirtyKey(key);
    }
  }
  /**
   * Disables all adapters for specific key.
   *
   * @since 5.1.0
   */
  disable(key) {
    if (!this._disabled[key]) {
      this._disabled[key] = true;
      this._entity._markDirtyKey(key);
    }
  }
  /**
   * @ignore
   */
  fold(key, value) {
    if (!this._disabled[key]) {
      const callbacks = this._callbacks[key];
      if (callbacks !== void 0) {
        for (let i = 0, len = callbacks.length; i < len; ++i) {
          value = callbacks[i](value, this._entity, key);
        }
      }
    }
    return value;
  }
};
var Animation = class {
  constructor(animation, from, to, duration, easing, loops, startingTime) {
    Object.defineProperty(this, "_animation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_from", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_to", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_duration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_easing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_loops", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_interpolate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_oldTime", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_time", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_stopped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_playing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new EventDispatcher()
    });
    this._animation = animation;
    this._from = from;
    this._to = to;
    this._duration = duration;
    this._easing = easing;
    this._loops = loops;
    this._interpolate = getInterpolate(from, to);
    this._oldTime = startingTime;
  }
  get to() {
    return this._to;
  }
  get from() {
    return this._from;
  }
  get playing() {
    return this._playing;
  }
  get stopped() {
    return this._stopped;
  }
  stop() {
    if (!this._stopped) {
      this._stopped = true;
      this._playing = false;
      if (this.events.isEnabled("stopped")) {
        this.events.dispatch("stopped", {
          type: "stopped",
          target: this
        });
      }
    }
  }
  pause() {
    this._playing = false;
    this._oldTime = null;
  }
  play() {
    if (!this._stopped && !this._playing) {
      this._playing = true;
      this._animation._startAnimation();
    }
  }
  get percentage() {
    return this._time / this._duration;
  }
  waitForStop() {
    return new Promise((resolve, _reject) => {
      if (this._stopped) {
        resolve();
      } else {
        const listener = () => {
          stopped.dispose();
          resolve();
        };
        const stopped = this.events.on("stopped", listener);
      }
    });
  }
  _checkEnded() {
    if (this._loops > 1) {
      --this._loops;
      return false;
    } else {
      return true;
    }
  }
  _run(currentTime) {
    if (this._oldTime !== null) {
      this._time += currentTime - this._oldTime;
      if (this._time > this._duration) {
        this._time = this._duration;
      }
    }
    this._oldTime = currentTime;
  }
  _reset(currentTime) {
    this._oldTime = currentTime;
    this._time = 0;
  }
  _value(diff) {
    return this._interpolate(this._easing(diff), this._from, this._to);
  }
};
var counter = 0;
var Settings = class {
  constructor(settings) {
    Object.defineProperty(this, "uid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ++counter
    });
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_privateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_settingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_privateSettingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_prevSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_prevPrivateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_animatingSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_animatingPrivateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_userProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "enableDispose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    this._settings = settings;
  }
  _checkDirty() {
    keys(this._settings).forEach((key) => {
      this._userProperties[key] = true;
      this._markDirtyKey(key);
    });
  }
  /**
   * @ignore
   */
  resetUserSettings() {
    this._userProperties = {};
  }
  _runAnimation(currentTime) {
    let state = AnimationState.Stopped;
    if (!this.isDisposed()) {
      let playing = false;
      let paused = false;
      each2(this._animatingSettings, (key, animation) => {
        if (animation.stopped) {
          this._stopAnimation(key);
        } else if (animation.playing) {
          animation._run(currentTime);
          const diff = animation.percentage;
          if (diff >= 1) {
            if (animation._checkEnded()) {
              this.set(key, animation._value(1));
            } else {
              playing = true;
              animation._reset(currentTime);
              this._set(key, animation._value(1));
            }
          } else {
            playing = true;
            this._set(key, animation._value(diff));
          }
        } else {
          paused = true;
        }
      });
      each2(this._animatingPrivateSettings, (key, animation) => {
        if (animation.stopped) {
          this._stopAnimationPrivate(key);
        } else if (animation.playing) {
          animation._run(currentTime);
          const diff = animation.percentage;
          if (diff >= 1) {
            if (animation._checkEnded()) {
              this.setPrivate(key, animation._value(1));
            } else {
              playing = true;
              animation._reset(currentTime);
              this._setPrivate(key, animation._value(1));
            }
          } else {
            playing = true;
            this._setPrivate(key, animation._value(diff));
          }
        } else {
          paused = true;
        }
      });
      if (playing) {
        state = AnimationState.Playing;
      } else if (paused) {
        state = AnimationState.Paused;
      }
    }
    return state;
  }
  _markDirtyKey(_key) {
    this.markDirty();
  }
  _markDirtyPrivateKey(_key) {
    this.markDirty();
  }
  /**
   * Sets a callback function to invoke when specific key of settings changes
   * or is set.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Settings key
   * @param   callback  Callback
   * @return            Disposer for event
   */
  on(key, callback) {
    let events = this._settingEvents[key];
    if (events === void 0) {
      events = this._settingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._settingEvents[key];
      }
    });
  }
  /**
   * Removes a callback for when value of a setting changes.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @since 5.9.2
   */
  off(key, callback) {
    let events = this._settingEvents[key];
    if (events !== void 0 && callback !== void 0) {
      removeFirst(events, callback);
    } else {
      delete this._settingEvents[key];
    }
  }
  /**
   * Sets a callback function to invoke when specific key of private settings
   * changes or is set.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @return            Disposer for event
   */
  onPrivate(key, callback) {
    let events = this._privateSettingEvents[key];
    if (events === void 0) {
      events = this._privateSettingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._privateSettingEvents[key];
      }
    });
  }
  /**
   * Removes a callback for when value of a private setting changes.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/events/#Settings_value_change} for more info
   * @param   key       Private settings key
   * @param   callback  Callback
   * @since 5.9.2
   */
  offPrivate(key, callback) {
    let events = this._privateSettingEvents[key];
    if (events !== void 0 && callback !== void 0) {
      removeFirst(events, callback);
    } else {
      delete this._privateSettingEvents[key];
    }
  }
  /**
   * @ignore
   */
  getRaw(key, fallback) {
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * Returns `true` if the setting exists.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key        Settings key
   * @return  {boolean}  Key exists
   */
  has(key) {
    return key in this._settings;
  }
  get(key, fallback) {
    return this.getRaw(key, fallback);
  }
  _sendKeyEvent(key, value) {
    const events = this._settingEvents[key];
    if (events !== void 0) {
      each(events, (callback) => {
        callback(value, this, key);
      });
    }
  }
  _sendPrivateKeyEvent(key, value) {
    const events = this._privateSettingEvents[key];
    if (events !== void 0) {
      each(events, (callback) => {
        callback(value, this, key);
      });
    }
  }
  /**
   * @ignore
   */
  _setRaw(key, old, value) {
    this._prevSettings[key] = old;
    this._sendKeyEvent(key, value);
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    const old = this._settings[key];
    this._settings[key] = value;
    if (old !== value) {
      this._setRaw(key, old, value);
    }
  }
  /**
   * @ignore
   */
  _set(key, value) {
    const old = this._settings[key];
    this._settings[key] = value;
    if (old !== value) {
      this._setRaw(key, old, value);
      this._markDirtyKey(key);
    }
  }
  _stopAnimation(key) {
    const animation = this._animatingSettings[key];
    if (animation) {
      delete this._animatingSettings[key];
      animation.stop();
    }
  }
  /**
   * Sets a setting `value` for the specified `key`, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._set(key, value);
    this._stopAnimation(key);
    return value;
  }
  /**
   * Removes a setting value for the specified `key`;
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    if (key in this._settings) {
      this._prevSettings[key] = this._settings[key];
      delete this._settings[key];
      this._sendKeyEvent(key, void 0);
      this._markDirtyKey(key);
    }
    this._stopAnimation(key);
  }
  /**
   * Removes all keys;
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   */
  removeAll() {
    each(keys(this._settings), (key) => {
      this.remove(key);
    });
  }
  /**
   * Returns a value of a private setting.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/#Private_settings} for more info
   */
  getPrivate(key, fallback) {
    const value = this._privateSettings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  _setPrivateRaw(key, old, value) {
    this._prevPrivateSettings[key] = old;
    this._sendPrivateKeyEvent(key, value);
  }
  /**
   * @ignore
   */
  setPrivateRaw(key, value) {
    const old = this._privateSettings[key];
    this._privateSettings[key] = value;
    if (old !== value) {
      this._setPrivateRaw(key, old, value);
    }
  }
  /**
   * @ignore
   */
  _setPrivate(key, value) {
    const old = this._privateSettings[key];
    this._privateSettings[key] = value;
    if (old !== value) {
      this._setPrivateRaw(key, old, value);
      this._markDirtyPrivateKey(key);
    }
  }
  _stopAnimationPrivate(key) {
    const animation = this._animatingPrivateSettings[key];
    if (animation) {
      animation.stop();
      delete this._animatingPrivateSettings[key];
    }
  }
  /**
   * @ignore
   */
  setPrivate(key, value) {
    this._setPrivate(key, value);
    this._stopAnimationPrivate(key);
    return value;
  }
  /**
   * @ignore
   */
  removePrivate(key) {
    if (key in this._privateSettings) {
      this._prevPrivateSettings[key] = this._privateSettings[key];
      delete this._privateSettings[key];
      this._markDirtyPrivateKey(key);
    }
    this._stopAnimationPrivate(key);
  }
  /**
   * Sets multiple settings at once.
   *
   * `settings` must be an object with key: value pairs.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param settings Settings
   */
  setAll(settings) {
    each2(settings, (key, value) => {
      this.set(key, value);
    });
  }
  /**
   * Animates setting values from current/start values to new ones.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/animations/#Animating_settings} for more info
   * @param   options  Animation options
   * @return           Animation object
   */
  animate(options) {
    const key = options.key;
    const to = options.to;
    const duration = options.duration || 0;
    const loops = options.loops || 1;
    const from = options.from === void 0 ? this.get(key) : options.from;
    const easing = options.easing === void 0 ? linear : options.easing;
    if (duration === 0) {
      this.set(key, to);
    } else {
      if (from === void 0 || from === to) {
        this.set(key, to);
      } else {
        this.set(key, from);
        const animation2 = this._animatingSettings[key] = new Animation(this, from, to, duration, easing, loops, this._animationTime());
        this._startAnimation();
        return animation2;
      }
    }
    const animation = new Animation(this, from, to, duration, easing, loops, null);
    animation.stop();
    return animation;
  }
  /**
   * @ignore
   */
  animatePrivate(options) {
    const key = options.key;
    const to = options.to;
    const duration = options.duration || 0;
    const loops = options.loops || 1;
    const from = options.from === void 0 ? this.getPrivate(key) : options.from;
    const easing = options.easing === void 0 ? linear : options.easing;
    if (duration === 0) {
      this.setPrivate(key, to);
    } else {
      if (from === void 0 || from === to) {
        this.setPrivate(key, to);
      } else {
        this.setPrivate(key, from);
        const animation2 = this._animatingPrivateSettings[key] = new Animation(this, from, to, duration, easing, loops, this._animationTime());
        this._startAnimation();
        return animation2;
      }
    }
    const animation = new Animation(this, from, to, duration, easing, loops, null);
    animation.stop();
    return animation;
  }
  _dispose() {
  }
  /**
   * Returns `true` if this element is disposed.
   *
   * @return Disposed
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Disposes this object.
   */
  dispose() {
    if (this.enableDispose && !this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var Entity = class extends Settings {
  /**
   * IMPORTANT! Do not instantiate this class via `new Class()` syntax.
   *
   * Use static method `Class.new()` instead.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @ignore
   */
  constructor(root, settings, isReal, templates = []) {
    super(settings);
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_user_id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new States(this)
    });
    Object.defineProperty(this, "adapters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Adapters(this)
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createEvents()
    });
    Object.defineProperty(this, "_userPrivateProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirtyPrivate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_templates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_internalTemplates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_defaultThemes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_templateDisposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_runSetup", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_disposerProperties", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this._root = root;
    this._internalTemplates = templates;
    if (settings.id) {
      this._registerId(settings.id);
    }
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   root      Root element
   * @param   settings  Settings
   * @param   template  Template
   * @return            Instantiated object
   */
  static new(root, settings, template) {
    const x2 = new this(root, settings, true);
    x2._template = template;
    x2._afterNew();
    return x2;
  }
  static _new(root, settings, templates = []) {
    const x2 = new this(root, settings, true, templates);
    x2._afterNew();
    return x2;
  }
  _afterNew() {
    this._checkDirty();
    let shouldApply = false;
    const template = this._template;
    if (template) {
      shouldApply = true;
      template._setObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      shouldApply = true;
      template2._setObjectTemplate(this);
    });
    if (shouldApply) {
      this._applyTemplates(false);
    }
    this.states.create("default", {});
    this._setDefaults();
  }
  // This is the same as _afterNew, except it also applies the themes.
  // This should only be used for classes which don't have a parent (because they extend from Entity and not Sprite).
  _afterNewApplyThemes() {
    this._checkDirty();
    const template = this._template;
    if (template) {
      template._setObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      template2._setObjectTemplate(this);
    });
    this.states.create("default", {});
    this._setDefaults();
    this._applyThemes();
  }
  _createEvents() {
    return new EventDispatcher();
  }
  /**
   * @ignore
   */
  get classNames() {
    return this.constructor.classNames;
  }
  /**
   * @ignore
   */
  get className() {
    return this.constructor.className;
  }
  _setDefaults() {
  }
  _setDefaultFn(key, f) {
    const value = this.get(key);
    if (value) {
      return value;
    } else {
      const value2 = f();
      this.set(key, value2);
      return value2;
    }
  }
  _setDefault(key, value) {
    if (!this.has(key)) {
      super.set(key, value);
    }
  }
  _setRawDefault(key, value) {
    if (!this.has(key)) {
      super.setRaw(key, value);
    }
  }
  _clearDirty() {
    keys(this._dirty).forEach((key) => {
      this._dirty[key] = false;
    });
    keys(this._dirtyPrivate).forEach((key) => {
      this._dirtyPrivate[key] = false;
    });
  }
  /**
   * @ignore
   */
  isDirty(key) {
    return !!this._dirty[key];
  }
  /**
   * @ignore
   */
  isPrivateDirty(key) {
    return !!this._dirtyPrivate[key];
  }
  _markDirtyKey(key) {
    this._dirty[key] = true;
    super._markDirtyKey(key);
  }
  _markDirtyPrivateKey(key) {
    this._dirtyPrivate[key] = true;
    super._markDirtyKey(key);
  }
  /**
   * Checks if element is of certain class (or inherits one).
   *
   * @param   type  Class name to check
   * @return {boolean} Is of class?
   */
  isType(type) {
    return this.classNames.indexOf(type) !== -1;
  }
  _pushPropertyDisposer(key, disposer) {
    let disposers = this._disposerProperties[key];
    if (disposers === void 0) {
      disposers = this._disposerProperties[key] = [];
    }
    disposers.push(disposer);
    return disposer;
  }
  _disposeProperty(key) {
    const disposers = this._disposerProperties[key];
    if (disposers !== void 0) {
      each(disposers, (disposer) => {
        disposer.dispose();
      });
      delete this._disposerProperties[key];
    }
  }
  /**
   * @todo needs description
   * @param  value  Template
   */
  set template(value) {
    const template = this._template;
    if (template !== value) {
      this._template = value;
      if (template) {
        template._removeObjectTemplate(this);
      }
      if (value) {
        value._setObjectTemplate(this);
      }
      this._applyTemplates();
    }
  }
  get template() {
    return this._template;
  }
  /**
   * @ignore
   */
  markDirty() {
    this._root._addDirtyEntity(this);
  }
  _startAnimation() {
    this._root._addAnimation(this);
  }
  _animationTime() {
    return this._root.animationTime;
  }
  _applyState(_name) {
  }
  _applyStateAnimated(_name, _duration) {
  }
  get(key, fallback) {
    const value = this.adapters.fold(key, this._settings[key]);
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  /**
   * @ignore
   */
  isUserSetting(key) {
    return this._userProperties[key] || false;
  }
  /**
   * Sets a setting `value` for the specified `key`, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  set(key, value) {
    this._userProperties[key] = true;
    return super.set(key, value);
  }
  /**
   * @ignore
   */
  setRaw(key, value) {
    this._userProperties[key] = true;
    super.setRaw(key, value);
  }
  /**
   * Sets a setting `value` for the specified `key` only if the value for this key was not set previously using set method, and returns the same `value`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   * @param   value     Setting value
   * @return            Setting value
   */
  _setSoft(key, value) {
    if (!this._userProperties[key]) {
      return super.set(key, value);
    }
    return value;
  }
  /**
   * Removes a setting value for the specified `key`.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/settings/} for more info
   * @param   key       Setting key
   */
  remove(key) {
    delete this._userProperties[key];
    this._removeTemplateProperty(key);
  }
  /**
   * @ignore
   */
  setPrivate(key, value) {
    this._userPrivateProperties[key] = true;
    return super.setPrivate(key, value);
  }
  /**
   * @ignore
   */
  setPrivateRaw(key, value) {
    this._userPrivateProperties[key] = true;
    super.setPrivateRaw(key, value);
  }
  /**
   * @ignore
   */
  removePrivate(key) {
    delete this._userPrivateProperties[key];
    this._removeTemplatePrivateProperty(key);
  }
  _setTemplateProperty(template, key, value) {
    if (!this._userProperties[key]) {
      const match = this._findTemplateByKey(key);
      if (template === match) {
        super.set(key, value);
      }
    }
  }
  _setTemplatePrivateProperty(template, key, value) {
    if (!this._userPrivateProperties[key]) {
      const match = this._findTemplateByPrivateKey(key);
      if (template === match) {
        super.setPrivate(key, value);
      }
    }
  }
  _removeTemplateProperty(key) {
    if (!this._userProperties[key]) {
      const match = this._findTemplateByKey(key);
      if (match) {
        super.set(key, match._settings[key]);
      } else {
        super.remove(key);
      }
    }
  }
  _removeTemplatePrivateProperty(key) {
    if (!this._userPrivateProperties[key]) {
      const match = this._findTemplateByPrivateKey(key);
      if (match) {
        super.setPrivate(key, match._privateSettings[key]);
      } else {
        super.removePrivate(key);
      }
    }
  }
  _walkParents(f) {
    f(this._root._rootContainer);
    f(this);
  }
  // TODO faster version of this method which is specialized to just 1 key
  _applyStateByKey(name) {
    const other = this.states.create(name, {});
    const seen = {};
    this._eachTemplate((template) => {
      const state = template.states.lookup(name);
      if (state) {
        state._apply(other, seen);
      }
    });
    each2(other._settings, (key) => {
      if (!seen[key] && !other._userSettings[key]) {
        other.remove(key);
      }
    });
  }
  _applyTemplate(template, state) {
    this._templateDisposers.push(template._apply(this, state));
    each2(template._settings, (key, value) => {
      if (!state.settings[key] && !this._userProperties[key]) {
        state.settings[key] = true;
        super.set(key, value);
      }
    });
    each2(template._privateSettings, (key, value) => {
      if (!state.privateSettings[key] && !this._userPrivateProperties[key]) {
        state.privateSettings[key] = true;
        super.setPrivate(key, value);
      }
    });
    if (this._runSetup && template.setup) {
      this._runSetup = false;
      template.setup(this);
    }
  }
  /**
   * Calls the closure with each template and returns the first template which is true
   */
  _findStaticTemplate(f) {
    if (this._template) {
      if (f(this._template)) {
        return this._template;
      }
    }
  }
  _eachTemplate(f) {
    this._findStaticTemplate((template) => {
      f(template);
      return false;
    });
    eachReverse(this._internalTemplates, f);
    each(this._templates, f);
  }
  _applyTemplates(remove2 = true) {
    if (remove2) {
      this._disposeTemplates();
    }
    const state = {
      settings: {},
      privateSettings: {},
      states: {}
    };
    this._eachTemplate((template) => {
      this._applyTemplate(template, state);
    });
    if (remove2) {
      each2(this._settings, (key) => {
        if (!this._userProperties[key] && !state.settings[key]) {
          super.remove(key);
        }
      });
      each2(this._privateSettings, (key) => {
        if (!this._userPrivateProperties[key] && !state.privateSettings[key]) {
          super.removePrivate(key);
        }
      });
    }
  }
  _findTemplate(f) {
    const value = this._findStaticTemplate(f);
    if (value === void 0) {
      const value2 = findReverse(this._internalTemplates, f);
      if (value2 === void 0) {
        return find(this._templates, f);
      } else {
        return value2;
      }
    } else {
      return value;
    }
  }
  _findTemplateByKey(key) {
    return this._findTemplate((template) => {
      return key in template._settings;
    });
  }
  _findTemplateByPrivateKey(key) {
    return this._findTemplate((template) => {
      return key in template._privateSettings;
    });
  }
  _disposeTemplates() {
    each(this._templateDisposers, (disposer) => {
      disposer.dispose();
    });
    this._templateDisposers.length = 0;
  }
  _removeTemplates() {
    each(this._templates, (template) => {
      template._removeObjectTemplate(this);
    });
    this._templates.length = 0;
  }
  _applyThemes(force = false) {
    let isConnected = false;
    const defaults = [];
    let themes = [];
    const themeTags = /* @__PURE__ */ new Set();
    const tags = this.get("themeTagsSelf");
    if (tags) {
      each(tags, (tag) => {
        themeTags.add(tag);
      });
    }
    this._walkParents((entity) => {
      if (entity === this._root._rootContainer) {
        isConnected = true;
      }
      if (entity._defaultThemes.length > 0) {
        defaults.push(entity._defaultThemes);
      }
      const theme = entity.get("themes");
      if (theme) {
        themes.push(theme);
      }
      const tags2 = entity.get("themeTags");
      if (tags2) {
        each(tags2, (tag) => {
          themeTags.add(tag);
        });
      }
    });
    themes = defaults.concat(themes);
    this._removeTemplates();
    if (isConnected || force) {
      eachReverse(this.classNames, (name) => {
        const allRules = [];
        each(themes, (themes2) => {
          each(themes2, (theme) => {
            const rules = theme._lookupRules(name);
            if (rules) {
              eachReverse(rules, (rule) => {
                const matches = rule.tags.every((tag) => {
                  return themeTags.has(tag);
                });
                if (matches) {
                  const result = getFirstSortedIndex(allRules, (x2) => {
                    const order = compare(rule.tags.length, x2.tags.length);
                    if (order === 0) {
                      return compareArray(rule.tags, x2.tags, compare);
                    } else {
                      return order;
                    }
                  });
                  allRules.splice(result.index, 0, rule);
                }
              });
            }
          });
        });
        each(allRules, (rule) => {
          this._templates.push(rule.template);
          rule.template._setObjectTemplate(this);
        });
      });
    }
    this._applyTemplates();
    if (isConnected || force) {
      this._runSetup = false;
    }
    return isConnected || force;
  }
  _changed() {
  }
  _beforeChanged() {
    if (this.isDirty("id")) {
      const id = this.get("id");
      if (id) {
        this._registerId(id);
      }
      const prevId = this._prevSettings.id;
      if (prevId) {
        delete this._root.entitiesById[prevId];
        delete registry.entitiesById[prevId];
      }
    }
  }
  _registerId(id) {
    if (this._root.entitiesById[id] && this._root.entitiesById[id] !== this) {
      throw new Error('An entity with id "' + id + '" already exists.');
    }
    this._root.entitiesById[id] = this;
    registry.entitiesById[id] = this;
  }
  _afterChanged() {
  }
  /**
   * @ignore
   */
  addDisposer(disposer) {
    this._disposers.push(disposer);
    return disposer;
  }
  _dispose() {
    super._dispose();
    const template = this._template;
    if (template) {
      template._removeObjectTemplate(this);
    }
    each(this._internalTemplates, (template2) => {
      template2._removeObjectTemplate(this);
    });
    this._removeTemplates();
    this._disposeTemplates();
    this.events.dispose();
    this._disposers.forEach((x2) => {
      x2.dispose();
    });
    each2(this._disposerProperties, (_, disposers) => {
      each(disposers, (disposer) => {
        disposer.dispose();
      });
    });
    const id = this.get("id");
    if (id) {
      delete this._root.entitiesById[id];
      delete registry.entitiesById[id];
    }
  }
  /**
   * Creates and returns a "disposable" timeout.
   *
   * @param   fn     Callback
   * @param   delay  Delay in milliseconds
   * @return         Timeout disposer
   */
  setTimeout(fn, delay) {
    const id = setTimeout(() => {
      this.removeDispose(disposer);
      fn();
    }, delay);
    const disposer = new Disposer(() => {
      clearTimeout(id);
    });
    this._disposers.push(disposer);
    return disposer;
  }
  /**
   * @ignore
   */
  removeDispose(target) {
    if (!this.isDisposed()) {
      let index = indexOf(this._disposers, target);
      if (index > -1) {
        this._disposers.splice(index, 1);
      }
    }
    target.dispose();
  }
  /**
   * @ignore
   */
  hasTag(tag) {
    return indexOf(this.get("themeTags", []), tag) !== -1;
  }
  /**
   * @ignore
   */
  addTag(tag) {
    if (!this.hasTag(tag)) {
      const tags = this.get("themeTags", []);
      tags.push(tag);
      this.set("themeTags", tags);
    }
  }
  /**
   * @ignore
   */
  removeTag(tag) {
    if (this.hasTag(tag)) {
      const tags = this.get("themeTags", []);
      remove(tags, tag);
      this.set("themeTags", tags);
    }
  }
  _t(text, locale, ...rest) {
    return this._root.language.translate(text, locale, ...rest);
  }
  /**
   * An instance of [[Root]] object.
   *
   * @readonly
   * @since 5.0.6
   * @return Root object
   */
  get root() {
    return this._root;
  }
};
Object.defineProperty(Entity, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Entity"
});
Object.defineProperty(Entity, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ["Entity"]
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Sprite.js
var SpriteEventDispatcher = class _SpriteEventDispatcher extends EventDispatcher {
  constructor(sprite) {
    super();
    Object.defineProperty(this, "_sprite", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rendererDisposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dispatchParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    this._sprite = sprite;
  }
  _makePointerEvent(key, event) {
    return {
      type: key,
      originalEvent: event.event,
      point: event.point,
      simulated: event.simulated,
      native: event.native,
      target: this._sprite
    };
  }
  _onRenderer(key, dispatch) {
    this._sprite.set("interactive", true);
    this._sprite._display.interactive = true;
    let events = this._rendererDisposers[key];
    if (events === void 0) {
      const disposer = this._sprite._display.on(key, (e) => {
        dispatch.call(this, e);
      });
      events = this._rendererDisposers[key] = new CounterDisposer(() => {
        delete this._rendererDisposers[key];
        disposer.dispose();
      });
    }
    return events.increment();
  }
  _on(once, type, callback, context, shouldClone, dispatch) {
    const info = super._on(once, type, callback, context, shouldClone, dispatch);
    const rendererEvent = _SpriteEventDispatcher.RENDERER_EVENTS[type];
    if (rendererEvent !== void 0) {
      info.disposer = new MultiDisposer([info.disposer, this._onRenderer(type, rendererEvent)]);
    }
    return info;
  }
  /**
   * Will stop any bubbling up of the event to element's parents.
   *
   * Should be called in an event handler, e.g.:
   *
   * ```TypeScript
   * element.events.on("pointerdown", function(ev) {
   *   // Do something here and prevent from "pointerdown" bubbling up
   *   // ...
   *   ev.target.events.stopParentDispatch();
   * });
   * ```
   * ```JavaScript
   * element.events.on("pointerdown", function(ev) {
   *   // Do something here and prevent from "pointerdown" bubbling up
   *   // ...
   *   ev.target.events.stopParentDispatch();
   * });
   * ```
   */
  stopParentDispatch() {
    this._dispatchParents = false;
  }
  /**
   * @ignore
   */
  dispatchParents(type, event) {
    const old = this._dispatchParents;
    this._dispatchParents = true;
    try {
      this.dispatch(type, event);
      if (this._dispatchParents && this._sprite.parent) {
        this._sprite.parent.events.dispatchParents(type, event);
      }
    } finally {
      this._dispatchParents = old;
    }
  }
};
Object.defineProperty(SpriteEventDispatcher, "RENDERER_EVENTS", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: {
    "click": function(event) {
      if (this.isEnabled("click") && !this._sprite.isDragging() && this._sprite._hasDown() && !this._sprite._hasMoved(this._makePointerEvent("click", event))) {
        this.dispatch("click", this._makePointerEvent("click", event));
      }
    },
    "rightclick": function(event) {
      if (this.isEnabled("rightclick")) {
        this.dispatch("rightclick", this._makePointerEvent("rightclick", event));
      }
    },
    "middleclick": function(event) {
      if (this.isEnabled("middleclick")) {
        this.dispatch("middleclick", this._makePointerEvent("middleclick", event));
      }
    },
    "dblclick": function(event) {
      this.dispatchParents("dblclick", this._makePointerEvent("dblclick", event));
    },
    "pointerover": function(event) {
      const sprite = this._sprite;
      let dispatch = true;
      if (sprite.getPrivate("trustBounds")) {
        sprite._getBounds();
        const bounds = sprite.globalBounds();
        if (sprite.isType("Graphics")) {
          const strokeWidth = sprite.get("strokeWidth", 1) / 2;
          if (strokeWidth >= 1) {
            bounds.left -= strokeWidth;
            bounds.right += strokeWidth;
            bounds.top -= strokeWidth;
            bounds.bottom += strokeWidth;
          }
        }
        if (!inBounds(event.point, bounds)) {
          dispatch = false;
          sprite._root._renderer.removeHovering(sprite._display);
        }
      }
      if (dispatch && this.isEnabled("pointerover")) {
        this.dispatch("pointerover", this._makePointerEvent("pointerover", event));
      }
    },
    "pointerout": function(event) {
      if (this.isEnabled("pointerout")) {
        this.dispatch("pointerout", this._makePointerEvent("pointerout", event));
      }
    },
    "pointerdown": function(event) {
      this.dispatchParents("pointerdown", this._makePointerEvent("pointerdown", event));
    },
    "pointerup": function(event) {
      if (this.isEnabled("pointerup")) {
        this.dispatch("pointerup", this._makePointerEvent("pointerup", event));
      }
    },
    "globalpointerup": function(event) {
      if (this.isEnabled("globalpointerup")) {
        this.dispatch("globalpointerup", this._makePointerEvent("globalpointerup", event));
      }
    },
    "globalpointermove": function(event) {
      if (this.isEnabled("globalpointermove")) {
        this.dispatch("globalpointermove", this._makePointerEvent("globalpointermove", event));
      }
    },
    "wheel": function(event) {
      this.dispatchParents("wheel", {
        type: "wheel",
        target: this._sprite,
        originalEvent: event.event,
        point: event.point
      });
    }
  }
});
var Sprite = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_adjustedLocalBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    });
    Object.defineProperty(this, "_localBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    });
    Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_templateField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_sizeDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDragging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dragEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dragPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isHidden", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isShowing", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isHiding", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_downPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_toggleDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dragDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_hoverDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_focusDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipMoveDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipPointerDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_statesHandled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this.setPrivateRaw("visible", true);
    super._afterNew();
  }
  /**
   * Marks some setting as dirty. Could be used to trigger adapter.
   * @param key
   */
  markDirtyKey(key) {
    this._markDirtyKey(key);
  }
  _markDirtyKey(key) {
    super._markDirtyKey(key);
    if (key == "x" || key == "y" || key == "dx" || key == "dy") {
      this.markDirtyBounds();
      this._addPercentagePositionChildren();
      this.markDirtyPosition();
    }
  }
  _markDirtyPrivateKey(key) {
    super._markDirtyPrivateKey(key);
    if (key == "x" || key == "y") {
      this.markDirtyPosition();
    }
  }
  _removeTemplateField() {
    if (this._templateField) {
      this._templateField._removeObjectTemplate(this);
    }
  }
  _createEvents() {
    return new SpriteEventDispatcher(this);
  }
  _processTemplateField() {
    let template;
    const field = this.get("templateField");
    if (field) {
      const dataItem = this.dataItem;
      if (dataItem) {
        const context = dataItem.dataContext;
        if (context) {
          template = context[field];
          if (!(template instanceof Template) && template) {
            template = Template.new(template);
          }
        }
      }
    }
    if (this._templateField !== template) {
      this._removeTemplateField();
      this._templateField = template;
      if (template) {
        template._setObjectTemplate(this);
      }
      this._applyTemplates();
    }
  }
  // TODO change this to run before the element is added to the parent, so that way
  //      it doesn't need to apply the themes twice
  _setDataItem(dataItem) {
    const oldDataItem = this._dataItem;
    this._dataItem = dataItem;
    this._processTemplateField();
    const eventType = "dataitemchanged";
    if (dataItem != oldDataItem) {
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this,
          oldDataItem,
          newDataItem: dataItem
        });
      }
    }
  }
  /**
   * A [[DataItem]] used for this element.
   *
   * NOTE: data item is being assigned automatically in most cases where it
   * matters. Use this accessor to set data item only if you know what you're
   * doing.
   *
   * @param  value  Data item
   */
  set dataItem(value) {
    this._setDataItem(value);
  }
  /**
   * @return DataItem
   */
  get dataItem() {
    if (this._dataItem) {
      return this._dataItem;
    } else {
      let parent = this._parent;
      while (parent) {
        if (parent._dataItem) {
          return parent._dataItem;
        } else {
          parent = parent._parent;
        }
      }
    }
  }
  _addPercentageSizeChildren() {
    let parent = this.parent;
    if (parent) {
      if (this.get("width") instanceof Percent || this.get("height") instanceof Percent) {
        pushOne(parent._percentageSizeChildren, this);
      } else {
        removeFirst(parent._percentageSizeChildren, this);
      }
    }
  }
  _addPercentagePositionChildren() {
    let parent = this.parent;
    if (parent) {
      if (this.get("x") instanceof Percent || this.get("y") instanceof Percent) {
        pushOne(parent._percentagePositionChildren, this);
      } else {
        removeFirst(parent._percentagePositionChildren, this);
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyPosition() {
    this._root._addDirtyPosition(this);
  }
  updatePivotPoint() {
    const bounds = this._localBounds;
    if (bounds) {
      const centerX = this.get("centerX");
      if (centerX != null) {
        this._display.pivot.x = bounds.left + relativeToValue(centerX, bounds.right - bounds.left);
      }
      const centerY = this.get("centerY");
      if (centerY != null) {
        this._display.pivot.y = bounds.top + relativeToValue(centerY, bounds.bottom - bounds.top);
      }
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    this._handleStates();
    if (this.isDirty("tooltip")) {
      const previous = this._prevSettings.tooltip;
      if (previous) {
        previous.dispose();
      }
    }
    if (this.isDirty("layer") || this.isDirty("layerMargin")) {
      this._display.setLayer(this.get("layer"), this.get("layerMargin"));
      this.markDirtyLayer();
    }
    if (this.isDirty("tooltipPosition")) {
      const tooltipMoveDp = this._tooltipMoveDp;
      if (tooltipMoveDp) {
        tooltipMoveDp.dispose();
        this._tooltipMoveDp = void 0;
      }
      const tooltipPointerDp = this._tooltipPointerDp;
      if (tooltipPointerDp) {
        tooltipPointerDp.dispose();
        this._tooltipPointerDp = void 0;
      }
      if (this.get("tooltipPosition") == "pointer") {
        if (this.isHover()) {
          this._tooltipMoveDp = this.events.on("globalpointermove", (e) => {
            this.showTooltip(e.point);
          });
        }
        this._tooltipPointerDp = new MultiDisposer([this.events.on("pointerover", () => {
          this._tooltipMoveDp = this.events.on("globalpointermove", (e) => {
            this.showTooltip(e.point);
          });
        }), this.events.on("pointerout", () => {
          const tooltipMoveDp2 = this._tooltipMoveDp;
          if (tooltipMoveDp2) {
            tooltipMoveDp2.dispose();
            this._tooltipMoveDp = void 0;
          }
        })]);
      }
    }
  }
  _handleStates() {
    if (!this._statesHandled) {
      if (this.isDirty("active")) {
        if (this.get("active")) {
          this.states.applyAnimate("active");
          this.set("ariaChecked", true);
        } else {
          if (!this.isHidden()) {
            this.states.applyAnimate("default");
          }
          this.set("ariaChecked", false);
        }
        this.markDirtyAccessibility();
      }
      if (this.isDirty("disabled")) {
        if (this.get("disabled")) {
          this.states.applyAnimate("disabled");
          this.set("ariaChecked", false);
        } else {
          if (!this.isHidden()) {
            this.states.applyAnimate("default");
          }
          this.set("ariaChecked", true);
        }
        this.markDirtyAccessibility();
      }
      this._statesHandled = true;
    }
  }
  _changed() {
    super._changed();
    const display = this._display;
    const events = this.events;
    if (this.isDirty("draggable")) {
      const draggable = this.get("draggable");
      if (draggable) {
        this.set("interactive", true);
        this._dragDp = new MultiDisposer([events.on("pointerdown", (ev) => {
          this.dragStart(ev);
        }), events.on("globalpointermove", (ev) => {
          this.dragMove(ev);
        }), events.on("globalpointerup", (ev) => {
          this.dragStop(ev);
        })]);
      } else {
        if (this._dragDp) {
          this._dragDp.dispose();
          this._dragDp = void 0;
        }
      }
      display.cancelTouch = draggable ? true : false;
    }
    if (this.isDirty("tooltipText") || this.isDirty("tooltipHTML") || this.isDirty("showTooltipOn")) {
      const tooltipText = this.get("tooltipText");
      const tooltipHTML = this.get("tooltipHTML");
      const showTooltipOn = this.get("showTooltipOn", "hover");
      if (this._tooltipDp) {
        this._tooltipDp.dispose();
        this._tooltipDp = void 0;
      }
      if (tooltipText || tooltipHTML) {
        if (showTooltipOn == "click") {
          this._tooltipDp = new MultiDisposer([events.on("click", () => {
            this.setTimeout(() => {
              const tooltip = this.getTooltip();
              if (tooltip && !tooltip.isHidden() && tooltip.get("tooltipTarget") === this) {
                this.hideTooltip();
              } else {
                this.showTooltip();
              }
            }, 10);
          }), addEventListener(document, "click", (_ev) => {
            this.hideTooltip();
          })]);
          this._disposers.push(this._tooltipDp);
        } else if (showTooltipOn == "always") {
        } else {
          this._tooltipDp = new MultiDisposer([events.on("pointerover", () => {
            this.showTooltip();
          }), events.on("pointerout", () => {
            this.hideTooltip();
          })]);
          this._disposers.push(this._tooltipDp);
        }
      }
    }
    if (this.isDirty("toggleKey")) {
      let toggleKey = this.get("toggleKey");
      if (toggleKey && toggleKey != "none") {
        this._toggleDp = events.on("click", () => {
          if (!this._isDragging) {
            this.set(toggleKey, !this.get(toggleKey));
          }
        });
      } else {
        if (this._toggleDp) {
          this._toggleDp.dispose();
          this._toggleDp = void 0;
        }
      }
    }
    if (this.isDirty("opacity")) {
      display.alpha = Math.max(0, this.get("opacity", 1));
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
    if (this.isDirty("rotation")) {
      this.markDirtyBounds();
      display.angle = this.get("rotation", 0);
    }
    if (this.isDirty("scale")) {
      this.markDirtyBounds();
      display.scale = this.get("scale", 0);
    }
    if (this.isDirty("centerX") || this.isDirty("centerY")) {
      this.markDirtyBounds();
      this.updatePivotPoint();
    }
    if (this.isDirty("visible") || this.isPrivateDirty("visible") || this.isDirty("forceHidden")) {
      if (!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden")) {
        display.visible = false;
        this.hideTooltip();
      } else {
        display.visible = true;
      }
      this.markDirtyBounds();
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
    if (this.isDirty("width") || this.isDirty("height")) {
      this.markDirtyBounds();
      this._addPercentageSizeChildren();
      const parent = this.parent;
      if (parent) {
        if (this.isDirty("width") && this.get("width") instanceof Percent || this.isDirty("height") && this.get("height") instanceof Percent) {
          parent.markDirty();
          parent._prevWidth = 0;
        }
      }
      this._sizeDirty = true;
    }
    if (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("minWidth") || this.isDirty("minHeight") || this.isPrivateDirty("maxWidth") || this.isPrivateDirty("maxHeight") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight") || this.isDirty("marginLeft") || this.isDirty("marginTop") || this.isDirty("marginRight") || this.isDirty("marginBottom")) {
      this.markDirtyBounds();
      this._sizeDirty = true;
    }
    if (this._sizeDirty) {
      this._updateSize();
    }
    if (this.isDirty("wheelable")) {
      const wheelable = this.get("wheelable");
      if (wheelable) {
        this.set("interactive", true);
      }
      display.wheelable = wheelable ? true : false;
    }
    if (this.isDirty("tabindexOrder") || this.isDirty("focusableGroup")) {
      if (this.get("focusable")) {
        this._root._registerTabindexOrder(this);
      } else {
        this._root._unregisterTabindexOrder(this);
      }
    }
    if (this.isDirty("filter")) {
      display.filter = this.get("filter");
    }
    let filter = this.get("filter", "");
    if (this.isDirty("blur")) {
      const blur2 = this.get("blur", 0);
      if (blur2 != 0) {
        filter += " blur(" + blur2 + "px)";
      }
    }
    if (this.isDirty("saturate")) {
      const saturate2 = this.get("saturate", 1);
      if (saturate2 != 1) {
        filter += " saturate(" + saturate2 + ")";
      }
    }
    if (this.isDirty("brightness")) {
      const brightness = this.get("brightness", 1);
      if (brightness != 1) {
        filter += " brightness(" + brightness + ")";
      }
    }
    if (this.isDirty("contrast")) {
      const contrast = this.get("contrast", 1);
      if (contrast != 1) {
        filter += " contrast(" + contrast + ")";
      }
    }
    if (this.isDirty("sepia")) {
      const sepia = this.get("sepia", 0);
      if (sepia != 0) {
        filter += " sepia(" + sepia + ")";
      }
    }
    if (this.isDirty("hue")) {
      const hue = this.get("hue", 0);
      if (hue != 0) {
        filter += " hue-rotate(" + hue + "deg)";
      }
    }
    if (this.isDirty("invert")) {
      const invert = this.get("invert", 0);
      if (invert != 0) {
        filter += " invert(" + invert + ")";
      }
    }
    if (filter) {
      display.filter = filter;
    }
    if (this.isDirty("cursorOverStyle")) {
      display.cursorOverStyle = this.get("cursorOverStyle");
    }
    if (this.isDirty("hoverOnFocus")) {
      if (this.get("hoverOnFocus")) {
        this._focusDp = new MultiDisposer([events.on("focus", () => {
          this.showTooltip();
        }), events.on("blur", () => {
          this.hideTooltip();
        })]);
      } else {
        if (this._focusDp) {
          this._focusDp.dispose();
          this._focusDp = void 0;
        }
      }
    }
    if (this.isDirty("focusable")) {
      if (this.get("focusable")) {
        this._root._registerTabindexOrder(this);
      } else {
        this._root._unregisterTabindexOrder(this);
      }
      this.markDirtyAccessibility();
      this._disposers.push(events.on("blur", () => {
        this.setPrivateRaw("touchHovering", false);
      }));
      this._disposers.push(events.once("boundschanged", () => {
        this.markDirtyAccessibility();
      }));
    }
    if (this.isPrivateDirty("focusable")) {
      this.markDirtyAccessibility();
    }
    if (this.isDirty("role") || this.isDirty("ariaLive") || this.isDirty("ariaChecked") || this.isDirty("ariaHidden") || this.isDirty("ariaOrientation") || this.isDirty("ariaValueNow") || this.isDirty("ariaValueMin") || this.isDirty("ariaValueMax") || this.isDirty("ariaValueText") || this.isDirty("ariaLabel") || this.isDirty("ariaControls")) {
      this.markDirtyAccessibility();
    }
    if (this.isDirty("exportable")) {
      display.exportable = this.get("exportable");
    }
    if (this.isDirty("interactive")) {
      const events2 = this.events;
      if (this.get("interactive") && !events2.isDisposed()) {
        this._hoverDp = new MultiDisposer([events2.on("click", (ev) => {
          if (isTouchEvent(ev.originalEvent)) {
            if (!this.getPrivate("touchHovering")) {
              this.setTimeout(() => {
                this._handleOver();
                if (this.get("tooltipText") || this.get("tooltipHTML")) {
                  this.showTooltip();
                }
                this.setPrivateRaw("touchHovering", true);
                this.events.dispatch("pointerover", {
                  type: "pointerover",
                  target: ev.target,
                  originalEvent: ev.originalEvent,
                  point: ev.point,
                  simulated: ev.simulated
                });
              }, 10);
            }
          }
        }), events2.on("globalpointerup", (ev) => {
          if (isTouchEvent(ev.originalEvent)) {
            if (this.getPrivate("touchHovering")) {
              this._handleOut();
              if (this.get("tooltipText") || this.get("tooltipHTML")) {
                this.hideTooltip();
              }
              this.setPrivateRaw("touchHovering", false);
              this.events.dispatch("pointerout", {
                type: "pointerout",
                target: ev.target,
                originalEvent: ev.originalEvent,
                point: ev.point,
                simulated: ev.simulated
              });
            }
          }
          if (this._isDown) {
            this._handleUp(ev);
          }
        }), events2.on("pointerover", () => {
          this._handleOver();
        }), events2.on("pointerout", () => {
          this._handleOut();
        }), events2.on("pointerdown", (e) => {
          this._handleDown(e);
        })]);
      } else {
        this._display.interactive = false;
        if (this._hoverDp) {
          this._hoverDp.dispose();
          this._hoverDp = void 0;
        }
      }
    }
    if (this.isDirty("forceInactive")) {
      this._display.inactive = this.get("forceInactive", null);
    }
    if (this.get("showTooltipOn") == "always" && this._display.visible) {
      this.showTooltip();
    }
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragStart(e) {
    this._dragEvent = e;
    this.events.stopParentDispatch();
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragStop(e) {
    this._dragEvent = void 0;
    this._dragPoint = void 0;
    this.events.stopParentDispatch();
    if (this._isDragging) {
      this._isDragging = false;
      const type = "dragstop";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this,
          originalEvent: e.originalEvent,
          point: e.point,
          simulated: e.simulated
        });
      }
    }
  }
  _handleOver() {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("hoverActive")) {
        this.states.applyAnimate("hoverActive");
      } else if (this.get("disabled") && this.states.lookup("hoverDisabled")) {
        this.states.applyAnimate("hoverDisabled");
      } else {
        this.states.applyAnimate("hover");
      }
      if (this.get("draggable") && this._isDown && this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
    }
  }
  _handleOut() {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("active")) {
        this.states.applyAnimate("active");
      } else if (this.get("disabled") && this.states.lookup("disabled")) {
        this.states.applyAnimate("disabled");
      } else {
        if (this.states.lookup("hover") || this.states.lookup("hoverActive")) {
          this.states.applyAnimate("default");
        }
      }
      if (this.get("draggable") && this._isDown && this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
    }
  }
  _handleUp(e) {
    if (!this.isHidden()) {
      if (this.get("active") && this.states.lookup("active")) {
        this.states.applyAnimate("active");
      } else if (this.get("disabled") && this.states.lookup("disabled")) {
        this.states.applyAnimate("disabled");
      } else if (this.states.lookup("down")) {
        if (this.isHover()) {
          this.states.applyAnimate("hover");
        } else {
          this.states.applyAnimate("default");
        }
      }
      this._downPoint = void 0;
      const pointerId = getPointerId(e.originalEvent);
      delete this._downPoints[pointerId];
      if (keys(this._downPoints).length == 0) {
        this._isDown = false;
      }
    }
  }
  _hasMoved(e) {
    const pointerId = getPointerId(e.originalEvent);
    const downPoint = this._downPoints[pointerId];
    if (downPoint) {
      const x2 = Math.abs(downPoint.x - e.point.x);
      const y2 = Math.abs(downPoint.y - e.point.y);
      return x2 > 5 || y2 > 5;
    }
    return false;
  }
  _hasDown() {
    return keys(this._downPoints).length > 0;
  }
  _handleDown(e) {
    const parent = this.parent;
    if (parent && !this.get("draggable")) {
      parent._handleDown(e);
    }
    if (this.get("interactive") && !this.isHidden()) {
      if (this.states.lookup("down")) {
        this.states.applyAnimate("down");
      }
      this._downPoint = {
        x: e.point.x,
        y: e.point.y
      };
      this._isDown = true;
      const pointerId = getPointerId(e.originalEvent);
      this._downPoints[pointerId] = {
        x: e.point.x,
        y: e.point.y
      };
    }
  }
  /**
   * @ignore
   * @todo should this be user-accessible?
   */
  dragMove(e) {
    let dragEvent = this._dragEvent;
    if (dragEvent) {
      if (dragEvent.simulated && !e.simulated) {
        return true;
      }
      let angle = 0;
      let parent = this.parent;
      let scale = 1;
      while (parent != null) {
        angle += parent.get("rotation", 0);
        parent = parent.parent;
        if (parent) {
          scale *= parent.get("scale", 1);
        }
      }
      let x2 = (e.point.x - dragEvent.point.x) / scale;
      let y2 = (e.point.y - dragEvent.point.y) / scale;
      const events = this.events;
      if (dragEvent.simulated && !this._isDragging) {
        this._isDragging = true;
        this._dragEvent = e;
        this._dragPoint = {
          x: this.x(),
          y: this.y()
        };
        const type = "dragstart";
        if (events.isEnabled(type)) {
          events.dispatch(type, {
            type,
            target: this,
            originalEvent: e.originalEvent,
            point: e.point,
            simulated: e.simulated
          });
        }
      }
      if (this._isDragging) {
        let dragPoint = this._dragPoint;
        this.set("x", dragPoint.x + x2 * cos(angle) + y2 * sin(angle));
        this.set("y", dragPoint.y + y2 * cos(angle) - x2 * sin(angle));
        const type = "dragged";
        if (events.isEnabled(type)) {
          events.dispatch(type, {
            type,
            target: this,
            originalEvent: e.originalEvent,
            point: e.point,
            simulated: e.simulated
          });
        }
      } else {
        if (Math.hypot(x2, y2) > 5) {
          this._isDragging = true;
          this._dragEvent = e;
          this._dragPoint = {
            x: this.x(),
            y: this.y()
          };
          const type = "dragstart";
          if (events.isEnabled(type)) {
            events.dispatch(type, {
              type,
              target: this,
              originalEvent: e.originalEvent,
              point: e.point,
              simulated: e.simulated
            });
          }
        }
      }
    }
  }
  _updateSize() {
  }
  _getBounds() {
    this._localBounds = this._display.getLocalBounds();
  }
  /**
   * Returns depth (how deep in the hierachy of the content tree) of this
   * element.
   *
   * @return Depth
   */
  depth() {
    let self = this.parent;
    let depth = 0;
    while (true) {
      if (self) {
        ++depth;
        self = self.parent;
      } else {
        return depth;
      }
    }
  }
  /**
   * @ignore
   */
  markDirtySize() {
    this._sizeDirty = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtyBounds() {
    const display = this._display;
    if (this.get("isMeasured")) {
      this._root._addDirtyBounds(this);
      display.isMeasured = true;
      display.invalidateBounds();
      const parent = this.parent;
      if (parent && this.get("position") != "absolute") {
        if (parent.get("width") == null || parent.get("height") == null || parent.get("layout")) {
          parent.markDirtyBounds();
        }
      }
      if (this.get("focusable")) {
        this.markDirtyAccessibility();
      }
    }
  }
  /**
   * @ignore
   */
  markDirtyAccessibility() {
    this._root._invalidateAccessibility(this);
  }
  /**
   * @ignore
   */
  markDirtyLayer() {
    this._display.markDirtyLayer(true);
  }
  /**
   * @ignore
   */
  markDirty() {
    super.markDirty();
    this.markDirtyLayer();
  }
  _updateBounds() {
    const oldBounds = this._adjustedLocalBounds;
    let newBounds;
    if (!this.get("visible") || !this.getPrivate("visible") || this.get("forceHidden")) {
      newBounds = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this._localBounds = newBounds;
      this._adjustedLocalBounds = newBounds;
    } else {
      this._getBounds();
      this._fixMinBounds(this._localBounds);
      this.updatePivotPoint();
      this._adjustedLocalBounds = this._display.getAdjustedBounds(this._localBounds);
      newBounds = this._adjustedLocalBounds;
    }
    if (!oldBounds || oldBounds.left !== newBounds.left || oldBounds.top !== newBounds.top || oldBounds.right !== newBounds.right || oldBounds.bottom !== newBounds.bottom) {
      const eventType = "boundschanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this
        });
      }
      if (this.parent) {
        this.parent.markDirty();
        this.parent.markDirtyBounds();
      }
      if (this.getPrivate("showingTooltip")) {
        this.showTooltip();
      }
    }
  }
  _fixMinBounds(bounds) {
    let minWidth = this.get("minWidth", this.getPrivate("minWidth"));
    let minHeight = this.get("minHeight", this.getPrivate("minHeight"));
    if (isNumber(minWidth)) {
      if (bounds.right - bounds.left < minWidth) {
        bounds.right = bounds.left + minWidth;
      }
    }
    if (isNumber(minHeight)) {
      if (bounds.bottom - bounds.top < minHeight) {
        bounds.bottom = bounds.top + minHeight;
      }
    }
    let privateWidth = this.getPrivate("width");
    let privateHeight = this.getPrivate("height");
    if (isNumber(privateWidth)) {
      if (privateWidth > 0) {
        bounds.right = bounds.left + privateWidth;
      } else {
        bounds.left = bounds.right + privateWidth;
      }
    }
    if (isNumber(privateHeight)) {
      if (privateHeight > 0) {
        bounds.bottom = bounds.top + privateHeight;
      } else {
        bounds.top = bounds.bottom + privateHeight;
      }
    }
  }
  _removeParent(parent) {
    if (parent) {
      parent.children.removeValue(this);
      removeFirst(parent._percentageSizeChildren, this);
      removeFirst(parent._percentagePositionChildren, this);
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._sizeDirty = false;
    this._statesHandled = false;
  }
  /**
   * Simulate hover over element.
   */
  hover() {
    if (!this.isDisposed()) {
      this.showTooltip();
      this._handleOver();
    }
  }
  /**
   * Simulate unhover over element.
   */
  unhover() {
    if (!this.isDisposed()) {
      this.hideTooltip();
      this._handleOut();
    }
  }
  /**
   * Shows element's [[Tooltip]].
   */
  showTooltip(point5) {
    if (!this.isDisposed()) {
      const tooltip = this.getTooltip();
      const tooltipText = this.get("tooltipText");
      const tooltipHTML = this.get("tooltipHTML");
      if ((tooltipText || tooltipHTML) && tooltip) {
        const tooltipPosition = this.get("tooltipPosition");
        const tooltipTarget = this.getPrivate("tooltipTarget", this);
        if (tooltipPosition == "fixed" || !point5) {
          this._display._setMatrix();
          point5 = this.toGlobal(tooltipTarget._getTooltipPoint());
        }
        if (tooltipPosition == "pointer") {
          const lastTooltipCoords = this.getPrivate("lastTooltipCoords");
          if (lastTooltipCoords && lastTooltipCoords.x == point5.x && lastTooltipCoords.y == point5.y) {
            return;
          } else {
            this.setPrivate("lastTooltipCoords", point5);
          }
        }
        tooltip.set("pointTo", point5);
        tooltip.set("tooltipTarget", tooltipTarget);
        if (!tooltip.get("x")) {
          tooltip.set("x", point5.x);
        }
        if (!tooltip.get("y")) {
          tooltip.set("y", point5.y);
        }
        if (tooltipText) {
          tooltip.label.set("text", tooltipText);
        }
        if (tooltipHTML) {
          tooltip.label.set("html", tooltipHTML);
        }
        const dataItem = this.dataItem;
        if (dataItem) {
          tooltip.label._setDataItem(dataItem);
        }
        if (this.get("showTooltipOn") == "always" && (point5.x < 0 || point5.x > this._root.width() || point5.y < 0 || point5.y > this._root.height())) {
          this.hideTooltip();
          return;
        }
        tooltip.label.text.markDirtyText();
        const promise = tooltip.show();
        this.setPrivateRaw("showingTooltip", true);
        return promise;
      }
    }
  }
  /**
   * Hides element's [[Tooltip]].
   */
  hideTooltip() {
    const tooltip = this.getTooltip();
    if (tooltip) {
      this.removePrivate("lastTooltipCoords");
      if (tooltip.get("tooltipTarget") == this.getPrivate("tooltipTarget", this) || this.get("tooltip") == tooltip) {
        let timeout = tooltip.get("keepTargetHover") && tooltip.get("stateAnimationDuration", 0) == 0 ? 400 : void 0;
        const promise = tooltip.hide(timeout);
        this.setPrivateRaw("showingTooltip", false);
        return promise;
      }
    }
  }
  _getTooltipPoint() {
    const bounds = this._localBounds;
    if (bounds) {
      let x2 = 0;
      let y2 = 0;
      if (!this.get("isMeasured")) {
        x2 = relativeToValue(this.get("tooltipX", 0), this.width());
        y2 = relativeToValue(this.get("tooltipY", 0), this.height());
      } else {
        x2 = bounds.left + relativeToValue(this.get("tooltipX", 0), bounds.right - bounds.left);
        y2 = bounds.top + relativeToValue(this.get("tooltipY", 0), bounds.bottom - bounds.top);
      }
      return {
        x: x2,
        y: y2
      };
    }
    return {
      x: 0,
      y: 0
    };
  }
  /**
   * Returns [[Tooltip]] used for this element.
   *
   * @return Tooltip
   */
  getTooltip() {
    let tooltip = this.get("tooltip");
    if (!tooltip) {
      let parent = this.parent;
      if (parent) {
        return parent.getTooltip();
      }
    } else {
      return tooltip;
    }
  }
  _updatePosition() {
    const parent = this.parent;
    let dx = this.get("dx", 0);
    let dy = this.get("dy", 0);
    let x2 = this.get("x");
    let _x = this.getPrivate("x");
    let xx = 0;
    let yy = 0;
    const position = this.get("position");
    if (x2 instanceof Percent) {
      if (parent) {
        x2 = parent.innerWidth() * x2.value + parent.get("paddingLeft", 0);
      } else {
        x2 = 0;
      }
    }
    if (isNumber(x2)) {
      xx = x2 + dx;
    } else {
      if (_x != null) {
        xx = _x;
      } else if (parent) {
        if (position == "relative") {
          xx = parent.get("paddingLeft", 0) + dx;
        }
      }
    }
    let y2 = this.get("y");
    let _y = this.getPrivate("y");
    if (y2 instanceof Percent) {
      if (parent) {
        y2 = parent.innerHeight() * y2.value + parent.get("paddingTop", 0);
      } else {
        y2 = 0;
      }
    }
    if (isNumber(y2)) {
      yy = y2 + dy;
    } else {
      if (_y != null) {
        yy = _y;
      } else if (parent) {
        if (position == "relative") {
          yy = parent.get("paddingTop", 0) + dy;
        }
      }
    }
    const display = this._display;
    if (display.x != xx || display.y != yy) {
      display.invalidateBounds();
      display.x = xx;
      display.y = yy;
      const eventType = "positionchanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this
        });
      }
    }
    if (this.getPrivate("showingTooltip")) {
      this.showTooltip();
    }
  }
  /**
   * Returns element's actual X position in pixels.
   *
   * @return X (px)
   */
  x() {
    let x2 = this.get("x");
    let _x = this.getPrivate("x");
    const parent = this.parent;
    if (parent) {
      if (x2 instanceof Percent) {
        return relativeToValue(x2, parent.innerWidth()) + parent.get("paddingLeft", 0);
      } else {
        if (!isNumber(x2)) {
          if (_x != null) {
            return _x;
          } else {
            return parent.get("paddingLeft", this._display.x);
          }
        } else {
          return x2;
        }
      }
    }
    return this._display.x;
  }
  /**
   * Returns element's actual Y position in pixels.
   *
   * @return Y (px)
   */
  y() {
    let _y = this.getPrivate("y");
    if (_y != null) {
      return _y;
    }
    let y2 = this.get("y");
    const parent = this.parent;
    if (parent) {
      if (y2 instanceof Percent) {
        return relativeToValue(y2, parent.innerHeight()) + parent.get("paddingTop", 0);
      } else {
        if (!isNumber(y2)) {
          if (_y != null) {
            return _y;
          } else {
            return parent.get("paddingTop", this._display.y);
          }
        } else {
          return y2;
        }
      }
    }
    return this._display.y;
  }
  _dispose() {
    super._dispose();
    this._display.dispose();
    this._removeTemplateField();
    this._removeParent(this.parent);
    this._root._removeFocusElement(this);
    const tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.dispose();
    }
    this.markDirty();
  }
  /**
   * @ignore
   */
  adjustedLocalBounds() {
    this._fixMinBounds(this._adjustedLocalBounds);
    return this._adjustedLocalBounds;
  }
  /**
   * Returns local coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  localBounds() {
    return this._localBounds;
  }
  /**
   * Returns adjusted local coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  bounds() {
    const bounds = this._adjustedLocalBounds;
    const x2 = this.x();
    const y2 = this.y();
    return {
      left: bounds.left + x2,
      right: bounds.right + x2,
      top: bounds.top + y2,
      bottom: bounds.bottom + y2
    };
  }
  /**
   * Returns global coordinates of the element's bounds.
   *
   * @ignore
   * @return Global bounds
   */
  globalBounds() {
    const bounds = this.localBounds();
    const p02 = this.toGlobal({
      x: bounds.left,
      y: bounds.top
    });
    const p1 = this.toGlobal({
      x: bounds.right,
      y: bounds.top
    });
    const p2 = this.toGlobal({
      x: bounds.right,
      y: bounds.bottom
    });
    const p3 = this.toGlobal({
      x: bounds.left,
      y: bounds.bottom
    });
    return {
      left: Math.min(p02.x, p1.x, p2.x, p3.x),
      top: Math.min(p02.y, p1.y, p2.y, p3.y),
      right: Math.max(p02.x, p1.x, p2.x, p3.x),
      bottom: Math.max(p02.y, p1.y, p2.y, p3.y)
    };
  }
  _onShow(_duration) {
  }
  _onHide(_duration) {
  }
  /**
   * Plays initial reveal animation regardless if element is currently hidden
   * or visible.
   *
   * @param   duration  Duration of the animation in milliseconds
   * @param   delay     Delay showing of the element by X milliseconds
   * @return            Promise
   */
  appear(duration, delay) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.hide(0);
      if (delay) {
        return new Promise((success, _error) => {
          this.setTimeout(() => {
            success(this.show(duration));
          }, delay);
        });
      } else {
        return this.show(duration);
      }
    });
  }
  /**
   * Shows currently hidden element and returns a `Promise` which completes
   * when all showing animations are finished.
   *
   * ```TypeScript
   * series.show().then(function(ev) {
   *   console.log("Series is now fully visible");
   * })
   * ```
   * ```JavaScript
   * series.show().then(function(ev) {
   *   console.log("Series is now fully visible");
   * })
   * ```
   *
   * @return Promise
   */
  show(duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._isShowing) {
        this._isHidden = false;
        this._isShowing = true;
        this._isHiding = false;
        if (this.states.lookup("default").get("visible")) {
          this.set("visible", true);
        }
        this._onShow(duration);
        const animations = this.states.applyAnimate("default", duration);
        yield waitForAnimations(animations);
        this._isShowing = false;
      }
    });
  }
  /**
   * Hides the element and returns a `Promise` which completes when all hiding
   * animations are finished.
   *
   * ```TypeScript
   * series.hide().then(function(ev) {
   *   console.log("Series finished hiding");
   * })
   * ```
   * ```JavaScript
   * series.hide().then(function(ev) {
   *   console.log("Series finished hiding");
   * })
   * ```
   *
   * @return Promise
   */
  hide(duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this._isHiding && !this._isHidden) {
        this._isHiding = true;
        this._isShowing = false;
        let state = this.states.lookup("hidden");
        if (!state) {
          state = this.states.create("hidden", {
            "opacity": 0,
            "visible": false
          });
        }
        this._isHidden = true;
        this._onHide(duration);
        const animations = this.states.applyAnimate("hidden", duration);
        yield waitForAnimations(animations);
        this._isHiding = false;
      }
    });
  }
  /**
   * Returns `true` if this element is currently hidden.
   *
   * @return Is hidden?
   */
  isHidden() {
    return this._isHidden;
  }
  /**
   * Returns `true` if this element is currently animating to a default state.
   *
   * @return Is showing?
   */
  isShowing() {
    return this._isShowing;
  }
  /**
   * Returns `true` if this element is currently animating to a hidden state.
   *
   * @return Is hiding?
   */
  isHiding() {
    return this._isHiding;
  }
  /**
   * Returns `true` if this element is currently hovered by a pointer.
   *
   * @return Is hovered?
   */
  isHover() {
    return this._display.hovering();
  }
  /**
   * Returns `true` if this element does currently have focus.
   *
   * @return Is focused?
   */
  isFocus() {
    return this._root.focused(this);
  }
  /**
   * Returns `true` if this element is currently being dragged.
   *
   * @return Is dragged?
   */
  isDragging() {
    return this._isDragging;
  }
  /**
   * Returns `false` if if either public or private setting `visible` is set
   * to `false`, or `forceHidden` is set to `true`.
   *
   * @return Visible?
   */
  isVisible() {
    if (this.get("visible") && this.getPrivate("visible") && !this.get("forceHidden")) {
      return true;
    }
    return false;
  }
  /**
   * Same as `isVisible()`, except it checks all ascendants, too.
   *
   * @since 5.2.7
   * @return Visible?
   */
  isVisibleDeep() {
    return this._parent ? this._parent.isVisibleDeep() && this.isVisible() : this.isVisible();
  }
  /**
   * Returns an actual opacity of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.2.11
   */
  compositeOpacity() {
    const opacity = this.get("opacity", 1);
    return this._parent ? this._parent.compositeOpacity() * opacity : opacity;
  }
  /**
   * Returns an actual scale of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.9.2
   */
  compositeScale() {
    const scale = this.get("scale", 1);
    return this._parent ? this._parent.compositeScale() * scale : scale;
  }
  /**
   * Returns an actual roation of the element, taking into account all parents.
   *
   * @return Opacity
   * @since 5.9.2
   */
  compositeRotation() {
    const rotation = this.get("rotation", 0);
    return this._parent ? this._parent.compositeRotation() + rotation : rotation;
  }
  /**
   * Returns width of this element in pixels.
   *
   * @return Width (px)
   */
  width() {
    let width = this.get("width");
    let maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
    let minWidth = this.get("minWidth", this.getPrivate("minWidth"));
    let privateWidth = this.getPrivate("width");
    let w = 0;
    if (isNumber(privateWidth)) {
      w = privateWidth;
    } else {
      if (width == null) {
        if (this._adjustedLocalBounds) {
          w = this._adjustedLocalBounds.right - this._adjustedLocalBounds.left;
        }
      } else {
        if (width instanceof Percent) {
          const parent = this.parent;
          if (parent) {
            w = parent.innerWidth() * width.value;
          } else {
            w = this._root.width() * width.value;
          }
        } else if (isNumber(width)) {
          w = width;
        }
      }
    }
    if (isNumber(minWidth)) {
      w = Math.max(minWidth, w);
    }
    if (isNumber(maxWidth)) {
      w = Math.min(maxWidth, w);
    }
    return w;
  }
  /**
   * Returns maximum allowed width of this element in pixels.
   *
   * @return Maximum width (px)
   */
  maxWidth() {
    let maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
    if (isNumber(maxWidth)) {
      return maxWidth;
    } else {
      let width = this.get("width");
      if (isNumber(width)) {
        return width;
      }
    }
    const parent = this.parent;
    if (parent) {
      return parent.innerWidth();
    }
    return this._root.width();
  }
  /**
   * Returns maximum allowed height of this element in pixels.
   *
   * @return Maximum height (px)
   */
  maxHeight() {
    let maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
    if (isNumber(maxHeight)) {
      return maxHeight;
    } else {
      let height = this.get("height");
      if (isNumber(height)) {
        return height;
      }
    }
    const parent = this.parent;
    if (parent) {
      return parent.innerHeight();
    }
    return this._root.height();
  }
  /**
   * Returns height of this element in pixels.
   *
   * @return Height (px)
   */
  height() {
    let height = this.get("height");
    let maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
    let minHeight = this.get("minHeight", this.getPrivate("minHeight"));
    let privateHeight = this.getPrivate("height");
    let h = 0;
    if (isNumber(privateHeight)) {
      h = privateHeight;
    } else {
      if (height == null) {
        if (this._adjustedLocalBounds) {
          h = this._adjustedLocalBounds.bottom - this._adjustedLocalBounds.top;
        }
      } else {
        if (height instanceof Percent) {
          const parent = this.parent;
          if (parent) {
            h = parent.innerHeight() * height.value;
          } else {
            h = this._root.height() * height.value;
          }
        } else if (isNumber(height)) {
          h = height;
        }
      }
    }
    if (isNumber(minHeight)) {
      h = Math.max(minHeight, h);
    }
    if (isNumber(maxHeight)) {
      h = Math.min(maxHeight, h);
    }
    return h;
  }
  _findStaticTemplate(f) {
    if (this._templateField && f(this._templateField)) {
      return this._templateField;
    }
    return super._findStaticTemplate(f);
  }
  _walkParents(f) {
    if (this._parent) {
      this._walkParent(f);
    }
  }
  _walkParent(f) {
    if (this._parent) {
      this._parent._walkParent(f);
    }
    f(this);
  }
  /**
   * Parent [[Container]] of this element.
   *
   * @return Parent container
   */
  get parent() {
    return this._parent;
  }
  _setParent(parent, updateChildren = false) {
    const prevParent = this._parent;
    if (parent !== prevParent) {
      this.markDirtyBounds();
      parent.markDirty();
      this._parent = parent;
      if (updateChildren) {
        this._removeParent(prevParent);
        if (parent) {
          this._addPercentageSizeChildren();
          this._addPercentagePositionChildren();
        }
      }
      this.markDirtyPosition();
      this._applyThemes();
    }
  }
  /**
   * Returns an instance of [[NumberFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return NumberFormatter instace
   */
  getNumberFormatter() {
    return this.get("numberFormatter", this._root.numberFormatter);
  }
  /**
   * Returns an instance of [[DateFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return DateFormatter instace
   */
  getDateFormatter() {
    return this.get("dateFormatter", this._root.dateFormatter);
  }
  /**
   * Returns an instance of [[DurationFormatter]] used in this element.
   *
   * If this element does not have it set, global one form [[Root]] is used.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/using-formatters/} for more info
   * @return DurationFormatter instace
   */
  getDurationFormatter() {
    return this.get("durationFormatter", this._root.durationFormatter);
  }
  /**
   * Converts X/Y coordinate within this element to a global coordinate.
   *
   * @param  point  Local coordinate
   * @return        Global coordinate
   */
  toGlobal(point5) {
    return this._display.toGlobal(point5);
  }
  /**
   * Converts global X/Y coordinate to a coordinate within this element.
   *
   * @param  point  Global coordinate
   * @return        Local coordinate
   */
  toLocal(point5) {
    return this._display.toLocal(point5);
  }
  _getDownPoint() {
    const id = this._getDownPointId();
    if (id) {
      return this._downPoints[id];
    }
  }
  _getDownPointId() {
    if (this._downPoints) {
      return keysOrdered(this._downPoints, (a2, b) => {
        if (a2 > b) {
          return 1;
        }
        if (a2 < b) {
          return -1;
        }
        return 0;
      })[0];
    }
  }
  /**
   * Moves sprite to the end of the parent's children array.
   *
   * Depending on `layout` setting of the parten container, it may effect the
   * positioning or overlapping order of the elements.
   */
  toFront() {
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this, parent.children.length - 1);
    }
  }
  /**
   * Moves sprite to the beginning of the parent's children array.
   *
   * Depending on `layout` setting of the parten container, it may effect the
   * positioning or overlapping order of the elements.
   */
  toBack() {
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this, 0);
    }
  }
};
Object.defineProperty(Sprite, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Sprite"
});
Object.defineProperty(Sprite, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Sprite.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/Pattern.js
var Pattern = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_backgroundDisplay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_clear", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_pattern", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  get pattern() {
    return this._pattern;
  }
  _draw() {
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("repetition") || this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation") || this.isDirty("strokeWidth") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("colorOpacity") || this.isDirty("fillOpacity")) {
      this._clear = true;
    }
    this._checkDirtyFill();
  }
  _checkDirtyFill() {
    if (this.isDirty("color") || this.isDirty("fill")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const repetition = this.get("repetition", "");
      const width = this.get("width", 100);
      const height = this.get("height", 100);
      const fill = this.get("fill");
      const fillOpacity = this.get("fillOpacity", 1);
      const backgroundDisplay = this._backgroundDisplay;
      const display = this._display;
      display.clear();
      backgroundDisplay.clear();
      if (fill && fillOpacity > 0) {
        backgroundDisplay.beginFill(fill, fillOpacity);
        backgroundDisplay.drawRect(0, 0, width, height);
        backgroundDisplay.endFill();
      }
      display.angle = this.get("rotation", 0);
      this._draw();
      this._pattern = this._root._renderer.createPattern(display, backgroundDisplay, repetition, width, height);
    }
    this._clear = false;
  }
};
Object.defineProperty(Pattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Pattern"
});
Object.defineProperty(Pattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Pattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/PicturePattern.js
var PicturePattern = class extends Pattern {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    this._clear = true;
    if (this.isDirty("src")) {
      this._load();
    }
    const canvas = this.get("canvas");
    if (canvas) {
      this.set("width", canvas.width);
      this.set("height", canvas.height);
    }
  }
  _draw() {
    super._draw();
    const colorOpacity = this.get("colorOpacity");
    if (colorOpacity !== void 0) {
      this._display.alpha = Math.max(0, colorOpacity);
    }
    const image = this._image;
    if (image) {
      const patternWidth = this.get("width", 100);
      const patternHeight = this.get("height", 100);
      const fit = this.get("fit", "image");
      let width = 0;
      let height = 0;
      if (fit == "pattern") {
        width = patternWidth;
        height = patternHeight;
        this.markDirty();
      } else {
        width = image.width;
        height = image.height;
        if (fit == "image") {
          this.set("width", width);
          this.set("height", height);
        }
      }
      const centered = this.get("centered", true);
      let x2 = 0;
      let y2 = 0;
      if (centered) {
        x2 = patternWidth / 2 - width / 2;
        y2 = patternHeight / 2 - height / 2;
      }
      this._display.image(image, width, height, x2, y2);
    }
    const canvas = this.get("canvas");
    if (canvas) {
      this._display.image(canvas, canvas.width, canvas.height, 0, 0);
    }
  }
  _load() {
    const src = this.get("src");
    if (src) {
      const image = new Image();
      image.src = src;
      image.decode().then(() => {
        this._image = image;
        this._draw();
        if (this.events.isEnabled("loaded")) {
          this.events.dispatch("loaded", {
            type: "loaded",
            target: this
          });
        }
      }).catch((_error) => {
      });
    }
  }
};
Object.defineProperty(PicturePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PicturePattern"
});
Object.defineProperty(PicturePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([PicturePattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/backend/Renderer.js
var BlendMode;
(function(BlendMode2) {
  BlendMode2["ADD"] = "lighter";
  BlendMode2["COLOR"] = "color";
  BlendMode2["COLOR_BURN"] = "color-burn";
  BlendMode2["COLOR_DODGE"] = "color-dodge";
  BlendMode2["DARKEN"] = "darken";
  BlendMode2["DIFFERENCE"] = "difference";
  BlendMode2["DST_OVER"] = "destination-over";
  BlendMode2["EXCLUSION"] = "exclusion";
  BlendMode2["HARD_LIGHT"] = "hard-light";
  BlendMode2["HUE"] = "hue";
  BlendMode2["LIGHTEN"] = "lighten";
  BlendMode2["LUMINOSITY"] = "luminosity";
  BlendMode2["MULTIPLY"] = "multiply";
  BlendMode2["NORMAL"] = "source-over";
  BlendMode2["OVERLAY"] = "overlay";
  BlendMode2["SATURATION"] = "saturation";
  BlendMode2["SCREEN"] = "screen";
  BlendMode2["SOFT_LIGHT"] = "soft-light";
  BlendMode2["SRC_ATOP"] = "source-atop";
  BlendMode2["XOR"] = "xor";
})(BlendMode || (BlendMode = {}));

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Graphics.js
var visualSettings = ["fill", "fillOpacity", "stroke", "strokeWidth", "strokeOpacity", "fillPattern", "strokePattern", "fillGradient", "strokeGradient", "strokeDasharray", "strokeDashoffset", "shadowBlur", "shadowColor", "shadowOpacity", "shadowOffsetX", "shadowOffsetY", "blur", "sepia", "invert", "brightness", "hue", "contrast", "saturate"];
var Graphics = class extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeGraphics()
    });
    Object.defineProperty(this, "_clear", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("draw") || this.isDirty("svgPath")) {
      this.markDirtyBounds();
    }
    if (this.isDirty("fill") || this.isDirty("stroke") || this.isDirty("visible") || this.isDirty("forceHidden") || this.isDirty("scale") || this.isDirty("fillGradient") || this.isDirty("strokeGradient") || this.isDirty("fillPattern") || this.isDirty("strokePattern") || this.isDirty("fillOpacity") || this.isDirty("strokeOpacity") || this.isDirty("strokeWidth") || this.isDirty("draw") || this.isDirty("blendMode") || this.isDirty("strokeDasharray") || this.isDirty("strokeDashoffset") || this.isDirty("svgPath") || this.isDirty("lineJoin") || this.isDirty("lineCap") || this.isDirty("shadowColor") || this.isDirty("shadowBlur") || this.isDirty("shadowOffsetX") || this.isDirty("shadowOffsetY")) {
      this._clear = true;
    }
    this._display.crisp = this.get("crisp", false);
    if (this.isDirty("fillGradient")) {
      const gradient = this.get("fillGradient");
      if (gradient) {
        this._display.isMeasured = true;
        const gradientTarget = gradient.get("target");
        if (gradientTarget) {
          this._disposers.push(gradientTarget.events.on("boundschanged", () => {
            this._markDirtyKey("fill");
          }));
          this._disposers.push(gradientTarget.events.on("positionchanged", () => {
            this._markDirtyKey("fill");
          }));
        }
      }
    }
    if (this.isDirty("strokeGradient")) {
      const gradient = this.get("strokeGradient");
      if (gradient) {
        this._display.isMeasured = true;
        const gradientTarget = gradient.get("target");
        if (gradientTarget) {
          this._disposers.push(gradientTarget.events.on("boundschanged", () => {
            this._markDirtyKey("stroke");
          }));
          this._disposers.push(gradientTarget.events.on("positionchanged", () => {
            this._markDirtyKey("stroke");
          }));
        }
      }
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this.markDirtyBounds();
      this.markDirtyLayer();
      this._display.clear();
      let strokeDasharray = this.get("strokeDasharray");
      if (isNumber(strokeDasharray)) {
        if (strokeDasharray < 0.5) {
          strokeDasharray = [0];
        } else {
          strokeDasharray = [strokeDasharray];
        }
      }
      this._display.setLineDash(strokeDasharray);
      const strokeDashoffset = this.get("strokeDashoffset");
      if (strokeDashoffset) {
        this._display.setLineDashOffset(strokeDashoffset);
      }
      const blendMode = this.get("blendMode", BlendMode.NORMAL);
      this._display.blendMode = blendMode;
      const draw = this.get("draw");
      if (draw && typeof draw === "function") {
        draw(this._display, this);
      }
      const svgPath = this.get("svgPath");
      if (svgPath != null) {
        this._display.svgPath(svgPath);
      }
    }
  }
  _afterChanged() {
    super._afterChanged();
    if (this._clear) {
      const fill = this.get("fill");
      const fillGradient = this.get("fillGradient");
      const fillPattern = this.get("fillPattern");
      const fillOpacity = this.get("fillOpacity");
      const stroke = this.get("stroke");
      const strokeGradient = this.get("strokeGradient");
      const strokePattern = this.get("strokePattern");
      const shadowColor = this.get("shadowColor");
      const shadowBlur = this.get("shadowBlur");
      const shadowOffsetX = this.get("shadowOffsetX");
      const shadowOffsetY = this.get("shadowOffsetY");
      const shadowOpacity = this.get("shadowOpacity");
      if (shadowColor && (shadowBlur || shadowOffsetX || shadowOffsetY)) {
        this._display.shadow(shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY, shadowOpacity);
      }
      if (fill && !fillGradient) {
        this._display.beginFill(fill, fillOpacity);
        this._display.endFill();
      }
      if (fillGradient) {
        if (fill) {
          const stops = fillGradient.get("stops", []);
          if (stops.length) {
            each(stops, (stop) => {
              if ((!stop.color || stop.colorInherited) && fill) {
                stop.color = fill;
                stop.colorInherited = true;
              }
              if (stop.opacity == null || stop.opacityInherited) {
                stop.opacity = fillOpacity;
                stop.opacityInherited = true;
              }
            });
          }
        }
        const gradient = fillGradient.getFill(this);
        if (gradient) {
          this._display.beginFill(gradient, fillOpacity);
          this._display.endFill();
        }
      }
      if (fillPattern) {
        const pattern = fillPattern.pattern;
        if (pattern) {
          this._display.beginFill(pattern, fillOpacity);
          this._display.endFill();
          if (fillPattern instanceof PicturePattern) {
            fillPattern.events.once("loaded", () => {
              this._clear = true;
              this.markDirty();
            });
          }
        }
      }
      if (stroke || strokeGradient || strokePattern) {
        const strokeOpacity = this.get("strokeOpacity");
        let strokeWidth = this.get("strokeWidth", 1);
        if (this.get("nonScalingStroke")) {
          strokeWidth = strokeWidth / this.get("scale", 1);
        }
        if (this.get("crisp")) {
          strokeWidth /= this._root._renderer.resolution;
        }
        const lineJoin = this.get("lineJoin");
        const lineCap = this.get("lineCap");
        if (stroke && !strokeGradient) {
          this._display.lineStyle(strokeWidth, stroke, strokeOpacity, lineJoin, lineCap);
          this._display.endStroke();
        }
        if (strokeGradient) {
          const stops = strokeGradient.get("stops", []);
          if (stops.length) {
            each(stops, (stop) => {
              if ((!stop.color || stop.colorInherited) && stroke) {
                stop.color = stroke;
                stop.colorInherited = true;
              }
              if (stop.opacity == null || stop.opacityInherited) {
                stop.opacity = strokeOpacity;
                stop.opacityInherited = true;
              }
            });
          }
          const gradient = strokeGradient.getFill(this);
          if (gradient) {
            this._display.lineStyle(strokeWidth, gradient, strokeOpacity, lineJoin, lineCap);
            this._display.endStroke();
          }
        }
        if (strokePattern) {
          let pattern = strokePattern.pattern;
          if (pattern) {
            this._display.lineStyle(strokeWidth, pattern, strokeOpacity, lineJoin, lineCap);
            this._display.endStroke();
            if (strokePattern instanceof PicturePattern) {
              strokePattern.events.once("loaded", () => {
                this._clear = true;
                this.markDirty();
              });
            }
          }
        }
      }
      if (this.getPrivate("showingTooltip")) {
        this.showTooltip();
      }
    }
    this._clear = false;
  }
};
Object.defineProperty(Graphics, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Graphics"
});
Object.defineProperty(Graphics, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Graphics.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Rectangle.js
var Rectangle = class extends Graphics {
  _afterNew() {
    super._afterNew();
    this._display.isMeasured = true;
    this.setPrivateRaw("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("width") || this.isDirty("height") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear && !this.get("draw")) {
      this._draw();
    }
  }
  _draw() {
    let w = this.width();
    let h = this.height();
    let x2 = 0;
    let y2 = 0;
    let wSign = w / Math.abs(w);
    let hSign = h / Math.abs(h);
    if (this.get("containStroke", false)) {
      const strokeWidth = this.get("strokeWidth", 0);
      w -= strokeWidth * wSign;
      h -= strokeWidth * hSign;
      x2 += strokeWidth / 2 * wSign;
      y2 += strokeWidth / 2 * hSign;
    }
    this._display.drawRect(x2, y2, w, h);
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Rectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Rectangle"
});
Object.defineProperty(Rectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Rectangle.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Layout.js
function eachChildren(container, f) {
  if (container.get("reverseChildren", false)) {
    container.children.eachReverse(f);
  } else {
    container.children.each(f);
  }
}
var Layout = class extends Entity {
};
Object.defineProperty(Layout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Layout"
});
Object.defineProperty(Layout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Layout.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/HorizontalLayout.js
var HorizontalLayout = class extends Layout {
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingLeft = container.get("paddingLeft", 0);
    let availableWidth = container.innerWidth();
    let totalPercent = 0;
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childWidth = child.get("width");
          if (childWidth instanceof Percent) {
            totalPercent += childWidth.value;
            let w = availableWidth * childWidth.value;
            let minWidth = child.get("minWidth", child.getPrivate("minWidth", -Infinity));
            if (minWidth > w) {
              availableWidth -= minWidth;
              totalPercent -= childWidth.value;
            }
            let maxWidth = child.get("maxWidth", child.getPrivate("maxWidth", Infinity));
            if (w > maxWidth) {
              availableWidth -= maxWidth;
              totalPercent -= childWidth.value;
            }
          } else {
            if (!isNumber(childWidth)) {
              childWidth = child.width();
            }
            availableWidth -= childWidth + child.get("marginLeft", 0) + child.get("marginRight", 0);
          }
        }
      }
    });
    if (availableWidth <= 0 || availableWidth == Infinity) {
      availableWidth = 0.1;
    }
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childWidth = child.get("width");
          if (childWidth instanceof Percent) {
            let privateWidth = availableWidth * childWidth.value / totalPercent - child.get("marginLeft", 0) - child.get("marginRight", 0);
            let minWidth = child.get("minWidth", child.getPrivate("minWidth", -Infinity));
            let maxWidth = child.get("maxWidth", child.getPrivate("maxWidth", Infinity));
            privateWidth = Math.min(Math.max(minWidth, privateWidth), maxWidth);
            child.setPrivate("width", privateWidth);
          } else {
            if (child._prevSettings.width instanceof Percent) {
              child.setPrivate("width", void 0);
            }
          }
        }
      }
    });
    let prevX = paddingLeft;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative") {
        if (child.isVisible()) {
          let bounds = child.adjustedLocalBounds();
          let marginLeft = child.get("marginLeft", 0);
          let marginRight = child.get("marginRight", 0);
          let maxWidth = child.get("maxWidth");
          let left = bounds.left;
          let right = bounds.right;
          if (maxWidth) {
            if (right - left > maxWidth) {
              right = left + maxWidth;
            }
          }
          let x2 = prevX + marginLeft - left;
          child.setPrivate("x", x2);
          prevX = x2 + right + marginRight;
        } else {
          child.setPrivate("x", void 0);
        }
      }
    });
  }
};
Object.defineProperty(HorizontalLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HorizontalLayout"
});
Object.defineProperty(HorizontalLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([HorizontalLayout.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/VerticalLayout.js
var VerticalLayout = class extends Layout {
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingTop = container.get("paddingTop", 0);
    let availableHeight = container.innerHeight();
    let totalPercent = 0;
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childHeight = child.get("height");
          if (childHeight instanceof Percent) {
            totalPercent += childHeight.value;
            let h = availableHeight * childHeight.value;
            let minHeight = child.get("minHeight", child.getPrivate("minHeight", -Infinity));
            if (minHeight > h) {
              availableHeight -= minHeight;
              totalPercent -= childHeight.value;
            }
            let maxHeight = child.get("maxHeight", child.getPrivate("maxHeight", Infinity));
            if (h > maxHeight) {
              availableHeight -= maxHeight;
              totalPercent -= childHeight.value;
            }
          } else {
            if (!isNumber(childHeight)) {
              childHeight = child.height();
            }
            availableHeight -= childHeight + child.get("marginTop", 0) + child.get("marginBottom", 0);
          }
        }
      }
    });
    if (availableHeight <= 0 || availableHeight == Infinity) {
      availableHeight = 0.1;
    }
    eachChildren(container, (child) => {
      if (child.isVisible()) {
        if (child.get("position") == "relative") {
          let childHeight = child.get("height");
          if (childHeight instanceof Percent) {
            let privateHeight = availableHeight * childHeight.value / totalPercent - child.get("marginTop", 0) - child.get("marginBottom", 0);
            let minHeight = child.get("minHeight", child.getPrivate("minHeight", -Infinity));
            let maxHeight = child.get("maxHeight", child.getPrivate("maxHeight", Infinity));
            privateHeight = Math.min(Math.max(minHeight, privateHeight), maxHeight);
            child.setPrivate("height", privateHeight);
          } else {
            if (child._prevSettings.height instanceof Percent) {
              child.setPrivate("height", void 0);
            }
          }
        }
      }
    });
    let prevY = paddingTop;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative") {
        if (child.isVisible()) {
          let bounds = child.adjustedLocalBounds();
          let marginTop = child.get("marginTop", 0);
          let top = bounds.top;
          let bottom = bounds.bottom;
          let maxHeight = child.get("maxHeight");
          if (maxHeight) {
            if (bottom - top > maxHeight) {
              bottom = top + maxHeight;
            }
          }
          let marginBottom = child.get("marginBottom", 0);
          let y2 = prevY + marginTop - top;
          child.setPrivate("y", y2);
          prevY = y2 + bottom + marginBottom;
        } else {
          child.setPrivate("y", void 0);
        }
      }
    });
  }
};
Object.defineProperty(VerticalLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "VerticalLayout"
});
Object.defineProperty(VerticalLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([VerticalLayout.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/GridLayout.js
var GridLayout = class extends Layout {
  _afterNew() {
    this._setRawDefault("maxColumns", Number.MAX_VALUE);
    super._afterNew();
  }
  /**
   * @ignore
   */
  updateContainer(container) {
    let paddingLeft = container.get("paddingLeft", 0);
    let paddingRight = container.get("paddingRight", 0);
    let paddingTop = container.get("paddingTop", 0);
    let availableWidth = container.maxWidth() - paddingLeft - paddingRight;
    let minCellWidth = availableWidth;
    let maxCellWidth = 1;
    eachChildren(container, (child) => {
      if (child.get("visible") && child.getPrivate("visible") && !child.get("forceHidden")) {
        if (child.get("position") != "absolute") {
          let childWidth = child.width();
          if (childWidth < minCellWidth) {
            minCellWidth = childWidth;
          }
          if (childWidth > maxCellWidth) {
            maxCellWidth = childWidth;
          }
        }
      }
    });
    minCellWidth = fitToRange(minCellWidth, 1, availableWidth);
    maxCellWidth = fitToRange(maxCellWidth, 1, availableWidth);
    let columnCount = 1;
    if (this.get("fixedWidthGrid")) {
      columnCount = availableWidth / maxCellWidth;
    } else {
      columnCount = availableWidth / minCellWidth;
    }
    columnCount = Math.max(1, Math.floor(columnCount));
    columnCount = Math.min(this.get("maxColumns", Number.MAX_VALUE), columnCount);
    let columnWidths = this.getColumnWidths(container, columnCount, maxCellWidth, availableWidth);
    let prevY = paddingTop;
    let column = 0;
    let maxColumnHeight = 0;
    columnCount = columnWidths.length;
    let prevX = paddingLeft;
    eachChildren(container, (child) => {
      if (child.get("position") == "relative" && child.isVisible()) {
        const marginTop = child.get("marginTop", 0);
        const marginBottom = child.get("marginBottom", 0);
        let bounds = child.adjustedLocalBounds();
        let marginLeft = child.get("marginLeft", 0);
        let marginRight = child.get("marginRight", 0);
        let x2 = prevX + marginLeft - bounds.left;
        let y2 = prevY + marginTop - bounds.top;
        child.setPrivate("x", x2);
        child.setPrivate("y", y2);
        prevX += columnWidths[column] + marginRight;
        maxColumnHeight = Math.max(maxColumnHeight, child.height() + marginTop + marginBottom);
        column++;
        if (column >= columnCount) {
          column = 0;
          prevX = paddingLeft;
          prevY += maxColumnHeight;
        }
      }
    });
  }
  /**
   * @ignore
   */
  getColumnWidths(container, columnCount, maxCellWidth, availableWidth) {
    let totalWidth = 0;
    let columnWidths = [];
    let column = 0;
    eachChildren(container, (child) => {
      let bounds = child.adjustedLocalBounds();
      if (child.get("position") != "absolute" && child.isVisible()) {
        if (this.get("fixedWidthGrid")) {
          columnWidths[column] = maxCellWidth;
        } else {
          columnWidths[column] = Math.max(columnWidths[column] | 0, bounds.right - bounds.left + child.get("marginLeft", 0) + child.get("marginRight", 0));
        }
        if (column < container.children.length - 1) {
          column++;
          if (column == columnCount) {
            column = 0;
          }
        }
      }
    });
    each(columnWidths, (w) => {
      totalWidth += w;
    });
    if (totalWidth > availableWidth) {
      if (columnCount > 2) {
        columnCount -= 1;
        return this.getColumnWidths(container, columnCount, maxCellWidth, availableWidth);
      } else {
        return [availableWidth];
      }
    }
    return columnWidths;
  }
};
Object.defineProperty(GridLayout, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GridLayout"
});
Object.defineProperty(GridLayout, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Layout.classNames.concat([GridLayout.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/TextFormatter.js
var TextFormatter = class {
  /**
   * Replaces brackets with temporary placeholders.
   *
   * @ignore Exclude from docs
   * @param text  Input text
   * @return Escaped text
   */
  static escape(text) {
    return text.replace(/\[\[/g, this.prefix + "1").replace(/([^\/\]]{1})\]\]/g, "$1" + this.prefix + "2").replace(/\]\]/g, this.prefix + "2").replace(/\{\{/g, this.prefix + "3").replace(/\}\}/g, this.prefix + "4").replace(/\'\'/g, this.prefix + "5");
  }
  /**
   * Replaces placeholders back to brackets.
   *
   * @ignore Exclude from docs
   * @param text  Escaped text
   * @return Unescaped text
   */
  static unescape(text) {
    return text.replace(new RegExp(this.prefix + "1", "g"), "[[").replace(new RegExp(this.prefix + "2", "g"), "]]").replace(new RegExp(this.prefix + "3", "g"), "{{").replace(new RegExp(this.prefix + "4", "g"), "}}").replace(new RegExp(this.prefix + "5", "g"), "''");
  }
  /**
   * Cleans up the text text for leftover double square brackets.
   *
   * @ignore Exclude from docs
   * @param text  Input text
   * @return Cleaned up text
   */
  static cleanUp(text) {
    return text.replace(/\[\[/g, "[").replace(/\]\]/g, "]").replace(/\{\{/g, "{").replace(/\}\}/g, "}").replace(/\'\'/g, "'");
  }
  /**
   * Splits string into chunks. (style blocks, quoted blocks, regular blocks)
   *
   * If the second parameter `quotedBlocks` is set to `true` this method will
   * also single out text blocks enclosed within single quotes that no
   * formatting should be applied to, and they should be displayed as is.
   *
   * Default for the above is `false`, so that you can use single quote in text
   * without escaping it.
   *
   * If enabled, single quotes can be escaped by doubling it - adding two
   * single quotes, which will be replaced by a one single quote in the final
   * output.
   *
   * @ignore Exclude from docs
   * @param text          Text to chunk
   * @param quotedBlocks  Use quoted blocks
   * @param noFormatting  Formatting blocks will be treated as regular text
   * @return Array of string chunks
   */
  static chunk(text, quotedBlocks = false, noFormatting = false) {
    let res = [];
    text = this.escape(text);
    let chunks = quotedBlocks ? text.split("'") : [text];
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];
      if (chunk === "") {
        continue;
      }
      if (i % 2 === 0) {
        chunk = chunk.replace(/\]\[/g, "]" + PLACEHOLDER + "[");
        chunk = chunk.replace(/\[\]/g, "[ ]");
        let chunks2 = chunk.split(/[\[\]]+/);
        for (let i2 = 0; i2 < chunks2.length; i2++) {
          let chunk2 = this.cleanUp(this.unescape(chunks2[i2]));
          if (chunk2 === PLACEHOLDER) {
            continue;
          }
          if (chunk2 === "") {
            continue;
          }
          if (i2 % 2 === 0) {
            res.push({
              "type": "value",
              "text": chunk2
            });
          } else {
            res.push({
              "type": noFormatting ? "value" : "format",
              "text": "[" + chunk2 + "]"
            });
          }
        }
      } else {
        let chunks2 = chunk.split(/[\[\]]+/);
        for (let i2 = 0; i2 < chunks2.length; i2++) {
          let chunk2 = this.cleanUp(this.unescape(chunks2[i2]));
          if (chunk2 === "") {
            continue;
          }
          if (i2 % 2 === 0) {
            res.push({
              "type": "text",
              "text": chunk2
            });
          } else if (this.isImage(chunk2)) {
            res.push({
              "type": "image",
              "text": "[" + chunk2 + "]"
            });
          } else {
            res.push({
              "type": "format",
              "text": "[" + chunk2 + "]"
            });
          }
        }
      }
    }
    return res;
  }
  /**
   * Checks if supplied format contains image information and should be
   * formatted as such.
   * I.e.: `[img: myImage.png]`
   *
   * @ignore
   * @param  text  Format
   * @return true if it is an image
   */
  static isImage(text) {
    return text.match(/img[ ]?:/) ? true : false;
  }
  static getTextStyle(style) {
    let format = {};
    if (style == "" || style == "[ ]") {
      return {};
    }
    const q = style.match(/('[^']*')|("[^"]*")/gi);
    if (q) {
      for (let i = 0; i < q.length; i++) {
        style = style.replace(q[i], q[i].replace(/['"]*/g, "").replace(/[ ]+/g, "+"));
      }
    }
    let b = style.match(/([\w\-]*:[\s]?[^;\s\]]*)|(\#[\w]{1,6})|([\w\-]+)|(\/)/gi);
    if (!b) {
      return {};
    }
    for (let i = 0; i < b.length; i++) {
      if (b[i].match(/^(normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900)$/i)) {
        format.fontWeight = b[i];
      } else if (b[i].match(/^(underline|line-through)$/i)) {
        format.textDecoration = b[i];
      } else if (b[i] == "/") {
      } else if (!b[i].match(/:/)) {
        format.fill = Color.fromString(b[i]);
      } else {
        const p = b[i].replace("+", " ").split(/:[ ]*/);
        format[p[0]] = p[1];
      }
    }
    return format;
  }
};
Object.defineProperty(TextFormatter, "prefix", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "__amcharts__"
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Children.js
var Children = class extends List {
  constructor(container) {
    super();
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_container", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._container = container;
    this._events = this.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (x2) => {
          this._onRemoved(x2);
        });
      } else if (change.type === "push") {
        this._onInserted(change.newValue);
      } else if (change.type === "setIndex") {
        this._onRemoved(change.oldValue);
        this._onInserted(change.newValue, change.index);
      } else if (change.type === "insertIndex") {
        this._onInserted(change.newValue, change.index);
      } else if (change.type === "removeIndex") {
        this._onRemoved(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._onRemoved(change.value);
        this._onInserted(change.value, change.newIndex);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
  }
  _onInserted(child, index) {
    child._setParent(this._container, true);
    const childrenDisplay = this._container._childrenDisplay;
    if (index === void 0) {
      childrenDisplay.addChild(child._display);
    } else {
      childrenDisplay.addChildAt(child._display, index);
    }
  }
  _onRemoved(child) {
    this._container._childrenDisplay.removeChild(child._display);
    this._container.markDirtyBounds();
    this._container.markDirty();
  }
  /**
   * Returns `true` if obejct is disposed.
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Permanently dispose this object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._events.dispose();
      each(this.values, (child) => {
        child.dispose();
      });
    }
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/PopulateString.js
function populateString(target, string) {
  if (string != null) {
    string = "" + string;
    string = TextFormatter.escape(string);
    let tags = string.match(/\{([^}]+)\}/g);
    let i;
    if (tags) {
      for (i = 0; i < tags.length; i++) {
        let tag = tags[i].replace(/\{([^}]+)\}/, "$1");
        let value = getTagValue(target, tag, "");
        if (value == null) {
          value = "";
        }
        string = string.split(tags[i]).join(value);
      }
    }
    string = TextFormatter.unescape(string);
  } else {
    string = "";
  }
  return string;
}
function getTagValue(target, tagName, format) {
  let value;
  const dataItem = target.dataItem;
  let parts = [];
  let reg = /(format[a-zA-Z]*)\((.*)\)|([^.]+)/g;
  let matches;
  while (true) {
    matches = reg.exec(tagName);
    if (matches === null) {
      break;
    }
    if (matches[3]) {
      parts.push({
        prop: matches[3]
      });
      const dateFields = target.getDateFormatter().get("dateFields", []);
      const numericFields = target.getNumberFormatter().get("numericFields", []);
      const durationFields = target.getDurationFormatter().get("durationFields", []);
      if (dateFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatDate",
          params: []
        });
      } else if (numericFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatNumber",
          params: []
        });
      } else if (durationFields.indexOf(matches[3]) !== -1) {
        parts.push({
          method: "formatDuration",
          params: []
        });
      }
    } else {
      let params = [];
      if (trim(matches[2]) != "") {
        let reg2 = /'([^']*)'|"([^"]*)"|([0-9\-]+)/g;
        let matches2;
        while (true) {
          matches2 = reg2.exec(matches[2]);
          if (matches2 === null) {
            break;
          }
          params.push(matches2[1] || matches2[2] || matches2[3]);
        }
      }
      parts.push({
        method: matches[1],
        params
      });
    }
  }
  if (dataItem) {
    value = getTagValueFromObject(target, parts, dataItem._settings);
    if (value == null || isObject(value)) {
      value = getTagValueFromObject(target, parts, dataItem);
    }
    let dataContext = dataItem.dataContext;
    if (value == null && dataContext) {
      value = getTagValueFromObject(target, parts, dataContext);
      if (value == null) {
        value = getTagValueFromObject(target, [{
          prop: tagName
        }], dataContext);
      }
      if (value == null && dataContext.dataContext) {
        value = getTagValueFromObject(target, parts, dataContext.dataContext);
      }
    }
    if (value == null && dataItem.component && dataItem.component.dataItem !== dataItem) {
      value = getTagValue(dataItem.component, tagName, format);
    }
  }
  if (value == null) {
    value = getTagValueFromObject(target, parts, target);
  }
  if (value == null && target.parent) {
    value = getTagValue(target.parent, tagName, format);
  }
  return value;
}
function getCustomDataValue(target, prop) {
  const customData = target.getPrivate("customData");
  if (isObject(customData)) {
    return customData[prop];
  }
}
function getTagValueFromObject(target, parts, object, format) {
  let current = object;
  let formatApplied = false;
  for (let i = 0, len = parts.length; i < len; i++) {
    let part = parts[i];
    if (part.prop) {
      if (current instanceof Sprite) {
        let tmp = current.get(part.prop);
        if (tmp == null) tmp = current.getPrivate(part.prop);
        if (tmp == null) tmp = getCustomDataValue(current, part.prop);
        if (tmp == null) tmp = current[part.prop];
        current = tmp;
      } else if (current.get) {
        let tmp = current.get(part.prop);
        if (tmp == null) tmp = current[part.prop];
        current = tmp;
      } else {
        current = current[part.prop];
      }
      if (current == null) {
        return;
      }
    } else {
      switch (part.method) {
        case "formatNumber":
          let numberValue = toNumber(current);
          if (numberValue != null) {
            current = target.getNumberFormatter().format(numberValue, format || part.params[0] || void 0);
            formatApplied = true;
          }
          break;
        case "formatDate":
          let dateValue = toDate(current);
          if (!isDate(dateValue) || isNaN2(dateValue.getTime())) {
            return;
          }
          if (dateValue != null) {
            current = target.getDateFormatter().format(dateValue, format || part.params[0] || void 0);
            formatApplied = true;
          }
          break;
        case "formatDuration":
          let durationValue = toNumber(current);
          if (durationValue != null) {
            current = target.getDurationFormatter().format(durationValue, format || part.params[0] || void 0, part.params[1] || void 0);
            formatApplied = true;
          }
          break;
        case "urlEncode":
        case "encodeURIComponent":
          current = encodeURIComponent(current);
          break;
        default:
          if (current[part.method]) {
            current[part.method].apply(object, part.params);
          }
          break;
      }
    }
  }
  if (!formatApplied) {
    let formatParts = [{
      method: "",
      params: format
    }];
    if (format == null) {
      if (isNumber(current)) {
        formatParts[0].method = "formatNumber";
        formatParts[0].params = "";
      } else if (isDate(current)) {
        formatParts[0].method = "formatDate";
        formatParts[0].params = "";
      }
    } else {
      let formatterType = getFormat(format);
      if (formatterType === "number") {
        formatParts[0].method = "formatNumber";
      } else if (formatterType === "date") {
        formatParts[0].method = "formatDate";
      } else if (formatterType === "duration") {
        formatParts[0].method = "formatDuration";
      }
    }
    if (formatParts[0].method) {
      current = getTagValueFromObject(target, formatParts, current);
    }
  }
  return current;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Container.js
var Container = class _Container extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeContainer()
    });
    Object.defineProperty(this, "_childrenDisplay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeContainer()
    });
    Object.defineProperty(this, "children", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Children(this)
    });
    Object.defineProperty(this, "_percentageSizeChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_percentagePositionChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_prevWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_prevHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_contentMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vsbd0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_vsbd1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this._display.addChild(this._childrenDisplay);
  }
  _dispose() {
    eachReverse(this.allChildren(), (child) => {
      child.dispose();
    });
    if (this.getPrivate("htmlElement")) {
      this._root._removeHTMLContent(this);
    }
    super._dispose();
  }
  _changed() {
    super._changed();
    if (this.isDirty("interactiveChildren")) {
      this._display.interactiveChildren = this.get("interactiveChildren", false);
    }
    if (this.isDirty("layout")) {
      this._prevWidth = 0;
      this._prevHeight = 0;
      this.markDirtyBounds();
      if (this._prevSettings.layout) {
        this.children.each((child) => {
          child.removePrivate("x");
          child.removePrivate("y");
        });
      }
    }
    if (this.isDirty("paddingTop") || this.isDirty("paddingBottom") || this.isDirty("paddingLeft") || this.isDirty("paddingRight")) {
      this.children.each((child) => {
        child.markDirtyPosition();
      });
    }
    if (this.isDirty("maskContent")) {
      const childrenDisplay = this._childrenDisplay;
      let contentMask = this._contentMask;
      if (this.get("maskContent")) {
        if (!contentMask) {
          contentMask = Rectangle.new(this._root, {
            x: -0.5,
            y: -0.5,
            width: this.width() + 1,
            height: this.height() + 1
          });
          this._contentMask = contentMask;
          childrenDisplay.addChildAt(contentMask._display, 0);
          childrenDisplay.mask = contentMask._display;
        }
      } else {
        if (contentMask) {
          childrenDisplay.removeChild(contentMask._display);
          childrenDisplay.mask = null;
          contentMask.dispose();
          this._contentMask = void 0;
        }
      }
    }
  }
  _updateSize() {
    super._updateSize();
    each(this._percentageSizeChildren, (child) => {
      child._updateSize();
    });
    each(this._percentagePositionChildren, (child) => {
      child.markDirtyPosition();
      child._updateSize();
    });
    this.updateBackground();
  }
  updateBackground() {
    const background = this.get("background");
    let bounds = this._localBounds;
    if (bounds && !this.isHidden()) {
      let x2 = bounds.left;
      let y2 = bounds.top;
      let w = bounds.right - x2;
      let h = bounds.bottom - y2;
      let maxWidth = this.get("maxWidth");
      let maxHeight = this.get("maxHeight");
      if (maxHeight) {
        if (h > maxHeight) {
          h = maxHeight;
        }
      }
      if (maxWidth) {
        if (w > maxWidth) {
          w = maxWidth;
        }
      }
      let width = this.width();
      let height = this.height();
      if (background) {
        background.setAll({
          width: w,
          height: h,
          x: x2,
          y: y2
        });
        if (this._display.interactive) {
          background._display.interactive = true;
        }
      }
      const contentMask = this._contentMask;
      if (contentMask) {
        contentMask.setAll({
          width: width + 1,
          height: height + 1
        });
      }
      const verticalScrollbar = this.get("verticalScrollbar");
      if (verticalScrollbar) {
        verticalScrollbar.set("height", height);
        verticalScrollbar.set("x", width - verticalScrollbar.width() - verticalScrollbar.get("marginRight", 0));
        verticalScrollbar.set("end", verticalScrollbar.get("start", 0) + height / this._contentHeight);
        const bg = verticalScrollbar.get("background");
        if (bg) {
          bg.setAll({
            width: verticalScrollbar.width(),
            height
          });
        }
        let visible = true;
        if (this._contentHeight <= height) {
          visible = false;
        }
        verticalScrollbar.setPrivate("visible", visible);
      }
    }
  }
  _applyThemes(force = false) {
    if (super._applyThemes(force)) {
      this.eachChildren((child) => {
        child._applyThemes(force);
      });
      return true;
    } else {
      return false;
    }
  }
  _applyState(name) {
    super._applyState(name);
    if (this.get("setStateOnChildren")) {
      this.eachChildren((child) => {
        child.states.apply(name);
      });
    }
  }
  _applyStateAnimated(name, duration) {
    super._applyStateAnimated(name, duration);
    if (this.get("setStateOnChildren")) {
      this.eachChildren((child) => {
        child.states.applyAnimate(name, duration);
      });
    }
  }
  /**
   * Returns container's inner width (width without padding) in pixels.
   *
   * @return Inner width (px)
   */
  innerWidth() {
    return this.width() - this.get("paddingRight", 0) - this.get("paddingLeft", 0);
  }
  /**
   * Returns container's inner height (height without padding) in pixels.
   *
   * @return Inner height (px)
   */
  innerHeight() {
    return this.height() - this.get("paddingTop", 0) - this.get("paddingBottom", 0);
  }
  _getBounds() {
    if (!this.get("html")) {
      let width = this.get("width");
      let height = this.get("height");
      let pWidth = this.getPrivate("width");
      let pHeight = this.getPrivate("height");
      let bounds = {
        left: 0,
        top: 0,
        right: this.width(),
        bottom: this.height()
      };
      let layout = this.get("layout");
      let horizontal = false;
      let vertical = false;
      if (layout instanceof HorizontalLayout || layout instanceof GridLayout) {
        horizontal = true;
      }
      if (layout instanceof VerticalLayout) {
        vertical = true;
      }
      if ((width != null || pWidth != null) && (height != null || pHeight != null) && !this.get("verticalScrollbar")) {
      } else {
        let m = Number.MAX_VALUE;
        let l = m;
        let r = -m;
        let t = m;
        let b = -m;
        const paddingLeft = this.get("paddingLeft", 0);
        const paddingTop = this.get("paddingTop", 0);
        const paddingRight = this.get("paddingRight", 0);
        const paddingBottom = this.get("paddingBottom", 0);
        this.children.each((child) => {
          if (child.get("position") != "absolute" && child.get("isMeasured")) {
            let childBounds = child.adjustedLocalBounds();
            let childX = child.x();
            let childY = child.y();
            let cl = childX + childBounds.left;
            let cr = childX + childBounds.right;
            let ct = childY + childBounds.top;
            let cb = childY + childBounds.bottom;
            if (horizontal) {
              cl -= child.get("marginLeft", 0);
              cr += child.get("marginRight", 0);
            }
            if (vertical) {
              ct -= child.get("marginTop", 0);
              cb += child.get("marginBottom", 0);
            }
            if (cl < l) {
              l = cl;
            }
            if (cr > r) {
              r = cr;
            }
            if (ct < t) {
              t = ct;
            }
            if (cb > b) {
              b = cb;
            }
          }
        });
        if (l == m) {
          l = 0;
        }
        if (r == -m) {
          r = 0;
        }
        if (t == m) {
          t = 0;
        }
        if (b == -m) {
          b = 0;
        }
        bounds.left = l - paddingLeft;
        bounds.top = t - paddingTop;
        bounds.right = r + paddingRight;
        bounds.bottom = b + paddingBottom;
        const minWidth = this.get("minWidth");
        if (isNumber(minWidth) && minWidth > 0) {
          if (bounds.right - bounds.left < minWidth) {
            if (bounds.right >= minWidth) {
              bounds.left = bounds.right - minWidth;
            } else {
              bounds.right = bounds.left + minWidth;
            }
          }
        }
        const minHeight = this.get("minHeight");
        if (isNumber(minHeight) && minHeight > 0) {
          if (bounds.bottom - bounds.top < minHeight) {
            if (bounds.bottom >= minHeight) {
              bounds.top = bounds.bottom - minHeight;
            } else {
              bounds.bottom = bounds.top + minHeight;
            }
          }
        }
      }
      this._contentWidth = bounds.right - bounds.left;
      this._contentHeight = bounds.bottom - bounds.top;
      if (isNumber(width)) {
        bounds.left = 0;
        bounds.right = width;
      }
      if (isNumber(pWidth)) {
        bounds.left = 0;
        bounds.right = pWidth;
      }
      if (isNumber(height)) {
        bounds.top = 0;
        bounds.bottom = height;
      }
      if (isNumber(pHeight)) {
        bounds.top = 0;
        bounds.bottom = pHeight;
      }
      this._localBounds = bounds;
    } else {
      let bounds = this._localBounds;
      if (bounds) {
        this._contentWidth = bounds.right - bounds.left;
        this._contentHeight = bounds.bottom - bounds.top;
      }
    }
  }
  _updateBounds() {
    const layout = this.get("layout");
    if (layout) {
      layout.updateContainer(this);
    }
    super._updateBounds();
    this.updateBackground();
  }
  /**
   * @ignore
   */
  markDirty() {
    super.markDirty();
    this._root._addDirtyParent(this);
  }
  _prepareChildren() {
    const innerWidth = this.innerWidth();
    const innerHeight = this.innerHeight();
    if (innerWidth != this._prevWidth || innerHeight != this._prevHeight) {
      let layout = this.get("layout");
      let horizontal = false;
      let vertical = false;
      if (layout) {
        if (layout instanceof HorizontalLayout || layout instanceof GridLayout) {
          horizontal = true;
        }
        if (layout instanceof VerticalLayout) {
          vertical = true;
        }
      }
      each(this._percentageSizeChildren, (child) => {
        if (!horizontal) {
          let width = child.get("width");
          if (width instanceof Percent) {
            child.setPrivate("width", width.value * innerWidth);
          }
        }
        if (!vertical) {
          let height = child.get("height");
          if (height instanceof Percent) {
            child.setPrivate("height", height.value * innerHeight);
          }
        }
      });
      each(this._percentagePositionChildren, (child) => {
        child.markDirtyPosition();
        child.markDirtyBounds();
      });
      this._prevWidth = innerWidth;
      this._prevHeight = innerHeight;
      this._sizeDirty = true;
      this.updateBackground();
    }
    this._handleStates();
  }
  _updateHTMLContent() {
    const html = this.get("html", "");
    if (html && html !== "") {
      this._root._setHTMLContent(this, populateString(this, html));
    } else {
      this._root._removeHTMLContent(this);
    }
    this._root._positionHTMLElement(this);
  }
  /**
   * If scrolling is enabled on the Container (by adding `verticalScrollbar`)
   * the Container will scroll in such way so that target element becomes
   * visible if its currently outside of view.
   *
   * @param  child  Target child
   * @since 5.10.5
   */
  scrollToChild(child) {
    const verticalScrollbar = this.get("verticalScrollbar");
    if (verticalScrollbar) {
      let y2 = child.y();
      let h = this.innerHeight();
      let ch = child.height();
      let contentH = this._contentHeight;
      let max2 = 1 - (h - ch / 2) / contentH;
      if (y2 + ch * 0.7 + this._childrenDisplay.y > h || y2 - ch * 0.3 + this._childrenDisplay.y < 0) {
        let pos = Math.max(0, Math.min(max2, (y2 - ch / 2) / contentH));
        verticalScrollbar.animate({
          key: "start",
          to: pos,
          duration: verticalScrollbar.get("animationDuration", 0),
          easing: verticalScrollbar.get("animationEasing")
        });
      }
    }
  }
  _updateChildren() {
    if (this.isDirty("html")) {
      this._updateHTMLContent();
    }
    if (this.isDirty("verticalScrollbar")) {
      const verticalScrollbar = this.get("verticalScrollbar");
      if (verticalScrollbar) {
        verticalScrollbar._setParent(this);
        verticalScrollbar.startGrip.setPrivate("visible", false);
        verticalScrollbar.endGrip.setPrivate("visible", false);
        this.set("maskContent", true);
        this.set("paddingRight", verticalScrollbar.width() + verticalScrollbar.get("marginRight", 0) + verticalScrollbar.get("marginLeft", 0));
        let background = this.get("background");
        if (!background) {
          background = this.set("background", Rectangle.new(this._root, {
            themeTags: ["background"],
            fillOpacity: 0,
            fill: this._root.interfaceColors.get("alternativeBackground")
          }));
        }
        this._vsbd0 = this.events.on("wheel", (event) => {
          const wheelEvent = event.originalEvent;
          if (isLocalEvent(wheelEvent, this)) {
            wheelEvent.preventDefault();
          } else {
            return;
          }
          let shiftY = wheelEvent.deltaY / 5e3;
          const start = verticalScrollbar.get("start", 0);
          const end = verticalScrollbar.get("end", 1);
          if (start + shiftY <= 0) {
            shiftY = -start;
          }
          if (end + shiftY >= 1) {
            shiftY = 1 - end;
          }
          if (start + shiftY >= 0 && end + shiftY <= 1) {
            verticalScrollbar.set("start", start + shiftY);
            verticalScrollbar.set("end", end + shiftY);
          }
        });
        this._disposers.push(this._vsbd0);
        this._vsbd1 = verticalScrollbar.events.on("rangechanged", () => {
          let h = this._contentHeight;
          const childrenDisplay = this._childrenDisplay;
          const contentMask = this._contentMask;
          childrenDisplay.y = -verticalScrollbar.get("start", 0) * h;
          childrenDisplay.markDirtyLayer();
          if (contentMask) {
            contentMask._display.y = -childrenDisplay.y;
            childrenDisplay.mask = contentMask._display;
          }
        });
        this._disposers.push(this._vsbd1);
        this._display.addChild(verticalScrollbar._display);
      } else {
        const previous = this._prevSettings.verticalScrollbar;
        if (previous) {
          this._display.removeChild(previous._display);
          if (this._vsbd0) {
            this._vsbd0.dispose();
          }
          if (this._vsbd1) {
            this._vsbd1.dispose();
          }
          const childrenDisplay = this._childrenDisplay;
          childrenDisplay.y = 0;
          this.setPrivate("height", void 0);
          this.set("maskContent", false);
          this.set("paddingRight", void 0);
        }
      }
    }
    if (this.isDirty("background")) {
      const previous = this._prevSettings["background"];
      if (previous) {
        this._display.removeChild(previous._display);
      }
      const background = this.get("background");
      if (background instanceof Sprite) {
        background.set("isMeasured", false);
        background._setParent(this);
        this._display.addChildAt(background._display, 0);
      }
    }
    if (this.isDirty("mask")) {
      const mask = this.get("mask");
      const previous = this._prevSettings["mask"];
      if (previous) {
        this._display.removeChild(previous._display);
        if (previous != mask) {
          previous.dispose();
        }
      }
      if (mask) {
        const parent = mask.parent;
        if (parent) {
          parent.children.removeValue(mask);
        }
        mask._setParent(this);
        this._display.addChildAt(mask._display, 0);
        this._childrenDisplay.mask = mask._display;
      }
    }
  }
  _processTemplateField() {
    super._processTemplateField();
    this.children.each((child) => {
      child._processTemplateField();
    });
  }
  /**
   * @ignore
   */
  walkChildren(f) {
    this.children.each((child) => {
      if (child instanceof _Container) {
        child.walkChildren(f);
      }
      f(child);
    });
  }
  eachChildren(f) {
    const background = this.get("background");
    if (background) {
      f(background);
    }
    const verticalScrollbar = this.get("verticalScrollbar");
    if (verticalScrollbar) {
      f(verticalScrollbar);
    }
    const mask = this.get("mask");
    if (mask) {
      f(mask);
    }
    this.children.values.forEach((child) => {
      f(child);
    });
  }
  allChildren() {
    const output = [];
    this.eachChildren((x2) => {
      output.push(x2);
    });
    return output;
  }
  _setDataItem(dataItem) {
    const updated = dataItem !== this._dataItem;
    super._setDataItem(dataItem);
    const html = this.get("html", "");
    if (html && html !== "" && updated) {
      this._root._setHTMLContent(this, populateString(this, html));
    }
  }
};
Object.defineProperty(Container, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Container"
});
Object.defineProperty(Container, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Container.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Text.js
var Text = class extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "textStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeTextStyle()
    });
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeText("", this.textStyle)
    });
    Object.defineProperty(this, "_textStyles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "textDecoration",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "shadowOpacity",
        // "leading",
        // "letterSpacing",
        "lineHeight",
        "baselineRatio",
        //"padding",
        // "stroke",
        // "strokeThickness",
        // "trim",
        // "wordWrap",
        "direction",
        "textBaseline",
        "oversizedBehavior",
        "breakWords",
        "ellipsis",
        "minScale",
        "maxChars"
      ]
    });
    Object.defineProperty(this, "_originalScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _updateBounds() {
    if (!this.get("text")) {
      let newBounds = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this._adjustedLocalBounds = newBounds;
    } else {
      super._updateBounds();
      let fillGradient = this.get("fillGradient");
      if (fillGradient) {
        this._display.style.fill = fillGradient.getFill(this);
      }
    }
  }
  _changed() {
    super._changed();
    this._display.clear();
    let textStyle = this.textStyle;
    if (this.isDirty("opacity")) {
      let opacity = this.get("opacity", 1);
      this._display.alpha = opacity;
    }
    if (this.isDirty("text") || this.isDirty("populateText")) {
      this._display.text = this._getText();
      this.markDirtyBounds();
      if (this.get("role") == "tooltip") {
        this._root.updateTooltip(this);
      }
    }
    if (this.isPrivateDirty("tooltipElement")) {
      const tooltipElement = this.getPrivate("tooltipElement");
      if (tooltipElement) {
        this._disposers.push(new Disposer(() => {
          this._root._removeTooltipElement(this);
        }));
      }
    }
    if (this.isDirty("width")) {
      textStyle.wordWrapWidth = this.width();
      this.markDirtyBounds();
    }
    if (this.isDirty("oversizedBehavior")) {
      textStyle.oversizedBehavior = this.get("oversizedBehavior", "none");
      this.markDirtyBounds();
    }
    if (this.isDirty("breakWords")) {
      textStyle.breakWords = this.get("breakWords", false);
      this.markDirtyBounds();
    }
    if (this.isDirty("ellipsis")) {
      textStyle.ellipsis = this.get("ellipsis");
      this.markDirtyBounds();
    }
    if (this.isDirty("ignoreFormatting")) {
      textStyle.ignoreFormatting = this.get("ignoreFormatting", false);
      this.markDirtyBounds();
    }
    if (this.isDirty("minScale")) {
      textStyle.minScale = this.get("minScale", 0);
      this.markDirtyBounds();
    }
    if (this.isDirty("fill") || this.isDirty("fillGradient")) {
      const fill = this.get("fill");
      const fillGradient = this.get("fillGradient");
      const fillOpacity = this.get("fillOpacity");
      if (fillGradient) {
        if (fill) {
          const stops = fillGradient.get("stops", []);
          if (stops.length) {
            each(stops, (stop) => {
              if ((!stop.color || stop.colorInherited) && fill) {
                stop.color = fill;
                stop.colorInherited = true;
              }
              if (stop.opacity == null || stop.opacityInherited) {
                stop.opacity = fillOpacity;
                stop.opacityInherited = true;
              }
            });
          }
        }
        textStyle.fill = fillGradient.getFill(this);
      } else if (fill) {
        textStyle.fill = fill;
      }
    }
    if (this.isDirty("fillOpacity")) {
      let fillOpacity = this.get("fillOpacity", 1);
      if (fillOpacity) {
        textStyle.fillOpacity = fillOpacity;
      }
    }
    if (this.isDirty("maxWidth") || this.isPrivateDirty("maxWidth")) {
      textStyle.maxWidth = this.get("maxWidth", this.getPrivate("maxWidth"));
      this.markDirtyBounds();
    }
    if (this.isDirty("maxHeight") || this.isPrivateDirty("maxHeight")) {
      textStyle.maxHeight = this.get("maxHeight", this.getPrivate("maxHeight"));
      this.markDirtyBounds();
    }
    each(this._textStyles, (styleName) => {
      if (this._dirty[styleName]) {
        textStyle[styleName] = this.get(styleName);
        this.markDirtyBounds();
      }
    });
    textStyle["fontSize"] = this.get("fontSize");
    textStyle["fontFamily"] = this.get("fontFamily");
    this._display.style = textStyle;
    if (this.isDirty("role") && this.get("role") == "tooltip") {
      this._root.updateTooltip(this);
    }
  }
  _getText() {
    let text = this.get("text", "");
    if (this.get("maxChars")) {
      text = truncateTextWithEllipsis(text, this.get("maxChars", 1e8), this.get("breakWords"), this.get("ellipsis"));
    }
    return this.get("populateText") ? populateString(this, text) : text;
  }
  _getAccessibleText() {
    const ariaLabel = this.get("ariaLabel");
    if (ariaLabel !== void 0) {
      return this.get("populateText") ? populateString(this, ariaLabel) : ariaLabel;
    }
    return this._getText();
  }
  /**
   * Forces the text to be re-evaluated and re-populated.
   */
  markDirtyText() {
    this._display.text = this._getText();
    if (this.get("role") == "tooltip") {
      this._root.updateTooltip(this);
    }
    this.markDirtyBounds();
    this.markDirty();
  }
  _setDataItem(dataItem) {
    super._setDataItem(dataItem);
    if (this.get("populateText")) {
      this.markDirtyText();
    }
  }
  getNumberFormatter() {
    if (this.parent) {
      return this.parent.getNumberFormatter();
    } else {
      return super.getNumberFormatter();
    }
  }
  getDateFormatter() {
    if (this.parent) {
      return this.parent.getDateFormatter();
    } else {
      return super.getDateFormatter();
    }
  }
  getDurationFormatter() {
    if (this.parent) {
      return this.parent.getDurationFormatter();
    } else {
      return super.getDurationFormatter();
    }
  }
};
Object.defineProperty(Text, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Text"
});
Object.defineProperty(Text, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Text.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Label.js
var Label = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_textKeys", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [
        "text",
        "fill",
        "fillGradient",
        "fillOpacity",
        "textAlign",
        "fontFamily",
        "fontSize",
        "fontStyle",
        "fontWeight",
        "fontStyle",
        "fontVariant",
        "textDecoration",
        "shadowColor",
        "shadowBlur",
        "shadowOffsetX",
        "shadowOffsetY",
        "shadowOpacity",
        // "leading",
        // "letterSpacing",
        "lineHeight",
        "baselineRatio",
        //"padding",
        // "stroke",
        // "strokeThickness",
        // "trim",
        // "wordWrap",
        "direction",
        "textBaseline",
        "oversizedBehavior",
        "breakWords",
        "ellipsis",
        "minScale",
        "populateText",
        "role",
        "ignoreFormatting",
        "maxChars",
        "ariaLabel"
      ]
    });
  }
  /**
   * @ignore Text is not to be used directly
   */
  get text() {
    return this._text;
  }
  _afterNew() {
    super._afterNew();
    this._makeText();
    each(this._textKeys, (property) => {
      const propValue = this.get(property);
      if (propValue != void 0) {
        this._text.set(property, propValue);
      }
    });
    if (this.get("html", "") !== "") {
      this._text.set("text", "");
    }
    this.onPrivate("maxWidth", () => {
      this._setMaxDimentions();
    });
    this.onPrivate("maxHeight", () => {
      this._setMaxDimentions();
    });
  }
  _makeText() {
    this._text = this.children.push(Text.new(this._root, {}));
  }
  _updateChildren() {
    super._updateChildren();
    const text = this._text;
    each(this._textKeys, (property) => {
      this._text.set(property, this.get(property));
    });
    if (this.isDirty("maxWidth") || this.isDirty("maxHeight") || this.isDirty("rotation")) {
      this._setMaxDimentions();
    }
    if (this.get("html", "") !== "") {
      text.set("text", "");
    } else {
      text.set("text", this.get("text"));
      this._maybeUpdateHTMLColor();
    }
    if (this.isDirty("fill") || this.isDirty("fillGradient")) {
      this._maybeUpdateHTMLColor();
    }
    if (this.isDirty("textAlign") || this.isDirty("width")) {
      const textAlign = this.get("textAlign");
      let x2;
      if (this.get("width") != null) {
        if (textAlign == "right") {
          x2 = p100;
        } else if (textAlign == "center") {
          x2 = p50;
        } else {
          x2 = 0;
        }
      } else {
        if (textAlign == "left" || textAlign == "start") {
          x2 = this.get("paddingLeft", 0);
        } else if (textAlign == "right" || textAlign == "end") {
          x2 = -this.get("paddingRight", 0);
        }
      }
      text.set("x", x2);
    }
    const background = this.get("background");
    if (background) {
      background.setPrivate("visible", text._display.textVisible);
    }
  }
  _maybeUpdateHTMLColor() {
    const htmlElement = this.getPrivate("htmlElement");
    if (htmlElement && this.get("fill")) {
      htmlElement.style.color = this.get("fill").toCSSHex();
    }
  }
  _setMaxDimentions() {
    const rotation = this.get("rotation");
    const vertical = rotation == 90 || rotation == 270 || rotation == -90;
    const text = this._text;
    const maxWidth = this.get("maxWidth", this.getPrivate("maxWidth", Infinity));
    if (isNumber(maxWidth)) {
      text.set(vertical ? "maxHeight" : "maxWidth", maxWidth - this.get("paddingTop", 0) - this.get("paddingBottom", 0));
    } else {
      text.set(vertical ? "maxHeight" : "maxWidth", void 0);
    }
    const maxHeight = this.get("maxHeight", this.getPrivate("maxHeight", Infinity));
    if (isNumber(maxHeight)) {
      text.set(vertical ? "maxWidth" : "maxHeight", maxHeight - this.get("paddingLeft", 0) - this.get("paddingRight", 0));
    } else {
      text.set(vertical ? "maxWidth" : "maxHeight", void 0);
    }
    this.root.events.once("frameended", () => {
      text.markDirtyBounds();
    });
  }
  _setDataItem(dataItem) {
    super._setDataItem(dataItem);
    this._markDirtyKey("text");
    this._markDirtyKey("html");
    const text = this._text;
    if (text.get("populateText")) {
      text.markDirtyText();
    }
    const html = this.get("html");
    if (html && html !== "") {
      this._updateHTMLContent();
    }
  }
  /**
   * Returns text with populated placeholders and formatting if `populateText` is
   * set to `true`.
   *
   * @return Populated text
   */
  getText() {
    return this._text._getText();
  }
  /**
   * Returns "aria-label" text with populated placeholders and formatting
   * if `populateText` is set to `true`.
   *
   * @return Populated text
   */
  getAccessibleText() {
    return this._text._getAccessibleText();
  }
};
Object.defineProperty(Label, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Label"
});
Object.defineProperty(Label, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Label.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/RoundedRectangle.js
var RoundedRectangle = class extends Rectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("cornerRadiusTL") || this.isDirty("cornerRadiusTR") || this.isDirty("cornerRadiusBR") || this.isDirty("cornerRadiusBL")) {
      this._clear = true;
    }
  }
  _draw() {
    let width = this.width();
    let height = this.height();
    let wSign = width / Math.abs(width);
    let hSign = height / Math.abs(height);
    let x2 = 0;
    let y2 = 0;
    const strokeWidth = this.get("strokeWidth", 0);
    if (this.get("containStroke", false)) {
      width -= wSign * strokeWidth;
      height -= hSign * strokeWidth;
      x2 += wSign * strokeWidth / 2;
      y2 += hSign * strokeWidth / 2;
    }
    let w = width;
    let h = height;
    if (isNumber(w) && isNumber(h)) {
      let minSide = Math.min(w, h) / 2;
      let crtl = relativeToValue(this.get("cornerRadiusTL", 8), minSide);
      let crtr = relativeToValue(this.get("cornerRadiusTR", 8), minSide);
      let crbr = relativeToValue(this.get("cornerRadiusBR", 8), minSide);
      let crbl = relativeToValue(this.get("cornerRadiusBL", 8), minSide);
      let maxcr = Math.min(Math.abs(w / 2), Math.abs(h / 2));
      crtl = fitToRange(crtl, 0, maxcr);
      crtr = fitToRange(crtr, 0, maxcr);
      crbr = fitToRange(crbr, 0, maxcr);
      crbl = fitToRange(crbl, 0, maxcr);
      const display = this._display;
      display.moveTo(x2 + crtl * wSign, y2);
      display.lineTo(x2 + w - crtr * wSign, y2);
      if (crtr > 0) {
        display.arcTo(x2 + w, y2, x2 + w, y2 + crtr * hSign, crtr);
      }
      display.lineTo(x2 + w, y2 + h - crbr * hSign);
      if (crbr > 0) {
        display.arcTo(x2 + w, y2 + h, x2 + w - crbr * wSign, y2 + h, crbr);
      }
      display.lineTo(x2 + crbl * wSign, y2 + h);
      if (crbl > 0) {
        display.arcTo(x2, y2 + h, x2, y2 + h - crbl * hSign, crbl);
      }
      display.lineTo(x2, y2 + crtl * hSign);
      if (crtl > 0) {
        display.arcTo(x2, y2, x2 + crtl * wSign, y2, crtl);
      }
      display.closePath();
    }
  }
};
Object.defineProperty(RoundedRectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RoundedRectangle"
});
Object.defineProperty(RoundedRectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Rectangle.classNames.concat([RoundedRectangle.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Button.js
var Button = class extends Container {
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["button"]);
    super._afterNew();
    if (!this._settings.background) {
      this.set("background", RoundedRectangle.new(this._root, {
        themeTags: mergeTags(this._settings.themeTags, ["background"])
      }));
    }
    this.setPrivate("trustBounds", true);
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("icon")) {
      const previous = this._prevSettings.icon;
      const icon = this.get("icon");
      if (icon !== previous) {
        this._disposeProperty("icon");
        if (previous) {
          previous.dispose();
        }
        if (icon) {
          this.children.push(icon);
        }
        this._prevSettings.icon = icon;
      }
    }
    if (this.isDirty("label")) {
      const previous = this._prevSettings.label;
      const label = this.get("label");
      if (label !== previous) {
        this._disposeProperty("label");
        if (previous) {
          previous.dispose();
        }
        if (label) {
          this.children.push(label);
        }
        this._prevSettings.label = label;
      }
    }
  }
};
Object.defineProperty(Button, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Button"
});
Object.defineProperty(Button, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Button.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Data.js
var ListData = class extends List {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "processor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  incrementRef() {
  }
  /**
   * @ignore
   */
  decrementRef() {
  }
  _onPush(newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onPush(newValue);
  }
  _onInsertIndex(index, newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onInsertIndex(index, newValue);
  }
  _onSetIndex(index, oldValue, newValue) {
    if (this.processor) {
      this.processor.processRow(newValue);
    }
    super._onSetIndex(index, oldValue, newValue);
  }
};
var JsonData = class {
  constructor(value) {
    Object.defineProperty(this, "processor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._value = value;
  }
  incrementRef() {
  }
  decrementRef() {
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Component.js
var DataItem = class extends Settings {
  constructor(component, dataContext, settings) {
    super(settings);
    Object.defineProperty(this, "component", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "dataContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "open", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "close", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.dataContext = dataContext;
    this.component = component;
    this._settings.visible = true;
    this._checkDirty();
  }
  /**
   * @ignore
   */
  markDirty() {
    this.component.markDirtyValues(this);
  }
  _startAnimation() {
    this.component._root._addAnimation(this);
  }
  _animationTime() {
    return this.component._root.animationTime;
  }
  _dispose() {
    if (this.component) {
      this.component.disposeDataItem(this);
    }
    super._dispose();
  }
  /**
   * Shows a data item that's currently hidden.
   */
  show(duration) {
    this.setRaw("visible", true);
    if (this.component) {
      this.component.showDataItem(this, duration);
    }
  }
  /**
   * Hides a data item that's currently visible.
   */
  hide(duration) {
    this.setRaw("visible", false);
    if (this.component) {
      this.component.hideDataItem(this, duration);
    }
  }
  isHidden() {
    return !this.get("visible");
  }
};
var Component = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_data", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListData()
    });
    Object.defineProperty(this, "_dataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_mainDataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._dataItems
    });
    Object.defineProperty(this, "valueFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "fields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["id"]
    });
    Object.defineProperty(this, "_valueFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueFieldsF", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fieldsF", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valuesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataChanged", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "inited", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  /**
   * Component's data.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/data/} for more info
   */
  set data(data) {
    data.incrementRef();
    this._data.decrementRef();
    this._data = data;
  }
  /**
   * @return  Data
   */
  get data() {
    return this._data;
  }
  _dispose() {
    super._dispose();
    this._data.decrementRef();
  }
  _onDataClear() {
  }
  _afterNew() {
    super._afterNew();
    this._data.incrementRef();
    this._updateFields();
    this._disposers.push(this.data.events.onAll((change) => {
      const dataItems = this._mainDataItems;
      this.markDirtyValues();
      this._markDirtyGroup();
      this._dataChanged = true;
      if (change.type === "clear") {
        each(dataItems, (dataItem) => {
          dataItem.dispose();
        });
        dataItems.length = 0;
        this._onDataClear();
      } else if (change.type === "push") {
        const dataItem = new DataItem(this, change.newValue, this._makeDataItem(change.newValue));
        dataItems.push(dataItem);
        this.processDataItem(dataItem);
      } else if (change.type === "setIndex") {
        const dataItem = dataItems[change.index];
        const properties = this._makeDataItem(change.newValue);
        if (dataItem.bullets && dataItem.bullets.length == 0) {
          dataItem.bullets = void 0;
        }
        keys(properties).forEach((key) => {
          dataItem.animate({
            key,
            to: properties[key],
            duration: this.get("interpolationDuration", 0),
            easing: this.get("interpolationEasing")
          });
        });
        dataItem.dataContext = change.newValue;
      } else if (change.type === "insertIndex") {
        const dataItem = new DataItem(this, change.newValue, this._makeDataItem(change.newValue));
        dataItems.splice(change.index, 0, dataItem);
        this.processDataItem(dataItem);
      } else if (change.type === "removeIndex") {
        const dataItem = dataItems[change.index];
        dataItem.dispose();
        dataItems.splice(change.index, 1);
      } else if (change.type === "moveIndex") {
        const dataItem = dataItems[change.oldIndex];
        dataItems.splice(change.oldIndex, 1);
        dataItems.splice(change.newIndex, 0, dataItem);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
      this._afterDataChange();
    }));
  }
  _updateFields() {
    if (this.valueFields) {
      this._valueFields = [];
      this._valueFieldsF = {};
      each(this.valueFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueFields.push(key);
          this._valueFieldsF[key] = {
            fieldKey: key + "Field",
            workingKey: key + "Working"
          };
        }
      });
    }
    if (this.fields) {
      this._fields = [];
      this._fieldsF = {};
      each(this.fields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._fields.push(key);
          this._fieldsF[key] = key + "Field";
        }
      });
    }
  }
  /**
   * A list of component's data items.
   *
   * @return  Data items
   */
  get dataItems() {
    return this._dataItems;
  }
  processDataItem(_dataItem) {
  }
  _makeDataItem(data) {
    const output = {};
    if (this._valueFields) {
      each(this._valueFields, (key) => {
        const field = this.get(this._valueFieldsF[key].fieldKey);
        output[key] = data[field];
        output[this._valueFieldsF[key].workingKey] = output[key];
      });
    }
    if (this._fields) {
      each(this._fields, (key) => {
        const field = this.get(this._fieldsF[key]);
        output[key] = data[field];
      });
    }
    return output;
  }
  /**
   * Creates a new data item and processes it.
   *
   * @param   data         Data item settings
   * @param   dataContext  Data context
   * @return               New data item
   */
  makeDataItem(data, dataContext) {
    let dataItem = new DataItem(this, dataContext, data);
    this.processDataItem(dataItem);
    return dataItem;
  }
  /**
   * Adds new explicit data item to series.
   *
   * @param   data         Data item settings
   * @param   dataContext  Data context
   * @return               New data item
   */
  pushDataItem(data, dataContext) {
    const dataItem = this.makeDataItem(data, dataContext);
    this._mainDataItems.push(dataItem);
    return dataItem;
  }
  /**
   * @ignore
   */
  disposeDataItem(_dataItem) {
  }
  /**
   * Shows component's data item.
   *
   * @param   dataItem   Data item
   * @param   _duration  Animation duration in milliseconds
   * @return             Promise
   */
  showDataItem(dataItem, _duration) {
    return __awaiter(this, void 0, void 0, function* () {
      dataItem.set("visible", true);
    });
  }
  /**
   * Hides component's data item.
   *
   * @param   dataItem   Data item
   * @param   _duration  Animation duration in milliseconds
   * @return             Promise
   */
  hideDataItem(dataItem, _duration) {
    return __awaiter(this, void 0, void 0, function* () {
      dataItem.set("visible", false);
    });
  }
  _clearDirty() {
    super._clearDirty();
    this._valuesDirty = false;
  }
  _afterDataChange() {
  }
  _afterChanged() {
    super._afterChanged();
    if (this._dataChanged) {
      const type = "datavalidated";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this
        });
      }
      this._dataChanged = false;
    }
    this.inited = true;
  }
  /**
   * Forces a repaint of the element which relies on data.
   *
   * @since 5.0.21
   */
  markDirtyValues(_dataItem) {
    this.markDirty();
    this._valuesDirty = true;
  }
  _markDirtyGroup() {
    this._dataGrouped = false;
  }
  /**
   * @ignore
   */
  markDirtySize() {
    this._sizeDirty = true;
    this.markDirty();
  }
};
Object.defineProperty(Component, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Component"
});
Object.defineProperty(Component, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Component.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Time.js
var Time_exports = {};
__export(Time_exports, {
  add: () => add,
  checkChange: () => checkChange,
  chooseInterval: () => chooseInterval,
  copy: () => copy,
  getDateIntervalDuration: () => getDateIntervalDuration,
  getDuration: () => getDuration,
  getIntervalDuration: () => getIntervalDuration,
  getNextUnit: () => getNextUnit,
  getTime: () => getTime,
  getUnitValue: () => getUnitValue,
  now: () => now,
  roun: () => roun,
  round: () => round2,
  sleep: () => sleep,
  timeUnitDurations: () => timeUnitDurations
});
function sleep(ms) {
  return new Promise((resolve, _reject) => {
    setTimeout(resolve, ms);
  });
}
var timeUnitDurations = {
  millisecond: 1,
  second: 1e3,
  minute: 6e4,
  hour: 36e5,
  day: 864e5,
  week: 6048e5,
  month: 365.242 / 12 * 864e5,
  year: 31536e6
};
function getNextUnit(unit) {
  switch (unit) {
    case "year":
      return;
    case "month":
      return "year";
    case "week":
      return "month";
    case "day":
      return "month";
    // not a mistake
    case "hour":
      return "day";
    case "minute":
      return "hour";
    case "second":
      return "minute";
    case "millisecond":
      return "second";
  }
}
function getDuration(unit, count) {
  if (count == null) {
    count = 1;
  }
  return timeUnitDurations[unit] * count;
}
function getIntervalDuration(interval) {
  if (interval) {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  }
  return 0;
}
function getDateIntervalDuration(interval, date, firstDateOfWeek, utc, timezone) {
  const unit = interval.timeUnit;
  const count = interval.count;
  if (unit == "hour" || unit == "minute" || unit == "second" || unit == "millisecond") {
    return timeUnitDurations[interval.timeUnit] * interval.count;
  } else {
    const firstTime = round2(new Date(date.getTime()), unit, count, firstDateOfWeek, utc, void 0, timezone).getTime();
    let lastTime = firstTime + count * getDuration(unit) * 1.05;
    lastTime = round2(new Date(lastTime), unit, 1, firstDateOfWeek, utc, void 0, timezone).getTime();
    return lastTime - firstTime;
  }
}
function now() {
  return /* @__PURE__ */ new Date();
}
function getTime() {
  return now().getTime();
}
function copy(date) {
  return new Date(date.getTime());
}
function checkChange(timeOne, timeTwo, unit, utc, timezone) {
  if (timeTwo - timeOne > getDuration(unit, 1.2)) {
    return true;
  }
  let dateOne = new Date(timeOne);
  let dateTwo = new Date(timeTwo);
  if (timezone) {
    dateOne = timezone.convertLocal(dateOne);
    dateTwo = timezone.convertLocal(dateTwo);
  }
  let timeZoneOffset1 = 0;
  let timeZoneOffset2 = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset1 = dateOne.getTimezoneOffset();
    dateOne.setUTCMinutes(dateOne.getUTCMinutes() - timeZoneOffset1);
    timeZoneOffset2 = dateTwo.getTimezoneOffset();
    dateTwo.setUTCMinutes(dateTwo.getUTCMinutes() - timeZoneOffset2);
  }
  let changed = false;
  switch (unit) {
    case "year":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      }
      break;
    case "month":
      if (dateOne.getUTCFullYear() != dateTwo.getUTCFullYear()) {
        changed = true;
      } else if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      }
      break;
    case "day":
      if (dateOne.getUTCMonth() != dateTwo.getUTCMonth()) {
        changed = true;
      } else if (dateOne.getUTCDate() != dateTwo.getUTCDate()) {
        changed = true;
      }
      break;
    case "hour":
      if (dateOne.getUTCHours() != dateTwo.getUTCHours()) {
        changed = true;
      }
      break;
    case "minute":
      if (dateOne.getUTCMinutes() != dateTwo.getUTCMinutes()) {
        changed = true;
      }
      break;
    case "second":
      if (dateOne.getUTCSeconds() != dateTwo.getUTCSeconds()) {
        changed = true;
      }
      break;
    case "millisecond":
      if (dateOne.getTime() != dateTwo.getTime()) {
        changed = true;
      }
      break;
  }
  if (changed) {
    return changed;
  }
  let nextUnit = getNextUnit(unit);
  if (nextUnit) {
    return checkChange(timeOne, timeTwo, nextUnit, utc, timezone);
  } else {
    return false;
  }
}
function add(date, unit, count, utc, timezone) {
  let timeZoneOffset = 0;
  if (!utc && unit != "millisecond") {
    timeZoneOffset = date.getTimezoneOffset();
    if (timezone) {
      timeZoneOffset -= timezone.offsetUTC(date);
    }
    date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
  }
  switch (unit) {
    case "day":
      let day = date.getUTCDate();
      date.setUTCDate(day + count);
      break;
    case "second":
      let seconds = date.getUTCSeconds();
      date.setUTCSeconds(seconds + count);
      break;
    case "millisecond":
      let milliseconds = date.getUTCMilliseconds();
      date.setUTCMilliseconds(milliseconds + count);
      break;
    case "hour":
      let hours = date.getUTCHours();
      date.setUTCHours(hours + count);
      break;
    case "minute":
      let minutes = date.getUTCMinutes();
      date.setUTCMinutes(minutes + count);
      break;
    case "year":
      let year = date.getUTCFullYear();
      date.setUTCFullYear(year + count);
      break;
    case "month":
      const endDays = date.getUTCDate();
      const startDays = new Date(date.getUTCFullYear(), date.getUTCMonth(), 0).getUTCDate();
      let month = date.getUTCMonth();
      if (endDays > startDays) {
        date.setUTCMonth(month + count, startDays);
      } else {
        date.setUTCMonth(month + count);
      }
      break;
    case "week":
      let wday = date.getUTCDate();
      date.setUTCDate(wday + count * 7);
      break;
  }
  if (!utc && unit != "millisecond") {
    date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
    if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
      let newTimeZoneOffset = date.getTimezoneOffset();
      if (timezone) {
        newTimeZoneOffset += timezone.offsetUTC(date);
      }
      if (newTimeZoneOffset != timeZoneOffset) {
        let diff = newTimeZoneOffset - timeZoneOffset;
        date.setUTCMinutes(date.getUTCMinutes() + diff);
        if (date.getTimezoneOffset() != newTimeZoneOffset) {
          date.setUTCMinutes(date.getUTCMinutes() - diff);
        }
      }
    }
  }
  return date;
}
function roun(time, unit, count, root, firstTime) {
  let firstDate;
  if (firstTime != null) {
    firstDate = new Date(firstTime);
  }
  return round2(new Date(time), unit, count, root.locale.firstDayOfWeek, root.utc, firstDate, root.timezone).getTime();
}
function round2(date, unit, count, firstDateOfWeek, utc, firstDate, timezone) {
  if (!timezone || utc) {
    let timeZoneOffset = 0;
    if (!utc && unit != "millisecond") {
      timeZoneOffset = date.getTimezoneOffset();
      date.setUTCMinutes(date.getUTCMinutes() - timeZoneOffset);
    }
    switch (unit) {
      case "day":
        let day = date.getUTCDate();
        if (count > 1) {
          if (firstDate) {
            firstDate = round2(firstDate, "day", 1);
            let difference = date.getTime() - firstDate.getTime();
            let unitCount = Math.floor(difference / getDuration("day") / count);
            let duration = getDuration("day", unitCount * count);
            date.setTime(firstDate.getTime() + duration - timeZoneOffset * getDuration("minute"));
          }
        } else {
          date.setUTCDate(day);
        }
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "second":
        let seconds = date.getUTCSeconds();
        if (count > 1) {
          seconds = Math.floor(seconds / count) * count;
        }
        date.setUTCSeconds(seconds, 0);
        break;
      case "millisecond":
        if (count == 1) {
          return date;
        }
        let milliseconds = date.getUTCMilliseconds();
        milliseconds = Math.floor(milliseconds / count) * count;
        date.setUTCMilliseconds(milliseconds);
        break;
      case "hour":
        let hours = date.getUTCHours();
        if (count > 1) {
          hours = Math.floor(hours / count) * count;
        }
        date.setUTCHours(hours, 0, 0, 0);
        break;
      case "minute":
        let minutes = date.getUTCMinutes();
        if (count > 1) {
          minutes = Math.floor(minutes / count) * count;
        }
        date.setUTCMinutes(minutes, 0, 0);
        break;
      case "month":
        let month = date.getUTCMonth();
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        date.setUTCMonth(month, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "year":
        let year = date.getUTCFullYear();
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        date.setUTCFullYear(year, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        break;
      case "week":
        if (count > 1) {
          if (firstDate) {
            firstDate = round2(firstDate, "week", 1);
            let difference = date.getTime() - firstDate.getTime();
            let unitCount = Math.floor(difference / getDuration("week") / count);
            let duration = getDuration("week", unitCount * count);
            date.setTime(firstDate.getTime() + duration - timeZoneOffset * getDuration("minute"));
          }
        }
        let wday = date.getUTCDate();
        let weekDay = date.getUTCDay();
        if (!isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekDay >= firstDateOfWeek) {
          wday = wday - weekDay + firstDateOfWeek;
        } else {
          wday = wday - (7 + weekDay) + firstDateOfWeek;
        }
        date.setUTCDate(wday);
        date.setUTCHours(0, 0, 0, 0);
        break;
    }
    if (!utc && unit != "millisecond") {
      date.setUTCMinutes(date.getUTCMinutes() + timeZoneOffset);
      if (unit == "day" || unit == "week" || unit == "month" || unit == "year") {
        let newTimeZoneOffset = date.getTimezoneOffset();
        if (newTimeZoneOffset != timeZoneOffset) {
          let diff = newTimeZoneOffset - timeZoneOffset;
          date.setUTCMinutes(date.getUTCMinutes() + diff);
        }
      }
    }
    return date;
  } else {
    if (isNaN(date.getTime())) {
      return date;
    }
    let initialTime = date.getTime();
    let tzoffset = timezone.offsetUTC(date);
    let timeZoneOffset = date.getTimezoneOffset();
    let parsedDate = timezone.parseDate(date);
    let year = parsedDate.year;
    let month = parsedDate.month;
    let day = parsedDate.day;
    let hour = parsedDate.hour;
    let minute = parsedDate.minute;
    let second = parsedDate.second;
    let millisecond = parsedDate.millisecond;
    let weekday = parsedDate.weekday;
    let offsetDif = tzoffset - timeZoneOffset;
    switch (unit) {
      case "day":
        if (count > 1 && firstDate) {
          firstDate = round2(firstDate, "day", 1, firstDateOfWeek, utc, void 0, timezone);
          let difference = date.getTime() - firstDate.getTime();
          let unitCount = Math.floor(difference / getDuration("day") / count);
          let duration = getDuration("day", unitCount * count);
          date.setTime(firstDate.getTime() + duration);
          parsedDate = timezone.parseDate(date);
          year = parsedDate.year;
          month = parsedDate.month;
          day = parsedDate.day;
        }
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "second":
        minute += offsetDif;
        if (count > 1) {
          second = Math.floor(second / count) * count;
        }
        millisecond = 0;
        break;
      case "millisecond":
        minute += offsetDif;
        if (count > 1) {
          millisecond = Math.floor(millisecond / count) * count;
        }
        break;
      case "hour":
        if (count > 1) {
          hour = Math.floor(hour / count) * count;
        }
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "minute":
        if (count > 1) {
          minute = Math.floor(minute / count) * count;
        }
        minute += offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "month":
        if (count > 1) {
          month = Math.floor(month / count) * count;
        }
        day = 1;
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "year":
        if (count > 1) {
          year = Math.floor(year / count) * count;
        }
        month = 0;
        day = 1;
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
      case "week":
        if (!isNumber(firstDateOfWeek)) {
          firstDateOfWeek = 1;
        }
        if (weekday >= firstDateOfWeek) {
          day = day - weekday + firstDateOfWeek;
        } else {
          day = day - (7 + weekday) + firstDateOfWeek;
        }
        hour = 0;
        minute = offsetDif;
        second = 0;
        millisecond = 0;
        break;
    }
    date = new Date(year, month, day, hour, minute, second, millisecond);
    const newTime = date.getTime();
    let hDuration = 36e5;
    if (unit == "hour") {
      hDuration = 36e5 * count;
    }
    if (newTime + hDuration <= initialTime) {
      if (unit == "hour" || unit == "minute" || unit == "second" || unit == "millisecond") {
        date = new Date(newTime + hDuration);
      }
    }
    let newTimeZoneOffset = date.getTimezoneOffset();
    let newTzoffset = timezone.offsetUTC(date);
    let newDiff = newTzoffset - newTimeZoneOffset;
    if (newDiff != offsetDif) {
      date.setTime(date.getTime() + (newDiff - offsetDif) * 6e4);
    }
    return date;
  }
}
function chooseInterval(index, duration, gridCount, intervals) {
  let gridInterval = intervals[index];
  let intervalDuration = getIntervalDuration(gridInterval);
  let lastIndex = intervals.length - 1;
  if (index >= lastIndex) {
    return Object.assign({}, intervals[lastIndex]);
  }
  let count = Math.ceil(duration / intervalDuration);
  if (duration < intervalDuration && index > 0) {
    return Object.assign({}, intervals[index - 1]);
  }
  if (count <= gridCount) {
    return Object.assign({}, intervals[index]);
  } else {
    if (index + 1 < intervals.length) {
      return chooseInterval(index + 1, duration, gridCount, intervals);
    } else {
      return Object.assign({}, intervals[index]);
    }
  }
}
function getUnitValue(date, unit) {
  switch (unit) {
    case "day":
      return date.getDate();
    case "second":
      return date.getSeconds();
    case "millisecond":
      return date.getMilliseconds();
    case "hour":
      return date.getHours();
    case "minute":
      return date.getMinutes();
    case "month":
      return date.getMonth();
    case "year":
      return date.getFullYear();
    case "week":
      return getWeek(date);
  }
}

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Series.js
var Series = class extends Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_aggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_selectionAggregatesCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataProcessed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_psi", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_pei", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_baseSeriesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100,
        position: "absolute"
      })
    });
  }
  _afterNew() {
    this.valueFields.push("value", "customValue");
    super._afterNew();
    this.setPrivate("customData", {});
    this._disposers.push(this.bullets.events.onAll((change) => {
      if (change.type === "clear") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "push") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "setIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "insertIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "removeIndex") {
        this._handleBullets(this.dataItems);
      } else if (change.type === "moveIndex") {
        this._handleBullets(this.dataItems);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _dispose() {
    this.bulletsContainer.dispose();
    super._dispose();
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("startIndex", 0), len);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.min(this.getPrivate("endIndex", len), len);
  }
  _handleBullets(dataItems) {
    each(dataItems, (dataItem) => {
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          bullet.dispose();
        });
        dataItem.bullets = void 0;
      }
    });
    this.markDirtyValues();
  }
  /**
   * Looks up and returns a data item by its ID.
   *
   * @param   id  ID
   * @return      Data item
   */
  getDataItemById(id) {
    return find(this.dataItems, (dataItem) => {
      return dataItem.get("id") == id;
    });
  }
  _makeBullets(dataItem) {
    if (this._shouldMakeBullet(dataItem)) {
      dataItem.bullets = [];
      this.bullets.each((bulletFunction) => {
        this._makeBullet(dataItem, bulletFunction);
      });
    }
  }
  _shouldMakeBullet(_dataItem) {
    return true;
  }
  _makeBullet(dataItem, bulletFunction, index) {
    const bullet = bulletFunction(this._root, this, dataItem);
    if (bullet) {
      bullet._index = index;
      this._makeBulletReal(dataItem, bullet);
    }
    return bullet;
  }
  _makeBulletReal(dataItem, bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      sprite._setDataItem(dataItem);
      sprite.setRaw("position", "absolute");
      this.bulletsContainer.children.push(sprite);
    }
    bullet.series = this;
    dataItem.bullets.push(bullet);
  }
  /**
   * Adds bullet directly to a data item.
   *
   * Please note: method accepts [[Bullet]] instance as a paramter, not a
   * reference to a function.
   *
   * You should add Bullet instance, not a method like you do it on series.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/common-elements/bullets/#Adding_directly_to_data_item} for more info
   * @since 5.6.0
   *
   * @param  dataItem  Target data item
   * @param  bullet    Bullet instance
   */
  addBullet(dataItem, bullet) {
    if (!dataItem.bullets) {
      dataItem.bullets = [];
    }
    if (bullet) {
      this._makeBulletReal(dataItem, bullet);
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._aggregatesCalculated = false;
    this._baseSeriesDirty = false;
    this._selectionAggregatesCalculated = false;
  }
  _prepareChildren() {
    super._prepareChildren();
    let startIndex = this.startIndex();
    let endIndex = this.endIndex();
    if (this.isDirty("name")) {
      this.updateLegendValue();
    }
    if (this.isDirty("heatRules")) {
      this._valuesDirty = true;
    }
    if (this.isPrivateDirty("baseValueSeries")) {
      const baseValueSeries = this.getPrivate("baseValueSeries");
      if (baseValueSeries) {
        this._disposers.push(baseValueSeries.onPrivate("startIndex", () => {
          this._baseSeriesDirty = true;
          this.markDirtyValues();
        }));
      }
    }
    const calculateAggregates = this.get("calculateAggregates");
    if (calculateAggregates) {
      if (this._valuesDirty && !this._dataProcessed) {
        if (!this._aggregatesCalculated) {
          this._calculateAggregates(0, this.dataItems.length);
          this._aggregatesCalculated = true;
          if (startIndex != 0) {
            this._psi = void 0;
          }
        }
      }
      if ((this._psi != startIndex || this._pei != endIndex || this.isPrivateDirty("adjustedStartIndex")) && !this._selectionAggregatesCalculated) {
        if (startIndex === 0 && endIndex === this.dataItems.length && this._aggregatesCalculated) {
        } else {
          this._calculateAggregates(startIndex, endIndex);
        }
        this._selectionAggregatesCalculated = true;
      }
    }
    if (this.isDirty("tooltip")) {
      let tooltip = this.get("tooltip");
      if (tooltip) {
        tooltip.hide(0);
        tooltip.set("tooltipTarget", this);
      }
    }
    if (this.isDirty("fill") || this.isDirty("stroke")) {
      let markerRectangle;
      const legendDataItem = this.get("legendDataItem");
      if (legendDataItem) {
        markerRectangle = legendDataItem.get("markerRectangle");
        if (markerRectangle) {
          if (this.isVisible()) {
            if (this.isDirty("stroke")) {
              let stroke = this.get("stroke");
              markerRectangle.set("stroke", stroke);
            }
            if (this.isDirty("fill")) {
              let fill = this.get("fill");
              markerRectangle.set("fill", fill);
            }
          }
        }
      }
      this.updateLegendMarker(void 0);
    }
    if (this.bullets.length > 0) {
      let startIndex2 = this.startIndex();
      let endIndex2 = this.endIndex();
      if (endIndex2 < this.dataItems.length) {
        endIndex2++;
      }
      for (let i = startIndex2; i < endIndex2; i++) {
        let dataItem = this.dataItems[i];
        if (!dataItem.bullets) {
          this._makeBullets(dataItem);
        }
      }
    }
  }
  _handleRemoved() {
  }
  /**
   * @ignore
   */
  _adjustStartIndex(index) {
    return index;
  }
  _calculateAggregates(startIndex, endIndex) {
    let fields = this._valueFields;
    if (!fields) {
      throw new Error("No value fields are set for the series.");
    }
    const sum2 = {};
    const absSum = {};
    const count = {};
    const low = {};
    const high = {};
    const open = {};
    const close = {};
    const average = {};
    const previous = {};
    each(fields, (key) => {
      sum2[key] = 0;
      absSum[key] = 0;
      count[key] = 0;
    });
    each(fields, (key) => {
      let change = key + "Change";
      let changePercent = key + "ChangePercent";
      let changePrevious = key + "ChangePrevious";
      let changePreviousPercent = key + "ChangePreviousPercent";
      let changeSelection = key + "ChangeSelection";
      let changeSelectionPercent = key + "ChangeSelectionPercent";
      let openKey = "valueY";
      if (key == "valueX" || key == "openValueX" || key == "lowValueX" || key == "highValueX") {
        openKey = "valueX";
      }
      const baseValueSeries = this.getPrivate("baseValueSeries");
      const adjustedStartIndex = this.getPrivate("adjustedStartIndex", startIndex);
      for (let i = adjustedStartIndex; i < endIndex; i++) {
        const dataItem = this.dataItems[i];
        if (dataItem) {
          let value = dataItem.get(key);
          if (value != null) {
            count[key]++;
            sum2[key] += value;
            absSum[key] += Math.abs(value);
            average[key] = sum2[key] / count[key];
            if (low[key] > value || low[key] == null) {
              low[key] = value;
            }
            if (high[key] < value || high[key] == null) {
              high[key] = value;
            }
            close[key] = value;
            if (open[key] == null) {
              open[key] = value;
              previous[key] = value;
              if (baseValueSeries) {
                open[openKey] = baseValueSeries._getBase(openKey);
              }
            }
            if (startIndex === 0) {
              dataItem.setRaw(change, value - open[openKey]);
              dataItem.setRaw(changePercent, (value - open[openKey]) / open[openKey] * 100);
            }
            dataItem.setRaw(changePrevious, value - previous[openKey]);
            dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
            dataItem.setRaw(changeSelection, value - open[openKey]);
            dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
            previous[key] = value;
          }
        }
      }
      if (endIndex < this.dataItems.length - 1) {
        const dataItem = this.dataItems[endIndex];
        if (dataItem) {
          let value = dataItem.get(key);
          dataItem.setRaw(changePrevious, value - previous[openKey]);
          dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
          dataItem.setRaw(changeSelection, value - open[openKey]);
          dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
        }
      }
      if (startIndex > 0) {
        startIndex--;
      }
      delete previous[key];
      for (let i = startIndex; i < adjustedStartIndex; i++) {
        const dataItem = this.dataItems[i];
        if (dataItem) {
          let value = dataItem.get(key);
          if (previous[key] == null) {
            previous[key] = value;
          }
          if (value != null) {
            dataItem.setRaw(changePrevious, value - previous[openKey]);
            dataItem.setRaw(changePreviousPercent, (value - previous[openKey]) / previous[openKey] * 100);
            dataItem.setRaw(changeSelection, value - open[openKey]);
            dataItem.setRaw(changeSelectionPercent, (value - open[openKey]) / open[openKey] * 100);
            previous[key] = value;
          }
        }
      }
    });
    each(fields, (key) => {
      this.setPrivate(key + "AverageSelection", average[key]);
      this.setPrivate(key + "CountSelection", count[key]);
      this.setPrivate(key + "SumSelection", sum2[key]);
      this.setPrivate(key + "AbsoluteSumSelection", absSum[key]);
      this.setPrivate(key + "LowSelection", low[key]);
      this.setPrivate(key + "HighSelection", high[key]);
      this.setPrivate(key + "OpenSelection", open[key]);
      this.setPrivate(key + "CloseSelection", close[key]);
    });
    if (startIndex === 0 && endIndex === this.dataItems.length) {
      each(fields, (key) => {
        this.setPrivate(key + "Average", average[key]);
        this.setPrivate(key + "Count", count[key]);
        this.setPrivate(key + "Sum", sum2[key]);
        this.setPrivate(key + "AbsoluteSum", absSum[key]);
        this.setPrivate(key + "Low", low[key]);
        this.setPrivate(key + "High", high[key]);
        this.setPrivate(key + "Open", open[key]);
        this.setPrivate(key + "Close", close[key]);
      });
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._psi = this.startIndex();
    this._pei = this.endIndex();
    if (this.isDirty("visible")) {
      this.bulletsContainer.set("visible", this.get("visible"));
    }
    const rules = this.get("heatRules");
    if (this._valuesDirty && rules && rules.length > 0) {
      each(rules, (rule) => {
        const minValue = rule.minValue || this.getPrivate(rule.dataField + "Low") || 0;
        const maxValue = rule.maxValue || this.getPrivate(rule.dataField + "High") || 0;
        each(rule.target._entities, (target) => {
          const value = target.dataItem.get(rule.dataField);
          if (!isNumber(value)) {
            if (rule.neutral) {
              target.set(rule.key, rule.neutral);
            }
            const states = target.states;
            if (states) {
              const defaultState = states.lookup("default");
              if (defaultState && rule.neutral) {
                defaultState.set(rule.key, rule.neutral);
              }
            }
            if (!rule.customFunction) {
              return;
            }
          }
          if (rule.customFunction) {
            rule.customFunction.call(this, target, minValue, maxValue, value);
          } else {
            let percent2;
            if (rule.logarithmic) {
              percent2 = (Math.log(value) * Math.LOG10E - Math.log(minValue) * Math.LOG10E) / (Math.log(maxValue) * Math.LOG10E - Math.log(minValue) * Math.LOG10E);
            } else {
              percent2 = (value - minValue) / (maxValue - minValue);
            }
            if (isNumber(value) && (!isNumber(percent2) || Math.abs(percent2) == Infinity)) {
              percent2 = 0.5;
            }
            let propertyValue;
            if (isNumber(rule.min)) {
              propertyValue = rule.min + (rule.max - rule.min) * percent2;
            } else if (rule.min instanceof Color) {
              propertyValue = Color.interpolate(percent2, rule.min, rule.max);
            } else if (rule.min instanceof Percent) {
              propertyValue = percentInterpolate(percent2, rule.min, rule.max);
            }
            target.set(rule.key, propertyValue);
            const states = target.states;
            if (states) {
              const defaultState = states.lookup("default");
              if (defaultState) {
                defaultState.set(rule.key, propertyValue);
              }
            }
          }
        });
      });
    }
    if (this.get("visible")) {
      let count = this.dataItems.length;
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      if (endIndex < count) {
        endIndex++;
      }
      if (startIndex > 0) {
        startIndex--;
      }
      for (let i = 0; i < startIndex; i++) {
        this._hideBullets(this.dataItems[i]);
      }
      for (let i = startIndex; i < endIndex; i++) {
        this._positionBullets(this.dataItems[i]);
      }
      for (let i = endIndex; i < count; i++) {
        this._hideBullets(this.dataItems[i]);
      }
    }
  }
  _positionBullets(dataItem) {
    if (dataItem.bullets) {
      each(dataItem.bullets, (bullet) => {
        this._positionBullet(bullet);
        const sprite = bullet.get("sprite");
        if (bullet.get("dynamic")) {
          if (sprite) {
            sprite._markDirtyKey("fill");
            sprite.markDirtySize();
          }
          if (sprite instanceof Container) {
            sprite.walkChildren((child) => {
              child._markDirtyKey("fill");
              child.markDirtySize();
              if (child instanceof Label) {
                child.text.markDirtyText();
              }
            });
          }
        }
        if (sprite instanceof Label && sprite.get("populateText")) {
          sprite.text.markDirtyText();
        }
      });
    }
  }
  _hideBullets(dataItem) {
    if (dataItem.bullets) {
      each(dataItem.bullets, (bullet) => {
        let sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      });
    }
  }
  _positionBullet(_bullet) {
  }
  _placeBulletsContainer(chart) {
    chart.bulletsContainer.children.moveValue(this.bulletsContainer);
  }
  _removeBulletsContainer() {
    const bulletsContainer = this.bulletsContainer;
    if (bulletsContainer.parent) {
      bulletsContainer.parent.children.removeValue(bulletsContainer);
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        bullet.dispose();
      });
      dataItem.bullets = void 0;
    }
  }
  _getItemReaderLabel() {
    return "";
  }
  /**
   * Shows series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  showDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      showDataItem: {
        get: () => super.showDataItem
      }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.showDataItem.call(this, dataItem, duration)];
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            promises.push(sprite.show(duration));
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * Hides series's data item.
   *
   * @param   dataItem  Data item
   * @param   duration  Animation duration in milliseconds
   * @return            Promise
   */
  hideDataItem(dataItem, duration) {
    const _super = Object.create(null, {
      hideDataItem: {
        get: () => super.hideDataItem
      }
    });
    return __awaiter(this, void 0, void 0, function* () {
      const promises = [_super.hideDataItem.call(this, dataItem, duration)];
      const bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          const sprite = bullet.get("sprite");
          if (sprite) {
            promises.push(sprite.hide(duration));
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  _sequencedShowHide(show, duration) {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.get("sequencedInterpolation")) {
        if (!isNumber(duration)) {
          duration = this.get("interpolationDuration", 0);
        }
        if (duration > 0) {
          const startIndex = this.startIndex();
          const endIndex = this.endIndex();
          yield Promise.all(map(this.dataItems, (dataItem, i) => __awaiter(this, void 0, void 0, function* () {
            let realDuration = duration || 0;
            if (i < startIndex - 10 || i > endIndex + 10) {
              realDuration = 0;
            }
            let delay = this.get("sequencedDelay", 0) + realDuration / (endIndex - startIndex);
            yield sleep(delay * (i - startIndex));
            if (show) {
              yield this.showDataItem(dataItem, realDuration);
            } else {
              yield this.hideDataItem(dataItem, realDuration);
            }
          })));
        } else {
          yield Promise.all(map(this.dataItems, (dataItem) => {
            if (show) {
              return this.showDataItem(dataItem, 0);
            } else {
              return this.hideDataItem(dataItem, 0);
            }
          }));
        }
      }
    });
  }
  /**
   * @ignore
   */
  updateLegendValue(dataItem) {
    if (dataItem) {
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const valueLabel = legendDataItem.get("valueLabel");
        if (valueLabel) {
          const text = valueLabel.text;
          let txt = "";
          valueLabel._setDataItem(dataItem);
          txt = this.get("legendValueText", text.get("text", ""));
          valueLabel.set("text", txt);
          text.markDirtyText();
        }
        const label = legendDataItem.get("label");
        if (label) {
          const text = label.text;
          let txt = "";
          label._setDataItem(dataItem);
          txt = this.get("legendLabelText", text.get("text", ""));
          label.set("text", txt);
          text.markDirtyText();
        }
      }
    }
  }
  /**
   * @ignore
   */
  updateLegendMarker(_dataItem) {
  }
  _onHide() {
    super._onHide();
    const tooltip = this.getTooltip();
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  hoverDataItem(_dataItem) {
  }
  /**
   * @ignore
   */
  unhoverDataItem(_dataItem) {
  }
  /**
   * @ignore
   */
  _getBase(key) {
    const dataItem = this.dataItems[this.startIndex()];
    if (dataItem) {
      return dataItem.get(key);
    }
    return 0;
  }
};
Object.defineProperty(Series, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Series"
});
Object.defineProperty(Series, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Component.classNames.concat([Series.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Draw.js
function segmentedLine(display, segments) {
  for (let s3 = 0, len = segments.length; s3 < len; s3++) {
    const groups = segments[s3];
    if (groups.length > 0) {
      let firstGroup = groups[0];
      if (firstGroup.length > 0) {
        let firstPoint = firstGroup[0];
        display.moveTo(firstPoint.x, firstPoint.y);
        for (let g = 0, len2 = groups.length; g < len2; g++) {
          line(display, groups[g]);
        }
      }
    }
  }
}
function line(display, points) {
  for (let p = 0, len = points.length; p < len; p++) {
    const point5 = points[p];
    display.lineTo(point5.x, point5.y);
  }
}

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Line.js
var Line = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("points") || this.isDirty("segments") || this._sizeDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const points = this.get("points");
      const segments = this.get("segments");
      if (points && points.length > 0) {
        let point5 = points[0];
        this._display.moveTo(point5.x, point5.y);
        segmentedLine(this._display, [[points]]);
      } else if (segments) {
        segmentedLine(this._display, segments);
      } else if (!this.get("draw")) {
        let w = this.width();
        let h = this.height();
        this._display.moveTo(0, 0);
        this._display.lineTo(w, h);
      }
    }
  }
};
Object.defineProperty(Line, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Line"
});
Object.defineProperty(Line, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Line.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/RadialText.js
var RadialText = class extends Text {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makeRadialText("", this.textStyle)
    });
  }
  _afterNew() {
    super._afterNew();
  }
  _beforeChanged() {
    super._beforeChanged();
    this._display.clear();
    if (this.isDirty("textType")) {
      this._display.textType = this.get("textType");
      this.markDirtyBounds();
    }
    if (this.isDirty("radius")) {
      this._display.radius = this.get("radius");
      this.markDirtyBounds();
    }
    if (this.isDirty("startAngle")) {
      this._display.startAngle = (this.get("startAngle", 0) + 90) * RADIANS;
      this.markDirtyBounds();
    }
    if (this.isDirty("inside")) {
      this._display.inside = this.get("inside");
      this.markDirtyBounds();
    }
    if (this.isDirty("orientation")) {
      this._display.orientation = this.get("orientation");
      this.markDirtyBounds();
    }
    if (this.isDirty("kerning")) {
      this._display.kerning = this.get("kerning");
      this.markDirtyBounds();
    }
  }
};
Object.defineProperty(RadialText, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialText"
});
Object.defineProperty(RadialText, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Text.classNames.concat([RadialText.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/RadialLabel.js
var RadialLabel = class extends Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_flipped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this._textKeys.push("textType", "kerning");
    super._afterNew();
  }
  _makeText() {
    this._text = this.children.push(RadialText.new(this._root, {}));
  }
  /**
   * Returns base radius in pixels.
   *
   * @return Base radius
   */
  baseRadius() {
    const radiusPrivate = this.getPrivate("radius", 0);
    const innerRadiusPrivate = this.getPrivate("innerRadius", 0);
    const baseRadius = this.get("baseRadius", 0);
    return innerRadiusPrivate + relativeToValue(baseRadius, radiusPrivate - innerRadiusPrivate);
  }
  /**
   * Returns radius adjustment in pixels.
   *
   * @return Radius
   */
  radius() {
    const inside = this.get("inside", false);
    return this.baseRadius() + this.get("radius", 0) * (inside ? -1 : 1);
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("baseRadius") || this.isPrivateDirty("radius") || this.isPrivateDirty("innerRadius") || this.isDirty("labelAngle") || this.isDirty("radius") || this.isDirty("inside") || this.isDirty("orientation") || this.isDirty("textType")) {
      const textType = this.get("textType", "adjusted");
      const inside = this.get("inside", false);
      const orientation = this.get("orientation");
      let labelAngle = normalizeAngle(this.get("labelAngle", 0));
      this._text.set("startAngle", this.get("labelAngle", 0));
      this._text.set("inside", inside);
      const sin3 = sin(labelAngle);
      const cos3 = cos(labelAngle);
      let baseRadius = this.baseRadius();
      let radius = this.radius();
      this._display.angle = 0;
      if (textType == "circular") {
        this.setAll({
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0
        });
        this.setRaw("x", void 0);
        this.setRaw("y", void 0);
        this._text.set("orientation", orientation);
        this._text.set("radius", radius);
      } else {
        if (baseRadius == 0) {
          labelAngle = 0;
          radius = 0;
        }
        let x2 = radius * cos3;
        let y2 = radius * sin3;
        if (textType == "radial") {
          this.setRaw("x", x2);
          this.setRaw("y", y2);
          if (labelAngle < 90 || labelAngle > 270 || orientation != "auto") {
            this._display.angle = labelAngle;
            this._flipped = false;
          } else {
            this._display.angle = labelAngle + 180;
            this._flipped = true;
          }
          this._dirty.rotation = false;
        } else if (textType == "adjusted") {
          this.setRaw("centerX", p50);
          this.setRaw("centerY", p50);
          this.setRaw("x", x2);
          this.setRaw("y", y2);
        } else if (textType == "regular") {
          this.setRaw("x", x2);
          this.setRaw("y", y2);
        }
      }
      this.markDirtyPosition();
      this.markDirtyBounds();
    }
  }
  _updatePosition() {
    const textType = this.get("textType", "regular");
    const inside = this.get("inside", false);
    let dx = 0;
    let dy = 0;
    let labelAngle = this.get("labelAngle", 0);
    let bounds = this.localBounds();
    let w = bounds.right - bounds.left;
    let h = bounds.bottom - bounds.top;
    if (textType == "radial") {
      if (this._flipped) {
        let centerX = this.get("centerX");
        if (centerX instanceof Percent) {
          w = w * (1 - centerX.value * 2);
        }
        dx = w * cos(labelAngle);
        dy = w * sin(labelAngle);
      }
    } else if (!inside && textType == "adjusted") {
      dx = w / 2 * cos(labelAngle);
      dy = h / 2 * sin(labelAngle);
    }
    this.setRaw("dx", dx);
    this.setRaw("dy", dy);
    super._updatePosition();
  }
  /**
   * @ignore
   */
  get text() {
    return this._text;
  }
};
Object.defineProperty(RadialLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialLabel"
});
Object.defineProperty(RadialLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([RadialLabel.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Scrollbar.js
var Scrollbar = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeThumb()
    });
    Object.defineProperty(this, "startGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    Object.defineProperty(this, "endGrip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._makeButton()
    });
    Object.defineProperty(this, "_thumbBusy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_startDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_endDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_thumbDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_gripDown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _addOrientationClass() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["scrollbar", this._settings.orientation]);
    if (!this._settings.background) {
      this._settings.background = RoundedRectangle.new(this._root, {
        themeTags: mergeTags(this._settings.themeTags, ["main", "background"])
      });
    }
  }
  _makeButton() {
    return this.children.push(Button.new(this._root, {
      themeTags: ["resize", "button", this.get("orientation")],
      icon: Graphics.new(this._root, {
        themeTags: ["icon"]
      })
    }));
  }
  _makeThumb() {
    return this.children.push(RoundedRectangle.new(this._root, {
      themeTags: ["thumb", this.get("orientation")]
    }));
  }
  _handleAnimation(animation) {
    if (animation) {
      this._disposers.push(animation.events.on("stopped", () => {
        this.setPrivateRaw("isBusy", false);
        this._thumbBusy = false;
      }));
    }
  }
  _afterNew() {
    this._addOrientationClass();
    super._afterNew();
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const thumb = this.thumb;
    const background = this.get("background");
    if (background) {
      this._disposers.push(background.events.on("click", (event) => {
        this.setPrivateRaw("isBusy", true);
        const point5 = this._display.toLocal(event.point);
        const w = this.width();
        const h = this.height();
        const orientation = this.get("orientation");
        let newMiddle;
        if (orientation == "vertical") {
          newMiddle = (point5.y - thumb.height() / 2) / h;
        } else {
          newMiddle = (point5.x - thumb.width() / 2) / w;
        }
        let newCoordinate;
        let key;
        if (orientation == "vertical") {
          newCoordinate = newMiddle * h;
          key = "y";
        } else {
          newCoordinate = newMiddle * w;
          key = "x";
        }
        const duration = this.get("animationDuration", 0);
        if (duration > 0) {
          this._thumbBusy = true;
          this._handleAnimation(this.thumb.animate({
            key,
            to: newCoordinate,
            duration,
            easing: this.get("animationEasing")
          }));
        } else {
          this.thumb.set(key, newCoordinate);
          this._root.events.once("frameended", () => {
            this.setPrivateRaw("isBusy", false);
          });
        }
      }));
    }
    this._disposers.push(thumb.events.on("dblclick", (event) => {
      if (!isLocalEvent(event.originalEvent, this)) {
        return;
      }
      const duration = this.get("animationDuration", 0);
      const easing = this.get("animationEasing");
      this.animate({
        key: "start",
        to: 0,
        duration,
        easing
      });
      this.animate({
        key: "end",
        to: 1,
        duration,
        easing
      });
    }));
    this._disposers.push(startGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._startDown = true;
      this._gripDown = "start";
    }));
    this._disposers.push(endGrip.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._endDown = true;
      this._gripDown = "end";
    }));
    this._disposers.push(thumb.events.on("pointerdown", () => {
      this.setPrivateRaw("isBusy", true);
      this._thumbDown = true;
      this._gripDown = void 0;
    }));
    this._disposers.push(startGrip.events.on("globalpointerup", () => {
      if (this._startDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._startDown = false;
    }));
    this._disposers.push(endGrip.events.on("globalpointerup", () => {
      if (this._endDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._endDown = false;
    }));
    this._disposers.push(thumb.events.on("globalpointerup", () => {
      if (this._thumbDown) {
        this.setPrivateRaw("isBusy", false);
        this._released();
      }
      this._thumbDown = false;
    }));
    this._disposers.push(startGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("x", () => {
      this._updateThumb();
    }));
    this._disposers.push(startGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(endGrip.on("y", () => {
      this._updateThumb();
    }));
    this._disposers.push(thumb.events.on("positionchanged", () => {
      this._updateGripsByThumb();
    }));
    if (this.get("orientation") == "vertical") {
      startGrip.set("x", 0);
      endGrip.set("x", 0);
      this._disposers.push(thumb.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height() - thumb.height()), 0);
      }));
      this._disposers.push(thumb.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("x", (_value) => {
        return this.width() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("y", (value) => {
        return Math.max(Math.min(Number(value), this.height()), 0);
      }));
    } else {
      startGrip.set("y", 0);
      endGrip.set("y", 0);
      this._disposers.push(thumb.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width() - thumb.width()), 0);
      }));
      this._disposers.push(thumb.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(endGrip.adapters.add("y", (_value) => {
        return this.height() / 2;
      }));
      this._disposers.push(startGrip.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
      this._disposers.push(endGrip.adapters.add("x", (value) => {
        return Math.max(Math.min(Number(value), this.width()), 0);
      }));
    }
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("end") || this.isDirty("start") || this._sizeDirty) {
      this.updateGrips();
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("start") || this.isDirty("end")) {
      const eventType = "rangechanged";
      if (this.events.isEnabled(eventType)) {
        this.events.dispatch(eventType, {
          type: eventType,
          target: this,
          start: this.get("start", 0),
          end: this.get("end", 1),
          grip: this._gripDown
        });
      }
    }
  }
  _released() {
    const eventType = "released";
    if (this.events.isEnabled(eventType)) {
      this.events.dispatch(eventType, {
        type: eventType,
        target: this
      });
    }
  }
  /**
   * @ignore
   */
  updateGrips() {
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const orientation = this.get("orientation");
    const height = this.height();
    const width = this.width();
    if (orientation == "vertical") {
      startGrip.set("y", height * this.get("start", 0));
      endGrip.set("y", height * this.get("end", 1));
    } else {
      startGrip.set("x", width * this.get("start", 0));
      endGrip.set("x", width * this.get("end", 1));
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    startGrip.set("ariaLabel", this._t("From %1", void 0, fromValue));
    startGrip.set("ariaValueNow", "" + from);
    startGrip.set("ariaValueText", from + "%");
    startGrip.set("ariaValueMin", "0");
    startGrip.set("ariaValueMax", "100");
    endGrip.set("ariaLabel", this._t("To %1", void 0, toValue));
    endGrip.set("ariaValueNow", "" + to);
    endGrip.set("ariaValueText", to + "%");
    endGrip.set("ariaValueMin", "0");
    endGrip.set("ariaValueMax", "100");
  }
  _updateThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    const height = this.height();
    const width = this.width();
    let x0 = startGrip.x();
    let x1 = endGrip.x();
    let y0 = startGrip.y();
    let y1 = endGrip.y();
    let start = 0;
    let end = 1;
    if (this.get("orientation") == "vertical") {
      if (isNumber(y0) && isNumber(y1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("height", y1 - y0);
          thumb.set("y", y0);
        }
        start = y0 / height;
        end = y1 / height;
      }
    } else {
      if (isNumber(x0) && isNumber(x1)) {
        if (!this._thumbBusy && !thumb.isDragging()) {
          thumb.set("width", x1 - x0);
          thumb.set("x", x0);
        }
        start = x0 / width;
        end = x1 / width;
      }
    }
    if (this.getPrivate("isBusy") && (this.get("start") != start || this.get("end") != end)) {
      this.set("start", start);
      this.set("end", end);
    }
    const valueFunction = this.getPrivate("positionTextFunction");
    const from = Math.round(this.get("start", 0) * 100);
    const to = Math.round(this.get("end", 0) * 100);
    let fromValue;
    let toValue;
    if (valueFunction) {
      fromValue = valueFunction.call(this, this.get("start", 0));
      toValue = valueFunction.call(this, this.get("end", 0));
    } else {
      fromValue = from + "%";
      toValue = to + "%";
    }
    thumb.set("ariaLabel", this._t("From %1 to %2", void 0, fromValue, toValue));
    thumb.set("ariaValueNow", "" + from);
    thumb.set("ariaValueText", from + "%");
  }
  _updateGripsByThumb() {
    const thumb = this.thumb;
    const startGrip = this.startGrip;
    const endGrip = this.endGrip;
    if (this.get("orientation") == "vertical") {
      const thumbSize = thumb.height();
      startGrip.set("y", thumb.y());
      endGrip.set("y", thumb.y() + thumbSize);
    } else {
      const thumbSize = thumb.width();
      startGrip.set("x", thumb.x());
      endGrip.set("x", thumb.x() + thumbSize);
    }
  }
};
Object.defineProperty(Scrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Scrollbar"
});
Object.defineProperty(Scrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Scrollbar.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Chart.js
var Chart = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "chartContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        interactiveChildren: false
      }))
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        interactiveChildren: false,
        isMeasured: false,
        position: "absolute",
        width: p100,
        height: p100
      })
    });
  }
};
Object.defineProperty(Chart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Chart"
});
Object.defineProperty(Chart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Chart.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/SerialChart.js
var SerialChart = class extends Chart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "seriesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100,
        isMeasured: false
      })
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
  }
  _afterNew() {
    super._afterNew();
    this._disposers.push(this.series);
    const children = this.seriesContainer.children;
    this._disposers.push(this.series.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (series) => {
          this._removeSeries(series);
        });
        const colors = this.get("colors");
        if (colors) {
          colors.reset();
        }
        const patterns = this.get("patterns");
        if (patterns) {
          patterns.reset();
        }
      } else if (change.type === "push") {
        children.moveValue(change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "setIndex") {
        children.setIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "insertIndex") {
        children.insertIndex(change.index, change.newValue);
        this._processSeries(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeSeries(change.oldValue);
      } else if (change.type === "moveIndex") {
        children.moveValue(change.value, change.newIndex);
        this._processSeries(change.value);
      } else if (change.type === "swap") {
        const a2 = change.a;
        const b = change.b;
        const aIndex = this.series.indexOf(a2);
        const bIndex = this.series.indexOf(b);
        children.moveValue(a2, bIndex);
        children.moveValue(b, aIndex);
        this.series.each((series) => {
          this._processSeries(series);
          series.markDirtyValues();
        });
      } else {
        throw new Error("Unknown IListEvent type");
      }
    }));
  }
  _processSeries(series) {
    series.chart = this;
    series._placeBulletsContainer(this);
  }
  _removeSeries(series) {
    series._handleRemoved();
    if (!series.isDisposed()) {
      this.seriesContainer.children.removeValue(series);
      series._removeBulletsContainer();
    }
  }
};
Object.defineProperty(SerialChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SerialChart"
});
Object.defineProperty(SerialChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Chart.classNames.concat([SerialChart.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Tick.js
var Tick = class extends Line {
};
Object.defineProperty(Tick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tick"
});
Object.defineProperty(Tick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Line.classNames.concat([Tick.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/ColorSet.js
var ColorSet = class extends Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    super._afterNewApplyThemes();
    this._dirty["colors"] = false;
  }
  _beforeChanged() {
    if (this.isDirty("colors")) {
      this.reset();
    }
  }
  /**
   * @ignore
   */
  generateColors() {
    this.setPrivate("currentPass", this.getPrivate("currentPass", 0) + 1);
    const pass = this.getPrivate("currentPass");
    const colors = this.get("colors", [this.get("baseColor", Color.fromHex(16711680))]);
    if (!this.getPrivate("numColors")) {
      this.setPrivate("numColors", colors.length);
    }
    const len = this.getPrivate("numColors");
    const start = 0;
    const passOptions = this.get("passOptions");
    const reuse = this.get("reuse");
    for (let i = start; i < len; i++) {
      if (reuse) {
        colors.push(colors[i]);
      } else {
        const hsl = colors[i].toHSL();
        let h = hsl.h + (passOptions.hue || 0) * pass;
        while (h > 1) h -= 1;
        let s3 = hsl.s + (passOptions.saturation || 0) * pass;
        if (s3 > 1) s3 = 1;
        if (s3 < 0) s3 = 0;
        let l = hsl.l + (passOptions.lightness || 0) * pass;
        while (l > 1) l -= 1;
        colors.push(Color.fromHSL(h, s3, l));
      }
    }
  }
  /**
   * Returns a [[Color]] at specific index.
   *
   * If there's no color at this index, a new color is generated.
   *
   * @param   index  Index
   * @return         Color
   */
  getIndex(index) {
    const colors = this.get("colors", []);
    const saturation = this.get("saturation");
    if (index >= colors.length) {
      this.generateColors();
      return this.getIndex(index);
    }
    return saturation != null ? Color.saturate(colors[index], saturation) : colors[index];
  }
  /**
   * Returns next [[Color]] in the list.
   *
   * If the list is out of colors, new ones are generated dynamically.
   */
  next() {
    let currentStep = this.getPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentStep", currentStep + this.get("step", 1));
    return this.getIndex(currentStep);
  }
  /**
   * Resets counter to the start of the list, so the next call for `next()` will
   * return the first color.
   */
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0));
    this.setPrivate("currentPass", 0);
  }
};
Object.defineProperty(ColorSet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColorSet"
});
Object.defineProperty(ColorSet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([ColorSet.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/themes/DefaultTheme.js
function setColor(rule, key, ic, name) {
  rule.set(key, ic.get(name));
  ic.on(name, (value) => {
    rule.set(key, value);
  });
}
var DefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const language = this._root.language;
    const ic = this._root.interfaceColors;
    const horizontalLayout = this._root.horizontalLayout;
    const verticalLayout = this._root.verticalLayout;
    const r = this.rule.bind(this);
    r("InterfaceColors").setAll({
      stroke: Color.fromHex(15066597),
      fill: Color.fromHex(15987699),
      primaryButton: Color.fromHex(6788316),
      primaryButtonHover: Color.fromHex(6779356),
      primaryButtonDown: Color.fromHex(6872182),
      primaryButtonActive: Color.fromHex(6872182),
      primaryButtonDisabled: Color.fromHex(14342874),
      primaryButtonTextDisabled: Color.fromHex(16777215),
      primaryButtonText: Color.fromHex(16777215),
      primaryButtonStroke: Color.fromHex(16777215),
      secondaryButton: Color.fromHex(14277081),
      secondaryButtonHover: Color.fromHex(10724259),
      secondaryButtonDown: Color.fromHex(9276813),
      secondaryButtonActive: Color.fromHex(15132390),
      secondaryButtonText: Color.fromHex(0),
      secondaryButtonStroke: Color.fromHex(16777215),
      grid: Color.fromHex(0),
      background: Color.fromHex(16777215),
      alternativeBackground: Color.fromHex(0),
      text: Color.fromHex(0),
      alternativeText: Color.fromHex(16777215),
      disabled: Color.fromHex(11382189),
      positive: Color.fromHex(5288704),
      negative: Color.fromHex(11730944)
    });
    {
      const rule = r("ColorSet");
      rule.setAll({
        passOptions: {
          hue: 0.05,
          saturation: 0,
          lightness: 0
        },
        colors: [Color.fromHex(6797276)],
        step: 1,
        //baseColor: Color.fromRGB(103, 183, 220),
        //count: 20,
        reuse: false,
        startIndex: 0
      });
      rule.setPrivate("currentStep", 0);
      rule.setPrivate("currentPass", 0);
    }
    r("Entity").setAll({
      stateAnimationDuration: 0,
      stateAnimationEasing: out(cubic)
    });
    r("Component").setAll({
      interpolationDuration: 0,
      interpolationEasing: out(cubic)
    });
    r("Sprite").setAll({
      visible: true,
      scale: 1,
      opacity: 1,
      rotation: 0,
      position: "relative",
      tooltipX: p50,
      tooltipY: p50,
      tooltipPosition: "fixed",
      isMeasured: true
    });
    r("Sprite").states.create("default", {
      "visible": true,
      opacity: 1
    });
    r("Container").setAll({
      interactiveChildren: true,
      setStateOnChildren: false
    });
    r("Graphics").setAll({
      strokeWidth: 1
    });
    r("Chart").setAll({
      width: p100,
      height: p100,
      interactiveChildren: false
    });
    r("ZoomableContainer").setAll({
      width: p100,
      height: p100,
      wheelable: true,
      pinchZoom: true,
      maxZoomLevel: 32,
      minZoomLevel: 1,
      zoomStep: 2,
      animationEasing: out(cubic),
      animationDuration: 600,
      maxPanOut: 0.4
    });
    r("Sprite", ["horizontal", "center"]).setAll({
      centerX: p50,
      x: p50
    });
    r("Sprite", ["vertical", "center"]).setAll({
      centerY: p50,
      y: p50
    });
    r("Container", ["horizontal", "layout"]).setAll({
      layout: horizontalLayout
    });
    r("Container", ["vertical", "layout"]).setAll({
      layout: verticalLayout
    });
    r("Pattern").setAll({
      repetition: "repeat",
      width: 50,
      height: 50,
      rotation: 0,
      fillOpacity: 1
    });
    r("LinePattern").setAll({
      gap: 6,
      colorOpacity: 1,
      width: 49,
      height: 49
    });
    r("RectanglePattern").setAll({
      gap: 6,
      checkered: false,
      centered: true,
      maxWidth: 5,
      maxHeight: 5,
      width: 48,
      height: 48,
      strokeWidth: 0
    });
    r("CirclePattern").setAll({
      gap: 5,
      checkered: false,
      centered: false,
      radius: 3,
      strokeWidth: 0,
      width: 45,
      height: 45
    });
    r("GrainPattern").setAll({
      width: 200,
      height: 200,
      colors: [Color.fromHex(0)],
      size: 1,
      horizontalGap: 0,
      verticalGap: 0,
      density: 1,
      minOpacity: 0,
      maxOpacity: 0.2
    });
    {
      const rule = r("PatternSet");
      rule.setAll({
        step: 1
      });
      setColor(rule, "color", ic, "stroke");
    }
    r("LinearGradient").setAll({
      rotation: 90
    });
    r("Legend").setAll({
      fillField: "fill",
      strokeField: "stroke",
      nameField: "name",
      layout: GridLayout.new(this._root, {}),
      layer: 30,
      clickTarget: "itemContainer"
    });
    r("Container", ["legend", "item", "itemcontainer"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingBottom: 5,
      paddingTop: 5,
      layout: horizontalLayout,
      setStateOnChildren: true,
      interactiveChildren: false,
      ariaChecked: true,
      focusable: true,
      ariaLabel: language.translate("Press ENTER to toggle"),
      role: "checkbox"
    });
    {
      const rule = r("Rectangle", ["legend", "item", "background"]);
      rule.setAll({
        fillOpacity: 0
      });
      setColor(rule, "fill", ic, "background");
    }
    r("Container", ["legend", "marker"]).setAll({
      setStateOnChildren: true,
      centerY: p50,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingTop: 0,
      width: 18,
      height: 18
    });
    r("RoundedRectangle", ["legend", "marker", "rectangle"]).setAll({
      width: p100,
      height: p100,
      cornerRadiusBL: 3,
      cornerRadiusTL: 3,
      cornerRadiusBR: 3,
      cornerRadiusTR: 3
    });
    {
      const rule = r("RoundedRectangle", ["legend", "marker", "rectangle"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
      setColor(rule, "stroke", ic, "disabled");
    }
    r("Label", ["legend", "label"]).setAll({
      centerY: p50,
      marginLeft: 5,
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      populateText: true
    });
    {
      const rule = r("Label", ["legend", "label"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
    }
    r("Label", ["legend", "value", "label"]).setAll({
      centerY: p50,
      marginLeft: 5,
      paddingRight: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      width: 50,
      centerX: p100,
      populateText: true
    });
    {
      const rule = r("Label", ["legend", "value", "label"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "disabled");
    }
    r("HeatLegend").setAll({
      stepCount: 1
    });
    r("RoundedRectangle", ["heatlegend", "marker"]).setAll({
      cornerRadiusTR: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusBL: 0
    });
    r("RoundedRectangle", ["vertical", "heatlegend", "marker"]).setAll({
      height: p100,
      width: 15
    });
    r("RoundedRectangle", ["horizontal", "heatlegend", "marker"]).setAll({
      width: p100,
      height: 15
    });
    r("HeatLegend", ["vertical"]).setAll({
      height: p100
    });
    r("HeatLegend", ["horizontal"]).setAll({
      width: p100
    });
    r("Label", ["heatlegend", "start"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      paddingBottom: 5
    });
    r("Label", ["heatlegend", "end"]).setAll({
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
      paddingBottom: 5
    });
    {
      const rule = r("Label");
      rule.setAll({
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontSize: "1em",
        populateText: false
      });
      setColor(rule, "fill", ic, "text");
    }
    r("RadialLabel").setAll({
      textType: "regular",
      centerY: p50,
      centerX: p50,
      inside: false,
      radius: 0,
      baseRadius: p100,
      orientation: "auto",
      textAlign: "center"
    });
    r("EditableLabel").setAll({
      editOn: "click",
      //setStateOnChildren: true,
      themeTags: ["editablelabel"],
      multiLine: true
    });
    r("RoundedRectangle", ["editablelabel", "background"]).setAll({
      fillOpacity: 0,
      fill: Color.fromHex(0),
      cornerRadiusBL: 3,
      cornerRadiusBR: 3,
      cornerRadiusTL: 3,
      cornerRadiusTR: 3,
      strokeOpacity: 0,
      stroke: Color.fromHex(0)
    });
    {
      r("RoundedRectangle", ["editablelabel", "background"]).states.create("active", {
        strokeOpacity: 0.2
      });
    }
    r("RoundedRectangle").setAll({
      cornerRadiusTL: 8,
      cornerRadiusBL: 8,
      cornerRadiusTR: 8,
      cornerRadiusBR: 8
    });
    r("PointedRectangle").setAll({
      pointerBaseWidth: 15,
      pointerLength: 10,
      cornerRadius: 8
    });
    r("Slice").setAll({
      shiftRadius: 0,
      dRadius: 0,
      dInnerRadius: 0
    });
    {
      const rule = r("Tick");
      rule.setAll({
        strokeOpacity: 0.15,
        isMeasured: false,
        length: 4.5,
        position: "absolute",
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("Bullet").setAll({
      locationX: 0.5,
      locationY: 0.5
    });
    r("Tooltip").setAll({
      position: "absolute",
      getFillFromSprite: true,
      getStrokeFromSprite: false,
      autoTextColor: true,
      paddingTop: 9,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 10,
      marginBottom: 5,
      pointerOrientation: "vertical",
      centerX: p50,
      centerY: p50,
      animationEasing: out(cubic),
      exportable: false
      //layer: 100
    });
    r("Polygon").setAll({
      animationEasing: out(cubic)
    });
    {
      const rule = r("PointedRectangle", ["tooltip", "background"]);
      rule.setAll({
        strokeOpacity: 0.9,
        cornerRadius: 4,
        pointerLength: 4,
        pointerBaseWidth: 8,
        fillOpacity: 0.9,
        stroke: Color.fromHex(16777215)
      });
    }
    {
      const rule = r("Label", ["tooltip"]);
      rule.setAll({
        role: "tooltip",
        populateText: true,
        paddingRight: 0,
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0
      });
      setColor(rule, "fill", ic, "alternativeText");
    }
    r("Button").setAll({
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 10,
      paddingRight: 10,
      interactive: true,
      layout: horizontalLayout,
      interactiveChildren: false,
      setStateOnChildren: true,
      focusable: true
    });
    r("Button").states.create("hover", {});
    r("Button").states.create("down", {
      stateAnimationDuration: 0
    });
    r("Button").states.create("active", {});
    r("Button").states.create("disabled", {
      forceInactive: true
    });
    {
      const rule = r("RoundedRectangle", ["button", "background"]);
      setColor(rule, "fill", ic, "primaryButton");
      setColor(rule, "stroke", ic, "primaryButtonStroke");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("hover", {});
      setColor(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("down", {
        stateAnimationDuration: 0
      });
      setColor(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("active", {});
      setColor(rule, "fill", ic, "primaryButtonActive");
    }
    {
      const rule = r("RoundedRectangle", ["button", "background"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonDisabled");
    }
    {
      const rule = r("Graphics", ["button", "icon"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonTextDisabled");
    }
    {
      const rule = r("Label", ["button"]).states.create("disabled", {});
      setColor(rule, "fill", ic, "primaryButtonTextDisabled");
    }
    {
      const rule = r("Graphics", ["button", "icon"]);
      rule.setAll({
        forceInactive: true
      });
      setColor(rule, "stroke", ic, "primaryButtonText");
    }
    {
      const rule = r("Label", ["button"]);
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Button", ["zoom"]).setAll({
      paddingTop: 18,
      paddingBottom: 18,
      paddingLeft: 12,
      paddingRight: 12,
      centerX: 46,
      centerY: -10,
      y: 0,
      x: p100,
      role: "button",
      ariaLabel: language.translate("Zoom Out"),
      layer: 30
    });
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]);
      rule.setAll({
        cornerRadiusBL: 40,
        cornerRadiusBR: 40,
        cornerRadiusTL: 40,
        cornerRadiusTR: 40
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]).states.create("hover", {});
      setColor(rule, "fill", ic, "primaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["background", "button", "zoom"]).states.create("down", {
        stateAnimationDuration: 0
      });
      setColor(rule, "fill", ic, "primaryButtonDown");
    }
    {
      const rule = r("Graphics", ["icon", "button", "zoom"]);
      rule.setAll({
        crisp: true,
        strokeOpacity: 0.7,
        draw: (display) => {
          display.moveTo(0, 0);
          display.lineTo(12, 0);
        }
      });
      setColor(rule, "stroke", ic, "primaryButtonText");
    }
    r("Button", ["resize"]).setAll({
      paddingTop: 9,
      paddingBottom: 9,
      paddingLeft: 13,
      paddingRight: 13,
      draggable: true,
      centerX: p50,
      centerY: p50,
      position: "absolute",
      role: "slider",
      ariaValueMin: "0",
      ariaValueMax: "100",
      ariaLabel: language.translate("Use up and down arrows to move selection")
    });
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]);
      rule.setAll({
        cornerRadiusBL: 40,
        cornerRadiusBR: 40,
        cornerRadiusTL: 40,
        cornerRadiusTR: 40
      });
      setColor(rule, "fill", ic, "secondaryButton");
      setColor(rule, "stroke", ic, "secondaryButtonStroke");
    }
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]).states.create("hover", {});
      setColor(rule, "fill", ic, "secondaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["background", "resize", "button"]).states.create("down", {
        stateAnimationDuration: 0
      });
      setColor(rule, "fill", ic, "secondaryButtonDown");
    }
    {
      const rule = r("Graphics", ["resize", "button", "icon"]);
      rule.setAll({
        interactive: false,
        crisp: true,
        strokeOpacity: 0.5,
        draw: (display) => {
          display.moveTo(0, 0.5);
          display.lineTo(0, 12.5);
          display.moveTo(4, 0.5);
          display.lineTo(4, 12.5);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
    }
    r("Button", ["resize", "vertical"]).setAll({
      rotation: 90,
      cursorOverStyle: "ns-resize"
    });
    r("Button", ["resize", "horizontal"]).setAll({
      cursorOverStyle: "ew-resize"
    });
    r("Button", ["play"]).setAll({
      paddingTop: 13,
      paddingBottom: 13,
      paddingLeft: 14,
      paddingRight: 14,
      ariaLabel: language.translate("Play"),
      toggleKey: "active"
    });
    {
      const rule = r("RoundedRectangle", ["play", "background"]);
      rule.setAll({
        strokeOpacity: 0.5,
        cornerRadiusBL: 100,
        cornerRadiusBR: 100,
        cornerRadiusTL: 100,
        cornerRadiusTR: 100
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Graphics", ["play", "icon"]);
      rule.setAll({
        stateAnimationDuration: 0,
        dx: 1,
        draw: (display) => {
          display.moveTo(0, -5);
          display.lineTo(8, 0);
          display.lineTo(0, 5);
          display.lineTo(0, -5);
        }
      });
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Graphics", ["play", "icon"]).states.create("default", {
      stateAnimationDuration: 0
    });
    r("Graphics", ["play", "icon"]).states.create("active", {
      stateAnimationDuration: 0,
      draw: (display) => {
        display.moveTo(-4, -5);
        display.lineTo(-1, -5);
        display.lineTo(-1, 5);
        display.lineTo(-4, 5);
        display.lineTo(-4, -5);
        display.moveTo(4, -5);
        display.lineTo(1, -5);
        display.lineTo(1, 5);
        display.lineTo(4, 5);
        display.lineTo(4, -5);
      }
    });
    r("Button", ["switch"]).setAll({
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 4,
      paddingRight: 4,
      ariaLabel: language.translate("Press ENTER to toggle"),
      toggleKey: "active",
      width: 40,
      height: 24,
      layout: null
    });
    {
      const rule = r("RoundedRectangle", ["switch", "background"]);
      rule.setAll({
        strokeOpacity: 0.5,
        cornerRadiusBL: 100,
        cornerRadiusBR: 100,
        cornerRadiusTL: 100,
        cornerRadiusTR: 100
      });
      setColor(rule, "fill", ic, "primaryButton");
    }
    {
      const rule = r("Circle", ["switch", "icon"]);
      rule.setAll({
        radius: 8,
        centerY: 0,
        centerX: 0,
        dx: 0
      });
      setColor(rule, "fill", ic, "primaryButtonText");
    }
    r("Graphics", ["switch", "icon"]).states.create("active", {
      dx: 16
    });
    r("Scrollbar").setAll({
      start: 0,
      end: 1,
      layer: 30,
      animationEasing: out(cubic)
    });
    r("Scrollbar", ["vertical"]).setAll({
      marginRight: 13,
      marginLeft: 13,
      minWidth: 12,
      height: p100
    });
    r("Scrollbar", ["horizontal"]).setAll({
      marginTop: 13,
      marginBottom: 13,
      minHeight: 12,
      width: p100
    });
    this.rule("Button", ["scrollbar"]).setAll({
      exportable: false
    });
    {
      const rule = r("RoundedRectangle", ["scrollbar", "main", "background"]);
      rule.setAll({
        cornerRadiusTL: 8,
        cornerRadiusBL: 8,
        cornerRadiusTR: 8,
        cornerRadiusBR: 8,
        fillOpacity: 0.8
      });
      setColor(rule, "fill", ic, "fill");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]);
      rule.setAll({
        role: "slider",
        ariaLive: "polite",
        position: "absolute",
        draggable: true
      });
      setColor(rule, "fill", ic, "secondaryButton");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]).states.create("hover", {});
      setColor(rule, "fill", ic, "secondaryButtonHover");
    }
    {
      const rule = r("RoundedRectangle", ["scrollbar", "thumb"]).states.create("down", {
        stateAnimationDuration: 0
      });
      setColor(rule, "fill", ic, "secondaryButtonDown");
    }
    r("RoundedRectangle", ["scrollbar", "thumb", "vertical"]).setAll({
      x: p50,
      width: p100,
      centerX: p50,
      ariaLabel: language.translate("Use up and down arrows to move selection")
    });
    r("RoundedRectangle", ["scrollbar", "thumb", "horizontal"]).setAll({
      y: p50,
      centerY: p50,
      height: p100,
      ariaLabel: language.translate("Use left and right arrows to move selection")
    });
    {
      const rule = r("PointedRectangle", ["axis", "tooltip", "background"]);
      rule.setAll({
        cornerRadius: 0
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Label", ["axis", "tooltip"]).setAll({
      role: void 0
    });
    r("Label", ["axis", "tooltip", "y"]).setAll({
      textAlign: "right"
    });
    r("Label", ["axis", "tooltip", "y", "opposite"]).setAll({
      textAlign: "left"
    });
    r("Label", ["axis", "tooltip", "x"]).setAll({
      textAlign: "center"
    });
    r("Tooltip", ["categoryaxis"]).setAll({
      labelText: "{category}"
    });
    r("Star").setAll({
      spikes: 5,
      innerRadius: 5,
      radius: 10
    });
    r("Tooltip", ["stock"]).setAll({
      paddingTop: 6,
      paddingBottom: 5,
      paddingLeft: 7,
      paddingRight: 7
    });
    r("Tooltip", ["indicator"]).setAll({
      forceHidden: true
    });
    r("PointedRectangle", ["tooltip", "stock", "axis"]).setAll({
      pointerLength: 0,
      pointerBaseWidth: 0,
      cornerRadius: 3
    });
    r("Label", ["tooltip", "stock"]).setAll({
      fontSize: "0.8em"
    });
    r("SpriteResizer").setAll({
      rotationStep: 10,
      isMeasured: false
    });
    {
      const rule = r("Container", ["resizer", "grip"]);
      rule.states.create("hover", {});
    }
    {
      const rule = r("RoundedRectangle", ["resizer", "grip"]);
      rule.setAll({
        strokeOpacity: 0.7,
        strokeWidth: 1,
        fillOpacity: 1,
        width: 12,
        height: 12
      });
      setColor(rule, "fill", ic, "background");
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("RoundedRectangle", ["resizer", "grip", "outline"]);
      rule.setAll({
        strokeOpacity: 0,
        fillOpacity: 0,
        width: 20,
        height: 20
      });
      rule.states.create("hover", {
        fillOpacity: 0.3
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("RoundedRectangle", ["resizer", "grip", "left"]).setAll({
      cornerRadiusBL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusTR: 0
    });
    r("RoundedRectangle", ["resizer", "grip", "right"]).setAll({
      cornerRadiusBL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTL: 0,
      cornerRadiusTR: 0
    });
    {
      const rule = r("Rectangle", ["resizer", "rectangle"]);
      rule.setAll({
        strokeDasharray: [2, 2],
        strokeOpacity: 0.5,
        strokeWidth: 1
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    r("Graphics", ["button", "plus", "icon"]).setAll({
      x: p50,
      y: p50,
      draw: (display) => {
        display.moveTo(-4, 0);
        display.lineTo(4, 0);
        display.moveTo(0, -4);
        display.lineTo(0, 4);
      }
    });
    r("Graphics", ["button", "minus", "icon"]).setAll({
      x: p50,
      y: p50,
      draw: (display) => {
        display.moveTo(-4, 0);
        display.lineTo(4, 0);
      }
    });
    r("Graphics", ["button", "home", "icon"]).setAll({
      x: p50,
      y: p50,
      svgPath: "M 8 -1 L 6 -1 L 6 7 L 2 7 L 2 1 L -2 1 L -2 7 L -6 7 L -6 -1 L -8 -1 L 0 -9 L 8 -1 Z M 8 -1"
    });
    r("Button", ["zoomtools"]).setAll({
      marginTop: 1,
      marginBottom: 2
    });
    r("ZoomTools").setAll({
      x: p100,
      centerX: p100,
      y: p100,
      centerY: p100,
      paddingRight: 10,
      paddingBottom: 10
    });
  }
};

// ../node_modules/d3-shape/src/constant.js
function constant_default(x2) {
  return function constant() {
    return x2;
  };
}

// ../node_modules/d3-shape/src/math.js
var abs = Math.abs;
var atan2 = Math.atan2;
var cos2 = Math.cos;
var max = Math.max;
var min = Math.min;
var sin2 = Math.sin;
var sqrt = Math.sqrt;
var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau2 = 2 * pi;
function acos(x2) {
  return x2 > 1 ? 0 : x2 < -1 ? pi : Math.acos(x2);
}
function asin(x2) {
  return x2 >= 1 ? halfPi : x2 <= -1 ? -halfPi : Math.asin(x2);
}

// ../node_modules/d3-path/src/path.js
var pi2 = Math.PI;
var tau3 = 2 * pi2;
var epsilon2 = 1e-6;
var tauEpsilon = tau3 - epsilon2;
function append(strings) {
  this._ += strings[0];
  for (let i = 1, n = strings.length; i < n; ++i) {
    this._ += arguments[i] + strings[i];
  }
}
function appendRound(digits) {
  let d = Math.floor(digits);
  if (!(d >= 0)) throw new Error(`invalid digits: ${digits}`);
  if (d > 15) return append;
  const k2 = 10 ** d;
  return function(strings) {
    this._ += strings[0];
    for (let i = 1, n = strings.length; i < n; ++i) {
      this._ += Math.round(arguments[i] * k2) / k2 + strings[i];
    }
  };
}
var Path = class {
  constructor(digits) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null;
    this._ = "";
    this._append = digits == null ? append : appendRound(digits);
  }
  moveTo(x2, y2) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}`;
  }
  closePath() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._append`Z`;
    }
  }
  lineTo(x2, y2) {
    this._append`L${this._x1 = +x2},${this._y1 = +y2}`;
  }
  quadraticCurveTo(x1, y1, x2, y2) {
    this._append`Q${+x1},${+y1},${this._x1 = +x2},${this._y1 = +y2}`;
  }
  bezierCurveTo(x1, y1, x2, y2, x3, y3) {
    this._append`C${+x1},${+y1},${+x2},${+y2},${this._x1 = +x3},${this._y1 = +y3}`;
  }
  arcTo(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let x0 = this._x1, y0 = this._y1, x21 = x2 - x1, y21 = y2 - y1, x01 = x0 - x1, y01 = y0 - y1, l01_2 = x01 * x01 + y01 * y01;
    if (this._x1 === null) {
      this._append`M${this._x1 = x1},${this._y1 = y1}`;
    } else if (!(l01_2 > epsilon2)) ;
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon2) || !r) {
      this._append`L${this._x1 = x1},${this._y1 = y1}`;
    } else {
      let x20 = x2 - x0, y20 = y2 - y0, l21_2 = x21 * x21 + y21 * y21, l20_2 = x20 * x20 + y20 * y20, l21 = Math.sqrt(l21_2), l01 = Math.sqrt(l01_2), l = r * Math.tan((pi2 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2), t01 = l / l01, t21 = l / l21;
      if (Math.abs(t01 - 1) > epsilon2) {
        this._append`L${x1 + t01 * x01},${y1 + t01 * y01}`;
      }
      this._append`A${r},${r},0,0,${+(y01 * x20 > x01 * y20)},${this._x1 = x1 + t21 * x21},${this._y1 = y1 + t21 * y21}`;
    }
  }
  arc(x2, y2, r, a0, a1, ccw) {
    x2 = +x2, y2 = +y2, r = +r, ccw = !!ccw;
    if (r < 0) throw new Error(`negative radius: ${r}`);
    let dx = r * Math.cos(a0), dy = r * Math.sin(a0), x0 = x2 + dx, y0 = y2 + dy, cw = 1 ^ ccw, da = ccw ? a0 - a1 : a1 - a0;
    if (this._x1 === null) {
      this._append`M${x0},${y0}`;
    } else if (Math.abs(this._x1 - x0) > epsilon2 || Math.abs(this._y1 - y0) > epsilon2) {
      this._append`L${x0},${y0}`;
    }
    if (!r) return;
    if (da < 0) da = da % tau3 + tau3;
    if (da > tauEpsilon) {
      this._append`A${r},${r},0,1,${cw},${x2 - dx},${y2 - dy}A${r},${r},0,1,${cw},${this._x1 = x0},${this._y1 = y0}`;
    } else if (da > epsilon2) {
      this._append`A${r},${r},0,${+(da >= pi2)},${cw},${this._x1 = x2 + r * Math.cos(a1)},${this._y1 = y2 + r * Math.sin(a1)}`;
    }
  }
  rect(x2, y2, w, h) {
    this._append`M${this._x0 = this._x1 = +x2},${this._y0 = this._y1 = +y2}h${w = +w}v${+h}h${-w}Z`;
  }
  toString() {
    return this._;
  }
};
function path() {
  return new Path();
}
path.prototype = Path.prototype;

// ../node_modules/d3-shape/src/path.js
function withPath(shape) {
  let digits = 3;
  shape.digits = function(_) {
    if (!arguments.length) return digits;
    if (_ == null) {
      digits = null;
    } else {
      const d = Math.floor(_);
      if (!(d >= 0)) throw new RangeError(`invalid digits: ${_}`);
      digits = d;
    }
    return shape;
  };
  return () => new Path(digits);
}

// ../node_modules/d3-shape/src/arc.js
function arcInnerRadius(d) {
  return d.innerRadius;
}
function arcOuterRadius(d) {
  return d.outerRadius;
}
function arcStartAngle(d) {
  return d.startAngle;
}
function arcEndAngle(d) {
  return d.endAngle;
}
function arcPadAngle(d) {
  return d && d.padAngle;
}
function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0, x32 = x3 - x2, y32 = y3 - y2, t = y32 * x10 - x32 * y10;
  if (t * t < epsilon) return;
  t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
  return [x0 + t * x10, y0 + t * y10];
}
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1, y01 = y0 - y1, lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01), ox = lo * y01, oy = -lo * x01, x11 = x0 + ox, y11 = y0 + oy, x10 = x1 + ox, y10 = y1 + oy, x00 = (x11 + x10) / 2, y00 = (y11 + y10) / 2, dx = x10 - x11, dy = y10 - y11, d2 = dx * dx + dy * dy, r = r1 - rc, D = x11 * y10 - x10 * y11, d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)), cx0 = (D * dy - dx * d) / d2, cy0 = (-D * dx - dy * d) / d2, cx1 = (D * dy + dx * d) / d2, cy1 = (-D * dx + dy * d) / d2, dx0 = cx0 - x00, dy0 = cy0 - y00, dx1 = cx1 - x00, dy1 = cy1 - y00;
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;
  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}
function arc_default() {
  var innerRadius = arcInnerRadius, outerRadius = arcOuterRadius, cornerRadius = constant_default(0), padRadius = null, startAngle = arcStartAngle, endAngle = arcEndAngle, padAngle = arcPadAngle, context = null, path2 = withPath(arc);
  function arc() {
    var buffer, r, r0 = +innerRadius.apply(this, arguments), r1 = +outerRadius.apply(this, arguments), a0 = startAngle.apply(this, arguments) - halfPi, a1 = endAngle.apply(this, arguments) - halfPi, da = abs(a1 - a0), cw = a1 > a0;
    if (!context) context = buffer = path2();
    if (r1 < r0) r = r1, r1 = r0, r0 = r;
    if (!(r1 > epsilon)) context.moveTo(0, 0);
    else if (da > tau2 - epsilon) {
      context.moveTo(r1 * cos2(a0), r1 * sin2(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > epsilon) {
        context.moveTo(r0 * cos2(a1), r0 * sin2(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    } else {
      var a01 = a0, a11 = a1, a00 = a0, a10 = a1, da0 = da, da1 = da, ap = padAngle.apply(this, arguments) / 2, rp = ap > epsilon && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)), rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)), rc0 = rc, rc1 = rc, t0, t1;
      if (rp > epsilon) {
        var p02 = asin(rp / r0 * sin2(ap)), p1 = asin(rp / r1 * sin2(ap));
        if ((da0 -= p02 * 2) > epsilon) p02 *= cw ? 1 : -1, a00 += p02, a10 -= p02;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > epsilon) p1 *= cw ? 1 : -1, a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }
      var x01 = r1 * cos2(a01), y01 = r1 * sin2(a01), x10 = r0 * cos2(a10), y10 = r0 * sin2(a10);
      if (rc > epsilon) {
        var x11 = r1 * cos2(a11), y11 = r1 * sin2(a11), x00 = r0 * cos2(a00), y00 = r0 * sin2(a00), oc;
        if (da < pi) {
          if (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10)) {
            var ax = x01 - oc[0], ay = y01 - oc[1], bx = x11 - oc[0], by = y11 - oc[1], kc = 1 / sin2(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2), lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
            rc0 = min(rc, (r0 - lc) / (kc - 1));
            rc1 = min(rc, (r1 - lc) / (kc + 1));
          } else {
            rc0 = rc1 = 0;
          }
        }
      }
      if (!(da1 > epsilon)) context.moveTo(x01, y01);
      else if (rc1 > epsilon) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);
        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);
      if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);
      else if (rc0 > epsilon) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);
        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);
        else {
          context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
        }
      } else context.arc(0, 0, r0, a10, a00, cw);
    }
    context.closePath();
    if (buffer) return context = null, buffer + "" || null;
  }
  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2, a2 = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
    return [cos2(a2) * r, sin2(a2) * r];
  };
  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : innerRadius;
  };
  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : outerRadius;
  };
  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant_default(+_), arc) : cornerRadius;
  };
  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), arc) : padRadius;
  };
  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : startAngle;
  };
  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : endAngle;
  };
  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant_default(+_), arc) : padAngle;
  };
  arc.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, arc) : context;
  };
  return arc;
}

// ../node_modules/d3-shape/src/array.js
var slice = Array.prototype.slice;
function array_default(x2) {
  return typeof x2 === "object" && "length" in x2 ? x2 : Array.from(x2);
}

// ../node_modules/d3-shape/src/curve/linear.js
function Linear(context) {
  this._context = context;
}
Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(x2, y2);
        break;
    }
  }
};
function linear_default(context) {
  return new Linear(context);
}

// ../node_modules/d3-shape/src/point.js
function x(p) {
  return p[0];
}
function y(p) {
  return p[1];
}

// ../node_modules/d3-shape/src/line.js
function line_default(x2, y2) {
  var defined = constant_default(true), context = null, curve = linear_default, output = null, path2 = withPath(line2);
  x2 = typeof x2 === "function" ? x2 : x2 === void 0 ? x : constant_default(x2);
  y2 = typeof y2 === "function" ? y2 : y2 === void 0 ? y : constant_default(y2);
  function line2(data) {
    var i, n = (data = array_default(data)).length, d, defined0 = false, buffer;
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x2(d, i, data), +y2(d, i, data));
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  line2.x = function(_) {
    return arguments.length ? (x2 = typeof _ === "function" ? _ : constant_default(+_), line2) : x2;
  };
  line2.y = function(_) {
    return arguments.length ? (y2 = typeof _ === "function" ? _ : constant_default(+_), line2) : y2;
  };
  line2.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default(!!_), line2) : defined;
  };
  line2.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line2) : curve;
  };
  line2.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line2) : context;
  };
  return line2;
}

// ../node_modules/d3-shape/src/area.js
function area_default(x0, y0, y1) {
  var x1 = null, defined = constant_default(true), context = null, curve = linear_default, output = null, path2 = withPath(area);
  x0 = typeof x0 === "function" ? x0 : x0 === void 0 ? x : constant_default(+x0);
  y0 = typeof y0 === "function" ? y0 : y0 === void 0 ? constant_default(0) : constant_default(+y0);
  y1 = typeof y1 === "function" ? y1 : y1 === void 0 ? y : constant_default(+y1);
  function area(data) {
    var i, j, k2, n = (data = array_default(data)).length, d, defined0 = false, buffer, x0z = new Array(n), y0z = new Array(n);
    if (context == null) output = curve(buffer = path2());
    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k2 = i - 1; k2 >= j; --k2) {
            output.point(x0z[k2], y0z[k2]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }
    if (buffer) return output = null, buffer + "" || null;
  }
  function arealine() {
    return line_default().defined(defined).curve(curve).context(context);
  }
  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), x1 = null, area) : x0;
  };
  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : constant_default(+_), area) : x0;
  };
  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : x1;
  };
  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), y1 = null, area) : y0;
  };
  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : constant_default(+_), area) : y0;
  };
  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant_default(+_), area) : y1;
  };
  area.lineX0 = area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };
  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };
  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };
  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : constant_default(!!_), area) : defined;
  };
  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };
  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };
  return area;
}

// ../node_modules/d3-shape/src/curve/cardinal.js
function point(that, x2, y2) {
  that._context.bezierCurveTo(that._x1 + that._k * (that._x2 - that._x0), that._y1 + that._k * (that._y2 - that._y0), that._x2 + that._k * (that._x1 - x2), that._y2 + that._k * (that._y1 - y2), that._x2, that._y2);
}
function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        point(this, this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        this._x1 = x2, this._y1 = y2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinal_default = function custom(tension) {
  function cardinal(context) {
    return new Cardinal(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/step.js
function Step(context, t) {
  this._context = context;
  this._t = t;
}
Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
      // falls through
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y2);
          this._context.lineTo(x2, y2);
        } else {
          var x1 = this._x * (1 - this._t) + x2 * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y2);
        }
        break;
      }
    }
    this._x = x2, this._y = y2;
  }
};
function stepAfter(context) {
  return new Step(context, 1);
}

// ../node_modules/d3-shape/src/curve/radial.js
var curveRadialLinear = curveRadial(linear_default);
function Radial(curve) {
  this._curve = curve;
}
Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a2, r) {
    this._curve.point(r * Math.sin(a2), r * -Math.cos(a2));
  }
};
function curveRadial(curve) {
  function radial(context) {
    return new Radial(curve(context));
  }
  radial._curve = curve;
  return radial;
}

// ../node_modules/d3-shape/src/symbol/asterisk.js
var sqrt3 = sqrt(3);

// ../node_modules/d3-shape/src/symbol/diamond.js
var tan30 = sqrt(1 / 3);
var tan30_2 = tan30 * 2;

// ../node_modules/d3-shape/src/symbol/star.js
var kr = sin2(pi / 10) / sin2(7 * pi / 10);
var kx = sin2(tau2 / 10) * kr;
var ky = -cos2(tau2 / 10) * kr;

// ../node_modules/d3-shape/src/symbol/triangle.js
var sqrt32 = sqrt(3);

// ../node_modules/d3-shape/src/symbol/triangle2.js
var sqrt33 = sqrt(3);

// ../node_modules/d3-shape/src/symbol/wye.js
var s2 = sqrt(3) / 2;
var k = 1 / sqrt(12);
var a = (k / 2 + 1) * 3;

// ../node_modules/d3-shape/src/noop.js
function noop_default() {
}

// ../node_modules/d3-shape/src/curve/basis.js
function point2(that, x2, y2) {
  that._context.bezierCurveTo((2 * that._x0 + that._x1) / 3, (2 * that._y0 + that._y1) / 3, (that._x0 + 2 * that._x1) / 3, (that._y0 + 2 * that._y1) / 3, (that._x0 + 4 * that._x1 + x2) / 6, (that._y0 + 4 * that._y1 + y2) / 6);
}
function Basis(context) {
  this._context = context;
}
Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        point2(this, this._x1, this._y1);
      // falls through
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      // falls through
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/basisClosed.js
function BasisClosed(context) {
  this._context = context;
}
BasisClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x2 = x2, this._y2 = y2;
        break;
      case 1:
        this._point = 2;
        this._x3 = x2, this._y3 = y2;
        break;
      case 2:
        this._point = 3;
        this._x4 = x2, this._y4 = y2;
        this._context.moveTo((this._x0 + 4 * this._x1 + x2) / 6, (this._y0 + 4 * this._y1 + y2) / 6);
        break;
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/basisOpen.js
function BasisOpen(context) {
  this._context = context;
}
BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var x0 = (this._x0 + 4 * this._x1 + x2) / 6, y0 = (this._y0 + 4 * this._y1 + y2) / 6;
        this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point2(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
  }
};

// ../node_modules/d3-shape/src/curve/bundle.js
function Bundle(context, beta) {
  this._basis = new Basis(context);
  this._beta = beta;
}
Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, j = x2.length - 1;
    if (j > 0) {
      var x0 = x2[0], y0 = y2[0], dx = x2[j] - x0, dy = y2[j] - y0, i = -1, t;
      while (++i <= j) {
        t = i / j;
        this._basis.point(this._beta * x2[i] + (1 - this._beta) * (x0 + t * dx), this._beta * y2[i] + (1 - this._beta) * (y0 + t * dy));
      }
    }
    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
var bundle_default = function custom2(beta) {
  function bundle(context) {
    return beta === 1 ? new Basis(context) : new Bundle(context, beta);
  }
  bundle.beta = function(beta2) {
    return custom2(+beta2);
  };
  return bundle;
}(0.85);

// ../node_modules/d3-shape/src/curve/cardinalClosed.js
function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalClosed_default = function custom3(tension) {
  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom3(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/cardinalOpen.js
function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}
CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point(this, x2, y2);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var cardinalOpen_default = function custom4(tension) {
  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }
  cardinal.tension = function(tension2) {
    return custom4(+tension2);
  };
  return cardinal;
}(0);

// ../node_modules/d3-shape/src/curve/catmullRom.js
function point3(that, x2, y2) {
  var x1 = that._x1, y1 = that._y1, x22 = that._x2, y22 = that._y2;
  if (that._l01_a > epsilon) {
    var a2 = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a, n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a2 - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a2 - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }
  if (that._l23_a > epsilon) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a, m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x22 = (x22 * b + that._x1 * that._l23_2a - x2 * that._l12_2a) / m;
    y22 = (y22 * b + that._y1 * that._l23_2a - y2 * that._l12_2a) / m;
  }
  that._context.bezierCurveTo(x1, y1, x22, y22, that._x2, that._y2);
}
function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      // falls through
      default:
        point3(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRom_default = function custom5(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new Cardinal(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom5(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/catmullRomClosed.js
function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        this._x3 = x2, this._y3 = y2;
        break;
      case 1:
        this._point = 2;
        this._context.moveTo(this._x4 = x2, this._y4 = y2);
        break;
      case 2:
        this._point = 3;
        this._x5 = x2, this._y5 = y2;
        break;
      default:
        point3(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomClosed_default = function custom6(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new CardinalClosed(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom6(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/catmullRomOpen.js
function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}
CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    if (this._line || this._line !== 0 && this._point === 3) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) {
      var x23 = this._x2 - x2, y23 = this._y2 - y2;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      // falls through
      default:
        point3(this, x2, y2);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x2;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y2;
  }
};
var catmullRomOpen_default = function custom7(alpha) {
  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new CardinalOpen(context, 0);
  }
  catmullRom.alpha = function(alpha2) {
    return custom7(+alpha2);
  };
  return catmullRom;
}(0.5);

// ../node_modules/d3-shape/src/curve/linearClosed.js
function LinearClosed(context) {
  this._context = context;
}
LinearClosed.prototype = {
  areaStart: noop_default,
  areaEnd: noop_default,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x2, y2) {
    x2 = +x2, y2 = +y2;
    if (this._point) this._context.lineTo(x2, y2);
    else this._point = 1, this._context.moveTo(x2, y2);
  }
};

// ../node_modules/d3-shape/src/curve/monotone.js
function sign(x2) {
  return x2 < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point4(that, t0, t1) {
  var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
  this._context = context;
}
MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point4(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x2, y2) {
    var t1 = NaN;
    x2 = +x2, y2 = +y2;
    if (x2 === this._x1 && y2 === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x2, y2) : this._context.moveTo(x2, y2);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point4(this, slope2(this, t1 = slope3(this, x2, y2)), t1);
        break;
      default:
        point4(this, this._t0, t1 = slope3(this, x2, y2));
        break;
    }
    this._x0 = this._x1, this._x1 = x2;
    this._y0 = this._y1, this._y1 = y2;
    this._t0 = t1;
  }
};
function MonotoneY(context) {
  this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x2, y2) {
  MonotoneX.prototype.point.call(this, y2, x2);
};
function ReflectContext(context) {
  this._context = context;
}
ReflectContext.prototype = {
  moveTo: function(x2, y2) {
    this._context.moveTo(y2, x2);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(x2, y2) {
    this._context.lineTo(y2, x2);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x3, y3) {
    this._context.bezierCurveTo(y1, x1, y2, x2, y3, x3);
  }
};

// ../node_modules/d3-shape/src/curve/natural.js
function Natural(context) {
  this._context = context;
}
Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x2 = this._x, y2 = this._y, n = x2.length;
    if (n) {
      this._line ? this._context.lineTo(x2[0], y2[0]) : this._context.moveTo(x2[0], y2[0]);
      if (n === 2) {
        this._context.lineTo(x2[1], y2[1]);
      } else {
        var px = controlPoints(x2), py = controlPoints(y2);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x2[i1], y2[i1]);
        }
      }
    }
    if (this._line || this._line !== 0 && n === 1) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x2, y2) {
    this._x.push(+x2);
    this._y.push(+y2);
  }
};
function controlPoints(x2) {
  var i, n = x2.length - 1, m, a2 = new Array(n), b = new Array(n), r = new Array(n);
  a2[0] = 0, b[0] = 2, r[0] = x2[0] + 2 * x2[1];
  for (i = 1; i < n - 1; ++i) a2[i] = 1, b[i] = 4, r[i] = 4 * x2[i] + 2 * x2[i + 1];
  a2[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x2[n - 1] + x2[n];
  for (i = 1; i < n; ++i) m = a2[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a2[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a2[i] = (r[i] - a2[i + 1]) / b[i];
  b[n - 1] = (x2[n] + a2[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x2[i + 1] - a2[i + 1];
  return [a2, b];
}

export {
  Percent,
  percent,
  p0,
  p100,
  p50,
  isPercent,
  ready,
  removeElement,
  addEventListener,
  onZoom,
  supports,
  blur,
  focus,
  getRendererEvent,
  isTouchEvent,
  setStyle,
  getStyle,
  getEventTarget,
  isLocalEvent,
  setInteractive,
  getEventKey,
  getShadowRoot,
  StyleRule,
  getSafeResolution,
  relativeToValue,
  decimalPlaces,
  padString,
  trim,
  cleanFormat,
  stripTags,
  escapeForRgex,
  splitString,
  getYearDay,
  getWeek,
  getWeekYear,
  getMonthWeek,
  getDayFromWeek,
  get12Hours,
  getTimeZone,
  getTimezoneOffset,
  capitalizeFirst,
  mergeTags,
  sameBounds,
  Utils_exports,
  color,
  Color,
  AnimationState,
  List,
  ListAutoDispose,
  ListTemplate,
  RADIANS,
  DEGREES,
  round,
  ceil,
  fitToRange,
  sin,
  cos,
  normalizeAngle,
  getArcBounds,
  getAngle,
  closest,
  Math_exports,
  Ease_exports,
  registry,
  addLicense,
  disposeAllRootElements,
  getRootById,
  Entity,
  Sprite,
  Pattern,
  PicturePattern,
  BlendMode,
  visualSettings,
  Graphics,
  Rectangle,
  Layout,
  HorizontalLayout,
  VerticalLayout,
  GridLayout,
  TextFormatter,
  populateString,
  Container,
  Text,
  Label,
  setColor,
  DefaultTheme,
  RoundedRectangle,
  Button,
  ListData,
  JsonData,
  DataItem,
  Component,
  getNextUnit,
  getDuration,
  getIntervalDuration,
  getDateIntervalDuration,
  checkChange,
  roun,
  round2,
  chooseInterval,
  getUnitValue,
  Time_exports,
  Series,
  Line,
  RadialText,
  RadialLabel,
  Scrollbar,
  arc_default,
  line_default,
  area_default,
  cardinal_default,
  stepAfter,
  Chart,
  SerialChart,
  Tick,
  ColorSet
};
//# sourceMappingURL=chunk-KH4I72RD.js.map
