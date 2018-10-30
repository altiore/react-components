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
var ColoredListItem = /** @class */ (function (_super) {
    __extends(ColoredListItem, _super);
    function ColoredListItem(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        _this.state = {
            filterKw: ''
        };
        return _this;
    }
    ColoredListItem.prototype.onClick = function (e) {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(this.props.item);
        }
    };
    ColoredListItem.prototype.render = function () {
        var _a = this.props.item, color = _a.color, title = _a.title;
        return (React.createElement("div", { styleName: "colored-list-item", onClick: this.onClick },
            React.createElement("div", { styleName: "bullet" },
                React.createElement("div", { styleName: "circle", style: { backgroundColor: color || 'transparent' } })),
            React.createElement("div", { styleName: "title" }, title)));
    };
    return ColoredListItem;
}(React.Component));
exports.ColoredListItem = ColoredListItem;
//# sourceMappingURL=ColoredListItem.js.map