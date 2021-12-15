"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _VisibleComponent = require("./VisibleComponent");

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

describe('isVisibleComponent', function () {
  var EnhancedComponent;
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
        return /*#__PURE__*/React.createElement("div", null, "A mock Component");
      }
    }]);

    return MockComponent;
  }(React.Component);
  /* eslint-enable require-jsdoc */


  beforeEach(function () {
    EnhancedComponent = (0, _VisibleComponent.isVisibleComponent)(MockComponent);
  });
  describe('Basics', function () {
    it('is defined', function () {
      expect(_VisibleComponent.isVisibleComponent).not.toBeUndefined();
    });
    it('can be rendered', function () {
      var wrapper = _TestUtil["default"].mountComponent(EnhancedComponent);

      expect(wrapper).not.toBeUndefined();
      expect(wrapper.first().is(EnhancedComponent)).toBe(true);
    });
    it('passes through all props except activeModules', function () {
      var props = {
        someProp: '09',
        name: 'shinjiKagawaModule',
        activeModules: [{
          name: 'shinjiKagawaModule'
        }]
      };
      var expectedProps = {
        someProp: '09',
        name: 'shinjiKagawaModule'
      };

      var wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, props);

      var wrappedInstance = wrapper.childAt(0).instance();
      expect(wrappedInstance.props).toEqual(expectedProps);
    });
    it('shows or hides the wrapped component in relation to it\'s representation in the activeModules prop', function () {
      // 1. No name and no activeModules.
      var wrapper = _TestUtil["default"].mountComponent(EnhancedComponent);

      expect(wrapper.find('div').length).toBe(0); // 2. Name and no activeModules.

      wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, {
        name: 'shinjiKagawaModule'
      });
      expect(wrapper.find('div').length).toBe(0); // 3. Name and activeModules.

      wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, {
        name: 'shinjiKagawaModule',
        activeModules: [{
          name: 'shinjiKagawaModule'
        }]
      });
      expect(wrapper.find('div').length).toBe(1); // 4. Name and activeModules, but name not in activeModules.

      wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, {
        name: 'someModule',
        activeModules: [{
          name: 'shinjiKagawaModule'
        }]
      });
      expect(wrapper.find('div').length).toBe(0); // 5. No name and activeModules.

      wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, {
        activeModules: [{
          name: 'shinjiKagawaModule'
        }]
      });
      expect(wrapper.find('div').length).toBe(0); // 6. Name and activeModules, but no name in activeModules

      wrapper = _TestUtil["default"].mountComponent(EnhancedComponent, {
        name: 'shinjiKagawaModule',
        activeModules: [{
          notName: 'shinjiKagawaModule'
        }]
      });
      expect(wrapper.find('div').length).toBe(0);
    });
  });
});