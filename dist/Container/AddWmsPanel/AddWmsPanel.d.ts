import * as React from 'react';
import OlMap from 'ol/Map';
import { PanelProps } from '../../Panel/Panel/Panel';
import './AddWmsPanel.less';
import { WmsLayer } from '../../Util/typeUtils';
interface DefaultProps {
    /**
     * Optional text to be shown in button to add all layers
     */
    addAllLayersText: string;
    /**
     * Optional text to be shown in button to add selected layers
     */
    addSelectedLayersText: string;
    /**
     * Optional text to be shown in cancel button
     */
    cancelText: string;
    /**
     * Optional text to be shown in panel title
     */
    titleText: string;
    /**
     * Array containing layers (e.g. `Capability.Layer.Layer` of ol capabilities
     * parser)
     */
    wmsLayers: Array<WmsLayer>;
}
interface BaseProps {
    /**
     * Optional instance of OlMap which is used if onLayerAddToMap is not provided
     */
    map?: OlMap;
    /**
     * Optional function being called when onAddSelectedLayers or onAddAllLayers
     * is triggered
     */
    onLayerAddToMap?: (layers: Array<WmsLayer>) => void;
    /**
     * Optional function that is called if cancel button is clicked
     */
    onCancel?: () => void;
    /**
     * Optional function that is called if selection has changed.
     */
    onSelectionChange?: (selection: string[]) => void;
}
interface AddWmsLayerState {
    selectedWmsLayers: string[];
}
export declare type AddWmsPanelProps = BaseProps & Partial<DefaultProps> & PanelProps;
/**
 * Panel containing a (checkable) list of AddWmsLayerEntry instances.
 * This class can be used e.g with a result obtained by ol WMS capabilities
 * parser, in particular objects in `Capability.Layer.Layer`
 *
 * @class The AddWmsPanel
 * @extends React.Component
 */
export declare class AddWmsPanel extends React.Component<AddWmsPanelProps, AddWmsLayerState> {
    /**
     * The defaultProps.
     */
    static defaultProps: DefaultProps;
    /**
     * Create an AddWmsPanel.
     * @constructs AddWmsPanel
     */
    constructor(props: AddWmsPanelProps);
    /**
     * onSelectedLayersChange - set state for selectedWmsLayers
     *
     * @param selectedWmsLayers titles of selected WMS layers to set
     * in state
     */
    onSelectedLayersChange: (selectedWmsLayers: string[]) => void;
    /**
     * onAddSelectedLayers - function called if button with key useSelectedBtn is
     * clicked filters wmsLayers given in props by those in selectedWmsLayers of
     * state
     */
    onAddSelectedLayers: () => void;
    /**
     * onAddAllLayers - pass all wmsLayers of props to onLayerAddToMap function
     */
    onAddAllLayers: () => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default AddWmsPanel;
