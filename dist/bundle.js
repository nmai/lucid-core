// import { Operation } from './models/operation'
System.register("core", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Core;
    return {
        setters:[],
        execute: function() {
            Core = (function () {
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
            exports_1("Core", Core);
        }
    }
});
