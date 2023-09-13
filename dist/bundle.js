var HorrorCloudSDK = (function () {
  'use strict';

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
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
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

  var HorrorCloudSDK = /*#__PURE__*/_createClass(function HorrorCloudSDK(partnerCode) {
    _classCallCheck(this, HorrorCloudSDK);
    _defineProperty(this, "partnerCode", null);
    _defineProperty(this, "play", function (productId) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        containerId: containerId,
        style: style
      };
      return function () {
        if (!SUPPORTED_PRODUCTS.map(function (p) {
          return p.id;
        }).includes(productId)) throw new Error("Unsupported product");
        var product = SUPPORTED_PRODUCTS.find(function (p) {
          return p.id == productId;
        });
        var iframeUrl = product.homepage + "/widget?partner=" + _this.partnerCode;
        var containerId = options.containerId,
          style = options.style;
        containerId = typeof containerId == 'string' && containerId && document.getElementById(containerId) ? containerId : HORRORCLOUD_CONTAINER_ID;
        var htmlNode = document.getElementById(containerId);
        if (!htmlNode) {
          htmlNode = document.createElement('div');
          htmlNode.id = containerId;
          document.body.appendChild(htmlNode);
        }
        var styles = [];
        Object.keys(style || {}).forEach(function (k) {
          return styles.push("".concat(k, ": ").concat(style[k]));
        });
        htmlNode.innerHTML = "<iframe allowFullScreen src=\"".concat(iframeUrl, "\" style=\"").concat(styles.join("; "), "\"></iframe>");
      }();
    });
    if (!partnerCode) throw new Error("'partnerCode' param is required");
    this.partnerCode = partnerCode;
  });

  return HorrorCloudSDK;

})();
