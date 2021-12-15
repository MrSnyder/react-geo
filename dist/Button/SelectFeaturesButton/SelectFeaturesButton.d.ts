import * as React from 'react';
import { Options as OlSelectOptions, SelectEvent as OlSelectEvent } from 'ol/interaction/Select';
import { StyleLike as OlStyleLike } from 'ol/style/Style';
import OlVectorLayer from 'ol/layer/Vector';
import OlVectorSource from 'ol/source/Vector';
import OlGeometry from 'ol/geom/Geometry';
import { ToggleButtonProps } from '../ToggleButton/ToggleButton';
interface OwnProps {
    /**
     * Select style of the selected features.
     */
    selectStyle?: OlStyleLike;
    /**
     * Additional configuration object to apply to the ol.interaction.Select.
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html
     * for more information
     *
     * Note: The keys condition, hitTolerance and style are handled internally
     *       and shouldn't be overwritten without any specific cause.
     */
    selectInteractionConfig?: OlSelectOptions;
    /**
     * The className which should be added.
     */
    className?: string;
    /**
     * Listener function for the 'select' event of the ol.interaction.Select
     * See https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select.html
     * for more information.
     */
    onFeatureSelect?: (event: OlSelectEvent) => void;
    /**
     * Array of layers the SelectFeaturesButton should operate on.
     */
    layers: OlVectorLayer<OlVectorSource<OlGeometry>>[];
    /**
     * Hit tolerance of the select action. Default: 5
     */
    hitTolerance?: number;
    /**
     * Clear the feature collection of the interaction after select. Default: false
     */
    clearAfterSelect?: boolean;
}
export declare type SelectFeaturesButtonProps = OwnProps & ToggleButtonProps;
declare const SelectFeaturesButton: React.FC<SelectFeaturesButtonProps>;
export default SelectFeaturesButton;
