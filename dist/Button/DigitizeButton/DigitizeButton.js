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

var _Vector = _interopRequireDefault(require("ol/layer/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/source/Vector"));

var _Collection = _interopRequireDefault(require("ol/Collection"));

var _Style = _interopRequireDefault(require("ol/style/Style"));

var _Stroke = _interopRequireDefault(require("ol/style/Stroke"));

var _Fill = _interopRequireDefault(require("ol/style/Fill"));

var _Circle = _interopRequireDefault(require("ol/style/Circle"));

var _Text = _interopRequireDefault(require("ol/style/Text"));

var _Draw = _interopRequireWildcard(require("ol/interaction/Draw"));

var _Select = _interopRequireDefault(require("ol/interaction/Select"));

var _Modify = _interopRequireDefault(require("ol/interaction/Modify"));

var _Translate = _interopRequireDefault(require("ol/interaction/Translate"));

var OlEventConditions = _interopRequireWildcard(require("ol/events/condition"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _ToggleButton = _interopRequireDefault(require("../ToggleButton/ToggleButton"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

var _StringUtil = _interopRequireDefault(require("@terrestris/base-util/dist/StringUtil/StringUtil"));

var _AnimateUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/AnimateUtil/AnimateUtil"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _constants = require("../../constants");

var _excluded = ["className", "map", "drawType", "editType", "digitizeLayerName", "drawStyle", "selectFillColor", "selectStrokeColor", "modalPromptTitle", "modalPromptOkButtonText", "modalPromptCancelButtonText", "onDrawStart", "onDrawEnd", "onModifyStart", "onModifyEnd", "onTranslateStart", "onTranslateEnd", "onTranslating", "onFeatureRemove", "onFeatureCopy", "onFeatureSelect", "drawInteractionConfig", "selectInteractionConfig", "modifyInteractionConfig", "translateInteractionConfig", "onToggle", "onModalLabelOk", "onModalLabelCancel", "maxLabelLineLength"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var TextArea = _input["default"].TextArea;

/**
 * The DigitizeButton.
 *
 * @class The DigitizeButton
 * @extends React.Component
 * @deprecated Please make use of the DrawButton component instead.
 */
var DigitizeButton = /*#__PURE__*/function (_React$Component) {
  _inherits(DigitizeButton, _React$Component);

  var _super = _createSuper(DigitizeButton);

  /**
   * Name of point draw type.
   * @private
   */

  /**
   * Name of line string draw type.
   * @private
   */

  /**
   * Name of polygon draw type.
   * @private
   */

  /**
   * Name of circle draw type.
   * @private
   */

  /**
   * Name of rectangle draw type.
   * @private
   */

  /**
   * Name of text draw type.
   * @private
   */

  /**
   * Name of copy edit type.
   * @private
   */

  /**
   * Name of edit edit type.
   * @private
   */

  /**
   * Name of delete edit type.
   * @private
   */

  /**
   * Default fill color used in style object of drawn features.
   */

  /**
   * Default stroke color used in style object of drawn features.
   */

  /**
   * Hit detection in pixels used for select interaction.
   */

  /**
   * Default style for digitized points.
   */

  /**
   * Default style for digitized lines.
   */

  /**
   * Default style for digitized polygons or circles.
   */

  /**
   * Default style for digitized labels.
   */

  /**
   * The default properties.
   */

  /**
   * The className added to this component.
   *
   * @private
   */

  /**
   * Currently existing digitize features as collection.
   *
   * @private
   */

  /**
   * The layer used for the digitization.
   *
   * @private
   */

  /**
   * Currently drawn feature which should be represent as label or postit.
   * @private
   */

  /**
   * The draw interaction.
   * @private
   */

  /**
   * The select interaction.
   * @private
   */

  /**
   * The modify interaction.
   * @private
   */

  /**
   * The translate interaction.
   * @private
   */

  /**
   * Creates the DigitizeButton.
   *
   * @constructs DigitizeButton
   */
  function DigitizeButton(props) {
    var _this;

    _classCallCheck(this, DigitizeButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "digitizebutton"));

    _defineProperty(_assertThisInitialized(_this), "_digitizeFeatures", null);

    _defineProperty(_assertThisInitialized(_this), "_digitizeLayer", null);

    _defineProperty(_assertThisInitialized(_this), "_digitizeTextFeature", null);

    _defineProperty(_assertThisInitialized(_this), "_drawInteraction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_selectInteraction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_modifyInteraction", void 0);

    _defineProperty(_assertThisInitialized(_this), "_translateInteraction", void 0);

    _defineProperty(_assertThisInitialized(_this), "onToggle", function (pressed) {
      var _this$props = _this.props,
          map = _this$props.map,
          drawType = _this$props.drawType,
          editType = _this$props.editType;

      if (drawType) {
        if (_this._drawInteraction) {
          _this._drawInteraction.setActive(pressed);
        }
      } else if (editType) {
        if (_this._selectInteraction) {
          _this._selectInteraction.setActive(pressed);
        }

        if (_this._modifyInteraction) {
          _this._modifyInteraction.setActive(pressed);
        }

        if (_this._translateInteraction) {
          _this._translateInteraction.setActive(pressed);
        }

        if (pressed) {
          map.on('pointermove', _this.onPointerMove);
        } else {
          map.un('pointermove', _this.onPointerMove);
        }
      }

      _this.props.onToggle(pressed);
    });

    _defineProperty(_assertThisInitialized(_this), "createDigitizeLayer", function () {
      var _this$props2 = _this.props,
          digitizeLayerName = _this$props2.digitizeLayerName,
          map = _this$props2.map;

      var digitizeLayer = _MapUtil["default"].getLayerByName(map, digitizeLayerName);

      if (!digitizeLayer) {
        digitizeLayer = new _Vector["default"]({
          source: new _Vector2["default"]({
            features: new _Collection["default"]()
          })
        });
        digitizeLayer.set('name', digitizeLayerName);
        map.addLayer(digitizeLayer);
      }

      digitizeLayer.setStyle(_this.digitizeStyleFunction);
      _this._digitizeLayer = digitizeLayer;
      _this._digitizeFeatures = digitizeLayer.getSource().getFeaturesCollection();
    });

    _defineProperty(_assertThisInitialized(_this), "digitizeStyleFunction", function (feature) {
      var drawStyle = _this.props.drawStyle;

      if (!feature.getGeometry()) {
        return null;
      }

      if (drawStyle) {
        return (0, _isFunction2["default"])(drawStyle) ? drawStyle(feature) : drawStyle;
      }

      switch (feature.getGeometry().getType()) {
        case DigitizeButton.POINT_DRAW_TYPE:
          {
            if (!feature.get('isLabel')) {
              return new _Style["default"]({
                image: new _Circle["default"]({
                  radius: 7,
                  fill: new _Fill["default"]({
                    color: DigitizeButton.DEFAULT_FILL_COLOR
                  }),
                  stroke: new _Stroke["default"]({
                    color: DigitizeButton.DEFAULT_STROKE_COLOR
                  })
                })
              });
            } else {
              return new _Style["default"]({
                text: new _Text["default"]({
                  text: feature.get('label'),
                  offsetX: 5,
                  offsetY: 5,
                  font: '12px sans-serif',
                  fill: new _Fill["default"]({
                    color: DigitizeButton.DEFAULT_FILL_COLOR
                  }),
                  stroke: new _Stroke["default"]({
                    color: DigitizeButton.DEFAULT_STROKE_COLOR
                  })
                })
              });
            }
          }

        case DigitizeButton.LINESTRING_DRAW_TYPE:
          {
            return new _Style["default"]({
              stroke: new _Stroke["default"]({
                color: DigitizeButton.DEFAULT_STROKE_COLOR,
                width: 2
              })
            });
          }

        case DigitizeButton.POLYGON_DRAW_TYPE:
        case DigitizeButton.CIRCLE_DRAW_TYPE:
          {
            return new _Style["default"]({
              fill: new _Fill["default"]({
                color: DigitizeButton.DEFAULT_FILL_COLOR
              }),
              stroke: new _Stroke["default"]({
                color: DigitizeButton.DEFAULT_STROKE_COLOR,
                width: 2
              })
            });
          }

        default:
          return null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectedStyleFunction", function (feature, res, text) {
      var _this$props3 = _this.props,
          selectFillColor = _this$props3.selectFillColor,
          selectStrokeColor = _this$props3.selectStrokeColor;

      if (feature.get('label')) {
        text = feature.get('label');
      }

      return new _Style["default"]({
        image: new _Circle["default"]({
          radius: 7,
          fill: new _Fill["default"]({
            color: selectFillColor
          }),
          stroke: new _Stroke["default"]({
            color: selectStrokeColor
          })
        }),
        text: new _Text["default"]({
          text: text ? text : '',
          offsetX: 5,
          offsetY: 5,
          font: '12px sans-serif',
          fill: new _Fill["default"]({
            color: selectFillColor
          }),
          stroke: new _Stroke["default"]({
            color: selectStrokeColor
          })
        }),
        stroke: new _Stroke["default"]({
          color: selectStrokeColor,
          width: 2
        }),
        fill: new _Fill["default"]({
          color: selectFillColor
        })
      });
    });

    _defineProperty(_assertThisInitialized(_this), "createDrawInteraction", function () {
      var _this$props4 = _this.props,
          drawType = _this$props4.drawType,
          map = _this$props4.map,
          drawInteractionConfig = _this$props4.drawInteractionConfig;
      var geometryFunction;

      if (!drawType) {
        return;
      }

      var drawInteractionName = "react-geo-draw-interaction-".concat(drawType);

      var drawInteraction = _MapUtil["default"].getInteractionsByName(map, drawInteractionName)[0];

      if (!drawInteraction) {
        var type = drawType;

        if (drawType === DigitizeButton.RECTANGLE_DRAW_TYPE) {
          geometryFunction = (0, _Draw.createBox)();
          type = DigitizeButton.CIRCLE_DRAW_TYPE;
        } else if (drawType === DigitizeButton.TEXT_DRAW_TYPE) {
          type = DigitizeButton.POINT_DRAW_TYPE;
        }

        drawInteraction = new _Draw["default"](_objectSpread({
          source: _this._digitizeLayer.getSource(),
          type: type,
          geometryFunction: geometryFunction,
          style: _this.digitizeStyleFunction,
          freehandCondition: OlEventConditions.never
        }, drawInteractionConfig));
        drawInteraction.set('name', drawInteractionName);

        if (drawType === DigitizeButton.TEXT_DRAW_TYPE) {
          drawInteraction.on('drawend', _this.handleTextAdding);
        }

        drawInteraction.on('drawend', function (evt) {
          var onDrawEnd = _this.getOnDrawEnd();

          if (onDrawEnd) {
            onDrawEnd(evt);
          }
        });
        drawInteraction.on('drawstart', function (evt) {
          var onDrawStart = _this.getOnDrawStart();

          if (onDrawStart) {
            onDrawStart(evt);
          }
        });
        drawInteraction.setActive(false);
        map.addInteraction(drawInteraction);
      }

      _this._drawInteraction = drawInteraction;
    });

    _defineProperty(_assertThisInitialized(_this), "createSelectInteraction", function () {
      var _this$props5 = _this.props,
          editType = _this$props5.editType,
          map = _this$props5.map,
          selectInteractionConfig = _this$props5.selectInteractionConfig,
          onFeatureSelect = _this$props5.onFeatureSelect;

      if (!editType) {
        return;
      }

      var selectInteractionName = "react-geo-select-interaction-".concat(editType);

      var selectInteraction = _MapUtil["default"].getInteractionsByName(map, selectInteractionName)[0];

      if (!selectInteraction) {
        selectInteraction = new _Select["default"](_objectSpread({
          condition: OlEventConditions.singleClick,
          hitTolerance: DigitizeButton.HIT_TOLERANCE,
          style: _this.selectedStyleFunction
        }, selectInteractionConfig));
        selectInteraction.set('name', selectInteractionName);
        selectInteraction.setActive(false);
        map.addInteraction(selectInteraction);
      }

      _this._selectInteraction = selectInteraction;

      if (editType === DigitizeButton.DELETE_EDIT_TYPE) {
        _this._selectInteraction.on('select', _this.onFeatureRemove);
      } else if (editType === DigitizeButton.COPY_EDIT_TYPE) {
        _this._selectInteraction.on('select', _this.onFeatureCopy);
      }

      if ((0, _isFunction2["default"])(onFeatureSelect) && editType === DigitizeButton.EDIT_EDIT_TYPE) {
        _this._selectInteraction.on('select', onFeatureSelect);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createModifyInteraction", function () {
      var _this$props6 = _this.props,
          editType = _this$props6.editType,
          map = _this$props6.map,
          modifyInteractionConfig = _this$props6.modifyInteractionConfig;

      if (!editType || editType !== DigitizeButton.EDIT_EDIT_TYPE) {
        return;
      }

      var modifyInteractionName = "react-geo-modify-interaction-".concat(editType);

      var modifyInteraction = _MapUtil["default"].getInteractionsByName(map, modifyInteractionName)[0];

      if (!modifyInteraction) {
        modifyInteraction = new _Modify["default"](_objectSpread({
          features: _this._selectInteraction.getFeatures(),
          deleteCondition: OlEventConditions.singleClick,
          style: _this.selectedStyleFunction
        }, modifyInteractionConfig));
        modifyInteraction.set('name', modifyInteractionName);
        modifyInteraction.on('modifystart', _this.onModifyStart);
        modifyInteraction.on('modifyend', _this.onModifyEnd);
        modifyInteraction.setActive(false);
        map.addInteraction(modifyInteraction);
      }

      _this._modifyInteraction = modifyInteraction;
    });

    _defineProperty(_assertThisInitialized(_this), "createTranslateInteraction", function () {
      var _this$props7 = _this.props,
          editType = _this$props7.editType,
          map = _this$props7.map,
          translateInteractionConfig = _this$props7.translateInteractionConfig;

      if (!editType || editType !== DigitizeButton.EDIT_EDIT_TYPE) {
        return;
      }

      var translateInteractionName = "react-geo-translate-interaction-".concat(editType);

      var translateInteraction = _MapUtil["default"].getInteractionsByName(map, translateInteractionName)[0];

      if (!translateInteraction) {
        translateInteraction = new _Translate["default"](_objectSpread({
          features: _this._selectInteraction.getFeatures()
        }, translateInteractionConfig));
        translateInteraction.set('name', translateInteractionName);
        translateInteraction.on('translatestart', _this.onTranslateStart);
        translateInteraction.on('translateend', _this.onTranslateEnd);
        translateInteraction.on('translating', _this.onTranslating);
        translateInteraction.setActive(false);
        map.addInteraction(translateInteraction);
      }

      _this._translateInteraction = translateInteraction;
    });

    _defineProperty(_assertThisInitialized(_this), "onFeatureRemove", function (evt) {
      var _this$props8 = _this.props,
          onFeatureRemove = _this$props8.onFeatureRemove,
          onFeatureSelect = _this$props8.onFeatureSelect;

      if ((0, _isFunction2["default"])(onFeatureSelect)) {
        onFeatureSelect(evt);
      }

      var feat = evt.selected[0];

      _this._selectInteraction.getFeatures().remove(feat);

      _this._digitizeLayer.getSource().removeFeature(feat);

      if ((0, _isFunction2["default"])(onFeatureRemove)) {
        onFeatureRemove(evt);
      }

      _this.props.map.renderSync();
    });

    _defineProperty(_assertThisInitialized(_this), "onFeatureCopy", function (evt) {
      var _this$props9 = _this.props,
          map = _this$props9.map,
          onFeatureCopy = _this$props9.onFeatureCopy,
          onFeatureSelect = _this$props9.onFeatureSelect;
      var feat = evt.selected[0];

      if (!feat) {
        return;
      }

      if ((0, _isFunction2["default"])(onFeatureCopy)) {
        onFeatureCopy(evt);
      }

      if ((0, _isFunction2["default"])(onFeatureSelect)) {
        onFeatureSelect(evt);
      }

      var copy = feat.clone();
      copy.setStyle(_this.digitizeStyleFunction);

      _this._digitizeFeatures.push(copy);

      _AnimateUtil["default"].moveFeature(map, _this._digitizeLayer, copy, 500, 50, _this.digitizeStyleFunction(feat));
    });

    _defineProperty(_assertThisInitialized(_this), "onModifyStart", function (evt) {
      var onModifyStart = _this.props.onModifyStart;

      if ((0, _isFunction2["default"])(onModifyStart)) {
        onModifyStart(evt);
      }

      var feature = evt.features.getArray()[0];

      if (feature.get('isLabel')) {
        _this._digitizeTextFeature = feature;
        var textLabel = '';

        var featureStyle = _this.digitizeStyleFunction(feature);

        if (featureStyle && featureStyle.getText()) {
          textLabel = featureStyle.getText().getText();
        } else if (feature.get('label')) {
          textLabel = feature.get('label');
        }

        _this.setState({
          showLabelPrompt: true,
          textLabel: textLabel
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onModifyEnd", function (evt) {
      var onModifyEnd = _this.props.onModifyEnd;

      if ((0, _isFunction2["default"])(onModifyEnd)) {
        onModifyEnd(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTranslateStart", function (evt) {
      var onTranslateStart = _this.props.onTranslateStart;

      if ((0, _isFunction2["default"])(onTranslateStart)) {
        onTranslateStart(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTranslateEnd", function (evt) {
      var onTranslateEnd = _this.props.onTranslateEnd;

      if ((0, _isFunction2["default"])(onTranslateEnd)) {
        onTranslateEnd(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTranslating", function (evt) {
      var onTranslating = _this.props.onTranslating;

      if ((0, _isFunction2["default"])(onTranslating)) {
        onTranslating(evt);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextAdding", function (evt) {
      _this.setState({
        showLabelPrompt: true
      });

      _this._digitizeTextFeature = evt.feature;

      _this._digitizeTextFeature.set('isLabel', true);
    });

    _defineProperty(_assertThisInitialized(_this), "onModalLabelOk", function () {
      var onModalLabelOk = _this.props.onModalLabelOk;

      _this.setState({
        showLabelPrompt: false
      }, function () {
        _this.setTextOnFeature(_this._digitizeTextFeature, onModalLabelOk);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onModalLabelCancel", function (event) {
      var onModalLabelCancel = _this.props.onModalLabelCancel;

      _this.setState({
        showLabelPrompt: false,
        textLabel: ''
      }, function () {
        if ((0, _isFunction2["default"])(onModalLabelCancel)) {
          onModalLabelCancel(event);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setTextOnFeature", function (feature, onModalOkCbk) {
      var maxLabelLineLength = _this.props.maxLabelLineLength;
      var textLabel = _this.state.textLabel;
      var label = textLabel;

      if (maxLabelLineLength) {
        label = _StringUtil["default"].stringDivider(textLabel, maxLabelLineLength, '\n');
      }

      feature.set('label', label);

      _this.setState({
        textLabel: ''
      }, function () {
        if ((0, _isFunction2["default"])(onModalOkCbk)) {
          onModalOkCbk(feature, label);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLabelChange", function (evt) {
      _this.setState({
        textLabel: evt.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPointerMove", function (evt) {
      if (evt.dragging) {
        return;
      }

      var _this$props10 = _this.props,
          map = _this$props10.map,
          digitizeLayerName = _this$props10.digitizeLayerName;
      var pixel = map.getEventPixel(evt.originalEvent);
      var hit = map.hasFeatureAtPixel(pixel, {
        layerFilter: function layerFilter(l) {
          return l.get('name') === digitizeLayerName;
        },
        hitTolerance: DigitizeButton.HIT_TOLERANCE
      });
      map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });

    if (!props.drawType && !props.editType) {
      _Logger["default"].warn('Neither "drawType" nor "editType" was provided. Digitize ' + 'button won\'t work properly!');
    }

    _this.state = {
      showLabelPrompt: false,
      textLabel: ''
    };
    return _this;
  }
  /**
   * `componentDidMount` method of the DigitizeButton.
   */


  _createClass(DigitizeButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createDigitizeLayer();
      this.createDrawInteraction();
      this.createSelectInteraction();
      this.createModifyInteraction();
      this.createTranslateInteraction();
    }
    /**
     * Called on componentWillUnmount lifecycle.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var map = this.props.map;
      map.removeInteraction(this._drawInteraction);
      map.removeInteraction(this._selectInteraction);
      map.removeInteraction(this._modifyInteraction);
      map.removeInteraction(this._translateInteraction);
      map.un('pointermove', this.onPointerMove);
    }
    /**
     * Called when the digitize button is toggled. If the button state is pressed,
     * the appropriate draw, modify or select interaction will be created.
     * Otherwise, by untoggling, the same previously created interaction will be
     * removed from the map.
     *
     * @param pressed Whether the digitize button is pressed or not.
     */

  }, {
    key: "getOnDrawEnd",
    value:
    /**
     *
     * @return Function for drawEnd.
     */
    function getOnDrawEnd() {
      return this.props.onDrawEnd;
    }
    /**
     *
     * @return Function for drawStart.
     */

  }, {
    key: "getOnDrawStart",
    value: function getOnDrawStart() {
      return this.props.onDrawStart;
    }
    /**
     * Creates a correctly configured OL draw interaction depending on given
     * drawType and adds this to the map.
     *
     * @param pressed Whether the digitize button is pressed or not.
     * Will be used to handle active state of the draw interaction.
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props11 = this.props,
          className = _this$props11.className,
          map = _this$props11.map,
          drawType = _this$props11.drawType,
          editType = _this$props11.editType,
          digitizeLayerName = _this$props11.digitizeLayerName,
          drawStyle = _this$props11.drawStyle,
          selectFillColor = _this$props11.selectFillColor,
          selectStrokeColor = _this$props11.selectStrokeColor,
          modalPromptTitle = _this$props11.modalPromptTitle,
          modalPromptOkButtonText = _this$props11.modalPromptOkButtonText,
          modalPromptCancelButtonText = _this$props11.modalPromptCancelButtonText,
          onDrawStart = _this$props11.onDrawStart,
          onDrawEnd = _this$props11.onDrawEnd,
          onModifyStart = _this$props11.onModifyStart,
          onModifyEnd = _this$props11.onModifyEnd,
          onTranslateStart = _this$props11.onTranslateStart,
          onTranslateEnd = _this$props11.onTranslateEnd,
          onTranslating = _this$props11.onTranslating,
          onFeatureRemove = _this$props11.onFeatureRemove,
          onFeatureCopy = _this$props11.onFeatureCopy,
          onFeatureSelect = _this$props11.onFeatureSelect,
          drawInteractionConfig = _this$props11.drawInteractionConfig,
          selectInteractionConfig = _this$props11.selectInteractionConfig,
          modifyInteractionConfig = _this$props11.modifyInteractionConfig,
          translateInteractionConfig = _this$props11.translateInteractionConfig,
          onToggle = _this$props11.onToggle,
          onModalLabelOk = _this$props11.onModalLabelOk,
          onModalLabelCancel = _this$props11.onModalLabelCancel,
          maxLabelLineLength = _this$props11.maxLabelLineLength,
          passThroughProps = _objectWithoutProperties(_this$props11, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      var btnWrapperClass = "".concat(_constants.CSS_PREFIX, "digitize-button-wrapper");
      return /*#__PURE__*/React.createElement("span", {
        className: btnWrapperClass
      }, /*#__PURE__*/React.createElement(_ToggleButton["default"], _extends({
        onToggle: this.onToggle,
        className: finalClassName
      }, passThroughProps)), this.state.showLabelPrompt ? /*#__PURE__*/React.createElement(_modal["default"], {
        title: modalPromptTitle,
        okText: modalPromptOkButtonText,
        cancelText: modalPromptCancelButtonText,
        visible: this.state.showLabelPrompt,
        closable: false,
        onOk: this.onModalLabelOk,
        onCancel: this.onModalLabelCancel
      }, /*#__PURE__*/React.createElement(TextArea, {
        value: this.state.textLabel,
        onChange: this.onLabelChange,
        autoSize: true
      })) : null);
    }
  }]);

  return DigitizeButton;
}(React.Component);

_defineProperty(DigitizeButton, "POINT_DRAW_TYPE", 'Point');

_defineProperty(DigitizeButton, "LINESTRING_DRAW_TYPE", 'LineString');

_defineProperty(DigitizeButton, "POLYGON_DRAW_TYPE", 'Polygon');

_defineProperty(DigitizeButton, "CIRCLE_DRAW_TYPE", 'Circle');

_defineProperty(DigitizeButton, "RECTANGLE_DRAW_TYPE", 'Rectangle');

_defineProperty(DigitizeButton, "TEXT_DRAW_TYPE", 'Text');

_defineProperty(DigitizeButton, "COPY_EDIT_TYPE", 'Copy');

_defineProperty(DigitizeButton, "EDIT_EDIT_TYPE", 'Edit');

_defineProperty(DigitizeButton, "DELETE_EDIT_TYPE", 'Delete');

_defineProperty(DigitizeButton, "DEFAULT_FILL_COLOR", 'rgba(154, 26, 56, 0.5)');

_defineProperty(DigitizeButton, "DEFAULT_STROKE_COLOR", 'rgba(154, 26, 56, 0.8)');

_defineProperty(DigitizeButton, "HIT_TOLERANCE", 5);

_defineProperty(DigitizeButton, "DEFAULT_POINT_STYLE", new _Style["default"]({
  image: new _Circle["default"]({
    radius: 7,
    fill: new _Fill["default"]({
      color: DigitizeButton.DEFAULT_FILL_COLOR
    }),
    stroke: new _Stroke["default"]({
      color: DigitizeButton.DEFAULT_STROKE_COLOR
    })
  })
}));

_defineProperty(DigitizeButton, "DEFAULT_LINESTRING_STYLE", new _Style["default"]({
  stroke: new _Stroke["default"]({
    color: DigitizeButton.DEFAULT_STROKE_COLOR,
    width: 2
  })
}));

_defineProperty(DigitizeButton, "DEFAULT_POLYGON_STYLE", new _Style["default"]({
  fill: new _Fill["default"]({
    color: DigitizeButton.DEFAULT_FILL_COLOR
  }),
  stroke: new _Stroke["default"]({
    color: DigitizeButton.DEFAULT_STROKE_COLOR,
    width: 2
  })
}));

_defineProperty(DigitizeButton, "DEFAULT_TEXT_STYLE", new _Style["default"]({
  text: new _Text["default"]({
    text: '',
    offsetX: 5,
    offsetY: 5,
    font: '12px sans-serif',
    fill: new _Fill["default"]({
      color: DigitizeButton.DEFAULT_FILL_COLOR
    }),
    stroke: new _Stroke["default"]({
      color: DigitizeButton.DEFAULT_STROKE_COLOR
    })
  })
}));

_defineProperty(DigitizeButton, "defaultProps", {
  digitizeLayerName: 'react-geo_digitize',
  selectFillColor: 'rgba(240, 240, 90, 0.5)',
  selectStrokeColor: 'rgba(220, 120, 20, 0.8)',
  modalPromptTitle: 'Label',
  modalPromptOkButtonText: 'Ok',
  modalPromptCancelButtonText: 'Cancel',
  drawInteractionConfig: {},
  selectInteractionConfig: {},
  modifyInteractionConfig: {},
  translateInteractionConfig: {},
  onToggle: function onToggle() {
    return undefined;
  }
});

var _default = DigitizeButton;
exports["default"] = _default;