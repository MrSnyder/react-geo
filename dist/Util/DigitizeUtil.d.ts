import OlVectorLayer from 'ol/layer/Vector';
import OlStyleStyle, { StyleLike as OlStyleLike } from 'ol/style/Style';
import OlStyle from 'ol/style/Style';
import OlSourceVector from 'ol/source/Vector';
import OlMap from 'ol/Map';
import OlFeature from 'ol/Feature';
import OlGeometry from 'ol/geom/Geometry';
import Geometry from 'ol/geom/Geometry';
export declare class DigitizeUtil {
    /**
     * Default fill color used in style object of drawn features.
     */
    static DEFAULT_FILL_COLOR: string;
    /**
     * Default stroke color used in style object of drawn features.
     */
    static DEFAULT_STROKE_COLOR: string;
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
    static DIGITIZE_LAYER_NAME: string;
    static DEFAULT_SELECT_STYLE: OlStyleLike;
    /**
     * This function gets the standard react geo digitize layer and creates it if it does not exist.
     * If another layer should be used, the layer property of the respective button should be used.
     * By default the digitize layer is styled via {@link DigitizeUtil.defaultDigitizeStyleFunction},
     * if another style is desired either use another layer or set the style of the digitize layer
     * via `setStyle`.
     *
     * @param map
     */
    static getDigitizeLayer(map: OlMap): OlVectorLayer<OlSourceVector<Geometry>>;
    /**
     * The styling function for the digitize vector layer, which considers
     * different geometry types of drawn features.
     *
     * @param feature The feature which is being styled.
     * @return The style to use.
     */
    static defaultDigitizeStyleFunction(feature: OlFeature<OlGeometry>): OlStyle;
    /**
     * This functions creates a select style with some default values from fill and stroke colors.
     * This can be used as a style function for an OpenLayers layer or feature.
     *
     * @param selectFillColor
     * @param selectStrokeColor
     */
    static selectStyleFunction(selectFillColor: string, selectStrokeColor: string): OlStyleLike;
}
