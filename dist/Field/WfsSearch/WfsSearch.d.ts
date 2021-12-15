import * as React from 'react';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { OptionProps } from 'antd/lib/select';
import OlMap from 'ol/Map';
import './WfsSearch.less';
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
     * Which prop value of option will render as content of select.
     */
    displayValue: string;
    /**
     * The id property of the feature. Default is to `id`.
     */
    idProperty: string;
    /**
     * Delay in ms before actually sending requests.
     */
    delay: number;
    /**
     * A render function which gets called with the selected item as it is
     * returned by the server. It must return an `AutoComplete.Option` with
     * `key={feature.id}`.
     * The default will display the property `name` if existing or the
     * property defined in `props.idProperty` (default is to `id`).
     */
    renderOption: (feature: any, props: WfsSearchProps) => React.ReactElement<OptionProps>;
    /**
     * An onSelect function which gets called with the selected feature as it is
     * returned by server.
     * The default function will create a searchlayer, adds the feature and will
     * zoom to its extend.
     */
    onSelect: (feature: any, olMap: OlMap) => void;
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
     * Filter condition. See https://openlayers.org/en/latest/apidoc/module-ol_format_filter.html
     * for more information.
     */
    filter?: any;
    /**
     * The ol.map to interact with on selection.
     */
    map: OlMap;
    /**
     * An onChange function which gets called with the current value of the
     * field.
     */
    onChange?: (value: string) => void;
    /**
     * Optional callback function, that will be called before WFS search starts.
     * Can be useful if input value manipulation is needed (e.g. umlaut
     * replacement `ä => oa` etc.)
     */
    onBeforeSearch?: (value: string) => string;
    /**
     * Options which are passed to the constructor of the ol.format.WFS.
     * compare: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
     */
    wfsFormatOptions?: any;
}
interface WfsSearchState {
    searchTerm: string;
    data: Array<any>;
    fetching: boolean;
}
export declare type WfsSearchProps = BaseProps & Partial<DefaultProps> & AutoCompleteProps;
/**
 * The WfsSearch field.
 * Implements an input field to do a WFS-GetFeature request.
 *
 * The GetFeature request is created with `ol.format.WFS.writeGetFeature`
 * so most of the WFS specific options work like document in the corresponding
 * API-docs: https://openlayers.org/en/latest/apidoc/module-ol_format_WFS.html
 *
 * @class WfsSearch
 * @extends React.Component
 */
export declare class WfsSearch extends React.Component<WfsSearchProps, WfsSearchState> {
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create the WfsSearch.
     *
     * @param props The initial props.
     * @constructs WfsSearch
     */
    constructor(props: WfsSearchProps);
    /**
     * Called if the input of the AutoComplete is being updated. It sets the
     * current inputValue as searchTerm and starts a search if the inputValue has
     * a length of at least `this.props.minChars` (default 3).
     *
     * @param value The inputValue. Undefined if clear btn is pressed.
     */
    onUpdateInput(value?: string): void;
    /**
     * Perform the search.
     * @private
     */
    doSearch(): void;
    /**
     * This function gets called on success of the WFS GetFeature fetch request.
     * It sets the response as data.
     *
     * @param response The found features.
     */
    onFetchSuccess(response: any): void;
    /**
     * This function gets called when the WFS GetFeature fetch request returns an error.
     * It logs the error to the console.
     *
     * @param error The errorstring.
     */
    onFetchError(error: string): void;
    /**
     * The function describes what to do when an item is selected.
     *
     * @param value The value of the selected option.
     * @param option The selected option.
     */
    onMenuItemSelected(value: string, option: OptionProps): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default WfsSearch;
