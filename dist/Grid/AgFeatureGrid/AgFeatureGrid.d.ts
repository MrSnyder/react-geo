import * as React from 'react';
import OlStyle from 'ol/style/Style';
import OlMap from 'ol/Map';
import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import OlMapBrowserEvent from 'ol/MapBrowserEvent';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-balham.css';
import '@ag-grid-community/core/dist/styles/ag-theme-fresh.css';
import { AgGridReactProps } from '@ag-grid-community/react';
import { RowClickedEvent, CellMouseOverEvent, CellMouseOutEvent, SelectionChangedEvent } from '@ag-grid-community/core';
interface DefaultProps {
    /**
     * The height of the grid.
     */
    height: number | string;
    /**
     * The theme to use for the grid. See
     * https://www.ag-grid.com/javascript-grid-styling/ for available options.
     * Note: CSS must be loaded to use the theme!
     */
    theme: string;
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
     */
    columnDefs: any;
    /**
     * A Function that creates the rowkey from the given feature.
     * Receives the feature as property.
     * Default is: feature => feature.ol_uid
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
interface BaseProps {
    /**
     * The width of the grid.
     */
    width: number | string;
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
    map: OlMap;
    /**
     * Custom row data to be shown in feature grid. This might be helpful if
     * original feature properties should be manipulated in some way before they
     * are represented in grid.
     * If provided, #getRowData method won't be called.
     */
    rowData?: any[];
    /**
     * Callback function, that will be called on rowclick.
     */
    onRowClick?: (row: any, feature: OlFeature<OlGeometry>, evt: RowClickedEvent) => void;
    /**
     * Callback function, that will be called on rowmouseover.
     */
    onRowMouseOver?: (row: any, feature: OlFeature<OlGeometry>, evt: CellMouseOverEvent) => void;
    /**
     * Callback function, that will be called on rowmouseout.
     */
    onRowMouseOut?: (row: any, feature: OlFeature<OlGeometry>, evt: CellMouseOutEvent) => void;
    /**
     * Callback function, that will be called if the selection changes.
     */
    onRowSelectionChange?: (selectedRowsAfter: any[], selectedFeatures: OlFeature<OlGeometry>[], deselectedRows: any[], deselectedFeatures: OlFeature<OlGeometry>[], evt: SelectionChangedEvent) => void;
    /**
     * Optional callback function, that will be called if `selectable` is set
     * `true` and the a `click` event on the map occurs, e.g. a feature has been
     * selected in the map. The function receives the olEvt and the selected
     * features (if any).
     */
    onMapSingleClick?: (olEvt: OlMapBrowserEvent<MouseEvent>, selectedFeatures: OlFeature<OlGeometry>[]) => void;
    onGridIsReady?: (grid: any) => void;
}
interface AgFeatureGridState {
    grid: any;
    selectedRows: any[];
}
export declare type AgFeatureGridProps = BaseProps & Partial<DefaultProps> & AgGridReactProps;
/**
 * The AgFeatureGrid.
 *
 * @class The AgFeatureGrid
 * @extends React.Component
 */
export declare class AgFeatureGrid extends React.Component<AgFeatureGridProps, AgFeatureGridState> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The reference of this grid.
     * @private
     */
    _ref: any;
    /**
     * The className added to this component.
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
    _source: any;
    /**
     * The layer representing the features of the grid.
     * @private
     */
    _layer: any;
    /**
     * The constructor.
     */
    constructor(props: AgFeatureGridProps);
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
    componentDidUpdate(prevProps: AgFeatureGridProps): void;
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
    onMapPointerMove: (olEvt: any) => void;
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
    getRowData: () => any[];
    /**
     * Returns the correspondig feature for the given table row key.
     *
     * @param key The row key to obtain the feature from.
     * @return The feature candidate.
     */
    getFeatureFromRowKey: (key: string) => OlFeature<OlGeometry>;
    /**
     * Returns the correspondig rowNode for the given feature id.
     *
     * @param key The feature's key to obtain the row from.
     * @return he row candidate.
     */
    getRowFromFeatureKey: (key: string) => any;
    /**
     * Returns the currently selected row keys.
     *
     * @return An array with the selected row keys.
     */
    getSelectedRowKeys: () => string[] | undefined;
    /**
     * Called on row click and zooms the the corresponding feature's extent.
     *
     * @param evt The RowClickedEvent.
     */
    onRowClick: (evt: RowClickedEvent) => void;
    /**
     * Called on row mouseover and hightlights the corresponding feature's
     * geometry.
     *
     * @param evt The ellMouseOverEvent.
     */
    onRowMouseOver: (evt: CellMouseOverEvent) => void;
    /**
     * Called on mouseout and unhightlights any highlighted feature.
     *
     * @param evt The CellMouseOutEvent.
     */
    onRowMouseOut: (evt: CellMouseOutEvent) => void;
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
     */
    onSelectionChanged: (evt: SelectionChangedEvent) => void;
    /**
     *
     * @param grid
     */
    onGridReady(grid: any): void;
    /**
     *
     */
    onVisiblityChange(): void;
    /**
     * The render method.
     */
    render(): JSX.Element;
}
export default AgFeatureGrid;
