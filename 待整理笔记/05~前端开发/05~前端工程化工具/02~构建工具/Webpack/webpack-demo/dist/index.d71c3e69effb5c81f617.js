(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: numToWord, wordToNum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numToWord\", function() { return numToWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wordToNum\", function() { return wordToNum; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ref_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ref.json */ \"./src/ref.json\");\nvar _ref_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./ref.json */ \"./src/ref.json\", 1);\n\r\n\r\n\r\nfunction numToWord(num) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(\r\n    _ref_json__WEBPACK_IMPORTED_MODULE_1__,\r\n    (accum, ref) => {\r\n      return ref.num === num ? ref.word : accum;\r\n    },\r\n    ''\r\n  );\r\n}\r\n\r\nfunction wordToNum(word) {\r\n  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.reduce(\r\n    _ref_json__WEBPACK_IMPORTED_MODULE_1__,\r\n    (accum, ref) => {\r\n      return ref.word === word && word.toLowerCase() ? ref.num : accum;\r\n    },\r\n    -1\r\n  );\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ref.json":
/*!**********************!*\
  !*** ./src/ref.json ***!
  \**********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

eval("module.exports = [{\"num\":1,\"word\":\"One\"},{\"num\":2,\"word\":\"Two\"},{\"num\":3,\"word\":\"Three\"},{\"num\":4,\"word\":\"Four\"},{\"num\":5,\"word\":\"Five\"},{\"num\":0,\"word\":\"Zero\"}];\n\n//# sourceURL=webpack:///./src/ref.json?");

/***/ })

},[["./src/index.js","runtime","vendors"]]]);