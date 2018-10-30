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
var ColoredListItem_1 = require("../ColoredListItem");
var Input_1 = require("../Input");
var ListBox = /** @class */ (function (_super) {
    __extends(ListBox, _super);
    function ListBox(props) {
        var _this = _super.call(this, props) || this;
        _this.onAddNewClick = _this.onAddNewClick.bind(_this);
        _this.onFilterChange = _this.onFilterChange.bind(_this);
        _this.state = {
            filterKw: ''
        };
        return _this;
    }
    ListBox.prototype.onAddNewClick = function (e) {
        e.preventDefault();
        if (this.props.onAddNewClick) {
            this.props.onAddNewClick(e);
        }
    };
    ListBox.prototype.onFilterChange = function (e) {
        this.setState({
            filterKw: e.target.value || ''
        });
    };
    ListBox.prototype.render = function () {
        var _a = this.props, filter = _a.filter, flat = _a.flat, addNew = _a.addNew, items = _a.items, onSelect = _a.onSelect;
        var filterKw = this.state.filterKw;
        return (React.createElement("div", { styleName: 'wrapper' + (flat ? '-flat' : '') },
            filter && (React.createElement(Input_1.Input, { icon: React.createElement(fa_1.FaSearch, null), input: { name: 'filterKw', onChange: this.onFilterChange }, meta: {}, placeholder: 'Поиск...' })),
            React.createElement("div", { styleName: "list" }, items.filter(function (item) { return item.title.toLowerCase().indexOf(filterKw.toLowerCase()) !== -1; }).map(function (item) { return (React.createElement(ColoredListItem_1.ColoredListItem, { item: item, onClick: onSelect })); })),
            addNew && (React.createElement("div", { styleName: "add-container" },
                React.createElement(Button_1.Button, { onClick: this.onAddNewClick },
                    React.createElement("span", null,
                        React.createElement(fa_1.FaPlus, null),
                        " \u0421\u043E\u0437\u0434\u0430\u0442\u044C"))))));
    };
    ListBox.defaultProps = {
        addNew: false,
        filter: false,
        flat: false,
    };
    return ListBox;
}(React.Component));
exports.ListBox = ListBox;
//# sourceMappingURL=ListBox.js.map