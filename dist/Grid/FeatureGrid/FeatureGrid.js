"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FeatureGrid = void 0;

require("antd/es/table/style");

var _table = _interopRequireDefault(require("antd/es/table"));

var React = _interopRequireWildcard(require("react"));

var _Style = _interopRequireDefault(require("ol/style/Style"));

var _Fill = _interopRequireDefault(require("ol/style/Fill"));

var _Circle = _interopRequireDefault(require("ol/style/Circle"));

var _Stroke = _interopRequireDefault(require("ol/style/Stroke"));

var _Map = _interopRequireDefault(require("ol/Map"));

var _Feature = _interopRequireDefault(require("ol/Feature"));

var _Vector = _interopRequireDefault(require("ol/source/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/layer/Vector"));

var _Geometry = _interopRequireDefault(require("ol/geom/Geometry"));

var _GeometryCollection = _interopRequireDefault(require("ol/geom/GeometryCollection"));

var _ol = require("ol");

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _kebabCase2 = _interopRequireDefault(require("lodash/kebabCase"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

require("./FeatureGrid.less");

var _excluded = ["className", "rowClassName", "features", "map", "attributeBlacklist", "onRowClick", "onRowMouseOver", "onRowMouseOut", "zoomToExtent", "selectable", "featureStyle", "highlightStyle", "selectStyle", "layerName", "columnDefs", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * The FeatureGrid.
 *
 * @class The FeatureGrid
 * @extends React.Component
 */
var FeatureGrid = /*#__PURE__*/function (_React$Component) {
  _inherits(FeatureGrid, _React$Component);

  var _super = _createSuper(FeatureGrid);

  /**
   * The default properties.
   */

  /**
   * The class name to add to this component.
   * @private
   */

  /**
   * The class name to add to each table row.
   * @private
   */

  /**
   * The prefix to use for each table row class.
   * @private
   */

  /**
   * The hover class name.
   * @private
   */

  /**
   * The source holding the features of the grid.
   * @private
   */

  /**
   * The layer representing the features of the grid.
   * @private
   */

  /**
   * The constructor.
   */
  function FeatureGrid(_props) {
    var _this;

    _classCallCheck(this, FeatureGrid);

    _this = _super.call(this, _props);

    _defineProperty(_assertThisInitialized(_this), "_className", 'react-geo-feature-grid');

    _defineProperty(_assertThisInitialized(_this), "_rowClassName", 'react-geo-feature-grid-row');

    _defineProperty(_assertThisInitialized(_this), "_rowKeyClassNamePrefix", 'row-key-');

    _defineProperty(_assertThisInitialized(_this), "_rowHoverClassName", 'row-hover');

    _defineProperty(_assertThisInitialized(_this), "_source", null);

    _defineProperty(_assertThisInitialized(_this), "_layer", null);

    _defineProperty(_assertThisInitialized(_this), "initVectorLayer", function (map) {
      var _this$props = _this.props,
          features = _this$props.features,
          featureStyle = _this$props.featureStyle,
          layerName = _this$props.layerName;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      if (_MapUtil["default"].getLayerByName(map, layerName)) {
        return;
      }

      var source = new _Vector["default"]({
        features: features
      });
      var layer = new _Vector2["default"]({
        properties: {
          name: layerName
        },
        source: source,
        style: featureStyle
      });
      map.addLayer(layer);
      _this._source = source;
      _this._layer = layer;
    });

    _defineProperty(_assertThisInitialized(_this), "initMapEventHandlers", function (map) {
      var selectable = _this.props.selectable;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      map.on('pointermove', _this.onMapPointerMove);

      if (selectable) {
        map.on('singleclick', _this.onMapSingleClick);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMapPointerMove", function (olEvt) {
      var _this$props2 = _this.props,
          map = _this$props2.map,
          features = _this$props2.features,
          highlightStyle = _this$props2.highlightStyle,
          selectStyle = _this$props2.selectStyle;
      var selectedRowKeys = _this.state.selectedRowKeys;
      var selectedFeatures = map.getFeaturesAtPixel(olEvt.pixel, {
        layerFilter: function layerFilter(layerCand) {
          return layerCand === _this._layer;
        }
      }) || [];
      features.forEach(function (feature) {
        var key = (0, _kebabCase2["default"])(_this.props.keyFunction(feature));
        var sel = ".".concat(_this._rowClassName, ".").concat(_this._rowKeyClassNamePrefix).concat(key);
        var el = document.querySelectorAll(sel)[0];

        if (el) {
          el.classList.remove(_this._rowHoverClassName);
        }

        if (selectedRowKeys.includes(key)) {
          feature.setStyle(selectStyle);
        } else {
          feature.setStyle(null);
        }
      });
      selectedFeatures.forEach(function (feature) {
        var key = (0, _kebabCase2["default"])(_this.props.keyFunction(feature));
        var sel = ".".concat(_this._rowClassName, ".").concat(_this._rowKeyClassNamePrefix).concat(key);
        var el = document.querySelectorAll(sel)[0];

        if (el) {
          el.classList.add(_this._rowHoverClassName);
        }

        feature.setStyle(highlightStyle);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMapSingleClick", function (olEvt) {
      var _this$props3 = _this.props,
          map = _this$props3.map,
          selectStyle = _this$props3.selectStyle;
      var selectedRowKeys = _this.state.selectedRowKeys;
      var selectedFeatures = map.getFeaturesAtPixel(olEvt.pixel, {
        layerFilter: function layerFilter(layerCand) {
          return layerCand === _this._layer;
        }
      }) || [];

      var rowKeys = _toConsumableArray(selectedRowKeys);

      selectedFeatures.forEach(function (selectedFeature) {
        var key = _this.props.keyFunction(selectedFeature);

        if (rowKeys.includes(key)) {
          rowKeys = rowKeys.filter(function (rowKey) {
            return rowKey !== key;
          });
          selectedFeature.setStyle(null);
        } else {
          rowKeys.push(key);
          selectedFeature.setStyle(selectStyle);
        }
      });

      _this.setState({
        selectedRowKeys: rowKeys
      });
    });

    _defineProperty(_assertThisInitialized(_this), "deinitVectorLayer", function () {
      var map = _this.props.map;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      map.removeLayer(_this._layer);
    });

    _defineProperty(_assertThisInitialized(_this), "deinitMapEventHandlers", function () {
      var _this$props4 = _this.props,
          map = _this$props4.map,
          selectable = _this$props4.selectable;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      map.un('pointermove', _this.onMapPointerMove);

      if (selectable) {
        map.un('singleclick', _this.onMapSingleClick);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getColumnDefs", function () {
      var _this$props5 = _this.props,
          attributeBlacklist = _this$props5.attributeBlacklist,
          features = _this$props5.features,
          columnDefs = _this$props5.columnDefs;
      var columns = [];
      var feature = features[0];

      if (!(feature instanceof _Feature["default"])) {
        return columns;
      }

      var props = feature.getProperties();
      Object.keys(props).forEach(function (key) {
        if (attributeBlacklist.includes(key)) {
          return;
        }

        if (props[key] instanceof _Geometry["default"]) {
          return;
        }

        columns.push(_objectSpread({
          title: key,
          dataIndex: key,
          key: key
        }, columnDefs[key]));
      });
      return columns;
    });

    _defineProperty(_assertThisInitialized(_this), "getTableData", function () {
      var features = _this.props.features;
      var data = [];
      features.forEach(function (feature) {
        var properties = feature.getProperties();
        var filtered = Object.keys(properties).filter(function (key) {
          return !(properties[key] instanceof _Geometry["default"]);
        }).reduce(function (obj, key) {
          obj[key] = properties[key];
          return obj;
        }, {});
        data.push(_objectSpread({
          key: _this.props.keyFunction(feature)
        }, filtered));
      });
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "getFeatureFromRowKey", function (key) {
      var _this$props6 = _this.props,
          features = _this$props6.features,
          keyFunction = _this$props6.keyFunction;
      var feature = features.filter(function (f) {
        return keyFunction(f) === key;
      });
      return feature[0];
    });

    _defineProperty(_assertThisInitialized(_this), "onRowClick", function (row) {
      var onRowClick = _this.props.onRowClick;

      var feature = _this.getFeatureFromRowKey(row.key);

      if ((0, _isFunction2["default"])(onRowClick)) {
        onRowClick(row, feature);
      }

      _this.zoomToFeatures([feature]);
    });

    _defineProperty(_assertThisInitialized(_this), "onRowMouseOver", function (row) {
      var onRowMouseOver = _this.props.onRowMouseOver;

      var feature = _this.getFeatureFromRowKey(row.key);

      if ((0, _isFunction2["default"])(onRowMouseOver)) {
        onRowMouseOver(row, feature);
      }

      _this.highlightFeatures([feature]);
    });

    _defineProperty(_assertThisInitialized(_this), "onRowMouseOut", function (row) {
      var onRowMouseOut = _this.props.onRowMouseOut;

      var feature = _this.getFeatureFromRowKey(row.key);

      if ((0, _isFunction2["default"])(onRowMouseOut)) {
        onRowMouseOut(row, feature);
      }

      _this.unhighlightFeatures([feature]);
    });

    _defineProperty(_assertThisInitialized(_this), "zoomToFeatures", function (features) {
      var map = _this.props.map;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      var featGeometries = [];
      features.forEach(function (feature) {
        featGeometries.push(feature.getGeometry());
      });

      if (featGeometries.length > 0) {
        var geomCollection = new _GeometryCollection["default"](featGeometries);
        map.getView().fit(geomCollection.getExtent());
      }
    });

    _defineProperty(_assertThisInitialized(_this), "highlightFeatures", function (highlightFeatures) {
      var _this$props7 = _this.props,
          map = _this$props7.map,
          highlightStyle = _this$props7.highlightStyle;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      highlightFeatures.forEach(function (feature) {
        return feature.setStyle(highlightStyle);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "unhighlightFeatures", function (unhighlightFeatures) {
      var _this$props8 = _this.props,
          map = _this$props8.map,
          selectStyle = _this$props8.selectStyle;
      var selectedRowKeys = _this.state.selectedRowKeys;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      unhighlightFeatures.forEach(function (feature) {
        var key = _this.props.keyFunction(feature);

        if (selectedRowKeys.includes(key)) {
          feature.setStyle(selectStyle);
        } else {
          feature.setStyle(null);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectFeatures", function (features) {
      var _this$props9 = _this.props,
          map = _this$props9.map,
          selectStyle = _this$props9.selectStyle;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      features.forEach(function (feature) {
        return feature.setStyle(selectStyle);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resetFeatureStyles", function () {
      var _this$props10 = _this.props,
          map = _this$props10.map,
          features = _this$props10.features;

      if (!(map instanceof _Map["default"])) {
        return;
      }

      features.forEach(function (feature) {
        return feature.setStyle(null);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (selectedRowKeys) {
      var onRowSelectionChange = _this.props.onRowSelectionChange;
      var selectedFeatures = selectedRowKeys.map(function (key) {
        return _this.getFeatureFromRowKey(key);
      });

      if ((0, _isFunction2["default"])(onRowSelectionChange)) {
        onRowSelectionChange(selectedRowKeys, selectedFeatures);
      }

      _this.resetFeatureStyles();

      _this.selectFeatures(selectedFeatures);

      _this.setState({
        selectedRowKeys: selectedRowKeys
      });
    });

    _this.state = {
      selectedRowKeys: []
    };
    return _this;
  }
  /**
   * Called on lifecycle phase componentDidMount.
   */


  _createClass(FeatureGrid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props11 = this.props,
          map = _this$props11.map,
          features = _this$props11.features,
          zoomToExtent = _this$props11.zoomToExtent;
      this.initVectorLayer(map);
      this.initMapEventHandlers(map);

      if (zoomToExtent) {
        this.zoomToFeatures(features);
      }
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
      var _this2 = this;

      var _this$props12 = this.props,
          map = _this$props12.map,
          features = _this$props12.features,
          selectable = _this$props12.selectable,
          zoomToExtent = _this$props12.zoomToExtent;

      if (!(0, _isEqual2["default"])(prevProps.map, map)) {
        this.initVectorLayer(map);
        this.initMapEventHandlers(map);
      }

      if (!(0, _isEqual2["default"])(prevProps.features, features)) {
        if (this._source) {
          this._source.clear();

          this._source.addFeatures(features);
        }

        if (zoomToExtent) {
          this.zoomToFeatures(features);
        }
      }

      if (!(0, _isEqual2["default"])(prevProps.selectable, selectable)) {
        if (selectable && map) {
          map.on('singleclick', this.onMapSingleClick);
        } else {
          this.setState({
            selectedRowKeys: []
          }, function () {
            if (map) {
              map.un('singleclick', _this2.onMapSingleClick);
            }
          });
        }
      }
    }
    /**
     * Called on lifecycle phase componentWillUnmount.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.deinitVectorLayer();
      this.deinitMapEventHandlers();
    }
    /**
     * Initialized the vector layer that will be used to draw the input features
     * on and adds it to the map (if any).
     *
     * @param map The map to add the layer to.
     */

  }, {
    key: "render",
    value:
    /**
     * The render method.
     */
    function render() {
      var _this3 = this;

      var _this$props13 = this.props,
          className = _this$props13.className,
          rowClassName = _this$props13.rowClassName,
          features = _this$props13.features,
          map = _this$props13.map,
          attributeBlacklist = _this$props13.attributeBlacklist,
          onRowClick = _this$props13.onRowClick,
          onRowMouseOver = _this$props13.onRowMouseOver,
          onRowMouseOut = _this$props13.onRowMouseOut,
          zoomToExtent = _this$props13.zoomToExtent,
          selectable = _this$props13.selectable,
          featureStyle = _this$props13.featureStyle,
          highlightStyle = _this$props13.highlightStyle,
          selectStyle = _this$props13.selectStyle,
          layerName = _this$props13.layerName,
          columnDefs = _this$props13.columnDefs,
          children = _this$props13.children,
          passThroughProps = _objectWithoutProperties(_this$props13, _excluded);

      var selectedRowKeys = this.state.selectedRowKeys;
      var rowSelection = {
        selectedRowKeys: selectedRowKeys,
        onChange: this.onSelectChange
      };
      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      var rowClassNameFn;

      if ((0, _isFunction2["default"])(rowClassName)) {
        rowClassNameFn = function rowClassNameFn(record) {
          return "".concat(_this3._rowClassName, " ").concat(rowClassName(record));
        };
      } else {
        var finalRowClassName = rowClassName ? "".concat(rowClassName, " ").concat(this._rowClassName) : this._rowClassName;

        rowClassNameFn = function rowClassNameFn(record) {
          return "".concat(finalRowClassName, " ").concat(_this3._rowKeyClassNamePrefix).concat((0, _kebabCase2["default"])(record.key));
        };
      }

      return /*#__PURE__*/React.createElement(_table["default"], _extends({
        className: finalClassName,
        columns: this.getColumnDefs(),
        dataSource: this.getTableData(),
        onRow: function onRow(record) {
          return {
            onClick: function onClick() {
              return _this3.onRowClick(record);
            },
            onMouseOver: function onMouseOver() {
              return _this3.onRowMouseOver(record);
            },
            onMouseOut: function onMouseOut() {
              return _this3.onRowMouseOut(record);
            }
          };
        },
        rowClassName: rowClassNameFn,
        rowSelection: selectable ? rowSelection : null
      }, passThroughProps), children);
    }
  }]);

  return FeatureGrid;
}(React.Component);

exports.FeatureGrid = FeatureGrid;

_defineProperty(FeatureGrid, "defaultProps", {
  features: [],
  attributeBlacklist: [],
  featureStyle: new _Style["default"]({
    fill: new _Fill["default"]({
      color: 'rgba(255, 255, 255, 0.5)'
    }),
    stroke: new _Stroke["default"]({
      color: 'rgba(73, 139, 170, 0.9)',
      width: 1
    }),
    image: new _Circle["default"]({
      radius: 6,
      fill: new _Fill["default"]({
        color: 'rgba(255, 255, 255, 0.5)'
      }),
      stroke: new _Stroke["default"]({
        color: 'rgba(73, 139, 170, 0.9)',
        width: 1
      })
    })
  }),
  highlightStyle: new _Style["default"]({
    fill: new _Fill["default"]({
      color: 'rgba(230, 247, 255, 0.8)'
    }),
    stroke: new _Stroke["default"]({
      color: 'rgba(73, 139, 170, 0.9)',
      width: 1
    }),
    image: new _Circle["default"]({
      radius: 6,
      fill: new _Fill["default"]({
        color: 'rgba(230, 247, 255, 0.8)'
      }),
      stroke: new _Stroke["default"]({
        color: 'rgba(73, 139, 170, 0.9)',
        width: 1
      })
    })
  }),
  selectStyle: new _Style["default"]({
    fill: new _Fill["default"]({
      color: 'rgba(230, 247, 255, 0.8)'
    }),
    stroke: new _Stroke["default"]({
      color: 'rgba(73, 139, 170, 0.9)',
      width: 2
    }),
    image: new _Circle["default"]({
      radius: 6,
      fill: new _Fill["default"]({
        color: 'rgba(230, 247, 255, 0.8)'
      }),
      stroke: new _Stroke["default"]({
        color: 'rgba(73, 139, 170, 0.9)',
        width: 2
      })
    })
  }),
  layerName: 'react-geo-feature-grid-layer',
  columnDefs: {},
  keyFunction: _ol.getUid,
  zoomToExtent: false,
  selectable: false
});

var _default = FeatureGrid;
exports["default"] = _default;