"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cn = require("classnames");
var React = require("react");
exports.Input = function (_a) {
    var input = _a.input, label = _a.label, showLabel = _a.showLabel, _b = _a.type, type = _b === void 0 ? 'text' : _b, _c = _a.meta, touched = _c.touched, error = _c.error, warning = _c.warning, styles = _a.styles, placeholder = _a.placeholder, inputClass = _a.inputClass, wrapperClass = _a.wrapperClass, icon = _a.icon, rest = __rest(_a, ["input", "label", "showLabel", "type", "meta", "styles", "placeholder", "inputClass", "wrapperClass", "icon"]);
    var _d;
    if (!styles) {
        return null;
    }
    return (React.createElement("div", { className: styles.main },
        showLabel && (React.createElement("label", { htmlFor: input.name, className: styles.label }, label || input.name)),
        React.createElement("div", { className: cn(styles.inputWrapper, wrapperClass) },
            icon && React.createElement("span", { styleName: "icon" }, icon),
            React.createElement("input", __assign({}, rest, input, { placeholder: placeholder || label || input.name, type: type, className: cn(styles.input, inputClass, (_d = {},
                    _d[styles.inputError] = touched && !!error,
                    _d[styles.inputWarning] = touched && !!warning,
                    _d[styles.inputIcon] = !!icon,
                    _d)) })),
            touched &&
                ((error && React.createElement("span", { className: styles.error }, error)) ||
                    (warning && React.createElement("span", { className: styles.warning }, warning))))));
};
//# sourceMappingURL=Input.js.map