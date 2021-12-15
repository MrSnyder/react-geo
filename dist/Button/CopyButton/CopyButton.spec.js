"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _CopyButton = _interopRequireDefault(require("./CopyButton"));

var _react = require("@testing-library/react");

var React = _interopRequireWildcard(require("react"));

var _userEvent = _interopRequireDefault(require("@testing-library/user-event"));

var _View = _interopRequireDefault(require("ol/View"));

var _Map = _interopRequireDefault(require("ol/Map"));

var _Point = _interopRequireDefault(require("ol/geom/Point"));

var _Feature = _interopRequireDefault(require("ol/Feature"));

var _rtlTestUtils = require("../../Util/rtlTestUtils");

var _DigitizeUtil = require("../../Util/DigitizeUtil");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

describe('<CopyButton />', function () {
  var coord = [829729, 6708850];
  var map;
  var feature;
  beforeEach(function () {
    feature = new _Feature["default"]({
      geometry: new _Point["default"](coord),
      someProp: 'test'
    });
    map = new _Map["default"]({
      view: new _View["default"]({
        center: coord,
        zoom: 10
      }),
      controls: [],
      layers: []
    });

    _DigitizeUtil.DigitizeUtil.getDigitizeLayer(map).getSource().addFeature(feature);
  });
  describe('#Basics', function () {
    it('is defined', function () {
      expect(_CopyButton["default"]).not.toBeUndefined();
    });
    it('can be rendered', function () {
      var _renderInMapContext = (0, _rtlTestUtils.renderInMapContext)(map, /*#__PURE__*/React.createElement(_CopyButton["default"], null)),
          container = _renderInMapContext.container;

      var button = (0, _react.within)(container).getByRole('button');
      expect(button).toBeVisible();
    });
  });
  describe('#Copying', function () {
    it('copys the feature', function () {
      var mock = (0, _rtlTestUtils.mockForEachFeatureAtPixel)(map, [200, 200], feature);

      var layer = _DigitizeUtil.DigitizeUtil.getDigitizeLayer(map);

      (0, _rtlTestUtils.renderInMapContext)(map, /*#__PURE__*/React.createElement(_CopyButton["default"], null));

      var button = _react.screen.getByRole('button');

      _userEvent["default"].click(button);

      expect(layer.getSource().getFeatures()).toHaveLength(1);
      (0, _rtlTestUtils.clickMap)(map, 200, 200);
      expect(layer.getSource().getFeatures()).toHaveLength(2);

      var _layer$getSource$getF = layer.getSource().getFeatures(),
          _layer$getSource$getF2 = _slicedToArray(_layer$getSource$getF, 2),
          feat1 = _layer$getSource$getF2[0],
          feat2 = _layer$getSource$getF2[1];

      expect(feat2.get('someProp')).toEqual('test');
      expect(feat1.getGeometry().getType()).toEqual(feat2.getGeometry().getType());
      mock.mockRestore();
    });
  });
});