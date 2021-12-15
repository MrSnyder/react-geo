"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var React = _interopRequireWildcard(require("react"));

var _Draw = _interopRequireWildcard(require("ol/interaction/Draw"));

var OlEventConditions = _interopRequireWildcard(require("ol/events/condition"));

var _Observable = require("ol/Observable");

var _StringUtil = _interopRequireDefault(require("@terrestris/base-util/dist/StringUtil/StringUtil"));

var _ToggleButton = _interopRequireDefault(require("../ToggleButton/ToggleButton"));

var _constants = require("../../constants");

var _useMap = require("../../Hook/useMap");

var _DigitizeUtil = require("../../Util/DigitizeUtil");

var _excluded = ["modalPromptTitle", "modalPromptOkButtonText", "modalPromptCancelButtonText", "drawInteractionConfig", "onToggle", "className", "drawType", "onDrawEnd", "onDrawStart", "onModalLabelOk", "onModalLabelCancel", "maxLabelLineLength", "digitizeLayer", "drawStyle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextArea = _input["default"].TextArea;

/**
 * The className added to this component.
 */
var defaultClassName = "".concat(_constants.CSS_PREFIX, "drawbutton");
/**
 * The DrawButton.
 */

var DrawButton = function DrawButton(_ref) {
  var _ref$modalPromptTitle = _ref.modalPromptTitle,
      modalPromptTitle = _ref$modalPromptTitle === void 0 ? 'Label' : _ref$modalPromptTitle,
      _ref$modalPromptOkBut = _ref.modalPromptOkButtonText,
      modalPromptOkButtonText = _ref$modalPromptOkBut === void 0 ? 'Ok' : _ref$modalPromptOkBut,
      _ref$modalPromptCance = _ref.modalPromptCancelButtonText,
      modalPromptCancelButtonText = _ref$modalPromptCance === void 0 ? 'Cancel' : _ref$modalPromptCance,
      drawInteractionConfig = _ref.drawInteractionConfig,
      onToggle = _ref.onToggle,
      className = _ref.className,
      drawType = _ref.drawType,
      onDrawEnd = _ref.onDrawEnd,
      onDrawStart = _ref.onDrawStart,
      onModalLabelOk = _ref.onModalLabelOk,
      onModalLabelCancel = _ref.onModalLabelCancel,
      maxLabelLineLength = _ref.maxLabelLineLength,
      digitizeLayer = _ref.digitizeLayer,
      drawStyle = _ref.drawStyle,
      passThroughProps = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0, React.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showLabelPrompt = _useState2[0],
      setShowLabelPrompt = _useState2[1];

  var _useState3 = (0, React.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      textLabel = _useState4[0],
      setTextLabel = _useState4[1];

  var _useState5 = (0, React.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      drawInteraction = _useState6[0],
      setDrawInteraction = _useState6[1];

  var _useState7 = (0, React.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      layer = _useState8[0],
      setLayer = _useState8[1];

  var map = (0, _useMap.useMap)();
  (0, React.useEffect)(function () {
    if (!map) {
      return;
    }

    if (digitizeLayer) {
      setLayer(digitizeLayer);
    } else {
      setLayer(_DigitizeUtil.DigitizeUtil.getDigitizeLayer(map));
    }
  }, [map, digitizeLayer]);
  (0, React.useEffect)(function () {
    if (!map || !layer) {
      return undefined;
    }

    var geometryFunction;
    var type = drawType;

    if (drawType === 'Rectangle') {
      geometryFunction = (0, _Draw.createBox)();
      type = 'Circle';
    } else if (drawType === 'Text') {
      type = 'Point';
    }

    var newInteraction = new _Draw["default"](_objectSpread({
      source: layer.getSource(),
      type: type,
      geometryFunction: geometryFunction,
      style: drawStyle !== null && drawStyle !== void 0 ? drawStyle : _DigitizeUtil.DigitizeUtil.defaultDigitizeStyleFunction,
      freehandCondition: OlEventConditions.never
    }, drawInteractionConfig !== null && drawInteractionConfig !== void 0 ? drawInteractionConfig : {}));
    newInteraction.set('name', "react-geo-draw-interaction-".concat(drawType));
    newInteraction.setActive(false);
    map.addInteraction(newInteraction);
    setDrawInteraction(newInteraction);
    var key;

    if (drawType === 'Text') {
      key = newInteraction.on('drawend', function (evt) {
        setShowLabelPrompt(true);
        evt.feature.set('isLabel', true);
        setDigitizeTextFeature(evt.feature);
      });
    }

    return function () {
      (0, _Observable.unByKey)(key);
      map.removeInteraction(newInteraction);
    };
  }, [drawType, layer, drawInteractionConfig, drawStyle, map]);
  (0, React.useEffect)(function () {
    if (!drawInteraction) {
      return undefined;
    }

    var keys = [];
    keys.push(drawInteraction.on('drawend', function (evt) {
      onDrawEnd === null || onDrawEnd === void 0 ? void 0 : onDrawEnd(evt);
    }));
    keys.push(drawInteraction.on('drawstart', function (evt) {
      onDrawStart === null || onDrawStart === void 0 ? void 0 : onDrawStart(evt);
    }));
    return function () {
      var _iterator = _createForOfIteratorHelper(keys),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;
          (0, _Observable.unByKey)(key);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };
  }, [drawInteraction, onDrawStart, onDrawEnd]);
  /**
   * Currently drawn feature which should be represent as label or postit.
   */

  var _useState9 = (0, React.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      digitizeTextFeature = _useState10[0],
      setDigitizeTextFeature = _useState10[1];
  /**
   * Called when the draw button is toggled. If the button state is pressed,
   * the appropriate draw interaction will be activated.
   *
   * @param pressed Whether the draw button is pressed or not.
   * @param lastClickEvent
   */


  var onToggleInternal = function onToggleInternal(pressed, lastClickEvent) {
    drawInteraction.setActive(pressed);
    onToggle === null || onToggle === void 0 ? void 0 : onToggle(pressed, lastClickEvent);
  };
  /**
   * Callback function after `Ok` button of label input modal was clicked.
   * Turns visibility of modal off and call `setTextOnFeature` method.
   */


  var onModalLabelOkInternal = function onModalLabelOkInternal() {
    setShowLabelPrompt(false);
    var label = textLabel;

    if (maxLabelLineLength) {
      label = _StringUtil["default"].stringDivider(textLabel, maxLabelLineLength, '\n');
    }

    digitizeTextFeature.set('label', label);
    setTextLabel('');
    onModalLabelOk === null || onModalLabelOk === void 0 ? void 0 : onModalLabelOk(digitizeTextFeature);
  };
  /**
   * Callback function after `Cancel` button of label input modal was clicked.
   * Turns visibility of modal off and removes last drawn feature from the
   * digitize layer.
   */


  var onModalLabelCancelInternal = function onModalLabelCancelInternal(event) {
    setShowLabelPrompt(false);
    setTextLabel('');
    layer.getSource().removeFeature(digitizeTextFeature);
    onModalLabelCancel === null || onModalLabelCancel === void 0 ? void 0 : onModalLabelCancel(event);
  };

  var finalClassName = className ? "".concat(defaultClassName, " ").concat(className) : defaultClassName;
  var btnWrapperClass = "".concat(_constants.CSS_PREFIX, "digitize-button-wrapper");
  return /*#__PURE__*/React.createElement("span", {
    className: btnWrapperClass
  }, /*#__PURE__*/React.createElement(_ToggleButton["default"], _extends({
    onToggle: onToggleInternal,
    className: finalClassName
  }, passThroughProps)), showLabelPrompt && /*#__PURE__*/React.createElement(_modal["default"], {
    title: modalPromptTitle,
    okText: modalPromptOkButtonText,
    cancelText: modalPromptCancelButtonText,
    visible: showLabelPrompt,
    closable: false,
    onOk: onModalLabelOkInternal,
    onCancel: onModalLabelCancelInternal
  }, /*#__PURE__*/React.createElement(TextArea, {
    value: textLabel,
    onChange: function onChange(e) {
      return setTextLabel(e.target.value);
    },
    autoSize: true
  })));
};

var _default = DrawButton;
exports["default"] = _default;