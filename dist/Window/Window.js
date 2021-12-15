"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Window = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _Panel = _interopRequireDefault(require("../Panel/Panel/Panel"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _constants = require("../constants");

require("./Window.less");

var _excluded = ["className", "children", "parentId"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
 * Window component that creates a React portal that renders children into a DOM
 * node that exists outside the DOM hierarchy of the parent component. By default,
 * Window Component is draggable.
 *
 * @class Window
 * @extends React.Component
 */
var Window = /*#__PURE__*/function (_React$Component) {
  _inherits(Window, _React$Component);

  var _super = _createSuper(Window);

  /**
   * The parent Element of the Window.
   * @private
   */

  /**
   * The Element of the Window.
   * @private
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Create a Window.
   * @constructs Window
   */
  function Window(props) {
    var _this;

    _classCallCheck(this, Window);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_parent", void 0);

    _defineProperty(_assertThisInitialized(_this), "_elementDiv", void 0);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "window-portal"));

    var parentId = _this.props.parentId;
    _this._parent = document.getElementById(parentId);

    if (!_this._parent) {
      _Logger["default"].warn('No parent element was found! Please ensure that parentId ' + 'parameter was set correctly (default value is `app`)');
    }

    var div = document.createElement('div');
    div.id = props.id;
    _this._elementDiv = div;
    _this.state = {
      id: props.id,
      resizing: false
    };
    return _this;
  }
  /**
   * The portal element is inserted in the DOM tree after
   * the Windows's children are mounted, meaning that children
   * will be mounted on a detached DOM node. If a child
   * component requires to be attached to the DOM tree
   * immediately when mounted, for example to measure a
   * DOM node, or uses 'autoFocus' in a descendant, add
   * state to Window and only render the children when Window
   * is inserted in the DOM tree.
   */


  _createClass(Window, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._parent) {
        this._parent.appendChild(this._elementDiv);
      }
    }
    /**
     * componentWillUnmount - remove child from parent element
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._parent) {
        this._parent.removeChild(this._elementDiv);
      }
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          parentId = _this$props.parentId,
          passThroughProps = _objectWithoutProperties(_this$props, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      this._elementDiv.className = finalClassName;
      return /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/React.createElement(_Panel["default"], passThroughProps, children), this._elementDiv);
    }
  }]);

  return Window;
}(React.Component);

exports.Window = Window;

_defineProperty(Window, "defaultProps", {
  parentId: 'app',
  title: 'Window',
  resizeOpts: true,
  collapsible: true,
  draggable: true,
  id: (0, _uniqueId2["default"])('window-')
});

var _default = Window;
exports["default"] = _default;