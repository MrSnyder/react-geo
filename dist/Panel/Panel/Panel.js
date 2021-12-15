"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Panel = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactRnd = require("react-rnd");

var _uniqueId2 = _interopRequireDefault(require("lodash/uniqueId"));

var _isNumber2 = _interopRequireDefault(require("lodash/isNumber"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _Titlebar = _interopRequireDefault(require("../Titlebar/Titlebar"));

var _SimpleButton = _interopRequireDefault(require("../../Button/SimpleButton/SimpleButton"));

var _constants = require("../../constants");

require("./Panel.less");

var _excluded = ["id", "className", "children", "title", "resizeOpts", "onResize", "onResizeStart", "onResizeStop", "onEscape", "draggable", "collapsible", "collapsed", "height", "width", "titleBarHeight", "collapseTooltip", "tools"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * The Panel.
 *
 * @class The Panel
 * @extends React.Component
 */
var Panel = /*#__PURE__*/function (_React$Component) {
  _inherits(Panel, _React$Component);

  var _super = _createSuper(Panel);

  /**
   * The default properties.
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   * Printed representation of the pressed escape keyboard key.
   * s. https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values
   * @private
   */

  /**
   *
   *
   */

  /**
   * Create the Panel.
   *
   * @constructs Panel
   */
  function Panel(props) {
    var _this;

    _classCallCheck(this, Panel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "panel"));

    _defineProperty(_assertThisInitialized(_this), "_escapeKeyboardEventKey", 'Esc');

    _defineProperty(_assertThisInitialized(_this), "_rnd", void 0);

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (evt) {
      var onEscape = _this.props.onEscape;

      if (evt && evt.key.startsWith(_this._escapeKeyboardEventKey) && onEscape) {
        _this._rnd.getSelfElement().focus();

        onEscape(evt);
      }
    });

    var id = props.id || (0, _uniqueId2["default"])('panel-');
    _this.state = {
      id: id,
      collapsed: _this.props.collapsible ? _this.props.collapsed : false,
      titleBarHeight: _this.props.title ? props.titleBarHeight : 0,
      height: props.height,
      width: props.width,
      resizing: false
    };
    return _this;
  }
  /**
   * componentDidMount life cycle method.
   * Registers `keydown` listener if `onEscape` function was provided via props.
   */


  _createClass(Panel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.onEscape) {
        document.addEventListener('keydown', this.onKeyDown, false);
      }
    }
    /**
     * componentWillUnmount life cycle method.
     * Unregisters `keydown` listener if `onEscape` function was provided via props.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.onEscape) {
        document.removeEventListener('keydown', this.onKeyDown, false);
      }
    }
    /**
     * Calculates the height of the Panel and returns a number.
     */

  }, {
    key: "calculateHeight",
    value: function calculateHeight() {
      return this.state.collapsed ? this.state.titleBarHeight : this.state.height;
    }
    /**
     * Calculates the height of the Panel body and returns a valid css height
     * expression.
     */

  }, {
    key: "calculateBodyHeight",
    value: function calculateBodyHeight() {
      if (this.state.collapsed) {
        return '0px';
      } else {
        return (0, _isNumber2["default"])(this.state.height) ? this.state.height - this.state.titleBarHeight + 'px' : this.state.height;
      }
    }
    /**
     * Toggles the collapse state of the panel.
     */

  }, {
    key: "toggleCollapse",
    value: function toggleCollapse() {
      var _this2 = this;

      this.setState({
        collapsed: !this.state.collapsed
      }, function () {
        _this2._rnd.updateSize({
          height: _this2.calculateHeight(),
          width: _this2.state.width
        });
      });
    }
    /**
     * Function called while resizing.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     * @param delta The delta of the resizing.
     * @param position The position of the resizing.
     */

  }, {
    key: "onResize",
    value: function onResize(evt, direction, el, delta, position) {
      var onResize = this.props.onResize;

      if ((0, _isFunction2["default"])(onResize)) {
        onResize(evt, direction, el, delta, position);
      }

      this.setState({
        height: el.clientHeight,
        width: el.clientWidth
      });
    }
    /**
     * Function called when resizing is started.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     */

  }, {
    key: "onResizeStart",
    value: function onResizeStart(evt, direction, el) {
      var onResizeStart = this.props.onResizeStart;

      if ((0, _isFunction2["default"])(onResizeStart)) {
        onResizeStart(evt, direction, el);
      }

      this.setState({
        resizing: true
      });
    }
    /**
     * Function called when resizing is stopped.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     * @param delta The delta of the resizing.
     * @param position The position of the resizing.
     */

  }, {
    key: "onResizeStop",
    value: function onResizeStop(evt, direction, el, delta, position) {
      var onResizeStop = this.props.onResizeStop;

      if ((0, _isFunction2["default"])(onResizeStop)) {
        onResizeStop(evt, direction, el, delta, position);
      }

      this.setState({
        resizing: false
      });
    }
    /**
     * Called on keyboard `keydown` event. Will be only triggered if pressed key
     * is `Escape` key and `onEscape` function is provided via props.
     * @param evt `keydown` event.
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this3 = this;

      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          children = _this$props.children,
          title = _this$props.title,
          resizeOpts = _this$props.resizeOpts,
          onResize = _this$props.onResize,
          onResizeStart = _this$props.onResizeStart,
          onResizeStop = _this$props.onResizeStop,
          onEscape = _this$props.onEscape,
          draggable = _this$props.draggable,
          collapsible = _this$props.collapsible,
          collapsed = _this$props.collapsed,
          height = _this$props.height,
          width = _this$props.width,
          titleBarHeight = _this$props.titleBarHeight,
          collapseTooltip = _this$props.collapseTooltip,
          tools = _this$props.tools,
          rndOpts = _objectWithoutProperties(_this$props, _excluded);

      var toolsClone = tools.map(function (tool) {
        return /*#__PURE__*/React.cloneElement(tool);
      });
      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      var rndClassName = "".concat(finalClassName, " ").concat(this.state.id);
      var enableResizing = resizeOpts === true ? undefined : resizeOpts;

      if (collapsible) {
        toolsClone.unshift( /*#__PURE__*/React.createElement(_SimpleButton["default"], {
          iconName: "compress",
          key: "collapse-tool",
          onClick: this.toggleCollapse.bind(this),
          tooltip: collapseTooltip,
          size: "small"
        }));
      }

      var titleBarClassName = draggable ? 'drag-handle ant-modal-header' : 'ant-modal-header';
      var titleBar = title ? /*#__PURE__*/React.createElement(_Titlebar["default"], {
        className: titleBarClassName,
        tools: toolsClone,
        style: {
          height: this.state.titleBarHeight,
          cursor: draggable ? 'move' : 'default'
        }
      }, title) : null;
      var defaultWidth = this.state.width;
      var defaultHeight = this.calculateHeight();
      var x = rndOpts.x,
          y = rndOpts.y;
      var defX = x && (0, _isNumber2["default"])(x) ? x : (0, _isNumber2["default"])(defaultWidth) ? window.innerWidth / 2 - defaultWidth / 2 : undefined;
      var defY = y && (0, _isNumber2["default"])(y) ? y : (0, _isNumber2["default"])(defaultHeight) ? window.innerHeight / 2 - defaultHeight / 2 : undefined;
      return /*#__PURE__*/React.createElement(_reactRnd.Rnd, _extends({
        className: rndClassName,
        ref: function ref(rnd) {
          return _this3._rnd = rnd;
        },
        "default": {
          x: defX,
          y: defY,
          width: defaultWidth,
          height: defaultHeight
        },
        dragHandleClassName: "drag-handle",
        disableDragging: !draggable,
        enableResizing: enableResizing,
        resizeHandleClasses: {
          bottom: 'resize-handle resize-handle-bottom',
          bottomLeft: 'resize-handle resize-handle-bottom-left',
          bottomRight: 'resize-handle resize-handle-bottom-right',
          left: 'resize-handle resize-handle-left',
          right: 'resize-handle resize-handle-right',
          top: 'resize-handle resize-handle-top',
          topLeft: 'resize-handle resize-handle-top-left',
          topRight: 'resize-handle resize-handle-top-right'
        },
        onResize: this.onResize.bind(this),
        onResizeStart: this.onResizeStart.bind(this),
        onResizeStop: this.onResizeStop.bind(this),
        cancel: ".react-geo-titlebar .controls"
      }, rndOpts), titleBar, /*#__PURE__*/React.createElement("div", {
        className: "body",
        tabIndex: 0,
        style: {
          cursor: 'default',
          overflow: 'hidden',
          height: this.calculateBodyHeight(),
          transition: this.state.resizing ? '' : 'height 0.25s'
        }
      }, children));
    }
  }]);

  return Panel;
}(React.Component);

exports.Panel = Panel;

_defineProperty(Panel, "defaultProps", {
  draggable: false,
  collapsible: false,
  collapsed: false,
  resizeOpts: false,
  titleBarHeight: 37.5,
  tools: [],
  height: 'auto',
  width: 'auto',
  collapseTooltip: 'Collapse'
});

var _default = Panel;
exports["default"] = _default;