import * as React from 'react';
import './CircleMenu.less';
interface DefaultProps {
    /**
     * The duration of the animation in milliseconds. Pass 0 to avoid animation.
     */
    animationDuration: number;
    /**
     * The diameter of the CircleMenu in pixels.
     */
    diameter: number;
    /**
     * Optional Segement of angles where to show the children.
     */
    segmentAngles: [number, number];
}
interface BaseProps {
    className?: string;
    style?: any;
    /**
     * An array containing the x and y coordinates of the CircleMenus Center.
     */
    position: [number, number];
}
export declare type CircleMenuProps = BaseProps & Partial<DefaultProps> & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
/**
 * The CircleMenu.
 *
 * @class CircleMenu
 * @extends React.Component
 */
export declare class CircleMenu extends React.Component<CircleMenuProps> {
    static defaultProps: DefaultProps;
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
     * It calls the applyTransformation method right after mounting.
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
    childrenMapper: (child: React.ReactNode, idx?: number, children?: React.ReactNode[]) => React.ReactNode;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default CircleMenu;
