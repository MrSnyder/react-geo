"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _constants = require("../../constants");

require("./ToggleGroup.less");

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

/**
 * A group for toggle components (e.g. buttons)
 *
 * @class The ToggleGroup
 * @extends React.Component
 *
 */
var ToggleGroup = /*#__PURE__*/function (_React$Component) {
  _inherits(ToggleGroup, _React$Component);

  var _super = _createSuper(ToggleGroup);

  /**
   * The default properties.
   */

  /**
   * The child context types.
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * The constructor.
   *
   * @param props The properties.
   */
  function ToggleGroup(props) {
    var _this;

    _classCallCheck(this, ToggleGroup);

    _this = _super.call(this, props);
    /**
     * The initial state.
     */

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "togglegroup"));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (childProps) {
      if ((0, _isFunction2["default"])(_this.props.onChange)) {
        _this.props.onChange(childProps);
      } // Allow deselect.


      if (_this.props.allowDeselect && childProps.name === _this.state.selectedName) {
        _this.setState({
          selectedName: null
        });
      } else {
        _this.setState({
          selectedName: childProps.name
        });
      }
    });

    _this.state = {
      selectedName: props.selectedName
    };
    return _this;
  }
  /**
   * Update selectedName in state if property was changed
   *
   * @param prevProps Previous props
   */


  _createClass(ToggleGroup, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.selectedName !== this.props.selectedName) {
        this.setState({
          selectedName: this.props.selectedName
        });
      }
    }
    /**
     * Returns the context for the children.
     *
     * @return The child context.
     */

  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        toggleGroup: {
          name: this.props.name,
          selectedName: this.state.selectedName,
          onChange: this.onChange
        }
      };
    }
    /**
     * The onChange handler.
     *
     * @param childProps The properties of the children.
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this2 = this;

      var _this$props = this.props,
          orientation = _this$props.orientation,
          children = _this$props.children;
      var className = this.props.className ? "".concat(this.props.className, " ").concat(this._className) : this._className;
      var orientationClass = orientation === 'vertical' ? 'vertical-toggle-group' : 'horizontal-toggle-group';
      var childrenWithProps = React.Children.map(children, function (child) {
        // pass the press state through to child components
        return child ? /*#__PURE__*/React.cloneElement(child, {
          pressed: _this2.state.selectedName === child.props.name
        }) : child;
      });
      return /*#__PURE__*/React.createElement("div", {
        className: "".concat(className, " ").concat(orientationClass)
      }, childrenWithProps);
    }
  }]);

  return ToggleGroup;
}(React.Component);

_defineProperty(ToggleGroup, "defaultProps", {
  orientation: 'vertical',
  allowDeselect: true
});

_defineProperty(ToggleGroup, "childContextTypes", {
  toggleGroup: PropTypes.object
});

var _default = ToggleGroup;
exports["default"] = _default;