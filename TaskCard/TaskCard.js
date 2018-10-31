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
var FaClose = require('react-icons/lib/fa/close');
var FaAlignJustify = require('react-icons/lib/fa/align-justify');
var addon_actions_1 = require("@storybook/addon-actions");
var TitleInput_1 = require("../TitleInput");
var index_1 = require("./index");
var TaskCard = /** @class */ (function (_super) {
    __extends(TaskCard, _super);
    function TaskCard(props) {
        var _this = _super.call(this, props) || this;
        _this.handleCloseClick = _this.handleCloseClick.bind(_this);
        return _this;
    }
    TaskCard.prototype.handleCloseClick = function (e) {
        e.preventDefault();
        var onClose = this.props.onClose;
        if (onClose) {
            onClose(e);
        }
    };
    TaskCard.prototype.render = function () {
        var _a = this.props, actions = _a.actions, isModal = _a.isModal, title = _a.title;
        return (React.createElement(React.Fragment, null,
            isModal && React.createElement("div", { styleName: "body-overlay" }),
            React.createElement("div", { styleName: isModal ? 'task-card-wrapper-modal' : undefined },
                React.createElement("div", { styleName: "task-card" },
                    React.createElement("div", { styleName: "title" },
                        React.createElement(TitleInput_1.TitleInput, { input: {
                                onBlur: addon_actions_1.action('onBlur'),
                                onChange: addon_actions_1.action('onChange'),
                                value: title
                            }, meta: {}, placeholder: "(empty)" })),
                    React.createElement("a", { href: "#", styleName: "button-close", onClick: this.handleCloseClick },
                        React.createElement(FaClose, null)),
                    React.createElement("div", { styleName: "task-details-container" },
                        React.createElement("div", { styleName: "task-details" },
                            React.createElement("div", { styleName: "container" },
                                React.createElement("h3", null,
                                    React.createElement(FaAlignJustify, null),
                                    " \u0414\u0435\u0442\u0430\u043B\u0438"),
                                React.createElement("div", { styleName: "details-container" })),
                            React.createElement("div", { styleName: "container" },
                                React.createElement(index_1.ActivityList, { list: this.props.activityList }))),
                        React.createElement("div", { styleName: "actions" },
                            React.createElement("div", { styleName: "action-block" },
                                React.createElement("h3", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
                                React.createElement("ul", { styleName: "actions" }, actions.map(function (a, i) { return React.createElement("li", { key: i }, a); })))))))));
    };
    return TaskCard;
}(React.Component));
exports.TaskCard = TaskCard;
//# sourceMappingURL=TaskCard.js.map