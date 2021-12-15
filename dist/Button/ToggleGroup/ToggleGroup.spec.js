"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _ToggleButton = _interopRequireDefault(require("../ToggleButton/ToggleButton"));

var _ToggleGroup = _interopRequireDefault(require("./ToggleGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('<ToggleGroup />', function () {
  it('is defined', function () {
    expect(_ToggleGroup["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  it('renders it\'s children horizontally or vertically', function () {
    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"], {
      orientation: 'vertical'
    });

    expect(wrapper.find('div.vertical-toggle-group').length).toBe(1);
    wrapper.setProps({
      orientation: 'horizontal'
    });
    expect(wrapper.find('div.horizontal-toggle-group').length).toBe(1);
  });
  it('renders children when passed in', function () {
    var props = {
      children: [/*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "1",
        name: "Shinji",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "2",
        name: "Kagawa",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "3",
        name: "\u9999\u5DDD \u771F\u53F8",
        onToggle: function onToggle() {}
      })]
    };

    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"], props);

    expect(wrapper.find(_ToggleButton["default"]).length).toBe(3);
  });
  it('calls the given onChange callback if a children is pressed', function () {
    var changeSpy = jest.fn();
    var props = {
      onChange: changeSpy,
      children: [/*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "1",
        name: "Shinji",
        onToggle: function onToggle() {}
      })]
    };

    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"], props);

    wrapper.find(_ToggleButton["default"]).simulate('click');
    expect(changeSpy).toHaveBeenCalled();
  });
  it('sets the selected name on click', function () {
    var changeSpy = jest.fn();
    var props = {
      onChange: changeSpy,
      children: [/*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "1",
        name: "Shinji",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "2",
        name: "Kagawa",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "3",
        name: "\u9999\u5DDD \u771F\u53F8",
        onToggle: function onToggle() {}
      })]
    };

    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"], props);

    wrapper.find(_ToggleButton["default"]).first().simulate('click');
    expect(wrapper.state().selectedName).toBe('Shinji');
    wrapper.find(_ToggleButton["default"]).at(2).simulate('click');
    expect(wrapper.state().selectedName).toBe('香川 真司');
  });
  it('allows to deselect an already pressed button', function () {
    var changeSpy = jest.fn();
    var props = {
      allowDeselect: false,
      onChange: changeSpy,
      children: [/*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "1",
        name: "Shinji",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "2",
        name: "Kagawa",
        onToggle: function onToggle() {}
      }), /*#__PURE__*/React.createElement(_ToggleButton["default"], {
        key: "3",
        name: "\u9999\u5DDD \u771F\u53F8",
        onToggle: function onToggle() {}
      })]
    };

    var wrapper = _TestUtil["default"].mountComponent(_ToggleGroup["default"], props);

    wrapper.find(_ToggleButton["default"]).first().simulate('click');
    expect(wrapper.state().selectedName).toBe('Shinji');
    wrapper.find(_ToggleButton["default"]).first().simulate('click');
    expect(wrapper.state().selectedName).toBe('Shinji');
    wrapper.setProps({
      allowDeselect: true
    });
    wrapper.find(_ToggleButton["default"]).first().simulate('click');
    expect(wrapper.state().selectedName).toBe(null);
  });
});