import React from 'react';
import OlVectorSource from 'ol/source/Vector';
import OlGeometry from 'ol/geom/Geometry';
import OlVectorLayer from 'ol/layer/Vector';
import { SelectFeaturesButtonProps } from '../SelectFeaturesButton/SelectFeaturesButton';
interface OwnProps {
    /**
     * The vector layer which will be used for digitize features.
     * The standard digitizeLayer can be retrieved via `DigitizeUtil.getDigitizeLayer(map)`.
     */
    digitizeLayer?: OlVectorLayer<OlVectorSource<OlGeometry>>;
}
export declare type CopyButtonProps = OwnProps & Omit<SelectFeaturesButtonProps, 'layers'>;
declare const CopyButton: React.FC<CopyButtonProps>;
export default CopyButton;
