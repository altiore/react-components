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
var moment = require("moment");
var React = require("react");
var ActivityItem = /** @class */ (function (_super) {
    __extends(ActivityItem, _super);
    function ActivityItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ActivityItem.prototype.render = function () {
        var _a = this.props, delimiter = _a.delimiter, description = _a.description, time = _a.time, userName = _a.userName, userPic = _a.userPic;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { styleName: "activity-item" },
                React.createElement("div", { styleName: "userpic" },
                    React.createElement("img", { src: userPic, alt: userName })),
                React.createElement("div", { styleName: "description" },
                    React.createElement("b", null, userName),
                    " ",
                    description),
                React.createElement("div", { styleName: "time", title: moment(time).format() }, moment(time)
                    .startOf('second')
                    .fromNow())),
            delimiter && React.createElement("hr", null)));
    };
    ActivityItem.defaultProps = {
        delimiter: false
    };
    return ActivityItem;
}(React.PureComponent));
exports.ActivityItem = ActivityItem;
//# sourceMappingURL=ActivityItem.js.map