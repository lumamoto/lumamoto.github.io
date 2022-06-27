exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const preserveCamelCase = string => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && /[a-zA-Z]/.test(character) && character.toUpperCase() === character) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && /[a-zA-Z]/.test(character) && character.toLowerCase() === character) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
		}
	}

	return string;
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = Object.assign({
		pascalCase: false
	}, options);

	const postProcess = x => options.pascalCase ? x.charAt(0).toUpperCase() + x.slice(1) : x;

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	if (input.length === 1) {
		return options.pascalCase ? input.toUpperCase() : input.toLowerCase();
	}

	const hasUpperCase = input !== input.toLowerCase();

	if (hasUpperCase) {
		input = preserveCamelCase(input);
	}

	input = input
		.replace(/^[_.\- ]+/, '')
		.toLowerCase()
		.replace(/[_.\- ]+(\w|$)/g, (_, p1) => p1.toUpperCase())
		.replace(/\d+(\w|$)/g, m => m.toUpperCase());

	return postProcess(input);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var logDeprecationNotice = function logDeprecationNotice(prop, replacement) {
  if (false) {}

  console.log("\n    The \"" + prop + "\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");

  if (replacement) {
    console.log("Please use " + replacement + " instead of \"" + prop + "\".");
  }
}; // Handle legacy props during their deprecation phase


var convertProps = function convertProps(props) {
  var convertedProps = (0, _extends2.default)({}, props);
  var resolutions = convertedProps.resolutions,
      sizes = convertedProps.sizes,
      critical = convertedProps.critical;

  if (resolutions) {
    convertedProps.fixed = resolutions;
    logDeprecationNotice("resolutions", "the gatsby-image v2 prop \"fixed\"");
    delete convertedProps.resolutions;
  }

  if (sizes) {
    convertedProps.fluid = sizes;
    logDeprecationNotice("sizes", "the gatsby-image v2 prop \"fluid\"");
    delete convertedProps.sizes;
  }

  if (critical) {
    logDeprecationNotice("critical", "the native \"loading\" attribute");
    convertedProps.loading = "eager";
  } // convert fluid & fixed to arrays so we only have to work with arrays


  if (convertedProps.fluid) {
    convertedProps.fluid = groupByMedia([].concat(convertedProps.fluid));
  }

  if (convertedProps.fixed) {
    convertedProps.fixed = groupByMedia([].concat(convertedProps.fixed));
  }

  return convertedProps;
};
/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */


var hasArtDirectionSupport = function hasArtDirectionSupport(currentData) {
  return !!currentData && Array.isArray(currentData) && currentData.some(function (image) {
    return typeof image.media !== "undefined";
  });
};
/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */


var matchesMedia = function matchesMedia(_ref) {
  var media = _ref.media;
  return media ? isBrowser && !!window.matchMedia(media).matches : false;
};
/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */


var getImageCacheKey = function getImageCacheKey(_ref2) {
  var fluid = _ref2.fluid,
      fixed = _ref2.fixed;
  var srcData = getCurrentSrcData(fluid || fixed || []);
  return srcData && srcData.src;
};
/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */


var getCurrentSrcData = function getCurrentSrcData(currentData) {
  if (isBrowser && hasArtDirectionSupport(currentData)) {
    // Do we have an image for the current Viewport?
    var foundMedia = currentData.findIndex(matchesMedia);

    if (foundMedia !== -1) {
      return currentData[foundMedia];
    } // No media matches, select first element without a media condition


    var noMedia = currentData.findIndex(function (image) {
      return typeof image.media === "undefined";
    });

    if (noMedia !== -1) {
      return currentData[noMedia];
    }
  } // Else return the first image.


  return currentData[0];
}; // Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.


var imageCache = Object.create({});

var inImageCache = function inImageCache(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);
  return imageCache[cacheKey] || false;
};

var activateCacheForImage = function activateCacheForImage(props) {
  var convertedProps = convertProps(props);
  var cacheKey = getImageCacheKey(convertedProps);

  if (cacheKey) {
    imageCache[cacheKey] = true;
  }
}; // Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/


var hasNativeLazyLoadSupport = typeof HTMLImageElement !== "undefined" && "loading" in HTMLImageElement.prototype;
var isBrowser = typeof window !== "undefined";
var hasIOSupport = isBrowser && window.IntersectionObserver;
var io;
var listeners = new WeakMap();

function getIO() {
  if (typeof io === "undefined" && typeof window !== "undefined" && window.IntersectionObserver) {
    io = new window.IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (listeners.has(entry.target)) {
          var cb = listeners.get(entry.target); // Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0

          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            io.unobserve(entry.target);
            listeners.delete(entry.target);
            cb();
          }
        }
      });
    }, {
      rootMargin: "200px"
    });
  }

  return io;
}

function generateImageSources(imageVariants) {
  return imageVariants.map(function (_ref3) {
    var src = _ref3.src,
        srcSet = _ref3.srcSet,
        srcSetWebp = _ref3.srcSetWebp,
        media = _ref3.media,
        sizes = _ref3.sizes;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: src
    }, srcSetWebp && /*#__PURE__*/_react.default.createElement("source", {
      type: "image/webp",
      media: media,
      srcSet: srcSetWebp,
      sizes: sizes
    }), srcSet && /*#__PURE__*/_react.default.createElement("source", {
      media: media,
      srcSet: srcSet,
      sizes: sizes
    }));
  });
} // Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions


function groupByMedia(imageVariants) {
  var withMedia = [];
  var without = [];
  imageVariants.forEach(function (variant) {
    return (variant.media ? withMedia : without).push(variant);
  });

  if (without.length > 1 && "development" !== "production") {
    console.warn("We've found " + without.length + " sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");
  }

  return [].concat(withMedia, without);
}

function generateTracedSVGSources(imageVariants) {
  return imageVariants.map(function (_ref4) {
    var src = _ref4.src,
        media = _ref4.media,
        tracedSVG = _ref4.tracedSVG;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: tracedSVG
    });
  });
}

function generateBase64Sources(imageVariants) {
  return imageVariants.map(function (_ref5) {
    var src = _ref5.src,
        media = _ref5.media,
        base64 = _ref5.base64;
    return /*#__PURE__*/_react.default.createElement("source", {
      key: src,
      media: media,
      srcSet: base64
    });
  });
}

function generateNoscriptSource(_ref6, isWebp) {
  var srcSet = _ref6.srcSet,
      srcSetWebp = _ref6.srcSetWebp,
      media = _ref6.media,
      sizes = _ref6.sizes;
  var src = isWebp ? srcSetWebp : srcSet;
  var mediaAttr = media ? "media=\"" + media + "\" " : "";
  var typeAttr = isWebp ? "type='image/webp' " : "";
  var sizesAttr = sizes ? "sizes=\"" + sizes + "\" " : "";
  return "<source " + typeAttr + mediaAttr + "srcset=\"" + src + "\" " + sizesAttr + "/>";
}

function generateNoscriptSources(imageVariants) {
  return imageVariants.map(function (variant) {
    return (variant.srcSetWebp ? generateNoscriptSource(variant, true) : "") + generateNoscriptSource(variant);
  }).join("");
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getIO();

  if (observer) {
    observer.observe(el);
    listeners.set(el, cb);
  }

  return function () {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

var noscriptImg = function noscriptImg(props) {
  // Check if prop exists before adding each attribute to the string output below to prevent
  // HTML validation issues caused by empty values like width="" and height=""
  var src = props.src ? "src=\"" + props.src + "\" " : "src=\"\" "; // required attribute

  var sizes = props.sizes ? "sizes=\"" + props.sizes + "\" " : "";
  var srcSet = props.srcSet ? "srcset=\"" + props.srcSet + "\" " : "";
  var title = props.title ? "title=\"" + props.title + "\" " : "";
  var alt = props.alt ? "alt=\"" + props.alt + "\" " : "alt=\"\" "; // required attribute

  var width = props.width ? "width=\"" + props.width + "\" " : "";
  var height = props.height ? "height=\"" + props.height + "\" " : "";
  var crossOrigin = props.crossOrigin ? "crossorigin=\"" + props.crossOrigin + "\" " : "";
  var loading = props.loading ? "loading=\"" + props.loading + "\" " : "";
  var draggable = props.draggable ? "draggable=\"" + props.draggable + "\" " : "";
  var sources = generateNoscriptSources(props.imageVariants);
  return "<picture>" + sources + "<img " + loading + width + height + sizes + srcSet + src + alt + title + crossOrigin + draggable + "style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";
}; // Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release


var Placeholder = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var src = props.src,
      imageVariants = props.imageVariants,
      generateSources = props.generateSources,
      spreadProps = props.spreadProps,
      ariaHidden = props.ariaHidden;

  var baseImage = /*#__PURE__*/_react.default.createElement(Img, (0, _extends2.default)({
    ref: ref,
    src: src
  }, spreadProps, {
    ariaHidden: ariaHidden
  }));

  return imageVariants.length > 1 ? /*#__PURE__*/_react.default.createElement("picture", null, generateSources(imageVariants), baseImage) : baseImage;
});

var Img = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var sizes = props.sizes,
      srcSet = props.srcSet,
      src = props.src,
      style = props.style,
      onLoad = props.onLoad,
      onError = props.onError,
      loading = props.loading,
      draggable = props.draggable,
      ariaHidden = props.ariaHidden,
      otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable", "ariaHidden"]);
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    "aria-hidden": ariaHidden,
    sizes: sizes,
    srcSet: srcSet,
    src: src
  }, otherProps, {
    onLoad: onLoad,
    onError: onError,
    ref: ref,
    loading: loading,
    draggable: draggable,
    style: (0, _extends2.default)({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }, style)
  }));
});

Img.propTypes = {
  style: _propTypes.default.object,
  onError: _propTypes.default.func,
  onLoad: _propTypes.default.func
};

var Image = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Image, _React$Component);

  function Image(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // If this image has already been loaded before then we can assume it's
    // already in the browser cache so it's cheap to just show directly.

    _this.seenBefore = isBrowser && inImageCache(props);
    _this.isCritical = props.loading === "eager" || props.critical;
    _this.addNoScript = !(_this.isCritical && !props.fadeIn);
    _this.useIOSupport = !hasNativeLazyLoadSupport && hasIOSupport && !_this.isCritical && !_this.seenBefore;
    var isVisible = _this.isCritical || isBrowser && (hasNativeLazyLoadSupport || !_this.useIOSupport);
    _this.state = {
      isVisible: isVisible,
      imgLoaded: false,
      imgCached: false,
      fadeIn: !_this.seenBefore && props.fadeIn,
      isHydrated: false
    };
    _this.imageRef = /*#__PURE__*/_react.default.createRef();
    _this.placeholderRef = props.placeholderRef || /*#__PURE__*/_react.default.createRef();
    _this.handleImageLoaded = _this.handleImageLoaded.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = Image.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      isHydrated: isBrowser
    });

    if (this.state.isVisible && typeof this.props.onStartLoad === "function") {
      this.props.onStartLoad({
        wasCached: inImageCache(this.props)
      });
    }

    if (this.isCritical) {
      var img = this.imageRef.current;

      if (img && img.complete) {
        this.handleImageLoaded();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.cleanUpListeners) {
      this.cleanUpListeners();
    }
  } // Specific to IntersectionObserver based lazy-load support
  ;

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.useIOSupport && ref) {
      this.cleanUpListeners = listenToIntersections(ref, function () {
        var imageInCache = inImageCache(_this2.props);

        if (!_this2.state.isVisible && typeof _this2.props.onStartLoad === "function") {
          _this2.props.onStartLoad({
            wasCached: imageInCache
          });
        } // imgCached and imgLoaded must update after isVisible,
        // Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
        // imgLoaded and imgCached are in a 2nd setState call to be changed together,
        // avoiding initiating unnecessary animation frames from style changes.


        _this2.setState({
          isVisible: true
        }, function () {
          _this2.setState({
            imgLoaded: imageInCache,
            // `currentSrc` should be a string, but can be `undefined` in IE,
            // !! operator validates the value is not undefined/null/""
            // for lazyloaded components this might be null
            // TODO fix imgCached behaviour as it's now false when it's lazyloaded
            imgCached: !!(_this2.imageRef.current && _this2.imageRef.current.currentSrc)
          });
        });
      });
    }
  };

  _proto.handleImageLoaded = function handleImageLoaded() {
    activateCacheForImage(this.props);
    this.setState({
      imgLoaded: true
    });

    if (this.props.onLoad) {
      this.props.onLoad();
    }
  };

  _proto.render = function render() {
    var _convertProps = convertProps(this.props),
        title = _convertProps.title,
        alt = _convertProps.alt,
        className = _convertProps.className,
        _convertProps$style = _convertProps.style,
        style = _convertProps$style === void 0 ? {} : _convertProps$style,
        _convertProps$imgStyl = _convertProps.imgStyle,
        imgStyle = _convertProps$imgStyl === void 0 ? {} : _convertProps$imgStyl,
        _convertProps$placeho = _convertProps.placeholderStyle,
        placeholderStyle = _convertProps$placeho === void 0 ? {} : _convertProps$placeho,
        placeholderClassName = _convertProps.placeholderClassName,
        fluid = _convertProps.fluid,
        fixed = _convertProps.fixed,
        backgroundColor = _convertProps.backgroundColor,
        durationFadeIn = _convertProps.durationFadeIn,
        Tag = _convertProps.Tag,
        itemProp = _convertProps.itemProp,
        loading = _convertProps.loading,
        draggable = _convertProps.draggable;

    var imageVariants = fluid || fixed; // Abort early if missing image data (#25371)

    if (!imageVariants) {
      return null;
    }

    var shouldReveal = this.state.fadeIn === false || this.state.imgLoaded;
    var shouldFadeIn = this.state.fadeIn === true && !this.state.imgCached;
    var imageStyle = (0, _extends2.default)({
      opacity: shouldReveal ? 1 : 0,
      transition: shouldFadeIn ? "opacity " + durationFadeIn + "ms" : "none"
    }, imgStyle);
    var bgColor = typeof backgroundColor === "boolean" ? "lightgray" : backgroundColor;
    var delayHideStyle = {
      transitionDelay: durationFadeIn + "ms"
    };
    var imagePlaceholderStyle = (0, _extends2.default)({
      opacity: this.state.imgLoaded ? 0 : 1
    }, shouldFadeIn && delayHideStyle, imgStyle, placeholderStyle);
    var placeholderImageProps = {
      title: title,
      alt: !this.state.isVisible ? alt : "",
      style: imagePlaceholderStyle,
      className: placeholderClassName,
      itemProp: itemProp
    }; // Initial client render state needs to match SSR until hydration finishes.
    // Once hydration completes, render again to update to the correct image.
    // `imageVariants` is always an Array type at this point due to `convertProps()`

    var image = !this.state.isHydrated ? imageVariants[0] : getCurrentSrcData(imageVariants);

    if (fluid) {
      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: (0, _extends2.default)({
          position: "relative",
          overflow: "hidden",
          maxWidth: image.maxWidth ? image.maxWidth + "px" : null,
          maxHeight: image.maxHeight ? image.maxHeight + "px" : null
        }, style),
        ref: this.handleRef,
        key: "fluid-" + JSON.stringify(image.srcSet)
      }, /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        style: {
          width: "100%",
          paddingBottom: 100 / image.aspectRatio + "%"
        }
      }), bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          position: "absolute",
          top: 0,
          bottom: 0,
          opacity: !this.state.imgLoaded ? 1 : 0,
          right: 0,
          left: 0
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }

    if (fixed) {
      var divStyle = (0, _extends2.default)({
        position: "relative",
        overflow: "hidden",
        display: "inline-block",
        width: image.width,
        height: image.height
      }, style);

      if (style.display === "inherit") {
        delete divStyle.display;
      }

      return /*#__PURE__*/_react.default.createElement(Tag, {
        className: (className ? className : "") + " gatsby-image-wrapper",
        style: divStyle,
        ref: this.handleRef,
        key: "fixed-" + JSON.stringify(image.srcSet)
      }, bgColor && /*#__PURE__*/_react.default.createElement(Tag, {
        "aria-hidden": true,
        title: title,
        style: (0, _extends2.default)({
          backgroundColor: bgColor,
          width: image.width,
          opacity: !this.state.imgLoaded ? 1 : 0,
          height: image.height
        }, shouldFadeIn && delayHideStyle)
      }), image.base64 && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.base64,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateBase64Sources
      }), image.tracedSVG && /*#__PURE__*/_react.default.createElement(Placeholder, {
        ariaHidden: true,
        ref: this.placeholderRef,
        src: image.tracedSVG,
        spreadProps: placeholderImageProps,
        imageVariants: imageVariants,
        generateSources: generateTracedSVGSources
      }), this.state.isVisible && /*#__PURE__*/_react.default.createElement("picture", null, generateImageSources(imageVariants), /*#__PURE__*/_react.default.createElement(Img, {
        alt: alt,
        title: title,
        width: image.width,
        height: image.height,
        sizes: image.sizes,
        src: image.src,
        crossOrigin: this.props.crossOrigin,
        srcSet: image.srcSet,
        style: imageStyle,
        ref: this.imageRef,
        onLoad: this.handleImageLoaded,
        onError: this.props.onError,
        itemProp: itemProp,
        loading: loading,
        draggable: draggable
      })), this.addNoScript && /*#__PURE__*/_react.default.createElement("noscript", {
        dangerouslySetInnerHTML: {
          __html: noscriptImg((0, _extends2.default)({
            alt: alt,
            title: title,
            loading: loading
          }, image, {
            imageVariants: imageVariants
          }))
        }
      }));
    }

    return null;
  };

  return Image;
}(_react.default.Component);

Image.defaultProps = {
  fadeIn: true,
  durationFadeIn: 500,
  alt: "",
  Tag: "div",
  // We set it to `lazy` by default because it's best to default to a performant
  // setting and let the user "opt out" to `eager`
  loading: "lazy"
};

var fixedObject = _propTypes.default.shape({
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string
});

var fluidObject = _propTypes.default.shape({
  aspectRatio: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  srcSet: _propTypes.default.string.isRequired,
  sizes: _propTypes.default.string.isRequired,
  base64: _propTypes.default.string,
  tracedSVG: _propTypes.default.string,
  srcWebp: _propTypes.default.string,
  srcSetWebp: _propTypes.default.string,
  media: _propTypes.default.string,
  maxWidth: _propTypes.default.number,
  maxHeight: _propTypes.default.number
});

function requireFixedOrFluid(originalPropTypes) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;

    if (!props.fixed && !props.fluid) {
      throw new Error("The prop `fluid` or `fixed` is marked as required in `" + componentName + "`, but their values are both `undefined`.");
    }

    _propTypes.default.checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = originalPropTypes, _PropTypes$checkPropT), props, "prop", componentName);
  };
} // If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props


Image.propTypes = {
  resolutions: fixedObject,
  sizes: fluidObject,
  fixed: requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject, _propTypes.default.arrayOf(fixedObject)])),
  fluid: requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject, _propTypes.default.arrayOf(fluidObject)])),
  fadeIn: _propTypes.default.bool,
  durationFadeIn: _propTypes.default.number,
  title: _propTypes.default.string,
  alt: _propTypes.default.string,
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  // Support Glamor's css prop.
  critical: _propTypes.default.bool,
  crossOrigin: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  style: _propTypes.default.object,
  imgStyle: _propTypes.default.object,
  placeholderStyle: _propTypes.default.object,
  placeholderClassName: _propTypes.default.string,
  backgroundColor: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool]),
  onLoad: _propTypes.default.func,
  onError: _propTypes.default.func,
  onStartLoad: _propTypes.default.func,
  Tag: _propTypes.default.string,
  itemProp: _propTypes.default.string,
  loading: _propTypes.default.oneOf(["auto", "lazy", "eager"]),
  draggable: _propTypes.default.bool
};
var _default = Image;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ Y),
/* harmony export */   "MainImage": () => (/* binding */ q),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ J),
/* harmony export */   "generateImageData": () => (/* binding */ y),
/* harmony export */   "getImage": () => (/* binding */ R),
/* harmony export */   "getImageData": () => (/* binding */ W),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ w),
/* harmony export */   "getSrc": () => (/* binding */ x),
/* harmony export */   "getSrcSet": () => (/* binding */ I),
/* harmony export */   "withArtDirection": () => (/* binding */ j)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common-tags */ "./node_modules/common-tags/es/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);






function s() {
  return (s = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];

      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }

    return e;
  }).apply(this, arguments);
}

function l(e, t) {
  if (null == e) return {};
  var a,
      i,
      r = {},
      n = Object.keys(e);

  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);

  return r;
}

var d,
    u = [.25, .5, 1, 2],
    c = [750, 1080, 1366, 1920],
    h = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
    g = function (e) {
  return console.warn(e);
},
    p = function (e, t) {
  return e - t;
},
    m = function (e) {
  return e.map(function (e) {
    return e.src + " " + e.width + "w";
  }).join(",\n");
};

function f(e) {
  var t = e.lastIndexOf(".");

  if (-1 !== t) {
    var a = e.substr(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}

function v(e) {
  var t = e.layout,
      a = void 0 === t ? "constrained" : t,
      i = e.width,
      n = e.height,
      o = e.sourceMetadata,
      l = e.breakpoints,
      d = e.aspectRatio,
      u = e.formats,
      c = void 0 === u ? ["auto", "webp"] : u;
  return c = c.map(function (e) {
    return e.toLowerCase();
  }), a = camelcase__WEBPACK_IMPORTED_MODULE_2___default()(a), i && n ? s({}, e, {
    formats: c,
    layout: a,
    aspectRatio: i / n
  }) : (o.width && o.height && !d && (d = o.width / o.height), "fullWidth" === a ? (i = i || o.width || l[l.length - 1], n = n || Math.round(i / (d || 1.3333333333333333))) : (i || (i = n && d ? n * d : o.width ? o.width : n ? Math.round(n / 1.3333333333333333) : 800), d && !n ? n = Math.round(i / d) : d || (d = i / n)), s({}, e, {
    width: i,
    height: n,
    aspectRatio: d,
    layout: a,
    formats: c
  }));
}

function w(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = v(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}

function y(e) {
  var t,
      a = (e = v(e)).pluginName,
      r = e.sourceMetadata,
      n = e.generateImageSource,
      o = e.layout,
      l = e.fit,
      h = e.options,
      p = e.width,
      w = e.height,
      y = e.filename,
      M = e.reporter,
      S = void 0 === M ? {
    warn: g
  } : M,
      N = e.backgroundColor,
      R = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof n) throw new Error("generateImageSource must be a function");
  r && (r.width || r.height) ? r.format || (r.format = f(y)) : r = {
    width: p,
    height: w,
    format: (null == (t = r) ? void 0 : t.format) || f(y) || "auto"
  };
  var x = new Set(e.formats);
  (0 === x.size || x.has("auto") || x.has("")) && (x.delete("auto"), x.delete(""), x.add(r.format)), x.has("jpg") && x.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), x.delete("jpg" === r.format ? "png" : "jpg"));

  var I = function (e) {
    var t = e.filename,
        a = e.layout,
        r = void 0 === a ? "constrained" : a,
        n = e.sourceMetadata,
        o = e.reporter,
        l = void 0 === o ? {
      warn: g
    } : o,
        h = e.breakpoints,
        p = void 0 === h ? c : h,
        m = Object.entries({
      width: e.width,
      height: e.height
    }).filter(function (e) {
      var t = e[1];
      return "number" == typeof t && t < 1;
    });
    if (m.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + m.map(function (e) {
      return e.join(": ");
    }).join(", "));
    return "fixed" === r ? function (e) {
      var t = e.filename,
          a = e.sourceMetadata,
          r = e.width,
          n = e.height,
          o = e.fit,
          s = void 0 === o ? "cover" : o,
          l = e.outputPixelDensities,
          c = e.reporter,
          h = void 0 === c ? {
        warn: g
      } : c,
          p = a.width / a.height,
          m = b(void 0 === l ? u : l);

      if (r && n) {
        var f = k(a, {
          width: r,
          height: n,
          fit: s
        });
        r = f.width, n = f.height, p = f.aspectRatio;
      }

      r ? n || (n = Math.round(r / p)) : r = n ? Math.round(n * p) : 800;
      var v,
          w,
          y = r;

      if (a.width < r || a.height < n) {
        var E = a.width < r ? "width" : "height";
        h.warn((0,common_tags__WEBPACK_IMPORTED_MODULE_1__.stripIndent)(d || (v = ["\n    The requested ", ' "', 'px" for the image ', " was larger than the actual image ", " of ", "px. If possible, replace the current image with a larger one."], w || (w = v.slice(0)), v.raw = w, d = v), E, "width" === E ? r : n, t, E, a[E])), "width" === E ? (r = a.width, n = Math.round(r / p)) : r = (n = a.height) * p;
      }

      return {
        sizes: m.filter(function (e) {
          return e >= 1;
        }).map(function (e) {
          return Math.round(e * r);
        }).filter(function (e) {
          return e <= a.width;
        }),
        aspectRatio: p,
        presentationWidth: y,
        presentationHeight: Math.round(y / p),
        unscaledWidth: r
      };
    }(e) : "constrained" === r ? E(e) : "fullWidth" === r ? E(s({
      breakpoints: p
    }, e)) : (l.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + r), {
      sizes: [n.width],
      presentationWidth: n.width,
      presentationHeight: n.height,
      aspectRatio: n.width / n.height,
      unscaledWidth: n.width
    });
  }(s({}, e, {
    sourceMetadata: r
  })),
      W = {
    sources: []
  },
      j = e.sizes;

  j || (j = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";

      case "fixed":
        return e + "px";

      case "fullWidth":
        return "100vw";

      default:
        return;
    }
  }(I.presentationWidth, o)), x.forEach(function (e) {
    var t = I.sizes.map(function (t) {
      var i = n(y, t, Math.round(t / I.aspectRatio), e, l, h);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);

    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === I.unscaledWidth;
      }) || t[0];
      i && (W.fallback = {
        src: i.src,
        srcSet: m(t),
        sizes: j
      });
    } else {
      var r;
      null == (r = W.sources) || r.push({
        srcSet: m(t),
        sizes: j,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: W,
    layout: o,
    backgroundColor: N
  };

  switch (R && (_.placeholder = {
    fallback: R
  }), o) {
    case "fixed":
      _.width = I.presentationWidth, _.height = I.presentationHeight;
      break;

    case "fullWidth":
      _.width = 1, _.height = 1 / I.aspectRatio;
      break;

    case "constrained":
      _.width = e.width || I.presentationWidth || 1, _.height = (_.width || 1) / I.aspectRatio;
  }

  return _;
}

var b = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};

function E(e) {
  var t,
      a = e.sourceMetadata,
      i = e.width,
      r = e.height,
      n = e.fit,
      o = void 0 === n ? "cover" : n,
      s = e.outputPixelDensities,
      l = e.breakpoints,
      d = e.layout,
      c = a.width / a.height,
      h = b(void 0 === s ? u : s);

  if (i && r) {
    var g = k(a, {
      width: i,
      height: r,
      fit: o
    });
    i = g.width, r = g.height, c = g.aspectRatio;
  }

  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(800, a.width)) / c), i || (i = r * c);
  var m = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == l ? void 0 : l.length) > 0 ? (t = l.filter(function (e) {
    return e <= a.width;
  })).length < l.length && !t.includes(a.width) && t.push(a.width) : t = (t = h.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== d || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: c,
    presentationWidth: m,
    presentationHeight: Math.round(m / c),
    unscaledWidth: i
  };
}

function k(e, t) {
  var a = e.width / e.height,
      i = t.width,
      r = t.height;

  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;

    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
          o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;

    case "outside":
      var s = t.width ? t.width : 0,
          l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;

    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }

  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}

var M = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
    S = ["images", "placeholder"];

function N() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}

new Set();

var R = function (e) {
  var t;
  return function (e) {
    var t, a;
    return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
  }(e) ? e : function (e) {
    return Boolean(null == e ? void 0 : e.gatsbyImageData);
  }(e) ? e.gatsbyImageData : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
},
    x = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
},
    I = function (e) {
  var t, a, i;
  return null == (t = R(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
};

function W(e) {
  var t,
      a = e.baseUrl,
      i = e.urlBuilder,
      r = e.sourceWidth,
      n = e.sourceHeight,
      o = e.pluginName,
      d = void 0 === o ? "getImageData" : o,
      u = e.formats,
      c = void 0 === u ? ["auto"] : u,
      g = e.breakpoints,
      p = e.options,
      m = l(e, M);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = h), y(s({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: c,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: n,
      format: "auto"
    }
  }));
}

function j(e, t) {
  var a,
      i,
      r,
      n = e.images,
      o = e.placeholder,
      d = s({}, l(e, S), {
    images: s({}, n, {
      sources: []
    }),
    placeholder: o && s({}, o, {
      sources: []
    })
  });
  return t.forEach(function (t) {
    var a,
        i = t.media,
        r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = d.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return s({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), d.placeholder && d.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = d.images.sources).push.apply(a, n.sources), null != o && o.sources && (null == (i = d.placeholder) || (r = i.sources).push.apply(r, o.sources)), d;
}

var _,
    T = ["src", "srcSet", "loading", "alt", "shouldLoad", "innerRef"],
    A = ["fallback", "sources", "shouldLoad"],
    O = function (t) {
  var a = t.src,
      i = t.srcSet,
      r = t.loading,
      n = t.alt,
      o = void 0 === n ? "" : n,
      d = t.shouldLoad,
      u = t.innerRef,
      c = l(t, T);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", s({}, c, {
    decoding: "async",
    loading: r,
    src: d ? a : void 0,
    "data-src": d ? void 0 : a,
    srcSet: d ? i : void 0,
    "data-srcset": d ? void 0 : i,
    alt: o,
    ref: u
  }));
},
    z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  var i = t.fallback,
      r = t.sources,
      n = void 0 === r ? [] : r,
      o = t.shouldLoad,
      d = void 0 === o || o,
      u = l(t, A),
      c = u.sizes || (null == i ? void 0 : i.sizes),
      h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(O, s({}, u, i, {
    sizes: c,
    shouldLoad: d,
    innerRef: a
  }));
  return n.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, n.map(function (t) {
    var a = t.media,
        i = t.srcSet,
        r = t.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
      key: a + "-" + r + "-" + i,
      type: r,
      media: a,
      srcSet: d ? i : void 0,
      "data-srcset": d ? void 0 : i,
      sizes: c
    });
  }), h) : h;
});

O.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool
}, z.displayName = "Picture", z.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_3__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_3__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired
  })]))
};

var L = ["fallback"],
    C = function (t) {
  var a = t.fallback,
      i = l(t, L);
  return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, i, {
    fallback: {
      src: a
    },
    "aria-hidden": !0,
    alt: ""
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", s({}, i));
};

C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_3__.string,
  sources: null == (_ = z.propTypes) ? void 0 : _.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (t, a) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({
    ref: a
  }, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, s({}, t, {
    shouldLoad: !0
  }))));
});
q.displayName = "MainImage", q.propTypes = z.propTypes;

var D = ["children"],
    P = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
    type: "module",
    dangerouslySetInnerHTML: {
      __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1)}}'
    }
  });
},
    H = function (t) {
  var a = t.layout,
      i = t.width,
      r = t.height;
  return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    "aria-hidden": !0,
    style: {
      paddingTop: r / i * 100 + "%"
    }
  }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      maxWidth: i,
      display: "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    alt: "",
    role: "presentation",
    "aria-hidden": "true",
    src: "data:image/svg+xml;charset=utf-8,%3Csvg height='" + r + "' width='" + i + "' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",
    style: {
      maxWidth: "100%",
      display: "block",
      position: "static"
    }
  })) : null;
},
    F = function (t) {
  var i = t.children,
      r = l(t, D);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, s({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(P, null));
},
    B = ["as", "children"],
    G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
    V = ["style", "className"],
    U = function (e) {
  return e.replace(/\n/g, "");
},
    X = function (t) {
  var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.children,
      n = l(t, B);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, s({}, n), r);
},
    Y = function (t) {
  var a = t.as,
      i = t.className,
      r = t.class,
      n = t.style,
      o = t.image,
      d = t.loading,
      u = void 0 === d ? "lazy" : d,
      c = t.imgClassName,
      h = t.imgStyle,
      g = t.backgroundColor,
      p = t.objectFit,
      m = t.objectPosition,
      f = l(t, G);
  if (!o) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
  r && (i = r), h = s({
    objectFit: p,
    objectPosition: m,
    backgroundColor: g
  }, h);

  var v = o.width,
      w = o.height,
      y = o.layout,
      b = o.images,
      E = o.placeholder,
      k = o.backgroundColor,
      M = function (e, t, a) {
    var i = {},
        r = "gatsby-image-wrapper";
    return N() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (N() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
      className: r,
      "data-gatsby-image-wrapper": "",
      style: i
    };
  }(v, w, y),
      S = M.style,
      R = M.className,
      x = l(M, V),
      I = {
    fallback: void 0,
    sources: []
  };

  return b.fallback && (I.fallback = s({}, b.fallback, {
    srcSet: b.fallback.srcSet ? U(b.fallback.srcSet) : void 0
  })), b.sources && (I.sources = b.sources.map(function (e) {
    return s({}, e, {
      srcSet: U(e.srcSet)
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(X, s({}, x, {
    as: a,
    style: s({}, S, n, {
      backgroundColor: g
    }),
    className: R + (i ? " " + i : "")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, {
    layout: y,
    width: v,
    height: w
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, s({}, function (e, t, a, i, r, n, o, l) {
    var d = {};
    n && (d.backgroundColor = n, "fixed" === a ? (d.width = i, d.height = r, d.backgroundColor = n, d.position = "relative") : ("constrained" === a || "fullWidth" === a) && (d.position = "absolute", d.top = 0, d.left = 0, d.bottom = 0, d.right = 0)), o && (d.objectFit = o), l && (d.objectPosition = l);
    var u = s({}, e, {
      "aria-hidden": !0,
      "data-placeholder-image": "",
      style: s({
        opacity: 1,
        transition: "opacity 500ms linear"
      }, d)
    });
    return N() || (u.style = {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%"
    }), u;
  }(E, 0, y, v, w, k, p, m))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(q, s({
    "data-gatsby-image-ssr": "",
    className: c
  }, f, function (e, t, a, i, r, n, o, l) {
    return void 0 === l && (l = {}), N() || (l = s({
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      transform: "translateZ(0)",
      transition: "opacity 250ms linear",
      width: "100%",
      willChange: "opacity"
    }, l)), s({}, a, {
      loading: i,
      shouldLoad: e,
      "data-main-image": "",
      style: s({}, l, {
        opacity: 0
      }),
      onLoad: function (e) {
        var t = e.currentTarget,
            a = new Image();
        a.src = t.currentSrc, a.decode ? a.decode().catch(function () {}).then(function () {
          r(!0);
        }) : r(!0);
      },
      ref: void 0
    });
  }("eager" === u, 0, I, u, void 0, 0, 0, h)))));
},
    Z = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions"],
    J = function (t) {
  return function (a) {
    var i = a.src,
        r = a.__imageData,
        n = a.__error,
        o = l(a, Z);
    return n && console.warn(n), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, s({
      image: r
    }, o)) : (console.warn("Image not loaded", i), n || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
  };
}(Y),
    K = function (e, t) {
  return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
},
    Q = new Set(["fixed", "fullWidth", "constrained"]),
    $ = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  alt: function (e, t, a) {
    return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_3___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
  },
  width: K,
  height: K,
  sizes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  layout: function (e) {
    if (void 0 !== e.layout && !Q.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
  }
};

J.displayName = "StaticImage", J.propTypes = $;


/***/ }),

/***/ "./src/components/about/index.jsx":
/*!****************************************!*\
  !*** ./src/components/about/index.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./src/components/about/style.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/components/common/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/icons/chevrons-down.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/variables */ "./src/data/variables.js");





const greetings = ["Hi", "Hey", "Howdy", "Hello", "Hiya"];
const greeting = greetings[Math.floor(Math.random() * greetings.length)];
const emojis = ["✨", "💫", "🌈", "☀️", "🌱"];
const emoji = emojis[Math.floor(Math.random() * emojis.length)];

const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "table-cell",
      verticalAlign: "middle"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Title, null, greeting, ", I\u2019m Lacey! ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    role: "img"
  }, emoji)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_style__WEBPACK_IMPORTED_MODULE_1__.Text, null, "My pronouns are ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", null, "she/they"), ". I am currently working as a Software Engineer at", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://arete.com"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "text-primary lined-link"
  }, "Aret\xE9")), ". I graduated from the University of California, San Diego in December 2020 with a B.S. in Computer Science.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "I have experience in web, mobile, and game development, and I enjoy creating projects both on my own and with others at", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://devpost.com/lumamoto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", {
    className: "text-primary lined-link"
  }, "hackathons")), ". In my free time, I love working on fun side projects, learning new technologies, playing video games, cooking dubious vegan food, and listening to funky music.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.ButtonDefault, {
    href: "Lacey-Umamoto-Resume.pdf"
  }, "Resume")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      color: _data_variables__WEBPACK_IMPORTED_MODULE_3__["default"].primary,
      margin: `5rem 0 0 0`,
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_feather__WEBPACK_IMPORTED_MODULE_4__["default"] // onClick = {() =>scrollEffect(projectsRef)}
  , {
    className: "align-middle"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

/***/ }),

/***/ "./src/components/about/style.js":
/*!***************************************!*\
  !*** ./src/components/about/style.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutSection": () => (/* binding */ AboutSection),
/* harmony export */   "Avatar": () => (/* binding */ Avatar),
/* harmony export */   "SubTitle": () => (/* binding */ SubTitle),
/* harmony export */   "Text": () => (/* binding */ Text),
/* harmony export */   "Title": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _data_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/variables */ "./src/data/variables.js");



const AboutSection = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "style__AboutSection"
})(["position:relative;text-align:center;@media only screen and (min-width:", "){display:grid;grid-template-columns:1fr 1.25fr;grid-gap:10rem;text-align:left;}"], _data_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpointLarge);
const Avatar = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(gatsby_image__WEBPACK_IMPORTED_MODULE_0__["default"]).withConfig({
  displayName: "style__Avatar"
})(["border-radius:5px;box-shadow:0px 0px 64px rgba(0,0,0,0.15);width:100%;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "style__Title"
})(["margin:3rem 0 0 0;font-size:3rem;font-family:\"GT-Walsheim-Pro-Bold\";@media(max-width:", "){font-size:2rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpointPhone);
const Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "style__Text"
})(["font-size:1.2rem;line-height:2;color:#232323;a{color:#3F51B5;text-decoration:underline;}"]);
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "style__SubTitle"
})(["font-family:\"GT-Walsheim-Pro-Medium\";word-spacing:8px;@media(min-width:", "){font-size:1.8em;}"], _data_variables__WEBPACK_IMPORTED_MODULE_1__["default"].breakpointPhone);

/***/ }),

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



const GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;}html{box-sizing:border-box;-ms-overflow-style:scrollbar;line-height:1.15;-webkit-text-size-adjust:100%;body{font-size:14px;font-family:'GT-Walsheim-Pro-Regular';margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}a{background-color:transparent;text-decoration:none;}b,strong{font-weight:bolder;font-family:'GT-Walsheim-Pro-Bold';}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}.center{text-align:center;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"]{-webkit-appearance:button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type=\"button\"]:-moz-focusring,[type=\"reset\"]:-moz-focusring,[type=\"submit\"]:-moz-focusring{outline:1px dotted ButtonText;}[hidden]{display:none;}.text-dark{color:", ";}.text-primary{color:", ";}.align-middle{vertical-align:middle;}p{font-size:1.125rem;font-weight:200;line-height:1.8;}}.lined-link{display:inline-block;position:relative;transition:all .2s ease-out;will-change:transform,color;&:after{z-index:1;position:absolute;bottom:-0.5px;left:0;content:\"\";display:block;width:100%;height:4px;background-color:", ";transform:scale(0,1);transform-origin:100% 50%;will-change:transform;transition:transform 0.8s cubic-bezier(0.19,1,0.22,1),-webkit-transform 0.8s cubic-bezier(0.19,1,0.22,1);}&:hover:after,&.active:after{background-color:", ";transform:scale(1);transform-origin:0 50%;transition:transform 1s cubic-bezier(0.19,1,0.22,1),background-color 0.2s ease-out,-webkit-transform 1s cubic-bezier(0.19,1,0.22,1);}}.error__emoji{width:30vw;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].black, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary, _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].primary); // padding-top: .5em;
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
})(["margin:3rem 0 3rem 0;text-align:center;font-size:3rem;font-family:\"GT-Walsheim-Pro-Bold\";@media(max-width:", "){font-size:2rem;}"], _data_variables__WEBPACK_IMPORTED_MODULE_0__["default"].breakpointPhone);

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
  }, "\xA9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " ", "\u30EC\u30A4\u30B7\u30FC \u99AC\u672C ", new Date().getFullYear(), ".")))));
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./src/components/layout/footer/index.jsx");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./src/components/common/index.js");

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.GlobalStyle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.MainContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.ContainerLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_2__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", null, children))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
};

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/projects/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/projects/index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./src/components/common/index.js");




const Projects = ({
  data
}) => {
  const projects = data.allMarkdownRemark.edges;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.ContainerLayout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.BigTitle, {
    className: "text-dark"
  }, "Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.ProjectGrid, null, projects.map(({
    node
  }) => {
    const title = node.frontmatter.title; // const title = node.frontmatter.title || node.fields.slug

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.ProjectPost, {
      key: node.frontmatter.github
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "media"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "image-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: node.frontmatter.github
    }, node.frontmatter.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__.GatsbyImage, {
      image: node.frontmatter.image.childImageSharp.gatsbyImageData
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Category, null, node.frontmatter.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Title, {
      className: "text-primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      // className="text-primary"
      className: "text-primary lined-link",
      style: {
        boxShadow: `none`
      },
      href: node.frontmatter.github
    }, title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Text, {
      dangerouslySetInnerHTML: {
        __html: node.frontmatter.description || node.excerpt
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, node.frontmatter.tags.map((tag, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common__WEBPACK_IMPORTED_MODULE_1__.Tag, {
      key: index
    }, tag)))));
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout/index.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/about */ "./src/components/about/index.jsx");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects */ "./src/components/projects/index.jsx");





const Index = ({
  data
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      height: "100vh",
      display: "table"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_about__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
const pageQuery = "3396397131";

/***/ }),

/***/ "./src/components/common/global/fonts.css":
/*!************************************************!*\
  !*** ./src/components/common/global/fonts.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-feather/dist/icons/chevrons-down.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-feather/dist/icons/chevrons-down.js ***!
  \****************************************************************/
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



var ChevronsDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_ref, ref) {
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
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "7 13 12 18 17 13"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("polyline", {
    points: "7 6 12 11 17 6"
  }));
});
ChevronsDown.propTypes = {
  color: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)])
};
ChevronsDown.displayName = 'ChevronsDown';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronsDown);

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
//# sourceMappingURL=component---src-pages-index-js.js.map