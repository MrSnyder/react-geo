"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AddWmsPanel = void 0;

require("antd/es/checkbox/style");

var _checkbox = _interopRequireDefault(require("antd/es/checkbox"));

var React = _interopRequireWildcard(require("react"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _Panel = _interopRequireDefault(require("../../Panel/Panel/Panel"));

var _Titlebar = _interopRequireDefault(require("../../Panel/Titlebar/Titlebar"));

var _SimpleButton = _interopRequireDefault(require("../../Button/SimpleButton/SimpleButton"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _AddWmsLayerEntry = _interopRequireDefault(require("./AddWmsLayerEntry/AddWmsLayerEntry"));

require("./AddWmsPanel.less");

var _excluded = ["wmsLayers", "onCancel", "titleText", "cancelText", "addAllLayersText", "addSelectedLayersText", "onLayerAddToMap", "onSelectionChange"];

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
 * Panel containing a (checkable) list of AddWmsLayerEntry instances.
 * This class can be used e.g with a result obtained by ol WMS capabilities
 * parser, in particular objects in `Capability.Layer.Layer`
 *
 * @class The AddWmsPanel
 * @extends React.Component
 */
var AddWmsPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(AddWmsPanel, _React$Component);

  var _super = _createSuper(AddWmsPanel);

  /**
   * The defaultProps.
   */

  /**
   * Create an AddWmsPanel.
   * @constructs AddWmsPanel
   */
  function AddWmsPanel(props) {
    var _this;

    _classCallCheck(this, AddWmsPanel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onSelectedLayersChange", function (selectedWmsLayers) {
      var onSelectionChange = _this.props.onSelectionChange;

      if ((0, _isFunction2["default"])(onSelectionChange)) {
        onSelectionChange(selectedWmsLayers);
      }

      _this.setState({
        selectedWmsLayers: selectedWmsLayers
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onAddSelectedLayers", function () {
      var selectedWmsLayers = _this.state.selectedWmsLayers;
      var _this$props = _this.props,
          onLayerAddToMap = _this$props.onLayerAddToMap,
          map = _this$props.map;

      var filteredLayers = _this.props.wmsLayers.filter(function (layer) {
        return selectedWmsLayers.includes(layer.get('title'));
      });

      if (onLayerAddToMap) {
        onLayerAddToMap(filteredLayers);
      } else if (map) {
        filteredLayers.forEach(function (layer) {
          // Add layer to map if it is not added yet
          if (!map.getLayers().getArray().includes(layer)) {
            map.addLayer(layer);
          }
        });
      } else {
        _Logger["default"].warn('Neither map nor onLayerAddToMap given in props. Will do nothing.');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onAddAllLayers", function () {
      var _this$props2 = _this.props,
          onLayerAddToMap = _this$props2.onLayerAddToMap,
          wmsLayers = _this$props2.wmsLayers,
          map = _this$props2.map;

      if (onLayerAddToMap) {
        onLayerAddToMap(wmsLayers);
      } else if (map) {
        wmsLayers.forEach(function (layer) {
          // Add layer to map if it is not added yet
          if (!map.getLayers().getArray().includes(layer)) {
            map.addLayer(layer);
          }
        });
      } else {
        _Logger["default"].warn('Neither map nor onLayerAddToMap given in props. Will do nothing.');
      }
    });

    _this.state = {
      selectedWmsLayers: []
    };
    return _this;
  }
  /**
   * onSelectedLayersChange - set state for selectedWmsLayers
   *
   * @param selectedWmsLayers titles of selected WMS layers to set
   * in state
   */


  _createClass(AddWmsPanel, [{
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props3 = this.props,
          wmsLayers = _this$props3.wmsLayers,
          onCancel = _this$props3.onCancel,
          titleText = _this$props3.titleText,
          cancelText = _this$props3.cancelText,
          addAllLayersText = _this$props3.addAllLayersText,
          addSelectedLayersText = _this$props3.addSelectedLayersText,
          onLayerAddToMap = _this$props3.onLayerAddToMap,
          onSelectionChange = _this$props3.onSelectionChange,
          passThroughProps = _objectWithoutProperties(_this$props3, _excluded);

      var selectedWmsLayers = this.state.selectedWmsLayers;
      return wmsLayers && wmsLayers.length > 0 ? /*#__PURE__*/React.createElement(_Panel["default"], _extends({
        title: titleText,
        bounds: "#main",
        className: "add-wms-panel",
        role: "dialog"
      }, passThroughProps), /*#__PURE__*/React.createElement("div", {
        role: "list"
      }, /*#__PURE__*/React.createElement(_checkbox["default"].Group, {
        onChange: this.onSelectedLayersChange
      }, wmsLayers.map(function (layer, idx) {
        return /*#__PURE__*/React.createElement("div", {
          role: "listitem",
          key: idx
        }, /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
          wmsLayer: layer
        }));
      }))), /*#__PURE__*/React.createElement(_Titlebar["default"], {
        tools: [/*#__PURE__*/React.createElement(_SimpleButton["default"], {
          size: "small",
          key: "useSelectedBtn",
          disabled: selectedWmsLayers.length === 0,
          onClick: this.onAddSelectedLayers
        }, addSelectedLayersText), /*#__PURE__*/React.createElement(_SimpleButton["default"], {
          size: "small",
          key: "useAllBtn",
          onClick: this.onAddAllLayers
        }, addAllLayersText), onCancel ? /*#__PURE__*/React.createElement(_SimpleButton["default"], {
          size: "small",
          key: "cancelBtn",
          onClick: onCancel
        }, cancelText) : null]
      })) : null;
    }
  }]);

  return AddWmsPanel;
}(React.Component);

exports.AddWmsPanel = AddWmsPanel;

_defineProperty(AddWmsPanel, "defaultProps", {
  wmsLayers: [],
  addAllLayersText: 'Add all layers',
  addSelectedLayersText: 'Add selected layers',
  cancelText: 'Cancel',
  titleText: 'Add WMS layer'
});

var _default = AddWmsPanel;
exports["default"] = _default;