import * as React from 'react';
import OlMap from 'ol/Map';
import OlGeomLineString from 'ol/geom/LineString';
import OlFeature from 'ol/Feature';
import OlLayerVector from 'ol/layer/Vector';
import OlSourceVector from 'ol/source/Vector';
import OlStyleStyle from 'ol/style/Style';
import OlGeometry from 'ol/geom/Geometry';
import { ToggleButtonProps } from '../ToggleButton/ToggleButton';
interface DefaultProps {
    /**
     * Will be called if geolocation fails.
     */
    onError: (error: any) => void;
    /**
     * Will be called when position changes. Receives an object with the properties
     * position, accuracy, heading and speed
     */
    onGeolocationChange: (geolocation: any) => void;
    /**
     * Whether to show a map marker at the current position.
     */
    showMarker: boolean;
    /**
     * Whether to follow the current position.
     */
    follow: boolean;
    /**
     * The openlayers tracking options. See also
     * https://www.w3.org/TR/geolocation-API/#position_options_interface
     */
    trackingOptions: {
        maximumAge: number;
        enableHighAccuracy: boolean;
        timeout: number;
    };
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
     * Will be called if geolocation fails.
     */
    onError: (error: any) => void;
    /**
     * Will be called when position changes. Receives an object with the properties
     * position, accuracy, heading and speed
     */
    onGeolocationChange: (geolocation: any) => void;
    /**
     * Whether to show a map marker at the current position.
     */
    showMarker: boolean;
    /**
     * Whether to follow the current position.
     */
    follow: boolean;
    /**
     * The openlayers tracking options. See also
     * https://www.w3.org/TR/geolocation-API/#position_options_interface
     */
    trackingOptions: {
        maximumAge: number;
        enableHighAccuracy: boolean;
        timeout: number;
    };
}
export declare type GeoLocationButtonProps = BaseProps & Partial<DefaultProps> & ToggleButtonProps;
/**
 * The GeoLocationButton.
 *
 * @class The GeoLocationButton
 * @extends React.Component
 */
declare class GeoLocationButton extends React.Component<GeoLocationButtonProps> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     *
     * @private
     */
    _className: string;
    /**
     * The feature marking the current location.
     */
    _markerFeature: any;
    /**
     * The OpenLayers geolocation interaction.
     */
    _geoLocationInteraction: any;
    /**
     * The layer containing the markerFeature.
     */
    _geoLocationLayer: OlLayerVector<OlSourceVector<OlGeometry>>;
    _positions: OlGeomLineString;
    /**
     * Creates the MeasureButton.
     *
     * @constructs MeasureButton
     */
    constructor(props: BaseProps);
    /**
     * Adds the markerFeature if not already done and adds it to the geoLocation
     * layer.
     */
    componentDidUpdate(): void;
    /**
     * The styleFunction for the geoLocationLayer. Shows a marker with arrow when
     * heading is not 0.
     */
    _styleFunction: (feature: OlFeature<OlGeometry>) => OlStyleStyle[];
    /**
     * Callback of the interactions on change event.
     */
    onGeolocationChange: () => void;
    onGeolocationError: (error: any) => void;
    /**
     * Called when the button is toggled, this method ensures that everything
     * is cleaned up when unpressed, and that geolocating can start when pressed.
     *
     * @method
     */
    onToggle: (pressed: boolean) => void;
    getCenterWithHeading: (position: any, rotation: any, resolution: any) => any[];
    updateView: () => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default GeoLocationButton;
