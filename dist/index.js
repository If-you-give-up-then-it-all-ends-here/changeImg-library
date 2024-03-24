/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeAnswerImg: () => (/* binding */ changeAnswerImg)\n/* harmony export */ });\nconst generateImgSrcArray = (targetImg)=>{\r\n\treturn targetImg.split(\"/\").pop().replace(\".png\", \"\").split(\"_\");\r\n}\r\n\r\nconst changeImgSrcForTarget = (targetImg) =>{\r\n\tlet replacing_img = \"\";\r\n\tlet array \t\t= generateImgSrcArray(targetImg)\r\n\r\n\tif(!array[array.length -1].includes(\"c\")){\r\n\t\tarray.push(\"c\")\r\n\t\treplacing_img = `${array.join(\"_\")}.png`\r\n\t}\r\n\r\n\treturn replacing_img\r\n}\r\nconst changeImgSrcForTargetWithMuliti = (targetImg, clickCount, count) =>{\r\n\tlet array = generateImgSrcArray(targetImg)\r\n\r\n\tif(!array[array.length -1].includes(\"c\")){\r\n\t\tif(clickCount[\"count\"] < count){\r\n\t\t\tarray.push(\"c\")\r\n\t\t\tclickCount[\"count\"] ++\r\n\t\t}\r\n\t\t\r\n\t}else{\r\n\t\tarray.splice(array.length -1, 1)\r\n\r\n\t\tclickCount[\"count\"] --\r\n\t}\r\n\treturn `${array.join(\"_\")}.png`\r\n}\r\n\r\n\r\nconst changeImgSrcForOthers = (targetImg, others) =>{\r\n\tlet replacing_img = \"\";\r\n\tlet array \t\t= generateImgSrcArray(targetImg)\r\n\tlet array_others\t= generateImgSrcArray(others)\r\n\r\n\tif(array[array.length -1].includes(\"c\")){\r\n\t\tif(array_others[array_others.length -1].includes(\"c\")){\r\n\t\t\tarray_others.splice(array_others.length -1, 1)\r\n\t\t\treplacing_img = `${array_others.join(\"_\")}.png`\r\n\t\t}\r\n\t}else{\r\n\t\tif(!array[array.length -1].includes(\"c\")){\r\n\t\t\tarray_others.push(\"c\")\r\n\t\t\treplacing_img = `${array_others.join(\"_\")}.png`\r\n\t\t}\r\n\t}\r\n\r\n\treturn replacing_img\r\n}\r\n\r\n\r\nconst changeAnswerImg = (answers, multi, count = \"\")=>{\r\n\tlet clickCount = {count: 0};\r\n\r\n\tconsole.log(clickCount);\r\n\tanswers.forEach((answer)=>{\r\n\t\tanswer.addEventListener(\"click\", (e)=>{\r\n\t\t\t// 選択した答えのimgタグを取得\r\n\t\t\tlet targetImg = e.target.src\r\n\t\t\tlet otherImgs = Array.from(answers).filter((answer) => answer !== e.target)\r\n\r\n\t\t\tif(!multi){\r\n\t\t\t\tif(changeImgSrcForTarget(targetImg) !== \"\"){\r\n\t\t\t\t\te.target.src= `img/${changeImgSrcForTarget(targetImg)}`\r\n\t\t\t\t}\r\n\t\t\t\tArray.from(otherImgs).forEach((otherImg)=>{\r\n\t\t\t\t\tif(otherImgs !== e.target){\r\n\t\t\t\t\t\tif(changeImgSrcForTarget(targetImg) !== \"\"){\r\n\t\t\t\t\t\t\te.target.src= `img/${changeImgSrcForTarget(targetImg)}`\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif(changeImgSrcForOthers(e.target.src, otherImg.src) !== \"\"){\r\n\t\t\t\t\t\t\totherImg.src= `img/${changeImgSrcForOthers(e.target.src, otherImg.src)}`\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t})\r\n\t\t\t}else{\r\n\t\t\t\te.target.src= `img/${changeImgSrcForTargetWithMuliti(targetImg, clickCount, count)}`\r\n\t\t\t}\r\n\t\t})\r\n\t})\r\n}\r\n\r\n\n\n//# sourceURL=webpack://changeimg-library/./index.js?");

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
/******/ })()
;