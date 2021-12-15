import * as React from 'react';
import OlStyle from 'ol/style/Style';
import OlMap from 'ol/Map';
import OlFeature from 'ol/Feature';
import OlSourceVector from 'ol/source/Vector';
import OlLayerVector from 'ol/layer/Vector';
import OlGeometry from 'ol/geom/Geometry';
import OlMapBrowserEvent from 'ol/MapBrowserEvent';
import './FeatureGrid.less';
import { ColumnProps, TableProps } from 'antd/lib/table';
interface DefaultProps {
    /**
     * The features to show in the grid and the map (if set).
     */
    features: OlFeature<OlGeometry>[];
    /**
     */
    attributeBlacklist?: string[];
    /**
     * The default style to apply to the features.
     */
    featureStyle: OlStyle | (() => OlStyle);
    /**
     * The highlight style to apply to the features.
     */
    highlightStyle: OlStyle | (() => OlStyle);
    /**
     * The select style to apply to the features.
     */
    selectStyle: OlStyle | (() => OlStyle);
    /**
     * The name of the vector layer presenting the features in the grid.
     */
    layerName: string;
    /**
     * Custom column definitions to apply to the given column (mapping via key).
     * See https://ant.design/components/table/#Column.
     */
    columnDefs: ColumnProps<any>;
    /**
     * A Function that creates the rowkey from the given feature.
     * Receives the feature as property.
     * Default is: feature => feature.ol_uid
     *
     */
    keyFunction: (feature: OlFeature<OlGeometry>) => string;
    /**
     * Whether the map should center on the current feature's extent on init or
     * not.
     */
    zoomToExtent: boolean;
    /**
     * Whether rows and features should be selectable or not.
     */
    selectable: boolean;
}
export interface BaseProps {
    /**
     * A CSS class which should be added to the table.
     */
    className?: string;
    /**
     * A CSS class to add to each table row or a function that
     * is evaluated for each record.
     */
    rowClassName?: string | ((record: any) => string);
    /**
     * The map the features should be rendered on. If not given, the features
     * will be rendered in the table only.
     */
    map?: OlMap;
    /**
     * Callback function, that will be called on rowclick.
     */
    onRowClick?: (row: any, feature: OlFeature<OlGeometry>) => void;
    /**
     * Callback function, that will be called on rowmouseover.
     */
    onRowMouseOver?: (row: any, feature: OlFeature<OlGeometry>) => void;
    /**
     * Callback function, that will be called on rowmouseout.
     */
    onRowMouseOut?: (row: any, feature: OlFeature<OlGeometry>) => void;
    /**
     * Callback function, that will be called if the selection changes.
     */
    onRowSelectionChange?: (selectedRowKeys: Array<number | string>, selectedFeatures: OlFeature<OlGeometry>[]) => void;
}
interface FeatureGridState {
    selectedRowKeys: string[];
}
export declare type FeatureGridProps = BaseProps & Partial<DefaultProps> & TableProps<any>;
/**
 * The FeatureGrid.
 *
 * @class The FeatureGrid
 * @extends React.Component
 */
export declare class FeatureGrid extends React.Component<FeatureGridProps, FeatureGridState> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The class name to add to this component.
     * @private
     */
    _className: string;
    /**
     * The class name to add to each table row.
     * @private
     */
    _rowClassName: string;
    /**
     * The prefix to use for each table row class.
     * @private
     */
    _rowKeyClassNamePrefix: string;
    /**
     * The hover class name.
     * @private
     */
    _rowHoverClassName: string;
    /**
     * The source holding the features of the grid.
     * @private
     */
    _source: OlSourceVector<OlGeometry>;
    /**
     * The layer representing the features of the grid.
     * @private
     */
    _layer: OlLayerVector<OlSourceVector<OlGeometry>>;
    /**
     * The constructor.
     */
    constructor(props: FeatureGridProps);
    /**
     * Called on lifecycle phase componentDidMount.
     */
    componentDidMount(): void;
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     */
    componentDidUpdate(prevProps: FeatureGridProps): void;
    /**
     * Called on lifecycle phase componentWillUnmount.
     */
    componentWillUnmount(): void;
    /**
     * Initialized the vector layer that will be used to draw the input features
     * on and adds it to the map (if any).
     *
     * @param map The map to add the layer to.
     */
    initVectorLayer: (map: OlMap) => void;
    /**
     * Adds map event callbacks to highlight and select features in the map (if
     * given) on pointermove and singleclick. Hovered and selected features will
     * be highlighted and selected in the grid as well.
     *
     * @param map The map to register the handlers to.
     */
    initMapEventHandlers: (map: OlMap) => void;
    /**
     * Highlights the feature beneath the cursor on the map and in the grid.
     *
     * @param olEvt The ol event.
     */
    onMapPointerMove: (olEvt: OlMapBrowserEvent<MouseEvent>) => void;
    /**
     * Selects the selected feature in the map and in the grid.
     *
     * @param olEvt The ol event.
     */
    onMapSingleClick: (olEvt: OlMapBrowserEvent<MouseEvent>) => void;
    /**
     * Removes the vector layer from the given map (if any).
     */
    deinitVectorLayer: () => void;
    /**
     * Unbinds the pointermove and click event handlers from the map (if given).
     */
    deinitMapEventHandlers: () => void;
    /**
     * Returns the column definitions out of the attributes of the first
     * given feature.
     *
     * @return The column definitions.
     */
    getColumnDefs: () => any[];
    /**
     * Returns the table row data from all of the given features.
     *
     * @return The table data.
     */
    getTableData: () => any[];
    /**
     * Returns the correspondig feature for the given table row key.
     *
     * @param key The row key to obtain the feature from.
     * @return The feature candidate.
     */
    getFeatureFromRowKey: (key: number | string) => OlFeature<OlGeometry>;
    /**
     * Called on row click and zooms the the corresponding feature's extent.
     *
     * @param row The clicked row.
     */
    onRowClick: (row: any) => void;
    /**
     * Called on row mouseover and hightlights the corresponding feature's
     * geometry.
     *
     * @param row The highlighted row.
     */
    onRowMouseOver: (row: any) => void;
    /**
     * Called on mouseout and unhightlights any highlighted feature.
     *
     * @param row The unhighlighted row.
     */
    onRowMouseOut: (row: any) => void;
    /**
     * Fits the map's view to the extent of the passed features.
     *
     * @param features The features to zoom to.
     */
    zoomToFeatures: (features: OlFeature<OlGeometry>[]) => void;
    /**
     * Highlights the given features in the map.
     *
     * @param highlightFeatures The features to highlight.
     */
    highlightFeatures: (highlightFeatures: OlFeature<OlGeometry>[]) => void;
    /**
     * Unhighlights the given features in the map.
     *
     * @param unhighlightFeatures The features to unhighlight.
     */
    unhighlightFeatures: (unhighlightFeatures: OlFeature<OlGeometry>[]) => void;
    /**
     * Sets the select style to the given features in the map.
     *
     * @param features The features to select.
     */
    selectFeatures: (features: OlFeature<OlGeometry>[]) => void;
    /**
     * Resets the style of all features.
     */
    resetFeatureStyles: () => void;
    /**
     * Called if the selection changes.
     *
     * @param selectedRowKeys The list of currently selected row keys.
     */
    onSelectChange: (selectedRowKeys: string[]) => void;
    /**
     * The render method.
     */
    render(): JSX.Element;
}
export default FeatureGrid;
