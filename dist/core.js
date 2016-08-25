// import { Operation } from './models/operation'
"use strict";
var Core = (function () {
    function Core() {
        console.log('constructed!');
    }
    Core.prototype.testFunc = function () {
        return 2;
    };
    //
    Core.prototype.process = function (op) {
    };
    return Core;
}());
exports.Core = Core;
