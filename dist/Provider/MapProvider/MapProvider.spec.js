"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _enzyme = require("enzyme");

var _TestUtil = require("../../Util/TestUtil");

var _MapProvider = _interopRequireDefault(require("./MapProvider"));

var _MappifiedComponent = require("../../HigherOrderComponent/MappifiedComponent/MappifiedComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

describe('MapProvider', function () {
  /* eslint-disable require-jsdoc */
  var MockComponent = /*#__PURE__*/function (_React$Component) {
    _inherits(MockComponent, _React$Component);

    var _super = _createSuper(MockComponent);

    function MockComponent() {
      _classCallCheck(this, MockComponent);

      return _super.apply(this, arguments);
    }

    _createClass(MockComponent, [{
      key: "render",
      value: function render() {
        return /*#__PURE__*/React.createElement("div", null, "Mockety-mock");
      }
    }]);

    return MockComponent;
  }(React.Component);
  /* eslint-enable require-jsdoc */


  var MappifiedMockComponent = (0, _MappifiedComponent.mappify)(MockComponent);
  describe('Basics', function () {
    it('is defined', function () {
      expect(_MapProvider["default"]).not.toBeUndefined();
    });
    it('provides a given map to its children (ol.Map)', function () {
      var map = _TestUtil.TestUtil.createMap(); // We create the promise only to be able to return it below, we do not
      // actually use it to instantiate MapProvider


      var mapPromise = new Promise(function (resolve) {
        resolve(map);
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/React.createElement(_MapProvider["default"], {
        map: map
      }, " ", /*#__PURE__*/React.createElement(MappifiedMockComponent, null))); // resolve our promise, so this async behaviour is testable.

      setTimeout(function () {
        mapPromise.resolve(map);
      }, 50);
      expect.assertions(2);
      return mapPromise.then(function () {
        var isReady = wrapper.state('ready');
        expect(isReady).toBe(true);
        wrapper.update();
        var mapFromMock = wrapper.find(MockComponent).prop('map');
        expect(mapFromMock).toBe(map);
      });
    });
    it('provides a given map to its children (Promise)', function () {
      var map = _TestUtil.TestUtil.createMap();

      var mapPromise = new Promise(function (resolve) {
        resolve(map);
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/React.createElement(_MapProvider["default"], {
        map: mapPromise
      }, " ", /*#__PURE__*/React.createElement(MappifiedMockComponent, null)));
      expect.assertions(2);
      return mapPromise.then(function () {
        var isReady = wrapper.state('ready');
        expect(isReady).toBe(true);
        wrapper.update();
        var mapFromMock = wrapper.find(MockComponent).prop('map');
        expect(mapFromMock).toBe(map);
      });
    });
    it('Does not render on rejected promise', function () {
      var errMsg = 'Some message: Humpty';
      var failingPromise = new Promise(function (resolve, reject) {
        reject(new Error(errMsg));
      });
      var wrapper = (0, _enzyme.mount)( /*#__PURE__*/React.createElement(_MapProvider["default"], {
        map: failingPromise
      }, " ", /*#__PURE__*/React.createElement(MappifiedMockComponent, null)));
      expect.assertions(3);
      return failingPromise["catch"](function (err) {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toBe(errMsg);
        wrapper.update();
        var mapFromMock = wrapper.find(MockComponent);
        expect(mapFromMock.exists()).toBe(false);
      });
    });
  });
});