exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./src/components/common/buttons/index.js":
/*!************************************************!*\
  !*** ./src/components/common/buttons/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonDefault": () => (/* binding */ ButtonDefault),
/* harmony export */   "ReadMore": () => (/* binding */ ReadMore),
/* harmony export */   "ResumeButton": () => (/* binding */ ResumeButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const ButtonDefault = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "buttons__ButtonDefault"
})(["cursor:pointer;margin:2rem 0 2rem 0;font-family:\"GT-Walsheim-Pro-Medium\";font-size:inherit;text-align:center;letter-spacing:3px;text-transform:uppercase;text-decoration:none;border:4px solid ", ";color:", ";background:#fff;outline:none;position:relative;display:inline-block;padding:15px 10px 14px;cursor:pointer;width:auto;min-width:200px;&::after{min-width:200px;position:absolute;width:100%;height:100%;border:4px solid ", ";background-color:", ";left:4px;top:9px;z-index:-1;content:'';transition:all 0.5s;}&:hover:after{top:0px;left:-4px;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary); // margin: 10% 0%;

const ReadMore = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "buttons__ReadMore"
})(["color:#000;font-size:1rem;text-transform:inherit;letter-spacing:.7px;font-family:\"GT-Walsheim-Pro-Medium\";&:hover{color:", ";}&:after{bottom:1px;height:3px;background:", ";}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary);
const ResumeButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "buttons__ResumeButton"
})(["color:#000;font-size:1rem;letter-spacing:2px;font-family:\"GT-Walsheim-Pro-Medium\";border:5px solid #e8e7e7;display:block;margin:3rem 0 2rem 0;padding:1rem;text-align:center;text-transform:uppercase;border-radius:.5rem;transition:color 300ms ease-in-out,border-color 400ms ease-in-out;&:hover{color:", ";border-color:", "}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary);

/***/ }),

/***/ "./src/components/common/containerLayout/index.js":
/*!********************************************************!*\
  !*** ./src/components/common/containerLayout/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContainerLayout": () => (/* binding */ ContainerLayout)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const ContainerLayout = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "containerLayout__ContainerLayout"
})(["width:", ";margin-left:auto;margin-right:auto;&.wrapper{max-width:", ";margin:auto;}@media only screen and (min-width:", "){max-width:75rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].width, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].wrapperWidth, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointLarge);

/***/ }),

/***/ "./src/components/common/global/index.js":
/*!***********************************************!*\
  !*** ./src/components/common/global/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStyle": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.css */ "./src/components/common/global/fonts.css");
/* harmony import */ var _fonts_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fonts_css__WEBPACK_IMPORTED_MODULE_1__);



const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle`
  // normalize
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    body {
      font-size: 14px;
      font-family: 'GT-Walsheim-Pro-Regular';
      margin: 0;
    }
    main {
      display: block;
    }
    h1 {
      font-size: 2em;
      margin: 0.67em 0;
    }
    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }
    b,
    strong {
      font-weight: bolder;
      font-family: 'GT-Walsheim-Pro-Bold';
    }
    small {
      font-size: 80%;
    }
    sub,
    sup {
      font-size: 75%;
      line-height: 0;
      position: relative;
      vertical-align: baseline;
    }
    sub {
      bottom: -0.25em;
    }
    sup {
      top: -0.5em;
    }
    img {
      border-style: none;
    }
    .center {
      text-align: center;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }
    button,
    input { /* 1 */
      overflow: visible;
    }
    button,
    select { /* 1 */
      text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    [hidden] {
      display: none;
    }
    
    .text-dark {
      color: ${_data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].black};
    }
    .text-primary {
      color: ${_data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary};
    }
    .align-middle {
      vertical-align: middle;
    }

    p {
      font-size: 1.125rem;
      font-weight: 200;
      line-height: 1.8;
    }
  }

  
.lined-link {
  display: inline-block;
  position: relative;
  transition: all .2s ease-out;
  will-change: transform, color;
  &:after {
    z-index: 1;
    position: absolute;
    bottom: -0.5px;
    left: 0;
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    background-color: ${_data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary};
    transform: scale(0, 1);
    transform-origin: 100% 50%;
    will-change: transform;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1), 
    -webkit-transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after,
  &.active:after {
    background-color: ${_data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary};
    transform: scale(1);
    transform-origin: 0 50%;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), background-color 0.2s ease-out, 
    -webkit-transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
}

.error__emoji {
  width: 30vw;
}
`; // padding-top: .5em;
// padding-bottom: .25em;

/***/ }),

/***/ "./src/components/common/index.js":
/*!****************************************!*\
  !*** ./src/components/common/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigTitle": () => (/* reexport safe */ _mainContent__WEBPACK_IMPORTED_MODULE_2__.BigTitle),
/* harmony export */   "ButtonDefault": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_0__.ButtonDefault),
/* harmony export */   "Category": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.Category),
/* harmony export */   "ContainerLayout": () => (/* reexport safe */ _containerLayout__WEBPACK_IMPORTED_MODULE_1__.ContainerLayout),
/* harmony export */   "GlobalStyle": () => (/* reexport safe */ _global__WEBPACK_IMPORTED_MODULE_7__.GlobalStyle),
/* harmony export */   "HeaderIntro": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.HeaderIntro),
/* harmony export */   "Intro": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.Intro),
/* harmony export */   "MainContent": () => (/* reexport safe */ _mainContent__WEBPACK_IMPORTED_MODULE_2__.MainContent),
/* harmony export */   "ProjectGrid": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectGrid),
/* harmony export */   "ProjectPost": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.ProjectPost),
/* harmony export */   "ReadMore": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_0__.ReadMore),
/* harmony export */   "ResumeButton": () => (/* reexport safe */ _buttons__WEBPACK_IMPORTED_MODULE_0__.ResumeButton),
/* harmony export */   "SectionIntro": () => (/* reexport safe */ _sectionIntro__WEBPACK_IMPORTED_MODULE_4__.SectionIntro),
/* harmony export */   "SmallText": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.SmallText),
/* harmony export */   "SubText": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.SubText),
/* harmony export */   "SubTitle": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.SubTitle),
/* harmony export */   "Tag": () => (/* reexport safe */ _tags__WEBPACK_IMPORTED_MODULE_5__.Tag),
/* harmony export */   "Text": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.Text),
/* harmony export */   "Title": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_3__.Title),
/* harmony export */   "UnderLink": () => (/* reexport safe */ _underLink__WEBPACK_IMPORTED_MODULE_6__.UnderLink)
/* harmony export */ });
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/components/common/buttons/index.js");
/* harmony import */ var _containerLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./containerLayout */ "./src/components/common/containerLayout/index.js");
/* harmony import */ var _mainContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainContent */ "./src/components/common/mainContent/index.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects */ "./src/components/common/projects/index.js");
/* harmony import */ var _sectionIntro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sectionIntro */ "./src/components/common/sectionIntro/index.js");
/* harmony import */ var _tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tags */ "./src/components/common/tags/index.js");
/* harmony import */ var _underLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./underLink */ "./src/components/common/underLink/index.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global */ "./src/components/common/global/index.js");









/***/ }),

/***/ "./src/components/common/mainContent/index.js":
/*!****************************************************!*\
  !*** ./src/components/common/mainContent/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BigTitle": () => (/* binding */ BigTitle),
/* harmony export */   "MainContent": () => (/* binding */ MainContent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const MainContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "mainContent__MainContent"
})([""]); // @media(min-width: ${variables.breakpointPhone}) {
//   background: linear-gradient(to bottom,rgb(239 233 233 / 46%),transparent 22%);
// }

const BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "mainContent__BigTitle"
})(["margin:2rem 0 3rem 0;text-align:center;font-size:3rem;font-family:\"GT-Walsheim-Pro-Bold\";@media(max-width:", "){font-size:2rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);

/***/ }),

/***/ "./src/components/common/projects/index.js":
/*!*************************************************!*\
  !*** ./src/components/common/projects/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category),
/* harmony export */   "HeaderIntro": () => (/* binding */ HeaderIntro),
/* harmony export */   "Intro": () => (/* binding */ Intro),
/* harmony export */   "ProjectGrid": () => (/* binding */ ProjectGrid),
/* harmony export */   "ProjectPost": () => (/* binding */ ProjectPost),
/* harmony export */   "SmallText": () => (/* binding */ SmallText),
/* harmony export */   "SubText": () => (/* binding */ SubText),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const Intro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "projects__Intro"
})(["padding:1rem 0 2rem 0;font-family:\"GT-Walsheim-Pro-Regular\";"]);
const HeaderIntro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header.withConfig({
  displayName: "projects__HeaderIntro"
})(["display:grid;grid-template-columns:1.5fr 1fr;grid-gap:34px;justify-content:space-between;margin-bottom:6rem;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "projects__Title"
})(["font-family:\"GT-Walsheim-Pro-Bold\";font-size:2rem;@media(max-width:", "){font-size:1.5rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "projects__SubTitle"
})(["padding:0 0 2rem 0;text-align:left;font-size:2rem;font-family:\"GT-Walsheim-Pro-Bold\";"]); // text-decoration: underline;

const Text = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "projects__Text"
})(["font-size:.98rem;line-height:2;color:#000000;margin-top:2rem;text-align:justify;@media(max-width:", "){margin-top:1rem;font-size:.8rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const SubText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "projects__SubText"
})(["font-size:1rem;line-height:2;color:#232323;"]);
const SmallText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].small.withConfig({
  displayName: "projects__SmallText"
})(["font-size:.89rem;padding-right:10px;> span{padding-left:5px;}@media(max-width:", "){font-size:.6rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const ProjectPost = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
  displayName: "projects__ProjectPost"
})(["align-items:center;margin-bottom:5rem;grid-template-columns:1fr;border:10px solid #fff;border-radius:.9rem;box-shadow:0 17px 56px rgba(125,127,129,.17);> div.content{padding:2rem 3rem;@media(max-width:", "){padding:1rem 1rem;}}> div.media{text-align:center;> .image-wrapper{margin-bottom:.5rem;max-height:400px;overflow:hidden;> a > div{transition:all 800ms ease-in-out;}}}&:hover{cursor:pointer;> div.media > .image-wrapper > a > div{transform:scale(1.2);}}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone); // rotate(8deg)

const Category = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "projects__Category"
})(["font-family:\"GT-Walsheim-Pro-Bold\";color:", ";text-transform:uppercase;letter-spacing:.05em;font-size:.8em;border-radius:.25rem;padding:.5rem 1rem;margin-right:1rem;border:3px solid ", ";"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary);
const ProjectGrid = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "projects__ProjectGrid"
})(["@media(min-width:", "){display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);

/***/ }),

/***/ "./src/components/common/sectionIntro/index.js":
/*!*****************************************************!*\
  !*** ./src/components/common/sectionIntro/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SectionIntro": () => (/* binding */ SectionIntro)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const SectionIntro = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "sectionIntro__SectionIntro"
})(["padding:4rem 0 4rem 0;@media(max-width:", "){padding:4rem 0 4rem 0;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);

/***/ }),

/***/ "./src/components/common/tags/index.js":
/*!*********************************************!*\
  !*** ./src/components/common/tags/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tag": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const Tag = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "tags__Tag"
})(["color:#a9aaab;text-transform:uppercase;letter-spacing:.05em;font-size:.8em;background:rgb(183 181 181 / 15%);border-radius:.25rem;padding:.5rem 1rem;margin-right:1rem;border:1px solid rgb(0 0 0 / 2%);display:inline-block;margin-bottom:1rem;&.active{background:", ";color:", ";font-family:\"GT-Walsheim-Pro-Bold\";}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].inverse);

/***/ }),

/***/ "./src/components/common/underLink/index.js":
/*!**************************************************!*\
  !*** ./src/components/common/underLink/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnderLink": () => (/* binding */ UnderLink)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

const UnderLink = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "underLink__UnderLink"
})(["cursor:pointer;transition:color 300ms ease-in-out;font-family:\"GT-Walsheim-Pro-Bold\";color:#0027ff;padding:0 .5rem;&:hover{color:#000;text-decoration:underline;}"]);

/***/ }),

/***/ "./src/components/layout/footer/index.jsx":
/*!************************************************!*\
  !*** ./src/components/layout/footer/index.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../data/data */ "./src/data/data.js");
/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/components/layout/footer/style.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./src/components/common/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/mail.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/github.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/linkedin.js");


 // import { StaticImage } from "gatsby-plugin-image"





const Footer = () => {
  const iconStyle = {
    color: _data_variables__WEBPACK_IMPORTED_MODULE_2__["default"].primary,
    padding: "12px"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.FooterStyle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_4__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "lined-link",
    style: iconStyle,
    href: `mailto:${(_data_data__WEBPACK_IMPORTED_MODULE_1___default().SiteContact.email)}`
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_5__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "lined-link",
    style: iconStyle,
    href: (_data_data__WEBPACK_IMPORTED_MODULE_1___default().SiteSocialLinks.github)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "lined-link",
    style: iconStyle,
    href: (_data_data__WEBPACK_IMPORTED_MODULE_1___default().SiteSocialLinks.linkedin)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_3__.CopyRight, {
    className: "text-dark"
  }, "\xA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", "\u30EC\u30A4\u30B7\u30FC \u99AC\u672C", new Date().getFullYear(), ".")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/layout/footer/style.js":
/*!***********************************************!*\
  !*** ./src/components/layout/footer/style.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyRight": () => (/* binding */ CopyRight),
/* harmony export */   "FooterBody": () => (/* binding */ FooterBody),
/* harmony export */   "FooterSocialMedia": () => (/* binding */ FooterSocialMedia),
/* harmony export */   "FooterStyle": () => (/* binding */ FooterStyle),
/* harmony export */   "MediaLink": () => (/* binding */ MediaLink),
/* harmony export */   "SubRight": () => (/* binding */ SubRight)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../data/variables */ "./src/data/variables.js");


const FooterStyle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].footer.withConfig({
  displayName: "style__FooterStyle"
})(["padding-top:0rem;padding-bottom:2rem;z-index:0;position:relative;text-align:center;@media (max-width:", "){padding-bottom:2rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;}.quote{font-size:4rem;font-family:\"GT-Walsheim-Pro-Bold\";line-height:1.2;color:", ";@media (max-width:", "){font-size:2rem;}}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const SubRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "style__SubRight"
})(["font-size:1rem;line-height:1.8;letter-spacing:2px;text-transform:capitalize;margin-bottom:20px;font-family:\"GT-Walsheim-Pro-Bold\";"]);
const CopyRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "style__CopyRight"
})(["font-size:11px;line-height:1.8;letter-spacing:1px;text-transform:capitalize;"]);
const FooterBody = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "style__FooterBody"
})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;@media (max-width:", "){grid-template-columns:1fr;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const FooterSocialMedia = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "style__FooterSocialMedia"
})(["list-style:none;padding-left:0;@media (max-width:", "){display:flex;align-items:center;justify-content:space-between;}li{margin-bottom:1.5rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);
const MediaLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "style__MediaLink"
})(["padding:1rem 0rem;padding-bottom:0.5rem;line-height:1;font-size:1rem;text-transform:capitalize;font-family:\"GT-Walsheim-Pro-Bold\";color:", ";"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary);

/***/ }),

/***/ "./src/components/layout/index.js":
/*!****************************************!*\
  !*** ./src/components/layout/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/components/layout/footer/index.jsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./src/components/common/index.js");

 // import { useStaticQuery, graphql } from "gatsby"
// import Navbar from "./navbar"




const Layout = ({
  children
}) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.MainContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.ContainerLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_3__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((module) => {

module.exports = {
  SiteTitle: 'Lacey C. Umamoto',
  Sitelogo: '#',
  SiteLogoText: 'lumamoto',
  SiteAuthor: 'Lacey Umamoto',
  SiteDescription: 'Portfolio',
  defaultDescription: 'Portfolio',
  SiteSocialLinks: {
    github: 'https://github.com/lumamoto',
    linkedin: 'https://www.linkedin.com/in/lumamoto/',
    devpost: 'https://devpost.com/lumamoto'
  },
  // SiteAddress: {
  //   city: 'Casablanca',
  //   region: 'CurvaSud',
  //   country: 'Morocco',
  //   zipCode: 'ZipCode',
  // },
  SiteContact: {
    email: 'lcumamoto@gmail.com',
    phone: '000-000-0000'
  },
  SiteCopyright: '2021'
};

/***/ }),

/***/ "./src/data/variables.js":
/*!*******************************!*\
  !*** ./src/data/variables.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variables = {
  primary: "#85CDC8",
  inverse: "#fff",
  // colors
  darkGrey: "#333447",
  black: "#000",
  // grid
  width: "96%",
  wrapperWidth: "65rem",
  gutter: "4%",
  breakpointPhone: "850px",
  breakpointTablet: "1024px",
  breakpointLaptop: "1200px",
  breakpointLarge: "60em" // 960px

};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);

/***/ }),

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common */ "./src/components/common/index.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");





const NotFoundPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__.Intro, {
  className: "center"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__.Title, null, "404"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__.Title, null, "NOT FOUND"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__.SubText, null, "Hey, how'd you end up here? Here's the way back", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
  to: "/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
  className: "text-primary lined-link"
}, "home")), "."))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ }),

/***/ "./src/components/common/global/fonts.css":
/*!************************************************!*\
  !*** ./src/components/common/global/fonts.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-feather/dist/icons/github.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/github.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var GitHub = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
GitHub.displayName = 'GitHub';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GitHub);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/linkedin.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/linkedin.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Linkedin = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }));
});
Linkedin.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Linkedin.displayName = 'Linkedin';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Linkedin);

/***/ }),

/***/ "./node_modules/react-feather/dist/icons/mail.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/mail.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Mail = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
});
Mail.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
Mail.displayName = 'Mail';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mail);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map