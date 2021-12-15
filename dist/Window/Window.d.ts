import * as React from 'react';
import { PanelProps } from '../Panel/Panel/Panel';
import './Window.less';
import { ResizeEnable } from 'react-rnd';
interface DefaultProps {
    /**
     * Id of the component
     */
    id: string;
    /**
     * The id of the parent component
     * default: app
     */
    parentId: string;
    /**
     * The title text to be shown in the window header.
     */
    title: string;
    /**
     * The resize options.
     */
    resizeOpts: ResizeEnable | boolean;
    /**
     * Wheter the Window should be collapsible or not.
     */
    collapsible: boolean;
    /**
     * Wheter the Window should be draggable or not.
     */
    draggable: boolean;
}
export interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
}
interface WindowState {
    /**
     * The user aname.
     */
    resizing: boolean;
    /**
     * The id of the Window.
     */
    id: string;
}
export declare type WindowProps = BaseProps & Partial<DefaultProps> & PanelProps;
/**
 * Window component that creates a React portal that renders children into a DOM
 * node that exists outside the DOM hierarchy of the parent component. By default,
 * Window Component is draggable.
 *
 * @class Window
 * @extends React.Component
 */
export declare class Window extends React.Component<WindowProps, WindowState> {
    static defaultProps: DefaultProps;
    /**
     * The parent Element of the Window.
     * @private
     */
    _parent: Element;
    /**
     * The Element of the Window.
     * @private
     */
    _elementDiv: Element;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * Create a Window.
     * @constructs Window
     */
    constructor(props: WindowProps);
    /**
     * The portal element is inserted in the DOM tree after
     * the Windows's children are mounted, meaning that children
     * will be mounted on a detached DOM node. If a child
     * component requires to be attached to the DOM tree
     * immediately when mounted, for example to measure a
     * DOM node, or uses 'autoFocus' in a descendant, add
     * state to Window and only render the children when Window
     * is inserted in the DOM tree.
     */
    componentDidMount(): void;
    /**
     * componentWillUnmount - remove child from parent element
     */
    componentWillUnmount(): void;
    /**
     * The render function.
     */
    render(): React.ReactPortal;
}
export default Window;
