import * as React from 'react';
import OlMap from 'ol/Map';
import OlStyleStyle from 'ol/style/Style';
import OlInteractionDraw from 'ol/interaction/Draw';
import OlInteractionSelect from 'ol/interaction/Select';
import OlInteractionModify from 'ol/interaction/Modify';
import OlInteractionTranslate from 'ol/interaction/Translate';
import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import { ToggleButtonProps } from '../ToggleButton/ToggleButton';
interface DefaultProps {
    /**
     * Name of system vector layer which will be used for digitize features.
     */
    digitizeLayerName: string;
    /**
     * Fill color of selected digitize feature.
     */
    selectFillColor: string;
    /**
     * Stroke color of selected digitize feature.
     */
    selectStrokeColor: string;
    /**
     * Title for modal used for input of labels for digitize features.
     */
    modalPromptTitle: string;
    /**
     * Text string for `OK` button of the modal.
     */
    modalPromptOkButtonText: string;
    /**
     * Text string for `Cancel` button of the modal.
     */
    modalPromptCancelButtonText: string;
    /**
     * Additional configuration object to apply to the ol.interaction.Draw.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-Draw.html
     * for more information
     *
     * Note: The keys source, type, geometryFunction, style and freehandCondition
     *       are handled internally and shouldn't be overwritten without any
     *       specific cause.
     */
    drawInteractionConfig: any;
    /**
     * Additional configuration object to apply to the ol.interaction.Select.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html
     * for more information
     *
     * Note: The keys condition, hitTolerance and style are handled internally
     *       and shouldn't be overwritten without any specific cause.
     */
    selectInteractionConfig: any;
    /**
     * Additional configuration object to apply to the ol.interaction.Modify.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-Modify.html
     * for more information
     *
     * Note: The keys features, deleteCondition and style are handled internally
     *       and shouldn't be overwritten without any specific cause.
     */
    modifyInteractionConfig: any;
    /**
     * Additional configuration object to apply to the ol.interaction.Translate.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-Translate.html
     * for more information
     *
     * Note: The key feature is handled internally and shouldn't be overwritten
     *       without any specific cause.
     */
    translateInteractionConfig: any;
    /**
     * A custom onToogle function that will be called if button is toggled.
     */
    onToggle: (event: any) => void;
}
declare type DrawType = 'Point' | 'LineString' | 'Polygon' | 'Circle' | 'Rectangle' | 'Text';
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
     * Whether the line, point, polygon, circle, rectangle or text shape should
     * be drawn.
     */
    drawType?: DrawType;
    /**
     * Whether the digitize feature should be deleted, copied or modified.
     * be drawn.
     */
    editType?: 'Copy' | 'Edit' | 'Delete';
    /**
     * Style object / style function for drawn feature.
     */
    drawStyle?: OlStyleStyle | ((feature: OlFeature<OlGeometry>) => OlStyleStyle);
    /**
     * Listener function for the 'drawend' event of an ol.interaction.Draw.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html
     * for more information.
     */
    onDrawEnd?: (event: any) => void;
    /**
     * Listener function for the 'drawstart' event of an ol.interaction.Draw.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html
     * for more information.
     */
    onDrawStart?: (event: any) => void;
    /**
     * Listener function for the 'modifystart' event of an ol.interaction.Modify.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-ModifyEvent.html
     * for more information.
     */
    onModifyStart?: (event: any) => void;
    /**
     * Listener function for the 'modifyend' event of an ol.interaction.Modify.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Modify-ModifyEvent.html
     * for more information.
     */
    onModifyEnd?: (event: any) => void;
    /**
     * Listener function for the 'translatestart' event of an ol.interaction.Translate.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-TranslateEvent.html
     * for more information.
     */
    onTranslateStart?: (event: any) => void;
    /**
     * Listener function for the 'translateend' event of an ol.interaction.Translate.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-TranslateEvent.html
     * for more information.
     */
    onTranslateEnd?: (event: any) => void;
    /**
     * Listener function for the 'translating' event of an ol.interaction.Translate.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Translate-TranslateEvent.html
     * for more information.
     */
    onTranslating?: (event: any) => void;
    /**
     * Listener function for the 'select' event of the ol.interaction.Select
     * if in `Delete` mode.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-SelectEvent.html
     * for more information.
     */
    onFeatureRemove?: (event: any) => void;
    /**
     * Listener function for the 'select' event of the ol.interaction.Select
     * if in `Copy` mode.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-SelectEvent.html
     * for more information.
     */
    onFeatureCopy?: (event: any) => void;
    /**
     * Callback function that will be called when the ok-button of the modal was clicked
     */
    onModalLabelOk?: (event: any) => void;
    /**
     * Callback function that will be called
     * when the cancel-button of the modal was clicked
     */
    onModalLabelCancel?: (event: any) => void;
    /**
     * Listener function for the 'select' event of the ol.interaction.Select
     * if in `Edit` mode.
     * Can be also called inside of 'select' listener function of
     * the ol.interaction.Select in `Copy` and `Delete` mode if provided.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select.html
     * for more information.
     */
    onFeatureSelect?: (event: any) => void;
    /**
     * Maximal length of feature label.
     * If exceeded label will be divided into multiple lines. Optional.
     */
    maxLabelLineLength?: number;
}
interface DigitizeButtonState {
    showLabelPrompt: boolean;
    textLabel: string;
}
export declare type DigitizeButtonProps = BaseProps & Partial<DefaultProps> & ToggleButtonProps;
/**
 * The DigitizeButton.
 *
 * @class The DigitizeButton
 * @extends React.Component
 * @deprecated Please make use of the DrawButton component instead.
 */
declare class DigitizeButton extends React.Component<DigitizeButtonProps, DigitizeButtonState> {
    /**
     * Name of point draw type.
     * @private
     */
    static POINT_DRAW_TYPE: string;
    /**
     * Name of line string draw type.
     * @private
     */
    static LINESTRING_DRAW_TYPE: string;
    /**
     * Name of polygon draw type.
     * @private
     */
    static POLYGON_DRAW_TYPE: string;
    /**
     * Name of circle draw type.
     * @private
     */
    static CIRCLE_DRAW_TYPE: string;
    /**
     * Name of rectangle draw type.
     * @private
     */
    static RECTANGLE_DRAW_TYPE: string;
    /**
     * Name of text draw type.
     * @private
     */
    static TEXT_DRAW_TYPE: string;
    /**
     * Name of copy edit type.
     * @private
     */
    static COPY_EDIT_TYPE: string;
    /**
     * Name of edit edit type.
     * @private
     */
    static EDIT_EDIT_TYPE: string;
    /**
     * Name of delete edit type.
     * @private
     */
    static DELETE_EDIT_TYPE: string;
    /**
     * Default fill color used in style object of drawn features.
     */
    static DEFAULT_FILL_COLOR: string;
    /**
     * Default stroke color used in style object of drawn features.
     */
    static DEFAULT_STROKE_COLOR: string;
    /**
     * Hit detection in pixels used for select interaction.
     */
    static HIT_TOLERANCE: number;
    /**
     * Default style for digitized points.
     */
    static DEFAULT_POINT_STYLE: OlStyleStyle;
    /**
     * Default style for digitized lines.
     */
    static DEFAULT_LINESTRING_STYLE: OlStyleStyle;
    /**
     * Default style for digitized polygons or circles.
     */
    static DEFAULT_POLYGON_STYLE: OlStyleStyle;
    /**
     * Default style for digitized labels.
     */
    static DEFAULT_TEXT_STYLE: OlStyleStyle;
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
     * Currently existing digitize features as collection.
     *
     * @private
     */
    _digitizeFeatures: any;
    /**
     * The layer used for the digitization.
     *
     * @private
     */
    _digitizeLayer: any;
    /**
     * Currently drawn feature which should be represent as label or postit.
     * @private
     */
    _digitizeTextFeature: any;
    /**
     * The draw interaction.
     * @private
     */
    _drawInteraction?: OlInteractionDraw;
    /**
     * The select interaction.
     * @private
     */
    _selectInteraction?: OlInteractionSelect;
    /**
     * The modify interaction.
     * @private
     */
    _modifyInteraction?: OlInteractionModify;
    /**
     * The translate interaction.
     * @private
     */
    _translateInteraction?: OlInteractionTranslate;
    /**
     * Creates the DigitizeButton.
     *
     * @constructs DigitizeButton
     */
    constructor(props: DigitizeButtonProps);
    /**
     * `componentDidMount` method of the DigitizeButton.
     */
    componentDidMount(): void;
    /**
     * Called on componentWillUnmount lifecycle.
     */
    componentWillUnmount(): void;
    /**
     * Called when the digitize button is toggled. If the button state is pressed,
     * the appropriate draw, modify or select interaction will be created.
     * Otherwise, by untoggling, the same previously created interaction will be
     * removed from the map.
     *
     * @param pressed Whether the digitize button is pressed or not.
     */
    onToggle: (pressed: boolean) => void;
    /**
     * Creates digitize vector layer and adds this to the map.
     */
    createDigitizeLayer: () => void;
    /**
     * The styling function for the digitize vector layer, which considers
     * different geometry types of drawn features.
     *
     * @param feature The feature which is being styled.
     * @return The style to use.
     */
    digitizeStyleFunction: (feature: any) => OlStyleStyle;
    /**
     * The OL style for selected digitized features.
     *
     * @param feature The selected feature.
     * @param res resolution.
     * @param text Text for labeled feature (optional).
     * @return The style to use.
     */
    selectedStyleFunction: (feature: OlFeature<OlGeometry>, res: number, text: string) => OlStyleStyle;
    /**
     *
     * @return Function for drawEnd.
     */
    getOnDrawEnd(): (event: any) => void;
    /**
     *
     * @return Function for drawStart.
     */
    getOnDrawStart(): (event: any) => void;
    /**
     * Creates a correctly configured OL draw interaction depending on given
     * drawType and adds this to the map.
     *
     * @param pressed Whether the digitize button is pressed or not.
     * Will be used to handle active state of the draw interaction.
     */
    createDrawInteraction: () => void;
    /**
     * Creates a correctly configured OL select and/or modify and/or translate
     * interaction(s) depending on given editType and adds this/these to the map.
     */
    createSelectInteraction: () => void;
    /**
     *
     */
    createModifyInteraction: () => void;
    /**
     *
     */
    createTranslateInteraction: () => void;
    /**
     * Listener for `select` event of OL select interaction in `Delete` mode.
     * Removes selected feature from the vector source and map.
     *
     * @param evt The interaction event.
     */
    onFeatureRemove: (evt: any) => void;
    /**
     * Listener for `select` event of OL select interaction in `Copy` mode.
     * Creates a clone of selected feature and calls utility method to move it
     * beside the original to avoid overlapping.
     *
     * @param evt The interaction event.
     */
    onFeatureCopy: (evt: any) => void;
    /**
     * Checks if a labeled feature is being modified. If yes, opens prompt to
     * input a new label.
     *
     * @param evt The interaction event.
     */
    onModifyStart: (evt: any) => void;
    /**
     * Called on modifyend of the ol.interaction.Modify.
     *
     * @param evt The interaction event.
     */
    onModifyEnd: (evt: any) => void;
    /**
     * Called on translatestart of the ol.interaction.Translate.
     *
     * @param evt The interaction event.
     */
    onTranslateStart: (evt: any) => void;
    /**
     * Called on translateend of the ol.interaction.Translate.
     *
     * @param evt The interaction event.
     */
    onTranslateEnd: (evt: any) => void;
    /**
     * Called on translating of the ol.interaction.Translate.
     *
     * @param evt The interaction event.
     */
    onTranslating: (evt: any) => void;
    /**
     * Changes state for showLabelPrompt to make modal for label input visible.
     *
     * @param evt Click event on adding feature to the digitize layer.
     *
     * @method
     */
    handleTextAdding: (evt: any) => void;
    /**
     * Callback function after `Ok` button of label input modal was clicked.
     * Turns visibility of modal off and call `setTextOnFeature` method.
     */
    onModalLabelOk: () => void;
    /**
     * Callback function after `Cancel` button of label input modal was clicked.
     * Turns visibility of modal off and removes last drawn feature from the
     * digitize layer.
     */
    onModalLabelCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Sets formatted label on feature.
     * Calls `onModalLabelOk` callback function if provided.
     *
     * @param feature The point feature to be styled with label.
     * @param onModalOkCbk Optional callback function.
     */
    setTextOnFeature: (feature: OlFeature<OlGeometry>, onModalOkCbk: (feat: OlFeature<OlGeometry>, newLabel: string) => void) => void;
    /**
     * Called if label input field value was changed. Updates state value for
     * textLabel.
     *
     * @param evt Input event containing new text value to be set as
     * textLabel.
     */
    onLabelChange: (evt: any) => void;
    /**
     * Sets the cursor to `pointer` if the pointer enters a non-oqaque pixel of
     * a hoverable layer.
     *
     * @param evt The `pointermove` event.
     */
    onPointerMove: (evt: any) => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default DigitizeButton;
