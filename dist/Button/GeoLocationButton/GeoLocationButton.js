"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Geolocation = _interopRequireDefault(require("ol/Geolocation"));

var _LineString = _interopRequireDefault(require("ol/geom/LineString"));

var _Feature = _interopRequireDefault(require("ol/Feature"));

var _Point = _interopRequireDefault(require("ol/geom/Point"));

var _Vector = _interopRequireDefault(require("ol/layer/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/source/Vector"));

var _Style = _interopRequireDefault(require("ol/style/Style"));

var _Icon = _interopRequireDefault(require("ol/style/Icon"));

var _GeometryLayout = _interopRequireDefault(require("ol/geom/GeometryLayout"));

var _ToggleButton = _interopRequireDefault(require("../ToggleButton/ToggleButton"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

var _MathUtil = _interopRequireDefault(require("@terrestris/base-util/dist/MathUtil/MathUtil"));

var _constants = require("../../constants");

var _geolocationMarker = _interopRequireDefault(require("./geolocation-marker.png"));

var _geolocationMarkerHeading = _interopRequireDefault(require("./geolocation-marker-heading.png"));

var _excluded = ["className", "map", "showMarker", "follow", "onGeolocationChange", "onError", "trackingOptions"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
 * The GeoLocationButton.
 *
 * @class The GeoLocationButton
 * @extends React.Component
 */
var GeoLocationButton = /*#__PURE__*/function (_React$Component) {
  _inherits(GeoLocationButton, _React$Component);

  var _super = _createSuper(GeoLocationButton);

  /**
   * The default properties.
   */

  /**
   * The className added to this component.
   *
   * @private
   */

  /**
   * The feature marking the current location.
   */

  /**
   * The OpenLayers geolocation interaction.
   */

  /**
   * The layer containing the markerFeature.
   */

  /**
   * Creates the MeasureButton.
   *
   * @constructs MeasureButton
   */
  function GeoLocationButton(props) {
    var _this;

    _classCallCheck(this, GeoLocationButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "geolocationbutton"));

    _defineProperty(_assertThisInitialized(_this), "_markerFeature", undefined);

    _defineProperty(_assertThisInitialized(_this), "_geoLocationInteraction", undefined);

    _defineProperty(_assertThisInitialized(_this), "_geoLocationLayer", new _Vector["default"]({
      properties: {
        name: 'react-geo_geolocationlayer'
      },
      source: new _Vector2["default"]()
    }));

    _defineProperty(_assertThisInitialized(_this), "_positions", void 0);

    _defineProperty(_assertThisInitialized(_this), "_styleFunction", function (feature) {
      var heading = feature.get('heading');
      var src = heading !== 0 ? _geolocationMarkerHeading["default"] : _geolocationMarker["default"];
      var rotation = heading !== 0 ? heading * Math.PI / 180 : 0;
      return [new _Style["default"]({
        image: new _Icon["default"]({
          rotation: rotation,
          src: src
        })
      })];
    });

    _defineProperty(_assertThisInitialized(_this), "onGeolocationChange", function () {
      var position = _this._geoLocationInteraction.getPosition();

      var accuracy = _this._geoLocationInteraction.getAccuracy();

      var heading = _this._geoLocationInteraction.getHeading() || 0;
      var speed = _this._geoLocationInteraction.getSpeed() || 0;
      var x = position[0];
      var y = position[1];

      var fCoords = _this._positions.getCoordinates();

      var previous = fCoords[fCoords.length - 1];
      var prevHeading = previous && previous[2];

      if (prevHeading) {
        var headingDiff = heading - _MathUtil["default"].mod(prevHeading); // force the rotation change to be less than 180°


        if (Math.abs(headingDiff) > Math.PI) {
          var sign = headingDiff >= 0 ? 1 : -1;
          headingDiff = -sign * (2 * Math.PI - Math.abs(headingDiff));
        }

        heading = prevHeading + headingDiff;
      }

      _this._positions.appendCoordinate([x, y, heading, Date.now()]); // only keep the 20 last coordinates


      _this._positions.setCoordinates(_this._positions.getCoordinates().slice(-20));

      _this.updateView();

      _this.props.onGeolocationChange({
        position: position,
        accuracy: accuracy,
        heading: heading,
        speed: speed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onGeolocationError", function (error) {
      _this.props.onError(error);
    });

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (pressed) {
      var _this$props = _this.props,
          showMarker = _this$props.showMarker,
          trackingOptions = _this$props.trackingOptions,
          map = _this$props.map;
      var view = map.getView();

      if (!pressed) {
        if (_this._geoLocationInteraction) {
          _this._geoLocationInteraction.un('change', _this.onGeolocationChange);

          _this._geoLocationInteraction = null;
        }

        if (_this._markerFeature) {
          _this._markerFeature = undefined;

          _this._geoLocationLayer.getSource().clear();
        }

        return;
      } // Geolocation Control


      _this._geoLocationInteraction = new _Geolocation["default"]({
        projection: view.getProjection(),
        trackingOptions: trackingOptions
      });

      _this._geoLocationInteraction.setTracking(true);

      if (showMarker) {
        if (!_this._markerFeature) {
          _this._markerFeature = new _Feature["default"]();
        }

        if (!_this._geoLocationLayer.getSource().getFeatures().includes(_this._markerFeature)) {
          _this._geoLocationLayer.getSource().addFeature(_this._markerFeature);
        }

        var heading = _this._geoLocationInteraction.getHeading() || 0;
        var speed = _this._geoLocationInteraction.getSpeed() || 0;

        _this._markerFeature.set('speed', speed);

        _this._markerFeature.set('heading', heading);
      } // add listeners


      _this._geoLocationInteraction.on('change', _this.onGeolocationChange);

      _this._geoLocationInteraction.on('error', _this.onGeolocationError);
    });

    _defineProperty(_assertThisInitialized(_this), "getCenterWithHeading", function (position, rotation, resolution) {
      var size = _this.props.map.getSize();

      var height = size[1];
      return [position[0] - Math.sin(rotation) * height * resolution * 1 / 4, position[1] + Math.cos(rotation) * height * resolution * 1 / 4];
    });

    _defineProperty(_assertThisInitialized(_this), "updateView", function () {
      var view = _this.props.map.getView();

      var deltaMean = 500; // the geolocation sampling period mean in ms

      var previousM = 0; // use sampling period to get a smooth transition

      var m = Date.now() - deltaMean * 1.5;
      m = Math.max(m, previousM);
      previousM = m; // interpolate position along positions LineString

      var c = _this._positions.getCoordinateAtM(m, true);

      if (c) {
        if (_this.props.follow) {
          view.setCenter(_this.getCenterWithHeading(c, -c[2], view.getResolution()));
          view.setRotation(-c[2]);
        }

        if (_this.props.showMarker) {
          var pointGeometry = new _Point["default"]([c[0], c[1]]);

          _this._markerFeature.setGeometry(pointGeometry);
        }
      }
    });

    var _this$props2 = _this.props,
        _map = _this$props2.map,
        _showMarker = _this$props2.showMarker;

    var allLayers = _MapUtil["default"].getAllLayers(_map);

    _this._positions = new _LineString["default"]([], _GeometryLayout["default"].XYZM);

    _this._geoLocationLayer.setStyle(_this._styleFunction);

    if (!allLayers.includes(_this._geoLocationLayer)) {
      _map.addLayer(_this._geoLocationLayer);
    }

    _this.state = {};

    if (_showMarker) {
      _this._markerFeature = new _Feature["default"]();

      _this._geoLocationLayer.getSource().addFeature(_this._markerFeature);
    }

    return _this;
  }
  /**
   * Adds the markerFeature if not already done and adds it to the geoLocation
   * layer.
   */


  _createClass(GeoLocationButton, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var showMarker = this.props.showMarker;

      if (showMarker && !this._markerFeature) {
        this._markerFeature = new _Feature["default"]();

        this._geoLocationLayer.getSource().addFeature(this._markerFeature);
      }
    }
    /**
     * The styleFunction for the geoLocationLayer. Shows a marker with arrow when
     * heading is not 0.
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props3 = this.props,
          className = _this$props3.className,
          map = _this$props3.map,
          showMarker = _this$props3.showMarker,
          follow = _this$props3.follow,
          onGeolocationChange = _this$props3.onGeolocationChange,
          onError = _this$props3.onError,
          trackingOptions = _this$props3.trackingOptions,
          passThroughProps = _objectWithoutProperties(_this$props3, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      return /*#__PURE__*/React.createElement(_ToggleButton["default"], _extends({
        onToggle: this.onToggle,
        className: finalClassName
      }, passThroughProps));
    }
  }]);

  return GeoLocationButton;
}(React.Component);

_defineProperty(GeoLocationButton, "defaultProps", {
  onGeolocationChange: function onGeolocationChange() {
    return undefined;
  },
  onError: function onError() {
    return undefined;
  },
  showMarker: true,
  follow: false,
  trackingOptions: {
    maximumAge: 10000,
    enableHighAccuracy: true,
    timeout: 600000
  }
});

var _default = GeoLocationButton;
exports["default"] = _default;