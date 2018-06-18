"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var cn = require("classnames");
var React = require("react");
exports.Input = function (_a) {
    var _b;
    var input = _a.input, label = _a.label, showLabel = _a.showLabel, _c = _a.type, type = _c === void 0 ? "text" : _c, _d = _a.meta, touched = _d.touched, error = _d.error, warning = _d.warning, styles = _a.styles, placeholder = _a.placeholder, inputClass = _a.inputClass, wrapperClass = _a.wrapperClass, icon = _a.icon;
    if (!styles) {
        return null;
    }
    return (React.createElement("div", { className: styles.main },
        showLabel && (React.createElement("label", { htmlFor: input.name, className: styles.label }, label || input.name)),
        React.createElement("div", { className: cn(styles.inputWrapper, wrapperClass) },
            icon && React.createElement("span", { styleName: "icon" }, icon),
            React.createElement("input", __assign({}, input, { placeholder: placeholder || label || input.name, type: type, className: cn(styles.input, inputClass, (_b = {},
                    _b[styles.inputError] = touched && !!error,
                    _b[styles.inputWarning] = touched && !!warning,
                    _b)) })),
            touched && ((error && React.createElement("span", { className: styles.error }, error)) ||
                (warning && React.createElement("span", { className: styles.warning }, warning))))));
};
//# sourceMappingURL=Input.js.map