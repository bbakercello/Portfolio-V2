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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ContactUs = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setIsOpen = ref[1];\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_ogkm0hv\", \"template_6cwqt8l\", form.current, \"3RtjBFIhL4T952m7s\").then(function(result) {\n            console.log(result.text);\n            console.log(\"message sent\");\n            e.target.reset();\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-400 rounded-lg p-1 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            ref: form,\n            onSubmit: sendEmail,\n            className: \"flex flex-col mt-4 pl-3 pr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 \",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"user_name\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 32,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    name: \"user_email\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    className: \"p-1 rounded-sm h-20 work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    className: \"flex justify-center pt-1 pb-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg mt-2 mb-1 bg-slate-700 text-slate-100 w-16 font-bold pt-2 pb-2\",\n                        type: \"submit\",\n                        value: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 29,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactUs, \"26mVfDumtDDsKgra5EJ13fmQZqU=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFzQztBQUNDO0FBQ0E7QUFDRztBQUNUO0FBSWpDLElBQU1NLFNBQVMsR0FBRyxXQUFNOztJQUN0QixJQUFNQyxJQUFJLEdBQUdOLDZDQUFNLEVBQUU7SUFDckIsSUFBMEJJLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFBbkNHLE1BQU0sR0FBZUgsR0FBYyxHQUE3QixFQUFFSSxTQUFTLEdBQUlKLEdBQWMsR0FBbEI7SUFHdEIsSUFBTUssU0FBUyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN2QkEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUVuQlYsaUVBQWdCLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUVLLElBQUksQ0FBQ08sT0FBTyxFQUFFLG1CQUFtQixDQUFDLENBQ3ZGQyxJQUFJLENBQUMsU0FBQ0MsTUFBTSxFQUFLO1lBQ2RDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNLENBQUNHLElBQUksQ0FBQyxDQUFDO1lBQ3pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUM7WUFDM0JQLENBQUMsQ0FBQ1MsTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztRQUNyQixDQUFDLEVBQUUsU0FBQ0MsS0FBSyxFQUFLO1lBQ1ZMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxLQUFLLENBQUNILElBQUksQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHFCQUNFLDhEQUFDSSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7a0JBQ25ELDRFQUFDakIsTUFBSTtZQUFDa0IsR0FBRyxFQUFFbEIsSUFBSTtZQUFFbUIsUUFBUSxFQUFFaEIsU0FBUztZQUFFYyxTQUFTLEVBQUMsOEJBQThCOzs4QkFDNUUsOERBQUNHLE9BQUs7b0JBQUNILFNBQVMsRUFBQyxpQkFBaUI7OEJBQUUsTUFBSTs7Ozs7eUJBQVE7OEJBQ2hELDhEQUFDSSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsSUFBSSxFQUFDLFdBQVc7b0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lCQUFHOzhCQUM5RSw4REFBQ0csT0FBSztvQkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyxPQUFLOzs7Ozt5QkFBUTs4QkFDcEQsOERBQUNJLE9BQUs7b0JBQUNDLElBQUksRUFBQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsWUFBWTtvQkFBQ04sU0FBUyxFQUFDLDZCQUE2Qjs7Ozs7eUJBQUU7OEJBQy9FLDhEQUFDRyxPQUFLO29CQUFDSCxTQUFTLEVBQUMscUJBQXFCOzhCQUFDLFNBQU87Ozs7O3lCQUFROzhCQUN0RCw4REFBQ08sVUFBUTtvQkFBQ0QsSUFBSSxFQUFDLFNBQVNOO29CQUFBQSxTQUFTLEVBQUMsa0NBQWtDOzs7Ozt5QkFBRzs4QkFDdkUsOERBQUNyQixxREFBVTtvQkFBQzZCLFVBQVUsRUFBRTt3QkFBRUMsS0FBSyxFQUFFLEdBQUc7cUJBQUU7b0JBQUVULFNBQVMsRUFBQyxnQ0FBZ0M7OEJBSWhGLDRFQUFDSSxPQUFLO3dCQUFFSixTQUFTLEVBQUMsMkVBQTRFSzt3QkFBQUEsSUFBSSxFQUFDLFFBQVE7d0JBQUNLLEtBQUssRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBRzlHOzs7Ozs7aUJBQ1Y7Ozs7O2FBSUQsQ0FDTjtBQUNKLENBQUM7R0F6Q0s1QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUEyQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcz9iYTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdAZW1haWxqcy9icm93c2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5cbmNvbnN0IENvbnRhY3RVcyA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xuICBsZXQgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpXG5cblxuICBjb25zdCBzZW5kRW1haWwgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2Vfb2drbTBodicsICd0ZW1wbGF0ZV82Y3dxdDhsJywgZm9ybS5jdXJyZW50LCAnM1J0akJGSWhMNFQ5NTJtN3MnKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBzZW50JylcbiAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1uZXV0cmFsLTQwMCByb3VuZGVkLWxnIHAtMSBtdC0yJz5cbiAgICA8Zm9ybSByZWY9e2Zvcm19IG9uU3VibWl0PXtzZW5kRW1haWx9IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBtdC00IHBsLTMgcHItMyc+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgcGItMiAnID5OYW1lPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VyX25hbWVcIiBjbGFzc05hbWU9J3AtMSByb3VuZGVkLXNtIHdvcmsgdGV4dC14cycgLz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBwYi0yIHB0LTInPkVtYWlsPC9sYWJlbD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwidXNlcl9lbWFpbFwiIGNsYXNzTmFtZT0ncC0xIHJvdW5kZWQtc20gd29yayB0ZXh0LXhzJy8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgcGItMiBwdC0yJz5NZXNzYWdlPC9sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBuYW1lPVwibWVzc2FnZVwiY2xhc3NOYW1lPSdwLTEgcm91bmRlZC1zbSBoLTIwIHdvcmsgdGV4dC14cycgLz5cbiAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMiB9fSBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcHQtMSBwYi0xICc+XG4gXG4gICAgXG4gICAgICAgIFxuICAgICAgICA8aW5wdXQgIGNsYXNzTmFtZT0ncm91bmRlZC1sZyBtdC0yIG1iLTEgYmctc2xhdGUtNzAwICB0ZXh0LXNsYXRlLTEwMCB3LTE2IGZvbnQtYm9sZCBwdC0yIHBiLTIndHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Zvcm0+XG4gICAgXG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsImVtYWlsanMiLCJtb3Rpb24iLCJEaWFsb2ciLCJ1c2VTdGF0ZSIsIkNvbnRhY3RVcyIsImZvcm0iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJ0YXJnZXQiLCJyZXNldCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ0ZXh0YXJlYSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactUs.js\n"));

/***/ })

});