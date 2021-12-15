import * as React from 'react';
import { AutoCompleteProps } from 'antd/lib/auto-complete';
import { OptionData } from 'rc-select/lib/interface';
import './CoordinateReferenceSystemCombo.less';
interface CrsDefinition {
    value: string;
    code: string;
}
interface DefaultProps {
    /**
     * The API to query for CRS definitions
     * default: https://epsg.io
     */
    crsApiUrl: string;
    /**
     * The empty text set if no value is given / provided
     */
    emptyTextPlaceholderText: string;
    /**
     * A function
     */
    onSelect: (crsDefinition: any) => void;
}
interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * An array of predefined crs definitions having at least value (name of
     * CRS) and code (e.g. EPSG-code of CRS) property
     */
    predefinedCrsDefinitions?: CrsDefinition[];
}
interface CRSComboState {
    crsDefinitions: CrsDefinition[];
    value: string;
}
export declare type CRSComboProps = BaseProps & Partial<DefaultProps> & AutoCompleteProps;
/**
 * Class representing a combo to choose coordinate projection system via a
 * dropdown menu and / or autocompletion
 *
 * @class The CoordinateReferenceSystemCombo
 * @extends React.Component
 */
declare class CoordinateReferenceSystemCombo extends React.Component<CRSComboProps, CRSComboState> {
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create a CRS combo.
     * @constructs CoordinateReferenceSystemCombo
     */
    constructor(props: CRSComboProps);
    /**
     * Fetch CRS definitions from epsg.io for given search string
     *
     * @param searchVal The search string
     */
    fetchCrs: (searchVal: string) => Promise<any>;
    /**
     * This function gets called when the EPSG.io fetch returns an error.
     * It logs the error to the console.
     *
     */
    onFetchError(error: string): void;
    /**
     * This function transforms results of EPSG.io
     *
     * @param json The result object of EPSG.io-API, see where
     *  https://github.com/klokantech/epsg.io#api-for-results
     * @return Array of CRS definitons used in CoordinateReferenceSystemCombo
     */
    transformResults: (json: any) => CrsDefinition[];
    /**
     * This function gets called when the EPSG.io fetch returns an error.
     * It logs the error to the console.
     *
     * @param value The search value.
     */
    handleSearch: (value: string) => Promise<void>;
    /**
     * Handles selection of a CRS item in Autocomplete
     *
     * @param value The EPSG code.
     * @param option The selected OptionData
     */
    onCrsItemSelect: (value: string, option: OptionData) => void;
    /**
     * Tranforms CRS object returned by EPSG.io to antd  Option component
     *
     * @param crsObject Single plain CRS object returned by EPSG.io
     *
     * @return Option component to render
     */
    transformCrsObjectsToOptions(crsObject: CrsDefinition): JSX.Element;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default CoordinateReferenceSystemCombo;
