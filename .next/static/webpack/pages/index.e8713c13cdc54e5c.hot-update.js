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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { Dialog } from '@headlessui/react';\nvar ContactUs = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setIsOpen = ref[1];\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_ogkm0hv\", \"template_6cwqt8l\", form.current, \"3RtjBFIhL4T952m7s\").then(function(result) {\n            console.log(result.text);\n            console.log(\"message sent\");\n            e.target.reset();\n        }, function(error) {\n            console.log(error.text);\n        });\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"hello\"\n        }, void 0, false, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-400 rounded-lg p-1 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            ref: form,\n            onSubmit: sendEmail,\n            className: \"flex flex-col mt-4 pl-3 pr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 \",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"user_name\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    name: \"user_email\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    className: \"p-1 rounded-sm h-20 work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    className: \"flex justify-center pt-1 pb-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg mt-2 mb-1 bg-slate-700 text-slate-100 w-16 font-bold pt-2 pb-2\",\n                        type: \"submit\",\n                        value: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                        lineNumber: 42,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 34,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactUs, \"26mVfDumtDDsKgra5EJ13fmQZqU=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFzQztBQUNDO0FBQ0E7QUFDRztBQUNUO0FBQ2pDLDhDQUE4QztBQUc5QyxJQUFNTSxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBTUMsSUFBSSxHQUFHTiw2Q0FBTSxFQUFFO0lBQ3JCLElBQTBCSSxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5DRyxNQUFNLEdBQWVILEdBQWMsR0FBN0IsRUFBRUksU0FBUyxHQUFJSixHQUFjLEdBQWxCO0lBR3RCLElBQU1LLFNBQVMsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFHbkJWLGlFQUFnQixDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFSyxJQUFJLENBQUNPLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUN2RkMsSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUN6QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQzNCUCxDQUFDLENBQUNTLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUNWTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksS0FBSyxDQUFDSCxJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILHFCQUNFLDhEQUFDSSxLQUFHO3NCQUFDLE9BQUs7Ozs7O2lCQUFNLENBQ2pCO0lBQ0wsQ0FBQztJQUVELHFCQUNFLDhEQUFDQSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7a0JBQ25ELDRFQUFDakIsTUFBSTtZQUFDa0IsR0FBRyxFQUFFbEIsSUFBSTtZQUFFbUIsUUFBUSxFQUFFaEIsU0FBUztZQUFFYyxTQUFTLEVBQUMsOEJBQThCOzs4QkFDNUUsOERBQUNHLE9BQUs7b0JBQUNILFNBQVMsRUFBQyxpQkFBaUI7OEJBQUUsTUFBSTs7Ozs7eUJBQVE7OEJBQ2hELDhEQUFDSSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsTUFBTTtvQkFBQ0MsSUFBSSxFQUFDLFdBQVc7b0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lCQUFHOzhCQUM5RSw4REFBQ0csT0FBSztvQkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyxPQUFLOzs7Ozt5QkFBUTs4QkFDcEQsOERBQUNJLE9BQUs7b0JBQUNDLElBQUksRUFBQyxPQUFPO29CQUFDQyxJQUFJLEVBQUMsWUFBWTtvQkFBQ04sU0FBUyxFQUFDLDZCQUE2Qjs7Ozs7eUJBQUU7OEJBQy9FLDhEQUFDRyxPQUFLO29CQUFDSCxTQUFTLEVBQUMscUJBQXFCOzhCQUFDLFNBQU87Ozs7O3lCQUFROzhCQUN0RCw4REFBQ08sVUFBUTtvQkFBQ0QsSUFBSSxFQUFDLFNBQVNOO29CQUFBQSxTQUFTLEVBQUMsa0NBQWtDOzs7Ozt5QkFBRzs4QkFDdkUsOERBQUNyQixxREFBVTtvQkFBQzZCLFVBQVUsRUFBRTt3QkFBRUMsS0FBSyxFQUFFLEdBQUc7cUJBQUU7b0JBQUVULFNBQVMsRUFBQyxnQ0FBZ0M7OEJBQ25GLDRFQUFDSSxPQUFLO3dCQUFDSixTQUFTLEVBQUMsMkVBQTRFSzt3QkFBQUEsSUFBSSxFQUFDLFFBQVE7d0JBQUNLLEtBQUssRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQzFHOzs7Ozs7aUJBQ1Y7Ozs7O2FBSUQsQ0FDTjtBQUNKLENBQUM7R0F6Q0s1QixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUEyQ2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcz9iYTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdAZW1haWxqcy9icm93c2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgRGlhbG9nIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IERpYWxvZyB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcblxuXG5jb25zdCBDb250YWN0VXMgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSB1c2VSZWYoKTtcbiAgbGV0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKVxuXG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cblxuICAgIGVtYWlsanMuc2VuZEZvcm0oJ3NlcnZpY2Vfb2drbTBodicsICd0ZW1wbGF0ZV82Y3dxdDhsJywgZm9ybS5jdXJyZW50LCAnM1J0akJGSWhMNFQ5NTJtN3MnKVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygnbWVzc2FnZSBzZW50JylcbiAgICAgICAgICBlLnRhcmdldC5yZXNldCgpO1xuICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IudGV4dCk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5oZWxsbzwvZGl2PlxuICAgICAgKVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLW5ldXRyYWwtNDAwIHJvdW5kZWQtbGcgcC0xIG10LTInPlxuICAgIDxmb3JtIHJlZj17Zm9ybX0gb25TdWJtaXQ9e3NlbmRFbWFpbH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIG10LTQgcGwtMyBwci0zJz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBwYi0yICcgPk5hbWU8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJfbmFtZVwiIGNsYXNzTmFtZT0ncC0xIHJvdW5kZWQtc20gd29yayB0ZXh0LXhzJyAvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgcHQtMic+RW1haWw8L2xhYmVsPlxuICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJ1c2VyX2VtYWlsXCIgY2xhc3NOYW1lPSdwLTEgcm91bmRlZC1zbSB3b3JrIHRleHQteHMnLz5cbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2ZvbnQtYm9sZCBwYi0yIHB0LTInPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJtZXNzYWdlXCJjbGFzc05hbWU9J3AtMSByb3VuZGVkLXNtIGgtMjAgd29yayB0ZXh0LXhzJyAvPlxuICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBwdC0xIHBiLTEgJz5cbiAgICAgPGlucHV0IGNsYXNzTmFtZT0ncm91bmRlZC1sZyBtdC0yIG1iLTEgYmctc2xhdGUtNzAwICB0ZXh0LXNsYXRlLTEwMCB3LTE2IGZvbnQtYm9sZCBwdC0yIHBiLTIndHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2VuZFwiIC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Zvcm0+XG4gICAgXG5cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdFVzOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsImVtYWlsanMiLCJtb3Rpb24iLCJEaWFsb2ciLCJ1c2VTdGF0ZSIsIkNvbnRhY3RVcyIsImZvcm0iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJ0YXJnZXQiLCJyZXNldCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ0ZXh0YXJlYSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactUs.js\n"));

/***/ })

});