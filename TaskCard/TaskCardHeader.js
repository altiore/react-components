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
var fa_1 = require("react-icons/lib/fa");
var ts_keycode_enum_1 = require("ts-keycode-enum");
var TaskCardHeader = /** @class */ (function (_super) {
    __extends(TaskCardHeader, _super);
    function TaskCardHeader(props) {
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
    TaskCardHeader.prototype.componentDidMount = function () {
        this.autoHightTextarea();
    };
    TaskCardHeader.prototype.handleTextareaChange = function (e) {
        this.setState({
            title: e.currentTarget.value
        });
        this.autoHightTextarea();
    };
    TaskCardHeader.prototype.handleTextareaFocus = function (e) {
        this.setState({
            titlePrevious: this.state.title
        });
        this.autoHightTextarea();
    };
    TaskCardHeader.prototype.handleTextareaKeyDown = function (e) {
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
    TaskCardHeader.prototype.autoHightTextarea = function () {
        this.TitleInput.style.height = 'auto';
        this.TitleInput.style.height = this.TitleInput.scrollHeight + 'px';
    };
    TaskCardHeader.prototype.render = function () {
        var _a = this.props, icon = _a.icon, maxLength = _a.maxLength;
        return (React.createElement("div", { styleName: "task-card-header" },
            icon || null,
            React.createElement("textarea", { value: this.state.title, maxLength: maxLength, placeholder: "(empty)", ref: this.setTitleInputRef, rows: 1, onChange: this.handleTextareaChange, onFocus: this.handleTextareaFocus, onKeyDown: this.handleTextareaKeyDown })));
    };
    TaskCardHeader.defaultProps = {
        icon: React.createElement(fa_1.FaFileText, null),
        maxLength: 500
    };
    return TaskCardHeader;
}(React.Component));
exports.TaskCardHeader = TaskCardHeader;
//# sourceMappingURL=TaskCardHeader.js.map