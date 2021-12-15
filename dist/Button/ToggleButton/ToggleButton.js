"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var React = _interopRequireWildcard(require("react"));

var PropTypes = _interopRequireWildcard(require("prop-types"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

require("./ToggleButton.less");

var _constants = require("../../constants");

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _excluded = ["className", "icon", "iconName", "pressedIcon", "pressedIconName", "pressed", "onToggle", "tooltip", "tooltipPlacement", "tooltipProps"],
    _excluded2 = ["onClick"];

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
 * The ToggleButton.
 *
 * @class The ToggleButton
 * @extends React.Component
 */
var ToggleButton = /*#__PURE__*/function (_React$Component) {
  _inherits(ToggleButton, _React$Component);

  var _super = _createSuper(ToggleButton);

  /**
   * The default properties.
   */

  /**
   * The context types.
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * The class to apply for a toggled/pressed button.
   */

  /**
   * Creates the ToggleButton.
   *
   * @constructs ToggleButton
   */
  function ToggleButton(props) {
    var _this;

    _classCallCheck(this, ToggleButton);

    _this = _super.call(this, props); // Instantiate the state.
    // components state

    _defineProperty(_assertThisInitialized(_this), "_className", "".concat(_constants.CSS_PREFIX, "togglebutton"));

    _defineProperty(_assertThisInitialized(_this), "pressedClass", 'btn-pressed');

    _this.state = {
      pressed: props.pressed,
      lastClickEvt: null,
      overallPressed: props.pressed,
      isClicked: false
    };
    return _this;
  }
  /**
   * Invoked right before calling the render method, both on the initial mount
   * and on subsequent updates. It should return an object to update the state,
   * or null to update nothing.
   * @param nextProps The next properties.
   * @param prevState The previous state.
   */


  _createClass(ToggleButton, [{
    key: "componentDidMount",
    value:
    /**
     * We will handle the initial state of the button here.
     * If it is pressed, we will have to call its `onToggle`
     * method, if it exists, in order to reflect the initial
     * state correctly (e.g. activating ol.Controls)
     */
    function componentDidMount() {
      if (this.props.onToggle && this.props.pressed === true) {
        this.props.onToggle(true, null);
      }
    }
    /**
     * Invoked immediately after updating occurs. This method is not called
     * for the initial render.
     * @method
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var onToggle = this.props.onToggle;
      var _this$state = this.state,
          pressed = _this$state.pressed,
          lastClickEvt = _this$state.lastClickEvt,
          overallPressed = _this$state.overallPressed,
          isClicked = _this$state.isClicked;
      /**
       * the following is performed here as a hack to keep track of the pressed changes.
       *
       * check if the button has been clicked
       * |__ YES: ==> toggle the button
       * |
       * |__ NO: check if the prop has changed
       *        |__ YES: ==> Toggle the button
       *        |__ NO: check if previous update action was a click
       *                |__ YES: ==> run the Toggle function fo the prop value
       */

      var shouldToggle;

      if (isClicked || prevState.pressed !== pressed || prevState.isClicked) {
        if (isClicked) {
          // button is clicked
          shouldToggle = true;
        } else {
          // check for prop change
          if (pressed !== prevState.overallPressed) {
            // pressed prop has changed
            shouldToggle = true;
          } else {
            if (prevState.isClicked) {
              // prop has not changed but the previous was click event
              if (prevState.overallPressed !== overallPressed) {
                shouldToggle = true;
              }
            }
          }
        }

        if (shouldToggle && onToggle) {
          onToggle(overallPressed, lastClickEvt);
        }
      }
    }
    /**
     * Called on click.
     *
     * @param evt The ClickEvent.
     * @method
     */

  }, {
    key: "onClick",
    value: function onClick(evt) {
      var _this2 = this;

      evt.persist();
      this.setState({
        overallPressed: !this.state.overallPressed,
        lastClickEvt: evt,
        isClicked: true
      }, function () {
        // This part can be removed in future if the ToggleGroup button is removed.
        if (_this2.context.toggleGroup && (0, _isFunction2["default"])(_this2.context.toggleGroup.onChange)) {
          _this2.context.toggleGroup.onChange(_this2.props); // this allows for the allowDeselect property to be taken into account
          // when used with ToggleGroup. Since the ToggleGroup changes the
          // pressed prop for its child components the click event dose not need to
          // change the pressed property.


          _this2.setState({
            overallPressed: !_this2.state.overallPressed
          });
        }
      });
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var overallPressed = this.state.overallPressed;

      var _this$props = this.props,
          className = _this$props.className,
          icon = _this$props.icon,
          iconName = _this$props.iconName,
          pressedIcon = _this$props.pressedIcon,
          pressedIconName = _this$props.pressedIconName,
          pressed = _this$props.pressed,
          onToggle = _this$props.onToggle,
          tooltip = _this$props.tooltip,
          tooltipPlacement = _this$props.tooltipPlacement,
          tooltipProps = _this$props.tooltipProps,
          antBtnProps = _objectWithoutProperties(_this$props, _excluded);

      var onClick = antBtnProps.onClick,
          filteredAntBtnProps = _objectWithoutProperties(antBtnProps, _excluded2);

      var finalClassName = className ? "".concat(className, " ").concat(this._className) : this._className;
      var pressedClass = '';

      if (overallPressed) {
        pressedClass = " ".concat(this.pressedClass, " ");
      }

      if (icon && iconName) {
        _Logger["default"].warn('Provide either an icon node or the name of a fa icon. ' + 'If both are provided the fa icon will be rendered.');
      }

      var iconToRender;

      if (icon) {
        iconToRender = icon;
      }

      if (iconName) {
        iconToRender = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: iconName
        });
      }

      if (pressedIcon && pressedIconName) {
        _Logger["default"].warn('Provide either a pressed icon node or the name of a fa ' + 'icon. If both are provided the fa icon will be rendered.');
      }

      var pressedIconToRender;

      if (pressedIcon) {
        pressedIconToRender = pressedIcon;
      }

      if (pressedIconName) {
        pressedIconToRender = /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: iconName
        });
      }

      return /*#__PURE__*/React.createElement(_tooltip["default"], _extends({
        title: tooltip,
        placement: tooltipPlacement
      }, tooltipProps), /*#__PURE__*/React.createElement(_button["default"], _extends({
        className: "".concat(finalClassName).concat(pressedClass),
        "aria-pressed": overallPressed,
        onClick: this.onClick.bind(this),
        icon: overallPressed ? pressedIconToRender : iconToRender
      }, filteredAntBtnProps), antBtnProps.children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      // Checks to see if the pressed property has changed
      if (prevState.pressed !== nextProps.pressed) {
        return {
          pressed: nextProps.pressed,
          overallPressed: nextProps.pressed,
          isClicked: false,
          lastClickEvt: null
        };
      }

      return null;
    }
  }]);

  return ToggleButton;
}(React.Component);

_defineProperty(ToggleButton, "defaultProps", {
  type: 'primary',
  pressed: false,
  tooltipProps: {
    mouseEnterDelay: 1.5
  },
  onToggle: function onToggle() {
    return undefined;
  }
});

_defineProperty(ToggleButton, "contextTypes", {
  toggleGroup: PropTypes.object
});

var _default = ToggleButton;
exports["default"] = _default;