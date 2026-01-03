"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoObserver = /** @class */ (function () {
    function TodoObserver() {
        this.subscribers = [];
        this.tasks = [];
    }
    TodoObserver.prototype.subscribe = function (fn) {
        this.subscribers.push(fn);
    };
    TodoObserver.prototype.addTask = function (task) {
        this.tasks.push(task);
        this.notify();
    };
    TodoObserver.prototype.notify = function () {
        var _this = this;
        this.subscribers.forEach(function (s) { return s(_this.tasks); });
    };
    return TodoObserver;
}());
exports.default = new TodoObserver();
