"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Work.js":
/*!****************************!*\
  !*** ./components/Work.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar work = [\n    {\n        name: \"Body Bell Records\",\n        href: \"https://body-bell-frontend.vercel.app/\"\n    },\n    {\n        name: \"Anonimusic\",\n        href: \"https://vocal-daffodil-44e825.netlify.app/\"\n    },\n    {\n        name: \"LandPost\",\n        href: \"https://landpost.herokuapp.com/blog\"\n    }\n];\nvar Work = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"mt-20 flex-colitems-center\",\n        children: work.map(function(work, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: work.href,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        children: work.name\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                        lineNumber: 18,\n                        columnNumber: 44\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                lineNumber: 18,\n                columnNumber: 17\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, _this);\n};\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1dvcmsuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUF5QjtBQUNHO0FBRTVCLElBQU1FLElBQUksR0FBRztJQUNUO1FBQUNDLElBQUksRUFBRSxtQkFBbUI7UUFDekJDLElBQUksRUFBQyx3Q0FBd0M7S0FBQztJQUM5QztRQUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNuQkMsSUFBSSxFQUFDLDRDQUE0QztLQUFDO0lBQ2xEO1FBQUNELElBQUksRUFBRSxVQUFVO1FBQ2pCQyxJQUFJLEVBQUMscUNBQXFDO0tBQUM7Q0FDL0M7QUFFRCxJQUFNQyxJQUFJLEdBQUcsV0FBTTtJQUNmLHFCQUNJLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyw0QkFBNEI7a0JBQzdDTCxJQUFJLENBQUNNLEdBQUcsQ0FBQyxTQUFDTixJQUFJLEVBQUNPLEtBQUssRUFBTTtZQUN2QixxQkFDUSw4REFBQ0MsSUFBRTswQkFBQyw0RUFBQ1Qsa0RBQUk7b0JBQUNHLElBQUksRUFBRUYsSUFBSSxDQUFDRSxJQUFJOzhCQUFFLDRFQUFDTyxHQUFDO2tDQUFFVCxJQUFJLENBQUNDLElBQUk7Ozs7OzZCQUFLOzs7Ozt5QkFBTzs7Ozs7cUJBQUssQ0FDaEU7UUFDTCxDQUFDLENBQUM7Ozs7O2FBQU0sQ0FDUDtBQUNMLENBQUM7QUFUS0UsS0FBQUEsSUFBSTtBQVdWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29yay5qcz9lZGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3Qgd29yayA9IFtcbiAgICB7bmFtZTogJ0JvZHkgQmVsbCBSZWNvcmRzJyxcbiAgICAgaHJlZjonaHR0cHM6Ly9ib2R5LWJlbGwtZnJvbnRlbmQudmVyY2VsLmFwcC8nfSxcbiAgICAge25hbWU6ICdBbm9uaW11c2ljJyxcbiAgICAgaHJlZjonaHR0cHM6Ly92b2NhbC1kYWZmb2RpbC00NGU4MjUubmV0bGlmeS5hcHAvJ30sXG4gICAgIHtuYW1lOiAnTGFuZFBvc3QnLFxuICAgICBocmVmOidodHRwczovL2xhbmRwb3N0Lmhlcm9rdWFwcC5jb20vYmxvZyd9XG5dXG5cbmNvbnN0IFdvcmsgPSAoKSA9PiB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdtdC0yMCBmbGV4LWNvbGl0ZW1zLWNlbnRlcic+XG4gICAge3dvcmsubWFwKCh3b3JrLGluZGV4KSA9PiAge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGxpPjxMaW5rIGhyZWY9e3dvcmsuaHJlZn0+PGE+e3dvcmsubmFtZX08L2E+PC9MaW5rPjwvbGk+XG4gICAgICAgIClcbiAgICB9KX08L3VsPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yayJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ3b3JrIiwibmFtZSIsImhyZWYiLCJXb3JrIiwidWwiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsImxpIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Work.js\n"));

/***/ })

});