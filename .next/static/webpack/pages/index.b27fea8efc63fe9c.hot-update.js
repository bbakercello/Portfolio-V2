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

/***/ "./components/ContactUs.js":
/*!*********************************!*\
  !*** ./components/ContactUs.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar ContactUs = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(useState(true), 2), isOpen = ref[0], setIsOpen = ref[1];\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_ogkm0hv\", \"template_6cwqt8l\", form.current, \"3RtjBFIhL4T952m7s\").then(function(result) {\n            console.log(result.text);\n            console.log(\"message sent\");\n            e.target.reset();\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-400 rounded-lg p-1 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            ref: form,\n            onSubmit: sendEmail,\n            className: \"flex flex-col mt-4 pl-3 pr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 \",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"user_name\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    name: \"user_email\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    className: \"p-1 rounded-sm h-20 work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    className: \"flex justify-center pt-1 pb-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg mt-2 mb-1 bg-slate-700 text-slate-100 w-16 font-bold pt-2 pb-2\",\n                        type: \"submit\",\n                        value: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                        lineNumber: 36,\n                        columnNumber: 90\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactUs, \"JA1TMBc+6EWRmDPxoU9fE0FS5ss=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQXNDO0FBQ0M7QUFDQTtBQUNHO0FBSzFDLElBQU1LLFNBQVMsR0FBRyxXQUFNOztJQUN0QixJQUFNQyxJQUFJLEdBQUdMLDZDQUFNLEVBQUU7SUFDckIsSUFBMEJNLEdBQWMsb0ZBQWRBLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBbkNDLE1BQU0sR0FBZUQsR0FBYyxHQUE3QixFQUFFRSxTQUFTLEdBQUlGLEdBQWMsR0FBbEI7SUFHdEIsSUFBTUcsU0FBUyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUVuQlYsaUVBQWdCLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUVJLElBQUksQ0FBQ1EsT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQ3ZGQyxJQUFJLENBQUMsU0FBQ0MsTUFBTSxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO1lBQ3pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDM0JQLENBQUMsQ0FBQ1MsTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ1ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxLQUFLLENBQUNILElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7a0JBQ25ELDRFQUFDbEIsTUFBSTtZQUFDbUIsR0FBRyxFQUFFbkIsSUFBSTtZQUFFb0IsUUFBUSxFQUFFaEIsU0FBUztZQUFFYyxTQUFTLEVBQUMsOEJBQThCOzs4QkFDNUUsOERBQUNHLE9BQUs7b0JBQUNILFNBQVMsRUFBQyxpQkFBaUI7OEJBQUUsTUFBSTs7Ozs7eUJBQVE7OEJBQ2hELDhEQUFDSSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsSUFBSSxFQUFDLFdBQVc7b0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lCQUFHOzhCQUM5RSw4REFBQ0csT0FBSztvQkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyxPQUFLOzs7Ozt5QkFBUTs4QkFDcEQsOERBQUNJLE9BQUs7b0JBQUNDLElBQUksRUFBQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsWUFBWTtvQkFBQ04sU0FBUyxFQUFDLDZCQUE2Qjs7Ozs7eUJBQUU7OEJBQy9FLDhEQUFDRyxPQUFLO29CQUFDSCxTQUFTLEVBQUMscUJBQXFCOzhCQUFDLFNBQU87Ozs7O3lCQUFROzhCQUN0RCw4REFBQ08sVUFBUTtvQkFBQ0QsSUFBSSxFQUFDLFNBQVNOO29CQUFBQSxTQUFTLEVBQUMsa0NBQWtDOzs7Ozt5QkFBRzs4QkFDdkUsOERBQUNyQixxREFBVTtvQkFBQzZCLFVBQVUsRUFBRTt3QkFBRUMsS0FBSyxFQUFFLEdBQUc7cUJBQUU7b0JBQUVULFNBQVMsRUFBQyxnQ0FBZ0M7OEJBQUMsNEVBQUNJLE9BQUs7d0JBQUNKLFNBQVMsRUFBQywyRUFBNEVLO3dCQUFBQSxJQUFJLEVBQUMsUUFBUTt3QkFBQ0ssS0FBSyxFQUFDLE1BQU07Ozs7OzZCQUFHOzs7Ozt5QkFBYTs7Ozs7O2lCQUNyTjs7Ozs7YUFJRCxDQUNOO0FBQ0osQ0FBQztHQWxDSzdCLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQW9DZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdFVzLmpzP2JhMzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBlbWFpbGpzIGZyb20gJ0BlbWFpbGpzL2Jyb3dzZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcblxuXG5cblxuY29uc3QgQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XG4gIGxldCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZW1haWxqcy5zZW5kRm9ybSgnc2VydmljZV9vZ2ttMGh2JywgJ3RlbXBsYXRlXzZjd3F0OGwnLCBmb3JtLmN1cnJlbnQsICczUnRqQkZJaEw0VDk1Mm03cycpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnRleHQpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlIHNlbnQnKVxuICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLW5ldXRyYWwtNDAwIHJvdW5kZWQtbGcgcC0xIG10LTInPlxuICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG10LTQgcGwtMyBwci0zJz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBwYi0yICcgPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIGNsYXNzTmFtZT0ncC0xIHJvdW5kZWQtc20gd29yayB0ZXh0LXhzJyAvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgcHQtMic+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJ1c2VyX2VtYWlsXCIgY2xhc3NOYW1lPSdwLTEgcm91bmRlZC1zbSB3b3JrIHRleHQteHMnLz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBwYi0yIHB0LTInPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCJjbGFzc05hbWU9J3AtMSByb3VuZGVkLXNtIGgtMjAgd29yayB0ZXh0LXhzJyAvPlxuICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0xIHBiLTEgJz48aW5wdXQgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIG10LTIgbWItMSBiZy1zbGF0ZS03MDAgIHRleHQtc2xhdGUtMTAwIHctMTYgZm9udC1ib2xkIHB0LTIgcGItMid0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz48L21vdGlvbi5kaXY+XG4gICAgPC9mb3JtPlxuXG5cbiAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RVczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJlbWFpbGpzIiwibW90aW9uIiwiRGlhbG9nIiwiQ29udGFjdFVzIiwiZm9ybSIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VuZEVtYWlsIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VuZEZvcm0iLCJjdXJyZW50IiwidGhlbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwidGFyZ2V0IiwicmVzZXQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidGV4dGFyZWEiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactUs.js\n"));

/***/ })

});