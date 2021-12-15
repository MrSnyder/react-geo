"use strict";

var _Vector = _interopRequireDefault(require("ol/source/Vector"));

var _Vector2 = _interopRequireDefault(require("ol/layer/Vector"));

var _GeometryCollection = _interopRequireDefault(require("ol/geom/GeometryCollection"));

var _differenceWith2 = _interopRequireDefault(require("lodash/differenceWith"));

var _TestUtil = _interopRequireDefault(require("../../Util/TestUtil"));

var _AgFeatureGrid = _interopRequireDefault(require("./AgFeatureGrid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('<AgFeatureGrid />', function () {
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
    expect(_AgFeatureGrid["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"]);

    expect(wrapper).not.toBeUndefined();
  });
  it('initializes a vector layer on mount (if map prop is given)', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map
    });

    var layerCand = map.getLayers().getArray().filter(function (layer) {
      return layer.get('name') === wrapper.prop('layerName');
    });
    expect(layerCand).toHaveLength(1);
    expect(layerCand[0]).toBeInstanceOf(_Vector2["default"]);
    expect(wrapper.instance()._source).toBeInstanceOf(_Vector["default"]);
    expect(wrapper.instance()._layer).toBeInstanceOf(_Vector2["default"]);

    var wrapperWithoutMap = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"]);

    expect(wrapperWithoutMap.instance()._source).toBeNull();
    expect(wrapperWithoutMap.instance()._layer).toBeNull();
  });
  it('initializes a vector layer if it\'s not already added to the map only', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
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
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    expect(wrapper.instance()._layer.getStyle()).toEqual(wrapper.prop('featureStyle'));
  });
  it('removes the vector layer from the map on unmount', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
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

    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
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
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
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
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    var got = wrapper.instance().getColumnDefs();
    var exp = [{
      'field': 'id',
      'headerName': 'id'
    }, {
      'field': 'name',
      'headerName': 'name'
    }];
    expect(got).toEqual(exp);
    wrapper.setProps({
      attributeBlacklist: ['id']
    });
    var gotBlacklisted = wrapper.instance().getColumnDefs();
    var expBlacklisted = [{
      field: 'name',
      headerName: 'name'
    }];
    expect(gotBlacklisted).toEqual(expBlacklisted);
  });
  it('generates the appropriate data to render', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    var got = wrapper.instance().getRowData();
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
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
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
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().highlightFeatures(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toEqual(wrapper.prop('highlightStyle'));
    });
  });
  it('selects all given features', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().selectFeatures(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toEqual(wrapper.prop('selectStyle'));
    });
  });
  it('resets all given features to default feature style', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    wrapper.instance().resetFeatureStyles(features);
    features.forEach(function (feature) {
      expect(feature.getStyle()).toBe(null);
    });
  });
  it('returns the feature for a given row key', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features
    });

    var rowKey = features[1].ol_uid;
    expect(wrapper.instance().getFeatureFromRowKey(rowKey)).toEqual(features[1]);
  });
  it('selects the feature on row click', function () {
    var onRowClickSpy = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features,
      onRowClick: onRowClickSpy
    });

    var clickedRow = {
      data: {
        key: features[0].ol_uid
      }
    };
    var zoomToFeaturesSpy = jest.spyOn(wrapper.instance(), 'zoomToFeatures');
    wrapper.instance().onRowClick(clickedRow);
    expect(onRowClickSpy).toHaveBeenCalled();
    expect(zoomToFeaturesSpy).not.toHaveBeenCalled();
    onRowClickSpy.mockRestore();
    zoomToFeaturesSpy.mockRestore();
  });
  it('highlights the feature on row mouse over', function () {
    var onRowMouseOverSpy = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features,
      onRowMouseOver: onRowMouseOverSpy
    });

    var clickedRow = {
      data: {
        key: features[0].ol_uid
      }
    };
    var highlightFeaturesSpy = jest.spyOn(wrapper.instance(), 'highlightFeatures');
    wrapper.instance().onRowMouseOver(clickedRow);
    expect(onRowMouseOverSpy).toHaveBeenCalled();
    expect(highlightFeaturesSpy).toHaveBeenCalled();
    onRowMouseOverSpy.mockRestore();
    highlightFeaturesSpy.mockRestore();
  });
  it('handles the change of props', function () {
    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"]);

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
    mapUnSpy.mockRestore();
  });
  it('handles row de-selection correctly', function () {
    expect.assertions(3);
    var onRowSelectionChange = jest.fn();
    var mockedGetSelectedRows = jest.fn();
    var selectionCurrent = [{
      key: '1',
      name: 'Yarmolenko'
    }, {
      key: '2',
      name: 'Kagawa'
    }, {
      key: '3',
      name: 'Zorc'
    }, {
      key: '4',
      name: 'Chapuisat'
    }];
    var selectionAfter = [{
      key: '1',
      name: 'Yarmolenko'
    }, {
      key: '2',
      name: 'Kagawa'
    }];
    mockedGetSelectedRows.mockReturnValueOnce(selectionAfter);

    var wrapper = _TestUtil["default"].mountComponent(_AgFeatureGrid["default"], {
      map: map,
      features: features,
      onRowSelectionChange: onRowSelectionChange
    });

    wrapper.setState({
      selectedRows: selectionCurrent
    }, function () {
      var mockedEvt = {
        api: {
          getSelectedRows: mockedGetSelectedRows
        }
      };
      wrapper.instance().onSelectionChanged(mockedEvt);
      expect(onRowSelectionChange).toHaveBeenCalledTimes(1); // selectedRows is the first passed parameter

      var selectedRows = onRowSelectionChange.mock.calls[0][0];
      expect(selectedRows).toEqual(selectionAfter); // deselectedRows is the third passed parameter

      var deselectedRows = (0, _differenceWith2["default"])(selectionCurrent, selectionAfter, function (a, b) {
        return a.key === b.key;
      });
      var deselectedRowsIs = onRowSelectionChange.mock.calls[0][2];
      expect(deselectedRowsIs).toEqual(deselectedRows);
    });
  });
});