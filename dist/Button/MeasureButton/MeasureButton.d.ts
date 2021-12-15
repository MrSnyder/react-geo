import * as React from 'react';
import OlMap from 'ol/Map';
import { DrawEvent } from 'ol/interaction/Draw';
import OlMapBrowserEvent from 'ol/MapBrowserEvent';
import { ToggleButtonProps } from '../ToggleButton/ToggleButton';
import './MeasureButton.less';
interface DefaultProps {
    /**
     * Name of system vector layer which will be used to draw measurement
     * results.
     */
    measureLayerName: string;
    /**
     * Fill color of the measurement feature.
     */
    fillColor: string;
    /**
     * Stroke color of the measurement feature.
     */
    strokeColor: string;
    /**
     * Determines if a marker with current measurement should be shown every
     * time the user clicks while measuring a distance. Default is false.
     */
    showMeasureInfoOnClickedPoints: boolean;
    /**
     * Determines if a tooltip with helpful information is shown next to the mouse
     * position. Default is true.
     */
    showHelpTooltip: boolean;
    /**
     * How many decimal places will be allowed for the measure tooltips.
     * Default is 2.
     */
    decimalPlacesInTooltips: number;
    /**
     * Used to allow / disallow multiple drawings at a time on the map.
     * Default is false.
     * TODO known issue: only label of the last drawn feature will be shown!
     */
    multipleDrawing: boolean;
    /**
     * Tooltip which will be shown on map mouserover after measurement button
     * was activated.
     */
    clickToDrawText: string;
    /**
     * Tooltip which will be shown after polygon measurement button was toggled
     * and at least one click in the map is occured.
     */
    continuePolygonMsg: string;
    /**
     * Tooltip which will be shown after line measurement button was toggled
     * and at least one click in the map is occured.
     */
    continueLineMsg: string;
    /**
     * Tooltip which will be shown after angle measurement button was toggled
     * and at least one click in the map is occured.
     */
    continueAngleMsg: string;
    /**
     * CSS classes we'll assign to the popups and tooltips from measuring.
     * Overwrite this object to style the text of the popups / overlays, if you
     * don't want to use default classes.
     */
    measureTooltipCssClasses: {
        tooltip: string;
        tooltipDynamic: string;
        tooltipStatic: string;
    };
    /**
     * Whether the measure button is pressed.
     */
    pressed: boolean;
    /**
     * A custom onToogle function that will be called if button is toggled
     */
    onToggle: (pressed: boolean) => void;
}
interface BaseProps {
    /**
     * The className which should be added.
     */
    className?: string;
    /**
     * Instance of OL map this component is bound to.
     */
    map: OlMap;
    /**
     * Whether line, area or angle will be measured.
     */
    measureType: 'line' | 'polygon' | 'angle';
}
export declare type MeasureButtonProps = BaseProps & Partial<DefaultProps> & ToggleButtonProps;
/**
 * The MeasureButton.
 *
 * @class The MeasureButton
 * @extends React.Component
 */
declare class MeasureButton extends React.Component<MeasureButtonProps> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     *
     * @private
     */
    className: string;
    /**
     * Currently drawn feature.
     *
     * @private
     */
    _feature: any;
    /**
     * Overlay to show the measurement.
     *
     * @private
     */
    _measureTooltip: any;
    /**
     * Overlay to show the help messages.
     *
     * @private
     */
    _helpTooltip: any;
    /**
     * The help tooltip element.
     *
     * @private
     */
    _helpTooltipElement: any;
    /**
     * The measure tooltip element.
     *
     * @private
     */
    _measureTooltipElement: any;
    /**
     * An array of created overlays we use for the tooltips. Used to eventually
     * clean up everything we added.
     *
     * @private
     */
    _createdTooltipOverlays: any[];
    /**
     * An array of created divs we use for the tooltips. Used to eventually
     * clean up everything we added.
     *
     * @private
     */
    _createdTooltipDivs: any[];
    /**
     * An object holding keyed `OlEventsKey` instances returned by the `on`
     * method of `OlObservable`. These keys are used to unbind temporary
     * listeners on events of the `OlInteractionDraw` or `OlMap`. The keys
     * are the names of the events on the various objects. The `click` key is
     * not always bound, but only for certain #measureType values.
     *
     * In #cleanup, we unbind all events we have bound so as to not leak
     * memory, and to ensure we have no concurring listeners being active at a
     * time (E.g. when multiple measure buttons are in an application).
     *
     * @private
     */
    _eventKeys: {
        drawstart: any;
        drawend: any;
        pointermove: any;
        click: any;
        change: any;
    };
    /**
     * The vector layer showing the geometries added by the draw interaction.
     *
     * @private
     */
    _measureLayer: any;
    /**
     * The draw interaction used to draw the geometries to measure.
     *
     * @private
     */
    _drawInteraction: any;
    /**
     * Creates the MeasureButton.
     *
     * @constructs MeasureButton
     */
    constructor(props: BaseProps);
    /**
     * `componentDidMount` method of the MeasureButton.
     *
     * @method
     */
    componentDidMount(): void;
    /**
     * Ensures that component is properly cleaned up on unmount.
     */
    componentWillUnmount(): void;
    /**
     * Called when the button is toggled, this method ensures that everything
     * is cleaned up when unpressed, and that measuring can start when pressed.
     *
     * @method
     */
    onToggle(pressed: boolean): void;
    /**
     * Creates measure vector layer and add this to the map.
     *
     * @method
     */
    createMeasureLayer(): void;
    /**
     * Creates a correctly configured OL draw interaction depending on
     * the configured measureType.
     *
     * @return {OlInteractionDraw} The created interaction, which is not yet
     *   added to the map.
     *
     * @method
     */
    createDrawInteraction(): void;
    /**
     * Adjusts visibility of measurement related tooltips depending on active
     * status of draw interaction.
     */
    onDrawInteractionActiveChange(): void;
    /**
     * Called if the current geometry of the draw interaction has changed.
     *
     * @param evt The generic change event.
     */
    onDrawInteractionGeometryChange(): void;
    /**
     * Called on map click.
     *
     * @param evt The pointer event.
     */
    onMapClick(evt: OlMapBrowserEvent<MouseEvent>): void;
    /**
     * Sets up listeners whenever the drawing of a measurement sketch is
     * started.
     *
     * @param evt The event which contains the
     *   feature we are drawing.
     *
     * @method
     */
    onDrawStart(evt: DrawEvent): void;
    /**
     * Called whenever measuring stops, this method draws static tooltips with
     * the result onto the map canvas and unregisters various listeners.
     *
     * @method
     */
    onDrawEnd(evt: DrawEvent): void;
    /**
     * Adds a tooltip on click where a measuring stop occured.
     *
     * @param coordinate The coordinate for the tooltip.
     */
    addMeasureStopTooltip(coordinate: Array<number>): void;
    /**
     * Creates a new measure tooltip as `OlOverlay`.
     */
    createMeasureTooltip(): void;
    /**
     * Creates a new help tooltip as `OlOverlay`.
     */
    createHelpTooltip(): void;
    /**
     * Removes help tooltip from the map if measure button was untoggled.
     */
    removeHelpTooltip(): void;
    /**
     * Removes measure tooltip from the map if measure button was untoggled.
     *
     * @method
     */
    removeMeasureTooltip(): void;
    /**
     * Cleans up tooltips when the button is unpressed.
     *
     * @method
     */
    cleanupTooltips(): void;
    /**
     * Cleans up artifacts from measuring when the button is unpressed.
     *
     * @method
     */
    cleanup(): void;
    /**
     * Called on map's pointermove event.
     *
     * @param evt The pointer event.
     */
    onMapPointerMove(evt: any): void;
    /**
     * Updates the position and the text of the help tooltip.
     *
     * @param coordinate The coordinate to center the tooltip to.
     */
    updateHelpTooltip(coordinate: any): void;
    /**
     * Updates the text and position of the measture tooltip.
     */
    updateMeasureTooltip(): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default MeasureButton;
