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
var fa_1 = require("react-icons/lib/fa");
var ActivityItem_1 = require("../ActivityItem");
var ActivityList = /** @class */ (function (_super) {
    __extends(ActivityList, _super);
    function ActivityList(props) {
        var _this = _super.call(this, props) || this;
        _this.handleToggleVisibleClick = _this.handleToggleVisibleClick.bind(_this);
        _this.state = {
            isVisible: _this.props.visible,
            toggleActionTitle: _this.props.visible ? 'Скрыть' : 'Показать'
        };
        return _this;
    }
    ActivityList.prototype.handleToggleVisibleClick = function (e) {
        e.preventDefault();
        this.setState({
            isVisible: !this.state.isVisible,
            toggleActionTitle: this.state.isVisible ? 'Показать' : 'Скрыть'
        });
    };
    ActivityList.prototype.render = function () {
        var list = this.props.list;
        var _a = this.state, isVisible = _a.isVisible, toggleActionTitle = _a.toggleActionTitle;
        return (React.createElement("div", { styleName: "activity-list-container" },
            React.createElement("div", { styleName: "header" },
                React.createElement("h3", null,
                    React.createElement(fa_1.FaList, null),
                    " \u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C"),
                React.createElement("a", { href: "#", onClick: this.handleToggleVisibleClick }, toggleActionTitle)),
            isVisible &&
                (list && list.length > 0 ? (React.createElement("div", { styleName: "list" }, list.map(function (item, i) { return React.createElement(ActivityItem_1.ActivityItem, __assign({ key: i }, item)); }))) : (React.createElement("div", { styleName: "no-activity" }, "\u0410\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438 \u043D\u0435\u0442")))));
    };
    ActivityList.defaultProps = {
        visible: true
    };
    return ActivityList;
}(React.Component));
exports.ActivityList = ActivityList;
//# sourceMappingURL=ActivityList.js.map