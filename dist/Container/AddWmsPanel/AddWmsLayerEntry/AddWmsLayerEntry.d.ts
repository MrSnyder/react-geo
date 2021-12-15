import * as React from 'react';
import { Attribution as OlAttribution } from 'ol/source/Source';
import { WmsLayer } from '../../../Util/typeUtils';
import './AddWmsLayerEntry.less';
interface DefaultProps {
    /**
     * Function returning a span with the textual representation of this layer
     * Default: Title of the layer and its abstract (if available)
     */
    layerTextTemplateFn: (layer: WmsLayer) => React.ReactNode;
    /**
     * Optional text to be shown in Tooltip for a layer that can be queried
     */
    layerQueryableText: string;
}
interface BaseProps {
    /**
       * Object containing layer information
       */
    wmsLayer: WmsLayer;
}
interface AddWmsLayerEntryState {
    copyright: OlAttribution;
    queryable: boolean;
}
export declare type AddWmsLayerEntryProps = BaseProps & Partial<DefaultProps>;
/**
 * Class representing a layer parsed from capabilities document.
 * This componment is used in AddWmsPanel
 *
 * @class AddWmsLayerEntry
 * @extends React.Component
 */
export declare class AddWmsLayerEntry extends React.Component<AddWmsLayerEntryProps, AddWmsLayerEntryState> {
    /**
     * The defaultProps.
     */
    static defaultProps: DefaultProps;
    /**
     * Create the AddWmsLayerEntry.
     *
     * @constructs AddWmsLayerEntry
     */
    constructor(props: AddWmsLayerEntryProps);
    /**
     * The render function
     */
    render(): JSX.Element;
}
export default AddWmsLayerEntry;
