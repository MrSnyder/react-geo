import * as React from 'react';
import { InputProps } from 'antd/lib/input';
import OlMap from 'ol/Map';
import './WfsSearchInput.less';
interface DefaultProps {
    /**
     * A nested object mapping feature types to an object of attribute details,
     * which are also mapped by search attribute name.
     *
     * Example:
     *   ```
     *   attributeDetails: {
     *    featType1: {
     *      attr1: {
     *        matchCase: true,
     *        type: 'number',
     *        exactSearch: false
     *      },
     *      attr2: {
     *        matchCase: false,
     *        type: 'string',
     *        exactSearch: true
     *      }
     *    },
     *    featType2: {...}
     *   }
     *   ```
     */
    attributeDetails: {
        [featureType: string]: {
            [attributeName: string]: {
                matchCase: boolean;
                type: string;
                exactSearch: boolean;
            };
        };
    };
    /**
     * SRS name. No srsName attribute will be set on geometries when this is not
     * provided.
     */
    srsName: string;
    /**
     * The output format of the response.
     */
    outputFormat: string;
    /**
     * Options which are added to the fetch-POST-request. credentials is set to
     * 'same-origin' as default but can be overwritten. See also
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
     */
    additionalFetchOptions: any;
    /**
     * The minimal amount of characters entered in the input to start a search.
     */
    minChars: number;
    /**
     * Delay in ms before actually sending requests.
     */
    delay: number;
    /**
     * Indicate if we should render the input and results. When setting to false,
     * you need to handle user input and results yourself
     */
    visible?: boolean;
    /**
     * The searchTerm may be given as prop. This is useful when setting
     * `visible` to `false`.
     */
    searchTerm?: string;
}
interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * The base URL. Please make sure that the WFS-Server supports CORS.
     */
    baseUrl: string;
    /**
     * An object mapping feature types to an array of attributes that should be searched through.
     */
    searchAttributes: {
        [featureType: string]: string[];
    };
    /**
     * The namespace URI used for features.
     */
    featureNS?: string;
    /**
     * The prefix for the feature namespace.
     */
    featurePrefix?: string;
    /**
     * The feature type names.
     */
    featureTypes: string[];
    /**
     * Maximum number of features to fetch.
     */
    maxFeatures?: number;
    /**
     * Geometry name to use in a BBOX filter.
     */
    geometryName?: string;
    /**
     * Optional list of property names to serialize.
     */
    propertyNames?: string[];
    /**
     * The ol.map to interact with on selection.
     */
    map: OlMap;
    /**
     * Optional callback function, that will be called before WFS search starts.
     * Can be useful if input value manipulation is needed (e.g. umlaut
     * replacement `ä => oa` etc.)
     */
    onBeforeSearch?: (value: string) => string;
    /**
     * An onFetchSuccess callback function which gets called with the
     * successfully fetched data.
     * Please note: if omitted only data fetch will be performed and no data
     * will be shown afterwards!
     */
    onFetchSuccess?: (data: any) => void;
    /**
     * An onFetchError callback function which gets called if data fetch is
     * failed.
     */
    onFetchError?: (data: any) => void;
    /**
     * Optional callback function, that will be called if 'clear' button of
     * input field was clicked.
     */
    onClearClick?: () => void;
    /**
     * Options which are passed to the constructor of the ol.format.WFS.
     * compare: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
     */
    wfsFormatOptions?: any;
}
interface WfsSearchState {
    searchTerm: string;
    data: any[];
    fetching: boolean;
}
export declare type WfsSearchInputProps = BaseProps & Partial<DefaultProps> & InputProps;
/**
 * The WfsSearchInput field.
 * Implements an input field to do a WFS-GetFeature request.
 *
 * The GetFeature request is created with `ol.format.WFS.writeGetFeature`
 * so most of the WFS specific options work like document in the corresponding
 * API-docs: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
 *
 * @class WfsSearchInput
 * @extends React.Component
 */
export declare class WfsSearchInput extends React.Component<WfsSearchInputProps, WfsSearchState> {
    static defaultProps: DefaultProps;
    /**
     * The reference to the Input Element of the WfsSearch.
     * @private
     */
    _inputRef: any;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create the WfsSearchInput.
     *
     * @param props The initial props.
     * @constructs WfsSearchInput
     */
    constructor(props: WfsSearchInputProps);
    /**
     * Trigger search when searchTerm prop has changed
     *
     * @param prevProps Previous props
     */
    componentDidUpdate(prevProps: any): void;
    /**
     * Called if the input is being updated. It sets the current inputValue
     * as searchTerm and starts a search if the inputValue has
     * a length of at least `this.props.minChars` (default 3).
     *
     * @param evt The input value from `keyup` event.
     * Gets undefined if clear btn is pressed.
     */
    onUpdateInput(evt: any): void;
    /**
     * Perform the search.
     * @private
     */
    doSearch(): void;
    /**
     * This function gets called on success of the WFS GetFeature fetch request.
     * It sets the response as data.
     * If an additional function `onFetchSuccess` is provided, it will be called
     * as callback.
     * @param response The found features.
     */
    onFetchSuccess(response: any): void;
    /**
     * This function gets called when the WFS GetFeature fetch request returns an error.
     * It logs the error to the console.
     * If an additional function `onFetchSuccess` is provided, it will be called
     * as callback.
     *
     * @param error The errorstring.
     */
    onFetchError(error: string): void;
    /**
     * Resets input field value and previously fetched data on reset button click.
     */
    resetSearch(): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default WfsSearchInput;
