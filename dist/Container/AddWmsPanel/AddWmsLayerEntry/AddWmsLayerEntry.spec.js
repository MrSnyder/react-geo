"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = require("@testing-library/react");

var React = _interopRequireWildcard(require("react"));

var _Tile = _interopRequireDefault(require("ol/layer/Tile"));

var _TileWMS = _interopRequireDefault(require("ol/source/TileWMS"));

var _AddWmsLayerEntry = _interopRequireDefault(require("./AddWmsLayerEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('<AddWmsLayerEntry />', function () {
  var testLayerName = 'OSM-WMS';
  var testLayerTitle = 'OSM-WMS - by terrestris';
  var testLayer = new _Tile["default"]({
    visible: false,
    title: testLayerTitle,
    source: new _TileWMS["default"]({
      url: 'https://ows.terrestris.de/osm/service?',
      params: {
        'LAYERS': testLayerName,
        'TILED': true
      }
    })
  });
  it('is defined', function () {
    expect(_AddWmsLayerEntry["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var _render = (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    })),
        container = _render.container;

    expect(container).toBeVisible();
  });
  it('adds queryable icon if prop wmsLayer has queryable set to true', function () {
    testLayer.set('queryable', true);
    (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    }));

    var icon = _react.screen.getByLabelText('queryable-info');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('fa-info');
    testLayer.set('queryable', false);
  });
  it('doesn\'t add queryable icon if prop wmsLayer has queryable set to false', function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    }));

    var icon = _react.screen.queryByLabelText('queryable-info');

    expect(icon).not.toBeInTheDocument();
  });
  it('adds copyright icon if prop wmsLayer has filled wmsAttribution', function () {
    var wmsAttribution = 'Test - attribution';
    testLayer.getSource().setAttributions(wmsAttribution);
    (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    }));

    var attributionIcons = _react.screen.queryAllByLabelText('attribution-info');

    expect(attributionIcons[0]).toBeInTheDocument();
    expect(attributionIcons[0]).toHaveClass('fa-copyright');
    testLayer.getSource().setAttributions(null);
  });
  it('doesn\'t add copyright icon if prop wmsLayer no has filled attribution', function () {
    (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    }));

    var attributionIcon = _react.screen.queryByLabelText('attribution-info');

    expect(attributionIcon).not.toBeInTheDocument();
  });
  it('includes abstract in description text if abstract property is set for layer', function () {
    var _abstract = 'abstract';
    testLayer.setProperties({
      "abstract": _abstract
    });
    (0, _react.render)( /*#__PURE__*/React.createElement(_AddWmsLayerEntry["default"], {
      wmsLayer: testLayer
    }));

    _react.screen.getByText('OSM-WMS - by terrestris - abstract:');
  });
});