"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@storybook/react");
var React = require("react");
var index_1 = require("./index");
react_1.storiesOf('Atoms/Loader', module)
    .add('default', function () { return (React.createElement(index_1.Loader, null)); })
    .add('size = 20', function () { return (React.createElement(index_1.Loader, { size: 20 })); })
    .add('color = blue', function () { return (React.createElement(index_1.Loader, { color: 'blue' })); });
//# sourceMappingURL=Loader.stories.js.map