"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var React = _interopRequireWildcard(require("react"));

var _Group = _interopRequireDefault(require("ol/layer/Group"));

var _Tile = _interopRequireDefault(require("ol/layer/Tile"));

var _TileWMS = _interopRequireDefault(require("ol/source/TileWMS"));

var OlObservable = _interopRequireWildcard(require("ol/Observable"));

var _Collection = _interopRequireDefault(require("ol/Collection"));

var _TestUtil = _interopRequireDefault(require("../Util/TestUtil"));

var _LayerTree = _interopRequireDefault(require("./LayerTree"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

describe('<LayerTree />', function () {
  var layerGroup;
  var layerSubGroup;
  var map;
  var layer1;
  var layer2;
  var layer3;
  beforeEach(function () {
    var layerSource1 = new _TileWMS["default"]();
    layer1 = new _Tile["default"]({
      name: 'layer1',
      source: layerSource1
    });
    var layerSource2 = new _TileWMS["default"]();
    layer2 = new _Tile["default"]({
      name: 'layer2',
      visible: false,
      source: layerSource2
    });
    var layerSource3 = new _TileWMS["default"]();
    layer3 = new _Tile["default"]({
      name: 'layer3',
      visible: false,
      source: layerSource3
    });
    layerSubGroup = new _Group["default"]({
      name: 'layerSubGroup',
      layers: [layer3]
    });
    layerGroup = new _Group["default"]({
      name: 'layerGroup',
      layers: [layer1, layer2, layerSubGroup]
    });
    map = _TestUtil["default"].createMap();
    map.setLayerGroup(layerGroup);
  });
  afterEach(function () {
    _TestUtil["default"].removeMap(map);
  });
  it('is defined', function () {
    expect(_LayerTree["default"]).not.toBeUndefined();
  });
  it('can be rendered', function () {
    var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], {
      map: map
    });

    expect(wrapper).not.toBeUndefined();
  });
  it('layergroup taken from map if not provided', function () {
    var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], {
      map: map
    });

    expect(wrapper.state('layerGroup')).toBe(map.getLayerGroup());
  });
  it('unmount removes listeners', function () {
    OlObservable.unByKey = jest.fn();

    var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], {
      map: map
    });

    var olListenerKeys = wrapper.instance().olListenerKeys;
    wrapper.unmount();
    expect(OlObservable.unByKey).toHaveBeenCalled();
    expect(OlObservable.unByKey).toHaveBeenCalledWith(olListenerKeys);
  });
  it('CWR with new layerGroup rebuild listeners and treenodes ', function () {
    var props = {
      layerGroup: layerGroup,
      map: map
    };

    var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

    var subLayer = new _Tile["default"]({
      name: 'subLayer',
      source: new _TileWMS["default"]()
    });
    var nestedLayerGroup = new _Group["default"]({
      name: 'nestedLayerGroup',
      layers: [subLayer]
    });
    expect(wrapper.instance().olListenerKeys).toHaveLength(10);
    wrapper.setProps({
      layerGroup: nestedLayerGroup
    });
    expect(wrapper.instance().olListenerKeys).toHaveLength(4);
  });
  describe('<LayerTreeNode> creation', function () {
    it('adds a <LayerTreeNode> for every child', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('.ant-tree-treenode');
      expect(treeNodes).toHaveLength(4);
    }); // TODO This test could be better if the TreeNodes where iterable, but they
    // are not. See comment below.
    // it('can handle nested `ol.layer.group`s', () => {
    //   const props = {
    //     layerGroup,
    //     map
    //   };
    //   const subLayer = new OlLayerTile({
    //     name: 'subLayer',
    //     source: new OlSourceTileWMS()
    //   });
    //   const nestedLayerGroup = new OlLayerGroup({
    //     name: 'nestedLayerGroup',
    //     layers: [subLayer]
    //   });
    //   layerGroup.getLayers().push(nestedLayerGroup);
    //   const wrapper = TestUtil.mountComponent(LayerTree, props);
    //   const treeNodes = wrapper.find('.ant-tree-treenode');
    //   const groupNode = treeNodes.at(0);
    //   const subNode = groupNode.props().children[0];
    //   expect(subNode.props.title).toBe(subLayer.get('name'));
    // });

    it('can handle a replacement of layergroups `ol.Collection`', function () {
      var props = {
        map: map
      };
      var subLayer = new _Tile["default"]({
        name: 'subLayer',
        source: new _TileWMS["default"]()
      });

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      map.getLayerGroup().setLayers(new _Collection["default"]([subLayer]));
      expect(rebuildSpy).toHaveBeenCalled();
      rebuildSpy.mockRestore();
    });
    it('sets the layer name as title per default', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('LayerTreeNode');
      treeNodes.forEach(function (node, index) {
        var reverseIndex = treeNodes.length - (index + 1);
        var layer = layerGroup.getLayers().item(reverseIndex);
        expect(node.props().title).toBe(layer.get('name'));
      });
    });
    it('accepts a custom title renderer function', function () {
      var nodeTitleRenderer = function nodeTitleRenderer(layer) {
        return /*#__PURE__*/React.createElement("span", {
          className: "span-1"
        }, /*#__PURE__*/React.createElement("span", {
          className: "sub-span-1"
        }, layer.get('name')), /*#__PURE__*/React.createElement("span", {
          className: "sub-span-2"
        }));
      };

      var props = {
        layerGroup: layerGroup,
        map: map,
        nodeTitleRenderer: nodeTitleRenderer
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('LayerTreeNode');
      treeNodes.forEach(function (node, index) {
        var reverseIndex = treeNodes.length - (index + 1);
        var layer = layerGroup.getLayers().item(reverseIndex);
        expect(node.find('span.span-1').length).toBe(1);
        expect(node.find('span.sub-span-1').length).toBe(1);
        expect(node.find('span.sub-span-1').props().children).toBe(layer.get('name'));
        expect(node.find('span.sub-span-2').length).toBe(1);
      });
    });
    it('can filter layers if a filterFunction is given', function () {
      var filterFunction = function filterFunction(layer) {
        return layer.get('name') !== 'layer1';
      };

      var props = {
        layerGroup: layerGroup,
        map: map,
        filterFunction: filterFunction
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('.ant-tree-treenode');
      expect(treeNodes.length).toBe(3);
    });
    it('sets the right keys for the layers', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('LayerTreeNode');
      treeNodes.forEach(function (node, index) {
        var reverseIndex = treeNodes.length - (index + 1);
        var layer = layerGroup.getLayers().item(reverseIndex);
        expect(node.props().eventKey).toBe(layer.ol_uid.toString());
      });
    });
    it('sets visible layers as checked', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('LayerTreeNode');
      treeNodes.forEach(function (node, index) {
        var reverseIndex = treeNodes.length - (index + 1);
        var layer = layerGroup.getLayers().item(reverseIndex);
        expect(layer.getVisible()).toBe(node.props().checked);
      });
    });
    describe('#treeNodeFromLayer', function () {
      it('returns a LayerTreeNode when called with a layer', function () {
        var props = {
          layerGroup: layerGroup,
          map: map
        };
        layerGroup.setVisible(false);

        var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

        var treeNode = wrapper.instance().treeNodeFromLayer(layer1);
        expect(treeNode.props.title).toBe(layer1.get('name'));
        expect(treeNode.key).toBe(layer1.ol_uid.toString());
      });
    });
  });
  describe('#onCheck', function () {
    it('sets the correct visibility to the layer from the checked state', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNodes = wrapper.find('LayerTreeNode');
      treeNodes.forEach(function (node, index) {
        var reverseIndex = treeNodes.length - (index + 1);
        var layer = layerGroup.getLayers().item(reverseIndex);
        var checkBox = node.find('.ant-tree-checkbox');
        var wasVisible = layer.getVisible();
        checkBox.simulate('click');
        expect(wasVisible).toBe(!layer.getVisible());
      });
    });
  });
  describe('event handling', function () {
    it('sets checked state corresponding to layer.setVisible', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var treeNode = wrapper.find('.ant-tree-treenode').at(3);
      expect(treeNode.find('.ant-tree-checkbox-checked').length).toEqual(1);
      layer1.setVisible(false);
      wrapper.update();
      treeNode = wrapper.find('.ant-tree-treenode').at(3);
      expect(treeNode.find('.ant-tree-checkbox-checked').length).toEqual(0);
      layer1.setVisible(true);
      wrapper.update();
      treeNode = wrapper.find('.ant-tree-treenode').at(3);
      expect(treeNode.find('.ant-tree-checkbox-checked').length).toEqual(1);
    });
    it('triggers tree rebuild on nodeTitleRenderer changes', function () {
      var exampleNodeTitleRenderer = function exampleNodeTitleRenderer(layer) {
        return /*#__PURE__*/React.createElement("span", {
          className: "span-1"
        }, layer.get('name'));
      };

      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      wrapper.setProps({
        nodeTitleRenderer: exampleNodeTitleRenderer
      });
      expect(rebuildSpy).toHaveBeenCalledTimes(1);
      wrapper.setProps({
        nodeTitleRenderer: null
      });
      expect(rebuildSpy).toHaveBeenCalledTimes(2);
      rebuildSpy.mockRestore();
    });
    it('triggers tree rebuild on layer add', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };
      var layer = new _Tile["default"]({
        source: new _TileWMS["default"]()
      });

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      layerGroup.getLayers().push(layer);
      expect(rebuildSpy).toHaveBeenCalled();
      rebuildSpy.mockRestore();
    });
    it('… also registers add/remove events for added groups ', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };
      var layer = new _Tile["default"]({
        source: new _TileWMS["default"]()
      });
      var group = new _Group["default"]({
        layers: [layer]
      });

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      var registerSpy = jest.spyOn(wrapper.instance(), 'registerAddRemoveListeners');
      layerGroup.getLayers().push(group);
      expect(rebuildSpy).toHaveBeenCalled();
      expect(registerSpy).toHaveBeenCalled();
      rebuildSpy.mockRestore();
      registerSpy.mockRestore();
    });
    it('trigger unregisterEventsByLayer and rebuildTreeNodes for removed layers ', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      var unregisterSpy = jest.spyOn(wrapper.instance(), 'unregisterEventsByLayer');
      layerGroup.getLayers().remove(layer1);
      expect(rebuildSpy).toHaveBeenCalled();
      expect(unregisterSpy).toHaveBeenCalled();
      rebuildSpy.mockRestore();
      unregisterSpy.mockRestore();
    });
    it('… unregister recursively for removed groups', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };
      var subLayer1 = new _Tile["default"]({
        source: new _TileWMS["default"]()
      });
      var subLayer2 = new _Tile["default"]({
        source: new _TileWMS["default"]()
      });
      var nestedLayerGroup = new _Group["default"]({
        name: 'nestedLayerGroup',
        layers: [subLayer1, subLayer2]
      });
      layerGroup.getLayers().push(nestedLayerGroup);

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      var rebuildSpy = jest.spyOn(wrapper.instance(), 'rebuildTreeNodes');
      var unregisterSpy = jest.spyOn(wrapper.instance(), 'unregisterEventsByLayer');
      layerGroup.getLayers().remove(nestedLayerGroup);
      expect(rebuildSpy).toHaveBeenCalledTimes(1);
      expect(unregisterSpy).toHaveBeenCalledTimes(3);
      rebuildSpy.mockRestore();
      unregisterSpy.mockRestore();
    });
    describe('#unregisterEventsByLayer', function () {
      it('removes the listener and the eventKey from olListenerKeys', function () {
        var props = {
          layerGroup: layerGroup,
          map: map
        };
        var subLayer1 = new _Tile["default"]({
          source: new _TileWMS["default"]()
        });
        var subLayer2 = new _Tile["default"]({
          source: new _TileWMS["default"]()
        });
        var nestedLayerGroup = new _Group["default"]({
          name: 'nestedLayerGroup',
          layers: [subLayer1, subLayer2]
        });
        layerGroup.getLayers().push(nestedLayerGroup);

        var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

        var oldOlListenerKey = wrapper.instance().olListenerKeys;
        OlObservable.unByKey = jest.fn();
        wrapper.instance().unregisterEventsByLayer(subLayer1);
        var newOlListenerKey = wrapper.instance().olListenerKeys;
        expect(OlObservable.unByKey).toHaveBeenCalled();
        expect(newOlListenerKey.length).toBe(oldOlListenerKey.length - 1);
      });
      it('… of children for groups', function () {
        var props = {
          layerGroup: layerGroup,
          map: map
        };
        var subLayer1 = new _Tile["default"]({
          source: new _TileWMS["default"]()
        });
        var subLayer2 = new _Tile["default"]({
          source: new _TileWMS["default"]()
        });
        var nestedLayerGroup = new _Group["default"]({
          name: 'nestedLayerGroup',
          layers: [subLayer1, subLayer2]
        });
        layerGroup.getLayers().push(nestedLayerGroup);

        var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

        var oldOlListenerKey = wrapper.instance().olListenerKeys;
        OlObservable.unByKey = jest.fn();
        wrapper.instance().unregisterEventsByLayer(nestedLayerGroup);
        var newOlListenerKey = wrapper.instance().olListenerKeys;
        expect(OlObservable.unByKey).toHaveBeenCalledTimes(2);
        expect(newOlListenerKey.length).toBe(oldOlListenerKey.length - 2);
      });
    });
  });
  describe('#setLayerVisibility', function () {
    it('logs an error if called with invalid arguments', function () {
      var logSpy = jest.spyOn(_Logger["default"], 'error');
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      wrapper.instance().setLayerVisibility();
      expect(logSpy).toHaveBeenCalled();
      logSpy.mockReset();
      wrapper.instance().setLayerVisibility('peter');
      expect(logSpy).toHaveBeenCalled();
      logSpy.mockReset();
      wrapper.instance().setLayerVisibility(layer1, 'peter');
      expect(logSpy).toHaveBeenCalled();
      logSpy.mockRestore();
    });
    it('sets the visibility of a single layer', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      layer1.setVisible(true);
      wrapper.instance().setLayerVisibility(layer1, false);
      expect(layer1.getVisible()).toBe(false);
      wrapper.instance().setLayerVisibility(layer1, true);
      expect(layer1.getVisible()).toBe(true);
    });
    it('sets the visibility for the children when called with a layerGroup', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      layer1.setVisible(true);
      layer2.setVisible(true);
      wrapper.instance().setLayerVisibility(layerGroup, false);
      expect(layerGroup.getVisible()).toBe(false);
      expect(layer1.getVisible()).toBe(false);
      expect(layer2.getVisible()).toBe(false);
      wrapper.instance().setLayerVisibility(layerGroup, true);
      expect(layerGroup.getVisible()).toBe(true);
      expect(layer1.getVisible()).toBe(true);
      expect(layer2.getVisible()).toBe(true);
    });
    it('sets the parent layerGroups visible when layer has been made visible', function () {
      var props = {
        layerGroup: layerGroup,
        map: map
      };

      var wrapper = _TestUtil["default"].mountComponent(_LayerTree["default"], props);

      layerGroup.setVisible(false);
      layerSubGroup.setVisible(false);
      layer1.setVisible(false);
      layer2.setVisible(false);
      layer3.setVisible(false);
      wrapper.instance().setLayerVisibility(layer2, true);
      expect(layerGroup.getVisible()).toBe(true);
      expect(layer1.getVisible()).toBe(false);
      expect(layer2.getVisible()).toBe(true);
      expect(layer3.getVisible()).toBe(false);
      expect(layerSubGroup.getVisible()).toBe(false);
      wrapper.instance().setLayerVisibility(layer1, true);
      expect(layerGroup.getVisible()).toBe(true);
      expect(layer1.getVisible()).toBe(true);
      expect(layer2.getVisible()).toBe(true);
      expect(layer3.getVisible()).toBe(false);
      expect(layerSubGroup.getVisible()).toBe(false);
      layerGroup.setVisible(false);
      layerSubGroup.setVisible(false);
      layer1.setVisible(false);
      layer2.setVisible(false);
      layer3.setVisible(false);
      wrapper.instance().setLayerVisibility(layer3, true);
      expect(layer1.getVisible()).toBe(false);
      expect(layer2.getVisible()).toBe(false);
      expect(layer3.getVisible()).toBe(true);
      expect(layerSubGroup.getVisible()).toBe(true);
      expect(layerGroup.getVisible()).toBe(true);
    });
  }); // TODO rc-tree drop event seems to be broken in PhantomJS / cant be simulated

  describe('#onDrop', function () {// let props = {};
    //
    // beforeEach(() => {
    //   props = {
    //     layerGroup,
    //     map
    //   };
    //   const layer3 = new OlLayerTile({
    //     name: 'layer3',
    //     source: new OlSourceTileWMS()
    //   });
    //   const subLayer = new OlLayerTile({
    //     name: 'subLayer',
    //     source: new OlSourceTileWMS()
    //   });
    //   const nestedLayerGroup = new OlLayerGroup({
    //     name: 'nestedLayerGroup',
    //     layers: [subLayer]
    //   });
    //   props.layerGroup.getLayers().push(layer3);
    //   props.layerGroup.getLayers().push(nestedLayerGroup);
    // });
    //
    // it('can handle drop on leaf', () => {
    //   const wrapper = TestUtil.mountComponent(LayerTree, props);
    //   const firstNode = wrapper.childAt(0);
    //   const thirdNode = wrapper.childAt(2);
    //   const dragTarget = firstNode.find('.ant-tree-node-content-wrapper');
    //   const dropTarget = thirdNode.find('.react-geo-layertree-node');
    //
    //   console.log(props.layerGroup.getLayers().getLength());
    //   console.log(props.layerGroup.getLayers().item(0).get('name'));
    //   console.log(props.layerGroup.getLayers().item(1).get('name'));
    //   console.log(props.layerGroup.getLayers().item(2).get('name'));
    //   console.log(props.layerGroup.getLayers().item(3).get('name'));
    //
    //   debugger
    //
    //   console.log('--------');
    //   dragTarget.simulate('dragStart');
    //   dropTarget.simulate('dragOver');
    //   dropTarget.simulate('drop');
    //
    //   console.log(props.layerGroup.getLayers().getLength());
    //   console.log(props.layerGroup.getLayers().item(0).get('name'));
    //   console.log(props.layerGroup.getLayers().item(1).get('name'));
    //   console.log(props.layerGroup.getLayers().item(2).get('name'));
    //   console.log(props.layerGroup.getLayers().item(3).get('name'));
    //
    //
    // });
    // it('can handle drop before leaf', () => {
    //   const wrapper = TestUtil.mountComponent(LayerTree, props);
    //   const treeNodes = wrapper.children('TreeNode');
    //   const firstNode = treeNodes.get(0);
    //   const thirdNode = treeNodes.get(2);
    // });
    //
    // it('can handle drop after leaf', () => {
    //   const wrapper = TestUtil.mountComponent(LayerTree, props);
    //   const treeNodes = wrapper.children('TreeNode');
    //   const firstNode = treeNodes.get(0);
    //   const thirdNode = treeNodes.get(2);
    // });
    //
    // it('can handle drop on folder', () => {
    //   const wrapper = TestUtil.mountComponent(LayerTree, props);
    //   const treeNodes = wrapper.children('TreeNode');
    //   const firstNode = treeNodes.get(0);
    //   const folderNode = treeNodes.get(3);
    // });
  });
});