import * as React from 'react';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import './ScaleCombo.less';
interface DefaultProps {
    /**
     * A filter function to filter resolutions no options should be created
     */
    resolutionsFilter: (item: any, index?: number, resolutions?: number[]) => boolean;
    /**
     * Set to false to not listen to the map moveend event.
     */
    syncWithMap: boolean;
    /**
     * The scales.
     */
    scales: number[];
}
interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * The zoomLevel.
     */
    zoomLevel?: number;
    /**
     * The onZoomLevelSelect function. Pass a function if you want something
     * different than the resolution of the passed map.
     */
    onZoomLevelSelect?: (zoomLevel: string) => void;
    /**
     * The resolutions.
     */
    resolutions?: number[];
    /**
     * The map
     */
    map: OlMap;
}
interface ScaleComboState {
    /**
     * The zoomLevel.
     */
    zoomLevel?: number;
    /**
     * The onZoomLevelSelect function. Pass a function if you want something
     * different than the resolution of the passed map.
     */
    onZoomLevelSelect?: (zoomLevel: string) => void;
    /**
     * The scales.
     */
    scales: number[];
}
export declare type ScaleComboProps = BaseProps & Partial<DefaultProps>;
/**
 * Class representing a scale combo to choose map scale via a dropdown menu.
 *
 * @class The ScaleCombo
 * @extends React.Component
 */
declare class ScaleCombo extends React.Component<ScaleComboProps, ScaleComboState> {
    /**
     * The default props
     */
    static defaultProps: {
        resolutionsFilter: () => boolean;
        scales: any[];
        syncWithMap: boolean;
    };
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create a scale combo.
     * @constructs ScaleCombo
     */
    constructor(props: ScaleComboProps);
    /**
     * Invoked after the component is instantiated as well as when it
     * receives new props. It should return an object to update state, or null
     * to indicate that the new props do not require any state updates.
     *
     * @param nextProps The next properties.
     * @param prevState The previous state.
     */
    static getDerivedStateFromProps(nextProps: ScaleComboProps, prevState: ScaleComboState): {
        zoomLevel: number;
        onZoomLevelSelect?: undefined;
    } | {
        onZoomLevelSelect: (...args: any[]) => any;
        zoomLevel?: undefined;
    };
    /**
     * Invoked immediately after updating occurs. This method is not called for
     * the initial render.
     *
     * @param prevProps The previous props.
     */
    componentDidUpdate(prevProps: ScaleComboProps): void;
    /**
     * Set the zoomLevel of the to the ScaleCombo.
     *
     * @param evt The 'moveend' event
     * @private
     */
    zoomListener: (evt: any) => void;
    /**
     * @function pushScaleOption: Helper function to create a {@link Option} scale component
     * based on a resolution and the {@link Ol.View}
     *
     * @param scales The scales array to push the scale to.
     * @param resolution map cresolution to generate the option for
     * @param view The map view
     *
     */
    pushScale: (scales: string[], resolution: number, view: OlView) => void;
    /**
     * Generates the scales to add as {@link Option} to the SelectField based on
     * the given instance of {@link Ol.Map}.
     *
     * @return The array of scales.
     */
    getOptionsFromMap(): any[];
    /**
     * Determine option element for provided zoom level out of array of valid options.
     *
     * @param zoom zoom level
     *
     * @return Option element for provided zoom level
     */
    determineOptionKeyForZoomLevel: (zoom: number) => string | undefined;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default ScaleCombo;
