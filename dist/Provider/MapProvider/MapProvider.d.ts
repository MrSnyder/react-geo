import * as React from 'react';
import OlMap from 'ol/Map';
import * as PropTypes from 'prop-types';
/**
 *
 * @export
 * @interface TimeSliderProps
 */
export interface MapProviderProps {
    /**
     * The map can be either an OlMap or a Promise that resolves with an OlMap
     * if your map is created asynchronously.
     */
    map: OlMap | Promise<OlMap>;
}
interface MapProviderState {
    map?: OlMap;
    ready: boolean;
}
/**
 * The MapProvider.
 */
declare class MapProvider extends React.Component<MapProviderProps, MapProviderState> {
    /**
     * The child context types.
     */
    static childContextTypes: {
        map: PropTypes.Requireable<OlMap>;
    };
    /**
     * The constructor of the MapProvider sets the
     *
     * @constructs MapProvider
     * @param props The initial props.
     */
    constructor(props: MapProviderProps);
    /**
     * Returns the context for the children.
     *
     * @return The child context.
     */
    getChildContext(): {
        map: OlMap;
    };
    /**
     * The render function.
     */
    render(): React.ReactNode;
}
export default MapProvider;
