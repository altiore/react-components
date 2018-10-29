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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var CSSModules = require("react-css-modules");
var fa_1 = require("react-icons/lib/fa");
var ts_keycode_enum_1 = require("ts-keycode-enum");
var s = require("./style.m.scss");
var TaskCardHeaderJsx = /** @class */ (function (_super) {
    __extends(TaskCardHeaderJsx, _super);
    function TaskCardHeaderJsx(props) {
        var _this = _super.call(this, props) || this;
        _this.TitleInput = null;
        _this.setTitleInputRef = function (element) {
            _this.TitleInput = element;
        };
        _this.handleTextareaChange = _this.handleTextareaChange.bind(_this);
        _this.handleTextareaFocus = _this.handleTextareaFocus.bind(_this);
        _this.handleTextareaKeyDown = _this.handleTextareaKeyDown.bind(_this);
        _this.state = {
            isEdit: false,
            title: (_this.props.title || '').trim(),
            titlePrevious: (_this.props.title || '').trim()
        };
        return _this;
    }
    TaskCardHeaderJsx.prototype.componentDidMount = function () {
        this.autoHightTextarea();
    };
    TaskCardHeaderJsx.prototype.handleTextareaChange = function (e) {
        this.setState({
            title: e.currentTarget.value
        });
        this.autoHightTextarea();
    };
    TaskCardHeaderJsx.prototype.handleTextareaFocus = function (e) {
        this.setState({
            titlePrevious: this.state.title
        });
        this.autoHightTextarea();
    };
    TaskCardHeaderJsx.prototype.handleTextareaKeyDown = function (e) {
        var _this = this;
        if ([ts_keycode_enum_1.Key.Enter, ts_keycode_enum_1.Key.Escape].indexOf(e.keyCode) !== -1) {
            var props = {
                isEdit: false,
                title: this.state.titlePrevious
            };
            if (e.keyCode === ts_keycode_enum_1.Key.Enter) {
                props.title = (this.state.title || '').trim();
            }
            this.setState(props, function () {
                _this.TitleInput.blur();
                _this.autoHightTextarea();
                if (_this.state.title !== _this.state.titlePrevious && _this.props.onChange) {
                    _this.props.onChange(_this.state.title);
                }
            });
        }
        this.autoHightTextarea();
    };
    TaskCardHeaderJsx.prototype.autoHightTextarea = function () {
        this.TitleInput.style.height = 'auto';
        this.TitleInput.style.height = this.TitleInput.scrollHeight + 'px';
    };
    TaskCardHeaderJsx.prototype.render = function () {
        var _a = this.props, icon = _a.icon, maxLength = _a.maxLength;
        return (React.createElement("div", { styleName: "task-card-header" },
            icon || null,
            React.createElement("textarea", { value: this.state.title, maxLength: maxLength, placeholder: "(empty)", ref: this.setTitleInputRef, rows: 1, onChange: this.handleTextareaChange, onFocus: this.handleTextareaFocus, onKeyDown: this.handleTextareaKeyDown })));
    };
    TaskCardHeaderJsx.defaultProps = {
        icon: React.createElement(fa_1.FaFileText, null),
        maxLength: 500
    };
    return TaskCardHeaderJsx;
}(React.Component));
var TaskCardHeader = CSSModules(TaskCardHeaderJsx, s);
exports.TaskCardHeader = TaskCardHeader;
//# sourceMappingURL=TaskCardHeader.js.map