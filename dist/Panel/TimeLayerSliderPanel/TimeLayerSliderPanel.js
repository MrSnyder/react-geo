"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TimeLayerSliderPanel = void 0;

require("antd/es/popover/style");

var _popover = _interopRequireDefault(require("antd/es/popover"));

require("antd/es/select/style");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/date-picker/style");

var _datePicker = _interopRequireDefault(require("antd/es/date-picker"));

var React = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("moment"));

var _ol = require("ol");

var _isFinite2 = _interopRequireDefault(require("lodash/isFinite"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _TimeLayerAware = _interopRequireDefault(require("../../HigherOrderComponent/TimeLayerAware/TimeLayerAware"));

var _TimeSlider = _interopRequireDefault(require("../../Slider/TimeSlider/TimeSlider"));

var _SimpleButton = _interopRequireDefault(require("../../Button/SimpleButton/SimpleButton"));

var _ToggleButton = _interopRequireDefault(require("../../Button/ToggleButton/ToggleButton"));

require("./TimeLayerSliderPanel.less");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

var RangePicker = _datePicker["default"].RangePicker;
var Option = _select["default"].Option;

/**
 * The panel combining all time slider related parts.
 */
var TimeLayerSliderPanel = /*#__PURE__*/function (_React$Component) {
  _inherits(TimeLayerSliderPanel, _React$Component);

  var _super = _createSuper(TimeLayerSliderPanel);

  /**
   * The default props of LayerSetBaseMapChooser
   *
   * @static
   * @memberof LayerSetBaseMapChooser
   */

  /**
   * Constructs time panel.
   */
  function TimeLayerSliderPanel(props) {
    var _this;

    _classCallCheck(this, TimeLayerSliderPanel);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "_TimeLayerAwareSlider", void 0);

    _defineProperty(_assertThisInitialized(_this), "_wmsTimeLayers", void 0);

    _defineProperty(_assertThisInitialized(_this), "_interval", void 0);

    _defineProperty(_assertThisInitialized(_this), "wrapTimeSlider", function () {
      _this._wmsTimeLayers = [];

      _this.props.timeAwareLayers.forEach(function (l) {
        if (l.get('type') === 'WMSTime') {
          _this._wmsTimeLayers.push({
            layer: l
          });
        }
      }); // make sure an initial value is set


      _this.wmsTimeHandler(_this.state.value);

      _this._TimeLayerAwareSlider = (0, _TimeLayerAware["default"])(_TimeSlider["default"], _this._wmsTimeLayers);
    });

    _defineProperty(_assertThisInitialized(_this), "findRangeForLayers", function () {
      var timeAwareLayers = _this.props.timeAwareLayers;
      var _this$state = _this.state,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;

      if (timeAwareLayers.length === 0) {
        return;
      }

      var startDatesFromLayers = [];
      var endDatesFromLayers = [];

      _this._wmsTimeLayers.forEach(function (l) {
        var layerStartDate = l.layer.get('startDate');
        var layerEndDate = l.layer.get('endDate');
        var sdm;
        var edm;

        if (layerStartDate) {
          sdm = (0, _moment["default"])(l.layer.get('startDate'));
        }

        if (layerEndDate) {
          edm = (0, _moment["default"])(l.layer.get('endDate'));
        }

        if (sdm) {
          startDatesFromLayers.push(sdm);
        }

        if (edm) {
          endDatesFromLayers.push(edm);
        }
      });

      var newStartDate = startDatesFromLayers.length > 0 ? _moment["default"].min(startDatesFromLayers) : startDate;
      var newEndDate = endDatesFromLayers.length > 0 ? _moment["default"].max(endDatesFromLayers) : endDate;

      _this.updateDataRange([newStartDate, newEndDate]);
    });

    _defineProperty(_assertThisInitialized(_this), "timeSliderCustomHandler", function (value) {
      var currentMoment = (0, _moment["default"])(value).milliseconds(0);
      var newValue = currentMoment.clone();

      _this.setState({
        value: newValue
      });

      if (_this.props.onChange) {
        _this.props.onChange(newValue);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "wmsTimeHandler", function (value) {
      _this._wmsTimeLayers.forEach(function (config) {
        if (config.layer && config.layer.get('type') === 'WMSTime') {
          var params = config.layer.getSource().getParams();
          var time;

          if (Array.isArray(value)) {
            time = value[0];
          } else {
            time = value;
          }

          if (!_moment["default"].isMoment(time)) {
            time = (0, _moment["default"])(time);
          }

          var timeFormat = config.layer.get('timeFormat');

          if (timeFormat.toLowerCase().indexOf('hh') > 0 && config.layer.get('roundToFullHours')) {
            time.set('minute', 0);
            time.set('second', 0);
            params.TIME = time.toISOString();
          } else {
            params.TIME = time.format(timeFormat);
          }

          config.layer.getSource().updateParams(params);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onPlaybackSpeedChange", function (val) {
      var valueToSet;

      if ((0, _isFinite2["default"])(parseFloat(val))) {
        valueToSet = parseFloat(val);
      } else {
        valueToSet = val;
      }

      _this.setState({
        playbackSpeed: valueToSet
      }, function () {
        if (_this.state.autoPlayActive) {
          _this.autoPlay(true);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSliderToNow", function () {
      var now = (0, _moment["default"])().milliseconds(0);

      _this.setState({
        value: now,
        endDate: now
      }, function () {
        _this.timeSliderCustomHandler(now);

        _this.wmsTimeHandler(now);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          timeAwareLayers = _this$props.timeAwareLayers,
          dateFormat = _this$props.dateFormat,
          tooltips = _this$props.tooltips,
          autoPlaySpeedOptions = _this$props.autoPlaySpeedOptions;
      var _this$state2 = _this.state,
          autoPlayActive = _this$state2.autoPlayActive,
          value = _this$state2.value,
          startDate = _this$state2.startDate,
          endDate = _this$state2.endDate;
      var resetVisible = true;
      var startDateString = startDate ? startDate.toISOString() : undefined;
      var endDateString = endDate ? endDate.toISOString() : undefined;
      var valueString = value ? value.toISOString() : undefined;
      var mid = startDate.clone().add(endDate.diff(startDate) / 2);
      var marks = {};
      var futureClass = (0, _moment["default"])().isBefore(value) ? ' timeslider-in-future' : '';
      var extraCls = className ? className : '';
      var disabledCls = timeAwareLayers.length < 1 ? 'no-layers-available' : '';
      marks[startDateString] = {
        label: startDate.format(dateFormat)
      };
      marks[endDateString] = {
        label: endDate.format(dateFormat),
        style: {
          left: 'unset',
          right: 0,
          transform: 'translate(50%)'
        }
      };
      marks[mid.toISOString()] = {
        label: mid.format(dateFormat)
      };
      var speedOptions = autoPlaySpeedOptions.map(function (val) {
        return /*#__PURE__*/React.createElement(Option, {
          key: val,
          value: val
        }, val);
      });
      var TimeLayerAwareSlider = _this._TimeLayerAwareSlider;
      return /*#__PURE__*/React.createElement("div", {
        className: "time-layer-slider ".concat(disabledCls).trim()
      }, /*#__PURE__*/React.createElement(_popover["default"], {
        placement: "topRight",
        title: tooltips.dataRange,
        trigger: "click",
        content: /*#__PURE__*/React.createElement(RangePicker, {
          showTime: {
            format: 'HH:mm'
          },
          defaultValue: [startDate, endDate],
          onOk: _this.updateDataRange
        })
      }, /*#__PURE__*/React.createElement(_SimpleButton["default"], {
        className: "change-datarange-button",
        iconName: "calendar"
      })), resetVisible ? /*#__PURE__*/React.createElement(_SimpleButton["default"], {
        type: "primary",
        iconName: "sync",
        onClick: _this.setSliderToNow,
        tooltip: tooltips.setToNow
      }) : null, /*#__PURE__*/React.createElement(TimeLayerAwareSlider, {
        className: "".concat(extraCls, " timeslider ").concat(futureClass).trim(),
        formatString: dateFormat,
        defaultValue: startDateString,
        min: startDateString,
        max: endDateString,
        value: valueString,
        marks: marks,
        onChange: _this.onTimeChanged
      }), /*#__PURE__*/React.createElement("div", {
        className: "time-value"
      }, value.format('DD.MM.YYYY HH:mm:ss')), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        type: "primary",
        iconName: "play-circle",
        className: extraCls + ' playback',
        pressed: autoPlayActive,
        onToggle: _this.autoPlay,
        tooltip: autoPlayActive ? 'Pause' : 'Autoplay',
        "aria-label": autoPlayActive ? 'Pause' : 'Autoplay',
        pressedIconName: "pause-circle"
      }), /*#__PURE__*/React.createElement(_select["default"], {
        defaultValue: '1',
        className: extraCls + ' speed-picker',
        onChange: _this.onPlaybackSpeedChange
      }, speedOptions, /*#__PURE__*/React.createElement(Option, {
        value: "hours"
      }, tooltips.hours), /*#__PURE__*/React.createElement(Option, {
        value: "days"
      }, tooltips.days), /*#__PURE__*/React.createElement(Option, {
        value: "weeks"
      }, tooltips.weeks), /*#__PURE__*/React.createElement(Option, {
        value: "months"
      }, tooltips.months), /*#__PURE__*/React.createElement(Option, {
        value: "years"
      }, tooltips.years)));
    });

    _this.state = {
      value: (0, _moment["default"])().milliseconds(0),
      playbackSpeed: 1,
      autoPlayActive: false,
      startDate: (0, _moment["default"])().milliseconds(0),
      endDate: (0, _moment["default"])().milliseconds(0)
    };
    _this._interval = 1000;

    _this.wrapTimeSlider(); // binds


    _this.onTimeChanged = _this.onTimeChanged.bind(_assertThisInitialized(_this));
    _this.autoPlay = _this.autoPlay.bind(_assertThisInitialized(_this));
    _this.updateDataRange = _this.updateDataRange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TimeLayerSliderPanel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          initStartDate = _this$props2.initStartDate,
          initEndDate = _this$props2.initEndDate;
      this.setState({
        startDate: initStartDate,
        endDate: initEndDate
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      prevProps.timeAwareLayers.forEach(function (pl, i) {
        var tpl = _this2.props.timeAwareLayers[i];

        if (!(0, _isEqual2["default"])((0, _ol.getUid)(pl), (0, _ol.getUid)(tpl))) {
          // update slider properties if layers were updated
          _this2.wrapTimeSlider();

          _this2.findRangeForLayers();
        }
      });
    }
    /**
     *
     * @param nextProps
     * @param nextState
     */

  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this$state3 = this.state,
          value = _this$state3.value,
          autoPlayActive = _this$state3.autoPlayActive,
          startDate = _this$state3.startDate,
          endDate = _this$state3.endDate;
      var _this$props3 = this.props,
          timeAwareLayers = _this$props3.timeAwareLayers,
          tooltips = _this$props3.tooltips;

      if (nextState.value !== value) {
        return true;
      }

      if (nextState.autoPlayActive !== autoPlayActive) {
        return true;
      }

      if (nextState.startDate !== startDate) {
        return true;
      }

      if (nextState.endDate !== endDate) {
        return true;
      }

      if (!(0, _isEqual2["default"])(nextProps.timeAwareLayers, timeAwareLayers)) {
        return true;
      }

      if (!(0, _isEqual2["default"])(nextProps.tooltips, tooltips)) {
        return true;
      }

      return false;
    }
    /**
     * Wraps the TimeSlider component in timeLayerAware.
     */

  }, {
    key: "autoPlay",
    value:
    /**
     * start or stop auto playback
     * TODO: we should do the request for new features less aggresive,
     * e.g. a precache would be helpful
     */
    function autoPlay(pressed) {
      var _this3 = this;

      if (pressed) {
        window.clearInterval(this._interval);
        this._interval = window.setInterval(function () {
          var endDate = _this3.state.endDate;
          var _this3$state = _this3.state,
              value = _this3$state.value,
              playbackSpeed = _this3$state.playbackSpeed;

          if (value >= endDate) {
            window.clearInterval(_this3._interval);

            _this3.setState({
              autoPlayActive: false
            });

            return;
          }

          var newValue;

          if ((0, _isFinite2["default"])(playbackSpeed)) {
            newValue = value.clone().add(playbackSpeed, 'seconds');
          } else {
            newValue = value.clone().add(1, playbackSpeed);
          }

          _this3.timeSliderCustomHandler(newValue);

          _this3.wmsTimeHandler(newValue); // value is handled in timeSliderCustomHandler


          _this3.setState({
            autoPlayActive: true
          });
        }, 1000, this);
      } else {
        window.clearInterval(this._interval);
        this.setState({
          autoPlayActive: false
        });
      }
    }
    /**
     * handle playback speed change
     */

  }, {
    key: "updateDataRange",
    value:
    /**
     *
     */
    function updateDataRange(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          startDate = _ref2[0],
          endDate = _ref2[1];

      this.setState({
        startDate: startDate,
        endDate: endDate
      });
    }
    /**
     *
     * @param val
     */

  }, {
    key: "onTimeChanged",
    value: function onTimeChanged(val) {
      var _this4 = this;

      this.setState({
        value: (0, _moment["default"])(val)
      }, function () {
        _this4.wmsTimeHandler(_this4.state.value);
      });
    }
    /**
     *
     *
     * @memberof TimeLayerSliderPanel
     */

  }]);

  return TimeLayerSliderPanel;
}(React.Component);

exports.TimeLayerSliderPanel = TimeLayerSliderPanel;

_defineProperty(TimeLayerSliderPanel, "defaultProps", {
  className: '',
  onChange: function onChange() {},
  timeAwareLayers: [],
  value: (0, _moment["default"])(_moment["default"].now()),
  dateFormat: 'YYYY-MM-DD',
  tooltips: {
    setToNow: 'Set to now',
    hours: 'Hours',
    days: 'Days',
    weeks: 'Weeks',
    months: 'Months',
    years: 'Years',
    dataRange: 'Set data range'
  },
  autoPlaySpeedOptions: [0.5, 1, 2, 5, 10, 100, 300]
});

var _default = TimeLayerSliderPanel;
exports["default"] = _default;