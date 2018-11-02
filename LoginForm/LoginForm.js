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
var fa_1 = require("react-icons/fa");
var redux_form_1 = require("redux-form");
var Button_1 = require("../Button");
var Input_1 = require("../Input");
var LoginForm = /** @class */ (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginForm.prototype.render = function () {
        var _a = this.props, title = _a.title, buttonText = _a.buttonText, handleSubmit = _a.handleSubmit, pristine = _a.pristine, submitting = _a.submitting;
        return (React.createElement("div", { styleName: "wrapper" },
            React.createElement("form", { styleName: "form", onSubmit: handleSubmit },
                title && React.createElement("h3", { styleName: "title" }, title),
                React.createElement(redux_form_1.Field, { name: "email", component: Input_1.Input, type: "email", icon: React.createElement(fa_1.FaUser, null) }),
                React.createElement(redux_form_1.Field, { name: "password", component: Input_1.Input, type: "password", icon: React.createElement(fa_1.FaLock, null) }),
                React.createElement(Button_1.Button, { type: "submit", stretch: true, primary: true, disabled: pristine || submitting, isLoading: submitting },
                    React.createElement("span", null, buttonText)))));
    };
    return LoginForm;
}(React.Component));
exports.LoginForm = LoginForm;
//# sourceMappingURL=LoginForm.js.map