"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WfsSearch = void 0;

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

require("antd/es/auto-complete/style");

var _autoComplete = _interopRequireDefault(require("antd/es/auto-complete"));

var React = _interopRequireWildcard(require("react"));

var _GeoJSON = _interopRequireDefault(require("ol/format/GeoJSON"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _WfsFilterUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/WfsFilterUtil/WfsFilterUtil"));

var _constants = require("../../constants");

require("./WfsSearch.less");

var _excluded = ["additionalFetchOptions", "baseUrl", "className", "featureNS", "featurePrefix", "featureTypes", "filter", "geometryName", "map", "maxFeatures", "minChars", "outputFormat", "onChange", "onSelect", "propertyNames", "renderOption", "searchAttributes", "attributeDetails", "srsName", "wfsFormatOptions", "displayValue", "idProperty"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Option = _autoComplete["default"].Option;

/**
 * The WfsSearch field.
 * Implements an input field to do a WFS-GetFeature request.
 *
 * The GetFeature request is created with `ol.format.WFS.writeGetFeature`
 * so most of the WFS specific options work like document in the corresponding
 * API-docs: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
 *
 * @class WfsSearch
 * @extends React.Component
 */
var WfsSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(WfsSearch, _React$Component);

  var _super = _createSuper(WfsSearch);

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create the WfsSearch.
   *
   * @param props The initial props.
   * @constructs WfsSearch
   */
  function WfsSearch(props) {
    var _this;

    _classCallCheck(this, WfsSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "wfssearch"));

    _this.state = {
      searchTerm: '',
      data: [],
      fetching: false
    };
    _this.onUpdateInput = _this.onUpdateInput.bind(_assertThisInitialized(_this));
    _this.onMenuItemSelected = _this.onMenuItemSelected.bind(_assertThisInitialized(_this)); // delay requests invoking

    _this.doSearch = (0, _debounce2["default"])(_this.doSearch, _this.props.delay);
    return _this;
  }
  /**
   * Called if the input of the AutoComplete is being updated. It sets the
   * current inputValue as searchTerm and starts a search if the inputValue has
   * a length of at least `this.props.minChars` (default 3).
   *
   * @param value The inputValue. Undefined if clear btn is pressed.
   */


  _createClass(WfsSearch, [{
    key: "onUpdateInput",
    value: function onUpdateInput(value) {
      var _this2 = this;

      var _this$props = this.props,
          minChars = _this$props.minChars,
          onChange = _this$props.onChange,
          onBeforeSearch = _this$props.onBeforeSearch;
      this.setState({
        data: []
      });

      if ((0, _isFunction2["default"])(onBeforeSearch)) {
        value = onBeforeSearch(value);
      }

      this.setState({
        searchTerm: value
      }, function () {
        if (_this2.state.searchTerm && _this2.state.searchTerm.length >= minChars) {
          _this2.doSearch();
        }
      });

      if ((0, _isFunction2["default"])(onChange)) {
        onChange(value);
      }
    }
    /**
     * Perform the search.
     * @private
     */

  }, {
    key: "doSearch",
    value: function doSearch() {
      var _this3 = this;

      var _this$props2 = this.props,
          additionalFetchOptions = _this$props2.additionalFetchOptions,
          baseUrl = _this$props2.baseUrl,
          featureNS = _this$props2.featureNS,
          featurePrefix = _this$props2.featurePrefix,
          featureTypes = _this$props2.featureTypes,
          geometryName = _this$props2.geometryName,
          maxFeatures = _this$props2.maxFeatures,
          outputFormat = _this$props2.outputFormat,
          propertyNames = _this$props2.propertyNames,
          srsName = _this$props2.srsName,
          wfsFormatOptions = _this$props2.wfsFormatOptions,
          searchAttributes = _this$props2.searchAttributes,
          attributeDetails = _this$props2.attributeDetails;
      var searchOpts = {
        featureNS: featureNS,
        featurePrefix: featurePrefix,
        featureTypes: featureTypes,
        geometryName: geometryName,
        maxFeatures: maxFeatures,
        outputFormat: outputFormat,
        propertyNames: propertyNames,
        srsName: srsName,
        wfsFormatOptions: wfsFormatOptions,
        searchAttributes: searchAttributes,
        attributeDetails: attributeDetails
      };

      var request = _WfsFilterUtil["default"].getCombinedRequests(searchOpts, this.state.searchTerm);

      if (request) {
        this.setState({
          fetching: true
        }, function () {
          fetch("".concat(baseUrl), _objectSpread({
            method: 'POST',
            credentials: additionalFetchOptions.credentials ? additionalFetchOptions.credentials : 'same-origin',
            body: new XMLSerializer().serializeToString(request)
          }, additionalFetchOptions)).then(function (response) {
            return response.json();
          }).then(_this3.onFetchSuccess.bind(_this3))["catch"](_this3.onFetchError.bind(_this3));
        });
      } else {
        this.onFetchError('Missing GetFeature request parameters');
      }
    }
    /**
     * This function gets called on success of the WFS GetFeature fetch request.
     * It sets the response as data.
     *
     * @param response The found features.
     */

  }, {
    key: "onFetchSuccess",
    value: function onFetchSuccess(response) {
      var _this4 = this;

      var data = response.features ? response.features : [];
      data.forEach(function (feature) {
        return feature.searchTerm = _this4.state.searchTerm;
      });
      this.setState({
        data: data,
        fetching: false
      });
    }
    /**
     * This function gets called when the WFS GetFeature fetch request returns an error.
     * It logs the error to the console.
     *
     * @param error The errorstring.
     */

  }, {
    key: "onFetchError",
    value: function onFetchError(error) {
      _Logger["default"].error("Error while requesting WFS GetFeature: ".concat(error));

      this.setState({
        fetching: false
      });
    }
    /**
     * The function describes what to do when an item is selected.
     *
     * @param value The value of the selected option.
     * @param option The selected option.
     */

  }, {
    key: "onMenuItemSelected",
    value: function onMenuItemSelected(value, option) {
      var _this$props3 = this.props,
          map = _this$props3.map,
          idProperty = _this$props3.idProperty;
      var selectedFeature = this.state.data.filter(function (feat) {
        return feat[idProperty] === option.key;
      })[0];
      this.props.onSelect(selectedFeature, map);
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$state = this.state,
          data = _this$state.data,
          fetching = _this$state.fetching;

      var _this$props4 = this.props,
          additionalFetchOptions = _this$props4.additionalFetchOptions,
          baseUrl = _this$props4.baseUrl,
          className = _this$props4.className,
          featureNS = _this$props4.featureNS,
          featurePrefix = _this$props4.featurePrefix,
          featureTypes = _this$props4.featureTypes,
          filter = _this$props4.filter,
          geometryName = _this$props4.geometryName,
          map = _this$props4.map,
          maxFeatures = _this$props4.maxFeatures,
          minChars = _this$props4.minChars,
          outputFormat = _this$props4.outputFormat,
          onChange = _this$props4.onChange,
          onSelect = _this$props4.onSelect,
          propertyNames = _this$props4.propertyNames,
          renderOption = _this$props4.renderOption,
          searchAttributes = _this$props4.searchAttributes,
          attributeDetails = _this$props4.attributeDetails,
          srsName = _this$props4.srsName,
          wfsFormatOptions = _this$props4.wfsFormatOptions,
          displayValue = _this$props4.displayValue,
          idProperty = _this$props4.idProperty,
          passThroughProps = _objectWithoutProperties(_this$props4, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_autoComplete["default"], _extends({
        className: finalClassName,
        defaultActiveFirstOption: false,
        allowClear: true,
        onChange: this.onUpdateInput,
        onSelect: this.onMenuItemSelected,
        notFoundContent: fetching ? /*#__PURE__*/React.createElement(_spin["default"], {
          size: "small"
        }) : null,
        filterOption: false,
        showArrow: false
      }, passThroughProps), data.map(function (d) {
        return renderOption(d, _this5.props);
      }));
    }
  }]);

  return WfsSearch;
}(React.Component);

exports.WfsSearch = WfsSearch;

_defineProperty(WfsSearch, "defaultProps", {
  srsName: 'EPSG:3857',
  outputFormat: 'application/json',
  minChars: 3,
  additionalFetchOptions: {},
  displayValue: 'name',
  idProperty: 'id',
  attributeDetails: {},
  delay: 300,

  /**
   * Create an AutoComplete.Option from the given data.
   *
   * @param feature The feature as returned by the server.
   * @param props The current props of the component.
   * @return The AutoComplete.Option that will be
   * rendered for each feature.
   */
  renderOption: function renderOption(feature, props) {
    var displayValue = props.displayValue,
        idProperty = props.idProperty;
    var display = feature.properties[displayValue] ? feature.properties[displayValue] : feature[idProperty];
    return /*#__PURE__*/React.createElement(Option, {
      value: display,
      key: feature[idProperty],
      title: display
    }, display);
  },

  /**
   * The default onSelect method if no onSelect prop is given. It zooms to the
   * selected item.
   *
   * @param feature The selected feature as returned by the server.
   * @param olMap The openlayers map that was passed via prop.
   */
  onSelect: function onSelect(feature, olMap) {
    if (feature) {
      var olView = olMap.getView();
      var geoJsonFormat = new _GeoJSON["default"]();
      var olFeature = geoJsonFormat.readFeature(feature);
      var geometry = olFeature.getGeometry();

      if (geometry) {
        olView.fit(geometry, {
          duration: 500
        });
      }
    }
  }
});

var _default = WfsSearch;
exports["default"] = _default;