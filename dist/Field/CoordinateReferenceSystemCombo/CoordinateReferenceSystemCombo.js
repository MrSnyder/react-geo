"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/auto-complete/style");

var _autoComplete = _interopRequireDefault(require("antd/es/auto-complete"));

var React = _interopRequireWildcard(require("react"));

var _UrlUtil = _interopRequireDefault(require("@terrestris/base-util/dist/UrlUtil/UrlUtil"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _constants = require("../../constants");

require("./CoordinateReferenceSystemCombo.less");

var _excluded = ["className", "emptyTextPlaceholderText", "onSelect", "crsApiUrl", "predefinedCrsDefinitions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
 * Class representing a combo to choose coordinate projection system via a
 * dropdown menu and / or autocompletion
 *
 * @class The CoordinateReferenceSystemCombo
 * @extends React.Component
 */
var CoordinateReferenceSystemCombo = /*#__PURE__*/function (_React$Component) {
  _inherits(CoordinateReferenceSystemCombo, _React$Component);

  var _super = _createSuper(CoordinateReferenceSystemCombo);

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create a CRS combo.
   * @constructs CoordinateReferenceSystemCombo
   */
  function CoordinateReferenceSystemCombo(props) {
    var _this;

    _classCallCheck(this, CoordinateReferenceSystemCombo);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "coordinatereferencesystemcombo"));

    _defineProperty(_assertThisInitialized(_this), "fetchCrs", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(searchVal) {
        var crsApiUrl, queryParameters;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                crsApiUrl = _this.props.crsApiUrl;
                queryParameters = {
                  format: 'json',
                  q: searchVal
                };
                return _context.abrupt("return", fetch("".concat(crsApiUrl, "?").concat(_UrlUtil["default"].objectToRequestString(queryParameters))).then(function (response) {
                  return response.json();
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "transformResults", function (json) {
      var results = json.results;

      if (results && results.length > 0) {
        return results.map(function (obj) {
          return {
            code: obj.code,
            value: obj.name,
            proj4def: obj.proj4,
            bbox: obj.bbox
          };
        });
      } else {
        return [];
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearch", /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(value) {
        var predefinedCrsDefinitions, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                predefinedCrsDefinitions = _this.props.predefinedCrsDefinitions;

                if (!(!value || value.length === 0)) {
                  _context2.next = 4;
                  break;
                }

                _this.setState({
                  value: value,
                  crsDefinitions: []
                });

                return _context2.abrupt("return");

              case 4:
                if (predefinedCrsDefinitions) {
                  _context2.next = 17;
                  break;
                }

                _context2.prev = 5;
                _context2.next = 8;
                return _this.fetchCrs(value);

              case 8:
                result = _context2.sent;

                _this.setState({
                  crsDefinitions: _this.transformResults(result)
                });

                _context2.next = 15;
                break;

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](5);

                _this.onFetchError(_context2.t0);

              case 15:
                _context2.next = 18;
                break;

              case 17:
                _this.setState({
                  value: value
                });

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[5, 12]]);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onCrsItemSelect", function (value, option) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          predefinedCrsDefinitions = _this$props.predefinedCrsDefinitions;
      var crsDefinitions = _this.state.crsDefinitions;
      var crsObjects = predefinedCrsDefinitions || crsDefinitions;
      var selected = crsObjects.filter(function (i) {
        return i.code === option.key;
      })[0];

      _this.setState({
        value: selected.value
      });

      onSelect(selected);
    });

    _this.state = {
      crsDefinitions: [],
      value: null
    };
    return _this;
  }
  /**
   * Fetch CRS definitions from epsg.io for given search string
   *
   * @param searchVal The search string
   */


  _createClass(CoordinateReferenceSystemCombo, [{
    key: "onFetchError",
    value:
    /**
     * This function gets called when the EPSG.io fetch returns an error.
     * It logs the error to the console.
     *
     */
    function onFetchError(error) {
      _Logger["default"].error("Error while requesting in CoordinateReferenceSystemCombo: ".concat(error));
    }
    /**
     * This function transforms results of EPSG.io
     *
     * @param json The result object of EPSG.io-API, see where
     *  https://github.com/klokantech/epsg.io#api-for-results
     * @return Array of CRS definitons used in CoordinateReferenceSystemCombo
     */

  }, {
    key: "transformCrsObjectsToOptions",
    value:
    /**
     * Tranforms CRS object returned by EPSG.io to antd  Option component
     *
     * @param crsObject Single plain CRS object returned by EPSG.io
     *
     * @return Option component to render
     */
    function transformCrsObjectsToOptions(crsObject) {
      var value = "".concat(crsObject.value, " (EPSG:").concat(crsObject.code, ")");
      return /*#__PURE__*/React.createElement(Option, {
        key: crsObject.code,
        value: value
      }, value);
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          emptyTextPlaceholderText = _this$props2.emptyTextPlaceholderText,
          onSelect = _this$props2.onSelect,
          crsApiUrl = _this$props2.crsApiUrl,
          predefinedCrsDefinitions = _this$props2.predefinedCrsDefinitions,
          passThroughOpts = _objectWithoutProperties(_this$props2, _excluded);

      var crsDefinitions = this.state.crsDefinitions;
      var crsObjects = predefinedCrsDefinitions || crsDefinitions;
      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_autoComplete["default"], _extends({
        className: finalClassName,
        allowClear: true,
        onSelect: function onSelect(v, o) {
          return _this2.onCrsItemSelect(v, o);
        },
        onChange: function onChange(v) {
          return _this2.handleSearch(v);
        },
        placeholder: emptyTextPlaceholderText
      }, passThroughOpts), crsObjects.map(this.transformCrsObjectsToOptions));
    }
  }]);

  return CoordinateReferenceSystemCombo;
}(React.Component);

_defineProperty(CoordinateReferenceSystemCombo, "defaultProps", {
  emptyTextPlaceholderText: 'Please select a CRS',
  crsApiUrl: 'https://epsg.io/',
  onSelect: function onSelect() {
    return undefined;
  }
});

var _default = CoordinateReferenceSystemCombo;
exports["default"] = _default;