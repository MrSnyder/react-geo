"use strict";

var _Vector = _interopRequireDefault(require("ol/source/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/layer/Vector"));

var _GeometryCollection = _interopRequireDefault(require("ol/geom/GeometryCollection"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _FeatureGrid = _interopRequireDefault(require("./FeatureGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<FeatureGrid />', function () {
  var map;
  var features;
  beforeEach(function () {
    map = _TestUtil["default"].createMap();
    features = [{
      id: 1,
      name: 'Shinji Kagawa'
    }, {
      id: 2,
      name: 'Marco Reus'
    }, {
      id: 3,
      name: 'Roman Weidenfeller'
    }].map(function (prop) {
      return _TestUtil["default"].generatePointFeature(prop);
    });
  });
  afterEach(function () {
    _TestUtil["default"].removeMap(map);

    features = [];
  });
  it('is defined', function () {
    expect(_FeatureGrid["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  it('initializes a vector layer on mount (if map prop is given)', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map
    });

    var layerCand = map.getLayers().getArray().filter(function (layer) {
      return layer.get('name') === wrapper.prop('layerName');
    });
    expect(layerCand).toHaveLength(1);
    expect(layerCand[0]).toBeInstanceOf(_Vector2["default"]);
    expect(wrapper.instance()._source).toBeInstanceOf(_Vector["default"]);
    expect(wrapper.instance()._layer).toBeInstanceOf(_Vector2["default"]);

    var wrapperWithoutMap = _TestUtil["default"].mountComponent(_FeatureGrid["default"]);

    expect(wrapperWithoutMap.instance()._source).toBeNull();
    expect(wrapperWithoutMap.instance()._layer).toBeNull();
  });
  it('initializes a vector layer if it\'s not already added to the map only', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map
    });

    wrapper.instance().initVectorLayer(map);
    var layerCand = map.getLayers().getArray().filter(function (layer) {
      return layer.get('name') === wrapper.prop('layerName');
    });
    expect(layerCand).toHaveLength(1);
    expect(layerCand[0]).toBeInstanceOf(_Vector2["default"]);
    expect(wrapper.instance()._source).toBeInstanceOf(_Vector["default"]);
    expect(wrapper.instance()._layer).toBeInstanceOf(_Vector2["default"]);
  });
  it('sets the given featureStyle to the featurelayer', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    expect(wrapper.instance()._layer.getStyle()).toEqual(wrapper.prop('featureStyle'));
  });
  it('removes the vector layer from the map on unmount', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map
    });

    var layerName = wrapper.prop('layerName');
    wrapper.unmount();
    var layerCand = map.getLayers().getArray().filter(function (layer) {
      return layer.get('name') === layerName;
    });
    expect(layerCand).toHaveLength(0);
  });
  it('registers a pointermove and singleclick map event handler on mount', function () {
    var mapOnSpy = jest.spyOn(map, 'on');

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      selectable: true
    });

    var onPointerMove = wrapper.instance().onMapPointerMove;
    var onMapSingleClick = wrapper.instance().onMapSingleClick;
    expect(mapOnSpy).toHaveBeenCalledTimes(2);
    expect(mapOnSpy).toHaveBeenCalledWith('pointermove', onPointerMove);
    expect(mapOnSpy).toHaveBeenCalledWith('singleclick', onMapSingleClick);
    mapOnSpy.mockRestore();
  });
  it('unregisters a pointermove and singleclick map event handler on unmount', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      selectable: true
    });

    var mapUnSpy = jest.spyOn(map, 'un');
    var onPointerMove = wrapper.instance().onMapPointerMove;
    var onMapSingleClick = wrapper.instance().onMapSingleClick;
    wrapper.unmount();
    expect(mapUnSpy).toHaveBeenCalledTimes(2);
    expect(mapUnSpy).toHaveBeenCalledWith('pointermove', onPointerMove);
    expect(mapUnSpy).toHaveBeenCalledWith('singleclick', onMapSingleClick);
    mapUnSpy.mockRestore();
  });
  it('generates the column definition out of the given features and takes attributeBlacklist into account', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var got = wrapper.instance().getColumnDefs();
    var exp = [{
      dataIndex: 'id',
      key: 'id',
      title: 'id'
    }, {
      dataIndex: 'name',
      key: 'name',
      title: 'name'
    }];
    expect(got).toEqual(exp);
    wrapper.setProps({
      attributeBlacklist: ['id']
    });
    var gotBlacklisted = wrapper.instance().getColumnDefs();
    var expBlacklisted = [{
      dataIndex: 'name',
      key: 'name',
      title: 'name'
    }];
    expect(gotBlacklisted).toEqual(expBlacklisted);
  });
  it('generates the appropriate data to render', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var got = wrapper.instance().getTableData();
    var expRows = [{
      id: 1,
      name: 'Shinji Kagawa'
    }, {
      id: 2,
      name: 'Marco Reus'
    }, {
      id: 3,
      name: 'Roman Weidenfeller'
    }];
    expRows.forEach(function (row, idx) {
      expect(row.id).toEqual(got[idx].id);
      expect(row.name).toEqual(got[idx].name);
    });
  });
  it('fits the map to show all given features', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var mapViewFitSpy = jest.spyOn(map.getView(), 'fit');
    wrapper.instance().zoomToFeatures(features);
    var featGeometries = [];
    features.forEach(function (feature) {
      featGeometries.push(feature.getGeometry());
    });
    expect(mapViewFitSpy).toHaveBeenCalledWith(new _GeometryCollection["default"](featGeometries).getExtent());
  });
  it('highlights all given features', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().highlightFeatures(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toEqual(wrapper.prop('highlightStyle'));
    });
  });
  it('unhighlight all given features, but takes selection into account', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var selectedFeatureUid = features[0].ol_uid;
    wrapper.setState({
      selectedRowKeys: [selectedFeatureUid]
    });
    wrapper.instance().unhighlightFeatures(features);
    features.forEach(function (feature) {
      if (feature.ol_uid === selectedFeatureUid) {
        expect(feature.getStyle()).toEqual(wrapper.prop('selectStyle'));
      } else {
        expect(feature.getStyle()).toBe(null);
      }
    });
  });
  it('selects all given features', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().selectFeatures(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toEqual(wrapper.prop('selectStyle'));
    });
  });
  it('resets all given features to default feature style', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().resetFeatureStyles(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toBe(null);
    });
  });
  it('sets the appropriate select style to a feature if selection in grid changes', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var selectedRowKeys = [features[0].ol_uid, features[1].ol_uid];
    wrapper.instance().onSelectChange(selectedRowKeys);
    features.forEach(function (feature) {
      if (selectedRowKeys.includes(feature.ol_uid)) {
        expect(feature.getStyle()).toEqual(wrapper.prop('selectStyle'));
      } else {
        expect(feature.getStyle()).toBe(null);
      }
    });
    expect(wrapper.state('selectedRowKeys')).toEqual(selectedRowKeys);
  });
  it('returns the feature for a given row key', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    var rowKey = features[1].ol_uid;
    expect(wrapper.instance().getFeatureFromRowKey(rowKey)).toEqual(features[1]);
  });
  it('selects the feature on row click', function () {
    var onRowClickSpy = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features,
      onRowClick: onRowClickSpy
    });

    var clickedRow = {
      key: features[0].ol_uid
    };
    var zoomToFeaturesSpy = jest.spyOn(wrapper.instance(), 'zoomToFeatures');
    wrapper.instance().onRowClick(clickedRow);
    expect(onRowClickSpy).toHaveBeenCalled();
    expect(zoomToFeaturesSpy).toHaveBeenCalled();
    onRowClickSpy.mockRestore();
    zoomToFeaturesSpy.mockRestore();
  });
  it('highlights the feature on row mouse over', function () {
    var onRowMouseOverSpy = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features,
      onRowMouseOver: onRowMouseOverSpy
    });

    var clickedRow = {
      key: features[0].ol_uid
    };
    var highlightFeaturesSpy = jest.spyOn(wrapper.instance(), 'highlightFeatures');
    wrapper.instance().onRowMouseOver(clickedRow);
    expect(onRowMouseOverSpy).toHaveBeenCalled();
    expect(highlightFeaturesSpy).toHaveBeenCalled();
    onRowMouseOverSpy.mockRestore();
    highlightFeaturesSpy.mockRestore();
  });
  it('unhighlights the feature on row mouse out', function () {
    var onRowMouseOutSpy = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features,
      onRowMouseOut: onRowMouseOutSpy
    });

    var clickedRow = {
      key: features[0].ol_uid
    };
    var unhighlightFeaturesSpy = jest.spyOn(wrapper.instance(), 'unhighlightFeatures');
    wrapper.instance().onRowMouseOut(clickedRow);
    expect(onRowMouseOutSpy).toHaveBeenCalled();
    expect(unhighlightFeaturesSpy).toHaveBeenCalled();
    onRowMouseOutSpy.mockRestore();
    unhighlightFeaturesSpy.mockRestore();
  });
  it('handles the change of props', function () {
    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"]);

    expect(wrapper.instance()._source).toBeNull();
    expect(wrapper.instance()._layer).toBeNull();
    wrapper.setProps({
      map: map
    });
    expect(wrapper.instance()._source).toBeInstanceOf(_Vector["default"]);
    expect(wrapper.instance()._layer).toBeInstanceOf(_Vector2["default"]);
    expect(wrapper.instance()._source.getFeatures()).toEqual([]);
    var zoomToFeaturesSpy = jest.spyOn(wrapper.instance(), 'zoomToFeatures');
    wrapper.setProps({
      features: features,
      zoomToExtent: true
    });
    expect(wrapper.instance()._source.getFeatures()).toEqual(features);
    expect(zoomToFeaturesSpy).toHaveBeenCalled();
    zoomToFeaturesSpy.mockRestore();
    var mapOnSpy = jest.spyOn(map, 'on');
    wrapper.setProps({
      selectable: true
    });
    expect(mapOnSpy).toHaveBeenCalled();
    mapOnSpy.mockRestore();
    var mapUnSpy = jest.spyOn(map, 'un');
    wrapper.setProps({
      selectable: false
    });
    expect(mapUnSpy).toHaveBeenCalled();
    expect(wrapper.state('selectedRowKeys')).toEqual([]);
    mapUnSpy.mockRestore();
  });
  it('sets the highlight style to any hovered feature', function () {
    var getFeaturesAtPixelSpy = jest.spyOn(map, 'getFeaturesAtPixel').mockImplementation(function () {
      return [features[0]];
    });

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().onMapPointerMove({
      pixel: [19, 19]
    });
    expect(features[0].getStyle()).toEqual(wrapper.prop('highlightStyle'));
    expect(features[1].getStyle()).toEqual(null);
    expect(features[2].getStyle()).toEqual(null);
    getFeaturesAtPixelSpy.mockRestore();
  });
  it('sets the select style to any clicked/selected feature', function () {
    var getFeaturesAtPixelSpy = jest.spyOn(map, 'getFeaturesAtPixel').mockImplementation(function () {
      return [features[0]];
    });

    var wrapper = _TestUtil["default"].mountComponent(_FeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().onMapSingleClick({
      pixel: [19, 19]
    });
    expect(features[0].getStyle()).toEqual(wrapper.prop('selectStyle'));
    getFeaturesAtPixelSpy.mockRestore();
  });
});