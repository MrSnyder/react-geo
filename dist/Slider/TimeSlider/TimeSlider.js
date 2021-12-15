"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/slider/style");

var _slider = _interopRequireDefault(require("antd/es/slider"));

var React = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _isObject2 = _interopRequireDefault(require("lodash/isObject"));

var _constants = require("../../constants");

var _excluded = ["className", "defaultValue", "formatString", "min", "max", "value", "marks", "onChange", "useRange"];

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
 * Customized slider that uses ISO 8601 time strings as input.
 *
 * @class The TimeSlider
 * @extends React.Component
 */
var TimeSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeSlider, _React$Component);

  var _super = _createSuper(TimeSlider);

  /**
   * The className added to this component.
   * @private
   */

  /**
   * The constructor.
   *
   * @constructs TimeSlider
   * @param props The properties.
   */
  function TimeSlider(props) {
    var _this;

    _classCallCheck(this, TimeSlider);

    _this = _super.call(this, props); // TODO: State is never used. Can we remove this?

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "timeslider"));

    _this.state = _this.convertTimestamps();
    return _this;
  }
  /**
   * Converts the various input strings to unix timestamps.
   * @return The converted values
   */


  _createClass(TimeSlider, [{
    key: "convertTimestamps",
    value: function convertTimestamps() {
      return {
        min: (0, _moment["default"])(this.props.min).unix(),
        max: (0, _moment["default"])(this.props.max).unix(),
        defaultValue: this.convert(this.props.defaultValue)
      };
    }
    /**
     * Convert a value to unix timestamps.
     * @param val the input value(s)
     * @return The converted value(s)
     */

  }, {
    key: "convert",
    value: function convert(val) {
      if (val === undefined) {
        return val;
      }

      return (0, _isArray2["default"])(val) ? val.map(function (iso) {
        return (0, _moment["default"])(iso).unix();
      }) : (0, _moment["default"])(val).unix();
    }
    /**
     * Convert the keys of mark values to unix timestamps.
     *
     * @param marks The marks prop.
     * @return The marks prop with converted keys.
     */

  }, {
    key: "convertMarks",
    value: function convertMarks(marks) {
      var _this2 = this;

      var convertedMarks;

      if ((0, _isObject2["default"])(marks)) {
        convertedMarks = {};
        Object.keys(marks).forEach(function (key) {
          var convertedKey = _this2.convert(key);

          convertedMarks[convertedKey] = marks[key];
        });
      }

      return convertedMarks;
    }
    /**
     * Formats a timestamp for user display.
     * @param unix unix timestamps
     * @return The formatted timestamps
     */

  }, {
    key: "formatTimestamp",
    value: function formatTimestamp(unix) {
      return (0, _moment["default"])(unix * 1000).format(this.props.formatString);
    }
    /**
     * Called when the value(s) are changed. Converts the value(s) back to ISO
     * timestrings.
     * @param value the new value
     */

  }, {
    key: "valueUpdated",
    value: function valueUpdated(value) {
      this.props.onChange((0, _isArray2["default"])(value) ? [(0, _moment["default"])(value[0] * 1000).toISOString(), (0, _moment["default"])(value[1] * 1000).toISOString()] : (0, _moment["default"])(value * 1000).toISOString());
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue,
          formatString = _this$props.formatString,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value,
          marks = _this$props.marks,
          onChange = _this$props.onChange,
          useRange = _this$props.useRange,
          passThroughProps = _objectWithoutProperties(_this$props, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      var convertedMarks = this.convertMarks(marks);
      var defaultVal;
      var val;

      if (useRange) {
        defaultVal = this.convert(defaultValue);
        val = this.convert(value);
      } else {
        defaultVal = this.convert(defaultValue);
        val = this.convert(value);
      }

      return /*#__PURE__*/React.createElement(_slider["default"], _extends({
        className: finalClassName,
        defaultValue: defaultVal,
        range: useRange,
        min: (0, _moment["default"])(min).unix(),
        max: (0, _moment["default"])(max).unix(),
        tipFormatter: this.formatTimestamp.bind(this),
        onChange: this.valueUpdated.bind(this),
        value: val,
        marks: convertedMarks
      }, passThroughProps));
    }
  }]);

  return TimeSlider;
}(React.Component);

_defineProperty(TimeSlider, "defaultProps", {
  useRange: false,
  defaultValue: (0, _moment["default"])().toISOString(),
  min: (0, _moment["default"])().subtract(1, 'hour').toISOString(),
  max: (0, _moment["default"])().toISOString(),
  onChange: function onChange() {
    return undefined;
  },
  value: (0, _moment["default"])().toISOString(),
  formatString: 'DD.MM. HH:mm'
});

var _default = TimeSlider;
exports["default"] = _default;