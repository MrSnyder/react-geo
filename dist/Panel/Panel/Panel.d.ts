import * as React from 'react';
import { Rnd, ResizeEnable, ResizableDelta, Position, Props as RndProps } from 'react-rnd';
import { ResizeDirection } from 're-resizable';
import './Panel.less';
interface DefaultProps {
    /**
     * Whether to allow dragging or not. Default is false.
     */
    draggable: boolean;
    /**
     * Whether to allow collapsing or not. Default is false.
     */
    collapsible: boolean;
    /**
     * Whether to show panel collapsed initially or not. Default is false.
     */
    collapsed: boolean;
    /**
     * The height of the panel.
     */
    height: number | 'inherit' | 'initial' | 'auto';
    /**
     * The width of the panel.
     */
    width: number | 'inherit' | 'initial' | 'auto';
    /**
     * The height of the TitleBar.
     */
    titleBarHeight: number;
    /**
     * The tooltip of the collapse button.
     */
    collapseTooltip: string;
    /**
     *
     */
    tools: React.ReactElement[];
    /**
     * The enableResizing property is used to set the resizable permission of a
     * resizable component.
     * The permission of top, right, bottom, left, topRight, bottomRight,
     * bottomLeft, topLeft direction resizing. If omitted, all resizer are
     * enabled. If you want to permit only right direction resizing, set {
     *   top:false,
     *   right:true,
     *   bottom:false,
     *   left:false,
     *   topRight:false,
     *   bottomRight:false,
     *   bottomLeft:false,
     *   topLeft:false
     * }.
     */
    resizeOpts: ResizeEnable | boolean;
}
export interface BaseProps {
    id?: string;
    /**
     * The children to show in the Window.
     */
    children?: React.ReactNode;
    /**
     * The title text to be shown in the window Header.
     */
    title?: string;
    /**
     * Callback function on `keydown` keyboard event if `escape` key was pressed.
     */
    onEscape?: (evt: KeyboardEvent) => void;
}
interface PanelState {
    id?: string;
    /**
     * Whether to show panel collapsed initially or not. Default is false.
     */
    collapsed: boolean;
    /**
     * The height of the TitleBar.
     */
    titleBarHeight: number;
    /**
     * The height of the panel.
     */
    height: number | 'inherit' | 'initial' | 'auto';
    /**
     * The width of the panel.
     */
    width: number | 'inherit' | 'initial' | 'auto';
    /**
     *
     */
    resizing: boolean;
}
export declare type PanelProps = BaseProps & Partial<DefaultProps> & RndProps;
/**
 * The Panel.
 *
 * @class The Panel
 * @extends React.Component
 */
export declare class Panel extends React.Component<PanelProps, PanelState> {
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
     * Printed representation of the pressed escape keyboard key.
     * s. https://developer.mozilla.org/de/docs/Web/API/KeyboardEvent/key/Key_Values
     * @private
     */
    _escapeKeyboardEventKey: string;
    /**
     *
     *
     */
    _rnd: Rnd;
    /**
     * Create the Panel.
     *
     * @constructs Panel
     */
    constructor(props: PanelProps);
    /**
     * componentDidMount life cycle method.
     * Registers `keydown` listener if `onEscape` function was provided via props.
     */
    componentDidMount(): void;
    /**
     * componentWillUnmount life cycle method.
     * Unregisters `keydown` listener if `onEscape` function was provided via props.
     */
    componentWillUnmount(): void;
    /**
     * Calculates the height of the Panel and returns a number.
     */
    calculateHeight(): number | "inherit" | "initial" | "auto";
    /**
     * Calculates the height of the Panel body and returns a valid css height
     * expression.
     */
    calculateBodyHeight(): string;
    /**
     * Toggles the collapse state of the panel.
     */
    toggleCollapse(): void;
    /**
     * Function called while resizing.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     * @param delta The delta of the resizing.
     * @param position The position of the resizing.
     */
    onResize(evt: MouseEvent | TouchEvent, direction: ResizeDirection, el: HTMLDivElement, delta: ResizableDelta, position: Position): void;
    /**
     * Function called when resizing is started.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     */
    onResizeStart(evt: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, direction: ResizeDirection, el: HTMLDivElement): void;
    /**
     * Function called when resizing is stopped.
     *
     * @param evt The MouseEvent event.
     * @param direction A string discribing where the element was grabed.
     * @param el The element which gets resized.
     * @param delta The delta of the resizing.
     * @param position The position of the resizing.
     */
    onResizeStop(evt: MouseEvent | TouchEvent, direction: ResizeDirection, el: HTMLDivElement, delta: ResizableDelta, position: Position): void;
    /**
     * Called on keyboard `keydown` event. Will be only triggered if pressed key
     * is `Escape` key and `onEscape` function is provided via props.
     * @param evt `keydown` event.
     */
    onKeyDown: (evt: KeyboardEvent) => void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default Panel;
