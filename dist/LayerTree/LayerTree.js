"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("antd/es/tree/style");

var _tree = _interopRequireDefault(require("antd/es/tree"));

var React = _interopRequireWildcard(require("react"));

var _Map = _interopRequireDefault(require("ol/Map"));

var _Base = _interopRequireDefault(require("ol/layer/Base"));

var _Group = _interopRequireDefault(require("ol/layer/Group"));

var _Collection = _interopRequireDefault(require("ol/Collection"));

var _Observable = require("ol/Observable");

var _ol = require("ol");

var _isBoolean2 = _interopRequireDefault(require("lodash/isBoolean"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _Logger = _interopRequireDefault(require("@terrestris/base-util/dist/Logger"));

var _MapUtil = _interopRequireDefault(require("@terrestris/ol-util/dist/MapUtil/MapUtil"));

var _LayerTreeNode = _interopRequireDefault(require("./LayerTreeNode/LayerTreeNode"));

var _constants = require("../constants");

var _excluded = ["className", "layerGroup", "map", "nodeTitleRenderer"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

/**
 * The LayerTree.
 *
 * Note. This component expects that all layerGroups are permanently visible.
 *
 * @class LayerTree
 * @extends React.Component
 */
var LayerTree = /*#__PURE__*/function (_React$Component) {
  _inherits(LayerTree, _React$Component);

  var _super = _createSuper(LayerTree);

  /**
   * The default properties.
   */

  /**
   * The className added to this component.
   * @private
   */

  /**
   *  An array of ol.EventsKey as returned by on() or once().
   * @private
   */

  /**
   * Create the LayerTree.
   *
   * @constructs LayerTree
   */
  function LayerTree(props) {
    var _this;

    _classCallCheck(this, LayerTree);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "className", "".concat(_constants.CSS_PREFIX, "layertree"));

    _defineProperty(_assertThisInitialized(_this), "olListenerKeys", []);

    _defineProperty(_assertThisInitialized(_this), "onCollectionAdd", function (evt) {
      if (evt.element instanceof _Group["default"]) {
        _this.registerAddRemoveListeners(evt.element);
      }

      _this.rebuildTreeNodes();
    });

    _defineProperty(_assertThisInitialized(_this), "onCollectionRemove", function (evt) {
      _this.unregisterEventsByLayer(evt.element);

      if (evt.element instanceof _Group["default"]) {
        evt.element.getLayers().forEach(function (layer) {
          _this.unregisterEventsByLayer(layer);
        });
      }

      _this.rebuildTreeNodes();
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeLayers", function (evt) {
      _this.unregisterEventsByLayer(evt.oldValue);

      if (evt.oldValue instanceof _Collection["default"]) {
        evt.oldValue.forEach(function (layer) {
          return _this.unregisterEventsByLayer(layer);
        });
      }

      if (evt.target instanceof _Group["default"]) {
        _this.registerAddRemoveListeners(evt.target);
      }

      _this.rebuildTreeNodes();
    });

    _defineProperty(_assertThisInitialized(_this), "unregisterEventsByLayer", function (layer) {
      _this.olListenerKeys = _this.olListenerKeys.filter(function (key) {
        if (layer instanceof _Group["default"]) {
          var layers = layer.getLayers();

          if (key.target === layers) {
            if (key.type === 'add' && key.listener === _this.onCollectionAdd || key.type === 'remove' && key.listener === _this.onCollectionRemove || key.type === 'change:layers' && key.listener === _this.onChangeLayers) {
              (0, _Observable.unByKey)(key);
              return false;
            }
          }
        } else if (key.target === layer) {
          if (key.type === 'change:visible' && key.listener === _this.onLayerChangeVisible) {
            (0, _Observable.unByKey)(key);
            return false;
          }
        }

        return true;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rebuildTreeNodes", function (evt) {
      var mapResolution = _this.state.mapResolution;
      var newMapResolution = -1;

      if ((evt === null || evt === void 0 ? void 0 : evt.target) instanceof _Map["default"]) {
        newMapResolution = evt.target.getView().getResolution();

        if (mapResolution === newMapResolution) {
          // If map resolution didn't change => no redraw of tree nodes needed.
          return;
        }
      }

      _this.treeNodesFromLayerGroup(_this.state.layerGroup);

      var checkedKeys = _this.getVisibleOlUids();

      _this.setState({
        checkedKeys: checkedKeys,
        mapResolution: newMapResolution
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hasListener", function (target, type, listener) {
      return _this.olListenerKeys.some(function (listenerKey) {
        return listenerKey.target === target && listenerKey.type === type && listenerKey.listener === listener;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onLayerChangeVisible", function () {
      var checkedKeys = _this.getVisibleOlUids();

      _this.setState({
        checkedKeys: checkedKeys
      }, function () {
        _this.rebuildTreeNodes();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getVisibleOlUids", function () {
      var layers = _MapUtil["default"].getAllLayers(_this.state.layerGroup, function (layer) {
        return !(layer instanceof _Group["default"]) && layer.getVisible();
      }).filter(_this.props.filterFunction);

      return layers.map(_ol.getUid);
    });

    _defineProperty(_assertThisInitialized(_this), "onExpand", function (expandedKeys, info) {
      var onExpand = _this.props.onExpand;

      _this.rebuildTreeNodes();

      if (onExpand) {
        onExpand(expandedKeys, info);
      }
    });

    _this.state = {
      layerGroup: null,
      layerGroupRevision: null,
      treeNodes: [],
      checkedKeys: [],
      mapResolution: -1
    };
    return _this;
  }
  /**
   * Invoked after the component is instantiated as well as when it
   * receives new props. It should return an object to update state, or null
   * to indicate that the new props do not require any state updates.
   *
   * @param nextProps The next properties.
   * @param prevState The previous state.
   */


  _createClass(LayerTree, [{
    key: "componentDidMount",
    value:
    /**
     * Determines what to do on the initial mount.
     */
    function componentDidMount() {
      var _this2 = this;

      var layerGroup = this.props.layerGroup ? this.props.layerGroup : this.props.map.getLayerGroup();
      var revision = this.props.layerGroup ? this.props.layerGroup.getRevision() : 0;
      this.setState({
        layerGroup: layerGroup,
        layerGroupRevision: revision
      }, function () {
        _this2.registerAddRemoveListeners(_this2.state.layerGroup);

        _this2.registerResolutionChangeHandler();

        _this2.rebuildTreeNodes();
      });
    }
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     * @param prevState The previous state.
     */

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          layerGroup = _this$props.layerGroup,
          nodeTitleRenderer = _this$props.nodeTitleRenderer;

      if (layerGroup && prevState.layerGroup) {
        if (!(0, _isEqual2["default"])((0, _ol.getUid)(prevState.layerGroup), (0, _ol.getUid)(layerGroup))) {
          (0, _Observable.unByKey)(this.olListenerKeys);
          this.olListenerKeys = [];
          this.registerAddRemoveListeners(layerGroup);
          this.rebuildTreeNodes();
        }
      }

      if (nodeTitleRenderer !== prevProps.nodeTitleRenderer) {
        this.rebuildTreeNodes();
      }
    }
    /**
     * Determines what to do when the component is unmounted.
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _Observable.unByKey)(this.olListenerKeys);
    }
    /**
     * Creates TreeNodes from a given layergroup and sets the treeNodes in the state.
     *
     * @param groupLayer A grouplayer.
     */

  }, {
    key: "treeNodesFromLayerGroup",
    value: function treeNodesFromLayerGroup(groupLayer) {
      var _this3 = this;

      var layerArray = groupLayer.getLayers().getArray().filter(this.props.filterFunction);
      var treeNodes = layerArray.map(function (layer) {
        return _this3.treeNodeFromLayer(layer);
      });
      treeNodes.reverse();
      this.setState({
        treeNodes: treeNodes
      });
    }
    /**
     * Registers the add/remove listeners recursively for all ol.layer.Group.
     *
     * @param groupLayer A ol.layer.Group
     */

  }, {
    key: "registerAddRemoveListeners",
    value: function registerAddRemoveListeners(groupLayer) {
      var _this4 = this;

      var collection = groupLayer.getLayers();
      var addEvtKey = collection.on('add', this.onCollectionAdd);
      var removeEvtKey = collection.on('remove', this.onCollectionRemove); // @ts-ignore

      var changeEvtKey = groupLayer.on('change:layers', this.onChangeLayers);
      this.olListenerKeys.push(addEvtKey, removeEvtKey, changeEvtKey);
      collection.forEach(function (layer) {
        if (layer instanceof _Group["default"]) {
          _this4.registerAddRemoveListeners(layer);
        }
      });
    }
    /**
     * Registers an eventhandler on the `ol.View`, which will rebuild the tree
     * nodes whenever the view's resolution changes.
     */

  }, {
    key: "registerResolutionChangeHandler",
    value: function registerResolutionChangeHandler() {
      var map = this.props.map;
      var evtKey = map.on('moveend', this.rebuildTreeNodes.bind(this));
      this.olListenerKeys.push(evtKey); // TODO when and how to we unbind?
    }
    /**
     * Listens to the collections add event of a collection.
     * Registers add/remove listeners if element is a collection and rebuilds the
     * treeNodes.
     *
     * @param evt The add event.
     */

  }, {
    key: "getTreeNodeTitle",
    value:
    /**
     * Returns the title to render in the LayerTreeNode. If a nodeTitleRenderer
     * has been passed as prop, it will be called and the (custom) return value
     * will be rendered. Note: This can be any renderable element collection! If
     * no function is given (the default) the layer name will be passed.
     *
     * @param layer The layer attached to the tree node.
     * @return The title composition to render.
     */
    function getTreeNodeTitle(layer) {
      if ((0, _isFunction2["default"])(this.props.nodeTitleRenderer)) {
        return this.props.nodeTitleRenderer.call(this, layer);
      } else {
        return layer.get('name');
      }
    }
    /**
     * Creates a treeNode from a given layer.
     *
     * @param layer The given layer.
     * @return The corresponding LayerTreeNode Element.
     */

  }, {
    key: "treeNodeFromLayer",
    value: function treeNodeFromLayer(layer) {
      var _this5 = this;

      var childNodes;

      if (layer instanceof _Group["default"]) {
        var childLayers = layer.getLayers().getArray().filter(this.props.filterFunction);
        childNodes = childLayers.map(function (childLayer) {
          return _this5.treeNodeFromLayer(childLayer);
        });
        childNodes.reverse();
      } else {
        if (!this.hasListener(layer, 'change:visible', this.onLayerChangeVisible)) {
          var eventKey = layer.on('change:visible', this.onLayerChangeVisible);
          this.olListenerKeys.push(eventKey);
        }
      }

      return /*#__PURE__*/React.createElement(_LayerTreeNode["default"], {
        title: this.getTreeNodeTitle(layer),
        key: (0, _ol.getUid)(layer),
        inResolutionRange: _MapUtil["default"].layerInResolutionRange(layer, this.props.map)
      }, childNodes);
    }
    /**
     * Determines if the target has already registered the given listener for the
     * given eventtype.
     *
     * @param target The event target.
     * @param type The events type (name).
     * @param listener The function.
     * @return True if the listener is already contained in this.olListenerKeys.
     */

  }, {
    key: "onCheck",
    value:
    /**
     * Sets the visibility of a layer due to its checked state.
     *
     * @param checkedKeys Contains all checkedKeys.
     * @param checked The ant-tree event object for this event. See ant docs.
     */
    function onCheck(checkedKeys, e) {
      var checked = e.checked;
      var eventKey = e.node.props.eventKey;

      var layer = _MapUtil["default"].getLayerByOlUid(this.props.map, eventKey);

      this.setLayerVisibility(layer, checked);
    }
    /**
     * Sets the layer visibility. Calls itself recursively for groupLayers.
     *
     * @param layer The layer.
     * @param visibility The visibility.
     */

  }, {
    key: "setLayerVisibility",
    value: function setLayerVisibility(layer, visibility) {
      var _this6 = this;

      if (!(layer instanceof _Base["default"]) || !(0, _isBoolean2["default"])(visibility)) {
        _Logger["default"].error('setLayerVisibility called without layer or visiblity.');

        return;
      }

      if (layer instanceof _Group["default"]) {
        layer.setVisible(visibility);
        layer.getLayers().forEach(function (subLayer) {
          _this6.setLayerVisibility(subLayer, visibility);
        });
      } else {
        layer.setVisible(visibility); // if layer has a parent folder, make it visible too

        if (visibility) {
          var group = this.props.layerGroup ? this.props.layerGroup : this.props.map.getLayerGroup();
          this.setParentFoldersVisible(group, (0, _ol.getUid)(layer), group);
        }
      }
    }
    /**
     * Find the parent OlLayerGroup for the given layers ol_uid and make it
     * visible. Traverse the tree to also set the parenting layer groups visible
     *
     * @param currentGroup The current group to search in
     * @param olUid The ol_uid of the layer or folder that has been set visible
     * @param masterGroup The main group to search in. Needed when searching for
     * parents as we always have to start search from top
     */

  }, {
    key: "setParentFoldersVisible",
    value: function setParentFoldersVisible(currentGroup, olUid, masterGroup) {
      var _this7 = this;

      var items = currentGroup.getLayers().getArray();
      var groups = items.filter(function (l) {
        return l instanceof _Group["default"];
      });
      var match = items.find(function (i) {
        return (0, _ol.getUid)(i) === olUid;
      });

      if (match) {
        currentGroup.setVisible(true);
        this.setParentFoldersVisible(masterGroup, (0, _ol.getUid)(currentGroup), masterGroup);
        return;
      }

      groups.forEach(function (g) {
        _this7.setParentFoldersVisible(g, olUid, masterGroup);
      });
    }
    /**
     * The callback method for the drop event. Layers will get reordered in the map
     * and the tree.
     *
     * @param e The ant-tree event object for this event. See ant docs.
     */

  }, {
    key: "onDrop",
    value: function onDrop(e) {
      var dragLayer = _MapUtil["default"].getLayerByOlUid(this.props.map, e.dragNode.props.eventKey);

      var dragInfo = _MapUtil["default"].getLayerPositionInfo(dragLayer, this.props.map);

      var dragCollection = dragInfo.groupLayer.getLayers();

      var dropLayer = _MapUtil["default"].getLayerByOlUid(this.props.map, e.node.props.eventKey);

      var dropPos = e.node.props.pos.split('-');
      var location = e.dropPosition - Number(dropPos[dropPos.length - 1]);
      dragCollection.remove(dragLayer);

      var dropInfo = _MapUtil["default"].getLayerPositionInfo(dropLayer, this.props.map);

      var dropPosition = dropInfo.position;
      var dropCollection = dropInfo.groupLayer.getLayers(); // drop before node

      if (location === -1) {
        if (dropPosition === dropCollection.getLength() - 1) {
          dropCollection.push(dragLayer);
        } else {
          dropCollection.insertAt(dropPosition + 1, dragLayer);
        } // drop on node

      } else if (location === 0) {
        if (dropLayer instanceof _Group["default"]) {
          dropLayer.getLayers().push(dragLayer);
        } else {
          dropCollection.insertAt(dropPosition + 1, dragLayer);
        } // drop after node

      } else if (location === 1) {
        dropCollection.insertAt(dropPosition, dragLayer);
      }

      this.rebuildTreeNodes();
    }
    /**
     * Call rebuildTreeNodes onExpand to avoid sync issues.
     *
     */

  }, {
    key: "render",
    value:
    /**
     * The render function.
     */
    function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          layerGroup = _this$props2.layerGroup,
          map = _this$props2.map,
          nodeTitleRenderer = _this$props2.nodeTitleRenderer,
          passThroughProps = _objectWithoutProperties(_this$props2, _excluded);

      var ddListeners;

      if (passThroughProps.draggable) {
        ddListeners = {
          onDrop: this.onDrop.bind(this)
        };
      }

      var finalClassName = className ? "".concat(className, " ").concat(this.className) : this.className;
      return /*#__PURE__*/React.createElement(_tree["default"], _extends({
        className: finalClassName,
        checkedKeys: this.state.checkedKeys,
        onCheck: this.onCheck.bind(this),
        onExpand: this.onExpand
      }, ddListeners, passThroughProps), this.state.treeNodes);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.layerGroup && nextProps.layerGroup) {
        if (!(0, _isEqual2["default"])((0, _ol.getUid)(prevState.layerGroup), (0, _ol.getUid)(nextProps.layerGroup)) || !(0, _isEqual2["default"])(prevState.layerGroupRevision, nextProps.layerGroup.getRevision())) {
          return {
            layerGroup: nextProps.layerGroup,
            layerGroupRevision: nextProps.layerGroup.getRevision()
          };
        }
      }

      return null;
    }
  }]);

  return LayerTree;
}(React.Component);

_defineProperty(LayerTree, "defaultProps", {
  draggable: true,
  checkable: true,
  filterFunction: function filterFunction() {
    return true;
  }
});

var _default = LayerTree;
exports["default"] = _default;