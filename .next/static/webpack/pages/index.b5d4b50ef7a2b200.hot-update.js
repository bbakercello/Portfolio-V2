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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar Work = function(props) {\n    var work = [\n        {\n            name: \"Body Bell Records\",\n            href: \"https://body-bell-frontend.vercel.app/\",\n            description: \"Indie Electronic Record Label\",\n            background: \"https://i.imgur.com/cvn2bec.png\",\n            tech: \"NextJS, Tailwind, SpotifyAPI, MongoDB, Nodejs\",\n            git: \"https://github.com/bbakercello/body-bell-frontend\",\n            creators: \"Ben Baker\"\n        },\n        {\n            name: \"Anonimusic\",\n            href: \"https://vocal-daffodil-44e825.netlify.app/\",\n            description: \"Anonymous Audio Forum\",\n            tech: \"MERN, Cloudinary, React-Audio-Player\",\n            background: \"https://i.imgur.com/mMkPoQ3.jpg\",\n            git: \"https://github.com/hspinks2692/anonimusic_frontend\",\n            creators: \"Harvey Spinks / Tim Rathert / Ben Baker\"\n        },\n        {\n            name: \"LandPost\",\n            href: \"https://landpost.herokuapp.com/blog\",\n            description: \"Environmental Social Media\",\n            tech: \"Express, Nodejs, HTML, CSS\",\n            background: \"https://i.imgur.com/NpRstnS.jpg\",\n            git: \"https://github.com/bbakercello/Landpost\",\n            creators: \"David Robles / Victoria Vela / Ben Baker\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lg:scale-125 lg:p-20 mt-20 flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                id: \"work\",\n                className: \"select-none text-sky-700 flex justify-center text-2xl underline font-bold mb-10\",\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"md:flex md:justify-around sm:grid sm:justify-around lg-justify-evenly\",\n                children: work.map(function(work, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex p-3 grid justify-center sm:p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                whileHover: {\n                                    scale: 1.2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"ease-in duration-300 rounded-lg grid justify-items-stretch border-sky-700 w-40 hover:shadow-lg mb-6\",\n                                    href: work.href,\n                                    target: \"_blank\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                            className: \"font-bold font-italic justify-self-center pb-10 h-6\",\n                                            children: work.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \" scale-125 mb-4 shadow-lg rounded-lg\",\n                                            src: work.background,\n                                            alt: \"background\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover, {\n                                className: \"relative static flex justify-center\",\n                                children: function(param) {\n                                    var open = param.open;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Button, {\n                                                className: \"\\n                \".concat(open ? \"\" : \"text-opacity-90\", \"\\n                group flex justify-center items-center rounded-md bg-sky-700 px-3 h-8 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75\"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Learn\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 14\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Overlay, {\n                                                className: \"fixed inset-0 bg-black opacity-30\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                                enter: \"transition ease-out duration-200\",\n                                                enterFrom: \"opacity-0 translate-y-1\",\n                                                enterTo: \"opacity-100 translate-y-2\",\n                                                leave: \"transition ease-in duration-150\",\n                                                leaveFrom: \"opacity-100 translate-y-1\",\n                                                leaveTo: \"opacity-0 translate-y-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Panel, {\n                                                    className: \"absolute bottom-0 justify-center left-1/2 z-10 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"relative grid justify-center gap-2 bg-white p-3 lg:grid-cols-2\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: work.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 76,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-sm\",\n                                                                    children: \"Technology Used:\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 77,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-xs\",\n                                                                    children: work.tech\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 78,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-sm\",\n                                                                    children: \"Team:\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-xs\",\n                                                                    children: work.creators\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 80,\n                                                                    columnNumber: 17\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 15\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 13\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 13\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBaUM7Z0RBQ3ZDQyxTQUFTLEVBQUMsMkJBQTJCO2dEQUNyQ0MsT0FBTyxFQUFDLHlCQUF5QjswREFFbkMsNEVBQUN0Qyw0REFBYTtvREFBQ2MsU0FBUyxFQUFDLG1IQUFtSDs4REFFNUksNEVBQUNELEtBQUc7d0RBQUNDLFNBQVMsRUFBQyx1RUFBdUU7a0VBQ3BGLDRFQUFDRCxLQUFHOzREQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzs4RUFFN0UsOERBQUNELEtBQUc7OEVBQUdSLElBQUksQ0FBQ0csV0FBVzs7Ozs7eUVBQU87OEVBQzlCLDhEQUFDc0IsTUFBSTtvRUFBQ2hCLFNBQVMsRUFBQyxTQUFTOzhFQUFDLGtCQUFnQjs7Ozs7eUVBQU87OEVBQ2pELDhEQUFDRCxLQUFHO29FQUFDQyxTQUFTLEVBQUMsU0FBUzs4RUFBRVQsSUFBSSxDQUFDSyxJQUFJOzs7Ozt5RUFBTzs4RUFDMUMsOERBQUNHLEtBQUc7b0VBQUNDLFNBQVMsRUFBQyxTQUFTOzhFQUFDLE9BQUs7Ozs7O3lFQUFNOzhFQUNwQyw4REFBQ0QsS0FBRztvRUFBQ0MsU0FBUyxFQUFDLFNBQVM7OEVBQUVULElBQUksQ0FBQ08sUUFBUTs7Ozs7eUVBQU87Ozs7OztpRUFDeEM7Ozs7OzZEQUVBOzs7Ozt5REFDSTs7Ozs7cURBQ0g7O29EQUNaO2lDQUNKOzs7OztxQ0FDTzs7dUJBM0MyRE8sS0FBSzs7Ozs2QkE0Q3hELENBQ1o7Z0JBQ04sQ0FBQyxDQUFDOzs7OztxQkFBTTs7Ozs7O2FBQ0YsQ0FFTDtBQUNMLENBQUM7QUF0RktoQixLQUFBQSxJQUFJO0FBd0ZWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29yay5qcz9lZGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCB1c2VTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFBvcG92ZXIsIFRyYW5zaXRpb24gfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCdcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdvcmsgPSAocHJvcHMpID0+IHtcbiAgICBcbiAgICBjb25zdCB3b3JrID0gW1xuICAgICAgICB7bmFtZTogJ0JvZHkgQmVsbCBSZWNvcmRzJyxcbiAgICAgICAgIGhyZWY6J2h0dHBzOi8vYm9keS1iZWxsLWZyb250ZW5kLnZlcmNlbC5hcHAvJyxcbiAgICAgICAgIGRlc2NyaXB0aW9uOiAnSW5kaWUgRWxlY3Ryb25pYyBSZWNvcmQgTGFiZWwnLCBcbiAgICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2kuaW1ndXIuY29tL2N2bjJiZWMucG5nJyxcbiAgICAgICAgdGVjaDogJ05leHRKUywgVGFpbHdpbmQsIFNwb3RpZnlBUEksIE1vbmdvREIsIE5vZGVqcycsXG4gICAgICAgIGdpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYmFrZXJjZWxsby9ib2R5LWJlbGwtZnJvbnRlbmQnLFxuICAgICAgICBjcmVhdG9yczogJ0JlbiBCYWtlcid9LFxuICAgICAgICAgXG4gICAgICAgIHtuYW1lOiAnQW5vbmltdXNpYycsXG4gICAgICAgICBocmVmOidodHRwczovL3ZvY2FsLWRhZmZvZGlsLTQ0ZTgyNS5uZXRsaWZ5LmFwcC8nLFxuICAgICAgICAgZGVzY3JpcHRpb246ICdBbm9ueW1vdXMgQXVkaW8gRm9ydW0nLFxuICAgICAgICAgdGVjaDogJ01FUk4sIENsb3VkaW5hcnksIFJlYWN0LUF1ZGlvLVBsYXllcicsXG4gICAgICAgIGJhY2tncm91bmQ6ICdodHRwczovL2kuaW1ndXIuY29tL21Na1BvUTMuanBnJyxcbiAgICAgICAgZ2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL2hzcGlua3MyNjkyL2Fub25pbXVzaWNfZnJvbnRlbmQnLFxuICAgICAgICBjcmVhdG9yczogJ0hhcnZleSBTcGlua3MgLyBUaW0gUmF0aGVydCAvIEJlbiBCYWtlcid9LFxuICAgICAgICAgXG4gICAgICAgIHtuYW1lOiAnTGFuZFBvc3QnLFxuICAgICAgICAgaHJlZjonaHR0cHM6Ly9sYW5kcG9zdC5oZXJva3VhcHAuY29tL2Jsb2cnLFxuICAgICAgICAgZGVzY3JpcHRpb246ICdFbnZpcm9ubWVudGFsIFNvY2lhbCBNZWRpYScsXG4gICAgICAgICB0ZWNoOiAnRXhwcmVzcywgTm9kZWpzLCBIVE1MLCBDU1MnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9OcFJzdG5TLmpwZycsXG4gICAgICAgIGdpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iYmFrZXJjZWxsby9MYW5kcG9zdCcsXG4gICAgICAgIGNyZWF0b3JzOiAnRGF2aWQgUm9ibGVzIC8gVmljdG9yaWEgVmVsYSAvIEJlbiBCYWtlcid9XG4gICAgXVxuXG4gICAgcmV0dXJuKFxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOnNjYWxlLTEyNSBsZzpwLTIwIG10LTIwIGZsZXgtY29sIGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxoNiBpZD0nd29yaycgY2xhc3NOYW1lPSdzZWxlY3Qtbm9uZSB0ZXh0LXNreS03MDAgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCAgdW5kZXJsaW5lIGZvbnQtYm9sZCBtYi0xMCc+V29yazwvaDY+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9J21kOmZsZXggIG1kOmp1c3RpZnktYXJvdW5kIHNtOmdyaWQgc206anVzdGlmeS1hcm91bmQgbGctanVzdGlmeS1ldmVubHknPlxuICAgICAgICAgICAgXG4gICAge3dvcmsubWFwKCh3b3JrLGluZGV4KSA9PiAge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcC0zIGdyaWQganVzdGlmeS1jZW50ZXIgc206cC0zJ2tleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nZWFzZS1pbiBkdXJhdGlvbi0zMDAgcm91bmRlZC1sZyBncmlkIGp1c3RpZnktaXRlbXMtc3RyZXRjaCBib3JkZXItc2t5LTcwMCB3LTQwICBob3ZlcjpzaGFkb3ctbGcgbWItNicgaHJlZj17d29yay5ocmVmfSB0YXJnZXQ9XCJfYmxhbmtcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J2ZvbnQtYm9sZCBmb250LWl0YWxpYyBqdXN0aWZ5LXNlbGYtY2VudGVyIHBiLTEwIGgtNic+e3dvcmsubmFtZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nIHNjYWxlLTEyNSBtYi00IHNoYWRvdy1sZyByb3VuZGVkLWxnJyBzcmM9e3dvcmsuYmFja2dyb3VuZH0gYWx0PSdiYWNrZ3JvdW5kJz48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIgY2xhc3NOYW1lPVwicmVsYXRpdmUgc3RhdGljIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIHsoeyBvcGVuIH0pID0+IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPXtgXG4gICAgICAgICAgICAgICAgJHtvcGVuID8gJycgOiAndGV4dC1vcGFjaXR5LTkwJ31cbiAgICAgICAgICAgICAgICBncm91cCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciByb3VuZGVkLW1kIGJnLXNreS03MDAgcHgtMyBoLTggdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgaG92ZXI6dGV4dC1vcGFjaXR5LTEwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1YH1cbiAgICAgICAgICAgID48c3Bhbj5MZWFybjwvc3Bhbj48L1BvcG92ZXIuQnV0dG9uPlxuICAgICAgICAgIDxQb3BvdmVyLk92ZXJsYXkgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBiZy1ibGFjayBvcGFjaXR5LTMwXCIgLz5cbiAgICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XG4gICAgICAgICAgICAgIGVudGVyPVwidHJhbnNpdGlvbiBlYXNlLW91dCBkdXJhdGlvbi0yMDBcIlxuICAgICAgICAgICAgICBlbnRlckZyb209XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0yXCJcbiAgICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICAgIGxlYXZlVG89XCJvcGFjaXR5LTAgdHJhbnNsYXRlLXktMVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8UG9wb3Zlci5QYW5lbCBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBqdXN0aWZ5LWNlbnRlciBsZWZ0LTEvMiB6LTEwIHctNjQgbWF4LXctc20gLXRyYW5zbGF0ZS14LTEvMiB0cmFuc2Zvcm0gcHgtNCBzbTpweC0wIGxnOm1heC13LTN4bFwiPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWxnIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGdyaWQganVzdGlmeS1jZW50ZXIgZ2FwLTIgYmctd2hpdGUgcC0zIGxnOmdyaWQtY29scy0yXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiA+e3dvcmsuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXNtJz5UZWNobm9sb2d5IFVzZWQ6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhzJz57d29yay50ZWNofTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXNtJz5UZWFtOjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LXhzJz57d29yay5jcmVhdG9yc308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XG4gICAgICAgICAgPC9UcmFuc2l0aW9uPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgKVxuICAgIH0pfTwvdWw+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb3JrIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsInVzZVJlZiIsIm1vdGlvbiIsInVzZVNjcm9sbCIsIkZvbnRBd2Vzb21lSWNvbiIsIlBvcG92ZXIiLCJUcmFuc2l0aW9uIiwiRnJhZ21lbnQiLCJXb3JrIiwicHJvcHMiLCJ3b3JrIiwibmFtZSIsImhyZWYiLCJkZXNjcmlwdGlvbiIsImJhY2tncm91bmQiLCJ0ZWNoIiwiZ2l0IiwiY3JlYXRvcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoNiIsImlkIiwidWwiLCJtYXAiLCJpbmRleCIsImtleSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImEiLCJ0YXJnZXQiLCJpbWciLCJzcmMiLCJhbHQiLCJvcGVuIiwiQnV0dG9uIiwic3BhbiIsIk92ZXJsYXkiLCJhcyIsImVudGVyIiwiZW50ZXJGcm9tIiwiZW50ZXJUbyIsImxlYXZlIiwibGVhdmVGcm9tIiwibGVhdmVUbyIsIlBhbmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Work.js\n"));

/***/ })

});