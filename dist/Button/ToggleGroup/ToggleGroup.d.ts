import * as React from 'react';
import * as PropTypes from 'prop-types';
import './ToggleGroup.less';
interface DefaultProps {
    /**
     * The orientation of the children.
     */
    orientation: 'vertical' | 'horizontal';
    /**
     * Whether it's allowed to deselect a children or not.
     */
    allowDeselect: boolean;
}
interface BaseProps {
    /**
     * The className which should be added.
     */
    className?: string;
    /**
     * The name of this group.
     */
    name?: string;
    /**
     * The value fo the `name` attribute of the children to select/press
     * initially.
     * Note: This prop will have full control over the pressed prop on its children. Setting select/pressed on the
     * children props directly will have no effect.
     */
    selectedName?: string;
    /**
     * Callback function for onChange.
     */
    onChange?: (childProps: any) => void;
    /**
     * The children of this group. Typically a set of `ToggleButton`s.
     */
    children?: React.ReactElement[];
}
interface ToggleGroupState {
    selectedName: string;
}
export declare type ToggleGroupProps = BaseProps & Partial<DefaultProps>;
/**
 * A group for toggle components (e.g. buttons)
 *
 * @class The ToggleGroup
 * @extends React.Component
 *
 */
declare class ToggleGroup extends React.Component<ToggleGroupProps, ToggleGroupState> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The child context types.
     */
    static childContextTypes: {
        toggleGroup: PropTypes.Requireable<object>;
    };
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * The constructor.
     *
     * @param props The properties.
     */
    constructor(props: ToggleGroupProps);
    /**
     * Update selectedName in state if property was changed
     *
     * @param prevProps Previous props
     */
    componentDidUpdate(prevProps: ToggleGroupProps): void;
    /**
     * Returns the context for the children.
     *
     * @return The child context.
     */
    getChildContext(): {
        toggleGroup: {
            name: string;
            selectedName: string;
            onChange: (childProps: any) => void;
        };
    };
    /**
     * The onChange handler.
     *
     * @param childProps The properties of the children.
     */
    onChange: (childProps: any) => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default ToggleGroup;
