import * as React from 'react';
import { AntTreeNodeDropEvent } from 'antd/lib/tree/Tree';
import { ReactElement } from 'react';
import { TreeProps, AntTreeNodeCheckedEvent } from 'antd/lib/tree';
import { EventDataNode } from 'rc-tree/lib/interface';
import OlMap from 'ol/Map';
import OlLayerBase from 'ol/layer/Base';
import OlLayerGroup from 'ol/layer/Group';
import OlMapEvent from 'ol/MapEvent';
import { LayerTreeNodeProps } from './LayerTreeNode/LayerTreeNode';
interface DefaultProps extends TreeProps {
    /**
     * An optional array-filter function that is applied to every layer and
     * subLayer. Return false to exclude this layer from the layerTree or true
     * to include it.
     *
     * Compare MDN Docs for Array.prototype.filter: https://mdn.io/array/filter
     */
    filterFunction: (value: any, index: number, array: any[]) => boolean;
}
export interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * A LayerGroup the Tree should handle.
     */
    layerGroup?: OlLayerGroup;
    /**
     * The OpenLayers map the tree interacts with.
     */
    map: OlMap;
    /**
     * A function that can be used to pass a custom node title. It can return
     * any renderable element (String, Number, Element etc.) and receives
     * the layer instance of the current tree node.
     */
    nodeTitleRenderer?: (layer: OlLayerBase) => React.ReactNode;
}
interface LayerTreeState {
    layerGroup: OlLayerGroup;
    layerGroupRevision?: number;
    treeNodes: ReactElement<LayerTreeNodeProps>[];
    checkedKeys: React.ReactText[];
    mapResolution: number;
}
export declare type LayerTreeProps = BaseProps & Partial<DefaultProps> & TreeProps;
/**
 * The LayerTree.
 *
 * Note. This component expects that all layerGroups are permanently visible.
 *
 * @class LayerTree
 * @extends React.Component
 */
declare class LayerTree extends React.Component<LayerTreeProps, LayerTreeState> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     *  An array of ol.EventsKey as returned by on() or once().
     * @private
     */
    olListenerKeys: any[];
    /**
     * Create the LayerTree.
     *
     * @constructs LayerTree
     */
    constructor(props: LayerTreeProps);
    /**
     * Invoked after the component is instantiated as well as when it
     * receives new props. It should return an object to update state, or null
     * to indicate that the new props do not require any state updates.
     *
     * @param nextProps The next properties.
     * @param prevState The previous state.
     */
    static getDerivedStateFromProps(nextProps: LayerTreeProps, prevState: LayerTreeState): {
        layerGroup: OlLayerGroup;
        layerGroupRevision: number;
    };
    /**
     * Determines what to do on the initial mount.
     */
    componentDidMount(): void;
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     * @param prevState The previous state.
     */
    componentDidUpdate(prevProps: LayerTreeProps, prevState: LayerTreeState): void;
    /**
     * Determines what to do when the component is unmounted.
     */
    componentWillUnmount(): void;
    /**
     * Creates TreeNodes from a given layergroup and sets the treeNodes in the state.
     *
     * @param groupLayer A grouplayer.
     */
    treeNodesFromLayerGroup(groupLayer: OlLayerGroup): void;
    /**
     * Registers the add/remove listeners recursively for all ol.layer.Group.
     *
     * @param groupLayer A ol.layer.Group
     */
    registerAddRemoveListeners(groupLayer: OlLayerGroup): void;
    /**
     * Registers an eventhandler on the `ol.View`, which will rebuild the tree
     * nodes whenever the view's resolution changes.
     */
    registerResolutionChangeHandler(): void;
    /**
     * Listens to the collections add event of a collection.
     * Registers add/remove listeners if element is a collection and rebuilds the
     * treeNodes.
     *
     * @param evt The add event.
     */
    onCollectionAdd: (evt: any) => void;
    /**
     * Listens to the collections remove event of a collection.
     * Unregisters the events of deleted layers and rebuilds the treeNodes.
     *
     * @param evt The remove event.
     */
    onCollectionRemove: (evt: any) => void;
    /**
     * Listens to the LayerGroups change:layers event.
     * Unregisters the old and reregisters new listeners.
     *
     * @param evt The change event.
     */
    onChangeLayers: (evt: any) => void;
    /**
     * Unregisters the Events of a given layer.
     *
     * @param layer An ol.layer.Base.
     */
    unregisterEventsByLayer: (layer: OlLayerBase) => void;
    /**
     * Rebuilds the treeNodes and its checked states.
     * @param evt The OpenLayers MapEvent (passed by moveend)
     *
     */
    rebuildTreeNodes: (evt?: OlMapEvent) => void;
    /**
     * Returns the title to render in the LayerTreeNode. If a nodeTitleRenderer
     * has been passed as prop, it will be called and the (custom) return value
     * will be rendered. Note: This can be any renderable element collection! If
     * no function is given (the default) the layer name will be passed.
     *
     * @param layer The layer attached to the tree node.
     * @return The title composition to render.
     */
    getTreeNodeTitle(layer: OlLayerBase): any;
    /**
     * Creates a treeNode from a given layer.
     *
     * @param layer The given layer.
     * @return The corresponding LayerTreeNode Element.
     */
    treeNodeFromLayer(layer: OlLayerBase): ReactElement<LayerTreeNodeProps>;
    /**
     * Determines if the target has already registered the given listener for the
     * given eventtype.
     *
     * @param target The event target.
     * @param type The events type (name).
     * @param listener The function.
     * @return True if the listener is already contained in this.olListenerKeys.
     */
    hasListener: (target: any, type: any, listener: any) => boolean;
    /**
     * Reacts to the layer change:visible event and calls setCheckedState.
     *
     * @param evt The change:visible event
     */
    onLayerChangeVisible: () => void;
    /**
     * Get the flat array of ol_uids from visible non groupLayers.
     *
     * @return The visible ol_uids.
     */
    getVisibleOlUids: () => any;
    /**
     * Sets the visibility of a layer due to its checked state.
     *
     * @param checkedKeys Contains all checkedKeys.
     * @param checked The ant-tree event object for this event. See ant docs.
     */
    onCheck(checkedKeys: string[], e: AntTreeNodeCheckedEvent): void;
    /**
     * Sets the layer visibility. Calls itself recursively for groupLayers.
     *
     * @param layer The layer.
     * @param visibility The visibility.
     */
    setLayerVisibility(layer: OlLayerBase, visibility: boolean): void;
    /**
     * Find the parent OlLayerGroup for the given layers ol_uid and make it
     * visible. Traverse the tree to also set the parenting layer groups visible
     *
     * @param currentGroup The current group to search in
     * @param olUid The ol_uid of the layer or folder that has been set visible
     * @param masterGroup The main group to search in. Needed when searching for
     * parents as we always have to start search from top
     */
    setParentFoldersVisible(currentGroup: OlLayerGroup, olUid: string, masterGroup: OlLayerGroup): void;
    /**
     * The callback method for the drop event. Layers will get reordered in the map
     * and the tree.
     *
     * @param e The ant-tree event object for this event. See ant docs.
     */
    onDrop(e: AntTreeNodeDropEvent): void;
    /**
     * Call rebuildTreeNodes onExpand to avoid sync issues.
     *
     */
    onExpand: (expandedKeys: string[], info: {
        node: EventDataNode;
        expanded: boolean;
        nativeEvent: MouseEvent;
    }) => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default LayerTree;
