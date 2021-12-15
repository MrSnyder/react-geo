import * as React from 'react';
import { ColumnProps, TableProps } from 'antd/lib/table';
import OlGeometry from 'ol/geom/Geometry';
import OlFeature from 'ol/Feature';
import './PropertyGrid.less';
declare type AttributeNames = {
    [key: string]: string;
};
interface DefaultProps {
    /**
     * Title of the attribute name column
     */
    attributeNameColumnTitle?: string;
    /**
     * Value in percent representing the width of the attribute name column
     * The width of attribute value column wil be calculated depending in this
     */
    attributeNameColumnWidthInPercent?: number;
    /**
     * Title of the attribute value column
     */
    attributeValueColumnTitle?: string;
}
export interface BaseProps {
    /**
     * A CSS class which should be added.
     */
    className?: string;
    /**
     * Array of attribute names to filter
     */
    attributeFilter?: string[];
    /**
     * Object containing a mapping of attribute names in OL feature to custom ones
     *
     */
    attributeNames?: AttributeNames;
    /**
     * Feature for which the properties should be shown
     */
    feature: OlFeature<OlGeometry>;
}
interface PropertyGridState {
    dataSource: any[];
    columns: ColumnProps<any>[];
}
export declare type PropertyGridProps = BaseProps & Partial<DefaultProps> & TableProps<any>;
/**
 * Class representing a feature grid showing the attribute values of a simple feature.
 *
 * @class PropertyGrid
 * @extends React.Component
 */
declare class PropertyGrid extends React.Component<PropertyGridProps, PropertyGridState> {
    static defaultProps: DefaultProps;
    /**
     * The CSS-className added to this component.
     * @private
     */
    className: string;
    /**
     * The constructor.
     *
     * @param props The initial props.
     */
    constructor(props: PropertyGridProps);
    /**
     * Initialize data store and column definitions of table
     *
     * @param feature feature to display
     * @param attributeFilter Array of string values to filter the grid rows
     * @param attributeNames Object containing mapping of attribute names names in feature to custom ones
     * @param attributeNameColumnWidthInPercent Column width (in percent)
     */
    generatePropertyGrid({ feature, attributeFilter, attributeNames, attributeNameColumnWidthInPercent }: {
        feature: OlFeature<OlGeometry>;
        attributeFilter: string[];
        attributeNames: AttributeNames;
        attributeNameColumnWidthInPercent: number;
    }): {
        dataSource: any;
        columns: ColumnProps<any>[];
    };
    /**
     * The render function.
     *
     * @return The element.
     */
    render(): JSX.Element;
}
export default PropertyGrid;
