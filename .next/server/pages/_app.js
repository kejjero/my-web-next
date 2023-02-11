(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8629:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__XtUwh",
	"footer__wrapper": "footer_footer__wrapper__3PRg_",
	"footer__logoLink": "footer_footer__logoLink__g3A4V",
	"footer__top": "footer_footer__top__IZ1e7",
	"footer__menu": "footer_footer__menu__qecz1",
	"footer__menu_link": "footer_footer__menu_link__Ul9VY",
	"footer__bottom": "footer_footer__bottom__LbVg1",
	"footer__author": "footer_footer__author__iSivy",
	"footer__socials": "footer_footer__socials__mpsQT",
	"footer__social": "footer_footer__social__zEbtc"
};


/***/ }),

/***/ 4998:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__0qEM0",
	"header__wrapper": "header_header__wrapper__u5xu1",
	"header__logo": "header_header__logo__Drabe"
};


/***/ }),

/***/ 2284:
/***/ ((module) => {

// Exports
module.exports = {
	"reset": "menu_reset__2br3H",
	"background": "menu_background__3W73X",
	"button": "menu_button__FEqBt",
	"wrapperItems": "menu_wrapperItems__RcMEp",
	"items": "menu_items__y0iLf",
	"item": "menu_item__4iA_2",
	"icon-placeholder": "menu_icon-placeholder__FTMhW",
	"text-placeholder": "menu_text-placeholder__GlSMM",
	"refresh": "menu_refresh__kcJ7E"
};


/***/ }),

/***/ 7616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.37b5c1c9.svg","height":32,"width":131});

/***/ }),

/***/ 9319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./scss/modules/footer.module.scss
var footer_module = __webpack_require__(8629);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./images/logoFooter.svg
/* harmony default export */ const logoFooter = ({"src":"/_next/static/media/logoFooter.cac54559.svg","height":30,"width":37});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./utils/constants.ts + 40 modules
var constants = __webpack_require__(8117);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer.tsx







const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (footer_module_default()).footer,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (footer_module_default()).footer__wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).footer__top,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (footer_module_default()).footer__logoLink,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logoFooter,
                                    draggable: false
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                className: (footer_module_default()).footer__menu,
                                children: constants/* ARRAY_MENU.map */.T7.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            className: (footer_module_default()).footer__menu_link,
                                            children: item.name
                                        })
                                    }, index))
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (footer_module_default()).footer__bottom,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: (footer_module_default()).footer__author,
                            children: "\xa9 kejero 2021-2023"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (footer_module_default()).footer__socials,
                            children: constants/* ARRAY_SOCIALS.map */.un.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: item.link,
                                    target: "_blank",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: (footer_module_default()).footer__social,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: item.icon,
                                            width: 20,
                                            height: 20
                                        })
                                    })
                                }, i))
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);


/***/ }),

/***/ 8969:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4998);
/* harmony import */ var _scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7616);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1071);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_menu_Menu__WEBPACK_IMPORTED_MODULE_5__]);
_menu_Menu__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







const Header = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: (_scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header__wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        draggable: false,
                        priority: true,
                        src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        className: (_scss_modules_header_module_scss__WEBPACK_IMPORTED_MODULE_6___default().header__logo)
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_menu_Menu__WEBPACK_IMPORTED_MODULE_5__/* .Menu */ .v, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8969);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9319);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_1__]);
_Header__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "wrapper",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "content",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9281);
/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6775);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8471);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2284);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _MenuToggle__WEBPACK_IMPORTED_MODULE_4__, _Navigation__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _MenuToggle__WEBPACK_IMPORTED_MODULE_4__, _Navigation__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Menu = ()=>{
    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useCycle)(false, true);
    const { 0: activeBlock , 1: setActiveBlock  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: width , 1: setWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { right  } = (0,_use_dimensions__WEBPACK_IMPORTED_MODULE_3__/* .useDimensions */ .B)(containerRef);
    const clipValue = ()=>{
        if (width > 520) {
            return 229;
        } else {
            return 270;
        }
    };
    const sidebar = {
        open: (height = 1000)=>({
                clipPath: `circle(${height * 2 + 100}px at 125px 40px)`,
                transition: {
                    type: "spring",
                    stiffness: 20,
                    restDelta: 2
                }
            }),
        closed: {
            clipPath: `circle(25px at ${clipValue()}px 40px)`,
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 500,
                damping: 40
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isOpen) {
            setTimeout(()=>setActiveBlock(true), 100);
        } else {
            setTimeout(()=>setActiveBlock(false), 1500);
        }
        setWidth(window.screen.width);
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `menu ${isOpen && "menu_active"}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `blur ${isOpen && "blur_active"}`,
                onClick: ()=>toggleOpen()
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.nav, {
                initial: false,
                animate: isOpen ? "open" : "closed",
                custom: right,
                ref: containerRef,
                className: `nav ${activeBlock && "nav_active"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_6___default().background),
                        variants: sidebar
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_5__/* .Navigation */ .W, {
                        toggle: ()=>toggleOpen(),
                        isOpen: isOpen
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuToggle__WEBPACK_IMPORTED_MODULE_4__/* .MenuToggle */ .O, {
                        toggle: ()=>toggleOpen(),
                        activeBlock: activeBlock
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ MenuItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2284);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {
                stiffness: 1000,
                velocity: -100
            }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {
                stiffness: 1000
            }
        }
    }
};
const MenuItem = ({ item , toggle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
        onClick: toggle,
        variants: variants,
        className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().reset),
        whileHover: {
            scale: 1.2
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: item.link,
            className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().item),
                children: item.title
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ MenuToggle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2284);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Path = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.path, {
        fill: "transparent",
        strokeWidth: "3",
        stroke: "hsl(0, 0%, 18%)",
        strokeLinecap: "round",
        ...props
    });
const MenuToggle = ({ toggle , activeBlock  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: toggle,
            className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default().button),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `toggle__circle ${activeBlock && "toggle__circle_active"}`
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                    width: "20",
                    height: "20",
                    viewBox: "0 0 23 23",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                            variants: {
                                closed: {
                                    d: "M 2 2.5 L 20 2.5"
                                },
                                open: {
                                    d: "M 3 16.5 L 17 2.5"
                                }
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                            d: "M 2 9.423 L 20 9.423",
                            variants: {
                                closed: {
                                    opacity: 1
                                },
                                open: {
                                    opacity: 0
                                }
                            },
                            transition: {
                                duration: 0.1
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Path, {
                            variants: {
                                closed: {
                                    d: "M 2 16.346 L 20 16.346"
                                },
                                open: {
                                    d: "M 3 2.5 L 17 16.346"
                                }
                            }
                        })
                    ]
                })
            ]
        })
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8471:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2067);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2284);
/* harmony import */ var _scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _MenuItem__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _MenuItem__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const variants = {
    open: {
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const Navigation = ({ toggle , isOpen  })=>{
    const { 0: isVisible , 1: setIsVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const styleDisabled = {
        display: "none",
        overflow: "hidden"
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const timeout = (state, time)=>setTimeout(()=>setIsVisible(state), time);
        if (!isOpen) {
            timeout(true, 400);
        } else {
            timeout(false, 100);
        }
        clearTimeout(timeout(false, 0));
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapperItems),
        style: !isVisible ? {} : styleDisabled,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.ul, {
            variants: variants,
            className: (_scss_modules_menu_module_scss__WEBPACK_IMPORTED_MODULE_4___default().items),
            children: items.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MenuItem__WEBPACK_IMPORTED_MODULE_3__/* .MenuItem */ .s, {
                    item: item,
                    toggle: toggle
                }, index))
        })
    });
};
const items = [
    {
        title: "Обо мне",
        link: "/#about"
    },
    {
        title: "Навыки",
        link: "/#skills"
    },
    {
        title: "Услуги",
        link: "/#service"
    },
    {
        title: "Портфолио",
        link: "/#portfolio"
    },
    {
        title: "Контакты",
        link: "/#contacts"
    }, 
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ useDimensions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useDimensions = (ref)=>{
    const dimensions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        width: 0,
        right: 0
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.right = ref.current.offsetLeft;
    }, []);
    return dimensions.current;
};


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_1__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,117], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();