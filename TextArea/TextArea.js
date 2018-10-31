"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = _this.handleFocus.bind(_this);
        _this.handleBlur = _this.handleBlur.bind(_this);
        _this.state = {
            edit: false
        };
        return _this;
    }
    TextArea.prototype.handleFocus = function (event) {
        var handler = this.props.input.onFocus;
        if (handler) {
            handler(event);
        }
        this.setState({ edit: true });
    };
    TextArea.prototype.handleBlur = function (event) {
        var handler = this.props.input.onBlur;
        if (handler) {
            handler(event);
        }
        this.setState({ edit: false });
    };
    TextArea.prototype.render = function () {
        var _a, _b;
        var edit = this.state.edit;
        var _c = this.props, styles = _c.styles, icon = _c.icon, title = _c.title, input = _c.input, value = _c.value, placeholder = _c.placeholder, className = _c.className, wrapperClass = _c.wrapperClass, editorClass = _c.editorClass, _d = _c.meta, touched = _d.touched, error = _d.error, warning = _d.warning, rest = __rest(_c, ["styles", "icon", "title", "input", "value", "placeholder", "className", "wrapperClass", "editorClass", "meta"]);
        if (!styles) {
            return null;
        }
        return (React.createElement("div", { className: cn(styles.area, className) },
            icon &&
                title && (React.createElement("div", { className: styles.header },
                React.createElement("span", { className: styles.icon }, icon),
                React.createElement("h3", { className: styles.title }, title))),
            React.createElement("div", { className: cn(wrapperClass, (_a = {},
                    _a[styles.wrapper] = !!icon && !!title,
                    _a)) },
                React.createElement("textarea", __assign({}, rest, input, { className: cn(styles.editor, editorClass, (_b = {},
                        _b[styles.active] = edit,
                        _b[styles.inactive] = !edit && !value,
                        _b[styles.editorError] = touched && !!error,
                        _b[styles.editorWarning] = touched && !!warning,
                        _b)), defaultValue: value || placeholder, onFocus: this.handleFocus, onBlur: this.handleBlur })),
                touched &&
                    ((error && React.createElement("span", { className: styles.error }, error)) ||
                        (warning && React.createElement("span", { className: styles.warning }, warning))))));
    };
    TextArea.defaultProps = {
        placeholder: 'Введите ваш текст'
    };
    return TextArea;
}(React.Component));
exports.TextArea = TextArea;
//# sourceMappingURL=TextArea.js.map