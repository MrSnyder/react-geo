"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _Vector = _interopRequireDefault(require("ol/layer/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/source/Vector"));

var _Collection = _interopRequireDefault(require("ol/Collection"));

var _MultiPolygon = _interopRequireDefault(require("ol/geom/MultiPolygon"));

var _MultiLineString = _interopRequireDefault(require("ol/geom/MultiLineString"));

var _Style = _interopRequireDefault(require("ol/style/Style"));

var _Stroke = _interopRequireDefault(require("ol/style/Stroke"));

var _Fill = _interopRequireDefault(require("ol/style/Fill"));

var _Circle = _interopRequireDefault(require("ol/style/Circle"));

var _Draw = _interopRequireDefault(require("ol/interaction/Draw"));

var _Observable = require("ol/Observable");

var _Overlay = _interopRequireDefault(require("ol/Overlay"));

var _GeometryType = _interopRequireDefault(require("ol/geom/GeometryType"));

var _OverlayPositioning = _interopRequireDefault(require("ol/OverlayPositioning"));

var _MeasureUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MeasureUtil/MeasureUtil"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

var _ToggleButton = _interopRequireDefault(require("../ToggleButton/ToggleButton"));

var _constants = require("../../constants");

require("./MeasureButton.less");

var _excluded = ["className", "map", "measureType", "measureLayerName", "fillColor", "strokeColor", "showMeasureInfoOnClickedPoints", "showHelpTooltip", "multipleDrawing", "clickToDrawText", "continuePolygonMsg", "continueLineMsg", "continueAngleMsg", "decimalPlacesInTooltips", "measureTooltipCssClasses", "onToggle"];

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
 * The MeasureButton.
 *
 * @class The MeasureButton
 * @extends React.Component
 */
var MeasureButton = /*#__PURE__*/function (_React$Component) {
  _inherits(MeasureButton, _React$Component);

  var _super = _createSuper(MeasureButton);

  /**
   * The default properties.
   */

  /**
   * The className added to this component.
   *
   * @private
   */

  /**
   * Currently drawn feature.
   *
   * @private
   */

  /**
   * Overlay to show the measurement.
   *
   * @private
   */

  /**
   * Overlay to show the help messages.
   *
   * @private
   */

  /**
   * The help tooltip element.
   *
   * @private
   */

  /**
   * The measure tooltip element.
   *
   * @private
   */

  /**
   * An array of created overlays we use for the tooltips. Used to eventually
   * clean up everything we added.
   *
   * @private
   */

  /**
   * An array of created divs we use for the tooltips. Used to eventually
   * clean up everything we added.
   *
   * @private
   */

  /**
   * An object holding keyed `OlEventsKey` instances returned by the `on`
   * method of `OlObservable`. These keys are used to unbind temporary
   * listeners on events of the `OlInteractionDraw` or `OlMap`. The keys
   * are the names of the events on the various objects. The `click` key is
   * not always bound, but only for certain #measureType values.
   *
   * In #cleanup, we unbind all events we have bound so as to not leak
   * memory, and to ensure we have no concurring listeners being active at a
   * time (E.g. when multiple measure buttons are in an application).
   *
   * @private
   */

  /**
   * The vector layer showing the geometries added by the draw interaction.
   *
   * @private
   */

  /**
   * The draw interaction used to draw the geometries to measure.
   *
   * @private
   */

  /**
   * Creates the MeasureButton.
   *
   * @constructs MeasureButton
   */
  function MeasureButton(props) {
    var _this;

    _classCallCheck(this, MeasureButton);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "measurebutton"));

    _defineProperty(_assertThisInitialized(_this), "_feature", null);

    _defineProperty(_assertThisInitialized(_this), "_measureTooltip", null);

    _defineProperty(_assertThisInitialized(_this), "_helpTooltip", null);

    _defineProperty(_assertThisInitialized(_this), "_helpTooltipElement", null);

    _defineProperty(_assertThisInitialized(_this), "_measureTooltipElement", null);

    _defineProperty(_assertThisInitialized(_this), "_createdTooltipOverlays", []);

    _defineProperty(_assertThisInitialized(_this), "_createdTooltipDivs", []);

    _defineProperty(_assertThisInitialized(_this), "_eventKeys", {
      drawstart: null,
      drawend: null,
      pointermove: null,
      click: null,
      change: null
    });

    _defineProperty(_assertThisInitialized(_this), "_measureLayer", null);

    _defineProperty(_assertThisInitialized(_this), "_drawInteraction", null);

    _this.onDrawInteractionActiveChange = _this.onDrawInteractionActiveChange.bind(_assertThisInitialized(_this));
    _this.onToggle = _this.onToggle.bind(_assertThisInitialized(_this));
    _this.onDrawStart = _this.onDrawStart.bind(_assertThisInitialized(_this));
    _this.onDrawEnd = _this.onDrawEnd.bind(_assertThisInitialized(_this));
    _this.onDrawInteractionGeometryChange = _this.onDrawInteractionGeometryChange.bind(_assertThisInitialized(_this));
    _this.onMapPointerMove = _this.onMapPointerMove.bind(_assertThisInitialized(_this));
    _this.onMapClick = _this.onMapClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * `componentDidMount` method of the MeasureButton.
   *
   * @method
   */


  _createClass(MeasureButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.createMeasureLayer();
      this.createDrawInteraction();
    }
    /**
     * Ensures that component is properly cleaned up on unmount.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.pressed) {
        this.onToggle(false);
      }
    }
    /**
     * Called when the button is toggled, this method ensures that everything
     * is cleaned up when unpressed, and that measuring can start when pressed.
     *
     * @method
     */

  }, {
    key: "onToggle",
    value: function onToggle(pressed) {
      var _this2 = this;

      var _this$props = this.props,
          map = _this$props.map,
          onToggle = _this$props.onToggle;
      this.cleanup();
      onToggle(pressed);

      if (pressed && this._drawInteraction) {
        this._drawInteraction.setActive(pressed);

        this._eventKeys.drawstart = this._drawInteraction.on('drawstart', function (e) {
          return _this2.onDrawStart(e);
        });
        this._eventKeys.drawend = this._drawInteraction.on('drawend', function (e) {
          return _this2.onDrawEnd(e);
        });
        this._eventKeys.pointermove = map.on('pointermove', function (e) {
          return _this2.onMapPointerMove(e);
        });
      }
    }
    /**
     * Creates measure vector layer and add this to the map.
     *
     * @method
     */

  }, {
    key: "createMeasureLayer",
    value: function createMeasureLayer() {
      var _this$props2 = this.props,
          measureLayerName = _this$props2.measureLayerName,
          fillColor = _this$props2.fillColor,
          strokeColor = _this$props2.strokeColor,
          map = _this$props2.map;

      var measureLayer = _MapUtil["default"].getLayerByName(map, measureLayerName);

      if (!measureLayer) {
        measureLayer = new _Vector["default"]({
          properties: {
            name: measureLayerName
          },
          source: new _Vector2["default"]({
            features: new _Collection["default"]()
          }),
          style: new _Style["default"]({
            fill: new _Fill["default"]({
              color: fillColor
            }),
            stroke: new _Stroke["default"]({
              color: strokeColor,
              width: 2
            }),
            image: new _Circle["default"]({
              radius: 7,
              fill: new _Fill["default"]({
                color: fillColor
              })
            })
          })
        });
        map.addLayer(measureLayer);
      }

      this._measureLayer = measureLayer;
    }
    /**
     * Creates a correctly configured OL draw interaction depending on
     * the configured measureType.
     *
     * @return {OlInteractionDraw} The created interaction, which is not yet
     *   added to the map.
     *
     * @method
     */

  }, {
    key: "createDrawInteraction",
    value: function createDrawInteraction() {
      var _this3 = this;

      var _this$props3 = this.props,
          fillColor = _this$props3.fillColor,
          strokeColor = _this$props3.strokeColor,
          measureType = _this$props3.measureType,
          pressed = _this$props3.pressed,
          map = _this$props3.map;
      var maxPoints = measureType === 'angle' ? 2 : undefined;
      var drawType = measureType === 'polygon' ? _GeometryType["default"].MULTI_POLYGON : _GeometryType["default"].MULTI_LINE_STRING;
      var drawInteraction = new _Draw["default"]({
        source: this._measureLayer.getSource(),
        type: drawType,
        maxPoints: maxPoints,
        style: new _Style["default"]({
          fill: new _Fill["default"]({
            color: fillColor
          }),
          stroke: new _Stroke["default"]({
            color: strokeColor,
            lineDash: [10, 10],
            width: 2
          }),
          image: new _Circle["default"]({
            radius: 5,
            stroke: new _Stroke["default"]({
              color: strokeColor
            }),
            fill: new _Fill["default"]({
              color: fillColor
            })
          })
        }),
        freehandCondition: function freehandCondition() {
          return false;
        }
      });
      map.addInteraction(drawInteraction);
      drawInteraction.on('change:active', function () {
        return _this3.onDrawInteractionActiveChange();
      });
      this._drawInteraction = drawInteraction;

      if (pressed) {
        this.onDrawInteractionActiveChange();
      }

      drawInteraction.setActive(pressed);
    }
    /**
     * Adjusts visibility of measurement related tooltips depending on active
     * status of draw interaction.
     */

  }, {
    key: "onDrawInteractionActiveChange",
    value: function onDrawInteractionActiveChange() {
      var showHelpTooltip = this.props.showHelpTooltip;

      if (this._drawInteraction.getActive()) {
        if (showHelpTooltip) {
          this.createHelpTooltip();
        }

        this.createMeasureTooltip();
      } else {
        if (showHelpTooltip) {
          this.removeHelpTooltip();
        }

        this.removeMeasureTooltip();
      }
    }
    /**
     * Called if the current geometry of the draw interaction has changed.
     *
     * @param evt The generic change event.
     */

  }, {
    key: "onDrawInteractionGeometryChange",
    value: function
      /* evt*/
    onDrawInteractionGeometryChange() {
      this.updateMeasureTooltip();
    }
    /**
     * Called on map click.
     *
     * @param evt The pointer event.
     */

  }, {
    key: "onMapClick",
    value: function onMapClick(evt) {
      var _this$props4 = this.props,
          measureType = _this$props4.measureType,
          showMeasureInfoOnClickedPoints = _this$props4.showMeasureInfoOnClickedPoints;

      if (showMeasureInfoOnClickedPoints && measureType === 'line') {
        this.addMeasureStopTooltip(evt.coordinate);
      }
    }
    /**
     * Sets up listeners whenever the drawing of a measurement sketch is
     * started.
     *
     * @param evt The event which contains the
     *   feature we are drawing.
     *
     * @method
     */

  }, {
    key: "onDrawStart",
    value: function onDrawStart(evt) {
      var _this4 = this;

      var _this$props5 = this.props,
          showHelpTooltip = _this$props5.showHelpTooltip,
          multipleDrawing = _this$props5.multipleDrawing,
          map = _this$props5.map;

      var source = this._measureLayer.getSource();

      this._feature = evt.feature;
      this._eventKeys.change = this._feature.getGeometry().on('change', this.onDrawInteractionGeometryChange);
      this._eventKeys.click = map.on('click', function (e) {
        return _this4.onMapClick(e);
      });

      if (!multipleDrawing && source.getFeatures().length > 0) {
        this.cleanupTooltips();
        this.createMeasureTooltip();

        if (showHelpTooltip) {
          this.createHelpTooltip();
        }

        source.clear();
      }
    }
    /**
     * Called whenever measuring stops, this method draws static tooltips with
     * the result onto the map canvas and unregisters various listeners.
     *
     * @method
     */

  }, {
    key: "onDrawEnd",
    value: function onDrawEnd(evt) {
      var _this$props6 = this.props,
          measureType = _this$props6.measureType,
          multipleDrawing = _this$props6.multipleDrawing,
          showMeasureInfoOnClickedPoints = _this$props6.showMeasureInfoOnClickedPoints,
          measureTooltipCssClasses = _this$props6.measureTooltipCssClasses;

      if (this._eventKeys.click) {
        (0, _Observable.unByKey)(this._eventKeys.click);
      }

      if (this._eventKeys.change) {
        (0, _Observable.unByKey)(this._eventKeys.change);
      }

      if (multipleDrawing) {
        this.addMeasureStopTooltip(evt.feature.getGeometry().getLastCoordinate());
      } // Fix doubled label for lastPoint of line


      if ((multipleDrawing || showMeasureInfoOnClickedPoints) && measureType === 'line') {
        this.removeMeasureTooltip();
      } else {
        this._measureTooltipElement.className = "".concat(measureTooltipCssClasses.tooltip, " ").concat(measureTooltipCssClasses.tooltipStatic);

        this._measureTooltip.setOffset([0, -7]);
      }

      this.updateMeasureTooltip(); // unset sketch

      this._feature = null; // fix doubled label for last point of line

      if ((multipleDrawing || showMeasureInfoOnClickedPoints) && measureType === 'line') {
        this._measureTooltipElement = null;
        this.createMeasureTooltip();
      }
    }
    /**
     * Adds a tooltip on click where a measuring stop occured.
     *
     * @param coordinate The coordinate for the tooltip.
     */

  }, {
    key: "addMeasureStopTooltip",
    value: function addMeasureStopTooltip(coordinate) {
      var _this$props7 = this.props,
          measureType = _this$props7.measureType,
          decimalPlacesInTooltips = _this$props7.decimalPlacesInTooltips,
          map = _this$props7.map,
          measureTooltipCssClasses = _this$props7.measureTooltipCssClasses;

      if (!(0, _isEmpty2["default"])(this._feature)) {
        var geom = this._feature.getGeometry();

        if (geom instanceof _MultiPolygon["default"]) {
          geom = geom.getPolygons()[0];
        }

        if (geom instanceof _MultiLineString["default"]) {
          geom = geom.getLineStrings()[0];
        }

        var value = measureType === 'line' ? _MeasureUtil["default"].formatLength(geom, map, decimalPlacesInTooltips) : _MeasureUtil["default"].formatArea(geom, map, decimalPlacesInTooltips);

        if (parseInt(value, 10) > 0) {
          var div = document.createElement('div');
          div.className = "".concat(measureTooltipCssClasses.tooltip, " ").concat(measureTooltipCssClasses.tooltipStatic);
          div.innerHTML = value;
          var tooltip = new _Overlay["default"]({
            element: div,
            offset: [0, -15],
            positioning: _OverlayPositioning["default"].BOTTOM_CENTER
          });
          map.addOverlay(tooltip);
          tooltip.setPosition(coordinate);

          this._createdTooltipDivs.push(div);

          this._createdTooltipOverlays.push(tooltip);
        }
      }
    }
    /**
     * Creates a new measure tooltip as `OlOverlay`.
     */

  }, {
    key: "createMeasureTooltip",
    value: function createMeasureTooltip() {
      var _this$props8 = this.props,
          map = _this$props8.map,
          measureTooltipCssClasses = _this$props8.measureTooltipCssClasses;

      if (this._measureTooltipElement) {
        return;
      }

      this._measureTooltipElement = document.createElement('div');
      this._measureTooltipElement.className = "".concat(measureTooltipCssClasses.tooltip, " ").concat(measureTooltipCssClasses.tooltipDynamic);
      this._measureTooltip = new _Overlay["default"]({
        element: this._measureTooltipElement,
        offset: [0, -15],
        positioning: _OverlayPositioning["default"].BOTTOM_CENTER
      });
      map.addOverlay(this._measureTooltip);
    }
    /**
     * Creates a new help tooltip as `OlOverlay`.
     */

  }, {
    key: "createHelpTooltip",
    value: function createHelpTooltip() {
      var _this$props9 = this.props,
          map = _this$props9.map,
          measureTooltipCssClasses = _this$props9.measureTooltipCssClasses;

      if (this._helpTooltipElement) {
        return;
      }

      this._helpTooltipElement = document.createElement('div');
      this._helpTooltipElement.className = measureTooltipCssClasses.tooltip;
      this._helpTooltip = new _Overlay["default"]({
        element: this._helpTooltipElement,
        offset: [15, 0],
        positioning: _OverlayPositioning["default"].CENTER_LEFT
      });
      map.addOverlay(this._helpTooltip);
    }
    /**
     * Removes help tooltip from the map if measure button was untoggled.
     */

  }, {
    key: "removeHelpTooltip",
    value: function removeHelpTooltip() {
      if (this._helpTooltip) {
        this.props.map.removeOverlay(this._helpTooltip);
      }

      this._helpTooltipElement = null;
      this._helpTooltip = null;
    }
    /**
     * Removes measure tooltip from the map if measure button was untoggled.
     *
     * @method
     */

  }, {
    key: "removeMeasureTooltip",
    value: function removeMeasureTooltip() {
      if (this._measureTooltip) {
        this.props.map.removeOverlay(this._measureTooltip);
      }

      this._measureTooltipElement = null;
      this._measureTooltip = null;
    }
    /**
     * Cleans up tooltips when the button is unpressed.
     *
     * @method
     */

  }, {
    key: "cleanupTooltips",
    value: function cleanupTooltips() {
      var map = this.props.map;

      this._createdTooltipOverlays.forEach(function (tooltipOverlay) {
        map.removeOverlay(tooltipOverlay);
      });

      this._createdTooltipOverlays = [];

      this._createdTooltipDivs.forEach(function (tooltipDiv) {
        var parent = tooltipDiv && tooltipDiv.parentNode;

        if (parent) {
          parent.removeChild(tooltipDiv);
        }
      });

      this._createdTooltipDivs = [];
      this.removeMeasureTooltip();
    }
    /**
     * Cleans up artifacts from measuring when the button is unpressed.
     *
     * @method
     */

  }, {
    key: "cleanup",
    value: function cleanup() {
      var _this5 = this;

      if (this._drawInteraction) {
        this._drawInteraction.setActive(false);
      }

      Object.keys(this._eventKeys).forEach(function (key) {
        if (_this5._eventKeys[key]) {
          (0, _Observable.unByKey)(_this5._eventKeys[key]);
        }
      });
      this.cleanupTooltips();

      if (this._measureLayer) {
        this._measureLayer.getSource().clear();
      }
    }
    /**
     * Called on map's pointermove event.
     *
     * @param evt The pointer event.
     */

  }, {
    key: "onMapPointerMove",
    value: function onMapPointerMove(evt) {
      if (!evt.dragging) {
        this.updateHelpTooltip(evt.coordinate);
      }
    }
    /**
     * Updates the position and the text of the help tooltip.
     *
     * @param coordinate The coordinate to center the tooltip to.
     */

  }, {
    key: "updateHelpTooltip",
    value: function updateHelpTooltip(coordinate) {
      var _this$props10 = this.props,
          measureType = _this$props10.measureType,
          clickToDrawText = _this$props10.clickToDrawText,
          continuePolygonMsg = _this$props10.continuePolygonMsg,
          continueLineMsg = _this$props10.continueLineMsg,
          continueAngleMsg = _this$props10.continueAngleMsg;

      if (!this._helpTooltipElement) {
        return;
      }

      var msg = clickToDrawText;

      if (this._helpTooltipElement) {
        if (measureType === 'polygon') {
          msg = continuePolygonMsg;
        } else if (measureType === 'line') {
          msg = continueLineMsg;
        } else if (measureType === 'angle') {
          msg = continueAngleMsg;
        }

        this._helpTooltipElement.innerHTML = msg;

        this._helpTooltip.setPosition(coordinate);
      }
    }
    /**
     * Updates the text and position of the measture tooltip.
     */

  }, {
    key: "updateMeasureTooltip",
    value: function updateMeasureTooltip() {
      var _this$props11 = this.props,
          measureType = _this$props11.measureType,
          decimalPlacesInTooltips = _this$props11.decimalPlacesInTooltips,
          map = _this$props11.map;

      if (!this._measureTooltipElement) {
        return;
      }

      if (this._feature) {
        var output;

        var geom = this._feature.getGeometry();

        if (geom instanceof _MultiPolygon["default"]) {
          geom = geom.getPolygons()[0];
        }

        if (geom instanceof _MultiLineString["default"]) {
          geom = geom.getLineStrings()[0];
        }

        var measureTooltipCoord = geom.getLastCoordinate();

        if (measureType === 'polygon') {
          output = _MeasureUtil["default"].formatArea(geom, map, decimalPlacesInTooltips); // attach area at interior point

          measureTooltipCoord = geom.getInteriorPoint().getCoordinates();
        } else if (measureType === 'line') {
          output = _MeasureUtil["default"].formatLength(geom, map, decimalPlacesInTooltips);
        } else if (measureType === 'angle') {
          output = _MeasureUtil["default"].formatAngle(geom, map, decimalPlacesInTooltips);
        }

        this._measureTooltipElement.innerHTML = output;

        this._measureTooltip.setPosition(measureTooltipCoord);
      }
    }
    /**
     * The render function.
     */

  }, {
    key: "render",
    value: function render() {
      var _this$props12 = this.props,
          className = _this$props12.className,
          map = _this$props12.map,
          measureType = _this$props12.measureType,
          measureLayerName = _this$props12.measureLayerName,
          fillColor = _this$props12.fillColor,
          strokeColor = _this$props12.strokeColor,
          showMeasureInfoOnClickedPoints = _this$props12.showMeasureInfoOnClickedPoints,
          showHelpTooltip = _this$props12.showHelpTooltip,
          multipleDrawing = _this$props12.multipleDrawing,
          clickToDrawText = _this$props12.clickToDrawText,
          continuePolygonMsg = _this$props12.continuePolygonMsg,
          continueLineMsg = _this$props12.continueLineMsg,
          continueAngleMsg = _this$props12.continueAngleMsg,
          decimalPlacesInTooltips = _this$props12.decimalPlacesInTooltips,
          measureTooltipCssClasses = _this$props12.measureTooltipCssClasses,
          onToggle = _this$props12.onToggle,
          passThroughProps = _objectWithoutProperties(_this$props12, _excluded);

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_ToggleButton["default"], _extends({
        onToggle: this.onToggle,
        className: finalClassName
      }, passThroughProps));
    }
  }]);

  return MeasureButton;
}(React.Component);

_defineProperty(MeasureButton, "defaultProps", {
  measureLayerName: 'react-geo_measure',
  fillColor: 'rgba(255, 0, 0, 0.5)',
  strokeColor: 'rgba(255, 0, 0, 0.8)',
  showMeasureInfoOnClickedPoints: false,
  showHelpTooltip: true,
  decimalPlacesInTooltips: 2,
  multipleDrawing: false,
  continuePolygonMsg: 'Click to draw area',
  continueLineMsg: 'Click to draw line',
  continueAngleMsg: 'Click to draw angle',
  clickToDrawText: 'Click to measure',
  measureTooltipCssClasses: {
    tooltip: "".concat(_constants.CSS_PREFIX, "measure-tooltip"),
    tooltipDynamic: "".concat(_constants.CSS_PREFIX, "measure-tooltip-dynamic"),
    tooltipStatic: "".concat(_constants.CSS_PREFIX, "measure-tooltip-static")
  },
  pressed: false,
  onToggle: function onToggle() {
    return undefined;
  }
});

var _default = MeasureButton;
exports["default"] = _default;