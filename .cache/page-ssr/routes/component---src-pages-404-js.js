exports.id = 883;
exports.ids = [883];
exports.modules = {

/***/ 2730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K9": () => (/* reexport */ BigTitle),
  "t": () => (/* reexport */ ButtonDefault),
  "WD": () => (/* reexport */ Category),
  "rm": () => (/* reexport */ ContainerLayout),
  "ZL": () => (/* reexport */ GlobalStyle),
  "p2": () => (/* reexport */ Intro),
  "M9": () => (/* reexport */ MainContent),
  "JC": () => (/* reexport */ ProjectGrid),
  "$B": () => (/* reexport */ ProjectPost),
  "i_": () => (/* reexport */ SubText),
  "Vp": () => (/* reexport */ Tag),
  "xv": () => (/* reexport */ Text),
  "Dx": () => (/* reexport */ Title)
});

// UNUSED EXPORTS: HeaderIntro, ReadMore, ResumeButton, SectionIntro, SmallText, SubTitle, UnderLink

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(9550);
// EXTERNAL MODULE: ./src/data/variables.js
var variables = __webpack_require__(6421);
;// CONCATENATED MODULE: ./src/components/common/buttons/index.js
const ButtonDefault=styled_components_esm["default"].a.withConfig({displayName:"buttons__ButtonDefault",componentId:"sc-5x08bx-0"})(["cursor:pointer;margin:2rem 0 2rem 0;font-family:\"GT-Walsheim-Pro-Medium\";font-size:inherit;text-align:center;letter-spacing:3px;text-transform:uppercase;text-decoration:none;border:4px solid ",";color:",";background:#fff;outline:none;position:relative;display:inline-block;padding:15px 10px 14px;cursor:pointer;width:auto;min-width:200px;&::after{min-width:200px;position:absolute;width:100%;height:100%;border:4px solid ",";background-color:",";left:4px;top:9px;z-index:-1;content:'';transition:all 0.5s;}&:hover:after{top:0px;left:-4px;}"],variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary);// margin: 10% 0%;
const ReadMore=styled_components_esm["default"].span.withConfig({displayName:"buttons__ReadMore",componentId:"sc-5x08bx-1"})(["color:#000;font-size:1rem;text-transform:inherit;letter-spacing:.7px;font-family:\"GT-Walsheim-Pro-Medium\";&:hover{color:",";}&:after{bottom:1px;height:3px;background:",";}"],variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary);const ResumeButton=styled_components_esm["default"].a.withConfig({displayName:"buttons__ResumeButton",componentId:"sc-5x08bx-2"})(["color:#000;font-size:1rem;letter-spacing:2px;font-family:\"GT-Walsheim-Pro-Medium\";border:5px solid #e8e7e7;display:block;margin:3rem 0 2rem 0;padding:1rem;text-align:center;text-transform:uppercase;border-radius:.5rem;transition:color 300ms ease-in-out,border-color 400ms ease-in-out;&:hover{color:",";border-color:","}"],variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary);
;// CONCATENATED MODULE: ./src/components/common/containerLayout/index.js
const ContainerLayout=styled_components_esm["default"].div.withConfig({displayName:"containerLayout__ContainerLayout",componentId:"sc-25l7nr-0"})(["width:",";margin-left:auto;margin-right:auto;&.wrapper{max-width:",";margin:auto;}@media only screen and (min-width:","){max-width:75rem;}"],variables/* default.width */.Z.width,variables/* default.wrapperWidth */.Z.wrapperWidth,variables/* default.breakpointLarge */.Z.breakpointLarge);
;// CONCATENATED MODULE: ./src/components/common/mainContent/index.js
const MainContent=styled_components_esm["default"].div.withConfig({displayName:"mainContent__MainContent",componentId:"sc-gv3d4z-0"})([""]);// @media(min-width: ${variables.breakpointPhone}) {
//   background: linear-gradient(to bottom,rgb(239 233 233 / 46%),transparent 22%);
// }
const BigTitle=styled_components_esm["default"].h1.withConfig({displayName:"mainContent__BigTitle",componentId:"sc-gv3d4z-1"})(["margin:3rem 0 3rem 0;text-align:center;font-size:3rem;font-family:\"GT-Walsheim-Pro-Bold\";@media(max-width:","){font-size:2rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);
;// CONCATENATED MODULE: ./src/components/common/projects/index.js
const Intro=styled_components_esm["default"].div.withConfig({displayName:"projects__Intro",componentId:"sc-1ic446u-0"})(["padding:1rem 0 2rem 0;font-family:\"GT-Walsheim-Pro-Regular\";"]);const HeaderIntro=styled_components_esm["default"].header.withConfig({displayName:"projects__HeaderIntro",componentId:"sc-1ic446u-1"})(["display:grid;grid-template-columns:1.5fr 1fr;grid-gap:34px;justify-content:space-between;margin-bottom:6rem;"]);const Title=styled_components_esm["default"].h1.withConfig({displayName:"projects__Title",componentId:"sc-1ic446u-2"})(["font-family:\"GT-Walsheim-Pro-Bold\";font-size:2rem;@media(max-width:","){font-size:1.5rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);const SubTitle=styled_components_esm["default"].h3.withConfig({displayName:"projects__SubTitle",componentId:"sc-1ic446u-3"})(["padding:0 0 2rem 0;text-align:left;font-size:2rem;font-family:\"GT-Walsheim-Pro-Bold\";"]);// text-decoration: underline;
const Text=styled_components_esm["default"].p.withConfig({displayName:"projects__Text",componentId:"sc-1ic446u-4"})(["font-size:.98rem;line-height:2;color:#000000;margin-top:2rem;text-align:justify;@media(max-width:","){margin-top:1rem;font-size:.8rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);const SubText=styled_components_esm["default"].p.withConfig({displayName:"projects__SubText",componentId:"sc-1ic446u-5"})(["font-size:1rem;line-height:2;color:#232323;"]);const SmallText=styled_components_esm["default"].small.withConfig({displayName:"projects__SmallText",componentId:"sc-1ic446u-6"})(["font-size:.89rem;padding-right:10px;> span{padding-left:5px;}@media(max-width:","){font-size:.6rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);const ProjectPost=styled_components_esm["default"].article.withConfig({displayName:"projects__ProjectPost",componentId:"sc-1ic446u-7"})(["align-items:center;margin-bottom:5rem;grid-template-columns:1fr;border:10px solid #fff;border-radius:.9rem;box-shadow:0 17px 56px rgba(125,127,129,.17);> div.content{padding:2rem 3rem;@media(max-width:","){padding:1rem 1rem;}}> div.media{text-align:center;> .image-wrapper{margin-bottom:.5rem;max-height:400px;overflow:hidden;> a > div{transition:all 800ms ease-in-out;}}}&:hover{cursor:pointer;> div.media > .image-wrapper > a > div{transform:scale(1.2);}}"],variables/* default.breakpointPhone */.Z.breakpointPhone);// rotate(8deg)
const Category=styled_components_esm["default"].span.withConfig({displayName:"projects__Category",componentId:"sc-1ic446u-8"})(["font-family:\"GT-Walsheim-Pro-Bold\";color:",";text-transform:uppercase;letter-spacing:.05em;font-size:.8em;border-radius:.25rem;padding:.5rem 1rem;margin-right:1rem;border:3px solid ",";"],variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary);const ProjectGrid=styled_components_esm["default"].div.withConfig({displayName:"projects__ProjectGrid",componentId:"sc-1ic446u-9"})(["@media(min-width:","){display:grid;grid-template-columns:1fr 1fr;grid-gap:2rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);
;// CONCATENATED MODULE: ./src/components/common/sectionIntro/index.js
const SectionIntro=styled_components_esm["default"].div.withConfig({displayName:"sectionIntro__SectionIntro",componentId:"sc-116lhsy-0"})(["padding:4rem 0 4rem 0;@media(max-width:","){padding:4rem 0 4rem 0;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);
;// CONCATENATED MODULE: ./src/components/common/tags/index.js
const Tag=styled_components_esm["default"].a.withConfig({displayName:"tags__Tag",componentId:"sc-1bpmctx-0"})(["color:#a9aaab;text-transform:uppercase;letter-spacing:.05em;font-size:.8em;background:rgb(183 181 181 / 15%);border-radius:.25rem;padding:.5rem 1rem;margin-right:1rem;border:1px solid rgb(0 0 0 / 2%);display:inline-block;margin-bottom:1rem;&.active{background:",";color:",";font-family:\"GT-Walsheim-Pro-Bold\";}"],variables/* default.primary */.Z.primary,variables/* default.inverse */.Z.inverse);
;// CONCATENATED MODULE: ./src/components/common/underLink/index.js
const UnderLink=styled_components_esm["default"].a.withConfig({displayName:"underLink__UnderLink",componentId:"sc-19kyni6-0"})(["cursor:pointer;transition:color 300ms ease-in-out;font-family:\"GT-Walsheim-Pro-Bold\";color:#0027ff;padding:0 .5rem;&:hover{color:#000;text-decoration:underline;}"]);
;// CONCATENATED MODULE: ./src/components/common/global/index.js
const GlobalStyle=(0,styled_components_esm.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;}html{box-sizing:border-box;-ms-overflow-style:scrollbar;line-height:1.15;-webkit-text-size-adjust:100%;body{font-size:14px;font-family:'GT-Walsheim-Pro-Regular';margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}a{background-color:transparent;text-decoration:none;}b,strong{font-weight:bolder;font-family:'GT-Walsheim-Pro-Bold';}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}.center{text-align:center;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}[hidden]{display:none;}.text-dark{color:",";}.text-primary{color:",";}.align-middle{vertical-align:middle;}p{font-size:1.125rem;font-weight:200;line-height:1.8;}}.lined-link{display:inline-block;position:relative;transition:all .2s ease-out;will-change:transform,color;&:after{z-index:1;position:absolute;bottom:-0.5px;left:0;content:\"\";display:block;width:100%;height:4px;background-color:",";transform:scale(0,1);transform-origin:100% 50%;will-change:transform;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1),-webkit-transform 0.8s cubic-bezier(0.19,1,0.22,1);}&:hover:after,&.active:after{background-color:",";transform:scale(1);transform-origin:0 50%;transition:transform 1s cubic-bezier(0.19,1,0.22,1),background-color 0.2s ease-out,-webkit-transform 1s cubic-bezier(0.19,1,0.22,1);}}.error__emoji{width:30vw;}"],variables/* default.black */.Z.black,variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary,variables/* default.primary */.Z.primary);// padding-top: .5em;
// padding-bottom: .25em;
;// CONCATENATED MODULE: ./src/components/common/index.js


/***/ }),

/***/ 4877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "/Users/laceyumamoto/Projects/Personal/lumamoto.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(127);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./src/data/data.js
var data = __webpack_require__(6928);
var data_default = /*#__PURE__*/__webpack_require__.n(data);
// EXTERNAL MODULE: ./src/data/variables.js
var variables = __webpack_require__(6421);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(9550);
;// CONCATENATED MODULE: ./src/components/layout/footer/style.js
const FooterStyle=styled_components_esm["default"].footer.withConfig({displayName:"style__FooterStyle",componentId:"sc-l15n7d-0"})(["padding-top:0rem;padding-bottom:2rem;z-index:0;position:relative;text-align:center;@media (max-width:","){padding-bottom:2rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;}.quote{font-size:4rem;font-family:\"GT-Walsheim-Pro-Bold\";line-height:1.2;color:",";@media (max-width:","){font-size:2rem;}}"],variables/* default.breakpointPhone */.Z.breakpointPhone,variables/* default.primary */.Z.primary,variables/* default.breakpointPhone */.Z.breakpointPhone);const SubRight=styled_components_esm["default"].p.withConfig({displayName:"style__SubRight",componentId:"sc-l15n7d-1"})(["font-size:1rem;line-height:1.8;letter-spacing:2px;text-transform:capitalize;margin-bottom:20px;font-family:\"GT-Walsheim-Pro-Bold\";"]);const CopyRight=styled_components_esm["default"].p.withConfig({displayName:"style__CopyRight",componentId:"sc-l15n7d-2"})(["font-size:11px;line-height:1.8;letter-spacing:1px;text-transform:capitalize;"]);const FooterBody=styled_components_esm["default"].div.withConfig({displayName:"style__FooterBody",componentId:"sc-l15n7d-3"})(["display:grid;grid-template-columns:1fr 1fr;align-items:center;@media (max-width:","){grid-template-columns:1fr;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);const FooterSocialMedia=styled_components_esm["default"].ul.withConfig({displayName:"style__FooterSocialMedia",componentId:"sc-l15n7d-4"})(["list-style:none;padding-left:0;@media (max-width:","){display:flex;align-items:center;justify-content:space-between;}li{margin-bottom:1.5rem;}"],variables/* default.breakpointPhone */.Z.breakpointPhone);const MediaLink=styled_components_esm["default"].a.withConfig({displayName:"style__MediaLink",componentId:"sc-l15n7d-5"})(["padding:1rem 0rem;padding-bottom:0.5rem;line-height:1;font-size:1rem;text-transform:capitalize;font-family:\"GT-Walsheim-Pro-Bold\";color:",";"],variables/* default.primary */.Z.primary);
// EXTERNAL MODULE: ./src/components/common/index.js + 8 modules
var common = __webpack_require__(2730);
;// CONCATENATED MODULE: ./node_modules/react-feather/dist/icons/mail.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Mail = (0,index_js_.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = _objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/index_js_default().createElement("svg", _extends({
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
  }, rest), /*#__PURE__*/index_js_default().createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/index_js_default().createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
});
Mail.propTypes = {
  color: (prop_types_default()).string,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
Mail.displayName = 'Mail';
/* harmony default export */ const mail = (Mail);
;// CONCATENATED MODULE: ./node_modules/react-feather/dist/icons/github.js
function github_extends() { github_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return github_extends.apply(this, arguments); }

function github_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = github_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function github_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var GitHub = (0,index_js_.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = github_objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/index_js_default().createElement("svg", github_extends({
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
  }, rest), /*#__PURE__*/index_js_default().createElement("path", {
    d: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
  }));
});
GitHub.propTypes = {
  color: (prop_types_default()).string,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
GitHub.displayName = 'GitHub';
/* harmony default export */ const github = (GitHub);
;// CONCATENATED MODULE: ./node_modules/react-feather/dist/icons/linkedin.js
function linkedin_extends() { linkedin_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return linkedin_extends.apply(this, arguments); }

function linkedin_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = linkedin_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function linkedin_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var Linkedin = (0,index_js_.forwardRef)(function (_ref, ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'currentColor' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 24 : _ref$size,
      rest = linkedin_objectWithoutProperties(_ref, ["color", "size"]);

  return /*#__PURE__*/index_js_default().createElement("svg", linkedin_extends({
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
  }, rest), /*#__PURE__*/index_js_default().createElement("path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
  }), /*#__PURE__*/index_js_default().createElement("rect", {
    x: "2",
    y: "9",
    width: "4",
    height: "12"
  }), /*#__PURE__*/index_js_default().createElement("circle", {
    cx: "4",
    cy: "4",
    r: "2"
  }));
});
Linkedin.propTypes = {
  color: (prop_types_default()).string,
  size: prop_types_default().oneOfType([(prop_types_default()).string, (prop_types_default()).number])
};
Linkedin.displayName = 'Linkedin';
/* harmony default export */ const linkedin = (Linkedin);
;// CONCATENATED MODULE: ./src/components/layout/footer/index.jsx
// import { StaticImage } from "gatsby-plugin-image"
const Footer=()=>{const iconStyle={color:variables/* default.primary */.Z.primary,padding:"12px"};return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(FooterStyle,null,/*#__PURE__*/index_js_default().createElement(common/* ContainerLayout */.rm,null,/*#__PURE__*/index_js_default().createElement("a",{className:"lined-link",style:iconStyle,href:`mailto:${(data_default()).SiteContact.email}`},/*#__PURE__*/index_js_default().createElement(mail,null)),/*#__PURE__*/index_js_default().createElement("a",{className:"lined-link",style:iconStyle,href:(data_default()).SiteSocialLinks.github},/*#__PURE__*/index_js_default().createElement(github,null)),/*#__PURE__*/index_js_default().createElement("a",{className:"lined-link",style:iconStyle,href:(data_default()).SiteSocialLinks.linkedin},/*#__PURE__*/index_js_default().createElement(linkedin,null)),/*#__PURE__*/index_js_default().createElement(CopyRight,{className:"text-dark"},"\xA9",/*#__PURE__*/index_js_default().createElement("span",null," ","\u30EC\u30A4\u30B7\u30FC \u99AC\u672C ",new Date().getFullYear(),".")))));};/* harmony default export */ const footer = (Footer);
;// CONCATENATED MODULE: ./src/components/layout/index.js
// import { useStaticQuery, graphql } from "gatsby"
// import Navbar from "./navbar"
const Layout=({children})=>{// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)
return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(common/* GlobalStyle */.ZL,null),/*#__PURE__*/index_js_default().createElement(common/* MainContent */.M9,null,/*#__PURE__*/index_js_default().createElement(common/* ContainerLayout */.rm,null),/*#__PURE__*/index_js_default().createElement(common/* ContainerLayout */.rm,null,/*#__PURE__*/index_js_default().createElement("main",null,children))),/*#__PURE__*/index_js_default().createElement(footer,null));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const layout = (Layout);

/***/ }),

/***/ 6928:
/***/ ((module) => {

module.exports={SiteTitle:'Lacey C. Umamoto',Sitelogo:'#',SiteLogoText:'lumamoto',SiteAuthor:'Lacey Umamoto',SiteDescription:'Portfolio',defaultDescription:'Portfolio',SiteSocialLinks:{github:'https://github.com/lumamoto',linkedin:'https://www.linkedin.com/in/lumamoto/',devpost:'https://devpost.com/lumamoto'},// SiteAddress: {
//   city: 'Casablanca',
//   region: 'CurvaSud',
//   country: 'Morocco',
//   zipCode: 'ZipCode',
// },
SiteContact:{email:'lcumamoto@gmail.com',phone:'000-000-0000'},SiteCopyright:'2021'};

/***/ }),

/***/ 6421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const variables={primary:"#85CDC8",inverse:"#fff",// colors
darkGrey:"#333447",black:"#000",// grid
width:"96%",wrapperWidth:"65rem",gutter:"4%",breakpointPhone:"850px",breakpointTablet:"1024px",breakpointLaptop:"1200px",breakpointLarge:"60em"// 960px
};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (variables);

/***/ }),

/***/ 429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4877);
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2730);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7533);
const NotFoundPage=()=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__/* .ContainerLayout */ .rm,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__/* .Intro */ .p2,{className:"center"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx,null,"404"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__/* .Title */ .Dx,null,"NOT FOUND"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_common__WEBPACK_IMPORTED_MODULE_2__/* .SubText */ .i_,null,"Hey, how'd you end up here? Here's the way back"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{className:"text-primary lined-link"},"home")),"."))));/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map