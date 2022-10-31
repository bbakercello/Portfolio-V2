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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ContactUs = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_ogkm0hv\", \"template_6cwqt8l\", form.current, \"3RtjBFIhL4T952m7s\").then(function(result) {\n            console.log(result.text);\n            console.log(\"message sent\");\n            e.target.reset();\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-400 rounded-lg p-1 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            ref: form,\n            onSubmit: sendEmail,\n            className: \"flex flex-col mt-4 pl-3 pr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 \",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"user_name\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    name: \"user_email\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    className: \"p-1 rounded-sm h-20 work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    className: \"flex justify-center pt-1 pb-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \" bg-slate-700 text-slate-100 w-16 font-bold pt-2 pb-2\",\n                        type: \"submit\",\n                        value: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                        lineNumber: 29,\n                        columnNumber: 90\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 22,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactUs, \"dQhLC9DEDZP9Q6oVJIWRdCVKDdw=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFzQztBQUNDO0FBQ0E7QUFDdkMsSUFBTUksU0FBUyxHQUFHLFdBQU07O0lBQ3RCLElBQU1DLElBQUksR0FBR0osNkNBQU0sRUFBRTtJQUVyQixJQUFNSyxTQUFTLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3ZCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO1FBRW5CTixpRUFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRUcsSUFBSSxDQUFDSyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsQ0FDdkZDLElBQUksQ0FBQyxTQUFDQyxNQUFNLEVBQUs7WUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLENBQUM7WUFDekJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQztZQUMzQlAsQ0FBQyxDQUFDUyxNQUFNLENBQUNDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBRSxTQUFDQyxLQUFLLEVBQUs7WUFDVkwsT0FBTyxDQUFDQyxHQUFHLENBQUNJLEtBQUssQ0FBQ0gsSUFBSSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9DQUFvQztrQkFDbkQsNEVBQUNmLE1BQUk7WUFBQ2dCLEdBQUcsRUFBRWhCLElBQUk7WUFBRWlCLFFBQVEsRUFBRWhCLFNBQVM7WUFBRWMsU0FBUyxFQUFDLDhCQUE4Qjs7OEJBQzVFLDhEQUFDRyxPQUFLO29CQUFDSCxTQUFTLEVBQUMsaUJBQWlCOzhCQUFFLE1BQUk7Ozs7O3lCQUFROzhCQUNoRCw4REFBQ0ksT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxXQUFXO29CQUFDTixTQUFTLEVBQUMsNkJBQTZCOzs7Ozt5QkFBRzs4QkFDOUUsOERBQUNHLE9BQUs7b0JBQUNILFNBQVMsRUFBQyxxQkFBcUI7OEJBQUMsT0FBSzs7Ozs7eUJBQVE7OEJBQ3BELDhEQUFDSSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsT0FBTztvQkFBQ0MsSUFBSSxFQUFDLFlBQVk7b0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lCQUFFOzhCQUMvRSw4REFBQ0csT0FBSztvQkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyxTQUFPOzs7Ozt5QkFBUTs4QkFDdEQsOERBQUNPLFVBQVE7b0JBQUNELElBQUksRUFBQyxTQUFTTjtvQkFBQUEsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7eUJBQUc7OEJBQ3ZFLDhEQUFDakIscURBQVU7b0JBQUN5QixVQUFVLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxHQUFHO3FCQUFFO29CQUFFVCxTQUFTLEVBQUMsZ0NBQWdDOzhCQUFDLDRFQUFDSSxPQUFLO3dCQUFDSixTQUFTLEVBQUMsdURBQXVESzt3QkFBQUEsSUFBSSxFQUFDLFFBQVE7d0JBQUNLLEtBQUssRUFBQyxNQUFNOzs7Ozs2QkFBRzs7Ozs7eUJBQWE7Ozs7OztpQkFDaE07Ozs7O2FBQ0QsQ0FDTjtBQUNKLENBQUM7R0E3QksxQixTQUFTO0FBQVRBLEtBQUFBLFNBQVM7QUErQmYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcz9iYTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZW1haWxqcyBmcm9tICdAZW1haWxqcy9icm93c2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuY29uc3QgQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2VuZEVtYWlsID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX29na20waHYnLCAndGVtcGxhdGVfNmN3cXQ4bCcsIGZvcm0uY3VycmVudCwgJzNSdGpCRkloTDRUOTUybTdzJylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2Ugc2VudCcpXG4gICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctbmV1dHJhbC00MDAgcm91bmRlZC1sZyBwLTEgbXQtMic+XG4gICAgPGZvcm0gcmVmPXtmb3JtfSBvblN1Ym1pdD17c2VuZEVtYWlsfSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbXQtNCBwbC0zIHByLTMnPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgJyA+TmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcl9uYW1lXCIgY2xhc3NOYW1lPSdwLTEgcm91bmRlZC1zbSB3b3JrIHRleHQteHMnIC8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgcGItMiBwdC0yJz5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXJfZW1haWxcIiBjbGFzc05hbWU9J3AtMSByb3VuZGVkLXNtIHdvcmsgdGV4dC14cycvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgcHQtMic+TWVzc2FnZTwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcImNsYXNzTmFtZT0ncC0xIHJvdW5kZWQtc20gaC0yMCB3b3JrIHRleHQteHMnIC8+XG4gICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LTEgcGItMSAnPjxpbnB1dCBjbGFzc05hbWU9JyBiZy1zbGF0ZS03MDAgdGV4dC1zbGF0ZS0xMDAgdy0xNiBmb250LWJvbGQgcHQtMiBwYi0yJ3R5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlNlbmRcIiAvPjwvbW90aW9uLmRpdj5cbiAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiZW1haWxqcyIsIm1vdGlvbiIsIkNvbnRhY3RVcyIsImZvcm0iLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsImN1cnJlbnQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsInRleHQiLCJ0YXJnZXQiLCJyZXNldCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ0ZXh0YXJlYSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContactUs.js\n"));

/***/ })

});