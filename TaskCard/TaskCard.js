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
var Button_1 = require("../Button");
var index_1 = require("./index");
var index_2 = require("./index");
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
        var _a = this.props, isModal = _a.isModal, title = _a.title;
        return (React.createElement(React.Fragment, null,
            isModal && React.createElement("div", { styleName: "body-overlay" }),
            React.createElement("div", { styleName: isModal ? 'task-card-wrapper-modal' : undefined },
                React.createElement("div", { styleName: "task-card" },
                    React.createElement(index_2.TaskCardHeader, { title: title }),
                    React.createElement("a", { href: "#", styleName: "button-close", onClick: this.handleCloseClick },
                        React.createElement(fa_1.FaClose, null)),
                    React.createElement("div", { styleName: "task-details-container" },
                        React.createElement("div", { styleName: "task-details" },
                            React.createElement("div", { styleName: "container" },
                                React.createElement("h3", null,
                                    React.createElement(fa_1.FaAlignJustify, null),
                                    " \u0414\u0435\u0442\u0430\u043B\u0438"),
                                React.createElement("div", { styleName: "details-container" })),
                            React.createElement("div", { styleName: "container" },
                                React.createElement(index_1.ActivityList, { list: this.props.activityList }))),
                        React.createElement("div", { styleName: "actions" },
                            React.createElement("div", { styleName: "action-block" },
                                React.createElement("h3", null, "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"),
                                React.createElement("ul", { styleName: "actions" },
                                    React.createElement("li", null,
                                        React.createElement(Button_1.Button, { type: "submit", stretch: true, primary: true },
                                            React.createElement("span", null, "\u0423\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0438"))),
                                    React.createElement("li", null,
                                        React.createElement(Button_1.Button, { type: "submit", stretch: true, primary: true },
                                            React.createElement("span", null, "\u041C\u0435\u0442\u043A\u0438"))),
                                    React.createElement("li", null,
                                        React.createElement(Button_1.Button, { type: "submit", stretch: true, primary: true },
                                            React.createElement("span", null, "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u044B\u0439 \u0441\u043F\u0438\u0441\u043E\u043A"))),
                                    React.createElement("li", null,
                                        React.createElement(Button_1.Button, { type: "submit", stretch: true, primary: true },
                                            React.createElement("span", null, "\u0412\u043B\u043E\u0436\u0435\u043D\u0438\u044F")))))))))));
    };
    return TaskCard;
}(React.Component));
exports.TaskCard = TaskCard;
//# sourceMappingURL=TaskCard.js.map