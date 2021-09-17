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

/***/ "./src/contact_us.js":
/*!***************************!*\
  !*** ./src/contact_us.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactPage\": () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\r\n    const contacttDiv = document.createElement(\"div\")\r\n    const contactTitle = document.createElement(\"h2\")\r\n    contactTitle.innerHTML = \"About US\"\r\n\r\n    \r\n    \r\n    const socialLinksContainer = document.createElement(\"div\")\r\n    const facebookLink = document.createElement(\"i\")\r\n    facebookLink.classList = \"fab fa-facebook\"\r\n    const instagramLink = document.createElement(\"i\")\r\n    instagramLink.classList = \"fab fa-instagram\"\r\n    const twitterLink = document.createElement(\"i\")\r\n    twitterLink.classList = \"fab fa-twitter\"\r\n\r\n    socialLinksContainer.append(facebookLink, instagramLink, twitterLink)\r\n    contacttDiv.append(contactTitle, socialLinksContainer )\r\n\r\n    return contacttDiv\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact_us.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"header\": () => (/* binding */ header)\n/* harmony export */ });\nfunction header() {\r\n    const container = document.createElement('div')\r\n    container.classList = 'navigation'\r\n    const homeLink = document.createElement('a')\r\n    homeLink.innerText = \"Home\"\r\n    homeLink.id = \"home\"\r\n    const menuLink = document.createElement('a')\r\n    menuLink.innerText = \"Menu\"\r\n    menuLink.id = \"menu\"\r\n    const aboutLink = document.createElement('a')\r\n    aboutLink.innerText = \"AboutUs\"\r\n    aboutLink.id = \"about\"\r\n    container.append(homeLink, menuLink, aboutLink)\r\n\r\n    return container;\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page */ \"./src/main_page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_us */ \"./src/contact_us.js\");\n// import _ from 'lodash'\r\n\r\n\r\n\r\n\r\n\r\nconst heading = (0,_header__WEBPACK_IMPORTED_MODULE_2__.header)();\r\nconst myMenu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\r\nconst myMainPage = (0,_main_page__WEBPACK_IMPORTED_MODULE_0__.mainPage)();\r\nconst myContactPage = (0,_contact_us__WEBPACK_IMPORTED_MODULE_3__.contactPage)();\r\n\r\nconst content = document.querySelector('#content');\r\ncontent.append(heading)\r\n\r\n  const viewTab = (tab) => {\r\n    content.innerHTML = '';\r\n    content.append(heading, tab);\r\n  };\r\n  \r\n  const homeLink = document.getElementById('home')\r\n  const menuLink = document.getElementById('menu')\r\n  const aboutLink = document.getElementById('about')\r\n\r\n  homeLink.addEventListener('click', () => { viewTab(myMainPage); });\r\n  menuLink.addEventListener('click', () => { viewTab(myMenu); });\r\n  aboutLink.addEventListener('click', () => { viewTab(myContactPage); });\r\n  viewTab(myMainPage);\r\n  \r\n  \r\n\r\n  // content.appendChild(mainPage());\r\n  // const content = document.getElementById('content');\r\n\r\n  // const div1 = document.createElement('p');\r\n// div1.innerText = \"Hello\";\r\n\r\n// content.appendChild('div1');\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/restaurant.jpg */ \"./assets/restaurant.jpg\");\n\r\n\r\nfunction mainPage() {\r\n    const info = document.createElement('div')\r\n    const head = document.createElement('h1');\r\n    head.classList = 'rest-heading'\r\n    head.innerHTML = \"The Restaurant\"\r\n\r\n    const container = document.createElement('div')\r\n    container.classList = 'rest-cont'\r\n\r\n    const img = document.createElement('img')\r\n    img.src= _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__\r\n    container.appendChild(img)\r\n\r\n    const text = document.createElement('p')\r\n    text.classList = 'img-text'\r\n    text.innerText = \"The Restaurant is a high class Restaurant located in the leafy surburbs of Lavington, Nairobi - Kenya. The Restaurant offers affordable meals and drinks at an affordable price while still maintaining high quality standards of food as well as services. Be sure to visit us!\"\r\n    container.appendChild(text)\r\n    info.append(head, container)\r\n    \r\n\r\n    return info;\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/main_page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menuPage\": () => (/* binding */ menuPage)\n/* harmony export */ });\n/* harmony import */ var _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/steak.jpeg */ \"./assets/steak.jpeg\");\n\r\n\r\nfunction menuPage() {\r\n    const menuContainer = document.createElement('div')\r\n    menuContainer.classList = \"menu-container\"\r\n\r\n    const menuHeading = document.createElement('h2')\r\n    menuHeading.classList = \"our-menu\"\r\n    menuHeading.innerHTML = \"Our Menu\"\r\n//div to close two items\r\n    const firstDiv = document.createElement('div')\r\n    firstDiv.classList = \"first-container\"\r\n// start of div\r\n    const menuItem = document.createElement('div')\r\n    menuItem.classList = \"menu-class\"\r\n    const imgItem = document.createElement('img')\r\n    imgItem.classList = \"menu-image\"\r\n    imgItem.src= _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    menuItem.appendChild(imgItem)\r\n\r\n    const menuItemHeading = document.createElement('h3')\r\n    menuItemHeading.innerHTML = \"Grilled Steak\"\r\n\r\n    const menuItemDesc = document.createElement('p')\r\n    menuItemDesc.innerText = \"Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.\"\r\n\r\n    const itemPrice = document.createElement('p')\r\n    itemPrice.classList = \"price\"\r\n    itemPrice.innerText = \"KES 1290\"\r\n    menuItem.append(menuItemHeading, menuItemDesc, itemPrice)\r\n    //end of div\r\n    // start of div\r\n    const menuItemTwo = document.createElement('div')\r\n    menuItemTwo.classList = \"menu-class\"\r\n    const imgItemTwo = document.createElement('img')\r\n    imgItemTwo.classList = \"menu-image\"\r\n    imgItemTwo.src= _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\n    menuItemTwo.appendChild(imgItemTwo)\r\n\r\n    const menuItemHeadingTwo = document.createElement('h3')\r\n    menuItemHeadingTwo.innerHTML = \"Grilled Steak\"\r\n\r\n    const menuItemDescTwo = document.createElement('p')\r\n    menuItemDescTwo.innerText = \"Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.\"\r\n\r\n    const itemPriceTwo = document.createElement('p')\r\n    itemPriceTwo.classList = \"price\"\r\n    itemPriceTwo.innerText = \"KES 1290\"\r\n    menuItemTwo.append(menuItemHeadingTwo, menuItemDescTwo, itemPriceTwo)\r\n//end of div\r\n//div to close two items\r\nconst secondDiv = document.createElement('div')\r\nsecondDiv.classList = \"first-container second-cont\"\r\n// start of div\r\nconst menuItemThree = document.createElement('div')\r\nmenuItemThree.classList = \"menu-class\"\r\nconst imgItemThree = document.createElement('img')\r\nimgItemThree.classList = \"menu-image\"\r\nimgItemThree.src= _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\nmenuItemThree.appendChild(imgItemThree)\r\n\r\nconst menuItemHeadingThree = document.createElement('h3')\r\nmenuItemHeadingThree.innerHTML = \"Grilled Steak\"\r\n\r\nconst menuItemDescThree = document.createElement('p')\r\nmenuItemDescThree.innerText = \"Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.\"\r\n\r\nconst itemPriceThree = document.createElement('p')\r\nitemPriceThree.classList = \"price\"\r\nitemPriceThree.innerText = \"KES 1290\"\r\nmenuItemThree.append(menuItemHeadingThree, menuItemDescThree, itemPriceThree)\r\n\r\n//start of div\r\nconst menuItemFour = document.createElement('div')\r\nmenuItemFour.classList = \"menu-class\"\r\nconst imgItemFour = document.createElement('img')\r\nimgItemFour.classList = \"menu-image\"\r\nimgItemFour.src= _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\r\nmenuItemFour.appendChild(imgItemFour)\r\n\r\nconst menuItemHeadingFour = document.createElement('h3')\r\nmenuItemHeadingFour.innerHTML = \"Grilled Steak\"\r\n\r\nconst menuItemDescFour = document.createElement('p')\r\nmenuItemDescFour.innerText = \"Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.\"\r\n\r\nconst itemPriceFour = document.createElement('p')\r\nitemPriceFour.classList = \"price\"\r\nitemPriceFour.innerText = \"KES 1290\"\r\nmenuItemFour.append(menuItemHeadingFour, menuItemDescFour, itemPriceFour)\r\n\r\nfirstDiv.append(menuItem, menuItemTwo)\r\nsecondDiv.append(menuItemThree, menuItemFour)\r\nmenuContainer.append(menuHeading, firstDiv, secondDiv)\r\n\r\nreturn menuContainer;\r\n\r\n\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./assets/restaurant.jpg":
/*!*******************************!*\
  !*** ./assets/restaurant.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3056d112e04d2d379d17.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/restaurant.jpg?");

/***/ }),

/***/ "./assets/steak.jpeg":
/*!***************************!*\
  !*** ./assets/steak.jpeg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"710a281efdc7479d30b9.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./assets/steak.jpeg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;