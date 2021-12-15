import * as React from 'react';
import OlMap from 'ol/Map';
import OlSimpleGeometry from 'ol/geom/SimpleGeometry';
import { Coordinate as OlCoordinate } from 'ol/coordinate';
import { Extent as OlExtent } from 'ol/extent';
import { FitOptions as OlViewFitOptions } from 'ol/View';
import { SimpleButtonProps } from '../SimpleButton/SimpleButton';
interface DefaultProps {
    /**
     * Options for fitting to the given extent. See
     * https://openlayers.org/en/latest/apidoc/module-ol_View-View.html#fit
     */
    fitOptions: OlViewFitOptions;
    /**
     * If true, the view will always animate to the closest zoom level after an interaction.
     * False means intermediary zoom levels are allowed.
     * Default is false.
     */
    constrainViewResolution: boolean;
    /**
     * The extent `[minx, miny, maxx, maxy]` in the maps coordinate system or an
     * instance of ol.geom.SimpleGeometry that the map should zoom to.
     */
    extent?: OlExtent | OlSimpleGeometry;
    /**
     * The center `[x,y]` in the maps coordinate system or an
     * instance of ol.coordinate that the map should zoom to if no extent is given.
     */
    center?: OlCoordinate;
    /**
     *  The zoom level 'x' the map should zoom to if no extent is given.
     */
    zoom?: number;
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
}
export declare type ZoomToExtentButtonProps = BaseProps & Partial<DefaultProps> & SimpleButtonProps;
/**
 * Class representing a zoom to extent button.
 *
 *
 * @class The ZoomToExtentButton
 * @extends React.Component
 */
declare class ZoomToExtentButton extends React.Component<ZoomToExtentButtonProps> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * Called when the button is clicked.
     *
     * @method
     */
    onClick(): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default ZoomToExtentButton;
