import * as React from 'react';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { OptionProps } from 'antd/lib/select';
import { OptionData } from 'rc-select/lib/interface';
import OlMap from 'ol/Map';
import { GeoJSON } from 'geojson';
import './NominatimSearch.less';
export declare type NominatimPlace = {
    place_id: number;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    display_name: string;
    category: string;
    type: string;
    importance: number;
    icon?: string;
    address?: any;
    extratags?: any;
    namedetails?: any;
    geojson: GeoJSON;
    licence: string;
};
interface DefaultProps {
    /**
     * The Nominatim Base URL. See https://wiki.openstreetmap.org/wiki/Nominatim
     */
    nominatimBaseUrl: string;
    /**
     * Output format.
     */
    format: string;
    /**
     * The preferred area to find search results in [left],[top],[right],[bottom].
     */
    viewBox: string;
    /**
     * Restrict the results to only items contained with the bounding box.
     * Restricting the results to the bounding box also enables searching by
     * amenity only. For example a search query of just "[pub]" would normally be
     * rejected but with bounded=1 will result in a list of items matching within
     * the bounding box.
     */
    bounded: number;
    /**
     * Output geometry of results in geojson format.
     */
    polygonGeoJSON: number;
    /**
     * Include a breakdown of the address into elements.
     */
    addressDetails: number;
    /**
     * Limit the number of returned results.
     */
    limit: number;
    /**
     * Limit search results to a specific country (or a list of countries).
     * [countrycode] should be the ISO 3166-1alpha2 code, e.g. gb for the United
     * Kingdom, de for Germany, etc.
     */
    countryCodes: string;
    /**
     * The minimal amount of characters entered in the input to start a search.
     */
    minChars: number;
    /**
     * A render function which gets called with the selected item as it is
     * returned by nominatim. It must return an `AutoComplete.Option`.
     */
    renderOption: (item: NominatimPlace) => React.ReactElement<OptionProps>;
    /**
     * An onSelect function which gets called with the selected item as it is
     * returned by nominatim.
     */
    onSelect: (item: NominatimPlace, olMap: OlMap) => void;
    /**
     * Indicate if we should render the input and results. When setting to false,
     * you need to handle user input and result yourself
     */
    visible?: boolean;
    /**
     * The searchTerm may be given as prop. This is useful when setting
     * `visible` to `false`.
     */
    searchTerm?: string;
    /**
     * A callback function which gets called with the successfully fetched data.
     */
    onFetchSuccess?: (data: NominatimPlace[]) => void;
    /**
     * A callback function which gets called if data fetching has failed.
     */
    onFetchError?: (error: any) => void;
}
interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * The ol.map where the map will zoom to.
     *
     */
    map: OlMap;
    /**
     * A function that gets called when the clear Button is pressed or the input
     * value is empty.
     */
    onClear?: () => void;
}
interface NominatimSearchState {
    searchTerm: string;
    dataSource: NominatimPlace[];
}
export declare type NominatimSearchProps = BaseProps & Partial<DefaultProps> & Omit<AutoCompleteProps, 'onSelect'>;
/**
 * The NominatimSearch.
 *
 * @class NominatimSearch
 * @extends React.Component
 */
export declare class NominatimSearch extends React.Component<NominatimSearchProps, NominatimSearchState> {
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create the NominatimSearch.
     *
     * @param props The initial props.
     * @constructs NominatimSearch
     */
    constructor(props: NominatimSearchProps);
    /**
     * Trigger search when searchTerm prop has changed
     *
     * @param prevProps Previous props
     */
    componentDidUpdate(prevProps: any): void;
    /**
     * Called if the input of the AutoComplete is being updated. It sets the
     * current inputValue as searchTerm and starts a search if the inputValue has
     * a length of at least `this.props.minChars` (default 3).
     *
     * @param inputValue The inputValue. Undefined if clear btn
     *                                      is pressed.
     */
    onUpdateInput(inputValue?: string): void;
    /**
     * Perform the search.
     */
    doSearch(): void;
    /**
     * This function gets called on success of the nominatim fetch.
     * It sets the response as dataSource.
     *
     * @param response The found features.
     */
    onFetchSuccess(response: any): void;
    /**
     * This function gets called when the nomintim fetch returns an error.
     * It logs the error to the console.
     *
     * @param error The errorstring.
     */
    onFetchError(error: string): void;
    /**
     * The function describes what to do when an item is selected.
     *
     * @param value The value of the selected option.
     * @param option The selected OptionData
     */
    onMenuItemSelected(value: string, option: OptionData): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default NominatimSearch;
