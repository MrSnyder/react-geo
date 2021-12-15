"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NominatimSearch = void 0;

require("antd/es/auto-complete/style");

var _autoComplete = _interopRequireDefault(require("antd/es/auto-complete"));

var React = _interopRequireWildcard(require("react"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _UrlUtil = _interopRequireDefault(require("@terrestris/base-util/dist/UrlUtil/UrlUtil"));

var _proj = require("ol/proj");

var _constants = require("../../constants");

require("./NominatimSearch.less");

var _excluded = ["className", "nominatimBaseUrl", "format", "viewBox", "bounded", "polygonGeoJSON", "addressDetails", "limit", "countryCodes", "map", "onSelect", "renderOption", "minChars", "visible"];

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

var Option = _autoComplete["default"].Option;

/**
 * The NominatimSearch.
 *
 * @class NominatimSearch
 * @extends React.Component
 */
var NominatimSearch = /*#__PURE__*/function (_React$Component) {
  _inherits(NominatimSearch, _React$Component);

  var _super = _createSuper(NominatimSearch);

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create the NominatimSearch.
   *
   * @param props The initial props.
   * @constructs NominatimSearch
   */
  function NominatimSearch(props) {
    var _this;

    _classCallCheck(this, NominatimSearch);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "nominatimsearch"));

    _this.state = {
      searchTerm: '',
      dataSource: []
    };
    _this.onUpdateInput = _this.onUpdateInput.bind(_assertThisInitialized(_this));
    _this.onMenuItemSelected = _this.onMenuItemSelected.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * Trigger search when searchTerm prop has changed
   *
   * @param prevProps Previous props
   */


  _createClass(NominatimSearch, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.searchTerm !== prevProps.searchTerm) {
        this.onUpdateInput(this.props.searchTerm);
      }
    }
    /**
     * Called if the input of the AutoComplete is being updated. It sets the
     * current inputValue as searchTerm and starts a search if the inputValue has
     * a length of at least `this.props.minChars` (default 3).
     *
     * @param inputValue The inputValue. Undefined if clear btn
     *                                      is pressed.
     */

  }, {
    key: "onUpdateInput",
    value: function onUpdateInput(inputValue) {
      var _this2 = this;

      var onClear = this.props.onClear;
      this.setState({
        dataSource: []
      });
      this.setState({
        searchTerm: inputValue || ''
      }, function () {
        if (_this2.state.searchTerm.length >= _this2.props.minChars) {
          _this2.doSearch();
        }
      });

      if (!inputValue && onClear) {
        onClear();
      }
    }
    /**
     * Perform the search.
     */

  }, {
    key: "doSearch",
    value: function doSearch() {
      var baseParams = {
        format: this.props.format,
        viewbox: this.props.viewBox,
        bounded: this.props.bounded,
        // eslint-disable-next-line camelcase
        polygon_geojson: this.props.polygonGeoJSON,
        addressdetails: this.props.addressDetails,
        limit: this.props.limit,
        countrycodes: this.props.countryCodes,
        q: this.state.searchTerm
      };

      var getRequestParams = _UrlUtil["default"].objectToRequestString(baseParams);

      fetch("".concat(this.props.nominatimBaseUrl).concat(getRequestParams)).then(function (response) {
        return response.json();
      }).then(this.onFetchSuccess.bind(this))["catch"](this.onFetchError.bind(this));
    }
    /**
     * This function gets called on success of the nominatim fetch.
     * It sets the response as dataSource.
     *
     * @param response The found features.
     */

  }, {
    key: "onFetchSuccess",
    value: function onFetchSuccess(response) {
      var _this3 = this;

      this.setState({
        dataSource: response
      }, function () {
        if (_this3.props.onFetchSuccess) {
          _this3.props.onFetchSuccess(response);
        }
      });
    }
    /**
     * This function gets called when the nomintim fetch returns an error.
     * It logs the error to the console.
     *
     * @param error The errorstring.
     */

  }, {
    key: "onFetchError",
    value: function onFetchError(error) {
      _Logger["default"].error("Error while requesting Nominatim: ".concat(error));

      if (this.props.onFetchError) {
        this.props.onFetchError(error);
      }
    }
    /**
     * The function describes what to do when an item is selected.
     *
     * @param value The value of the selected option.
     * @param option The selected OptionData
     */

  }, {
    key: "onMenuItemSelected",
    value: function onMenuItemSelected(value, option) {
      var selected = this.state.dataSource.find(function (i) {
        return i.place_id.toString() === option.key;
      });
      this.props.onSelect(selected, this.props.map);
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          className = _this$props.className,
          nominatimBaseUrl = _this$props.nominatimBaseUrl,
          format = _this$props.format,
          viewBox = _this$props.viewBox,
          bounded = _this$props.bounded,
          polygonGeoJSON = _this$props.polygonGeoJSON,
          addressDetails = _this$props.addressDetails,
          limit = _this$props.limit,
          countryCodes = _this$props.countryCodes,
          map = _this$props.map,
          onSelect = _this$props.onSelect,
          renderOption = _this$props.renderOption,
          minChars = _this$props.minChars,
          visible = _this$props.visible,
          passThroughProps = _objectWithoutProperties(_this$props, _excluded);

      if (visible === false) {
        return null;
      }

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_autoComplete["default"], _extends({
        className: finalClassName,
        allowClear: true,
        placeholder: "Ortsname, Stra\xDFenname, Stadtteilname, POI usw.",
        onChange: function onChange(v) {
          return _this4.onUpdateInput(v);
        },
        onSelect: function onSelect(v, o) {
          return _this4.onMenuItemSelected(v, o);
        }
      }, passThroughProps), this.state.dataSource.map(renderOption));
    }
  }]);

  return NominatimSearch;
}(React.Component);

exports.NominatimSearch = NominatimSearch;

_defineProperty(NominatimSearch, "defaultProps", {
  nominatimBaseUrl: 'https://nominatim.openstreetmap.org/search?',
  format: 'json',
  viewBox: '-180,90,180,-90',
  bounded: 1,
  polygonGeoJSON: 1,
  addressDetails: 1,
  limit: 10,
  countryCodes: 'de',
  minChars: 3,
  visible: true,

  /**
   * Create an AutoComplete.Option from the given data.
   *
   * @param item The tuple as an object.
   * @return The returned option
   */
  renderOption: function renderOption(item) {
    return /*#__PURE__*/React.createElement(Option, {
      key: item.place_id,
      value: item.display_name
    }, item.display_name);
  },

  /**
   * The default onSelect method if no onSelect prop is given. It zooms to the
   * selected item.
   *
   * @param selected The selected item as it is returned by nominatim.
   */
  onSelect: function onSelect(selected, olMap) {
    if (selected && selected.boundingbox) {
      var olView = olMap.getView();
      var bbox = selected.boundingbox.map(parseFloat);
      var extent = [bbox[2], bbox[0], bbox[3], bbox[1]];
      extent = (0, _proj.transformExtent)(extent, 'EPSG:4326', olView.getProjection().getCode());
      olView.fit(extent, {
        duration: 500
      });
    }
  }
});

var _default = NominatimSearch;
exports["default"] = _default;