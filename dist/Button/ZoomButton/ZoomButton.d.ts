import * as React from 'react';
import OlMap from 'ol/Map';
import { SimpleButtonProps } from '../SimpleButton/SimpleButton';
import { AnimationOptions as OlViewAnimationOptions } from 'ol/View';
interface DefaultProps {
    /**
     * Whether the zoom in shall be animated.
     */
    animate: boolean;
    /**
     * The delta to zoom when clicked. Defaults to positive `1` essentially zooming-in.
     * Pass negative numbers to zoom out.
     */
    delta: number;
    /**
     * The options for the zoom animation. By default zooming will take 250
     * milliseconds and an easing which starts fast and then slows down will be
     * used.
     */
    animateOptions: OlViewAnimationOptions;
}
interface BaseProps {
    /**
     * The className which should be added.
     */
    className?: string;
    /**
     * Instance of OL map this component is bound to.
     */
    map: OlMap;
}
export declare type ZoomButtonProps = BaseProps & Partial<DefaultProps> & SimpleButtonProps;
/**
 * Class representing a zoom button.
 *
 * @class The ZoomButton
 * @extends React.Component
 */
declare class ZoomButton extends React.Component<ZoomButtonProps> {
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    _className: string;
    /**
     * Called when the button is clicked.
     *
     * @method
     */
    onClick(): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default ZoomButton;
