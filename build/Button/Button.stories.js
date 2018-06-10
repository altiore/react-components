"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var React = require("react");
var index_1 = require("./index");
react_1.storiesOf('Atoms/Button', module)
    .add('default buttons', function () { return (React.createElement("div", null,
    React.createElement(index_1.Button, null, "Default"),
    React.createElement(index_1.Button, { little: true }, "Little Button"),
    React.createElement(index_1.Button, { secondary: true }, "Secondary Button"),
    React.createElement(index_1.Button, { secondary: true, little: true }, "Secondary Button"),
    React.createElement(index_1.Button, { stretch: true }, "Stretch Button"))); })
    .add('isLoading buttons', function () { return (React.createElement("div", null,
    React.createElement(index_1.Button, { isLoading: true }, "Default"),
    React.createElement(index_1.Button, { isLoading: true, little: true }, "Little Button"),
    React.createElement(index_1.Button, { isLoading: true, secondary: true }, "Secondary Button"),
    React.createElement(index_1.Button, { isLoading: true, secondary: true, little: true }, "Secondary Button"),
    React.createElement(index_1.Button, { isLoading: true, stretch: true }, "Stretch Button"))); })
    .add('disabled buttons', function () { return (React.createElement("div", null,
    React.createElement(index_1.Button, { disabled: true }, "Default"),
    React.createElement(index_1.Button, { disabled: true, little: true }, "Little Button"),
    React.createElement(index_1.Button, { disabled: true, secondary: true }, "Secondary Button"),
    React.createElement(index_1.Button, { disabled: true, secondary: true, little: true }, "Secondary Button"),
    React.createElement(index_1.Button, { disabled: true, stretch: true }, "Stretch Button"))); });
//# sourceMappingURL=Button.stories.js.map