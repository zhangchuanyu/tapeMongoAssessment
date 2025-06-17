import {
  Button,
  Color,
  ColorSet,
  Component,
  Container,
  DataItem,
  Entity,
  Graphics,
  Label,
  List,
  ListAutoDispose,
  ListTemplate,
  Percent,
  RadialLabel,
  Rectangle,
  RoundedRectangle,
  Scrollbar,
  SerialChart,
  Series,
  Tick,
  addEventListener,
  area_default,
  capitalizeFirst,
  cardinal_default,
  ceil,
  checkChange,
  chooseInterval,
  closest,
  color,
  decimalPlaces,
  fitToRange,
  getDateIntervalDuration,
  getDuration,
  getEventKey,
  getIntervalDuration,
  getNextUnit,
  getUnitValue,
  isLocalEvent,
  isTouchEvent,
  line_default,
  mergeTags,
  p100,
  p50,
  percent,
  populateString,
  relativeToValue,
  roun,
  round,
  round2,
  sameBounds,
  setColor,
  stepAfter,
  supports,
  visualSettings
} from "./chunk-KH4I72RD.js";
import {
  MultiDisposer,
  Template,
  Theme,
  compare,
  compareNumber,
  copy,
  copy2,
  each,
  each2,
  getFirstSortedIndex,
  getSortedIndex,
  insertIndex,
  isNaN,
  isNumber,
  keys,
  move,
  remove,
  removeFirst
} from "./chunk-QF7X2JEG.js";
import {
  __awaiter
} from "./chunk-GJAHRQ4T.js";
import "./chunk-XWLXMCJQ.js";

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChartDefaultTheme.js
var XYChartDefaultTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    const ic = this._root.interfaceColors;
    const language = this._root.language;
    const r = this.rule.bind(this);
    r("XYChart").setAll({
      colors: ColorSet.new(this._root, {}),
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 16,
      paddingBottom: 16,
      panX: false,
      panY: false,
      wheelStep: 0.25,
      arrangeTooltips: true,
      pinchZoomX: false,
      pinchZoomY: false
    });
    r("XYSeries").setAll({
      legendLabelText: "{name}"
    });
    r("Rectangle", ["plotbackground", "xy", "background"]).setAll({
      fill: Color.fromHex(0),
      fillOpacity: 0
    });
    r("XYChart", ["scrollbar", "chart"]).setAll({
      paddingBottom: 0,
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      colors: ColorSet.new(this._root, {
        saturation: 0
      })
    });
    {
      const rule = r("Graphics", ["scrollbar", "overlay"]);
      rule.setAll({
        fillOpacity: 0.5
      });
      setColor(rule, "fill", ic, "background");
    }
    r("RoundedRectangle", ["xy", "scrollbar", "thumb"]).setAll({
      cornerRadiusTR: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusBL: 0,
      fillOpacity: 0,
      focusable: true
    });
    r("RoundedRectangle", ["xy", "scrollbar", "thumb"]).states.create("hover", {
      fillOpacity: 0.4
    });
    r("RoundedRectangle", ["xy", "scrollbar", "chart", "background"]).setAll({
      cornerRadiusTL: 0,
      cornerRadiusBL: 0,
      cornerRadiusTR: 0,
      cornerRadiusBR: 0
    });
    r("RoundedRectangle", ["xy", "scrollbar", "chart", "background", "resize", "button"]).setAll({
      cornerRadiusBL: 40,
      cornerRadiusBR: 40,
      cornerRadiusTL: 40,
      cornerRadiusTR: 40
    });
    r("AxisRendererX", ["xy", "chart", "scrollbar"]).setAll({
      strokeOpacity: 0,
      inside: true
    });
    r("AxisRendererY", ["xy", "chart", "scrollbar"]).setAll({
      strokeOpacity: 0,
      inside: true,
      minGridDistance: 5
    });
    r("AxisLabel", ["xy", "scrollbar", "x"]).setAll({
      opacity: 0.5,
      centerY: p100,
      minPosition: 0.01,
      maxPosition: 0.99,
      fontSize: "0.8em"
    });
    r("AxisLabel", ["category"]).setAll({
      text: "{category}",
      populateText: true
    });
    r("AxisLabel", ["x"]).setAll({
      centerY: 0
    });
    r("AxisLabel", ["x", "inside"]).setAll({
      centerY: p100
    });
    r("AxisLabel", ["x", "inside", "opposite"]).setAll({
      centerY: 0
    });
    r("AxisLabel", ["x", "opposite"]).setAll({
      centerY: p100
    });
    r("AxisLabel", ["y"]).setAll({
      centerX: p100
    });
    r("AxisLabel", ["y", "inside"]).setAll({
      centerX: 0
    });
    r("AxisLabel", ["y", "inside", "opposite"]).setAll({
      centerX: p100
    });
    r("AxisLabel", ["y", "opposite"]).setAll({
      centerX: 0
    });
    r("AxisLabel", ["minor"]).setAll({
      fontSize: "0.6em"
    });
    r("AxisLabel", ["xy", "scrollbar", "y"]).setAll({
      visible: false
    });
    r("Grid", ["xy", "scrollbar", "y"]).setAll({
      visible: false
    });
    r("Grid", ["xy", "scrollbar", "x"]).setAll({
      opacity: 0.5
    });
    r("XYCursor").setAll({
      behavior: "none",
      layer: 30,
      exportable: false,
      snapToSeriesBy: "xy",
      moveThreshold: 1
    });
    {
      const rule = r("Grid", ["cursor", "x"]);
      rule.setAll({
        forceInactive: true,
        strokeOpacity: 0.8,
        strokeDasharray: [2, 2],
        role: "slider",
        ariaLabel: language.translate("Use left and right arrows to move selection")
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("Grid", ["cursor", "y"]);
      rule.setAll({
        forceInactive: true,
        strokeOpacity: 0.8,
        strokeDasharray: [2, 2],
        role: "slider",
        ariaLabel: language.translate("Use up and down arrows to move selection")
      });
      setColor(rule, "stroke", ic, "alternativeBackground");
    }
    {
      const rule = r("Graphics", ["cursor", "selection"]);
      rule.setAll({
        fillOpacity: 0.15
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Axis").setAll({
      start: 0,
      end: 1,
      minZoomCount: 1,
      maxZoomCount: Infinity,
      maxZoomFactor: 1e3,
      maxDeviation: 0.1,
      snapTooltip: true,
      tooltipLocation: 0.5,
      panX: true,
      panY: true,
      zoomX: true,
      zoomY: true,
      fixAxisSize: true
    });
    r("AxisLabel").setAll({
      location: 0.5,
      multiLocation: 0,
      centerX: p50,
      centerY: p50,
      paddingTop: 3,
      paddingBottom: 3,
      paddingLeft: 5,
      paddingRight: 5
    });
    r("Container", ["axis", "header"]).setAll({
      layer: 30
    });
    r("Rectangle", ["axis", "header", "background"]).setAll({
      crisp: true
    });
    {
      const rule = r("AxisRenderer");
      rule.setAll({
        crisp: true,
        strokeOpacity: 0
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("AxisRendererX").setAll({
      minGridDistance: 120,
      opposite: false,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      width: p100
    });
    r("AxisRendererY").setAll({
      minGridDistance: 40,
      opposite: false,
      inversed: false,
      cellStartLocation: 0,
      cellEndLocation: 1,
      height: p100
    });
    {
      const rule = r("Rectangle", ["axis", "thumb"]);
      rule.setAll({
        fillOpacity: 0
      });
      setColor(rule, "fill", ic, "alternativeBackground");
      rule.states.create("hover", {
        fillOpacity: 0.1
      });
    }
    r("Rectangle", ["axis", "thumb", "x"]).setAll({
      cursorOverStyle: "ew-resize"
    });
    r("Rectangle", ["axis", "thumb", "y"]).setAll({
      cursorOverStyle: "ns-resize"
    });
    {
      const rule = r("Grid");
      rule.setAll({
        location: 0,
        strokeOpacity: 0.15,
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    {
      const rule = r("Grid", ["minor"]);
      rule.setAll({
        location: 0,
        strokeOpacity: 0.07,
        crisp: true
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("Grid", ["base"]).setAll({
      strokeOpacity: 0.3
    });
    {
      const rule = r("Graphics", ["axis", "fill"]);
      rule.setAll({
        visible: false,
        isMeasured: false,
        position: "absolute",
        fillOpacity: 0.05
      });
      setColor(rule, "fill", ic, "alternativeBackground");
    }
    r("Graphics", ["axis", "fill", "range"]).setAll({
      isMeasured: true
    });
    r("Graphics", ["series", "fill", "range"]).setAll({
      visible: false,
      isMeasured: true
    });
    r("Grid", ["series", "range"]).setAll({
      visible: false
    });
    r("AxisTick", ["series", "range"]).setAll({
      visible: false
    });
    r("AxisLabel", ["series", "range"]).setAll({
      visible: false
    });
    {
      const rule = r("AxisTick");
      rule.setAll({
        location: 0.5,
        multiLocation: 0,
        strokeOpacity: 1,
        isMeasured: false,
        position: "absolute",
        visible: false
      });
      setColor(rule, "stroke", ic, "grid");
    }
    r("CategoryAxis").setAll({
      startLocation: 0,
      endLocation: 1,
      fillRule: (dataItem, index) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          if (!isNumber(index) || index % 2 == 0) {
            axisFill.setPrivate("visible", true);
          } else {
            axisFill.setPrivate("visible", false);
          }
        }
      }
    });
    const gridIntervals = [{
      timeUnit: "millisecond",
      count: 1
    }, {
      timeUnit: "millisecond",
      count: 5
    }, {
      timeUnit: "millisecond",
      count: 10
    }, {
      timeUnit: "millisecond",
      count: 50
    }, {
      timeUnit: "millisecond",
      count: 100
    }, {
      timeUnit: "millisecond",
      count: 500
    }, {
      timeUnit: "second",
      count: 1
    }, {
      timeUnit: "second",
      count: 5
    }, {
      timeUnit: "second",
      count: 10
    }, {
      timeUnit: "second",
      count: 30
    }, {
      timeUnit: "minute",
      count: 1
    }, {
      timeUnit: "minute",
      count: 5
    }, {
      timeUnit: "minute",
      count: 10
    }, {
      timeUnit: "minute",
      count: 15
    }, {
      timeUnit: "minute",
      count: 30
    }, {
      timeUnit: "hour",
      count: 1
    }, {
      timeUnit: "hour",
      count: 3
    }, {
      timeUnit: "hour",
      count: 6
    }, {
      timeUnit: "hour",
      count: 12
    }, {
      timeUnit: "day",
      count: 1
    }, {
      timeUnit: "day",
      count: 2
    }, {
      timeUnit: "day",
      count: 3
    }, {
      timeUnit: "day",
      count: 4
    }, {
      timeUnit: "day",
      count: 5
    }, {
      timeUnit: "week",
      count: 1
    }, {
      timeUnit: "month",
      count: 1
    }, {
      timeUnit: "month",
      count: 2
    }, {
      timeUnit: "month",
      count: 3
    }, {
      timeUnit: "month",
      count: 6
    }, {
      timeUnit: "year",
      count: 1
    }, {
      timeUnit: "year",
      count: 2
    }, {
      timeUnit: "year",
      count: 5
    }, {
      timeUnit: "year",
      count: 10
    }, {
      timeUnit: "year",
      count: 50
    }, {
      timeUnit: "year",
      count: 100
    }, {
      timeUnit: "year",
      count: 200
    }, {
      timeUnit: "year",
      count: 500
    }, {
      timeUnit: "year",
      count: 1e3
    }, {
      timeUnit: "year",
      count: 2e3
    }, {
      timeUnit: "year",
      count: 5e3
    }, {
      timeUnit: "year",
      count: 1e4
    }, {
      timeUnit: "year",
      count: 1e5
    }];
    const dateFormats = {
      "millisecond": language.translate("_date_millisecond"),
      "second": language.translate("_date_second"),
      "minute": language.translate("_date_minute"),
      "hour": language.translate("_date_hour"),
      "day": language.translate("_date_day"),
      "week": language.translate("_date_day"),
      "month": language.translate("_date_month"),
      "year": language.translate("_date_year")
    };
    const periodChangeDateFormats = {
      "millisecond": language.translate("_date_millisecond"),
      "second": language.translate("_date_second"),
      "minute": language.translate("_date_minute"),
      "hour": language.translate("_date_day"),
      "day": language.translate("_date_day"),
      "week": language.translate("_date_day"),
      "month": language.translate("_date_month") + " " + language.translate("_date_year"),
      "year": language.translate("_date_year")
    };
    const tooltipDateFormats = {
      "millisecond": language.translate("_date_millisecond_full"),
      "second": language.translate("_date_second_full"),
      "minute": language.translate("_date_minute_full"),
      "hour": language.translate("_date_hour_full"),
      "day": language.translate("_date_day_full"),
      "week": language.translate("_date_week_full"),
      "month": language.translate("_date_month_full"),
      "year": language.translate("_date_year")
    };
    r("CategoryDateAxis").setAll({
      markUnitChange: true,
      gridIntervals: copy(gridIntervals),
      dateFormats: copy2(dateFormats),
      periodChangeDateFormats: copy2(periodChangeDateFormats)
    });
    r("DateAxis").setAll({
      maxZoomFactor: null,
      strictMinMax: true,
      startLocation: 0,
      endLocation: 1,
      markUnitChange: true,
      groupData: false,
      groupCount: 500,
      gridIntervals: copy(gridIntervals),
      dateFormats: copy2(dateFormats),
      periodChangeDateFormats: copy2(periodChangeDateFormats),
      tooltipDateFormats,
      groupIntervals: [{
        timeUnit: "millisecond",
        count: 1
      }, {
        timeUnit: "millisecond",
        count: 10
      }, {
        timeUnit: "millisecond",
        count: 100
      }, {
        timeUnit: "second",
        count: 1
      }, {
        timeUnit: "second",
        count: 10
      }, {
        timeUnit: "minute",
        count: 1
      }, {
        timeUnit: "minute",
        count: 10
      }, {
        timeUnit: "hour",
        count: 1
      }, {
        timeUnit: "day",
        count: 1
      }, {
        timeUnit: "week",
        count: 1
      }, {
        timeUnit: "month",
        count: 1
      }, {
        timeUnit: "year",
        count: 1
      }],
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const axis = dataItem.component;
          const value = dataItem.get("value");
          const endValue = dataItem.get("endValue");
          const intervalDuration = axis.intervalDuration();
          const baseInterval = axis.getPrivate("baseInterval");
          const gridInterval = axis.getPrivate("gridInterval", baseInterval);
          let min2 = axis.getPrivate("min", 0);
          min2 = round2(new Date(min2), gridInterval.timeUnit, gridInterval.count, this._root.locale.firstDayOfWeek, this._root.utc, void 0, this._root.timezone).getTime();
          if (value != null && endValue != null) {
            const val = Math.round(Math.round((value - min2) / intervalDuration)) / 2;
            if (val == Math.round(val)) {
              axisFill.setPrivate("visible", true);
            } else {
              axisFill.setPrivate("visible", false);
            }
          }
        }
      }
    });
    r("GaplessDateAxis").setAll({
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const index = dataItem.get("index");
          let visible = false;
          if (!isNumber(index) || index % 2 == 0) {
            visible = true;
          }
          axisFill.setPrivate("visible", visible);
        }
      }
    });
    r("ValueAxis").setAll({
      baseValue: 0,
      logarithmic: false,
      strictMinMax: false,
      autoZoom: true,
      fillRule: (dataItem) => {
        const axisFill = dataItem.get("axisFill");
        if (axisFill) {
          const axis = dataItem.component;
          const value = dataItem.get("value");
          const step = axis.getPrivate("step");
          if (isNumber(value) && isNumber(step)) {
            if (round(value / step / 2, 5) == Math.round(value / step / 2)) {
              axisFill.setPrivate("visible", false);
            } else {
              axisFill.setPrivate("visible", true);
            }
          }
        }
      }
    });
    r("DurationAxis").setAll({
      baseUnit: "second"
    });
    r("XYSeries").setAll({
      maskBullets: true,
      stackToNegative: true,
      locationX: 0.5,
      locationY: 0.5,
      snapTooltip: false,
      openValueXGrouped: "open",
      openValueYGrouped: "open",
      valueXGrouped: "close",
      valueYGrouped: "close",
      seriesTooltipTarget: "series"
    });
    r("BaseColumnSeries").setAll({
      adjustBulletPosition: true
    });
    r("ColumnSeries").setAll({
      clustered: true
    });
    r("RoundedRectangle", ["series", "column"]).setAll({
      position: "absolute",
      isMeasured: false,
      width: percent(70),
      height: percent(70),
      strokeWidth: 1,
      strokeOpacity: 1,
      cornerRadiusBL: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTR: 0,
      fillOpacity: 1,
      role: "figure"
    });
    r("LineSeries").setAll({
      connect: true,
      autoGapCount: 1.1,
      stackToNegative: false
    });
    r("Graphics", ["series", "stroke"]).setAll({
      position: "absolute",
      strokeWidth: 1,
      strokeOpacity: 1,
      isMeasured: false
    });
    r("Graphics", ["series", "fill"]).setAll({
      visible: false,
      fillOpacity: 0,
      position: "absolute",
      strokeWidth: 0,
      strokeOpacity: 0,
      isMeasured: false
    });
    r("Graphics", ["line", "series", "legend", "marker", "stroke"]).setAll({
      draw: (display, sprite) => {
        const parent = sprite.parent;
        if (parent) {
          const h = parent.height();
          const w = parent.width();
          display.moveTo(0, h / 2);
          display.lineTo(w, h / 2);
        }
      }
    });
    {
      const rule = r("Graphics", ["line", "series", "legend", "marker", "stroke"]).states.create("disabled", {});
      setColor(rule, "stroke", ic, "disabled");
    }
    r("Graphics", ["line", "series", "legend", "marker", "fill"]).setAll({
      draw: (display, sprite) => {
        const parent = sprite.parent;
        if (parent) {
          const h = parent.height();
          const w = parent.width();
          display.moveTo(0, 0);
          display.lineTo(w, 0);
          display.lineTo(w, h);
          display.lineTo(0, h);
          display.lineTo(0, 0);
        }
      }
    });
    {
      const rule = r("Graphics", ["line", "series", "legend", "marker", "fill"]).states.create("disabled", {});
      setColor(rule, "stroke", ic, "disabled");
    }
    r("SmoothedXYLineSeries").setAll({
      tension: 0.5
    });
    r("SmoothedXLineSeries").setAll({
      tension: 0.5
    });
    r("SmoothedYLineSeries").setAll({
      tension: 0.5
    });
    r("Candlestick").setAll({
      position: "absolute",
      isMeasured: false,
      width: percent(50),
      height: percent(50),
      strokeWidth: 1,
      strokeOpacity: 1,
      cornerRadiusBL: 0,
      cornerRadiusTL: 0,
      cornerRadiusBR: 0,
      cornerRadiusTR: 0,
      fillOpacity: 1,
      role: "figure"
    });
    r("OHLC").setAll({
      width: percent(80),
      height: percent(80)
    });
    r("CandlestickSeries").setAll({
      lowValueXGrouped: "low",
      lowValueYGrouped: "low",
      highValueXGrouped: "high",
      highValueYGrouped: "high",
      openValueXGrouped: "open",
      openValueYGrouped: "open",
      valueXGrouped: "close",
      valueYGrouped: "close"
    });
    {
      const rule = r("Rectangle", ["column", "autocolor"]).states.create("riseFromOpen", {});
      setColor(rule, "fill", ic, "positive");
      setColor(rule, "stroke", ic, "positive");
    }
    {
      const rule = r("Rectangle", ["column", "autocolor"]).states.create("dropFromOpen", {});
      setColor(rule, "fill", ic, "negative");
      setColor(rule, "stroke", ic, "negative");
    }
    r("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromOpen", {
      fillOpacity: 0
    });
    r("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromOpen", {
      fillOpacity: 1
    });
    {
      const rule = r("Rectangle", ["column", "autocolor", "pro"]).states.create("riseFromPrevious", {});
      setColor(rule, "fill", ic, "positive");
      setColor(rule, "stroke", ic, "positive");
    }
    {
      const rule = r("Rectangle", ["column", "autocolor", "pro"]).states.create("dropFromPrevious", {});
      setColor(rule, "fill", ic, "negative");
      setColor(rule, "stroke", ic, "negative");
    }
    {
      const rule = r("RoundedRectangle", ["rangegrip"]);
      rule.setAll({
        strokeOpacity: 0,
        fillOpacity: 0,
        strokeWidth: 1,
        width: 12,
        height: 12
      });
    }
    {
      const rule = r("Graphics", ["rangegrip", "button", "icon"]);
      rule.setAll({
        interactive: false,
        crisp: true,
        strokeOpacity: 0.5,
        draw: (display) => {
          display.moveTo(0, 0.5);
          display.lineTo(0, 12.5);
          display.moveTo(2, 0.5);
          display.lineTo(2, 12.5);
          display.moveTo(4, 0.5);
          display.lineTo(4, 12.5);
        }
      });
      setColor(rule, "stroke", ic, "secondaryButtonText");
    }
    r("Button", ["rangegrip"]).setAll({
      draggable: true,
      paddingTop: 0,
      paddingBottom: 0
    });
    r("Button", ["rangegrip", "vertical"]).setAll({
      rotation: 90,
      cursorOverStyle: "ns-resize",
      centerX: p50
    });
    r("Button", ["rangegrip", "horizontal"]).setAll({
      cursorOverStyle: "ew-resize",
      centerX: p50
    });
    r("Button", ["rangegrip", "vertical", "left"]).setAll({
      centerY: p100
    });
    r("Button", ["rangegrip", "vertical", "right"]).setAll({
      centerY: 0
    });
    r("Button", ["rangegrip", "horizontal", "top"]).setAll({
      centerY: 0
    });
    r("Button", ["rangegrip", "horizontal", "bottom"]).setAll({
      centerY: p100
    });
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChart.js
var XYChart = class extends SerialChart {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "xAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "yAxes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new ListAutoDispose()
    });
    Object.defineProperty(this, "topAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, {
        width: p100,
        layout: this._root.verticalLayout
      }))
    });
    Object.defineProperty(this, "yAxesAndPlotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        layout: this._root.horizontalLayout
      }))
    });
    Object.defineProperty(this, "bottomAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.chartContainer.children.push(Container.new(this._root, {
        width: p100,
        layout: this._root.verticalLayout
      }))
    });
    Object.defineProperty(this, "leftAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, {
        height: p100,
        layout: this._root.horizontalLayout
      }))
    });
    Object.defineProperty(this, "plotsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        maskContent: false
      }))
    });
    Object.defineProperty(this, "plotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotsContainer.children.push(Container.new(this._root, {
        width: p100,
        height: p100
      }))
    });
    Object.defineProperty(this, "topPlotContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotsContainer.children.push(Container.new(this._root, {
        width: p100,
        height: p100
      }))
    });
    Object.defineProperty(this, "gridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, {
        width: p100,
        height: p100,
        isMeasured: false
      }))
    });
    Object.defineProperty(this, "topGridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100,
        isMeasured: false
      })
    });
    Object.defineProperty(this, "rightAxesContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.yAxesAndPlotContainer.children.push(Container.new(this._root, {
        height: p100,
        layout: this._root.horizontalLayout
      }))
    });
    Object.defineProperty(this, "axisHeadersContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.plotContainer.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "zoomOutButton", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.topPlotContainer.children.push(Button.new(this._root, {
        themeTags: ["zoom"],
        icon: Graphics.new(this._root, {
          themeTags: ["button", "icon"]
        })
      }))
    });
    Object.defineProperty(this, "_movePoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        x: 0,
        y: 0
      }
    });
    Object.defineProperty(this, "_wheelDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_otherCharts", {
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
    Object.defineProperty(this, "_downStartX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEndX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downStartY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEndY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._defaultThemes.push(XYChartDefaultTheme.new(this._root));
    super._afterNew();
    this._disposers.push(this.xAxes);
    this._disposers.push(this.yAxes);
    const root = this._root;
    let verticalLayout = this._root.verticalLayout;
    const zoomOutButton = this.zoomOutButton;
    zoomOutButton.events.on("click", () => {
      this.zoomOut();
    });
    zoomOutButton.hide(0);
    zoomOutButton.states.lookup("default").set("opacity", 1);
    this.chartContainer.set("layout", verticalLayout);
    const plotContainer = this.plotContainer;
    plotContainer.children.push(this.seriesContainer);
    this._disposers.push(this._processAxis(this.xAxes, this.bottomAxesContainer));
    this._disposers.push(this._processAxis(this.yAxes, this.leftAxesContainer));
    plotContainer.children.push(this.topGridContainer);
    plotContainer.children.push(this.bulletsContainer);
    plotContainer.set("interactive", true);
    plotContainer.set("interactiveChildren", false);
    plotContainer.set("background", Rectangle.new(root, {
      themeTags: ["plotbackground", "xy", "background"]
    }));
    this._disposers.push(plotContainer.events.on("pointerdown", (event) => {
      this._handlePlotDown(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointerup", (event) => {
      this._handlePlotUp(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointermove", (event) => {
      this._handlePlotMove(event);
    }));
    this._maskGrid();
    this._setUpTouch();
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("pinchZoomX") || this.isDirty("pinchZoomY") || this.get("panX") || this.get("panY")) {
      this._setUpTouch();
    }
  }
  _setUpTouch() {
    if (!this.plotContainer._display.cancelTouch) {
      this.plotContainer._display.cancelTouch = this.get("pinchZoomX") || this.get("pinchZoomY") || this.get("panX") || this.get("panY") ? true : false;
    }
  }
  _maskGrid() {
    this.gridContainer.set("maskContent", true);
    this.topGridContainer.set("maskContent", true);
  }
  _removeSeries(series) {
    series._unstack();
    if (series._posXDp) {
      series._posXDp.dispose();
    }
    if (series._posYDp) {
      series._posYDp.dispose();
    }
    series.set("baseAxis", void 0);
    const xAxis = series.get("xAxis");
    if (xAxis) {
      remove(xAxis.series, series);
      xAxis.markDirtyExtremes();
    }
    const yAxis = series.get("yAxis");
    if (yAxis) {
      remove(yAxis.series, series);
      yAxis.markDirtyExtremes();
    }
    const cursor = this.get("cursor");
    if (cursor) {
      const snapToSeries = cursor.get("snapToSeries");
      if (snapToSeries) {
        remove(snapToSeries, series);
      }
    }
    super._removeSeries(series);
  }
  /**
   * This method is invoked when mouse wheel is used over chart's plot
   * container, and handles zooming/pan.
   *
   * You can invoke this method manually, if you need to mimic chart's wheel
   * behavior over other elements of the chart.
   */
  handleWheel(event) {
    const wheelX = this.get("wheelX");
    const wheelY = this.get("wheelY");
    const plotContainer = this.plotContainer;
    const wheelEvent = event.originalEvent;
    let prevent = false;
    if (isLocalEvent(wheelEvent, this)) {
      prevent = true;
    } else {
      return;
    }
    const plotPoint = plotContainer.toLocal(event.point);
    const wheelStep = this.get("wheelStep", 0.2);
    const shiftY = wheelEvent.deltaY / 100;
    const shiftX = wheelEvent.deltaX / 100;
    const wheelZoomPositionX = this.get("wheelZoomPositionX");
    const wheelZoomPositionY = this.get("wheelZoomPositionY");
    if ((wheelX === "zoomX" || wheelX === "zoomXY") && shiftX != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("zoomX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.x / plotContainer.width());
          if (wheelZoomPositionX != null) {
            position = wheelZoomPositionX;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftX * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftX * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelY === "zoomX" || wheelY === "zoomXY") && shiftY != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("zoomX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.x / plotContainer.width());
          if (wheelZoomPositionX != null) {
            position = wheelZoomPositionX;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftY * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftY * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelX === "zoomY" || wheelX === "zoomXY") && shiftX != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("zoomY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.y / plotContainer.height());
          if (wheelZoomPositionY != null) {
            position = wheelZoomPositionY;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftX * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftX * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelY === "zoomY" || wheelY === "zoomXY") && shiftY != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("zoomY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let position = axis.fixPosition(plotPoint.y / plotContainer.height());
          if (wheelZoomPositionY != null) {
            position = wheelZoomPositionY;
          }
          let maxDeviation = axis.get("maxDeviation", 0);
          let newStart = Math.min(1 + maxDeviation, Math.max(-maxDeviation, start - wheelStep * (end - start) * shiftY * position));
          let newEnd = Math.max(-maxDeviation, Math.min(1 + maxDeviation, end + wheelStep * (end - start) * shiftY * (1 - position)));
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          if (1 / (newEnd - newStart) < axis.getPrivate("maxZoomFactor", Infinity) / axis.get("minZoomCount", 1)) {
            this._handleWheelAnimation(axis.zoom(newStart, newEnd));
          } else {
            prevent = false;
          }
        }
      });
    }
    if ((wheelX === "panX" || wheelX === "panXY") && shiftX != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("panX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftX;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelY === "panX" || wheelY === "panXY") && shiftY != 0) {
      this.xAxes.each((axis) => {
        if (axis.get("panX")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftY;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelX === "panY" || wheelX === "panXY") && shiftX != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("panY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftX;
          let newStart = start + delta;
          let newEnd = end + delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if ((wheelY === "panY" || wheelY === "panXY") && shiftY != 0) {
      this.yAxes.each((axis) => {
        if (axis.get("panY")) {
          let start = axis.get("start");
          let end = axis.get("end");
          let delta = this._getWheelSign(axis) * wheelStep * (end - start) * shiftY;
          let newStart = start - delta;
          let newEnd = end - delta;
          let se = this._fixWheel(newStart, newEnd);
          newStart = se[0];
          newEnd = se[1];
          if (newStart == start && newEnd == end) {
            prevent = false;
          }
          this._handleWheelAnimation(axis.zoom(newStart, newEnd));
        }
      });
    }
    if (prevent) {
      wheelEvent.preventDefault();
    }
  }
  _handleSetWheel() {
    const wheelX = this.get("wheelX");
    const wheelY = this.get("wheelY");
    const plotContainer = this.plotContainer;
    if (wheelX !== "none" || wheelY !== "none") {
      this._wheelDp = plotContainer.events.on("wheel", (event) => {
        const wheelEvent = event.originalEvent;
        if (wheelX !== "none" && Math.abs(wheelEvent.deltaX) != 0 || wheelY !== "none" && Math.abs(wheelEvent.deltaY) != 0) {
          this.handleWheel(event);
        }
      });
      this._disposers.push(this._wheelDp);
    } else {
      if (this._wheelDp) {
        this._wheelDp.dispose();
      }
    }
  }
  _getWheelSign(axis) {
    let sign3 = 1;
    if (axis.get("renderer").get("inversed")) {
      sign3 = -1;
    }
    return sign3;
  }
  _fixWheel(start, end) {
    const diff = end - start;
    if (start < 0) {
      start = 0;
      end = start + diff;
    }
    if (end > 1) {
      end = 1;
      start = end - diff;
    }
    return [start, end];
  }
  _handlePlotDown(event) {
    const originalEvent = event.originalEvent;
    if (originalEvent.button == 2) {
      return;
    }
    const plotContainer = this.plotContainer;
    let local = plotContainer.toLocal(event.point);
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const pointerId = originalEvent.pointerId;
      if (pointerId) {
        if (keys(plotContainer._downPoints).length > 0) {
          const xAxis = this.xAxes.getIndex(0);
          const yAxis = this.yAxes.getIndex(0);
          if (xAxis) {
            this._downStartX = xAxis.get("start", 0);
            this._downEndX = xAxis.get("end", 1);
          }
          if (yAxis) {
            this._downStartY = yAxis.get("start", 0);
            this._downEndY = yAxis.get("end", 1);
          }
        }
      }
    }
    if (this.get("panX") || this.get("panY")) {
      if (local.x >= 0 && local.y >= 0 && local.x <= plotContainer.width() && local.y <= this.height()) {
        this._downPoint = {
          x: originalEvent.clientX,
          y: originalEvent.clientY
        };
        const panX = this.get("panX");
        const panY = this.get("panY");
        if (panX) {
          this.xAxes.each((axis) => {
            axis._panStart = axis.get("start");
            axis._panEnd = axis.get("end");
          });
        }
        if (panY) {
          this.yAxes.each((axis) => {
            axis._panStart = axis.get("start");
            axis._panEnd = axis.get("end");
          });
        }
        const eventType = "panstarted";
        if (this.events.isEnabled(eventType)) {
          this.events.dispatch(eventType, {
            type: eventType,
            target: this,
            originalEvent: event.originalEvent
          });
        }
      }
    }
  }
  _handleWheelAnimation(animation) {
    if (animation) {
      animation.events.on("stopped", () => {
        this._dispatchWheelAnimation();
      });
    } else {
      this._dispatchWheelAnimation();
    }
  }
  _dispatchWheelAnimation() {
    const eventType = "wheelended";
    if (this.events.isEnabled(eventType)) {
      this.events.dispatch(eventType, {
        type: eventType,
        target: this
      });
    }
  }
  _handlePlotUp(event) {
    const downPoint = this._downPoint;
    if (downPoint) {
      if (this.get("panX") || this.get("panY")) {
        if (event.originalEvent.clientX == downPoint.x && event.originalEvent.clientY == downPoint.y) {
          const eventType2 = "pancancelled";
          if (this.events.isEnabled(eventType2)) {
            this.events.dispatch(eventType2, {
              type: eventType2,
              target: this,
              originalEvent: event.originalEvent
            });
          }
        }
        const eventType = "panended";
        if (this.events.isEnabled(eventType)) {
          this.events.dispatch(eventType, {
            type: eventType,
            target: this,
            originalEvent: event.originalEvent
          });
        }
      }
    }
    this._downPoint = void 0;
    this.xAxes.each((xAxis) => {
      xAxis._isPanning = false;
    });
    this.yAxes.each((yAxis) => {
      yAxis._isPanning = false;
    });
  }
  _handlePlotMove(event) {
    const plotContainer = this.plotContainer;
    if (this.get("pinchZoomX") || this.get("pinchZoomY")) {
      const touchEvent = event.originalEvent;
      const pointerId = touchEvent.pointerId;
      if (pointerId) {
        this._movePoints[pointerId] = event.point;
        if (keys(plotContainer._downPoints).length > 1) {
          this._handlePinch();
          return;
        }
      }
    }
    let downPoint = this._downPoint;
    if (downPoint) {
      downPoint = plotContainer.toLocal(this._root.documentPointToRoot(downPoint));
      let local = plotContainer.toLocal(event.point);
      const panX = this.get("panX");
      const panY = this.get("panY");
      if (panX) {
        let scrollbarX = this.get("scrollbarX");
        if (scrollbarX) {
          scrollbarX.events.disableType("rangechanged");
        }
        this.xAxes.each((axis) => {
          if (axis.get("panX")) {
            axis._isPanning = true;
            let panStart = axis._panStart;
            let panEnd = axis._panEnd;
            let difference = panEnd - panStart;
            let deltaX = difference * (downPoint.x - local.x) / plotContainer.width();
            if (axis.get("renderer").get("inversed")) {
              deltaX *= -1;
            }
            let start = panStart + deltaX;
            let end = panEnd + deltaX;
            if (end - start < 1 + axis.get("maxDeviation", 1) * 2) {
              axis.set("start", start);
              axis.set("end", end);
            }
          }
        });
        if (scrollbarX) {
          scrollbarX.events.enableType("rangechanged");
        }
      }
      if (panY) {
        let scrollbarY = this.get("scrollbarY");
        if (scrollbarY) {
          scrollbarY.events.disableType("rangechanged");
        }
        this.yAxes.each((axis) => {
          if (axis.get("panY")) {
            axis._isPanning = true;
            let panStart = axis._panStart;
            let panEnd = axis._panEnd;
            let difference = panEnd - panStart;
            let deltaY = difference * (downPoint.y - local.y) / plotContainer.height();
            if (axis.get("renderer").get("inversed")) {
              deltaY *= -1;
            }
            let start = panStart - deltaY;
            let end = panEnd - deltaY;
            if (end - start < 1 + axis.get("maxDeviation", 1) * 2) {
              axis.set("start", start);
              axis.set("end", end);
            }
          }
        });
        if (scrollbarY) {
          scrollbarY.events.enableType("rangechanged");
        }
      }
    }
  }
  _handlePinch() {
    const plotContainer = this.plotContainer;
    let i = 0;
    let downPoints = [];
    let movePoints = [];
    each2(plotContainer._downPoints, (k, point3) => {
      downPoints[i] = point3;
      let movePoint = this._movePoints[k];
      if (movePoint) {
        movePoints[i] = movePoint;
      }
      i++;
    });
    if (downPoints.length > 1 && movePoints.length > 1) {
      const w = plotContainer.width();
      const h = plotContainer.height();
      let downPoint0 = downPoints[0];
      let downPoint1 = downPoints[1];
      let movePoint0 = movePoints[0];
      let movePoint1 = movePoints[1];
      if (downPoint0 && downPoint1 && movePoint0 && movePoint1) {
        movePoint0 = plotContainer.toLocal(movePoint0);
        movePoint1 = plotContainer.toLocal(movePoint1);
        downPoint0 = plotContainer.toLocal(downPoint0);
        downPoint1 = plotContainer.toLocal(downPoint1);
        if (this.get("pinchZoomX")) {
          const downStartX = this._downStartX;
          const downEndX = this._downEndX;
          if (downStartX != null && downEndX != null) {
            if (downPoint0.x > downPoint1.x) {
              [downPoint0, downPoint1] = [downPoint1, downPoint0];
              [movePoint0, movePoint1] = [movePoint1, movePoint0];
            }
            let downPos0 = downStartX + downPoint0.x / w * (downEndX - downStartX);
            let downPos1 = downStartX + downPoint1.x / w * (downEndX - downStartX);
            let movePos0 = downStartX + movePoint0.x / w * (downEndX - downStartX);
            let movePos1 = downStartX + movePoint1.x / w * (downEndX - downStartX);
            let initialDistance = Math.max(1e-3, downPos1 - downPos0);
            let currentDistance = Math.max(1e-3, movePos1 - movePos0);
            let d = initialDistance / currentDistance;
            let s = downStartX * d + downPos0 - movePos0 * d;
            let e = downEndX * d + downPos1 - movePos1 * d;
            this.xAxes.each((xAxis) => {
              let sa = xAxis.fixPosition(s);
              let ea = xAxis.fixPosition(e);
              xAxis.zoom(sa, ea, 0);
            });
          }
        }
        if (this.get("pinchZoomY")) {
          const downStartY = this._downStartY;
          const downEndY = this._downEndY;
          if (downStartY != null && downEndY != null) {
            if (downPoint0.y < downPoint1.y) {
              [downPoint0, downPoint1] = [downPoint1, downPoint0];
              [movePoint0, movePoint1] = [movePoint1, movePoint0];
            }
            let downPos0 = downStartY + (1 - downPoint0.y / h) * (downEndY - downStartY);
            let downPos1 = downStartY + (1 - downPoint1.y / h) * (downEndY - downStartY);
            let movePos0 = downStartY + (1 - movePoint0.y / h) * (downEndY - downStartY);
            let movePos1 = downStartY + (1 - movePoint1.y / h) * (downEndY - downStartY);
            let initialDistance = Math.max(1e-3, downPos1 - downPos0);
            let currentDistance = Math.max(1e-3, movePos1 - movePos0);
            let d = initialDistance / currentDistance;
            let s = downStartY * d + downPos0 - movePos0 * d;
            let e = downEndY * d + downPos1 - movePos1 * d;
            this.yAxes.each((yAxis) => {
              let sa = yAxis.fixPosition(s);
              let ea = yAxis.fixPosition(e);
              yAxis.zoom(sa, ea, 0);
            });
          }
        }
      }
    }
  }
  _handleCursorPosition() {
    const cursor = this.get("cursor");
    if (cursor) {
      const cursorPoint = cursor.getPrivate("point");
      let snapToSeries = cursor.get("snapToSeries");
      if (cursor._downPoint) {
        snapToSeries = void 0;
      }
      if (snapToSeries && cursorPoint) {
        const snapToSeriesBy = cursor.get("snapToSeriesBy");
        const dataItems = [];
        each(snapToSeries, (series) => {
          if (!series.isHidden() && !series.isHiding()) {
            if (snapToSeriesBy != "x!" && snapToSeriesBy != "y!") {
              const startIndex = series.startIndex();
              const endIndex = series.endIndex();
              for (let i = startIndex; i < endIndex; i++) {
                const dataItem = series.dataItems[i];
                if (dataItem && !dataItem.isHidden()) {
                  dataItems.push(dataItem);
                }
              }
            } else {
              const tooltipDataItem = series.get("tooltipDataItem");
              if (tooltipDataItem) {
                dataItems.push(tooltipDataItem);
              }
            }
          }
        });
        let minDistance = Infinity;
        let closestItem;
        each(dataItems, (dataItem) => {
          const point3 = dataItem.get("point");
          if (point3) {
            let distance = 0;
            if (snapToSeriesBy == "x" || snapToSeriesBy == "x!") {
              distance = Math.abs(cursorPoint.x - point3.x);
            } else if (snapToSeriesBy == "y" || snapToSeriesBy == "y!") {
              distance = Math.abs(cursorPoint.y - point3.y);
            } else {
              distance = Math.hypot(cursorPoint.x - point3.x, cursorPoint.y - point3.y);
            }
            if (distance < minDistance) {
              minDistance = distance;
              closestItem = dataItem;
            }
          }
        });
        each(snapToSeries, (series) => {
          const tooltip = series.get("tooltip");
          if (tooltip) {
            tooltip._setDataItem(void 0);
          }
        });
        if (closestItem) {
          let series = closestItem.component;
          series.showDataItemTooltip(closestItem);
          series.setRaw("tooltipDataItem", closestItem);
          const point3 = closestItem.get("point");
          if (point3) {
            cursor.handleMove(series.toGlobal({
              x: point3.x - series.x(),
              y: point3.y - series.y()
            }), true);
          }
        }
      }
    }
  }
  _updateCursor() {
    let cursor = this.get("cursor");
    if (cursor) {
      cursor.updateCursor();
    }
  }
  _addCursor(cursor) {
    this.plotContainer.children.push(cursor);
  }
  _prepareChildren() {
    super._prepareChildren();
    this.series.each((series) => {
      this._colorize(series);
    });
    if (this.isDirty("wheelX") || this.isDirty("wheelY")) {
      this._handleSetWheel();
    }
    if (this.isDirty("cursor")) {
      const previous = this._prevSettings.cursor;
      const cursor = this.get("cursor");
      if (cursor !== previous) {
        this._disposeProperty("cursor");
        if (previous) {
          previous.dispose();
        }
        if (cursor) {
          cursor._setChart(this);
          this._addCursor(cursor);
          this._pushPropertyDisposer("cursor", cursor.events.on("selectended", () => {
            this._handleCursorSelectEnd();
          }));
        }
        this._prevSettings.cursor = cursor;
      }
    }
    if (this.isDirty("scrollbarX")) {
      const previous = this._prevSettings.scrollbarX;
      const scrollbarX = this.get("scrollbarX");
      if (scrollbarX !== previous) {
        this._disposeProperty("scrollbarX");
        if (previous) {
          previous.dispose();
        }
        if (scrollbarX) {
          if (!scrollbarX.parent) {
            this.topAxesContainer.children.push(scrollbarX);
          }
          this._pushPropertyDisposer("scrollbarX", scrollbarX.events.on("rangechanged", (e) => {
            this._handleScrollbar(this.xAxes, e.start, e.end, e.grip);
          }));
          this._pushPropertyDisposer("scrollbarX", scrollbarX.events.on("released", () => {
            this.xAxes.each((axis) => {
              if (axis.get("zoomable")) {
                this._handleAxisSelection(axis);
              }
            });
          }));
          scrollbarX.setPrivate("positionTextFunction", (position) => {
            const axis = this.xAxes.getIndex(0);
            return axis ? axis.getTooltipText(position, false) || "" : "";
          });
        }
        this._prevSettings.scrollbarX = scrollbarX;
      }
    }
    if (this.isDirty("scrollbarY")) {
      const previous = this._prevSettings.scrollbarY;
      const scrollbarY = this.get("scrollbarY");
      if (scrollbarY !== previous) {
        this._disposeProperty("scrollbarY");
        if (previous) {
          previous.dispose();
        }
        if (scrollbarY) {
          if (!scrollbarY.parent) {
            this.rightAxesContainer.children.push(scrollbarY);
          }
          this._pushPropertyDisposer("scrollbarY", scrollbarY.events.on("rangechanged", (e) => {
            this._handleScrollbar(this.yAxes, e.start, e.end, e.grip);
          }));
          this._pushPropertyDisposer("scrollbarY", scrollbarY.events.on("released", () => {
            this.yAxes.each((axis) => {
              if (axis.get("zoomable")) {
                this._handleAxisSelection(axis);
              }
            });
          }));
          scrollbarY.setPrivate("positionTextFunction", (position) => {
            const axis = this.yAxes.getIndex(0);
            return axis ? axis.getTooltipText(position, false) || "" : "";
          });
        }
        this._prevSettings.scrollbarY = scrollbarY;
      }
    }
    this._handleZoomOut();
  }
  _processSeries(series) {
    super._processSeries(series);
    const xAxis = series.get("xAxis");
    const yAxis = series.get("yAxis");
    move(xAxis.series, series);
    move(yAxis.series, series);
    series._posXDp = series.addDisposer(xAxis.events.on("positionchanged", () => {
      series._fixPosition();
    }));
    series._posXDp = series.addDisposer(yAxis.events.on("positionchanged", () => {
      series._fixPosition();
    }));
    if (!series.get("baseAxis")) {
      if (yAxis.isType("CategoryAxis") || yAxis.isType("DateAxis")) {
        series.set("baseAxis", yAxis);
      } else {
        series.set("baseAxis", xAxis);
      }
    }
    if (series.get("stacked")) {
      series._markDirtyKey("stacked");
      each(series.dataItems, (dataItem) => {
        dataItem.set("stackToItemY", void 0);
        dataItem.set("stackToItemX", void 0);
      });
    }
    series._markDirtyAxes();
    yAxis.markDirtyExtremes();
    xAxis.markDirtyExtremes();
    xAxis._seriesAdded = true;
    yAxis._seriesAdded = true;
    this._colorize(series);
  }
  _colorize(series) {
    const colorSet = this.get("colors");
    if (colorSet) {
      if (series.get("fill") == null) {
        const color2 = colorSet.next();
        series._setSoft("stroke", color2);
        series._setSoft("fill", color2);
      }
    }
    const patternSet = this.get("patterns");
    if (patternSet) {
      if (series.get("fillPattern") == null) {
        const pattern = patternSet.next();
        series._setSoft("fillPattern", pattern);
      }
    }
  }
  _handleCursorSelectEnd() {
    const cursor = this.get("cursor");
    const behavior = cursor.get("behavior");
    const downPositionX = cursor.getPrivate("downPositionX", 0);
    const downPositionY = cursor.getPrivate("downPositionY", 0);
    const positionX = Math.min(1, Math.max(0, cursor.getPrivate("positionX", 0.5)));
    const positionY = Math.min(1, Math.max(0, cursor.getPrivate("positionY", 0.5)));
    this.xAxes.each((axis) => {
      if (behavior === "zoomX" || behavior === "zoomXY") {
        let position0 = axis.toAxisPosition(downPositionX);
        let position1 = axis.toAxisPosition(positionX);
        axis.zoom(position0, position1);
      }
      axis.setPrivate("updateScrollbar", true);
    });
    this.yAxes.each((axis) => {
      if (behavior === "zoomY" || behavior === "zoomXY") {
        let position0 = axis.toAxisPosition(downPositionY);
        let position1 = axis.toAxisPosition(positionY);
        axis.zoom(position0, position1);
      }
      axis.setPrivate("updateScrollbar", true);
    });
  }
  _handleScrollbar(axes, start, end, priority) {
    axes.each((axis) => {
      let axisStart = axis.fixPosition(start);
      let axisEnd = axis.fixPosition(end);
      let zoomAnimation = axis.zoom(axisStart, axisEnd, void 0, priority);
      const updateScrollbar = "updateScrollbar";
      axis.setPrivateRaw(updateScrollbar, false);
      if (zoomAnimation) {
        zoomAnimation.events.on("stopped", () => {
          axis.setPrivateRaw(updateScrollbar, true);
        });
      } else {
        axis.setPrivateRaw(updateScrollbar, true);
      }
    });
  }
  _processAxis(axes, container) {
    return axes.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (axis) => {
          this._removeAxis(axis);
        });
      } else if (change.type === "push") {
        container.children.push(change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "setIndex") {
        container.children.setIndex(change.index, change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "insertIndex") {
        container.children.insertIndex(change.index, change.newValue);
        change.newValue.processChart(this);
      } else if (change.type === "removeIndex") {
        this._removeAxis(change.oldValue);
      } else if (change.type === "moveIndex") {
        container.children.moveValue(change.value, change.newIndex);
        change.value.processChart(this);
      } else {
        throw new Error("Unknown IListEvent type");
      }
    });
  }
  _removeAxis(axis) {
    if (!axis.isDisposed()) {
      const axisParent = axis.parent;
      if (axisParent) {
        axisParent.children.removeValue(axis);
      }
      const gridContainer = axis.gridContainer;
      const gridParent = gridContainer.parent;
      if (gridParent) {
        gridParent.children.removeValue(gridContainer);
      }
      const topGridContainer = axis.topGridContainer;
      const topGridParent = topGridContainer.parent;
      if (topGridParent) {
        topGridParent.children.removeValue(topGridContainer);
      }
    }
  }
  _updateChartLayout() {
    const left = this.leftAxesContainer.width();
    const right = this.rightAxesContainer.width();
    const bottomAxesContainer = this.bottomAxesContainer;
    bottomAxesContainer.set("paddingLeft", left);
    bottomAxesContainer.set("paddingRight", right);
    const topAxesContainer = this.topAxesContainer;
    topAxesContainer.set("paddingLeft", left);
    topAxesContainer.set("paddingRight", right);
  }
  /**
   * @ignore
   */
  processAxis(axis) {
    var cursor = this.get("cursor");
    if (cursor) {
      this.addDisposer(axis.on("start", () => {
        this._updateCursor();
      }));
      this.addDisposer(axis.on("end", () => {
        this._updateCursor();
      }));
    }
  }
  _handleAxisSelection(axis, force) {
    let start = axis.fixPosition(axis.get("start", 0));
    let end = axis.fixPosition(axis.get("end", 1));
    if (start > end) {
      [start, end] = [end, start];
    }
    if (this.xAxes.indexOf(axis) != -1) {
      if (force || axis.getPrivate("updateScrollbar")) {
        let scrollbarX = this.get("scrollbarX");
        if (scrollbarX && (!scrollbarX.getPrivate("isBusy") || force)) {
          scrollbarX.setRaw("start", start);
          scrollbarX.setRaw("end", end);
          scrollbarX.updateGrips();
        }
      }
    } else if (this.yAxes.indexOf(axis) != -1) {
      if (force || axis.getPrivate("updateScrollbar")) {
        let scrollbarY = this.get("scrollbarY");
        if (scrollbarY && (!scrollbarY.getPrivate("isBusy") || force)) {
          scrollbarY.setRaw("start", start);
          scrollbarY.setRaw("end", end);
          scrollbarY.updateGrips();
        }
      }
    }
    this._handleZoomOut();
  }
  _handleZoomOut() {
    let zoomOutButton = this.zoomOutButton;
    if (zoomOutButton && zoomOutButton.parent) {
      let visible = false;
      this.xAxes.each((axis) => {
        if (round(axis.get("start", 0), 5) != 0 || round(axis.get("end", 1), 5) != 1) {
          visible = true;
        }
      });
      this.yAxes.each((axis) => {
        if (round(axis.get("start", 0), 5) != 0 || round(axis.get("end", 1), 5) != 1) {
          visible = true;
        }
      });
      if (visible) {
        if (zoomOutButton.isHidden()) {
          zoomOutButton.show();
        }
      } else {
        zoomOutButton.hide();
      }
    }
  }
  /**
   * Checks if point is within plot area.
   *
   * @param   point  Reference point
   * @return         Is within plot area?
   */
  inPlot(point3) {
    const plotContainer = this.plotContainer;
    const otherCharts = this.getPrivate("otherCharts", this._otherCharts);
    const global = plotContainer.toGlobal(point3);
    if (point3.x >= -0.5 && point3.y >= -0.5 && point3.x <= plotContainer.width() + 0.5 && point3.y <= plotContainer.height() + 0.5) {
      return true;
    }
    if (otherCharts) {
      for (let i = otherCharts.length - 1; i >= 0; i--) {
        const chart = otherCharts[i];
        if (chart != this) {
          const chartPlotContainer = chart.plotContainer;
          const documentPoint = this._root.rootPointToDocument(global);
          const chartRoot = chart._root.documentPointToRoot(documentPoint);
          const local = chartPlotContainer.toLocal(chartRoot);
          if (local.x >= -0.1 && local.y >= -0.1 && local.x <= chartPlotContainer.width() + 0.1 && local.y <= chartPlotContainer.height() + 0.1) {
            return true;
          }
        }
      }
    }
    return false;
  }
  /**
   * @ignore
   */
  arrangeTooltips() {
    const plotContainer = this.plotContainer;
    const w = plotContainer.width();
    const h = plotContainer.height();
    let hh = this.height();
    const bounds = this._root.tooltipContainer.get("layerMargin");
    if (bounds) {
      if (bounds.bottom > hh) {
        hh = bounds.bottom;
      }
    }
    let plotT = plotContainer._display.toGlobal({
      x: 0,
      y: 0
    });
    let plotB = plotContainer._display.toGlobal({
      x: w,
      y: h
    });
    const tooltips = [];
    let sum = 0;
    let minDistance = Infinity;
    let movePoint = this._movePoint;
    let maxTooltipDistance = this.get("maxTooltipDistance");
    let maxTooltipDistanceBy = this.get("maxTooltipDistanceBy", "xy");
    let closest2;
    let closestPoint;
    if (isNumber(maxTooltipDistance)) {
      this.series.each((series) => {
        if (!series.isHidden()) {
          const tooltip = series.get("tooltip");
          if (tooltip) {
            let point3 = tooltip.get("pointTo");
            if (point3) {
              let distance = Math.hypot(movePoint.x - point3.x, movePoint.y - point3.y);
              if (maxTooltipDistanceBy == "x") {
                distance = Math.abs(movePoint.x - point3.x);
              } else if (maxTooltipDistanceBy == "y") {
                distance = Math.abs(movePoint.y - point3.y);
              }
              if (distance < minDistance) {
                minDistance = distance;
                closest2 = series;
                closestPoint = point3;
              }
            }
          }
        }
      });
    }
    const tooltipSeries = [];
    this.series.each((series) => {
      const tooltip = series.get("tooltip");
      if (tooltip && !tooltip.get("forceHidden")) {
        let hidden = false;
        let point3 = tooltip.get("pointTo");
        if (point3) {
          if (maxTooltipDistance >= 0) {
            let point4 = tooltip.get("pointTo");
            if (point4 && closestPoint) {
              if (series != closest2) {
                let distance = Math.hypot(closestPoint.x - point4.x, closestPoint.y - point4.y);
                if (maxTooltipDistanceBy == "x") {
                  distance = Math.abs(closestPoint.x - point4.x);
                } else if (maxTooltipDistanceBy == "y") {
                  distance = Math.abs(closestPoint.y - point4.y);
                }
                if (distance > maxTooltipDistance) {
                  hidden = true;
                }
              }
            }
          } else if (maxTooltipDistance == -1) {
            if (series != closest2) {
              hidden = true;
            }
          }
          if (!this.inPlot(this._tooltipToLocal(point3)) || !tooltip.dataItem) {
            hidden = true;
          } else {
            if (!hidden) {
              sum += point3.y;
            }
          }
          if (hidden || series.isHidden() || series.isHiding()) {
            tooltip.hide(0);
          } else {
            tooltip.show();
            tooltips.push(tooltip);
            tooltipSeries.push(series);
          }
        }
      }
    });
    this.setPrivate("tooltipSeries", tooltipSeries);
    if (this.get("arrangeTooltips")) {
      let totalTooltipH = 0;
      let tooltipCount = 0;
      const tooltipContainer = this._root.tooltipContainer;
      const count = tooltips.length;
      const average = sum / count;
      if (average > h / 2 + plotT.y) {
        tooltips.sort((a, b) => compareNumber(b.get("pointTo").y, a.get("pointTo").y));
        let prevY = plotB.y;
        each(tooltips, (tooltip) => {
          let height = tooltip.height();
          tooltipCount++;
          totalTooltipH += height;
          let centerY = tooltip.get("centerY");
          if (centerY instanceof Percent) {
            height *= centerY.value;
          }
          height += tooltip.get("marginBottom", 0);
          tooltip.set("bounds", {
            left: plotT.x,
            top: plotT.y,
            right: plotB.x,
            bottom: prevY
          });
          tooltip.setPrivate("customData", {
            left: plotT.x,
            top: plotT.y,
            right: plotB.x,
            bottom: prevY
          });
          prevY = Math.min(prevY - height, tooltip._fy - height);
          if (tooltip.parent == tooltipContainer) {
            tooltipContainer.children.moveValue(tooltip, 0);
          }
        });
        if (prevY < 0) {
          tooltips.reverse();
          let prevBottom = prevY;
          each(tooltips, (tooltip) => {
            tooltipCount++;
            let bounds2 = tooltip.get("bounds");
            if (bounds2) {
              let top = bounds2.top - prevY;
              let bottom = bounds2.bottom - prevY;
              if (top < prevBottom) {
                top = prevBottom;
                bottom = top + tooltip.height();
              }
              tooltip.set("bounds", {
                left: bounds2.left,
                top,
                right: bounds2.right,
                bottom
              });
              prevBottom = bounds2.bottom - prevY + tooltip.get("marginBottom", 0);
            }
          });
        }
      } else {
        tooltips.reverse();
        tooltips.sort((a, b) => compareNumber(a.get("pointTo").y, b.get("pointTo").y));
        let prevY = 0;
        each(tooltips, (tooltip) => {
          tooltipCount++;
          let height = tooltip.height();
          totalTooltipH += height;
          let centerY = tooltip.get("centerY");
          if (centerY instanceof Percent) {
            height *= centerY.value;
          }
          height += tooltip.get("marginBottom", 0);
          tooltip.set("bounds", {
            left: plotT.x,
            top: prevY,
            right: plotB.x,
            bottom: Math.max(plotT.y + hh, prevY + height)
          });
          if (tooltip.parent == tooltipContainer) {
            tooltipContainer.children.moveValue(tooltip, 0);
          }
          prevY = Math.max(prevY + height, tooltip._fy + height);
        });
        if (prevY > hh) {
          tooltips.reverse();
          let prevBottom = hh;
          each(tooltips, (tooltip) => {
            tooltipCount++;
            let bounds2 = tooltip.get("bounds");
            if (bounds2) {
              let top = bounds2.top - (hh - prevY);
              let bottom = bounds2.bottom - (hh - prevY);
              if (bottom > prevBottom) {
                bottom = prevBottom;
                top = bottom - tooltip.height();
              }
              tooltip.set("bounds", {
                left: bounds2.left,
                top,
                right: bounds2.right,
                bottom
              });
              prevBottom = bottom - tooltip.height() - tooltip.get("marginBottom", 0);
            }
          });
        }
      }
      if (totalTooltipH == 0 && tooltipCount > 0) {
        this._disposers.push(this.root.events.once("frameended", () => {
          this.arrangeTooltips();
        }));
      }
    }
  }
  _tooltipToLocal(point3) {
    return this.plotContainer.toLocal(point3);
  }
  /**
   * Fully zooms out the chart.
   */
  zoomOut() {
    this.xAxes.each((axis) => {
      axis.setPrivate("updateScrollbar", true);
      axis.zoom(0, 1);
    });
    this.yAxes.each((axis) => {
      axis.setPrivate("updateScrollbar", true);
      axis.zoom(0, 1);
    });
  }
  _dispose() {
    super._dispose();
    const cursor = this.get("cursor");
    if (cursor) {
      cursor.dispose();
    }
  }
};
Object.defineProperty(XYChart, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYChart"
});
Object.defineProperty(XYChart, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: SerialChart.classNames.concat([XYChart.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/XYChartScrollbar.js
var XYChartScrollbar = class extends Scrollbar {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(XYChart.new(this._root, {
        themeTags: ["chart"],
        interactive: false,
        interactiveChildren: false,
        panX: false,
        panY: false,
        wheelX: "none",
        wheelY: "none"
      }))
    });
    Object.defineProperty(this, "overlay", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, {
        themeTags: ["overlay"],
        interactive: false
      }))
    });
  }
  _afterNew() {
    this._addOrientationClass();
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["scrollbar", "xy", "chart", this._settings.orientation]);
    const children = this.children;
    children.moveValue(this.thumb);
    children.moveValue(this.startGrip);
    children.moveValue(this.endGrip);
    this.thumb.set("opacity", 0);
    this.thumb.states.create("hover", {
      opacity: 0.2
    });
    const plotContainer = this.chart.plotContainer;
    plotContainer.set("interactive", false);
    plotContainer.remove("background");
    plotContainer.children.removeValue(this.chart.zoomOutButton);
    super._afterNew();
  }
  _updateThumb() {
    super._updateThumb();
    this.overlay.set("draw", (display) => {
      const startGrip = this.startGrip;
      const endGrip = this.endGrip;
      let x0 = startGrip.x();
      let y0 = startGrip.y();
      let x1 = endGrip.x();
      let y1 = endGrip.y();
      const h = this.height();
      const w = this.width();
      if (x0 > x1) {
        [x0, x1] = [x1, x0];
      }
      if (y0 > y1) {
        [y0, y1] = [y1, y0];
      }
      if (this.get("orientation") === "horizontal") {
        display.moveTo(0, 0);
        display.lineTo(x0, 0);
        display.lineTo(x0, h);
        display.lineTo(0, h);
        display.lineTo(0, 0);
        display.moveTo(x1, 0);
        display.lineTo(w, 0);
        display.lineTo(w, h);
        display.lineTo(x1, h);
        display.lineTo(x1, 0);
      } else {
        display.moveTo(0, 0);
        display.lineTo(0, y0);
        display.lineTo(w, y0);
        display.lineTo(w, 0);
        display.lineTo(0, 0);
        display.moveTo(0, y1);
        display.lineTo(0, h);
        display.lineTo(w, h);
        display.lineTo(w, y1);
        display.lineTo(0, y1);
      }
    });
  }
};
Object.defineProperty(XYChartScrollbar, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYChartScrollbar"
});
Object.defineProperty(XYChartScrollbar, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Scrollbar.classNames.concat([XYChartScrollbar.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/Grid.js
var Grid = class extends Graphics {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      this._clear = true;
    }
  }
};
Object.defineProperty(Grid, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Grid"
});
Object.defineProperty(Grid, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([Grid.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/XYCursor.js
var XYCursor = class extends Container {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_alwaysShow", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "lineX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Grid.new(this._root, {
        themeTags: ["x"]
      }))
    });
    Object.defineProperty(this, "lineY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Grid.new(this._root, {
        themeTags: ["y"]
      }))
    });
    Object.defineProperty(this, "selection", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Graphics.new(this._root, {
        themeTags: ["selection", "cursor"],
        layer: 30
      }))
    });
    Object.defineProperty(this, "_movePoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_lastPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        x: 0,
        y: 0
      }
    });
    Object.defineProperty(this, "_lastPoint2", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        x: 0,
        y: 0
      }
    });
    Object.defineProperty(this, "_tooltipX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_tooltipY", {
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
    Object.defineProperty(this, "_toX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_toY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["xy", "cursor"]);
    super._afterNew();
    this.setAll({
      "width": p100,
      height: p100,
      isMeasured: true,
      position: "absolute"
    });
    this.states.create("hidden", {
      visible: true,
      opacity: 0
    });
    this._drawLines();
    this.setPrivateRaw("visible", false);
    this._disposers.push(this.setTimeout(() => {
      this.setPrivate("visible", true);
    }, 500));
    this._disposers.push(this.lineX.events.on("positionchanged", () => {
      this._handleXLine();
    }));
    this._disposers.push(this.lineY.events.on("positionchanged", () => {
      this._handleYLine();
    }));
    this._disposers.push(this.lineX.events.on("focus", () => this._handleLineFocus()));
    this._disposers.push(this.lineX.events.on("blur", () => this._handleLineBlur()));
    this._disposers.push(this.lineY.events.on("focus", () => this._handleLineFocus()));
    this._disposers.push(this.lineY.events.on("blur", () => this._handleLineBlur()));
    if (supports("keyboardevents")) {
      this._disposers.push(addEventListener(document, "keydown", (ev) => {
        this._handleLineMove(getEventKey(ev), ev.ctrlKey);
      }));
    }
  }
  _setUpTouch() {
    const chart = this.chart;
    if (chart) {
      chart.plotContainer._display.cancelTouch = this.get("behavior") != "none" ? true : false;
    }
  }
  _handleXLine() {
    let x = this.lineX.x();
    let visible = true;
    if (x < 0 || x > this.width()) {
      visible = false;
    }
    this.lineX.setPrivate("visible", visible);
  }
  _handleYLine() {
    let y = this.lineY.y();
    let visible = true;
    if (y < 0 || y > this.height()) {
      visible = false;
    }
    this.lineY.setPrivate("visible", visible);
  }
  _handleLineMove(key, ctrlKey) {
    let dir = "";
    const chart = this.chart;
    let axis;
    if (chart && chart.xAxes.length) {
      if (this._root.focused(this.lineX)) {
        dir = "positionX";
        axis = chart.xAxes.getIndex(0);
      } else if (this._root.focused(this.lineY)) {
        axis = chart.yAxes.getIndex(0);
        dir = "positionY";
      }
      let m = 1;
      if (ctrlKey) {
        m = 5;
      }
      if (axis) {
        let inversed = axis.get("renderer").get("inversed", false);
        let step;
        if (key == "ArrowRight" || key == "ArrowDown") {
          step = 1;
        } else if (key == "ArrowLeft" || key == "ArrowUp") {
          step = -1;
        } else if (key == "Tab") {
          step = 0;
        }
        if (step != null) {
          if (inversed) {
            step *= -1;
          }
          this.set(dir, axis.nextPosition(step * m));
        }
      }
    }
  }
  _handleLineFocus() {
    this._alwaysShow = this.get("alwaysShow", false);
    this.setAll({
      positionX: this.getPrivate("positionX", 0),
      positionY: this.getPrivate("positionY", 0),
      alwaysShow: true
    });
    this._handleLineMove("Tab");
  }
  _handleLineBlur() {
    if (this.lineX.isFocus() || this.lineY.isFocus()) {
      this.setAll({
        positionX: void 0,
        positionY: void 0,
        alwaysShow: this._alwaysShow
      });
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("xAxis")) {
      this._tooltipX = false;
      const xAxis = this.get("xAxis");
      if (xAxis) {
        const tooltip = xAxis.get("tooltip");
        if (tooltip) {
          this._tooltipX = true;
          this._disposers.push(tooltip.on("pointTo", () => {
            this._updateXLine(tooltip);
          }));
        }
      }
    }
    if (this.isDirty("yAxis")) {
      this._tooltipY = false;
      const yAxis = this.get("yAxis");
      if (yAxis) {
        const tooltip = yAxis.get("tooltip");
        if (tooltip) {
          this._tooltipY = true;
          this._disposers.push(tooltip.on("pointTo", () => {
            this._updateYLine(tooltip);
          }));
        }
      }
    }
  }
  _handleSyncWith() {
    const chart = this.chart;
    if (chart) {
      const syncWith = this.get("syncWith");
      const otherCharts = [];
      if (syncWith) {
        each(syncWith, (cursor) => {
          const chart2 = cursor.chart;
          if (chart2) {
            otherCharts.push(chart2);
          }
        });
      }
      chart._otherCharts = otherCharts;
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._handleSyncWith();
    if (this.isDirty("positionX") || this.isDirty("positionY")) {
      const positionX = this.get("positionX");
      const positionY = this.get("positionY");
      if (positionX == null && positionY == null) {
        this.hide(0);
      } else {
        this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)));
        this.handleMove();
      }
    }
  }
  _updateXLine(tooltip) {
    let x = round(this._display.toLocal(tooltip.get("pointTo", {
      x: 0,
      y: 0
    })).x, 3);
    if (this._toX != x) {
      this.lineX.animate({
        key: "x",
        to: x,
        duration: tooltip.get("animationDuration", 0),
        easing: tooltip.get("animationEasing")
      });
      this._toX = x;
    }
  }
  _updateYLine(tooltip) {
    let y = round(this._display.toLocal(tooltip.get("pointTo", {
      x: 0,
      y: 0
    })).y, 3);
    if (this._toY != y) {
      this.lineY.animate({
        key: "y",
        to: y,
        duration: tooltip.get("animationDuration", 0),
        easing: tooltip.get("animationEasing")
      });
      this._toY = y;
    }
  }
  _drawLines() {
    this.lineX.set("draw", (display) => {
      display.moveTo(0, 0);
      display.lineTo(0, this.height());
    });
    this.lineY.set("draw", (display) => {
      display.moveTo(0, 0);
      display.lineTo(this.width(), 0);
    });
  }
  updateCursor() {
    if (this.get("alwaysShow")) {
      this._movePoint = this.toGlobal(this._getPoint(this.get("positionX", 0), this.get("positionY", 0)));
    }
    this.handleMove();
  }
  _setChart(chart) {
    this.chart = chart;
    this._handleSyncWith();
    const plotContainer = chart.plotContainer;
    this.events.on("boundschanged", () => {
      this._disposers.push(this.setTimeout(() => {
        this.updateCursor();
      }, 50));
    });
    if (supports("touchevents")) {
      this._disposers.push(plotContainer.events.on("click", (event) => {
        if (isTouchEvent(event.originalEvent)) {
          this._handleMove(event);
        }
      }));
      this._setUpTouch();
    }
    this._disposers.push(plotContainer.events.on("pointerdown", (event) => {
      this._handleCursorDown(event);
    }));
    this._disposers.push(plotContainer.events.on("globalpointerup", (event) => {
      this._handleCursorUp(event);
      if (!event.native && !this.isHidden()) {
        this._handleMove(event);
      }
    }));
    this._disposers.push(plotContainer.events.on("globalpointermove", (event) => {
      if (!this.get("syncWith")) {
        if (keys(plotContainer._downPoints).length == 0 && !event.native && this.isHidden()) {
          return;
        }
      }
      this._handleMove(event);
      if (Math.hypot(this._lastPoint2.x - event.point.x, this._lastPoint2.y - event.point.y) > 1) {
        this._handleLineBlur();
        this._lastPoint2 = event.point;
      }
    }));
    const parent = this.parent;
    if (parent) {
      parent.children.moveValue(this.selection);
    }
  }
  _inPlot(point3) {
    const chart = this.chart;
    if (chart) {
      return chart.inPlot(point3);
    }
    return false;
  }
  _handleCursorDown(event) {
    if (event.originalEvent.button == 2) {
      return;
    }
    const rootPoint = event.point;
    let local = this._display.toLocal(rootPoint);
    const chart = this.chart;
    this.selection.set("draw", () => {
    });
    if (chart && this._inPlot(local)) {
      this._downPoint = local;
      if (this.get("behavior") != "none") {
        this.selection.show();
        const type = "selectstarted";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, {
            type,
            target: this,
            originalEvent: event.originalEvent
          });
        }
      }
      let positionX = this._getPosition(local).x;
      let positionY = this._getPosition(local).y;
      this.setPrivate("downPositionX", positionX);
      this.setPrivate("downPositionY", positionY);
    }
  }
  _handleCursorUp(event) {
    if (this._downPoint) {
      const behavior = this.get("behavior", "none");
      if (behavior != "none") {
        if (behavior.charAt(0) === "z") {
          this.selection.hide();
        }
        const rootPoint = event.point;
        let local = this._display.toLocal(rootPoint);
        const downPoint = this._downPoint;
        const moveThreshold = this.get("moveThreshold", 1);
        if (local && downPoint) {
          let dispatch = false;
          if (behavior === "zoomX" || behavior === "zoomXY" || behavior === "selectX" || behavior === "selectXY") {
            if (Math.abs(local.x - downPoint.x) > moveThreshold) {
              dispatch = true;
            }
          }
          if (behavior === "zoomY" || behavior === "zoomXY" || behavior === "selectY" || behavior === "selectXY") {
            if (Math.abs(local.y - downPoint.y) > moveThreshold) {
              dispatch = true;
            }
          }
          if (dispatch) {
            const type = "selectended";
            if (this.events.isEnabled(type)) {
              this.events.dispatch(type, {
                type,
                target: this,
                originalEvent: event.originalEvent
              });
            }
          } else {
            const type = "selectcancelled";
            if (this.events.isEnabled(type)) {
              this.events.dispatch(type, {
                type,
                target: this,
                originalEvent: event.originalEvent
              });
            }
          }
        }
      }
    }
    this._downPoint = void 0;
  }
  _handleMove(event) {
    if (this.getPrivate("visible")) {
      const chart = this.chart;
      if (chart && keys(chart.plotContainer._downPoints).length > 1) {
        this.set("forceHidden", true);
        return;
      } else {
        this.set("forceHidden", false);
      }
      const rootPoint = event.point;
      const lastPoint = this._lastPoint;
      if (Math.round(lastPoint.x) === Math.round(rootPoint.x) && Math.round(lastPoint.y) === Math.round(rootPoint.y)) {
        return;
      }
      this._lastPoint = rootPoint;
      this.setPrivate("lastPoint", rootPoint);
      this.handleMove({
        x: rootPoint.x,
        y: rootPoint.y
      }, false, event.originalEvent);
    }
  }
  _getPosition(point3) {
    return {
      x: point3.x / this.width(),
      y: point3.y / this.height()
    };
  }
  /**
   * Moves the cursor to X/Y coordinates within chart container (`point`).
   *
   * If `skipEvent` parameter is set to `true`, the move will not invoke
   * the `"cursormoved"` event.
   *
   * @param  point      X/Y to move cursor to
   * @param  skipEvent  Do not fire "cursormoved" event
   */
  handleMove(point3, skipEvent, originalEvent) {
    if (!point3) {
      point3 = this._movePoint;
    }
    const alwaysShow = this.get("alwaysShow");
    if (!point3) {
      this.hide(0);
      return;
    }
    this._movePoint = point3;
    let local = this._display.toLocal(point3);
    let chart = this.chart;
    if (chart && (this._inPlot(local) || this._downPoint)) {
      chart._movePoint = point3;
      if (this.isHidden()) {
        this.show();
        const behavior = this.get("behavior", "");
        if (behavior.charAt(0) == "z") {
          this.selection.set("draw", () => {
          });
        }
      }
      let x = local.x;
      let y = local.y;
      let xyPos = this._getPosition(local);
      this.setPrivate("point", local);
      let snapToSeries = this.get("snapToSeries");
      if (this._downPoint) {
        snapToSeries = void 0;
      }
      let userPositionX = this.get("positionX");
      let positionX = xyPos.x;
      if (isNumber(userPositionX)) {
        positionX = userPositionX;
      }
      let userPositionY = this.get("positionY");
      let positionY = xyPos.y;
      if (isNumber(userPositionY)) {
        positionY = userPositionY;
      }
      this.setPrivate("positionX", positionX);
      this.setPrivate("positionY", positionY);
      const xy = this._getPoint(positionX, positionY);
      x = xy.x;
      y = xy.y;
      chart.xAxes.each((axis) => {
        axis._handleCursorPosition(positionX, snapToSeries);
        if (alwaysShow) {
          axis.handleCursorShow();
        }
      });
      chart.yAxes.each((axis) => {
        axis._handleCursorPosition(positionY, snapToSeries);
        if (alwaysShow) {
          axis.handleCursorShow();
        }
      });
      if (!skipEvent) {
        chart._handleCursorPosition();
        const type = "cursormoved";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, {
            type,
            target: this,
            point: point3,
            originalEvent
          });
        }
      }
      this._updateLines(x, y);
      chart.arrangeTooltips();
    } else if (!this._downPoint) {
      if (!alwaysShow) {
        this.hide(0);
        const type = "cursorhidden";
        if (this.events.isEnabled(type)) {
          this.events.dispatch(type, {
            type,
            target: this
          });
        }
      }
    }
    if (this._downPoint && this.get("behavior") != "none") {
      this._updateSelection(local);
    }
  }
  _getPoint(positionX, positionY) {
    return {
      x: this.width() * positionX,
      y: this.height() * positionY
    };
  }
  _updateLines(x, y) {
    if (!this._tooltipX) {
      this.lineX.set("x", x);
    }
    if (!this._tooltipY) {
      this.lineY.set("y", y);
    }
    this._drawLines();
  }
  _updateSelection(point3) {
    const selection = this.selection;
    const behavior = this.get("behavior");
    const w = this.width();
    const h = this.height();
    if (point3.x < 0) {
      point3.x = 0;
    }
    if (point3.x > w) {
      point3.x = w;
    }
    if (point3.y < 0) {
      point3.y = 0;
    }
    if (point3.y > h) {
      point3.y = h;
    }
    selection.set("draw", (display) => {
      const downPoint = this._downPoint;
      if (downPoint) {
        if (behavior === "zoomXY" || behavior === "selectXY") {
          display.moveTo(downPoint.x, downPoint.y);
          display.lineTo(downPoint.x, point3.y);
          display.lineTo(point3.x, point3.y);
          display.lineTo(point3.x, downPoint.y);
          display.lineTo(downPoint.x, downPoint.y);
        } else if (behavior === "zoomX" || behavior === "selectX") {
          display.moveTo(downPoint.x, 0);
          display.lineTo(downPoint.x, h);
          display.lineTo(point3.x, h);
          display.lineTo(point3.x, 0);
          display.lineTo(downPoint.x, 0);
        } else if (behavior === "zoomY" || behavior === "selectY") {
          display.moveTo(0, downPoint.y);
          display.lineTo(w, downPoint.y);
          display.lineTo(w, point3.y);
          display.lineTo(0, point3.y);
          display.lineTo(0, downPoint.y);
        }
      }
    });
  }
  _onHide() {
    if (this.isHidden()) {
      let chart = this.chart;
      if (chart) {
        chart.xAxes.each((axis) => {
          axis.handleCursorHide();
        });
        chart.yAxes.each((axis) => {
          axis.handleCursorHide();
        });
        chart.series.each((series) => {
          series.handleCursorHide();
        });
      }
    }
    super._onHide();
  }
  _onShow() {
    if (!this.isHidden()) {
      let chart = this.chart;
      if (chart) {
        chart.xAxes.each((axis) => {
          axis.handleCursorShow();
        });
        chart.yAxes.each((axis) => {
          axis.handleCursorShow();
        });
      }
    }
    super._onShow();
  }
  _dispose() {
    super._dispose();
    this.selection.dispose();
  }
};
Object.defineProperty(XYCursor, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYCursor"
});
Object.defineProperty(XYCursor, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Container.classNames.concat([XYCursor.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/XYSeries.js
function min(left, right) {
  if (left == null) {
    return right;
  } else if (right == null) {
    return left;
  } else if (right < left) {
    return right;
  } else {
    return left;
  }
}
function max(left, right) {
  if (left == null) {
    return right;
  } else if (right == null) {
    return left;
  } else if (right > left) {
    return right;
  } else {
    return left;
  }
}
var XYSeries = class extends Series {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_xField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xOpenField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yOpenField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xLowField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_xHighField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yLowField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_yHighField", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_axesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_stackDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_selectionProcessed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dataSets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_mainContainerMask", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
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
    Object.defineProperty(this, "_bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "mainContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "axisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "_skipped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_couldStackTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_reallyStackedTo", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_stackedSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_aLocationX0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_aLocationX1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_aLocationY0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_aLocationY1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_showBullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: true
    });
    Object.defineProperty(this, "valueXFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["valueX", "openValueX", "lowValueX", "highValueX"]
    });
    Object.defineProperty(this, "valueYFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: ["valueY", "openValueY", "lowValueY", "highValueY"]
    });
    Object.defineProperty(this, "_valueXFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueYFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueXShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_valueYShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "__valueXShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "__valueYShowFields", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_emptyDataItem", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new DataItem(this, void 0, {})
    });
    Object.defineProperty(this, "_dataSetId", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipFieldX", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_tooltipFieldY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_posXDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_posYDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.fields.push("categoryX", "categoryY", "openCategoryX", "openCategoryY");
    this.valueFields.push("valueX", "valueY", "openValueX", "openValueY", "lowValueX", "lowValueY", "highValueX", "highValueY");
    this._setRawDefault("vcx", 1);
    this._setRawDefault("vcy", 1);
    this._setRawDefault("valueXShow", "valueXWorking");
    this._setRawDefault("valueYShow", "valueYWorking");
    this._setRawDefault("openValueXShow", "openValueXWorking");
    this._setRawDefault("openValueYShow", "openValueYWorking");
    this._setRawDefault("lowValueXShow", "lowValueXWorking");
    this._setRawDefault("lowValueYShow", "lowValueYWorking");
    this._setRawDefault("highValueXShow", "highValueXWorking");
    this._setRawDefault("highValueYShow", "highValueYWorking");
    this._setRawDefault("lowValueXGrouped", "low");
    this._setRawDefault("lowValueYGrouped", "low");
    this._setRawDefault("highValueXGrouped", "high");
    this._setRawDefault("highValueYGrouped", "high");
    super._afterNew();
    this.set("maskContent", true);
    this._disposers.push(this.axisRanges.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (axisRange) => {
          this._removeAxisRange(axisRange);
        });
      } else if (change.type === "push") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "setIndex") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "insertIndex") {
        this._processAxisRange(change.newValue);
      } else if (change.type === "removeIndex") {
        this._removeAxisRange(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._processAxisRange(change.value);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
    }));
    this.states.create("hidden", {
      opacity: 1,
      visible: false
    });
    this.onPrivate("startIndex", () => {
      this.root.events.once("frameended", () => {
        this.updateLegendValue();
      });
    });
    this.onPrivate("endIndex", () => {
      this.root.events.once("frameended", () => {
        this.updateLegendValue();
      });
    });
    this._makeFieldNames();
  }
  _processAxisRange(axisRange) {
    const container = Container.new(this._root, {});
    axisRange.container = container;
    this.children.push(container);
    axisRange.series = this;
    const axisDataItem = axisRange.axisDataItem;
    axisDataItem.setRaw("isRange", true);
    const axis = axisDataItem.component;
    if (axis) {
      axis._processAxisRange(axisDataItem, ["range", "series"]);
      const bullet = axisDataItem.get("bullet");
      if (bullet) {
        const sprite = bullet.get("sprite");
        if (sprite) {
          sprite.setPrivate("visible", false);
        }
      }
      const axisFill = axisDataItem.get("axisFill");
      if (axisFill) {
        container.set("mask", axisFill);
      }
      axis._seriesAxisRanges.push(axisDataItem);
    }
  }
  _onDataClear() {
    super._onDataClear();
    each2(this._dataSets, (_key, dataItems) => {
      each(dataItems, (dataItem) => {
        dataItem.dispose();
      });
      dataItems.length = 0;
    });
  }
  _removeAxisRange(axisRange) {
    const axisDataItem = axisRange.axisDataItem;
    const axis = axisDataItem.component;
    axisDataItem.dispose();
    remove(axis._seriesAxisRanges, axisDataItem);
    const container = axisRange.container;
    if (container) {
      container.dispose();
    }
  }
  _updateFields() {
    super._updateFields();
    this._valueXFields = [];
    this._valueYFields = [];
    this._valueXShowFields = [];
    this._valueYShowFields = [];
    this.__valueXShowFields = [];
    this.__valueYShowFields = [];
    if (this.valueXFields) {
      each(this.valueXFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueXFields.push(key);
          let field2 = this.get(key + "Show");
          this.__valueXShowFields.push(field2);
          if (field2.indexOf("Working") != -1) {
            this._valueXShowFields.push(field2.split("Working")[0]);
          } else {
            this._valueXShowFields.push(field2);
          }
        }
      });
    }
    if (this.valueYFields) {
      each(this.valueYFields, (key) => {
        const field = this.get(key + "Field");
        if (field) {
          this._valueYFields.push(key);
          let field2 = this.get(key + "Show");
          this.__valueYShowFields.push(field2);
          if (field2.indexOf("Working") != -1) {
            this._valueYShowFields.push(field2.split("Working")[0]);
          } else {
            this._valueYShowFields.push(field2);
          }
        }
      });
    }
  }
  _dispose() {
    super._dispose();
    this._bullets = {};
    const chart = this.chart;
    if (chart) {
      chart.series.removeValue(this);
    }
    removeFirst(this.get("xAxis").series, this);
    removeFirst(this.get("yAxis").series, this);
  }
  // TODO use  SelectKeys<this["_privateSettings"], number | undefined>
  _min(key, value) {
    let newValue = min(this.getPrivate(key), value);
    this.setPrivate(key, newValue);
  }
  // TODO use  SelectKeys<this["_privateSettings"], number | undefined>
  _max(key, value) {
    let newValue = max(this.getPrivate(key), value);
    this.setPrivate(key, newValue);
  }
  _shouldMakeBullet(dataItem) {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    if (!xAxis.inited || !yAxis.inited) {
      return false;
    }
    const minBulletDistance = this.get("minBulletDistance", 0);
    if (minBulletDistance > 0) {
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      let count = endIndex - startIndex;
      if (xAxis == baseAxis) {
        if (xAxis.get("renderer").axisLength() / count < minBulletDistance / 5) {
          return false;
        }
      } else if (yAxis == baseAxis) {
        if (yAxis.get("renderer").axisLength() / count < minBulletDistance / 5) {
          return false;
        }
      }
    }
    if (dataItem.get(this._xField) != null && dataItem.get(this._yField) != null) {
      return true;
    }
    return false;
  }
  _makeFieldNames() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const xName = xAxis.getPrivate("name");
    const xCapName = capitalizeFirst(xName);
    const yName = yAxis.getPrivate("name");
    const yCapName = capitalizeFirst(yName);
    const xLetter = xAxis.get("renderer").getPrivate("letter");
    const yLetter = yAxis.get("renderer").getPrivate("letter");
    const open = "open";
    const low = "low";
    const high = "high";
    const show = "Show";
    if (xAxis.className === "ValueAxis") {
      this._xField = this.get(xName + xLetter + show);
      this._xOpenField = this.get(open + xCapName + xLetter + show);
      this._xLowField = this.get(low + xCapName + xLetter + show);
      this._xHighField = this.get(high + xCapName + xLetter + show);
    } else {
      this._xField = xName + xLetter;
      this._xOpenField = open + xCapName + xLetter;
      this._xLowField = low + xCapName + xLetter;
      this._xHighField = high + xCapName + xLetter;
    }
    if (yAxis.className === "ValueAxis") {
      this._yField = this.get(yName + yLetter + show);
      this._yOpenField = this.get(open + yCapName + yLetter + show);
      this._yLowField = this.get(low + yCapName + yLetter + show);
      this._yHighField = this.get(high + yCapName + yLetter + show);
    } else {
      this._yField = yName + yLetter;
      this._yOpenField = open + yCapName + yLetter;
      this._yLowField = low + yCapName + yLetter;
      this._yHighField = high + yCapName + yLetter;
    }
  }
  _fixVC() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const hiddenState = this.states.lookup("hidden");
    const sequencedInterpolation = this.get("sequencedInterpolation");
    if (hiddenState) {
      let value = 0;
      if (sequencedInterpolation) {
        value = 0.999999999999;
      }
      if (xAxis === baseAxis) {
        hiddenState.set("vcy", value);
      } else if (yAxis === baseAxis) {
        hiddenState.set("vcx", value);
      } else {
        hiddenState.set("vcy", value);
        hiddenState.set("vcx", value);
      }
    }
  }
  _handleMaskBullets() {
    if (this.isDirty("maskBullets")) {
      this.bulletsContainer.set("maskContent", this.get("maskBullets"));
    }
  }
  _fixPosition() {
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    this.set("x", xAxis.x() - relativeToValue(xAxis.get("centerX", 0), xAxis.width()) - xAxis.parent.get("paddingLeft", 0));
    this.set("y", yAxis.y() - relativeToValue(yAxis.get("centerY", 0), yAxis.height()) - yAxis.parent.get("paddingTop", 0));
    this.bulletsContainer.set("y", this.y());
    this.bulletsContainer.set("x", this.x());
  }
  _prepareChildren() {
    super._prepareChildren();
    this._bullets = {};
    if (this.isDirty("valueYShow") || this.isDirty("valueXShow") || this.isDirty("openValueYShow") || this.isDirty("openValueXShow") || this.isDirty("lowValueYShow") || this.isDirty("lowValueXShow") || this.isDirty("highValueYShow") || this.isDirty("highValueXShow")) {
      this._updateFields();
      this._makeFieldNames();
      this._valuesDirty = true;
    }
    if (this.isDirty("xAxis") || this.isDirty("yAxis")) {
      this._valuesDirty = true;
    }
    this.set("width", this.get("xAxis").width());
    this.set("height", this.get("yAxis").height());
    this._handleMaskBullets();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const tooltipPositionX = this.get("tooltipPositionX");
    let tooltipFieldX;
    switch (tooltipPositionX) {
      case "open":
        tooltipFieldX = this._xOpenField;
        break;
      case "low":
        tooltipFieldX = this._xLowField;
        break;
      case "high":
        tooltipFieldX = this._xHighField;
        break;
      default:
        tooltipFieldX = this._xField;
    }
    this._tooltipFieldX = tooltipFieldX;
    const tooltipPositionY = this.get("tooltipPositionY");
    let tooltipFieldY;
    switch (tooltipPositionY) {
      case "open":
        tooltipFieldY = this._yOpenField;
        break;
      case "low":
        tooltipFieldY = this._yLowField;
        break;
      case "high":
        tooltipFieldY = this._yHighField;
        break;
      default:
        tooltipFieldY = this._yField;
    }
    this._tooltipFieldY = tooltipFieldY;
    if (this.isDirty("baseAxis")) {
      this._fixVC();
    }
    this._fixPosition();
    const stacked = this.get("stacked");
    if (this.isDirty("stacked")) {
      if (stacked) {
        if (this._valuesDirty && !this._dataProcessed) {
        } else {
          this._stack();
        }
      } else {
        this._unstack();
      }
    }
    if (this._valuesDirty && !this._dataProcessed) {
      this._dataProcessed = true;
      if (stacked) {
        this._stack();
      }
      each(this.dataItems, (dataItem) => {
        each(this._valueXShowFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            if (stacked) {
              value += this.getStackedXValue(dataItem, key);
            }
            this._min("minX", value);
            this._max("maxX", value);
          }
        });
        each(this._valueYShowFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            if (stacked) {
              value += this.getStackedYValue(dataItem, key);
            }
            this._min("minY", value);
            this._max("maxY", value);
          }
        });
        xAxis.processSeriesDataItem(dataItem, this._valueXFields);
        yAxis.processSeriesDataItem(dataItem, this._valueYFields);
      });
      xAxis._seriesValuesDirty = true;
      yAxis._seriesValuesDirty = true;
      if (!this.get("ignoreMinMax")) {
        if (this.isPrivateDirty("minX") || this.isPrivateDirty("maxX")) {
          xAxis.markDirtyExtremes();
        }
        if (this.isPrivateDirty("minY") || this.isPrivateDirty("maxY")) {
          yAxis.markDirtyExtremes();
        }
      }
      this._markStakedDirtyStack();
      if (!this.get("tooltipDataItem")) {
        this.updateLegendValue(void 0);
      }
    }
    if (this.isDirty("vcx") || this.isDirty("vcy")) {
      this._markStakedDirtyStack();
    }
    if (!this._dataGrouped) {
      xAxis._groupSeriesData(this);
      yAxis._groupSeriesData(this);
      this._dataGrouped = true;
    }
    if (this._valuesDirty || this.isPrivateDirty("startIndex") || this.isPrivateDirty("adjustedStartIndex") || this.isPrivateDirty("endIndex") || this.isDirty("vcx") || this.isDirty("vcy") || this._stackDirty || this._sizeDirty) {
      let startIndex = this.startIndex();
      let endIndex = this.endIndex();
      let minBulletDistance = this.get("minBulletDistance", 0);
      if (minBulletDistance > 0 && baseAxis) {
        if (baseAxis.get("renderer").axisLength() / (endIndex - startIndex) > minBulletDistance) {
          this._showBullets = true;
        } else {
          this._showBullets = false;
        }
      }
      if ((this._psi != startIndex || this._pei != endIndex || this.isDirty("vcx") || this.isDirty("vcy") || this.isPrivateDirty("adjustedStartIndex") || this._stackDirty || this._valuesDirty) && !this._selectionProcessed) {
        this._selectionProcessed = true;
        const vcx = this.get("vcx", 1);
        const vcy = this.get("vcy", 1);
        const stacked2 = this.get("stacked", false);
        const outOfSelection = this.getPrivate("outOfSelection");
        if (baseAxis === xAxis || !baseAxis) {
          yAxis._calculateTotals();
          this.setPrivateRaw("selectionMinY", void 0);
          this.setPrivateRaw("selectionMaxY", void 0);
          if (!outOfSelection) {
            for (let i = startIndex; i < endIndex; i++) {
              this.processYSelectionDataItem(this.dataItems[i], vcy, stacked2);
            }
          } else {
            yAxis.markDirtySelectionExtremes();
          }
        }
        if (baseAxis === yAxis || !baseAxis) {
          xAxis._calculateTotals();
          this.setPrivateRaw("selectionMinX", void 0);
          this.setPrivateRaw("selectionMaxX", void 0);
          if (!outOfSelection) {
            for (let i = startIndex; i < endIndex; i++) {
              this.processXSelectionDataItem(this.dataItems[i], vcx, stacked2);
            }
          } else {
            yAxis.markDirtySelectionExtremes();
          }
        }
        if (baseAxis === xAxis || !baseAxis) {
          if (this.get("valueYShow") !== "valueYWorking" || this.get("useSelectionExtremes")) {
            const selectionMinY = this.getPrivate("selectionMinY");
            if (selectionMinY != null) {
              this.setPrivateRaw("minY", selectionMinY);
              yAxis.markDirtyExtremes();
            }
            const selectionMaxY = this.getPrivate("selectionMaxY");
            if (selectionMaxY != null) {
              this.setPrivateRaw("maxY", selectionMaxY);
              yAxis.markDirtyExtremes();
            }
          }
        }
        if (baseAxis === yAxis || !baseAxis) {
          if (this.get("valueXShow") !== "valueXWorking" || this.get("useSelectionExtremes")) {
            const selectionMinX = this.getPrivate("selectionMinX");
            if (selectionMinX != null) {
              this.setPrivateRaw("minX", selectionMinX);
              yAxis.markDirtyExtremes();
            }
            const selectionMaxX = this.getPrivate("selectionMaxX");
            if (selectionMaxX != null) {
              this.setPrivateRaw("maxX", selectionMaxX);
              xAxis.markDirtyExtremes();
            }
          }
        }
        if (this.isPrivateDirty("selectionMinX") || this.isPrivateDirty("selectionMaxX")) {
          xAxis.markDirtySelectionExtremes();
        }
        if (this.isPrivateDirty("selectionMinY") || this.isPrivateDirty("selectionMaxY")) {
          yAxis.markDirtySelectionExtremes();
        }
      }
    }
  }
  _makeRangeMask() {
    if (this.axisRanges.length > 0) {
      let mainContainerMask = this._mainContainerMask;
      if (mainContainerMask == null) {
        mainContainerMask = this.children.push(Graphics.new(this._root, {}));
        this._mainContainerMask = mainContainerMask;
        mainContainerMask.set("draw", (display, target) => {
          const parent = this.parent;
          if (parent) {
            const w = this._root.container.width();
            const h = this._root.container.height();
            display.moveTo(-w, -h);
            display.lineTo(-w, h * 2);
            display.lineTo(w * 2, h * 2);
            display.lineTo(w * 2, -h);
            display.lineTo(-w, -h);
            this.axisRanges.each((axisRange) => {
              const fill = axisRange.axisDataItem.get("axisFill");
              if (parent) {
                if (fill) {
                  let draw = fill.get("draw");
                  if (draw) {
                    draw(display, target);
                  }
                }
              }
            });
          }
          this.mainContainer._display.mask = mainContainerMask._display;
        });
      }
      mainContainerMask.markDirty();
      mainContainerMask._markDirtyKey("fill");
    } else {
      this.mainContainer._display.mask = null;
    }
  }
  _updateChildren() {
    super._updateChildren();
    this._x = this.x();
    this._y = this.y();
    this._makeRangeMask();
  }
  _stack() {
    const chart = this.chart;
    if (chart) {
      const seriesIndex = chart.series.indexOf(this);
      this._couldStackTo = [];
      if (seriesIndex > 0) {
        let series;
        for (let i = seriesIndex - 1; i >= 0; i--) {
          series = chart.series.getIndex(i);
          if (series.get("xAxis") === this.get("xAxis") && series.get("yAxis") === this.get("yAxis") && series.className === this.className) {
            this._couldStackTo.push(series);
            if (!series.get("stacked")) {
              break;
            }
          }
        }
      }
      this._stackDataItems();
    }
  }
  _unstack() {
    each2(this._reallyStackedTo, (_key, value) => {
      delete value._stackedSeries[this.uid];
    });
    this._reallyStackedTo = {};
    each(this.dataItems, (dataItem) => {
      dataItem.setRaw("stackToItemY", void 0);
      dataItem.setRaw("stackToItemX", void 0);
    });
  }
  _handleRemoved() {
    const xAxis = this.get("xAxis");
    if (xAxis) {
      xAxis._handleSeriesRemoved();
    }
    const yAxis = this.get("yAxis");
    if (yAxis) {
      yAxis._handleSeriesRemoved();
    }
  }
  _stackDataItems() {
    const baseAxis = this.get("baseAxis");
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    let field;
    let stackToItemKey;
    if (baseAxis === xAxis) {
      field = "valueY";
      stackToItemKey = "stackToItemY";
    } else if (baseAxis === yAxis) {
      field = "valueX";
      stackToItemKey = "stackToItemX";
    }
    let len = this._couldStackTo.length;
    let index = 0;
    const stackToNegative = this.get("stackToNegative");
    this._reallyStackedTo = {};
    each(this.dataItems, (dataItem) => {
      for (let s = 0; s < len; s++) {
        let stackToSeries = this._couldStackTo[s];
        let stackToItem = stackToSeries.dataItems[index];
        let value = dataItem.get(field);
        if (stackToItem) {
          let stackValue = stackToItem.get(field);
          if (stackToNegative) {
            if (isNumber(value)) {
              if (isNumber(stackValue)) {
                if (s == len - 1) {
                  dataItem.setRaw(stackToItemKey, void 0);
                }
                if (value >= 0 && stackValue >= 0) {
                  dataItem.setRaw(stackToItemKey, stackToItem);
                  this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
                  stackToSeries._stackedSeries[this.uid] = this;
                  break;
                }
                if (value < 0 && stackValue < 0) {
                  dataItem.setRaw(stackToItemKey, stackToItem);
                  this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
                  stackToSeries._stackedSeries[this.uid] = this;
                  break;
                }
              }
            } else {
              break;
            }
          } else {
            if (isNumber(value) && isNumber(stackValue)) {
              dataItem.setRaw(stackToItemKey, stackToItem);
              this._reallyStackedTo[stackToSeries.uid] = stackToSeries;
              stackToSeries._stackedSeries[this.uid] = this;
              break;
            }
          }
        }
      }
      index++;
    });
  }
  processXSelectionDataItem(dataItem, vcx, stacked) {
    each(this.__valueXShowFields, (key) => {
      let value = dataItem.get(key);
      if (value != null) {
        if (stacked) {
          value += this.getStackedXValueWorking(dataItem, key);
        }
        this._min("selectionMinX", value);
        this._max("selectionMaxX", value * vcx);
      }
    });
  }
  processYSelectionDataItem(dataItem, vcy, stacked) {
    each(this.__valueYShowFields, (key) => {
      let value = dataItem.get(key);
      if (value != null) {
        if (stacked) {
          value += this.getStackedYValueWorking(dataItem, key);
        }
        this._min("selectionMinY", value);
        this._max("selectionMaxY", value * vcy);
      }
    });
  }
  /**
   * @ignore
   */
  getStackedYValueWorking(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      const stackedToSeries = stackToItem.component;
      return stackToItem.get(key, 0) * stackedToSeries.get("vcy", 1) + this.getStackedYValueWorking(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedXValueWorking(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      const stackedToSeries = stackToItem.component;
      return stackToItem.get(key, 0) * stackedToSeries.get("vcx", 1) + this.getStackedXValueWorking(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedYValue(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      return stackToItem.get(key, 0) + this.getStackedYValue(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  getStackedXValue(dataItem, key) {
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      return stackToItem.get(key, 0) + this.getStackedXValue(stackToItem, key);
    }
    return 0;
  }
  /**
   * @ignore
   */
  createLegendMarker(_dataItem) {
    this.updateLegendMarker();
  }
  _markDirtyAxes() {
    this._axesDirty = true;
    this.markDirty();
  }
  _markDataSetDirty() {
    this._afterDataChange();
    this._valuesDirty = true;
    this._dataProcessed = false;
    this._aggregatesCalculated = false;
    this.markDirty();
  }
  _clearDirty() {
    super._clearDirty();
    this._axesDirty = false;
    this._selectionProcessed = false;
    this._stackDirty = false;
    this._dataProcessed = false;
  }
  _positionBullet(bullet) {
    let sprite = bullet.get("sprite");
    if (sprite) {
      let dataItem = sprite.dataItem;
      let locationX = bullet.get("locationX", dataItem.get("locationX", 0.5));
      let locationY = bullet.get("locationY", dataItem.get("locationY", 0.5));
      let xAxis = this.get("xAxis");
      let yAxis = this.get("yAxis");
      let exactLocationX = this.get("exactLocationX", false);
      let exactLocationY = this.get("exactLocationY", false);
      let positionX = xAxis.getDataItemPositionX(dataItem, this._xField, locationX, this.get("vcx", 1), exactLocationX);
      let positionY = yAxis.getDataItemPositionY(dataItem, this._yField, locationY, this.get("vcy", 1), exactLocationY);
      let point3 = this.getPoint(positionX, positionY);
      let left = dataItem.get("left", point3.x);
      let right = dataItem.get("right", point3.x);
      let top = dataItem.get("top", point3.y);
      let bottom = dataItem.get("bottom", point3.y);
      let x = 0;
      let y = 0;
      let w = right - left;
      let h = bottom - top;
      if (this._shouldShowBullet(positionX, positionY)) {
        sprite.setPrivate("visible", !bullet.getPrivate("hidden"));
        let field = bullet.get("field");
        const baseAxis = this.get("baseAxis");
        const xAxis2 = this.get("xAxis");
        const yAxis2 = this.get("yAxis");
        if (field != void 0) {
          let realField;
          if (baseAxis == xAxis2) {
            if (field == "value") {
              realField = this._yField;
            } else if (field == "open") {
              realField = this._yOpenField;
            } else if (field == "high") {
              realField = this._yHighField;
            } else if (field == "low") {
              realField = this._yLowField;
            }
            if (realField) {
              positionY = yAxis2.getDataItemPositionY(dataItem, realField, 0, this.get("vcy", 1), exactLocationY);
              point3 = yAxis2.get("renderer").positionToPoint(positionY);
              y = point3.y;
              x = left + w * locationX;
            }
          } else {
            if (field == "value") {
              realField = this._xField;
            } else if (field == "open") {
              realField = this._xOpenField;
            } else if (field == "high") {
              realField = this._xHighField;
            } else if (field == "low") {
              realField = this._xLowField;
            }
            if (realField) {
              positionX = xAxis2.getDataItemPositionX(dataItem, realField, 0, this.get("vcx", 1), exactLocationX);
              point3 = xAxis2.get("renderer").positionToPoint(positionX);
              x = point3.x;
              y = bottom - h * locationY;
            }
          }
        } else {
          x = left + w * locationX;
          y = bottom - h * locationY;
        }
        const stacked = bullet.get("stacked");
        if (stacked) {
          const chart = this.chart;
          if (baseAxis == xAxis2) {
            let previousBullet = this._bullets[positionX + "_" + positionY];
            if (previousBullet) {
              let previousBounds = previousBullet.bounds();
              let bounds = sprite.localBounds();
              let yo = y;
              y = previousBounds.top;
              if (stacked == "down") {
                y = previousBounds.bottom - bounds.top;
              } else if (stacked == "auto") {
                if (chart) {
                  if (yo < chart.plotContainer.height() / 2) {
                    y = previousBounds.bottom - bounds.top;
                  } else {
                    y += bounds.bottom;
                  }
                }
              } else {
                y += bounds.bottom;
              }
            }
            this._bullets[positionX + "_" + positionY] = sprite;
          } else {
            let previousBullet = this._bullets[positionX + "_" + positionY];
            if (previousBullet) {
              let previousBounds = previousBullet.bounds();
              let bounds = sprite.localBounds();
              let xo = x;
              x = previousBounds.right;
              if (stacked == "down") {
                x = previousBounds.left - bounds.right;
              } else if (stacked == "auto") {
                if (chart) {
                  if (xo < chart.plotContainer.width() / 2) {
                    x = previousBounds.left - bounds.right;
                  } else {
                    x -= bounds.left;
                  }
                }
              } else {
                x -= bounds.left;
              }
            }
            this._bullets[positionX + "_" + positionY] = sprite;
          }
        }
        if (sprite.isType("Label")) {
          sprite.setPrivate("maxWidth", Math.abs(w));
          sprite.setPrivate("maxHeight", Math.abs(h));
        }
        sprite.setAll({
          x,
          y
        });
      } else {
        sprite.setPrivate("visible", false);
      }
    }
  }
  _shouldShowBullet(_positionX, _positionY) {
    return this._showBullets;
  }
  /**
   * @ignore
   */
  setDataSet(id) {
    if (this._dataSets[id]) {
      this._handleDataSetChange();
      this._dataItems = this._dataSets[id];
      this._markDataSetDirty();
      this._dataSetId = id;
      const type = "datasetchanged";
      if (this.events.isEnabled(type)) {
        this.events.dispatch(type, {
          type,
          target: this,
          id
        });
      }
    }
  }
  /**
   * @ignore
   */
  resetGrouping() {
    each2(this._dataSets, (_key, dataSet) => {
      if (dataSet != this._mainDataItems) {
        each(dataSet, (dataItem) => {
          dataItem.dispose();
        });
      }
    });
    this._dataSets = {};
    this._dataItems = this.mainDataItems;
  }
  _handleDataSetChange() {
    each(this._dataItems, (dataItem) => {
      let bullets = dataItem.bullets;
      if (bullets) {
        each(bullets, (bullet) => {
          if (bullet) {
            let sprite = bullet.get("sprite");
            if (sprite) {
              sprite.setPrivate("visible", false);
            }
          }
        });
      }
    });
    this._selectionProcessed = false;
  }
  /**
   * Shows hidden series.
   *
   * @param   duration  Duration of animation in milliseconds
   * @return            Animation promise
   */
  show(duration) {
    const _super = Object.create(null, {
      show: {
        get: () => super.show
      }
    });
    return __awaiter(this, void 0, void 0, function* () {
      this._fixVC();
      let promises = [];
      promises.push(_super.show.call(this, duration).then(() => {
        this._isShowing = false;
        let xAxis = this.get("xAxis");
        let yAxis = this.get("yAxis");
        let baseAxis = this.get("baseAxis");
        if (yAxis !== baseAxis) {
          yAxis.markDirtySelectionExtremes();
        }
        if (xAxis !== baseAxis) {
          xAxis.markDirtySelectionExtremes();
        }
      }));
      promises.push(this.bulletsContainer.show(duration));
      promises.push(this._sequencedShowHide(true, duration));
      yield Promise.all(promises);
    });
  }
  /**
   * Hides series.
   *
   * @param   duration  Duration of animation in milliseconds
   * @return            Animation promise
   */
  hide(duration) {
    const _super = Object.create(null, {
      hide: {
        get: () => super.hide
      }
    });
    return __awaiter(this, void 0, void 0, function* () {
      this._fixVC();
      let promises = [];
      promises.push(_super.hide.call(this, duration).then(() => {
        this._isHiding = false;
      }));
      promises.push(this.bulletsContainer.hide(duration));
      promises.push(this._sequencedShowHide(false, duration));
      yield Promise.all(promises);
    });
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
      if (!isNumber(duration)) {
        duration = this.get("stateAnimationDuration", 0);
      }
      const easing = this.get("stateAnimationEasing");
      each(this._valueFields, (key) => {
        promises.push(dataItem.animate({
          key: key + "Working",
          to: dataItem.get(key),
          duration,
          easing
        }).waitForStop());
      });
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
      const hiddenState = this.states.create("hidden", {});
      if (!isNumber(duration)) {
        duration = hiddenState.get("stateAnimationDuration", this.get("stateAnimationDuration", 0));
      }
      const easing = hiddenState.get("stateAnimationEasing", this.get("stateAnimationEasing"));
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      const stacked = this.get("stacked");
      if (baseAxis === xAxis || !baseAxis) {
        each(this._valueYFields, (key) => {
          let min2 = yAxis.getPrivate("min");
          let baseValue = yAxis.baseValue();
          if (isNumber(min2) && min2 > baseValue) {
            baseValue = min2;
          }
          if (stacked) {
            baseValue = 0;
          }
          let value = dataItem.get(key);
          if (value != null) {
            promises.push(dataItem.animate({
              key: key + "Working",
              to: baseValue,
              duration,
              easing
            }).waitForStop());
          }
        });
      }
      if (baseAxis === yAxis || !baseAxis) {
        let min2 = xAxis.getPrivate("min");
        let baseValue = xAxis.baseValue();
        if (isNumber(min2) && min2 > baseValue) {
          baseValue = min2;
        }
        if (stacked) {
          baseValue = 0;
        }
        each(this._valueXFields, (key) => {
          let value = dataItem.get(key);
          if (value != null) {
            promises.push(dataItem.animate({
              key: key + "Working",
              to: baseValue,
              duration,
              easing
            }).waitForStop());
          }
        });
      }
      yield Promise.all(promises);
    });
  }
  _markDirtyStack() {
    this._stackDirty = true;
    this.markDirty();
    this._markStakedDirtyStack();
  }
  _markStakedDirtyStack() {
    const stackedSeries = this._stackedSeries;
    if (stackedSeries) {
      each2(stackedSeries, (_key, value) => {
        if (!value._stackDirty) {
          value._markDirtyStack();
        }
      });
    }
  }
  _afterChanged() {
    super._afterChanged();
    if (this._skipped) {
      this._markDirtyAxes();
      this._skipped = false;
    }
  }
  /**
   * Shows a tooltip for specific data item.
   *
   * @param  dataItem  Data item
   */
  showDataItemTooltip(dataItem) {
    if (!this.getPrivate("doNotUpdateLegend")) {
      this.updateLegendMarker(dataItem);
      this.updateLegendValue(dataItem);
    }
    const tooltip = this.get("tooltip");
    const exactLocationX = this.get("exactLocationX", false);
    const exactLocationY = this.get("exactLocationY", false);
    if (tooltip) {
      if (!this.isHidden() && this.get("visible")) {
        tooltip._setDataItem(dataItem);
        if (dataItem) {
          let locationX = this.get("locationX", 0);
          let locationY = this.get("locationY", 1);
          let itemLocationX = dataItem.get("locationX", locationX);
          let itemLocationY = dataItem.get("locationY", locationY);
          const xAxis = this.get("xAxis");
          const yAxis = this.get("yAxis");
          const vcx = this.get("vcx", 1);
          const vcy = this.get("vcy", 1);
          const xPos = xAxis.getDataItemPositionX(dataItem, this._tooltipFieldX, this._aLocationX0 + (this._aLocationX1 - this._aLocationX0) * itemLocationX, vcx, exactLocationX);
          const yPos = yAxis.getDataItemPositionY(dataItem, this._tooltipFieldY, this._aLocationY0 + (this._aLocationY1 - this._aLocationY0) * itemLocationY, vcy, exactLocationY);
          const point3 = this.getPoint(xPos, yPos);
          let show = true;
          each(this._valueFields, (field) => {
            if (dataItem.get(field) == null) {
              show = false;
            }
          });
          if (show) {
            const chart = this.chart;
            if (chart && chart.inPlot(point3)) {
              tooltip.label.text.markDirtyText();
              tooltip.set("tooltipTarget", this._getTooltipTarget(dataItem));
              tooltip.set("pointTo", this._display.toGlobal({
                x: point3.x,
                y: point3.y
              }));
            } else {
              tooltip._setDataItem(void 0);
            }
          } else {
            tooltip._setDataItem(void 0);
          }
        }
      } else {
        this.hideTooltip();
      }
    }
  }
  hideTooltip() {
    const tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.set("tooltipTarget", this);
    }
    return super.hideTooltip();
  }
  _getTooltipTarget(dataItem) {
    if (this.get("seriesTooltipTarget") == "bullet") {
      const bullets = dataItem.bullets;
      if (bullets && bullets.length > 0) {
        const bullet = bullets[0];
        const sprite = bullet.get("sprite");
        if (sprite) {
          return sprite;
        }
      }
    }
    return this;
  }
  /**
   * @ignore
   */
  updateLegendValue(dataItem) {
    const legendDataItem = this.get("legendDataItem");
    if (legendDataItem) {
      const label = legendDataItem.get("label");
      if (label) {
        let txt = "";
        if (dataItem) {
          label._setDataItem(dataItem);
          txt = this.get("legendLabelText", label.get("text", this.get("name", "")));
        } else {
          label._setDataItem(this._emptyDataItem);
          txt = this.get("legendRangeLabelText", this.get("legendLabelText", label.get("text", this.get("name", ""))));
        }
        label.set("text", txt);
      }
      const valueLabel = legendDataItem.get("valueLabel");
      if (valueLabel) {
        let txt = "";
        if (dataItem) {
          valueLabel._setDataItem(dataItem);
          txt = this.get("legendValueText", valueLabel.get("text", ""));
        } else {
          valueLabel._setDataItem(this._emptyDataItem);
          txt = this.get("legendRangeValueText", valueLabel.get("text", ""));
        }
        valueLabel.set("text", txt);
      }
    }
  }
  _getItemReaderLabel() {
    let text = "X: {" + this._xField;
    if (this.get("xAxis").isType("DateAxis")) {
      text += ".formatDate()";
    }
    text += "}; Y: {" + this._yField;
    if (this.get("yAxis").isType("DateAxis")) {
      text += ".formatDate()";
    }
    text += "}";
    return text;
  }
  /**
   * @ignore
   */
  getPoint(positionX, positionY) {
    let x = this.get("xAxis").get("renderer").positionToCoordinate(positionX);
    let y = this.get("yAxis").get("renderer").positionToCoordinate(positionY);
    let max2 = 999999999;
    if (y < -max2) {
      y = -max2;
    }
    if (y > max2) {
      y = max2;
    }
    if (x < -max2) {
      x = -max2;
    }
    if (x > max2) {
      x = max2;
    }
    return {
      x,
      y
    };
  }
  _shouldInclude(_position) {
    return true;
  }
  /**
   * @ignore
   */
  handleCursorHide() {
    this.hideTooltip();
    this.updateLegendValue(void 0);
    this.updateLegendMarker(void 0);
  }
  _afterDataChange() {
    super._afterDataChange();
    this.get("xAxis")._markDirtyKey("start");
    this.get("yAxis")._markDirtyKey("start");
    this.resetExtremes();
  }
  /**
   * Resets cached axis scale values.
   */
  resetExtremes() {
    this.setPrivate("selectionMinX", void 0);
    this.setPrivate("selectionMaxX", void 0);
    this.setPrivate("selectionMinY", void 0);
    this.setPrivate("selectionMaxY", void 0);
    this.setPrivate("minX", void 0);
    this.setPrivate("minY", void 0);
    this.setPrivate("maxX", void 0);
    this.setPrivate("maxY", void 0);
  }
  /**
   * Creates and returns an axis range object.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
   * @param   axisDataItem  Axis data item
   * @return                Axis range
   */
  createAxisRange(axisDataItem) {
    return this.axisRanges.push({
      axisDataItem
    });
  }
  /**
   * A list of series's main (ungrouped) data items.
   *
   * @return  Data items
   */
  get mainDataItems() {
    return this._mainDataItems;
  }
  /**
   * @ignore
   */
  _adjustStartIndex(index) {
    const xAxis = this.get("xAxis");
    const baseAxis = this.get("baseAxis");
    if (baseAxis == xAxis && xAxis.isType("DateAxis")) {
      const baseDuration = xAxis.baseDuration();
      const minSelection = xAxis.getPrivate("selectionMin", xAxis.getPrivate("min", 0));
      const dl = baseDuration * this.get("locationX", 0.5);
      let value = -Infinity;
      while (value < minSelection) {
        const dataItem = this.dataItems[index];
        if (dataItem) {
          const open = dataItem.open;
          if (open) {
            value = open["valueX"];
          } else {
            value = dataItem.get("valueX", 0);
          }
          value += dl;
          if (value < minSelection) {
            index++;
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
    return index;
  }
};
Object.defineProperty(XYSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "XYSeries"
});
Object.defineProperty(XYSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Series.classNames.concat([XYSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/BaseColumnSeries.js
var BaseColumnSeries = class _BaseColumnSeries extends XYSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_ph", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_pw", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _makeGraphics(listTemplate, dataItem) {
    return this.makeColumn(dataItem, listTemplate);
  }
  _makeFieldNames() {
    super._makeFieldNames();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const categoryAxis = "CategoryAxis";
    const valueAxis = "ValueAxis";
    if (xAxis.isType(categoryAxis)) {
      if (!this.get("openCategoryXField")) {
        this._xOpenField = this._xField;
      }
    }
    if (xAxis.isType(valueAxis)) {
      if (!this.get("openValueXField")) {
        this._xOpenField = this._xField;
      }
    }
    if (yAxis.isType(categoryAxis)) {
      if (!this.get("openCategoryYField")) {
        this._yOpenField = this._yField;
      }
    }
    if (yAxis.isType(valueAxis)) {
      if (!this.get("openValueYField")) {
        this._yOpenField = this._yField;
      }
    }
  }
  _prepareChildren() {
    super._prepareChildren();
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const len = this.dataItems.length;
    const startIndex = Math.max(0, this.startIndex() - 2);
    const endIndex = Math.min(this.endIndex() + 2, len - 1);
    if (xAxis.inited && yAxis.inited) {
      for (let i = startIndex; i <= endIndex; i++) {
        let dataItem = this.dataItems[i];
        this._createGraphics(dataItem);
      }
    }
  }
  _updateChildren() {
    const chart = this.chart;
    if (chart) {
      this._ph = chart.plotContainer.height();
      this._pw = chart.plotContainer.width();
    }
    const xAxis = this.get("xAxis");
    const yAxis = this.get("yAxis");
    const baseAxis = this.get("baseAxis");
    const columnsTemplate = this.columns.template;
    if (this.isDirty("fill")) {
      if (columnsTemplate.get("fill") == null) {
        columnsTemplate.set("fill", this.get("fill"));
      }
    }
    if (this.isDirty("fillPattern")) {
      if (columnsTemplate.get("fillPattern") == null) {
        columnsTemplate.set("fillPattern", this.get("fillPattern"));
      }
    }
    if (this.isDirty("stroke")) {
      if (columnsTemplate.get("stroke") == null) {
        columnsTemplate.set("stroke", this.get("stroke"));
      }
    }
    let index = 0;
    let clusterCount = 0;
    let i = 0;
    each(baseAxis.series, (series) => {
      if (series instanceof _BaseColumnSeries) {
        const stacked = series.get("stacked");
        if (stacked && i == 0) {
          clusterCount++;
        }
        if (!stacked && series.get("clustered")) {
          clusterCount++;
        }
      }
      if (series === this) {
        index = clusterCount - 1;
      }
      i++;
    });
    if (!this.get("clustered")) {
      index = 0;
      clusterCount = 1;
    }
    if (clusterCount === 0) {
      clusterCount = 1;
      index = 0;
    }
    const xRenderer = xAxis.get("renderer");
    const yRenderer = yAxis.get("renderer");
    const cellStartLocation = "cellStartLocation";
    const cellEndLocation = "cellEndLocation";
    const cellLocationX0 = xRenderer.get(cellStartLocation, 0);
    const cellLocationX1 = xRenderer.get(cellEndLocation, 1);
    const cellLocationY0 = yRenderer.get(cellStartLocation, 0);
    const cellLocationY1 = yRenderer.get(cellEndLocation, 1);
    this._aLocationX0 = cellLocationX0 + index / clusterCount * (cellLocationX1 - cellLocationX0);
    this._aLocationX1 = cellLocationX0 + (index + 1) / clusterCount * (cellLocationX1 - cellLocationX0);
    ;
    this._aLocationY0 = cellLocationY0 + index / clusterCount * (cellLocationY1 - cellLocationY0);
    this._aLocationY1 = cellLocationY0 + (index + 1) / clusterCount * (cellLocationY1 - cellLocationY0);
    if (xAxis.inited && yAxis.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty) {
        const len = this.dataItems.length;
        let startIndex = Math.max(0, this.startIndex() - 2);
        let endIndex = Math.min(this.endIndex() + 2, len - 1);
        for (let i2 = 0; i2 < startIndex; i2++) {
          this._toggleColumn(this.dataItems[i2], false);
        }
        let previous = this.dataItems[startIndex];
        for (let i2 = startIndex; i2 <= endIndex; i2++) {
          let dataItem = this.dataItems[i2];
          if (dataItem.get("valueX") != null && dataItem.get("valueY") != null) {
            previous = dataItem;
            if (i2 > 0 && startIndex > 0) {
              for (let j = i2 - 1; j >= 0; j--) {
                let dataItem2 = this.dataItems[j];
                if (dataItem2.get("valueX") != null && dataItem2.get("valueY") != null) {
                  previous = dataItem2;
                  break;
                }
              }
            }
            break;
          } else {
            this._toggleColumn(dataItem, false);
          }
        }
        for (let i2 = startIndex; i2 <= endIndex; i2++) {
          let dataItem = this.dataItems[i2];
          this._updateGraphics(dataItem, previous);
          if (dataItem.get("valueX") != null && dataItem.get("valueY") != null) {
            previous = dataItem;
          }
        }
        for (let i2 = endIndex + 1; i2 < len; i2++) {
          this._toggleColumn(this.dataItems[i2], false);
        }
      }
    } else {
      this._skipped = true;
    }
    if (!this.getPrivate("doNotUpdateLegend")) {
      this.updateLegendMarker(this.get("tooltipDataItem"));
    }
    super._updateChildren();
  }
  _createGraphics(dataItem) {
    let graphics = dataItem.get("graphics");
    if (!graphics) {
      graphics = this._makeGraphics(this.columns, dataItem);
      dataItem.set("graphics", graphics);
      graphics._setDataItem(dataItem);
      const legendDataItem = dataItem.get("legendDataItem");
      if (legendDataItem) {
        const markerRectangle = legendDataItem.get("markerRectangle");
        if (markerRectangle) {
          const ds = markerRectangle.states.lookup("default");
          each(visualSettings, (setting) => {
            const value = graphics.get(setting, this.get(setting));
            markerRectangle.set(setting, value);
            ds.set(setting, value);
          });
        }
      }
      let graphicsArray = dataItem.get("rangeGraphics");
      if (graphicsArray) {
        each(graphicsArray, (graphics2) => {
          graphics2.dispose();
        });
      }
      graphicsArray = [];
      dataItem.setRaw("rangeGraphics", graphicsArray);
      this.axisRanges.each((axisRange) => {
        const container = axisRange.container;
        const rangeGraphics = this._makeGraphics(axisRange.columns, dataItem);
        if (graphicsArray) {
          graphicsArray.push(rangeGraphics);
        }
        rangeGraphics.setPrivate("list", axisRange.columns);
        container.children.push(rangeGraphics);
      });
    }
  }
  createAxisRange(axisDataItem) {
    each(this.dataItems, (dataItem) => {
      const graphics = dataItem.get("graphics");
      if (graphics) {
        graphics.dispose();
        dataItem.set("graphics", void 0);
      }
    });
    return super.createAxisRange(axisDataItem);
  }
  _updateGraphics(dataItem, previousDataItem) {
    let graphics = dataItem.get("graphics");
    const xField = this._xField;
    const yField = this._yField;
    const valueX = dataItem.get(xField);
    const valueY = dataItem.get(yField);
    if (valueX != null && valueY != null) {
      const xOpenField = this._xOpenField;
      const yOpenField = this._yOpenField;
      const locationX = this.get("locationX", dataItem.get("locationX", 0.5));
      const locationY = this.get("locationY", dataItem.get("locationY", 0.5));
      const openLocationX = this.get("openLocationX", dataItem.get("openLocationX", locationX));
      const openLocationY = this.get("openLocationY", dataItem.get("openLocationY", locationY));
      const width = graphics.get("width");
      const height = graphics.get("height");
      const stacked = this.get("stacked");
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      const xStart = xAxis.get("start");
      const xEnd = xAxis.get("end");
      const yStart = yAxis.get("start");
      const yEnd = yAxis.get("end");
      let l;
      let r;
      let t;
      let b;
      let vcy = this.get("vcy", 1);
      let vcx = this.get("vcx", 1);
      let fitW = false;
      let fitH = false;
      if (yAxis.isType("CategoryAxis") && xAxis.isType("CategoryAxis")) {
        let startLocation = this._aLocationX0 + openLocationX - 0.5;
        let endLocation = this._aLocationX1 + locationX - 0.5;
        if (width instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - width.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        l = xAxis.getDataItemPositionX(dataItem, xOpenField, startLocation, vcx);
        r = xAxis.getDataItemPositionX(dataItem, xField, endLocation, vcx);
        startLocation = this._aLocationY0 + openLocationY - 0.5;
        endLocation = this._aLocationY1 + locationY - 0.5;
        if (height instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - height.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        t = yAxis.getDataItemPositionY(dataItem, yOpenField, startLocation, vcy);
        b = yAxis.getDataItemPositionY(dataItem, yField, endLocation, vcy);
        dataItem.setRaw("point", {
          x: l + (r - l) / 2,
          y: t + (b - t) / 2
        });
      } else if (xAxis === baseAxis) {
        let startLocation = this._aLocationX0 + openLocationX - 0.5;
        let endLocation = this._aLocationX1 + locationX - 0.5;
        if (width instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - width.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        l = xAxis.getDataItemPositionX(dataItem, xOpenField, startLocation, vcx);
        r = xAxis.getDataItemPositionX(dataItem, xField, endLocation, vcx);
        t = yAxis.getDataItemPositionY(dataItem, yField, locationY, vcy);
        if (this._yOpenField !== this._yField) {
          b = yAxis.getDataItemPositionY(dataItem, yOpenField, openLocationY, vcy);
        } else {
          if (stacked) {
            let stackToItemY = dataItem.get("stackToItemY");
            if (stackToItemY) {
              b = yAxis.getDataItemPositionY(stackToItemY, yField, openLocationY, stackToItemY.component.get("vcy"));
            } else {
              b = yAxis.basePosition();
            }
          } else {
            b = yAxis.basePosition();
          }
        }
        dataItem.setRaw("point", {
          x: l + (r - l) / 2,
          y: t
        });
        fitH = true;
      } else if (yAxis === baseAxis) {
        let startLocation = this._aLocationY0 + openLocationY - 0.5;
        let endLocation = this._aLocationY1 + locationY - 0.5;
        if (height instanceof Percent) {
          let offset = (endLocation - startLocation) * (1 - height.value) / 2;
          startLocation += offset;
          endLocation -= offset;
        }
        t = yAxis.getDataItemPositionY(dataItem, yOpenField, startLocation, vcy);
        b = yAxis.getDataItemPositionY(dataItem, yField, endLocation, vcy);
        r = xAxis.getDataItemPositionX(dataItem, xField, locationX, vcx);
        if (this._xOpenField !== this._xField) {
          l = xAxis.getDataItemPositionX(dataItem, xOpenField, openLocationX, vcx);
        } else {
          if (stacked) {
            let stackToItemX = dataItem.get("stackToItemX");
            if (stackToItemX) {
              l = xAxis.getDataItemPositionX(stackToItemX, xField, openLocationX, stackToItemX.component.get("vcx"));
            } else {
              l = xAxis.basePosition();
            }
          } else {
            l = xAxis.basePosition();
          }
        }
        fitW = true;
        dataItem.setRaw("point", {
          x: r,
          y: t + (b - t) / 2
        });
      }
      this._updateSeriesGraphics(dataItem, graphics, l, r, t, b, fitW, fitH);
      if (l < xStart && r < xStart || l > xEnd && r > xEnd || t < yStart && b <= yStart || t >= yEnd && b > yEnd || isNaN(l) || isNaN(t)) {
        this._toggleColumn(dataItem, false);
      } else {
        this._toggleColumn(dataItem, true);
      }
      let rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          this._updateSeriesGraphics(dataItem, graphics2, l, r, t, b, fitW, fitH);
        });
      }
      this._applyGraphicsStates(dataItem, previousDataItem);
    } else {
      this._toggleColumn(dataItem, false);
    }
  }
  _updateSeriesGraphics(dataItem, graphics, l, r, t, b, fitW, fitH) {
    const width = graphics.get("width");
    const height = graphics.get("height");
    const maxWidth = graphics.get("maxWidth");
    const maxHeight = graphics.get("maxHeight");
    const ptl = this.getPoint(l, t);
    const pbr = this.getPoint(r, b);
    const tooltipPoint = dataItem.get("point");
    if (tooltipPoint) {
      const point3 = this.getPoint(tooltipPoint.x, tooltipPoint.y);
      tooltipPoint.x = point3.x + this._x;
      tooltipPoint.y = point3.y + this._y;
    }
    l = ptl.x;
    r = pbr.x;
    t = ptl.y;
    b = pbr.y;
    if (isNumber(width)) {
      const offset = (r - l - width) / 2;
      l += offset;
      r -= offset;
    }
    if (isNumber(maxWidth) && maxWidth < Math.abs(r - l)) {
      const offset = (r - l - maxWidth) / 2;
      l += offset;
      r -= offset;
    }
    if (isNumber(height)) {
      const offset = (b - t - height) / 2;
      t += offset;
      b -= offset;
    }
    if (isNumber(maxHeight) && maxHeight < Math.abs(b - t)) {
      const offset = (b - t - maxHeight) / 2;
      t += offset;
      b -= offset;
    }
    if (this.get("adjustBulletPosition")) {
      if (fitW) {
        r = Math.min(Math.max(0, r), this._pw);
        l = Math.min(Math.max(0, l), this._pw);
      }
      if (fitH) {
        t = Math.min(Math.max(0, t), this._ph);
        b = Math.min(Math.max(0, b), this._ph);
      }
    }
    dataItem.setRaw("left", l);
    dataItem.setRaw("right", r);
    dataItem.setRaw("top", t);
    dataItem.setRaw("bottom", b);
    graphics.setPrivate("width", r - l);
    graphics.setPrivate("height", b - t);
    graphics.set("x", l);
    graphics.set("y", b - (b - t));
  }
  _handleDataSetChange() {
    super._handleDataSetChange();
    each(this._dataItems, (dataItem) => {
      this._toggleColumn(dataItem, false);
    });
  }
  _applyGraphicsStates(dataItem, previousDataItem) {
    const graphics = dataItem.get("graphics");
    const dropFromOpen = graphics.states.lookup("dropFromOpen");
    const riseFromOpen = graphics.states.lookup("riseFromOpen");
    const dropFromPrevious = graphics.states.lookup("dropFromPrevious");
    const riseFromPrevious = graphics.states.lookup("riseFromPrevious");
    if (dropFromOpen || dropFromPrevious || riseFromOpen || riseFromPrevious) {
      const xAxis = this.get("xAxis");
      const yAxis = this.get("yAxis");
      const baseAxis = this.get("baseAxis");
      let open;
      let close;
      let previousClose;
      if (baseAxis === xAxis && yAxis.isType("ValueAxis")) {
        open = dataItem.get(this._yOpenField);
        close = dataItem.get(this._yField);
        previousClose = previousDataItem.get(this._yField);
      } else if (baseAxis === yAxis && xAxis.isType("ValueAxis")) {
        open = dataItem.get(this._xOpenField);
        close = dataItem.get(this._xField);
        previousClose = previousDataItem.get(this._xField);
      }
      if (isNumber(open) && isNumber(close)) {
        if (close < open) {
          if (dropFromOpen) {
            dropFromOpen.apply();
          }
        } else {
          if (riseFromOpen) {
            riseFromOpen.apply();
          }
        }
        if (isNumber(previousClose)) {
          if (close < previousClose) {
            if (dropFromPrevious) {
              dropFromPrevious.apply();
            }
          } else {
            if (riseFromPrevious) {
              riseFromPrevious.apply();
            }
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const graphics = dataItem.get("graphics");
    if (graphics) {
      this.columns.removeValue(graphics);
      graphics.dispose();
    }
    const rangeGraphics = dataItem.get("rangeGraphics");
    if (rangeGraphics) {
      each(rangeGraphics, (graphics2) => {
        const list = graphics2.getPrivate("list");
        if (list) {
          list.removeValue(graphics2);
        }
        graphics2.dispose();
      });
    }
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
      const graphics = dataItem.get("graphics");
      if (graphics) {
        promises.push(graphics.hide(duration));
      }
      const rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          promises.push(graphics2.hide(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  _toggleColumn(dataItem, visible) {
    const graphics = dataItem.get("graphics");
    if (graphics) {
      graphics.setPrivate("visible", visible);
    }
    const rangeGraphics = dataItem.get("rangeGraphics");
    if (rangeGraphics) {
      each(rangeGraphics, (graphics2) => {
        graphics2.setPrivate("visible", visible);
      });
    }
    const bullets = dataItem.bullets;
    if (bullets) {
      each(bullets, (bullet) => {
        bullet.setPrivate("hidden", !visible);
      });
    }
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
      const graphics = dataItem.get("graphics");
      if (graphics) {
        promises.push(graphics.show(duration));
      }
      const rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (graphics2) => {
          promises.push(graphics2.show(duration));
        });
      }
      yield Promise.all(promises);
    });
  }
  /**
   * @ignore
   */
  updateLegendMarker(dataItem) {
    let legendDataItem = this.get("legendDataItem");
    if (this.get("useLastColorForLegendMarker")) {
      if (!dataItem) {
        const lastDataItem = this.dataItems[this.endIndex() - 1];
        if (lastDataItem) {
          dataItem = lastDataItem;
        }
      }
    }
    if (legendDataItem) {
      let graphics = this.columns.template;
      if (dataItem) {
        let column = dataItem.get("graphics");
        if (column) {
          graphics = column;
        }
      }
      const markerRectangle = legendDataItem.get("markerRectangle");
      if (markerRectangle) {
        if (!legendDataItem.get("itemContainer").get("disabled")) {
          const ds = markerRectangle.states.lookup("default");
          each(visualSettings, (setting) => {
            const value = graphics.get(setting, this.get(setting));
            markerRectangle.set(setting, value);
            ds.set(setting, value);
          });
        }
      }
    }
  }
  _getTooltipTarget(dataItem) {
    if (this.get("seriesTooltipTarget") == "bullet") {
      return super._getTooltipTarget(dataItem);
    }
    let column = dataItem.get("graphics");
    if (column) {
      return column;
    }
    return this;
  }
};
Object.defineProperty(BaseColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "BaseColumnSeries"
});
Object.defineProperty(BaseColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYSeries.classNames.concat([BaseColumnSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/Axis.js
var Axis = class extends Component {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_series", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_isPanning", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "minorDataItems", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "labelsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {}))
    });
    Object.defineProperty(this, "gridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100
      })
    });
    Object.defineProperty(this, "topGridContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Container.new(this._root, {
        width: p100,
        height: p100
      })
    });
    Object.defineProperty(this, "bulletsContainer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        isMeasured: false,
        width: p100,
        height: p100,
        position: "absolute"
      }))
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rangesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_panStart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_panEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_sAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_eAnimation", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_skipSync", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "axisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new List()
    });
    Object.defineProperty(this, "_seriesAxisRanges", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "ghostLabel", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_cursorPosition", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: -1
    });
    Object.defineProperty(this, "_snapToSeries", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_seriesValuesDirty", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_seriesAdded", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "axisHeader", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.children.push(Container.new(this._root, {
        themeTags: ["axis", "header"],
        position: "absolute",
        background: Rectangle.new(this._root, {
          themeTags: ["header", "background"],
          fill: this._root.interfaceColors.get("background")
        })
      }))
    });
    Object.defineProperty(this, "_bullets", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _dispose() {
    this.gridContainer.dispose();
    this.topGridContainer.dispose();
    this.bulletsContainer.dispose();
    this.labelsContainer.dispose();
    this.axisHeader.dispose();
    super._dispose();
  }
  _afterNew() {
    super._afterNew();
    this.setPrivate("updateScrollbar", true);
    this._disposers.push(this.axisRanges.events.onAll((change) => {
      if (change.type === "clear") {
        each(change.oldValues, (dataItem) => {
          dataItem.dispose();
        });
      } else if (change.type === "push") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "setIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "insertIndex") {
        this._processAxisRange(change.newValue, ["range"]);
      } else if (change.type === "removeIndex") {
        this.disposeDataItem(change.oldValue);
      } else if (change.type === "moveIndex") {
        this._processAxisRange(change.value, ["range"]);
      } else {
        throw new Error("Unknown IStreamEvent type");
      }
    }));
    const renderer = this.get("renderer");
    if (renderer) {
      renderer.axis = this;
      renderer.processAxis();
    }
    this.children.push(renderer);
    this.ghostLabel = renderer.makeLabel(new DataItem(this, void 0, {}), []);
    this.ghostLabel.adapters.disable("text");
    this.ghostLabel.setAll({
      opacity: 0,
      tooltipText: void 0,
      tooltipHTML: void 0,
      interactive: false
    });
    this.ghostLabel.events.disable();
  }
  _updateFinals(_start, _end) {
  }
  /**
   * Zooms the axis to relative locations.
   *
   * Both `start` and `end` are relative: 0 means start of the axis, 1 - end.
   *
   * @param   start     Relative start
   * @param   end       Relative end
   * @param   duration  Duration of the zoom animation in milliseconds
   * @return            Zoom animation
   */
  zoom(start, end, duration, priority) {
    if (this.get("zoomable", true)) {
      this._updateFinals(start, end);
      if (this.get("start") !== start || this.get("end") != end) {
        let sAnimation = this._sAnimation;
        let eAnimation = this._eAnimation;
        let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
        if (start < -maxDeviation) {
          start = -maxDeviation;
        }
        if (end > 1 + maxDeviation) {
          end = 1 + maxDeviation;
        }
        if (start > end) {
          [start, end] = [end, start];
        }
        if (!isNumber(duration)) {
          duration = this.get("interpolationDuration", 0);
        }
        if (!priority) {
          priority = "end";
        }
        let maxZoomFactor = this.getPrivate("maxZoomFactor", this.get("maxZoomFactor", 100));
        let maxZoomFactorReal = maxZoomFactor;
        if (end === 1 && start !== 0) {
          if (start < this.get("start", 0)) {
            priority = "start";
          } else {
            priority = "end";
          }
        }
        if (start === 0 && end !== 1) {
          if (end > this.get("end", 1)) {
            priority = "end";
          } else {
            priority = "start";
          }
        }
        let minZoomCount = this.get("minZoomCount", 0);
        let maxZoomCount = this.get("maxZoomCount", Infinity);
        if (isNumber(minZoomCount)) {
          maxZoomFactor = maxZoomFactorReal / minZoomCount;
        }
        let minZoomFactor = 1;
        if (isNumber(maxZoomCount)) {
          minZoomFactor = maxZoomFactorReal / maxZoomCount;
        }
        if (priority === "start") {
          if (maxZoomCount > 0) {
            if (1 / (end - start) < minZoomFactor) {
              end = start + 1 / minZoomFactor;
            }
          }
          if (1 / (end - start) > maxZoomFactor) {
            end = start + 1 / maxZoomFactor;
          }
          if (end > 1 && end - start < 1 / maxZoomFactor) {
            start = end - 1 / maxZoomFactor;
          }
        } else {
          if (maxZoomCount > 0) {
            if (1 / (end - start) < minZoomFactor) {
              start = end - 1 / minZoomFactor;
            }
          }
          if (1 / (end - start) > maxZoomFactor) {
            start = end - 1 / maxZoomFactor;
          }
          if (start < 0 && end - start < 1 / maxZoomFactor) {
            end = start + 1 / maxZoomFactor;
          }
        }
        if (1 / (end - start) > maxZoomFactor) {
          end = start + 1 / maxZoomFactor;
        }
        if (1 / (end - start) > maxZoomFactor) {
          start = end - 1 / maxZoomFactor;
        }
        if (maxZoomCount != null && minZoomCount != null && start == this.get("start") && end == this.get("end")) {
          const chart = this.chart;
          if (chart) {
            chart._handleAxisSelection(this, true);
          }
        }
        if ((sAnimation && sAnimation.playing && sAnimation.to == start || this.get("start") == start) && (eAnimation && eAnimation.playing && eAnimation.to == end || this.get("end") == end)) {
          return;
        }
        if (duration > 0) {
          let easing = this.get("interpolationEasing");
          let sAnimation2, eAnimation2;
          if (this.get("start") != start) {
            sAnimation2 = this.animate({
              key: "start",
              to: start,
              duration,
              easing
            });
          }
          if (this.get("end") != end) {
            eAnimation2 = this.animate({
              key: "end",
              to: end,
              duration,
              easing
            });
          }
          this._sAnimation = sAnimation2;
          this._eAnimation = eAnimation2;
          if (sAnimation2) {
            return sAnimation2;
          } else if (eAnimation2) {
            return eAnimation2;
          }
        } else {
          this.set("start", start);
          this.set("end", end);
        }
      } else {
        if (this._sAnimation) {
          this._sAnimation.stop();
        }
        if (this._eAnimation) {
          this._eAnimation.stop();
        }
      }
    }
  }
  /**
   * A list of series using this axis.
   *
   * @return Series
   */
  get series() {
    return this._series;
  }
  _processAxisRange(dataItem, themeTags) {
    dataItem.setRaw("isRange", true);
    this._createAssets(dataItem, themeTags);
    this._rangesDirty = true;
    this._prepareDataItem(dataItem);
    const above = dataItem.get("above");
    const container = this.topGridContainer;
    const grid = dataItem.get("grid");
    if (above && grid) {
      container.children.moveValue(grid);
    }
    const fill = dataItem.get("axisFill");
    if (above && fill) {
      container.children.moveValue(fill);
    }
  }
  _prepareDataItem(_dataItem, _index) {
  }
  /**
   * @ignore
   */
  markDirtyExtremes() {
  }
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {
  }
  _calculateTotals() {
  }
  _updateAxisRanges() {
    this._bullets = {};
    this.axisRanges.each((axisRange) => {
      this._prepareDataItem(axisRange);
    });
    each(this._seriesAxisRanges, (axisRange) => {
      this._prepareDataItem(axisRange);
    });
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.get("fixAxisSize")) {
      this.ghostLabel.set("visible", true);
    } else {
      this.ghostLabel.set("visible", false);
    }
    if (this.isDirty("start") || this.isDirty("end")) {
      const chart = this.chart;
      if (chart) {
        chart._updateCursor();
      }
      let start = this.get("start", 0);
      let end = this.get("end", 1);
      let maxDeviation = this.get("maxDeviation", 0.5) * Math.min(1, end - start);
      if (start < -maxDeviation) {
        let delta = start + maxDeviation;
        start = -maxDeviation;
        this.setRaw("start", start);
        if (this.isDirty("end")) {
          this.setRaw("end", end - delta);
        }
      }
      if (end > 1 + maxDeviation) {
        let delta = end - 1 - maxDeviation;
        end = 1 + maxDeviation;
        this.setRaw("end", end);
        if (this.isDirty("start")) {
          this.setRaw("start", start - delta);
        }
      }
    }
    const renderer = this.get("renderer");
    renderer._start = this.get("start");
    renderer._end = this.get("end");
    renderer._inversed = renderer.get("inversed", false);
    renderer._axisLength = renderer.axisLength() / (renderer._end - renderer._start);
    renderer._updateLC();
    if (this.isDirty("tooltip")) {
      const tooltip = this.get("tooltip");
      if (tooltip) {
        const rendererTags = renderer.get("themeTags");
        tooltip.addTag("axis");
        tooltip.addTag(this.className.toLowerCase());
        tooltip._applyThemes();
        if (rendererTags) {
          tooltip.set("themeTags", mergeTags(tooltip.get("themeTags"), rendererTags));
          tooltip.label._applyThemes();
        }
      }
    }
  }
  _updateTooltipBounds() {
    const tooltip = this.get("tooltip");
    if (tooltip) {
      this.get("renderer").updateTooltipBounds(tooltip);
    }
  }
  _updateBounds() {
    super._updateBounds();
    this._updateTooltipBounds();
  }
  /**
   * @ignore
   */
  processChart(chart) {
    this.chart = chart;
    const renderer = this.get("renderer");
    renderer.chart = chart;
    chart.gridContainer.children.push(this.gridContainer);
    chart.topGridContainer.children.push(this.topGridContainer);
    chart.axisHeadersContainer.children.push(this.axisHeader);
    this.on("start", () => {
      chart._handleAxisSelection(this);
    });
    this.on("end", () => {
      chart._handleAxisSelection(this);
    });
    chart.plotContainer.onPrivate("width", () => {
      this.markDirtySize();
    });
    chart.plotContainer.onPrivate("height", () => {
      this.markDirtySize();
    });
    chart.processAxis(this);
  }
  /**
   * @ignore
   */
  hideDataItem(dataItem) {
    this._toggleFHDataItem(dataItem, true);
    return super.hideDataItem(dataItem);
  }
  /**
   * @ignore
   */
  showDataItem(dataItem) {
    this._toggleFHDataItem(dataItem, false);
    return super.showDataItem(dataItem);
  }
  _toggleFHDataItem(dataItem, forceHidden) {
    const fh = "forceHidden";
    const label = dataItem.get("label");
    if (label) {
      label.set(fh, forceHidden);
    }
    const grid = dataItem.get("grid");
    if (grid) {
      grid.set(fh, forceHidden);
    }
    const tick = dataItem.get("tick");
    if (tick) {
      tick.set(fh, forceHidden);
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      axisFill.set(fh, forceHidden);
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite.set(fh, forceHidden);
      }
    }
  }
  _toggleDataItem(dataItem, visible) {
    const label = dataItem.get("label");
    const v = "visible";
    if (label) {
      label.setPrivate(v, visible);
    }
    const grid = dataItem.get("grid");
    if (grid) {
      grid.setPrivate(v, visible);
    }
    const tick = dataItem.get("tick");
    if (tick) {
      tick.setPrivate(v, visible);
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      axisFill.setPrivate(v, visible);
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite.setPrivate(v, visible);
      }
    }
  }
  _createAssets(dataItem, tags, minor) {
    var _a, _b, _c;
    const renderer = this.get("renderer");
    let m = "minor";
    const label = dataItem.get("label");
    if (!label) {
      renderer.makeLabel(dataItem, tags);
    } else {
      let themeTags = label.get("themeTags");
      let remove2 = false;
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove2 = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove2 = true;
        }
      }
      if (remove2) {
        (_a = label.parent) === null || _a === void 0 ? void 0 : _a.children.removeValue(label);
        renderer.makeLabel(dataItem, tags);
        label.dispose();
        renderer.labels.removeValue(label);
      }
    }
    const grid = dataItem.get("grid");
    if (!grid) {
      renderer.makeGrid(dataItem, tags);
    } else {
      let themeTags = grid.get("themeTags");
      let remove2 = false;
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove2 = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove2 = true;
        }
      }
      if (remove2) {
        (_b = grid.parent) === null || _b === void 0 ? void 0 : _b.children.removeValue(grid);
        renderer.makeGrid(dataItem, tags);
        grid.dispose();
        renderer.grid.removeValue(grid);
      }
    }
    const tick = dataItem.get("tick");
    if (!tick) {
      renderer.makeTick(dataItem, tags);
    } else {
      let remove2 = false;
      let themeTags = tick.get("themeTags");
      if (minor) {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) == -1) {
          remove2 = true;
        }
      } else {
        if ((themeTags === null || themeTags === void 0 ? void 0 : themeTags.indexOf(m)) != -1) {
          remove2 = true;
        }
      }
      if (remove2) {
        (_c = tick.parent) === null || _c === void 0 ? void 0 : _c.children.removeValue(tick);
        renderer.makeTick(dataItem, tags);
        tick.dispose();
        renderer.ticks.removeValue(tick);
      }
    }
    if (!minor && !dataItem.get("axisFill")) {
      renderer.makeAxisFill(dataItem, tags);
    }
    this._processBullet(dataItem);
  }
  _processBullet(dataItem) {
    let bullet = dataItem.get("bullet");
    let axisBullet = this.get("bullet");
    if (!bullet && axisBullet && !dataItem.get("isRange")) {
      bullet = axisBullet(this._root, this, dataItem);
    }
    if (bullet) {
      bullet.axis = this;
      const sprite = bullet.get("sprite");
      if (sprite) {
        sprite._setDataItem(dataItem);
        dataItem.setRaw("bullet", bullet);
        if (!sprite.parent) {
          this.bulletsContainer.children.push(sprite);
        }
      }
    }
  }
  _afterChanged() {
    super._afterChanged();
    const chart = this.chart;
    if (chart) {
      chart._updateChartLayout();
      chart.axisHeadersContainer.markDirtySize();
    }
    this.get("renderer")._updatePositions();
    this._seriesAdded = false;
  }
  /**
   * @ignore
   */
  disposeDataItem(dataItem) {
    super.disposeDataItem(dataItem);
    const renderer = this.get("renderer");
    const label = dataItem.get("label");
    if (label) {
      renderer.labels.removeValue(label);
      label.dispose();
    }
    const tick = dataItem.get("tick");
    if (tick) {
      renderer.ticks.removeValue(tick);
      tick.dispose();
    }
    const grid = dataItem.get("grid");
    if (grid) {
      renderer.grid.removeValue(grid);
      grid.dispose();
    }
    const axisFill = dataItem.get("axisFill");
    if (axisFill) {
      renderer.axisFills.removeValue(axisFill);
      axisFill.dispose();
    }
    const bullet = dataItem.get("bullet");
    if (bullet) {
      bullet.dispose();
    }
  }
  _updateGhost() {
    this.setPrivate("cellWidth", this.getCellWidthPosition() * this.get("renderer").axisLength());
    const ghostLabel = this.ghostLabel;
    if (!ghostLabel.isHidden()) {
      const bounds = ghostLabel.localBounds();
      const gWidth = Math.ceil(bounds.right - bounds.left);
      let text = ghostLabel.get("text");
      each(this.dataItems, (dataItem) => {
        const label = dataItem.get("label");
        if (label && !label.isHidden()) {
          const bounds2 = label.localBounds();
          const w = Math.ceil(bounds2.right - bounds2.left);
          if (w > gWidth) {
            text = label.text._getText();
          }
        }
      });
      ghostLabel.set("text", text);
    }
    let start = this.get("start", 0);
    let end = this.get("end", 1);
    this.get("renderer").updateLabel(ghostLabel, start + (end - start) * 0.5);
  }
  _handleCursorPosition(position, snapToSeries) {
    const renderer = this.get("renderer");
    position = renderer.toAxisPosition(position);
    this._cursorPosition = position;
    this._snapToSeries = snapToSeries;
    this.updateTooltip();
  }
  /**
   * Can be called when axis zoom changes and you need to update tooltip
   * position.
   */
  updateTooltip() {
    const snapToSeries = this._snapToSeries;
    let position = this._cursorPosition;
    const tooltip = this.get("tooltip");
    const renderer = this.get("renderer");
    if (isNumber(position)) {
      each(this.series, (series) => {
        if (series.get("baseAxis") === this) {
          const dataItem = this.getSeriesItem(series, position, this.get("tooltipLocation"));
          if (snapToSeries && snapToSeries.indexOf(series) != -1) {
            series.updateLegendMarker(dataItem);
            series.updateLegendValue(dataItem);
            series._settings.tooltipDataItem = dataItem;
          } else {
            series.showDataItemTooltip(dataItem);
            series.setRaw("tooltipDataItem", dataItem);
          }
        }
      });
      if (this.get("snapTooltip")) {
        position = this.roundAxisPosition(position, this.get("tooltipLocation", 0.5));
      }
      this.setPrivateRaw("tooltipPosition", position);
      if (tooltip) {
        renderer.updateTooltipBounds(tooltip);
        if (!isNaN(position)) {
          this._updateTooltipText(tooltip, position);
          renderer.positionTooltip(tooltip, position);
          if (position < this.get("start", 0) || position > this.get("end", 1)) {
            tooltip.hide(0);
          } else {
            tooltip.show(0);
          }
        } else {
          tooltip.hide(0);
        }
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, _location) {
    return position;
  }
  _handleSeriesRemoved() {
  }
  /**
   * @ignore
   */
  handleCursorShow() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.show();
    }
  }
  /**
   * @ignore
   */
  handleCursorHide() {
    let tooltip = this.get("tooltip");
    if (tooltip) {
      tooltip.hide();
    }
  }
  /**
   * @ignore
   */
  processSeriesDataItem(_dataItem, _fields) {
  }
  _clearDirty() {
    super._clearDirty();
    this._sizeDirty = false;
    this._rangesDirty = false;
  }
  /**
   * Converts pixel coordinate to a relative position on axis.
   *
   * @param   coordinate  Coordinate
   * @return              Relative position
   */
  coordinateToPosition(coordinate) {
    const renderer = this.get("renderer");
    return renderer.toAxisPosition(coordinate / renderer.axisLength());
  }
  /**
   * Converts relative position of the plot area to relative position of the
   * axis with zoom taken into account.
   *
   * @param position Position
   * @return Relative position
   */
  toAxisPosition(position) {
    return this.get("renderer").toAxisPosition(position);
  }
  /**
   * Converts relative position of the axis to a global position taking current
   * zoom into account (opposite to what `toAxisPosition` does).
   *
   * @since 5.4.2
   * @param position Position
   * @return Global position
   */
  toGlobalPosition(position) {
    return this.get("renderer").toGlobalPosition(position);
  }
  /**
   * Adjusts position with inversed taken into account.
   *
   * @ignore
   */
  fixPosition(position) {
    return this.get("renderer").fixPosition(position);
  }
  /**
   * @ignore
   */
  shouldGap(_dataItem, _nextItem, _autoGapCount, _fieldName) {
    return false;
  }
  /**
   * Creates and returns an axis range object.
   *
   * @see {@link https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/} for more info
   * @param   axisDataItem  Axis data item
   * @return                Axis range
   */
  createAxisRange(axisDataItem) {
    return this.axisRanges.push(axisDataItem);
  }
  /**
   * @ignore
   */
  _groupSeriesData(_series) {
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    return 0.05;
  }
};
Object.defineProperty(Axis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Axis"
});
Object.defineProperty(Axis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Component.classNames.concat([Axis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/ValueAxis.js
var ValueAxis = class extends Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dirtyExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dirtySelectionExtremes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_dseHandled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_deltaMinMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_minReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_maxReal", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_minRealLog", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_baseValue", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_syncDp", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_minLogAdjusted", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  /**
   * @ignore
   */
  markDirtyExtremes() {
    this._dirtyExtremes = true;
    this.markDirty();
  }
  /**
   * @ignore
   */
  markDirtySelectionExtremes() {
    this._dirtySelectionExtremes = true;
    this.markDirty();
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.setPrivateRaw("name", "value");
    this.addTag("value");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    if (this.isDirty("syncWithAxis")) {
      let previousValue = this._prevSettings.syncWithAxis;
      if (previousValue) {
        if (this._syncDp) {
          this._syncDp.dispose();
        }
      }
      let syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        this._syncDp = new MultiDisposer([syncWithAxis.onPrivate("selectionMinFinal", () => {
          this._dirtySelectionExtremes = true;
        }), syncWithAxis.onPrivate("selectionMaxFinal", () => {
          this._dirtySelectionExtremes = true;
        })]);
      }
    }
    let someDirty = false;
    if (this.isDirty("min") || this.isDirty("max") || this.isDirty("maxPrecision") || this.isDirty("numberFormat")) {
      someDirty = true;
      this.ghostLabel.set("text", "");
    }
    if (this._sizeDirty || this._dirtyExtremes || this._valuesDirty || someDirty || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("extraMin") || this.isDirty("extraMax") || this.isDirty("logarithmic") || this.isDirty("treatZeroAs") || this.isDirty("baseValue") || this.isDirty("strictMinMax") || this.isDirty("strictMinMaxSelection")) {
      this._getMinMax();
      this._dirtyExtremes = false;
    }
    this._handleSizeDirty();
    if (this._dirtySelectionExtremes && !this._isPanning && this.get("autoZoom", true)) {
      const chart = this.chart;
      let getMM = false;
      if (chart) {
        const letter = this.get("renderer").getPrivate("letter");
        if (letter == "Y") {
          chart.xAxes.each((axis) => {
            if (axis.className != "ValueAxis") {
              getMM = true;
            }
          });
        } else if (letter == "X") {
          chart.yAxes.each((axis) => {
            if (axis.className != "ValueAxis") {
              getMM = true;
            }
          });
        }
      }
      if (getMM) {
        this._getSelectionMinMax();
      }
      this._dirtySelectionExtremes = false;
    }
    this._groupData();
    if (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("min") || this.isPrivateDirty("selectionMax") || this.isPrivateDirty("selectionMin") || this.isPrivateDirty("max") || this.isPrivateDirty("step") || this.isPrivateDirty("width") || this.isPrivateDirty("height") || this.isDirty("logarithmic")) {
      this._handleRangeChange();
      this._prepareAxisItems();
      this._updateAxisRanges();
    }
    this._baseValue = this.baseValue();
  }
  _handleSizeDirty() {
    if (this._sizeDirty && !this._dseHandled) {
      this._dirtySelectionExtremes = true;
      this._dseHandled = true;
      if (this.getPrivate("selectionMinFinal") != this.getPrivate("selectionMin") || this.getPrivate("selectionMaxFinal") != this.getPrivate("selectionMax")) {
        this._dirtySelectionExtremes = false;
      }
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._dseHandled = false;
  }
  _groupData() {
  }
  _formatText(value) {
    const numberFormat = this.get("numberFormat");
    const formatter = this.getNumberFormatter();
    let text = "";
    if (numberFormat) {
      text = formatter.format(value, numberFormat);
    } else {
      text = formatter.format(value, void 0, this.getPrivate("stepDecimalPlaces"));
    }
    return text;
  }
  _prepareAxisItems() {
    const min2 = this.getPrivate("min");
    const max2 = this.getPrivate("max");
    if (isNumber(min2) && isNumber(max2)) {
      const logarithmic = this.get("logarithmic");
      const step = this.getPrivate("step");
      const selectionMin = this.getPrivate("selectionMin");
      const selectionMax = this.getPrivate("selectionMax") + step;
      let value = selectionMin - step;
      let differencePower = 1;
      let minLog = min2;
      if (logarithmic) {
        value = this._minLogAdjusted;
        if (value < selectionMin) {
          while (value < selectionMin) {
            value += step;
          }
        }
        minLog = value;
        if (minLog <= 0) {
          minLog = 1;
          if (step < 1) {
            if (isNumber(this._minRealLog)) {
              minLog = this._minRealLog;
            } else {
              minLog = Math.pow(10, -50);
            }
          }
        }
        differencePower = Math.log(selectionMax - step) * Math.LOG10E - Math.log(minLog) * Math.LOG10E;
        if (differencePower > 2) {
          value = Math.pow(10, Math.log(minLog) * Math.LOG10E - 50);
        }
      }
      const renderer = this.get("renderer");
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
      const stepAdjusted = Math.round(step / stepPower);
      let minorGridCount = 2;
      if (round(stepAdjusted / 5, 10) % 1 == 0) {
        minorGridCount = 5;
      }
      if (round(stepAdjusted / 10, 10) % 1 == 0) {
        minorGridCount = 10;
      }
      let minorStep = step / minorGridCount;
      let i = 0;
      let m = 0;
      let previous = -Infinity;
      while (value < selectionMax) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new DataItem(this, void 0, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        dataItem.setRaw("value", value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._formatText(value));
        }
        this._prepareDataItem(dataItem);
        let nextValue = value;
        if (!logarithmic) {
          nextValue += step;
        } else {
          if (differencePower > 2) {
            nextValue = Math.pow(10, Math.log(minLog) * Math.LOG10E + i - 50);
          } else {
            nextValue += step;
          }
        }
        if (minorGridEnabled) {
          let minorValue = value + minorStep;
          if (logarithmic) {
            if (differencePower > 2) {
              let minorMinMaxStep = this._adjustMinMax(value, nextValue, 10);
              minorStep = minorMinMaxStep.step;
            }
            minorValue = value + minorStep;
          }
          while (minorValue < nextValue - step * 1e-11) {
            let minorDataItem;
            if (this.minorDataItems.length < m + 1) {
              minorDataItem = new DataItem(this, void 0, {});
              this.minorDataItems.push(minorDataItem);
              this.processDataItem(minorDataItem);
            } else {
              minorDataItem = this.minorDataItems[m];
            }
            this._createAssets(minorDataItem, ["minor"], true);
            this._toggleDataItem(minorDataItem, true);
            minorDataItem.setRaw("value", minorValue);
            const minorLabel = minorDataItem.get("label");
            if (minorLabel) {
              if (minorLabelsEnabled) {
                minorLabel.set("text", this._formatText(minorValue));
              } else {
                minorLabel.setPrivate("visible", false);
              }
            }
            this._prepareDataItem(minorDataItem);
            minorValue += minorStep;
            m++;
          }
        }
        value = nextValue;
        if (previous == value) {
          break;
        }
        let stepPower2 = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
        if (stepPower2 < 1 && !logarithmic) {
          let decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower2)) * Math.LOG10E)) + 2;
          value = round(value, decCount);
        }
        i++;
        if (logarithmic && differencePower <= 2) {
          if (value - step < step) {
            value = step;
          }
        }
        previous = value;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this._toggleDataItem(this.dataItems[j], false);
      }
      for (let j = m; j < this.minorDataItems.length; j++) {
        this._toggleDataItem(this.minorDataItems[j], false);
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
      this._updateGhost();
    }
  }
  _prepareDataItem(dataItem, count) {
    let renderer = this.get("renderer");
    let value = dataItem.get("value");
    let endValue = dataItem.get("endValue");
    let position = this.valueToPosition(value);
    let endPosition = position;
    let fillEndPosition = this.valueToPosition(value + this.getPrivate("step"));
    if (isNumber(endValue)) {
      endPosition = this.valueToPosition(endValue);
      fillEndPosition = endPosition;
    }
    if (dataItem.get("isRange")) {
      if (endValue == null) {
        fillEndPosition = position;
      }
    }
    let labelEndPosition = endPosition;
    let labelEndValue = dataItem.get("labelEndValue");
    if (labelEndValue != null) {
      labelEndPosition = this.valueToPosition(labelEndValue);
    }
    renderer.updateLabel(dataItem.get("label"), position, labelEndPosition, count);
    const grid = dataItem.get("grid");
    renderer.updateGrid(grid, position, endPosition);
    if (grid) {
      if (value == this.get("baseValue", 0)) {
        grid.addTag("base");
        grid._applyThemes();
      } else if (grid.hasTag("base")) {
        grid.removeTag("base");
        grid._applyThemes();
      }
    }
    renderer.updateTick(dataItem.get("tick"), position, labelEndPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    if (!dataItem.get("isRange")) {
      const fillRule = this.get("fillRule");
      if (fillRule) {
        fillRule(dataItem);
      }
    }
  }
  _handleRangeChange() {
    let selectionMin = this.positionToValue(this.get("start", 0));
    let selectionMax = this.positionToValue(this.get("end", 1));
    const gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let stepDecimalPlaces = decimalPlaces(minMaxStep.step);
    this.setPrivateRaw("stepDecimalPlaces", stepDecimalPlaces);
    selectionMin = round(selectionMin, stepDecimalPlaces);
    selectionMax = round(selectionMax, stepDecimalPlaces);
    minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
    let step = minMaxStep.step;
    selectionMin = minMaxStep.min;
    selectionMax = minMaxStep.max;
    if (this.getPrivate("selectionMin") !== selectionMin || this.getPrivate("selectionMax") !== selectionMax || this.getPrivate("step") !== step) {
      this.setPrivateRaw("selectionMin", selectionMin);
      this.setPrivateRaw("selectionMax", selectionMax);
      this.setPrivateRaw("step", step);
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const min2 = this.getPrivate("min");
    const max2 = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return position * (max2 - min2) + min2;
    } else {
      return Math.pow(Math.E, (position * (Math.log(max2) * Math.LOG10E - Math.log(min2) * Math.LOG10E) + Math.log(min2) * Math.LOG10E) / Math.LOG10E);
    }
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const min2 = this.getPrivate("min");
    const max2 = this.getPrivate("max");
    if (!this.get("logarithmic")) {
      return (value - min2) / (max2 - min2);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min2) * Math.LOG10E) / (Math.log(max2) * Math.LOG10E - Math.log(min2) * Math.LOG10E);
    }
  }
  /**
   * @ignore
   */
  valueToFinalPosition(value) {
    const min2 = this.getPrivate("minFinal");
    const max2 = this.getPrivate("maxFinal");
    if (!this.get("logarithmic")) {
      return (value - min2) / (max2 - min2);
    } else {
      if (value <= 0) {
        let treatZeroAs = this.get("treatZeroAs");
        if (isNumber(treatZeroAs)) {
          value = treatZeroAs;
        }
      }
      return (Math.log(value) * Math.LOG10E - Math.log(min2) * Math.LOG10E) / (Math.log(max2) * Math.LOG10E - Math.log(min2) * Math.LOG10E);
    }
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getX(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * Returns X coordinate in pixels corresponding to specific value.
   *
   * @param   value     Numeric value
   * @param   location  Location
   * @param   baseValue Base value
   * @return            X coordinate
   */
  getY(value, location, baseValue) {
    value = baseValue + (value - baseValue) * location;
    const position = this.valueToPosition(value);
    return this._settings.renderer.positionToCoordinate(position);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemX");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedXValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, _cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, _cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, _cellLocation, axisLocation) {
    let value = dataItem.get(field);
    const stackToItem = dataItem.get("stackToItemY");
    if (stackToItem) {
      const series = dataItem.component;
      value = value * axisLocation + series.getStackedYValueWorking(dataItem, field);
    } else {
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * Returns relative position of axis' `baseValue`.
   *
   * @return  Base value position
   */
  basePosition() {
    return this.valueToPosition(this.baseValue());
  }
  /**
   * Base value of the [[ValueAxis]], which determines positive and negative
   * values.
   *
   * @return Base value
   */
  baseValue() {
    const min2 = Math.min(this.getPrivate("minFinal", -Infinity), this.getPrivate("selectionMin", -Infinity));
    const max2 = Math.max(this.getPrivate("maxFinal", Infinity), this.getPrivate("selectionMax", Infinity));
    let baseValue = this.get("baseValue", 0);
    if (baseValue < min2) {
      baseValue = min2;
    }
    if (baseValue > max2) {
      baseValue = max2;
    }
    return baseValue;
  }
  /**
   * @ignore
   */
  cellEndValue(value) {
    return value;
  }
  fixSmallStep(step) {
    if (1 + step === 1) {
      step *= 2;
      return this.fixSmallStep(step);
    }
    return step;
  }
  _fixMin(min2) {
    return min2;
  }
  _fixMax(max2) {
    return max2;
  }
  _calculateTotals() {
    if (this.get("calculateTotals")) {
      let series = this.series[0];
      if (series) {
        let startIndex = series.startIndex();
        if (series.dataItems.length > 0) {
          if (startIndex > 0) {
            startIndex--;
          }
          let endIndex = series.endIndex();
          if (endIndex < series.dataItems.length) {
            endIndex++;
          }
          let field;
          let vc;
          if (series.get("yAxis") == this) {
            field = "valueY";
            vc = "vcy";
          } else if (series.get("xAxis") == this) {
            field = "valueX";
            vc = "vcx";
          }
          let fieldWorking = field + "Working";
          if (field) {
            for (let i = startIndex; i < endIndex; i++) {
              let sum = 0;
              let total = 0;
              each(this.series, (series2) => {
                if (!series2.get("excludeFromTotal")) {
                  let dataItem = series2.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series2.get(vc);
                    if (!isNaN(value)) {
                      sum += value;
                      total += Math.abs(value);
                    }
                  }
                }
              });
              each(this.series, (series2) => {
                if (!series2.get("excludeFromTotal")) {
                  let dataItem = series2.dataItems[i];
                  if (dataItem) {
                    let value = dataItem.get(fieldWorking) * series2.get(vc);
                    if (!isNaN(value)) {
                      dataItem.set(field + "Total", total);
                      dataItem.set(field + "Sum", sum);
                      dataItem.set(field + "TotalPercent", value / total * 100);
                    }
                  }
                }
              });
            }
          }
        }
      }
    }
  }
  _getSelectionMinMax() {
    const min2 = this.getPrivate("minFinal");
    const max2 = this.getPrivate("maxFinal");
    const minDefined = this.get("min");
    const maxDefined = this.get("max");
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (this.get("extraMin") == null) {
        extraMin = 0.1;
      }
      if (this.get("extraMax") == null) {
        extraMax = 0.2;
      }
    }
    const gridCount = this.get("renderer").gridCount();
    const selectionStrictMinMax = this.get("strictMinMaxSelection");
    let strictMinMax = this.get("strictMinMax");
    if (isNumber(min2) && isNumber(max2)) {
      let selectionMin = max2;
      let selectionMax = min2;
      each(this.series, (series) => {
        if (!series.get("ignoreMinMax")) {
          let seriesMin;
          let seriesMax;
          const outOfSelection = series.getPrivate("outOfSelection");
          if (series.get("xAxis") === this) {
            if (!outOfSelection) {
              let minX = series.getPrivate("minX");
              let maxX = series.getPrivate("maxX");
              if (series.startIndex() != 0 || series.endIndex() != series.dataItems.length) {
                minX = void 0;
                maxX = void 0;
              }
              seriesMin = series.getPrivate("selectionMinX", minX);
              seriesMax = series.getPrivate("selectionMaxX", maxX);
            }
          } else if (series.get("yAxis") === this) {
            if (!outOfSelection) {
              let minY = series.getPrivate("minY");
              let maxY = series.getPrivate("maxY");
              if (series.startIndex() != 0 || series.endIndex() != series.dataItems.length) {
                minY = void 0;
                maxY = void 0;
              }
              seriesMin = series.getPrivate("selectionMinY", minY);
              seriesMax = series.getPrivate("selectionMaxY", maxY);
            }
          }
          if (!series.isHidden() && !series.isShowing()) {
            if (isNumber(seriesMin)) {
              selectionMin = Math.min(selectionMin, seriesMin);
            }
            if (isNumber(seriesMax)) {
              selectionMax = Math.max(selectionMax, seriesMax);
            }
          }
        }
      });
      this.axisRanges.each((range) => {
        if (range.get("affectsMinMax")) {
          let value = range.get("value");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
          value = range.get("endValue");
          if (value != null) {
            selectionMin = Math.min(selectionMin, value);
            selectionMax = Math.max(selectionMax, value);
          }
        }
      });
      if (selectionMin > selectionMax) {
        [selectionMin, selectionMax] = [selectionMax, selectionMin];
      }
      if (isNumber(minDefined)) {
        if (strictMinMax) {
          selectionMin = minDefined;
        } else {
          selectionMin = min2;
        }
      } else if (strictMinMax) {
        if (isNumber(this._minReal)) {
          selectionMin = this._minReal;
        }
      }
      if (isNumber(maxDefined)) {
        if (strictMinMax) {
          selectionMax = maxDefined;
        } else {
          selectionMax = max2;
        }
      } else if (strictMinMax) {
        if (isNumber(this._maxReal)) {
          selectionMax = this._maxReal;
        }
      }
      if (selectionMin === selectionMax) {
        let smin = selectionMin;
        selectionMin -= this._deltaMinMax;
        selectionMax += this._deltaMinMax;
        if (selectionMin < min2) {
          let d = smin - min2;
          if (d == 0) {
            d = this._deltaMinMax;
          }
          selectionMin = smin - d;
          selectionMax = smin + d;
          strictMinMax = true;
        }
        let minMaxStep2 = this._adjustMinMax(selectionMin, selectionMax, gridCount, strictMinMax);
        selectionMin = minMaxStep2.min;
        selectionMax = minMaxStep2.max;
      }
      let selectionMinReal = selectionMin;
      let selectionMaxReal = selectionMax;
      let delta = selectionMax - selectionMin;
      selectionMin -= delta * extraMin;
      selectionMax += delta * extraMax;
      let minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount);
      selectionMin = minMaxStep.min;
      selectionMax = minMaxStep.max;
      selectionMin = fitToRange(selectionMin, min2, max2);
      selectionMax = fitToRange(selectionMax, min2, max2);
      minMaxStep = this._adjustMinMax(selectionMin, selectionMax, gridCount, true);
      if (!strictMinMax) {
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      const syncWithAxis = this.get("syncWithAxis");
      if (syncWithAxis) {
        minMaxStep = this._syncAxes(selectionMin, selectionMax, minMaxStep.step, syncWithAxis.getPrivate("selectionMinFinal", syncWithAxis.getPrivate("minFinal", 0)), syncWithAxis.getPrivate("selectionMaxFinal", syncWithAxis.getPrivate("maxFinal", 1)), syncWithAxis.getPrivate("selectionStepFinal", syncWithAxis.getPrivate("step", 1)));
        if (minMaxStep.min < min2) {
          minMaxStep.min = min2;
        }
        if (minMaxStep.max > max2) {
          minMaxStep.max = max2;
        }
        selectionMin = minMaxStep.min;
        selectionMax = minMaxStep.max;
      }
      if (strictMinMax) {
        if (isNumber(minDefined)) {
          selectionMin = Math.max(selectionMin, minDefined);
        }
        if (isNumber(maxDefined)) {
          selectionMax = Math.min(selectionMax, maxDefined);
        }
      }
      if (selectionStrictMinMax) {
        selectionMin = selectionMinReal - (selectionMaxReal - selectionMinReal) * extraMin;
        selectionMax = selectionMaxReal + (selectionMaxReal - selectionMinReal) * extraMax;
      }
      if (strictMinMax) {
        if (isNumber(minDefined)) {
          selectionMin = minDefined;
        } else {
          selectionMin = selectionMinReal;
        }
        if (isNumber(maxDefined)) {
          selectionMax = maxDefined;
        } else {
          selectionMax = selectionMaxReal;
        }
        if (selectionMax - selectionMin <= 1e-8) {
          selectionMin -= this._deltaMinMax;
          selectionMax += this._deltaMinMax;
        }
        let delta2 = selectionMax - selectionMin;
        selectionMin -= delta2 * extraMin;
        selectionMax += delta2 * extraMax;
      }
      if (this.get("logarithmic")) {
        if (selectionMin <= 0) {
          selectionMin = selectionMinReal * (1 - Math.min(extraMin, 0.99));
        }
        if (selectionMin < min2) {
          selectionMin = min2;
        }
        if (selectionMax > max2) {
          selectionMax = max2;
        }
      }
      let len = Math.min(20, Math.ceil(Math.log(this.getPrivate("maxZoomFactor", 100) + 1) / Math.LN10) + 2);
      let start = round(this.valueToFinalPosition(selectionMin), len);
      let end = round(this.valueToFinalPosition(selectionMax), len);
      this.setPrivateRaw("selectionMinFinal", selectionMin);
      this.setPrivateRaw("selectionMaxFinal", selectionMax);
      this.setPrivateRaw("selectionStepFinal", minMaxStep.step);
      this.zoom(start, end);
    }
  }
  _getMinMax() {
    let minDefined = this.get("min");
    let maxDefined = this.get("max");
    let min2 = Infinity;
    let max2 = -Infinity;
    let extraMin = this.get("extraMin", 0);
    let extraMax = this.get("extraMax", 0);
    if (this.get("logarithmic")) {
      if (!this.get("strictMinMax")) {
        if (this.get("extraMin") == null) {
          extraMin = 0.1;
        }
        if (this.get("extraMax") == null) {
          extraMax = 0.2;
        }
      }
    }
    let minDiff = Infinity;
    each(this.series, (series) => {
      if (!series.get("ignoreMinMax")) {
        let seriesMin;
        let seriesMax;
        if (series.get("xAxis") === this) {
          seriesMin = series.getPrivate("minX");
          seriesMax = series.getPrivate("maxX");
        } else if (series.get("yAxis") === this) {
          seriesMin = series.getPrivate("minY");
          seriesMax = series.getPrivate("maxY");
        }
        if (isNumber(seriesMin) && isNumber(seriesMax)) {
          min2 = Math.min(min2, seriesMin);
          max2 = Math.max(max2, seriesMax);
          let diff = seriesMax - seriesMin;
          if (diff <= 0) {
            diff = Math.abs(seriesMax / 100);
          }
          if (diff < minDiff) {
            minDiff = diff;
          }
        }
      }
    });
    this.axisRanges.each((range) => {
      if (range.get("affectsMinMax")) {
        let value = range.get("value");
        if (value != null) {
          min2 = Math.min(min2, value);
          max2 = Math.max(max2, value);
        }
        value = range.get("endValue");
        if (value != null) {
          min2 = Math.min(min2, value);
          max2 = Math.max(max2, value);
        }
      }
    });
    if (this.get("logarithmic")) {
      let treatZeroAs = this.get("treatZeroAs");
      if (isNumber(treatZeroAs)) {
        if (min2 <= 0) {
          min2 = treatZeroAs;
        }
      }
      if (min2 <= 0) {
        new Error("Logarithmic value axis can not have values <= 0.");
      }
    }
    if (min2 === 0 && max2 === 0) {
      max2 = 0.9;
      min2 = -0.9;
    }
    if (isNumber(minDefined)) {
      min2 = minDefined;
    }
    if (isNumber(maxDefined)) {
      max2 = maxDefined;
    }
    if (min2 === Infinity || max2 === -Infinity) {
      this.setPrivate("minFinal", void 0);
      this.setPrivate("maxFinal", void 0);
      return;
    }
    if (min2 > max2) {
      [min2, max2] = [max2, min2];
    }
    const initialMin = min2;
    const initialMax = max2;
    let minAdapted = this.adapters.fold("min", min2);
    let maxAdapted = this.adapters.fold("max", max2);
    this._minRealLog = min2;
    if (isNumber(minAdapted)) {
      min2 = minAdapted;
    }
    if (isNumber(maxAdapted)) {
      max2 = maxAdapted;
    }
    min2 = this._fixMin(min2);
    max2 = this._fixMax(max2);
    if (max2 - min2 <= 1 / Math.pow(10, 15)) {
      if (max2 - min2 !== 0) {
        this._deltaMinMax = (max2 - min2) / 2;
      } else {
        this._getDelta(max2);
      }
      min2 -= this._deltaMinMax;
      max2 += this._deltaMinMax;
    }
    min2 -= (max2 - min2) * extraMin;
    max2 += (max2 - min2) * extraMax;
    if (this.get("logarithmic")) {
      if (min2 < 0 && initialMin >= 0) {
        min2 = 0;
      }
      if (max2 > 0 && initialMax <= 0) {
        max2 = 0;
      }
    }
    this._minReal = min2;
    this._maxReal = max2;
    let strictMinMax = this.get("strictMinMax");
    let strictMinMaxSelection = this.get("strictMinMaxSelection", false);
    if (strictMinMaxSelection) {
      strictMinMax = strictMinMaxSelection;
    }
    let strict = strictMinMax;
    if (isNumber(maxDefined)) {
      strict = true;
    }
    let gridCount = this.get("renderer").gridCount();
    let minMaxStep = this._adjustMinMax(min2, max2, gridCount, strict);
    min2 = minMaxStep.min;
    max2 = minMaxStep.max;
    minMaxStep = this._adjustMinMax(min2, max2, gridCount, true);
    min2 = minMaxStep.min;
    max2 = minMaxStep.max;
    if (strictMinMax) {
      if (isNumber(minDefined)) {
        min2 = minDefined;
      } else {
        min2 = this._minReal;
      }
      if (isNumber(maxDefined)) {
        max2 = maxDefined;
      } else {
        max2 = this._maxReal;
      }
      if (max2 - min2 <= 1e-8) {
        min2 -= this._deltaMinMax;
        max2 += this._deltaMinMax;
      }
      let delta = max2 - min2;
      min2 -= delta * extraMin;
      max2 += delta * extraMax;
    }
    minAdapted = this.adapters.fold("min", min2);
    maxAdapted = this.adapters.fold("max", max2);
    if (isNumber(minAdapted)) {
      min2 = minAdapted;
    }
    if (isNumber(maxAdapted)) {
      max2 = maxAdapted;
    }
    if (minDiff == Infinity) {
      minDiff = max2 - min2;
    }
    let decCount = Math.round(Math.abs(Math.log(Math.abs(max2 - min2)) * Math.LOG10E)) + 5;
    min2 = round(min2, decCount);
    max2 = round(max2, decCount);
    const syncWithAxis = this.get("syncWithAxis");
    if (syncWithAxis) {
      minMaxStep = this._syncAxes(min2, max2, minMaxStep.step, syncWithAxis.getPrivate("minFinal", syncWithAxis.getPrivate("min", 0)), syncWithAxis.getPrivate("maxFinal", syncWithAxis.getPrivate("max", 1)), syncWithAxis.getPrivate("step", 1));
      min2 = minMaxStep.min;
      max2 = minMaxStep.max;
    }
    this.setPrivateRaw("maxZoomFactor", Math.max(1, Math.ceil((max2 - min2) / minDiff * this.get("maxZoomFactor", 100))));
    this._fixZoomFactor();
    if (this.get("logarithmic")) {
      this._minLogAdjusted = min2;
      min2 = this._minReal;
      max2 = this._maxReal;
      if (min2 <= 0) {
        min2 = initialMin * (1 - Math.min(extraMin, 0.99));
      }
    }
    if (isNumber(min2) && isNumber(max2)) {
      if (this.getPrivate("minFinal") !== min2 || this.getPrivate("maxFinal") !== max2) {
        this.setPrivate("minFinal", min2);
        this.setPrivate("maxFinal", max2);
        this._saveMinMax(min2, max2);
        const duration = this.get("interpolationDuration", 0);
        const easing = this.get("interpolationEasing");
        this.animatePrivate({
          key: "min",
          to: min2,
          duration,
          easing
        });
        this.animatePrivate({
          key: "max",
          to: max2,
          duration,
          easing
        });
      }
    }
  }
  _fixZoomFactor() {
  }
  _getDelta(max2) {
    let exponent = Math.log(Math.abs(max2)) * Math.LOG10E;
    let power = Math.pow(10, Math.floor(exponent));
    power = power / 10;
    this._deltaMinMax = power;
  }
  _saveMinMax(_min, _max) {
  }
  _adjustMinMax(min2, max2, gridCount, strictMode) {
    if (gridCount <= 1) {
      gridCount = 1;
    }
    gridCount = Math.round(gridCount);
    let initialMin = min2;
    let initialMax = max2;
    let difference = max2 - min2;
    if (difference === 0) {
      difference = Math.abs(max2);
    }
    let exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    let power = Math.pow(10, Math.floor(exponent));
    power = power / 10;
    let extra = power;
    if (strictMode) {
      extra = 0;
    }
    if (strictMode) {
      min2 = Math.floor(min2 / power) * power;
      max2 = Math.ceil(max2 / power) * power;
    } else {
      min2 = Math.ceil(min2 / power) * power - extra;
      max2 = Math.floor(max2 / power) * power + extra;
    }
    if (min2 < 0 && initialMin >= 0) {
      min2 = 0;
    }
    if (max2 > 0 && initialMax <= 0) {
      max2 = 0;
    }
    exponent = Math.log(Math.abs(difference)) * Math.LOG10E;
    power = Math.pow(10, Math.floor(exponent));
    power = power / 100;
    let step = Math.ceil(difference / gridCount / power) * power;
    let stepPower = Math.pow(10, Math.floor(Math.log(Math.abs(step)) * Math.LOG10E));
    let stepDivisor = Math.ceil(step / stepPower);
    if (stepDivisor > 5) {
      stepDivisor = 10;
    } else if (stepDivisor <= 5 && stepDivisor > 2) {
      stepDivisor = 5;
    }
    step = Math.ceil(step / (stepPower * stepDivisor)) * stepPower * stepDivisor;
    let maxPrecision = this.get("maxPrecision");
    if (isNumber(maxPrecision)) {
      let ceiledStep = ceil(step, maxPrecision);
      if (maxPrecision < Number.MAX_VALUE && step !== ceiledStep) {
        step = ceiledStep;
        if (step == 0) {
          step = 1;
        }
      }
    }
    let decCount = 0;
    if (stepPower < 1) {
      decCount = Math.round(Math.abs(Math.log(Math.abs(stepPower)) * Math.LOG10E)) + 1;
      step = round(step, decCount);
    }
    let minCount = Math.floor(min2 / step);
    min2 = round(step * minCount, decCount);
    let maxCount;
    if (!strictMode) {
      maxCount = Math.ceil(max2 / step);
    } else {
      maxCount = Math.floor(max2 / step);
    }
    if (maxCount === minCount) {
      maxCount++;
    }
    max2 = round(step * maxCount, decCount);
    if (max2 < initialMax) {
      max2 = max2 + step;
    }
    if (min2 > initialMin) {
      min2 = min2 - step;
    }
    step = this.fixSmallStep(step);
    return {
      min: min2,
      max: max2,
      step
    };
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const numberFormat = this.get("tooltipNumberFormat", this.get("numberFormat"));
    const formatter = this.getNumberFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = round(this.positionToValue(position), decimals);
    if (numberFormat) {
      return formatter.format(value, numberFormat);
    } else {
      return formatter.format(value, void 0, decimals);
    }
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    let index = void 0;
    let oldDiff;
    each(series.dataItems, (dataItem, i) => {
      const diff = Math.abs(dataItem.get(fieldName) - value);
      if (index === void 0 || diff < oldDiff) {
        index = i;
        oldDiff = diff;
      }
    });
    if (index != null) {
      return series.dataItems[index];
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min2 = this.getPrivate("minFinal", 0);
    const max2 = this.getPrivate("maxFinal", 0);
    if (this.getPrivate("min") != null && this.getPrivate("max") != null) {
      this.zoom((start - min2) / (max2 - min2), (end - min2) / (max2 - min2), duration);
    }
  }
  /**
   * Syncs with a target axis.
   *
   * @param  min  Min
   * @param  max  Max
   * @param  step Step
   */
  _syncAxes(min2, max2, step, syncMin, syncMax, syncStep) {
    let axis = this.get("syncWithAxis");
    if (axis) {
      let count = Math.round(syncMax - syncMin) / syncStep;
      let currentCount = Math.round((max2 - min2) / step);
      let gridCount = this.get("renderer").gridCount();
      if (isNumber(count) && isNumber(currentCount)) {
        let synced = false;
        let c = 0;
        let diff = (max2 - min2) * 0.01;
        let omin = min2;
        let omax = max2;
        let ostep = step;
        while (synced != true) {
          synced = this._checkSync(omin, omax, ostep, count);
          c++;
          if (c > 500) {
            synced = true;
          }
          if (!synced) {
            if (c / 3 == Math.round(c / 3)) {
              omin = min2 - diff * c;
              if (min2 >= 0 && omin < 0) {
                omin = 0;
              }
            } else {
              omax = max2 + diff * c;
              if (omax <= 0 && omax > 0) {
                omax = 0;
              }
            }
            let minMaxStep = this._adjustMinMax(omin, omax, gridCount, true);
            omin = minMaxStep.min;
            omax = minMaxStep.max;
            ostep = minMaxStep.step;
          } else {
            min2 = omin;
            max2 = omax;
            step = ostep;
          }
        }
      }
    }
    return {
      min: min2,
      max: max2,
      step
    };
  }
  /**
   * Returns `true` if axis needs to be resunced with some other axis.
   */
  _checkSync(min2, max2, step, count) {
    let currentCount = (max2 - min2) / step;
    for (let i = 1; i < count; i++) {
      if (round(currentCount / i, 1) == count || currentCount * i == count) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @return Position
   */
  getCellWidthPosition() {
    let max2 = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min2 = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (isNumber(max2) && isNumber(min2)) {
      return this.getPrivate("step", 1) / (max2 - min2);
    }
    return 0.05;
  }
  /**
   * @ignore
   */
  nextPosition(count) {
    if (count == null) {
      count = 1;
    }
    if (this.get("renderer").getPrivate("letter") == "Y") {
      count *= -1;
    }
    let value = this.positionToValue(this.getPrivate("tooltipPosition", 0));
    value += this.getPrivate("step", 1) * count;
    value = fitToRange(value, this.getPrivate("selectionMin", 0), this.getPrivate("selectionMax", 1));
    return this.toGlobalPosition(this.valueToPosition(value));
  }
};
Object.defineProperty(ValueAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ValueAxis"
});
Object.defineProperty(ValueAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Axis.classNames.concat([ValueAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryAxis.js
var CategoryAxis = class _CategoryAxis extends Axis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    this.setPrivateRaw("name", "category");
    this.addTag("category");
    super._afterNew();
  }
  _prepareChildren() {
    super._prepareChildren();
    const len = this.dataItems.length;
    let i = 0;
    if (this._valuesDirty) {
      this._itemMap = {};
      each(this.dataItems, (dataItem) => {
        dataItem.setRaw("index", i);
        this._itemMap[dataItem.get("category")] = dataItem;
        i++;
      });
      this.setPrivateRaw("maxZoomFactor", len);
    }
    this.setPrivateRaw("startIndex", Math.max(Math.round(this.get("start", 0) * len), 0));
    this.setPrivateRaw("endIndex", Math.min(Math.round(this.get("end", 1) * len), len));
    if (this._sizeDirty || this._valuesDirty || this.isDirty("start") || this.isDirty("end") || this.isPrivateDirty("endIndex") || this.isPrivateDirty("startIndex") || this.isPrivateDirty("width") || this.isPrivateDirty("height")) {
      if (this.dataItems.length > 0) {
        this._handleRangeChange();
        this._prepareAxisItems();
        this._updateAxisRanges();
      }
    }
  }
  _handleRangeChange() {
    each(this.series, (series) => {
      let startCategory = this.dataItems[this.startIndex()].get("category");
      let endCategory = this.dataItems[this.endIndex() - 1].get("category");
      let baseAxis = series.get("baseAxis");
      let xAxis = series.get("xAxis");
      let yAxis = series.get("yAxis");
      if (xAxis instanceof _CategoryAxis && yAxis instanceof _CategoryAxis) {
        series._markDirtyAxes();
      } else if (baseAxis === this) {
        let key;
        let openKey;
        let otherAxis = yAxis;
        if (xAxis === baseAxis) {
          if (series.get("categoryXField")) {
            key = "categoryX";
          }
          if (series.get("openCategoryXField")) {
            openKey = "openCategoryX";
          }
        } else if (yAxis === baseAxis) {
          if (series.get("categoryYField")) {
            key = "categoryY";
          }
          if (series.get("openCategoryYField")) {
            openKey = "openCategoryY";
          }
          otherAxis = xAxis;
        }
        if (otherAxis instanceof ValueAxis) {
          if (key || openKey) {
            let startDataItem;
            let endDataItem;
            for (let i = 0, len = series.dataItems.length; i < len; i++) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === startCategory) {
                  startDataItem = dataItem;
                  break;
                }
              }
            }
            for (let i = series.dataItems.length - 1; i >= 0; i--) {
              let dataItem = series.dataItems[i];
              if (key) {
                if (dataItem.get(key) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
              if (openKey) {
                if (dataItem.get(openKey) === endCategory) {
                  endDataItem = dataItem;
                  break;
                }
              }
            }
            let startIndex = 0;
            let endIndex = series.dataItems.length;
            if (startDataItem) {
              startIndex = series.dataItems.indexOf(startDataItem);
            }
            if (endDataItem) {
              endIndex = series.dataItems.indexOf(endDataItem) + 1;
            }
            series.setPrivate("startIndex", startIndex);
            series.setPrivate("endIndex", endIndex);
            let hasValue = false;
            for (let i = startIndex; i < endIndex; i++) {
              const dataItem = series.dataItems[i];
              each(series.__valueXShowFields, (key2) => {
                let value = dataItem.get(key2);
                if (value != null) {
                  hasValue = true;
                }
              });
              each(series.__valueYShowFields, (key2) => {
                let value = dataItem.get(key2);
                if (value != null) {
                  hasValue = true;
                }
              });
              if (hasValue) {
                break;
              }
            }
            series.setPrivate("outOfSelection", !hasValue);
          }
        }
        series._markDirtyAxes();
      }
    });
  }
  _prepareAxisItems() {
    var _a;
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
    const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1);
    let frequency = Math.max(1, Math.min(len, Math.ceil((endIndex - startIndex) / maxCount)));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this._toggleDataItem(this.dataItems[j], false);
    }
    let f = this.dataItems[startIndex].get("index", 0);
    for (let i = startIndex; i < endIndex; i = i + frequency) {
      let dataItem = this.dataItems[i];
      this._createAssets(dataItem, []);
      this._toggleDataItem(dataItem, true);
      let count = frequency;
      if (minorGridEnabled) {
        count = 1;
      }
      this._prepareDataItem(dataItem, f, count);
      f++;
    }
    if (renderer.get("minorGridEnabled")) {
      for (let i = startIndex; i < endIndex; i++) {
        let dataItem = this.dataItems[i];
        if (i % frequency != 0) {
          this._createAssets(dataItem, ["minor"], true);
          this._toggleDataItem(dataItem, true);
          this._prepareDataItem(dataItem, 0, 1);
          if (!minorLabelsEnabled) {
            (_a = dataItem.get("label")) === null || _a === void 0 ? void 0 : _a.setPrivate("visible", false);
          }
        }
      }
    }
    this._updateGhost();
  }
  _prepareDataItem(dataItem, fillIndex, count) {
    let renderer = this.get("renderer");
    let categoryLocation = dataItem.get("categoryLocation", 0);
    let endCategoryLocation = dataItem.get("endCategoryLocation", 1);
    let index = dataItem.get("index");
    if (!isNumber(index)) {
      index = this.categoryToIndex(dataItem.get("category"));
    }
    let position = this.indexToPosition(index, categoryLocation);
    let endCategory = dataItem.get("endCategory");
    let endIndex;
    if (endCategory) {
      endIndex = this.categoryToIndex(endCategory);
      if (!isNumber(endIndex)) {
        endIndex = index;
      }
    } else {
      endIndex = index;
    }
    let endPosition = this.indexToPosition(endIndex, endCategoryLocation);
    let fillEndIndex;
    let fillEndPosition;
    if (dataItem.get("isRange")) {
      fillEndIndex = endIndex;
    } else {
      fillEndIndex = index + this._frequency - 1;
    }
    fillEndPosition = this.indexToPosition(fillEndIndex, endCategoryLocation);
    renderer.updateLabel(dataItem.get("label"), position, endPosition, count);
    renderer.updateGrid(dataItem.get("grid"), position, endPosition);
    renderer.updateTick(dataItem.get("tick"), position, endPosition, count);
    renderer.updateFill(dataItem.get("axisFill"), position, fillEndPosition);
    this._processBullet(dataItem);
    renderer.updateBullet(dataItem.get("bullet"), position, endPosition);
    const fillRule = this.get("fillRule");
    if (fillRule) {
      fillRule(dataItem, fillIndex);
    }
  }
  startIndex() {
    let len = this.dataItems.length;
    return Math.min(Math.max(this.getPrivate("startIndex", 0), 0), len - 1);
  }
  endIndex() {
    let len = this.dataItems.length;
    return Math.max(1, Math.min(this.getPrivate("endIndex", len), len));
  }
  /**
   * @ignore
   */
  baseValue() {
  }
  /**
   * @ignore
   */
  basePosition() {
    return 0;
  }
  /**
   * Returns X coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         X coordinate
   */
  getX(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * Returns Y coordinate in pixels corresponding to specific category index.
   *
   * @param   value  Index
   * @return         Y coordinate
   */
  getY(value) {
    let axisDataItem = this._itemMap[value];
    if (axisDataItem) {
      return this._settings.renderer.positionToCoordinate(this.indexToPosition(axisDataItem.get("index", 0)));
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, _axisLocation) {
    const category = dataItem.get(field);
    const axisDataItem = this._itemMap[category];
    if (axisDataItem) {
      return this.indexToPosition(axisDataItem.get("index", 0), cellLocation);
    }
    return NaN;
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, _axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, _axisLocation));
  }
  /**
   * Converts category index to a relative position.
   *
   * `location` indicates relative position within category: 0 - start, 1 - end.
   *
   * If not set, will use middle (0.5) of the category.
   *
   * @param   index     Index
   * @param   location  Location
   * @return            Index
   */
  indexToPosition(index, location) {
    if (!isNumber(location)) {
      location = 0.5;
    }
    let len = this.dataItems.length;
    let startLocation = this.get("startLocation", 0);
    let endLocation = this.get("endLocation", 1);
    len -= startLocation;
    len -= 1 - endLocation;
    let position = (index + location - startLocation) / len;
    let dataItem = this.dataItems[index];
    if (dataItem) {
      position += dataItem.get("deltaPosition", 0);
    }
    return position;
  }
  /**
   * Returns a position of a category.
   *
   * @param   category  Category to look up
   * @return            Position
   */
  categoryToPosition(category) {
    let dataItem = this._itemMap[category];
    if (dataItem) {
      return this.indexToPosition(dataItem.get("index"));
    }
    return NaN;
  }
  /**
   * Returns an index of a category.
   *
   * @param   category  Category to look up
   * @return            Index
   */
  categoryToIndex(category) {
    let dataItem = this._itemMap[category];
    if (dataItem) {
      return dataItem.get("index");
    }
    return NaN;
  }
  /**
   * @ignore
   */
  dataItemToPosition(dataItem) {
    return this.indexToPosition(dataItem.get("index"));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    position += (0.5 - location) / this.dataItems.length;
    return this.indexToPosition(this.axisPositionToIndex(position), location);
  }
  /**
   * Returns an index of the category that corresponds to specific pixel
   * position within axis.
   *
   * @param position  Position (px)
   * @return Category index
   */
  axisPositionToIndex(position) {
    let len = this.dataItems.length;
    return fitToRange(Math.floor(position * len), 0, len - 1);
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      const label = dataItem.get("label");
      if (label) {
        return populateString(label, this.get("tooltipText", ""));
      }
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip._setDataItem(this.dataItems[this.axisPositionToIndex(position)]);
    tooltip.label.text.markDirtyText();
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position) {
    if (this.dataItems.length > 0) {
      let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let index = this.axisPositionToIndex(position);
      let seriesDataItem = series.dataItems[index];
      let axisDataItem = this.dataItems[index];
      let category = axisDataItem.get("category");
      if (seriesDataItem && axisDataItem) {
        if (seriesDataItem.get(fieldName) === category) {
          return seriesDataItem;
        }
      }
      for (let i = 0, len = series.dataItems.length; i < len; i++) {
        let dataItem = series.dataItems[i];
        if (dataItem.get(fieldName) === category) {
          return dataItem;
        }
      }
    }
  }
  /**
   * Zooms the axis to specific `start` and `end` indexes.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start index
   * @param  end       End index
   * @param  duration  Duration in milliseconds
   */
  zoomToIndexes(start, end, duration) {
    let len = this.dataItems.length;
    this.zoom(start / len, end / len, duration);
  }
  zoomToCategories(startCategory, endCategory, duration) {
    this.zoomToIndexes(this.categoryToIndex(startCategory), this.categoryToIndex(endCategory) + 1, duration);
  }
  /**
   * Returns position span between start and end of a single cell in axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    return this._frequency / this.dataItems.length / (this.get("end", 1) - this.get("start", 0));
  }
  /**
   * @ignore
   */
  nextPosition(count) {
    if (count == null) {
      count = 1;
    }
    if (this.get("renderer").getPrivate("letter") == "Y") {
      count *= -1;
    }
    const position = this.getPrivate("tooltipPosition", 0);
    const index = fitToRange(this.axisPositionToIndex(position) + count, 0, this.dataItems.length - 1);
    return this.toGlobalPosition(this.indexToPosition(index));
  }
};
Object.defineProperty(CategoryAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryAxis"
});
Object.defineProperty(CategoryAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Axis.classNames.concat([CategoryAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/CategoryDateAxis.js
var CategoryDateAxis = class extends CategoryAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_itemMap", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    this.fields.push("category");
    super._afterNew();
  }
  _prepareAxisItems() {
    this.setPrivateRaw("baseInterval", this.get("baseInterval"));
    const renderer = this.get("renderer");
    const len = this.dataItems.length;
    let startIndex = this.startIndex();
    if (startIndex > 0) {
      startIndex--;
    }
    let endIndex = this.endIndex();
    if (endIndex < len) {
      endIndex++;
    }
    let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
    let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
    startIndex = Math.floor(startIndex / frequency) * frequency;
    this._frequency = frequency;
    for (let j = 0; j < len; j++) {
      this._toggleDataItem(this.dataItems[j], false);
    }
    let startTime = Number(this.dataItems[startIndex].get("category"));
    let endTime = Number(this.dataItems[endIndex - 1].get("category"));
    let realDuration = endTime - startTime;
    if (endIndex - startIndex < maxCount) {
      realDuration = endTime - startTime - ((endTime - startTime) / this.baseDuration() - (endIndex - startIndex)) * this.baseDuration();
    }
    let gridInterval = chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
    const nextGridUnit = getNextUnit(gridInterval.timeUnit);
    const baseInterval = this.getPrivate("baseInterval");
    if (getIntervalDuration(gridInterval) < this.baseDuration()) {
      gridInterval = Object.assign({}, baseInterval);
    }
    const formats = this.get("dateFormats");
    let previousValue = -Infinity;
    let previousIndex = -Infinity;
    let previousUnitValue = -Infinity;
    let format;
    let selectedItems = [];
    let changed = false;
    for (let i = startIndex; i < endIndex; i++) {
      let dataItem = this.dataItems[i];
      let index = dataItem.get("index");
      let skip = false;
      let value = Number(dataItem.get("category"));
      let date = new Date(value);
      let unitValue = getUnitValue(date, gridInterval.timeUnit);
      format = formats[gridInterval.timeUnit];
      let added = false;
      if (gridInterval.timeUnit != "year" && gridInterval.timeUnit != "week") {
        if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
          if (checkChange(value, previousValue, nextGridUnit, this._root.utc)) {
            format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            if (index - frequency * 0.5 < previousIndex) {
              selectedItems.pop();
            }
            selectedItems.push({
              format,
              dataItem
            });
            changed = true;
            added = true;
            previousIndex = index;
            previousUnitValue = unitValue;
          }
        }
      }
      let shouldAdd = false;
      if (gridInterval.timeUnit === "day" || gridInterval.timeUnit === "week") {
        if (index - previousIndex >= frequency) {
          shouldAdd = true;
        }
      } else {
        if (unitValue % gridInterval.count === 0) {
          if (unitValue != previousUnitValue) {
            shouldAdd = true;
          }
        }
      }
      if (!added && shouldAdd) {
        if (index - frequency * 0.7 < previousIndex) {
          if (changed) {
            skip = true;
          }
        }
        if (!skip) {
          selectedItems.push({
            format,
            dataItem
          });
          previousIndex = index;
          previousUnitValue = unitValue;
        }
        changed = false;
      }
      previousValue = value;
    }
    if (selectedItems.length > 0) {
      let f = selectedItems[0].dataItem.get("index", 0);
      each(selectedItems, (item) => {
        const dataItem = item.dataItem;
        const format2 = item.format;
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        let value = Number(dataItem.get("category"));
        let date = new Date(value);
        const label = dataItem.get("label");
        if (label) {
          label.set("text", this._root.dateFormatter.format(date, format2));
        }
        f++;
        this._prepareDataItem(dataItem, f, frequency);
      });
    }
  }
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return getIntervalDuration(this.getPrivate("baseInterval"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    let dataItem = this.dataItems[this.axisPositionToIndex(position)];
    if (dataItem) {
      let format = this.get("dateFormats")[this.getPrivate("baseInterval").timeUnit];
      return this._root.dateFormatter.format(new Date(dataItem.get("category", 0)), this.get("tooltipDateFormat", format));
    }
  }
  _updateTooltipText(tooltip, position) {
    tooltip.label.set("text", this.getTooltipText(position));
  }
};
Object.defineProperty(CategoryDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CategoryDateAxis"
});
Object.defineProperty(CategoryDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CategoryAxis.classNames.concat([CategoryDateAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DateAxis.js
var DateAxis = class extends ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_seriesDataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_groupingCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_intervalDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_baseDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_intervalMax", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_intervalMin", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
    this._setBaseInterval(this.get("baseInterval"));
    this.on("baseInterval", () => {
      this._setBaseInterval(this.get("baseInterval"));
    });
  }
  _setBaseInterval(interval) {
    this.setPrivateRaw("baseInterval", interval);
    this._baseDuration = getIntervalDuration(interval);
  }
  _fixZoomFactor() {
    const maxZoomFactor = this.get("maxZoomFactor");
    if (maxZoomFactor != null && maxZoomFactor != Infinity) {
      this.setPrivateRaw("maxZoomFactor", maxZoomFactor);
    } else {
      this.setPrivateRaw("maxZoomFactor", Math.round((this.getPrivate("max", 0) - this.getPrivate("min", 0)) / this.baseMainDuration()));
    }
  }
  _groupData() {
    const min2 = this.getPrivate("min");
    const max2 = this.getPrivate("max");
    if (isNumber(min2) && isNumber(max2)) {
      this._fixZoomFactor();
      const groupInterval = this.getPrivate("groupInterval");
      if (groupInterval) {
        this._setBaseInterval(groupInterval);
      } else {
        this._setBaseInterval(this.get("baseInterval"));
      }
      if (this.isDirty("groupInterval")) {
        let groupInterval2 = this.get("groupInterval");
        if (groupInterval2) {
          this.setRaw("groupIntervals", [groupInterval2]);
          this._handleRangeChange();
        }
      }
      if (this.isDirty("groupData")) {
        if (!this._dataGrouped) {
          if (this.get("groupData")) {
            each(this.series, (series) => {
              this._groupSeriesData(series);
            });
            this._handleRangeChange();
          } else {
            let baseInterval = this.get("baseInterval");
            let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
            each(this.series, (series) => {
              series.setDataSet(mainDataSetId);
              series.resetGrouping();
            });
            this._setBaseInterval(baseInterval);
            this.setPrivateRaw("groupInterval", void 0);
            this.markDirtyExtremes();
          }
          this._dataGrouped = true;
        }
      }
    }
  }
  _groupSeriesData(series) {
    if (this.get("groupData") && !series.get("groupDataDisabled")) {
      this._dataGrouped = true;
      this._seriesDataGrouped = true;
      let intervals = [];
      let baseDuration = this.baseMainDuration();
      let groupIntervals = this.get("groupIntervals");
      if (groupIntervals) {
      }
      each(groupIntervals, (interval) => {
        let intervalDuration = getIntervalDuration(interval);
        if (intervalDuration > baseDuration) {
          intervals.push(interval);
        }
      });
      series._dataSets = {};
      const key = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
      let fields;
      const baseAxis = series.get("baseAxis");
      if (series.get("xAxis") === baseAxis) {
        fields = series._valueYFields;
      } else if (series.get("yAxis") === baseAxis) {
        fields = series._valueXFields;
      }
      let dataItems = series._mainDataItems;
      let baseInterval = this.get("baseInterval");
      let mainDataSetId = baseInterval.timeUnit + baseInterval.count;
      series._dataSets[mainDataSetId] = dataItems;
      const groupCallback = series.get("groupDataCallback");
      let groupOriginals = series.get("groupDataWithOriginals", false);
      if (groupCallback) {
        groupOriginals = true;
      }
      each(intervals, (interval) => {
        let previousTime = -Infinity;
        let dataSetId = interval.timeUnit + interval.count;
        series._dataSets[dataSetId] = [];
        let newDataItem;
        let sum = {};
        let count = {};
        let groupFieldValues = {};
        let workingFields = {};
        each(fields, (field) => {
          sum[field] = 0;
          count[field] = 0;
          groupFieldValues[field] = series.get(field + "Grouped");
          workingFields[field] = field + "Working";
        });
        let intervalDuration = getDuration(interval.timeUnit);
        let firstItem = dataItems[0];
        let firstTime;
        if (firstItem) {
          firstTime = dataItems[0].get(key);
        }
        let prevNewDataItem;
        each(dataItems, (dataItem) => {
          let time = dataItem.get(key);
          let roundedTime = roun(time, interval.timeUnit, interval.count, this._root, firstTime);
          let dataContext;
          if (previousTime < roundedTime - intervalDuration / 24) {
            dataContext = copy2(dataItem.dataContext);
            newDataItem = new DataItem(series, dataContext, series._makeDataItem(dataContext));
            newDataItem.setRaw(key, roundedTime);
            series._dataSets[dataSetId].push(newDataItem);
            each(fields, (field) => {
              let value = dataItem.get(field);
              if (isNumber(value)) {
                newDataItem.setRaw(field, value);
                newDataItem.setRaw(workingFields[field], value);
                count[field] = 1;
                sum[field] = value;
              } else {
                sum[field] = 0;
                count[field] = 0;
              }
            });
            if (groupOriginals) {
              newDataItem.set("originals", [dataItem]);
            }
            if (groupCallback && prevNewDataItem) {
              groupCallback(prevNewDataItem, interval);
            }
            prevNewDataItem = newDataItem;
          } else {
            each(fields, (field) => {
              let groupKey = groupFieldValues[field];
              let value = dataItem.get(field);
              if (value != null) {
                let currentValue = newDataItem.get(field);
                switch (groupKey) {
                  case "close":
                    newDataItem.setRaw(field, value);
                    break;
                  case "sum":
                    newDataItem.setRaw(field, currentValue + value);
                    break;
                  case "open":
                    break;
                  case "low":
                    if (value < currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "high":
                    if (value > currentValue) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                  case "average":
                    count[field]++;
                    sum[field] += value;
                    let average = sum[field] / count[field];
                    newDataItem.setRaw(field, average);
                    break;
                  case "extreme":
                    if (Math.abs(value) > Math.abs(currentValue)) {
                      newDataItem.setRaw(field, value);
                    }
                    break;
                }
                newDataItem.setRaw(workingFields[field], newDataItem.get(field));
                let dataContext2 = copy2(dataItem.dataContext);
                dataContext2[key] = roundedTime;
                newDataItem.dataContext = dataContext2;
              }
            });
            if (groupOriginals) {
              newDataItem.get("originals").push(dataItem);
            }
          }
          previousTime = roundedTime;
        });
        if (groupCallback && prevNewDataItem) {
          groupCallback(prevNewDataItem, interval);
        }
      });
      if (series._dataSetId) {
        series.setDataSet(series._dataSetId);
      }
      this.markDirtySize();
      if (this._seriesAdded) {
        this._root.events.once("frameended", () => {
          this.markDirtySize();
        });
      }
    }
  }
  _clearDirty() {
    super._clearDirty();
    this._groupingCalculated = false;
    this._dataGrouped = false;
  }
  /**
   * Returns a time interval axis would group data to for a specified duration.
   *
   * @since 5.2.1
   */
  getGroupInterval(duration) {
    let baseInterval = this.get("baseInterval");
    let groupInterval = chooseInterval(0, duration, this.get("groupCount", Infinity), this.get("groupIntervals"));
    if (getIntervalDuration(groupInterval) < getIntervalDuration(baseInterval)) {
      groupInterval = Object.assign({}, baseInterval);
    }
    return groupInterval;
  }
  /**
   * Return `max` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Max
   */
  getIntervalMax(interval) {
    return this._intervalMax[interval.timeUnit + interval.count];
  }
  /**
   * Return `min` of a specified time interval.
   *
   * Will work only if the axis was grouped to this interval at least once.
   *
   * @since 5.2.1
   * @param   interval  Interval
   * @return            Min
   */
  getIntervalMin(interval) {
    return this._intervalMin[interval.timeUnit + interval.count];
  }
  _handleRangeChange() {
    super._handleRangeChange();
    let selectionMin = Math.round(this.getPrivate("selectionMin"));
    let selectionMax = Math.round(this.getPrivate("selectionMax"));
    if (isNumber(selectionMin) && isNumber(selectionMax)) {
      if (this.get("endLocation") == 0) {
        selectionMax += 1;
      }
      if (this.get("groupData") && !this._groupingCalculated) {
        this._groupingCalculated = true;
        let groupInterval = this.get("groupInterval");
        let current = this.getPrivate("groupInterval");
        let modifiedDifference = selectionMax - selectionMin + (this.get("startLocation", 0) + (1 - this.get("endLocation", 1)) * this.baseDuration());
        if (current) {
          let duration = getIntervalDuration(current);
          modifiedDifference = Math.ceil(modifiedDifference / duration) * duration;
        }
        if (!groupInterval) {
          groupInterval = this.getGroupInterval(modifiedDifference);
        }
        if (groupInterval && (!current || current.timeUnit !== groupInterval.timeUnit || current.count !== groupInterval.count || this._seriesDataGrouped)) {
          this._seriesDataGrouped = false;
          this.setPrivateRaw("groupInterval", groupInterval);
          this._setBaseInterval(groupInterval);
          let newId = groupInterval.timeUnit + groupInterval.count;
          each(this.series, (series) => {
            if (series.get("baseAxis") === this) {
              series.setDataSet(newId);
            }
          });
          this.markDirtyExtremes();
          this._root.events.once("frameended", () => {
            this._root.events.once("frameended", () => {
              const type = "groupintervalchanged";
              if (this.events.isEnabled(type)) {
                this.events.dispatch(type, {
                  type,
                  target: this
                });
              }
            });
          });
        }
      }
      each(this.series, (series) => {
        if (series.get("baseAxis") === this) {
          let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
          const start = getFirstSortedIndex(series.dataItems, (dataItem) => {
            return compare(dataItem.get(fieldName), selectionMin);
          });
          let startIndex = start.index;
          if (startIndex > 0) {
            startIndex -= 1;
          }
          selectionMax += this.baseDuration() * (1 - this.get("endLocation", 1));
          const end = getSortedIndex(series.dataItems, (dataItem) => {
            return compare(dataItem.get(fieldName), selectionMax);
          });
          let endIndex = end.index;
          let endIndex2 = endIndex;
          if (endIndex2 > 1) {
            endIndex2--;
          }
          const firstDataItem = series.dataItems[startIndex];
          const lastDataItem = series.dataItems[endIndex2];
          let lastDate;
          let firstDate;
          if (firstDataItem) {
            firstDate = firstDataItem.get(fieldName);
          }
          if (lastDataItem) {
            lastDate = lastDataItem.get(fieldName);
          }
          let outOfSelection = false;
          if (lastDate != null && firstDate != null) {
            if (lastDate < selectionMin || firstDate > selectionMax) {
              outOfSelection = true;
            }
          }
          series.setPrivate("outOfSelection", outOfSelection);
          series.setPrivate("startIndex", startIndex);
          series.setPrivate("adjustedStartIndex", series._adjustStartIndex(startIndex));
          series.setPrivate("endIndex", endIndex);
          this.root.events.once("frameended", () => {
            series._markDirtyPrivateKey("adjustedStartIndex");
          });
        }
      });
    }
  }
  _adjustMinMax(min2, max2, gridCount, _strictMode) {
    return {
      min: min2,
      max: max2,
      step: (max2 - min2) / gridCount
    };
  }
  /**
   * @ignore
   */
  intervalDuration() {
    return this._intervalDuration;
  }
  _saveMinMax(min2, max2) {
    let groupInterval = this.getPrivate("groupInterval");
    if (!groupInterval) {
      groupInterval = this.get("baseInterval");
    }
    let id = groupInterval.timeUnit + groupInterval.count;
    this._intervalMin[id] = min2;
    this._intervalMax[id] = max2;
  }
  _getM(timeUnit) {
    if (timeUnit == "month" || timeUnit == "year" || timeUnit == "day") {
      return 1.05;
    }
    return 1.01;
  }
  _getMinorInterval(interval) {
    var _a;
    let minorGridInterval;
    let count = interval.count;
    let timeUnit = interval.timeUnit;
    if (count > 1) {
      if (count == 10) {
        count = 5;
      } else if (count == 15) {
        count = 5;
      } else if (count == 12) {
        count = 2;
      } else if (count == 6) {
        count = 1;
      } else if (count == 30) {
        count = 10;
      } else if (count < 10) {
        count = 1;
      }
      minorGridInterval = {
        timeUnit,
        count
      };
    }
    if (timeUnit == "week") {
      if (((_a = this.getPrivate("baseInterval")) === null || _a === void 0 ? void 0 : _a.timeUnit) != "week") {
        minorGridInterval = {
          timeUnit: "day",
          count: 1
        };
      } else {
        minorGridInterval = {
          timeUnit: "week",
          count: 1
        };
      }
    }
    return minorGridInterval;
  }
  _prepareAxisItems() {
    const min2 = this.getPrivate("min");
    const max2 = this.getPrivate("max");
    if (isNumber(min2) && isNumber(max2)) {
      const root = this._root;
      const selectionMin = Math.round(this.getPrivate("selectionMin"));
      const selectionMax = Math.round(this.getPrivate("selectionMax"));
      const renderer = this.get("renderer");
      const baseInterval = this.getPrivate("baseInterval");
      let value = selectionMin;
      let i = 0;
      const intervals = this.get("gridIntervals");
      let gridInterval = chooseInterval(0, selectionMax - selectionMin, renderer.gridCount(), intervals);
      if (getIntervalDuration(gridInterval) < this.baseDuration()) {
        gridInterval = Object.assign({}, baseInterval);
      }
      const intervalDuration = getIntervalDuration(gridInterval);
      this._intervalDuration = intervalDuration;
      const nextGridUnit = getNextUnit(gridInterval.timeUnit);
      const utc = root.utc;
      const timezone = root.timezone;
      value = roun(selectionMin - intervalDuration, gridInterval.timeUnit, gridInterval.count, root, min2);
      let previousValue = value - intervalDuration;
      let format;
      const formats = this.get("dateFormats");
      this.setPrivateRaw("gridInterval", gridInterval);
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let minorGridInterval;
      let minorDuration = 0;
      if (minorGridEnabled) {
        minorGridInterval = this._getMinorInterval(gridInterval);
        minorDuration = getIntervalDuration(minorGridInterval);
      }
      let m = 0;
      while (value < selectionMax + intervalDuration) {
        let dataItem;
        if (this.dataItems.length < i + 1) {
          dataItem = new DataItem(this, void 0, {});
          this._dataItems.push(dataItem);
          this.processDataItem(dataItem);
        } else {
          dataItem = this.dataItems[i];
        }
        this._createAssets(dataItem, []);
        this._toggleDataItem(dataItem, true);
        dataItem.setRaw("value", value);
        dataItem.setRaw("labelEndValue", void 0);
        let endValue = value + getDuration(gridInterval.timeUnit, gridInterval.count * this._getM(gridInterval.timeUnit));
        endValue = roun(endValue, gridInterval.timeUnit, 1, root);
        dataItem.setRaw("endValue", endValue);
        let date = new Date(value);
        format = formats[gridInterval.timeUnit];
        if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
          if (gridInterval.timeUnit != "year") {
            if (checkChange(value, previousValue, nextGridUnit, utc, timezone)) {
              format = this.get("periodChangeDateFormats")[gridInterval.timeUnit];
            }
          }
        }
        const label = dataItem.get("label");
        if (label) {
          label.set("text", root.dateFormatter.format(date, format));
        }
        let count = gridInterval.count;
        if (gridInterval.timeUnit == "week") {
          dataItem.setRaw("labelEndValue", value);
        }
        if (minorGridEnabled) {
          count = 1;
          let timeUnit = gridInterval.timeUnit;
          if (timeUnit == "week") {
            timeUnit = "day";
          }
          let labelEndValue = value + getDuration(timeUnit, this._getM(timeUnit));
          labelEndValue = roun(labelEndValue, timeUnit, 1, root);
          dataItem.setRaw("labelEndValue", labelEndValue);
        }
        this._prepareDataItem(dataItem, count);
        previousValue = value;
        value = endValue;
        if (minorGridInterval) {
          const minorTimeUnit = minorGridInterval.timeUnit;
          const minorCount = minorGridInterval.count;
          const mmm = this._getM(minorTimeUnit);
          let minorValue = roun(previousValue + minorDuration * mmm, minorTimeUnit, minorCount, root, previousValue);
          let previousMinorValue;
          let minorFormats = this.get("minorDateFormats", this.get("dateFormats"));
          while (minorValue < value - 0.01 * minorDuration) {
            let minorDataItem;
            if (this.minorDataItems.length < m + 1) {
              minorDataItem = new DataItem(this, void 0, {});
              this.minorDataItems.push(minorDataItem);
              this.processDataItem(minorDataItem);
            } else {
              minorDataItem = this.minorDataItems[m];
            }
            this._createAssets(minorDataItem, ["minor"], true);
            this._toggleDataItem(minorDataItem, true);
            minorDataItem.setRaw("value", minorValue);
            let minorEndValue = minorValue + getDuration(minorTimeUnit, minorCount * mmm);
            minorEndValue = roun(minorEndValue, minorTimeUnit, 1, root);
            minorDataItem.setRaw("endValue", minorEndValue);
            let date2 = new Date(minorValue);
            format = minorFormats[minorTimeUnit];
            const minorLabel = minorDataItem.get("label");
            if (minorLabel) {
              if (minorLabelsEnabled) {
                minorLabel.set("text", root.dateFormatter.format(date2, format));
              } else {
                minorLabel.setPrivate("visible", false);
              }
            }
            this._prepareDataItem(minorDataItem, 1);
            if (minorValue == previousMinorValue) {
              break;
            }
            previousMinorValue = minorValue;
            minorValue = minorEndValue;
            m++;
          }
        }
        if (value == previousValue) {
          break;
        }
        i++;
      }
      for (let j = i; j < this.dataItems.length; j++) {
        this._toggleDataItem(this.dataItems[j], false);
      }
      for (let j = m; j < this.minorDataItems.length; j++) {
        this._toggleDataItem(this.minorDataItems[j], false);
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
  _updateFinals(start, end) {
    this.setPrivateRaw("selectionMinFinal", this.positionToValue(start));
    this.setPrivateRaw("selectionMaxFinal", this.positionToValue(end));
  }
  _getDelta() {
    this._deltaMinMax = this.baseDuration() / 2;
  }
  _fixMin(min2) {
    const baseInterval = this.getPrivate("baseInterval");
    const timeUnit = baseInterval.timeUnit;
    let startTime = roun(min2, timeUnit, baseInterval.count, this._root);
    let endTime = startTime + getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = roun(endTime, timeUnit, 1, this._root);
    return startTime + (endTime - startTime) * this.get("startLocation", 0);
  }
  _fixMax(max2) {
    const baseInterval = this.getPrivate("baseInterval");
    const timeUnit = baseInterval.timeUnit;
    let startTime = roun(max2, timeUnit, baseInterval.count, this._root);
    let endTime = startTime + getDuration(timeUnit, baseInterval.count * this._getM(timeUnit));
    endTime = roun(endTime, timeUnit, 1, this._root);
    return startTime + (endTime - startTime) * this.get("endLocation", 1);
  }
  _updateDates(_date, _series) {
  }
  _handleSeriesRemoved() {
    this.setPrivate("baseInterval", this.get("baseInterval"));
    this.setPrivate("min", void 0);
    this.setPrivate("minFinal", void 0);
  }
  /**
   * Returns a duration of currently active `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseDuration() {
    return this._baseDuration;
  }
  /**
   * Returns a duration of user-defined `baseInterval` in milliseconds.
   *
   * @return Duration
   */
  baseMainDuration() {
    return getIntervalDuration(this.get("baseInterval"));
  }
  /**
   * @ignore
   */
  processSeriesDataItem(dataItem, fields) {
    const baseInterval = this.getPrivate("baseInterval");
    if (!dataItem.open) {
      dataItem.open = {};
    }
    if (!dataItem.close) {
      dataItem.close = {};
    }
    each(fields, (field) => {
      let value = dataItem.get(field);
      if (isNumber(value)) {
        let startTime = dataItem.open[field];
        let endTime = dataItem.close[field];
        if (value >= startTime && value <= endTime) {
        } else {
          const timeUnit = baseInterval.timeUnit;
          const count = baseInterval.count;
          startTime = roun(value, timeUnit, count, this._root);
          endTime = startTime + getDuration(timeUnit, count * this._getM(timeUnit));
          endTime = roun(endTime, timeUnit, 1, this._root);
          dataItem.open[field] = startTime;
          dataItem.close[field] = endTime;
        }
        this._updateDates(startTime, dataItem.component);
      }
    });
  }
  _handleSizeDirty() {
  }
  /**
   * @ignore
   */
  getDataItemPositionX(dataItem, field, cellLocation, axisLocation, exactLocation) {
    let openValue;
    let closeValue;
    let value;
    if (exactLocation) {
      value = dataItem.get(field);
    } else {
      if (dataItem.open && dataItem.close) {
        openValue = dataItem.open[field];
        closeValue = dataItem.close[field];
      } else {
        openValue = dataItem.get(field);
        closeValue = openValue;
      }
      value = openValue + (closeValue - openValue) * cellLocation;
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateX(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionX(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  getDataItemPositionY(dataItem, field, cellLocation, axisLocation, exactLocation) {
    let openValue;
    let closeValue;
    let value;
    if (exactLocation) {
      value = dataItem.get(field);
    } else {
      if (dataItem.open && dataItem.close) {
        openValue = dataItem.open[field];
        closeValue = dataItem.close[field];
      } else {
        openValue = dataItem.get(field);
        closeValue = openValue;
      }
      value = openValue + (closeValue - openValue) * cellLocation;
      value = this._baseValue + (value - this._baseValue) * axisLocation;
    }
    return this.valueToPosition(value);
  }
  /**
   * @ignore
   */
  getDataItemCoordinateY(dataItem, field, cellLocation, axisLocation) {
    return this._settings.renderer.positionToCoordinate(this.getDataItemPositionY(dataItem, field, cellLocation, axisLocation));
  }
  /**
   * @ignore
   */
  roundAxisPosition(position, location) {
    let value = this.positionToValue(position);
    value = value - (location - 0.5) * this.baseDuration();
    let baseInterval = this.getPrivate("baseInterval");
    if (!isNaN(value)) {
      const firstDay = this._root.locale.firstDayOfWeek;
      const timeUnit = baseInterval.timeUnit;
      const utc = this._root.utc;
      const timezone = this._root.timezone;
      const count = baseInterval.count;
      value = roun(value, timeUnit, count, this._root, this.getPrivate("min", 0));
      let duration = getDateIntervalDuration(baseInterval, new Date(value), firstDay, utc, timezone);
      if (timezone) {
        value = roun(value + this.baseDuration() * 0.05, timeUnit, count, this._root, this.getPrivate("min", 0));
        duration = getDateIntervalDuration(baseInterval, new Date(value + duration * location), firstDay, utc, timezone);
      }
      return this.valueToPosition(value + duration * location);
    }
    return NaN;
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * NOTE: Unless `adjustPosition` (2nd parameter) is set to `false`, the method
   * will adjust position by `tooltipIntervalOffset`.
   *
   * @param  position        Position
   * @param  adjustPosition  Adjust position
   * @return                 Tooltip text
   */
  getTooltipText(position, adjustPosition) {
    if (this.getPrivate("min") != null) {
      let format = this.get("tooltipDateFormats")[this.getPrivate("baseInterval").timeUnit];
      let value = this.positionToValue(position);
      if (isNumber(value)) {
        let date = new Date(value);
        let baseInterval = this.getPrivate("baseInterval");
        let duration = getDateIntervalDuration(baseInterval, date, this._root.locale.firstDayOfWeek, this._root.utc, this._root.timezone);
        if (adjustPosition !== false) {
          date = new Date(value + this.get("tooltipIntervalOffset", -this.get("tooltipLocation", 0.5)) * duration);
        }
        return this._root.dateFormatter.format(date, this.get("tooltipDateFormat", format));
      }
    }
    return "";
  }
  /**
   * Returns a data item from series that is closest to the `position`.
   *
   * @param   series    Series
   * @param   position  Relative position
   * @return            Data item
   */
  getSeriesItem(series, position, location, snap) {
    let fieldName = this.getPrivate("name") + this.get("renderer").getPrivate("letter");
    let value = this.positionToValue(position);
    if (location == null) {
      location = 0.5;
    }
    value = value - (location - 0.5) * this.baseDuration();
    const result = getSortedIndex(series.dataItems, (dataItem) => {
      let diValue = 0;
      if (dataItem.open) {
        diValue = dataItem.open[fieldName];
      }
      return compare(diValue, value);
    });
    if (snap || series.get("snapTooltip")) {
      let first = series.dataItems[result.index - 1];
      let second = series.dataItems[result.index];
      if (first && second) {
        if (first.open && second.close) {
          let open = first.open[fieldName];
          let close = second.close[fieldName];
          if (Math.abs(value - open) > Math.abs(value - close)) {
            return second;
          }
        }
      }
      if (first) {
        return first;
      }
      if (second) {
        return second;
      }
    } else {
      const dataItem = series.dataItems[result.index - 1];
      if (dataItem) {
        if (dataItem.open && dataItem.close) {
          let open = dataItem.open[fieldName];
          let close = dataItem.close[fieldName];
          if (value >= open && value <= close) {
            return dataItem;
          }
        }
      }
    }
  }
  /**
   * @ignore
   */
  shouldGap(dataItem, nextItem, autoGapCount, fieldName) {
    const value1 = dataItem.get(fieldName);
    const value2 = nextItem.get(fieldName);
    if (value2 - value1 > this.baseDuration() * autoGapCount) {
      return true;
    }
    return false;
  }
  /**
   * Zooms the axis to specific `start` and `end` dates.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start Date
   * @param  end       End Date
   * @param  duration  Duration in milliseconds
   */
  zoomToDates(start, end, duration) {
    this.zoomToValues(start.getTime(), end.getTime(), duration);
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min2 = this.getPrivate("minFinal", 0);
    const max2 = this.getPrivate("maxFinal", 0);
    if (this.getPrivate("min") != null && this.getPrivate("max") != null) {
      if (this.get("groupData")) {
        const futureGroupInterval = this.getGroupInterval(end - start);
        const baseInterval = this.get("baseInterval");
        let baseMin = this.getIntervalMin(baseInterval);
        let baseMax = this.getIntervalMax(baseInterval) - 1;
        baseMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        baseMax += this._getM(futureGroupInterval.timeUnit) * getIntervalDuration(futureGroupInterval);
        baseMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let futureMin = roun(baseMin, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let futureMax = roun(baseMax, futureGroupInterval.timeUnit, futureGroupInterval.count, this.root);
        let s = (start - futureMin) / (futureMax - futureMin);
        let e = (end - futureMin) / (futureMax - futureMin);
        this.zoom(s, e, duration);
      } else {
        this.zoom((start - min2) / (max2 - min2), (end - min2) / (max2 - min2), duration);
      }
    }
  }
  /**
   * Returns a `Date` object corresponding to specific position within plot
   * area.
   *
   * @param   position  Pposition
   * @return            Date
   */
  positionToDate(position) {
    return new Date(this.positionToValue(position));
  }
  /**
   * Returns a relative position within plot area that corresponds to specific
   * date.
   *
   * @param   date  Date
   * @return        Position
   */
  dateToPosition(date) {
    return this.valueToPosition(date.getTime());
  }
  /**
   * Returns relative position between two grid lines of the axis.
   *
   * @since 5.2.30
   * @return Position
   */
  getCellWidthPosition() {
    let max2 = this.getPrivate("selectionMax", this.getPrivate("max"));
    let min2 = this.getPrivate("selectionMin", this.getPrivate("min"));
    if (isNumber(max2) && isNumber(min2)) {
      return this._intervalDuration / (max2 - min2);
    }
    return 0.05;
  }
  nextPosition(count) {
    if (count == null) {
      count = 1;
    }
    let dtime = this.get("tooltipLocation", 0.5) * this.baseDuration();
    if (this.get("renderer").getPrivate("letter") == "Y") {
      count *= -1;
    }
    let tooltipValue = this.positionToValue(this.getPrivate("tooltipPosition", 0));
    const baseInterval = this.getPrivate("baseInterval");
    let time = this._nextTime(tooltipValue, count, baseInterval);
    let selectionMin = this.getPrivate("selectionMin", 0);
    let selectionMax = this.getPrivate("selectionMax", 0);
    let min2 = roun(selectionMin, baseInterval.timeUnit, baseInterval.count, this._root);
    let max2 = roun(selectionMax, baseInterval.timeUnit, baseInterval.count, this._root);
    time += dtime;
    time = fitToRange(time, min2 + dtime, max2 - dtime);
    return this.toGlobalPosition(this.valueToPosition(time));
  }
  _nextTime(time, count, baseInterval) {
    return roun(time + count * this.baseDuration(), baseInterval.timeUnit, baseInterval.count, this._root);
  }
};
Object.defineProperty(DateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DateAxis"
});
Object.defineProperty(DateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ValueAxis.classNames.concat([DateAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/GaplessDateAxis.js
var GaplessDateAxis = class extends DateAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_frequency", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_m", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_dates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "_customDates", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _afterNew() {
    this.valueFields.push("date");
    super._afterNew();
  }
  _getDates() {
    if (this._customDates) {
      return this._customDates;
    }
    return this._dates;
  }
  _updateDates(date, series) {
    if (!series.get("ignoreMinMax")) {
      const dates = this._getDates();
      const result = getSortedIndex(dates, (x) => compare(x, date));
      if (!result.found) {
        insertIndex(dates, result.index, date);
      }
    }
  }
  _updateAllDates() {
    if (!this._customDates) {
      const dates = this._dates;
      dates.length = 0;
      each(this.series, (series) => {
        let field = "valueX";
        if (series.get("yAxis") == this) {
          field = "valueY";
        }
        each(series.dataItems, (dataItem) => {
          let value = dataItem.get(field);
          if (isNumber(value)) {
            if (dataItem.open) {
              this._updateDates(dataItem.open[field], series);
            }
          }
        });
      });
      const extraMax = this.get("extraMax", 0);
      const extraMin = this.get("extraMin", 0);
      let len = dates.length;
      const baseInterval = this.getPrivate("baseInterval");
      const baseCount = baseInterval.count;
      const timeUnit = baseInterval.timeUnit;
      if (extraMax > 0) {
        const extra = len * extraMax;
        let time = dates[len - 1];
        if (isNumber(time)) {
          for (let i = len - 1; i < len + extra; i++) {
            time += getDuration(timeUnit, baseCount * this._getM(timeUnit));
            time = roun(time, timeUnit, baseCount, this._root);
            dates.push(time);
          }
        }
      }
      if (extraMin > 0) {
        const extra = len * extraMin;
        let time = dates[0];
        if (isNumber(time)) {
          for (let i = 0; i < extra; i++) {
            time -= getDuration(timeUnit, baseCount);
            time = roun(time, timeUnit, baseCount, this._root);
            dates.unshift(time);
          }
        }
      }
    }
  }
  /**
   * Convers value to a relative position on axis.
   *
   * @param   value  Value
   * @return         Relative position
   */
  valueToPosition(value) {
    const dates = this._getDates();
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    const len = dates.length - startLocation - (1 - endLocation);
    const result = getSortedIndex(dates, (x) => compare(x, value));
    let index = result.index;
    if (result.found) {
      return (index - startLocation) / len;
    } else {
      if (index > 0) {
        index -= 1;
      }
      let itemValue = dates[index];
      const nextDate = dates[index + 1];
      if (nextDate) {
        let nextItemValue = nextDate;
        if (Math.abs(nextItemValue - value) < Math.abs(itemValue - value)) {
          itemValue = nextItemValue;
          index++;
        }
      }
      let d = value - itemValue;
      return (index - startLocation) / len + d / this.baseDuration() / len;
    }
  }
  /**
   * Converts numeric value from axis scale to index.
   *
   * @param  value  Value
   * @return        Index
   */
  valueToIndex(value) {
    const dates = this._getDates();
    const result = getSortedIndex(dates, (x) => compare(x, value));
    let index = result.index;
    if (result.found) {
      return index;
    } else {
      if (index > 0) {
        index -= 1;
      }
      return index;
    }
  }
  /**
   * Converts a relative position to a corresponding numeric value from axis
   * scale.
   *
   * @param   position  Relative position
   * @return            Value
   */
  positionToValue(position) {
    const startLocation = this.get("startLocation", 0);
    const endLocation = this.get("endLocation", 1);
    const dates = this._getDates();
    let len = Math.round(dates.length - startLocation - (1 - endLocation));
    let index = position * len;
    let findex = Math.floor(index);
    if (findex < 0) {
      findex = 0;
    }
    if (findex > len - 1) {
      findex = len - 1;
    }
    return dates[findex] + (index - findex + startLocation) * this.baseDuration();
  }
  _fixZoomFactor() {
    this.setPrivateRaw("maxZoomFactor", this._getDates().length - this.get("startLocation", 0) - (1 - this.get("endLocation", 1)));
  }
  /**
   * Zooms the axis to specific `start` and `end` dates.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start Date
   * @param  end       End Date
   * @param  duration  Duration in milliseconds
   */
  zoomToDates(start, end, duration) {
    const dates = this._getDates();
    const len = dates.length;
    let result = getSortedIndex(dates, (x) => compare(x, start.getTime()));
    let startValue = dates[Math.min(result.index, len - 1)];
    result = getSortedIndex(dates, (x) => compare(x, end.getTime()));
    let endValue = dates[result.index];
    if (result.index >= len) {
      endValue = dates[len - 1] + this.baseDuration();
    }
    this.zoomToValues(startValue, endValue, duration);
  }
  /**
   * Zooms the axis to specific `start` and `end` values.
   *
   * Optional `duration` specifies duration of zoom animation in milliseconds.
   *
   * @param  start     Start value
   * @param  end       End value
   * @param  duration  Duration in milliseconds
   */
  zoomToValues(start, end, duration) {
    const min2 = this.getPrivate("min", 0);
    const max2 = this.getPrivate("max", 0);
    start = fitToRange(start, min2, max2);
    end = fitToRange(end, min2, max2);
    this.zoom(this.valueToPosition(start), this.valueToPosition(end), duration);
  }
  _prepareAxisItems() {
    let startTime = this.getPrivate("selectionMin", 0);
    let endTime = this.getPrivate("selectionMax", 0);
    if (isNumber(startTime) && isNumber(endTime)) {
      if (this._seriesValuesDirty) {
        this._seriesValuesDirty = false;
        this._updateAllDates();
      }
      const root = this._root;
      const utc = root.utc;
      const timezone = root.timezone;
      const dates = this._getDates();
      const renderer = this.get("renderer");
      const len = dates.length;
      const baseDuration = this.baseDuration();
      let startIndex = this.valueToIndex(startTime);
      if (startIndex > 0) {
        startIndex--;
      }
      let endIndex = this.valueToIndex(endTime);
      if (endIndex < len - 1) {
        endIndex++;
      }
      let maxCount = renderer.axisLength() / Math.max(renderer.get("minGridDistance"), 1 / Number.MAX_SAFE_INTEGER);
      let frequency = Math.min(len, Math.ceil((endIndex - startIndex) / maxCount));
      frequency = Math.max(1, frequency);
      startIndex = Math.floor(startIndex / frequency) * frequency;
      this._frequency = frequency;
      each(this.dataItems, (dataItem) => {
        this._toggleDataItem(dataItem, false);
      });
      each(this.minorDataItems, (dataItem) => {
        this._toggleDataItem(dataItem, false);
      });
      let realDuration = endTime - startTime - ((endTime - startTime) / baseDuration - (endIndex - startIndex)) * baseDuration;
      let gridInterval = chooseInterval(0, realDuration, maxCount, this.get("gridIntervals"));
      const baseInterval = this.getPrivate("baseInterval");
      let intervalDuration = getIntervalDuration(gridInterval);
      if (intervalDuration < baseDuration) {
        gridInterval = Object.assign({}, baseInterval);
        intervalDuration = getIntervalDuration(gridInterval);
      }
      this._intervalDuration = intervalDuration;
      const timeUnit = gridInterval.timeUnit;
      const formats = this.get("dateFormats");
      let firstTime = Date.now();
      if (dates[0]) {
        firstTime = dates[0];
      }
      let value = roun(this.getPrivate("selectionMin", 0), timeUnit, gridInterval.count, root, firstTime);
      const minorLabelsEnabled = renderer.get("minorLabelsEnabled");
      const minorGridEnabled = renderer.get("minorGridEnabled", minorLabelsEnabled);
      let minorGridInterval;
      let minorDuration = 0;
      let previousDataItem;
      if (minorGridEnabled) {
        minorGridInterval = this._getMinorInterval(gridInterval);
        minorDuration = getIntervalDuration(minorGridInterval);
      }
      let selectedItems = this._getIndexes(value, this.getPrivate("selectionMax", value) + intervalDuration, gridInterval, this.getPrivate("min", value));
      if (selectedItems.length > 0) {
        let i = 0;
        this._m = 0;
        let previousValue = value - intervalDuration * 10;
        const nextGridUnit = getNextUnit(timeUnit);
        if (minorGridInterval) {
          let first = dates[selectedItems[0]];
          this._addMinorGrid(first - intervalDuration, first, minorDuration, minorGridInterval);
        }
        let minDistance = renderer.axisLength() / renderer.gridCount() * 0.5;
        each(selectedItems, (index) => {
          var _a;
          let dataItem;
          if (this.dataItems.length < i + 1) {
            dataItem = new DataItem(this, void 0, {});
            this._dataItems.push(dataItem);
            this.processDataItem(dataItem);
          } else {
            dataItem = this.dataItems[i];
          }
          let value2 = dates[index];
          let date = new Date(value2);
          let endValue = value2;
          if (i < selectedItems.length - 1) {
            endValue = dates[selectedItems[i + 1]];
          } else {
            endValue += intervalDuration;
          }
          dataItem.setRaw("value", value2);
          dataItem.setRaw("endValue", endValue);
          dataItem.setRaw("index", i);
          dataItem.setRaw("labelEndValue", void 0);
          let format = formats[timeUnit];
          if (nextGridUnit && this.get("markUnitChange") && isNumber(previousValue)) {
            if (timeUnit != "year") {
              if (checkChange(value2, previousValue, nextGridUnit, utc, timezone)) {
                format = this.get("periodChangeDateFormats")[timeUnit];
              }
            }
          }
          this._createAssets(dataItem, []);
          const label = dataItem.get("label");
          if (label) {
            label.set("text", root.dateFormatter.format(date, format));
          }
          this._toggleDataItem(dataItem, true);
          let count = gridInterval.count;
          if (timeUnit == "week") {
            dataItem.setRaw("labelEndValue", value2);
          }
          if (minorGridEnabled) {
            let timeUnit2 = gridInterval.timeUnit;
            if (timeUnit2 == "week") {
              timeUnit2 = "day";
            }
            if (count > 1 || gridInterval.timeUnit == "week") {
              let labelEndValue = roun(value2, timeUnit2, 1, root) + getDuration(timeUnit2, this._getM(timeUnit2));
              let index2 = this.valueToIndex(labelEndValue);
              labelEndValue = dates[index2];
              if (labelEndValue == value2) {
                let next = dates[index2 + 1];
                if (next) {
                  labelEndValue = next;
                } else {
                  labelEndValue += minorDuration;
                }
              }
              dataItem.setRaw("labelEndValue", labelEndValue);
            }
            count = 1;
          }
          this._prepareDataItem(dataItem, count);
          if (label && previousDataItem) {
            if (renderer.getPrivate("letter") == "X") {
              let previousLabel = previousDataItem.get("label");
              if (previousLabel) {
                let x = label.x();
                let previousX = previousLabel.x();
                if (x - previousX < minDistance) {
                  let worse = this._pickWorse(previousDataItem, dataItem, gridInterval);
                  if (worse) {
                    (_a = worse.get("label")) === null || _a === void 0 ? void 0 : _a.setPrivate("visible", false);
                  }
                }
              }
            }
          }
          if (minorGridInterval) {
            this._addMinorGrid(value2, endValue, minorDuration, minorGridInterval);
          }
          i++;
          if (label && label.getPrivate("visible")) {
            previousDataItem = dataItem;
          }
          previousValue = value2;
        });
      }
      each(this.series, (series) => {
        if (series.inited) {
          series._markDirtyAxes();
        }
      });
    }
    this._updateGhost();
  }
  _pickWorse(dataItemA, dataItemB, interval) {
    const timeUnit = interval.timeUnit;
    const valueA = dataItemA.get("value", 0);
    const valueB = dataItemB.get("value", 0);
    if (timeUnit == "hour") {
      if (new Date(valueA).getDate() != new Date(valueB).getDate()) {
        return dataItemA;
      }
    }
    return dataItemB;
  }
  _addMinorGrid(startValue, endValue, minorDuration, gridInterval) {
    const minorFormats = this.get("minorDateFormats", this.get("dateFormats"));
    const mTimeUnit = gridInterval.timeUnit;
    let value = startValue + getDuration(mTimeUnit, this._getM(mTimeUnit));
    value = roun(value, mTimeUnit, 1, this._root);
    let maxValue = endValue - minorDuration * 0.5;
    let minorSelectedItems = this._getIndexes(value, maxValue, gridInterval, value);
    const dates = this._getDates();
    each(minorSelectedItems, (index) => {
      let minorDataItem;
      if (this.minorDataItems.length < this._m + 1) {
        minorDataItem = new DataItem(this, void 0, {});
        this.minorDataItems.push(minorDataItem);
        this.processDataItem(minorDataItem);
      } else {
        minorDataItem = this.minorDataItems[this._m];
      }
      value = dates[index];
      minorDataItem.setRaw("value", value);
      minorDataItem.setRaw("endValue", value + minorDuration);
      minorDataItem.setRaw("index", index);
      this._createAssets(minorDataItem, ["minor"], true);
      const label = minorDataItem.get("label");
      if (label) {
        if (this.get("renderer").get("minorLabelsEnabled")) {
          let date = new Date(value);
          let format = minorFormats[mTimeUnit];
          label.set("text", this._root.dateFormatter.format(date, format));
        } else {
          label.setPrivate("visible", false);
        }
      }
      this._toggleDataItem(minorDataItem, true);
      this._prepareDataItem(minorDataItem, 1);
      this._m++;
    });
  }
  _getIndexes(value, maxValue, interval, firstValue) {
    const items = [];
    const timeUnit = interval.timeUnit;
    const count = interval.count;
    const mmm = this._getM(timeUnit);
    const baseInterval = this.getPrivate("baseInterval");
    const root = this._root;
    const dates = this._getDates();
    let c = count - 1;
    let previousValue = -Infinity;
    let duration = getDuration(timeUnit, mmm);
    let fullDuration = getDuration(timeUnit, count * mmm);
    let originalValue = value;
    if (timeUnit == "day") {
      value = firstValue;
    }
    while (value <= maxValue) {
      value = roun(value, timeUnit, count, root);
      let index = this.valueToIndex(value);
      let realValue = dates[index];
      if (timeUnit == "day" && baseInterval.timeUnit == "day") {
        if (this._hasDate(value)) {
          c++;
        }
        if (c == count) {
          if (value >= originalValue - fullDuration * 2) {
            move(items, index);
          }
          c = 0;
        }
        value += duration;
        value = roun(value, timeUnit, 1, root);
      } else {
        if (realValue < value) {
          for (let i = index, len = dates.length; i < len; i++) {
            realValue = dates[i];
            if (realValue >= value) {
              index = i;
              break;
            }
          }
        }
        move(items, index);
        value += fullDuration;
        value = roun(value, timeUnit, count, root);
      }
      if (value == previousValue) {
        value += fullDuration + duration;
        value = roun(value, timeUnit, count, root);
      }
      if (value == previousValue) {
        break;
      }
      previousValue = value;
    }
    return items;
  }
  _hasDate(time) {
    const result = getSortedIndex(this._getDates(), (date) => {
      return compareNumber(date, time);
    });
    return result.found;
  }
  _nextTime(time, count, _baseInterval) {
    let index = fitToRange(this.valueToIndex(time) + count, 0, this._dates.length - 1);
    return this._dates[index];
  }
};
Object.defineProperty(GaplessDateAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "GaplessDateAxis"
});
Object.defineProperty(GaplessDateAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: DateAxis.classNames.concat([GaplessDateAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/DurationAxis.js
var DurationAxis = class extends ValueAxis {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_dataGrouped", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_groupingCalculated", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_intervalDuration", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["axis"]);
    super._afterNew();
  }
  _adjustMinMax(min2, max2, gridCount, strictMode) {
    let minMaxStep;
    const durationFormatter = this.getDurationFormatter();
    const baseUnit = this.get("baseUnit");
    this.setRaw("maxPrecision", 0);
    if (baseUnit == "millisecond" || baseUnit == "second" || baseUnit == "minute" || baseUnit == "hour") {
      if (gridCount <= 1) {
        gridCount = 1;
      }
      gridCount = Math.round(gridCount);
      let difference = max2 - min2;
      if (difference === 0) {
        difference = Math.abs(max2);
      }
      let step = difference / gridCount;
      let divisors = [60, 30, 20, 15, 10, 2, 1];
      let realDivisor = 1;
      if (baseUnit == "hour") {
        divisors = [24, 12, 6, 4, 2, 1];
      }
      for (let divisor of divisors) {
        if (difference / divisor > gridCount) {
          realDivisor = divisor;
          break;
        }
      }
      let count = Math.ceil((max2 - min2) / realDivisor / gridCount);
      let exponent = Math.log(Math.abs(count)) * Math.LOG10E;
      let power = Math.pow(10, Math.floor(exponent)) / 10;
      let reducedCount = count / power;
      let closest2 = closest(divisors, reducedCount);
      count = closest2 * power;
      step = realDivisor * count;
      min2 = Math.floor(min2 / step) * step;
      max2 = Math.ceil(max2 / step) * step;
      minMaxStep = {
        min: min2,
        max: max2,
        step
      };
    } else {
      minMaxStep = super._adjustMinMax(min2, max2, gridCount, strictMode);
    }
    this.setPrivateRaw("durationFormat", durationFormatter.getFormat(minMaxStep.step, minMaxStep.max, baseUnit));
    return minMaxStep;
  }
  _formatText(value) {
    const formatter = this.getDurationFormatter();
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
  /**
   * Returns text to be used in an axis tooltip for specific relative position.
   *
   * @param   position  Position
   * @return            Tooltip text
   */
  getTooltipText(position, _adjustPosition) {
    const formatter = this.getDurationFormatter();
    const extraDecimals = this.get("extraTooltipPrecision", 0);
    const decimals = this.getPrivate("stepDecimalPlaces", 0) + extraDecimals;
    const value = round(this.positionToValue(position), decimals);
    return formatter.format(value, this.getPrivate("durationFormat"), this.get("baseUnit"));
  }
};
Object.defineProperty(DurationAxis, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "DurationAxis"
});
Object.defineProperty(DurationAxis, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ValueAxis.classNames.concat([DurationAxis.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisBullet.js
var AxisBullet = class extends Entity {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "axis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _beforeChanged() {
    super._beforeChanged();
    const sprite = this.get("sprite");
    if (this.isDirty("sprite")) {
      if (sprite) {
        sprite.setAll({
          position: "absolute",
          role: "figure"
        });
        this._disposers.push(sprite);
      }
    }
    if (this.isDirty("location")) {
      const dataItem = sprite.dataItem;
      if (this.axis && sprite && dataItem) {
        this.axis._prepareDataItem(dataItem);
      }
    }
  }
  _dispose() {
    const axis = this.axis;
    if (axis) {
      each2(axis._bullets, (key, bullet) => {
        if (bullet.uid == this.uid) {
          delete axis._bullets[key];
        }
      });
    }
    super._dispose();
  }
};
Object.defineProperty(AxisBullet, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisBullet"
});
Object.defineProperty(AxisBullet, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Entity.classNames.concat([AxisBullet.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisLabel.js
var AxisLabel = class extends Label {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
Object.defineProperty(AxisLabel, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisLabel"
});
Object.defineProperty(AxisLabel, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Label.classNames.concat([AxisLabel.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisLabelRadial.js
var AxisLabelRadial = class extends RadialLabel {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
Object.defineProperty(AxisLabelRadial, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisLabelRadial"
});
Object.defineProperty(AxisLabelRadial, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: RadialLabel.classNames.concat([AxisLabelRadial.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisTick.js
var AxisTick = class extends Tick {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_tickPoints", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
};
Object.defineProperty(AxisTick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisTick"
});
Object.defineProperty(AxisTick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Tick.classNames.concat([AxisTick.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRenderer.js
var AxisRenderer = class extends Graphics {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_axisLength", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 100
    });
    Object.defineProperty(this, "_start", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_end", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_inversed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_minSize", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "chart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_lc", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 1
    });
    Object.defineProperty(this, "_ls", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_thumbDownPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downStart", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_downEnd", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "ticks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisTick._new(this._root, {
        themeTags: mergeTags(this.ticks.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.ticks.template])))
    });
    Object.defineProperty(this, "grid", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Grid._new(this._root, {
        themeTags: mergeTags(this.grid.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.grid.template])))
    });
    Object.defineProperty(this, "axisFills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.axisFills.template.get("themeTags", ["axis", "fill"]), this.get("themeTags", []))
      }, [this.axisFills.template])))
    });
    Object.defineProperty(this, "labels", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => AxisLabel._new(this._root, {
        themeTags: mergeTags(this.labels.template.get("themeTags", []), this.get("themeTags", []))
      }, [this.labels.template])))
    });
    Object.defineProperty(this, "axis", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  /**
   * @ignore
   */
  makeTick(dataItem, themeTags) {
    const tick = this.ticks.make();
    tick._setDataItem(dataItem);
    dataItem.setRaw("tick", tick);
    tick.set("themeTags", mergeTags(tick.get("themeTags"), themeTags));
    this.axis.labelsContainer.children.push(tick);
    this.ticks.push(tick);
    return tick;
  }
  /**
   * @ignore
   */
  makeGrid(dataItem, themeTags) {
    const grid = this.grid.make();
    grid._setDataItem(dataItem);
    dataItem.setRaw("grid", grid);
    grid.set("themeTags", mergeTags(grid.get("themeTags"), themeTags));
    this.axis.gridContainer.children.push(grid);
    this.grid.push(grid);
    return grid;
  }
  /**
   * @ignore
   */
  makeAxisFill(dataItem, themeTags) {
    const axisFill = this.axisFills.make();
    axisFill._setDataItem(dataItem);
    axisFill.set("themeTags", mergeTags(axisFill.get("themeTags"), themeTags));
    this.axis.gridContainer.children.push(axisFill);
    dataItem.setRaw("axisFill", axisFill);
    this.axisFills.push(axisFill);
    return axisFill;
  }
  /**
   * @ignore
   */
  makeLabel(dataItem, themeTags) {
    const label = this.labels.make();
    label.set("themeTags", mergeTags(label.get("themeTags"), themeTags));
    this.axis.labelsContainer.children.moveValue(label, 0);
    label._setDataItem(dataItem);
    dataItem.setRaw("label", label);
    this.labels.push(label);
    return label;
  }
  axisLength() {
    return 0;
  }
  /**
   * @ignore
   */
  gridCount() {
    return this.axisLength() / this.get("minGridDistance", 50);
  }
  _updatePositions() {
  }
  _afterNew() {
    super._afterNew();
    this.set("isMeasured", false);
    const thumb = this.thumb;
    if (thumb) {
      this._disposers.push(thumb.events.on("pointerdown", (event) => {
        this._handleThumbDown(event);
      }));
      this._disposers.push(thumb.events.on("globalpointerup", (event) => {
        this._handleThumbUp(event);
      }));
      this._disposers.push(thumb.events.on("globalpointermove", (event) => {
        this._handleThumbMove(event);
      }));
    }
  }
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("minGridDistance")) {
      this.root.events.once("frameended", () => {
        this.axis.markDirtySize();
      });
    }
  }
  _changed() {
    super._changed();
    if (this.isDirty("pan")) {
      const thumb = this.thumb;
      if (thumb) {
        const labelsContainer = this.axis.labelsContainer;
        const pan = this.get("pan");
        if (pan == "zoom") {
          labelsContainer.children.push(thumb);
        } else if (pan == "none") {
          labelsContainer.children.removeValue(thumb);
        }
      }
    }
  }
  _handleThumbDown(event) {
    this._thumbDownPoint = this.toLocal(event.point);
    const axis = this.axis;
    this._downStart = axis.get("start");
    this._downEnd = axis.get("end");
  }
  _handleThumbUp(_event) {
    this._thumbDownPoint = void 0;
  }
  _handleThumbMove(event) {
    const downPoint = this._thumbDownPoint;
    if (downPoint) {
      const point3 = this.toLocal(event.point);
      const downStart = this._downStart;
      const downEnd = this._downEnd;
      const extra = this._getPan(point3, downPoint) * Math.min(1, downEnd - downStart) / 2 * this.get("panSensitivity", 1);
      this.axis.zoom(downStart - extra, downEnd + extra, 0);
    }
  }
  _getPan(_point1, _point2) {
    return 0;
  }
  /**
   * Converts relative position (0-1) on axis to a pixel coordinate.
   *
   * @param position  Position (0-1)
   * @return Coordinate (px)
   */
  positionToCoordinate(position) {
    if (this._inversed) {
      return (this._end - position) * this._axisLength;
    } else {
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  updateTooltipBounds(_tooltip) {
  }
  _updateSize() {
    this.markDirty();
    this._clear = true;
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position = position * (end - start);
    if (!this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  toGlobalPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    if (!this.get("inversed")) {
      position = position - start;
    } else {
      position = end - position;
    }
    position = position / (end - start);
    return position;
  }
  /**
   * @ignore
   */
  fixPosition(position) {
    if (this.get("inversed")) {
      return 1 - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  _updateLC() {
  }
  toggleVisibility(sprite, position, minPosition, maxPosition) {
    let axis = this.axis;
    const start = axis.get("start", 0);
    const end = axis.get("end", 1);
    let updatedStart = start + (end - start) * (minPosition - 1e-4);
    let updatedEnd = start + (end - start) * (maxPosition + 1e-4);
    if (position < updatedStart || position > updatedEnd) {
      sprite.setPrivate("visible", false);
    } else {
      sprite.setPrivate("visible", true);
    }
  }
  _positionTooltip(tooltip, point3) {
    const chart = this.chart;
    if (chart) {
      tooltip.set("pointTo", this._display.toGlobal(point3));
      if (!chart.inPlot(point3)) {
        tooltip.hide();
      }
    }
  }
  processAxis() {
  }
};
Object.defineProperty(AxisRenderer, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRenderer"
});
Object.defineProperty(AxisRenderer, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Graphics.classNames.concat([AxisRenderer.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererX.js
var AxisRendererX = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Rectangle.new(this._root, {
        width: p100,
        isMeasured: false,
        themeTags: ["axis", "x", "thumb"]
      })
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "x"]);
    super._afterNew();
    this.setPrivateRaw("letter", "X");
    const gridTemplate = this.grid.template;
    gridTemplate.set("height", p100);
    gridTemplate.set("width", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(0, graphics.height());
    });
    this.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("x", -1e3);
    const opposite = "opposite";
    const inside = "inside";
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const chart = this.chart;
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.topAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.insertIndex(0, axis);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this);
        } else {
          const children = chart.bottomAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this, 0);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each((label) => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    this.thumb.setPrivate("height", axis.labelsContainer.height());
  }
  _getPan(point1, point22) {
    return (point22.x - point1.x) / this.width();
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
    if (!this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  toGlobalPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    if (!this.get("inversed")) {
      position = position - start;
    } else {
      position = end - position;
    }
    position = position / (end - start) * this._lc;
    position += this._ls;
    return position;
  }
  /**
   * @ignore
   */
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const w = parent.innerWidth();
      this._lc = this.axisLength() / w;
      this._ls = (axis.x() - parent.get("paddingLeft", 0)) / w;
    }
  }
  /**
   * @ignore
   */
  _updatePositions() {
    const axis = this.axis;
    const x = axis.x() - relativeToValue(axis.get("centerX", 0), axis.width()) - axis.parent.get("paddingLeft", 0);
    axis.gridContainer.set("x", x);
    axis.topGridContainer.set("x", x);
    axis.bulletsContainer.set("y", this.y());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let width = axis.get("marginLeft", 0);
      let x2 = axis.x() - width;
      const parent = axis.parent;
      if (parent) {
        x2 -= parent.get("paddingLeft", 0);
      }
      if (axisHeader.children.length > 0) {
        width = axis.axisHeader.width();
        axis.set("marginLeft", width + 1);
      } else {
        axisHeader.set("width", width);
      }
      axisHeader.setAll({
        x: x2,
        y: -1,
        height: plotContainer.height() + 2
      });
    }
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    if (axis.get("width") == null) {
      axis.set("width", p100);
    }
    ;
    const verticalLayout = this._root.verticalLayout;
    axis.set("layout", verticalLayout);
    axis.labelsContainer.set("width", p100);
    axis.axisHeader.setAll({
      layout: verticalLayout
    });
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.width();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return {
      x: this.positionToCoordinate(position),
      y: 0
    };
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("x", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("y", p100);
        if (!inside) {
          length *= -1;
        }
      } else {
        tick.set("y", 0);
        if (inside) {
          length *= -1;
        }
      }
      tick.set("draw", (display) => {
        display.moveTo(0, 0);
        display.lineTo(0, length);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      if (!isNumber(position)) {
        position = 0;
      }
      const inside = label.get("inside", this.get("inside", false));
      const opposite = this.get("opposite");
      if (opposite) {
        if (!inside) {
          label.set("position", "relative");
          label.set("y", p100);
        } else {
          label.set("position", "absolute");
          label.set("y", 0);
        }
      } else {
        if (!inside) {
          label.set("y", void 0);
          label.set("position", "relative");
        } else {
          label.set("y", 0);
          label.set("position", "absolute");
        }
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("x", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = -1;
        if (this.get("opposite")) {
          d = 1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("y", previousSprite.y() + previousSprite.height() * d);
            }
          } else {
            sprite.set("y", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("x", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!isNumber(position)) {
        position = 0;
      }
      if (!isNumber(endPosition)) {
        endPosition = 1;
      }
      let x0 = this.positionToCoordinate(position);
      let x1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, x0, x1);
    }
  }
  fillDrawMethod(fill, x0, x1) {
    fill.set("draw", (display) => {
      const h = this.axis.gridContainer.height();
      const w = this.width();
      if (x1 < x0) {
        [x1, x0] = [x0, x1];
      }
      if (x0 > w || x1 < 0) {
        return;
      }
      display.moveTo(x0, 0);
      display.lineTo(x1, 0);
      display.lineTo(x1, h);
      display.lineTo(x0, h);
      display.lineTo(x0, 0);
    });
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, {
      x: this.positionToCoordinate(position),
      y: 0
    });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 1e5;
    let global = this._display.toGlobal({
      x: 0,
      y: 0
    });
    let x = global.x;
    let y = 0;
    let w = this.axisLength();
    let h = num;
    let pointerOrientation = "up";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      } else {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "down";
        y = global.y - num;
        h = num;
      } else {
        pointerOrientation = "up";
        y = global.y;
        h = num;
      }
    }
    const bounds = {
      left: x,
      right: x + w,
      top: y,
      bottom: y + h
    };
    const oldBounds = tooltip.get("bounds");
    if (!sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
};
Object.defineProperty(AxisRendererX, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererX"
});
Object.defineProperty(AxisRendererX, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererX.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/axes/AxisRendererY.js
var AxisRendererY = class extends AxisRenderer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_downY", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "thumb", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: Rectangle.new(this._root, {
        height: p100,
        isMeasured: false,
        themeTags: ["axis", "y", "thumb"]
      })
    });
  }
  _afterNew() {
    this._settings.themeTags = mergeTags(this._settings.themeTags, ["renderer", "y"]);
    if (this._settings.opposite) {
      this._settings.themeTags.push("opposite");
    }
    super._afterNew();
    this.setPrivateRaw("letter", "Y");
    const gridTemplate = this.grid.template;
    gridTemplate.set("width", p100);
    gridTemplate.set("height", 0);
    gridTemplate.set("draw", (display, graphics) => {
      display.moveTo(0, 0);
      display.lineTo(graphics.width(), 0);
    });
    this.set("draw", (display, renderer) => {
      display.moveTo(0, 0);
      display.lineTo(0, renderer.height());
    });
  }
  _getPan(point1, point22) {
    return (point1.y - point22.y) / this.height();
  }
  _changed() {
    super._changed();
    const axis = this.axis;
    axis.ghostLabel.setPrivate("visible", !this.get("inside"));
    axis.ghostLabel.set("y", -1e3);
    const thumb = this.thumb;
    const opposite = "opposite";
    const inside = "inside";
    const chart = this.chart;
    if (this.isDirty(opposite) || this.isDirty(inside)) {
      const axisChildren = axis.children;
      if (this.get(inside)) {
        axis.addTag(inside);
      } else {
        axis.removeTag(inside);
      }
      if (chart) {
        if (this.get(opposite)) {
          const children = chart.rightAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis, 0);
          }
          axis.addTag(opposite);
          axisChildren.moveValue(this, 0);
        } else {
          const children = chart.leftAxesContainer.children;
          if (children.indexOf(axis) == -1) {
            children.moveValue(axis);
          }
          axis.removeTag(opposite);
          axisChildren.moveValue(this);
        }
        axis.ghostLabel._applyThemes();
        this.labels.each((label) => {
          label._applyThemes();
        });
        this.root._markDirtyRedraw();
      }
      axis.markDirtySize();
    }
    const w = axis.labelsContainer.width();
    if (chart) {
      if (this.get(opposite)) {
        thumb.set("centerX", 0);
      } else {
        thumb.set("centerX", w);
      }
    }
    thumb.setPrivate("width", w);
  }
  /**
   * @ignore
   */
  processAxis() {
    super.processAxis();
    const axis = this.axis;
    if (axis.get("height") == null) {
      axis.set("height", p100);
    }
    const horizontalLayout = this._root.horizontalLayout;
    axis.set("layout", horizontalLayout);
    axis.labelsContainer.set("height", p100);
    axis.axisHeader.set("layout", horizontalLayout);
  }
  _updatePositions() {
    const axis = this.axis;
    const y = axis.y() - relativeToValue(axis.get("centerY", 0), axis.height());
    axis.gridContainer.set("y", y);
    axis.topGridContainer.set("y", y);
    axis.bulletsContainer.set("x", this.x());
    const chart = axis.chart;
    if (chart) {
      const plotContainer = chart.plotContainer;
      const axisHeader = axis.axisHeader;
      let height = axis.get("marginTop", 0);
      if (axisHeader.children.length > 0) {
        height = axis.axisHeader.height();
        axis.set("marginTop", height + 1);
      } else {
        axisHeader.set("height", height);
      }
      axisHeader.setAll({
        y: axis.y() - height,
        x: -1,
        width: plotContainer.width() + 2
      });
    }
  }
  /**
   * @ignore
   */
  axisLength() {
    return this.axis.innerHeight();
  }
  /**
   * Converts axis relative position to actual coordinate in pixels.
   *
   * @param   position  Position
   * @return            Point
   */
  positionToPoint(position) {
    return {
      x: 0,
      y: this.positionToCoordinate(position)
    };
  }
  /**
   * @ignore
   */
  updateLabel(label, position, endPosition, count) {
    if (label) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = label.get("multiLocation", location);
      } else {
        location = label.get("location", location);
      }
      const opposite = this.get("opposite");
      const inside = label.get("inside", this.get("inside", false));
      if (opposite) {
        label.set("x", 0);
        if (inside) {
          label.set("position", "absolute");
        } else {
          label.set("position", "relative");
        }
      } else {
        if (inside) {
          label.set("x", 0);
          label.set("position", "absolute");
        } else {
          label.set("x", void 0);
          label.set("position", "relative");
        }
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      label.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(label, position, label.get("minPosition", 0), label.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateGrid(grid, position, endPosition) {
    if (grid) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = grid.get("location", 0.5);
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      grid.set("y", this.positionToCoordinate(position));
      this.toggleVisibility(grid, position, 0, 1);
    }
  }
  /**
   * @ignore
   */
  updateTick(tick, position, endPosition, count) {
    if (tick) {
      if (!isNumber(position)) {
        position = 0;
      }
      let location = 0.5;
      if (isNumber(count) && count > 1) {
        location = tick.get("multiLocation", location);
      } else {
        location = tick.get("location", location);
      }
      if (isNumber(endPosition) && endPosition != position) {
        position = position + (endPosition - position) * location;
      }
      tick.set("y", this.positionToCoordinate(position));
      let length = tick.get("length", 0);
      const inside = tick.get("inside", this.get("inside", false));
      if (this.get("opposite")) {
        tick.set("x", 0);
        if (inside) {
          length *= -1;
        }
      } else {
        if (!inside) {
          length *= -1;
        }
      }
      tick.set("draw", (display) => {
        display.moveTo(0, 0);
        display.lineTo(length, 0);
      });
      this.toggleVisibility(tick, position, tick.get("minPosition", 0), tick.get("maxPosition", 1));
    }
  }
  /**
   * @ignore
   */
  updateBullet(bullet, position, endPosition) {
    if (bullet) {
      const sprite = bullet.get("sprite");
      if (sprite) {
        if (!isNumber(position)) {
          position = 0;
        }
        let location = bullet.get("location", 0.5);
        if (isNumber(endPosition) && endPosition != position) {
          position = position + (endPosition - position) * location;
        }
        let bulletPosition = this.axis.roundAxisPosition(position, location);
        let previousBullet = this.axis._bullets[bulletPosition];
        let d = 1;
        if (this.get("opposite")) {
          d = -1;
        }
        if (bullet.get("stacked")) {
          if (previousBullet) {
            let previousSprite = previousBullet.get("sprite");
            if (previousSprite) {
              sprite.set("x", previousSprite.x() + previousSprite.width() * d);
            }
          } else {
            sprite.set("x", 0);
          }
        }
        this.axis._bullets[bulletPosition] = bullet;
        sprite.set("y", this.positionToCoordinate(position));
        this.toggleVisibility(sprite, position, 0, 1);
      }
    }
  }
  /**
   * @ignore
   */
  updateFill(fill, position, endPosition) {
    if (fill) {
      if (!isNumber(position)) {
        position = 0;
      }
      if (!isNumber(endPosition)) {
        endPosition = 1;
      }
      let y0 = this.positionToCoordinate(position);
      let y1 = this.positionToCoordinate(endPosition);
      this.fillDrawMethod(fill, y0, y1);
    }
  }
  fillDrawMethod(fill, y0, y1) {
    fill.set("draw", (display) => {
      const w = this.axis.gridContainer.width();
      const h = this.height();
      if (y1 < y0) {
        [y1, y0] = [y0, y1];
      }
      if (y0 > h || y1 < 0) {
        return;
      }
      display.moveTo(0, y0);
      display.lineTo(w, y0);
      display.lineTo(w, y1);
      display.lineTo(0, y1);
      display.lineTo(0, y0);
    });
  }
  /**
   * Converts relative position (0-1) on axis to a pixel coordinate.
   *
   * @param position  Position (0-1)
   * @return Coordinate (px)
   */
  positionToCoordinate(position) {
    if (!this._inversed) {
      return (this._end - position) * this._axisLength;
    } else {
      return (position - this._start) * this._axisLength;
    }
  }
  /**
   * @ignore
   */
  positionTooltip(tooltip, position) {
    this._positionTooltip(tooltip, {
      x: 0,
      y: this.positionToCoordinate(position)
    });
  }
  /**
   * @ignore
   */
  updateTooltipBounds(tooltip) {
    const inside = this.get("inside");
    const num = 1e5;
    let global = this._display.toGlobal({
      x: 0,
      y: 0
    });
    let y = global.y;
    let x = 0;
    let h = this.axisLength();
    let w = num;
    let pointerOrientation = "right";
    if (this.get("opposite")) {
      if (inside) {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      } else {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      }
    } else {
      if (inside) {
        pointerOrientation = "left";
        x = global.x;
        w = num;
      } else {
        pointerOrientation = "right";
        x = global.x - num;
        w = num;
      }
    }
    const bounds = {
      left: x,
      right: x + w,
      top: y,
      bottom: y + h
    };
    const oldBounds = tooltip.get("bounds");
    if (!sameBounds(bounds, oldBounds)) {
      tooltip.set("bounds", bounds);
      tooltip.set("pointerOrientation", pointerOrientation);
    }
  }
  /**
   * @ignore
   */
  _updateLC() {
    const axis = this.axis;
    const parent = axis.parent;
    if (parent) {
      const h = parent.innerHeight();
      this._lc = this.axisLength() / h;
      this._ls = axis.y() / h;
    }
  }
  /**
   * @ignore
   */
  toAxisPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    position -= this._ls;
    position = position * (end - start) / this._lc;
    if (this.get("inversed")) {
      position = start + position;
    } else {
      position = end - position;
    }
    return position;
  }
  /**
   * @ignore
   */
  toGlobalPosition(position) {
    const start = this._start || 0;
    const end = this._end || 1;
    if (this.get("inversed")) {
      position = position - start;
    } else {
      position = end - position;
    }
    position = position / (end - start) * this._lc;
    position += this._ls;
    return position;
  }
  /**
   * @ignore
   */
  fixPosition(position) {
    if (!this.get("inversed")) {
      return 1 - position;
    }
    return position;
  }
};
Object.defineProperty(AxisRendererY, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "AxisRendererY"
});
Object.defineProperty(AxisRendererY, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: AxisRenderer.classNames.concat([AxisRendererY.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/Candlestick.js
var Candlestick = class extends RoundedRectangle {
  _beforeChanged() {
    super._beforeChanged();
    if (this.isDirty("lowX0") || this.isDirty("lowY0") || this.isDirty("lowX1") || this.isDirty("lowY1") || this.isDirty("highX0") || this.isDirty("highX1") || this.isDirty("highY0") || this.isDirty("highY1")) {
      this._clear = true;
    }
  }
  _draw() {
    super._draw();
    const display = this._display;
    display.moveTo(this.get("lowX0", 0), this.get("lowY0", 0));
    display.lineTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.moveTo(this.get("highX0", 0), this.get("highY0", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
  }
};
Object.defineProperty(Candlestick, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "Candlestick"
});
Object.defineProperty(Candlestick, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: RoundedRectangle.classNames.concat([Candlestick.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/ColumnSeries.js
var ColumnSeries = class extends BaseColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
        position: "absolute",
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["series", "column"])
      }, [this.columns.template])))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => RoundedRectangle._new(this._root, {
      position: "absolute",
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(ColumnSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "ColumnSeries"
});
Object.defineProperty(ColumnSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: BaseColumnSeries.classNames.concat([ColumnSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/CandlestickSeries.js
var CandlestickSeries = class extends ColumnSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({
        themeTags: ["autocolor"]
      }), () => Candlestick._new(this._root, {
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
      }, [this.columns.template])))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _updateGraphics(dataItem, previousDataItem) {
    super._updateGraphics(dataItem, previousDataItem);
    const xAxis = this.getRaw("xAxis");
    const yAxis = this.getRaw("yAxis");
    const baseAxis = this.getRaw("baseAxis");
    let vcy = this.get("vcy", 1);
    let vcx = this.get("vcx", 1);
    let lx0;
    let lx1;
    let ly0;
    let ly1;
    let hx0;
    let hx1;
    let hy0;
    let hy1;
    let locationX = this.get("locationX", dataItem.get("locationX", 0.5));
    let locationY = this.get("locationY", dataItem.get("locationY", 0.5));
    let openLocationX = this.get("openLocationX", dataItem.get("openLocationX", locationX));
    let openLocationY = this.get("openLocationY", dataItem.get("openLocationY", locationY));
    let orientation;
    if (yAxis === baseAxis) {
      let open = xAxis.getDataItemPositionX(dataItem, this._xOpenField, 1, vcx);
      let close = xAxis.getDataItemPositionX(dataItem, this._xField, 1, vcx);
      lx1 = xAxis.getDataItemPositionX(dataItem, this._xLowField, 1, vcx);
      hx1 = xAxis.getDataItemPositionX(dataItem, this._xHighField, 1, vcx);
      hx0 = Math.max(open, close);
      lx0 = Math.min(open, close);
      let startLocation = this._aLocationY0 + openLocationY - 0.5;
      let endLocation = this._aLocationY1 + locationY - 0.5;
      ly0 = yAxis.getDataItemPositionY(dataItem, this._yField, startLocation + (endLocation - startLocation) / 2, vcy);
      ly1 = ly0;
      hy0 = ly0;
      hy1 = ly0;
      orientation = "horizontal";
    } else {
      let open = yAxis.getDataItemPositionY(dataItem, this._yOpenField, 1, vcy);
      let close = yAxis.getDataItemPositionY(dataItem, this._yField, 1, vcy);
      ly1 = yAxis.getDataItemPositionY(dataItem, this._yLowField, 1, vcy);
      hy1 = yAxis.getDataItemPositionY(dataItem, this._yHighField, 1, vcy);
      hy0 = Math.max(open, close);
      ly0 = Math.min(open, close);
      let startLocation = this._aLocationX0 + openLocationX - 0.5;
      let endLocation = this._aLocationX1 + locationX - 0.5;
      lx0 = xAxis.getDataItemPositionX(dataItem, this._xField, startLocation + (endLocation - startLocation) / 2, vcx);
      lx1 = lx0;
      hx0 = lx0;
      hx1 = lx0;
      orientation = "vertical";
    }
    this._updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation);
  }
  _updateCandleGraphics(dataItem, lx0, lx1, ly0, ly1, hx0, hx1, hy0, hy1, orientation) {
    let column = dataItem.get("graphics");
    if (column) {
      let pl0 = this.getPoint(lx0, ly0);
      let pl1 = this.getPoint(lx1, ly1);
      let ph0 = this.getPoint(hx0, hy0);
      let ph1 = this.getPoint(hx1, hy1);
      let x = column.x();
      let y = column.y();
      column.set("lowX0", pl0.x - x);
      column.set("lowY0", pl0.y - y);
      column.set("lowX1", pl1.x - x);
      column.set("lowY1", pl1.y - y);
      column.set("highX0", ph0.x - x);
      column.set("highY0", ph0.y - y);
      column.set("highX1", ph1.x - x);
      column.set("highY1", ph1.y - y);
      column.set("orientation", orientation);
      let rangeGraphics = dataItem.get("rangeGraphics");
      if (rangeGraphics) {
        each(rangeGraphics, (column2) => {
          column2.set("lowX0", pl0.x - x);
          column2.set("lowY0", pl0.y - y);
          column2.set("lowX1", pl1.x - x);
          column2.set("lowY1", pl1.y - y);
          column2.set("highX0", ph0.x - x);
          column2.set("highY0", ph0.y - y);
          column2.set("highX1", ph1.x - x);
          column2.set("highY1", ph1.y - y);
          column2.set("orientation", orientation);
        });
      }
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => Candlestick._new(this._root, {
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["candlestick", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(CandlestickSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "CandlestickSeries"
});
Object.defineProperty(CandlestickSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: ColumnSeries.classNames.concat([CandlestickSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLC.js
var OHLC = class extends Candlestick {
  _draw() {
    const display = this._display;
    display.moveTo(this.get("lowX1", 0), this.get("lowY1", 0));
    display.lineTo(this.get("highX1", 0), this.get("highY1", 0));
    let w = this.width();
    let h = this.height();
    if (this.get("orientation") == "vertical") {
      let lY = h;
      let hY = 0;
      display.moveTo(0, lY);
      display.lineTo(w / 2, lY);
      display.moveTo(w / 2, hY);
      display.lineTo(w, hY);
    } else {
      let lX = 0;
      let hX = w;
      display.moveTo(lX, 0);
      display.lineTo(lX, h / 2);
      display.moveTo(hX, h / 2);
      display.lineTo(hX, h);
    }
  }
};
Object.defineProperty(OHLC, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLC"
});
Object.defineProperty(OHLC, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: Candlestick.classNames.concat([OHLC.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/OHLCSeries.js
var OHLCSeries = class extends CandlestickSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "columns", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({
        themeTags: ["autocolor"]
      }), () => OHLC._new(this._root, {
        themeTags: mergeTags(this.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
      }, [this.columns.template])))
    });
  }
  /**
   * @ignore
   */
  makeColumn(dataItem, listTemplate) {
    const column = this.mainContainer.children.push(listTemplate.make());
    column._setDataItem(dataItem);
    listTemplate.push(column);
    return column;
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.columns = new ListTemplate(Template.new({}), () => OHLC._new(this._root, {
      themeTags: mergeTags(axisRange.columns.template.get("themeTags", []), ["ohlc", "series", "column"])
    }, [this.columns.template, axisRange.columns.template]));
  }
};
Object.defineProperty(OHLCSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "OHLCSeries"
});
Object.defineProperty(OHLCSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: CandlestickSeries.classNames.concat([OHLCSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/LineSeries.js
var LineSeries = class extends XYSeries {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_endIndex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: line_default()
    });
    Object.defineProperty(this, "_fillGenerator", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: area_default()
    });
    Object.defineProperty(this, "_legendStroke", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_legendFill", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "strokes", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.strokes.template.get("themeTags", []), ["line", "series", "stroke"])
      }, [this.strokes.template])))
    });
    Object.defineProperty(this, "fills", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: this.addDisposer(new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
        themeTags: mergeTags(this.strokes.template.get("themeTags", []), ["line", "series", "fill"])
      }, [this.fills.template])))
    });
    Object.defineProperty(this, "_fillTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_strokeTemplate", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_previousPoint", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [0, 0, 0, 0]
    });
    Object.defineProperty(this, "_dindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_sindex", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  _afterNew() {
    this._fillGenerator.y0(function(p) {
      return p[3];
    });
    this._fillGenerator.x0(function(p) {
      return p[2];
    });
    this._fillGenerator.y1(function(p) {
      return p[1];
    });
    this._fillGenerator.x1(function(p) {
      return p[0];
    });
    super._afterNew();
  }
  /**
   * @ignore
   */
  makeStroke(strokes) {
    const stroke = this.mainContainer.children.push(strokes.make());
    strokes.push(stroke);
    return stroke;
  }
  /**
   * @ignore
   */
  makeFill(fills) {
    const fill = this.mainContainer.children.push(fills.make());
    fills.push(fill);
    return fill;
  }
  _updateChildren() {
    this._strokeTemplate = void 0;
    this._fillTemplate = void 0;
    let xAxis = this.get("xAxis");
    let yAxis = this.get("yAxis");
    if (this.isDirty("stroke")) {
      const stroke = this.get("stroke");
      this.strokes.template.set("stroke", stroke);
      const legendStroke = this._legendStroke;
      if (legendStroke) {
        legendStroke.states.lookup("default").set("stroke", stroke);
      }
    }
    if (this.isDirty("fill")) {
      const fill = this.get("fill");
      this.fills.template.set("fill", fill);
      const legendFill = this._legendFill;
      if (legendFill) {
        legendFill.states.lookup("default").set("fill", fill);
      }
    }
    if (this.isDirty("fillPattern")) {
      const fillPattern = this.get("fillPattern");
      this.fills.template.set("fillPattern", fillPattern);
      const legendFill = this._legendFill;
      if (legendFill) {
        legendFill.states.lookup("default").set("fillPattern", fillPattern);
      }
    }
    if (this.isDirty("curveFactory")) {
      const curveFactory = this.get("curveFactory");
      if (curveFactory) {
        this._strokeGenerator.curve(curveFactory);
        this._fillGenerator.curve(curveFactory);
      }
    }
    if (xAxis.inited && yAxis.inited) {
      if (this._axesDirty || this._valuesDirty || this._stackDirty || this.isDirty("vcx") || this.isDirty("vcy") || this._sizeDirty || this.isDirty("connect") || this.isDirty("curveFactory")) {
        this.fills.each((fill) => {
          fill.setPrivate("visible", false);
        });
        this.strokes.each((fill) => {
          fill.setPrivate("visible", false);
        });
        this.axisRanges.each((axisRange) => {
          let fills = axisRange.fills;
          if (fills) {
            fills.each((fill) => {
              fill.setPrivate("visible", false);
            });
          }
          let strokes = axisRange.strokes;
          if (strokes) {
            strokes.each((stroke) => {
              stroke.setPrivate("visible", false);
            });
          }
        });
        let startIndex = this.startIndex();
        let strokeTemplateField = this.strokes.template.get("templateField");
        let fillTemplateField = this.fills.template.get("templateField");
        let strokeTemplateFound = true;
        let fillTemplateFound = true;
        if (strokeTemplateField) {
          strokeTemplateFound = false;
        }
        if (fillTemplateField) {
          fillTemplateFound = false;
        }
        for (let i = startIndex - 1; i >= 0; i--) {
          let dataItem = this.dataItems[i];
          let hasValues = true;
          let dataContext = dataItem.dataContext;
          if (strokeTemplateField) {
            if (dataContext[strokeTemplateField]) {
              strokeTemplateFound = true;
            }
          }
          if (fillTemplateField) {
            if (dataContext[fillTemplateField]) {
              fillTemplateFound = true;
            }
          }
          each(this._valueFields, (field) => {
            if (!isNumber(dataItem.get(field))) {
              hasValues = false;
            }
          });
          if (hasValues && strokeTemplateFound && fillTemplateFound) {
            startIndex = i;
            break;
          }
        }
        let len = this.dataItems.length;
        let endIndex = this.endIndex();
        if (endIndex < len) {
          endIndex++;
          for (let i = endIndex; i < len; i++) {
            let dataItem = this.dataItems[i];
            let hasValues = true;
            each(this._valueFields, (field) => {
              if (!isNumber(dataItem.get(field))) {
                hasValues = false;
              }
            });
            if (hasValues) {
              endIndex = i + 1;
              break;
            }
          }
        }
        if (startIndex > 0) {
          startIndex--;
        }
        this._endIndex = endIndex;
        this._clearGraphics();
        this._sindex = 0;
        this._dindex = startIndex;
        if (this.dataItems.length == 1) {
          this._startSegment(0);
        } else {
          while (this._dindex < endIndex - 1) {
            this._startSegment(this._dindex);
            this._sindex++;
          }
        }
      }
    } else {
      this._skipped = true;
    }
    super._updateChildren();
  }
  _clearGraphics() {
    this.strokes.clear();
    this.fills.clear();
    this.axisRanges.each((axisRange) => {
      axisRange.fills.clear();
      axisRange.strokes.clear();
    });
  }
  _startSegment(dataItemIndex) {
    let endIndex = this._endIndex;
    let currentEndIndex = endIndex;
    const autoGapCount = this.get("autoGapCount");
    const connect = this.get("connect");
    const fill = this.makeFill(this.fills);
    const fillTemplate = this._fillTemplate;
    const originalTemplate = this.fills.template;
    if (fillTemplate && fillTemplate != originalTemplate) {
      fill.template = fillTemplate;
    }
    fill.setPrivate("visible", true);
    const stroke = this.makeStroke(this.strokes);
    const strokeTemplate = this._strokeTemplate;
    if (strokeTemplate && strokeTemplate != this.strokes.template) {
      stroke.template = strokeTemplate;
    }
    stroke.setPrivate("visible", true);
    let xAxis = this.get("xAxis");
    let yAxis = this.get("yAxis");
    let baseAxis = this.get("baseAxis");
    let vcx = this.get("vcx", 1);
    let vcy = this.get("vcy", 1);
    let xField = this._xField;
    let yField = this._yField;
    let xOpenField = this._xOpenField;
    let yOpenField = this._yOpenField;
    const xOpenFieldValue = this.get("openValueXField");
    const yOpenFieldValue = this.get("openValueYField");
    if (!xOpenFieldValue) {
      xOpenField = this._xField;
    }
    if (!yOpenFieldValue) {
      yOpenField = this._yField;
    }
    const stacked = this.get("stacked");
    const basePosX = xAxis.basePosition();
    const basePosY = yAxis.basePosition();
    let baseField;
    if (baseAxis === yAxis) {
      baseField = this._yField;
    } else {
      baseField = this._xField;
    }
    const segments = [];
    let points = [];
    segments.push(points);
    const strokeTemplateField = this.strokes.template.get("templateField");
    const fillTemplateField = this.fills.template.get("templateField");
    let locationX = this.get("locationX", 0.5);
    let locationY = this.get("locationY", 0.5);
    let openLocationX = this.get("openLocationX", locationX);
    let openLocationY = this.get("openLocationY", locationY);
    const minDistance = this.get("minDistance", 0);
    let i;
    let fillVisible = this.fills.template.get("visible");
    if (this.axisRanges.length > 0) {
      fillVisible = true;
    }
    let getOpen = false;
    if (stacked || xOpenFieldValue || yOpenFieldValue) {
      getOpen = true;
    }
    const o = {
      points,
      segments,
      stacked,
      getOpen,
      basePosX,
      basePosY,
      fillVisible,
      xField,
      yField,
      xOpenField,
      yOpenField,
      vcx,
      vcy,
      baseAxis,
      xAxis,
      yAxis,
      locationX,
      locationY,
      openLocationX,
      openLocationY,
      minDistance
    };
    let rangeStrokeTemplate = this._strokeTemplate;
    let rangeFillTemplate = this._fillTemplate;
    for (i = dataItemIndex; i < currentEndIndex; i++) {
      this._dindex = i;
      const dataItem = this._dataItems[i];
      let valueX = dataItem.get(xField);
      let valueY = dataItem.get(yField);
      if (valueX == null || valueY == null) {
        if (!connect) {
          points = [];
          segments.push(points);
          o.points = points;
        }
      } else {
        this._getPoints(dataItem, o);
      }
      if (strokeTemplateField) {
        let strokeTemplate2 = dataItem.dataContext[strokeTemplateField];
        if (strokeTemplate2) {
          if (!(strokeTemplate2 instanceof Template)) {
            strokeTemplate2 = Template.new(strokeTemplate2);
          }
          this._strokeTemplate = strokeTemplate2;
          if (i > dataItemIndex) {
            currentEndIndex = i;
            break;
          } else {
            rangeStrokeTemplate = strokeTemplate2;
            stroke.template = strokeTemplate2;
          }
        }
      }
      if (fillTemplateField) {
        let fillTemplate2 = dataItem.dataContext[fillTemplateField];
        if (fillTemplate2) {
          if (!(fillTemplate2 instanceof Template)) {
            fillTemplate2 = Template.new(fillTemplate2);
          }
          this._fillTemplate = fillTemplate2;
          if (i > dataItemIndex) {
            currentEndIndex = i;
            break;
          } else {
            rangeFillTemplate = fillTemplate2;
            fill.template = fillTemplate2;
          }
        }
      }
      if (!connect) {
        let nextItem = this.dataItems[i + 1];
        if (nextItem) {
          if (baseAxis.shouldGap(dataItem, nextItem, autoGapCount, baseField)) {
            points = [];
            segments.push(points);
            o.points = points;
          }
        }
      }
    }
    fill.setRaw("userData", [dataItemIndex, i]);
    stroke.setRaw("userData", [dataItemIndex, i]);
    if (i === endIndex) {
      this._endLine(points, segments[0][0]);
    }
    if (stroke) {
      this._drawStroke(stroke, segments);
    }
    if (fill) {
      this._drawFill(fill, segments);
    }
    this.axisRanges.each((axisRange) => {
      const container = axisRange.container;
      const fills = axisRange.fills;
      const fill2 = this.makeFill(fills);
      if (container) {
        container.children.push(fill2);
      }
      fill2.setPrivate("visible", true);
      this._drawFill(fill2, segments);
      const strokes = axisRange.strokes;
      const stroke2 = this.makeStroke(strokes);
      if (container) {
        container.children.push(stroke2);
      }
      if (rangeStrokeTemplate && rangeStrokeTemplate != this.strokes.template) {
        stroke2.template = rangeStrokeTemplate;
      }
      if (rangeFillTemplate && rangeFillTemplate != this.fills.template) {
        fill2.template = rangeFillTemplate;
      }
      stroke2.setPrivate("visible", true);
      this._drawStroke(stroke2, segments);
      fill2.setRaw("userData", [dataItemIndex, i]);
      stroke2.setRaw("userData", [dataItemIndex, i]);
    });
  }
  _getPoints(dataItem, o) {
    let points = o.points;
    let itemLocationX = dataItem.get("locationX", o.locationX);
    let itemLocationY = dataItem.get("locationY", o.locationY);
    const exactLocationX = this.get("exactLocationX", false);
    const exactLocationY = this.get("exactLocationY", false);
    let xPos = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX, o.vcx, exactLocationX);
    let yPos = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY, o.vcy, exactLocationY);
    if (this._shouldInclude(xPos)) {
      const iPoint = this.getPoint(xPos, yPos);
      const point3 = [iPoint.x, iPoint.y];
      iPoint.x += this._x;
      iPoint.y += this._y;
      dataItem.set("point", iPoint);
      if (o.fillVisible) {
        let xPos0 = xPos;
        let yPos0 = yPos;
        if (o.baseAxis === o.xAxis) {
          yPos0 = o.basePosY;
        } else if (o.baseAxis === o.yAxis) {
          xPos0 = o.basePosX;
        }
        if (o.getOpen) {
          let valueX = dataItem.get(o.xOpenField);
          let valueY = dataItem.get(o.yOpenField);
          if (valueX != null && valueY != null) {
            let itemLocationX2 = dataItem.get("openLocationX", o.openLocationX);
            let itemLocationY2 = dataItem.get("openLocationY", o.openLocationY);
            if (o.stacked) {
              let stackToItemX = dataItem.get("stackToItemX");
              let stackToItemY = dataItem.get("stackToItemY");
              if (stackToItemX) {
                xPos0 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX2, stackToItemX.component.get("vcx"), exactLocationX);
                if (isNaN(xPos0)) {
                  xPos0 = o.basePosX;
                }
              } else {
                if (o.yAxis === o.baseAxis) {
                  xPos0 = o.basePosX;
                } else {
                  xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX2, o.vcx, exactLocationX);
                }
              }
              if (stackToItemY) {
                yPos0 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY2, stackToItemY.component.get("vcy"), exactLocationY);
                if (isNaN(yPos0)) {
                  yPos0 = o.basePosY;
                }
              } else {
                if (o.xAxis === o.baseAxis) {
                  yPos0 = o.basePosY;
                } else {
                  yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY2, o.vcy, exactLocationY);
                }
              }
            } else {
              xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX2, o.vcx, exactLocationX);
              yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY2, o.vcy, exactLocationY);
            }
          }
        }
        let closeIPoint = this.getPoint(xPos0, yPos0);
        point3[2] = closeIPoint.x;
        point3[3] = closeIPoint.y;
      }
      if (o.minDistance > 0) {
        const p0 = point3[0];
        const p1 = point3[1];
        const p2 = point3[2];
        const p3 = point3[3];
        const prev = this._previousPoint;
        const pp0 = prev[0];
        const pp1 = prev[1];
        const pp2 = prev[2];
        const pp3 = prev[3];
        if (Math.hypot(p0 - pp0, p1 - pp1) > o.minDistance || p2 && p3 && Math.hypot(p2 - pp2, p3 - pp3) > o.minDistance) {
          points.push(point3);
          this._previousPoint = point3;
        }
      } else {
        points.push(point3);
      }
    }
  }
  _endLine(_points, _firstPoint) {
  }
  _drawStroke(graphics, segments) {
    if (graphics.get("visible") && !graphics.get("forceHidden")) {
      graphics.set("draw", (display) => {
        each(segments, (segment) => {
          this._strokeGenerator.context(display);
          this._strokeGenerator(segment);
        });
      });
    }
  }
  _drawFill(graphics, segments) {
    if (graphics.get("visible") && !graphics.get("forceHidden")) {
      graphics.set("draw", (display) => {
        each(segments, (segment) => {
          this._fillGenerator.context(display);
          this._fillGenerator(segment);
        });
      });
    }
  }
  _processAxisRange(axisRange) {
    super._processAxisRange(axisRange);
    axisRange.fills = new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
      themeTags: mergeTags(axisRange.fills.template.get("themeTags", []), ["line", "series", "fill"])
    }, [this.fills.template, axisRange.fills.template]));
    axisRange.strokes = new ListTemplate(Template.new({}), () => Graphics._new(this._root, {
      themeTags: mergeTags(axisRange.strokes.template.get("themeTags", []), ["line", "series", "stroke"])
    }, [this.strokes.template, axisRange.strokes.template]));
  }
  /**
   * @ignore
   */
  createLegendMarker(_dataItem) {
    const legendDataItem = this.get("legendDataItem");
    if (legendDataItem) {
      const marker = legendDataItem.get("marker");
      const markerRectangle = legendDataItem.get("markerRectangle");
      if (markerRectangle) {
        markerRectangle.setPrivate("visible", false);
      }
      marker.set("background", Rectangle.new(marker._root, {
        fillOpacity: 0,
        fill: color(0)
      }));
      const legendStroke = marker.children.push(Graphics._new(marker._root, {
        themeTags: ["line", "series", "legend", "marker", "stroke"],
        interactive: false
      }, [this.strokes.template]));
      this._legendStroke = legendStroke;
      const legendFill = marker.children.push(Graphics._new(marker._root, {
        themeTags: ["line", "series", "legend", "marker", "fill"]
      }, [this.fills.template]));
      this._legendFill = legendFill;
      const disabledColor = this._root.interfaceColors.get("disabled");
      legendStroke.states.create("disabled", {
        fill: disabledColor,
        stroke: disabledColor
      });
      legendFill.states.create("disabled", {
        fill: disabledColor,
        stroke: disabledColor
      });
      if (this.bullets.length > 0) {
        const bulletFunction = this.bullets.getIndex(0);
        if (bulletFunction) {
          const bullet = bulletFunction(marker._root, this, new DataItem(this, {
            legend: true
          }, {}));
          if (bullet) {
            const sprite = bullet.get("sprite");
            if (sprite instanceof Graphics) {
              sprite.states.create("disabled", {
                fill: disabledColor,
                stroke: disabledColor
              });
            }
            if (sprite) {
              sprite.setAll({
                tooltipText: void 0,
                tooltipHTML: void 0,
                focusable: void 0,
                focusableGroup: void 0,
                ariaLabel: void 0
              });
              marker.children.push(sprite);
              sprite.setAll({
                x: marker.width() / 2,
                y: marker.height() / 2
              });
              marker.events.on("boundschanged", () => {
                sprite.setAll({
                  x: marker.width() / 2,
                  y: marker.height() / 2
                });
              });
            }
          }
        }
      }
    }
  }
};
Object.defineProperty(LineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "LineSeries"
});
Object.defineProperty(LineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: XYSeries.classNames.concat([LineSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/MonotoneYTension.js
var MonotoneYTension = class {
  constructor(context, tension) {
    Object.defineProperty(this, "_line", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_x0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_t0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    this._context = context;
    this._tension = tension;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  }
  lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point(this, this._t0, slope2(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    [x, y] = [y, x];
    let t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(y, x) : this._context.moveTo(y, x);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point(this, slope2(this, t1 = slope3(this, x, y)), t1);
        break;
      default:
        point(this, this._t0, t1 = slope3(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function curveMonotoneYTension(tension) {
  function monotoneYTension(context) {
    return new MonotoneYTension(context, tension);
  }
  monotoneYTension.tension = function(tension2) {
    return curveMonotoneYTension(+tension2);
  };
  return monotoneYTension;
}
function sign(x) {
  return x < 0 ? -1 : 1;
}
function slope3(that, x2, y2) {
  let h0 = that._x1 - that._x0;
  let h1 = x2 - that._x1;
  let s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0);
  let s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0);
  let p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope2(that, t) {
  let h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point(that, t0, t1) {
  let x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 1.5 * (1 - that._tension);
  that._context.bezierCurveTo(y0 + dx * t0, x0 + dx, y1 - dx * t1, x1 - dx, y1, x1);
}

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedYLineSeries.js
var SmoothedYLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", curveMonotoneYTension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", curveMonotoneYTension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedYLineSeries"
});
Object.defineProperty(SmoothedYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedYLineSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/core/render/MonotoneXTension.js
var MonotoneXTension = class {
  constructor(context, tension) {
    Object.defineProperty(this, "_line", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_point", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_context", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_x0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_x1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_y1", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_t0", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    Object.defineProperty(this, "_tension", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
    this._context = context;
    this._tension = tension;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
    this._point = 0;
  }
  lineEnd() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        point2(this, this._t0, slope22(this, this._t0));
        break;
    }
    if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
    this._line = 1 - this._line;
  }
  point(x, y) {
    let t1 = NaN;
    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return;
    switch (this._point) {
      case 0:
        this._point = 1;
        this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        point2(this, slope22(this, t1 = slope32(this, x, y)), t1);
        break;
      default:
        point2(this, this._t0, t1 = slope32(this, x, y));
        break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
};
function curveMonotoneXTension(tension) {
  function monotoneXTension(context) {
    return new MonotoneXTension(context, tension);
  }
  return monotoneXTension;
}
function sign2(x) {
  return x < 0 ? -1 : 1;
}
function slope32(that, x2, y2) {
  let h0 = that._x1 - that._x0;
  let h1 = x2 - that._x1;
  let s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0);
  let s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0);
  let p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign2(s0) + sign2(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
function slope22(that, t) {
  let h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
function point2(that, t0, t1) {
  let x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 1.5 * (1 - that._tension);
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXLineSeries.js
var SmoothedXLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", curveMonotoneXTension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", curveMonotoneXTension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedXLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXLineSeries"
});
Object.defineProperty(SmoothedXLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedXLineSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/SmoothedXYLineSeries.js
var SmoothedXYLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", cardinal_default.tension(this.get("tension", 0.5)));
    super._afterNew();
  }
  _updateChildren() {
    if (this.isDirty("tension")) {
      this.set("curveFactory", cardinal_default.tension(this.get("tension", 0.5)));
      this._valuesDirty = true;
    }
    super._updateChildren();
  }
};
Object.defineProperty(SmoothedXYLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "SmoothedXYLineSeries"
});
Object.defineProperty(SmoothedXYLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([SmoothedXYLineSeries.className])
});

// ../node_modules/@amcharts/amcharts5/.internal/charts/xy/series/StepLineSeries.js
var StepLineSeries = class extends LineSeries {
  _afterNew() {
    this._setDefault("curveFactory", stepAfter);
    super._afterNew();
  }
  _getPoints(dataItem, o) {
    let points = o.points;
    let width = this.get("stepWidth", p100).value / 2;
    let itemLocationX0 = dataItem.get("locationX", o.locationX);
    let itemLocationY0 = dataItem.get("locationY", o.locationY);
    let itemLocationX1 = itemLocationX0;
    let itemLocationY1 = itemLocationY0;
    if (o.baseAxis === o.xAxis) {
      itemLocationX0 -= width;
      itemLocationX1 += width;
    } else if (o.baseAxis === o.yAxis) {
      itemLocationY0 -= width;
      itemLocationY1 += width;
    }
    let xPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX0, o.vcx);
    let yPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY0, o.vcy);
    let xPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xField, itemLocationX1, o.vcx);
    let yPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yField, itemLocationY1, o.vcy);
    if (this._shouldInclude(xPos0)) {
      const iPoint0 = this.getPoint(xPos0, yPos0);
      const point0 = [iPoint0.x, iPoint0.y];
      const iPoint1 = this.getPoint(xPos1, yPos1);
      const point1 = [iPoint1.x, iPoint1.y];
      if (o.fillVisible) {
        let xOpenPos0 = xPos0;
        let yOpenPos0 = yPos0;
        let xOpenPos1 = xPos1;
        let yOpenPos1 = yPos1;
        if (o.baseAxis === o.xAxis) {
          yOpenPos0 = o.basePosY;
          yOpenPos1 = o.basePosY;
        } else if (o.baseAxis === o.yAxis) {
          xOpenPos0 = o.basePosX;
          xOpenPos1 = o.basePosX;
        }
        if (o.getOpen) {
          let valueX = dataItem.get(o.xOpenField);
          let valueY = dataItem.get(o.yOpenField);
          if (valueX != null && valueY != null) {
            itemLocationX0 = dataItem.get("openLocationX", o.openLocationX);
            itemLocationY0 = dataItem.get("openLocationY", o.openLocationY);
            itemLocationX1 = itemLocationX0;
            itemLocationY1 = itemLocationY0;
            if (o.baseAxis === o.xAxis) {
              itemLocationX0 -= width;
              itemLocationX1 += width;
            } else if (o.baseAxis === o.yAxis) {
              itemLocationY0 -= width;
              itemLocationY1 += width;
            }
            if (o.stacked) {
              let stackToItemX = dataItem.get("stackToItemX");
              let stackToItemY = dataItem.get("stackToItemY");
              if (stackToItemX) {
                xOpenPos0 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX0, stackToItemX.component.get("vcx"));
                xOpenPos1 = o.xAxis.getDataItemPositionX(stackToItemX, o.xField, itemLocationX1, stackToItemX.component.get("vcx"));
              } else {
                if (o.yAxis === o.baseAxis) {
                  xOpenPos0 = o.basePosX;
                  xOpenPos1 = o.basePosX;
                } else if (o.baseAxis === o.yAxis) {
                  xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
                  xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
                }
              }
              if (stackToItemY) {
                yOpenPos0 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY0, stackToItemY.component.get("vcy"));
                yOpenPos1 = o.yAxis.getDataItemPositionY(stackToItemY, o.yField, itemLocationY1, stackToItemY.component.get("vcy"));
              } else {
                if (o.xAxis === o.baseAxis) {
                  yOpenPos0 = o.basePosY;
                  yOpenPos1 = o.basePosY;
                } else if (o.baseAxis === o.yAxis) {
                  yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
                  yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
                }
              }
            } else {
              xOpenPos0 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX0, o.vcx);
              yOpenPos0 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY0, o.vcy);
              xOpenPos1 = o.xAxis.getDataItemPositionX(dataItem, o.xOpenField, itemLocationX1, o.vcx);
              yOpenPos1 = o.yAxis.getDataItemPositionY(dataItem, o.yOpenField, itemLocationY1, o.vcy);
            }
          }
        }
        let closeIPoint0 = this.getPoint(xOpenPos0, yOpenPos0);
        let closeIPoint1 = this.getPoint(xOpenPos1, yOpenPos1);
        point0[2] = closeIPoint0.x;
        point0[3] = closeIPoint0.y;
        point1[2] = closeIPoint1.x;
        point1[3] = closeIPoint1.y;
      }
      points.push(point0);
      points.push(point1);
      dataItem.set("point", {
        x: point0[0] + (point1[0] - point0[0]) / 2,
        y: point0[1] + (point1[1] - point0[1]) / 2
      });
    }
    if (this.get("noRisers")) {
      o.points = [];
      o.segments.push(points);
    }
  }
};
Object.defineProperty(StepLineSeries, "className", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: "StepLineSeries"
});
Object.defineProperty(StepLineSeries, "classNames", {
  enumerable: true,
  configurable: true,
  writable: true,
  value: LineSeries.classNames.concat([StepLineSeries.className])
});
export {
  Axis,
  AxisBullet,
  AxisLabel,
  AxisLabelRadial,
  AxisRenderer,
  AxisRendererX,
  AxisRendererY,
  AxisTick,
  BaseColumnSeries,
  Candlestick,
  CandlestickSeries,
  CategoryAxis,
  CategoryDateAxis,
  ColumnSeries,
  DateAxis,
  XYChartDefaultTheme as DefaultTheme,
  DurationAxis,
  GaplessDateAxis,
  Grid,
  LineSeries,
  OHLC,
  OHLCSeries,
  SmoothedXLineSeries,
  SmoothedXYLineSeries,
  SmoothedYLineSeries,
  StepLineSeries,
  ValueAxis,
  XYChart,
  XYChartScrollbar,
  XYCursor,
  XYSeries
};
//# sourceMappingURL=@amcharts_amcharts5_xy.js.map
