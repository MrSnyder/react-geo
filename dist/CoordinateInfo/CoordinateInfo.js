"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CoordinateInfo = void 0;

var React = _interopRequireWildcard(require("react"));

var _GML = _interopRequireDefault(require("ol/format/GML2"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

require("./CoordinateInfo.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var format = new _GML["default"]();

/**
 * Constructs a wrapper component for querying features from the clicked
 * coordinate. The returned features can be passed to a child component
 * to be visualized.
 *
 * @class The CoordinateInfo
 * @extends React.Component
 */
var CoordinateInfo = /*#__PURE__*/function (_React$Component) {
  _inherits(CoordinateInfo, _React$Component);

  var _super = _createSuper(CoordinateInfo);

  /**
   * The defaultProps.
   */

  /**
   * Creates the CoordinateInfo component.
   * @constructs CoordinateInfo
   */
  function CoordinateInfo(props) {
    var _this;

    _classCallCheck(this, CoordinateInfo);

    _this = _super.call(this, props);
    _this.state = {
      clickCoordinate: null,
      features: [],
      loading: false
    };
    _this.onMapClick = _this.onMapClick.bind(_assertThisInitialized(_this));
    _this.layerFilter = _this.layerFilter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(CoordinateInfo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var map = this.props.map;
      map.on('click', this.onMapClick);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this.props.map;
      map.un('click', this.onMapClick);
    }
  }, {
    key: "onMapClick",
    value: function onMapClick(olEvt) {
      var _this2 = this;

      var _this$props = this.props,
          map = _this$props.map,
          featureCount = _this$props.featureCount,
          drillDown = _this$props.drillDown,
          hitTolerance = _this$props.hitTolerance;
      var mapView = map.getView();
      var viewResolution = mapView.getResolution();
      var viewProjection = mapView.getProjection();
      var pixel = map.getEventPixel(olEvt.originalEvent);
      var coordinate = olEvt.coordinate;
      var promises = [];
      map.forEachLayerAtPixel(pixel, function (layer) {
        var layerSource = layer.getSource();
        var featureInfoUrl = layerSource.getFeatureInfoUrl(coordinate, viewResolution, viewProjection, {
          'INFO_FORMAT': 'application/vnd.ogc.gml',
          'FEATURE_COUNT': featureCount
        });
        promises.push(fetch(featureInfoUrl));

        if (!drillDown) {
          return true;
        }

        return false;
      }, {
        layerFilter: this.layerFilter,
        hitTolerance: hitTolerance
      });
      map.getTargetElement().style.cursor = 'wait';
      this.setState({
        loading: true
      });
      Promise.all(promises).then(function (responses) {
        _this2.setState({
          clickCoordinate: coordinate
        });

        var textResponses = responses.map(function (response) {
          return response.text();
        });
        return Promise.all(textResponses);
      }).then(function (textResponses) {
        var features = {};
        textResponses.forEach(function (featureCollection) {
          var fc = format.readFeatures(featureCollection);
          fc.forEach(function (feature) {
            var id = feature.getId();
            var featureTypeName = (0, _isString2["default"])(id) ? id.split('.')[0] : id;

            if (!features[featureTypeName]) {
              features[featureTypeName] = [];
            }

            features[featureTypeName].push(feature);
          });
        });

        _this2.setState({
          features: features
        });
      })["catch"](function (error) {
        _Logger["default"].error(error);
      })["finally"](function () {
        map.getTargetElement().style.cursor = '';

        _this2.setState({
          loading: false
        });
      });
    }
  }, {
    key: "layerFilter",
    value: function layerFilter(layerCandidate) {
      var queryLayers = this.props.queryLayers;
      return queryLayers.includes(layerCandidate);
    }
  }, {
    key: "render",
    value: function render() {
      var resultRenderer = this.props.resultRenderer;
      return /*#__PURE__*/React.createElement(React.Fragment, null, resultRenderer((0, _cloneDeep2["default"])(this.state)));
    }
  }]);

  return CoordinateInfo;
}(React.Component);

exports.CoordinateInfo = CoordinateInfo;

_defineProperty(CoordinateInfo, "defaultProps", {
  queryLayers: [],
  featureCount: 1,
  drillDown: true,
  hitTolerance: 5,
  resultRenderer: function resultRenderer() {
    return /*#__PURE__*/React.createElement("div", null);
  }
});

var _default = CoordinateInfo;
exports["default"] = _default;