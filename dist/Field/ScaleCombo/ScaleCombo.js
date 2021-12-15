"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

var React = _interopRequireWildcard(require("react"));

var _isInteger2 = _interopRequireDefault(require("lodash/isInteger"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _reverse2 = _interopRequireDefault(require("lodash/reverse"));

var _clone2 = _interopRequireDefault(require("lodash/clone"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

var _constants = require("../../constants");

require("./ScaleCombo.less");

var _excluded = ["map", "className", "onZoomLevelSelect", "resolutions", "resolutionsFilter", "scales", "syncWithMap", "zoomLevel"];

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

var Option = _select["default"].Option;

/**
 * Class representing a scale combo to choose map scale via a dropdown menu.
 *
 * @class The ScaleCombo
 * @extends React.Component
 */
var ScaleCombo = /*#__PURE__*/function (_React$Component) {
  _inherits(ScaleCombo, _React$Component);

  var _super = _createSuper(ScaleCombo);

  /**
   * The default props
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create a scale combo.
   * @constructs ScaleCombo
   */
  function ScaleCombo(props) {
    var _this;

    _classCallCheck(this, ScaleCombo);

    _this = _super.call(this, props);
    /**
     * The default onZoomLevelSelect function sets the resolution of the passed
     * map according to the selected Scale.
     *
     * @param selectedScale The selectedScale.
     */

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "scalecombo"));

    _defineProperty(_assertThisInitialized(_this), "zoomListener", function (evt) {
      var zoom = evt.target.getView().getZoom();
      var roundZoom = Math.round(zoom);

      if (!roundZoom) {
        roundZoom = 0;
      }

      _this.setState({
        zoomLevel: roundZoom
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pushScale", function (scales, resolution, view) {
      var scale = _MapUtil["default"].getScaleForResolution(resolution, view.getProjection().getUnits());

      var roundScale = _MapUtil["default"].roundScale(scale);

      if (scales.includes(roundScale)) {
        return;
      }

      scales.push(roundScale);
    });

    _defineProperty(_assertThisInitialized(_this), "determineOptionKeyForZoomLevel", function (zoom) {
      if (!(0, _isInteger2["default"])(zoom) || _this.state.scales.length - 1 - zoom < 0) {
        return undefined;
      }

      return _this.state.scales[_this.state.scales.length - 1 - zoom].toString();
    });

    var defaultOnZoomLevelSelect = function defaultOnZoomLevelSelect(selectedScale) {
      var mapView = props.map.getView();

      var calculatedResolution = _MapUtil["default"].getResolutionForScale(selectedScale, mapView.getProjection().getUnits());

      mapView.setResolution(calculatedResolution);
    };

    _this.state = {
      zoomLevel: props.zoomLevel || props.map.getView().getZoom(),
      onZoomLevelSelect: props.onZoomLevelSelect || defaultOnZoomLevelSelect,
      scales: props.scales.length > 0 ? props.scales : _this.getOptionsFromMap()
    };

    if (props.syncWithMap) {
      props.map.on('moveend', _this.zoomListener);
    }

    return _this;
  }
  /**
   * Invoked after the component is instantiated as well as when it
   * receives new props. It should return an object to update state, or null
   * to indicate that the new props do not require any state updates.
   *
   * @param nextProps The next properties.
   * @param prevState The previous state.
   */


  _createClass(ScaleCombo, [{
    key: "componentDidUpdate",
    value:
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     */
    function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          map = _this$props.map,
          syncWithMap = _this$props.syncWithMap;

      if (!(0, _isEqual2["default"])(syncWithMap, prevProps.syncWithMap)) {
        if (syncWithMap) {
          map.on('moveend', this.zoomListener);
        } else {
          map.un('moveend', this.zoomListener);
        }
      }
    }
    /**
     * Set the zoomLevel of the to the ScaleCombo.
     *
     * @param evt The 'moveend' event
     * @private
     */

  }, {
    key: "getOptionsFromMap",
    value:
    /**
     * Generates the scales to add as {@link Option} to the SelectField based on
     * the given instance of {@link Ol.Map}.
     *
     * @return The array of scales.
     */
    function getOptionsFromMap() {
      var _this2 = this;

      var _this$props2 = this.props,
          map = _this$props2.map,
          resolutionsFilter = _this$props2.resolutionsFilter;

      if (!map) {
        _Logger["default"].warn('Map component not found. Could not initialize options array.');

        return [];
      }

      var scales = [];
      var view = map.getView(); // use existing resolutions array if exists

      var resolutions = view.getResolutions();

      if ((0, _isEmpty2["default"])(resolutions)) {
        for (var currentZoomLevel = view.getMaxZoom(); currentZoomLevel >= view.getMinZoom(); currentZoomLevel--) {
          var resolution = view.getResolutionForZoom(currentZoomLevel);

          if (resolutionsFilter(resolution)) {
            this.pushScale(scales, resolution, view);
          }
        }
      } else {
        var reversedResolutions = (0, _reverse2["default"])((0, _clone2["default"])(resolutions));
        reversedResolutions.filter(resolutionsFilter).forEach(function (resolution) {
          _this2.pushScale(scales, resolution, view);
        });
      }

      return scales;
    }
    /**
     * Determine option element for provided zoom level out of array of valid options.
     *
     * @param zoom zoom level
     *
     * @return Option element for provided zoom level
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props3 = this.props,
          map = _this$props3.map,
          className = _this$props3.className,
          onZoomLevelSelectProp = _this$props3.onZoomLevelSelect,
          resolutions = _this$props3.resolutions,
          resolutionsFilter = _this$props3.resolutionsFilter,
          scalesProp = _this$props3.scales,
          syncWithMap = _this$props3.syncWithMap,
          zoomLevelProp = _this$props3.zoomLevel,
          passThroughProps = _objectWithoutProperties(_this$props3, _excluded);

      var _this$state = this.state,
          onZoomLevelSelect = _this$state.onZoomLevelSelect,
          scales = _this$state.scales,
          zoomLevel = _this$state.zoomLevel;
      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      var options = scales.map(function (roundScale) {
        return /*#__PURE__*/React.createElement(Option, {
          key: roundScale,
          value: roundScale.toString()
        }, "1:".concat(roundScale.toLocaleString()));
      });
      return /*#__PURE__*/React.createElement(_select["default"], _extends({
        showSearch: true,
        onChange: onZoomLevelSelect,
        filterOption: function filterOption(input, option) {
          return option.key.toString().startsWith(input);
        },
        value: this.determineOptionKeyForZoomLevel(zoomLevel),
        size: "small",
        className: finalClassName
      }, passThroughProps), options);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if ((0, _isInteger2["default"])(nextProps.zoomLevel) && !(0, _isEqual2["default"])(nextProps.zoomLevel, prevState.zoomLevel)) {
        return {
          zoomLevel: nextProps.zoomLevel
        };
      }

      if ((0, _isFunction2["default"])(nextProps.onZoomLevelSelect) && !(0, _isEqual2["default"])(nextProps.onZoomLevelSelect, prevState.onZoomLevelSelect)) {
        return {
          onZoomLevelSelect: nextProps.onZoomLevelSelect
        };
      }

      return null;
    }
  }]);

  return ScaleCombo;
}(React.Component);

_defineProperty(ScaleCombo, "defaultProps", {
  resolutionsFilter: function resolutionsFilter() {
    return true;
  },
  scales: [],
  syncWithMap: true
});

var _default = ScaleCombo;
exports["default"] = _default;