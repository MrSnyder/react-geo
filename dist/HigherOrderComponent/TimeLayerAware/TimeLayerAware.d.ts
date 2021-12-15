import * as React from 'react';
import OlLayer from 'ol/layer/Layer';
import OlImageWMS from 'ol/source/ImageWMS';
import OlTileWMS from 'ol/source/TileWMS';
export declare type TimeLayerAwareConfig = {
    isWmsTime?: boolean;
    layer: OlLayer<OlImageWMS | OlTileWMS>;
    customHandler?: (values: any) => void;
};
/**
 * HOC that updates layers based on the wrapped components time instant or
 * interval. Can for example be used with the TimeSlider component.
 * @param WrappedComponent A component with an onChange prop.
 * @param layers An array of layer configurations.
 * @return A time layer aware component.
 */
export declare function timeLayerAware<P>(WrappedComponent: React.ComponentType<P>, layers: TimeLayerAwareConfig[]): {
    new (props: Omit<P, "onChange"> | Readonly<Omit<P, "onChange">>): {
        timeChanged: (newValues: any) => void;
        /**
         * Injects the onChange property.
         * @return The wrapped component
         */
        render: () => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<P, "onChange">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<Omit<P, "onChange">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<P, "onChange">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<P, "onChange">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<P, "onChange">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<P, "onChange">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: Omit<P, "onChange">, context: any): {
        timeChanged: (newValues: any) => void;
        /**
         * Injects the onChange property.
         * @return The wrapped component
         */
        render: () => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<Omit<P, "onChange">>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<Omit<P, "onChange">> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<Omit<P, "onChange">>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<Omit<P, "onChange">>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<Omit<P, "onChange">>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<Omit<P, "onChange">>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<Omit<P, "onChange">>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default timeLayerAware;
