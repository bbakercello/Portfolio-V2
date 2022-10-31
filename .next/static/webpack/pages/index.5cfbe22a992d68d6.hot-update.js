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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { Dialog } from '@headlessui/react';\nvar ContactUs = function() {\n    _s();\n    var form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isOpen = ref[0], setIsOpen = ref[1];\n    var sendEmail = function(e) {\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"service_ogkm0hv\", \"template_6cwqt8l\", form.current, \"3RtjBFIhL4T952m7s\").then(function(result) {\n            console.log(result.text);\n            console.log(\"message sent\");\n            e.target.reset();\n            e.target.close();\n        }, function(error) {\n            console.log(error.text);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-neutral-400 rounded-lg p-1 mt-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            ref: form,\n            onSubmit: sendEmail,\n            className: \"flex flex-col mt-4 pl-3 pr-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 \",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    name: \"user_name\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"email\",\n                    name: \"user_email\",\n                    className: \"p-1 rounded-sm work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 36,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"font-bold pb-2 pt-2\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    name: \"message\",\n                    className: \"p-1 rounded-sm h-20 work text-xs\"\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 38,\n                    columnNumber: 7\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    className: \"flex justify-center pt-1 pb-1 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"rounded-lg mt-2 mb-1 bg-slate-700 text-slate-100 w-16 font-bold pt-2 pb-2\",\n                        type: \"submit\",\n                        value: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                        lineNumber: 40,\n                        columnNumber: 6\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n                    lineNumber: 39,\n                    columnNumber: 7\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/ContactUs.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContactUs, \"26mVfDumtDDsKgra5EJ13fmQZqU=\");\n_c = ContactUs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContactUs);\nvar _c;\n$RefreshReg$(_c, \"ContactUs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRhY3RVcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7OztBQUFzQztBQUNDO0FBQ0E7QUFDRztBQUNUO0FBQ2pDLDhDQUE4QztBQUc5QyxJQUFNTSxTQUFTLEdBQUcsV0FBTTs7SUFDdEIsSUFBTUMsSUFBSSxHQUFHTiw2Q0FBTSxFQUFFO0lBQ3JCLElBQTBCSSxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQW5DRyxNQUFNLEdBQWVILEdBQWMsR0FBN0IsRUFBRUksU0FBUyxHQUFJSixHQUFjLEdBQWxCO0lBR3RCLElBQU1LLFNBQVMsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDdkJBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFHbkJWLGlFQUFnQixDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFSyxJQUFJLENBQUNPLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxDQUN2RkMsSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBSztZQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDRyxJQUFJLENBQUMsQ0FBQztZQUN6QkYsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO1lBQzNCUCxDQUFDLENBQUNTLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUM7WUFDakJWLENBQUMsQ0FBQ1MsTUFBTSxDQUFDRSxLQUFLLEVBQUU7UUFDcEIsQ0FBQyxFQUFFLFNBQUNDLEtBQUssRUFBSztZQUNWTixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssS0FBSyxDQUFDSixJQUFJLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFFRCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsb0NBQW9DO2tCQUNuRCw0RUFBQ2xCLE1BQUk7WUFBQ21CLEdBQUcsRUFBRW5CLElBQUk7WUFBRW9CLFFBQVEsRUFBRWpCLFNBQVM7WUFBRWUsU0FBUyxFQUFDLDhCQUE4Qjs7OEJBQzVFLDhEQUFDRyxPQUFLO29CQUFDSCxTQUFTLEVBQUMsaUJBQWlCOzhCQUFFLE1BQUk7Ozs7O3lCQUFROzhCQUNoRCw4REFBQ0ksT0FBSztvQkFBQ0MsSUFBSSxFQUFDLE1BQU07b0JBQUNDLElBQUksRUFBQyxXQUFXO29CQUFDTixTQUFTLEVBQUMsNkJBQTZCOzs7Ozt5QkFBRzs4QkFDOUUsOERBQUNHLE9BQUs7b0JBQUNILFNBQVMsRUFBQyxxQkFBcUI7OEJBQUMsT0FBSzs7Ozs7eUJBQVE7OEJBQ3BELDhEQUFDSSxPQUFLO29CQUFDQyxJQUFJLEVBQUMsT0FBTztvQkFBQ0MsSUFBSSxFQUFDLFlBQVk7b0JBQUNOLFNBQVMsRUFBQyw2QkFBNkI7Ozs7O3lCQUFFOzhCQUMvRSw4REFBQ0csT0FBSztvQkFBQ0gsU0FBUyxFQUFDLHFCQUFxQjs4QkFBQyxTQUFPOzs7Ozt5QkFBUTs4QkFDdEQsOERBQUNPLFVBQVE7b0JBQUNELElBQUksRUFBQyxTQUFTTjtvQkFBQUEsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7eUJBQUc7OEJBQ3ZFLDhEQUFDdEIscURBQVU7b0JBQUM4QixVQUFVLEVBQUU7d0JBQUVDLEtBQUssRUFBRSxHQUFHO3FCQUFFO29CQUFFVCxTQUFTLEVBQUMsZ0NBQWdDOzhCQUNuRiw0RUFBQ0ksT0FBSzt3QkFBQ0osU0FBUyxFQUFDLDJFQUE0RUs7d0JBQUFBLElBQUksRUFBQyxRQUFRO3dCQUFDSyxLQUFLLEVBQUMsTUFBTTs7Ozs7NkJBQUc7Ozs7O3lCQUMxRzs7Ozs7O2lCQUNWOzs7OzthQUlELENBQ047QUFDSixDQUFDO0dBdkNLN0IsU0FBUztBQUFUQSxLQUFBQSxTQUFTO0FBeUNmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0VXMuanM/YmEzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IERpYWxvZyB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBEaWFsb2cgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5cblxuY29uc3QgQ29udGFjdFVzID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gdXNlUmVmKCk7XG4gIGxldCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUodHJ1ZSlcblxuXG4gIGNvbnN0IHNlbmRFbWFpbCA9IChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cbiAgICBlbWFpbGpzLnNlbmRGb3JtKCdzZXJ2aWNlX29na20waHYnLCAndGVtcGxhdGVfNmN3cXQ4bCcsIGZvcm0uY3VycmVudCwgJzNSdGpCRkloTDRUOTUybTdzJylcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudGV4dCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2Ugc2VudCcpXG4gICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgICAgICBlLnRhcmdldC5jbG9zZSgpXG4gICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci50ZXh0KTtcbiAgICAgIH0pO1xuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctbmV1dHJhbC00MDAgcm91bmRlZC1sZyBwLTEgbXQtMic+XG4gICAgPGZvcm0gcmVmPXtmb3JtfSBvblN1Ym1pdD17c2VuZEVtYWlsfSBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgbXQtNCBwbC0zIHByLTMnPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgJyA+TmFtZTwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcl9uYW1lXCIgY2xhc3NOYW1lPSdwLTEgcm91bmRlZC1zbSB3b3JrIHRleHQteHMnIC8+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdmb250LWJvbGQgcGItMiBwdC0yJz5FbWFpbDwvbGFiZWw+XG4gICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cInVzZXJfZW1haWxcIiBjbGFzc05hbWU9J3AtMSByb3VuZGVkLXNtIHdvcmsgdGV4dC14cycvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nZm9udC1ib2xkIHBiLTIgcHQtMic+TWVzc2FnZTwvbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgbmFtZT1cIm1lc3NhZ2VcImNsYXNzTmFtZT0ncC0xIHJvdW5kZWQtc20gaC0yMCB3b3JrIHRleHQteHMnIC8+XG4gICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0gY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHB0LTEgcGItMSAnPlxuICAgICA8aW5wdXQgY2xhc3NOYW1lPSdyb3VuZGVkLWxnIG10LTIgbWItMSBiZy1zbGF0ZS03MDAgIHRleHQtc2xhdGUtMTAwIHctMTYgZm9udC1ib2xkIHB0LTIgcGItMid0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTZW5kXCIgLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZm9ybT5cbiAgICBcblxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0VXM7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiZW1haWxqcyIsIm1vdGlvbiIsIkRpYWxvZyIsInVzZVN0YXRlIiwiQ29udGFjdFVzIiwiZm9ybSIsImlzT3BlbiIsInNldElzT3BlbiIsInNlbmRFbWFpbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlbmRGb3JtIiwiY3VycmVudCIsInRoZW4iLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsInRhcmdldCIsInJlc2V0IiwiY2xvc2UiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwidGV4dGFyZWEiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ContactUs.js\n"));

/***/ })

});