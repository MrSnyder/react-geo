import * as React from 'react';
import * as PropTypes from 'prop-types';
import OlMap from 'ol/Map';
/**
 * The HOC factory function.
 *
 * Wrapped components will receive the map from the context as a prop.
 *
 * @param WrappedComponent The component to wrap and enhance.
 * @return The wrapped component.
 */
export declare function mappify<P>(WrappedComponent: React.ComponentType<P>): {
    new (props: P): {
        /**
         * The render function.
         */
        render(): JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<P, "map">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<Omit<P, "map">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<P, "map">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<P, "map">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<P, "map">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<P, "map">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<P, "map">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<P, "map">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<P, "map">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    /**
     * The context types.
     */
    contextTypes: {
        map: PropTypes.Validator<OlMap>;
    };
    contextType?: React.Context<any>;
};
