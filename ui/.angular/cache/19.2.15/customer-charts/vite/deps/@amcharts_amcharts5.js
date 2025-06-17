import {
  AnimationState,
  BlendMode,
  Button,
  Chart,
  Color,
  ColorSet,
  Component,
  Container,
  DEGREES,
  DataItem,
  DefaultTheme,
  Ease_exports,
  Entity,
  Graphics,
  GridLayout,
  HorizontalLayout,
  JsonData,
  Label,
  Layout,
  Line,
  ListData,
  ListTemplate,
  Math_exports,
  Pattern,
  Percent,
  PicturePattern,
  RADIANS,
  RadialLabel,
  RadialText,
  Rectangle,
  RoundedRectangle,
  Scrollbar,
  SerialChart,
  Series,
  Sprite,
  StyleRule,
  Text,
  TextFormatter,
  Tick,
  Time_exports,
  Utils_exports,
  VerticalLayout,
  addEventListener,
  addLicense,
  arc_default,
  blur,
  cleanFormat,
  color,
  cos,
  decimalPlaces,
  disposeAllRootElements,
  escapeForRgex,
  fitToRange,
  focus,
  get12Hours,
  getAngle,
  getArcBounds,
  getDayFromWeek,
  getEventKey,
  getEventTarget,
  getMonthWeek,
  getRendererEvent,
  getRootById,
  getSafeResolution,
  getShadowRoot,
  getStyle,
  getTimeZone,
  getTimezoneOffset,
  getWeek,
  getWeekYear,
  getYearDay,
  isLocalEvent,
  isPercent,
  mergeTags,
  normalizeAngle,
  onZoom,
  p0,
  p100,
  p50,
  padString,
  percent,
  populateString,
  ready,
  registry,
  relativeToValue,
  removeElement,
  setInteractive,
  setStyle,
  sin,
  splitString,
  stripTags,
  supports,
  trim
} from "./chunk-KH4I72RD.js";
import {
  ArrayDisposer,
  Array_exports,
  CounterDisposer,
  Disposer,
  DisposerClass,
  EventDispatcher,
  MultiDisposer,
  MutableValueDisposer,
  Object_exports,
  PLACEHOLDER,
  PLACEHOLDER2,
  Template,
  Theme,
  Type_exports,
  compare,
  copy,
  copy2,
  each,
  each2,
  eachContinue,
  eachContinue2,
  indexOf,
  isArray,
  isNumber,
  isObject,
  isString,
  keepIf,
  keys,
  map,
  move,
  numberToString,
  pushOne,
  remove,
  removeFirst,
  toNumber
} from "./chunk-QF7X2JEG.js";
import "./chunk-GJAHRQ4T.js";
import {
  __export
} from "./chunk-XWLXMCJQ.js";

// ../node_modules/@amcharts/amcharts5/.internal/core/util/ResizeSensor.js
var Native = class {
  constructor() {
    Object.defineProperty(this, "_observer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_targets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    this._observer = new ResizeObserver((entries) => {
      each(entries, (entry) => {
        each(this._targets, (x) => {
          if (x.target === entry.target) {
            x.callback();
          }
        });
      });
    });
  }
  addTarget(target, callback) {
    this._observer.observe(target, {
      box: "border-box"
    });
    this._targets.push({
      target,
      callback
    });
  }
  removeTarget(target) {
    this._observer.unobserve(target);
    keepIf(this._targets, (x) => {
      return x.target !== target;
    });
  }
};
var Raf = class _Raf {
  constructor() {
    Object.defineProperty(this, "_timer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_targets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  addTarget(target, callback) {
    if (this._timer === null) {
      let lastTime = null;
      const loop = () => {
        const currentTime = Date.now();
        if (lastTime === null || currentTime > lastTime + _Raf.delay) {
          lastTime = currentTime;
          each(this._targets, (x) => {
            let newSize = x.target.getBoundingClientRect();
            if (newSize.width !== x.size.width || newSize.height !== x.size.height) {
              x.size = newSize;
              x.callback();
            }
          });
        }
        if (this._targets.length === 0) {
          this._timer = null;
        } else {
          this._timer = requestAnimationFrame(loop);
        }
      };
      this._timer = requestAnimationFrame(loop);
    }
    let size = {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      x: 0,
      y: 0
    };
    this._targets.push({
      target,
      callback,
      size
    });
  }
  removeTarget(target) {
    keepIf(this._targets, (x) => {
      return x.target !== target;
    });
    if (this._targets.length === 0) {
      if (this._timer !== null) {
        cancelAnimationFrame(this._timer);
        this._timer = null;
      }
    }
  }
};
Object.defineProperty(Raf, "delay", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: 200
});
var observer = null;
function makeSensor() {
  if (observer === null) {
    if (typeof ResizeObserver !== "undefined") {
      observer = new Native();
    } else {
      observer = new Raf();
    }
  }
  return observer;
}
var ResizeSensor = class {
  constructor(element, callback) {
    Object.defineProperty(this, "_sensor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_element", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_listener", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    this._sensor = makeSensor();
    this._element = element;
    this._listener = onZoom(callback);
    this._sensor.addTarget(element, callback);
  }
  isDisposed() {
    return this._disposed;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._sensor.removeTarget(this._element);
      this._listener.dispose();
    }
  }
  get sensor() {
    return this._sensor;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/InterfaceColors.js
var InterfaceColors = class extends Entity {
};
Object.defineProperty(InterfaceColors, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "InterfaceColors"
});
Object.defineProperty(InterfaceColors, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([InterfaceColors.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/PointedRectangle.js
var PointedRectangle = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("pointerBaseWidth") || this.isDirty("cornerRadius") || this.isDirty("pointerLength") || this.isDirty("pointerX") || this.isDirty("pointerY") || this.isDirty("width") || this.isDirty("height")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this.markDirtyBounds();
      let w = this.width();
      let h = this.height();
      if (w > 0 && h > 0) {
        let cr = this.get("cornerRadius", 8);
        cr = fitToRange(cr, 0, Math.min(w / 2, h / 2));
        let x = this.get("pointerX", 0);
        let y = this.get("pointerY", 0);
        let bwh = this.get("pointerBaseWidth", 15) / 2;
        let xtl = 0;
        let ytl = 0;
        let xtr = w;
        let ytr = 0;
        let xbr = w;
        let ybr = h;
        let xbl = 0;
        let ybl = h;
        let d1 = (x - xtl) * (ybr - ytl) - (y - ytl) * (xbr - xtl);
        let d2 = (x - xbl) * (ytr - ybl) - (y - ybl) * (xtr - xbl);
        const display = this._display;
        display.moveTo(cr, 0);
        if (d1 > 0 && d2 > 0) {
          let stemX = Math.round(fitToRange(x, cr + bwh, w - bwh - cr));
          y = fitToRange(y, -Infinity, 0);
          display.lineTo(stemX - bwh, 0);
          display.lineTo(x, y);
          display.lineTo(stemX + bwh, 0);
        }
        display.lineTo(w - cr, 0);
        display.arcTo(w, 0, w, cr, cr);
        if (d1 > 0 && d2 < 0) {
          let stemY = Math.round(fitToRange(y, cr + bwh, h - bwh - cr));
          x = fitToRange(x, w, Infinity);
          display.lineTo(w, cr);
          display.lineTo(w, Math.max(stemY - bwh, cr));
          display.lineTo(x, y);
          display.lineTo(w, stemY + bwh);
        }
        display.lineTo(w, h - cr);
        display.arcTo(w, h, w - cr, h, cr);
        if (d1 < 0 && d2 < 0) {
          let stemX = Math.round(fitToRange(x, cr + bwh, w - bwh - cr));
          y = fitToRange(y, h, Infinity);
          display.lineTo(w - cr, h);
          display.lineTo(stemX + bwh, h);
          display.lineTo(x, y);
          display.lineTo(stemX - bwh, h);
        }
        display.lineTo(cr, h);
        display.arcTo(0, h, 0, h - cr, cr);
        if (d1 < 0 && d2 > 0) {
          let stemY = Math.round(fitToRange(y, cr + bwh, h - cr - bwh));
          x = fitToRange(x, -Infinity, 0);
          display.lineTo(0, h - cr);
          display.lineTo(0, stemY + bwh);
          display.lineTo(x, y);
          display.lineTo(0, Math.max(stemY - bwh, cr));
        }
        display.lineTo(0, cr);
        display.arcTo(0, 0, cr, 0, cr);
        display.closePath();
      }
    }
  }
};
Object.defineProperty(PointedRectangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PointedRectangle"
});
Object.defineProperty(PointedRectangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([PointedRectangle.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Tooltip.js
var Tooltip = class extends Container {
  constructor(root, settings, isReal, templates = []) {
    super(root, settings, isReal, templates);
    Object.defineProperty(this, "_fx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_fy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_label", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fillDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_fillGrDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_labelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_w", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_h", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_keepHoverDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_htmlContentHovered", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["tooltip"]);
    super._afterNew();
    const background = this._setDefaultFn("background", () => {
      return PointedRectangle.new(this._root, {});
    });
    background.set("themeTags", ["tooltip", "background"]);
    this._label = this.children.push(Label.new(this._root, {}));
    this._disposers.push(this._label.events.on("boundschanged", () => {
      this._updateBackground();
    }));
    this._disposers.push(this.on("bounds", () => {
      this._updateBackground();
    }));
    this._updateTextColor();
    this._root.tooltipContainer.children.push(this);
    this.hide(0);
    this._disposers.push(this.label.onPrivate("htmlElement", (htmlElement) => {
      if (htmlElement) {
        this._disposers.push(addEventListener(htmlElement, "pointerover", (_ev) => {
          this._htmlContentHovered = true;
        }));
        this._disposers.push(addEventListener(htmlElement, "pointerout", (_ev) => {
          this._htmlContentHovered = false;
        }));
      }
    }));
    this.on("visible", (_ev) => {
      this._handleReaderAnnouncement();
    });
    this.label.events.on("dataitemchanged", (_ev) => {
      this._handleReaderAnnouncement();
    });
    this._root._tooltips.push(this);
  }
  _handleReaderAnnouncement() {
    if (this.get("readerAnnounce") && this.isVisibleDeep()) {
      this._root.readerAlert(this.label.getAccessibleText());
    }
  }
  /**
   * A [[Label]] element for the tooltip.
   *
   * @readonly
   * @return Label
   */
  get label() {
    return this._label;
  }
  /**
   * Permanently disposes the tooltip.
   */
  _dispose() {
    super._dispose();
    remove(this._root._tooltips, this);
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("pointerOrientation") || this.isPrivateDirty("minWidth") || this.isPrivateDirty("minHeight")) {
      this.get("background")._markDirtyKey("width");
    }
    const labelText = this.get("labelText");
    if (labelText != null) {
      this.label.set("text", this.get("labelText"));
    }
    const labelHTML = this.get("labelHTML");
    if (labelHTML != null) {
      this.label.set("html", this.get("labelHTML"));
    }
    const labelAriaLabel = this.get("labelAriaLabel");
    if (labelAriaLabel != null) {
      this.label.set("ariaLabel", this.get("labelAriaLabel"));
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("pointTo") || this.isDirty("pointerOrientation")) {
      this._updateBackground();
    }
    if (this.isDirty("tooltipTarget")) {
      this.updateBackgroundColor();
    }
    if (this.isDirty("keepTargetHover")) {
      const keephover = this.get("keepTargetHover");
      if (keephover) {
        const bg = this.get("background");
        this._keepHoverDp = new MultiDisposer([bg.events.on("pointerover", (_ev) => {
          let target = this.get("tooltipTarget");
          if (target) {
            if (target.parent && target.parent.getPrivate("tooltipTarget") == target) {
              target = target.parent;
            }
            target.hover();
          }
        }), bg.events.on("pointerout", (_ev) => {
          let target = this.get("tooltipTarget");
          if (target) {
            if (target.parent && target.parent.getPrivate("tooltipTarget") == target) {
              target = target.parent;
            }
            if (!this._htmlContentHovered) {
              target.unhover();
            }
          }
        })]);
        this.label.onPrivate("htmlElement", (htmlElement) => {
          if (this._keepHoverDp && htmlElement) {
            this._keepHoverDp.disposers.push(addEventListener(htmlElement, "pointerleave", (ev) => {
              const outEvent = this.root._renderer.getEvent(ev);
              bg.events.dispatch("pointerout", {
                type: "pointerout",
                originalEvent: outEvent.event,
                point: outEvent.point,
                simulated: false,
                target: bg
              });
            }));
          }
        });
      } else {
        if (this._keepHoverDp) {
          this._keepHoverDp.dispose();
          this._keepHoverDp = void 0;
        }
      }
    }
  }
  _onShow() {
    super._onShow();
    this.updateBackgroundColor();
  }
  updateBackgroundColor() {
    let tooltipTarget = this.get("tooltipTarget");
    const background = this.get("background");
    let fill;
    let stroke;
    if (tooltipTarget && background) {
      fill = tooltipTarget.get("fill");
      stroke = tooltipTarget.get("stroke");
      if (fill == null) {
        fill = stroke;
      }
      if (this.get("getFillFromSprite")) {
        if (this._fillDp) {
          this._fillDp.dispose();
        }
        if (fill != null) {
          background.set("fill", fill);
        }
        this._fillDp = tooltipTarget.on("fill", (fill2) => {
          if (fill2 != null) {
            background.set("fill", fill2);
            this._updateTextColor(fill2);
          }
        });
        this._disposers.push(this._fillDp);
      }
      if (this.get("getFillGradientFromSprite")) {
        if (this._fillGrDp) {
          this._fillGrDp.dispose();
        }
        let fillGradient = tooltipTarget.get("fillGradient");
        if (fillGradient != null) {
          background.set("fillGradient", fillGradient);
        }
        this._fillGrDp = tooltipTarget.on("fillGradient", (fillGradient2) => {
          if (fillGradient2 != null) {
            background.set("fillGradient", fillGradient2);
          }
        });
        this._disposers.push(this._fillGrDp);
      }
      if (this.get("getStrokeFromSprite")) {
        if (this._strokeDp) {
          this._strokeDp.dispose();
        }
        if (fill != null) {
          background.set("stroke", fill);
        }
        this._strokeDp = tooltipTarget.on("fill", (fill2) => {
          if (fill2 != null) {
            background.set("stroke", fill2);
          }
        });
        this._disposers.push(this._strokeDp);
      }
      if (this.get("getLabelFillFromSprite")) {
        if (this._labelDp) {
          this._labelDp.dispose();
        }
        if (fill != null) {
          this.label.set("fill", fill);
        }
        this._labelDp = tooltipTarget.on("fill", (fill2) => {
          if (fill2 != null) {
            this.label.set("fill", fill2);
          }
        });
        this._disposers.push(this._labelDp);
      }
    }
    this._updateTextColor(fill);
  }
  _updateTextColor(fill) {
    if (this.get("autoTextColor")) {
      if (fill == null) {
        fill = this.get("background").get("fill");
      }
      if (fill == null) {
        fill = this._root.interfaceColors.get("background");
      }
      if (fill instanceof Color) {
        this.label.set("fill", Color.alternative(fill, this._root.interfaceColors.get("alternativeText"), this._root.interfaceColors.get("text")));
      }
    }
  }
  _setDataItem(dataItem) {
    super._setDataItem(dataItem);
    this.label._setDataItem(dataItem);
  }
  _updateBackground() {
    super.updateBackground();
    const parent = this._root.container;
    if (parent) {
      let cw = 0.5;
      let ch = 0.5;
      let centerX = this.get("centerX");
      if (centerX instanceof Percent) {
        cw = centerX.value;
      }
      let centerY = this.get("centerY");
      if (centerY instanceof Percent) {
        ch = centerY.value;
      }
      let parentW = parent.width();
      let parentH = parent.height();
      let tooltipContainer = this.parent;
      let xx = 0;
      let yy = 0;
      if (tooltipContainer) {
        xx = tooltipContainer.x();
        yy = tooltipContainer.y();
        const layerMargin = tooltipContainer.get("layerMargin");
        if (layerMargin) {
          xx += layerMargin.left || 0;
          yy += layerMargin.top || 0;
          parentW += (layerMargin.left || 0) + (layerMargin.right || 0);
          parentH += (layerMargin.top || 0) + (layerMargin.bottom || 0);
        }
      }
      const bounds = this.get("bounds", {
        left: -xx,
        top: -yy,
        right: parentW - xx,
        bottom: parentH - yy
      });
      this._updateBounds();
      let w = this.width();
      let h = this.height();
      if (w === 0) {
        w = this._w;
      }
      if (h === 0) {
        h = this._h;
      }
      let pointTo = this.get("pointTo", {
        x: parentW / 2,
        y: parentH / 2
      });
      let x = pointTo.x;
      let y = pointTo.y;
      let pointerOrientation = this.get("pointerOrientation");
      let background = this.get("background");
      let pointerLength = 0;
      let bgStrokeSizeY = 0;
      let bgStrokeSizeX = 0;
      if (background instanceof PointedRectangle) {
        pointerLength = background.get("pointerLength", 0);
        bgStrokeSizeY = background.get("strokeWidth", 0) / 2;
        bgStrokeSizeX = bgStrokeSizeY;
        background.set("width", w);
        background.set("height", h);
      }
      let pointerX = 0;
      let pointerY = 0;
      let boundsW = bounds.right - bounds.left;
      let boundsH = bounds.bottom - bounds.top;
      if (pointerOrientation == "horizontal" || pointerOrientation == "left" || pointerOrientation == "right") {
        bgStrokeSizeY = 0;
        if (pointerOrientation == "horizontal") {
          if (x > bounds.left + boundsW / 2) {
            x -= w * (1 - cw) + pointerLength;
            bgStrokeSizeX *= -1;
          } else {
            x += w * cw + pointerLength;
          }
        } else if (pointerOrientation == "left") {
          x += w * (1 - cw) + pointerLength;
        } else {
          x -= w * cw + pointerLength;
          bgStrokeSizeX *= -1;
        }
      } else {
        bgStrokeSizeX = 0;
        if (pointerOrientation == "vertical") {
          if (y > bounds.top + h / 2 + pointerLength) {
            y -= h * (1 - ch) + pointerLength;
          } else {
            y += h * ch + pointerLength;
            bgStrokeSizeY *= -1;
          }
        } else if (pointerOrientation == "down") {
          y -= h * (1 - ch) + pointerLength;
        } else {
          y += h * ch + pointerLength;
          bgStrokeSizeY *= -1;
        }
      }
      x = fitToRange(x, bounds.left + w * cw, bounds.left + boundsW - w * (1 - cw)) + bgStrokeSizeX;
      y = fitToRange(y, bounds.top + h * ch, bounds.top + boundsH - h * (1 - ch)) - bgStrokeSizeY;
      pointerX = pointTo.x - x + w * cw + bgStrokeSizeX;
      pointerY = pointTo.y - y + h * ch - bgStrokeSizeY;
      this._fx = x;
      this._fy = y;
      const animationDuration = this.get("animationDuration", 0);
      if (animationDuration > 0 && this.get("visible") && this.get("opacity") > 0.1) {
        const animationEasing = this.get("animationEasing");
        this.animate({
          key: "x",
          to: x,
          duration: animationDuration,
          easing: animationEasing
        });
        this.animate({
          key: "y",
          to: y,
          duration: animationDuration,
          easing: animationEasing
        });
      } else {
        this.set("x", x);
        this.set("y", y);
      }
      if (background instanceof PointedRectangle) {
        background.set("pointerX", pointerX);
        background.set("pointerY", pointerY);
      }
      if (w > 0) {
        this._w = w;
      }
      if (h > 0) {
        this._h = h;
      }
    }
  }
};
Object.defineProperty(Tooltip, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Tooltip"
});
Object.defineProperty(Tooltip, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([Tooltip.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/NumberFormatter.js
var NumberFormatter = class extends Entity {
  _setDefaults() {
    this._setDefault("negativeBase", 0);
    this._setDefault("numberFormat", "#,###.#####");
    this._setDefault("smallNumberThreshold", 1);
    const bns = "_big_number_suffix_";
    const sns = "_small_number_suffix_";
    const bs = "_byte_suffix_";
    this._setDefault("bigNumberPrefixes", [{
      "number": 1e3,
      "suffix": this._t(bns + "3")
    }, {
      "number": 1e6,
      "suffix": this._t(bns + "6")
    }, {
      "number": 1e9,
      "suffix": this._t(bns + "9")
    }, {
      "number": 1e12,
      "suffix": this._t(bns + "12")
    }, {
      "number": 1e15,
      "suffix": this._t(bns + "15")
    }, {
      "number": 1e18,
      "suffix": this._t(bns + "18")
    }, {
      "number": 1e21,
      "suffix": this._t(bns + "21")
    }, {
      "number": 1e24,
      "suffix": this._t(bns + "24")
    }]);
    this._setDefault("smallNumberPrefixes", [{
      "number": 1e-24,
      "suffix": this._t(sns + "24")
    }, {
      "number": 1e-21,
      "suffix": this._t(sns + "21")
    }, {
      "number": 1e-18,
      "suffix": this._t(sns + "18")
    }, {
      "number": 1e-15,
      "suffix": this._t(sns + "15")
    }, {
      "number": 1e-12,
      "suffix": this._t(sns + "12")
    }, {
      "number": 1e-9,
      "suffix": this._t(sns + "9")
    }, {
      "number": 1e-6,
      "suffix": this._t(sns + "6")
    }, {
      "number": 1e-3,
      "suffix": this._t(sns + "3")
    }]);
    this._setDefault("bytePrefixes", [{
      "number": 1,
      suffix: this._t(bs + "B")
    }, {
      "number": 1024,
      suffix: this._t(bs + "KB")
    }, {
      "number": 1048576,
      suffix: this._t(bs + "MB")
    }, {
      "number": 1073741824,
      suffix: this._t(bs + "GB")
    }, {
      "number": 1099511627776,
      suffix: this._t(bs + "TB")
    }, {
      "number": 1125899906842624,
      suffix: this._t(bs + "PB")
    }]);
    super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  /**
   * Formats the number according to specific format.
   *
   * @param value   Value to format
   * @param format  Format to apply
   * @return Formatted number
   */
  format(value, format, precision) {
    if (format == null || isString(format) && format.toLowerCase() === "number") {
      format = this.get("numberFormat", "");
    }
    let formatted;
    let source = Number(value);
    if (isObject(format)) {
      try {
        if (this.get("intlLocales")) {
          return new Intl.NumberFormat(this.get("intlLocales"), format).format(source);
        } else {
          return new Intl.NumberFormat(void 0, format).format(source);
        }
      } catch (e) {
        return "Invalid";
      }
    } else {
      format = cleanFormat(format);
      let info = this.parseFormat(format, this._root.language);
      let details;
      if (source > this.get("negativeBase")) {
        details = info.positive;
      } else if (source < this.get("negativeBase")) {
        details = info.negative;
      } else {
        details = info.zero;
      }
      if (precision != null && !details.mod) {
        details = copy2(details);
        details.decimals.active = source == 0 ? 0 : precision;
      }
      formatted = details.template.split(PLACEHOLDER).join(this.applyFormat(source, details));
    }
    if (this.get("forceLTR") === true) {
      formatted = "‎" + formatted;
    }
    return formatted;
  }
  /**
   * Parses supplied format into structured object which can be used to format
   * the number.
   *
   * @param format Format string, i.e. "#,###.00"
   * @param language Language
   * @ignore
   */
  parseFormat(format, language) {
    const thousandSeparator = language.translateEmpty("_thousandSeparator");
    const decimalSeparator = language.translateEmpty("_decimalSeparator");
    let info = {
      "positive": {
        "thousands": {
          "active": -1,
          "passive": -1,
          "interval": -1,
          "separator": thousandSeparator
        },
        "decimals": {
          "active": -1,
          "passive": -1,
          "separator": decimalSeparator
        },
        "template": "",
        "source": "",
        "parsed": false
      },
      "negative": {
        "thousands": {
          "active": -1,
          "passive": -1,
          "interval": -1,
          "separator": thousandSeparator
        },
        "decimals": {
          "active": -1,
          "passive": -1,
          "separator": decimalSeparator
        },
        "template": "",
        "source": "",
        "parsed": false
      },
      "zero": {
        "thousands": {
          "active": -1,
          "passive": -1,
          "interval": -1,
          "separator": thousandSeparator
        },
        "decimals": {
          "active": -1,
          "passive": -1,
          "separator": decimalSeparator
        },
        "template": "",
        "source": "",
        "parsed": false
      }
    };
    format = format.replace("||", PLACEHOLDER2);
    let parts = format.split("|");
    info.positive.source = parts[0];
    if (typeof parts[2] === "undefined") {
      info.zero = info.positive;
    } else {
      info.zero.source = parts[2];
    }
    if (typeof parts[1] === "undefined") {
      info.negative = info.positive;
    } else {
      info.negative.source = parts[1];
    }
    each2(info, (_part, item) => {
      if (item.parsed) {
        return;
      }
      let partFormat = item.source;
      if (partFormat.toLowerCase() === "number") {
        partFormat = this.get("numberFormat", "#,###.#####");
      }
      let chunks = TextFormatter.chunk(partFormat, true);
      for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        chunk.text = chunk.text.replace(PLACEHOLDER2, "|");
        if (chunk.type === "value") {
          let matches = chunk.text.match(/[#0.,]+[ ]?[abespABESP%!]?[abespABESP‰!]?/);
          if (matches) {
            if (matches === null || matches[0] === "") {
              item.template += chunk.text;
            } else {
              let mods = matches[0].match(/[abespABESP%‰!]{2}|[abespABESP%‰]{1}$/);
              if (mods) {
                item.mod = mods[0].toLowerCase();
                item.modSpacing = matches[0].match(/[ ]{1}[abespABESP%‰!]{1}$/) ? true : false;
              }
              let a = matches[0].split(".");
              if (a[0] === "") {
              } else {
                item.thousands.active = (a[0].match(/0/g) || []).length;
                item.thousands.passive = (a[0].match(/\#/g) || []).length + item.thousands.active;
                let b = a[0].split(",");
                if (b.length === 1) {
                } else {
                  item.thousands.interval = (b.pop() || "").length;
                  if (item.thousands.interval === 0) {
                    item.thousands.interval = -1;
                  }
                }
              }
              if (typeof a[1] === "undefined") {
              } else {
                item.decimals.active = (a[1].match(/0/g) || []).length;
                item.decimals.passive = (a[1].match(/\#/g) || []).length + item.decimals.active;
              }
              item.template += chunk.text.split(matches[0]).join(PLACEHOLDER);
            }
          }
        } else {
          item.template += chunk.text;
        }
      }
      item.parsed = true;
    });
    return info;
  }
  /**
   * Applies parsed format to a numeric value.
   *
   * @param value    Value
   * @param details  Parsed format as returned by parseFormat()
   * @return Formatted number
   * @ignore
   */
  applyFormat(value, details) {
    let negative = value < 0;
    value = Math.abs(value);
    let prefix = "", suffix = "";
    let mods = details.mod ? details.mod.split("") : [];
    if (mods.indexOf("b") !== -1) {
      let a2 = this.applyPrefix(value, this.get("bytePrefixes"), mods.indexOf("!") !== -1);
      value = a2[0];
      prefix = a2[1];
      suffix = a2[2];
      if (details.modSpacing) {
        suffix = " " + suffix;
      }
    } else if (mods.indexOf("a") !== -1) {
      let a2 = this.applyPrefix(value, value < this.get("smallNumberThreshold") ? this.get("smallNumberPrefixes") : this.get("bigNumberPrefixes"), mods.indexOf("!") !== -1);
      value = a2[0];
      prefix = a2[1];
      suffix = a2[2];
      if (details.modSpacing) {
        suffix = " " + suffix;
      }
    } else if (mods.indexOf("p") !== -1) {
      let ol = Math.min(value.toString().length + 2, 21);
      value = parseFloat(value.toPrecision(ol));
      prefix = this._root.language.translate("_percentPrefix");
      suffix = this._root.language.translate("_percentSuffix");
      if (prefix == "" && suffix == "") {
        suffix = "%";
      }
    } else if (mods.indexOf("%") !== -1) {
      let ol = Math.min(value.toString().length + 2, 21);
      value *= 100;
      value = parseFloat(value.toPrecision(ol));
      suffix = "%";
    } else if (mods.indexOf("‰") !== -1) {
      let ol = Math.min(value.toString().length + 3, 21);
      value *= 1e3;
      value = parseFloat(value.toPrecision(ol));
      suffix = "‰";
    }
    if (mods.indexOf("e") !== -1) {
      let exp;
      if (details.decimals.passive >= 0) {
        exp = value.toExponential(details.decimals.passive).split("e");
      } else {
        exp = value.toExponential().split("e");
      }
      value = Number(exp[0]);
      suffix = "e" + exp[1];
      if (details.modSpacing) {
        suffix = " " + suffix;
      }
    } else if (details.decimals.passive === 0) {
      value = Math.round(value);
    } else if (details.decimals.passive > 0) {
      const decimals = decimalPlaces(value);
      if (decimals > 0) {
        const d = Math.pow(10, details.decimals.passive);
        value = Math.round(parseFloat((value * d).toFixed(decimals))) / d;
      }
    }
    let res = "";
    let a = numberToString(value).split(".");
    let ints = a[0];
    if (ints.length < details.thousands.active) {
      ints = Array(details.thousands.active - ints.length + 1).join("0") + ints;
    }
    if (details.thousands.interval > 0) {
      let ip = [];
      let intsr = ints.split("").reverse().join("");
      for (let i = 0, len = ints.length; i <= len; i += details.thousands.interval) {
        let c = intsr.substr(i, details.thousands.interval).split("").reverse().join("");
        if (c !== "") {
          ip.unshift(c);
        }
      }
      ints = ip.join(details.thousands.separator);
    }
    res += ints;
    if (a.length === 1) {
      a.push("");
    }
    let decs = a[1];
    if (decs.length < details.decimals.active) {
      decs += Array(details.decimals.active - decs.length + 1).join("0");
    }
    if (decs !== "") {
      res += details.decimals.separator + decs;
    }
    if (res === "") {
      res = "0";
    }
    if (value !== 0 && negative && mods.indexOf("s") === -1) {
      res = "-" + res;
    }
    if (prefix) {
      res = prefix + res;
    }
    if (suffix) {
      res += suffix;
    }
    return res;
  }
  applyPrefix(value, prefixes, force = false) {
    let newvalue = value;
    let prefix = "";
    let suffix = "";
    let applied = false;
    let k = 1;
    for (let i = 0, len = prefixes.length; i < len; i++) {
      if (prefixes[i].number <= value) {
        if (prefixes[i].number === 0) {
          newvalue = 0;
        } else {
          newvalue = value / prefixes[i].number;
          k = prefixes[i].number;
        }
        prefix = prefixes[i].prefix;
        suffix = prefixes[i].suffix;
        applied = true;
      }
    }
    if (!applied && force && prefixes.length && value != 0) {
      newvalue = value / prefixes[0].number;
      prefix = prefixes[0].prefix;
      suffix = prefixes[0].suffix;
      applied = true;
    }
    if (applied) {
      newvalue = parseFloat(newvalue.toPrecision(Math.min(k.toString().length + Math.floor(newvalue).toString().replace(/[^0-9]*/g, "").length, 21)));
    }
    return [newvalue, prefix, suffix];
  }
  /**
   * Replaces brackets with temporary placeholders.
   *
   * @ignore Exclude from docs
   * @param text  Input text
   * @return Escaped text
   */
  escape(text) {
    return text.replace("||", PLACEHOLDER2);
  }
  /**
   * Replaces placeholders back to brackets.
   *
   * @ignore Exclude from docs
   * @param text  Escaped text
   * @return Unescaped text
   */
  unescape(text) {
    return text.replace(PLACEHOLDER2, "|");
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Timezone.js
function parseDate(timezone, date) {
  let year = 0;
  let month = 0;
  let day = 1;
  let hour = 0;
  let minute = 0;
  let second = 0;
  let millisecond = 0;
  let weekday = 0;
  timezone.formatToParts(date).forEach((x) => {
    switch (x.type) {
      case "year":
        year = +x.value;
        break;
      case "month":
        month = +x.value - 1;
        break;
      case "day":
        day = +x.value;
        break;
      case "hour":
        hour = +x.value;
        break;
      case "minute":
        minute = +x.value;
        break;
      case "second":
        second = +x.value;
        break;
      case "fractionalSecond":
        millisecond = +x.value;
        break;
      case "weekday":
        switch (x.value) {
          case "Sun":
            weekday = 0;
            break;
          case "Mon":
            weekday = 1;
            break;
          case "Tue":
            weekday = 2;
            break;
          case "Wed":
            weekday = 3;
            break;
          case "Thu":
            weekday = 4;
            break;
          case "Fri":
            weekday = 5;
            break;
          case "Sat":
            weekday = 6;
            break;
        }
    }
  });
  if (hour === 24) {
    hour = 0;
  }
  return {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond,
    weekday
  };
}
function toUTCDate(timezone, date) {
  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
    millisecond
  } = parseDate(timezone, date);
  return Date.UTC(year, month, day, hour, minute, second, millisecond);
}
var Timezone = class {
  constructor(timezone, isReal) {
    Object.defineProperty(this, "_utc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dtf", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this.name = timezone;
    this._utc = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      fractionalSecondDigits: 3
    });
    this._dtf = new Intl.DateTimeFormat("en-US", {
      hour12: false,
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
      fractionalSecondDigits: 3
    });
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   timezone  IANA timezone
   * @return            Instantiated object
   */
  static new(timezone) {
    return new this(timezone, true);
  }
  convertLocal(date) {
    const offset = this.offsetUTC(date);
    const userOffset = date.getTimezoneOffset();
    const output = new Date(date);
    output.setUTCMinutes(output.getUTCMinutes() - (offset - userOffset));
    const newUserOffset = output.getTimezoneOffset();
    if (userOffset != newUserOffset) {
      output.setUTCMinutes(output.getUTCMinutes() + newUserOffset - userOffset);
    }
    return output;
  }
  offsetUTC(date) {
    const utc = toUTCDate(this._utc, date);
    const dtf = toUTCDate(this._dtf, date);
    return (utc - dtf) / 6e4;
  }
  parseDate(date) {
    return parseDate(this._dtf, date);
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/DateFormatter.js
var DateFormatter = class extends Entity {
  _setDefaults() {
    this._setDefault("capitalize", true);
    this._setDefault("dateFormat", "yyyy-MM-dd");
    super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  /**
   * Formats a source `Date` object into string format
   * @param   source          inpout date
   * @param   format          Output format
   * @param   ignoreTimezone  Ignore timezone?
   * @return                  Formatted date
   */
  format(source, format, ignoreTimezone = false) {
    if (typeof format === "undefined" || format === "") {
      format = this.get("dateFormat", "yyyy-MM-dd");
    }
    let formatted;
    let date = source;
    if (isObject(format)) {
      try {
        const locales = this.get("intlLocales");
        if (locales) {
          return new Intl.DateTimeFormat(locales, format).format(date);
        } else {
          return new Intl.DateTimeFormat(void 0, format).format(date);
        }
      } catch (e) {
        return "Invalid";
      }
    }
    let info = this.parseFormat(format);
    const timezone = this._root.timezone;
    let originalDate = date;
    if (timezone && !this._root.utc && !ignoreTimezone) {
      date = timezone.convertLocal(date);
    }
    if (!isNumber(date.getTime())) {
      return "Invalid date";
    }
    formatted = this.applyFormat(date, info, ignoreTimezone, originalDate);
    if (this.get("capitalize")) {
      formatted = formatted.replace(/^.{1}/, formatted.substr(0, 1).toUpperCase());
    }
    return formatted;
  }
  /**
   * Applies format to Date.
   *
   * @param date      Date object
   * @param info      Parsed format information
   * @return Formatted date string
   */
  applyFormat(date, info, ignoreTimezone = false, originalDate) {
    let res = info.template;
    let fullYear, month, weekday, day, hours, minutes, seconds, milliseconds, timestamp = date.getTime();
    if (this._root.utc && !ignoreTimezone) {
      fullYear = date.getUTCFullYear();
      month = date.getUTCMonth();
      weekday = date.getUTCDay();
      day = date.getUTCDate();
      hours = date.getUTCHours();
      minutes = date.getUTCMinutes();
      seconds = date.getUTCSeconds();
      milliseconds = date.getUTCMilliseconds();
    } else {
      fullYear = date.getFullYear();
      month = date.getMonth();
      weekday = date.getDay();
      day = date.getDate();
      hours = date.getHours();
      minutes = date.getMinutes();
      seconds = date.getSeconds();
      milliseconds = date.getMilliseconds();
    }
    for (let i = 0, len = info.parts.length; i < len; i++) {
      let value = "";
      switch (info.parts[i]) {
        case "G":
          value = this._t(fullYear < 0 ? "_era_bc" : "_era_ad");
          break;
        case "yyyy":
          value = Math.abs(fullYear).toString();
          if (fullYear < 0) {
            value += this._t("_era_bc");
          }
          break;
        case "yyy":
        case "yy":
        case "y":
          value = Math.abs(fullYear).toString().substr(-info.parts[i].length);
          if (fullYear < 0) {
            value += this._t("_era_bc");
          }
          break;
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
          let year = getWeekYear(date, this._root.utc);
          if (info.parts[i] == "YYYY") {
            value = Math.abs(year).toString();
          } else {
            value = Math.abs(year).toString().substr(-info.parts[i].length);
          }
          if (year < 0) {
            value += this._t("_era_bc");
          }
          break;
        case "u":
          break;
        case "q":
          value = "" + Math.ceil((date.getMonth() + 1) / 3);
          break;
        case "MMMMM":
          value = this._t(this._getMonth(month)).substr(0, 1);
          break;
        case "MMMM":
          value = this._t(this._getMonth(month));
          break;
        case "MMM":
          value = this._t(this._getShortMonth(month));
          break;
        case "MM":
          value = padString(month + 1, 2, "0");
          break;
        case "M":
          value = (month + 1).toString();
          break;
        case "ww":
          value = padString(getWeek(date, this._root.utc), 2, "0");
          break;
        case "w":
          value = getWeek(date, this._root.utc).toString();
          break;
        case "W":
          value = getMonthWeek(date, this._root.utc).toString();
          break;
        case "dd":
          value = padString(day, 2, "0");
          break;
        case "d":
          value = day.toString();
          break;
        case "DD":
        case "DDD":
          value = padString(getYearDay(date, this._root.utc).toString(), info.parts[i].length, "0");
          break;
        case "D":
          value = getYearDay(date, this._root.utc).toString();
          break;
        case "F":
          break;
        case "g":
          break;
        case "t":
          value = this._root.language.translateFunc("_dateOrd").call(this, day);
          break;
        case "E":
          value = (weekday || 7).toString();
          break;
        case "EE":
          value = padString((weekday || 7).toString(), 2, "0");
          break;
        case "EEE":
        case "eee":
          value = this._t(this._getShortWeekday(weekday));
          break;
        case "EEEE":
        case "eeee":
          value = this._t(this._getWeekday(weekday));
          break;
        case "EEEEE":
        case "eeeee":
          value = this._t(this._getShortWeekday(weekday)).substr(0, 1);
          break;
        case "e":
        case "ee":
          value = (weekday - (this._root.locale.firstDayOfWeek || 1) + 1).toString();
          if (info.parts[i] == "ee") {
            value = padString(value, 2, "0");
          }
          break;
        case "a":
          if (hours >= 12) {
            value = this._t("PM");
          } else {
            value = this._t("AM");
          }
          break;
        case "aa":
          if (hours >= 12) {
            value = this._t("P.M.");
          } else {
            value = this._t("A.M.");
          }
          break;
        case "aaa":
          if (hours >= 12) {
            value = this._t("P");
          } else {
            value = this._t("A");
          }
          break;
        case "h":
          value = get12Hours(hours).toString();
          break;
        case "hh":
          value = padString(get12Hours(hours), 2, "0");
          break;
        case "H":
          value = hours.toString();
          break;
        case "HH":
          value = padString(hours, 2, "0");
          break;
        case "K":
          value = get12Hours(hours, 0).toString();
          break;
        case "KK":
          value = padString(get12Hours(hours, 0), 2, "0");
          break;
        case "k":
          value = (hours + 1).toString();
          break;
        case "kk":
          value = padString(hours + 1, 2, "0");
          break;
        case "m":
          value = minutes.toString();
          break;
        case "mm":
          value = padString(minutes, 2, "0");
          break;
        case "s":
          value = seconds.toString();
          break;
        case "ss":
          value = padString(seconds, 2, "0");
          break;
        case "S":
        case "SS":
        case "SSS":
          value = Math.round(milliseconds / 1e3 * Math.pow(10, info.parts[i].length)).toString();
          break;
        case "x":
          value = timestamp.toString();
          break;
        case "n":
        case "nn":
        case "nnn":
          value = padString(milliseconds, info.parts[i].length, "0");
          break;
        case "z":
          value = getTimeZone(originalDate || date, false, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zz":
          value = getTimeZone(originalDate || date, true, false, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "zzz":
          value = getTimeZone(originalDate || date, false, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0).replace(/[+-]+[0-9]+$/, "");
          break;
        case "zzzz":
          value = getTimeZone(originalDate || date, true, true, this._root.utc, this._root.timezone ? this._root.timezone.name : void 0);
          break;
        case "Z":
        case "ZZ":
          let timezone = this._root.utc ? "UTC" : this._root.timezone;
          if (timezone instanceof Timezone) {
            timezone = timezone.name;
          }
          const offset = timezone ? getTimezoneOffset(timezone, originalDate || date) : date.getTimezoneOffset();
          let tz = Math.abs(offset) / 60;
          let tzh = Math.floor(tz);
          let tzm = tz * 60 - tzh * 60;
          if (this._root.utc) {
            tzh = 0;
            tzm = 0;
          }
          if (info.parts[i] == "Z") {
            value = "GMT";
            value += offset > 0 ? "-" : "+";
            value += padString(tzh, 2) + ":" + padString(tzm, 2);
          } else {
            value = offset > 0 ? "-" : "+";
            value += padString(tzh, 2) + padString(tzm, 2);
          }
          break;
        case "i":
          value = date.toISOString();
          break;
        case "I":
          value = date.toUTCString();
          break;
      }
      res = res.replace(PLACEHOLDER, value);
    }
    return res;
  }
  /**
   * Parses format into structured infromation.
   *
   * @param format Format template
   */
  parseFormat(format) {
    let info = {
      "template": "",
      "parts": []
    };
    let chunks = TextFormatter.chunk(format, true);
    for (let i = 0; i < chunks.length; i++) {
      let chunk = chunks[i];
      if (chunk.type === "value") {
        if (chunk.text.match(/^date$/i)) {
          let dateFormat = this.get("dateFormat", "yyyy-MM-dd");
          if (!isString(dateFormat)) {
            dateFormat = "yyyy-MM-dd";
          }
          chunk.text = dateFormat;
        }
        let matches = chunk.text.match(/G|yyyy|yyy|yy|y|YYYY|YYY|YY|Y|u|q|MMMMM|MMMM|MMM|MM|M|ww|w|W|dd|d|DDD|DD|D|F|g|EEEEE|EEEE|EEE|EE|E|eeeee|eeee|eee|ee|e|aaa|aa|a|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|SSS|SS|S|A|zzzz|zzz|zz|z|ZZ|Z|t|x|nnn|nn|n|i|I/g);
        if (matches) {
          for (let x = 0; x < matches.length; x++) {
            info.parts.push(matches[x]);
            chunk.text = chunk.text.replace(matches[x], PLACEHOLDER);
          }
        }
      }
      info.template += chunk.text;
    }
    return info;
  }
  _months() {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  }
  _getMonth(index) {
    return this._months()[index];
  }
  _shortMonths() {
    return ["Jan", "Feb", "Mar", "Apr", "May(short)", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  }
  _getShortMonth(index) {
    return this._shortMonths()[index];
  }
  _weekdays() {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  }
  _getWeekday(index) {
    return this._weekdays()[index];
  }
  _shortWeekdays() {
    return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  }
  _getShortWeekday(index) {
    return this._shortWeekdays()[index];
  }
  parse(source, format, utc) {
    if (typeof utc === "undefined") {
      utc = this._root.utc;
    }
    if (source instanceof Date) {
      return source;
    }
    if (isNumber(source)) {
      return new Date(source);
    }
    if (format == "x") {
      return new Date(parseInt(source));
    }
    if (!isString(source)) {
      source = source.toString();
    }
    let res;
    let reg = "";
    format = cleanFormat(format);
    format = format.substr(0, source.length);
    let info = this.parseFormat(format);
    let parsedIndexes = {
      "year": -1,
      "year3": -1,
      "year2": -1,
      "year1": -1,
      "month": -1,
      "monthShort": -1,
      "monthLong": -1,
      "weekdayShort": -1,
      "weekdayLong": -1,
      "day": -1,
      "yearDay": -1,
      "week": -1,
      "hourBase0": -1,
      "hour12Base0": -1,
      "hourBase1": -1,
      "hour12Base1": -1,
      "minute": -1,
      "second": -1,
      "millisecond": -1,
      "millisecondDigits": -1,
      "am": -1,
      "zone": -1,
      "timestamp": -1,
      "iso": -1
    };
    let resValues = {
      "year": 1970,
      "month": 0,
      "day": 1,
      "hour": 0,
      "minute": 0,
      "second": 0,
      "millisecond": 0,
      "timestamp": null,
      "offset": 0,
      "utc": utc
    };
    let indexAdjust = 0;
    let index = 0;
    for (let i = 0; i < info.parts.length; i++) {
      index = i + indexAdjust + 1;
      switch (info.parts[i]) {
        case "yyyy":
        case "YYYY":
          reg += "([0-9]{4})";
          parsedIndexes.year = index;
          break;
        case "yyy":
        case "YYY":
          reg += "([0-9]{3})";
          parsedIndexes.year3 = index;
          break;
        case "yy":
        case "YY":
          reg += "([0-9]{2})";
          parsedIndexes.year2 = index;
          break;
        case "y":
        case "Y":
          reg += "([0-9]{1})";
          parsedIndexes.year1 = index;
          break;
        case "MMMM":
          reg += "(" + this.getStringList(this._months()).join("|") + ")";
          parsedIndexes.monthLong = index;
          break;
        case "MMM":
          reg += "(" + this.getStringList(this._shortMonths()).join("|") + ")";
          parsedIndexes.monthShort = index;
          break;
        case "MM":
        case "M":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.month = index;
          break;
        case "ww":
        case "w":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.week = index;
          break;
        case "dd":
        case "d":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.day = index;
          break;
        case "DDD":
        case "DD":
        case "D":
          reg += "([0-9]{3}|[0-9]{2}|[0-9]{1})";
          parsedIndexes.yearDay = index;
          break;
        case "dddd":
          reg += "(" + this.getStringList(this._weekdays()).join("|") + ")";
          parsedIndexes.weekdayLong = index;
          break;
        case "ddd":
          reg += "(" + this.getStringList(this._shortWeekdays()).join("|") + ")";
          parsedIndexes.weekdayShort = index;
          break;
        case "aaa":
        case "aa":
        case "a":
          reg += "(" + this.getStringList(["AM", "PM", "A.M.", "P.M.", "A", "P"]).join("|") + ")";
          parsedIndexes.am = index;
          break;
        case "hh":
        case "h":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.hour12Base1 = index;
          break;
        case "HH":
        case "H":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.hourBase0 = index;
          break;
        case "KK":
        case "K":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.hour12Base0 = index;
          break;
        case "kk":
        case "k":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.hourBase1 = index;
          break;
        case "mm":
        case "m":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.minute = index;
          break;
        case "ss":
        case "s":
          reg += "([0-9]{2}|[0-9]{1})";
          parsedIndexes.second = index;
          break;
        case "SSS":
        case "SS":
        case "S":
          reg += "([0-9]{3}|[0-9]{2}|[0-9]{1})";
          parsedIndexes.millisecond = index;
          parsedIndexes.millisecondDigits = info.parts[i].length;
          break;
        case "nnn":
        case "nn":
        case "n":
          reg += "([0-9]{3}|[0-9]{2}|[0-9]{1})";
          parsedIndexes.millisecond = index;
          break;
        case "x":
          reg += "([0-9]{1,})";
          parsedIndexes.timestamp = index;
          break;
        case "Z":
          reg += "GMT([-+]+[0-9]{2}:[0-9]{2})";
          parsedIndexes.zone = index;
          break;
        case "ZZ":
          reg += "([\\-+]+[0-9]{2}[0-9]{2})";
          parsedIndexes.zone = index;
          break;
        case "i":
          reg += "([0-9]{4})-?([0-9]{2})-?([0-9]{2})T?([0-9]{2}):?([0-9]{2}):?([0-9]{2})\\.?([0-9]{0,3})([zZ]|[+\\-][0-9]{2}:?[0-9]{2}|$)";
          parsedIndexes.iso = index;
          indexAdjust += 7;
          break;
        case "G":
        case "YYYY":
        case "YYY":
        case "YY":
        case "Y":
        case "MMMMM":
        case "W":
        case "EEEEE":
        case "EEEE":
        case "EEE":
        case "EE":
        case "E":
        case "eeeee":
        case "eeee":
        case "eee":
        case "ee":
        case "e":
        case "zzzz":
        case "zzz":
        case "zz":
        case "z":
        case "t":
          indexAdjust--;
          break;
      }
      reg += "[^0-9]*";
    }
    let regex = new RegExp(reg);
    let matches = source.match(regex);
    if (matches) {
      if (parsedIndexes.year > -1) {
        resValues.year = parseInt(matches[parsedIndexes.year]);
      }
      if (parsedIndexes.year3 > -1) {
        let val = parseInt(matches[parsedIndexes.year3]);
        val += 1e3;
        resValues.year = val;
      }
      if (parsedIndexes.year2 > -1) {
        let val = parseInt(matches[parsedIndexes.year2]);
        if (val > 50) {
          val += 1e3;
        } else {
          val += 2e3;
        }
        resValues.year = val;
      }
      if (parsedIndexes.year1 > -1) {
        let val = parseInt(matches[parsedIndexes.year1]);
        val = Math.floor((/* @__PURE__ */ new Date()).getFullYear() / 10) * 10 + val;
        resValues.year = val;
      }
      if (parsedIndexes.monthLong > -1) {
        resValues.month = this.resolveMonth(matches[parsedIndexes.monthLong]);
      }
      if (parsedIndexes.monthShort > -1) {
        resValues.month = this.resolveShortMonth(matches[parsedIndexes.monthShort]);
      }
      if (parsedIndexes.month > -1) {
        resValues.month = parseInt(matches[parsedIndexes.month]) - 1;
      }
      if (parsedIndexes.week > -1 && parsedIndexes.day === -1) {
        resValues.month = 0;
        resValues.day = getDayFromWeek(parseInt(matches[parsedIndexes.week]), resValues.year, 1, utc);
      }
      if (parsedIndexes.day > -1) {
        resValues.day = parseInt(matches[parsedIndexes.day]);
      }
      if (parsedIndexes.yearDay > -1) {
        resValues.month = 0;
        resValues.day = parseInt(matches[parsedIndexes.yearDay]);
      }
      if (parsedIndexes.hourBase0 > -1) {
        resValues.hour = parseInt(matches[parsedIndexes.hourBase0]);
      }
      if (parsedIndexes.hourBase1 > -1) {
        resValues.hour = parseInt(matches[parsedIndexes.hourBase1]) - 1;
      }
      if (parsedIndexes.hour12Base0 > -1) {
        let val = parseInt(matches[parsedIndexes.hour12Base0]);
        if (val == 11) {
          val = 0;
        }
        if (parsedIndexes.am > -1 && !this.isAm(matches[parsedIndexes.am])) {
          val += 12;
        }
        resValues.hour = val;
      }
      if (parsedIndexes.hour12Base1 > -1) {
        let val = parseInt(matches[parsedIndexes.hour12Base1]);
        if (val == 12) {
          val = 0;
        }
        if (parsedIndexes.am > -1 && !this.isAm(matches[parsedIndexes.am])) {
          val += 12;
        }
        resValues.hour = val;
      }
      if (parsedIndexes.minute > -1) {
        resValues.minute = parseInt(matches[parsedIndexes.minute]);
      }
      if (parsedIndexes.second > -1) {
        resValues.second = parseInt(matches[parsedIndexes.second]);
      }
      if (parsedIndexes.millisecond > -1) {
        let val = parseInt(matches[parsedIndexes.millisecond]);
        if (parsedIndexes.millisecondDigits == 2) {
          val *= 10;
        } else if (parsedIndexes.millisecondDigits == 1) {
          val *= 100;
        }
        resValues.millisecond = val;
      }
      if (parsedIndexes.timestamp > -1) {
        resValues.timestamp = parseInt(matches[parsedIndexes.timestamp]);
        const ts = new Date(resValues.timestamp);
        resValues.year = ts.getUTCFullYear();
        resValues.month = ts.getUTCMonth();
        resValues.day = ts.getUTCDate();
        resValues.hour = ts.getUTCHours();
        resValues.minute = ts.getUTCMinutes();
        resValues.second = ts.getUTCSeconds();
        resValues.millisecond = ts.getUTCMilliseconds();
      }
      if (parsedIndexes.zone > -1) {
        resValues.offset = this.resolveTimezoneOffset(new Date(resValues.year, resValues.month, resValues.day), matches[parsedIndexes.zone]);
      }
      if (parsedIndexes.iso > -1) {
        resValues.year = toNumber(matches[parsedIndexes.iso + 0]);
        resValues.month = toNumber(matches[parsedIndexes.iso + 1]) - 1;
        resValues.day = toNumber(matches[parsedIndexes.iso + 2]);
        resValues.hour = toNumber(matches[parsedIndexes.iso + 3]);
        resValues.minute = toNumber(matches[parsedIndexes.iso + 4]);
        resValues.second = toNumber(matches[parsedIndexes.iso + 5]);
        resValues.millisecond = toNumber(matches[parsedIndexes.iso + 6]);
        if (matches[parsedIndexes.iso + 7] == "Z" || matches[parsedIndexes.iso + 7] == "z") {
          resValues.utc = true;
        } else if (matches[parsedIndexes.iso + 7] != "") {
          resValues.offset = this.resolveTimezoneOffset(new Date(resValues.year, resValues.month, resValues.day), matches[parsedIndexes.iso + 7]);
        }
      }
      if (resValues.utc) {
        res = new Date(Date.UTC(resValues.year, resValues.month, resValues.day, resValues.hour, resValues.minute, resValues.second, resValues.millisecond));
      } else {
        res = new Date(resValues.year, resValues.month, resValues.day, resValues.hour, resValues.minute + resValues.offset, resValues.second, resValues.millisecond);
      }
    } else {
      res = new Date(source);
    }
    return res;
  }
  resolveTimezoneOffset(date, zone) {
    let value = zone.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/);
    if (value) {
      let match = zone.match(/([+\-]?)([0-9]{2}):?([0-9]{2})/);
      let dir = match[1];
      let hour = match[2];
      let minute = match[3];
      let offset = parseInt(hour) * 60 + parseInt(minute);
      if (dir == "+") {
        offset *= -1;
      }
      let originalOffset = (date || /* @__PURE__ */ new Date()).getTimezoneOffset();
      let diff = offset - originalOffset;
      return diff;
    }
    return 0;
  }
  /**
   * Resolves month name (i.e. "December") into a month number (11).
   *
   * @param value  Month name
   * @return Month number
   */
  resolveMonth(value) {
    let month = this._months().indexOf(value);
    if (month > -1) {
      return month;
    }
    if (!this._root.language.isDefault()) {
      month = this._root.language.translateAll(this._months()).indexOf(value);
      if (month > -1) {
        return month;
      }
    }
    return 0;
  }
  /**
   * Resolves short month name (i.e. "Dec") into a month number.
   *
   * @param value  Short month name
   * @return Month number
   */
  resolveShortMonth(value) {
    let month = this._shortMonths().indexOf(value);
    if (month > -1) {
      return month;
    }
    month = this._months().indexOf(value);
    if (month > -1) {
      return month;
    }
    if (this._root.language && !this._root.language.isDefault()) {
      month = this._root.language.translateAll(this._shortMonths()).indexOf(value);
      if (month > -1) {
        return month;
      }
    }
    return 0;
  }
  /**
   * Checks if passed in string represents AM/PM notation in many of its
   * versions.
   *
   * @param value  Source string
   * @return Is it AM/PM?
   */
  isAm(value) {
    let list = this.getStringList(["AM", "A.M.", "A"]);
    return list.indexOf(value.toUpperCase()) > -1;
  }
  /**
   * Translates list of strings.
   *
   * @param list  Source strings
   * @return Translated strings
   */
  getStringList(list) {
    let res = [];
    for (let i = 0; i < list.length; i++) {
      if (this._root.language) {
        res.push(escapeForRgex(this._t(list[i])));
      } else {
        res.push(escapeForRgex(list[i]));
      }
    }
    return res;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/DurationFormatter.js
var DurationFormatter = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_unitAliases", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        "Y": "y",
        "D": "d",
        "H": "h",
        "K": "h",
        "k": "h",
        "n": "S"
      }
    });
  }
  _setDefaults() {
    const dmillisecond = "_duration_millisecond";
    const dsecond = "_duration_second";
    const dminute = "_duration_minute";
    const dhour = "_duration_hour";
    const dday = "_duration_day";
    const dweek = "_duration_week";
    const dmonth = "_duration_month";
    const dyear = "_duration_year";
    const asecond = "_second";
    const aminute = "_minute";
    const ahour = "_hour";
    const aday = "_day";
    const aweek = "_week";
    const amonth = "_week";
    const ayear = "_year";
    this._setDefault("negativeBase", 0);
    this._setDefault("baseUnit", "second");
    this._setDefault("durationFormats", {
      "millisecond": {
        "millisecond": this._t(dmillisecond),
        "second": this._t(dmillisecond + asecond),
        "minute": this._t(dmillisecond + aminute),
        "hour": this._t(dmillisecond + ahour),
        "day": this._t(dmillisecond + aday),
        "week": this._t(dmillisecond + aweek),
        "month": this._t(dmillisecond + amonth),
        "year": this._t(dmillisecond + ayear)
      },
      "second": {
        "second": this._t(dsecond),
        "minute": this._t(dsecond + aminute),
        "hour": this._t(dsecond + ahour),
        "day": this._t(dsecond + aday),
        "week": this._t(dsecond + aweek),
        "month": this._t(dsecond + amonth),
        "year": this._t(dsecond + ayear)
      },
      "minute": {
        "minute": this._t(dminute),
        "hour": this._t(dminute + ahour),
        "day": this._t(dminute + aday),
        "week": this._t(dminute + aweek),
        "month": this._t(dminute + amonth),
        "year": this._t(dminute + ayear)
      },
      "hour": {
        "hour": this._t(dhour),
        "day": this._t(dhour + aday),
        "week": this._t(dhour + aweek),
        "month": this._t(dhour + amonth),
        "year": this._t(dhour + ayear)
      },
      "day": {
        "day": this._t(dday),
        "week": this._t(dday + aweek),
        "month": this._t(dday + amonth),
        "year": this._t(dday + ayear)
      },
      "week": {
        "week": this._t(dweek),
        "month": this._t(dweek + amonth),
        "year": this._t(dweek + ayear)
      },
      "month": {
        "month": this._t(dmonth),
        "year": this._t(dmonth + ayear)
      },
      "year": {
        "year": this._t(dyear)
      }
    });
    super._setDefaults();
  }
  _beforeChanged() {
    super._beforeChanged();
  }
  /**
   * Formats the number as duration.
   *
   * For example `1000` (base unit seconds) would be converted to `16:40` as in
   * 16 minutes and 40 seconds.
   *
   * @param value   Value to format
   * @param format  Format to apply
   * @param base    Override base unit
   * @return Formatted number
   */
  format(value, format, base) {
    let baseUnit = base || this.get("baseUnit");
    if (typeof format === "undefined" || format === "") {
      if (this.get("durationFormat") != null) {
        format = this.get("durationFormat");
      } else {
        format = this.getFormat(toNumber(value), void 0, baseUnit);
      }
    }
    format = cleanFormat(format);
    let info = this.parseFormat(format, baseUnit);
    let source = Number(value);
    let details;
    if (source > this.get("negativeBase")) {
      details = info.positive;
    } else if (source < this.get("negativeBase")) {
      details = info.negative;
    } else {
      details = info.zero;
    }
    let formatted = this.applyFormat(source, details);
    if (details.color !== "") {
      formatted = "[" + details.color + "]" + formatted + "[/]";
    }
    return formatted;
  }
  /**
   * Parses supplied format into structured object which can be used to format
   * the number.
   *
   * @param format  Format string, i.e. "#,###.00"
   * @param base    Override base unit
   * @return Parsed information
   */
  parseFormat(format, base) {
    let baseUnit = base || this.get("baseUnit");
    let info = {
      "positive": {
        "color": "",
        "template": "",
        "parts": [],
        "source": "",
        "baseUnit": baseUnit,
        "parsed": false,
        "absolute": false
      },
      "negative": {
        "color": "",
        "template": "",
        "parts": [],
        "source": "",
        "baseUnit": baseUnit,
        "parsed": false,
        "absolute": false
      },
      "zero": {
        "color": "",
        "template": "",
        "parts": [],
        "source": "",
        "baseUnit": baseUnit,
        "parsed": false,
        "absolute": false
      }
    };
    format = format.replace("||", PLACEHOLDER2);
    let parts = format.split("|");
    info.positive.source = parts[0];
    if (typeof parts[2] === "undefined") {
      info.zero = info.positive;
    } else {
      info.zero.source = parts[2];
    }
    if (typeof parts[1] === "undefined") {
      info.negative = info.positive;
    } else {
      info.negative.source = parts[1];
    }
    each2(info, (_part, item) => {
      if (item.parsed) {
        return;
      }
      let partFormat = item.source;
      let dirs = [];
      dirs = item.source.match(/^\[([^\]]*)\]/);
      if (dirs && dirs.length && dirs[0] !== "") {
        partFormat = item.source.substr(dirs[0].length);
        item.color = dirs[1];
      }
      let chunks = TextFormatter.chunk(partFormat, true);
      for (let i = 0; i < chunks.length; i++) {
        let chunk = chunks[i];
        chunk.text = chunk.text.replace(PLACEHOLDER2, "|");
        if (chunk.type === "value") {
          if (chunk.text.match(/[yYMdDwhHKkmsSn]+a/)) {
            item.absolute = true;
            chunk.text = chunk.text.replace(/([yYMdDwhHKkmsSn]+)a/, "$1");
          }
          let matches = chunk.text.match(/y+|Y+|M+|d+|D+|w+|h+|H+|K+|k+|m+|s+|S+|n+/g);
          if (matches) {
            for (let x = 0; x < matches.length; x++) {
              if (matches[x] == null) {
                matches[x] = this._unitAliases[matches[x]];
              }
              item.parts.push(matches[x]);
              chunk.text = chunk.text.replace(matches[x], PLACEHOLDER);
            }
          }
        }
        item.template += chunk.text;
      }
      item.parsed = true;
    });
    return info;
  }
  /**
   * Applies parsed format to a numeric value.
   *
   * @param value    Value
   * @param details  Parsed format as returned by {parseFormat}
   * @return Formatted duration
   */
  applyFormat(value, details) {
    let negative = !details.absolute && value < this.get("negativeBase");
    value = Math.abs(value);
    let tstamp = this.toTimeStamp(value, details.baseUnit);
    let res = details.template;
    const values = {
      millisecond: 0,
      second: 0,
      minute: 0,
      hour: 0,
      day: 0,
      week: 0,
      month: 0,
      year: 0
    };
    for (let i = 0, len = details.parts.length; i < len; i++) {
      let part = details.parts[i];
      let unit = this._toTimeUnit(part.substr(0, 1));
      let ints;
      const unitValue = this._getUnitValue(unit);
      if (i < len - 1) {
        ints = Math.floor(tstamp / unitValue);
      } else {
        ints = Math.round(tstamp / unitValue);
      }
      values[unit] += ints;
      tstamp -= ints * unitValue;
    }
    each2(values, (unit, value2) => {
      if (unit == "millisecond" && value2 == 1e3) {
        values["second"]++;
        values["millisecond"] = 0;
      } else if (unit == "second" && value2 == 60) {
        values["minute"]++;
        values["second"] = 0;
      } else if (unit == "minute" && value2 == 60) {
        values["hour"]++;
        values["minute"] = 0;
      } else if (unit == "hour" && value2 == 24) {
        values["day"]++;
        values["hour"] = 0;
      } else if (unit == "day" && value2 == 7) {
        values["week"]++;
        values["day"] = 0;
      } else if (unit == "day" && value2 == 30) {
        values["month"]++;
        values["day"] = 0;
      } else if (unit == "month" && value2 == 12) {
        values["year"]++;
        values["month"] = 0;
      }
    });
    for (let i = 0, len = details.parts.length; i < len; i++) {
      let part = details.parts[i];
      let unit = this._toTimeUnit(part.substr(0, 1));
      let digits = part.length;
      res = res.replace(PLACEHOLDER, padString(values[unit], digits, "0"));
    }
    if (negative) {
      res = "-" + res;
    }
    return res;
  }
  /**
   * Converts numeric value to timestamp in milliseconds.
   *
   * @param value     A source value
   * @param baseUnit  Base unit the source value is in: "q", "s", "i", "h", "d", "w", "m", "y"
   * @return Value representation as a timestamp in milliseconds
   */
  toTimeStamp(value, baseUnit) {
    return value * this._getUnitValue(baseUnit);
  }
  _toTimeUnit(code) {
    switch (code) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
        return "hour";
      case "d":
        return "day";
      case "w":
        return "week";
      case "M":
        return "month";
      case "y":
        return "year";
    }
    ;
  }
  /**
   * Returns appropriate default format for the value.
   *
   * If `maxValue` is sepcified, it will use that value to determine the time
   * unit for the format.
   *
   * For example if your `baseUnit` is `"second"` and you pass in `10`, you
   * will get `"10"`.
   *
   * However, you might want it to be formatted in the context of bigger scale,
   * say 10 minutes (600 seconds). If you pass in `600` as `maxValue`, all
   * values, including small ones will use format with minutes, e.g.:
   * `00:10`, `00:50`, `12: 30`, etc.
   *
   * @param value     Value to format
   * @param maxValue  Maximum value to be used to determine format
   * @param baseUnit  Base unit of the value
   * @return Format
   */
  getFormat(value, maxValue, baseUnit) {
    if (this.get("durationFormat") != null) {
      return this.get("durationFormat");
    }
    if (!baseUnit) {
      baseUnit = this.get("baseUnit");
    }
    if (maxValue != null && value != maxValue) {
      value = Math.abs(value);
      maxValue = Math.abs(maxValue);
      let maxUnit = this.getValueUnit(Math.max(value, maxValue), baseUnit);
      return this.get("durationFormats")[baseUnit][maxUnit];
    } else {
      let unit = this.getValueUnit(value, baseUnit);
      return this.get("durationFormats")[baseUnit][unit];
    }
  }
  /**
   * Returns value's closest denominator time unit, e.g 100 seconds is
   * `"minute"`, while 59 seconds would still be `second`.
   *
   * @param value     Source duration value
   * @param baseUnit  Base unit
   * @return Denominator
   */
  getValueUnit(value, baseUnit) {
    if (!baseUnit) {
      baseUnit = this.get("baseUnit");
    }
    let currentUnit;
    let ms = this.getMilliseconds(value, baseUnit);
    eachContinue2(this._getUnitValues(), (key, val) => {
      if (key == baseUnit || currentUnit) {
        let num = ms / val;
        if (num <= 1) {
          if (!currentUnit) {
            currentUnit = key;
          }
          return false;
        }
        currentUnit = key;
      }
      return true;
    });
    return currentUnit;
  }
  /**
   * Converts value to milliseconds according to `baseUnit`.
   *
   * @param value     Source duration value
   * @param baseUnit  Base unit
   * @return Value in milliseconds
   */
  getMilliseconds(value, baseUnit) {
    if (!baseUnit) {
      baseUnit = this.get("baseUnit");
    }
    return value * this._getUnitValue(baseUnit);
  }
  _getUnitValue(timeUnit) {
    return this._getUnitValues()[timeUnit];
  }
  _getUnitValues() {
    return {
      "millisecond": 1,
      "second": 1e3,
      "minute": 6e4,
      "hour": 36e5,
      "day": 864e5,
      "week": 6048e5,
      "month": 2592e6,
      "year": 31536e6
    };
  }
};

// ../node_modules/@amcharts/amcharts5/locales/en.js
var en_default = {
  "firstDayOfWeek": 1,
  // Number formatting options.
  // 
  // Please check with the local standards which separator is accepted to be
  // used for separating decimals, and which for thousands.
  "_decimalSeparator": ".",
  "_thousandSeparator": ",",
  // Position of the percent sign in numbers
  "_percentPrefix": null,
  "_percentSuffix": "%",
  // Suffixes for numbers
  // When formatting numbers, big or small numers might be reformatted to
  // shorter version, by applying a suffix.
  // 
  // For example, 1000000 might become "1m".
  // Or 1024 might become "1KB" if we're formatting byte numbers.
  // 
  // This section defines such suffixes for all such cases.
  "_big_number_suffix_3": "k",
  "_big_number_suffix_6": "M",
  "_big_number_suffix_9": "G",
  "_big_number_suffix_12": "T",
  "_big_number_suffix_15": "P",
  "_big_number_suffix_18": "E",
  "_big_number_suffix_21": "Z",
  "_big_number_suffix_24": "Y",
  "_small_number_suffix_3": "m",
  "_small_number_suffix_6": "μ",
  "_small_number_suffix_9": "n",
  "_small_number_suffix_12": "p",
  "_small_number_suffix_15": "f",
  "_small_number_suffix_18": "a",
  "_small_number_suffix_21": "z",
  "_small_number_suffix_24": "y",
  "_byte_suffix_B": "B",
  "_byte_suffix_KB": "KB",
  "_byte_suffix_MB": "MB",
  "_byte_suffix_GB": "GB",
  "_byte_suffix_TB": "TB",
  "_byte_suffix_PB": "PB",
  // Default date formats for various periods.
  // 
  // This should reflect official or de facto formatting universally accepted
  // in the country translation is being made for
  // Available format codes here:
  // https://www.amcharts.com/docs/v5/concepts/formatters/formatting-dates/#Format_codes
  // 
  // This will be used when formatting date/time for particular granularity,
  // e.g. "_date_hour" will be shown whenever we need to show time as hours.
  // 
  // "date" is used as in default date format when showing standalone dates.
  "_date": "yyyy-MM-dd",
  "_date_millisecond": "mm:ss SSS",
  "_date_millisecond_full": "HH:mm:ss SSS",
  "_date_second": "HH:mm:ss",
  "_date_second_full": "HH:mm:ss",
  "_date_minute": "HH:mm",
  "_date_minute_full": "HH:mm - MMM dd, yyyy",
  "_date_hour": "HH:mm",
  "_date_hour_full": "HH:mm - MMM dd, yyyy",
  "_date_day": "MMM dd",
  "_date_day_full": "MMM dd, yyyy",
  "_date_week": "ww",
  "_date_week_full": "MMM dd, yyyy",
  "_date_month": "MMM",
  "_date_month_full": "MMM, yyyy",
  "_date_year": "yyyy",
  // Default duration formats for various base units.
  // 
  // This will be used by DurationFormatter to format numeric values into
  // duration.
  // 
  // Notice how each duration unit comes in several versions. This is to ensure
  // that each base unit is shown correctly.
  // 
  // For example, if we have baseUnit set to "second", meaning our duration is
  // in seconds.
  // 
  // If we pass in `50` to formatter, it will know that we have just 50 seconds
  // (less than a minute) so it will use format in `"_duration_second"` ("ss"),
  // and the formatted result will be in like `"50"`.
  // 
  // If we pass in `70`, which is more than a minute, the formatter will switch
  // to `"_duration_second_minute"` ("mm:ss"), resulting in "01:10" formatted
  // text.
  // 
  // Available codes here:
  // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-duration/#Available_Codes
  "_duration_millisecond": "SSS",
  "_duration_millisecond_second": "ss.SSS",
  "_duration_millisecond_minute": "mm:ss SSS",
  "_duration_millisecond_hour": "hh:mm:ss SSS",
  "_duration_millisecond_day": "d'd' mm:ss SSS",
  "_duration_millisecond_week": "d'd' mm:ss SSS",
  "_duration_millisecond_month": "M'm' dd'd' mm:ss SSS",
  "_duration_millisecond_year": "y'y' MM'm' dd'd' mm:ss SSS",
  "_duration_second": "ss",
  "_duration_second_minute": "mm:ss",
  "_duration_second_hour": "hh:mm:ss",
  "_duration_second_day": "d'd' hh:mm:ss",
  "_duration_second_week": "d'd' hh:mm:ss",
  "_duration_second_month": "M'm' dd'd' hh:mm:ss",
  "_duration_second_year": "y'y' MM'm' dd'd' hh:mm:ss",
  "_duration_minute": "mm",
  "_duration_minute_hour": "hh:mm",
  "_duration_minute_day": "d'd' hh:mm",
  "_duration_minute_week": "d'd' hh:mm",
  "_duration_minute_month": "M'm' dd'd' hh:mm",
  "_duration_minute_year": "y'y' MM'm' dd'd' hh:mm",
  "_duration_hour": "hh'h'",
  "_duration_hour_day": "d'd' hh'h'",
  "_duration_hour_week": "d'd' hh'h'",
  "_duration_hour_month": "M'm' dd'd' hh'h'",
  "_duration_hour_year": "y'y' MM'm' dd'd' hh'h'",
  "_duration_day": "d'd'",
  "_duration_day_week": "d'd'",
  "_duration_day_month": "M'm' dd'd'",
  "_duration_day_year": "y'y' MM'm' dd'd'",
  "_duration_week": "w'w'",
  "_duration_week_month": "w'w'",
  "_duration_week_year": "w'w'",
  "_duration_month": "M'm'",
  "_duration_month_year": "y'y' MM'm'",
  "_duration_year": "y'y'",
  // Era translations
  "_era_ad": "AD",
  "_era_bc": "BC",
  // Day part, used in 12-hour formats, e.g. 5 P.M.
  // Please note that these come in 3 variants:
  // * one letter (e.g. "A")
  // * two letters (e.g. "AM")
  // * two letters with dots (e.g. "A.M.")
  // 
  // All three need to to be translated even if they are all the same. Some
  // users might use one, some the other.
  "A": "",
  "P": "",
  "AM": "",
  "PM": "",
  "A.M.": "",
  "P.M.": "",
  // Date-related stuff.
  // 
  // When translating months, if there's a difference, use the form which is
  // best for a full date, e.g. as you would use it in "2018 January 1".
  // 
  // Note that May is listed twice. This is because in English May is the same
  // in both long and short forms, while in other languages it may not be the
  // case. Translate "May" to full word, while "May(short)" to shortened
  // version.
  // 
  // Should month names and weekdays be capitalized or not?
  // 
  // Rule of thumb is this: if the names should always be capitalized,
  // regardless of name position within date ("January", "21st January 2018",
  // etc.) use capitalized names. Otherwise enter all lowercase.
  // 
  // The date formatter will automatically capitalize names if they are the
  // first (or only) word in resulting date.
  "January": "",
  "February": "",
  "March": "",
  "April": "",
  "May": "",
  "June": "",
  "July": "",
  "August": "",
  "September": "",
  "October": "",
  "November": "",
  "December": "",
  "Jan": "",
  "Feb": "",
  "Mar": "",
  "Apr": "",
  "May(short)": "May",
  "Jun": "",
  "Jul": "",
  "Aug": "",
  "Sep": "",
  "Oct": "",
  "Nov": "",
  "Dec": "",
  // Weekdays.
  "Sunday": "",
  "Monday": "",
  "Tuesday": "",
  "Wednesday": "",
  "Thursday": "",
  "Friday": "",
  "Saturday": "",
  "Sun": "",
  "Mon": "",
  "Tue": "",
  "Wed": "",
  "Thu": "",
  "Fri": "",
  "Sat": "",
  // Date ordinal function.
  // 
  // This is used when adding number ordinal when formatting days in dates.
  // 
  // E.g. "January 1st", "February 2nd".
  // 
  // The function accepts day number, and returns a string to be added to the
  // day, like in default English translation, if we pass in 2, we will receive
  // "nd" back.
  "_dateOrd": function(day) {
    let res = "th";
    if (day < 11 || day > 13) {
      switch (day % 10) {
        case 1:
          res = "st";
          break;
        case 2:
          res = "nd";
          break;
        case 3:
          res = "rd";
          break;
      }
    }
    return res;
  },
  // Various chart controls.
  // Shown as a tooltip on zoom out button.
  "Zoom Out": "",
  // Timeline buttons
  "Play": "",
  "Stop": "",
  // Chart's Legend screen reader title.
  "Legend": "",
  // Legend's item screen reader indicator.
  "Press ENTER to toggle": "",
  // Shown when the chart is busy loading something.
  "Loading": "",
  // Shown as the first button in the breadcrumb navigation, e.g.:
  // Home > First level > ...
  "Home": "",
  // Chart types.
  // Those are used as default screen reader titles for the main chart element
  // unless developer has set some more descriptive title.
  "Chart": "",
  "Serial chart": "",
  "X/Y chart": "",
  "Pie chart": "",
  "Gauge chart": "",
  "Radar chart": "",
  "Sankey diagram": "",
  "Flow diagram": "",
  "Chord diagram": "",
  "TreeMap chart": "",
  "Force directed tree": "",
  "Sliced chart": "",
  // Series types.
  // Used to name series by type for screen readers if they do not have their
  // name set.
  "Series": "",
  "Candlestick Series": "",
  "OHLC Series": "",
  "Column Series": "",
  "Line Series": "",
  "Pie Slice Series": "",
  "Funnel Series": "",
  "Pyramid Series": "",
  "X/Y Series": "",
  // Map-related stuff.
  "Map": "",
  "Press ENTER to zoom in": "",
  "Press ENTER to zoom out": "",
  "Use arrow keys to zoom in and out": "",
  "Use plus and minus keys on your keyboard to zoom in and out": "",
  // Export-related stuff.
  // These prompts are used in Export menu labels.
  // 
  // "Export" is the top-level menu item.
  // 
  // "Image", "Data", "Print" as second-level indicating type of export
  // operation.
  // 
  // Leave actual format untranslated, unless you absolutely know that they
  // would convey more meaning in some other way.
  "Export": "",
  "Image": "",
  "Data": "",
  "Print": "",
  "Press ENTER or use arrow keys to navigate": "",
  "Press ENTER to open": "",
  "Press ENTER to print.": "",
  "Press ENTER to export as %1.": "",
  "(Press ESC to close this message)": "",
  "Image Export Complete": "",
  "Export operation took longer than expected. Something might have gone wrong.": "",
  "Saved from": "",
  "PNG": "",
  "JPG": "",
  "GIF": "",
  "SVG": "",
  "PDF": "",
  "JSON": "",
  "CSV": "",
  "XLSX": "",
  "HTML": "",
  // Scrollbar-related stuff.
  // 
  // Scrollbar is a control which can zoom and pan the axes on the chart.
  // 
  // Each scrollbar has two grips: left or right (for horizontal scrollbar) or
  // upper and lower (for vertical one).
  // 
  // Prompts change in relation to whether Scrollbar is vertical or horizontal.
  // 
  // The final section is used to indicate the current range of selection.
  "Use TAB to select grip buttons or left and right arrows to change selection": "",
  "Use left and right arrows to move selection": "",
  "Use left and right arrows to move left selection": "",
  "Use left and right arrows to move right selection": "",
  "Use TAB select grip buttons or up and down arrows to change selection": "",
  "Use up and down arrows to move selection": "",
  "Use up and down arrows to move lower selection": "",
  "Use up and down arrows to move upper selection": "",
  "From %1 to %2": "",
  "From %1": "",
  "To %1": "",
  // Data loader-related.
  "No parser available for file: %1": "",
  "Error parsing file: %1": "",
  "Unable to load file: %1": "",
  "Invalid date": "",
  // Common actions
  "Close": "",
  "Minimize": ""
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Language.js
var Language = class extends Entity {
  _setDefaults() {
    this.setPrivate("defaultLocale", en_default);
    super._setDefaults();
  }
  /**
   * Returns a prompt translation.
   *
   * @param   prompt   Prompt to translate
   * @param   locale   Target locale
   * @param   ...rest  Parameters
   * @return           Translation
   */
  translate(prompt, locale, ...rest) {
    if (!locale) {
      locale = this._root.locale || this.getPrivate("defaultLocale");
    }
    let translation = prompt;
    let value = locale[prompt];
    if (value === null) {
      translation = "";
    } else if (value != null) {
      if (value) {
        translation = value;
      }
    } else if (locale !== this.getPrivate("defaultLocale")) {
      return this.translate(prompt, this.getPrivate("defaultLocale"), ...rest);
    }
    if (rest.length) {
      for (let len = rest.length, i = 0; i < len; ++i) {
        translation = translation.split("%" + (i + 1)).join(rest[i]);
      }
    }
    return translation;
  }
  /**
   * Returns a prompt translation, including custom prompts.
   *
   * @param   prompt   Prompt to translate
   * @param   locale   Target locale
   * @param   ...rest  Parameters
   * @return           Translation
   */
  translateAny(prompt, locale, ...rest) {
    return this.translate(prompt, locale, ...rest);
  }
  /**
   * Add a custom prompt to locale.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/locales/creating-translations/#Extending_locale_with_custom_prompts}
   * @param  prompt       Source prompt
   * @param  translation  Tanslation
   * @param  locale       Target locale
   */
  setTranslationAny(prompt, translation, locale) {
    const localeTarget = locale || this._root.locale;
    localeTarget[prompt] = translation;
  }
  /**
   * Add a batch of custom prompts.
   *
   * @since 5.3.3
   * @see {@link https://www.amcharts.com/docs/v5/concepts/locales/creating-translations/#Extending_locale_with_custom_prompts}
   * @param  translations  Translations
   * @param  locale        Target locale
   */
  setTranslationsAny(translations, locale) {
    each2(translations, (key, val) => {
      this.setTranslationAny(key, val, locale);
    });
  }
  translateEmpty(prompt, locale, ...rest) {
    let translation = this.translate(prompt, locale, ...rest);
    return translation == prompt ? "" : translation;
  }
  translateFunc(prompt, locale) {
    if (this._root.locale[prompt]) {
      return this._root.locale[prompt];
    }
    if (locale !== this.getPrivate("defaultLocale")) {
      return this.translateFunc(prompt, this.getPrivate("defaultLocale"));
    }
    return () => {
      return "";
    };
  }
  /**
   * Translates a btach of prompts.
   *
   * @param  list    Array of prompts to translate
   * @param  locale  Target locale
   * @return         Array of translations
   */
  translateAll(list, locale) {
    if (!this.isDefault()) {
      return map(list, (x) => this.translate(x, locale));
    } else {
      return list;
    }
  }
  /**
   * Returns `true` if the currently selected locale is a default locale.
   *
   * @return `true` if locale is default; `false` if it is not.
   */
  isDefault() {
    return this.getPrivate("defaultLocale") === this._root.locale;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Matrix.js
var Matrix = class {
  constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
    Object.defineProperty(this, "a", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "b", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "c", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "d", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  /**
   * Sets the matrix based on all the available properties
   */
  setTransform(x, y, pivotX, pivotY, rotation, scale = 1) {
    this.a = Math.cos(rotation) * scale;
    this.b = Math.sin(rotation) * scale;
    this.c = -Math.sin(rotation) * scale;
    this.d = Math.cos(rotation) * scale;
    this.tx = x - (pivotX * this.a + pivotY * this.c);
    this.ty = y - (pivotX * this.b + pivotY * this.d);
  }
  /**
   * Get a new position with the current transformation applied.
   * Can be used to go from a child's coordinate space to the world coordinate space. (e.g. rendering)
   */
  apply(origin) {
    return {
      x: this.a * origin.x + this.c * origin.y + this.tx,
      y: this.b * origin.x + this.d * origin.y + this.ty
    };
  }
  /**
   * Get a new position with the inverse of the current transformation applied.
   * Can be used to go from the world coordinate space to a child's coordinate space. (e.g. input)
   */
  applyInverse(origin) {
    const id = 1 / (this.a * this.d + this.c * -this.b);
    return {
      x: this.d * id * origin.x + -this.c * id * origin.y + (this.ty * this.c - this.tx * this.d) * id,
      y: this.a * id * origin.y + -this.b * id * origin.x + (-this.ty * this.a + this.tx * this.b) * id
    };
  }
  /**
   * Appends the given Matrix to this Matrix.
   */
  append(matrix) {
    const a1 = this.a;
    const b1 = this.b;
    const c1 = this.c;
    const d1 = this.d;
    this.a = matrix.a * a1 + matrix.b * c1;
    this.b = matrix.a * b1 + matrix.b * d1;
    this.c = matrix.c * a1 + matrix.d * c1;
    this.d = matrix.c * b1 + matrix.d * d1;
    this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
    this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
  }
  /**
   * Prepends the given Matrix to this Matrix.
   */
  prepend(matrix) {
    const tx1 = this.tx;
    if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
      const a1 = this.a;
      const c1 = this.c;
      this.a = a1 * matrix.a + this.b * matrix.c;
      this.b = a1 * matrix.b + this.b * matrix.d;
      this.c = c1 * matrix.a + this.d * matrix.c;
      this.d = c1 * matrix.b + this.d * matrix.d;
    }
    this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
    this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
  }
  /**
   * Copies the other matrix's properties into this matrix
   */
  copyFrom(matrix) {
    this.a = matrix.a;
    this.b = matrix.b;
    this.c = matrix.c;
    this.d = matrix.d;
    this.tx = matrix.tx;
    this.ty = matrix.ty;
  }
};

// ../node_modules/svg-arc-to-cubic-bezier/modules/index.js
var _slicedToArray = /* @__PURE__ */ function() {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = void 0;
    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  return function(arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
var TAU = Math.PI * 2;
var mapToEllipse = function mapToEllipse2(_ref, rx, ry, cosphi, sinphi, centerx, centery) {
  var x = _ref.x, y = _ref.y;
  x *= rx;
  y *= ry;
  var xp = cosphi * x - sinphi * y;
  var yp = sinphi * x + cosphi * y;
  return {
    x: xp + centerx,
    y: yp + centery
  };
};
var approxUnitArc = function approxUnitArc2(ang1, ang2) {
  var a = ang2 === 1.5707963267948966 ? 0.551915024494 : ang2 === -1.5707963267948966 ? -0.551915024494 : 4 / 3 * Math.tan(ang2 / 4);
  var x1 = Math.cos(ang1);
  var y1 = Math.sin(ang1);
  var x2 = Math.cos(ang1 + ang2);
  var y2 = Math.sin(ang1 + ang2);
  return [{
    x: x1 - y1 * a,
    y: y1 + x1 * a
  }, {
    x: x2 + y2 * a,
    y: y2 - x2 * a
  }, {
    x: x2,
    y: y2
  }];
};
var vectorAngle = function vectorAngle2(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign * Math.acos(dot);
};
var getArcCenter = function getArcCenter2(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
  var rxsq = Math.pow(rx, 2);
  var rysq = Math.pow(ry, 2);
  var pxpsq = Math.pow(pxp, 2);
  var pypsq = Math.pow(pyp, 2);
  var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rxsq * pypsq + rysq * pxpsq;
  radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);
  var centerxp = radicant * rx / ry * pyp;
  var centeryp = radicant * -ry / rx * pxp;
  var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
  var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;
  var vx1 = (pxp - centerxp) / rx;
  var vy1 = (pyp - centeryp) / ry;
  var vx2 = (-pxp - centerxp) / rx;
  var vy2 = (-pyp - centeryp) / ry;
  var ang1 = vectorAngle(1, 0, vx1, vy1);
  var ang2 = vectorAngle(vx1, vy1, vx2, vy2);
  if (sweepFlag === 0 && ang2 > 0) {
    ang2 -= TAU;
  }
  if (sweepFlag === 1 && ang2 < 0) {
    ang2 += TAU;
  }
  return [centerx, centery, ang1, ang2];
};
var arcToBezier = function arcToBezier2(_ref2) {
  var px = _ref2.px, py = _ref2.py, cx = _ref2.cx, cy = _ref2.cy, rx = _ref2.rx, ry = _ref2.ry, _ref2$xAxisRotation = _ref2.xAxisRotation, xAxisRotation = _ref2$xAxisRotation === void 0 ? 0 : _ref2$xAxisRotation, _ref2$largeArcFlag = _ref2.largeArcFlag, largeArcFlag = _ref2$largeArcFlag === void 0 ? 0 : _ref2$largeArcFlag, _ref2$sweepFlag = _ref2.sweepFlag, sweepFlag = _ref2$sweepFlag === void 0 ? 0 : _ref2$sweepFlag;
  var curves = [];
  if (rx === 0 || ry === 0) {
    return [];
  }
  var sinphi = Math.sin(xAxisRotation * TAU / 360);
  var cosphi = Math.cos(xAxisRotation * TAU / 360);
  var pxp = cosphi * (px - cx) / 2 + sinphi * (py - cy) / 2;
  var pyp = -sinphi * (px - cx) / 2 + cosphi * (py - cy) / 2;
  if (pxp === 0 && pyp === 0) {
    return [];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var _getArcCenter = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp), _getArcCenter2 = _slicedToArray(_getArcCenter, 4), centerx = _getArcCenter2[0], centery = _getArcCenter2[1], ang1 = _getArcCenter2[2], ang2 = _getArcCenter2[3];
  var ratio = Math.abs(ang2) / (TAU / 4);
  if (Math.abs(1 - ratio) < 1e-7) {
    ratio = 1;
  }
  var segments = Math.max(Math.ceil(ratio), 1);
  ang2 /= segments;
  for (var i = 0; i < segments; i++) {
    curves.push(approxUnitArc(ang1, ang2));
    ang1 += ang2;
  }
  return curves.map(function(curve) {
    var _mapToEllipse = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery), x1 = _mapToEllipse.x, y1 = _mapToEllipse.y;
    var _mapToEllipse2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery), x2 = _mapToEllipse2.x, y2 = _mapToEllipse2.y;
    var _mapToEllipse3 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery), x = _mapToEllipse3.x, y = _mapToEllipse3.y;
    return {
      x1,
      y1,
      x2,
      y2,
      x,
      y
    };
  });
};
var modules_default = arcToBezier;

// ../node_modules/@amcharts/amcharts5/.internal/core/render/backend/CanvasRenderer.js
function checkArgs(name, actual, expected) {
  if (actual !== expected) {
    throw new Error("Required " + expected + " arguments for " + name + " but got " + actual);
  }
}
function checkMinArgs(name, actual, expected) {
  if (actual < expected) {
    throw new Error("Required at least " + expected + " arguments for " + name + " but got " + actual);
  }
}
function checkEvenArgs(name, actual, expected) {
  checkMinArgs(name, actual, expected);
  if (actual % expected !== 0) {
    throw new Error("Arguments for " + name + " must be in pairs of " + expected);
  }
}
function splitArcFlags(args) {
  for (let i = 0; i < args.length; i += 7) {
    let index = i + 3;
    let flag = args[index];
    if (flag.length > 1) {
      const a = /^([01])([01])(.*)$/.exec(flag);
      if (a !== null) {
        args.splice(index, 0, a[1]);
        ++index;
        args.splice(index, 0, a[2]);
        ++index;
        if (a[3].length > 0) {
          args[index] = a[3];
        } else {
          args.splice(index, 1);
        }
      }
    }
    ++index;
    flag = args[index];
    if (flag.length > 1) {
      const a = /^([01])(.+)$/.exec(flag);
      if (a !== null) {
        args.splice(index, 0, a[1]);
        ++index;
        args[index] = a[2];
      }
    }
  }
}
function assertBinary(value) {
  if (value === 0 || value === 1) {
    return value;
  } else {
    throw new Error("Flag must be 0 or 1");
  }
}
function distributeId(id) {
  const rgb = [0, 0, 0];
  for (let i = 0; i < 24; i++) {
    rgb[i % 3] <<= 1;
    rgb[i % 3] |= id & 1;
    id >>= 1;
  }
  return (rgb[0] | 0) + (rgb[1] << 8) + (rgb[2] << 16);
}
function eachTargets(hitTarget, f) {
  for (; ; ) {
    if (hitTarget.interactive) {
      if (!f(hitTarget)) {
        break;
      }
    }
    if (hitTarget._parent) {
      hitTarget = hitTarget._parent;
    } else {
      break;
    }
  }
}
function onPointerEvent(element, name, f) {
  return addEventListener(element, getRendererEvent(name), (event) => {
    const target = getEventTarget(event);
    let touches = event.touches;
    if (touches) {
      if (touches.length == 0) {
        touches = event.changedTouches;
      }
      f(copy(touches), target);
    } else {
      f([event], target);
    }
  });
}
function isTainted(image) {
  const canvas = document.createElement("canvas");
  canvas.width = 1;
  canvas.height = 1;
  const context = canvas.getContext("2d", {
    willReadFrequently: true
  });
  context.drawImage(image, 0, 0, 1, 1);
  try {
    context.getImageData(0, 0, 1, 1);
    return false;
  } catch (err) {
    console.warn('Image "' + image.src + '" is loaded from different host and is not covered by CORS policy. For more information about the implications read here: https://www.amcharts.com/docs/v5/concepts/cors');
    return true;
  }
}
function clearCanvas(view) {
  view.width = 0;
  view.height = 0;
  view.style.width = "0px";
  view.style.height = "0px";
}
function crisp(x) {
  return Math.floor(x) + 0.5;
}
var CanvasPivot = class {
  constructor() {
    Object.defineProperty(this, "_x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(value) {
    this._x = value;
  }
  set y(value) {
    this._y = value;
  }
};
var CanvasDisplayObject = class extends DisposerClass {
  constructor(renderer) {
    super();
    Object.defineProperty(this, "_layer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "mask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "visible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "exportable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "interactive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "inactive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "wheelable", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "cancelTouch", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "isMeasured", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "buttonMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "alpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "compoundAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "angle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "scale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "crisp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "pivot", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new CanvasPivot()
    });
    Object.defineProperty(this, "filter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "cursorOverStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_replacedCursorStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_localMatrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Matrix()
    });
    Object.defineProperty(this, "_matrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Matrix()
    });
    Object.defineProperty(this, "_uMatrix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new Matrix()
    });
    Object.defineProperty(this, "_renderer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_parent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_localBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_bounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_colorId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._renderer = renderer;
  }
  subStatus(status) {
    return {
      inactive: this.inactive == null ? status.inactive : this.inactive,
      layer: this._layer || status.layer
    };
  }
  _dispose() {
    this._renderer._removeObject(this);
    this.getLayer().dirty = true;
  }
  getCanvas() {
    return this.getLayer().view;
  }
  getLayer() {
    let self = this;
    for (; ; ) {
      if (self._layer) {
        return self._layer;
      } else if (self._parent) {
        self = self._parent;
      } else {
        return this._renderer.defaultLayer;
      }
    }
  }
  setLayer(order, margin) {
    if (order == null) {
      this._layer = void 0;
    } else {
      const visible = true;
      this._layer = this._renderer.getLayer(order, visible);
      this._layer.visible = visible;
      this._layer.margin = margin;
      if (margin) {
        setInteractive(this._layer.view, false);
      }
      this._renderer._ghostLayer.setMargin(this._renderer.layers);
      if (this._parent) {
        this._parent.registerChildLayer(this._layer);
      }
      this._layer.dirty = true;
      this._renderer.resizeLayer(this._layer);
      this._renderer.resizeGhost();
    }
  }
  markDirtyLayer() {
    this.getLayer().dirty = true;
  }
  clear() {
    this.invalidateBounds();
  }
  invalidateBounds() {
    this._localBounds = void 0;
  }
  _addBounds(_bounds) {
  }
  _getColorId() {
    if (this._colorId === void 0) {
      this._colorId = this._renderer.paintId(this);
    }
    return this._colorId;
  }
  _isInteractive(status) {
    return !status.inactive && (this.interactive || this._renderer._forceInteractive > 0);
  }
  _isInteractiveMask(status) {
    return this._isInteractive(status);
  }
  contains(child) {
    for (; ; ) {
      if (child === this) {
        return true;
      } else if (child._parent) {
        child = child._parent;
      } else {
        return false;
      }
    }
  }
  toGlobal(point) {
    return this._matrix.apply(point);
  }
  toLocal(point) {
    return this._matrix.applyInverse(point);
  }
  getLocalMatrix() {
    this._uMatrix.setTransform(0, 0, this.pivot.x, this.pivot.y, this.angle * Math.PI / 180, this.scale);
    return this._uMatrix;
  }
  getLocalBounds() {
    if (!this._localBounds) {
      const bn = 1e7;
      this._localBounds = {
        left: bn,
        top: bn,
        right: -bn,
        bottom: -bn
      };
      this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  getAdjustedBounds(bounds) {
    this._setMatrix();
    const matrix = this.getLocalMatrix();
    const p02 = matrix.apply({
      x: bounds.left,
      y: bounds.top
    });
    const p1 = matrix.apply({
      x: bounds.right,
      y: bounds.top
    });
    const p2 = matrix.apply({
      x: bounds.right,
      y: bounds.bottom
    });
    const p3 = matrix.apply({
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
  on(key, callback, context) {
    if (this.interactive) {
      return this._renderer._addEvent(this, key, callback, context);
    } else {
      return new Disposer(() => {
      });
    }
  }
  _setMatrix() {
    this._localMatrix.setTransform(
      this.x,
      this.y,
      this.pivot.x,
      this.pivot.y,
      // Converts degrees to radians
      this.angle * Math.PI / 180,
      this.scale
    );
    this._matrix.copyFrom(this._localMatrix);
    if (this._parent) {
      this._matrix.prepend(this._parent._matrix);
    }
  }
  _transform(context, resolution) {
    const m = this._matrix;
    let tx = m.tx * resolution;
    let ty = m.ty * resolution;
    if (this.crisp) {
      tx = crisp(tx);
      ty = crisp(ty);
    }
    context.setTransform(m.a * resolution, m.b * resolution, m.c * resolution, m.d * resolution, tx, ty);
  }
  _transformMargin(context, resolution, margin) {
    const m = this._matrix;
    context.setTransform(m.a * resolution, m.b * resolution, m.c * resolution, m.d * resolution, (m.tx + margin.left) * resolution, (m.ty + margin.top) * resolution);
  }
  _transformLayer(context, resolution, layer) {
    if (layer.margin) {
      this._transformMargin(context, layer.scale || resolution, layer.margin);
    } else {
      this._transform(context, layer.scale || resolution);
    }
  }
  render(status, targetGhostLayer = 0) {
    if (this.visible && (this.exportable !== false || !this._renderer._omitTainted)) {
      this._setMatrix();
      const subStatus = this.subStatus(status);
      const resolution = this._renderer.resolution;
      const layers = this._renderer.layers;
      const ghostLayer = this._renderer._ghostLayer;
      const ghostContext = ghostLayer.context;
      const mask = this.mask;
      if (mask) {
        mask._setMatrix();
      }
      each(layers, (layer) => {
        if (layer) {
          const context = layer.context;
          context.save();
          if (mask) {
            mask._transformLayer(context, resolution, layer);
            mask._runPath(context);
            context.clip();
          }
          context.globalAlpha = this.compoundAlpha * this.alpha;
          this._transformLayer(context, resolution, layer);
          if (this.filter) {
            context.filter = this.filter;
          }
        }
      });
      ghostContext.save();
      if (mask && this._isInteractiveMask(subStatus)) {
        mask._transformMargin(ghostContext, resolution, ghostLayer.margin);
        mask._runPath(ghostContext);
        ghostContext.clip();
      }
      this._transformMargin(ghostContext, resolution, ghostLayer.margin);
      if (subStatus.layer.order > 0 && !targetGhostLayer) {
        move(this._renderer._deferredGhostLayers, subStatus.layer.order);
      }
      this._render(subStatus, targetGhostLayer);
      ghostContext.restore();
      each(layers, (layer) => {
        if (layer) {
          layer.context.restore();
        }
      });
    }
  }
  _render(status, _targetGhostLayer = 0) {
    if (this.exportable === false) {
      status.layer.tainted = true;
    }
  }
  _ghostOnly(targetGhostLayer = 0) {
    return targetGhostLayer > 0 ? true : false;
  }
  _drawGhost(status, targetGhostLayer = 0) {
    const interactive = this._isInteractive(status);
    const order = status.layer.order || 0;
    return interactive && (order == 0 && !this._ghostOnly(targetGhostLayer) || order == targetGhostLayer) ? true : false;
  }
  hovering() {
    return this._renderer._hovering.has(this);
  }
  dragging() {
    return this._renderer._dragging.some((x) => x.value === this);
  }
  shouldCancelTouch() {
    const renderer = this._renderer;
    if (renderer.tapToActivate && !renderer._touchActive) {
      return false;
    }
    if (this.cancelTouch) {
      return true;
    } else if (this._parent) {
      return this._parent.shouldCancelTouch();
    }
    return false;
  }
};
var CanvasContainer = class extends CanvasDisplayObject {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "interactiveChildren", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_childLayers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_children", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _isInteractiveMask(status) {
    return this.interactiveChildren || super._isInteractiveMask(status);
  }
  addChild(child) {
    child._parent = this;
    this._children.push(child);
    if (child._layer) {
      this.registerChildLayer(child._layer);
    }
  }
  addChildAt(child, index) {
    child._parent = this;
    this._children.splice(index, 0, child);
    if (child._layer) {
      this.registerChildLayer(child._layer);
    }
  }
  removeChild(child) {
    child._parent = void 0;
    removeFirst(this._children, child);
  }
  _render(status, targetGhostLayer) {
    super._render(status);
    const renderer = this._renderer;
    if (this.interactive && this.interactiveChildren) {
      ++renderer._forceInteractive;
    }
    each(this._children, (child) => {
      child.compoundAlpha = this.compoundAlpha * this.alpha;
      child.render(status, targetGhostLayer);
    });
    if (this.interactive && this.interactiveChildren) {
      --renderer._forceInteractive;
    }
  }
  registerChildLayer(layer) {
    if (!this._childLayers) {
      this._childLayers = [];
    }
    pushOne(this._childLayers, layer);
    if (this._parent) {
      this._parent.registerChildLayer(layer);
    }
  }
  markDirtyLayer(deep = false) {
    super.markDirtyLayer();
    if (deep && this._childLayers) {
      each(this._childLayers, (layer) => layer.dirty = true);
    }
  }
  _dispose() {
    super._dispose();
    if (this._childLayers) {
      each(this._childLayers, (layer) => {
        layer.dirty = true;
      });
    }
  }
};
function setPoint(bounds, point) {
  bounds.left = Math.min(bounds.left, point.x);
  bounds.top = Math.min(bounds.top, point.y);
  bounds.right = Math.max(bounds.right, point.x);
  bounds.bottom = Math.max(bounds.bottom, point.y);
}
var Op = class {
  colorize(_context, _forceColor) {
  }
  colorizeGhost(context, forceColor) {
    this.colorize(context, forceColor);
  }
  path(_context) {
  }
  pathGhost(context) {
    this.path(context);
  }
  addBounds(_bounds) {
  }
};
var BeginPath = class extends Op {
  colorize(context, _forceColor) {
    context.beginPath();
  }
};
var BeginFill = class extends Op {
  constructor(color2) {
    super();
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: color2
    });
  }
  colorize(context, forceColor) {
    if (forceColor !== void 0) {
      context.fillStyle = forceColor;
    } else {
      context.fillStyle = this.color;
    }
  }
};
var EndFill = class extends Op {
  constructor(clearShadow) {
    super();
    Object.defineProperty(this, "clearShadow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: clearShadow
    });
  }
  colorize(context, _forceColor) {
    context.fill();
    if (this.clearShadow) {
      context.shadowColor = "";
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
    }
  }
};
var EndStroke = class extends Op {
  colorize(context, _forceColor) {
    context.stroke();
  }
};
var LineStyle = class extends Op {
  constructor(width, color2, lineJoin, lineCap) {
    super();
    Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: width
    });
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: color2
    });
    Object.defineProperty(this, "lineJoin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: lineJoin
    });
    Object.defineProperty(this, "lineCap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: lineCap
    });
  }
  colorize(context, forceColor) {
    if (forceColor !== void 0) {
      context.strokeStyle = forceColor;
    } else {
      context.strokeStyle = this.color;
    }
    context.lineWidth = this.width;
    if (this.lineJoin) {
      context.lineJoin = this.lineJoin;
    }
    if (this.lineCap) {
      context.lineCap = this.lineCap;
    }
  }
};
var LineDash = class extends Op {
  constructor(dash) {
    super();
    Object.defineProperty(this, "dash", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: dash
    });
  }
  colorize(context, _forceColor) {
    context.setLineDash(this.dash);
  }
};
var LineDashOffset = class extends Op {
  constructor(dashOffset) {
    super();
    Object.defineProperty(this, "dashOffset", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: dashOffset
    });
  }
  colorize(context, _forceColor) {
    context.lineDashOffset = this.dashOffset;
  }
};
var DrawRect = class extends Op {
  constructor(x, y, width, height) {
    super();
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
    Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: width
    });
    Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: height
    });
  }
  path(context) {
    context.rect(this.x, this.y, this.width, this.height);
  }
  addBounds(bounds) {
    const l = this.x;
    const t = this.y;
    const r = l + this.width;
    const b = t + this.height;
    setPoint(bounds, {
      x: l,
      y: t
    });
    setPoint(bounds, {
      x: r,
      y: t
    });
    setPoint(bounds, {
      x: l,
      y: b
    });
    setPoint(bounds, {
      x: r,
      y: b
    });
  }
};
var DrawCircle = class extends Op {
  constructor(x, y, radius) {
    super();
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
    Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: radius
    });
  }
  path(context) {
    context.moveTo(this.x + this.radius, this.y);
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
  }
  // TODO handle skewing and rotation
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.x - this.radius,
      y: this.y - this.radius
    });
    setPoint(bounds, {
      x: this.x + this.radius,
      y: this.y + this.radius
    });
  }
};
var DrawEllipse = class extends Op {
  constructor(x, y, radiusX, radiusY) {
    super();
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
    Object.defineProperty(this, "radiusX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: radiusX
    });
    Object.defineProperty(this, "radiusY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: radiusY
    });
  }
  path(context) {
    context.ellipse(0, 0, this.radiusX, this.radiusY, 0, 0, Math.PI * 2);
  }
  // TODO handle skewing and rotation
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.x - this.radiusX,
      y: this.y - this.radiusY
    });
    setPoint(bounds, {
      x: this.x + this.radiusX,
      y: this.y + this.radiusY
    });
  }
};
var Arc = class extends Op {
  constructor(cx, cy, radius, startAngle, endAngle, anticlockwise) {
    super();
    Object.defineProperty(this, "cx", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cx
    });
    Object.defineProperty(this, "cy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cy
    });
    Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: radius
    });
    Object.defineProperty(this, "startAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: startAngle
    });
    Object.defineProperty(this, "endAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: endAngle
    });
    Object.defineProperty(this, "anticlockwise", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: anticlockwise
    });
  }
  path(context) {
    if (this.radius > 0) {
      context.arc(this.cx, this.cy, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
    }
  }
  addBounds(bounds) {
    let arcBounds = getArcBounds(this.cx, this.cy, this.startAngle * DEGREES, this.endAngle * DEGREES, this.radius);
    setPoint(bounds, {
      x: arcBounds.left,
      y: arcBounds.top
    });
    setPoint(bounds, {
      x: arcBounds.right,
      y: arcBounds.bottom
    });
  }
};
var ArcTo = class extends Op {
  constructor(x1, y1, x2, y2, radius) {
    super();
    Object.defineProperty(this, "x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x1
    });
    Object.defineProperty(this, "y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y1
    });
    Object.defineProperty(this, "x2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x2
    });
    Object.defineProperty(this, "y2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y2
    });
    Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: radius
    });
  }
  path(context) {
    if (this.radius > 0) {
      context.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
    }
  }
  // TODO: add points
  addBounds(_bounds) {
  }
};
var LineTo = class extends Op {
  constructor(x, y) {
    super();
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
  }
  path(context) {
    context.lineTo(this.x, this.y);
  }
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.x,
      y: this.y
    });
  }
};
var MoveTo = class extends Op {
  constructor(x, y) {
    super();
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
  }
  path(context) {
    context.moveTo(this.x, this.y);
  }
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.x,
      y: this.y
    });
  }
};
var ClosePath = class extends Op {
  path(context) {
    context.closePath();
  }
};
var BezierCurveTo = class extends Op {
  constructor(cpX, cpY, cpX2, cpY2, toX, toY) {
    super();
    Object.defineProperty(this, "cpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpX
    });
    Object.defineProperty(this, "cpY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpY
    });
    Object.defineProperty(this, "cpX2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpX2
    });
    Object.defineProperty(this, "cpY2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpY2
    });
    Object.defineProperty(this, "toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: toX
    });
    Object.defineProperty(this, "toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: toY
    });
  }
  path(context) {
    context.bezierCurveTo(this.cpX, this.cpY, this.cpX2, this.cpY2, this.toX, this.toY);
  }
  // TODO: OK?
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.cpX,
      y: this.cpY
    });
    setPoint(bounds, {
      x: this.cpX2,
      y: this.cpY2
    });
    setPoint(bounds, {
      x: this.toX,
      y: this.toY
    });
  }
};
var QuadraticCurveTo = class extends Op {
  constructor(cpX, cpY, toX, toY) {
    super();
    Object.defineProperty(this, "cpX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpX
    });
    Object.defineProperty(this, "cpY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: cpY
    });
    Object.defineProperty(this, "toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: toX
    });
    Object.defineProperty(this, "toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: toY
    });
  }
  path(context) {
    context.quadraticCurveTo(this.cpX, this.cpY, this.toX, this.toY);
  }
  // TODO: OK?
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.cpX,
      y: this.cpY
    });
    setPoint(bounds, {
      x: this.toX,
      y: this.toY
    });
  }
};
var Shadow = class extends Op {
  constructor(color2, blur2, offsetX, offsetY, opacity) {
    super();
    Object.defineProperty(this, "color", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: color2
    });
    Object.defineProperty(this, "blur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: blur2
    });
    Object.defineProperty(this, "offsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: offsetX
    });
    Object.defineProperty(this, "offsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: offsetY
    });
    Object.defineProperty(this, "opacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: opacity
    });
  }
  colorize(context, _forceColor) {
    if (this.opacity) {
      context.fillStyle = this.color;
    }
    context.shadowColor = this.color;
    context.shadowBlur = this.blur;
    context.shadowOffsetX = this.offsetX;
    context.shadowOffsetY = this.offsetY;
  }
  colorizeGhost(_context, _forceColor) {
  }
};
var GraphicsImage = class extends Op {
  constructor(image, width, height, x, y) {
    super();
    Object.defineProperty(this, "image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: image
    });
    Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: width
    });
    Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: height
    });
    Object.defineProperty(this, "x", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: x
    });
    Object.defineProperty(this, "y", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: y
    });
  }
  path(context) {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  // TODO: OK?
  addBounds(bounds) {
    setPoint(bounds, {
      x: this.x,
      y: this.y
    });
    setPoint(bounds, {
      x: this.width,
      y: this.height
    });
  }
};
var CanvasGraphics = class extends CanvasDisplayObject {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_operations", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "blendMode", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: BlendMode.NORMAL
    });
    Object.defineProperty(this, "_hasShadows", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_fillAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeAlpha", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  clear() {
    super.clear();
    this._operations.length = 0;
  }
  _pushOp(op) {
    this._operations.push(op);
  }
  beginFill(color2, alpha = 1) {
    this._fillAlpha = alpha;
    if (color2) {
      if (color2 instanceof Color) {
        this._pushOp(new BeginFill(color2.toCSS(alpha)));
      } else {
        this.isMeasured = true;
        this._pushOp(new BeginFill(color2));
      }
    } else {
      this._pushOp(new BeginFill("rgba(0, 0, 0, " + alpha + ")"));
    }
  }
  endFill() {
    this._pushOp(new EndFill(this._hasShadows));
  }
  endStroke() {
    this._pushOp(new EndStroke());
  }
  beginPath() {
    this._pushOp(new BeginPath());
  }
  lineStyle(width = 0, color2, alpha = 1, lineJoin, lineCap) {
    this._strokeAlpha = alpha;
    if (color2) {
      if (color2 instanceof Color) {
        this._pushOp(new LineStyle(width, color2.toCSS(alpha), lineJoin, lineCap));
      } else {
        this._pushOp(new LineStyle(width, color2, lineJoin, lineCap));
      }
    } else {
      this._pushOp(new LineStyle(width, "rgba(0, 0, 0, " + alpha + ")", lineJoin, lineCap));
    }
  }
  setLineDash(dash) {
    this._pushOp(new LineDash(dash ? dash : []));
  }
  setLineDashOffset(dashOffset = 0) {
    this._pushOp(new LineDashOffset(dashOffset));
  }
  drawRect(x, y, width, height) {
    this._pushOp(new DrawRect(x, y, width, height));
  }
  drawCircle(x, y, radius) {
    this._pushOp(new DrawCircle(x, y, radius));
  }
  drawEllipse(x, y, radiusX, radiusY) {
    this._pushOp(new DrawEllipse(x, y, radiusX, radiusY));
  }
  arc(cx, cy, radius, startAngle, endAngle, anticlockwise = false) {
    this._pushOp(new Arc(cx, cy, radius, startAngle, endAngle, anticlockwise));
  }
  arcTo(x1, y1, x2, y2, radius) {
    this._pushOp(new ArcTo(x1, y1, x2, y2, radius));
  }
  lineTo(x, y) {
    this._pushOp(new LineTo(x, y));
  }
  moveTo(x, y) {
    this._pushOp(new MoveTo(x, y));
  }
  bezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY) {
    this._pushOp(new BezierCurveTo(cpX, cpY, cpX2, cpY2, toX, toY));
  }
  quadraticCurveTo(cpX, cpY, toX, toY) {
    this._pushOp(new QuadraticCurveTo(cpX, cpY, toX, toY));
  }
  closePath() {
    this._pushOp(new ClosePath());
  }
  shadow(color2, blur2 = 0, offsetX = 0, offsetY = 0, opacity) {
    this._hasShadows = true;
    this._pushOp(new Shadow(opacity ? color2.toCSS(opacity) : color2.toCSS(this._fillAlpha || this._strokeAlpha), blur2, offsetX, offsetY));
  }
  image(image, width, height, x, y) {
    this._pushOp(new GraphicsImage(image, width, height, x, y));
  }
  // https://svgwg.org/svg2-draft/paths.html#DProperty
  // TODO better error checking
  svgPath(path) {
    let x = 0;
    let y = 0;
    let cpx = null;
    let cpy = null;
    let qcpx = null;
    let qcpy = null;
    const SEGMENTS_REGEXP = /([MmZzLlHhVvCcSsQqTtAa])([^MmZzLlHhVvCcSsQqTtAa]*)/g;
    const ARGS_REGEXP = /[\u0009\u0020\u000A\u000C\u000D]*([\+\-]?[0-9]*\.?[0-9]+(?:[eE][\+\-]?[0-9]+)?)[\u0009\u0020\u000A\u000C\u000D]*,?/g;
    let match;
    while ((match = SEGMENTS_REGEXP.exec(path)) !== null) {
      const name = match[1];
      const rest = match[2];
      const args = [];
      while ((match = ARGS_REGEXP.exec(rest)) !== null) {
        args.push(match[1]);
      }
      if (name !== "S" && name !== "s" && name !== "C" && name !== "c") {
        cpx = null;
        cpy = null;
      }
      if (name !== "Q" && name !== "q" && name !== "T" && name !== "t") {
        qcpx = null;
        qcpy = null;
      }
      switch (name) {
        case "M":
          checkEvenArgs(name, args.length, 2);
          x = +args[0];
          y = +args[1];
          this.moveTo(x, y);
          for (let i = 2; i < args.length; i += 2) {
            x = +args[i];
            y = +args[i + 1];
            this.lineTo(x, y);
          }
          break;
        case "m":
          checkEvenArgs(name, args.length, 2);
          x += +args[0];
          y += +args[1];
          this.moveTo(x, y);
          for (let i = 2; i < args.length; i += 2) {
            x += +args[i];
            y += +args[i + 1];
            this.lineTo(x, y);
          }
          break;
        case "L":
          checkEvenArgs(name, args.length, 2);
          for (let i = 0; i < args.length; i += 2) {
            x = +args[i];
            y = +args[i + 1];
            this.lineTo(x, y);
          }
          break;
        case "l":
          checkEvenArgs(name, args.length, 2);
          for (let i = 0; i < args.length; i += 2) {
            x += +args[i];
            y += +args[i + 1];
            this.lineTo(x, y);
          }
          break;
        case "H":
          checkMinArgs(name, args.length, 1);
          for (let i = 0; i < args.length; ++i) {
            x = +args[i];
            this.lineTo(x, y);
          }
          break;
        case "h":
          checkMinArgs(name, args.length, 1);
          for (let i = 0; i < args.length; ++i) {
            x += +args[i];
            this.lineTo(x, y);
          }
          break;
        case "V":
          checkMinArgs(name, args.length, 1);
          for (let i = 0; i < args.length; ++i) {
            y = +args[i];
            this.lineTo(x, y);
          }
          break;
        case "v":
          checkMinArgs(name, args.length, 1);
          for (let i = 0; i < args.length; ++i) {
            y += +args[i];
            this.lineTo(x, y);
          }
          break;
        case "C":
          checkEvenArgs(name, args.length, 6);
          for (let i = 0; i < args.length; i += 6) {
            const x1 = +args[i];
            const y1 = +args[i + 1];
            cpx = +args[i + 2];
            cpy = +args[i + 3];
            x = +args[i + 4];
            y = +args[i + 5];
            this.bezierCurveTo(x1, y1, cpx, cpy, x, y);
          }
          break;
        case "c":
          checkEvenArgs(name, args.length, 6);
          for (let i = 0; i < args.length; i += 6) {
            const x1 = +args[i] + x;
            const y1 = +args[i + 1] + y;
            cpx = +args[i + 2] + x;
            cpy = +args[i + 3] + y;
            x += +args[i + 4];
            y += +args[i + 5];
            this.bezierCurveTo(x1, y1, cpx, cpy, x, y);
          }
          break;
        case "S":
          checkEvenArgs(name, args.length, 4);
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          for (let i = 0; i < args.length; i += 4) {
            const x1 = 2 * x - cpx;
            const y1 = 2 * y - cpy;
            cpx = +args[i];
            cpy = +args[i + 1];
            x = +args[i + 2];
            y = +args[i + 3];
            this.bezierCurveTo(x1, y1, cpx, cpy, x, y);
          }
          break;
        case "s":
          checkEvenArgs(name, args.length, 4);
          if (cpx === null || cpy === null) {
            cpx = x;
            cpy = y;
          }
          for (let i = 0; i < args.length; i += 4) {
            const x1 = 2 * x - cpx;
            const y1 = 2 * y - cpy;
            cpx = +args[i] + x;
            cpy = +args[i + 1] + y;
            x += +args[i + 2];
            y += +args[i + 3];
            this.bezierCurveTo(x1, y1, cpx, cpy, x, y);
          }
          break;
        case "Q":
          checkEvenArgs(name, args.length, 4);
          for (let i = 0; i < args.length; i += 4) {
            qcpx = +args[i];
            qcpy = +args[i + 1];
            x = +args[i + 2];
            y = +args[i + 3];
            this.quadraticCurveTo(qcpx, qcpy, x, y);
          }
          break;
        case "q":
          checkEvenArgs(name, args.length, 4);
          for (let i = 0; i < args.length; i += 4) {
            qcpx = +args[i] + x;
            qcpy = +args[i + 1] + y;
            x += +args[i + 2];
            y += +args[i + 3];
            this.quadraticCurveTo(qcpx, qcpy, x, y);
          }
          break;
        case "T":
          checkEvenArgs(name, args.length, 2);
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          for (let i = 0; i < args.length; i += 2) {
            qcpx = 2 * x - qcpx;
            qcpy = 2 * y - qcpy;
            x = +args[i];
            y = +args[i + 1];
            this.quadraticCurveTo(qcpx, qcpy, x, y);
          }
          break;
        case "t":
          checkEvenArgs(name, args.length, 2);
          if (qcpx === null || qcpy === null) {
            qcpx = x;
            qcpy = y;
          }
          for (let i = 0; i < args.length; i += 2) {
            qcpx = 2 * x - qcpx;
            qcpy = 2 * y - qcpy;
            x += +args[i];
            y += +args[i + 1];
            this.quadraticCurveTo(qcpx, qcpy, x, y);
          }
          break;
        case "A":
        case "a":
          const relative = name === "a";
          splitArcFlags(args);
          checkEvenArgs(name, args.length, 7);
          for (let i = 0; i < args.length; i += 7) {
            let cx = +args[i + 5];
            let cy = +args[i + 6];
            if (relative) {
              cx += x;
              cy += y;
            }
            const bs = modules_default({
              px: x,
              py: y,
              rx: +args[i],
              ry: +args[i + 1],
              xAxisRotation: +args[i + 2],
              largeArcFlag: assertBinary(+args[i + 3]),
              sweepFlag: assertBinary(+args[i + 4]),
              cx,
              cy
            });
            each(bs, (b) => {
              this.bezierCurveTo(b.x1, b.y1, b.x2, b.y2, b.x, b.y);
              x = b.x;
              y = b.y;
            });
          }
          break;
        case "Z":
        case "z":
          checkArgs(name, args.length, 0);
          this.closePath();
          break;
      }
    }
  }
  _runPath(context) {
    context.beginPath();
    each(this._operations, (op) => {
      op.path(context);
    });
  }
  _render(status, targetGhostLayer = 0) {
    super._render(status);
    const layerDirty = status.layer.dirty;
    const interactive = this._isInteractive(status);
    const ghostOnly = this._ghostOnly(targetGhostLayer);
    const drawGhost = this._drawGhost(status, targetGhostLayer);
    if (layerDirty || interactive || ghostOnly) {
      const context = status.layer.context;
      const ghostContext = this._renderer._ghostLayer.context;
      if (layerDirty && !ghostOnly) {
        context.globalCompositeOperation = this.blendMode;
        context.beginPath();
      }
      let color2;
      if (drawGhost) {
        ghostContext.beginPath();
        color2 = this._getColorId();
      }
      each(this._operations, (op) => {
        if (layerDirty && !ghostOnly) {
          op.path(context);
          op.colorize(context, void 0);
        }
        if (drawGhost) {
          op.pathGhost(ghostContext);
          op.colorizeGhost(ghostContext, color2);
        }
      });
    }
  }
  renderDetached(context) {
    if (this.visible) {
      this._setMatrix();
      context.save();
      const mask = this.mask;
      if (mask) {
        mask._setMatrix();
        mask._transform(context, 1);
        mask._runPath(context);
        context.clip();
      }
      context.globalAlpha = this.compoundAlpha * this.alpha;
      this._transform(context, 1);
      if (this.filter) {
        context.filter = this.filter;
      }
      context.globalCompositeOperation = this.blendMode;
      context.beginPath();
      each(this._operations, (op) => {
        op.path(context);
        op.colorize(context, void 0);
      });
      context.restore();
    }
  }
  _addBounds(bounds) {
    if (this.visible && this.isMeasured) {
      each(this._operations, (op) => {
        op.addBounds(bounds);
      });
    }
  }
};
var CanvasText = class extends CanvasDisplayObject {
  constructor(renderer, text, style) {
    super(renderer);
    Object.defineProperty(this, "text", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "style", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "textVisible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "truncated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_textInfo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_originalScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    this.text = text;
    this.style = style;
  }
  invalidateBounds() {
    super.invalidateBounds();
    this._textInfo = void 0;
  }
  _shared(context) {
    if (this.style.textAlign) {
      context.textAlign = this.style.textAlign;
    }
    if (this.style.direction) {
      context.direction = this.style.direction;
    }
    if (this.style.textBaseline) {
      context.textBaseline = this.style.textBaseline;
    }
  }
  _prerender(status, ignoreGhost = false, ignoreFontWeight = false) {
    super._render(status);
    const context = status.layer.context;
    const ghostContext = this._renderer._ghostLayer.context;
    const style = this.style;
    let fontStyle = this._getFontStyle(void 0, ignoreFontWeight);
    context.font = fontStyle;
    if (this._isInteractive(status) && !ignoreGhost) {
      ghostContext.font = fontStyle;
    }
    if (style.fill) {
      if (style.fill instanceof Color) {
        context.fillStyle = style.fill.toCSS(style.fillOpacity != void 0 ? style.fillOpacity : 1);
      } else {
        context.fillStyle = style.fill;
      }
    }
    if (style.shadowColor) {
      status.layer.context.shadowColor = style.shadowColor.toCSS(style.shadowOpacity || 1);
    }
    if (style.shadowBlur) {
      status.layer.context.shadowBlur = style.shadowBlur;
    }
    if (style.shadowOffsetX) {
      status.layer.context.shadowOffsetX = style.shadowOffsetX;
    }
    if (style.shadowOffsetY) {
      status.layer.context.shadowOffsetY = style.shadowOffsetY;
    }
    this._shared(context);
    if (this._isInteractive(status) && !ignoreGhost) {
      ghostContext.fillStyle = this._getColorId();
      this._shared(ghostContext);
    }
  }
  _getFontStyle(style2, ignoreFontWeight = false) {
    const style = this.style;
    let fontStyle = [];
    if (style2 && style2.fontVariant) {
      fontStyle.push(style2.fontVariant);
    } else if (style.fontVariant) {
      fontStyle.push(style.fontVariant);
    }
    if (!ignoreFontWeight) {
      if (style2 && style2.fontWeight) {
        fontStyle.push(style2.fontWeight);
      } else if (style.fontWeight) {
        fontStyle.push(style.fontWeight);
      }
    }
    if (style2 && style2.fontStyle) {
      fontStyle.push(style2.fontStyle);
    } else if (style.fontStyle) {
      fontStyle.push(style.fontStyle);
    }
    if (style2 && style2.fontSize) {
      if (isNumber(style2.fontSize)) {
        style2.fontSize = style2.fontSize + "px";
      }
      fontStyle.push(style2.fontSize);
    } else if (style.fontSize) {
      if (isNumber(style.fontSize)) {
        style.fontSize = style.fontSize + "px";
      }
      fontStyle.push(style.fontSize);
    }
    if (style2 && style2.fontFamily) {
      fontStyle.push(style2.fontFamily);
    } else if (style.fontFamily) {
      fontStyle.push(style.fontFamily);
    } else if (fontStyle.length) {
      fontStyle.push("Arial");
    }
    return fontStyle.join(" ");
  }
  _render(status, targetGhostLayer = 0) {
    if (!this._textInfo) {
      this._measure(status);
    }
    if (this.textVisible) {
      const interactive = this._isInteractive(status);
      const context = status.layer.context;
      const layerDirty = status.layer.dirty;
      const ghostContext = this._renderer._ghostLayer.context;
      const ghostOnly = this._ghostOnly(targetGhostLayer);
      const drawGhost = this._drawGhost(status, targetGhostLayer);
      context.save();
      ghostContext.save();
      this._prerender(status);
      each(this._textInfo, (line, _index) => {
        each(line.textChunks, (chunk, _index2) => {
          if (chunk.style) {
            context.save();
            ghostContext.save();
            if (!ghostOnly) {
              context.font = chunk.style;
            }
            if (this._isInteractive(status)) {
              ghostContext.font = chunk.style;
            }
          }
          if (chunk.fill) {
            context.save();
            if (!ghostOnly) {
              context.fillStyle = chunk.fill.toCSS();
            }
          }
          if (layerDirty && !ghostOnly) {
            context.fillText(chunk.text, chunk.offsetX, line.offsetY + chunk.offsetY);
          }
          if (chunk.textDecoration == "underline" || chunk.textDecoration == "line-through") {
            let thickness = 1;
            let offset = 1;
            let fontSize = chunk.height;
            const oversizedBehavior = this.style.oversizedBehavior || "";
            if (["truncate", "wrap", "wrap-no-break"].indexOf(oversizedBehavior) > -1) {
              const metrics = this._measureText(chunk.text, context);
              chunk.width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
            }
            let offsetX = chunk.offsetX;
            switch (this.style.textAlign) {
              case "right":
              case "end":
                offsetX -= chunk.width;
                break;
              case "center":
                offsetX -= chunk.width / 2;
                break;
            }
            if (chunk.style) {
              const format = TextFormatter.getTextStyle(chunk.style);
              switch (format.fontWeight) {
                case "bolder":
                case "bold":
                case "700":
                case "800":
                case "900":
                  thickness = 2;
                  break;
              }
            }
            if (fontSize) {
              offset = fontSize / 20;
            }
            let y;
            if (chunk.textDecoration == "line-through") {
              y = thickness + line.offsetY + chunk.offsetY - chunk.height / 2;
            } else {
              y = thickness + offset * 1.5 + line.offsetY + chunk.offsetY;
            }
            if (!ghostOnly) {
              context.save();
              context.beginPath();
              if (chunk.fill) {
                context.strokeStyle = chunk.fill.toCSS();
              } else if (this.style.fill && this.style.fill instanceof Color) {
                context.strokeStyle = this.style.fill.toCSS();
              }
              context.lineWidth = thickness * offset;
              context.moveTo(offsetX, y);
              context.lineTo(offsetX + chunk.width, y);
              context.stroke();
              context.restore();
            }
          }
          if (interactive && this.interactive && drawGhost) {
            ghostContext.fillText(chunk.text, chunk.offsetX, line.offsetY + chunk.offsetY);
          }
          if (chunk.fill) {
            context.restore();
          }
          if (chunk.style) {
            context.restore();
            ghostContext.restore();
          }
        });
      });
      context.restore();
      ghostContext.restore();
    }
  }
  _addBounds(bounds) {
    if (this.visible && this.isMeasured) {
      const x = this._measure({
        inactive: this.inactive,
        layer: this.getLayer()
      });
      setPoint(bounds, {
        x: x.left,
        y: x.top
      });
      setPoint(bounds, {
        x: x.right,
        y: x.bottom
      });
    }
  }
  _ignoreFontWeight() {
    return /apple/i.test(navigator.vendor);
  }
  _measure(status) {
    const context = status.layer.context;
    const ghostContext = this._renderer._ghostLayer.context;
    const rtl = this.style.direction == "rtl";
    this._textInfo = [];
    const oversizedBehavior = this.style.oversizedBehavior;
    const maxWidth = this.style.maxWidth;
    const truncate = isNumber(maxWidth) && oversizedBehavior == "truncate";
    const wrap = isNumber(maxWidth) && (oversizedBehavior == "wrap" || oversizedBehavior == "wrap-no-break");
    context.save();
    ghostContext.save();
    this._prerender(status, true, this._ignoreFontWeight());
    const refText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ";
    const lines = this.text.toString().replace(/\r/g, "").split(/\n/);
    let styleRestored = true;
    let minX = 0;
    let maxX = 0;
    let offsetY = 0;
    let currentStyle;
    each(lines, (line, _index) => {
      let chunks;
      if (line == "") {
        chunks = [{
          type: "value",
          text: ""
        }];
      } else {
        chunks = TextFormatter.chunk(line, false, this.style.ignoreFormatting);
      }
      while (chunks.length > 0) {
        let lineInfo = {
          offsetY,
          ascent: 0,
          width: 0,
          height: 0,
          left: 0,
          right: 0,
          textChunks: []
        };
        const metrics = this._measureText(refText, context);
        const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
        lineInfo.height = height;
        lineInfo.ascent = metrics.actualBoundingBoxAscent;
        let currentFormat;
        let currentDecoration = this.style.textDecoration;
        let currentFill;
        let currentChunkWidth;
        let skipFurtherText = false;
        let firstTextChunk = true;
        let leftoverChunks = [];
        let currentVerticalAlign;
        eachContinue(chunks, (chunk, index) => {
          if (chunk.type == "format") {
            if (chunk.text == "[/]") {
              if (!styleRestored) {
                context.restore();
                ghostContext.restore();
                styleRestored = true;
              }
              currentFill = void 0;
              currentStyle = void 0;
              currentChunkWidth = void 0;
              currentDecoration = this.style.textDecoration;
              currentVerticalAlign = void 0;
              currentFormat = chunk.text;
            } else {
              if (!styleRestored) {
                context.restore();
                ghostContext.restore();
              }
              let format = TextFormatter.getTextStyle(chunk.text);
              const fontStyle = this._getFontStyle(format);
              context.save();
              ghostContext.save();
              context.font = fontStyle;
              currentStyle = fontStyle;
              currentFormat = chunk.text;
              if (format.textDecoration) {
                currentDecoration = format.textDecoration;
              }
              if (format.fill) {
                currentFill = format.fill;
              }
              if (format.width) {
                currentChunkWidth = toNumber(format.width);
              }
              if (format.verticalAlign) {
                currentVerticalAlign = format.verticalAlign;
              }
              styleRestored = false;
              const metrics2 = this._measureText(refText, context);
              const height2 = metrics2.actualBoundingBoxAscent + metrics2.actualBoundingBoxDescent;
              if (height2 > lineInfo.height) {
                lineInfo.height = height2;
              }
              if (metrics2.actualBoundingBoxAscent > lineInfo.ascent) {
                lineInfo.ascent = metrics2.actualBoundingBoxAscent;
              }
            }
          } else if (chunk.type == "value" && !skipFurtherText) {
            const metrics2 = this._measureText(chunk.text, context);
            let chunkWidth = metrics2.actualBoundingBoxLeft + metrics2.actualBoundingBoxRight;
            if (truncate) {
              this.truncated = void 0;
              let breakWords = firstTextChunk || this.style.breakWords || false;
              const ellipsis = this.style.ellipsis || "";
              const ellipsisMetrics = this._measureText(ellipsis, context);
              const ellipsisWidth = ellipsisMetrics.actualBoundingBoxLeft + ellipsisMetrics.actualBoundingBoxRight;
              if (lineInfo.width + chunkWidth > maxWidth) {
                const excessWidth = maxWidth - lineInfo.width - ellipsisWidth;
                chunk.text = this._truncateText(context, chunk.text, excessWidth, breakWords);
                chunk.text += ellipsis;
                skipFurtherText = true;
                this.truncated = true;
              }
            } else if (wrap) {
              if (lineInfo.width + chunkWidth > maxWidth) {
                const excessWidth = maxWidth - lineInfo.width;
                const tmpText = this._truncateText(context, chunk.text, excessWidth, false, firstTextChunk && this.style.oversizedBehavior != "wrap-no-break");
                if (tmpText == "") {
                  this.textVisible = true;
                  return false;
                }
                leftoverChunks = chunks.slice(index + 1);
                if (trim(tmpText) != trim(chunk.text)) {
                  leftoverChunks.unshift({
                    type: "value",
                    text: chunk.text.substr(tmpText.length)
                  });
                  if (currentFormat) {
                    leftoverChunks.unshift({
                      type: "format",
                      text: currentFormat
                    });
                  }
                }
                chunk.text = trim(tmpText);
                chunks = [];
                skipFurtherText = true;
              }
            }
            let leftBoundMod = 1;
            let rightBoundMod = 1;
            if (currentStyle && currentChunkWidth && currentChunkWidth > chunkWidth) {
              const boundsMod = chunkWidth / currentChunkWidth;
              switch (this.style.textAlign) {
                case "right":
                case "end":
                  leftBoundMod = boundsMod;
                  break;
                case "center":
                  leftBoundMod = boundsMod;
                  rightBoundMod = boundsMod;
                  break;
                default:
                  rightBoundMod = boundsMod;
              }
              chunkWidth = currentChunkWidth;
            }
            const chunkHeight = metrics2.actualBoundingBoxAscent + metrics2.actualBoundingBoxDescent;
            if (chunkHeight > lineInfo.height) {
              lineInfo.height = chunkHeight;
            }
            if (metrics2.actualBoundingBoxAscent > lineInfo.ascent) {
              lineInfo.ascent = metrics2.actualBoundingBoxAscent;
            }
            lineInfo.width += chunkWidth;
            lineInfo.left += metrics2.actualBoundingBoxLeft / leftBoundMod;
            lineInfo.right += metrics2.actualBoundingBoxRight / rightBoundMod;
            lineInfo.textChunks.push({
              style: currentStyle,
              fill: currentFill,
              text: chunk.text,
              width: chunkWidth,
              height: chunkHeight,
              left: metrics2.actualBoundingBoxLeft,
              right: metrics2.actualBoundingBoxRight,
              ascent: metrics2.actualBoundingBoxAscent,
              offsetX: 0,
              offsetY: 0,
              textDecoration: currentDecoration,
              verticalAlign: currentVerticalAlign
            });
            firstTextChunk = false;
          }
          if (leftoverChunks) {
          }
          return true;
        });
        if (this.style.lineHeight instanceof Percent) {
          lineInfo.height *= this.style.lineHeight.value;
          lineInfo.ascent *= this.style.lineHeight.value;
        } else {
          lineInfo.height *= this.style.lineHeight || 1.2;
          lineInfo.ascent *= this.style.lineHeight || 1.2;
        }
        if (minX < lineInfo.left) {
          minX = lineInfo.left;
        }
        if (maxX < lineInfo.right) {
          maxX = lineInfo.right;
        }
        this._textInfo.push(lineInfo);
        offsetY += lineInfo.height;
        chunks = leftoverChunks || [];
      }
    });
    if (!styleRestored) {
      context.restore();
      ghostContext.restore();
    }
    each(this._textInfo, (lineInfo, _index) => {
      let currentChunkOffset = 0;
      each(lineInfo.textChunks, (chunk) => {
        chunk.offsetX = currentChunkOffset + chunk.left - lineInfo.left;
        chunk.offsetY += lineInfo.height - lineInfo.height * (this.style.baselineRatio || 0.19);
        currentChunkOffset += chunk.width;
        if (chunk.verticalAlign) {
          switch (chunk.verticalAlign) {
            case "super":
              chunk.offsetY -= lineInfo.height / 2 - chunk.height / 2;
              break;
            case "sub":
              chunk.offsetY += chunk.height / 2;
              break;
          }
        }
      });
    });
    const bounds = {
      left: rtl ? -maxX : -minX,
      top: 0,
      right: rtl ? minX : maxX,
      bottom: offsetY
    };
    if (oversizedBehavior !== "none") {
      const ratio = this._fitRatio(bounds);
      if (ratio < 1) {
        if (oversizedBehavior == "fit") {
          if (isNumber(this.style.minScale) && ratio < this.style.minScale) {
            this.textVisible = false;
            bounds.left = 0;
            bounds.top = 0;
            bounds.right = 0;
            bounds.bottom = 0;
          } else {
            if (!this._originalScale) {
              this._originalScale = this.scale;
            }
            this.scale = ratio;
            this.textVisible = true;
          }
        } else if (oversizedBehavior == "hide") {
          this.textVisible = false;
          bounds.left = 0;
          bounds.top = 0;
          bounds.right = 0;
          bounds.bottom = 0;
        } else {
          switch (this.style.textAlign) {
            case "right":
            case "end":
              bounds.left = rtl ? maxWidth : -maxWidth;
              bounds.right = 0;
              break;
            case "center":
              bounds.left = -maxWidth / 2;
              bounds.right = maxWidth / 2;
              break;
            default:
              bounds.left = 0;
              bounds.right = rtl ? -maxWidth : maxWidth;
          }
          this.scale = this._originalScale || 1;
          this._originalScale = void 0;
          this.textVisible = true;
        }
      } else {
        this.scale = this._originalScale || 1;
        this._originalScale = void 0;
        this.textVisible = true;
      }
    }
    context.restore();
    ghostContext.restore();
    return bounds;
  }
  _fitRatio(bounds) {
    const maxW = this.style.maxWidth;
    const maxH = this.style.maxHeight;
    if (!isNumber(maxW) && !isNumber(maxH)) {
      return 1;
    }
    const w = bounds.right - bounds.left;
    const h = bounds.bottom - bounds.top;
    return Math.min(maxW / w || 1, maxH / h || 1);
  }
  _truncateText(context, text, maxWidth, breakWords = false, fallbackBreakWords = true) {
    let width;
    do {
      if (breakWords) {
        text = text.slice(0, -1);
      } else {
        let tmp = text.replace(/[^,;:!?\\\/\s​]+[,;:!?\\\/\s​]*$/g, "");
        if ((tmp == "" || tmp === text) && fallbackBreakWords) {
          breakWords = true;
        } else if (tmp == "") {
          return text;
        } else {
          text = tmp;
        }
      }
      const metrics = this._measureText(text, context);
      width = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight;
    } while (width > maxWidth && text != "");
    return text;
  }
  _measureText(text, context) {
    let metrics = context.measureText(text);
    let fakeMetrics = {};
    if (metrics.actualBoundingBoxAscent == null) {
      const div = document.createElement("div");
      div.innerText = text;
      div.style.visibility = "hidden";
      div.style.position = "absolute";
      div.style.top = "-1000000px;";
      div.style.fontFamily = this.style.fontFamily || "";
      div.style.fontSize = this.style.fontSize + "";
      document.body.appendChild(div);
      const bbox = div.getBoundingClientRect();
      document.body.removeChild(div);
      const h = bbox.height;
      const w2 = metrics.width;
      let left = 0;
      let right = w2;
      fakeMetrics = {
        actualBoundingBoxAscent: h,
        actualBoundingBoxDescent: 0,
        actualBoundingBoxLeft: left,
        actualBoundingBoxRight: right,
        fontBoundingBoxAscent: h,
        fontBoundingBoxDescent: 0,
        width: w2
      };
    } else {
      fakeMetrics = {
        actualBoundingBoxAscent: metrics.actualBoundingBoxAscent,
        actualBoundingBoxDescent: metrics.actualBoundingBoxDescent,
        actualBoundingBoxLeft: metrics.actualBoundingBoxLeft,
        actualBoundingBoxRight: metrics.actualBoundingBoxRight,
        fontBoundingBoxAscent: metrics.actualBoundingBoxAscent,
        fontBoundingBoxDescent: metrics.actualBoundingBoxDescent,
        width: metrics.width
      };
    }
    const w = metrics.width;
    switch (this.style.textAlign) {
      case "right":
      case "end":
        fakeMetrics.actualBoundingBoxLeft = w;
        fakeMetrics.actualBoundingBoxRight = 0;
        break;
      case "center":
        fakeMetrics.actualBoundingBoxLeft = w / 2;
        fakeMetrics.actualBoundingBoxRight = w / 2;
        break;
      default:
        fakeMetrics.actualBoundingBoxLeft = 0;
        fakeMetrics.actualBoundingBoxRight = w;
    }
    return fakeMetrics;
  }
};
var CanvasTextStyle = class {
  constructor() {
    Object.defineProperty(this, "fill", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fillOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "textAlign", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fontFamily", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fontSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fontWeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fontStyle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fontVariant", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "textDecoration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowBlur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOffsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOffsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "lineHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: percent(120)
    });
    Object.defineProperty(this, "baselineRatio", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0.19
    });
    Object.defineProperty(this, "direction", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "textBaseline", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "oversizedBehavior", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "none"
    });
    Object.defineProperty(this, "breakWords", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "ellipsis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "…"
    });
    Object.defineProperty(this, "maxWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "maxHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "minScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ignoreFormatting", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
};
var CanvasRadialText = class extends CanvasText {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "textType", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "circular"
    });
    Object.defineProperty(this, "radius", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "startAngle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "inside", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "orientation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: "auto"
    });
    Object.defineProperty(this, "kerning", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_textReversed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _render(status, targetGhostLayer = 0) {
    switch (this.textType) {
      case "circular":
        this._renderCircular(status, targetGhostLayer);
        break;
      default:
        super._render(status, targetGhostLayer);
        break;
    }
  }
  _renderCircular(status, targetGhostLayer = 0) {
    if (this.textVisible) {
      this._prerender(status);
      const interactive = this._isInteractive(status);
      const context = status.layer.context;
      const layerDirty = status.layer.dirty;
      const ghostContext = this._renderer._ghostLayer.context;
      context.save();
      if (interactive) {
        ghostContext.save();
      }
      if (!this._textInfo) {
        this._measure(status);
      }
      let radius = this.radius || 0;
      let startAngle = this.startAngle || 0;
      let deltaAngle = 0;
      let orientation = this.orientation;
      let inward = orientation == "auto" ? "auto" : orientation == "inward";
      const inside = this.inside;
      const align = this.style.textAlign || "left";
      const kerning = this.kerning || 0;
      let clockwise = align == "left" ? 1 : -1;
      const shouldReverse = !this._textReversed;
      const ghostOnly = this._ghostOnly(targetGhostLayer);
      const drawGhost = this._drawGhost(status, targetGhostLayer);
      if (inward == "auto") {
        let maxAngle = 0;
        let midAngle = 0;
        each(this._textInfo, (line, _index) => {
          const deltaAngle2 = startAngle + line.width / (radius - line.height) / 2 * -clockwise;
          if (deltaAngle2 > maxAngle) {
            maxAngle = deltaAngle2;
          }
        });
        if (align == "left") {
          midAngle = (maxAngle + deltaAngle / 2) * DEGREES;
        } else if (align == "right") {
          midAngle = (maxAngle - deltaAngle / 2) * DEGREES;
        } else {
          midAngle = startAngle * DEGREES;
        }
        midAngle = normalizeAngle(midAngle);
        inward = midAngle >= 270 || midAngle <= 90;
      }
      if (inward == true && shouldReverse) {
        this._textInfo.reverse();
        this._textReversed = true;
      }
      each(this._textInfo, (line, _index) => {
        const textHeight = line.height;
        if (!inside) {
          radius += textHeight;
        }
        if ((clockwise == -1 && inward || clockwise == 1 && !inward) && shouldReverse) {
          line.textChunks.reverse();
        }
        let lineStartAngle = startAngle;
        deltaAngle = 0;
        if (align == "center") {
          lineStartAngle += line.width / (radius - textHeight) / 2 * -clockwise;
          deltaAngle = lineStartAngle - startAngle;
        }
        lineStartAngle += Math.PI * (inward ? 0 : 1);
        context.save();
        if (interactive) {
          ghostContext.save();
        }
        if (!ghostOnly) {
          context.rotate(lineStartAngle);
        }
        if (interactive) {
          ghostContext.rotate(lineStartAngle);
        }
        let angleShift = 0;
        each(line.textChunks, (chunk, _index2) => {
          const char = chunk.text;
          const charWidth = chunk.width;
          angleShift = charWidth / 2 / (radius - textHeight) * clockwise;
          if (!ghostOnly) {
            context.rotate(angleShift);
          }
          if (interactive) {
            ghostContext.rotate(angleShift);
          }
          if (chunk.style) {
            context.save();
            ghostContext.save();
            if (!ghostOnly) {
              context.font = chunk.style;
            }
            if (interactive) {
              ghostContext.font = chunk.style;
            }
          }
          if (chunk.fill) {
            context.save();
            if (!ghostOnly) {
              context.fillStyle = chunk.fill.toCSS();
            }
          }
          if (!ghostOnly) {
            context.textBaseline = "middle";
            context.textAlign = "center";
          }
          if (interactive) {
            ghostContext.textBaseline = "middle";
            ghostContext.textAlign = "center";
          }
          if (layerDirty && !ghostOnly) {
            context.fillText(char, 0, (inward ? 1 : -1) * (0 - radius + textHeight / 2));
          }
          if (interactive && drawGhost) {
            ghostContext.fillText(char, 0, (inward ? 1 : -1) * (0 - radius + textHeight / 2));
          }
          if (chunk.fill) {
            context.restore();
          }
          if (chunk.style) {
            context.restore();
            ghostContext.restore();
          }
          angleShift = (charWidth / 2 + kerning) / (radius - textHeight) * clockwise;
          if (!ghostOnly) {
            context.rotate(angleShift);
          }
          if (interactive) {
            ghostContext.rotate(angleShift);
          }
        });
        context.restore();
        if (interactive) {
          ghostContext.restore();
        }
        if (inside) {
          radius -= textHeight;
        }
      });
      context.restore();
      if (interactive) {
        ghostContext.restore();
      }
    }
  }
  _measure(status) {
    switch (this.textType) {
      case "circular":
        return this._measureCircular(status);
      default:
        return super._measure(status);
    }
  }
  _measureCircular(status) {
    const context = status.layer.context;
    const ghostContext = this._renderer._ghostLayer.context;
    const rtl = this.style.direction == "rtl";
    const oversizedBehavior = this.style.oversizedBehavior;
    const maxWidth = this.style.maxWidth;
    const truncate = isNumber(maxWidth) && oversizedBehavior == "truncate";
    const ellipsis = this.style.ellipsis || "";
    let ellipsisMetrics;
    this.textVisible = true;
    this._textInfo = [];
    this._textReversed = false;
    context.save();
    ghostContext.save();
    this._prerender(status, true);
    const lines = this.text.toString().replace(/\r/g, "").split(/\n/);
    let styleRestored = true;
    let totalWidth = 0;
    let offsetY = 0;
    each(lines, (line, _index) => {
      let chunks = TextFormatter.chunk(line, false, this.style.ignoreFormatting);
      let lineInfo = {
        offsetY,
        ascent: 0,
        width: 0,
        height: 0,
        left: 0,
        right: 0,
        textChunks: []
      };
      let currentStyle;
      let currentFill;
      let currentChunkWidth;
      each(chunks, (chunk, _index2) => {
        if (chunk.type == "format") {
          if (chunk.text == "[/]") {
            if (!styleRestored) {
              context.restore();
              ghostContext.restore();
              styleRestored = true;
            }
            currentFill = void 0;
            currentStyle = void 0;
            currentChunkWidth = void 0;
          } else {
            let format = TextFormatter.getTextStyle(chunk.text);
            const fontStyle = this._getFontStyle(format);
            context.save();
            ghostContext.save();
            context.font = fontStyle;
            currentStyle = fontStyle;
            if (format.fill) {
              currentFill = format.fill;
            }
            if (format.width) {
              currentChunkWidth = toNumber(format.width);
            }
            styleRestored = false;
          }
          if (truncate) {
            ellipsisMetrics = this._measureText(ellipsis, context);
          }
        } else if (chunk.type == "value") {
          let chars = chunk.text.match(/./ug) || [];
          if (rtl) {
            chars = splitString(chunk.text);
            chars.reverse();
          }
          for (let i = 0; i < chars.length; i++) {
            const char = chars[i];
            const metrics = this._measureText(char, context);
            let chunkWidth = metrics.width;
            if (currentStyle && currentChunkWidth && currentChunkWidth > chunkWidth) {
              chunkWidth = currentChunkWidth;
            }
            const chunkHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent;
            if (chunkHeight > lineInfo.height) {
              lineInfo.height = chunkHeight;
            }
            if (metrics.actualBoundingBoxAscent > lineInfo.ascent) {
              lineInfo.ascent = metrics.actualBoundingBoxAscent;
            }
            totalWidth += chunkWidth;
            if (truncate) {
              if (!ellipsisMetrics) {
                ellipsisMetrics = this._measureText(ellipsis, context);
              }
              const ellipsisWidth = ellipsisMetrics.actualBoundingBoxLeft + ellipsisMetrics.actualBoundingBoxRight;
              if (totalWidth + ellipsisWidth > maxWidth) {
                if (lineInfo.textChunks.length == 1) {
                  this.textVisible = false;
                } else {
                  lineInfo.width += ellipsisWidth;
                  lineInfo.left += ellipsisMetrics.actualBoundingBoxLeft;
                  lineInfo.right += ellipsisMetrics.actualBoundingBoxRight;
                  lineInfo.textChunks.push({
                    style: currentStyle,
                    fill: currentFill,
                    text: ellipsis,
                    width: ellipsisWidth,
                    height: chunkHeight + ellipsisMetrics.actualBoundingBoxDescent,
                    left: ellipsisMetrics.actualBoundingBoxLeft,
                    right: ellipsisMetrics.actualBoundingBoxRight,
                    ascent: ellipsisMetrics.actualBoundingBoxAscent,
                    offsetX: 0,
                    offsetY: chunkHeight,
                    textDecoration: void 0
                  });
                }
                break;
              }
            }
            lineInfo.width += chunkWidth;
            lineInfo.left += metrics.actualBoundingBoxLeft;
            lineInfo.right += metrics.actualBoundingBoxRight;
            lineInfo.textChunks.push({
              style: currentStyle,
              fill: currentFill,
              text: char,
              width: chunkWidth,
              height: chunkHeight + metrics.actualBoundingBoxDescent,
              left: metrics.actualBoundingBoxLeft,
              right: metrics.actualBoundingBoxRight,
              ascent: metrics.actualBoundingBoxAscent,
              offsetX: 0,
              offsetY: chunkHeight,
              textDecoration: void 0
            });
            if (rtl) {
            }
          }
        }
      });
      if (this.style.lineHeight instanceof Percent) {
        lineInfo.height *= this.style.lineHeight.value;
      } else {
        lineInfo.height *= this.style.lineHeight || 1.2;
      }
      this._textInfo.push(lineInfo);
      offsetY += lineInfo.height;
    });
    if (!styleRestored) {
      context.restore();
      ghostContext.restore();
    }
    if (oversizedBehavior == "hide" && totalWidth > maxWidth) {
      this.textVisible = false;
    }
    each(this._textInfo, (lineInfo) => {
      each(lineInfo.textChunks, (chunk) => {
        chunk.offsetY += Math.round((lineInfo.height - chunk.height + (lineInfo.ascent - chunk.ascent)) / 2);
      });
    });
    context.restore();
    ghostContext.restore();
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }
};
var CanvasImage = class extends CanvasDisplayObject {
  constructor(renderer, image) {
    super(renderer);
    Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "image", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowColor", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowBlur", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOffsetX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOffsetY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "shadowOpacity", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_imageMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.image = image;
  }
  _dispose() {
    super._dispose();
    if (this._imageMask) {
      clearCanvas(this._imageMask);
    }
  }
  getLocalBounds() {
    if (!this._localBounds) {
      let w = 0;
      let h = 0;
      if (this.width) {
        w = this.width;
      }
      if (this.height) {
        h = this.height;
      }
      this._localBounds = {
        left: 0,
        top: 0,
        right: w,
        bottom: h
      };
      this._addBounds(this._localBounds);
    }
    return this._localBounds;
  }
  _render(status, targetGhostLayer = 0) {
    super._render(status);
    if (this.image) {
      if (this.tainted === void 0) {
        this.tainted = isTainted(this.image);
        status.layer.tainted = true;
      }
      if (this.tainted && this._renderer._omitTainted) {
        return;
      }
      const ghostOnly = this._ghostOnly(targetGhostLayer);
      const drawGhost = this._drawGhost(status, targetGhostLayer);
      if (status.layer.dirty && !ghostOnly) {
        if (this.shadowColor) {
          status.layer.context.shadowColor = this.shadowColor.toCSS(this.shadowOpacity || 1);
        }
        if (this.shadowBlur) {
          status.layer.context.shadowBlur = this.shadowBlur;
        }
        if (this.shadowOffsetX) {
          status.layer.context.shadowOffsetX = this.shadowOffsetX;
        }
        if (this.shadowOffsetY) {
          status.layer.context.shadowOffsetY = this.shadowOffsetY;
        }
        const width = this.width || this.image.naturalWidth;
        const height = this.height || this.image.naturalHeight;
        status.layer.context.drawImage(this.image, 0, 0, width, height);
      }
      if (this.interactive && this._isInteractive(status) && drawGhost) {
        const mask = this._getMask(this.image);
        this._renderer._ghostLayer.context.drawImage(mask, 0, 0);
      }
    }
  }
  clear() {
    super.clear();
    this.image = void 0;
    this._imageMask = void 0;
  }
  _getMask(image) {
    if (this._imageMask === void 0) {
      const width = this.width || image.naturalWidth;
      const height = this.height || image.naturalHeight;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const context = canvas.getContext("2d");
      context.imageSmoothingEnabled = false;
      context.fillStyle = this._getColorId();
      context.fillRect(0, 0, width, height);
      if (!isTainted(image)) {
        context.globalCompositeOperation = "destination-in";
        context.drawImage(image, 0, 0, width, height);
      }
      this._imageMask = canvas;
    }
    return this._imageMask;
  }
};
var CanvasRendererEvent = class {
  constructor(event, originalPoint, point, bbox) {
    Object.defineProperty(this, "event", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: event
    });
    Object.defineProperty(this, "originalPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: originalPoint
    });
    Object.defineProperty(this, "point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: point
    });
    Object.defineProperty(this, "bbox", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: bbox
    });
    Object.defineProperty(this, "id", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "simulated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "native", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    if (supports("touchevents") && event instanceof Touch) {
      this.id = event.identifier;
    } else {
      this.id = null;
    }
  }
};
var CanvasRenderer = class extends ArrayDisposer {
  constructor(resolution) {
    super();
    Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("div")
    });
    Object.defineProperty(this, "_layerDom", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("div")
    });
    Object.defineProperty(this, "layers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_dirtyLayers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "defaultLayer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.getLayer(0)
    });
    Object.defineProperty(this, "_ghostLayer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new GhostLayer()
    });
    Object.defineProperty(this, "_deferredGhostLayers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_patternCanvas", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("canvas")
    });
    Object.defineProperty(this, "_patternContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._patternCanvas.getContext("2d")
    });
    Object.defineProperty(this, "_realWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_realHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_calculatedWidth", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_calculatedHeight", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "interactionsEnabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_listeners", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_colorId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_colorMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_forceInteractive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_omitTainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_hovering", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: /* @__PURE__ */ new Set()
    });
    Object.defineProperty(this, "_dragging", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_mousedown", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_lastPointerMoveEvent", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tapToActivate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "tapToActivateTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 3e3
    });
    Object.defineProperty(this, "_touchActive", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_touchActiveTimeout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (resolution == null) {
      this.resolution = window.devicePixelRatio;
    } else {
      this.resolution = resolution;
    }
    this.view.style.position = "absolute";
    this.view.setAttribute("aria-hidden", "true");
    this.view.appendChild(this._layerDom);
    this._disposers.push(new Disposer(() => {
      each2(this._events, (_key, events) => {
        events.disposer.dispose();
      });
      each(this.layers, (layer) => {
        clearCanvas(layer.view);
        if (layer.exportableView) {
          clearCanvas(layer.exportableView);
        }
      });
      clearCanvas(this._ghostLayer.view);
      clearCanvas(this._patternCanvas);
    }));
    this._disposers.push(onZoom(() => {
      if (resolution == null) {
        this.resolution = window.devicePixelRatio;
      }
    }));
    if (supports("touchevents")) {
      const listener = (ev) => {
        if (this._dragging.length !== 0) {
          eachContinue(this._dragging, (item) => {
            if (item.value.shouldCancelTouch()) {
              ev.preventDefault();
              return false;
            }
            return true;
          });
        }
        if (this._touchActiveTimeout) {
          this._delayTouchDeactivate();
        }
      };
      this._disposers.push(addEventListener(window, "touchstart", listener, {
        passive: false
      }));
      this._disposers.push(addEventListener(this.view, "touchstart", listener, {
        passive: false
      }));
      this._disposers.push(addEventListener(this.view, "touchmove", () => {
        if (this._touchActiveTimeout) {
          this._delayTouchDeactivate();
        }
      }, {
        passive: true
      }));
      this._disposers.push(addEventListener(window, "click", (_ev) => {
        this._touchActive = false;
      }, {
        passive: true
      }));
      this._disposers.push(addEventListener(this.view, "click", (_ev) => {
        window.setTimeout(() => {
          this._touchActive = true;
          this._delayTouchDeactivate();
        }, 100);
      }, {
        passive: true
      }));
    }
    if (supports("wheelevents")) {
      this._disposers.push(addEventListener(this.view, "wheel", (ev) => {
        let prevent = false;
        this._hovering.forEach((obj) => {
          if (obj.wheelable) {
            prevent = true;
            return false;
          }
        });
        if (prevent) {
          ev.preventDefault();
        }
      }, {
        passive: false
      }));
    }
  }
  /*protected _mouseMoveThrottler: Throttler = new Throttler(() => {
      this._dispatchGlobalMousemove(this._lastPointerMoveEvent.event, this._lastPointerMoveEvent.native);
  });
  */
  resetImageArray() {
    this._ghostLayer.imageArray = void 0;
  }
  _delayTouchDeactivate() {
    if (this._touchActiveTimeout) {
      clearTimeout(this._touchActiveTimeout);
    }
    if (this.tapToActivateTimeout > 0) {
      this._touchActiveTimeout = window.setTimeout(() => {
        this._touchActive = false;
      }, this.tapToActivateTimeout);
    }
  }
  get debugGhostView() {
    return !!this._ghostLayer.view.parentNode;
  }
  set debugGhostView(value) {
    if (value) {
      if (!this._ghostLayer.view.parentNode) {
        this.view.appendChild(this._ghostLayer.view);
      }
    } else {
      if (this._ghostLayer.view.parentNode) {
        this._ghostLayer.view.parentNode.removeChild(this._ghostLayer.view);
      }
    }
  }
  createLinearGradient(x1, y1, x2, y2) {
    return this.defaultLayer.context.createLinearGradient(x1, y1, x2, y2);
  }
  createRadialGradient(x1, y1, radius1, x2, y2, radius2) {
    return this.defaultLayer.context.createRadialGradient(x1, y1, radius1, x2, y2, radius2);
  }
  createPattern(graphics, background, repetition, width, height) {
    this._patternCanvas.width = width;
    this._patternCanvas.height = height;
    this._patternContext.clearRect(0, 0, width, height);
    background.renderDetached(this._patternContext);
    graphics.renderDetached(this._patternContext);
    return this._patternContext.createPattern(this._patternCanvas, repetition);
  }
  makeContainer() {
    return new CanvasContainer(this);
  }
  makeGraphics() {
    return new CanvasGraphics(this);
  }
  makeText(text, style) {
    return new CanvasText(this, text, style);
  }
  makeTextStyle() {
    return new CanvasTextStyle();
  }
  makeRadialText(text, style) {
    return new CanvasRadialText(this, text, style);
  }
  makePicture(image) {
    return new CanvasImage(this, image);
  }
  resizeLayer(layer) {
    layer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resizeGhost() {
    this._ghostLayer.resize(this._calculatedWidth, this._calculatedHeight, this._calculatedWidth, this._calculatedHeight, this.resolution);
  }
  resize(realWidth, realHeight, calculatedWidth, calculatedHeight) {
    this._realWidth = realWidth;
    this._realHeight = realHeight;
    this._calculatedWidth = calculatedWidth;
    this._calculatedHeight = calculatedHeight;
    each(this.layers, (layer) => {
      if (layer) {
        layer.dirty = true;
        this.resizeLayer(layer);
      }
    });
    this.resizeGhost();
    this.view.style.width = calculatedWidth + "px";
    this.view.style.height = calculatedHeight + "px";
  }
  createDetachedLayer(willReadFrequently = false) {
    const view = document.createElement("canvas");
    const context = view.getContext("2d", {
      willReadFrequently
    });
    const layer = new CanvasLayer(view, context);
    view.style.position = "absolute";
    view.style.top = "0px";
    view.style.left = "0px";
    return layer;
  }
  getLayerByOrder(order) {
    const layers = this.layers;
    const length = layers.length;
    for (let i = 0; i < length; i++) {
      const layer = layers[i];
      if (layer.order == order) {
        return layer;
      }
    }
  }
  getLayer(order, visible = true) {
    let existingLayer = this.getLayerByOrder(order);
    if (existingLayer) {
      return existingLayer;
    }
    const layer = this.createDetachedLayer(order == 99);
    layer.order = order;
    layer.visible = visible;
    layer.view.className = "am5-layer-" + order;
    if (layer.visible) {
      this.resizeLayer(layer);
    }
    const layers = this.layers;
    layers.push(layer);
    layers.sort((a, b) => {
      if (a.order > b.order) {
        return 1;
      } else if (a.order < b.order) {
        return -1;
      } else {
        return 0;
      }
    });
    const length = layers.length;
    const layerIndex = indexOf(layers, layer);
    let next;
    for (let i = layerIndex + 1; i < length; i++) {
      if (layers[i].visible) {
        next = layers[i];
        break;
      }
    }
    if (layer.visible) {
      if (next === void 0) {
        this._layerDom.appendChild(layer.view);
      } else {
        this._layerDom.insertBefore(layer.view, next.view);
      }
    }
    return layer;
  }
  render(root) {
    this._dirtyLayers.length = 0;
    this._deferredGhostLayers = [];
    each(this.layers, (layer) => {
      if (layer) {
        if (layer.dirty && layer.visible) {
          this._dirtyLayers.push(layer);
          layer.clear();
        }
      }
    });
    this._ghostLayer.clear();
    root.render({
      inactive: null,
      layer: this.defaultLayer
    });
    const deferredGhostLayers = this._deferredGhostLayers;
    if (deferredGhostLayers.length) {
      deferredGhostLayers.sort((a, b) => a - b);
      each(deferredGhostLayers, (layerx) => {
        root.render({
          inactive: null,
          layer: this.defaultLayer
        }, layerx);
      });
    }
    this._ghostLayer.context.restore();
    each(this.layers, (layer) => {
      if (layer) {
        const context = layer.context;
        context.beginPath();
        context.moveTo(0, 0);
        context.stroke();
      }
    });
    each(this._dirtyLayers, (layer) => {
      layer.context.restore();
      layer.dirty = false;
    });
    if (this._hovering.size && this._lastPointerMoveEvent) {
      const {
        events,
        target,
        native
      } = this._lastPointerMoveEvent;
      each(events, (event) => {
        this._dispatchGlobalMousemove(event, target, native);
      });
    }
  }
  paintId(obj) {
    const id = distributeId(++this._colorId);
    const color2 = Color.fromHex(id).toCSS();
    this._colorMap[color2] = obj;
    return color2;
  }
  _removeObject(obj) {
    if (obj._colorId !== void 0) {
      delete this._colorMap[obj._colorId];
    }
  }
  // protected _identifyObjectByColor(colorId: number): CanvasDisplayObject | undefined {
  // 	return this._colorMap[colorId];
  // }
  _adjustBoundingBox(bbox) {
    const margin = this._ghostLayer.margin;
    return new DOMRect(-margin.left, -margin.top, bbox.width + margin.left + margin.right, bbox.height + margin.top + margin.bottom);
  }
  getEvent(originalEvent, adjustPoint = true) {
    const bbox = this.view.getBoundingClientRect();
    const x = originalEvent.clientX || 0;
    const y = originalEvent.clientY || 0;
    const widthScale = this._calculatedWidth / this._realWidth;
    const heightScale = this._calculatedHeight / this._realHeight;
    const originalPoint = {
      x: x - bbox.left,
      y: y - bbox.top
    };
    const point = {
      x: (x - (adjustPoint ? bbox.left : 0)) * widthScale,
      y: (y - (adjustPoint ? bbox.top : 0)) * heightScale
    };
    return new CanvasRendererEvent(originalEvent, originalPoint, point, this._adjustBoundingBox(bbox));
  }
  _getHitTarget(point, bbox, target) {
    if (bbox.width === 0 || bbox.height === 0 || point.x < bbox.left || point.x > bbox.right || point.y < bbox.top || point.y > bbox.bottom) {
      return;
    }
    if (!target || !this._layerDom.contains(target)) {
      return;
    }
    const pixel = this._ghostLayer.getImageData(point, bbox);
    if (pixel.data[0] === 0 && pixel.data[1] === 0 && pixel.data[2] === 0) {
      return false;
    }
    const colorId = Color.fromRGB(pixel.data[0], pixel.data[1], pixel.data[2]).toCSS();
    const hit = this._colorMap[colorId];
    return hit;
  }
  getObjectAtPoint(point) {
    const data = this._ghostLayer.getImageArray(point);
    if (data[0] === 0 && data[1] === 0 && data[2] === 0) {
      return void 0;
    }
    const colorId = Color.fromRGB(data[0], data[1], data[2]).toCSS();
    const hit = this._colorMap[colorId];
    return hit;
  }
  _withEvents(key, f) {
    const events = this._events[key];
    if (events !== void 0) {
      events.dispatching = true;
      try {
        f(events);
      } finally {
        events.dispatching = false;
        if (events.cleanup) {
          events.cleanup = false;
          keepIf(events.callbacks, (callback) => {
            return !callback.disposed;
          });
          if (events.callbacks.length === 0) {
            events.disposer.dispose();
            delete this._events[key];
          }
        }
      }
    }
  }
  _dispatchEventAll(key, event) {
    if (!this.interactionsEnabled) {
      return;
    }
    this._withEvents(key, (events) => {
      each(events.callbacks, (callback) => {
        if (!callback.disposed) {
          callback.callback.call(callback.context, event);
        }
      });
    });
  }
  _dispatchEvent(key, target, event) {
    if (!this.interactionsEnabled) {
      return false;
    }
    let dispatched = false;
    this._withEvents(key, (events) => {
      each(events.callbacks, (callback) => {
        if (!callback.disposed && callback.object === target) {
          callback.callback.call(callback.context, event);
          dispatched = true;
        }
      });
    });
    return dispatched;
  }
  _dispatchMousedown(originalEvent, originalTarget) {
    const button = originalEvent.button;
    if (button != 0 && button != 2 && button != 1 && button !== void 0) {
      return;
    }
    const event = this.getEvent(originalEvent);
    const target = this._getHitTarget(event.originalPoint, event.bbox, originalTarget);
    if (target) {
      const id = event.id;
      let dragged = false;
      eachTargets(target, (obj) => {
        const info = {
          id,
          value: obj
        };
        this._mousedown.push(info);
        if (!dragged && this._dispatchEvent("pointerdown", obj, event)) {
          dragged = true;
          const has = this._dragging.some((x) => {
            return x.value === obj && x.id === id;
          });
          if (!has) {
            this._dragging.push(info);
          }
        }
        return true;
      });
    }
  }
  _dispatchGlobalMousemove(originalEvent, originalTarget, native) {
    const event = this.getEvent(originalEvent);
    const target = this._getHitTarget(event.originalPoint, event.bbox, originalTarget);
    event.native = native;
    if (target) {
      this._hovering.forEach((obj) => {
        if (!obj.contains(target)) {
          this._hovering.delete(obj);
          if (obj.cursorOverStyle) {
            setStyle(document.body, "cursor", obj._replacedCursorStyle);
          }
          this._dispatchEvent("pointerout", obj, event);
        }
      });
      if (event.native) {
        eachTargets(target, (obj) => {
          if (!this._hovering.has(obj)) {
            this._hovering.add(obj);
            if (obj.cursorOverStyle) {
              obj._replacedCursorStyle = getStyle(document.body, "cursor");
              setStyle(document.body, "cursor", obj.cursorOverStyle);
            }
            this._dispatchEvent("pointerover", obj, event);
          }
          return true;
        });
      }
    } else {
      this._hovering.forEach((obj) => {
        if (obj.cursorOverStyle) {
          setStyle(document.body, "cursor", obj._replacedCursorStyle);
        }
        this._dispatchEvent("pointerout", obj, event);
      });
      this._hovering.clear();
    }
    this._dispatchEventAll("globalpointermove", event);
  }
  removeHovering(graphics) {
    this._hovering.delete(graphics);
    if (graphics.cursorOverStyle) {
      setStyle(document.body, "cursor", graphics._replacedCursorStyle);
    }
  }
  _dispatchGlobalMouseup(originalEvent, native) {
    const event = this.getEvent(originalEvent);
    event.native = native;
    this._dispatchEventAll("globalpointerup", event);
  }
  _dispatchDragMove(originalEvent) {
    if (this._dragging.length !== 0) {
      const event = this.getEvent(originalEvent);
      const id = event.id;
      this._dragging.forEach((obj) => {
        if (obj.id === id) {
          this._dispatchEvent("pointermove", obj.value, event);
        }
      });
    }
  }
  _dispatchDragEnd(originalEvent, originalTarget) {
    const button = originalEvent.button;
    let clickevent;
    if (button == 0 || button === void 0) {
      clickevent = "click";
    } else if (button == 2) {
      clickevent = "rightclick";
    } else if (button == 1) {
      clickevent = "middleclick";
    } else {
      return;
    }
    const event = this.getEvent(originalEvent);
    const id = event.id;
    if (this._mousedown.length !== 0) {
      const target = this._getHitTarget(event.originalPoint, event.bbox, originalTarget);
      if (target) {
        this._mousedown.forEach((obj) => {
          if (obj.id === id && obj.value.contains(target)) {
            this._dispatchEvent(clickevent, obj.value, event);
          }
        });
      }
      this._mousedown.length = 0;
    }
    if (this._dragging.length !== 0) {
      this._dragging.forEach((obj) => {
        if (obj.id === id) {
          this._dispatchEvent("pointerup", obj.value, event);
        }
      });
      this._dragging.length = 0;
    }
  }
  _dispatchDoubleClick(originalEvent, originalTarget) {
    const event = this.getEvent(originalEvent);
    const target = this._getHitTarget(event.originalPoint, event.bbox, originalTarget);
    if (target) {
      eachTargets(target, (obj) => {
        if (this._dispatchEvent("dblclick", obj, event)) {
          return false;
        } else {
          return true;
        }
      });
    }
  }
  _dispatchWheel(originalEvent, originalTarget) {
    const event = this.getEvent(originalEvent);
    const target = this._getHitTarget(event.originalPoint, event.bbox, originalTarget);
    if (target) {
      eachTargets(target, (obj) => {
        if (this._dispatchEvent("wheel", obj, event)) {
          return false;
        } else {
          return true;
        }
      });
    }
  }
  _makeSharedEvent(key, f) {
    if (this._listeners[key] === void 0) {
      const listener = f();
      this._listeners[key] = new CounterDisposer(() => {
        delete this._listeners[key];
        listener.dispose();
      });
    }
    return this._listeners[key].increment();
  }
  _onPointerEvent(name, f) {
    let native = false;
    let timer = null;
    function clear() {
      timer = null;
      native = false;
    }
    return new MultiDisposer([new Disposer(() => {
      if (timer !== null) {
        clearTimeout(timer);
      }
      clear();
    }), addEventListener(this.view, getRendererEvent(name), (_) => {
      native = true;
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = window.setTimeout(clear, 0);
    }), onPointerEvent(window, name, (ev, target) => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      f(ev, target, native);
      native = false;
    })]);
  }
  // This ensures that only a single DOM event is added (e.g. only a single mousemove event listener)
  _initEvent(key) {
    switch (key) {
      case "globalpointermove":
      case "pointerover":
      case "pointerout":
        return this._makeSharedEvent("pointermove", () => {
          const listener = (events, target, native) => {
            this._lastPointerMoveEvent = {
              events,
              target,
              native
            };
            each(events, (event) => {
              this._dispatchGlobalMousemove(event, target, native);
            });
          };
          return new MultiDisposer([this._onPointerEvent("pointerdown", listener), this._onPointerEvent("pointermove", listener)]);
        });
      case "globalpointerup":
        return this._makeSharedEvent("pointerup", () => {
          const mouseup = this._onPointerEvent("pointerup", (events, target, native) => {
            each(events, (event) => {
              this._dispatchGlobalMouseup(event, native);
            });
            this._lastPointerMoveEvent = {
              events,
              target,
              native
            };
          });
          const pointercancel = this._onPointerEvent("pointercancel", (events, target, native) => {
            each(events, (event) => {
              this._dispatchGlobalMouseup(event, native);
            });
            this._lastPointerMoveEvent = {
              events,
              target,
              native
            };
          });
          return new Disposer(() => {
            mouseup.dispose();
            pointercancel.dispose();
          });
        });
      case "click":
      case "rightclick":
      case "middleclick":
      case "pointerdown":
      /*
          return this._makeSharedEvent("pointerdown", () => {
              return this._onPointerEvent("pointerdown", (event, target, native) => {
                  this._lastPointerMoveEvent = { event, target, native };
                  this._dispatchMousedown(event)
              });
          });
      */
      case "pointermove":
      case "pointerup":
        return this._makeSharedEvent("pointerdown", () => {
          const mousedown = this._onPointerEvent("pointerdown", (events, target) => {
            each(events, (ev) => {
              this._dispatchMousedown(ev, target);
            });
          });
          const mousemove = this._onPointerEvent("pointermove", (ev) => {
            each(ev, (ev2) => {
              this._dispatchDragMove(ev2);
            });
          });
          const mouseup = this._onPointerEvent("pointerup", (ev, target) => {
            each(ev, (ev2) => {
              this._dispatchDragEnd(ev2, target);
            });
          });
          const pointercancel = this._onPointerEvent("pointercancel", (ev, target) => {
            each(ev, (ev2) => {
              this._dispatchDragEnd(ev2, target);
            });
          });
          return new Disposer(() => {
            mousedown.dispose();
            mousemove.dispose();
            mouseup.dispose();
            pointercancel.dispose();
          });
        });
      case "dblclick":
        return this._makeSharedEvent("dblclick", () => {
          return this._onPointerEvent("dblclick", (ev, target) => {
            each(ev, (ev2) => {
              this._dispatchDoubleClick(ev2, target);
            });
          });
        });
      case "wheel":
        return this._makeSharedEvent("wheel", () => {
          return addEventListener(this.view, getRendererEvent("wheel"), (event) => {
            this._dispatchWheel(event, getEventTarget(event));
          }, {
            passive: false
          });
        });
    }
  }
  _addEvent(object, key, callback, context) {
    let events = this._events[key];
    if (events === void 0) {
      events = this._events[key] = {
        disposer: this._initEvent(key),
        callbacks: [],
        dispatching: false,
        cleanup: false
      };
    }
    const listener = {
      object,
      context,
      callback,
      disposed: false
    };
    events.callbacks.push(listener);
    return new Disposer(() => {
      listener.disposed = true;
      if (events.dispatching) {
        events.cleanup = true;
      } else {
        removeFirst(events.callbacks, listener);
        if (events.callbacks.length === 0) {
          events.disposer.dispose();
          delete this._events[key];
        }
      }
    });
  }
  getCanvas(root, options) {
    this.render(root);
    if (!options) {
      options = {};
    }
    let scale = this.resolution;
    let canvasWidth = Math.floor(this._calculatedWidth * this.resolution);
    let canvasHeight = Math.floor(this._calculatedHeight * this.resolution);
    if (options.minWidth && options.minWidth > canvasWidth) {
      let minScale = options.minWidth / canvasWidth;
      if (minScale > scale) {
        scale = minScale * this.resolution;
      }
    }
    if (options.minHeight && options.minHeight > canvasHeight) {
      let minScale = options.minHeight / canvasHeight;
      if (minScale > scale) {
        scale = minScale * this.resolution;
      }
    }
    if (options.maxWidth && options.maxWidth < canvasWidth) {
      let maxScale = options.maxWidth / canvasWidth;
      if (maxScale < scale) {
        scale = maxScale * this.resolution;
      }
    }
    if (options.maxHeight && options.maxHeight > canvasHeight) {
      let maxScale = options.maxHeight / canvasHeight;
      if (maxScale < scale) {
        scale = maxScale * this.resolution;
      }
    }
    if (options.maintainPixelRatio) {
      scale /= this.resolution;
    }
    const canvases = [];
    let forceRender = false;
    const canvas = document.createElement("canvas");
    if (scale != this.resolution) {
      forceRender = true;
      canvasWidth = canvasWidth * scale / this.resolution;
      canvasHeight = canvasHeight * scale / this.resolution;
    }
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "-10000px";
    this.view.appendChild(canvas);
    canvases.push(canvas);
    const context = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let needRerender = false;
    each(this.layers, (layer) => {
      if (layer && layer.visible) {
        if (layer.tainted || forceRender) {
          needRerender = true;
          layer.exportableView = layer.view;
          layer.exportableContext = layer.context;
          layer.view = document.createElement("canvas");
          layer.view.style.position = "fixed";
          layer.view.style.top = "-10000px";
          this.view.appendChild(layer.view);
          canvases.push(layer.view);
          let extraX = 0;
          let extraY = 0;
          if (layer.margin) {
            extraX += layer.margin.left || 0 + layer.margin.right || 0;
            extraY += layer.margin.top || 0 + layer.margin.bottom || 0;
          }
          layer.view.width = canvasWidth + extraX;
          layer.view.height = canvasHeight + extraY;
          layer.context = layer.view.getContext("2d");
          layer.dirty = true;
          layer.scale = scale;
        }
      }
    });
    if (needRerender) {
      this._omitTainted = true;
      this.render(root);
      this._omitTainted = false;
    }
    each(this.layers, (layer) => {
      if (layer && layer.visible) {
        let x = 0;
        let y = 0;
        if (layer.margin) {
          x = -(layer.margin.left || 0) * this.resolution;
          y = -(layer.margin.top || 0) * this.resolution;
        }
        context.drawImage(layer.view, x, y);
        if (layer.exportableView) {
          layer.view = layer.exportableView;
          layer.exportableView = void 0;
        }
        if (layer.exportableContext) {
          layer.context = layer.exportableContext;
          layer.exportableContext = void 0;
        }
        if (width < layer.view.clientWidth) {
          width = layer.view.clientWidth;
        }
        if (height < layer.view.clientHeight) {
          height = layer.view.clientHeight;
        }
        layer.scale = void 0;
      }
    });
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    each(canvases, (canvas2) => {
      canvas2.style.position = "";
      canvas2.style.top = "";
      this.view.removeChild(canvas2);
    });
    return canvas;
  }
};
var GhostLayer = class {
  constructor() {
    Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "margin", {
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
    Object.defineProperty(this, "_resolution", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "imageArray", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this.view = document.createElement("canvas");
    this.context = this.view.getContext("2d", {
      alpha: false,
      willReadFrequently: true
    });
    this.context.imageSmoothingEnabled = false;
    this.view.style.position = "absolute";
    this.view.style.top = "0px";
    this.view.style.left = "0px";
  }
  resize(canvasWidth, canvasHeight, domWidth, domHeight, resolution) {
    this._resolution = resolution;
    canvasWidth += this.margin.left + this.margin.right;
    canvasHeight += this.margin.top + this.margin.bottom;
    domWidth += this.margin.left + this.margin.right;
    domHeight += this.margin.top + this.margin.bottom;
    this.view.style.left = -this.margin.left + "px";
    this.view.style.top = -this.margin.top + "px";
    this._width = Math.floor(canvasWidth * resolution);
    this._height = Math.floor(canvasHeight * resolution);
    this.view.width = this._width;
    this.view.style.width = domWidth + "px";
    this.view.height = this._height;
    this.view.style.height = domHeight + "px";
  }
  getImageData(point, bbox) {
    return this.context.getImageData(
      // TODO should this round ?
      Math.round((point.x - bbox.left) / bbox.width * this._width),
      Math.round((point.y - bbox.top) / bbox.height * this._height),
      1,
      1
    );
  }
  getImageArray(point) {
    if (!this.imageArray) {
      this.imageArray = this.context.getImageData(0, 0, this._width, this._height).data;
    }
    const data = this.imageArray;
    const x = Math.round(point.x * this._resolution);
    const y = Math.round(point.y * this._resolution);
    const i = (y * this._width + x) * 4;
    return [data[i], data[i + 1], data[i + 2], data[i + 3]];
  }
  setMargin(layers) {
    this.margin.left = 0;
    this.margin.right = 0;
    this.margin.top = 0;
    this.margin.bottom = 0;
    each(layers, (layer) => {
      if (layer.margin) {
        this.margin.left = Math.max(this.margin.left, layer.margin.left);
        this.margin.right = Math.max(this.margin.right, layer.margin.right);
        this.margin.top = Math.max(this.margin.top, layer.margin.top);
        this.margin.bottom = Math.max(this.margin.bottom, layer.margin.bottom);
      }
    });
  }
  clear() {
    this.context.save();
    this.context.fillStyle = "#000";
    this.context.fillRect(0, 0, this._width, this._height);
  }
};
var CanvasLayer = class {
  constructor(view, context) {
    Object.defineProperty(this, "view", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tainted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "margin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "order", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "visible", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "scale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "exportableView", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "exportableContext", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_width", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_height", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    this.view = view;
    this.context = context;
  }
  resize(canvasWidth, canvasHeight, domWidth, domHeight, resolution) {
    if (this.width != null) {
      canvasWidth = this.width;
      domWidth = this.width;
    }
    if (this.height != null) {
      canvasHeight = this.height;
      domHeight = this.height;
    }
    if (this.margin) {
      canvasWidth += this.margin.left + this.margin.right;
      canvasHeight += this.margin.top + this.margin.bottom;
      domWidth += this.margin.left + this.margin.right;
      domHeight += this.margin.top + this.margin.bottom;
      this.view.style.left = -this.margin.left + "px";
      this.view.style.top = -this.margin.top + "px";
    } else {
      this.view.style.left = "0px";
      this.view.style.top = "0px";
    }
    this._width = Math.floor(canvasWidth * resolution);
    this._height = Math.floor(canvasHeight * resolution);
    this.view.width = this._width;
    this.view.style.width = domWidth + "px";
    this.view.height = this._height;
    this.view.style.height = domHeight + "px";
  }
  clear() {
    this.context.save();
    this.context.clearRect(0, 0, this._width, this._height);
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/Root.js
function rAF(fps, callback) {
  if (fps == null) {
    requestAnimationFrame(callback);
  } else {
    setTimeout(() => {
      requestAnimationFrame(callback);
    }, 1e3 / fps);
  }
}
var Root = class _Root {
  constructor(id, settings = {}, isReal) {
    Object.defineProperty(this, "dom", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_inner", {
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
    Object.defineProperty(this, "_isDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDirtyParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_isDirtyAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirtyParents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirtyBounds", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_dirtyPositions", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_ticker", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_tickers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_updateTick", {
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
    Object.defineProperty(this, "animationTime", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: null
    });
    Object.defineProperty(this, "_animations", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_renderer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rootContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "container", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "tooltipContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipContainerSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltip", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "language", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Language.new(this, {})
    });
    Object.defineProperty(this, "locale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: en_default
    });
    Object.defineProperty(this, "utc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "timezone", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "fps", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "numberFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: NumberFormatter.new(this, {})
    });
    Object.defineProperty(this, "dateFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: DateFormatter.new(this, {})
    });
    Object.defineProperty(this, "durationFormatter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: DurationFormatter.new(this, {})
    });
    Object.defineProperty(this, "tabindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tabindexes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_a11yD", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_focusElementDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_focusElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_focusedSprite", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isShift", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_keyboardDragPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_readerAlertElement", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_logo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipDiv", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "nonce", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "interfaceColors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "verticalLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: VerticalLayout.new(this, {})
    });
    Object.defineProperty(this, "horizontalLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: HorizontalLayout.new(this, {})
    });
    Object.defineProperty(this, "gridLayout", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: GridLayout.new(this, {})
    });
    Object.defineProperty(this, "_paused", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "autoResize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "_fontHash", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ""
    });
    Object.defineProperty(this, "_isDisposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_resizeSensorDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltips", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_htmlElementContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_htmlEnabledContainers", {
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
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this._settings = settings;
    if (settings.accessible == false) {
      this._a11yD = true;
    }
    if (settings.useSafeResolution == null) {
      settings.useSafeResolution = true;
    }
    let resolution;
    if (settings.useSafeResolution) {
      resolution = getSafeResolution();
    }
    this._renderer = new CanvasRenderer(resolution);
    let dom;
    if (id instanceof HTMLElement) {
      dom = id;
    } else {
      dom = document.getElementById(id);
    }
    each(registry.rootElements, (root) => {
      if (root.dom === dom) {
        throw new Error("You cannot have multiple Roots on the same DOM node");
      }
    });
    this.interfaceColors = InterfaceColors.new(this, {});
    if (dom === null) {
      throw new Error("Could not find HTML element with id `" + id + "`");
    }
    this.dom = dom;
    let inner = document.createElement("div");
    inner.style.position = "relative";
    inner.style.width = "100%";
    inner.style.height = "100%";
    dom.appendChild(inner);
    const tooltipContainerBounds = settings.tooltipContainerBounds;
    if (tooltipContainerBounds) {
      this._tooltipContainerSettings = tooltipContainerBounds;
    }
    this._inner = inner;
    this._updateComputedStyles();
    registry.rootElements.push(this);
  }
  static new(id, settings) {
    const root = new _Root(id, settings, true);
    root._init();
    return root;
  }
  moveDOM(id) {
    let dom;
    if (id instanceof HTMLElement) {
      dom = id;
    } else {
      dom = document.getElementById(id);
    }
    if (dom) {
      while (this.dom.childNodes.length > 0) {
        dom.appendChild(this.dom.childNodes[0]);
      }
      this.dom = dom;
      this._initResizeSensor();
      this.resize();
    }
  }
  _handleLogo() {
    if (this._logo) {
      const w = this.dom.offsetWidth;
      const h = this.dom.offsetHeight;
      if (w <= 150 || h <= 60) {
        this._logo.hide();
      } else {
        this._logo.show();
      }
    }
  }
  _showBranding() {
    if (!this._logo) {
      const logo = this.tooltipContainer.children.push(Container.new(this, {
        interactive: true,
        interactiveChildren: false,
        position: "absolute",
        setStateOnChildren: true,
        paddingTop: 9,
        paddingRight: 9,
        paddingBottom: 9,
        paddingLeft: 9,
        scale: 0.6,
        y: percent(100),
        centerY: p100,
        tooltipText: "Created using amCharts 5",
        tooltipX: p100,
        cursorOverStyle: "pointer",
        background: Rectangle.new(this, {
          fill: color(4671320),
          fillOpacity: 0,
          tooltipY: 5
        })
      }));
      const tooltip = Tooltip.new(this, {
        pointerOrientation: "horizontal",
        paddingTop: 4,
        paddingRight: 7,
        paddingBottom: 4,
        paddingLeft: 7
      });
      tooltip.label.setAll({
        fontSize: 12
      });
      tooltip.get("background").setAll({
        fill: this.interfaceColors.get("background"),
        stroke: this.interfaceColors.get("grid"),
        strokeOpacity: 0.3
      });
      logo.set("tooltip", tooltip);
      logo.events.on("click", () => {
        window.open("https://www.amcharts.com/", "_blank");
      });
      logo.states.create("hover", {});
      const m = logo.children.push(Graphics.new(this, {
        stroke: color(13421772),
        strokeWidth: 3,
        svgPath: "M5 25 L13 25h13.6c3.4 0 6 0 10.3-4.3s5.2-12 8.6-12c3.4 0 4.3 8.6 7.7 8.6M83.4 25H79.8c-3.4 0-6 0-10.3-4.3s-5.2-12-8.6-12-4.3 8.6-7.7 8.6"
      }));
      m.states.create("hover", {
        stroke: color(3976191)
      });
      const a = logo.children.push(Graphics.new(this, {
        stroke: color(8947848),
        strokeWidth: 3,
        svgPath: "M83.4 25h-31C37 25 39.5 4.4 28.4 4.4S18.9 24.2 4.3 25H0"
      }));
      a.states.create("hover", {
        stroke: color(4671320)
      });
      this._logo = logo;
      this._handleLogo();
    }
  }
  _getRealSize() {
    return this.dom.getBoundingClientRect();
  }
  _getCalculatedSize(rect) {
    if (this._settings.calculateSize) {
      return this._settings.calculateSize(rect);
    } else {
      return {
        width: rect.width,
        height: rect.height
      };
    }
  }
  _init() {
    const settings = this._settings;
    if (settings.accessible !== false) {
      if (settings.focusable) {
        this._inner.setAttribute("focusable", "true");
        this._inner.setAttribute("tabindex", this.tabindex + "");
      }
      if (settings.ariaLabel) {
        this._inner.setAttribute("aria-label", settings.ariaLabel);
      }
      if (settings.role) {
        this._inner.setAttribute("role", settings.role);
      }
    }
    const renderer = this._renderer;
    const rect = this._getRealSize();
    const size = this._getCalculatedSize(rect);
    const width = Math.floor(size.width);
    const height = Math.floor(size.height);
    const realWidth = Math.floor(rect.width);
    const realHeight = Math.floor(rect.height);
    const rootContainer = Container.new(this, {
      visible: true,
      width,
      height
    });
    this._rootContainer = rootContainer;
    this._rootContainer._defaultThemes.push(DefaultTheme.new(this));
    const container = rootContainer.children.push(Container.new(this, {
      visible: true,
      width: p100,
      height: p100
    }));
    this.container = container;
    renderer.resize(realWidth, realHeight, width, height);
    this._inner.appendChild(renderer.view);
    this._initResizeSensor();
    const htmlElementContainer = document.createElement("div");
    this._htmlElementContainer = htmlElementContainer;
    htmlElementContainer.className = "am5-html-container";
    htmlElementContainer.style.position = "absolute";
    htmlElementContainer.style.pointerEvents = "none";
    if (!this._tooltipContainerSettings) {
      htmlElementContainer.style.overflow = "hidden";
    }
    this._inner.appendChild(htmlElementContainer);
    if (this._a11yD !== true) {
      const readerAlertElement = document.createElement("div");
      readerAlertElement.className = "am5-reader-container";
      readerAlertElement.setAttribute("role", "alert");
      readerAlertElement.style.position = "absolute";
      readerAlertElement.style.width = "1px";
      readerAlertElement.style.height = "1px";
      readerAlertElement.style.overflow = "hidden";
      readerAlertElement.style.clip = "rect(1px, 1px, 1px, 1px)";
      this._readerAlertElement = readerAlertElement;
      this._inner.appendChild(this._readerAlertElement);
      const focusElementContainer = document.createElement("div");
      focusElementContainer.className = "am5-focus-container";
      focusElementContainer.style.position = "absolute";
      focusElementContainer.style.pointerEvents = "none";
      focusElementContainer.style.top = "0px";
      focusElementContainer.style.left = "0px";
      focusElementContainer.style.overflow = "hidden";
      focusElementContainer.style.width = width + "px";
      focusElementContainer.style.height = height + "px";
      focusElementContainer.setAttribute("role", "graphics-document");
      setInteractive(focusElementContainer, false);
      this._focusElementContainer = focusElementContainer;
      this._inner.appendChild(this._focusElementContainer);
      const tooltipElementContainer = document.createElement("div");
      this._tooltipElementContainer = tooltipElementContainer;
      tooltipElementContainer.className = "am5-tooltip-container";
      this._inner.appendChild(tooltipElementContainer);
      if (supports("keyboardevents")) {
        this._disposers.push(addEventListener(window, "keydown", (ev) => {
          const eventKey = getEventKey(ev);
          if (eventKey == "Shift") {
            this._isShift = true;
          } else if (eventKey == "Tab") {
            this._isShift = ev.shiftKey;
          }
        }));
        this._disposers.push(addEventListener(window, "keyup", (ev) => {
          const eventKey = getEventKey(ev);
          if (eventKey == "Shift") {
            this._isShift = false;
          }
        }));
        this._disposers.push(addEventListener(focusElementContainer, "click", () => {
          const focusedSprite = this._focusedSprite;
          if (focusedSprite) {
            const announceText = focusedSprite.get("clickAnnounceText", "");
            if (announceText !== "") {
              this.readerAlert(announceText);
            }
            const downEvent = renderer.getEvent(new MouseEvent("click"));
            focusedSprite.events.dispatch("click", {
              type: "click",
              originalEvent: downEvent.event,
              point: downEvent.point,
              simulated: true,
              target: focusedSprite
            });
          }
        }));
        this._disposers.push(addEventListener(focusElementContainer, "keydown", (ev) => {
          const focusedSprite = this._focusedSprite;
          if (focusedSprite) {
            if (ev.key == "Escape") {
              blur();
              this._focusedSprite = void 0;
            }
            let dragOffsetX = 0;
            let dragOffsetY = 0;
            const eventKey = getEventKey(ev);
            switch (eventKey) {
              case "Enter":
              case " ":
                const announceText = focusedSprite.get("clickAnnounceText", "");
                if (announceText !== "") {
                  this.readerAlert(announceText);
                }
                if (eventKey == " " && focusedSprite.get("role") != "checkbox") {
                  return;
                }
                ev.preventDefault();
                const downEvent = renderer.getEvent(new MouseEvent("mouse"));
                focusedSprite.events.dispatch("click", {
                  type: "click",
                  originalEvent: downEvent.event,
                  point: downEvent.point,
                  simulated: true,
                  target: focusedSprite
                });
                return;
              case "ArrowLeft":
                dragOffsetX = -6;
                break;
              case "ArrowRight":
                dragOffsetX = 6;
                break;
              case "ArrowUp":
                dragOffsetY = -6;
                break;
              case "ArrowDown":
                dragOffsetY = 6;
                break;
              default:
                return;
            }
            if (dragOffsetX != 0 || dragOffsetY != 0) {
              ev.preventDefault();
              if (!focusedSprite.isDragging()) {
                this._keyboardDragPoint = {
                  x: 0,
                  y: 0
                };
                const downEvent = renderer.getEvent(new MouseEvent("mousedown", {
                  clientX: 0,
                  clientY: 0
                }));
                downEvent.point = {
                  x: 0,
                  y: 0
                };
                if (focusedSprite.events.isEnabled("pointerdown")) {
                  focusedSprite.events.dispatch("pointerdown", {
                    type: "pointerdown",
                    originalEvent: downEvent.event,
                    point: downEvent.point,
                    simulated: true,
                    target: focusedSprite
                  });
                }
              } else {
              }
              const dragPoint = this._keyboardDragPoint;
              dragPoint.x += dragOffsetX;
              dragPoint.y += dragOffsetY;
              const moveEvent = renderer.getEvent(new MouseEvent("mousemove", {
                clientX: dragPoint.x,
                clientY: dragPoint.y
              }), false);
              if (focusedSprite.events.isEnabled("globalpointermove")) {
                focusedSprite.events.dispatch("globalpointermove", {
                  type: "globalpointermove",
                  originalEvent: moveEvent.event,
                  point: moveEvent.point,
                  simulated: true,
                  target: focusedSprite
                });
              }
            }
          }
        }));
        this._disposers.push(addEventListener(focusElementContainer, "keyup", (ev) => {
          if (this._focusedSprite) {
            const focusedSprite = this._focusedSprite;
            const eventKey = getEventKey(ev);
            switch (eventKey) {
              case "ArrowLeft":
              case "ArrowRight":
              case "ArrowUp":
              case "ArrowDown":
                if (focusedSprite.isDragging()) {
                  const dragPoint = this._keyboardDragPoint;
                  const upEvent = renderer.getEvent(new MouseEvent("mouseup", {
                    clientX: dragPoint.x,
                    clientY: dragPoint.y
                  }));
                  if (focusedSprite.events.isEnabled("globalpointerup")) {
                    focusedSprite.events.dispatch("globalpointerup", {
                      type: "globalpointerup",
                      originalEvent: upEvent.event,
                      point: upEvent.point,
                      simulated: true,
                      target: focusedSprite
                    });
                  }
                  this._keyboardDragPoint = void 0;
                  return;
                } else if (focusedSprite.get("focusableGroup")) {
                  const group2 = focusedSprite.get("focusableGroup");
                  const items = this._tabindexes.filter((item) => {
                    return item.get("focusableGroup") == group2 && item.getPrivate("focusable") !== false && item.isVisibleDeep() ? true : false;
                  });
                  let index = items.indexOf(focusedSprite);
                  const lastIndex = items.length - 1;
                  index += eventKey == "ArrowRight" || eventKey == "ArrowDown" ? 1 : -1;
                  if (index < 0) {
                    index = lastIndex;
                  } else if (index > lastIndex) {
                    index = 0;
                  }
                  focus(items[index].getPrivate("focusElement").dom);
                }
                break;
              case "Tab":
                const group = focusedSprite.get("focusableGroup");
                if (group && this._isShift) {
                  this._focusNext(focusedSprite.getPrivate("focusElement").dom, -1, group);
                  return;
                }
                break;
            }
          }
        }));
      }
    }
    this._startTicker();
    this.setThemes([]);
    this._addTooltip();
    if (!this._hasLicense()) {
      this._showBranding();
    }
  }
  _initResizeSensor() {
    if (this._resizeSensorDisposer) {
      this._resizeSensorDisposer.dispose();
    }
    this._resizeSensorDisposer = new ResizeSensor(this.dom, () => {
      if (this.autoResize) {
        this.resize();
      }
    });
    this._disposers.push(this._resizeSensorDisposer);
  }
  /**
   * If automatic resizing of char is disabled (`root.autoResize = false`), it
   * can be resized manually by calling this method.
   */
  resize() {
    const rect = this._getRealSize();
    const size = this._getCalculatedSize(rect);
    const w = Math.floor(size.width);
    const h = Math.floor(size.height);
    if (w > 0 && h > 0) {
      const realWidth = Math.floor(rect.width);
      const realHeight = Math.floor(rect.height);
      const htmlElementContainer = this._htmlElementContainer;
      htmlElementContainer.style.width = w + "px";
      htmlElementContainer.style.height = h + "px";
      if (this._a11yD !== true) {
        const focusElementContainer = this._focusElementContainer;
        focusElementContainer.style.width = w + "px";
        focusElementContainer.style.height = h + "px";
      }
      this._renderer.resize(realWidth, realHeight, w, h);
      const rootContainer = this._rootContainer;
      rootContainer.setPrivate("width", w);
      rootContainer.setPrivate("height", h);
      this._render();
      this._handleLogo();
    }
  }
  _render() {
    this._renderer.render(this._rootContainer._display);
    if (this._focusElementDirty) {
      this._updateCurrentFocus();
      this._focusElementDirty = false;
    }
  }
  _runTickers(currentTime) {
    each(this._tickers, (f) => {
      f(currentTime);
    });
  }
  _runAnimations(currentTime) {
    let running = 0;
    keepIf(this._animations, (animation) => {
      const state = animation._runAnimation(currentTime);
      if (state === AnimationState.Stopped) {
        return false;
      } else if (state === AnimationState.Playing) {
        ++running;
        return true;
      } else {
        return true;
      }
    });
    this._isDirtyAnimation = false;
    return running === 0;
  }
  _runDirties() {
    let allParents = {};
    while (this._isDirtyParents) {
      this._isDirtyParents = false;
      keys(this._dirtyParents).forEach((key) => {
        const parent = this._dirtyParents[key];
        delete this._dirtyParents[key];
        if (!parent.isDisposed()) {
          allParents[parent.uid] = parent;
          parent._prepareChildren();
        }
      });
    }
    keys(allParents).forEach((key) => {
      allParents[key]._updateChildren();
    });
    const objects = [];
    keys(this._dirty).forEach((key) => {
      const entity = this._dirty[key];
      if (entity.isDisposed()) {
        delete this._dirty[entity.uid];
      } else {
        objects.push(entity);
        entity._beforeChanged();
      }
    });
    objects.forEach((entity) => {
      entity._changed();
      delete this._dirty[entity.uid];
      entity._clearDirty();
    });
    this._isDirty = false;
    const depths = {};
    const bounds = [];
    keys(this._dirtyBounds).forEach((key) => {
      const entity = this._dirtyBounds[key];
      delete this._dirtyBounds[key];
      if (!entity.isDisposed()) {
        depths[entity.uid] = entity.depth();
        bounds.push(entity);
      }
    });
    this._positionHTMLElements();
    bounds.sort((x, y) => {
      return compare(depths[y.uid], depths[x.uid]);
    });
    bounds.forEach((entity) => {
      entity._updateBounds();
    });
    const dirtyPositions = this._dirtyPositions;
    keys(dirtyPositions).forEach((key) => {
      const sprite = dirtyPositions[key];
      delete dirtyPositions[key];
      if (!sprite.isDisposed()) {
        sprite._updatePosition();
      }
    });
    objects.forEach((entity) => {
      entity._afterChanged();
    });
  }
  _renderFrame(currentTime) {
    if (this._updateTick) {
      if (this.events.isEnabled("framestarted")) {
        this.events.dispatch("framestarted", {
          type: "framestarted",
          target: this,
          timestamp: currentTime
        });
      }
      this._checkComputedStyles();
      this._runTickers(currentTime);
      const animationDone = this._runAnimations(currentTime);
      this._runDirties();
      this._render();
      this._renderer.resetImageArray();
      this._positionHTMLElements();
      if (this.events.isEnabled("frameended")) {
        this.events.dispatch("frameended", {
          type: "frameended",
          target: this,
          timestamp: currentTime
        });
      }
      return this._tickers.length === 0 && animationDone && !this._isDirtyAnimation && !this._isDirty;
    } else {
      return true;
    }
  }
  _runTicker(currentTime, now) {
    if (!this.isDisposed()) {
      this.animationTime = currentTime;
      const done = this._renderFrame(currentTime);
      if (done) {
        this._ticker = null;
        this.animationTime = null;
      } else {
        if (!this._paused) {
          if (now) {
            this._ticker;
          } else {
            rAF(this.fps, this._ticker);
          }
        }
      }
    }
  }
  _runTickerNow(timeout = 1e4) {
    if (!this.isDisposed()) {
      const endTime = performance.now() + timeout;
      for (; ; ) {
        const currentTime = performance.now();
        if (currentTime >= endTime) {
          this.animationTime = null;
          break;
        }
        this.animationTime = currentTime;
        const done = this._renderFrame(currentTime);
        if (done) {
          this.animationTime = null;
          break;
        }
      }
    }
  }
  _startTicker() {
    if (this._ticker === null) {
      this.animationTime = null;
      this._ticker = (currentTime) => {
        this._runTicker(currentTime);
      };
      rAF(this.fps, this._ticker);
    }
  }
  /**
   * Returns whether the root is updating or not.
   */
  get updateTick() {
    return this._updateTick;
  }
  /**
   * Enables or disables the root updating.
   */
  set updateTick(value) {
    this._updateTick = value;
    if (value) {
      this._startTicker();
    }
  }
  _addDirtyEntity(entity) {
    this._isDirty = true;
    if (this._dirty[entity.uid] === void 0) {
      this._dirty[entity.uid] = entity;
    }
    this._startTicker();
  }
  _addDirtyParent(parent) {
    this._isDirty = true;
    this._isDirtyParents = true;
    if (this._dirtyParents[parent.uid] === void 0) {
      this._dirtyParents[parent.uid] = parent;
    }
    this._startTicker();
  }
  _addDirtyBounds(entity) {
    this._isDirty = true;
    if (this._dirtyBounds[entity.uid] === void 0) {
      this._dirtyBounds[entity.uid] = entity;
    }
    this._startTicker();
  }
  _addDirtyPosition(sprite) {
    this._isDirty = true;
    if (this._dirtyPositions[sprite.uid] === void 0) {
      this._dirtyPositions[sprite.uid] = sprite;
    }
    this._startTicker();
  }
  _addAnimation(animation) {
    this._isDirtyAnimation = true;
    if (this._animations.indexOf(animation) === -1) {
      this._animations.push(animation);
    }
    this._startTicker();
  }
  _markDirty() {
    this._isDirty = true;
  }
  _markDirtyRedraw() {
    this.events.once("frameended", () => {
      this._isDirty = true;
      this._startTicker();
    });
  }
  eachFrame(f) {
    this._tickers.push(f);
    this._startTicker();
    return new Disposer(() => {
      removeFirst(this._tickers, f);
    });
  }
  markDirtyGlobal(container) {
    if (!container) {
      container = this.container;
    }
    container.walkChildren((child) => {
      if (child instanceof Container) {
        this.markDirtyGlobal(child);
      }
      child.markDirty();
      child.markDirtyBounds();
    });
  }
  /**
   * Returns width of the target container, in pixels.
   *
   * @return Width
   */
  width() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).width);
  }
  /**
   * Returns height of the target container, in pixels.
   *
   * @return Height
   */
  height() {
    return Math.floor(this._getCalculatedSize(this._getRealSize()).height);
  }
  /**
   * Disposes root and all the content in it.
   */
  dispose() {
    if (!this._isDisposed) {
      this._isDisposed = true;
      this._rootContainer.dispose();
      this._renderer.dispose();
      this.horizontalLayout.dispose();
      this.verticalLayout.dispose();
      this.interfaceColors.dispose();
      each(this._disposers, (x) => {
        x.dispose();
      });
      if (this._inner) {
        removeElement(this._inner);
      }
      remove(registry.rootElements, this);
    }
  }
  /**
   * Returns `true` if root element is disposed.
   *
   * @return Disposed?
   */
  isDisposed() {
    return this._isDisposed;
  }
  /**
   * Triggers screen reader read out a message.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/accessibility/} for more info
   * @param  text  Alert text
   */
  readerAlert(text) {
    if (this._a11yD !== true) {
      const element = this._readerAlertElement;
      text = stripTags(text);
      if (element.innerHTML == text) {
        element.innerHTML = "";
      }
      element.innerHTML = text;
    }
  }
  /**
   * Sets themes to be used for the chart.
   *
   * @see {@link https://www.amcharts.com/docs/v5/concepts/themes/} for more info
   * @param  themes  A list of themes
   */
  setThemes(themes) {
    this._rootContainer.set("themes", themes);
    const tooltipContainer = this.tooltipContainer;
    if (tooltipContainer) {
      tooltipContainer._applyThemes();
    }
    const interfaceColors = this.interfaceColors;
    if (interfaceColors) {
      interfaceColors._applyThemes();
    }
  }
  _addTooltip() {
    if (!this.tooltipContainer) {
      const tooltipContainerSettings = this._tooltipContainerSettings;
      const tooltipContainer = this._rootContainer.children.push(Container.new(this, {
        position: "absolute",
        isMeasured: false,
        width: p100,
        height: p100,
        layer: tooltipContainerSettings ? 35 : 30,
        layerMargin: tooltipContainerSettings ? tooltipContainerSettings : void 0
      }));
      this.tooltipContainer = tooltipContainer;
      const tooltip = Tooltip.new(this, {});
      this.container.set("tooltip", tooltip);
      tooltip.hide(0);
      this._tooltip = tooltip;
    }
  }
  /**
   * Accesibility
   */
  _registerTabindexOrder(target) {
    if (this._a11yD == true) {
      return;
    }
    if (target.get("focusable")) {
      pushOne(this._tabindexes, target);
    } else {
      remove(this._tabindexes, target);
    }
    this._invalidateTabindexes();
  }
  _unregisterTabindexOrder(target) {
    if (this._a11yD == true) {
      return;
    }
    remove(this._tabindexes, target);
    this._invalidateTabindexes();
  }
  _invalidateTabindexes() {
    if (this._a11yD == true) {
      return;
    }
    this._tabindexes.sort((a, b) => {
      const aindex = a.get("tabindexOrder", 0);
      const bindex = b.get("tabindexOrder", 0);
      if (aindex == bindex) {
        return 0;
      } else if (aindex > bindex) {
        return 1;
      } else {
        return -1;
      }
    });
    const groups = [];
    each(this._tabindexes, (item, index) => {
      if (!item.getPrivate("focusElement")) {
        this._makeFocusElement(index, item);
      } else {
        this._moveFocusElement(index, item);
      }
      const group = item.get("focusableGroup");
      if (group && item.getPrivate("focusable") !== false) {
        if (groups.indexOf(group) !== -1) {
          item.getPrivate("focusElement").dom.setAttribute("tabindex", "-1");
        } else {
          groups.push(group);
        }
      }
    });
  }
  _updateCurrentFocus() {
    if (this._a11yD == true) {
      return;
    }
    if (this._focusedSprite) {
      this._decorateFocusElement(this._focusedSprite);
      this._positionFocusElement(this._focusedSprite);
    }
  }
  _decorateFocusElement(target, focusElement) {
    if (this._a11yD == true) {
      return;
    }
    if (!focusElement) {
      focusElement = target.getPrivate("focusElement").dom;
    }
    if (!focusElement) {
      return;
    }
    const role = target.get("role");
    if (role) {
      focusElement.setAttribute("role", role);
    } else {
      focusElement.removeAttribute("role");
    }
    const ariaLabel = target.get("ariaLabel");
    if (ariaLabel) {
      const label = populateString(target, ariaLabel);
      focusElement.setAttribute("aria-label", label);
    } else {
      focusElement.removeAttribute("aria-label");
    }
    const ariaLive = target.get("ariaLive");
    if (ariaLive) {
      focusElement.setAttribute("aria-live", ariaLive);
    } else {
      focusElement.removeAttribute("aria-live");
    }
    const ariaChecked = target.get("ariaChecked");
    if (ariaChecked != null && role && ["checkbox", "option", "radio", "menuitemcheckbox", "menuitemradio", "treeitem"].indexOf(role) !== -1) {
      focusElement.setAttribute("aria-checked", ariaChecked ? "true" : "false");
    } else {
      focusElement.removeAttribute("aria-checked");
    }
    const ariaCurrent = target.get("ariaCurrent");
    if (ariaCurrent != null) {
      focusElement.setAttribute("aria-current", ariaCurrent);
    } else {
      focusElement.removeAttribute("aria-current");
    }
    const ariaSelected = target.get("ariaSelected");
    if (ariaSelected != null && role && ["gridcell", "option", "row", "tab", "columnheader", "rowheader", "treeitem"].indexOf(role) !== -1) {
      focusElement.setAttribute("aria-selected", ariaSelected ? "true" : "false");
    } else {
      focusElement.removeAttribute("aria-selected");
    }
    if (target.get("ariaHidden")) {
      focusElement.setAttribute("aria-hidden", "true");
    } else {
      focusElement.removeAttribute("aria-hidden");
    }
    const ariaOrientation = target.get("ariaOrientation");
    if (ariaOrientation) {
      focusElement.setAttribute("aria-orientation", ariaOrientation);
    } else {
      focusElement.removeAttribute("aria-orientation");
    }
    const ariaValueNow = target.get("ariaValueNow");
    if (ariaValueNow) {
      focusElement.setAttribute("aria-valuenow", ariaValueNow);
    } else {
      focusElement.removeAttribute("aria-valuenow");
    }
    const ariaValueMin = target.get("ariaValueMin");
    if (ariaValueMin) {
      focusElement.setAttribute("aria-valuemin", ariaValueMin);
    } else {
      focusElement.removeAttribute("aria-valuemin");
    }
    const ariaValueMax = target.get("ariaValueMax");
    if (ariaValueMax) {
      focusElement.setAttribute("aria-valuemax", ariaValueMax);
    } else {
      focusElement.removeAttribute("aria-valuemax");
    }
    const ariaValueText = target.get("ariaValueText");
    if (ariaValueText) {
      focusElement.setAttribute("aria-valuetext", ariaValueText);
    } else {
      focusElement.removeAttribute("aria-valuetext");
    }
    const ariaControls = target.get("ariaControls");
    if (ariaControls) {
      focusElement.setAttribute("aria-controls", ariaControls);
    } else {
      focusElement.removeAttribute("aria-controls");
    }
    if (target.get("visible") && target.get("opacity") !== 0 && target.get("role") != "tooltip" && !target.isHidden() && target.getPrivate("focusable") !== false && (target.height() || target.width())) {
      if (focusElement.getAttribute("tabindex") != "-1") {
        focusElement.setAttribute("tabindex", "" + this.tabindex);
      }
      focusElement.removeAttribute("aria-hidden");
    } else {
      focusElement.removeAttribute("tabindex");
      focusElement.setAttribute("aria-hidden", "true");
    }
  }
  _makeFocusElement(index, target) {
    if (target.getPrivate("focusElement") || this._a11yD == true) {
      return;
    }
    const focusElement = document.createElement("div");
    if (target.get("role") != "tooltip") {
      focusElement.tabIndex = this.tabindex;
    }
    focusElement.style.position = "absolute";
    setInteractive(focusElement, false);
    const disposers = [];
    target.setPrivate("focusElement", {
      dom: focusElement,
      disposers
    });
    this._decorateFocusElement(target);
    disposers.push(addEventListener(focusElement, "focus", (ev) => {
      this._handleFocus(ev);
    }));
    disposers.push(addEventListener(focusElement, "blur", (ev) => {
      this._handleBlur(ev);
    }));
    this._moveFocusElement(index, target);
  }
  _removeFocusElement(target) {
    if (this._a11yD == true) {
      return;
    }
    remove(this._tabindexes, target);
    const focusElement = target.getPrivate("focusElement");
    if (focusElement) {
      const container = this._focusElementContainer;
      container.removeChild(focusElement.dom);
      each(focusElement.disposers, (x) => {
        x.dispose();
      });
    }
  }
  _hideFocusElement(target) {
    if (this._a11yD == true) {
      return;
    }
    const focusElement = target.getPrivate("focusElement");
    focusElement.dom.style.display = "none";
  }
  _moveFocusElement(index, target) {
    if (this._a11yD == true) {
      return;
    }
    const container = this._focusElementContainer;
    const focusElement = target.getPrivate("focusElement").dom;
    if (focusElement === this._focusElementContainer.children[index]) {
      return;
    }
    const next = this._focusElementContainer.children[index + 1];
    if (next) {
      container.insertBefore(focusElement, next);
    } else {
      container.append(focusElement);
    }
  }
  _positionFocusElement(target) {
    if (this._a11yD == true || target == void 0) {
      return;
    }
    const bounds = target.globalBounds();
    let width = bounds.right == bounds.left ? target.width() : bounds.right - bounds.left;
    let height = bounds.top == bounds.bottom ? target.height() : bounds.bottom - bounds.top;
    const padding = this._settings.focusPadding !== void 0 ? this._settings.focusPadding : 2;
    let x = bounds.left - padding;
    let y = bounds.top - padding;
    if (width < 0) {
      x += width;
      width = Math.abs(width);
    }
    if (height < 0) {
      y += height;
      height = Math.abs(height);
    }
    const focusElement = target.getPrivate("focusElement").dom;
    focusElement.style.top = y + "px";
    focusElement.style.left = x + "px";
    focusElement.style.width = width + padding * 2 + "px";
    focusElement.style.height = height + padding * 2 + "px";
  }
  _getSpriteByFocusElement(target) {
    let found;
    eachContinue(this._tabindexes, (item, _index) => {
      if (item.getPrivate("focusElement").dom === target) {
        found = item;
        return false;
      }
      return true;
    });
    return found;
  }
  _handleFocus(ev) {
    if (this._a11yD == true) {
      return;
    }
    const focused = this._getSpriteByFocusElement(ev.target);
    if (!focused) {
      return;
    }
    if (!focused.isVisibleDeep()) {
      this._focusNext(ev.target, this._isShift ? -1 : 1);
      return;
    }
    this._positionFocusElement(focused);
    this._focusedSprite = focused;
    if (focused.events.isEnabled("focus")) {
      focused.events.dispatch("focus", {
        type: "focus",
        originalEvent: ev,
        target: focused
      });
    }
  }
  _focusNext(el, direction, group) {
    if (this._a11yD == true) {
      return;
    }
    const focusableElements = Array.from(document.querySelectorAll([
      "a[href]",
      "area[href]",
      "button:not([disabled])",
      "details",
      "input:not([disabled])",
      "iframe:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      '[contentEditable=""]',
      '[contentEditable="true"]',
      '[contentEditable="TRUE"]',
      '[tabindex]:not([tabindex^="-"])'
      //':not([disabled])'
    ].join(",")));
    let index = focusableElements.indexOf(el) + direction;
    if (index < 0) {
      index = focusableElements.length - 1;
    } else if (index >= focusableElements.length) {
      index = 0;
    }
    const targetElement = focusableElements[index];
    if (group && direction == -1) {
      const target = this._getSpriteByFocusElement(targetElement);
      if (target && target.get("focusableGroup") == group) {
        this._focusNext(targetElement, direction);
        return;
      }
    }
    targetElement.focus();
  }
  _handleBlur(ev) {
    if (this._a11yD == true) {
      return;
    }
    const focused = this._focusedSprite;
    if (focused && !focused.isDisposed() && focused.events.isEnabled("blur")) {
      focused.events.dispatch("blur", {
        type: "blur",
        originalEvent: ev,
        target: focused
      });
    }
    this._focusedSprite = void 0;
  }
  /**
   * @ignore
   */
  updateTooltip(target) {
    if (this._a11yD == true) {
      return;
    }
    const text = stripTags(target._getText());
    let tooltipElement = target.getPrivate("tooltipElement");
    if (target.get("role") == "tooltip" && text != "") {
      if (!tooltipElement) {
        tooltipElement = this._makeTooltipElement(target);
      }
      if (tooltipElement.innerHTML != text) {
        tooltipElement.innerHTML = text;
      }
      tooltipElement.setAttribute("aria-hidden", target.isVisibleDeep() ? "false" : "true");
    } else if (tooltipElement) {
      tooltipElement.remove();
      target.removePrivate("tooltipElement");
    }
  }
  _makeTooltipElement(target) {
    const container = this._tooltipElementContainer;
    const tooltipElement = document.createElement("div");
    tooltipElement.style.position = "absolute";
    tooltipElement.style.width = "1px";
    tooltipElement.style.height = "1px";
    tooltipElement.style.overflow = "hidden";
    tooltipElement.style.clip = "rect(1px, 1px, 1px, 1px)";
    setInteractive(tooltipElement, false);
    this._decorateFocusElement(target, tooltipElement);
    container.append(tooltipElement);
    target.setPrivate("tooltipElement", tooltipElement);
    return tooltipElement;
  }
  _removeTooltipElement(target) {
    if (this._a11yD == true) {
      return;
    }
    const tooltipElement = target.getPrivate("tooltipElement");
    if (tooltipElement) {
      const parent = tooltipElement.parentElement;
      if (parent) {
        parent.removeChild(tooltipElement);
      }
    }
  }
  _invalidateAccessibility(target) {
    if (this._a11yD == true) {
      return;
    }
    this._focusElementDirty = true;
    const focusElement = target.getPrivate("focusElement");
    if (target.get("focusable")) {
      if (focusElement) {
        this._decorateFocusElement(target);
        this._positionFocusElement(target);
      }
    } else if (focusElement) {
      this._removeFocusElement(target);
    }
  }
  /**
   * Returns `true` if `target` is currently focused.
   *
   * @param   target  Target
   * @return          Focused?
   */
  focused(target) {
    return this._focusedSprite === target;
  }
  /**
   * Converts document coordinates to coordinates withing root element.
   *
   * @param   point  Document point
   * @return         Root point
   */
  documentPointToRoot(point) {
    const rect = this._getRealSize();
    const size = this._getCalculatedSize(rect);
    const scaleWidth = size.width / rect.width;
    const scaleHeight = size.height / rect.height;
    return {
      x: (point.x - rect.left) * scaleWidth,
      y: (point.y - rect.top) * scaleHeight
    };
  }
  /**
   * Converts root coordinates to document
   *
   * @param   point  Document point
   * @return         Root point
   */
  rootPointToDocument(point) {
    const rect = this._getRealSize();
    const size = this._getCalculatedSize(rect);
    const scaleWidth = size.width / rect.width;
    const scaleHeight = size.height / rect.height;
    return {
      x: point.x / scaleWidth + rect.left,
      y: point.y / scaleHeight + rect.top
    };
  }
  /**
   * @ignore
   */
  addDisposer(disposer) {
    this._disposers.push(disposer);
    return disposer;
  }
  _updateComputedStyles() {
    const styles = window.getComputedStyle(this.dom);
    let fontHash = "";
    each2(styles, (key, val) => {
      if (isString(key) && key.match(/^font/)) {
        fontHash += val;
      }
    });
    const changed = fontHash != this._fontHash;
    if (changed) {
      this._fontHash = fontHash;
    }
    return changed;
  }
  _checkComputedStyles() {
    if (this._updateComputedStyles()) {
      this._invalidateLabelBounds(this.container);
    }
  }
  _invalidateLabelBounds(target) {
    if (target instanceof Container) {
      target.children.each((child) => {
        this._invalidateLabelBounds(child);
      });
    } else if (target instanceof Text) {
      target.markDirtyBounds();
    }
  }
  /**
   * To all the clever heads out there. Yes, we did not make any attempts to
   * scramble this.
   *
   * This is a part of a tool meant for our users to manage their commercial
   * licenses for removal of amCharts branding from charts.
   *
   * The only legit way to do so is to purchase a commercial license for amCharts:
   * https://www.amcharts.com/online-store/
   *
   * Removing or altering this code, or disabling amCharts branding in any other
   * way is against the license and thus illegal.
   */
  _hasLicense() {
    for (let i = 0; i < registry.licenses.length; i++) {
      if (registry.licenses[i].match(/^AM5C.{5,}/i)) {
        return true;
      }
    }
    return false;
  }
  _licenseApplied() {
    if (this._logo) {
      this._logo.set("forceHidden", true);
    }
  }
  /**
   * @ignore
   */
  get debugGhostView() {
    return this._renderer.debugGhostView;
  }
  /**
   * @ignore
   */
  set debugGhostView(value) {
    this._renderer.debugGhostView = value;
  }
  /**
   * Set this to `true` if you need chart to require first a tap onto it before
   * touch gesture related functionality like zoom/pan is turned on.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/root-element/#Touch_related_options} for more info
   * @default false
   * @since 5.2.9
   * @param  value  Needs a tap to activate touch functions
   */
  set tapToActivate(value) {
    this._renderer.tapToActivate = value;
  }
  /**
   * @return Needs a tap to activate touch functions
   */
  get tapToActivate() {
    return this._renderer.tapToActivate;
  }
  /**
   * If `tapToActivate` is set to `true`, this setting will determine number
   * of milliseconds the chart will stay "active", before releasing the
   * controls back to the page.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/root-element/#Touch_related_options} for more info
   * @default 3000
   * @since 5.2.9
   * @param  value  Timeout
   */
  set tapToActivateTimeout(value) {
    this._renderer.tapToActivateTimeout = value;
  }
  /**
   * @return Timeout
   */
  get tapToActivateTimeout() {
    return this._renderer.tapToActivateTimeout;
  }
  _makeHTMLElement(target) {
    const container = this._htmlElementContainer;
    const htmlElement = document.createElement("div");
    target.setPrivate("htmlElement", htmlElement);
    let needWrapper = false;
    let wrapperTarget;
    target._walkParents((parent) => {
      if (parent.get("verticalScrollbar")) {
        needWrapper = true;
        wrapperTarget = parent;
        return false;
      }
    });
    let htmlElementWrapper;
    if (needWrapper) {
      htmlElementWrapper = document.createElement("div");
      target.setPrivate("htmlElementWrapper", htmlElementWrapper);
      target.setPrivate("wrapperContainer", wrapperTarget);
      htmlElementWrapper.style.position = "absolute";
      htmlElementWrapper.style.overflow = "hidden";
      htmlElementWrapper.style.boxSizing = "border-box";
      htmlElementWrapper.style.top = "0px";
      htmlElementWrapper.style.left = "0px";
      htmlElementWrapper.style.width = "100%";
      htmlElementWrapper.style.height = "100%";
      wrapperTarget.events.on("boundschanged", () => {
        this._positionHTMLElement(target);
      });
    }
    htmlElement.style.position = "absolute";
    htmlElement.style.overflow = "auto";
    htmlElement.style.boxSizing = "border-box";
    setInteractive(htmlElement, target.get("interactive", false));
    if (target.events.isEnabled("click")) {
      setInteractive(htmlElement, true);
      this._disposers.push(addEventListener(htmlElement, "click", (ev) => {
        const downEvent = this._renderer.getEvent(ev);
        target.events.dispatch("click", {
          type: "click",
          originalEvent: downEvent.event,
          point: downEvent.point,
          simulated: false,
          target
        });
      }));
    }
    this._positionHTMLElement(target);
    if (needWrapper) {
      htmlElementWrapper.append(htmlElement);
      container.append(htmlElementWrapper);
    } else {
      container.append(htmlElement);
    }
    pushOne(this._htmlEnabledContainers, target);
    return htmlElement;
  }
  _positionHTMLElements() {
    each(this._htmlEnabledContainers, (target) => {
      this._positionHTMLElement(target);
    });
  }
  _positionHTMLElement(target) {
    const htmlElementWrapper = target.getPrivate("htmlElementWrapper");
    if (htmlElementWrapper) {
      const wrapperTarget = target.getPrivate("wrapperContainer");
      if (wrapperTarget) {
        const bounds = wrapperTarget.globalBounds();
        htmlElementWrapper.style.clipPath = "rect(" + bounds.top + "px " + bounds.right + "px " + bounds.bottom + "px " + bounds.left + "px)";
      }
    }
    const htmlElement = target.getPrivate("htmlElement");
    if (htmlElement) {
      const visualSettings = ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "minWidth", "minHeight", "maxWidth", "maxHeight"];
      each(visualSettings, (setting) => {
        const value = target.get(setting);
        if (value) {
          htmlElement.style[setting] = value + "px";
        } else {
          htmlElement.style[setting] = "";
        }
      });
      const strtingSettings = ["fontFamily", "fontSize", "fontStyle", "fontWeight", "fontStyle", "fontVariant", "textDecoration"];
      each(strtingSettings, (setting) => {
        const value = target.get(setting);
        if (value) {
          if (setting == "fontSize" && !isString(value)) {
            htmlElement.style[setting] = value + "px";
          } else {
            htmlElement.style[setting] = value + "";
          }
        } else {
          htmlElement.style[setting] = "";
        }
      });
      const scale = target.compositeScale() || 1;
      const rotation = target.compositeRotation() || 0;
      htmlElement.style.transform = "";
      htmlElement.style.transformOrigin = "";
      const opacity = target.compositeOpacity();
      setTimeout(() => {
        htmlElement.style.opacity = opacity + "";
      }, 10);
      const visible = target.isVisibleDeep();
      if (visible) {
        htmlElement.style.display = "block";
      }
      let pos = {
        x: target.x() + target.get("dx", 0),
        y: target.y() + target.get("dy", 0)
      };
      if (target.parent) {
        pos = target.parent.toGlobal(pos);
      }
      htmlElement.style.top = pos.y + "px";
      htmlElement.style.left = pos.x + "px";
      const width = target.get("width");
      const height = target.get("height");
      let w = 0;
      let h = 0;
      if (width) {
        w = target.width();
      }
      if (height) {
        h = target.height();
      }
      if (!width || !height) {
        htmlElement.style.position = "fixed";
        htmlElement.style.width = "";
        htmlElement.style.height = "";
        const bbox = htmlElement.getBoundingClientRect();
        htmlElement.style.position = "absolute";
        if (!width) w = bbox.width;
        if (!height) h = bbox.height;
        let lw = w / scale;
        let lh = h / scale;
        let cx = target.get("centerX", 0);
        let cy = target.get("centerY", 0);
        let ll = 0;
        let lr = 0;
        let lt = 0;
        let lb = 0;
        if (cx instanceof Percent) {
          ll = -cx.value * lw;
          lr = (1 - cx.value) * lw;
        } else {
          ll = -cx;
          lr = lw - cx;
        }
        if (cy instanceof Percent) {
          lt = -cy.value * lh;
          lb = (1 - cy.value) * lh;
        } else {
          lt = -cy;
          lb = lh - cy;
        }
        target._localBounds = {
          left: ll,
          right: lr,
          top: lt,
          bottom: lb
        };
        let previousBounds = target._adjustedLocalBounds;
        let newBounds = target._display.getAdjustedBounds(target._localBounds);
        target._adjustedLocalBounds = newBounds;
        if (previousBounds.left !== newBounds.left || previousBounds.right !== newBounds.right || previousBounds.top !== newBounds.top || previousBounds.bottom !== newBounds.bottom) {
          target.markDirtyBounds();
        }
      }
      if (w > 0) {
        htmlElement.style.minWidth = w + "px";
      }
      if (h > 0) {
        htmlElement.style.minHeight = h + "px";
      }
      if (!visible || opacity == 0) {
        htmlElement.style.display = "none";
      }
      const x = target.get("centerX", 0);
      const originX = isPercent(x) ? x.percent + "%" : x + "px";
      const y = target.get("centerY", 0);
      const originY = isPercent(y) ? y.percent + "%" : y + "px";
      if (x || y) {
        htmlElement.style.transform = "translate(-" + originX + ", -" + originY + ")" + htmlElement.style.transform;
      }
      if (scale != 1) {
        htmlElement.style.transform += "scale(" + scale + ")";
      }
      if (rotation != 0) {
        htmlElement.style.transform += " rotate(" + rotation + "deg)";
      }
      if (htmlElement.style.transform != "") {
        htmlElement.style.transformOrigin = originX + " " + originY;
      }
    }
  }
  _setHTMLContent(target, html) {
    let htmlElement = target.getPrivate("htmlElement");
    if (!htmlElement) {
      htmlElement = this._makeHTMLElement(target);
    }
    if (htmlElement.innerHTML != html) {
      htmlElement.innerHTML = html;
    }
  }
  _removeHTMLContent(target) {
    const htmlElementWrapper = target.getPrivate("htmlElementWrapper");
    const htmlElement = target.getPrivate("htmlElement");
    if (htmlElementWrapper) {
      this._htmlElementContainer.removeChild(htmlElementWrapper);
      target.removePrivate("htmlElement");
      target.removePrivate("htmlElementWrapper");
      target.removePrivate("wrapperContainer");
    } else if (htmlElement) {
      this._htmlElementContainer.removeChild(htmlElement);
      target.removePrivate("htmlElement");
      target.removePrivate("wrapperContainer");
    }
    remove(this._htmlEnabledContainers, target);
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Modal.js
var rules;
function modalCSS(element, root, _prefix) {
  const ic = root.interfaceColors;
  const active = ic.get("secondaryButton").toCSS();
  const text = ic.get("text").toCSS();
  const shadow = ic.get("alternativeBackground").toCSS(0.45);
  if (!rules) {
    const disposer = new MultiDisposer([new StyleRule(element, ".am5-modal", {
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "z-index": "100000",
      "top": "0",
      "left": "0"
    }, root.nonce), new StyleRule(element, ".am5-modal-curtain", {
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "background": ic.get("background").toCSS(0.5),
      "z-index": "100"
    }, root.nonce), new StyleRule(element, ".am5-modal-wrapper", {
      "top": "0",
      "left": "0",
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "text-align": "center",
      "white-space": "nowrap",
      "background": ic.get("background").toCSS(0.5),
      "z-index": "101"
    }, root.nonce), new StyleRule(element, ".am5-modal-wrapper:before", {
      "content": "''",
      "display": "inline-block",
      "height": "100%",
      "vertical-align": "middle",
      "margin-right": "-0.25em"
    }, root.nonce), new StyleRule(element, ".am5-modal-content", {
      "display": "inline-block",
      "padding": "1.2em",
      "vertical-align": "middle",
      "text-align": "start",
      "white-space": "normal",
      "background": ic.get("background").toCSS(),
      //"border": "1px solid " + ic.get("alternativeBackground")!.toCSS(),
      "border-radius": "4px",
      "-webkit-box-shadow": "0px 0px 36px 0px " + shadow,
      "box-shadow": "0px 0px 36px 0px " + shadow,
      "color": text
    }, root.nonce), new StyleRule(element, ".am5-modal-content h1", {
      "font-size": "1em",
      "margin": "0 0 0.5em 0"
    }, root.nonce), new StyleRule(element, ".am5-modal-table", {
      "display": "table",
      "margin": "1em 0"
    }, root.nonce), new StyleRule(element, ".am5-modal-table-row", {
      "display": "table-row"
    }, root.nonce), new StyleRule(element, ".am5-modal-table-heading", {
      "display": "table-heading",
      "padding": "3px 10px 3px 0"
    }, root.nonce), new StyleRule(element, ".am5-modal-table-cell", {
      "display": "table-cell",
      "padding": "3px 0 3px 0"
    }, root.nonce), new StyleRule(element, ".am5-modal-table-cell > *", {
      "vertical-align": "middle"
    }, root.nonce), new StyleRule(element, ".am5-modal-content input[type=text], .am5-modal-content input[type=number], .am5-modal-content select", {
      "border": "1px solid " + active,
      "border-radius": "4px",
      "padding": "3px 5px",
      "margin": "2px"
    }, root.nonce), new StyleRule(element, ".am5-modal-input-narrow", {
      "width": "50px"
    }, root.nonce), new StyleRule(element, ".am5-modal-button", {
      "font-weight": "400",
      "color": ic.get("secondaryButtonText").toCSS(),
      "line-height": "1.5",
      "text-align": "center",
      "text-decoration": "none",
      "vertical-align": "middle",
      "cursor": "pointer",
      "padding": "0.2em 0.8em",
      "font-size": "1em",
      "border-radius": "0.25em",
      "margin": "0 0.25em 0 0",
      "border": "1px solid " + ic.get("secondaryButtonStroke").toCSS(),
      "background": ic.get("secondaryButton").toCSS()
    }, root.nonce), new StyleRule(element, ".am5-modal-button:hover", {
      "background": ic.get("secondaryButtonHover").toCSS()
    }, root.nonce), new StyleRule(element, ".am5-modal-button.am5-modal-primary", {
      "color": ic.get("primaryButtonText").toCSS(),
      "border": "1px solid " + ic.get("primaryButtonStroke").toCSS(),
      "background": ic.get("primaryButton").toCSS()
    }, root.nonce), new StyleRule(element, ".am5-modal-button.am5-modal-primary:hover", {
      "background": ic.get("primaryButtonHover").toCSS()
    }, root.nonce)]);
    rules = new CounterDisposer(() => {
      rules = void 0;
      disposer.dispose();
    });
  }
  return rules.increment();
}
var Modal = class extends Entity {
  //protected _currentPass: number = 0;
  _afterNew() {
    super._afterNewApplyThemes();
    this._setRawDefault("deactivateRoot", true);
    modalCSS(getShadowRoot(this._root.dom), this._root);
    const container = document.createElement("div");
    container.className = "am5-modal";
    container.style.display = "none";
    this.root._inner.appendChild(container);
    this.setPrivate("container", container);
    const curtain = document.createElement("div");
    curtain.className = "am5-modal-curtain";
    container.appendChild(curtain);
    this.setPrivate("curtain", curtain);
    this._disposers.push(addEventListener(curtain, "click", () => {
      this.cancel();
    }));
    const wrapper = document.createElement("div");
    wrapper.className = "am5-modal-wrapper";
    container.appendChild(wrapper);
    this.setPrivate("wrapper", wrapper);
    const content = document.createElement("div");
    content.className = "am5-modal-content";
    wrapper.appendChild(content);
    this.setPrivate("content", content);
    const html = this.get("content");
    if (html) {
      content.innerHTML = html;
    }
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        if (this.isOpen() && getEventKey(ev) == "Escape") {
          this.cancel();
        }
      }));
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("content")) {
      this.getPrivate("content").innerHTML = this.get("content", "");
    }
  }
  /**
   * Returns `true` if modal is currently open.
   *
   * @return  Modal open?
   */
  isOpen() {
    return this.getPrivate("container").style.display != "none";
  }
  /**
   * Opens modal.
   */
  open() {
    this.getPrivate("container").style.display = "block";
    if (this.get("deactivateRoot")) {
      this.setTimeout(() => {
        this._root._renderer.interactionsEnabled = false;
      }, 10);
    }
    this.events.dispatch("opened", {
      type: "opened",
      target: this
    });
  }
  /**
   * Closes modal.
   */
  close() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("closed", {
      type: "closed",
      target: this
    });
  }
  /**
   * Closes modal and invokes `cancelled` event.
   */
  cancel() {
    this.getPrivate("container").style.display = "none";
    if (this.get("deactivateRoot")) {
      this._root._renderer.interactionsEnabled = true;
    }
    this.events.dispatch("cancelled", {
      type: "cancelled",
      target: this
    });
  }
  /**
   * Disposes modal.
   */
  _dispose() {
    super._dispose();
    const container = this.getPrivate("container");
    if (container.parentElement) {
      container.parentElement.removeChild(container);
    }
  }
};
Object.defineProperty(Modal, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Modal"
});
Object.defineProperty(Modal, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Modal.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Bullet.js
var Bullet = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_index", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNewApplyThemes();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        sprite.setAll({
          position: "absolute",
          role: "figure"
        });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("locationX") || this.isDirty("locationY")) {
      if (this.series) {
        this.series._positionBullet(this);
      }
    }
  }
};
Object.defineProperty(Bullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Bullet"
});
Object.defineProperty(Bullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Bullet.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Circle.js
var Circle = class extends Graphics {
  _afterNew() {
    super._afterNew();
    this._display.isMeasured = true;
    this.setPrivateRaw("trustBounds", true);
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawCircle(0, 0, Math.abs(this.get("radius", 10)));
    }
  }
};
Object.defineProperty(Circle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Circle"
});
Object.defineProperty(Circle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Circle.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Polygon.js
var Polygon = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "morphAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("coordinates")) {
      const points = [];
      const coordinates = this.get("coordinates");
      if (coordinates) {
        each(coordinates, (coord) => {
          points.push({
            x: coord[0],
            y: coord[1]
          });
        });
      }
      this.set("points", points);
    }
    if (this.isPrivateDirty("points")) {
      this._clear = true;
    }
    if (this.isDirty("points")) {
      this._clear = true;
      const points = this.get("points");
      const prevPoints = this._prevSettings.points;
      if (prevPoints) {
        if (points) {
          let copy3 = copy(points);
          let prevCopy = copy(prevPoints);
          let cl = copy3.length;
          let pl = prevCopy.length;
          if (cl > pl) {
            let newCopy = copy(copy3);
            for (let i = 0; i < cl; i++) {
              let index = Math.floor(i / cl * pl);
              newCopy[i] = {
                x: prevCopy[index].x,
                y: prevCopy[index].y
              };
            }
            prevCopy = newCopy;
          } else if (pl > cl) {
            let newCopy = copy(prevCopy);
            for (let i = 0; i < pl; i++) {
              let index = Math.floor(i / pl * cl);
              newCopy[i] = {
                x: copy3[index].x,
                y: copy3[index].y
              };
            }
            copy3 = newCopy;
          }
          this.setPrivateRaw("previousPoints", prevCopy);
          this.setPrivateRaw("points", copy3);
          this.morphAnimation = this.animatePrivate({
            key: "morphProgress",
            from: 0,
            to: 1,
            duration: this.get("animationDuration", 0),
            easing: this.get("animationEasing")
          });
          this._root.events.once("frameended", () => {
            this._markDirtyPrivateKey("morphProgress");
          });
        }
      } else {
        this.setPrivateRaw("previousPoints", points);
        this.setPrivateRaw("points", points);
      }
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      if (points) {
        for (let i = 1, len = points.length; i < len; i++) {
          const point = points[i];
          minX = Math.min(minX, point.x);
          maxX = Math.max(maxX, point.x);
          minY = Math.min(minY, point.y);
          maxY = Math.max(maxY, point.y);
        }
      }
      this.setPrivate("minX", minX);
      this.setPrivate("maxX", maxX);
      this.setPrivate("minY", minY);
      this.setPrivate("maxY", minY);
    }
    if (this.isPrivateDirty("morphProgress")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._draw();
    }
  }
  _draw() {
    const previousPoints = this.getPrivate("previousPoints");
    const points = this.getPrivate("points");
    const morphProgress = this.getPrivate("morphProgress", 1);
    if (points && previousPoints) {
      const first = points[0];
      const prevFirst = previousPoints[0];
      if (first) {
        this._display.moveTo(prevFirst.x + (first.x - prevFirst.x) * morphProgress, prevFirst.y + (first.y - prevFirst.y) * morphProgress);
      }
      for (let i = 1, len = points.length; i < len; i++) {
        const point = points[i];
        const prevPoint = previousPoints[i];
        this._display.lineTo(prevPoint.x + (point.x - prevPoint.x) * morphProgress, prevPoint.y + (point.y - prevPoint.y) * morphProgress);
      }
      this._display.closePath();
    }
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Polygon, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Polygon"
});
Object.defineProperty(Polygon, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Polygon.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Ellipse.js
var Ellipse = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radiusX") || this.isDirty("radiusY") || this.isDirty("rotation")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      this._display.drawEllipse(0, 0, Math.abs(this.get("radiusX")), Math.abs(this.get("radiusY")));
    }
  }
};
Object.defineProperty(Ellipse, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Ellipse"
});
Object.defineProperty(Ellipse, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Ellipse.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Star.js
var Star = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius") || this.isDirty("innerRadius") || this.isDirty("spikes")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      const display = this._display;
      const r = this.get("radius", 0);
      const ir = relativeToValue(this.get("innerRadius", 0), r);
      const spikes = this.get("spikes", 0);
      const step = Math.PI / spikes;
      let angle = Math.PI / 2 * 3;
      display.moveTo(0, -r);
      for (let i = 0; i < spikes; i++) {
        display.lineTo(Math.cos(angle) * r, Math.sin(angle) * r);
        angle += step;
        display.lineTo(Math.cos(angle) * ir, Math.sin(angle) * ir);
        angle += step;
      }
      display.lineTo(0, -r);
      display.closePath();
    }
  }
};
Object.defineProperty(Star, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Star"
});
Object.defineProperty(Star, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Star.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/ZoomableContainer.js
var ZoomableContainer = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_za", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_txa", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tya", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_movePoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_downScale", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_downX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_pinchDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "contents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        x: 0,
        y: 0,
        draggable: true,
        background: Rectangle.new(this._root, {
          fill: color(16777215),
          fillOpacity: 0
        })
      }))
    });
    Object.defineProperty(this, "_wheelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    const events = this.contents.events;
    this._disposers.push(events.on("pointerdown", (event) => {
      this._handleThisDown(event);
    }));
    this._disposers.push(events.on("globalpointerup", (event) => {
      this._handleThisUp(event);
    }));
    this._disposers.push(events.on("globalpointermove", (event) => {
      this._handleThisMove(event);
    }));
    const bg = this.contents.get("background");
    if (bg) {
      bg.adapters.add("width", (width) => {
        return Number(width) * 20;
      });
      bg.adapters.add("height", (height) => {
        return Number(height) * 20;
      });
      bg.adapters.add("x", (x) => {
        return Number(x) - bg.width() / 2;
      });
      bg.adapters.add("y", (y) => {
        return Number(y) - bg.height() / 2;
      });
    }
    const contents = this.contents;
    contents.adapters.add("x", (x) => {
      const scale = contents.get("scale", 1);
      if (isNumber(x) && scale >= 1) {
        let maxPanOut = this.get("maxPanOut", 0.4);
        let w = contents.width();
        x = Math.min(w * maxPanOut, x);
        x = Math.max(this.width() - w * scale * (1 + maxPanOut), x);
      }
      return x;
    });
    contents.adapters.add("y", (y) => {
      const scale = contents.get("scale", 1);
      if (isNumber(y) && scale >= 1) {
        let maxPanOut = this.get("maxPanOut", 0.4);
        let h = contents.height();
        y = Math.min(h * maxPanOut, y);
        y = Math.max(this.height() - h * scale * (1 + maxPanOut), y);
      }
      return y;
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("wheelable")) {
      this._handleSetWheel();
    }
    this.contents._display.cancelTouch = this.get("pinchZoom", false);
  }
  _handleSetWheel() {
    if (this.get("wheelable")) {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
      this._wheelDp = this.events.on("wheel", (event) => {
        const wheelEvent = event.originalEvent;
        if (isLocalEvent(wheelEvent, this)) {
          wheelEvent.preventDefault();
        } else {
          return;
        }
        const point = this.toLocal(event.point);
        this._handleWheelZoom(wheelEvent.deltaY, point);
      });
      this._disposers.push(this._wheelDp);
    } else {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
    }
  }
  _handleWheelZoom(delta, point) {
    let step = this.get("zoomStep", 2);
    let zoomLevel = this.contents.get("scale", 1);
    let newZoomLevel = zoomLevel;
    if (delta > 0) {
      newZoomLevel = zoomLevel / step;
    } else if (delta < 0) {
      newZoomLevel = zoomLevel * step;
    }
    if (newZoomLevel != zoomLevel) {
      this.zoomToPoint(point, newZoomLevel);
    }
  }
  /**
   * Zooms to specific X/Y point.
   *
   * @param   point  Center point
   * @param   level  Zoom level
   * @return         Zoom Animation object
   */
  zoomToPoint(point, level) {
    if (level) {
      level = fitToRange(level, this.get("minZoomLevel", 1), this.get("maxZoomLevel", 32));
    }
    const zoomLevel = this.contents.get("scale", 1);
    let x = point.x;
    let y = point.y;
    let cx = x;
    let cy = y;
    const contents = this.contents;
    let tx = contents.x();
    let ty = contents.y();
    let xx = cx - (x - tx) / zoomLevel * level;
    let yy = cy - (y - ty) / zoomLevel * level;
    this._animateTo(xx, yy, level);
    return this._za;
  }
  /**
   * Zooms the container contents in by `zoomStep`.
   *
   * @return Zoom Animation object
   */
  zoomIn() {
    return this.zoomToPoint({
      x: this.width() / 2,
      y: this.height() / 2
    }, this.contents.get("scale", 1) * this.get("zoomStep", 2));
  }
  /**
   * Zooms the container contents out by `zoomStep`.
   *
   * @return Zoom Animation object
   */
  zoomOut() {
    return this.zoomToPoint({
      x: this.width() / 2,
      y: this.height() / 2
    }, this.contents.get("scale", 1) / this.get("zoomStep", 2));
  }
  /**
   * Fully zooms out the container contents.
   *
   * @return Zoom Animation object
   */
  goHome() {
    return this._animateTo(0, 0, 1);
  }
  _animateTo(x, y, scale) {
    const duration = this.get("animationDuration", 0);
    const easing = this.get("animationEasing");
    const contents = this.contents;
    this._txa = contents.animate({
      key: "x",
      to: x,
      duration,
      easing
    });
    this._tya = contents.animate({
      key: "y",
      to: y,
      duration,
      easing
    });
    this._za = contents.animate({
      key: "scale",
      to: scale,
      duration,
      easing
    });
  }
  _handleThisUp(_event) {
    this._downPoints = {};
  }
  _handleThisDown(event) {
    const contents = this.contents;
    this._downScale = contents.get("scale", 1);
    const downPoints = contents._downPoints;
    let count = keys(downPoints).length;
    if (count == 1) {
      let downPoint = downPoints[1];
      if (!downPoint) {
        downPoint = downPoints[0];
      }
      if (downPoint && downPoint.x == event.point.x && downPoint.y == event.point.y) {
        count = 0;
      }
    }
    if (count > 0) {
      this._downX = contents.x();
      this._downY = contents.y();
      const downId = contents._getDownPointId();
      if (downId) {
        let movePoint = this._movePoints[downId];
        if (movePoint) {
          contents._downPoints[downId] = movePoint;
        }
      }
    }
  }
  _handleThisMove(event) {
    const originalEvent = event.originalEvent;
    const pointerId = originalEvent.pointerId;
    if (this.get("pinchZoom")) {
      if (pointerId) {
        this._movePoints[pointerId] = event.point;
        if (keys(this.contents._downPoints).length > 1) {
          this._handlePinch();
          return;
        }
      }
    }
  }
  _handlePinch() {
    let i = 0;
    let downPoints = [];
    let movePoints = [];
    each2(this.contents._downPoints, (k, point) => {
      downPoints[i] = point;
      let movePoint = this._movePoints[k];
      if (movePoint) {
        movePoints[i] = movePoint;
      }
      i++;
    });
    if (downPoints.length > 1 && movePoints.length > 1) {
      this.contents._isDragging = false;
      let downPoint0 = downPoints[0];
      let downPoint1 = downPoints[1];
      let movePoint0 = movePoints[0];
      let movePoint1 = movePoints[1];
      if (downPoint0 && downPoint1 && movePoint0 && movePoint1) {
        downPoint0 = this.toLocal(downPoint0);
        downPoint1 = this.toLocal(downPoint1);
        movePoint0 = this.toLocal(movePoint0);
        movePoint1 = this.toLocal(movePoint1);
        let initialDistance = Math.hypot(downPoint1.x - downPoint0.x, downPoint1.y - downPoint0.y);
        let currentDistance = Math.hypot(movePoint1.x - movePoint0.x, movePoint1.y - movePoint0.y);
        let level = currentDistance / initialDistance * this._downScale;
        let moveCenter = {
          x: movePoint0.x + (movePoint1.x - movePoint0.x) / 2,
          y: movePoint0.y + (movePoint1.y - movePoint0.y) / 2
        };
        let downCenter = {
          x: downPoint0.x + (downPoint1.x - downPoint0.x) / 2,
          y: downPoint0.y + (downPoint1.y - downPoint0.y) / 2
        };
        let tx = this._downX || 0;
        let ty = this._downY || 0;
        let zoomLevel = this._downScale;
        let xx = moveCenter.x - (-tx + downCenter.x) / zoomLevel * level;
        let yy = moveCenter.y - (-ty + downCenter.y) / zoomLevel * level;
        this.contents.setAll({
          x: xx,
          y: yy,
          scale: level
        });
      }
    }
  }
};
Object.defineProperty(ZoomableContainer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ZoomableContainer"
});
Object.defineProperty(ZoomableContainer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([ZoomableContainer.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/gradients/Gradient.js
var Gradient = class extends Entity {
  _afterNew() {
    super._afterNewApplyThemes();
  }
  /**
   * @ignore
   */
  getFill(_target) {
    return {
      addColorStop: (_offset, _color) => {
      }
    };
  }
  _changed() {
    super._changed();
  }
  /**
   * @ignore
   */
  getBounds(target) {
    const gradientTarget = this.get("target");
    if (gradientTarget) {
      let bounds = gradientTarget.globalBounds();
      const p02 = target.toLocal({
        x: bounds.left,
        y: bounds.top
      });
      const p1 = target.toLocal({
        x: bounds.right,
        y: bounds.top
      });
      const p2 = target.toLocal({
        x: bounds.right,
        y: bounds.bottom
      });
      const p3 = target.toLocal({
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
    return target._display.getLocalBounds();
  }
};
Object.defineProperty(Gradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Gradient"
});
Object.defineProperty(Gradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([Gradient.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/gradients/LinearGradient.js
var LinearGradient = class extends Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const rotation = this.get("rotation", 0);
    let bounds = this.getBounds(target);
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    let cos2 = cos(rotation);
    let sin2 = sin(rotation);
    let w = cos2 * (r - l);
    let h = sin2 * (b - t);
    if (w == 0) {
      w = 1;
    }
    if (h == 0) {
      h = 1;
    }
    let longer = Math.max(w, h);
    const gradient = this._root._renderer.createLinearGradient(l, t, l + longer * cos2, t + longer * sin2);
    const stops = this.get("stops");
    if (stops) {
      let i = 0;
      each(stops, (stop) => {
        let offset = stop.offset;
        if (!isNumber(offset)) {
          offset = i / (stops.length - 1);
        }
        let opacity = stop.opacity;
        if (!isNumber(opacity)) {
          opacity = 1;
        }
        let color2 = stop.color;
        if (color2) {
          const lighten = stop.lighten;
          if (lighten) {
            color2 = Color.lighten(color2, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color2 = Color.brighten(color2, brighten);
          }
          gradient.addColorStop(offset, "rgba(" + color2.r + "," + color2.g + "," + color2.b + "," + opacity + ")");
        }
        i++;
      });
    }
    return gradient;
  }
};
Object.defineProperty(LinearGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinearGradient"
});
Object.defineProperty(LinearGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Gradient.classNames.concat([LinearGradient.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/HeatLegend.js
var HeatLegend = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "labelContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "markerContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "startLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.labelContainer.children.push(Label.new(this._root, {
        themeTags: ["start"]
      }))
    });
    Object.defineProperty(this, "endLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.labelContainer.children.push(Label.new(this._root, {
        themeTags: ["end"]
      }))
    });
    Object.defineProperty(this, "markers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.markers.template.get("themeTags", []), [this.get("orientation"), "heatlegend", "marker"])
      }, [this.markers.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["heatlegend", this._settings.orientation]);
    super._afterNew();
    this.set("tooltip", Tooltip.new(this._root, {
      themeTags: ["heatlegend"]
    }));
  }
  /**
   * @ignore
   */
  makeMarker() {
    const marker = this.markers.make();
    marker.states.create("disabled", {});
    return marker;
  }
  /**
   * Moves and shows tooltip at specific value.
   *
   * Can also specify optional text to show in tooltip, as well as the color.
   *
   * @param  value  Value
   * @param  text   Text
   * @param  color  Color
   */
  showValue(value, text, color2) {
    const tooltip = this.getTooltip();
    if (tooltip && isNumber(value)) {
      const startValue = this.get("startValue", 0);
      const endValue = this.get("endValue", 1);
      let c = (value - startValue) / (endValue - startValue);
      if (c == Infinity || c == -Infinity || isNaN(c)) {
        c = 0.5;
      }
      const startColor = this.get("startColor");
      const endColor = this.get("endColor");
      if (!text) {
        text = this.getNumberFormatter().format(value);
      }
      if (!color2) {
        color2 = Color.interpolate(c, startColor, endColor);
      }
      tooltip.label.set("text", text);
      let p;
      if (this.get("orientation") == "vertical") {
        p = this.markerContainer.toGlobal({
          x: 0,
          y: this.innerHeight() * (1 - c)
        });
      } else {
        p = this.markerContainer.toGlobal({
          x: this.innerWidth() * c,
          y: 0
        });
      }
      let background = tooltip.get("background");
      if (background) {
        background.set("fill", color2);
      }
      tooltip.set("pointTo", p);
      tooltip.show();
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    const labelContainer = this.labelContainer;
    const orientation = this.get("orientation");
    const startLabel = this.startLabel;
    const endLabel = this.endLabel;
    const tooltip = this.getTooltip();
    if (this.isDirty("orientation")) {
      if (orientation == "vertical") {
        this.markerContainer.setAll({
          layout: this._root.verticalLayout,
          height: p100
        });
        this.set("layout", this._root.horizontalLayout);
        startLabel.setAll({
          y: p100,
          x: void 0,
          centerY: p100,
          centerX: p100
        });
        endLabel.setAll({
          y: 0,
          x: void 0,
          centerY: 0,
          centerX: p100
        });
        labelContainer.setAll({
          height: p100,
          width: void 0
        });
        if (tooltip) {
          tooltip.set("pointerOrientation", "horizontal");
        }
      } else {
        this.markerContainer.setAll({
          layout: this._root.horizontalLayout,
          width: p100
        });
        this.set("layout", this._root.verticalLayout);
        startLabel.setAll({
          x: 0,
          y: void 0,
          centerX: 0,
          centerY: 0
        });
        endLabel.setAll({
          x: p100,
          y: void 0,
          centerX: p100,
          centerY: 0
        });
        labelContainer.setAll({
          width: p100,
          height: void 0
        });
        if (tooltip) {
          tooltip.set("pointerOrientation", "vertical");
        }
      }
    }
    if (this.isDirty("stepCount")) {
      const stepCount = this.get("stepCount", 1);
      const startColor = this.get("startColor");
      const endColor = this.get("endColor");
      this.markerContainer.children.clear();
      if (stepCount > 1) {
        for (let i = 0; i < stepCount; i++) {
          const marker = this.makeMarker();
          if (orientation == "vertical") {
            this.markerContainer.children.moveValue(marker, 0);
          } else {
            this.markerContainer.children.push(marker);
          }
          if (startColor && endColor) {
            marker.set("fill", Color.interpolate(i / stepCount, startColor, endColor));
          }
        }
      } else if (stepCount == 1) {
        const marker = this.makeMarker();
        this.markerContainer.children.push(marker);
        const gradient = LinearGradient.new(this._root, {
          stops: [{
            color: startColor
          }, {
            color: endColor
          }]
        });
        if (orientation == "vertical") {
          gradient.set("rotation", 90);
          let stops = gradient.get("stops");
          if (stops) {
            stops.reverse();
          }
        } else {
          gradient.set("rotation", 0);
        }
        if (startColor && endColor) {
          marker.set("fillGradient", gradient);
        }
      }
    }
    if (this.isDirty("startText") || this.isDirty("startValue")) {
      startLabel.set("text", this.get("startText", this.getNumberFormatter().format(this.get("startValue", 0))));
    }
    if (this.isDirty("endText") || this.isDirty("endValue")) {
      endLabel.set("text", this.get("endText", this.getNumberFormatter().format(this.get("endValue", 1))));
    }
  }
};
Object.defineProperty(HeatLegend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "HeatLegend"
});
Object.defineProperty(HeatLegend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([HeatLegend.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/EditableLabel.js
var EditableLabel = class extends Label {
  _afterNew() {
    super._afterNew();
    const input = this.children.push(Container.new(this._root, {
      html: '<textarea class="am5-editable-label"></textarea>',
      isMeasured: false
    }));
    input.hide();
    const editOn = this.get("editOn", "click");
    if (editOn != "none") {
      input.events.on(editOn, (_ev) => {
      });
      this.events.on(editOn, (_ev) => {
        this.set("active", true);
      });
    }
    this.setPrivate("input", input);
    let background = this.get("background");
    if (!background) {
      background = this.set("background", RoundedRectangle.new(this._root, {
        themeTags: ["editablelabel", "background"]
      }));
    } else {
      background.set("themeTags", ["editablelabel", "background"]);
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    this._maybeInitTextarea();
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("active")) {
      const editing = this.get("active", false);
      if (editing) {
        this._startEditing();
      } else {
        this._stopEditing();
      }
      const bg = this.get("background");
      if (bg) {
        bg.set("active", editing);
      }
    }
    ;
    this._syncText();
    this._syncStyle();
  }
  _maybeInitTextarea() {
    if (!this._isInited()) {
      const input = this.getPrivate("input");
      if (input && input.getPrivate("htmlElement")) {
        const el = input.getPrivate("htmlElement");
        const textarea = el.querySelector(".am5-editable-label");
        if (textarea) {
          this.setPrivate("textarea", textarea);
          textarea.addEventListener("input", (_ev) => {
            if (this.get("multiLine") === false) {
              textarea.value = textarea.value.replace(/\n/g, " ");
            }
            this.set("text", textarea.value);
            this._syncStyle();
          });
          textarea.addEventListener("blur", (_ev) => this.set("active", false));
          if (supports("keyboardevents")) {
            this._disposers.push(addEventListener(document, "keydown", (ev) => {
              if (getEventKey(ev) == "Escape") {
                this.set("active", false);
              }
            }));
          }
          this._disposers.push(addEventListener(document, "keydown", (ev) => {
            if (getEventKey(ev) == "Enter" && this.get("multiLine") === false) {
              ev.preventDefault();
              this.set("active", false);
            }
          }));
          this.events.dispatch("inited", {
            type: "inited",
            target: this
          });
        }
      }
    }
  }
  _isInited() {
    return this.getPrivate("textarea") ? true : false;
  }
  _startEditing() {
    if (!this._isInited()) {
      this.events.once("inited", () => {
        this._startEditing();
      });
      return;
    }
    this._text.set("opacity", 0);
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      if (this.get("text", "") == "") {
        this.set("text", " ");
      }
      input.show(0);
      this.setTimeout(() => {
        this._syncStyle();
        textarea.focus();
      }, 100);
    }
  }
  _stopEditing() {
    if (!this._isInited()) {
      this.events.once("inited", () => {
        this._stopEditing();
      });
      return;
    }
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      this.set("text", textarea.value);
      input.hide(0);
      this._text.set("opacity", 1);
    }
  }
  _syncStyle() {
    const input = this.getPrivate("input");
    const textarea = this.getPrivate("textarea");
    if (textarea) {
      const el = input.getPrivate("htmlElement");
      const computedStyles = window.getComputedStyle(textarea);
      each(computedStyles, (style) => {
        textarea.style[style] = "initial";
      });
      textarea.style.color = this.get("fill", color(0)).toCSS(this.get("fillOpacity", 1));
      textarea.style.backgroundColor = "rgba(0, 0, 0, 0)";
      textarea.style.border = "none";
      textarea.style.outline = "none";
      textarea.style.padding = "0";
      textarea.wrap = "off";
      textarea.style.resize = "none";
      textarea.style.overflow = "hidden";
      const maxWidth = this.get("maxWidth", 0) - this.get("paddingLeft", 0) - this.get("paddingRight", 0);
      if (maxWidth > 0) {
        textarea.style.maxWidth = maxWidth + "px";
      } else {
        textarea.style.minWidth = "";
      }
      textarea.style.height = "auto";
      textarea.style.minHeight = textarea.scrollHeight + "px";
      if (this.get("width")) {
        textarea.style.width = this.width() - this.get("paddingLeft", 0) - this.get("paddingRight", 0) + "px";
        textarea.style.minWidth = "";
      }
      const lineHeight = this.get("lineHeight");
      if (!lineHeight) {
        textarea.style.lineHeight = "1.2";
      } else if (lineHeight instanceof Percent) {
        textarea.style.lineHeight = lineHeight.value + "";
      } else if (isNumber(lineHeight)) {
        textarea.style.lineHeight = lineHeight + "";
      }
      let fontFamily = this.get("fontFamily");
      if (!fontFamily) {
        fontFamily = getComputedStyle(input.getPrivate("htmlElement"), "font-family").getPropertyValue("font-family");
      }
      textarea.style.fontFamily = fontFamily;
      let fontSize = this.get("fontSize");
      if (!fontSize) {
        fontSize = getComputedStyle(input.getPrivate("htmlElement"), "font-size").getPropertyValue("font-size");
      } else if (isNumber(fontSize)) {
        fontSize = fontSize + "px";
      } else {
        fontSize = fontSize;
      }
      textarea.style.fontSize = fontSize;
      let fontWeight = this.get("fontWeight");
      if (!fontWeight) {
        fontWeight = getComputedStyle(input.getPrivate("htmlElement"), "font-weight").getPropertyValue("font-weight");
      } else {
        fontWeight = fontWeight;
      }
      textarea.style.fontWeight = fontWeight;
      let fontStyle = this.get("fontStyle");
      if (!fontStyle) {
        fontStyle = getComputedStyle(input.getPrivate("htmlElement"), "font-style").getPropertyValue("font-style");
      } else {
        fontStyle = fontStyle;
      }
      textarea.style.fontStyle = fontStyle;
      const oversizeBehavior = this.get("oversizedBehavior");
      if (oversizeBehavior == "wrap") {
        textarea.style.whiteSpace = "pre-wrap";
      } else {
        textarea.style.whiteSpace = "nowrap";
      }
      this._root.events.on("frameended", () => {
        if (textarea.style.minWidth == "") {
          textarea.style.minWidth = textarea.scrollWidth + 20 + "px";
        }
        const textAlign = this.get("textAlign", "start");
        if (textAlign == "center") {
          textarea.style.textAlign = "center";
          if (!el.style.transform.match(/translateX/) && !this.get("width")) {
            el.style.transform += " translateX(-50%)";
          }
        } else if (textAlign == "end") {
          textarea.style.textAlign = "right";
          if (!el.style.transform.match(/translateX/) && !this.get("width")) {
            el.style.transform += " translateX(-100%)";
          }
        } else {
          textarea.style.textAlign = textAlign;
        }
      });
    }
  }
  _syncText() {
    const textarea = this.getPrivate("textarea");
    let text = this.get("text", "");
    if (text == " ") {
      text = "";
    }
    if (textarea) {
      textarea.value = text;
    }
  }
};
Object.defineProperty(EditableLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "EditableLabel"
});
Object.defineProperty(EditableLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([EditableLabel.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Legend.js
var Legend = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "itemContainers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Container._new(this._root, {
        themeTags: mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item"]),
        themeTagsSelf: mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"]),
        background: RoundedRectangle.new(this._root, {
          themeTags: mergeTags(this.itemContainers.template.get("themeTags", []), ["legend", "item", "background"]),
          themeTagsSelf: mergeTags(this.itemContainers.template.get("themeTagsSelf", []), ["itemcontainer"])
        })
      }, [this.itemContainers.template])))
    });
    Object.defineProperty(this, "markers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Container._new(this._root, {
        themeTags: mergeTags(this.markers.template.get("themeTags", []), ["legend", "marker"])
      }, [this.markers.template])))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), ["legend", "label"])
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "valueLabels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Label._new(this._root, {
        themeTags: mergeTags(this.valueLabels.template.get("themeTags", []), ["legend", "label", "value"])
      }, [this.valueLabels.template])))
    });
    Object.defineProperty(this, "markerRectangles", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        themeTags: mergeTags(this.markerRectangles.template.get("themeTags", []), ["legend", "marker", "rectangle"])
      }, [this.markerRectangles.template])))
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["legend"]);
    this.fields.push("name", "stroke", "fill");
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeItemContainer(dataItem) {
    const itemContainer = this.children.push(this.itemContainers.make());
    itemContainer._setDataItem(dataItem);
    this.itemContainers.push(itemContainer);
    itemContainer.states.create("disabled", {});
    return itemContainer;
  }
  /**
   * @ignore
   */
  makeMarker() {
    const marker = this.markers.make();
    this.markers.push(marker);
    marker.states.create("disabled", {});
    return marker;
  }
  /**
   * @ignore
   */
  makeLabel() {
    const label = this.labels.make();
    label.states.create("disabled", {});
    return label;
  }
  /**
   * @ignore
   */
  makeValueLabel() {
    const valueLabel = this.valueLabels.make();
    valueLabel.states.create("disabled", {});
    return valueLabel;
  }
  /**
   * @ignore
   */
  makeMarkerRectangle() {
    const markerRectangle = this.markerRectangles.make();
    markerRectangle.states.create("disabled", {});
    return markerRectangle;
  }
  processDataItem(dataItem) {
    super.processDataItem(dataItem);
    const itemContainer = this.makeItemContainer(dataItem);
    const nameField = this.get("nameField");
    const fillField = this.get("fillField");
    const strokeField = this.get("strokeField");
    if (itemContainer) {
      const clickTarget = this.get("clickTarget", "itemContainer");
      const item = dataItem.dataContext;
      if (item && item.set) {
        item.set("legendDataItem", dataItem);
      }
      itemContainer._setDataItem(dataItem);
      dataItem.set("itemContainer", itemContainer);
      const marker = this.makeMarker();
      if (marker) {
        itemContainer.children.push(marker);
        marker._setDataItem(dataItem);
        dataItem.set("marker", marker);
        const useDefaultMarker = this.get("useDefaultMarker");
        const markerRectangle = marker.children.push(this.makeMarkerRectangle());
        let fill = dataItem.get("fill");
        let stroke = dataItem.get("stroke");
        dataItem.set("markerRectangle", markerRectangle);
        if (item && item.get) {
          fill = item.get(fillField, fill);
          stroke = item.get(strokeField, stroke);
        }
        if (!stroke) {
          stroke = fill;
        }
        if (!useDefaultMarker) {
          if (item && item.createLegendMarker) {
            item.createLegendMarker();
          }
        } else {
          if (item.on) {
            item.on(fillField, () => {
              markerRectangle.set("fill", item.get(fillField));
            });
            item.on(strokeField, () => {
              markerRectangle.set("stroke", item.get(strokeField));
            });
          }
        }
        markerRectangle.setAll({
          fill,
          stroke
        });
        const component = item.component;
        if (component && component.updateLegendMarker) {
          component.updateLegendMarker(item);
        }
      }
      const label = this.makeLabel();
      if (label) {
        itemContainer.children.push(label);
        label._setDataItem(dataItem);
        dataItem.set("label", label);
        label.text.on("text", () => {
          itemContainer.setRaw("ariaLabel", label.text._getText() + (this.get("clickTarget") !== "none" ? "; " + this._t("Press ENTER to toggle") : ""));
          itemContainer.markDirtyAccessibility();
        });
        if (item && item.get) {
          dataItem.set("name", item.get(nameField));
        }
        let name = dataItem.get("name");
        if (name) {
          label.set("text", name);
        }
      }
      const valueLabel = this.makeValueLabel();
      if (valueLabel) {
        itemContainer.children.push(valueLabel);
        valueLabel._setDataItem(dataItem);
        dataItem.set("valueLabel", valueLabel);
      }
      if (item && item.show) {
        item.on("visible", (visible) => {
          itemContainer.set("disabled", !visible);
        });
        if (!item.get("visible")) {
          itemContainer.set("disabled", true);
        }
        if (clickTarget != "none") {
          let clickContainer = itemContainer;
          if (clickTarget == "marker") {
            clickContainer = marker;
          }
          this._addClickEvents(clickContainer, item, dataItem);
        }
      }
      this.children.values.sort((a, b) => {
        const targetA = a.dataItem.dataContext;
        const targetB = b.dataItem.dataContext;
        if (targetA && targetB) {
          const indexA = this.data.indexOf(targetA);
          const indexB = this.data.indexOf(targetB);
          if (indexA > indexB) {
            return 1;
          } else if (indexA < indexB) {
            return -1;
          }
        }
        return 0;
      });
      if (item && item.updateLegendValue) {
        item.updateLegendValue();
      }
    }
  }
  _addClickEvents(container, item, dataItem) {
    container.set("cursorOverStyle", "pointer");
    container.events.on("pointerover", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.hoverDataItem(item);
      }
    });
    container.events.on("pointerout", () => {
      const component = item.component;
      if (component && component.hoverDataItem) {
        component.unhoverDataItem(item);
      }
    });
    container.events.on("click", () => {
      const labelText = dataItem.get("label").text._getText();
      if (item.show && item.isHidden && (item.isHidden() || item.get("visible") === false)) {
        item.show();
        container.set("disabled", false);
        this._root.readerAlert(this._t("%1 shown", this._root.locale, labelText));
      } else if (item.hide) {
        item.hide();
        container.set("disabled", true);
        this._root.readerAlert(this._t("%1 hidden", this._root.locale, labelText));
      }
    });
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const dataContext = dataItem.dataContext;
    if (dataContext && dataContext.get) {
      const di = dataContext.get("legendDataItem");
      if (di == dataItem) {
        dataContext.set("legendDataItem", void 0);
      }
    }
    let itemContainer = dataItem.get("itemContainer");
    if (itemContainer) {
      this.itemContainers.removeValue(itemContainer);
      itemContainer.dispose();
    }
    let marker = dataItem.get("marker");
    if (marker) {
      this.markers.removeValue(marker);
      marker.dispose();
    }
    let markerRectangle = dataItem.get("markerRectangle");
    if (markerRectangle) {
      this.markerRectangles.removeValue(markerRectangle);
      markerRectangle.dispose();
    }
    let label = dataItem.get("label");
    if (label) {
      this.labels.removeValue(label);
      label.dispose();
    }
    let valueLabel = dataItem.get("valueLabel");
    if (valueLabel) {
      this.valueLabels.removeValue(valueLabel);
      valueLabel.dispose();
    }
  }
};
Object.defineProperty(Legend, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Legend"
});
Object.defineProperty(Legend, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([Legend.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Picture.js
var Picture = class extends Sprite {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_display", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._root._renderer.makePicture(void 0)
    });
  }
  _changed() {
    super._changed();
    if (this.isDirty("width")) {
      const width = this.get("width");
      this._display.width = isNumber(width) ? width : void 0;
    }
    if (this.isDirty("height")) {
      const height = this.get("height");
      this._display.height = isNumber(height) ? height : void 0;
    }
    if (this.isDirty("shadowColor")) {
      this._display.clear();
      const shadowColor = this.get("shadowColor");
      this._display.shadowColor = shadowColor == null ? void 0 : shadowColor;
    }
    if (this.isDirty("shadowBlur")) {
      this._display.clear();
      this._display.shadowBlur = this.get("shadowBlur");
    }
    if (this.isDirty("shadowOffsetX")) {
      this._display.clear();
      this._display.shadowOffsetX = this.get("shadowOffsetX");
    }
    if (this.isDirty("shadowOffsetY")) {
      this._display.clear();
      this._display.shadowOffsetY = this.get("shadowOffsetY");
    }
    if (this.isDirty("shadowOpacity")) {
      this._display.clear();
      this._display.shadowOpacity = this.get("shadowOpacity");
    }
    if (this.isDirty("src") || this.isDirty("cors")) {
      this._display.clear();
      this._load();
    }
  }
  _load() {
    const src = this.get("src");
    if (src) {
      const image = new Image();
      image.crossOrigin = this.get("cors", "anonymous");
      image.src = src;
      const events = this.events;
      image.decode().then(() => {
        this._display.image = image;
        this._updateSize();
        if (!events.isDisposed() && events.isEnabled("loaded")) {
          events.dispatch("loaded", {
            type: "loaded",
            target: this
          });
        }
      }).catch((_error) => {
        if (!events.isDisposed() && events.isEnabled("loaderror")) {
          events.dispatch("loaderror", {
            type: "loaderror",
            target: this
          });
        }
      });
    }
  }
  _updateSize() {
    super._updateSize();
    const image = this._display.image;
    if (image) {
      let w = this.getPrivate("width", this.get("width"));
      let h = this.getPrivate("height", this.get("height"));
      const r = image.width && image.height ? image.width / image.height : 0;
      if (isNumber(w) && isNumber(h)) {
        this._display.width = w;
        this._display.height = h;
      } else if (isNumber(w) && r) {
        h = w / r;
      } else if (isNumber(h) && r) {
        w = h * r;
      } else {
        w = image.width;
        h = image.height;
      }
      if (isNumber(w)) {
        this._display.width = w;
      }
      if (isNumber(h)) {
        this._display.height = h;
      }
      this.markDirtyBounds();
      this.markDirty();
    }
  }
};
Object.defineProperty(Picture, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Picture"
});
Object.defineProperty(Picture, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Sprite.classNames.concat([Picture.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Triangle.js
var Triangle = class extends Graphics {
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
    const w = this.width();
    const h = this.height();
    const display = this._display;
    display.moveTo(-w / 2, h / 2);
    display.lineTo(0, -h / 2);
    display.lineTo(w / 2, h / 2);
    display.lineTo(-w / 2, h / 2);
    display.closePath();
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
};
Object.defineProperty(Triangle, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Triangle"
});
Object.defineProperty(Triangle, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Triangle.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Slider.js
var Slider = class extends Scrollbar {
  _afterNew() {
    this._addOrientationClass();
    super._afterNew();
    this.endGrip.setPrivate("visible", false);
    this.thumb.setPrivate("visible", false);
  }
  /**
   * @ignore
   */
  updateGrips() {
    super.updateGrips();
    const startGrip = this.startGrip;
    this.endGrip.setAll({
      x: startGrip.x(),
      y: startGrip.y()
    });
    this.setRaw("end", this.get("start"));
  }
};
Object.defineProperty(Slider, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Slider"
});
Object.defineProperty(Slider, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Scrollbar.classNames.concat([Slider.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/Slice.js
var Slice = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "iy", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_generator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: arc_default()
    });
  }
  _getTooltipPoint() {
    let tooltipX = this.get("tooltipX");
    let tooltipY = this.get("tooltipY");
    let x = 0;
    let y = 0;
    if (isNumber(tooltipX)) {
      x = tooltipX;
    }
    if (isNumber(tooltipY)) {
      y = tooltipY;
    }
    let radius = this.get("radius", 0);
    let innerRadius = this.get("innerRadius", 0);
    let dRadius = this.get("dRadius", 0);
    let dInnerRadius = this.get("dInnerRadius", 0);
    radius += dRadius;
    innerRadius += dInnerRadius;
    if (innerRadius < 0) {
      innerRadius = radius + innerRadius;
    }
    if (tooltipX instanceof Percent) {
      x = this.ix * (innerRadius + (radius - innerRadius) * tooltipX.value);
    }
    if (tooltipY instanceof Percent) {
      y = this.iy * (innerRadius + (radius - innerRadius) * tooltipY.value);
    }
    if (this.get("arc") >= 360 && innerRadius == 0) {
      x = 0;
      y = 0;
    }
    return {
      x,
      y
    };
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("radius") || this.isDirty("arc") || this.isDirty("innerRadius") || this.isDirty("startAngle") || this.isDirty("dRadius") || this.isDirty("dInnerRadius") || this.isDirty("cornerRadius") || this.isDirty("shiftRadius")) {
      this._clear = true;
    }
  }
  _changed() {
    super._changed();
    if (this._clear) {
      let startAngle = this.get("startAngle", 0);
      let arc = this.get("arc", 0);
      const generator = this._generator;
      if (arc < 0) {
        startAngle = startAngle + arc;
        arc = arc * -1;
      }
      if (arc > 0.1) {
        generator.cornerRadius(this.get("cornerRadius", 0));
      }
      generator.context(this._display);
      let radius = this.get("radius", 0);
      let innerRadius = this.get("innerRadius", 0);
      let dRadius = this.get("dRadius", 0);
      let dInnerRadius = this.get("dInnerRadius", 0);
      radius += dRadius;
      innerRadius += dInnerRadius;
      if (innerRadius < 0) {
        innerRadius = radius + innerRadius;
      }
      generator({
        innerRadius,
        outerRadius: radius,
        startAngle: (startAngle + 90) * RADIANS,
        endAngle: (startAngle + arc + 90) * RADIANS
      });
      let middleAngle = startAngle + arc / 2;
      this.ix = cos(middleAngle);
      this.iy = sin(middleAngle);
      const shiftRadius = this.get("shiftRadius", 0);
      this.setRaw("dx", this.ix * shiftRadius);
      this.setRaw("dy", this.iy * shiftRadius);
      this.markDirtyPosition();
    }
  }
};
Object.defineProperty(Slice, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Slice"
});
Object.defineProperty(Slice, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Slice.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/ZoomTools.js
var ZoomTools = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "homeButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        width: 35,
        height: 35,
        themeTags: ["home"]
      }))
    });
    Object.defineProperty(this, "plusButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        width: 35,
        height: 35,
        themeTags: ["plus"]
      }))
    });
    Object.defineProperty(this, "minusButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Button.new(this._root, {
        width: 35,
        height: 35,
        themeTags: ["minus"]
      }))
    });
    Object.defineProperty(this, "_disposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_targetDisposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    super._afterNew();
    this.set("position", "absolute");
    this.set("layout", this._root.verticalLayout);
    this.addTag("zoomtools");
    this.plusButton.setAll({
      icon: Graphics.new(this._root, {
        themeTags: ["icon"]
      }),
      layout: void 0
    });
    this.minusButton.setAll({
      icon: Graphics.new(this._root, {
        themeTags: ["icon"]
      }),
      layout: void 0
    });
    this.homeButton.setAll({
      icon: Graphics.new(this._root, {
        themeTags: ["icon"]
      }),
      layout: void 0
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("target")) {
      const target = this.get("target");
      const previous = this._prevSettings.target;
      if (target) {
        if (target instanceof ZoomableContainer) {
          this._targetDisposer = this.addDisposer(target.contents.on("scale", (scale) => {
            if (scale == target.get("minZoomLevel")) {
              this.minusButton.set("disabled", true);
            } else {
              this.minusButton.set("disabled", false);
            }
            if (scale == target.get("maxZoomLevel")) {
              this.plusButton.set("disabled", true);
            } else {
              this.plusButton.set("disabled", false);
            }
          }));
          this.root.events.once("frameended", () => {
            if (target.get("scale") == target.get("minZoomLevel")) {
              this.minusButton.set("disabled", true);
            }
          });
        }
        this._disposer = new MultiDisposer([this.plusButton.events.on("click", () => {
          target.zoomIn();
        }), this.minusButton.events.on("click", () => {
          target.zoomOut();
        }), this.homeButton.events.on("click", () => {
          target.goHome();
        })]);
      }
      if (previous) {
        if (this._disposer) {
          this._disposer.dispose();
        }
        if (this._targetDisposer) {
          this._targetDisposer.dispose();
        }
      }
    }
  }
};
Object.defineProperty(ZoomTools, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ZoomTools"
});
Object.defineProperty(ZoomTools, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([ZoomTools.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/GrainPattern.js
var GrainPattern = class extends Pattern {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "canvas", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: document.createElement("canvas")
    });
    Object.defineProperty(this, "context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.canvas.getContext("2d")
    });
    Object.defineProperty(this, "_clearGrain", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _beforeChanged() {
    this.canvas.width = this.get("width", 200);
    this.canvas.height = this.get("height", 200);
    if (this.isDirty("size") || this.isDirty("density") || this.isDirty("minOpacity") || this.isDirty("maxOpacity") || this.isDirty("colors") || this.isDirty("horizontalGap") || this.isDirty("verticalGap")) {
      this._clearGrain = true;
    }
    super._beforeChanged();
  }
  _changed() {
    super._changed();
    if (this._clearGrain) {
      const width = this.get("width", 200);
      const height = this.get("height", 200);
      const patternData = this.context.getImageData(0, 0, width, height);
      const size = Math.max(1, this.get("size", 1));
      const minOpacity = this.get("minOpacity", 0);
      const maxOpacity = this.get("maxOpacity", 0.3);
      const colors = this.get("colors", [this.get("color", Color.fromHex(0))]);
      const cols = width / size;
      const rows = height / size;
      const density = this.get("density", 1);
      const horizontalGap = this.get("horizontalGap", 0) + 1;
      const verticalGap = this.get("verticalGap", 0) + 1;
      for (let r = 0; r < rows; r++) {
        if (verticalGap > 0) {
          if (r / verticalGap != Math.round(r / verticalGap)) {
            continue;
          }
        }
        for (let c = 0; c < cols; c++) {
          const color2 = colors[Math.floor(Math.random() * colors.length)];
          const alpha = (minOpacity + Math.random() * (maxOpacity - minOpacity)) * 255;
          const rnd = Math.random();
          if (horizontalGap > 0) {
            if (c / horizontalGap != Math.round(c / horizontalGap)) {
              continue;
            }
          }
          if (rnd < density) {
            this._setRectData(c, r, size, width, patternData.data, color2.r, color2.g, color2.b, alpha);
          }
        }
      }
      this.context.putImageData(patternData, 0, 0);
      this._pattern = this.context.createPattern(this.canvas, "repeat");
    }
    this._clearGrain = false;
  }
  _checkDirtyFill() {
    return false;
  }
  _setRectData(col, row, size, width, data, rc, gc, bc, ac) {
    for (var c = col * size; c < col * size + size; c++) {
      for (var r = row * size; r < row * size + size; r++) {
        var i = (r * width + c) * 4;
        data[i] = rc;
        data[i + 1] = gc;
        data[i + 2] = bc;
        data[i + 3] = ac;
      }
    }
  }
};
Object.defineProperty(GrainPattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GrainPattern"
});
Object.defineProperty(GrainPattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([GrainPattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/gradients/RadialGradient.js
var RadialGradient = class extends Gradient {
  /**
   * @ignore
   */
  getFill(target) {
    const bounds = this.getBounds(target);
    let x = 0;
    let y = 0;
    let l = bounds.left || 0;
    let r = bounds.right || 0;
    let t = bounds.top || 0;
    let b = bounds.bottom || 0;
    const width = r - l;
    const height = b - t;
    let radius = target.get("radius");
    if (isNumber(radius)) {
      x = 0;
      y = 0;
    } else {
      radius = Math.min(width, height) / 2;
      x = width / 2;
      y = height / 2;
    }
    let ux = this.get("x");
    let uy = this.get("y");
    if (ux != null) {
      x = relativeToValue(ux, width);
    }
    if (uy != null) {
      y = relativeToValue(uy, height);
    }
    const gradient = this._root._renderer.createRadialGradient(x, y, 0, x, y, radius);
    const stops = this.get("stops");
    if (stops) {
      let i = 0;
      each(stops, (stop) => {
        let offset = stop.offset;
        if (!isNumber(offset)) {
          offset = i / (stops.length - 1);
        }
        let opacity = stop.opacity;
        if (!isNumber(opacity)) {
          opacity = 1;
        }
        let color2 = stop.color;
        if (color2) {
          const lighten = stop.lighten;
          if (lighten) {
            color2 = Color.lighten(color2, lighten);
          }
          const brighten = stop.brighten;
          if (brighten) {
            color2 = Color.brighten(color2, brighten);
          }
          gradient.addColorStop(offset, "rgba(" + color2.r + "," + color2.g + "," + color2.b + "," + opacity + ")");
        }
        i++;
      });
    }
    return gradient;
  }
};
Object.defineProperty(RadialGradient, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RadialGradient"
});
Object.defineProperty(RadialGradient, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Gradient.classNames.concat([RadialGradient.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/CirclePattern.js
var CirclePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const checkered = this.get("checkered", false);
    const centered = this.get("centered", true);
    const gap = this.get("gap", 0);
    const rotation = this.get("rotation", 0);
    let w = this.get("width", 100);
    let h = this.get("height", 100);
    let radius = this.get("radius", 3);
    let cellW = radius * 2 + gap;
    let cellH = radius * 2 + gap;
    let cols = Math.round(w / cellW);
    let rows = Math.round(h / cellH);
    cellW = w / cols;
    cellH = h / rows;
    if (rotation != 0) {
      this._display.x = cellW * cos(rotation);
      this._display.y = cellH * sin(rotation);
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      this._display.beginFill(color2, colorOpacity);
    }
    for (let r = rotation == 0 ? 0 : -rows * 2; r < rows * 2; r++) {
      for (let c = rotation == 0 ? 0 : -cols * 2; c < cols * 2; c++) {
        if (!checkered || (r & 1) != 1 && (c & 1) != 1 || (r & 1) == 1 && (c & 1) == 1) {
          let x = c * cellW;
          let y = r * cellH;
          if (centered) {
            x += cellW + gap / 2;
            y += cellH + gap / 2;
          }
          this._display.drawCircle(x - radius, y - radius, radius);
        }
      }
    }
    if (checkered) {
      w = w / 2 - gap * 2;
      h = h / 2 - gap * 2;
    } else {
      w -= gap;
      h -= gap;
    }
    if (color2 || colorOpacity) {
      this._display.endFill();
    }
  }
};
Object.defineProperty(CirclePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CirclePattern"
});
Object.defineProperty(CirclePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([CirclePattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/LinePattern.js
var LinePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const w = this.get("width", 100);
    const h = this.get("height", 100);
    const gap = this.get("gap", 0);
    const strokeWidth = this.get("strokeWidth", 1);
    if (!gap) {
      this._display.moveTo(0, 0);
      this._display.lineTo(w, 0);
    } else {
      let step = gap + strokeWidth;
      let count = h / step;
      for (let i = -count; i < count * 2; i++) {
        const y = Math.round(i * step - step / 2) + 0.5;
        this._display.moveTo(-w, y);
        this._display.lineTo(w * 2, y);
      }
    }
    this._display.lineStyle(strokeWidth, this.get("color"), this.get("colorOpacity"));
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
    this._display.endStroke();
  }
};
Object.defineProperty(LinePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LinePattern"
});
Object.defineProperty(LinePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([LinePattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/RectanglePattern.js
var RectanglePattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("gap")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const checkered = this.get("checkered", false);
    const centered = this.get("centered", true);
    const gap = this.get("gap", 0);
    const rotation = this.get("rotation", 0);
    let w = this.get("width", 100);
    let h = this.get("height", 100);
    let rectW = this.get("maxWidth", 5);
    let rectH = this.get("maxHeight", 5);
    const display = this._display;
    let cellW = rectW + gap;
    let cellH = rectH + gap;
    let cols = Math.round(w / cellW);
    let rows = Math.round(h / cellH);
    cellW = w / cols;
    cellH = h / rows;
    if (rotation != 0) {
      display.x = cellW / 2 * cos(rotation);
      display.y = -cellH / 2 * sin(rotation);
    }
    for (let r = rotation == 0 ? 0 : -rows * 2; r < rows * 2; r++) {
      for (let c = rotation == 0 ? 0 : -cols * 2; c < cols * 2; c++) {
        if (!checkered || (r & 1) != 1 && (c & 1) != 1 || (r & 1) == 1 && (c & 1) == 1) {
          let x = c * cellW;
          let y = r * cellH;
          if (centered) {
            x += (cellW - rectW) / 2;
            y += (cellH - rectH) / 2;
          }
          display.drawRect(x, y, rectW, rectH);
        }
      }
    }
    if (checkered) {
      w = w / 2 - gap * 2;
      h = h / 2 - gap * 2;
    } else {
      w -= gap;
      h -= gap;
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      display.beginFill(color2, colorOpacity);
      display.endFill();
    }
  }
};
Object.defineProperty(RectanglePattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "RectanglePattern"
});
Object.defineProperty(RectanglePattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([RectanglePattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/patterns/PathPattern.js
var PathPattern = class extends Pattern {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("svgPath")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const svgPath = this.get("svgPath");
    if (svgPath != null) {
      this._display.svgPath(svgPath);
    }
    const color2 = this.get("color");
    const colorOpacity = this.get("colorOpacity");
    if (color2 || colorOpacity) {
      this._display.beginFill(color2, colorOpacity);
      this._display.endFill();
    }
  }
};
Object.defineProperty(PathPattern, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PathPattern"
});
Object.defineProperty(PathPattern, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Pattern.classNames.concat([PathPattern.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/PatternSet.js
var PatternSet = class extends Entity {
  _afterNew() {
    super._afterNewApplyThemes();
    if (this.get("patterns", []).length === 0) {
      const color2 = this.get("color", this.root.interfaceColors.get("stroke"));
      this.set("patterns", [this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: 45,
        strokeWidth: 1,
        //gap: 6,
        color: color2
      }), this.getRectanglePattern({
        width: 10,
        height: 10,
        rotation: 0,
        maxWidth: 4,
        maxHeight: 4,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: -45,
        strokeWidth: 1,
        gap: 6,
        color: color2
      }), this.getCirclePattern({
        width: 11,
        height: 11,
        radius: 2,
        color: color2
      }), this.getLinePattern({
        width: 6,
        height: 6,
        rotation: 90,
        strokeWidth: 1,
        color: color2
      }), this.getRectanglePattern({
        width: 14,
        height: 14,
        rotation: 45,
        gap: 4,
        maxWidth: 6,
        maxHeight: 6,
        checkered: true,
        color: color2
      }), this.getLinePattern({
        width: 6,
        height: 6,
        rotation: 0,
        strokeWidth: 1,
        color: color2
      }), this.getRectanglePattern({
        width: 15,
        height: 15,
        rotation: 0,
        gap: 5,
        maxWidth: 5,
        maxHeight: 5,
        checkered: true,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: 45,
        strokeWidth: 2,
        gap: 3,
        strokeDasharray: [4, 2],
        color: color2
      }), this.getCirclePattern({
        width: 20,
        height: 20,
        radius: 3,
        gap: 4,
        checkered: true,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: -45,
        strokeWidth: 2,
        gap: 3,
        strokeDasharray: [4, 2],
        color: color2
      }), this.getRectanglePattern({
        width: 10,
        height: 10,
        rotation: 0,
        gap: 1,
        maxWidth: 9,
        maxHeight: 9,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: -45,
        strokeWidth: 2,
        gap: 1,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: 45,
        strokeWidth: 2,
        gap: 1,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: 0,
        strokeWidth: 3,
        gap: 1,
        color: color2
      }), this.getLinePattern({
        width: 1e3,
        height: 1e3,
        rotation: 90,
        strokeWidth: 3,
        gap: 1,
        color: color2
      })]);
    }
    this._dirty["patterns"] = false;
  }
  _beforeChanged() {
    if (this.isDirty("patterns")) {
      this.reset();
    }
  }
  /**
   * Returns a [[Pattern]] at specific index.
   *
   * @param   index  Index
   * @return         Color
   */
  getIndex(index) {
    const patterns = this.get("patterns", []);
    if (index < patterns.length && patterns[index] !== null) {
      return patterns[index];
    }
    if (index > patterns.length - 1) {
      const adjustedIndex = index - Math.floor(index * (index / patterns.length));
      return patterns[adjustedIndex];
    }
    return patterns[index];
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
   * return the first pattern.
   */
  reset() {
    this.setPrivate("currentStep", this.get("startIndex", 0));
  }
  /**
   * Returns a [[LinePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getLinePattern(settings) {
    let pattern = LinePattern.new(this.root, settings);
    return pattern;
  }
  /**
   * Returns a [[RectanglePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getRectanglePattern(settings) {
    let pattern = RectanglePattern.new(this.root, settings);
    return pattern;
  }
  /**
   * Returns a [[CirclePattern].
   *
   * @param   settings  Pattern settings
   * @return            Pattern object
   */
  getCirclePattern(settings) {
    let pattern = CirclePattern.new(this.root, settings);
    return pattern;
  }
};
Object.defineProperty(PatternSet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "PatternSet"
});
Object.defineProperty(PatternSet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([PatternSet.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/DataParser.js
var JSONParser = class {
  /**
   * Parses JSON string.
   *
   * @param   input    JSON
   * @param   options  Options
   * @return           Data
   */
  static parse(input, options) {
    options = this._applyDefaults(options);
    try {
      if (isString(input)) {
        let data = JSON.parse(input);
        if (options.reverse && isArray(data)) {
          data.reverse();
        }
        return data;
      } else if (isArray(input) || isObject(input)) {
        return input;
      } else {
        throw "Unable to parse JSON data";
      }
    } catch (e) {
      return void 0;
    }
  }
  static _applyDefaults(options) {
    const normalized = {};
    const defaults = {
      reverse: false
    };
    if (!options) {
      options = {};
    }
    each2(defaults, (key, val) => {
      normalized[key] = options[key] || val;
    });
    return normalized;
  }
};
var CSVParser = class {
  /**
   * Parses CSV string.
   *
   * @param   input    CSV
   * @param   options  Options
   * @return           Data
   */
  static parse(input, options) {
    options = this._applyDefaults(options);
    let data = this.CSVToArray(input, options.delimiter);
    let res = [], cols = [], col, i;
    for (i = 0; i < options.skipRows; i++) {
      data.shift();
    }
    if (options.useColumnNames) {
      cols = data.shift();
      for (let x = 0; x < cols.length; x++) {
        col = cols[x] != null ? cols[x].replace(/^\s+|\s+$/gm, "") : "";
        if ("" === col) {
          col = "col" + x;
        }
        cols[x] = col;
      }
    }
    let row;
    while (true) {
      row = options.reverse ? data.pop() : data.shift();
      if (!row) {
        break;
      }
      if (options.skipEmpty && row.length === 1 && row[0] === "") {
        continue;
      }
      let dataPoint = {};
      for (i = 0; i < row.length; i++) {
        col = void 0 === cols[i] ? "col" + i : cols[i];
        dataPoint[col] = row[i];
      }
      res.push(dataPoint);
    }
    return res;
  }
  /**
   * @ignore
   */
  static CSVToArray(data, delimiter) {
    delimiter = delimiter || ",";
    let objPattern = new RegExp(
      // Delimiters.
      "(\\" + delimiter + '|\\r?\\n|\\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^"\\' + delimiter + "\\r\\n]*))",
      "gi"
    );
    let arrData = [[]];
    let arrMatches = null;
    while (true) {
      arrMatches = objPattern.exec(data);
      if (!arrMatches) {
        break;
      }
      let strMatchedDelimiter = arrMatches[1];
      if (strMatchedDelimiter.length && strMatchedDelimiter !== delimiter) {
        arrData.push([]);
      }
      let strMatchedValue;
      if (arrMatches[2]) {
        strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
      } else {
        strMatchedValue = arrMatches[3];
      }
      arrData[arrData.length - 1].push(strMatchedValue);
    }
    return arrData;
  }
  static _applyDefaults(options) {
    const normalized = {};
    const defaults = {
      delimiter: ",",
      reverse: false,
      skipRows: 0,
      skipEmpty: true,
      useColumnNames: false
    };
    if (!options) {
      options = {};
    }
    each2(defaults, (key, val) => {
      normalized[key] = options[key] || val;
    });
    return normalized;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/DataProcessor.js
var DataProcessor = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_checkDates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkNumbers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkColors", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkEmpty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_checkDeep", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this._checkFeatures();
    this.on("dateFields", () => this._checkFeatures());
    this.on("dateFormat", () => this._checkFeatures());
    this.on("numericFields", () => this._checkFeatures());
    this.on("colorFields", () => this._checkFeatures());
    this.on("emptyAs", () => this._checkFeatures());
  }
  _checkFeatures() {
    if (this.isDirty("dateFields") || this.isDirty("dateFormat")) {
      this._checkDates = this.get("dateFields") && this.get("dateFields").length > 0;
    }
    if (this.isDirty("numericFields")) {
      this._checkNumbers = this.get("numericFields") && this.get("numericFields").length > 0;
    }
    if (this.isDirty("colorFields")) {
      this._checkColors = this.get("colorFields") && this.get("colorFields").length > 0;
    }
    if (this.isDirty("emptyAs")) {
      this._checkEmpty = this.get("emptyAs") != null;
    }
    this._checkDeepFeatures();
  }
  _checkDeepFeatures() {
    const deepFields = [];
    each(["dateFields", "numericFields", "colorFields"], (where) => {
      each(this.get(where, []), (field) => {
        const steps = field.split(".");
        steps.pop();
        while (steps.length > 0) {
          deepFields.push(steps.join("."));
          steps.pop();
        }
      });
    });
    this._checkDeep = deepFields.length > 0;
    this.setPrivate("deepFields", deepFields);
  }
  /**
   * Processess entire array of data.
   *
   * NOTE: calling this will modify original array!
   */
  processMany(data) {
    if (isArray(data) && (this._checkDates || this._checkNumbers || this._checkColors || this._checkEmpty)) {
      each(data, (row) => {
        this.processRow(row);
      });
    }
  }
  /**
   * Processes a row (object) of data.
   *
   * NOTE: calling this will modify values of the original object!
   */
  processRow(row, prefix = "") {
    each2(row, (key, _value) => {
      const lookupKey = prefix + key;
      if (this._checkEmpty) {
        row[key] = this._maybeToEmpty(row[key]);
      }
      if (this._checkNumbers) {
        row[key] = this._maybeToNumber(lookupKey, row[key]);
      }
      if (this._checkDates) {
        row[key] = this._maybeToDate(lookupKey, row[key]);
      }
      if (this._checkColors) {
        row[key] = this._maybeToColor(lookupKey, row[key]);
      }
      if (this._checkDeep && this.getPrivate("deepFields", []).indexOf(lookupKey) !== -1 && isObject(row[key])) {
        this.processRow(row[key], lookupKey + ".");
      }
    });
  }
  _maybeToNumber(field, value) {
    if (this.get("numericFields").indexOf(field) !== -1) {
      return toNumber(value);
    }
    return value;
  }
  _maybeToDate(field, value) {
    if (this.get("dateFields").indexOf(field) !== -1) {
      return this._root.dateFormatter.parse(value, this.get("dateFormat", "")).getTime();
    }
    return value;
  }
  _maybeToEmpty(value) {
    if ((value == null || value == "") && this.get("emptyAs") != null) {
      return this.get("emptyAs");
    }
    return value;
  }
  _maybeToColor(field, value) {
    if (this.get("colorFields").indexOf(field) !== -1) {
      return Color.fromAny(value);
    }
    return value;
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/render/SpriteResizer.js
var SpriteResizer = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "rectangle", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Rectangle.new(this._root, {
        themeTags: ["rectangle"],
        fillOpacity: 0,
        fill: color(16777215)
      }))
    });
    Object.defineProperty(this, "gripL", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("left")
    });
    Object.defineProperty(this, "gripR", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("right")
    });
    Object.defineProperty(this, "gripT", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("top")
    });
    Object.defineProperty(this, "gripB", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this._createGrip("bottom")
    });
    Object.defineProperty(this, "_is", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_ix", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_iw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_positionDP", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_isHover", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
  }
  _afterNew() {
    super._afterNew();
    this.addTag("resizer");
    this.set("visible", false);
    this.gripL.events.on("dragged", (e) => {
      this._resize(e.target, -1);
    });
    this.gripR.events.on("dragged", (e) => {
      this._resize(e.target, 1);
    });
    this.gripL.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripR.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripT.events.on("dragged", (e) => {
      this._rotate(e, 90);
    });
    this.gripB.events.on("dragged", (e) => {
      this._rotate(e, -90);
    });
    this.gripT.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
    this.gripB.events.on("dragstart", (e) => {
      this._resizeStart(e.target);
    });
  }
  _resizeStart(grip) {
    const sprite = this.get("sprite");
    if (sprite) {
      this._is = sprite.get("scale", 1);
      this._ix = grip.x();
      this._iw = this.width() / 2;
    }
  }
  _resize(grip, c) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const scale = Math.max(0.01, this._is * (1 + c * (grip.x() - this._ix) / this._iw));
      if (spriteTemplate) {
        spriteTemplate.set("scale", scale);
      } else {
        sprite.set("scale", scale);
      }
      sprite.states.lookup("default").set("scale", scale);
      this._updatePositions();
    }
  }
  _rotate(e, delta) {
    const sprite = this.get("sprite");
    const spriteTemplate = this.get("spriteTemplate");
    if (sprite) {
      const parent = this.parent;
      if (parent) {
        const rotationStep = this.get("rotationStep", 10);
        let angle = Math.round((getAngle({
          x: this.x(),
          y: this.y()
        }, parent.toLocal(e.point)) + delta) / rotationStep) * rotationStep;
        if (spriteTemplate) {
          spriteTemplate.set("rotation", angle);
        } else {
          sprite.set("rotation", angle);
        }
        sprite.states.lookup("default").set("rotation", angle);
        this._updatePositions();
      }
    }
  }
  _createGrip(themeTag) {
    const container = this.children.push(Container.new(this._root, {
      themeTags: ["grip", themeTag],
      setStateOnChildren: true,
      draggable: true
    }));
    container.children.push(RoundedRectangle.new(this._root, {
      themeTags: ["outline"],
      centerX: p50,
      centerY: p50
    }));
    container.children.push(RoundedRectangle.new(this._root, {
      centerX: p50,
      centerY: p50
    }));
    return container;
  }
  _updateChildren() {
    super._updateChildren();
    if (this.isDirty("sprite")) {
      const sprite = this.get("sprite");
      if (sprite) {
        this.show(0);
        this.setPrivate("visible", true);
        this._updatePositions();
        const parent = sprite.parent;
        if (parent) {
          parent.children.moveValue(this, 0);
        }
        this._positionDP = sprite.events.on("positionchanged", () => {
          this._updatePositions();
        });
        this._positionDP = sprite.events.on("boundschanged", () => {
          this._updatePositions();
        });
      } else {
        this.hide(0);
        this.setPrivate("visible", false);
        if (this._positionDP) {
          this._positionDP.dispose();
        }
      }
    }
    if (this.isDirty("width") || this.isDirty("height") || this.isDirty("rotation")) {
      this._updatePositions();
    }
  }
  _updatePositions() {
    const sprite = this.get("sprite");
    if (sprite) {
      let bounds = sprite.localBounds();
      let scale = sprite.get("scale", 1);
      let d = 20;
      let w = (bounds.right - bounds.left) * scale + d;
      let h = (bounds.bottom - bounds.top) * scale + d;
      let a = sprite.get("rotation", 0);
      const rectangle = this.rectangle;
      let cx = sprite.get("centerX", p50);
      let cy = sprite.get("centerY", p50);
      let cxr = 0;
      if (cx instanceof Percent) {
        cxr = cx.value;
      }
      let cyr = 0;
      if (cy instanceof Percent) {
        cyr = cy.value;
      }
      rectangle.setAll({
        centerX: cx,
        centerY: cy,
        width: w,
        height: h
      });
      this.setAll({
        x: sprite.x() + d * (cxr - 0.5) * cos(a) - d * (cyr - 0.5) * sin(a),
        y: sprite.y() + d * (cyr - 0.5) * cos(a) + d * (cxr - 0.5) * sin(a),
        width: w,
        height: h,
        rotation: a
      });
      this.gripT.setAll({
        x: (0.5 - cxr) * w,
        y: -cyr * h
      });
      this.gripB.setAll({
        x: (0.5 - cxr) * w,
        y: (1 - cyr) * h
      });
      this.gripL.setAll({
        x: -cxr * w,
        y: (0.5 - cyr) * h
      });
      this.gripR.setAll({
        x: (1 - cxr) * w,
        y: (0.5 - cyr) * h
      });
      this.rectangle.setAll({
        width: w,
        height: h
      });
    }
  }
};
Object.defineProperty(SpriteResizer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SpriteResizer"
});
Object.defineProperty(SpriteResizer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([SpriteResizer.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Net.js
var Net_exports = {};
__export(Net_exports, {
  load: () => load,
  readBlob: () => readBlob
});
function load(url, target, options) {
  return new Promise((success, error) => {
    let isBlob = options != null && options.responseType == "blob";
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status === 200) {
        let response;
        let blob;
        if (isBlob) {
          blob = xhr.response;
          readBlob(blob).then((response2) => {
            let output2 = {
              xhr,
              error: false,
              response: response2,
              blob,
              type: xhr.getResponseHeader("Content-Type"),
              target
            };
            success(output2);
          });
          return;
        } else {
          response = xhr.responseText || xhr.response;
        }
        let output = {
          xhr,
          error: false,
          response,
          blob,
          type: xhr.getResponseHeader("Content-Type"),
          target
        };
        success(output);
      } else {
        error({
          xhr,
          error: true,
          type: xhr.getResponseHeader("Content-Type"),
          target
        });
      }
    };
    xhr.onerror = () => {
      error({
        xhr,
        error: true,
        type: xhr.getResponseHeader("Content-Type"),
        target
      });
    };
    xhr.open("GET", url, true);
    if (options && options.withCredentials) {
      xhr.withCredentials = true;
    }
    if (options != null) {
      if (options.requestHeaders != null) {
        for (let i = 0; i < options.requestHeaders.length; i++) {
          let header = options.requestHeaders[i];
          xhr.setRequestHeader(header.key, header.value);
        }
      }
      if (options.responseType != null) {
        xhr.responseType = options.responseType;
      }
    }
    xhr.send();
  });
}
function readBlob(blob) {
  return new Promise((success, error) => {
    const reader = new FileReader();
    reader.onload = (_event) => {
      success(reader.result);
    };
    reader.onerror = (e) => {
      error(e);
    };
    reader.readAsText(blob);
  });
}
export {
  ArrayDisposer,
  BlendMode,
  Bullet,
  Button,
  CSVParser,
  CanvasLayer,
  CanvasRenderer,
  Chart,
  Circle,
  CirclePattern,
  Color,
  ColorSet,
  Component,
  Container,
  CounterDisposer,
  DataItem,
  DataProcessor,
  DateFormatter,
  Disposer,
  DurationFormatter,
  EditableLabel,
  Ellipse,
  Entity,
  Gradient,
  GrainPattern,
  Graphics,
  GridLayout,
  HeatLegend,
  HorizontalLayout,
  InterfaceColors,
  JSONParser,
  JsonData,
  Label,
  Layout,
  Legend,
  Line,
  LinePattern,
  LinearGradient,
  ListData,
  ListTemplate,
  Modal,
  MultiDisposer,
  MutableValueDisposer,
  NumberFormatter,
  PathPattern,
  Pattern,
  PatternSet,
  Percent,
  Picture,
  PicturePattern,
  PointedRectangle,
  Polygon,
  RadialGradient,
  RadialLabel,
  RadialText,
  Rectangle,
  RectanglePattern,
  Root,
  RoundedRectangle,
  Scrollbar,
  SerialChart,
  Series,
  Slice,
  Slider,
  Sprite,
  SpriteResizer,
  Star,
  Template,
  Text,
  TextFormatter,
  Theme,
  Tick,
  Timezone,
  Tooltip,
  Triangle,
  VerticalLayout,
  ZoomTools,
  ZoomableContainer,
  addLicense,
  Array_exports as array,
  color,
  disposeAllRootElements,
  Ease_exports as ease,
  getRootById,
  Math_exports as math,
  Net_exports as net,
  Object_exports as object,
  p0,
  p100,
  p50,
  percent,
  ready,
  registry,
  Time_exports as time,
  Type_exports as type,
  Utils_exports as utils
};
//# sourceMappingURL=@amcharts_amcharts5.js.map
