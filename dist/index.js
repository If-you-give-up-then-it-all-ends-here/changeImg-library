/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["changeImgLibrary"] = factory();
	else
		root["changeImgLibrary"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeAnswerImg: () => (/* binding */ changeAnswerImg)\n/* harmony export */ });\nconst generateImgSrcArray = (targetImg, extension)=>{\r\n\treturn targetImg.split(\"/\").pop().replace(`.${extension}`, \"\").split(\"_\");\r\n}\r\n\r\nconst hasAfter = (array, name)=>{\r\n\treturn array[array.length - 1].includes(name);\r\n}\r\n\r\nconst changeImgSrcForTarget = (targetImg, extension, name) =>{\r\n\tlet replacing_img = \"\";\r\n\tlet array \t\t= generateImgSrcArray(targetImg, extension)\r\n\r\n\tif(!hasAfter(array)){\r\n\t\tarray.push(name)\r\n\t\treplacing_img = `${array.join(\"_\")}.${extension}`\r\n\t}\r\n\treturn replacing_img\r\n\r\n}\r\nconst changeImgSrcForTargetWithMuliti = (targetImg, clickCount, extension, count, name) =>{\r\n\tlet array = generateImgSrcArray(targetImg, extension)\r\n\r\n\t // \"after\" を追加または削除する条件をチェック\r\n\t if (hasAfter(array)) {\r\n\t     array.splice(array.length - 1, 1); // \"after\" があれば削除\r\n\t     clickCount[\"count\"]--; // クリックカウントを減少\r\n\t } else if (clickCount[\"count\"] < count) {\r\n\t     array.push(name); // \"after\" を追加\r\n\t     clickCount[\"count\"]++; // クリックカウントを増加\r\n\t }\r\n\r\n\treturn `${array.join(\"_\")}.${extension}`\r\n}\r\n\r\n\r\nconst changeImgSrcForOthers = (targetImg, others, extension, name) =>{\r\n\tlet replacing_img = \"\";\r\n\tlet array \t\t= generateImgSrcArray(targetImg)\r\n\tlet array_others\t= generateImgSrcArray(others)\r\n\r\n\tif(hasAfter(array)){\r\n\t\tif(hasAfter(array_others)){\r\n\t\t\tarray_others.splice(array_others.length -1, 1)\r\n\t\t\treplacing_img = `${array_others.join(\"_\")}.${extension}`\r\n\t\t}\r\n\t}else{\r\n\t\tif(!hasAfter(array)){\r\n\t\t\tarray_others.push(name)\r\n\t\t\treplacing_img = `${array_others.join(\"_\")}.${extension}`\r\n\t\t}\r\n\t}\r\n\treturn replacing_img\r\n}\r\n\r\n\r\nconst changeAnswerImg = (answers, extension, count, name)=>{\r\n\tlet clickCount = {count: 0};\r\n\tanswers.forEach((answer)=>{\r\n\t\tanswer.addEventListener(\"click\", (e)=>{\r\n\t\t\t// 選択した答えのimgタグを取得\r\n\t\t\tlet targetImg = e.target.src\r\n\t\t\tlet otherImgs = Array.from(answers).filter((answer) => answer !== e.target)\r\n\r\n\t\t\tif(count == 1){\r\n\t\t\t\tif(changeImgSrcForTarget(targetImg, extension, name) !== \"\"){\r\n\t\t\t\t\te.target.src= `img/${changeImgSrcForTarget(targetImg, extension, name)}`\r\n\t\t\t\t}\r\n\t\t\t\tArray.from(otherImgs).forEach((otherImg)=>{\r\n\t\t\t\t\tif(otherImgs !== e.target){\r\n\t\t\t\t\t\tif(changeImgSrcForOthers(e.target.src, otherImg.src, extension, name) !== \"\"){\r\n\t\t\t\t\t\t\totherImg.src= `img/${changeImgSrcForOthers(e.target.src, otherImg.src, extension, name)}`\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t}else{\r\n\t\r\n\t\t\t\tArray.from(otherImgs).forEach((otherImg)=>{\r\n\t\t\t\t\tif(otherImg !== e.target && clickCount[\"count\"] == 0){\r\n\t\t\t\t\t\tlet array = generateImgSrcArray(otherImg.src, extension)\r\n\t\t\t\t\t\tlet array2 = generateImgSrcArray(targetImg, extension)\r\n\t\t\t\t\t\tif(hasAfter(array)){\r\n\t\t\t\t\t\t\tclickCount[\"count\"] = 1\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(hasAfter(array2)){\r\n\t\t\t\t\t\t\tclickCount[\"count\"] = 1\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t\r\n\t\t\t\te.target.src= `img/${changeImgSrcForTargetWithMuliti(targetImg, clickCount, extension, count, name)}`\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\n\r\n\n\n//# sourceURL=webpack://changeImgLibrary/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});