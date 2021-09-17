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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\n  const mainContactDiv = document.createElement('section');\n  mainContactDiv.classList = 'main-contact-div';\n  const contacttDiv = document.createElement('div');\n  contacttDiv.classList = 'main-contact';\n  const contactTitle = document.createElement('h2');\n  contactTitle.classList = 'contact-title';\n  contactTitle.innerHTML = 'Contact US';\n\n  const contactDesc = document.createElement('p');\n  contactDesc.classList = 'contact-desc';\n  contactDesc.innerText = 'Feel free to reach out to us via our Phone no which is 0720183849. You can also get to us via any of our social media pages.';\n  const socialLinksContainer = document.createElement('div');\n  socialLinksContainer.classList = 'social-links-container';\n  const facebookLink = document.createElement('i');\n  facebookLink.classList = 'fab fa-facebook get-social';\n  const instagramLink = document.createElement('i');\n  instagramLink.classList = 'fab fa-instagram get-social';\n  const twitterLink = document.createElement('i');\n  twitterLink.classList = 'fab fa-twitter get-social';\n\n  socialLinksContainer.append(facebookLink, instagramLink, twitterLink);\n  contacttDiv.append(contactTitle, contactDesc, socialLinksContainer);\n  mainContactDiv.appendChild(contacttDiv);\n\n  return mainContactDiv;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://restaurant-page/./src/contact_us.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction header() {\n  const container = document.createElement('div');\n  container.classList = 'navigation';\n  const homeLink = document.createElement('a');\n  homeLink.innerText = 'Home';\n  homeLink.id = 'home';\n  const menuLink = document.createElement('a');\n  menuLink.innerText = 'Menu';\n  menuLink.id = 'menu';\n  const aboutLink = document.createElement('a');\n  aboutLink.innerText = 'ContactUs';\n  aboutLink.id = 'about';\n  container.append(homeLink, menuLink, aboutLink);\n\n  return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main_page */ \"./src/main_page.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _contact_us__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_us */ \"./src/contact_us.js\");\n\n\n\n\n\nconst heading = (0,_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst myMenu = (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst myMainPage = (0,_main_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst myContactPage = (0,_contact_us__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\nconst content = document.querySelector('#content');\ncontent.append(heading);\n\nconst viewTab = (tab) => {\n  content.innerHTML = '';\n  content.append(heading, tab);\n};\n\nconst homeLink = document.getElementById('home');\nconst menuLink = document.getElementById('menu');\nconst aboutLink = document.getElementById('about');\n\nhomeLink.addEventListener('click', () => { viewTab(myMainPage); });\nmenuLink.addEventListener('click', () => { viewTab(myMenu); });\naboutLink.addEventListener('click', () => { viewTab(myContactPage); });\nviewTab(myMainPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main_page.js":
/*!**************************!*\
  !*** ./src/main_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/restaurant.jpg */ \"./assets/restaurant.jpg\");\n\n\nfunction mainPage() {\n  const info = document.createElement('div');\n  const head = document.createElement('h1');\n  head.classList = 'rest-heading';\n  head.innerHTML = 'The Restaurant';\n\n  const container = document.createElement('div');\n  container.classList = 'rest-cont';\n\n  const img = document.createElement('img');\n  img.src = _assets_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n  container.appendChild(img);\n\n  const text = document.createElement('p');\n  text.classList = 'img-text';\n  text.innerText = 'The Restaurant is a high class Restaurant located in the leafy surburbs of Lavington, Nairobi - Kenya. The Restaurant offers affordable meals and drinks at an affordable price while still maintaining high quality standards of food as well as services. Be sure to visit us!';\n  container.appendChild(text);\n  info.append(head, container);\n\n  return info;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mainPage);\n\n//# sourceURL=webpack://restaurant-page/./src/main_page.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/steak.jpeg */ \"./assets/steak.jpeg\");\n\n\nfunction menuPage() {\n  const menuContainer = document.createElement('div');\n  menuContainer.classList = 'menu-container';\n\n  const menuHeading = document.createElement('h2');\n  menuHeading.classList = 'our-menu';\n  menuHeading.innerHTML = 'Our Menu';\n  // div to close two items\n  const firstDiv = document.createElement('div');\n  firstDiv.classList = 'first-container';\n  // start of div\n  const menuItem = document.createElement('div');\n  menuItem.classList = 'menu-class';\n  const imgItem = document.createElement('img');\n  imgItem.classList = 'menu-image';\n  imgItem.src = _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  menuItem.appendChild(imgItem);\n\n  const menuItemHeading = document.createElement('h3');\n  menuItemHeading.innerHTML = 'Grilled Steak';\n\n  const menuItemDesc = document.createElement('p');\n  menuItemDesc.innerText = 'Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.';\n\n  const itemPrice = document.createElement('p');\n  itemPrice.classList = 'price';\n  itemPrice.innerText = 'KES 1290';\n  menuItem.append(menuItemHeading, menuItemDesc, itemPrice);\n  // end of div\n  // start of div\n  const menuItemTwo = document.createElement('div');\n  menuItemTwo.classList = 'menu-class';\n  const imgItemTwo = document.createElement('img');\n  imgItemTwo.classList = 'menu-image';\n  imgItemTwo.src = _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  menuItemTwo.appendChild(imgItemTwo);\n\n  const menuItemHeadingTwo = document.createElement('h3');\n  menuItemHeadingTwo.innerHTML = 'Grilled Steak';\n\n  const menuItemDescTwo = document.createElement('p');\n  menuItemDescTwo.innerText = 'Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.';\n\n  const itemPriceTwo = document.createElement('p');\n  itemPriceTwo.classList = 'price';\n  itemPriceTwo.innerText = 'KES 1290';\n  menuItemTwo.append(menuItemHeadingTwo, menuItemDescTwo, itemPriceTwo);\n  // end of div\n  // div to close two items\n  const secondDiv = document.createElement('div');\n  secondDiv.classList = 'first-container second-cont';\n  // start of div\n  const menuItemThree = document.createElement('div');\n  menuItemThree.classList = 'menu-class';\n  const imgItemThree = document.createElement('img');\n  imgItemThree.classList = 'menu-image';\n  imgItemThree.src = _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  menuItemThree.appendChild(imgItemThree);\n\n  const menuItemHeadingThree = document.createElement('h3');\n  menuItemHeadingThree.innerHTML = 'Grilled Steak';\n\n  const menuItemDescThree = document.createElement('p');\n  menuItemDescThree.innerText = 'Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.';\n\n  const itemPriceThree = document.createElement('p');\n  itemPriceThree.classList = 'price';\n  itemPriceThree.innerText = 'KES 1290';\n  menuItemThree.append(menuItemHeadingThree, menuItemDescThree, itemPriceThree);\n\n  // start of div\n  const menuItemFour = document.createElement('div');\n  menuItemFour.classList = 'menu-class';\n  const imgItemFour = document.createElement('img');\n  imgItemFour.classList = 'menu-image';\n  imgItemFour.src = _assets_steak_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n  menuItemFour.appendChild(imgItemFour);\n\n  const menuItemHeadingFour = document.createElement('h3');\n  menuItemHeadingFour.innerHTML = 'Grilled Steak';\n\n  const menuItemDescFour = document.createElement('p');\n  menuItemDescFour.innerText = 'Grilled Steak marinated in BBQ sauce, garlic, rosemary and Basil. Slow cooked under low heat till soft.';\n\n  const itemPriceFour = document.createElement('p');\n  itemPriceFour.classList = 'price';\n  itemPriceFour.innerText = 'KES 1290';\n  menuItemFour.append(menuItemHeadingFour, menuItemDescFour, itemPriceFour);\n\n  firstDiv.append(menuItem, menuItemTwo);\n  secondDiv.append(menuItemThree, menuItemFour);\n  menuContainer.append(menuHeading, firstDiv, secondDiv);\n\n  return menuContainer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

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