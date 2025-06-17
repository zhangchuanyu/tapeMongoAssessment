import {
  Theme
} from "./chunk-QF7X2JEG.js";
import "./chunk-XWLXMCJQ.js";

// ../node_modules/@amcharts/amcharts5/.internal/themes/AnimatedTheme.js
var AnimatedTheme = class extends Theme {
  setupDefaultRules() {
    super.setupDefaultRules();
    this.rule("Component").setAll({
      interpolationDuration: 600
    });
    this.rule("Hierarchy").set("animationDuration", 600);
    this.rule("Scrollbar").set("animationDuration", 600);
    this.rule("Tooltip").set("animationDuration", 300);
    this.rule("MapChart").set("animationDuration", 1e3);
    this.rule("MapChart").set("wheelDuration", 300);
    this.rule("Entity").setAll({
      stateAnimationDuration: 600
    });
    this.rule("Sprite").states.create("default", {
      stateAnimationDuration: 600
    });
    this.rule("Tooltip", ["axis"]).setAll({
      animationDuration: 200
    });
    this.rule("WordCloud").set("animationDuration", 500);
    this.rule("Polygon").set("animationDuration", 600);
    this.rule("ArcDiagram").set("animationDuration", 600);
  }
};

// ../node_modules/@amcharts/amcharts5/themes/Animated.js
var Animated_default = AnimatedTheme;
export {
  Animated_default as default
};
//# sourceMappingURL=@amcharts_amcharts5_themes_Animated.js.map
