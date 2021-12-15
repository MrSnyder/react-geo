"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayerSwitcher = void 0;

var React = _interopRequireWildcard(require("react"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _Map = _interopRequireDefault(require("ol/Map"));

var _Group = _interopRequireDefault(require("ol/layer/Group"));

var _Tile = _interopRequireDefault(require("ol/layer/Tile"));

var _constants = require("../constants");

var _MapComponent = _interopRequireDefault(require("../Map/MapComponent/MapComponent"));

require("./LayerSwitcher.less");

var _excluded = ["className"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
 * Class representing the LayerSwitcher.
 * A basic component to switch between the passed layers.
 * This is most likely to be used for the backgroundlayer.
 *
 * @class LayerSwitcher
 * @extends React.Component
 */
var LayerSwitcher = /*#__PURE__*/function (_React$Component) {
  _inherits(LayerSwitcher, _React$Component);

  var _super = _createSuper(LayerSwitcher);

  /**
   * The internal map of the LayerSwitcher
   * @private
   */

  /**
   *
   *
   * @private
   */

  /**
   *
   *
   * @private
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Creates the LayerSwitcher.
   *
   * @constructs LayerSwitcher
   */
  function LayerSwitcher(props) {
    var _this;

    _classCallCheck(this, LayerSwitcher);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_map", null);

    _defineProperty(_assertThisInitialized(_this), "_visibleLayerIndex", null);

    _defineProperty(_assertThisInitialized(_this), "_layerClones", []);

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "layer-switcher"));

    _defineProperty(_assertThisInitialized(_this), "cloneLayer", function (layer) {
      var layerClone;

      if (layer instanceof _Group["default"]) {
        layerClone = new _Group["default"](_objectSpread({
          layers: layer.getLayers().getArray().map(_this.cloneLayer),
          properties: {
            originalLayer: layer
          }
        }, layer.getProperties()));
      } else {
        layerClone = new _Tile["default"](_objectSpread({
          source: layer.getSource(),
          properties: {
            originalLayer: layer
          }
        }, layer.getProperties()));
      }

      return layerClone;
    });

    _defineProperty(_assertThisInitialized(_this), "setMapLayers", function () {
      var layers = _this.props.layers;

      if (layers.length < 2) {
        _Logger["default"].warn('LayerSwitcher requires two or more layers.');
      }

      _this._map.getLayers().clear();

      _this._layerClones = layers.map(function (layer, index) {
        var layerClone = _this.cloneLayer(layer);

        if (layerClone.getVisible()) {
          _this._visibleLayerIndex = index;
        }

        _this._map.addLayer(layerClone);

        return layerClone;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateLayerVisibility", function () {
      var layers = _this.props.layers;
      layers.forEach(function (l, i) {
        if (_this._visibleLayerIndex === i) {
          l.setVisible(true);
        } else {
          l.setVisible(false);
        }
      });

      _this._layerClones.forEach(function (l, i) {
        if (_this._visibleLayerIndex === _this._layerClones.length - 1 && i === 0) {
          l.setVisible(true);

          _this.setState({
            previewLayer: l
          });
        } else if (_this._visibleLayerIndex + 1 === i) {
          l.setVisible(true);

          _this.setState({
            previewLayer: l
          });
        } else {
          l.setVisible(false);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getMap", function () {
      var map = _this.props.map;
      return new _Map["default"]({
        view: map.getView(),
        controls: []
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSwitcherClick", function (evt) {
      evt.stopPropagation();

      _this._map.getLayers().getArray().forEach(function (layer, index) {
        if (layer.getVisible()) {
          _this._visibleLayerIndex = index;
        }
      });

      _this.updateLayerVisibility();
    });

    _this._map = _this.getMap();
    _this.state = {
      previewLayer: null
    };
    return _this;
  }
  /**
   * A react lifecycle method called when the component did mount.
   */


  _createClass(LayerSwitcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setMapLayers();
      this.updateLayerVisibility();
    }
    /**
     * Destroy all map specific stuff when umounting the component.
     *
     * @memberof LayerSwitcher
     */

  }, {
    key: "componentWillUnMount",
    value: function componentWillUnMount() {
      this._map.getLayers().clear();

      this._map.setTarget(null);

      this._map = null;
    }
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!(0, _isEqual2["default"])(this.props.layers, prevProps.layers)) {
        this.setMapLayers();
        this.updateLayerVisibility();
      }
    }
    /**
     * Clones a layer
     *
     * @param layer The layer to clone.
     * @returns The cloned layer.
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props = this.props,
          className = _this$props.className,
          passThroughProps = _objectWithoutProperties(_this$props, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: finalClassName
      }, passThroughProps), /*#__PURE__*/React.createElement("div", {
        className: "clip",
        onClick: this.onSwitcherClick,
        role: "button"
      }, /*#__PURE__*/React.createElement(_MapComponent["default"], {
        mapDivId: "layer-switcher-map",
        map: this._map,
        role: "img"
      }), this.state.previewLayer && /*#__PURE__*/React.createElement("span", {
        className: "layer-title"
      }, this.state.previewLayer.get('name'))));
    }
  }]);

  return LayerSwitcher;
}(React.Component);

exports.LayerSwitcher = LayerSwitcher;
var _default = LayerSwitcher;
exports["default"] = _default;