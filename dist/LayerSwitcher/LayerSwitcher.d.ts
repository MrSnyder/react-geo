import * as React from 'react';
import { ArrayTwoOrMore } from '@terrestris/base-util/dist/types';
import OlMap from 'ol/Map';
import OlLayerGroup from 'ol/layer/Group';
import OlLayerTile from 'ol/layer/Tile';
import OlTileSource from 'ol/source/Tile';
import './LayerSwitcher.less';
/**
 * @export
 * @interface LayerSwitcherProps
 * @extends {React.HTMLAttributes<HTMLDivElement>}
 */
export interface BaseProps {
    /**
     * An optional CSS class which will be added to the wrapping div Element.
     */
    className?: string;
    /**
     * The layers to be available in the switcher.
     */
    layers: ArrayTwoOrMore<OlLayerTile<OlTileSource> | OlLayerGroup>;
    /**
     * The main map the layers should be synced with.
     */
    map: OlMap;
}
interface LayerSwitcherState {
    previewLayer: OlLayerTile<OlTileSource> | OlLayerGroup;
}
export declare type LayerSwitcherProps = BaseProps & React.HTMLAttributes<HTMLDivElement>;
/**
 * Class representing the LayerSwitcher.
 * A basic component to switch between the passed layers.
 * This is most likely to be used for the backgroundlayer.
 *
 * @class LayerSwitcher
 * @extends React.Component
 */
export declare class LayerSwitcher extends React.Component<LayerSwitcherProps, LayerSwitcherState> {
    /**
     * The internal map of the LayerSwitcher
     * @private
     */
    _map: OlMap;
    /**
     *
     *
     * @private
     */
    _visibleLayerIndex: number;
    /**
     *
     *
     * @private
     */
    _layerClones: Array<OlLayerTile<OlTileSource> | OlLayerGroup>;
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * Creates the LayerSwitcher.
     *
     * @constructs LayerSwitcher
     */
    constructor(props: LayerSwitcherProps);
    /**
     * A react lifecycle method called when the component did mount.
     */
    componentDidMount(): void;
    /**
     * Destroy all map specific stuff when umounting the component.
     *
     * @memberof LayerSwitcher
     */
    componentWillUnMount(): void;
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     */
    componentDidUpdate(prevProps: LayerSwitcherProps): void;
    /**
     * Clones a layer
     *
     * @param layer The layer to clone.
     * @returns The cloned layer.
     */
    cloneLayer: (layer: OlLayerTile<OlTileSource> | OlLayerGroup) => any;
    /**
     * (Re-)adds the layers to the preview map and sets the visibleLayerIndex.
     *
     */
    setMapLayers: () => void;
    /**
     * Sets the visiblity of the layers in the props.map and this._map.
     * Also sets the previewLayer in the state.
     *
     */
    updateLayerVisibility: () => void;
    /**
     * Constructs this._map
     */
    getMap: () => OlMap;
    /**
     * Clickhandler for the overview switch.
     *
     */
    onSwitcherClick: (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default LayerSwitcher;
