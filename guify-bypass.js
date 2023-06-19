!function(n, e) {
   if ("object" == typeof exports && "object" == typeof module) module.exports = e();
   else if ("function" == typeof define && define.amd) define([], e);
   else {
       var t = e();
       for (var o in t)("object" == typeof exports ? exports : n)[o] = t[o]
   }
}(self, (function() {
   return (() => {
       var n = {
               379: n => {
                   var e = {
                       animationIterationCount: !0,
                       boxFlex: !0,
                       boxFlexGroup: !0,
                       boxOrdinalGroup: !0,
                       columnCount: !0,
                       flex: !0,
                       flexGrow: !0,
                       flexPositive: !0,
                       flexShrink: !0,
                       flexNegative: !0,
                       flexOrder: !0,
                       gridRow: !0,
                       gridColumn: !0,
                       fontWeight: !0,
                       lineClamp: !0,
                       lineHeight: !0,
                       opacity: !0,
                       order: !0,
                       orphans: !0,
                       tabSize: !0,
                       widows: !0,
                       zIndex: !0,
                       zoom: !0,
                       fillOpacity: !0,
                       stopOpacity: !0,
                       strokeDashoffset: !0,
                       strokeOpacity: !0,
                       strokeWidth: !0
                   };
                   n.exports = function(n, t) {
                       return "number" != typeof t || e[n] ? t : t + "px"
                   }
               },
               764: n => {
                   n.exports = {
                       light: {
                           name: "Light",
                           colors: {
                               menuBarBackground: "rgb(227, 227, 227)",
                               menuBarText: "rgb(36, 36, 36)",
                               panelBackground: "rgb(227, 227, 227)",
                               componentBackground: "rgb(204, 204, 204)",
                               componentBackgroundHover: "rgb(190, 190, 190)",
                               componentBackgroundDisabled: "rgb(200, 200, 200)",
                               componentForeground: "rgb(105, 105, 105)",
                               componentActive: "rgb(36, 36, 36)",
                               textPrimary: "rgb(36, 36, 36)",
                               textSecondary: "rgb(87, 87, 87)",
                               textHover: "rgb(204, 204, 204)",
                               textActive: "rgb(204, 204, 204)",
                               textDisabled: "rgb(180, 180, 180)"
                           }
                       },
                       dark: {
                           name: "Dark",
                           colors: {
                               menuBarBackground: "rgb(35, 35, 35)",
                               menuBarText: "rgb(235, 235, 235)",
                               panelBackground: "rgb(35, 35, 35)",
                               componentBackground: "rgb(54, 54, 54)",
                               componentBackgroundHover: "rgb(76, 76, 76)",
                               componentBackgroundDisabled: "rgb(24, 24, 24)",
                               componentForeground: "rgb(112, 112, 112)",
                               componentActive: "rgb(202, 202, 202)",
                               textPrimary: "rgb(235, 235, 235)",
                               textSecondary: "rgb(181, 181, 181)",
                               textHover: "rgb(235, 235, 235)",
                               textActive: "rgb(54, 54, 54)",
                               textDisabled: "rgb(54, 54, 54)"
                           }
                       },
                       yorha: {
                           name: "YoRHa",
                           colors: {
                               menuBarBackground: "#CCC8B1",
                               menuBarText: "#454138",
                               panelBackground: "#CCC8B1",
                               componentBackground: "#BAB5A1",
                               componentBackgroundHover: "#877F6E",
                               componentBackgroundDisabled: "#DED8C7",
                               componentForeground: "#454138",
                               componentActive: "#978F7E",
                               textPrimary: "#454138",
                               textSecondary: "#454138",
                               textHover: "#CCC8B1",
                               textActive: "#CCC8B1",
                               textDisabled: "#BAB5A6"
                           },
                           font: {
                               fontFamily: "helvetica, sans-serif",
                               fontSize: "14px",
                               fontWeight: "100",
                               inputFontFamily: "ui-monospace, monospace"
                           }
                       }
                   }
               },
               287: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-bar {\n    background-color: var(--color-menu-bar-background);\n    height: var(--size-menu-bar-height);\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    top: 0;\n    cursor: default;\n}\n\n.abc-bar-title {\n    color: var(--color-menu-bar-text);\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: var(--size-menu-bar-height);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.abc-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we're providing our own visual feedback */\n.abc-bar-button:focus {\n    outline: none;\n}\n.abc-bar-button::-moz-focus-inner {\n    border: 0;\n}\n\n.abc-bar-button:hover,\n.abc-bar-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-bar-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/internal/menu-bar.css"],
                       names: [],
                       mappings: "AAEA;IACI,kDAAkD;IAClD,mCAAmC;IACnC,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,eAAe;AACnB;;AAEA;IACI,iCAAiC;IACjC,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,wCAAwC;IACxC,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,gCAAgC;IAChC,mDAAmD;IACnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,SAAS;;AAEb;;AAEA,sFAAsF;AACtF;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-bar {\n    background-color: var(--color-menu-bar-background);\n    height: var(--size-menu-bar-height);\n    width: 100%;\n    opacity: 1.0;\n    position: relative;\n    top: 0;\n    cursor: default;\n}\n\n.abc-bar-title {\n    color: var(--color-menu-bar-text);\n    text-align: center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    line-height: var(--size-menu-bar-height);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n\n.abc-bar-button {\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    margin: 0;\n\n}\n\n/* Hide default accessibility outlines since we\'re providing our own visual feedback */\n.abc-bar-button:focus {\n    outline: none;\n}\n.abc-bar-button::-moz-focus-inner {\n    border: 0;\n}\n\n.abc-bar-button:hover,\n.abc-bar-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-bar-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               153: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, "/* Container */\n\n.abc-panel-container {\n    position: absolute;\n    background: var(--color-panel-background);\n}\n\n.abc-panel-container-scrollable {\n    max-height: calc(100% - var(--size-menu-bar-height));\n    overflow: scroll;\n}\n\n/* Container modes (i.e. inner, outer) */\n\n.abc-panel-container-right-inner {\n    right: 0;\n    left: unset;\n}\n\n.abc-panel-container-left-inner {\n    right: unset;\n    left: 0;\n}\n\n.abc-panel-container-right-outer {\n    right: unset;\n    left: 100%;\n}\n\n.abc-panel-container-left-outer {\n    right: 100%;\n    left: unset;\n}\n\n.abc-fullscreen .abc-panel-container-right-inner,\n.abc-fullscreen .abc-panel-container-right-outer {\n    right: 0;\n    left: unset;\n}\n\n.abc-fullscreen .abc-panel-container-left-inner,\n.abc-fullscreen .abc-panel-container-left-outer {\n    right: unset;\n    left: 0;\n}\n\n/* Panel (in container) */\n\n.abc-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - var(--size-component-spacing));\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.abc-panel.abc-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.abc-panel * {\n    box-sizing: content-box;\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.abc-panel input {\n    display: inline;\n}\n\n.abc-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.abc-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.abc-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: var(--color-component-foreground);\n}\n\n/* Remove browser default outlines since we're providing our own */\n.abc-panel-toggle-button:focus {\n    outline:none;\n}\n.abc-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.abc-panel-toggle-button:hover,\n.abc-panel-toggle-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-panel-toggle-button:active {\n    color: var(--color-text-active);\n    background-color:var(--color-component-active);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/internal/panel.css"],
                       names: [],
                       mappings: "AAEA,cAAc;;AAEd;IACI,kBAAkB;IAClB,yCAAyC;AAC7C;;AAEA;IACI,oDAAoD;IACpD,gBAAgB;AACpB;;AAEA,wCAAwC;;AAExC;IACI,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,OAAO;AACX;;AAEA;IACI,YAAY;IACZ,UAAU;AACd;;AAEA;IACI,WAAW;IACX,WAAW;AACf;;AAEA;;IAEI,QAAQ;IACR,WAAW;AACf;;AAEA;;IAEI,YAAY;IACZ,OAAO;AACX;;AAEA,yBAAyB;;AAEzB;IACI,aAAa;IACb,6EAA6E;IAC7E,0DAA0D;;IAE1D,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,uBAAmB;IAAnB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;AAC5B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,UAAU;IACV,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,oBAAoB;IACpB,gCAAgC;IAChC,mDAAmD;;IAEnD,yBAAyB;IACzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;;AAErB;;AAEA,8BAA8B;AAC9B;IACI,eAAe;IACf,eAAe;IACf,yCAAyC;AAC7C;;AAEA,kEAAkE;AAClE;IACI,YAAY;AAChB;AACA;IACI,SAAS;AACb;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,+BAA+B;IAC/B,8CAA8C;AAClD",
                       sourcesContent: ['@import "../variables.css";\n\n/* Container */\n\n.abc-panel-container {\n    position: absolute;\n    background: var(--color-panel-background);\n}\n\n.abc-panel-container-scrollable {\n    max-height: calc(100% - var(--size-menu-bar-height));\n    overflow: scroll;\n}\n\n/* Container modes (i.e. inner, outer) */\n\n.abc-panel-container-right-inner {\n    right: 0;\n    left: unset;\n}\n\n.abc-panel-container-left-inner {\n    right: unset;\n    left: 0;\n}\n\n.abc-panel-container-right-outer {\n    right: unset;\n    left: 100%;\n}\n\n.abc-panel-container-left-outer {\n    right: 100%;\n    left: unset;\n}\n\n.abc-fullscreen .abc-panel-container-right-inner,\n.abc-fullscreen .abc-panel-container-right-outer {\n    right: 0;\n    left: unset;\n}\n\n.abc-fullscreen .abc-panel-container-left-inner,\n.abc-fullscreen .abc-panel-container-left-outer {\n    right: unset;\n    left: 0;\n}\n\n/* Panel (in container) */\n\n.abc-panel {\n    padding: 14px;\n    /* Last component will have a margin, so reduce padding to account for this */\n    padding-bottom: calc(14px - var(--size-component-spacing));\n\n    /* all: initial;  */\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default;\n    text-align: left;\n    box-sizing: border-box;\n}\n\n.abc-panel.abc-panel-hidden {\n    height: 0px;\n    display: none;\n}\n\n.abc-panel * {\n    box-sizing: initial;\n    -webkit-box-sizing: initial;\n    -moz-box-sizing: initial;\n}\n\n.abc-panel input {\n    display: inline;\n}\n\n.abc-panel a {\n    color: inherit;\n    text-decoration: none;\n}\n\n.abc-panel-toggle-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    width: 15px;\n    height: 15px;\n    line-height: 15px;\n    text-align: center;\n    border: none;\n    cursor: pointer;\n    font-family: inherit;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n}\n\n/* Open/Close button styling */\n.abc-panel-toggle-button svg {\n    fill-opacity: 0;\n    stroke-width: 3;\n    stroke: var(--color-component-foreground);\n}\n\n/* Remove browser default outlines since we\'re providing our own */\n.abc-panel-toggle-button:focus {\n    outline:none;\n}\n.abc-panel-toggle-button::-moz-focus-inner {\n    border: 0;\n}\n\n.abc-panel-toggle-button:hover,\n.abc-panel-toggle-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-panel-toggle-button:active {\n    color: var(--color-text-active);\n    background-color:var(--color-component-active);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               56: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-toast-notification {\n    box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.abc-toast-area .abc-toast-notification:nth-child(odd) {\n    color: var(--color-text-primary);\n    background-color:var(--color-panel-background);\n}\n\n.abc-toast-area .abc-toast-notification:nth-child(even) {\n    color: var(--color-text-primary);\n    background-color: var(--color-menu-bar-background);\n}\n\n.abc-toast-close-button {\n    color: var(--color-text-primary);\n    background: transparent;\n    position: absolute;\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/internal/toast-area.css"],
                       names: [],
                       mappings: "AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;IACX,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,kBAAkB;;IAElB,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,gCAAgC;IAChC,8CAA8C;AAClD;;AAEA;IACI,gCAAgC;IAChC,kDAAkD;AACtD;;AAEA;IACI,gCAAgC;IAChC,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,MAAM;IACN,SAAS;IACT,UAAU;AACd",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-toast-notification {\n    box-sizing: border-box;\n    position: relative;\n    width: 100%;\n    /* height: 20px; */\n    padding: 8px;\n    padding-left: 20px;\n    padding-right: 20px;\n    text-align: center;\n\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.abc-toast-area .abc-toast-notification:nth-child(odd) {\n    color: var(--color-text-primary);\n    background-color:var(--color-panel-background);\n}\n\n.abc-toast-area .abc-toast-notification:nth-child(even) {\n    color: var(--color-text-primary);\n    background-color: var(--color-menu-bar-background);\n}\n\n.abc-toast-close-button {\n    color: var(--color-text-primary);\n    background: transparent;\n    position: absolute;\n    text-align: center;\n    margin-top: auto;\n    margin-bottom: auto;\n    border: none;\n    cursor: pointer;\n    top: 0;\n    bottom: 0;\n    right: 8px;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               54: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-component-container {\n    position: relative;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    margin-bottom: var(--size-component-spacing);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/partials/container.css"],
                       names: [],
                       mappings: "AAEA;IACI,kBAAkB;IAClB,wCAAwC;IACxC,yCAAyC;IACzC,4CAA4C;AAChD",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-component-container {\n    position: relative;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    margin-bottom: var(--size-component-spacing);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               142: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-component-label {\n    left: 0;\n    width: calc(var(--size-label-width) - 2%);\n    display: inline-block;\n    margin-right: 2%;\n    vertical-align: top;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n\n    color: var(--color-text-primary);\n}\n\n/* Disabled styles */\n.disabled .abc-component-label {\n    color: var(--color-text-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/partials/label.css"],
                       names: [],
                       mappings: "AAEA;IACI,OAAO;IACP,yCAAyC;IACzC,qBAAqB;IACrB,gBAAgB;IAChB,mBAAmB;IACnB,wCAAwC;IACxC,yCAAyC;;IAEzC,gCAAgC;AACpC;;AAEA,oBAAoB;AACpB;IACI,iCAAiC;AACrC",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-component-label {\n    left: 0;\n    width: calc(var(--size-label-width) - 2%);\n    display: inline-block;\n    margin-right: 2%;\n    vertical-align: top;\n    min-height: var(--size-component-height);\n    line-height: var(--size-component-height);\n\n    color: var(--color-text-primary);\n}\n\n/* Disabled styles */\n.disabled .abc-component-label {\n    color: var(--color-text-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               643: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-value-input {\n    position: absolute;\n    background-color: var(--color-component-background);\n    padding-left: 1%;\n    height: var(--size-component-height);\n    display: inline-block;\n    overflow: hidden;\n    border: none;\n\n    color: var(--color-text-secondary);\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n    cursor: text;\n    line-height: var(--size-component-height);\n    word-break: break-all;\n\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n\n    font-family: var(--font-family-for-input);\n\n    border-radius: 0;\n}\n\n.abc-value-input-right {\n    right: 0 !important;\n}\n\n.disabled .abc-value-input {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/partials/value.css"],
                       names: [],
                       mappings: "AAEA;IACI,kBAAkB;IAClB,mDAAmD;IACnD,gBAAgB;IAChB,oCAAoC;IACpC,qBAAqB;IACrB,gBAAgB;IAChB,YAAY;;IAEZ,kCAAkC;IAClC,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;IACjB,YAAY;IACZ,yCAAyC;IACzC,qBAAqB;;IAErB,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;;IAEzC,yCAAyC;;IAEzC,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-value-input {\n    position: absolute;\n    background-color: var(--color-component-background);\n    padding-left: 1%;\n    height: var(--size-component-height);\n    display: inline-block;\n    overflow: hidden;\n    border: none;\n\n    color: var(--color-text-secondary);\n    user-select: text;\n    cursor: text;\n    line-height: var(--size-component-height);\n    word-break: break-all;\n\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n\n    font-family: var(--font-family-for-input);\n\n    border-radius: 0;\n}\n\n.abc-value-input-right {\n    right: 0 !important;\n}\n\n.disabled .abc-value-input {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               351: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-button {\n    box-sizing: border-box !important;\n    color: var(--color-text-secondary);\n    background-color: var(--color-component-background);\n\n    position: absolute;\n    text-align: center;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n.abc-button:focus {\n    outline:none;\n}\n.abc-button::-moz-focus-inner {\n    border:0;\n}\n\n.abc-button:hover,\n.abc-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n*.disabled > .abc-button {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/button.css"],
                       names: [],
                       mappings: "AAEA;IACI,iCAAiC;IACjC,kCAAkC;IAClC,mDAAmD;;IAEnD,kBAAkB;IAClB,kBAAkB;IAClB,oCAAoC;IACpC,yCAAyC;IACzC,gBAAgB;IAChB,mBAAmB;IACnB,2CAA2C;IAC3C,YAAY;IACZ,eAAe;IACf,QAAQ;IACR,oBAAoB;AACxB;;AAEA;IACI,YAAY;AAChB;AACA;IACI,QAAQ;AACZ;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,oBAAoB;IACpB,4DAA4D;IAC5D,iCAAiC;AACrC",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-button {\n    box-sizing: border-box !important;\n    color: var(--color-text-secondary);\n    background-color: var(--color-component-background);\n\n    position: absolute;\n    text-align: center;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-top: 0px;\n    padding-bottom: 0px;\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    cursor: pointer;\n    right: 0;\n    font-family: inherit;\n}\n\n.abc-button:focus {\n    outline:none;\n}\n.abc-button::-moz-focus-inner {\n    border:0;\n}\n\n.abc-button:hover,\n.abc-button:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-button:active {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n*.disabled > .abc-button {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    color: var(--color-text-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               11: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ':root {\n    --checkbox-border-width: 4px;\n}\n\ninput[type=checkbox].abc-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n}\n\ninput[type=checkbox].abc-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].abc-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: var(--size-component-height);\n    height: var(--size-component-height);\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: var(--color-component-background);\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].abc-checkbox:hover:not(:disabled) + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-background-hover);\n    border: solid 4px var(--color-component-background);\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.abc-checkbox + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid 4px var(--color-component-background);\n    border: solid var(--checkbox-border-width) var(--color-component-background);\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.abc-checkbox:focus + label:before {\n    width: calc(var(--size-component-height) - (4px * 2));\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (4px * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid 4px var(--color-component-background-hover);\n    border: solid var(--checkbox-border-width) var(--color-component-background-hover);\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].abc-checkbox:focus + label:before {\n    background-color: var(--color-component-background-hover);\n}\n\n/* Disabled styles */\n.disabled input[type=checkbox].abc-checkbox + label {\n    pointer-events: none;\n}\n.disabled input[type="checkbox"].abc-checkbox + label::before {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n}', "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/checkbox.css"],
                       names: [],
                       mappings: "AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,qBAAqB;IACrB,wBAAwB;IACxB,SAAS;IACT,gBAAgB;IAChB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,WAAW;IACX,qBAAqB;IACrB,mCAAmC;IACnC,oCAAoC;IACpC,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,mDAAmD;IACnD,kBAAkB;IAClB,eAAe;IACf,uBAAuB;IACvB,4BAA4B;IAC5B,+BAA+B;;AAEnC;;AAEA,gBAAgB;AAChB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,yDAAyD;IACzD,mDAAmD;AACvD;;AAEA,kBAAkB;AAClB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,mDAA4E;IAA5E,4EAA4E;AAChF;;AAEA,wBAAwB;AACxB;IACI,qDAA8E;IAA9E,8EAA8E;IAC9E,sDAA+E;IAA/E,+EAA+E;IAC/E,mDAAmD;IACnD,yDAAkF;IAAlF,kFAAkF;AACtF;;AAEA,wBAAwB;AACxB;IACI,yDAAyD;AAC7D;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB;AACA;IACI,oBAAoB;IACpB,4DAA4D;AAChE",
                       sourcesContent: ['@import "../variables.css";\n\n:root {\n    --checkbox-border-width: 4px;\n}\n\ninput[type=checkbox].abc-checkbox {\n    opacity: 0;\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    margin: 0;\n    border-radius: 0;\n    border: none;\n    cursor: pointer;\n}\n\ninput[type=checkbox].abc-checkbox + label {\n    margin: 0;\n}\n\ninput[type=checkbox].abc-checkbox + label:before {\n    content: "";\n    display: inline-block;\n    width: var(--size-component-height);\n    height: var(--size-component-height);\n    padding: 0;\n    margin: 0;\n    vertical-align: middle;\n    background-color: var(--color-component-background);\n    border-radius: 0px;\n    cursor: pointer;\n    box-sizing: content-box;\n    -moz-box-sizing: content-box;\n    -webkit-box-sizing: content-box;\n\n}\n\n/* Hover style */\ninput[type=checkbox].abc-checkbox:hover:not(:disabled) + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-background-hover);\n    border: solid 4px var(--color-component-background);\n}\n\n/* Checked style */\ninput[type=checkbox]:checked.abc-checkbox + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid var(--checkbox-border-width) var(--color-component-background);\n}\n\n/* Focused and checked */\ninput[type=checkbox]:checked.abc-checkbox:focus + label:before {\n    width: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    height: calc(var(--size-component-height) - (var(--checkbox-border-width) * 2));\n    background-color: var(--color-component-foreground);\n    border: solid var(--checkbox-border-width) var(--color-component-background-hover);\n}\n\n/* Focus and unchecked */\ninput[type=checkbox].abc-checkbox:focus + label:before {\n    background-color: var(--color-component-background-hover);\n}\n\n/* Disabled styles */\n.disabled input[type=checkbox].abc-checkbox + label {\n    pointer-events: none;\n}\n.disabled input[type="checkbox"].abc-checkbox + label::before {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               442: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, "/* Styling for simple-color-picker */\n\n.abc-color .Scp {\n    width: 125px;\n    height: 100px;\n    -webkit-user-select: none;\n        -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n    position: relative;\n    z-index: 1000;\n    cursor: pointer;\n}\n.abc-color .Scp-saturation {\n    position: relative;\n    width: calc(100% - 25px);\n    height: 100%;\n    background: linear-gradient(to right, #fff 0%, #f00 100%);\n    float: left;\n    margin-right: 5px;\n}\n.abc-color .Scp-brightness {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n}\n.abc-color .Scp-sbSelector {\n    border: 1px solid;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background: #fff;\n    border-radius: 10px;\n    top: -7px;\n    left: -7px;\n    box-sizing: border-box;\n    z-index: 10;\n}\n.abc-color .Scp-hue {\n    width: 20px;\n    height: 100%;\n    position: relative;\n    float: left;\n    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n}\n.abc-color .Scp-hSelector {\n    position: absolute;\n    background: #fff;\n    border-bottom: 1px solid #000;\n    right: -3px;\n    width: 10px;\n    height: 2px;\n}\n\n/* Disabled styles */\n.disabled .abc-color {\n    pointer-events: none;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/color.css"],
                       names: [],
                       mappings: "AAEA,oCAAoC;;AAEpC;IACI,YAAY;IACZ,aAAa;IACb,yBAAyB;QACrB,sBAAsB;YAClB,qBAAqB;gBACjB,iBAAiB;IAC7B,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;AACA;IACI,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,yDAAyD;IACzD,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,YAAY;IACZ,sEAAsE;AAC1E;AACA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,4GAA4G;AAChH;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,WAAW;AACf;;AAEA,oBAAoB;AACpB;IACI,oBAAoB;AACxB",
                       sourcesContent: ['@import "../variables.css";\n\n/* Styling for simple-color-picker */\n\n.abc-color .Scp {\n    width: 125px;\n    height: 100px;\n    -webkit-user-select: none;\n        -moz-user-select: none;\n            -ms-user-select: none;\n                user-select: none;\n    position: relative;\n    z-index: 1000;\n    cursor: pointer;\n}\n.abc-color .Scp-saturation {\n    position: relative;\n    width: calc(100% - 25px);\n    height: 100%;\n    background: linear-gradient(to right, #fff 0%, #f00 100%);\n    float: left;\n    margin-right: 5px;\n}\n.abc-color .Scp-brightness {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, #000 0%, rgba(255,255,255,0) 100%);\n}\n.abc-color .Scp-sbSelector {\n    border: 1px solid;\n    position: absolute;\n    width: 14px;\n    height: 14px;\n    background: #fff;\n    border-radius: 10px;\n    top: -7px;\n    left: -7px;\n    box-sizing: border-box;\n    z-index: 10;\n}\n.abc-color .Scp-hue {\n    width: 20px;\n    height: 100%;\n    position: relative;\n    float: left;\n    background: linear-gradient(to bottom, #f00 0%, #f0f 17%, #00f 34%, #0ff 50%, #0f0 67%, #ff0 84%, #f00 100%);\n}\n.abc-color .Scp-hSelector {\n    position: absolute;\n    background: #fff;\n    border-bottom: 1px solid #000;\n    right: -3px;\n    width: 10px;\n    height: 2px;\n}\n\n/* Disabled styles */\n.disabled .abc-color {\n    pointer-events: none;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               144: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-display {\n    display: inline-block;\n    height: unset;\n    min-height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    vertical-align: sub;\n    line-height: 1rem;\n    -webkit-user-select: text;\n       -moz-user-select: text;\n        -ms-user-select: text;\n            user-select: text;\n}\n\n.disabled .abc-display {\n    color: var(--color-text-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/display.css"],
                       names: [],
                       mappings: "AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,wCAAwC;IACxC,2CAA2C;IAC3C,YAAY;IACZ,kCAAkC;IAClC,oBAAoB;IACpB,sBAAsB;IACtB,2BAA2B;IAC3B,8BAA8B;IAC9B,mBAAmB;IACnB,iBAAiB;IACjB,yBAAiB;OAAjB,sBAAiB;QAAjB,qBAAiB;YAAjB,iBAAiB;AACrB;;AAEA;IACI,iCAAiC;AACrC",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-display {\n    display: inline-block;\n    height: unset;\n    min-height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    vertical-align: sub;\n    line-height: 1rem;\n    user-select: text;\n}\n\n.disabled .abc-display {\n    color: var(--color-text-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               191: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    cursor: pointer;\n}\n\n.abc-file-container:hover:not(:disabled),\n.abc-file-container:focus:not(:disabled) {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-file-container:active:not(:disabled) {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n.abc-dragover:not(:disabled) {\n    background-color: var(--color-component-background);\n    box-shadow: inset 0 0 0 3px var(--color-component-foreground);\n}\n\n.disabled.abc-file-container {\n    pointer-events: none;\n    color: var(--color-text-disabled) !important;\n    background-color: var(--color-component-background-disabled) !important;\n    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/file.css"],
                       names: [],
                       mappings: "AAEA;IACI,qBAAqB;IACrB,aAAa;IACb,gBAAgB;IAChB,mBAAmB;IACnB,gCAAgC;IAChC,mDAAmD;IACnD,eAAe;AACnB;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,0CAA0C;IAC1C,0DAA0D;AAC9D;;AAEA;IACI,mDAAmD;IACnD,6DAA6D;AACjE;;AAEA;IACI,oBAAoB;IACpB,4CAA4C;IAC5C,uEAAuE;IACvE,iFAAiF;AACrF",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-file-container {\n    display: inline-block;\n    outline: none;\n    padding-top: 8px;\n    padding-bottom: 8px;\n    color: var(--color-text-primary);\n    background-color: var(--color-component-background);\n    cursor: pointer;\n}\n\n.abc-file-container:hover:not(:disabled),\n.abc-file-container:focus:not(:disabled) {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-file-container:active:not(:disabled) {\n    color: var(--color-text-active) !important;\n    background-color: var(--color-component-active) !important;\n}\n\n.abc-dragover:not(:disabled) {\n    background-color: var(--color-component-background);\n    box-shadow: inset 0 0 0 3px var(--color-component-foreground);\n}\n\n.disabled.abc-file-container {\n    pointer-events: none;\n    color: var(--color-text-disabled) !important;\n    background-color: var(--color-component-background-disabled) !important;\n    box-shadow: inset 0 0 0 3px var(--color-component-background-disabled) !important;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               211: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: var(--color-text-primary);\n}\n\n.abc-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: var(--size-component-height);\n}\n\n.abc-folder:hover,\n.abc-folder:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n    outline: none;\n}\n\n\n.abc-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid var(--color-component-background);\n}\n\n.abc-folder-contents.abc-folder-closed {\n    height: 0;\n    display: none;\n}\n\n.abc-folder .abc-folder-arrow {\n    width: 1.5em;\n    vertical-align: middle;\n}\n\n/* Disabled styles */\n\n.abc-folder.disabled {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n}\n\n.abc-folder.disabled + .abc-folder-contents {\n    pointer-events: none;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/folder.css"],
                       names: [],
                       mappings: "AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;;IAEI,8BAA8B;IAC9B,mDAAmD;IACnD,aAAa;AACjB;;;AAGA;IACI,cAAc;IACd,sBAAsB;IACtB,kBAAkB;IAClB,kBAAkB;IAClB,wDAAwD;AAC5D;;AAEA;IACI,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;AACrC;;AAEA;IACI,oBAAoB;AACxB",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-folder {\n    cursor: pointer;\n    padding-left: 0.5em;\n    color: var(--color-text-primary);\n}\n\n.abc-folder div {\n    display: inline-block;\n    vertical-align: sub;\n    line-height: var(--size-component-height);\n}\n\n.abc-folder:hover,\n.abc-folder:focus {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n    outline: none;\n}\n\n\n.abc-folder-contents {\n    display: block;\n    box-sizing: border-box;\n    padding-left: 14px;\n    margin-bottom: 5px;\n    border-left: 2px solid var(--color-component-background);\n}\n\n.abc-folder-contents.abc-folder-closed {\n    height: 0;\n    display: none;\n}\n\n.abc-folder .abc-folder-arrow {\n    width: 1.5em;\n    vertical-align: middle;\n}\n\n/* Disabled styles */\n\n.abc-folder.disabled {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n}\n\n.abc-folder.disabled + .abc-folder-contents {\n    pointer-events: none;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               554: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ":root {\n    --interval-track-color: var(--color-component-background);\n    --interval-thumb-color: var(--color-component-foreground);\n    --interval-thumb-highlight: var(--color-component-active);\n\n    --interval-track-color-disabled: var(--color-component-background-disabled);\n    --interval-thumb-color-disabled: var(--color-text-disabled);\n}\n\n.abc-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: var(--color-component-background);\n    background-color: var(--interval-track-color);\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.abc-interval-handle {\n    background-color: var(--color-component-foreground);\n    background-color: var(--interval-thumb-color);\n    position: absolute;\n    height: var(--size-component-height);\n    min-width: 1px;\n}\n.abc-interval-handle:focus {\n    background: var(--color-component-active);\n    background: var(--interval-thumb-highlight);\n}\n\n.disabled .abc-interval {\n    pointer-events: none;\n    background-color: var(--color-component-background-disabled);\n    background-color: var(--interval-track-color-disabled);\n}\n\n.disabled .abc-interval .abc-interval-handle {\n    background: var(--color-text-disabled);\n    background: var(--interval-thumb-color-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/interval.css"],
                       names: [],
                       mappings: "AAEA;IACI,yDAAyD;IACzD,yDAAyD;IACzD,yDAAyD;;IAEzD,2EAA2E;IAC3E,2DAA2D;AAC/D;;AAEA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,WAAW;IACX,mDAA6C;IAA7C,6CAA6C;IAC7C,iBAAiB;;IAEjB,2BAA2B;IAC3B,yBAAyB;IAEzB,sBAAsB;IACtB,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,mDAA6C;IAA7C,6CAA6C;IAC7C,kBAAkB;IAClB,oCAAoC;IACpC,cAAc;AAClB;AACA;IACI,yCAA2C;IAA3C,2CAA2C;AAC/C;;AAEA;IACI,oBAAoB;IACpB,4DAAsD;IAAtD,sDAAsD;AAC1D;;AAEA;IACI,sCAAgD;IAAhD,gDAAgD;AACpD",
                       sourcesContent: ['@import "../variables.css";\n\n:root {\n    --interval-track-color: var(--color-component-background);\n    --interval-thumb-color: var(--color-component-foreground);\n    --interval-thumb-highlight: var(--color-component-active);\n\n    --interval-track-color-disabled: var(--color-component-background-disabled);\n    --interval-thumb-color-disabled: var(--color-text-disabled);\n}\n\n.abc-interval {\n    -webkit-appearance: none;\n    position: absolute;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    width: 33%;\n    left: 54.5%;\n    background-color: var(--interval-track-color);\n    cursor: ew-resize;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n.abc-interval-handle {\n    background-color: var(--interval-thumb-color);\n    position: absolute;\n    height: var(--size-component-height);\n    min-width: 1px;\n}\n.abc-interval-handle:focus {\n    background: var(--interval-thumb-highlight);\n}\n\n.disabled .abc-interval {\n    pointer-events: none;\n    background-color: var(--interval-track-color-disabled);\n}\n\n.disabled .abc-interval .abc-interval-handle {\n    background: var(--interval-thumb-color-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               115: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ":root {\n    --range-track-color: var(--color-component-background);\n    --range-thumb-color: var(--color-component-foreground);\n    --range-thumb-highlight: var(--color-component-active);\n\n    --range-track-color-disabled: var(--color-component-background-disabled);\n    --range-thumb-color-disabled: var(--color-text-disabled);\n}\n\ninput[type=range].abc-range {\n    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */\n    -webkit-appearance: none;\n    width: 100%;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n    border: none;\n    background-color: transparent;\n}\n\n.disabled input[type=range].abc-range {\n    pointer-events: none;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].abc-range:focus {\n    outline: none;\n}\ninput[type=range].abc-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].abc-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--color-component-background);\n    background: var(--range-track-color);\n}\ninput[type=range].abc-range::-webkit-slider-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--color-component-foreground);\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n    border: 0;\n}\ninput[type=range].abc-range:focus::-webkit-slider-runnable-track {\n    background: var(--color-component-active);\n    background: var(--range-thumb-highlight);\n    outline: none;\n}\n\n.disabled input[type=range].abc-range::-webkit-slider-runnable-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--color-component-background-disabled);\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].abc-range::-webkit-slider-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n}\n\n/* Gecko */\ninput[type=range].abc-range::-moz-range-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--color-component-background);\n    background: var(--range-track-color);\n}\ninput[type=range].abc-range:focus::-moz-range-track {\n    background: var(--color-component-active);\n    background: var(--range-thumb-highlight);\n}\ninput[type=range].abc-range::-moz-range-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--color-component-foreground);\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n.disabled input[type=range].abc-range::-moz-range-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--color-component-background-disabled);\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].abc-range::-moz-range-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n    background: var(--range-thumb-color-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/range.css"],
                       names: [],
                       mappings: "AAEA;IACI,sDAAsD;IACtD,sDAAsD;IACtD,sDAAsD;;IAEtD,wEAAwE;IACxE,wDAAwD;AAC5D;;AAEA;IACI,kBAAkB,EAAE,iGAAiG;IACrH,wBAAwB;IACxB,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,UAAU;IACV,qBAAqB;;IAErB,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,oBAAoB;AACxB;;AAEA,kDAAkD;AAClD;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;AAEA,WAAW;AACX;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,wBAAwB;IACxB,eAAe;IACf,SAAS;AACb;AACA;IACI,yCAAwC;IAAxC,wCAAwC;IACxC,aAAa;AACjB;;AAEA,yEAAyE,mBAAmB;IACxF,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,gEAAgE,mBAAmB;IAC/E,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA,UAAU;AACV;IACI,WAAW;IACX,oCAAoC;IACpC,iBAAiB;IACjB,6CAAoC;IAApC,oCAAoC;AACxC;AACA;IACI,yCAAwC;IAAxC,wCAAwC;AAC5C;AACA;IACI,oCAAoC;IACpC,WAAW;IACX,6CAAoC;IAApC,oCAAoC;IACpC,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;AACpB;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sDAA6C;IAA7C,6CAA6C;AACjD;;AAEA,4DAA4D,mBAAmB;IAC3E,oBAAoB;IACpB,sCAA6C;IAA7C,6CAA6C;AACjD",
                       sourcesContent: ["@import \"../variables.css\";\n\n:root {\n    --range-track-color: var(--color-component-background);\n    --range-thumb-color: var(--color-component-foreground);\n    --range-thumb-highlight: var(--color-component-active);\n\n    --range-track-color-disabled: var(--color-component-background-disabled);\n    --range-thumb-color-disabled: var(--color-text-disabled);\n}\n\ninput[type=range].abc-range {\n    position: absolute; /* Gets rid of weird spacing below slider that I can't figure out the source of, seems internal */\n    -webkit-appearance: none;\n    width: 100%;\n    height: var(--size-component-height);\n    margin: 0px 0;\n    padding: 0;\n    display: inline-block;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n    border: none;\n    background-color: transparent;\n}\n\n.disabled input[type=range].abc-range {\n    pointer-events: none;\n}\n\n/* Remove outlines since we'll be adding our own */\ninput[type=range].abc-range:focus {\n    outline: none;\n}\ninput[type=range].abc-range::-moz-focus-outer {\n    border: 0;\n}\n\n/* Webkit */\ninput[type=range].abc-range::-webkit-slider-runnable-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--range-track-color);\n}\ninput[type=range].abc-range::-webkit-slider-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    -webkit-appearance: none;\n    margin-top: 0px;\n    border: 0;\n}\ninput[type=range].abc-range:focus::-webkit-slider-runnable-track {\n    background: var(--range-thumb-highlight);\n    outline: none;\n}\n\n.disabled input[type=range].abc-range::-webkit-slider-runnable-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].abc-range::-webkit-slider-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--color-text-disabled);\n}\n\n/* Gecko */\ninput[type=range].abc-range::-moz-range-track {\n    width: 100%;\n    height: var(--size-component-height);\n    cursor: ew-resize;\n    background: var(--range-track-color);\n}\ninput[type=range].abc-range:focus::-moz-range-track {\n    background: var(--range-thumb-highlight);\n}\ninput[type=range].abc-range::-moz-range-thumb {\n    height: var(--size-component-height);\n    width: 10px;\n    background: var(--range-thumb-color);\n    cursor: ew-resize;\n    border: none;\n    border-radius: 0;\n}\n\n.disabled input[type=range].abc-range::-moz-range-track { /* Disabled track */\n    pointer-events: none;\n    background: var(--range-track-color-disabled);\n}\n\n.disabled input[type=range].abc-range::-moz-range-thumb { /* Disabled thumb */\n    pointer-events: none;\n    background: var(--range-thumb-color-disabled);\n}"],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               247: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - var(--size-label-width));\n    padding-left: 1.5%;\n    height: var(--size-component-height);\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: var(--color-component-background);\n    color: var(--color-text-secondary);\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we're providing our own */\n.abc-select-dropdown:focus {\n    outline: none;\n}\n.abc-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.abc-select-dropdown:focus,\n.abc-select-dropdown:hover {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-select-dropdown::-ms-expand {\n    display:none;\n}\n.abc-select-triangle {\n    content: ' ';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: var(--size-component-height);\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.abc-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid var(--color-text-secondary);\n    border-top: 0px transparent;\n}\n\n.abc-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid var(--color-text-secondary);\n    border-bottom: 0px transparent;\n}\n\n.abc-select-triangle--up-highlight {\n    border-bottom-color: var(--color-text-hover);\n}\n\n.abc-select-triangle--down-highlight {\n    border-top-color: var(--color-text-hover);\n}\n\n/* Disabled styles */\n\n.disabled .abc-select-dropdown {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}\n\n.disabled *[class^=\"abc-select-triangle\"] {\n    border-color: var(--color-text-disabled);\n}\n", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/select.css"],
                       names: [],
                       mappings: "AAEA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,2CAA2C;IAC3C,kBAAkB;IAClB,oCAAoC;IACpC,YAAY;IACZ,gBAAgB;IAChB,wBAAwB;IACxB,qBAAqB;IACrB,kBAAkB;IAClB,gBAAgB;IAChB,oBAAoB;IACpB,mDAAmD;IACnD,kCAAkC;IAClC,iCAAiC;IACjC,sCAAsC;IACtC,yCAAyC;AAC7C;;AAEA,0DAA0D;AAC1D;IACI,aAAa;AACjB;AACA;IACI,SAAS;AACb;;;AAGA;;IAEI,8BAA8B;IAC9B,mDAAmD;AACvD;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,mCAAmC;IACnC,kCAAkC;IAClC,yCAAyC;IACzC,kBAAkB;IAClB,WAAW;IACX,UAAU;IACV,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,oDAAoD;IACpD,2BAA2B;AAC/B;;AAEA;IACI,QAAQ;IACR,iDAAiD;IACjD,8BAA8B;AAClC;;AAEA;IACI,4CAA4C;AAChD;;AAEA;IACI,yCAAyC;AAC7C;;AAEA,oBAAoB;;AAEpB;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE;;AAEA;IACI,wCAAwC;AAC5C",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-select-dropdown {\n    display: inline-block;\n    position: absolute;\n    width: calc(100% - var(--size-label-width));\n    padding-left: 1.5%;\n    height: var(--size-component-height);\n    border: none;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    -o-appearance:none;\n    appearance: none;\n    font-family: inherit;\n    background-color: var(--color-component-background);\n    color: var(--color-text-secondary);\n    box-sizing: border-box !important;\n    -moz-box-sizing: border-box !important;\n    -webkit-box-sizing: border-box !important;\n}\n\n/* Disable default outline since we\'re providing our own */\n.abc-select-dropdown:focus {\n    outline: none;\n}\n.abc-select-dropdown::-moz-focus-inner {\n    border: 0;\n}\n\n\n.abc-select-dropdown:focus,\n.abc-select-dropdown:hover {\n    color: var(--color-text-hover);\n    background-color: var(--color-component-foreground);\n}\n\n.abc-select-dropdown::-ms-expand {\n    display:none;\n}\n.abc-select-triangle {\n    content: \' \';\n    border-right: 3px solid transparent;\n    border-left: 3px solid transparent;\n    line-height: var(--size-component-height);\n    position: absolute;\n    right: 2.5%;\n    z-index: 1;\n    pointer-events: none;\n}\n\n.abc-select-triangle--up {\n    bottom: 55%;\n    border-bottom: 5px solid var(--color-text-secondary);\n    border-top: 0px transparent;\n}\n\n.abc-select-triangle--down {\n    top: 55%;\n    border-top: 5px solid var(--color-text-secondary);\n    border-bottom: 0px transparent;\n}\n\n.abc-select-triangle--up-highlight {\n    border-bottom-color: var(--color-text-hover);\n}\n\n.abc-select-triangle--down-highlight {\n    border-top-color: var(--color-text-hover);\n}\n\n/* Disabled styles */\n\n.disabled .abc-select-dropdown {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}\n\n.disabled *[class^="abc-select-triangle"] {\n    border-color: var(--color-text-disabled);\n}\n'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               532: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-text-input {\n    position: absolute;\n    padding-left: 6px;\n    height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    background: var(--color-component-background);\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box !important;\n    resize: vertical;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n}\n\n.abc-text-input:focus {\n    outline: none;\n}\n\n.disabled .abc-text-input {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/text.css"],
                       names: [],
                       mappings: "AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,oCAAoC;IACpC,2CAA2C;IAC3C,YAAY;IACZ,6CAA6C;IAC7C,kCAAkC;IAClC,oBAAoB;IACpB,iCAAiC;IACjC,gBAAgB;;IAEhB,yBAAyB;IACzB,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,iCAAiC;IACjC,4DAA4D;AAChE",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-text-input {\n    position: absolute;\n    padding-left: 6px;\n    height: var(--size-component-height);\n    width: calc(100% - var(--size-label-width));\n    border: none;\n    background: var(--color-component-background);\n    color: var(--color-text-secondary);\n    font-family: inherit;\n    box-sizing: border-box !important;\n    resize: vertical;\n\n    /* Fixes for Safari iOS */\n    border-radius: 0;\n}\n\n.abc-text-input:focus {\n    outline: none;\n}\n\n.disabled .abc-text-input {\n    pointer-events: none;\n    color: var(--color-text-disabled);\n    background-color: var(--color-component-background-disabled);\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               146: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-title {\n    box-sizing: border-box;\n    width: 100%;\n    display: inline-block;\n    height: var(--size-component-height);\n    vertical-align: top;\n}\n\n.abc-title-text {\n    display: inline-block;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-left: 5px;\n    padding-right: 5px;\n    background-color: var(--color-text-primary);\n    color: var(--color-panel-background);\n}\n\n/* Disabled style */\n\n.disabled .abc-title-text {\n    background-color: var(--color-text-disabled);\n}\n\n/* Add a bit of top margin if immediately after another component */\n\n.abc-component-container > .abc-title {\n    margin-top: 0.5em;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/components/public/title.css"],
                       names: [],
                       mappings: "AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,qBAAqB;IACrB,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,oCAAoC;IACpC,yCAAyC;IACzC,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,oCAAoC;AACxC;;AAEA,mBAAmB;;AAEnB;IACI,4CAA4C;AAChD;;AAEA,mEAAmE;;AAEnE;IACI,iBAAiB;AACrB",
                       sourcesContent: ['@import "../variables.css";\n\n.abc-title {\n    box-sizing: border-box;\n    width: 100%;\n    display: inline-block;\n    height: var(--size-component-height);\n    vertical-align: top;\n}\n\n.abc-title-text {\n    display: inline-block;\n    height: var(--size-component-height);\n    line-height: var(--size-component-height);\n    padding-left: 5px;\n    padding-right: 5px;\n    background-color: var(--color-text-primary);\n    color: var(--color-panel-background);\n}\n\n/* Disabled style */\n\n.disabled .abc-title-text {\n    background-color: var(--color-text-disabled);\n}\n\n/* Add a bit of top margin if immediately after another component */\n\n.abc-component-container > .abc-title {\n    margin-top: 0.5em;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               72: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => l
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i),
                       c = t(19),
                       s = a()(r());
                   s.i(c.Z), s.push([n.id, ".abc-container {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/* Sub-elements of abc-container should appear over anything else. */\n.abc-container > * {\n    z-index: 9999;\n}\n\n.abc-container, .abc-container * {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.abc-container-overlay {\n    height: 100%;\n}\n\n.abc-container-above {\n    height: calc(100% + var(--size-menu-bar-height));\n    bottom: 0;\n}\n\n/* Overlay container when fullscreen */\n.abc-fullscreen .abc-container {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}", "", {
                       version: 3,
                       sources: ["webpack://./src/gui.css"],
                       names: [],
                       mappings: "AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,YAAY;AAChB;;AAEA,sEAAsE;AACtE;IACI,aAAa;AACjB;;AAEA;IACI,+BAA+B;IAC/B,2BAA2B;IAC3B,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gDAAgD;IAChD,SAAS;AACb;;AAEA,sCAAsC;AACtC;IACI,eAAe;IACf,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;AAChB",
                       sourcesContent: ['@import "./components/variables.css";\n\n.abc-container {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n/* Sub-elements of abc-container should appear over anything else. */\n.abc-container > * {\n    z-index: 9999;\n}\n\n.abc-container, .abc-container * {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n    font-weight: var(--font-weight);\n}\n\n.abc-container-overlay {\n    height: 100%;\n}\n\n.abc-container-above {\n    height: calc(100% + var(--size-menu-bar-height));\n    bottom: 0;\n}\n\n/* Overlay container when fullscreen */\n.abc-fullscreen .abc-container {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}'],
                       sourceRoot: ""
                   }]);
                   const l = s
               },
               19: (n, e, t) => {
                   "use strict";
                   t.d(e, {
                       Z: () => c
                   });
                   var o = t(537),
                       r = t.n(o),
                       i = t(645),
                       a = t.n(i)()(r());
                   a.push([n.id, ':root {\n    --color-menu-bar-background: "black";\n    --color-menu-bar-text: "black";\n    --color-panel-background: "black";\n\n    --color-component-background: "black";\n    --color-component-background-hover: "black";\n    --color-component-background-disabled: "black";\n    --color-component-foreground: "black";\n    --color-component-active: "black";\n\n    --color-text-primary: "black";\n    --color-text-secondary: "black";\n    --color-text-hover: "black";\n    --color-text-active: "black";\n    --color-text-disabled: "black";\n\n    --size-menu-bar-height: 25px;\n    --size-component-height: 2rem;\n    --size-component-spacing: 5px;\n    --size-label-width: 42%;\n\n    --font-family: ui-monospace, monospace;\n    --font-height: 11px;\n    --font-weight: 400;\n}\n', "", {
                       version: 3,
                       sources: ["webpack://./src/components/variables.css"],
                       names: [],
                       mappings: "AAAA;IACI,oCAAoC;IACpC,8BAA8B;IAC9B,iCAAiC;;IAEjC,qCAAqC;IACrC,2CAA2C;IAC3C,8CAA8C;IAC9C,qCAAqC;IACrC,iCAAiC;;IAEjC,6BAA6B;IAC7B,+BAA+B;IAC/B,2BAA2B;IAC3B,4BAA4B;IAC5B,8BAA8B;;IAE9B,4BAA4B;IAC5B,6BAA6B;IAC7B,6BAA6B;IAC7B,uBAAuB;;IAEvB,sCAAsC;IACtC,mBAAmB;IACnB,kBAAkB;AACtB",
                       sourcesContent: [':root {\n    --color-menu-bar-background: "black";\n    --color-menu-bar-text: "black";\n    --color-panel-background: "black";\n\n    --color-component-background: "black";\n    --color-component-background-hover: "black";\n    --color-component-background-disabled: "black";\n    --color-component-foreground: "black";\n    --color-component-active: "black";\n\n    --color-text-primary: "black";\n    --color-text-secondary: "black";\n    --color-text-hover: "black";\n    --color-text-active: "black";\n    --color-text-disabled: "black";\n\n    --size-menu-bar-height: 25px;\n    --size-component-height: 2rem;\n    --size-component-spacing: 5px;\n    --size-label-width: 42%;\n\n    --font-family: ui-monospace, monospace;\n    --font-height: 11px;\n    --font-weight: 400;\n}\n'],
                       sourceRoot: ""
                   }]);
                   const c = a
               },
               645: n => {
                   "use strict";
                   n.exports = function(n) {
                       var e = [];
                       return e.toString = function() {
                           return this.map((function(e) {
                               var t = "",
                                   o = void 0 !== e[5];
                               return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), o && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), o && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
                           })).join("")
                       }, e.i = function(n, t, o, r, i) {
                           "string" == typeof n && (n = [
                               [null, n, void 0]
                           ]);
                           var a = {};
                           if (o)
                               for (var c = 0; c < this.length; c++) {
                                   var s = this[c][0];
                                   null != s && (a[s] = !0)
                               }
                           for (var l = 0; l < n.length; l++) {
                               var u = [].concat(n[l]);
                               o && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), t && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = t) : u[2] = t), r && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = r) : u[4] = "".concat(r)), e.push(u))
                           }
                       }, e
                   }
               },
               537: n => {
                   "use strict";
                   n.exports = function(n) {
                       var e = n[1],
                           t = n[3];
                       if (!t) return e;
                       if ("function" == typeof btoa) {
                           var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
                               r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),
                               i = "/*# ".concat(r, " */"),
                               a = t.sources.map((function(n) {
                                   return "/*# sourceURL=".concat(t.sourceRoot || "").concat(n, " */")
                               }));
                           return [e].concat(a).concat([i]).join("\n")
                       }
                       return [e].join("\n")
                   }
               },
               879: (n, e, t) => {
                   var o = t(236),
                       r = t(189),
                       i = {
                           float: "cssFloat"
                       },
                       a = t(379);

                   function c(n, e, t) {
                       var c = i[e];
                       if (void 0 === c && (c = function(n) {
                               var e = r(n),
                                   t = o(e);
                               return i[e] = i[n] = i[t] = t, t
                           }(e)), c) {
                           if (void 0 === t) return n.style[c];
                           n.style[c] = a(c, t)
                       }
                   }

                   function s(n, e) {
                       for (var t in e) e.hasOwnProperty(t) && c(n, t, e[t])
                   }

                   function l() {
                       2 === arguments.length ? "string" == typeof arguments[1] ? arguments[0].style.cssText = arguments[1] : s(arguments[0], arguments[1]) : c(arguments[0], arguments[1], arguments[2])
                   }
                   n.exports = l, n.exports.set = l, n.exports.get = function(n, e) {
                       return Array.isArray(e) ? e.reduce((function(e, t) {
                           return e[t] = c(n, t || ""), e
                       }), {}) : c(n, e || "")
                   }
               },
               186: n => {
                   var e = [],
                       t = [];

                   function o(n, o) {
                       if (o = o || {}, void 0 === n) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
                       var r, i = !0 === o.prepend ? "prepend" : "append",
                           a = void 0 !== o.container ? o.container : document.querySelector("head"),
                           c = e.indexOf(a);
                       return -1 === c && (c = e.push(a) - 1, t[c] = {}), void 0 !== t[c] && void 0 !== t[c][i] ? r = t[c][i] : (r = t[c][i] = function() {
                           var n = document.createElement("style");
                           return n.setAttribute("type", "text/css"), n
                       }(), "prepend" === i ? a.insertBefore(r, a.childNodes[0]) : a.appendChild(r)), 65279 === n.charCodeAt(0) && (n = n.substr(1, n.length)), r.styleSheet ? r.styleSheet.cssText += n : r.textContent += n, r
                   }
                   n.exports = o, n.exports.insertCss = o
               },
               114: function(n, e) {
                   ! function(t) {
                       "use strict";

                       function o(n) {
                           return "number" == typeof n && !isNaN(n) || !!(n = (n || "").toString().trim()) && !isNaN(n)
                       }
                       n.exports && (e = n.exports = o), e.isNumeric = o
                   }()
               },
               236: n => {
                   var e = null,
                       t = ["Webkit", "Moz", "O", "ms"];
                   n.exports = function(n) {
                       e || (e = document.createElement("div"));
                       var o = e.style;
                       if (n in o) return n;
                       for (var r = n.charAt(0).toUpperCase() + n.slice(1), i = t.length; i >= 0; i--) {
                           var a = t[i] + r;
                           if (a in o) return a
                       }
                       return !1
                   }
               },
               577: n => {
                   ! function() {
                       "use strict";
                       var e = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
                           t = n.exports,
                           o = function() {
                               for (var n, t = [
                                       ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                                       ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                                       ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                                       ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                                       ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                                   ], o = 0, r = t.length, i = {}; o < r; o++)
                                   if ((n = t[o]) && n[1] in e) {
                                       for (o = 0; o < n.length; o++) i[t[0][o]] = n[o];
                                       return i
                                   } return !1
                           }(),
                           r = {
                               change: o.fullscreenchange,
                               error: o.fullscreenerror
                           },
                           i = {
                               request: function(n) {
                                   return new Promise(function(t, r) {
                                       var i = function() {
                                           this.off("change", i), t()
                                       }.bind(this);
                                       this.on("change", i), n = n || e.documentElement, Promise.resolve(n[o.requestFullscreen]()).catch(r)
                                   }.bind(this))
                               },
                               exit: function() {
                                   return new Promise(function(n, t) {
                                       if (this.isFullscreen) {
                                           var r = function() {
                                               this.off("change", r), n()
                                           }.bind(this);
                                           this.on("change", r), Promise.resolve(e[o.exitFullscreen]()).catch(t)
                                       } else n()
                                   }.bind(this))
                               },
                               toggle: function(n) {
                                   return this.isFullscreen ? this.exit() : this.request(n)
                               },
                               onchange: function(n) {
                                   this.on("change", n)
                               },
                               onerror: function(n) {
                                   this.on("error", n)
                               },
                               on: function(n, t) {
                                   var o = r[n];
                                   o && e.addEventListener(o, t, !1)
                               },
                               off: function(n, t) {
                                   var o = r[n];
                                   o && e.removeEventListener(o, t, !1)
                               },
                               raw: o
                           };
                       o ? (Object.defineProperties(i, {
                           isFullscreen: {
                               get: function() {
                                   return Boolean(e[o.fullscreenElement])
                               }
                           },
                           element: {
                               enumerable: !0,
                               get: function() {
                                   return e[o.fullscreenElement]
                               }
                           },
                           isEnabled: {
                               enumerable: !0,
                               get: function() {
                                   return Boolean(e[o.fullscreenEnabled])
                               }
                           }
                       }), t ? n.exports = i : window.screenfull = i) : t ? n.exports = {
                           isEnabled: !1
                       } : window.screenfull = {
                           isEnabled: !1
                       }
                   }()
               },
               994: n => {
                   "use strict";
                   var e = [];

                   function t(n) {
                       for (var t = -1, o = 0; o < e.length; o++)
                           if (e[o].identifier === n) {
                               t = o;
                               break
                           } return t
                   }

                   function o(n, o) {
                       for (var i = {}, a = [], c = 0; c < n.length; c++) {
                           var s = n[c],
                               l = o.base ? s[0] + o.base : s[0],
                               u = i[l] || 0,
                               f = "".concat(l, " ").concat(u);
                           i[l] = u + 1;
                           var p = t(f),
                               A = {
                                   css: s[1],
                                   media: s[2],
                                   sourceMap: s[3],
                                   supports: s[4],
                                   layer: s[5]
                               };
                           if (-1 !== p) e[p].references++, e[p].updater(A);
                           else {
                               var d = r(A, o);
                               o.byIndex = c, e.splice(c, 0, {
                                   identifier: f,
                                   updater: d,
                                   references: 1
                               })
                           }
                           a.push(f)
                       }
                       return a
                   }

                   function r(n, e) {
                       var t = e.domAPI(e);
                       return t.update(n),
                           function(e) {
                               if (e) {
                                   if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
                                   t.update(n = e)
                               } else t.remove()
                           }
                   }
                   n.exports = function(n, r) {
                       var i = o(n = n || [], r = r || {});
                       return function(n) {
                           n = n || [];
                           for (var a = 0; a < i.length; a++) {
                               var c = t(i[a]);
                               e[c].references--
                           }
                           for (var s = o(n, r), l = 0; l < i.length; l++) {
                               var u = t(i[l]);
                               0 === e[u].references && (e[u].updater(), e.splice(u, 1))
                           }
                           i = s
                       }
                   }
               },
               569: n => {
                   "use strict";
                   var e = {};
                   n.exports = function(n, t) {
                       var o = function(n) {
                           if (void 0 === e[n]) {
                               var t = document.querySelector(n);
                               if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                                   t = t.contentDocument.head
                               } catch (n) {
                                   t = null
                               }
                               e[n] = t
                           }
                           return e[n]
                       }(n);
                       if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                       o.appendChild(t)
                   }
               },
               216: n => {
                   "use strict";
                   n.exports = function(n) {
                       var e = document.createElement("style");
                       return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
                   }
               },
               565: (n, e, t) => {
                   "use strict";
                   n.exports = function(n) {
                       var e = t.nc;
                       e && n.setAttribute("nonce", e)
                   }
               },
               795: n => {
                   "use strict";
                   n.exports = function(n) {
                       var e = n.insertStyleElement(n);
                       return {
                           update: function(t) {
                               ! function(n, e, t) {
                                   var o = "";
                                   t.supports && (o += "@supports (".concat(t.supports, ") {")), t.media && (o += "@media ".concat(t.media, " {"));
                                   var r = void 0 !== t.layer;
                                   r && (o += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), o += t.css, r && (o += "}"), t.media && (o += "}"), t.supports && (o += "}");
                                   var i = t.sourceMap;
                                   i && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleTagTransform(o, n, e.options)
                               }(e, n, t)
                           },
                           remove: function() {
                               ! function(n) {
                                   if (null === n.parentNode) return !1;
                                   n.parentNode.removeChild(n)
                               }(e)
                           }
                       }
                   }
               },
               589: n => {
                   "use strict";
                   n.exports = function(n, e) {
                       if (e.styleSheet) e.styleSheet.cssText = n;
                       else {
                           for (; e.firstChild;) e.removeChild(e.firstChild);
                           e.appendChild(document.createTextNode(n))
                       }
                   }
               },
               621: (n, e, t) => {
                   var o;
                   ! function(r) {
                       var i = /^\s+/,
                           a = /\s+$/,
                           c = 0,
                           s = r.round,
                           l = r.min,
                           u = r.max,
                           f = r.random;

                       function p(n, e) {
                           if (e = e || {}, (n = n || "") instanceof p) return n;
                           if (!(this instanceof p)) return new p(n, e);
                           var t = function(n) {
                               var e, t, o, c = {
                                       r: 0,
                                       g: 0,
                                       b: 0
                                   },
                                   s = 1,
                                   f = null,
                                   p = null,
                                   A = null,
                                   d = !1,
                                   h = !1;
                               return "string" == typeof n && (n = function(n) {
                                   n = n.replace(i, "").replace(a, "").toLowerCase();
                                   var e, t = !1;
                                   if (z[n]) n = z[n], t = !0;
                                   else if ("transparent" == n) return {
                                       r: 0,
                                       g: 0,
                                       b: 0,
                                       a: 0,
                                       format: "name"
                                   };
                                   return (e = W.rgb.exec(n)) ? {
                                       r: e[1],
                                       g: e[2],
                                       b: e[3]
                                   } : (e = W.rgba.exec(n)) ? {
                                       r: e[1],
                                       g: e[2],
                                       b: e[3],
                                       a: e[4]
                                   } : (e = W.hsl.exec(n)) ? {
                                       h: e[1],
                                       s: e[2],
                                       l: e[3]
                                   } : (e = W.hsla.exec(n)) ? {
                                       h: e[1],
                                       s: e[2],
                                       l: e[3],
                                       a: e[4]
                                   } : (e = W.hsv.exec(n)) ? {
                                       h: e[1],
                                       s: e[2],
                                       v: e[3]
                                   } : (e = W.hsva.exec(n)) ? {
                                       h: e[1],
                                       s: e[2],
                                       v: e[3],
                                       a: e[4]
                                   } : (e = W.hex8.exec(n)) ? {
                                       r: j(e[1]),
                                       g: j(e[2]),
                                       b: j(e[3]),
                                       a: H(e[4]),
                                       format: t ? "name" : "hex8"
                                   } : (e = W.hex6.exec(n)) ? {
                                       r: j(e[1]),
                                       g: j(e[2]),
                                       b: j(e[3]),
                                       format: t ? "name" : "hex"
                                   } : (e = W.hex4.exec(n)) ? {
                                       r: j(e[1] + "" + e[1]),
                                       g: j(e[2] + "" + e[2]),
                                       b: j(e[3] + "" + e[3]),
                                       a: H(e[4] + "" + e[4]),
                                       format: t ? "name" : "hex8"
                                   } : !!(e = W.hex3.exec(n)) && {
                                       r: j(e[1] + "" + e[1]),
                                       g: j(e[2] + "" + e[2]),
                                       b: j(e[3] + "" + e[3]),
                                       format: t ? "name" : "hex"
                                   }
                               }(n)), "object" == typeof n && (q(n.r) && q(n.g) && q(n.b) ? (e = n.r, t = n.g, o = n.b, c = {
                                   r: 255 * P(e, 255),
                                   g: 255 * P(t, 255),
                                   b: 255 * P(o, 255)
                               }, d = !0, h = "%" === String(n.r).substr(-1) ? "prgb" : "rgb") : q(n.h) && q(n.s) && q(n.v) ? (f = M(n.s), p = M(n.v), c = function(n, e, t) {
                                   n = 6 * P(n, 360), e = P(e, 100), t = P(t, 100);
                                   var o = r.floor(n),
                                       i = n - o,
                                       a = t * (1 - e),
                                       c = t * (1 - i * e),
                                       s = t * (1 - (1 - i) * e),
                                       l = o % 6;
                                   return {
                                       r: 255 * [t, c, a, a, s, t][l],
                                       g: 255 * [s, t, t, c, a, a][l],
                                       b: 255 * [a, a, s, t, t, c][l]
                                   }
                               }(n.h, f, p), d = !0, h = "hsv") : q(n.h) && q(n.s) && q(n.l) && (f = M(n.s), A = M(n.l), c = function(n, e, t) {
                                   var o, r, i;

                                   function a(n, e, t) {
                                       return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? n + 6 * (e - n) * t : t < .5 ? e : t < 2 / 3 ? n + (e - n) * (2 / 3 - t) * 6 : n
                                   }
                                   if (n = P(n, 360), e = P(e, 100), t = P(t, 100), 0 === e) o = r = i = t;
                                   else {
                                       var c = t < .5 ? t * (1 + e) : t + e - t * e,
                                           s = 2 * t - c;
                                       o = a(s, c, n + 1 / 3), r = a(s, c, n), i = a(s, c, n - 1 / 3)
                                   }
                                   return {
                                       r: 255 * o,
                                       g: 255 * r,
                                       b: 255 * i
                                   }
                               }(n.h, f, A), d = !0, h = "hsl"), n.hasOwnProperty("a") && (s = n.a)), s = O(s), {
                                   ok: d,
                                   format: n.format || h,
                                   r: l(255, u(c.r, 0)),
                                   g: l(255, u(c.g, 0)),
                                   b: l(255, u(c.b, 0)),
                                   a: s
                               }
                           }(n);
                           this._originalInput = n, this._r = t.r, this._g = t.g, this._b = t.b, this._a = t.a, this._roundA = s(100 * this._a) / 100, this._format = e.format || t.format, this._gradientType = e.gradientType, this._r < 1 && (this._r = s(this._r)), this._g < 1 && (this._g = s(this._g)), this._b < 1 && (this._b = s(this._b)), this._ok = t.ok, this._tc_id = c++
                       }

                       function A(n, e, t) {
                           n = P(n, 255), e = P(e, 255), t = P(t, 255);
                           var o, r, i = u(n, e, t),
                               a = l(n, e, t),
                               c = (i + a) / 2;
                           if (i == a) o = r = 0;
                           else {
                               var s = i - a;
                               switch (r = c > .5 ? s / (2 - i - a) : s / (i + a), i) {
                                   case n:
                                       o = (e - t) / s + (e < t ? 6 : 0);
                                       break;
                                   case e:
                                       o = (t - n) / s + 2;
                                       break;
                                   case t:
                                       o = (n - e) / s + 4
                               }
                               o /= 6
                           }
                           return {
                               h: o,
                               s: r,
                               l: c
                           }
                       }

                       function d(n, e, t) {
                           n = P(n, 255), e = P(e, 255), t = P(t, 255);
                           var o, r, i = u(n, e, t),
                               a = l(n, e, t),
                               c = i,
                               s = i - a;
                           if (r = 0 === i ? 0 : s / i, i == a) o = 0;
                           else {
                               switch (i) {
                                   case n:
                                       o = (e - t) / s + (e < t ? 6 : 0);
                                       break;
                                   case e:
                                       o = (t - n) / s + 2;
                                       break;
                                   case t:
                                       o = (n - e) / s + 4
                               }
                               o /= 6
                           }
                           return {
                               h: o,
                               s: r,
                               v: c
                           }
                       }

                       function h(n, e, t, o) {
                           var r = [L(s(n).toString(16)), L(s(e).toString(16)), L(s(t).toString(16))];
                           return o && r[0].charAt(0) == r[0].charAt(1) && r[1].charAt(0) == r[1].charAt(1) && r[2].charAt(0) == r[2].charAt(1) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("")
                       }

                       function g(n, e, t, o) {
                           return [L(T(o)), L(s(n).toString(16)), L(s(e).toString(16)), L(s(t).toString(16))].join("")
                       }

                       function b(n, e) {
                           e = 0 === e ? 0 : e || 10;
                           var t = p(n).toHsl();
                           return t.s -= e / 100, t.s = R(t.s), p(t)
                       }

                       function m(n, e) {
                           e = 0 === e ? 0 : e || 10;
                           var t = p(n).toHsl();
                           return t.s += e / 100, t.s = R(t.s), p(t)
                       }

                       function v(n) {
                           return p(n).desaturate(100)
                       }

                       function y(n, e) {
                           e = 0 === e ? 0 : e || 10;
                           var t = p(n).toHsl();
                           return t.l += e / 100, t.l = R(t.l), p(t)
                       }

                       function C(n, e) {
                           e = 0 === e ? 0 : e || 10;
                           var t = p(n).toRgb();
                           return t.r = u(0, l(255, t.r - s(-e / 100 * 255))), t.g = u(0, l(255, t.g - s(-e / 100 * 255))), t.b = u(0, l(255, t.b - s(-e / 100 * 255))), p(t)
                       }

                       function x(n, e) {
                           e = 0 === e ? 0 : e || 10;
                           var t = p(n).toHsl();
                           return t.l -= e / 100, t.l = R(t.l), p(t)
                       }

                       function k(n, e) {
                           var t = p(n).toHsl(),
                               o = (t.h + e) % 360;
                           return t.h = o < 0 ? 360 + o : o, p(t)
                       }

                       function B(n) {
                           var e = p(n).toHsl();
                           return e.h = (e.h + 180) % 360, p(e)
                       }

                       function w(n) {
                           var e = p(n).toHsl(),
                               t = e.h;
                           return [p(n), p({
                               h: (t + 120) % 360,
                               s: e.s,
                               l: e.l
                           }), p({
                               h: (t + 240) % 360,
                               s: e.s,
                               l: e.l
                           })]
                       }

                       function I(n) {
                           var e = p(n).toHsl(),
                               t = e.h;
                           return [p(n), p({
                               h: (t + 90) % 360,
                               s: e.s,
                               l: e.l
                           }), p({
                               h: (t + 180) % 360,
                               s: e.s,
                               l: e.l
                           }), p({
                               h: (t + 270) % 360,
                               s: e.s,
                               l: e.l
                           })]
                       }

                       function E(n) {
                           var e = p(n).toHsl(),
                               t = e.h;
                           return [p(n), p({
                               h: (t + 72) % 360,
                               s: e.s,
                               l: e.l
                           }), p({
                               h: (t + 216) % 360,
                               s: e.s,
                               l: e.l
                           })]
                       }

                       function _(n, e, t) {
                           e = e || 6, t = t || 30;
                           var o = p(n).toHsl(),
                               r = 360 / t,
                               i = [p(n)];
                           for (o.h = (o.h - (r * e >> 1) + 720) % 360; --e;) o.h = (o.h + r) % 360, i.push(p(o));
                           return i
                       }

                       function S(n, e) {
                           e = e || 6;
                           for (var t = p(n).toHsv(), o = t.h, r = t.s, i = t.v, a = [], c = 1 / e; e--;) a.push(p({
                               h: o,
                               s: r,
                               v: i
                           })), i = (i + c) % 1;
                           return a
                       }
                       p.prototype = {
                           isDark: function() {
                               return this.getBrightness() < 128
                           },
                           isLight: function() {
                               return !this.isDark()
                           },
                           isValid: function() {
                               return this._ok
                           },
                           getOriginalInput: function() {
                               return this._originalInput
                           },
                           getFormat: function() {
                               return this._format
                           },
                           getAlpha: function() {
                               return this._a
                           },
                           getBrightness: function() {
                               var n = this.toRgb();
                               return (299 * n.r + 587 * n.g + 114 * n.b) / 1e3
                           },
                           getLuminance: function() {
                               var n, e, t, o = this.toRgb();
                               return n = o.r / 255, e = o.g / 255, t = o.b / 255, .2126 * (n <= .03928 ? n / 12.92 : r.pow((n + .055) / 1.055, 2.4)) + .7152 * (e <= .03928 ? e / 12.92 : r.pow((e + .055) / 1.055, 2.4)) + .0722 * (t <= .03928 ? t / 12.92 : r.pow((t + .055) / 1.055, 2.4))
                           },
                           setAlpha: function(n) {
                               return this._a = O(n), this._roundA = s(100 * this._a) / 100, this
                           },
                           toHsv: function() {
                               var n = d(this._r, this._g, this._b);
                               return {
                                   h: 360 * n.h,
                                   s: n.s,
                                   v: n.v,
                                   a: this._a
                               }
                           },
                           toHsvString: function() {
                               var n = d(this._r, this._g, this._b),
                                   e = s(360 * n.h),
                                   t = s(100 * n.s),
                                   o = s(100 * n.v);
                               return 1 == this._a ? "hsv(" + e + ", " + t + "%, " + o + "%)" : "hsva(" + e + ", " + t + "%, " + o + "%, " + this._roundA + ")"
                           },
                           toHsl: function() {
                               var n = A(this._r, this._g, this._b);
                               return {
                                   h: 360 * n.h,
                                   s: n.s,
                                   l: n.l,
                                   a: this._a
                               }
                           },
                           toHslString: function() {
                               var n = A(this._r, this._g, this._b),
                                   e = s(360 * n.h),
                                   t = s(100 * n.s),
                                   o = s(100 * n.l);
                               return 1 == this._a ? "hsl(" + e + ", " + t + "%, " + o + "%)" : "hsla(" + e + ", " + t + "%, " + o + "%, " + this._roundA + ")"
                           },
                           toHex: function(n) {
                               return h(this._r, this._g, this._b, n)
                           },
                           toHexString: function(n) {
                               return "#" + this.toHex(n)
                           },
                           toHex8: function(n) {
                               return function(n, e, t, o, r) {
                                   var i = [L(s(n).toString(16)), L(s(e).toString(16)), L(s(t).toString(16)), L(T(o))];
                                   return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("")
                               }(this._r, this._g, this._b, this._a, n)
                           },
                           toHex8String: function(n) {
                               return "#" + this.toHex8(n)
                           },
                           toRgb: function() {
                               return {
                                   r: s(this._r),
                                   g: s(this._g),
                                   b: s(this._b),
                                   a: this._a
                               }
                           },
                           toRgbString: function() {
                               return 1 == this._a ? "rgb(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ")" : "rgba(" + s(this._r) + ", " + s(this._g) + ", " + s(this._b) + ", " + this._roundA + ")"
                           },
                           toPercentageRgb: function() {
                               return {
                                   r: s(100 * P(this._r, 255)) + "%",
                                   g: s(100 * P(this._g, 255)) + "%",
                                   b: s(100 * P(this._b, 255)) + "%",
                                   a: this._a
                               }
                           },
                           toPercentageRgbString: function() {
                               return 1 == this._a ? "rgb(" + s(100 * P(this._r, 255)) + "%, " + s(100 * P(this._g, 255)) + "%, " + s(100 * P(this._b, 255)) + "%)" : "rgba(" + s(100 * P(this._r, 255)) + "%, " + s(100 * P(this._g, 255)) + "%, " + s(100 * P(this._b, 255)) + "%, " + this._roundA + ")"
                           },
                           toName: function() {
                               return 0 === this._a ? "transparent" : !(this._a < 1) && (D[h(this._r, this._g, this._b, !0)] || !1)
                           },
                           toFilter: function(n) {
                               var e = "#" + g(this._r, this._g, this._b, this._a),
                                   t = e,
                                   o = this._gradientType ? "GradientType = 1, " : "";
                               if (n) {
                                   var r = p(n);
                                   t = "#" + g(r._r, r._g, r._b, r._a)
                               }
                               return "progid:DXImageTransform.Microsoft.gradient(" + o + "startColorstr=" + e + ",endColorstr=" + t + ")"
                           },
                           toString: function(n) {
                               var e = !!n;
                               n = n || this._format;
                               var t = !1,
                                   o = this._a < 1 && this._a >= 0;
                               return e || !o || "hex" !== n && "hex6" !== n && "hex3" !== n && "hex4" !== n && "hex8" !== n && "name" !== n ? ("rgb" === n && (t = this.toRgbString()), "prgb" === n && (t = this.toPercentageRgbString()), "hex" !== n && "hex6" !== n || (t = this.toHexString()), "hex3" === n && (t = this.toHexString(!0)), "hex4" === n && (t = this.toHex8String(!0)), "hex8" === n && (t = this.toHex8String()), "name" === n && (t = this.toName()), "hsl" === n && (t = this.toHslString()), "hsv" === n && (t = this.toHsvString()), t || this.toHexString()) : "name" === n && 0 === this._a ? this.toName() : this.toRgbString()
                           },
                           clone: function() {
                               return p(this.toString())
                           },
                           _applyModification: function(n, e) {
                               var t = n.apply(null, [this].concat([].slice.call(e)));
                               return this._r = t._r, this._g = t._g, this._b = t._b, this.setAlpha(t._a), this
                           },
                           lighten: function() {
                               return this._applyModification(y, arguments)
                           },
                           brighten: function() {
                               return this._applyModification(C, arguments)
                           },
                           darken: function() {
                               return this._applyModification(x, arguments)
                           },
                           desaturate: function() {
                               return this._applyModification(b, arguments)
                           },
                           saturate: function() {
                               return this._applyModification(m, arguments)
                           },
                           greyscale: function() {
                               return this._applyModification(v, arguments)
                           },
                           spin: function() {
                               return this._applyModification(k, arguments)
                           },
                           _applyCombination: function(n, e) {
                               return n.apply(null, [this].concat([].slice.call(e)))
                           },
                           analogous: function() {
                               return this._applyCombination(_, arguments)
                           },
                           complement: function() {
                               return this._applyCombination(B, arguments)
                           },
                           monochromatic: function() {
                               return this._applyCombination(S, arguments)
                           },
                           splitcomplement: function() {
                               return this._applyCombination(E, arguments)
                           },
                           triad: function() {
                               return this._applyCombination(w, arguments)
                           },
                           tetrad: function() {
                               return this._applyCombination(I, arguments)
                           }
                       }, p.fromRatio = function(n, e) {
                           if ("object" == typeof n) {
                               var t = {};
                               for (var o in n) n.hasOwnProperty(o) && (t[o] = "a" === o ? n[o] : M(n[o]));
                               n = t
                           }
                           return p(n, e)
                       }, p.equals = function(n, e) {
                           return !(!n || !e) && p(n).toRgbString() == p(e).toRgbString()
                       }, p.random = function() {
                           return p.fromRatio({
                               r: f(),
                               g: f(),
                               b: f()
                           })
                       }, p.mix = function(n, e, t) {
                           t = 0 === t ? 0 : t || 50;
                           var o = p(n).toRgb(),
                               r = p(e).toRgb(),
                               i = t / 100;
                           return p({
                               r: (r.r - o.r) * i + o.r,
                               g: (r.g - o.g) * i + o.g,
                               b: (r.b - o.b) * i + o.b,
                               a: (r.a - o.a) * i + o.a
                           })
                       }, p.readability = function(n, e) {
                           var t = p(n),
                               o = p(e);
                           return (r.max(t.getLuminance(), o.getLuminance()) + .05) / (r.min(t.getLuminance(), o.getLuminance()) + .05)
                       }, p.isReadable = function(n, e, t) {
                           var o, r, i, a, c, s = p.readability(n, e);
                           switch (r = !1, (i = t, "AA" !== (a = ((i = i || {
                                   level: "AA",
                                   size: "small"
                               }).level || "AA").toUpperCase()) && "AAA" !== a && (a = "AA"), "small" !== (c = (i.size || "small").toLowerCase()) && "large" !== c && (c = "small"), o = {
                                   level: a,
                                   size: c
                               }).level + o.size) {
                               case "AAsmall":
                               case "AAAlarge":
                                   r = s >= 4.5;
                                   break;
                               case "AAlarge":
                                   r = s >= 3;
                                   break;
                               case "AAAsmall":
                                   r = s >= 7
                           }
                           return r
                       }, p.mostReadable = function(n, e, t) {
                           var o, r, i, a, c = null,
                               s = 0;
                           r = (t = t || {}).includeFallbackColors, i = t.level, a = t.size;
                           for (var l = 0; l < e.length; l++)(o = p.readability(n, e[l])) > s && (s = o, c = p(e[l]));
                           return p.isReadable(n, c, {
                               level: i,
                               size: a
                           }) || !r ? c : (t.includeFallbackColors = !1, p.mostReadable(n, ["#fff", "#000"], t))
                       };
                       var z = p.names = {
                               aliceblue: "f0f8ff",
                               antiquewhite: "faebd7",
                               aqua: "0ff",
                               aquamarine: "7fffd4",
                               azure: "f0ffff",
                               beige: "f5f5dc",
                               bisque: "ffe4c4",
                               black: "000",
                               blanchedalmond: "ffebcd",
                               blue: "00f",
                               blueviolet: "8a2be2",
                               brown: "a52a2a",
                               burlywood: "deb887",
                               burntsienna: "ea7e5d",
                               cadetblue: "5f9ea0",
                               chartreuse: "7fff00",
                               chocolate: "d2691e",
                               coral: "ff7f50",
                               cornflowerblue: "6495ed",
                               cornsilk: "fff8dc",
                               crimson: "dc143c",
                               cyan: "0ff",
                               darkblue: "00008b",
                               darkcyan: "008b8b",
                               darkgoldenrod: "b8860b",
                               darkgray: "a9a9a9",
                               darkgreen: "006400",
                               darkgrey: "a9a9a9",
                               darkkhaki: "bdb76b",
                               darkmagenta: "8b008b",
                               darkolivegreen: "556b2f",
                               darkorange: "ff8c00",
                               darkorchid: "9932cc",
                               darkred: "8b0000",
                               darksalmon: "e9967a",
                               darkseagreen: "8fbc8f",
                               darkslateblue: "483d8b",
                               darkslategray: "2f4f4f",
                               darkslategrey: "2f4f4f",
                               darkturquoise: "00ced1",
                               darkviolet: "9400d3",
                               deeppink: "ff1493",
                               deepskyblue: "00bfff",
                               dimgray: "696969",
                               dimgrey: "696969",
                               dodgerblue: "1e90ff",
                               firebrick: "b22222",
                               floralwhite: "fffaf0",
                               forestgreen: "228b22",
                               fuchsia: "f0f",
                               gainsboro: "dcdcdc",
                               ghostwhite: "f8f8ff",
                               gold: "ffd700",
                               goldenrod: "daa520",
                               gray: "808080",
                               green: "008000",
                               greenyellow: "adff2f",
                               grey: "808080",
                               honeydew: "f0fff0",
                               hotpink: "ff69b4",
                               indianred: "cd5c5c",
                               indigo: "4b0082",
                               ivory: "fffff0",
                               khaki: "f0e68c",
                               lavender: "e6e6fa",
                               lavenderblush: "fff0f5",
                               lawngreen: "7cfc00",
                               lemonchiffon: "fffacd",
                               lightblue: "add8e6",
                               lightcoral: "f08080",
                               lightcyan: "e0ffff",
                               lightgoldenrodyellow: "fafad2",
                               lightgray: "d3d3d3",
                               lightgreen: "90ee90",
                               lightgrey: "d3d3d3",
                               lightpink: "ffb6c1",
                               lightsalmon: "ffa07a",
                               lightseagreen: "20b2aa",
                               lightskyblue: "87cefa",
                               lightslategray: "789",
                               lightslategrey: "789",
                               lightsteelblue: "b0c4de",
                               lightyellow: "ffffe0",
                               lime: "0f0",
                               limegreen: "32cd32",
                               linen: "faf0e6",
                               magenta: "f0f",
                               maroon: "800000",
                               mediumaquamarine: "66cdaa",
                               mediumblue: "0000cd",
                               mediumorchid: "ba55d3",
                               mediumpurple: "9370db",
                               mediumseagreen: "3cb371",
                               mediumslateblue: "7b68ee",
                               mediumspringgreen: "00fa9a",
                               mediumturquoise: "48d1cc",
                               mediumvioletred: "c71585",
                               midnightblue: "191970",
                               mintcream: "f5fffa",
                               mistyrose: "ffe4e1",
                               moccasin: "ffe4b5",
                               navajowhite: "ffdead",
                               navy: "000080",
                               oldlace: "fdf5e6",
                               olive: "808000",
                               olivedrab: "6b8e23",
                               orange: "ffa500",
                               orangered: "ff4500",
                               orchid: "da70d6",
                               palegoldenrod: "eee8aa",
                               palegreen: "98fb98",
                               paleturquoise: "afeeee",
                               palevioletred: "db7093",
                               papayawhip: "ffefd5",
                               peachpuff: "ffdab9",
                               peru: "cd853f",
                               pink: "ffc0cb",
                               plum: "dda0dd",
                               powderblue: "b0e0e6",
                               purple: "800080",
                               rebeccapurple: "663399",
                               red: "f00",
                               rosybrown: "bc8f8f",
                               royalblue: "4169e1",
                               saddlebrown: "8b4513",
                               salmon: "fa8072",
                               sandybrown: "f4a460",
                               seagreen: "2e8b57",
                               seashell: "fff5ee",
                               sienna: "a0522d",
                               silver: "c0c0c0",
                               skyblue: "87ceeb",
                               slateblue: "6a5acd",
                               slategray: "708090",
                               slategrey: "708090",
                               snow: "fffafa",
                               springgreen: "00ff7f",
                               steelblue: "4682b4",
                               tan: "d2b48c",
                               teal: "008080",
                               thistle: "d8bfd8",
                               tomato: "ff6347",
                               turquoise: "40e0d0",
                               violet: "ee82ee",
                               wheat: "f5deb3",
                               white: "fff",
                               whitesmoke: "f5f5f5",
                               yellow: "ff0",
                               yellowgreen: "9acd32"
                           },
                           D = p.hexNames = function(n) {
                               var e = {};
                               for (var t in n) n.hasOwnProperty(t) && (e[n[t]] = t);
                               return e
                           }(z);

                       function O(n) {
                           return n = parseFloat(n), (isNaN(n) || n < 0 || n > 1) && (n = 1), n
                       }

                       function P(n, e) {
                           (function(n) {
                               return "string" == typeof n && -1 != n.indexOf(".") && 1 === parseFloat(n)
                           })(n) && (n = "100%");
                           var t = function(n) {
                               return "string" == typeof n && -1 != n.indexOf("%")
                           }(n);
                           return n = l(e, u(0, parseFloat(n))), t && (n = parseInt(n * e, 10) / 100), r.abs(n - e) < 1e-6 ? 1 : n % e / parseFloat(e)
                       }

                       function R(n) {
                           return l(1, u(0, n))
                       }

                       function j(n) {
                           return parseInt(n, 16)
                       }

                       function L(n) {
                           return 1 == n.length ? "0" + n : "" + n
                       }

                       function M(n) {
                           return n <= 1 && (n = 100 * n + "%"), n
                       }

                       function T(n) {
                           return r.round(255 * parseFloat(n)).toString(16)
                       }

                       function H(n) {
                           return j(n) / 255
                       }
                       var Z, F, V, W = (F = "[\\s|\\(]+(" + (Z = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")\\s*\\)?", V = "[\\s|\\(]+(" + Z + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")[,|\\s]+(" + Z + ")\\s*\\)?", {
                           CSS_UNIT: new RegExp(Z),
                           rgb: new RegExp("rgb" + F),
                           rgba: new RegExp("rgba" + V),
                           hsl: new RegExp("hsl" + F),
                           hsla: new RegExp("hsla" + V),
                           hsv: new RegExp("hsv" + F),
                           hsva: new RegExp("hsva" + V),
                           hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                           hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                           hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                           hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                       });

                       function q(n) {
                           return !!W.CSS_UNIT.exec(n)
                       }
                       n.exports ? n.exports = p : void 0 === (o = function() {
                           return p
                       }.call(e, t, e, n)) || (n.exports = o)
                   }(Math)
               },
               189: (n, e, t) => {
                   var o = t(966);
                   n.exports = function(n) {
                       return o(n).replace(/\s(\w)/g, (function(n, e) {
                           return e.toUpperCase()
                       }))
                   }
               },
               788: n => {
                   n.exports = function(n) {
                       return e.test(n) ? n.toLowerCase() : t.test(n) ? (function(n) {
                           return n.replace(r, (function(n, e) {
                               return e ? " " + e : ""
                           }))
                       }(n) || n).toLowerCase() : o.test(n) ? function(n) {
                           return n.replace(i, (function(n, e, t) {
                               return e + " " + t.toLowerCase().split("").join(" ")
                           }))
                       }(n).toLowerCase() : n.toLowerCase()
                   };
                   var e = /\s/,
                       t = /(_|-|\.|:)/,
                       o = /([a-z][A-Z]|[A-Z][a-z])/,
                       r = /[\W_]+(.|$)/g,
                       i = /(.)([A-Z]+)/g
               },
               966: (n, e, t) => {
                   var o = t(788);
                   n.exports = function(n) {
                       return o(n).replace(/[\W_]+(.|$)/g, (function(n, e) {
                           return e ? " " + e : ""
                       })).trim()
                   }
               },
               877: (n, e, t) => {
                   var o = t(570),
                       r = t(171),
                       i = r;
                   i.v1 = o, i.v4 = r, n.exports = i
               },
               327: n => {
                   for (var e = [], t = 0; t < 256; ++t) e[t] = (t + 256).toString(16).substr(1);
                   n.exports = function(n, t) {
                       var o = t || 0,
                           r = e;
                       return [r[n[o++]], r[n[o++]], r[n[o++]], r[n[o++]], "-", r[n[o++]], r[n[o++]], "-", r[n[o++]], r[n[o++]], "-", r[n[o++]], r[n[o++]], "-", r[n[o++]], r[n[o++]], r[n[o++]], r[n[o++]], r[n[o++]], r[n[o++]]].join("")
                   }
               },
               217: n => {
                   var e = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
                   if (e) {
                       var t = new Uint8Array(16);
                       n.exports = function() {
                           return e(t), t
                       }
                   } else {
                       var o = new Array(16);
                       n.exports = function() {
                           for (var n, e = 0; e < 16; e++) 0 == (3 & e) && (n = 4294967296 * Math.random()), o[e] = n >>> ((3 & e) << 3) & 255;
                           return o
                       }
                   }
               },
               570: (n, e, t) => {
                   var o, r, i = t(217),
                       a = t(327),
                       c = 0,
                       s = 0;
                   n.exports = function(n, e, t) {
                       var l = e && t || 0,
                           u = e || [],
                           f = (n = n || {}).node || o,
                           p = void 0 !== n.clockseq ? n.clockseq : r;
                       if (null == f || null == p) {
                           var A = i();
                           null == f && (f = o = [1 | A[0], A[1], A[2], A[3], A[4], A[5]]), null == p && (p = r = 16383 & (A[6] << 8 | A[7]))
                       }
                       var d = void 0 !== n.msecs ? n.msecs : (new Date).getTime(),
                           h = void 0 !== n.nsecs ? n.nsecs : s + 1,
                           g = d - c + (h - s) / 1e4;
                       if (g < 0 && void 0 === n.clockseq && (p = p + 1 & 16383), (g < 0 || d > c) && void 0 === n.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                       c = d, s = h, r = p;
                       var b = (1e4 * (268435455 & (d += 122192928e5)) + h) % 4294967296;
                       u[l++] = b >>> 24 & 255, u[l++] = b >>> 16 & 255, u[l++] = b >>> 8 & 255, u[l++] = 255 & b;
                       var m = d / 4294967296 * 1e4 & 268435455;
                       u[l++] = m >>> 8 & 255, u[l++] = 255 & m, u[l++] = m >>> 24 & 15 | 16, u[l++] = m >>> 16 & 255, u[l++] = p >>> 8 | 128, u[l++] = 255 & p;
                       for (var v = 0; v < 6; ++v) u[l + v] = f[v];
                       return e || a(u)
                   }
               },
               171: (n, e, t) => {
                   var o = t(217),
                       r = t(327);
                   n.exports = function(n, e, t) {
                       var i = e && t || 0;
                       "string" == typeof n && (e = "binary" === n ? new Array(16) : null, n = null);
                       var a = (n = n || {}).random || (n.rng || o)();
                       if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, e)
                           for (var c = 0; c < 16; ++c) e[i + c] = a[c];
                       return e || r(a)
                   }
               },
               75: function(n, e, t) {
                   var o;
                   ! function(e) {
                       "use strict";

                       function r() {}
                       var i = r.prototype,
                           a = e.EventEmitter;

                       function c(n, e) {
                           for (var t = n.length; t--;)
                               if (n[t].listener === e) return t;
                           return -1
                       }

                       function s(n) {
                           return function() {
                               return this[n].apply(this, arguments)
                           }
                       }

                       function l(n) {
                           return "function" == typeof n || n instanceof RegExp || !(!n || "object" != typeof n) && l(n.listener)
                       }
                       i.getListeners = function(n) {
                           var e, t, o = this._getEvents();
                           if (n instanceof RegExp)
                               for (t in e = {}, o) o.hasOwnProperty(t) && n.test(t) && (e[t] = o[t]);
                           else e = o[n] || (o[n] = []);
                           return e
                       }, i.flattenListeners = function(n) {
                           var e, t = [];
                           for (e = 0; e < n.length; e += 1) t.push(n[e].listener);
                           return t
                       }, i.getListenersAsObject = function(n) {
                           var e, t = this.getListeners(n);
                           return t instanceof Array && ((e = {})[n] = t), e || t
                       }, i.addListener = function(n, e) {
                           if (!l(e)) throw new TypeError("listener must be a function");
                           var t, o = this.getListenersAsObject(n),
                               r = "object" == typeof e;
                           for (t in o) o.hasOwnProperty(t) && -1 === c(o[t], e) && o[t].push(r ? e : {
                               listener: e,
                               once: !1
                           });
                           return this
                       }, i.on = s("addListener"), i.addOnceListener = function(n, e) {
                           return this.addListener(n, {
                               listener: e,
                               once: !0
                           })
                       }, i.once = s("addOnceListener"), i.defineEvent = function(n) {
                           return this.getListeners(n), this
                       }, i.defineEvents = function(n) {
                           for (var e = 0; e < n.length; e += 1) this.defineEvent(n[e]);
                           return this
                       }, i.removeListener = function(n, e) {
                           var t, o, r = this.getListenersAsObject(n);
                           for (o in r) r.hasOwnProperty(o) && -1 !== (t = c(r[o], e)) && r[o].splice(t, 1);
                           return this
                       }, i.off = s("removeListener"), i.addListeners = function(n, e) {
                           return this.manipulateListeners(!1, n, e)
                       }, i.removeListeners = function(n, e) {
                           return this.manipulateListeners(!0, n, e)
                       }, i.manipulateListeners = function(n, e, t) {
                           var o, r, i = n ? this.removeListener : this.addListener,
                               a = n ? this.removeListeners : this.addListeners;
                           if ("object" != typeof e || e instanceof RegExp)
                               for (o = t.length; o--;) i.call(this, e, t[o]);
                           else
                               for (o in e) e.hasOwnProperty(o) && (r = e[o]) && ("function" == typeof r ? i.call(this, o, r) : a.call(this, o, r));
                           return this
                       }, i.removeEvent = function(n) {
                           var e, t = typeof n,
                               o = this._getEvents();
                           if ("string" === t) delete o[n];
                           else if (n instanceof RegExp)
                               for (e in o) o.hasOwnProperty(e) && n.test(e) && delete o[e];
                           else delete this._events;
                           return this
                       }, i.removeAllListeners = s("removeEvent"), i.emitEvent = function(n, e) {
                           var t, o, r, i, a = this.getListenersAsObject(n);
                           for (i in a)
                               if (a.hasOwnProperty(i))
                                   for (t = a[i].slice(0), r = 0; r < t.length; r++) !0 === (o = t[r]).once && this.removeListener(n, o.listener), o.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(n, o.listener);
                           return this
                       }, i.trigger = s("emitEvent"), i.emit = function(n) {
                           var e = Array.prototype.slice.call(arguments, 1);
                           return this.emitEvent(n, e)
                       }, i.setOnceReturnValue = function(n) {
                           return this._onceReturnValue = n, this
                       }, i._getOnceReturnValue = function() {
                           return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
                       }, i._getEvents = function() {
                           return this._events || (this._events = {})
                       }, r.noConflict = function() {
                           return e.EventEmitter = a, r
                       }, void 0 === (o = function() {
                           return r
                       }.call(e, t, e, n)) || (n.exports = o)
                   }("undefined" != typeof window ? window : this || {})
               }
           },
           e = {};

       function t(o) {
           var r = e[o];
           if (void 0 !== r) return r.exports;
           var i = e[o] = {
               id: o,
               exports: {}
           };
           return n[o].call(i.exports, i, i.exports, t), i.exports
       }
       t.n = n => {
           var e = n && n.__esModule ? () => n.default : () => n;
           return t.d(e, {
               a: e
           }), e
       }, t.d = (n, e) => {
           for (var o in e) t.o(e, o) && !t.o(n, o) && Object.defineProperty(n, o, {
               enumerable: !0,
               get: e[o]
           })
       }, t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e), t.r = n => {
           "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
               value: "Module"
           }), Object.defineProperty(n, "__esModule", {
               value: !0
           })
       };
       var o = {};
       return (() => {
           "use strict";
           t.r(o), t.d(o, {
               TriadeGUI: () => gt
           });
           var n = t(879),
               e = t.n(n),
               r = t(764),
               i = t.n(r);

           function a(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }
           var c = function() {
                   function n(e) {
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, n);
                       var t = i()[e];
                       void 0 === t && (console.error("There is no theme preset with the name '".concat(e, "'! Defaulting to dark theme.")), t = i().dark), Object.assign(this, s, t)
                   }
                   var e, t;
                   return e = n, (t = [{
                       key: "Apply",
                       value: function() {
                           console.log(this);
                           var n = document.documentElement;
                           n.style.setProperty("--color-menu-bar-background", this.colors.menuBarBackground), n.style.setProperty("--color-menu-bar-text", this.colors.menuBarText), n.style.setProperty("--color-panel-background", this.colors.panelBackground), n.style.setProperty("--color-component-background", this.colors.componentBackground), n.style.setProperty("--color-component-background-hover", this.colors.componentBackgroundHover), n.style.setProperty("--color-component-background-disabled", this.colors.componentBackgroundDisabled), n.style.setProperty("--color-component-foreground", this.colors.componentForeground), n.style.setProperty("--color-component-active", this.colors.componentActive), n.style.setProperty("--color-text-primary", this.colors.textPrimary), n.style.setProperty("--color-text-secondary", this.colors.textSecondary), n.style.setProperty("--color-text-hover", this.colors.textHover), n.style.setProperty("--color-text-active", this.colors.textActive), n.style.setProperty("--color-text-disabled", this.colors.textDisabled), n.style.setProperty("--size-menu-bar-height", this.sizing.menuBarHeight), n.style.setProperty("--size-component-height", this.sizing.componentHeight), n.style.setProperty("--size-component-spacing", this.sizing.componentSpacing), n.style.setProperty("--size-label-width", this.sizing.labelWidth), n.style.setProperty("--font-family", this.font.fontFamily), n.style.setProperty("--font-size", this.font.fontSize), n.style.setProperty("--font-weight", this.font.fontWeight), n.style.setProperty("--font-family-for-input", this.font.inputFontFamily)
                       }
                   }]) && a(e.prototype, t), n
               }(),
               s = {
                   name: "BaseTheme",
                   colors: {
                       menuBarBackground: "black",
                       menuBarText: "black",
                       panelBackground: "black",
                       componentBackground: "black",
                       componentBackgroundHover: "black",
                       componentBackgroundDisabled: "black",
                       componentForeground: "black",
                       componentActive: "black",
                       textPrimary: "black",
                       textSecondary: "black",
                       textHover: "black",
                       textActive: "black",
                       textDisabled: "black"
                   },
                   sizing: {
                       menuBarHeight: "25px",
                       componentHeight: "20px",
                       componentSpacing: "5px",
                       labelWidth: "42%"
                   },
                   font: {
                       fontFamily: "'Hack', ui-monospace, monospace",
                       fontSize: "11px",
                       fontWeight: "400",
                       inputFontFamily: "'Hack', ui-monospace, monospace"
                   }
               },
               l = t(994),
               u = t.n(l),
               f = t(795),
               p = t.n(f),
               A = t(569),
               d = t.n(A),
               h = t(565),
               g = t.n(h),
               b = t(216),
               m = t.n(b),
               v = t(589),
               y = t.n(v),
               C = t(72),
               x = {};
           x.styleTagTransform = y(), x.setAttributes = g(), x.insert = d().bind(null, "head"), x.domAPI = p(), x.insertStyleElement = m(), u()(C.Z, x), C.Z && C.Z.locals && C.Z.locals;
           var k = t(75),
               B = t.n(k),
               w = t(877),
               I = t(54),
               E = {};
           E.styleTagTransform = y(), E.setAttributes = g(), E.insert = d().bind(null, "head"), E.domAPI = p(), E.insertStyleElement = m(), u()(I.Z, E), I.Z && I.Z.locals && I.Z.locals;
           const _ = function(n, e, t) {
               var o = n.appendChild(document.createElement("div"));
               return o.classList.add("abc-component-container"), o
           };

           function S(n) {
               return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, S(n)
           }

           function z(n, e) {
               if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
           }

           function D(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function O(n, e) {
               return O = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, O(n, e)
           }

           function P(n, e) {
               if (e && ("object" === S(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function R(n) {
               return R = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, R(n)
           }
           var j = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && O(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = R(o);
                       if (r) {
                           var t = R(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return P(this, n)
                   });

                   function a(n, e, t) {
                       var o, r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                       return z(this, a), (o = i.call(this)).root = n, o.opts = e, o.theme = t, o.uuid = (0, w.v4)(), r && (o.container = _(n, e.label)), o.SetEnabled(e.enabled || !0), o
                   }
                   return e = a, (t = [{
                       key: "SetEnabled",
                       value: function(n) {
                           var e, t;
                           this.enabled = n, n ? null === (e = this.container) || void 0 === e || e.classList.remove("disabled") : null === (t = this.container) || void 0 === t || t.classList.add("disabled")
                       }
                   }, {
                       key: "Remove",
                       value: function() {
                           this.container && this.container.parentNode.removeChild(this.container)
                       }
                   }]) && D(e.prototype, t), a
               }(B()),
               L = t(146),
               M = {};

           function T(n) {
               return T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, T(n)
           }

           function H(n, e) {
               return H = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, H(n, e)
           }

           function Z(n, e) {
               if (e && ("object" === T(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function F(n) {
               return F = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, F(n)
           }
           M.styleTagTransform = y(), M.setAttributes = g(), M.insert = d().bind(null, "head"), M.domAPI = p(), M.insertStyleElement = m(), u()(L.Z, M), L.Z && L.Z.locals && L.Z.locals;
           var V = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && H(n, e)
                   }(r, n);
                   var e, t, o = (e = r, t = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, o = F(e);
                       if (t) {
                           var r = F(this).constructor;
                           n = Reflect.construct(o, arguments, r)
                       } else n = o.apply(this, arguments);
                       return Z(this, n)
                   });

                   function r(n, e, t) {
                       var i;
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, r);
                       var a = (i = o.call(this, n, e, t)).container.appendChild(document.createElement("div"));
                       a.classList.add("abc-title");
                       var c = a.appendChild(document.createElement("div"));
                       return c.classList.add("abc-title-text"), c.innerHTML = "&#9632; ".concat(e.label, " &#9632;"), i
                   }
                   return r
               }(j),
               W = t(114),
               q = t.n(W),
               Y = t(115),
               N = {};
           N.styleTagTransform = y(), N.setAttributes = g(), N.insert = d().bind(null, "head"), N.domAPI = p(), N.insertStyleElement = m(), u()(Y.Z, N), Y.Z && Y.Z.locals && Y.Z.locals;
           var U = t(142),
               $ = {};
           $.styleTagTransform = y(), $.setAttributes = g(), $.insert = d().bind(null, "head"), $.domAPI = p(), $.insertStyleElement = m(), u()(U.Z, $), U.Z && U.Z.locals && U.Z.locals;
           const X = function(n, e, t) {
               var o = n.appendChild(document.createElement("div"));
               return o.classList.add("abc-component-label"), o.innerHTML = e, o
           };
           var G = t(643),
               Q = {};
           Q.styleTagTransform = y(), Q.setAttributes = g(), Q.insert = d().bind(null, "head"), Q.domAPI = p(), Q.insertStyleElement = m(), u()(G.Z, Q), G.Z && G.Z.locals && G.Z.locals;
           const J = function(n, t, o, r, i) {
               var a = n.appendChild(document.createElement("input"));
               return a.type = "text", a.classList.add("abc-value-input"), a.value = t, i || a.classList.add("abc-value-input-right"), e()(a, {
                   width: r
               }), a
           };

           function K(n) {
               return K = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, K(n)
           }

           function nn(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function en(n, e) {
               return en = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, en(n, e)
           }

           function tn(n, e) {
               if (e && ("object" === K(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function on(n) {
               return on = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, on(n)
           }
           var rn = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && en(n, e)
                   }(c, n);
                   var t, o, r, i, a = (r = c, i = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = on(r);
                       if (i) {
                           var t = on(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return tn(this, n)
                   });

                   function c(n, t, o) {
                       var r;
                       if (function(n, e) {
                               if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                           }(this, c), (r = a.call(this, n, t, o)).scale = t.scale, r.label = X(r.container, t.label), r.input = r.container.appendChild(document.createElement("input")), r.input.type = "range", r.input.classList.add("abc-range"), t.label && r.input.setAttribute("aria-label", t.label + " input"), "log" === t.scale) {
                           if (t.min * t.max <= 0) throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + t.min + ", max = " + t.max);
                           if (q()(t.step) && console.warn("Step is unused for log scale sliders."), q()(t.steps) && console.warn('"steps" option for log scale sliders has been removed.'), r.minPos = 0, r.maxPos = 1e6, r.min = Math.log(q()(t.min) ? t.min : 1e-6), r.max = Math.log(q()(t.max) ? t.max : 100), r.precision = q()(t.precision) ? t.precision : 3, r.logScale = (r.max - r.min) / (r.maxPos - r.minPos), r.initial = q()(t.initial) ? t.initial : r.min, t.initial < 0) throw new Error("Log range initial value must be > 0. Got initial value = ".concat(t.initial))
                       } else if (r.minPos = q()(t.min) ? t.min : 0, r.maxPos = q()(t.max) ? t.max : 100, r.min = r.minPos, r.max = r.maxPos, r.precision = q()(t.precision) ? t.precision : 3, r.step = q()(t.step) ? t.step : 10 / Math.pow(10, 3), r.initial = q()(t.initial) ? t.initial : r.min, 0 != r.step) {
                           var i = Math.round((r.initial - r.min) / r.step);
                           r.initial = r.min + r.step * i
                       }
                       return r.input.min = r.minPos, r.input.max = r.maxPos, q()(r.step) && (r.input.step = r.step), r.input.value = r._Position(r.initial), e()(r.input, {
                           width: "calc(100% - ".concat(o.sizing.labelWidth, " - 16% - 0.5em)")
                       }), r.valueComponent = J(r.container, r.initial, 0, "16%"), t.label && r.valueComponent.setAttribute("aria-label", t.label + " value"), setTimeout((function() {
                           r.emit("initialized", parseFloat(r.input.value))
                       })), r.userIsModifying = !1, r.input.addEventListener("focus", (function() {
                           r.focused = !0
                       })), r.input.addEventListener("blur", (function() {
                           r.focused = !1
                       })), r.input.addEventListener("mouseup", (function() {
                           r.input.blur()
                       })), r.input.oninput = function(n) {
                           var e = parseFloat(n.target.value),
                               t = r._Value(e);
                           r.valueComponent.value = r._FormatNumber(t, r.precision), r.emit("input", t)
                       }, r.valueComponent.onchange = function() {
                           var n = r.valueComponent.value;
                           if (Number(parseFloat(n)) == n) {
                               var e = parseFloat(n);
                               e = r._ValidatedInputValue(e), r.valueComponent.value = e, r.emit("input", e), r.lastValue = e
                           } else r.valueComponent.value = r.lastValue
                       }, r
                   }
                   return t = c, o = [{
                       key: "_Value",
                       value: function(n) {
                           if ("log" === this.scale) {
                               var e = (n - this.minPos) * this.logScale + this.min;
                               return Math.exp(e)
                           }
                           return n
                       }
                   }, {
                       key: "_Position",
                       value: function(n) {
                           return "log" === this.scale ? this.minPos + (Math.log(n) - this.min) / this.logScale : n
                       }
                   }, {
                       key: "_ValidatedInputValue",
                       value: function(n) {
                           var e;
                           return "log" === this.scale ? e = Math.min(Math.max(n, Math.exp(this.min)), Math.exp(this.max)) : (e = Math.min(Math.max(n, this.min), this.max), e = Math.ceil((e - this.min) / this.step) * this.step + this.min), this._FormatNumber(e, this.precision)
                       }
                   }, {
                       key: "SetValue",
                       value: function(n) {
                           var e = this._ValidatedInputValue(n);
                           !0 !== this.focused && (this.valueComponent.value = this._FormatNumber(e, this.precision), this.input.value = this._Position(e), this.lastValue = e)
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this._Value(this.input.value)
                       }
                   }, {
                       key: "_FormatNumber",
                       value: function(n, e) {
                           return +parseFloat(n).toFixed(e)
                       }
                   }], o && nn(t.prototype, o), c
               }(j),
               an = t(351),
               cn = {};

           function sn(n) {
               return sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, sn(n)
           }

           function ln(n, e) {
               return ln = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, ln(n, e)
           }

           function un(n, e) {
               if (e && ("object" === sn(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function fn(n) {
               return fn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, fn(n)
           }
           cn.styleTagTransform = y(), cn.setAttributes = g(), cn.insert = d().bind(null, "head"), cn.domAPI = p(), cn.insertStyleElement = m(), u()(an.Z, cn), an.Z && an.Z.locals && an.Z.locals;
           var pn = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && ln(n, e)
                   }(r, n);
                   var e, t, o = (e = r, t = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, o = fn(e);
                       if (t) {
                           var r = fn(this).constructor;
                           n = Reflect.construct(o, arguments, r)
                       } else n = o.apply(this, arguments);
                       return un(this, n)
                   });

                   function r(n, e, t) {
                       var i;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, r), (i = o.call(this, n, e, t)).label = X(i.container, ""), i.input = i.container.appendChild(document.createElement("button")), i.input.classList.add("abc-button"), i.input.textContent = e.label, i.button = i.input, i.input.addEventListener("click", e.action), i.input.addEventListener("mouseup", (function() {
                           i.input.blur()
                       })), i
                   }
                   return r
               }(j),
               An = t(11),
               dn = {};

           function hn(n) {
               return hn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, hn(n)
           }

           function gn(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function bn(n, e) {
               return bn = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, bn(n, e)
           }

           function mn(n, e) {
               if (e && ("object" === hn(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function vn(n) {
               return vn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, vn(n)
           }
           dn.styleTagTransform = y(), dn.setAttributes = g(), dn.insert = d().bind(null, "head"), dn.domAPI = p(), dn.insertStyleElement = m(), u()(An.Z, dn), An.Z && An.Z.locals && An.Z.locals;
           var yn = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && bn(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = vn(o);
                       if (r) {
                           var t = vn(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return mn(this, n)
                   });

                   function a(n, e, t) {
                       var o;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, a), (o = i.call(this, n, e, t)).label = X(o.container, e.label), o.input = o.container.appendChild(document.createElement("input")), o.input.id = "abc-checkbox-" + e.label + o.uuid, o.input.type = "checkbox", o.input.checked = e.initial, o.input.classList.add("abc-checkbox"), e.label && o.input.setAttribute("aria-label", e.label), o.container.appendChild(document.createElement("label")).htmlFor = o.input.id, setTimeout((function() {
                           o.emit("initialized", o.input.checked)
                       })), o.input.onchange = function(n) {
                           o.emit("input", n.target.checked)
                       }, o
                   }
                   return e = a, t = [{
                       key: "SetValue",
                       value: function(n) {
                           this.input.checked = n
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.input.checked
                       }
                   }], t && gn(e.prototype, t), a
               }(j),
               Cn = t(247),
               xn = {};

           function kn(n) {
               return kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, kn(n)
           }

           function Bn(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function wn(n, e) {
               return wn = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, wn(n, e)
           }

           function In(n, e) {
               if (e && ("object" === kn(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function En(n) {
               return En = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, En(n)
           }
           xn.styleTagTransform = y(), xn.setAttributes = g(), xn.insert = d().bind(null, "head"), xn.domAPI = p(), xn.insertStyleElement = m(), u()(Cn.Z, xn), Cn.Z && Cn.Z.locals && Cn.Z.locals;
           var _n = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && wn(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = En(o);
                       if (r) {
                           var t = En(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return In(this, n)
                   });

                   function a(n, e, t) {
                       var o, r, c, s, l, u, f, p;
                       if (function(n, e) {
                               if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                           }(this, a), (o = i.call(this, n, e, t)).label = X(o.container, e.label), o.input = document.createElement("select"), o.input.classList.add("abc-select-dropdown"), e.label && o.input.setAttribute("aria-label", e.label), (c = document.createElement("span")).classList.add("abc-select-triangle", "abc-select-triangle--down"), (s = document.createElement("span")).classList.add("abc-select-triangle", "abc-select-triangle--up"), o.container.appendChild(c), o.container.appendChild(s), Array.isArray(e.options))
                           for (r = 0; r < e.options.length; r++) u = e.options[r], (f = document.createElement("option")).value = f.textContent = u, e.initial === u && (f.selected = "selected"), o.input.appendChild(f);
                       else
                           for (p = Object.keys(e.options), r = 0; r < p.length; r++) l = p[r], (f = document.createElement("option")).value = l, e.initial === l && (f.selected = "selected"), f.textContent = e.options[l], o.input.appendChild(f);
                       o.container.appendChild(o.input), o.input.onchange = function(n) {
                           o.emit("input", n.target.value)
                       };
                       var A = function() {
                               c.classList.add("abc-select-triangle--down-highlight"), s.classList.add("abc-select-triangle--up-highlight")
                           },
                           d = function() {
                               c.classList.remove("abc-select-triangle--down-highlight"), s.classList.remove("abc-select-triangle--up-highlight")
                           },
                           h = !1;
                       return o.input.addEventListener("mouseover", A), o.input.addEventListener("focus", (function() {
                           h = !0, A()
                       })), o.input.addEventListener("blur", (function() {
                           h = !1, d()
                       })), o.input.addEventListener("mouseleave", (function() {
                           h || d()
                       })), o
                   }
                   return e = a, t = [{
                       key: "SetValue",
                       value: function(n) {
                           this.input.value = n
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.input.value
                       }
                   }], t && Bn(e.prototype, t), a
               }(j),
               Sn = t(532),
               zn = {};

           function Dn(n) {
               return Dn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, Dn(n)
           }

           function On(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function Pn(n, e) {
               return Pn = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, Pn(n, e)
           }

           function Rn(n, e) {
               if (e && ("object" === Dn(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function jn(n) {
               return jn = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, jn(n)
           }
           zn.styleTagTransform = y(), zn.setAttributes = g(), zn.insert = d().bind(null, "head"), zn.domAPI = p(), zn.insertStyleElement = m(), u()(Sn.Z, zn), Sn.Z && Sn.Z.locals && Sn.Z.locals;
           var Ln = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && Pn(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = jn(o);
                       if (r) {
                           var t = jn(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return Rn(this, n)
                   });

                   function a(n, e, t) {
                       var o, r, c, s;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, a), (o = i.call(this, n, e, t)).listenMode = e.listenMode || "input", (r = a, c = a, s = Mn, function(n, e) {
                           if (n !== e) throw new TypeError("Private static access of wrong provenance")
                       }(r, c), function(n, e) {
                           if (void 0 === n) throw new TypeError("attempted to get private static field before its declaration")
                       }(s), function(n, e) {
                           return e.get ? e.get.call(n) : e.value
                       }(r, s)).includes(o.listenMode) || console.error('listenMode "'.concat(o.listenMode, '" is not supported for text component "').concat(e.label, '"! Falling back on "input".')), o.label = X(o.container, e.label), o.input = o.container.appendChild(document.createElement("input")), o.input.type = "text", o.input.classList.add("abc-text-input"), e.initial && (o.input.value = e.initial), e.label && o.input.setAttribute("aria-label", e.label), setTimeout((function() {
                           o.emit("initialized", o.input.value)
                       })), o.input.addEventListener(o.listenMode, (function(n) {
                           console.log(n), o.emit("input", n.target.value)
                       })), o.input.addEventListener("focus", (function() {
                           o.focused = !0
                       })), o.input.addEventListener("blur", (function() {
                           o.focused = !1
                       })), o
                   }
                   return e = a, t = [{
                       key: "SetValue",
                       value: function(n) {
                           !0 !== this.focused && (this.input.value = n)
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.input.value
                       }
                   }], t && On(e.prototype, t), a
               }(j),
               Mn = {
                   writable: !0,
                   value: ["input", "change"]
               },
               Tn = t(186);

           function Hn(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function Zn(n, e, t) {
               return e && Hn(n.prototype, e), t && Hn(n, t), n
           }

           function Fn(n) {
               return "number" == typeof n && !isNaN(n)
           }

           function Vn(n, e, t) {
               return Math.min(Math.max(n, e), t)
           }

           function Wn(n) {
               if (0 === n.type.indexOf("touch")) {
                   var e = n.touches[0];
                   return {
                       x: e.clientX,
                       y: e.clientY
                   }
               }
               return {
                   x: n.clientX,
                   y: n.clientY
               }
           }

           function qn(n) {
               return 1 == n.length ? "0" + n : "" + n
           }
           var Yn = function() {
               function n(n) {
                   this._rgba = {
                       r: 0,
                       g: 0,
                       b: 0,
                       a: 1
                   }, this._hsva = {
                       h: 0,
                       s: 0,
                       v: 0,
                       a: 1
                   }, this.fromHex(n)
               }
               var e = n.prototype;
               return e.fromHex = function(n) {
                   n || (n = 0), Fn(n) ? (this._hexNumber = n, this._hexString = function(n) {
                       return "#" + ("00000" + (0 | n).toString(16)).substr(-6).toUpperCase()
                   }(this._hexNumber)) : (this._hexString = n.toUpperCase(), this._hexNumber = Nn(this._hexString));
                   var e = function(n) {
                           return {
                               r: (n >> 16 & 255) / 255,
                               g: (n >> 8 & 255) / 255,
                               b: (255 & n) / 255
                           }
                       }(this._hexNumber),
                       t = e.g,
                       o = e.b;
                   this._rgba.r = e.r, this._rgba.g = t, this._rgba.b = o;
                   var r = function(n) {
                           var e, t = n.r,
                               o = n.g,
                               r = n.b,
                               i = Math.max(t, o, r),
                               a = Math.min(t, o, r),
                               c = i - a,
                               s = 0 === i ? 0 : c / i,
                               l = i;
                           if (i == a) e = 0;
                           else {
                               switch (i) {
                                   case t:
                                       e = (o - r) / c + (o < r ? 6 : 0);
                                       break;
                                   case o:
                                       e = (r - t) / c + 2;
                                       break;
                                   case r:
                                       e = (t - o) / c + 4
                               }
                               e /= 6
                           }
                           return {
                               h: e,
                               s,
                               v: l
                           }
                       }(this._rgba),
                       i = r.s,
                       a = r.v;
                   this._hsva.h = r.h, this._hsva.s = i, this._hsva.v = a, this._updateBrightness()
               }, e.fromHsv = function(n) {
                   var e = n.s,
                       t = n.v;
                   this._hsva.h = n.h, this._hsva.s = e, this._hsva.v = t;
                   var o = function(n) {
                           var e = n.h,
                               t = n.s,
                               o = n.v;
                           e *= 6;
                           var r = Math.floor(e),
                               i = e - r,
                               a = o * (1 - t),
                               c = o * (1 - i * t),
                               s = o * (1 - (1 - i) * t),
                               l = r % 6;
                           return {
                               r: [o, c, a, a, s, o][l],
                               g: [s, o, o, c, a, a][l],
                               b: [a, a, s, o, o, c][l]
                           }
                       }(this._hsva),
                       r = o.g,
                       i = o.b;
                   this._rgba.r = o.r, this._rgba.g = r, this._rgba.b = i, this._hexString = function(n) {
                       var e = n.g,
                           t = n.b;
                       return ["#", qn(Math.round(255 * n.r).toString(16)), qn(Math.round(255 * e).toString(16)), qn(Math.round(255 * t).toString(16))].join("").toUpperCase()
                   }(this._rgba), this._hexNumber = Nn(this._hexString), this._updateBrightness()
               }, e._updateBrightness = function() {
                   var n = this._rgba;
                   this._brightness = (299 * n.r + 587 * n.g + 114 * n.b) / 1e3, this._isDark = this._brightness < .5, this._isLight = !this._isDark
               }, Zn(n, [{
                   key: "rgb",
                   get: function() {
                       return this._rgba
                   }
               }, {
                   key: "hsv",
                   get: function() {
                       return this._hsva
                   }
               }, {
                   key: "hex",
                   get: function() {
                       return this._hexNumber
                   }
               }, {
                   key: "hexString",
                   get: function() {
                       return this._hexString
                   }
               }, {
                   key: "brightness",
                   get: function() {
                       return this._brightness
                   }
               }, {
                   key: "isDark",
                   get: function() {
                       return this._isDark
                   }
               }, {
                   key: "isLight",
                   get: function() {
                       return this._isLight
                   }
               }]), n
           }();

           function Nn(n) {
               return parseInt(n.replace("#", ""), 16)
           }
           var Un = function() {
               function n(n) {
                   var e = this;
                   void 0 === n && (n = {}), this._widthUnits = "px", this._heightUnits = "px", this._huePosition = 0, this._hueHeight = 0, this._maxHue = 0, this._inputIsNumber = !1, this._saturationWidth = 0, this._isChoosing = !1, this._callbacks = [], this.width = 0, this.height = 0, this.hue = 0, this.position = {
                       x: 0,
                       y: 0
                   }, this.color = new Yn(0), this.backgroundColor = new Yn(0), this.hueColor = new Yn(0), this._onSaturationMouseDown = function(n) {
                       var t = e.$saturation.getBoundingClientRect(),
                           o = Wn(n),
                           r = o.x,
                           i = o.y;
                       e._isChoosing = !0, e._moveSelectorTo(r - t.left, i - t.top), e._updateColorFromPosition(), e._window.addEventListener("mouseup", e._onSaturationMouseUp), e._window.addEventListener("touchend", e._onSaturationMouseUp), e._window.addEventListener("mousemove", e._onSaturationMouseMove), e._window.addEventListener("touchmove", e._onSaturationMouseMove), n.preventDefault()
                   }, this._onSaturationMouseMove = function(n) {
                       var t = e.$saturation.getBoundingClientRect(),
                           o = Wn(n);
                       e._moveSelectorTo(o.x - t.left, o.y - t.top), e._updateColorFromPosition()
                   }, this._onSaturationMouseUp = function() {
                       e._isChoosing = !1, e._window.removeEventListener("mouseup", e._onSaturationMouseUp), e._window.removeEventListener("touchend", e._onSaturationMouseUp), e._window.removeEventListener("mousemove", e._onSaturationMouseMove), e._window.removeEventListener("touchmove", e._onSaturationMouseMove)
                   }, this._onHueMouseDown = function(n) {
                       var t = e.$hue.getBoundingClientRect(),
                           o = Wn(n).y;
                       e._isChoosing = !0, e._moveHueTo(o - t.top), e._updateHueFromPosition(), e._window.addEventListener("mouseup", e._onHueMouseUp), e._window.addEventListener("touchend", e._onHueMouseUp), e._window.addEventListener("mousemove", e._onHueMouseMove), e._window.addEventListener("touchmove", e._onHueMouseMove), n.preventDefault()
                   }, this._onHueMouseMove = function(n) {
                       var t = e.$hue.getBoundingClientRect(),
                           o = Wn(n);
                       e._moveHueTo(o.y - t.top), e._updateHueFromPosition()
                   }, this._onHueMouseUp = function() {
                       e._isChoosing = !1, e._window.removeEventListener("mouseup", e._onHueMouseUp), e._window.removeEventListener("touchend", e._onHueMouseUp), e._window.removeEventListener("mousemove", e._onHueMouseMove), e._window.removeEventListener("touchmove", e._onHueMouseMove)
                   }, this._window = n.window || window, this._document = this._window.document, this.$el = this._document.createElement("div"), this.$el.className = "Scp", this.$el.innerHTML = '\n      <div class="Scp-saturation">\n        <div class="Scp-brightness"></div>\n        <div class="Scp-sbSelector"></div>\n      </div>\n      <div class="Scp-hue">\n        <div class="Scp-hSelector"></div>\n      </div>\n    ', this.$saturation = this.$el.querySelector(".Scp-saturation"), this.$hue = this.$el.querySelector(".Scp-hue"), this.$sbSelector = this.$el.querySelector(".Scp-sbSelector"), this.$hSelector = this.$el.querySelector(".Scp-hSelector"), this.$saturation.addEventListener("mousedown", this._onSaturationMouseDown), this.$saturation.addEventListener("touchstart", this._onSaturationMouseDown), this.$hue.addEventListener("mousedown", this._onHueMouseDown), this.$hue.addEventListener("touchstart", this._onHueMouseDown), n.el && this.appendTo(n.el), n.background && this.setBackgroundColor(n.background), n.widthUnits && (this._widthUnits = n.widthUnits), n.heightUnits && (this._heightUnits = n.heightUnits), this.setSize(n.width || 175, n.height || 150), this.setColor(n.color)
               }
               var e = n.prototype;
               return e.appendTo = function(n) {
                   return "string" == typeof n ? document.querySelector(n).appendChild(this.$el) : n.appendChild(this.$el), this
               }, e.remove = function() {
                   this._callbacks = [], this._onSaturationMouseUp(), this._onHueMouseUp(), this.$saturation.removeEventListener("mousedown", this._onSaturationMouseDown), this.$saturation.removeEventListener("touchstart", this._onSaturationMouseDown), this.$hue.removeEventListener("mousedown", this._onHueMouseDown), this.$hue.removeEventListener("touchstart", this._onHueMouseDown), this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
               }, e.setColor = function(n) {
                   this._inputIsNumber = Fn(n), this.color.fromHex(n);
                   var e = this.color.hsv,
                       t = e.h,
                       o = e.s,
                       r = e.v;
                   return isNaN(t) || (this.hue = t), this._moveSelectorTo(this._saturationWidth * o, (1 - r) * this._hueHeight), this._moveHueTo((1 - this.hue) * this._hueHeight), this._updateHue(), this
               }, e.setSize = function(n, e) {
                   return this.width = n, this.height = e, this.$el.style.width = this.width + this._widthUnits, this.$el.style.height = this.height + this._heightUnits, this._saturationWidth = this.width - 25, this.$saturation.style.width = this._saturationWidth + "px", this._hueHeight = this.height, this._maxHue = this._hueHeight - 2, this
               }, e.setBackgroundColor = function(n) {
                   return this.backgroundColor.fromHex(n), this.$el.style.padding = "5px", this.$el.style.background = this.backgroundColor.hexString, this
               }, e.setNoBackground = function() {
                   return this.$el.style.padding = "0px", this.$el.style.background = "none", this
               }, e.onChange = function(n) {
                   return this._callbacks.indexOf(n) < 0 && (this._callbacks.push(n), n(this.getHexString())), this
               }, e.getColor = function() {
                   return this._inputIsNumber ? this.getHexNumber() : this.getHexString()
               }, e.getHexString = function() {
                   return this.color.hexString.toUpperCase()
               }, e.getHexNumber = function() {
                   return this.color.hex
               }, e.getRGB = function() {
                   return this.color.rgb
               }, e.getHSV = function() {
                   return this.color.hsv
               }, e.isDark = function() {
                   return this.color.isDark
               }, e.isLight = function() {
                   return this.color.isLight
               }, e._moveSelectorTo = function(n, e) {
                   this.position.x = Vn(n, 0, this._saturationWidth), this.position.y = Vn(e, 0, this._hueHeight), this.$sbSelector.style.transform = "translate(" + this.position.x + "px, " + this.position.y + "px)"
               }, e._updateColorFromPosition = function() {
                   this.color.fromHsv({
                       h: this.hue,
                       s: this.position.x / this._saturationWidth,
                       v: 1 - this.position.y / this._hueHeight
                   }), this._updateColor()
               }, e._moveHueTo = function(n) {
                   this._huePosition = Vn(n, 0, this._maxHue), this.$hSelector.style.transform = "translateY(" + this._huePosition + "px)"
               }, e._updateHueFromPosition = function() {
                   var n = this.getHSV();
                   this.hue = 1 - this._huePosition / this._maxHue, this.color.fromHsv({
                       h: this.hue,
                       s: n.s,
                       v: n.v
                   }), this._updateHue()
               }, e._updateHue = function() {
                   this.hueColor.fromHsv({
                       h: this.hue,
                       s: 1,
                       v: 1
                   }), this.$saturation.style.background = "linear-gradient(to right, #fff, " + this.hueColor.hexString + ")", this._updateColor()
               }, e._updateColor = function() {
                   this.$sbSelector.style.background = this.getHexString(), this.$sbSelector.style.borderColor = this.isDark() ? "#fff" : "#000", this._triggerChange()
               }, e._triggerChange = function() {
                   var n = this;
                   this._callbacks.forEach((function(e) {
                       return e(n.getHexString())
                   }))
               }, Zn(n, [{
                   key: "isChoosing",
                   get: function() {
                       return this._isChoosing
                   }
               }]), n
           }();
           (0, Tn.insertCss)(".Scp{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.Scp-saturation{position:relative;height:100%;background:linear-gradient(90deg,#fff,red);float:left;margin-right:5px}.Scp-brightness{width:100%;height:100%;background:linear-gradient(hsla(0,0%,100%,0),#000)}.Scp-sbSelector{border:2px solid #fff;position:absolute;width:14px;height:14px;background:#fff;border-radius:10px;top:-7px;left:-7px;box-sizing:border-box;z-index:10}.Scp-hue{width:20px;height:100%;position:relative;float:left;background:linear-gradient(red,#f0f 17%,#00f 34%,#0ff 50%,#0f0 67%,#ff0 84%,red)}.Scp-hSelector{position:absolute;background:#fff;border-bottom:1px solid #000;right:-3px;width:10px;height:2px}");
           const $n = Un;
           var Xn = t(621),
               Gn = t.n(Xn),
               Qn = t(442),
               Jn = {};

           function Kn(n) {
               return Kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, Kn(n)
           }

           function ne(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function ee(n, e) {
               return ee = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, ee(n, e)
           }

           function te(n, e) {
               if (e && ("object" === Kn(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function oe(n) {
               return oe = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, oe(n)
           }
           Jn.styleTagTransform = y(), Jn.setAttributes = g(), Jn.insert = d().bind(null, "head"), Jn.domAPI = p(), Jn.insertStyleElement = m(), u()(Qn.Z, Jn), Qn.Z && Qn.Z.locals && Qn.Z.locals;
           var re = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && ee(n, e)
                   }(c, n);
                   var t, o, r, i, a = (r = c, i = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = oe(r);
                       if (i) {
                           var t = oe(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return te(this, n)
                   });

                   function c(n, t, o) {
                       var r;
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, c), r = a.call(this, n, t, o), t.format = t.format || "rgb", t.initial = t.initial || "#123456", r.label = X(r.container, t.label);
                       var i = r.container.appendChild(document.createElement("span"));
                       i.classList.add("abc-color");
                       var s = J(r.container, "", 0, "calc(100% - ".concat(o.sizing.labelWidth, " - 12% - 0.5em)"));
                       s.setAttribute("readonly", "true"), i.onmouseover = function() {
                           r.picker.$el.style.display = ""
                       };
                       var l = t.initial;
                       switch (t.format) {
                           case "rgb":
                           case "hex":
                               l = Gn()(l).toHexString();
                               break;
                           case "array":
                               l = Gn().fromRatio({
                                   r: l[0],
                                   g: l[1],
                                   b: l[2]
                               }).toHexString()
                       }
                       return r.picker = new $n({
                           el: i,
                           color: l,
                           background: o.colors.componentBackground,
                           width: 125,
                           height: 100
                       }), e()(r.picker.$el, {
                           marginTop: o.sizing.componentHeight,
                           display: "none",
                           position: "absolute"
                       }), e()(i, {
                           position: "absolute",
                           display: "inline-block",
                           width: "12.5%",
                           height: o.sizing.componentHeight,
                           backgroundColor: r.picker.getHexString()
                       }), i.onmouseout = function() {
                           r.picker.$el.style.display = "none"
                       }, setTimeout((function() {
                           r.emit("initialized", l)
                       })), r.picker.onChange((function(n) {
                           s.value = r.Format(n), e()(i, {
                               backgroundColor: n
                           }), r.emit("input", r.Format(n))
                       })), r
                   }
                   return t = c, o = [{
                       key: "Format",
                       value: function(n) {
                           switch (this.opts.format) {
                               case "rgb":
                                   return Gn()(n).toRgbString();
                               case "hex":
                                   return Gn()(n).toHexString();
                               case "array":
                                   var e = Gn()(n).toRgb();
                                   return [e.r / 255, e.g / 255, e.b / 255].map((function(n) {
                                       return n.toFixed(2)
                                   }));
                               default:
                                   return n
                           }
                       }
                   }, {
                       key: "SetValue",
                       value: function(n) {
                           this.picker.isChoosing || this.picker.setColor(n)
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.Format(this.picker.getColor())
                       }
                   }], o && ne(t.prototype, o), c
               }(j),
               ie = t(211),
               ae = {};

           function ce(n) {
               return ce = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, ce(n)
           }

           function se(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function le() {
               return le = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(n, e, t) {
                   var o = ue(n, e);
                   if (o) {
                       var r = Object.getOwnPropertyDescriptor(o, e);
                       return r.get ? r.get.call(arguments.length < 3 ? n : t) : r.value
                   }
               }, le.apply(this, arguments)
           }

           function ue(n, e) {
               for (; !Object.prototype.hasOwnProperty.call(n, e) && null !== (n = Ae(n)););
               return n
           }

           function fe(n, e) {
               return fe = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, fe(n, e)
           }

           function pe(n, e) {
               if (e && ("object" === ce(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function Ae(n) {
               return Ae = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, Ae(n)
           }
           ae.styleTagTransform = y(), ae.setAttributes = g(), ae.insert = d().bind(null, "head"), ae.domAPI = p(), ae.insertStyleElement = m(), u()(ie.Z, ae), ie.Z && ie.Z.locals && ie.Z.locals;
           var de = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && fe(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = Ae(o);
                       if (r) {
                           var t = Ae(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return pe(this, n)
                   });

                   function a(n, e, t) {
                       var o;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, a), (o = i.call(this, n, e, t)).container.classList.add("abc-folder"), o.container.setAttribute("role", "button"), o.container.setAttribute("tabIndex", "0"), o.arrow = o.container.appendChild(document.createElement("div")), o.arrow.classList.add("abc-folder-arrow"), o.arrow.innerHTML = "&#9662;", o.label = o.container.appendChild(document.createElement("div")), o.label.classList.add("abc-folder-text"), o.label.innerHTML = e.label, o.container.onclick = function() {
                           o.Toggle()
                       }, o.container.addEventListener("mouseup", (function() {
                           o.container.blur()
                       })), o.container.addEventListener("keydown", (function(n) {
                           "Enter" !== n.code && "Space" !== n.code || (n.preventDefault(), o.Toggle())
                       })), o.folderContainer = n.appendChild(document.createElement("div")), o.folderContainer.classList.add("abc-folder-contents"), o.open = o.opts.open || !1, o.SetOpen(o.open), o
                   }
                   return e = a, (t = [{
                       key: "SetEnabled",
                       value: function(n) {
                           var e, t;
                           le(Ae(a.prototype), "SetEnabled", this).call(this, n), n ? null === (e = this.folderContainer) || void 0 === e || e.classList.remove("disabled") : null === (t = this.folderContainer) || void 0 === t || t.classList.add("disabled")
                       }
                   }, {
                       key: "Toggle",
                       value: function() {
                           this.open = !this.open, this.SetOpen(this.open)
                       }
                   }, {
                       key: "SetOpen",
                       value: function(n) {
                           this.open = n, n ? (this.folderContainer.classList.remove("abc-folder-closed"), this.arrow.innerHTML = "&#9662;") : (this.folderContainer.classList.add("abc-folder-closed"), this.arrow.innerHTML = "&#9656;")
                       }
                   }, {
                       key: "Remove",
                       value: function() {
                           this.folderContainer && this.folderContainer.parentNode.removeChild(this.folderContainer), le(Ae(a.prototype), "Remove", this).call(this)
                       }
                   }]) && se(e.prototype, t), a
               }(j),
               he = t(191),
               ge = {};

           function be(n) {
               return be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, be(n)
           }

           function me(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function ve(n, e) {
               return ve = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, ve(n, e)
           }

           function ye(n, e) {
               if (e && ("object" === be(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function Ce(n) {
               return Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, Ce(n)
           }
           ge.styleTagTransform = y(), ge.setAttributes = g(), ge.insert = d().bind(null, "head"), ge.domAPI = p(), ge.insertStyleElement = m(), u()(he.Z, ge), he.Z && he.Z.locals && he.Z.locals;
           var xe = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && ve(n, e)
                   }(c, n);
                   var t, o, r, i, a = (r = c, i = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = Ce(r);
                       if (i) {
                           var t = Ce(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return ye(this, n)
                   });

                   function c(n, t, o) {
                       var r;
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, c), (r = a.call(this, n, t, o)).opts.fileReadFunc = r.opts.fileReadFunc || "readAsDataURL", r.file = null, r.fileName = null, r.container.classList.add("abc-file-container"), r.container.setAttribute("role", "button"), r.container.setAttribute("tabIndex", "0"), e()(r.container, {
                           width: "100%",
                           "box-sizing": "border-box",
                           "-moz-box-sizing": "border-box",
                           "-webkit-box-sizing": "border-box",
                           height: "unset",
                           padding: "8px"
                       });
                       var i = r.container.appendChild(document.createElement("div"));
                       i.innerHTML = t.label, e()(i, "padding-bottom", "5px"), r.input = r.container.appendChild(document.createElement("input")), r.input.setAttribute("type", "file"), r.input.setAttribute("multiple", !1), r.input.style.display = "none", t.label && r.input.setAttribute("aria-label", t.label), r.fileLabel = r.container.appendChild(document.createElement("div")), r.fileLabel.innerHTML = "Choose a file...";
                       var s = function(n) {
                           var e;
                           n.dataTransfer ? e = n.dataTransfer.files : n.target && (e = n.target.files);
                           var t = new FileReader;
                           t.onload = function() {
                               r.file = t.result, r.fileLabel.innerHTML = e[0].name, r.emit("input", r.file)
                           }, t[r.opts.fileReadFunc](e[0])
                       };
                       return r.input.addEventListener("change", s), r.container.addEventListener("dragover", (function(n) {
                           n.preventDefault(), n.stopPropagation(), r.container.classList.add("abc-dragover")
                       })), r.container.addEventListener("dragleave", (function(n) {
                           n.preventDefault(), n.stopPropagation(), r.container.classList.remove("abc-dragover")
                       })), r.container.addEventListener("drop", (function(n) {
                           n.preventDefault(), n.stopPropagation(), r.container.classList.remove("abc-dragover"), s(n)
                       })), r.container.onclick = function() {
                           r.input.click()
                       }, r.container.addEventListener("keydown", (function(n) {
                           "Enter" !== n.code && "Space" !== n.code || (n.preventDefault(), r.input.click())
                       })), r.container.addEventListener("mouseup", (function() {
                           r.container.blur()
                       })), r
                   }
                   return t = c, (o = [{
                       key: "SetValue",
                       value: function(n) {}
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.file
                       }
                   }]) && me(t.prototype, o), c
               }(j),
               ke = t(144),
               Be = {};

           function we(n) {
               return we = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, we(n)
           }

           function Ie(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function Ee(n, e) {
               return Ee = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, Ee(n, e)
           }

           function _e(n, e) {
               if (e && ("object" === we(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function Se(n) {
               return Se = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, Se(n)
           }
           Be.styleTagTransform = y(), Be.setAttributes = g(), Be.insert = d().bind(null, "head"), Be.domAPI = p(), Be.insertStyleElement = m(), u()(ke.Z, Be), ke.Z && ke.Z.locals && ke.Z.locals;
           var ze = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && Ee(n, e)
                   }(a, n);
                   var e, t, o, r, i = (o = a, r = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = Se(o);
                       if (r) {
                           var t = Se(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return _e(this, n)
                   });

                   function a(n, e, t) {
                       var o;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, a), (o = i.call(this, n, e, t)).label = X(o.container, e.label), o.text = o.container.appendChild(document.createElement("div")), o.text.classList.add("abc-display"), e.initial && o.SetValue(e.initial), e.label && o.text.setAttribute("aria-label", e.label), o
                   }
                   return e = a, t = [{
                       key: "SetValue",
                       value: function(n) {
                           this.text.innerHTML = n.toString()
                       }
                   }, {
                       key: "GetValue",
                       value: function() {
                           return this.text.innerHTML.toString()
                       }
                   }], t && Ie(e.prototype, t), a
               }(j),
               De = t(554),
               Oe = {};

           function Pe(n) {
               return Pe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, Pe(n)
           }

           function Re(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function je(n, e) {
               return je = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, je(n, e)
           }

           function Le(n, e) {
               if (e && ("object" === Pe(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function Me(n) {
               return Me = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, Me(n)
           }

           function Te(n, e, t) {
               return Math.min(Math.max(n, e), t)
           }
           Oe.styleTagTransform = y(), Oe.setAttributes = g(), Oe.insert = d().bind(null, "head"), Oe.domAPI = p(), Oe.insertStyleElement = m(), u()(De.Z, Oe), De.Z && De.Z.locals && De.Z.locals;
           var He = function(n) {
               ! function(n, e) {
                   if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                   n.prototype = Object.create(e && e.prototype, {
                       constructor: {
                           value: n,
                           writable: !0,
                           configurable: !0
                       }
                   }), e && je(n, e)
               }(c, n);
               var t, o, r, i, a = (r = c, i = function() {
                   if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                   if (Reflect.construct.sham) return !1;
                   if ("function" == typeof Proxy) return !0;
                   try {
                       return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                   } catch (n) {
                       return !1
                   }
               }(), function() {
                   var n, e = Me(r);
                   if (i) {
                       var t = Me(this).constructor;
                       n = Reflect.construct(e, arguments, t)
                   } else n = e.apply(this, arguments);
                   return Le(this, n)
               });

               function c(n, e, t) {
                   var o;
                   if (function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, c), (o = a.call(this, n, e, t)).label = X(o.container, e.label), e.step && e.steps) throw new Error("Cannot specify both step and steps. Got step = " + e.step + ", steps = ", e.steps);
                   if (o.input = o.container.appendChild(document.createElement("span")), o.input.classList.add("abc-interval"), o.handle = document.createElement("span"), o.handle.classList.add("abc-interval-handle"), o.input.appendChild(o.handle), Array.isArray(e.initial) || (e.initial = []), o.scale = e.scale, "log" === e.scale) {
                       if (e.min * e.max <= 0) throw new Error("Log range min/max must have the same sign and not equal zero. Got min = " + e.min + ", max = " + e.max);
                       q()(e.step) && console.warn("Step is unused for log scale sliders."), q()(e.steps) && console.warn('"steps" option for log scale sliders has been removed.'), o.minPos = 0, o.maxPos = 1e6, o.min = Math.log(q()(e.min) ? e.min : 1e-6), o.max = Math.log(q()(e.max) ? e.max : 100), o.precision = q()(e.precision) ? e.precision : 3, o.logScale = (o.max - o.min) / (o.maxPos - o.minPos), o.initial = [q()(e.initial[0]) ? e.initial[0] : o.min, q()(e.initial[1]) ? e.initial[1] : o.max]
                   } else o.minPos = q()(e.min) ? e.min : 0, o.maxPos = q()(e.max) ? e.max : 100, o.min = o.minPos, o.max = o.maxPos, o.precision = q()(e.precision) ? e.precision : 3, o.step = q()(e.step) ? e.step : 10 / Math.pow(10, 3), o.initial = [q()(e.initial[0]) ? e.initial[0] : o.min, q()(e.initial[1]) ? e.initial[1] : o.max], 0 != o.step && (o.initial = o.initial.map((function(n) {
                       return o.min + o.step * Math.round((n - o.min) / o.step)
                   })));
                   o.value = e.initial, o._RefreshHandles(), o.lValue = J(o.container, o.value[0], 0, "11%", !0), o.rValue = J(o.container, o.value[1], 0, "11%", !1), e.label && o.lValue.setAttribute("aria-label", e.label + " lower value"), e.label && o.lValue.setAttribute("aria-label", e.label + " upper value"), o.activeIndex = -1, setTimeout((function() {
                       o.emit("initialized", o.value)
                   }));
                   var r = function(n) {
                           return n.pageX - o.input.getBoundingClientRect().left
                       },
                       i = function(n) {
                           var e = Te(r(n) / o.input.offsetWidth, 0, 1);
                           o._SetFromMousePosition(e)
                       },
                       s = function n(e) {
                           var t = Te(r(e) / o.input.offsetWidth, 0, 1);
                           o._SetFromMousePosition(t), document.removeEventListener("mousemove", i), document.removeEventListener("mouseup", n), o.activeIndex = -1
                       };
                   return o.input.addEventListener("mousedown", (function(n) {
                       var e = Te(r(n) / o.input.offsetWidth, 0, 1),
                           t = o._Position(o.value[0]),
                           a = o._Position(o.value[1]),
                           c = (t - o.minPos) / (o.maxPos - o.minPos),
                           l = (a - o.minPos) / (o.maxPos - o.minPos);
                       c -= 1e-15 * Math.abs(o.maxPos - o.minPos), l += 1e-15 * Math.abs(o.maxPos - o.minPos);
                       var u = Math.abs(c - e),
                           f = Math.abs(l - e);
                       o.activeIndex = u < f ? 0 : 1, console.log(o.activeIndex), document.addEventListener("mousemove", i), document.addEventListener("mouseup", s)
                   })), o.input.addEventListener("mouseup", (function() {
                       o.input.blur()
                   })), o.input.oninput = function() {
                       o.lValue.value = o.value[0], o.rValue.value = o.value[1], o.emit("input", o.value)
                   }, o.lValue.onchange = function() {
                       var n = o.lValue.value,
                           e = parseFloat(o.rValue.value);
                       if (Number(parseFloat(n)) == n) {
                           var t = "log" == o.scale ? Math.exp(o.min) : o.min,
                               r = "log" == o.scale ? Math.exp(o.max) : o.max,
                               i = parseFloat(n);
                           i = Math.min(Math.max(i, t), r), o.step && (i = Math.ceil((i - t) / o.step) * o.step + t), i = Math.min(i, e), i = o._RoundNumber(i, o.precision), o.lValue.value = i, o.value = [i, e], o.emit("input", [i, e]), o._RefreshHandles([i, e])
                       } else o.lValue.value = o.lastValue[0]
                   }, o.rValue.onchange = function() {
                       var n = o.rValue.value,
                           e = parseFloat(o.lValue.value);
                       if (Number(parseFloat(n)) == n) {
                           var t = "log" == o.scale ? Math.exp(o.min) : o.min,
                               r = "log" == o.scale ? Math.exp(o.max) : o.max,
                               i = parseFloat(n);
                           i = Math.min(Math.max(i, t), r), o.step && (i = Math.ceil((i - t) / o.step) * o.step + t), i = Math.max(i, e), i = o._RoundNumber(i, o.precision), o.rValue.value = i, o.value = [e, i], o.emit("input", [e, i]), o._RefreshHandles()
                       } else o.rValue.value = o.lastValue[1]
                   }, o
               }
               return t = c, o = [{
                   key: "_Value",
                   value: function(n) {
                       if ("log" === this.scale) {
                           var e = (n - this.minPos) * this.logScale + this.min;
                           return Math.exp(e)
                       }
                       return n
                   }
               }, {
                   key: "_Position",
                   value: function(n) {
                       return "log" === this.scale ? this.minPos + (Math.log(n) - this.min) / this.logScale : n
                   }
               }, {
                   key: "_SetFromMousePosition",
                   value: function(n) {
                       if (-1 !== this.activeIndex) {
                           if (0 === this.activeIndex) {
                               var e = (this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos);
                               n = Math.min(e, n)
                           } else {
                               var t = (this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos);
                               n = Math.max(t, n)
                           }
                           var o, r = (1 - (o = n)) * this.minPos + o * this.maxPos,
                               i = this._Value(r);
                           this.step && (i = this.min + this.step * Math.round((i - this.min) / this.step)), this.value[this.activeIndex] = this._RoundNumber(i, this.precision), this._RefreshHandles(), this.input.oninput()
                       }
                   }
               }, {
                   key: "SetValue",
                   value: function(n) {
                       !0 !== this.focused && (this.lValue.value = this._RoundNumber(parseFloat(n[0]), this.precision), this.rValue.value = this._RoundNumber(parseFloat(n[1]), this.precision), this.lastValue = [parseFloat(n[0]), parseFloat(n[1])])
                   }
               }, {
                   key: "_RoundNumber",
                   value: function(n, e) {
                       return +parseFloat(n).toFixed(e)
                   }
               }, {
                   key: "GetValue",
                   value: function() {
                       return [this.lValue.value, this.rValue.value]
                   }
               }, {
                   key: "_RefreshHandles",
                   value: function() {
                       var n = (this._Position(this.value[0]) - this.minPos) / (this.maxPos - this.minPos) * 100,
                           t = 100 - (this._Position(this.value[1]) - this.minPos) / (this.maxPos - this.minPos) * 100;
                       e()(this.handle, {
                           left: "".concat(n, "%"),
                           right: "".concat(t, "%")
                       })
                   }
               }], o && Re(t.prototype, o), c
           }(j);

           function Ze(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }
           var Fe = function() {
                   function n(e) {
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, n), this.theme = e, this.components = {
                           title: V,
                           range: rn,
                           button: pn,
                           checkbox: yn,
                           select: _n,
                           text: Ln,
                           color: re,
                           folder: de,
                           file: xe,
                           display: ze,
                           interval: He
                       }
                   }
                   var e, t;
                   return e = n, (t = [{
                       key: "Create",
                       value: function(n, e) {
                           var t = this.components[e.type];
                           if (void 0 === t) throw new Error("No component type named '".concat(e.type, "' exists."));
                           return new t(n, e, this.theme)
                       }
                   }]) && Ze(e.prototype, t), n
               }(),
               Ve = t(577),
               We = t.n(Ve),
               qe = t(287),
               Ye = {};

           function Ne(n) {
               return Ne = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, Ne(n)
           }

           function Ue(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function $e(n, e) {
               return $e = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, $e(n, e)
           }

           function Xe(n, e) {
               if (e && ("object" === Ne(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function Ge(n) {
               return Ge = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, Ge(n)
           }
           Ye.styleTagTransform = y(), Ye.setAttributes = g(), Ye.insert = d().bind(null, "head"), Ye.domAPI = p(), Ye.insertStyleElement = m(), u()(qe.Z, Ye), qe.Z && qe.Z.locals && qe.Z.locals;
           var Qe = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && $e(n, e)
                   }(c, n);
                   var t, o, r, i, a = (r = c, i = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = Ge(r);
                       if (i) {
                           var t = Ge(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return Xe(this, n)
                   });

                   function c(n, t, o) {
                       var r;
                       if (function(n, e) {
                               if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                           }(this, c), (r = a.call(this, n, t, o, !1)).element = document.createElement("div"), r.element.classList.add("abc-bar"), n.appendChild(r.element), t.title) {
                           var i = r.element.appendChild(document.createElement("div"));
                           i.classList.add("abc-bar-title"), i.innerHTML = t.title, r.label = i
                       }
                       var s = r.element.appendChild(document.createElement("button"));
                       if (s.classList.add("abc-bar-button"), s.innerHTML = "Controls", e()(s, {
                               left: "left" == t.align ? "0" : "unset",
                               right: "left" == t.align ? "unset" : "0"
                           }), s.onclick = function() {
                               r.emit("ontogglepanel")
                           }, We().isEnabled) {
                           var l = r.element.appendChild(document.createElement("button"));
                           l.classList.add("abc-bar-button"), l.innerHTML = "「　」", l.setAttribute("aria-label", "Toggle Fullscreen"), e()(l, {
                               left: "left" == t.align ? "unset" : "0",
                               right: "left" == t.align ? "0" : "unset"
                           }), l.onclick = function() {
                               r.emit("onfullscreenrequested")
                           }
                       }
                       return r
                   }
                   return t = c, (o = [{
                       key: "SetVisible",
                       value: function(n) {
                           this.element.style.display = n ? "block" : "none"
                       }
                   }]) && Ue(t.prototype, o), c
               }(j),
               Je = t(153),
               Ke = {};

           function nt(n) {
               return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, nt(n)
           }

           function et(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function tt(n, e) {
               return tt = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, tt(n, e)
           }

           function ot(n, e) {
               if (e && ("object" === nt(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function rt(n) {
               return rt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, rt(n)
           }
           Ke.styleTagTransform = y(), Ke.setAttributes = g(), Ke.insert = d().bind(null, "head"), Ke.domAPI = p(), Ke.insertStyleElement = m(), u()(Je.Z, Ke), Je.Z && Je.Z.locals && Je.Z.locals;
           var it = function(n) {
                   ! function(n, e) {
                       if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                       n.prototype = Object.create(e && e.prototype, {
                           constructor: {
                               value: n,
                               writable: !0,
                               configurable: !0
                           }
                       }), e && tt(n, e)
                   }(c, n);
                   var t, o, r, i, a = (r = c, i = function() {
                       if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                       if (Reflect.construct.sham) return !1;
                       if ("function" == typeof Proxy) return !0;
                       try {
                           return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                       } catch (n) {
                           return !1
                       }
                   }(), function() {
                       var n, e = rt(r);
                       if (i) {
                           var t = rt(this).constructor;
                           n = Reflect.construct(e, arguments, t)
                       } else n = e.apply(this, arguments);
                       return ot(this, n)
                   });

                   function c(n, t, o) {
                       var r;
                       return function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, c), (r = a.call(this, n, t, o, !1)).container = n.appendChild(document.createElement("div")), r.container.classList.add("abc-panel-container"), e()(r.container, {
                           width: t.width,
                           opacity: t.opacity || 1
                       }), "left" == t.align ? "outer" == t.panelMode ? r.container.classList.add("abc-panel-container-left-outer") : "inner" == t.panelMode && r.container.classList.add("abc-panel-container-left-inner") : "outer" == t.panelMode ? r.container.classList.add("abc-panel-container-right-outer") : "inner" == t.panelMode && r.container.classList.add("abc-panel-container-right-inner"), "scroll" == t.panelOverflowBehavior && r.container.classList.add("abc-panel-container-scrollable"), "none" === t.barMode && e()(r.container, {
                           maxHeight: "100%"
                       }), r.panel = r.container.appendChild(document.createElement("div")), r.panel.classList.add("abc-panel"), "none" === t.barMode && t.title && function(n, t, o) {
                           var r = n.appendChild(document.createElement("div"));
                           r.innerHTML = t, e()(r, {
                               width: "100%",
                               textAlign: "center",
                               color: o.colors.textSecondary,
                               height: "20px",
                               marginBottom: "4px"
                           })
                       }(r.panel, t.title, o), r
                   }
                   return t = c, (o = [{
                       key: "SetVisible",
                       value: function(n) {
                           n ? (this.panel.classList.remove("abc-panel-hidden"), this.menuButton && this.menuButton.setAttribute("alt", "Close GUI")) : (this.panel.classList.add("abc-panel-hidden"), this.menuButton && this.menuButton.setAttribute("alt", "Open GUI"))
                       }
                   }, {
                       key: "ToggleVisible",
                       value: function() {
                           this.panel.classList.contains("abc-panel-hidden") ? this.SetVisible(!0) : this.SetVisible(!1)
                       }
                   }, {
                       key: "_MakeToggleButton",
                       value: function() {
                           var n = this;
                           this.menuButton = this.container.appendChild(document.createElement("button")), this.menuButton.className = "abc-panel-toggle-button", e()(this.menuButton, {
                               left: "left" == this.opts.align ? "0px" : "unset",
                               right: "left" == this.opts.align ? "unset" : "0px"
                           }), this.menuButton.onclick = function() {
                               n.ToggleVisible()
                           }, this.menuButton.addEventListener("mouseup", (function() {
                               n.menuButton.blur()
                           })), this.menuButton.innerHTML = '\n        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">\n            <rect x="10%" y="10%" width="80%" height="80%"/>\n        </svg>\n        '
                       }
                   }]) && et(t.prototype, o), c
               }(j),
               at = t(56),
               ct = {};

           function st(n) {
               return st = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                   return typeof n
               } : function(n) {
                   return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
               }, st(n)
           }

           function lt(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }

           function ut(n, e) {
               return ut = Object.setPrototypeOf || function(n, e) {
                   return n.__proto__ = e, n
               }, ut(n, e)
           }

           function ft(n, e) {
               if (e && ("object" === st(e) || "function" == typeof e)) return e;
               if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
               return function(n) {
                   if (void 0 === n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                   return n
               }(n)
           }

           function pt(n) {
               return pt = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
                   return n.__proto__ || Object.getPrototypeOf(n)
               }, pt(n)
           }
           ct.styleTagTransform = y(), ct.setAttributes = g(), ct.insert = d().bind(null, "head"), ct.domAPI = p(), ct.insertStyleElement = m(), u()(at.Z, ct), at.Z && at.Z.locals && at.Z.locals;
           var At = function(n) {
               ! function(n, e) {
                   if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                   n.prototype = Object.create(e && e.prototype, {
                       constructor: {
                           value: n,
                           writable: !0,
                           configurable: !0
                       }
                   }), e && ut(n, e)
               }(c, n);
               var t, o, r, i, a = (r = c, i = function() {
                   if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                   if (Reflect.construct.sham) return !1;
                   if ("function" == typeof Proxy) return !0;
                   try {
                       return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                   } catch (n) {
                       return !1
                   }
               }(), function() {
                   var n, e = pt(r);
                   if (i) {
                       var t = pt(this).constructor;
                       n = Reflect.construct(e, arguments, t)
                   } else n = e.apply(this, arguments);
                   return ft(this, n)
               });

               function c(n, t, o) {
                   var r;
                   return function(n, e) {
                       if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                   }(this, c), (r = a.call(this, n, t, o, !1)).element = n.appendChild(document.createElement("div")), r.element.classList.add("abc-toast-area"), e()(r.element, {
                       position: "absolute",
                       width: "100%"
                   }), r
               }
               return t = c, o = [{
                   key: "CreateToast",
                   value: function(n) {
                       var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                           o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                       console.log("[Toast] " + n);
                       var r = this.element.appendChild(document.createElement("div"));
                       r.classList.add("abc-toast-notification"), r.setAttribute("aria-live", "polite"), r.innerHTML = n, e()(r, {});
                       var i, a = r.appendChild(document.createElement("button"));
                       a.innerHTML = "&#10006;", a.classList.add("abc-toast-close-button");
                       var c = function() {
                           r.blur(), e()(r, {
                               opacity: "0"
                           }), clearTimeout(i), i = setTimeout((function() {
                               r && r.parentNode.removeChild(r)
                           }), o)
                       };
                       i = setTimeout(c, t), a.onclick = c
                   }
               }], o && lt(t.prototype, o), c
           }(j);

           function dt(n, e) {
               for (var t = 0; t < e.length; t++) {
                   var o = e[t];
                   o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o)
               }
           }
           var ht = function() {
                   function n(e) {
                       var t = this;
                       ! function(n, e) {
                           if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
                       }(this, n), this.opts = e, this.hasRoot = void 0 !== e.root, e.width = e.width || 300, e.root = e.root || document.body, e.align = e.align || "left", e.opacity = e.opacity || 1, e.barMode = e.barMode || "offset", e.panelMode = e.panelMode || "inner", e.panelOverflowBehavior = e.panelOverflowBehavior || "scroll", e.pollRateMS = e.pollRateMS || 100, e.open = e.open || !1;
                       var o = e.theme || "dark";
                       this.theme = new c(o), this.theme.Apply(), this._ConstructElements(), this._LoadStyles(), We().isEnabled && We().on("change", (function() {
                           t.opts.root.classList.toggle("abc-fullscreen", We().isFullscreen)
                       })), this.componentManager = new Fe(this.theme), this.loadedComponents = [], this._UpdateComponents()
                   }
                   var t, o;
                   return t = n, o = [{
                       key: "_LoadStyles",
                       value: function() {
                           var n = function(n) {
                               var e = document.createElement("style");
                               e.setAttribute("type", "text/css"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", n), document.getElementsByTagName("head")[0].appendChild(e)
                           };
                           this.theme.font && this.theme.font.fontURL ? n(this.theme.font.fontURL) : n("//cdn.jsdelivr.net/font-hack/2.019/css/hack.min.css")
                       }
                   }, {
                       key: "_ConstructElements",
                       value: function() {
                           var n = this;
                           if (this.container = document.createElement("div"), this.container.classList.add("abc-container"), this.hasRoot && "above" == this.opts.barMode) this.container.classList.add("abc-container-above");
                           else if (this.hasRoot && "overlay" == this.opts.barMode) this.container.classList.add("abc-container-overlay");
                           else if (this.hasRoot && "offset" == this.opts.barMode) {
                               this.container.classList.add("abc-container-above"), console.log(window.getComputedStyle(this.opts.root).getPropertyValue("margin-top"));
                               var t = window.getComputedStyle(this.opts.root).getPropertyValue("margin-top") || "0px";
                               e()(this.opts.root, {
                                   marginTop: "calc(".concat(t, " + var(--size-menu-bar-height))")
                               })
                           }
                           this.opts.root.insertBefore(this.container, this.opts.root.childNodes[0]), "none" !== this.opts.barMode && (this.bar = new Qe(this.container, this.opts, this.theme), this.bar.addListener("ontogglepanel", (function() {
                               n.panel.ToggleVisible()
                           })), this.bar.addListener("onfullscreenrequested", (function() {
                               n.ToggleFullscreen()
                           }))), this.panel = new it(this.container, this.opts, this.theme), "none" === this.opts.barMode || !0 === this.opts.open ? this.panel.SetVisible(!0) : this.panel.SetVisible(!1), this.toaster = new At(this.container, this.opts, this.theme)
                       }
                   }, {
                       key: "_UpdateComponents",
                       value: function() {
                           var n = this;
                           this.loadedComponents.forEach((function(n) {
                               n.binding && n.binding.object[n.binding.property] != n.oldValue && (n.SetValue(n.binding.object[n.binding.property]), n.oldValue = n.binding.object[n.binding.property])
                           })), setTimeout((function() {
                               window.requestAnimationFrame((function() {
                                   n._UpdateComponents()
                               }))
                           }), this.opts.pollRateMS)
                       }
                   }, {
                       key: "Register",
                       value: function(n) {
                           var e = this,
                               t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                           if (!Array.isArray(n)) {
                               var o = Object.assign(n, t);
                               return this._Register(o)
                           }
                           n.forEach((function(n) {
                               var o = Object.assign(n, t);
                               e._Register(o)
                           }))
                       }
                   }, {
                       key: "Remove",
                       value: function(n) {
                           n.Remove(), this.loadedComponents = this.loadedComponents.filter((function(e) {
                               return e !== n
                           }))
                       }
                   }, {
                       key: "_Register",
                       value: function(n) {
                           if (n.object && n.property && void 0 === n.object[n.property]) throw new Error("Object ".concat(n.object, " has no property '").concat(n.property, "'"));
                           n.object && n.property && (n.initial = n.object[n.property]);
                           var e = this.panel.panel;
                           if (n.folder) {
                               var t = this.loadedComponents.find((function(e) {
                                   return e === n.folder || "folder" === e.opts.type && e.opts.label === n.folder
                               }));
                               if (!t) throw new Error("No folder exists with the name ".concat(n.folder));
                               e = t.folderContainer
                           }
                           var o = this.componentManager.Create(e, n);
                           return n.object && n.property && (o.binding = {
                               object: n.object,
                               property: n.property
                           }), o.on && (o.on("initialized", (function(e) {
                               n.onInitialize && n.onInitialize(e)
                           })), o.on("input", (function(e) {
                               n.object && n.property && (n.object[n.property] = e), n.onChange && n.onChange(e)
                           }))), this.loadedComponents.push(o), o
                       }
                   }, {
                       key: "Toast",
                       value: function(n) {
                           var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5e3,
                               t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                           this.toaster.CreateToast(n, e, t)
                       }
                   }, {
                       key: "ToggleFullscreen",
                       value: function() {
                           We().isFullscreen ? We().exit() : (console.log("Request fullscreen"), We().request(this.opts.root))
                       }
                   }, {
                       key: "_SetAllEnabled",
                       value: function(n) {
                           this.loadedComponents.forEach((function(e) {
                               e.SetEnabled(n)
                           }))
                       }
                   }], o && dt(t.prototype, o), n
               }(),
               gt = ht
       })(), o
   })()
}));