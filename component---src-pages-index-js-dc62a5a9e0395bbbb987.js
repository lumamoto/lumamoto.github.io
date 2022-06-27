"use strict";(self.webpackChunkgatsby_portfolio=self.webpackChunkgatsby_portfolio||[]).push([[678],{6162:function(e,t,a){var r=a(8580);t.Z=void 0;var i,n=r(a(5666)),o=r(a(3793)),l=r(a(3246)),s=r(a(4362)),d=r(a(7294)),c=r(a(5697)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,v=b&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},R=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+o+l+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,l=d.default.createElement(C,(0,s.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,i(r),l):l})),C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,s.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var j=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,w=e.itemProp,S=e.loading,L=e.draggable,k=g||h;if(!k)return null;var j=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,N=(0,s.default)({opacity:j?1:0,transition:z?"opacity "+b+"ms":"none"},l),P="boolean"==typeof y?"lightgray":y,H={transitionDelay:b+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},z&&H,l,f),T={title:t,alt:this.state.isVisible?"":a,style:V,className:m,itemProp:w},_=this.state.isHydrated?p(k):k[0];if(g)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&H)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:T,imageVariants:k,generateSources:I}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:T,imageVariants:k,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(C,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:S},_,{imageVariants:k}))}}));if(h){var W=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},P&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:P,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},z&&H)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:T,imageVariants:k,generateSources:I}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:T,imageVariants:k,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,E(k),d.default.createElement(C,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:N,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:R((0,s.default)({alt:a,title:t,loading:S},_,{imageVariants:k}))}}))}return null},t}(d.default.Component);j.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),N=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}j.propTypes={resolutions:z,sizes:N,fixed:P(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:P(c.default.oneOfType([N,c.default.arrayOf(N)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var H=j;t.Z=H},3232:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var r=a(7294),i=a(9318),n=a(6162),o=a(1074),l=a(6421),s=(o.ZP.section.withConfig({displayName:"style__AboutSection",componentId:"sc-1fwpqj7-0"})(["position:relative;text-align:center;@media only screen and (min-width:","){display:grid;grid-template-columns:1fr 1.25fr;grid-gap:10rem;text-align:left;}"],l.Z.breakpointLarge),(0,o.ZP)(n.Z).withConfig({displayName:"style__Avatar",componentId:"sc-1fwpqj7-1"})(["border-radius:5px;box-shadow:0px 0px 64px rgba(0,0,0,0.15);width:100%;"]),o.ZP.h1.withConfig({displayName:"style__Title",componentId:"sc-1fwpqj7-2"})(['margin:3rem 0 0 0;font-size:3rem;font-family:"GT-Walsheim-Pro-Bold";@media(max-width:',"){font-size:2rem;}"],l.Z.breakpointPhone)),d=o.ZP.p.withConfig({displayName:"style__Text",componentId:"sc-1fwpqj7-3"})(["font-size:1.2rem;line-height:2;color:#232323;a{color:#3F51B5;text-decoration:underline;}"]),c=(o.ZP.h2.withConfig({displayName:"style__SubTitle",componentId:"sc-1fwpqj7-4"})(['font-family:"GT-Walsheim-Pro-Medium";word-spacing:8px;@media(min-width:',"){font-size:1.8em;}"],l.Z.breakpointPhone),a(2730));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=(0,r.forwardRef)((function(e,t){var a=e.color,i=void 0===a?"currentColor":a,n=e.size,o=void 0===n?24:n,l=f(e,["color","size"]);return r.createElement("svg",u({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"7 13 12 18 17 13"}),r.createElement("polyline",{points:"7 6 12 11 17 6"}))}));m.displayName="ChevronsDown";var p=m,g=["Hi","Hey","Howdy","Hello","Hiya"],h=g[Math.floor(Math.random()*g.length)],y=["✨","💫","🌈","☀️","🌱"],b=y[Math.floor(Math.random()*y.length)],v=function(){return r.createElement("div",{style:{display:"table-cell",verticalAlign:"middle"}},r.createElement(c.rm,null,r.createElement(s,null,h,", I’m Lacey! ",r.createElement("span",{role:"img"},b)),r.createElement(d,null,"My pronouns are ",r.createElement("i",null,"she/they"),". I am currently working as a Software Engineer at"," ",r.createElement("a",{href:"https://arete.com"},r.createElement("b",{className:"text-primary lined-link"},"Areté")),". I graduated from the University of California, San Diego in December 2020 with a B.S. in Computer Science.",r.createElement("br",null),"I have experience in web, mobile, and game development, and I enjoy creating projects both on my own and with others at"," ",r.createElement("a",{href:"https://devpost.com/lumamoto"},r.createElement("b",{className:"text-primary lined-link"},"hackathons")),". In my free time, I love working on fun side projects, learning new technologies, playing video games, cooking dubious vegan food, and listening to funky music.",r.createElement("br",null)),r.createElement(c.t,{href:"Lacey-Umamoto-Resume.pdf"},"Resume")),r.createElement("div",{style:{color:l.Z.primary,margin:"5rem 0 0 0",textAlign:"center"}},r.createElement(p,{className:"align-middle"})))},w=a(396),E=function(e){var t=e.data.allMarkdownRemark.edges;return r.createElement(c.rm,null,r.createElement(c.K9,{className:"text-dark"},"Projects"),r.createElement(c.JC,null,t.map((function(e){var t=e.node,a=t.frontmatter.title;return r.createElement(c.$B,{key:t.frontmatter.github},r.createElement("div",{className:"media"},r.createElement("div",{className:"image-wrapper"},r.createElement("a",{href:t.frontmatter.github},t.frontmatter.image&&r.createElement(w.G,{image:t.frontmatter.image.childImageSharp.gatsbyImageData})))),r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement(c.WD,null,t.frontmatter.category),r.createElement(c.Dx,{className:"text-primary"},r.createElement("a",{className:"text-primary lined-link",style:{boxShadow:"none"},href:t.frontmatter.github},a))),r.createElement(c.xv,{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}),r.createElement("div",null,t.frontmatter.tags.map((function(e,t){return r.createElement(c.Vp,{key:t},e)})))))}))))},S=function(e){var t=e.data;return r.createElement(i.Z,null,r.createElement("div",{style:{height:"100vh",display:"table"}},r.createElement(v,null)),r.createElement(E,{data:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-dc62a5a9e0395bbbb987.js.map