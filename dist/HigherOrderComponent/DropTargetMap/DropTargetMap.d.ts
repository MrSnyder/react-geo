import * as React from 'react';
import { MapComponentProps } from '../../Map/MapComponent/MapComponent';
/**
 * HOC that adds layers to the map if GeoJSON files or shapefile zip files are
 * dropped on it.
 * @param WrappedComponent The map component.
 * @return A time layer aware component.
 */
export declare function onDropAware(WrappedComponent: React.ComponentType<MapComponentProps>): {
    new (props: MapComponentProps | Readonly<MapComponentProps>): {
        /**
         * Calls an appropriate addLayer method depending on the fileending.
         * Currently expects shapefiles for '*.zip' and geojson for all other
         * endings.
         * @param event The drop event.
         */
        onDrop(event: DragEvent): void;
        /**
         * Prevents default in order to prevent browser navigation/opening the file.
         * @param event The dragover event.
         */
        onDragOver(event: React.DragEvent<HTMLDivElement>): void;
        /**
         * Injects the onDrop and onDragOver properties.
         * @return The wrapped component.
         */
        render: () => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<MapComponentProps>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<MapComponentProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MapComponentProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<MapComponentProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MapComponentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MapComponentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    new (props: MapComponentProps, context: any): {
        /**
         * Calls an appropriate addLayer method depending on the fileending.
         * Currently expects shapefiles for '*.zip' and geojson for all other
         * endings.
         * @param event The drop event.
         */
        onDrop(event: DragEvent): void;
        /**
         * Prevents default in order to prevent browser navigation/opening the file.
         * @param event The dragover event.
         */
        onDragOver(event: React.DragEvent<HTMLDivElement>): void;
        /**
         * Injects the onDrop and onDragOver properties.
         * @return The wrapped component.
         */
        render: () => JSX.Element;
        context: any;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<MapComponentProps>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
        forceUpdate(callback?: () => void): void;
        readonly props: Readonly<MapComponentProps> & Readonly<{
            children?: React.ReactNode;
        }>;
        state: Readonly<{}>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<MapComponentProps>, prevState: Readonly<{}>): any;
        componentDidUpdate?(prevProps: Readonly<MapComponentProps>, prevState: Readonly<{}>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<MapComponentProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<MapComponentProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<MapComponentProps>, nextState: Readonly<{}>, nextContext: any): void;
    };
    contextType?: React.Context<any>;
};
export default onDropAware;
