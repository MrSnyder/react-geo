"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WfsSearchInput = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var React = _interopRequireWildcard(require("react"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _CloseCircleOutlined = _interopRequireDefault(require("@ant-design/icons/CloseCircleOutlined"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _WfsFilterUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/WfsFilterUtil/WfsFilterUtil"));

var _constants = require("../../constants");

require("./WfsSearchInput.less");

var _excluded = ["additionalFetchOptions", "baseUrl", "className", "featureNS", "featurePrefix", "featureTypes", "geometryName", "map", "maxFeatures", "minChars", "outputFormat", "propertyNames", "searchAttributes", "attributeDetails", "srsName", "wfsFormatOptions", "visible", "onFetchSuccess", "onFetchError", "onClearClick", "onBeforeSearch"];

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

/**
 * The WfsSearchInput field.
 * Implements an input field to do a WFS-GetFeature request.
 *
 * The GetFeature request is created with `ol.format.WFS.writeGetFeature`
 * so most of the WFS specific options work like document in the corresponding
 * API-docs: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
 *
 * @class WfsSearchInput
 * @extends React.Component
 */
var WfsSearchInput = /*#__PURE__*/function (_React$Component) {
  _inherits(WfsSearchInput, _React$Component);

  var _super = _createSuper(WfsSearchInput);

  /**
   * The reference to the Input Element of the WfsSearch.
   * @private
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create the WfsSearchInput.
   *
   * @param props The initial props.
   * @constructs WfsSearchInput
   */
  function WfsSearchInput(props) {
    var _this;

    _classCallCheck(this, WfsSearchInput);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_inputRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "wfssearchinput"));

    _this.state = {
      searchTerm: '',
      data: [],
      fetching: false
    };
    _this.onUpdateInput = _this.onUpdateInput.bind(_assertThisInitialized(_this)); // delay requests invoking

    _this.doSearch = (0, _debounce2["default"])(_this.doSearch, _this.props.delay);
    return _this;
  }
  /**
   * Trigger search when searchTerm prop has changed
   *
   * @param prevProps Previous props
   */


  _createClass(WfsSearchInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.searchTerm !== prevProps.searchTerm) {
        var evt = {
          target: {
            value: this.props.searchTerm
          }
        };
        this.onUpdateInput(evt);
      }
    }
    /**
     * Called if the input is being updated. It sets the current inputValue
     * as searchTerm and starts a search if the inputValue has
     * a length of at least `this.props.minChars` (default 3).
     *
     * @param evt The input value from `keyup` event.
     * Gets undefined if clear btn is pressed.
     */

  }, {
    key: "onUpdateInput",
    value: function onUpdateInput(evt) {
      var _this2 = this;

      var _this$props = this.props,
          minChars = _this$props.minChars,
          onBeforeSearch = _this$props.onBeforeSearch;
      this.setState({
        data: []
      });
      var value = '';

      if (evt && evt.target && evt.target.value) {
        value = evt.target.value;
      }

      if (onBeforeSearch) {
        value = onBeforeSearch(value);
      }

      this.setState({
        searchTerm: value
      }, function () {
        if (_this2.state.searchTerm && _this2.state.searchTerm.length >= minChars) {
          _this2.doSearch();
        }
      });
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
     * If an additional function `onFetchSuccess` is provided, it will be called
     * as callback.
     * @param response The found features.
     */

  }, {
    key: "onFetchSuccess",
    value: function onFetchSuccess(response) {
      var _this4 = this;

      var onFetchSuccess = this.props.onFetchSuccess;
      var data = response.features ? response.features : [];
      data.forEach(function (feature) {
        return feature.searchTerm = _this4.state.searchTerm;
      });
      this.setState({
        data: data,
        fetching: false
      }, function () {
        if (onFetchSuccess) {
          onFetchSuccess(data);
        }
      });
    }
    /**
     * This function gets called when the WFS GetFeature fetch request returns an error.
     * It logs the error to the console.
     * If an additional function `onFetchSuccess` is provided, it will be called
     * as callback.
     *
     * @param error The errorstring.
     */

  }, {
    key: "onFetchError",
    value: function onFetchError(error) {
      var onFetchError = this.props.onFetchError;

      _Logger["default"].error("Error while requesting WFS GetFeature: ".concat(error));

      this.setState({
        fetching: false
      }, function () {
        if (onFetchError) {
          onFetchError(error);
        }
      });
    }
    /**
     * Resets input field value and previously fetched data on reset button click.
     */

  }, {
    key: "resetSearch",
    value: function resetSearch() {
      var onClearClick = this.props.onClearClick;
      this._inputRef.input.value = '';
      this.setState({
        data: []
      }, function () {
        if (onClearClick) {
          onClearClick();
        }
      });
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var fetching = this.state.fetching;

      var _this$props3 = this.props,
          additionalFetchOptions = _this$props3.additionalFetchOptions,
          baseUrl = _this$props3.baseUrl,
          className = _this$props3.className,
          featureNS = _this$props3.featureNS,
          featurePrefix = _this$props3.featurePrefix,
          featureTypes = _this$props3.featureTypes,
          geometryName = _this$props3.geometryName,
          map = _this$props3.map,
          maxFeatures = _this$props3.maxFeatures,
          minChars = _this$props3.minChars,
          outputFormat = _this$props3.outputFormat,
          propertyNames = _this$props3.propertyNames,
          searchAttributes = _this$props3.searchAttributes,
          attributeDetails = _this$props3.attributeDetails,
          srsName = _this$props3.srsName,
          wfsFormatOptions = _this$props3.wfsFormatOptions,
          visible = _this$props3.visible,
          onFetchSuccess = _this$props3.onFetchSuccess,
          onFetchError = _this$props3.onFetchError,
          onClearClick = _this$props3.onClearClick,
          onBeforeSearch = _this$props3.onBeforeSearch,
          passThroughProps = _objectWithoutProperties(_this$props3, _excluded);

      if (visible === false) {
        return null;
      }

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_input["default"], _extends({
        className: finalClassName,
        ref: function ref(inputRef) {
          _this5._inputRef = inputRef;
        },
        suffix: fetching ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
          onClick: this.resetSearch.bind(this)
        }) : /*#__PURE__*/React.createElement(_CloseCircleOutlined["default"], {
          onClick: this.resetSearch.bind(this)
        }),
        onPressEnter: this.onUpdateInput,
        onKeyUp: this.onUpdateInput
      }, passThroughProps));
    }
  }]);

  return WfsSearchInput;
}(React.Component);

exports.WfsSearchInput = WfsSearchInput;

_defineProperty(WfsSearchInput, "defaultProps", {
  srsName: 'EPSG:3857',
  outputFormat: 'application/json',
  minChars: 3,
  additionalFetchOptions: {},
  attributeDetails: {},
  delay: 300,
  visible: true
});

var _default = WfsSearchInput;
exports["default"] = _default;