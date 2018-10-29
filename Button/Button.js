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
var cn = require("classnames");
var React = require("react");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.render = function () {
        var _a;
        var _b = this.props, children = _b.children, className = _b.className, danger = _b.danger, sm = _b.sm, lg = _b.lg, onClick = _b.onClick, primary = _b.primary, type = _b.type, float = _b.float, isLoading = _b.isLoading, disabled = _b.disabled, secondary = _b.secondary, stretch = _b.stretch, styles = _b.styles, xs = _b.xs;
        if (!styles) {
            return null;
        }
        return (React.createElement("button", { type: type, onClick: onClick, disabled: disabled || isLoading, className: cn(styles.button, className, (_a = {},
                _a[styles.xs] = xs,
                _a[styles.sm] = sm,
                _a[styles.lg] = lg,
                _a[styles.danger] = danger,
                _a[styles.primary] = primary,
                _a[styles.secondary] = secondary,
                _a[styles.float] = float,
                _a[styles.stretch] = stretch,
                _a)) }, isLoading ? (React.createElement("span", null, "loading...")
        /* <Loading color={this.getColor()} /> */
        ) : (React.createElement(React.Fragment, null,
            React.createElement("span", { className: styles.text }, children)))));
    };
    ;
    return Button;
}(React.PureComponent));
exports.Button = Button;
;
//# sourceMappingURL=Button.js.map