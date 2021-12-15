"use strict";

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _MultiLayerSlider = _interopRequireDefault(require("./MultiLayerSlider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<MultiLayerSlider />', function () {
  var layers;
  beforeEach(function () {
    layers = [_TestUtil["default"].createVectorLayer(), _TestUtil["default"].createVectorLayer(), _TestUtil["default"].createVectorLayer()];
  });
  it('is defined', function () {
    expect(_MultiLayerSlider["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var props = {
      layers: layers
    };

    var wrapper = _TestUtil["default"].mountComponent(_MultiLayerSlider["default"], props);

    expect(wrapper).not.toBeUndefined();
  });
  it('sets the initial transparency of the layers', function () {
    var props = {
      layers: layers
    };

    _TestUtil["default"].mountComponent(_MultiLayerSlider["default"], props);

    expect(layers[0].getOpacity()).toBe(1);
    expect(layers[1].getOpacity()).toBe(0);
    expect(layers[2].getOpacity()).toBe(0);
  });
  it('updates the opacity of the layer by setting a transparency value', function () {
    var props = {
      layers: layers
    };

    var wrapper = _TestUtil["default"].mountComponent(_MultiLayerSlider["default"], props);

    wrapper.instance().valueUpdated(25);
    expect(layers[0].getOpacity()).toBe(0.5);
    expect(layers[1].getOpacity()).toBe(0.5);
    expect(layers[2].getOpacity()).toBe(0);
    wrapper.instance().valueUpdated(50);
    expect(layers[0].getOpacity()).toBe(0);
    expect(layers[1].getOpacity()).toBe(1);
    expect(layers[2].getOpacity()).toBe(0);
    wrapper.instance().valueUpdated(75);
    expect(layers[0].getOpacity()).toBe(0);
    expect(layers[1].getOpacity()).toBe(0.5);
    expect(layers[2].getOpacity()).toBe(0.5);
    wrapper.instance().valueUpdated(100);
    expect(layers[0].getOpacity()).toBe(0);
    expect(layers[1].getOpacity()).toBe(0);
    expect(layers[2].getOpacity()).toBe(1);
    wrapper.instance().valueUpdated(0);
    expect(layers[0].getOpacity()).toBe(1);
    expect(layers[1].getOpacity()).toBe(0);
    expect(layers[2].getOpacity()).toBe(0);
  });
  it.only('sets the display name for the layer based on the layer property defined by the user', function () {
    layers.forEach(function (layer, index) {
      layer.set('name', "Layer Name ".concat(index + 1));
      layer.set('title', "Layer Title ".concat(index + 1));
    });
    var props = {
      layers: layers
    }; // if nothing is defined, it should get the layer name

    var wrapper = _TestUtil["default"].mountComponent(_MultiLayerSlider["default"], props);

    var expectedMarksWithNameProperty = {
      '0': 'Layer Name 1',
      '50': 'Layer Name 2',
      '100': 'Layer Name 3'
    };
    var expectedMarksWithTitleProperty = {
      '0': 'Layer Title 1',
      '50': 'Layer Title 2',
      '100': 'Layer Title 3'
    };
    var expectedMarksWithoutProperty = {
      '0': 'Layer 1',
      '50': 'Layer 2',
      '100': 'Layer 3'
    };
    expect(wrapper.instance().getMarks()).toEqual(expectedMarksWithNameProperty);
    expect(wrapper.instance().formatTip(0)).toEqual('Layer Name 1 100%');
    wrapper.setProps(_objectSpread(_objectSpread({}, props), {}, {
      nameProperty: 'title'
    }));
    expect(wrapper.instance().getMarks()).toEqual(expectedMarksWithTitleProperty);
    expect(wrapper.instance().formatTip(0)).toEqual('Layer Title 1 100%');
    wrapper.setProps(_objectSpread(_objectSpread({}, props), {}, {
      nameProperty: 'name'
    }));
    expect(wrapper.instance().getMarks()).toEqual(expectedMarksWithNameProperty);
    expect(wrapper.instance().formatTip(0)).toEqual('Layer Name 1 100%');
    wrapper.setProps(_objectSpread(_objectSpread({}, props), {}, {
      nameProperty: 'randomProp'
    }));
    expect(wrapper.instance().getMarks()).toEqual(expectedMarksWithoutProperty);
    expect(wrapper.instance().formatTip(0)).toEqual('Layer 1 100%');
  });
});