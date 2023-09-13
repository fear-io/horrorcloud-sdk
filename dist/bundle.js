var HorrorCloudSDK = (function () {
  'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var SUPPORTED_PRODUCTS = [{
    id: 'world-of-whack-it',
    homepage: 'https://www.whackit.co'
  }];
  var HORRORCLOUD_CONTAINER_ID = "horrorcloud-container";
  var HORRORCLOUD_CONTAINER_STYLE = {
    width: "100%",
    height: '900px',
    border: 'none'
  };

  var isObject = function isObject(input) {
    return !!input && _typeof(input) == 'object';
  };

  var HorrorCloudSDK = /*#__PURE__*/_createClass(function HorrorCloudSDK(partnerCode) {
    _classCallCheck(this, HorrorCloudSDK);
    this.play = function (productId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      options = isObject(options) ? options : {};
      var _options = options,
        containerId = _options.containerId,
        style = _options.style;
      style = isObject(style) ? style : HORRORCLOUD_CONTAINER_STYLE;
      var product = SUPPORTED_PRODUCTS.find(function (p) {
        return p.id == productId;
      });
      if (!product) throw new Error("Unsupported product ".concat(productId));
      var iframeUrl = product.homepage + "/widget?partner=" + this.partnerCode;
      containerId = typeof containerId == 'string' && containerId && document.getElementById(containerId) ? containerId : HORRORCLOUD_CONTAINER_ID;
      var htmlNode = document.getElementById(containerId);
      if (!htmlNode) {
        htmlNode = document.createElement('div');
        htmlNode.id = containerId;
        document.body.appendChild(htmlNode);
      }
      var styles = [];
      Object.keys(style).forEach(function (k) {
        return styles.push("".concat(k, ": ").concat(style[k]));
      });
      htmlNode.innerHTML = "<iframe allowFullScreen src=\"".concat(iframeUrl, "\" style=\"").concat(styles.join("; "), "\"></iframe>");
    };
    if (!partnerCode) throw new Error("'partnerCode' param is required");
    this.partnerCode = partnerCode;
  });

  return HorrorCloudSDK;

})();
