import * as React from 'react';
import './CircleMenuItem.less';
interface CircleMenuItemDefaultProps {
    /**
     * The duration of the animation in milliseconds. Pass 0 to avoid animation.
     */
    animationDuration: number;
}
export interface CircleMenuItemProps extends Partial<CircleMenuItemDefaultProps> {
    className?: string;
    /**
     * The radius of the CircleMenu in pixels.
     */
    radius: number;
    /**
     * The children of the CircleMenuItem. Should be just one Node.
     */
    children?: React.ReactNode;
    /**
     * The rotation Angle in degree.
     */
    rotationAngle: number;
}
/**
 * The CircleMenuItem.
 *
 * @class CircleMenuItem
 * @extends React.Component
 */
export declare class CircleMenuItem extends React.Component<CircleMenuItemProps> {
    static defaultProps: {
        animationDuration: number;
    };
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * Internal reference used to apply the transformation right on the div.
     * @private
     */
    _ref: any;
    /**
     * A react lifecycle method called when the component did mount.
     * It calls the applyTransformation method right after updating.
     */
    componentDidMount(): void;
    /**
     * A react lifecycle method called when the component did update.
     * It calls the applyTransformation method right after updating.
     */
    componentDidUpdate(): void;
    /**
     * Applies the transformation to the component.
     */
    applyTransformation(): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default CircleMenuItem;
