"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoObserver_1 = require("./observers/TodoObserver"); // ضع المسار الصحيح
var printTasks = function (tasks) {
    console.log('Current Tasks:', tasks);
};
TodoObserver_1.default.subscribe(printTasks);
TodoObserver_1.default.addTask('TypeScript');
TodoObserver_1.default.addTask('Build Next.js Project');
