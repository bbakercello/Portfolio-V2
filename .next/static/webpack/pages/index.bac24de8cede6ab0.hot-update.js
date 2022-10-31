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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar Work = function(props) {\n    var work = [\n        {\n            name: \"Body Bell Records\",\n            href: \"https://body-bell-frontend.vercel.app/\",\n            description: \"Indie Electronic Record Label\",\n            background: \"https://i.imgur.com/cvn2bec.png\",\n            tech: \"NextJS, Tailwind, SpotifyAPI, MongoDB, Nodejs\",\n            git: \"https://github.com/bbakercello/body-bell-frontend\",\n            creators: \"Ben Baker\"\n        },\n        {\n            name: \"Anonimusic\",\n            href: \"https://vocal-daffodil-44e825.netlify.app/\",\n            description: \"Anonymous Audio Forum\",\n            tech: \"MERN, Cloudinary, React-Audio-Player\",\n            background: \"https://i.imgur.com/mMkPoQ3.jpg\",\n            git: \"https://github.com/hspinks2692/anonimusic_frontend\",\n            creators: \"Harvey Spinks / Tim Rathert / Ben Baker\"\n        },\n        {\n            name: \"LandPost\",\n            href: \"https://landpost.herokuapp.com/blog\",\n            description: \"Environmental Social Media\",\n            tech: \"Express, Nodejs, HTML, CSS\",\n            background: \"https://i.imgur.com/NpRstnS.jpg\",\n            git: \"https://github.com/bbakercello/Landpost\",\n            creators: \"David Robles / Victoria Vela / Ben Baker\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"lg:scale-125 lg:p-20 mt-20 flex-col justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                id: \"work\",\n                className: \"select-none text-sky-700 flex justify-center text-2xl underline font-bold mb-10\",\n                children: \"Work\"\n            }, void 0, false, {\n                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"md:flex md:justify-around sm:grid sm:justify-around lg-justify-evenly\",\n                children: work.map(function(work, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex p-3 grid justify-center sm:p-3\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                whileHover: {\n                                    scale: 1.2\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    className: \"ease-in duration-300 rounded-lg grid justify-items-stretch border-sky-700 w-40 hover:shadow-lg mb-6\",\n                                    href: work.href,\n                                    target: \"_blank\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                            className: \"font-bold font-italic justify-self-center pb-10 h-6\",\n                                            children: work.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 21\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            className: \" scale-125 mb-4 shadow-lg rounded-lg\",\n                                            src: work.background,\n                                            alt: \"background\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 21\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover, {\n                                className: \"relative static flex justify-center\",\n                                children: function(param) {\n                                    var open = param.open;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Button, {\n                                                className: \"\\n                \".concat(open ? \"\" : \"text-opacity-90\", \"\\n                group flex justify-center items-center rounded-md bg-sky-700 px-3 h-8 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75\"),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    children: \"Learn\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 14\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 57,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Overlay, {\n                                                className: \"fixed inset-0 bg-black opacity-30\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Transition, {\n                                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,\n                                                enter: \"transition ease-out duration-200\",\n                                                enterFrom: \"opacity-0 translate-y-1\",\n                                                enterTo: \"opacity-100 translate-y-0\",\n                                                leave: \"transition ease-in duration-150\",\n                                                leaveFrom: \"opacity-100 translate-y-1\",\n                                                leaveTo: \"opacity-0 translate-y-1\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__.Popover.Panel, {\n                                                    className: \"absolute bottom-0 justify-center left-1/2 z-10 w-64 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"relative grid justify-center gap-2 bg-white p-3 lg:grid-cols-2\",\n                                                            children: [\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    children: work.description\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 76,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                    className: \"text-sm\",\n                                                                    children: \"Technology Used:\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 77,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-xs\",\n                                                                    children: work.tech\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 78,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-sm\",\n                                                                    children: \"Team:\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 79,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-xs\",\n                                                                    children: work.creators\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 80,\n                                                                    columnNumber: 17\n                                                                }, _this),\n                                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                    className: \"text-sky-700\",\n                                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                                                                        whileHover: {\n                                                                            scale: 2\n                                                                        },\n                                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                            href: work.git,\n                                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                                                                                icon: props.skills[9].icon\n                                                                            }, void 0, false, {\n                                                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                                lineNumber: 81,\n                                                                                columnNumber: 104\n                                                                            }, _this)\n                                                                        }, void 0, false, {\n                                                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                            lineNumber: 81,\n                                                                            columnNumber: 85\n                                                                        }, _this)\n                                                                    }, void 0, false, {\n                                                                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                        lineNumber: 81,\n                                                                        columnNumber: 47\n                                                                    }, _this)\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                                    lineNumber: 81,\n                                                                    columnNumber: 17\n                                                                }, _this)\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 15\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                        lineNumber: 73,\n                                                        columnNumber: 13\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 13\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ben/jobs/portfolio/nextjs-typescript-tailwind/components/Work.js\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, _this);\n};\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsQ0FBQzs7Ozs7cUJBQU07Ozs7OzthQUNGLENBRUw7QUFDTCxDQUFDO0FBdkZLaEIsS0FBQUEsSUFBSTtBQXlGViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1dvcmsuanM/ZWRlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlU2Nyb2xsIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBQb3BvdmVyLCBUcmFuc2l0aW9uIH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXb3JrID0gKHByb3BzKSA9PiB7XG4gICAgXG4gICAgY29uc3Qgd29yayA9IFtcbiAgICAgICAge25hbWU6ICdCb2R5IEJlbGwgUmVjb3JkcycsXG4gICAgICAgICBocmVmOidodHRwczovL2JvZHktYmVsbC1mcm9udGVuZC52ZXJjZWwuYXBwLycsXG4gICAgICAgICBkZXNjcmlwdGlvbjogJ0luZGllIEVsZWN0cm9uaWMgUmVjb3JkIExhYmVsJywgXG4gICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9jdm4yYmVjLnBuZycsXG4gICAgICAgIHRlY2g6ICdOZXh0SlMsIFRhaWx3aW5kLCBTcG90aWZ5QVBJLCBNb25nb0RCLCBOb2RlanMnLFxuICAgICAgICBnaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vYmJha2VyY2VsbG8vYm9keS1iZWxsLWZyb250ZW5kJyxcbiAgICAgICAgY3JlYXRvcnM6ICdCZW4gQmFrZXInfSxcbiAgICAgICAgIFxuICAgICAgICB7bmFtZTogJ0Fub25pbXVzaWMnLFxuICAgICAgICAgaHJlZjonaHR0cHM6Ly92b2NhbC1kYWZmb2RpbC00NGU4MjUubmV0bGlmeS5hcHAvJyxcbiAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW5vbnltb3VzIEF1ZGlvIEZvcnVtJyxcbiAgICAgICAgIHRlY2g6ICdNRVJOLCBDbG91ZGluYXJ5LCBSZWFjdC1BdWRpby1QbGF5ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnaHR0cHM6Ly9pLmltZ3VyLmNvbS9tTWtQb1EzLmpwZycsXG4gICAgICAgIGdpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oc3BpbmtzMjY5Mi9hbm9uaW11c2ljX2Zyb250ZW5kJyxcbiAgICAgICAgY3JlYXRvcnM6ICdIYXJ2ZXkgU3BpbmtzIC8gVGltIFJhdGhlcnQgLyBCZW4gQmFrZXInfSxcbiAgICAgICAgIFxuICAgICAgICB7bmFtZTogJ0xhbmRQb3N0JyxcbiAgICAgICAgIGhyZWY6J2h0dHBzOi8vbGFuZHBvc3QuaGVyb2t1YXBwLmNvbS9ibG9nJyxcbiAgICAgICAgIGRlc2NyaXB0aW9uOiAnRW52aXJvbm1lbnRhbCBTb2NpYWwgTWVkaWEnLFxuICAgICAgICAgdGVjaDogJ0V4cHJlc3MsIE5vZGVqcywgSFRNTCwgQ1NTJyxcbiAgICAgICAgYmFja2dyb3VuZDogJ2h0dHBzOi8vaS5pbWd1ci5jb20vTnBSc3RuUy5qcGcnLFxuICAgICAgICBnaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vYmJha2VyY2VsbG8vTGFuZHBvc3QnLFxuICAgICAgICBjcmVhdG9yczogJ0RhdmlkIFJvYmxlcyAvIFZpY3RvcmlhIFZlbGEgLyBCZW4gQmFrZXInfVxuICAgIF1cblxuICAgIHJldHVybihcbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsZzpzY2FsZS0xMjUgbGc6cC0yMCBtdC0yMCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICA8aDYgaWQ9J3dvcmsnIGNsYXNzTmFtZT0nc2VsZWN0LW5vbmUgdGV4dC1za3ktNzAwIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC0yeGwgIHVuZGVybGluZSBmb250LWJvbGQgbWItMTAnPldvcms8L2g2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdtZDpmbGV4ICBtZDpqdXN0aWZ5LWFyb3VuZCBzbTpncmlkIHNtOmp1c3RpZnktYXJvdW5kIGxnLWp1c3RpZnktZXZlbmx5Jz5cbiAgICAgICAgICAgIFxuICAgIHt3b3JrLm1hcCgod29yayxpbmRleCkgPT4gIHtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHAtMyBncmlkIGp1c3RpZnktY2VudGVyIHNtOnAtMydrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4yIH19PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9J2Vhc2UtaW4gZHVyYXRpb24tMzAwIHJvdW5kZWQtbGcgZ3JpZCBqdXN0aWZ5LWl0ZW1zLXN0cmV0Y2ggYm9yZGVyLXNreS03MDAgdy00MCAgaG92ZXI6c2hhZG93LWxnIG1iLTYnIGhyZWY9e3dvcmsuaHJlZn0gdGFyZ2V0PVwiX2JsYW5rXCIgPlxuICAgICAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPSdmb250LWJvbGQgZm9udC1pdGFsaWMganVzdGlmeS1zZWxmLWNlbnRlciBwYi0xMCBoLTYnPnt3b3JrLm5hbWV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9JyBzY2FsZS0xMjUgbWItNCBzaGFkb3ctbGcgcm91bmRlZC1sZycgc3JjPXt3b3JrLmJhY2tncm91bmR9IGFsdD0nYmFja2dyb3VuZCc+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHN0YXRpYyBmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICB7KHsgb3BlbiB9KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPFBvcG92ZXIuQnV0dG9uIGNsYXNzTmFtZT17YFxuICAgICAgICAgICAgICAgICR7b3BlbiA/ICcnIDogJ3RleHQtb3BhY2l0eS05MCd9XG4gICAgICAgICAgICAgICAgZ3JvdXAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZC1tZCBiZy1za3ktNzAwIHB4LTMgaC04IHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGhvdmVyOnRleHQtb3BhY2l0eS0xMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6cmluZy0yIGZvY3VzLXZpc2libGU6cmluZy13aGl0ZSBmb2N1cy12aXNpYmxlOnJpbmctb3BhY2l0eS03NWB9XG4gICAgICAgICAgICA+PHNwYW4+TGVhcm48L3NwYW4+PC9Qb3BvdmVyLkJ1dHRvbj5cbiAgICAgICAgICA8UG9wb3Zlci5PdmVybGF5IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgYmctYmxhY2sgb3BhY2l0eS0zMFwiIC8+XG4gICAgICAgICAgPFRyYW5zaXRpb25cbiAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxuICAgICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMjAwXCJcbiAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICBlbnRlclRvPVwib3BhY2l0eS0xMDAgdHJhbnNsYXRlLXktMFwiXG4gICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHRyYW5zbGF0ZS15LTFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPFBvcG92ZXIuUGFuZWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAganVzdGlmeS1jZW50ZXIgbGVmdC0xLzIgei0xMCB3LTY0IG1heC13LXNtIC10cmFuc2xhdGUteC0xLzIgdHJhbnNmb3JtIHB4LTQgc206cHgtMCBsZzptYXgtdy0zeGxcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBzaGFkb3ctbGcgcmluZy0xIHJpbmctYmxhY2sgcmluZy1vcGFjaXR5LTVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBncmlkIGp1c3RpZnktY2VudGVyIGdhcC0yIGJnLXdoaXRlIHAtMyBsZzpncmlkLWNvbHMtMlwiPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgPnt3b3JrLmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1zbSc+VGVjaG5vbG9neSBVc2VkOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14cyc+e3dvcmsudGVjaH08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSc+VGVhbTo8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC14cyc+e3dvcmsuY3JlYXRvcnN9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtc2t5LTcwMCc+PG1vdGlvbi5kaXYgd2hpbGVIb3Zlcj17eyBzY2FsZTogMiB9fT48YSBocmVmPXt3b3JrLmdpdH0+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtwcm9wcy5za2lsbHNbOV0uaWNvbn0vPjwvYT48L21vdGlvbi5kaXY+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Qb3BvdmVyLlBhbmVsPlxuICAgICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIClcbiAgICB9KX08L3VsPlxuICAgIDwvZGl2PlxuICAgIFxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV29yayJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJ1c2VSZWYiLCJtb3Rpb24iLCJ1c2VTY3JvbGwiLCJGb250QXdlc29tZUljb24iLCJQb3BvdmVyIiwiVHJhbnNpdGlvbiIsIkZyYWdtZW50IiwiV29yayIsInByb3BzIiwid29yayIsIm5hbWUiLCJocmVmIiwiZGVzY3JpcHRpb24iLCJiYWNrZ3JvdW5kIiwidGVjaCIsImdpdCIsImNyZWF0b3JzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDYiLCJpZCIsInVsIiwibWFwIiwiaW5kZXgiLCJrZXkiLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJhIiwidGFyZ2V0IiwiaW1nIiwic3JjIiwiYWx0Iiwib3BlbiIsIkJ1dHRvbiIsInNwYW4iLCJPdmVybGF5IiwiYXMiLCJlbnRlciIsImVudGVyRnJvbSIsImVudGVyVG8iLCJsZWF2ZSIsImxlYXZlRnJvbSIsImxlYXZlVG8iLCJQYW5lbCIsImljb24iLCJza2lsbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Work.js\n"));

/***/ })

});