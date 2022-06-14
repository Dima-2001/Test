/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("// const { listenerCount } = require(\"gulp\");\r\n\r\nconsole.log('file 1');\r\n/*\r\nfunction ibg(){\r\n\r\n    let ibg=document.querySelectorAll(\".ibg\");\r\n    for (var i = 0; i < ibg.length; i++) {\r\n    if(ibg[i].querySelector('img')){\r\n    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';\r\n        }\r\n    }\r\n}\r\n    \r\nibg();\r\n*/\r\n// Кнопка\r\n\r\nconst swiperMenu = new Swiper('.menu', {\r\n    loop: true,\r\n    spaceBetween: 10,\r\n    slidesPerView: \"auto\",\r\n    //mousewheel: true,\r\n    centeredSlides: true,\r\n\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n      },\r\n\r\n    breakpoints: {\r\n        280: {\r\n            slidesPerView: 1,\r\n        },\r\n        320: {\r\n            slidesPerView: 1,\r\n        },\r\n        425: {\r\n            slidesPerView: 2.5,\r\n        },\r\n\r\n        768: {\r\n            slidesPerView: 4,\r\n        }\r\n    }\r\n    \r\n});\r\n\r\nconst swiper = new Swiper('.slider', {\r\n    loop: true,\r\n    spaceBetween: 20,\r\n    slidesPerView: 5,\r\n    //mousewheel: true,\r\n    centeredSlides: true,\r\n\r\n    breakpoints: {\r\n        320: {\r\n            slidesPerView: \"auto\",\r\n            spaceBetween: 15,\r\n        },\r\n        425: {\r\n            slidesPerView: \"auto\",\r\n        },\r\n        600: {\r\n            slidesPerView: \"auto\",\r\n        },\r\n        768: {\r\n            slidesPerView: 3.5,\r\n        }\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack://restoran/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\r\n\r\n\n\n//# sourceURL=webpack://restoran/./src/assets/js/file2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	
/******/ })()
;