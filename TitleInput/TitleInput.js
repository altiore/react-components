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
var TEXT_HEIGHT = 34;
var ERROR_HEIGHT = 12;
var TitleInput = /** @class */ (function (_super) {
    __extends(TitleInput, _super);
    function TitleInput(props) {
        var _this = _super.call(this, props) || this;
        _this.titleInputRef = null;
        _this.setTitleInputRef = function (element) {
            _this.titleInputRef = element;
        };
        _this.handleTextareaBlur = _this.handleTextareaBlur.bind(_this);
        _this.handleTextareaChange = _this.handleTextareaChange.bind(_this);
        _this.handleTextareaFocus = _this.handleTextareaFocus.bind(_this);
        _this.handleTextareaKeyDown = _this.handleTextareaKeyDown.bind(_this);
        _this.handleTextareaKeyUp = _this.handleTextareaKeyUp.bind(_this);
        _this.state = {
            currentValue: (_this.props.input.value || '').trim(),
            height: TEXT_HEIGHT,
            previousValue: (_this.props.input.value || '').trim()
        };
        return _this;
    }
    TitleInput.prototype.componentDidMount = function () {
        this.autoHeightTextarea();
        if (this.props.getTextarea) {
            this.props.getTextarea(this.titleInputRef);
        }
    };
    TitleInput.prototype.handleTextareaBlur = function (e) {
        this.applyCurrentValue();
        this.props.input.onBlur(e);
    };
    TitleInput.prototype.handleTextareaChange = function (e) {
        e.preventDefault();
        this.setState({
            currentValue: e.currentTarget.value
        });
        this.autoHeightTextarea();
    };
    TitleInput.prototype.handleTextareaFocus = function (e) {
        this.setState({
            previousValue: this.state.currentValue
        });
        this.autoHeightTextarea();
    };
    TitleInput.prototype.handleTextareaKeyDown = function (e) {
        switch (e.keyCode) {
            case ts_keycode_enum_1.Key.Enter:
                e.preventDefault();
                this.applyCurrentValue();
                break;
            case ts_keycode_enum_1.Key.Escape:
                e.preventDefault();
                this.restorePreviousValue();
                break;
            default:
                this.autoHeightTextarea();
                break;
        }
    };
    TitleInput.prototype.handleTextareaKeyUp = function (e) {
        if (e.keyCode === ts_keycode_enum_1.Key.Enter) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    TitleInput.prototype.applyCurrentValue = function () {
        var _this = this;
        this.updateInputState({
            currentValue: (this.state.currentValue || '').trim()
        }, function () {
            if (_this.props.onSubmit) {
                _this.props.onSubmit();
            }
        });
    };
    TitleInput.prototype.restorePreviousValue = function () {
        this.updateInputState({
            currentValue: (this.state.previousValue || '').trim()
        });
    };
    TitleInput.prototype.updateInputState = function (state, callback) {
        var _this = this;
        this.setState(state, function () {
            _this.titleInputRef.blur();
            _this.autoHeightTextarea();
            if (_this.state.currentValue !== _this.state.previousValue) {
                _this.setState({
                    previousValue: _this.state.currentValue
                });
                _this.props.input.onChange(_this.state.currentValue);
                if (callback) {
                    callback();
                }
            }
        });
    };
    TitleInput.prototype.autoHeightTextarea = function () {
        this.titleInputRef.style.height = 'auto';
        if (this.titleInputRef.scrollHeight > TEXT_HEIGHT) {
            this.titleInputRef.style.height = this.titleInputRef.scrollHeight + 'px';
            this.setState({ height: this.titleInputRef.scrollHeight + ERROR_HEIGHT });
        }
        else {
            this.titleInputRef.style.height = TEXT_HEIGHT + 'px';
            this.setState({ height: TEXT_HEIGHT + ERROR_HEIGHT });
        }
    };
    TitleInput.prototype.render = function () {
        var _a = this.props, className = _a.className, classNameInput = _a.classNameInput, icon = _a.icon, input = _a.input, label = _a.label, maxLength = _a.maxLength, _b = _a.meta, touched = _b.touched, error = _b.error, warning = _b.warning, placeholder = _a.placeholder;
        var wrapperHeight = this.state.height;
        return (React.createElement("div", { styleName: 'wrapper', className: className || '', style: { height: label ? wrapperHeight + 19 : wrapperHeight } },
            label && (React.createElement("label", { htmlFor: input.name, className: "label" }, label || input.name)),
            React.createElement("div", { styleName: "input-wrapper", style: { height: wrapperHeight } },
                icon && React.createElement("div", { styleName: "icon" }, icon),
                React.createElement("textarea", __assign({ styleName: icon ? 'with-icon' : '', className: classNameInput || '' }, input, { maxLength: maxLength, value: this.state.currentValue, placeholder: placeholder, ref: this.setTitleInputRef, rows: 1, onBlur: this.handleTextareaBlur, onChange: this.handleTextareaChange, onFocus: this.handleTextareaFocus, onKeyDown: this.handleTextareaKeyDown })),
                touched &&
                    ((error && React.createElement("span", { styleName: "error" }, error)) ||
                        (warning && React.createElement("span", { styleName: "warning" }, warning))))));
    };
    TitleInput.defaultProps = {
        icon: React.createElement(FaFileText, null),
        maxLength: 500
    };
    return TitleInput;
}(React.Component));
exports.TitleInput = TitleInput;
//# sourceMappingURL=TitleInput.js.map