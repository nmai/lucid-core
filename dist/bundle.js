/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	(function webpackMissingModule() { throw new Error("Cannot find module \"--watch\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var op_1 = __webpack_require__(2);
	var Core = (function () {
	    function Core() {
	    }
	    Core.prototype.process = function (op) {
	        console.log('asdf');
	        var op2 = new op_1.Op();
	        console.log(op2.constructor);
	        console.log(op2.constructor);
	        return 2;
	    };
	    return Core;
	}());
	exports.Core = Core;


/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	var Op = (function () {
	    function Op() {
	    }
	    return Op;
	}());
	exports.Op = Op;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'
	const core = __webpack_require__(4)

	module.exports =  core


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var op_1 = __webpack_require__(5);
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


/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";
	var Op = (function () {
	    function Op() {
	    }
	    return Op;
	}());
	exports.Op = Op;


/***/ }
/******/ ]);