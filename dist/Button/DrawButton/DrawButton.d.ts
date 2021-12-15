import * as React from 'react';
import { StyleLike as OlStyleLike } from 'ol/style/Style';
import { DrawEvent as OlDrawEvent, Options as OlDrawOptions } from 'ol/interaction/Draw';
import OlFeature from 'ol/Feature';
import OlVectorSource from 'ol/source/Vector';
import OlGeometry from 'ol/geom/Geometry';
import OlVectorLayer from 'ol/layer/Vector';
import { ToggleButtonProps } from '../ToggleButton/ToggleButton';
interface DefaultProps {
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
    drawInteractionConfig: OlDrawOptions;
}
declare type DrawType = 'Point' | 'LineString' | 'Polygon' | 'Circle' | 'Rectangle' | 'Text';
interface BaseProps {
    /**
     * The className which should be added.
     */
    className?: string;
    /**
     * Whether the line, point, polygon, circle, rectangle or text shape should
     * be drawn.
     */
    drawType: DrawType;
    /**
     * Style object / style function for drawn feature.
     */
    drawStyle?: OlStyleLike;
    /**
     * Listener function for the 'drawend' event of an ol.interaction.Draw.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html
     * for more information.
     */
    onDrawEnd?: (event: OlDrawEvent) => void;
    /**
     * Listener function for the 'drawstart' event of an ol.interaction.Draw.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Draw-DrawEvent.html
     * for more information.
     */
    onDrawStart?: (event: OlDrawEvent) => void;
    /**
     * Callback function that will be called when the ok-button of the modal was clicked
     */
    onModalLabelOk?: (feature: OlFeature<OlGeometry>) => void;
    /**
     * Callback function that will be called
     * when the cancel-button of the modal was clicked
     */
    onModalLabelCancel?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * Maximal length of feature label.
     * If exceeded label will be divided into multiple lines. Optional.
     */
    maxLabelLineLength?: number;
    /**
     * The vector layer which will be used for digitize features.
     * The standard digitizeLayer can be retrieved via `DigitizeUtil.getDigitizeLayer(map)`.
     */
    digitizeLayer?: OlVectorLayer<OlVectorSource<OlGeometry>>;
}
export declare type DrawButtonProps = BaseProps & Partial<DefaultProps> & ToggleButtonProps;
/**
 * The DrawButton.
 */
declare const DrawButton: React.FC<DrawButtonProps>;
export default DrawButton;
