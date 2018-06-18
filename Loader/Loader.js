"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./styles.scss");
exports.Loader = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 200 : _b, _c = _a.color, color = _c === void 0 ? '#e44f24' : _c;
    var transform = 0.625 * size;
    var wrapSize = size * 1.25;
    var position = size / 8;
    var trans1 = size / 2;
    var trans2 = 0.51875 * size;
    var shadow = 0.0375 * size;
    return (React.createElement("div", { className: 'lds-css ng-scope' },
        React.createElement("div", { style: {
                height: wrapSize + "px",
                transform: "translate(" + transform + ", -" + transform + ") scale(1) translate(" + transform + ", " + transform + ")",
                width: wrapSize + "px",
            }, className: 'lds-eclipse' },
            React.createElement("div", { style: {
                    boxShadow: "0 " + shadow + "px 0 0 " + color,
                    height: size,
                    left: position + "px",
                    top: position + "px",
                    transformOrigin: trans1 + "px " + trans2 + "px",
                    width: size,
                } }))));
};
//# sourceMappingURL=Loader.js.map