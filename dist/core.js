"use strict";
var op_1 = require('./models/op');
var Core = (function () {
    function Core() {
    }
    Core.prototype.process = function (op) {
        console.log('asdf');
        var op2 = new op_1.Op();
        console.log(typeof op2);
        console.log(op2.constructor);
        return 2;
    };
    return Core;
}());
exports.Core = Core;
