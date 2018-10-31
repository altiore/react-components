"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSSModules = require("react-css-modules");
var ActivityList_1 = require("./ActivityList");
var s = require("./style.m.scss");
var TaskCard_1 = require("./TaskCard");
var ActivityList = CSSModules(ActivityList_1.ActivityList, s);
exports.ActivityList = ActivityList;
var TaskCard = CSSModules(TaskCard_1.TaskCard, s);
exports.TaskCard = TaskCard;
//# sourceMappingURL=index.js.map