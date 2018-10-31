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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ts_keycode_enum_1 = require("ts-keycode-enum");
var FaFileText = require('react-icons/lib/fa/file-text');
var TitleInput = /** @class */ (function (_super) {
    __extends(TitleInput, _super);
    function TitleInput(props) {
        var _this = _super.call(this, props) || this;
        _this.TitleInput = null;
        _this.setTitleInputRef = function (element) {
            _this.TitleInput = element;
        };
        _this.handleTextareaBlur = _this.handleTextareaBlur.bind(_this);
        _this.handleTextareaChange = _this.handleTextareaChange.bind(_this);
        _this.handleTextareaFocus = _this.handleTextareaFocus.bind(_this);
        _this.handleTextareaKeyDown = _this.handleTextareaKeyDown.bind(_this);
        _this.state = {
            currentValue: (_this.props.input.value || '').trim(),
            previousValue: (_this.props.input.value || '').trim()
        };
        return _this;
    }
    TitleInput.prototype.componentDidMount = function () {
        this.autoHightTextarea();
    };
    TitleInput.prototype.handleTextareaBlur = function (e) {
        this.applyCurrentValue();
        this.props.input.onBlur(e);
    };
    TitleInput.prototype.handleTextareaChange = function (e) {
        this.setState({
            currentValue: e.currentTarget.value
        });
        this.autoHightTextarea();
    };
    TitleInput.prototype.handleTextareaFocus = function (e) {
        this.setState({
            previousValue: this.state.currentValue
        });
        this.autoHightTextarea();
    };
    TitleInput.prototype.handleTextareaKeyDown = function (e) {
        switch (e.keyCode) {
            case ts_keycode_enum_1.Key.Enter:
                this.applyCurrentValue();
                break;
            case ts_keycode_enum_1.Key.Escape:
                this.restorePreviousValue();
                break;
            default:
                this.autoHightTextarea();
                break;
        }
    };
    TitleInput.prototype.applyCurrentValue = function () {
        this.updateInputState({
            currentValue: (this.state.currentValue || '').trim()
        });
    };
    TitleInput.prototype.restorePreviousValue = function () {
        this.updateInputState({
            currentValue: (this.state.previousValue || '').trim()
        });
    };
    TitleInput.prototype.updateInputState = function (state) {
        var _this = this;
        this.setState(state, function () {
            _this.TitleInput.blur();
            _this.autoHightTextarea();
            if (_this.state.currentValue !== _this.state.previousValue) {
                _this.props.input.onChange(_this.state.currentValue);
            }
        });
    };
    TitleInput.prototype.autoHightTextarea = function () {
        this.TitleInput.style.height = 'auto';
        this.TitleInput.style.height = this.TitleInput.scrollHeight + 'px';
    };
    TitleInput.prototype.render = function () {
        var _a = this.props, icon = _a.icon, input = _a.input, label = _a.label, maxLength = _a.maxLength, placeholder = _a.placeholder;
        return (React.createElement("div", { styleName: "wrapper" },
            label && (React.createElement("label", { htmlFor: input.name, className: "label" }, label || input.name)),
            React.createElement("div", { styleName: "input-wrapper" },
                icon && React.createElement("div", { styleName: "icon" }, icon),
                React.createElement("textarea", __assign({ styleName: icon ? ' with-icon' : '' }, input, { maxLength: maxLength, value: this.state.currentValue, placeholder: placeholder, ref: this.setTitleInputRef, rows: 1, onBlur: this.handleTextareaBlur, onChange: this.handleTextareaChange, onFocus: this.handleTextareaFocus, onKeyDown: this.handleTextareaKeyDown })))));
    };
    TitleInput.defaultProps = {
        icon: React.createElement(FaFileText, null),
        maxLength: 500
    };
    return TitleInput;
}(React.Component));
exports.TitleInput = TitleInput;
//# sourceMappingURL=TitleInput.js.map