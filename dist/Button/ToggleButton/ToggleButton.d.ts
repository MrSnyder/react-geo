import * as React from 'react';
import * as PropTypes from 'prop-types';
import './ToggleButton.less';
import { AbstractTooltipProps, TooltipPlacement } from 'antd/lib/tooltip';
import { SimpleButtonProps } from '../SimpleButton/SimpleButton';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
interface DefaultProps {
    type: 'default' | 'primary' | 'ghost' | 'dashed' | 'danger' | 'link';
    /**
     * Additional [antd tooltip](https://ant.design/components/tooltip/)
     * properties to pass to the tooltip component. Note: The props `title`
     * and `placement` will override the props `tooltip` and `tooltipPlacement`
     * of this component!
     */
    tooltipProps: AbstractTooltipProps;
    /**
     * The initial pressed state of the ToggleButton
     * Note: If a ToggleButton is inside a ToggleGroup, the pressed state will be controlled by the selectedName property
     * of the ToggleGroup and this property will be ignored.
     */
    pressed: boolean;
    /**
     * The toggle handler
     */
    onToggle: (pressed: boolean, lastClickEvt: any) => void;
}
interface BaseProps {
    className?: string;
    /**
     * The icon to render for the pressed state. See
     * https://ant.design/components/icon/.
     */
    pressedIcon?: React.ReactNode;
    /**
     * The name of the fa icon for the pressed state. Set either the icon node or
     * the name of the icon.
     */
    pressedIconName?: IconProp;
    /**
     * The tooltip to be shown on hover.
     */
    tooltip?: string;
    /**
     * The position of the tooltip.
     */
    tooltipPlacement?: TooltipPlacement;
}
interface ToggleButtonState {
    pressed: boolean;
    lastClickEvt: any;
    overallPressed: boolean;
    isClicked: boolean;
}
export declare type ToggleButtonProps = BaseProps & Partial<DefaultProps> & SimpleButtonProps;
/**
 * The ToggleButton.
 *
 * @class The ToggleButton
 * @extends React.Component
 */
declare class ToggleButton extends React.Component<ToggleButtonProps, ToggleButtonState> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The context types.
     */
    static contextTypes: {
        toggleGroup: PropTypes.Requireable<object>;
    };
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * The class to apply for a toggled/pressed button.
     */
    pressedClass: string;
    /**
     * Creates the ToggleButton.
     *
     * @constructs ToggleButton
     */
    constructor(props: ToggleButtonProps);
    /**
     * Invoked right before calling the render method, both on the initial mount
     * and on subsequent updates. It should return an object to update the state,
     * or null to update nothing.
     * @param nextProps The next properties.
     * @param prevState The previous state.
     */
    static getDerivedStateFromProps(nextProps: ToggleButtonProps, prevState: ToggleButtonState): {
        pressed: boolean;
        overallPressed: boolean;
        isClicked: boolean;
        lastClickEvt: any;
    };
    /**
     * We will handle the initial state of the button here.
     * If it is pressed, we will have to call its `onToggle`
     * method, if it exists, in order to reflect the initial
     * state correctly (e.g. activating ol.Controls)
     */
    componentDidMount(): void;
    /**
     * Invoked immediately after updating occurs. This method is not called
     * for the initial render.
     * @method
     */
    componentDidUpdate(prevProps: BaseProps, prevState: ToggleButtonState): void;
    /**
     * Called on click.
     *
     * @param evt The ClickEvent.
     * @method
     */
    onClick(evt: any): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default ToggleButton;
