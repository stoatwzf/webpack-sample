webpackJsonp([1],{

/***/ "4yIG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = print;
function print(text){
	console.log(text);
}

/***/ }),

/***/ "BX9t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("M4fF");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_js__ = __webpack_require__("4yIG");



function component(){
	let element = document.createElement('div');

	element.innerHTML = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.join(['hello', 'webpack'], '');
	element.onclick = __WEBPACK_IMPORTED_MODULE_1__print_js__["a" /* default */].bind(null, 'hello webpack yahoo!');
	return element;
}

document.body.appendChild(component());

/***/ })

},["BX9t"]);