"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CircleMenu = void 0;

var React = _interopRequireWildcard(require("react"));

var _CircleMenuItem = _interopRequireDefault(require("./CircleMenuItem/CircleMenuItem"));

var _constants = require("../constants");

require("./CircleMenu.less");

var _excluded = ["animationDuration", "className", "diameter", "children", "position", "segmentAngles", "style"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
 * The CircleMenu.
 *
 * @class CircleMenu
 * @extends React.Component
 */
var CircleMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(CircleMenu, _React$Component);

  var _super = _createSuper(CircleMenu);

  function CircleMenu() {
    var _this;

    _classCallCheck(this, CircleMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "circlemenu"));

    _defineProperty(_assertThisInitialized(_this), "_ref", null);

    _defineProperty(_assertThisInitialized(_this), "childrenMapper", function (child, idx, children) {
      var _this$props = _this.props,
          diameter = _this$props.diameter,
          segmentAngles = _this$props.segmentAngles;
      var start = segmentAngles[0];
      var end = segmentAngles[1];
      var range = end - start;
      var amount = range > 270 ? children.length : children.length - 1;
      var rotationAngle = start + range / amount * idx;
      return /*#__PURE__*/React.createElement(_CircleMenuItem["default"], {
        radius: diameter / 2,
        rotationAngle: rotationAngle,
        animationDuration: _this.props.animationDuration,
        key: idx
      }, child);
    });

    return _this;
  }

  _createClass(CircleMenu, [{
    key: "componentDidMount",
    value:
    /**
     * A react lifecycle method called when the component did mount.
     * It calls the applyTransformation method right after mounting.
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
      if (this._ref) {
        this._ref.style.width = "".concat(this.props.diameter, "px");
        this._ref.style.height = "".concat(this.props.diameter, "px");
        this._ref.style.opacity = 1;
      }
    }
  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          animationDuration = _this$props2.animationDuration,
          className = _this$props2.className,
          diameter = _this$props2.diameter,
          children = _this$props2.children,
          position = _this$props2.position,
          segmentAngles = _this$props2.segmentAngles,
          style = _this$props2.style,
          passThroughProps = _objectWithoutProperties(_this$props2, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      return /*#__PURE__*/React.createElement("div", _extends({
        ref: function ref(i) {
          return _this2._ref = i;
        },
        className: finalClassName,
        style: _objectSpread({
          transition: "all ".concat(animationDuration, "ms"),
          left: position[0] - diameter / 2,
          top: position[1] - diameter / 2
        }, style)
      }, passThroughProps), Array.isArray(children) ? children.map(this.childrenMapper) : this.childrenMapper(children));
    }
  }]);

  return CircleMenu;
}(React.Component);

exports.CircleMenu = CircleMenu;

_defineProperty(CircleMenu, "defaultProps", {
  animationDuration: 300,
  diameter: 100,
  segmentAngles: [0, 360]
});

var _default = CircleMenu;
exports["default"] = _default;