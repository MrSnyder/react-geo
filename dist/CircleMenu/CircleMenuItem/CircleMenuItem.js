"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CircleMenuItem = void 0;

var React = _interopRequireWildcard(require("react"));

var _constants = require("../../constants");

require("./CircleMenuItem.less");

var _excluded = ["rotationAngle", "radius", "animationDuration", "className"];

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
 * The CircleMenuItem.
 *
 * @class CircleMenuItem
 * @extends React.Component
 */
var CircleMenuItem = /*#__PURE__*/function (_React$Component) {
  _inherits(CircleMenuItem, _React$Component);

  var _super = _createSuper(CircleMenuItem);

  function CircleMenuItem() {
    var _this;

    _classCallCheck(this, CircleMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "circlemenuitem"));

    _defineProperty(_assertThisInitialized(_this), "_ref", null);

    return _this;
  }

  _createClass(CircleMenuItem, [{
    key: "componentDidMount",
    value:
    /**
     * A react lifecycle method called when the component did mount.
     * It calls the applyTransformation method right after updating.
     */
    function componentDidMount() {
      setTimeout(this.applyTransformation.bind(this), 1);
    }
    /**
     * A react lifecycle method called when the component did update.
     * It calls the applyTransformation method right after updating.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      setTimeout(this.applyTransformation.bind(this), 1);
    }
    /**
     * Applies the transformation to the component.
     */

  }, {
    key: "applyTransformation",
    value: function applyTransformation() {
      var _this$props = this.props,
          rotationAngle = _this$props.rotationAngle,
          radius = _this$props.radius;

      if (this._ref) {
        this._ref.style.transform = "rotate(".concat(rotationAngle, "deg) translate(").concat(radius, "px) rotate(-").concat(rotationAngle, "deg)");
      }
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          rotationAngle = _this$props2.rotationAngle,
          radius = _this$props2.radius,
          animationDuration = _this$props2.animationDuration,
          className = _this$props2.className,
          passThroughProps = _objectWithoutProperties(_this$props2, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      return /*#__PURE__*/React.createElement("div", _extends({
        className: finalClassName,
        ref: function ref(i) {
          return _this2._ref = i;
        },
        style: {
          display: 'block',
          top: '50%',
          left: '50%',
          margin: '-1.3em',
          position: 'absolute',
          transform: 'rotate(0deg) translate(0px) rotate(0deg)',
          transition: "transform ".concat(animationDuration, "ms")
        }
      }, passThroughProps), this.props.children);
    }
  }]);

  return CircleMenuItem;
}(React.Component);

exports.CircleMenuItem = CircleMenuItem;

_defineProperty(CircleMenuItem, "defaultProps", {
  animationDuration: 300
});

var _default = CircleMenuItem;
exports["default"] = _default;