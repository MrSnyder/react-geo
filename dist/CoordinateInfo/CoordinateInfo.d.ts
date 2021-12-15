import * as React from 'react';
import OlMap from 'ol/Map';
import OlMapBrowserEvent from 'ol/MapBrowserEvent';
import { Coordinate as OlCoordinate } from 'ol/coordinate';
import OlBaseLayer from 'ol/layer/Base';
import { WmsLayer } from '../Util/typeUtils';
import './CoordinateInfo.less';
interface DefaultProps {
    /**
     * List of (WMS) layers that should be queried.
     */
    queryLayers: Array<WmsLayer>;
    /**
     * The number of max. features that should be returned by the GFI request.
     */
    featureCount: number;
    /**
     * Whether the GFI control should requests all layers at a given coordinate
     * or just the uppermost one.
     */
    drillDown: boolean;
    /**
     * Hit-detection tolerance in pixels. Pixels inside the radius around the
     * given position will be checked for features.
     */
    hitTolerance: number;
    /**
     * The children component that should be rendered. The render prop function
     * receives the state of the component (this is the clicked coordinate, the
     * list of GFI features if any and the loading state).
     */
    resultRenderer: (childrenProps: CoordinateInfoState) => React.ReactNode;
}
interface BaseProps {
    /**
     * The ol map.
     */
    map: OlMap;
}
interface CoordinateInfoState {
    clickCoordinate: OlCoordinate | null;
    features: any;
    loading: boolean;
}
export declare type CoordinateInfoProps = BaseProps & Partial<DefaultProps>;
/**
 * Constructs a wrapper component for querying features from the clicked
 * coordinate. The returned features can be passed to a child component
 * to be visualized.
 *
 * @class The CoordinateInfo
 * @extends React.Component
 */
export declare class CoordinateInfo extends React.Component<CoordinateInfoProps, CoordinateInfoState> {
    /**
     * The defaultProps.
     */
    static defaultProps: DefaultProps;
    /**
     * Creates the CoordinateInfo component.
     * @constructs CoordinateInfo
     */
    constructor(props: CoordinateInfoProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onMapClick(olEvt: OlMapBrowserEvent<MouseEvent>): void;
    layerFilter(layerCandidate: OlBaseLayer): boolean;
    render(): JSX.Element;
}
export default CoordinateInfo;
