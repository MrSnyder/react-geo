import * as React from 'react';
import { TooltipPlacement, AbstractTooltipProps } from 'antd/lib/tooltip';
import { ButtonProps } from 'antd/lib/button';
import './SimpleButton.less';
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
}
interface BaseProps {
    className?: string;
    /**
     * The icon to render. See https://ant.design/components/icon/.
     */
    icon?: React.ReactNode;
    /**
     * The name of the fa icon. Set either the icon node or the name of the icon.
     */
    iconName?: IconProp;
    /**
     * The tooltip to be shown on hover.
     */
    tooltip?: string;
    /**
     * The position of the tooltip.
     */
    tooltipPlacement?: TooltipPlacement;
}
export declare type SimpleButtonProps = BaseProps & Partial<DefaultProps> & ButtonProps;
/**
 * The SimpleButton.
 *
 * @class The SimpleButton
 * @extends React.Component
 */
declare class SimpleButton extends React.Component<SimpleButtonProps> {
    /**
     * The default properties.
     */
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default SimpleButton;
