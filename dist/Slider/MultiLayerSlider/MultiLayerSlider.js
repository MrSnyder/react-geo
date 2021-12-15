"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/slider/style");

var _slider = _interopRequireDefault(require("antd/es/slider"));

var React = _interopRequireWildcard(require("react"));

var _constants = require("../../constants");

var _excluded = ["layers", "defaultValue", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Slider that changes opacity on a set of layers.
 *
 * @class The MultiLayerSlider
 * @extends React.Component
 */
var MultiLayerSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(MultiLayerSlider, _React$Component);

  var _super = _createSuper(MultiLayerSlider);

  /**
   * The className added to this component.
   * @private
   */

  /**
   * The constructor.
   *
   * @constructs MultiLayerSlider
   * @param props The properties.
   */
  function MultiLayerSlider(props) {
    var _this;

    _classCallCheck(this, MultiLayerSlider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "multilayerslider"));

    var layers = props.layers;
    layers.forEach(function (l) {
      return l.setOpacity(0);
    });
    layers[0].setOpacity(1);
    return _this;
  }
  /**
   * Formats the tip for the slider.
   * @param value The slider value
   * @return The formatted tip value
   */


  _createClass(MultiLayerSlider, [{
    key: "formatTip",
    value: function formatTip(value) {
      var _this$props = this.props,
          layers = _this$props.layers,
          nameProperty = _this$props.nameProperty;
      var layerIdx = this.getLayerIndexForSliderValue(value);
      var tip;

      if (layers[layerIdx]) {
        var opacity = Math.round(layers[layerIdx].get('opacity') * 100);
        var layer = layers[layerIdx];
        var layername = layer.get(nameProperty) || "Layer ".concat(layerIdx + 1);
        tip = "".concat(layername, " ").concat(opacity, "%");
      }

      return tip;
    }
    /**
     * Called when the value of the slider changed.
     */

  }, {
    key: "valueUpdated",
    value: function valueUpdated(value) {
      var layerIdx = this.getLayerIndexForSliderValue(value);
      var opacity = this.getOpacityForValue(value);
      var layers = this.props.layers; // set all opacities to 0 first

      layers.forEach(function (l) {
        return l.setOpacity(0);
      });

      if (layers[layerIdx]) {
        layers[layerIdx].setOpacity(1 - opacity);
      }

      if (layers[layerIdx - 1] && opacity > 0.5) {
        layers[layerIdx - 1].setOpacity(opacity - 0.5);
      }

      if (layers[layerIdx + 1]) {
        layers[layerIdx + 1].setOpacity(opacity);
      }
    }
    /**
     * Gets the opacity for a given slider value
     * @param value The current slider value
     * @return The opacity
     */

  }, {
    key: "getOpacityForValue",
    value: function getOpacityForValue(value) {
      var layers = this.props.layers;
      var length = layers.length - 1;
      var ticksPerLayer = Math.round(100 / length);
      var idx = Math.floor(value / ticksPerLayer);
      var opacity = value / ticksPerLayer - (idx > length ? length : idx);
      return opacity > 1 ? 1 : opacity;
    }
    /**
     * Gets the matching index of the layer array for a given slider value
     * @param value the current slider value
     * @return The layer array index
     */

  }, {
    key: "getLayerIndexForSliderValue",
    value: function getLayerIndexForSliderValue(value) {
      var layers = this.props.layers;
      var length = layers.length - 1;
      var ticksPerLayer = Math.round(100 / length);
      var idx = Math.floor(value / ticksPerLayer);
      return idx > length ? length : idx;
    }
    /**
     * Creates the marks used with the slider based on the layers names.
     * @return The marks object
     */

  }, {
    key: "getMarks",
    value: function getMarks() {
      var marks = {};
      var _this$props2 = this.props,
          layers = _this$props2.layers,
          nameProperty = _this$props2.nameProperty;
      var length = layers.length - 1;
      layers.forEach(function (layer, index) {
        var layername = layer.get(nameProperty) || "Layer ".concat(index + 1);
        var idx = Math.round(100 / length * index);
        marks[idx] = layername;
      });
      return marks;
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          layers = _this$props3.layers,
          defaultValue = _this$props3.defaultValue,
          className = _this$props3.className,
          passThroughProps = _objectWithoutProperties(_this$props3, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_slider["default"], _extends({
        className: finalClassName,
        marks: this.getMarks(),
        defaultValue: defaultValue,
        min: 0,
        max: 100,
        tipFormatter: this.formatTip.bind(this),
        onChange: this.valueUpdated.bind(this)
      }, passThroughProps));
    }
  }]);

  return MultiLayerSlider;
}(React.Component);

_defineProperty(MultiLayerSlider, "defaultProps", {
  defaultValue: 0,
  nameProperty: 'name'
});

var _default = MultiLayerSlider;
exports["default"] = _default;