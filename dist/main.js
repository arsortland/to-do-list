/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const toDo = (title, description = \"\", notes = \"\", date, priority) => {\n  return {\n    title,\n    description,\n    notes,\n    date,\n    priority,\n  };\n};\n\nconst objektet = toDo(\"EnTittel\", \"enBeskrivelse\", \"Notater\", \"dato\", \"Pri#1\");\nconsole.log(objektet.title);\n\nobjektet.title = \"EnAnnenTittel\";\nconsole.log(objektet.title);\n\n// class ToDO {\n//   constructor(title, description, notes, date, priority) {\n//     this.title = title;\n//     this.description = description;\n//     this.notes = notes;\n//     this.date = date;\n//     this.priority = priority;\n//   }\n//   get getTitle() {\n//     return this.title;\n//   }\n\n//   set changeTitle(newTitle) {\n//     this.title = newTitle;\n//   }\n\n//   changeTitle(newOne) {\n//     this._title = newOne;\n//     return;\n//   }\n// }\n\n// const user = new ToDO(\n//   \"EnTittel\",\n//   \"EnBeskrivelse\",\n//   \"EtNotat\",\n//   \"DatoXX\",\n//   \"Pri#1\"\n// );\n\n// console.log(user.title);\n// user.title = \"Gunnar\";\n\n// console.log(user.title);\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;