"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AddWmsLayerEntry = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

require("antd/es/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/es/tooltip"));

var React = _interopRequireWildcard(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

require("./AddWmsLayerEntry.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
 * Class representing a layer parsed from capabilities document.
 * This componment is used in AddWmsPanel
 *
 * @class AddWmsLayerEntry
 * @extends React.Component
 */
var AddWmsLayerEntry = /*#__PURE__*/function (_React$Component) {
  _inherits(AddWmsLayerEntry, _React$Component);

  var _super = _createSuper(AddWmsLayerEntry);

  /**
   * The defaultProps.
   */

  /**
   * Create the AddWmsLayerEntry.
   *
   * @constructs AddWmsLayerEntry
   */
  function AddWmsLayerEntry(props) {
    var _this;

    _classCallCheck(this, AddWmsLayerEntry);

    _this = _super.call(this, props); // TODO: getAttributions is not @api and returns a function in v6.5

    _this.state = {
      copyright: props.wmsLayer.getSource().getAttributions(),
      queryable: props.wmsLayer.get('queryable')
    };
    return _this;
  }
  /**
   * The render function
   */


  _createClass(AddWmsLayerEntry, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wmsLayer = _this$props.wmsLayer,
          layerTextTemplateFn = _this$props.layerTextTemplateFn,
          layerQueryableText = _this$props.layerQueryableText;
      var _this$state = this.state,
          copyright = _this$state.copyright,
          queryable = _this$state.queryable;
      var title = wmsLayer.get('title');
      var layerTextSpan = layerTextTemplateFn(wmsLayer);
      return /*#__PURE__*/React.createElement(_checkbox["default"], {
        value: title,
        className: "add-wms-layer-checkbox-line"
      }, /*#__PURE__*/React.createElement("div", {
        className: "add-wms-layer-entry"
      }, layerTextSpan, copyright ? /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "add-wms-add-info-icon",
        icon: "copyright",
        "aria-label": "attribution-info"
      }) : null, queryable ? /*#__PURE__*/React.createElement(_tooltip["default"], {
        title: layerQueryableText
      }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "add-wms-add-info-icon",
        icon: "info",
        "aria-label": "queryable-info"
      })) : null));
    }
  }]);

  return AddWmsLayerEntry;
}(React.Component);

exports.AddWmsLayerEntry = AddWmsLayerEntry;

_defineProperty(AddWmsLayerEntry, "defaultProps", {
  layerQueryableText: 'Layer is queryable',
  layerTextTemplateFn: function layerTextTemplateFn(wmsLayer) {
    var title = wmsLayer.get('title');

    var _abstract = wmsLayer.get('abstract');

    var abstractTextSpan = _abstract ? /*#__PURE__*/React.createElement("span", null, "".concat(title, " - ").concat(_abstract, ":")) : /*#__PURE__*/React.createElement("span", null, "".concat(title));
    return abstractTextSpan;
  }
});

var _default = AddWmsLayerEntry;
exports["default"] = _default;