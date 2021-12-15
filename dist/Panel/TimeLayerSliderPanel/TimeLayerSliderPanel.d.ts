import * as React from 'react';
import moment from 'moment';
import OlLayer from 'ol/layer/Layer';
import OlMap from 'ol/Map';
import OlImageWMS from 'ol/source/ImageWMS';
import OlTileWMS from 'ol/source/TileWMS';
import './TimeLayerSliderPanel.less';
declare type timeRange = [moment.Moment, moment.Moment];
export interface Tooltips {
    hours: string;
    days: string;
    weeks: string;
    months: string;
    years: string;
    setToNow: string;
    dataRange: string;
}
export declare type PlaybackSpeedType = 'hours' | 'days' | 'weeks' | 'months' | 'years';
export interface DefaultTimeLayerSliderPanelProps {
    className: string;
    onChange: (arg: moment.Moment) => void;
    timeAwareLayers: OlLayer<OlImageWMS | OlTileWMS>[];
    value: moment.Moment;
    dateFormat: string;
    tooltips: Tooltips;
    autoPlaySpeedOptions: number[];
}
export interface TimeLayerSliderPanelProps extends Partial<DefaultTimeLayerSliderPanelProps> {
    map: OlMap;
    initStartDate: moment.Moment;
    initEndDate: moment.Moment;
}
export interface TimeLayerSliderPanelState {
    value: moment.Moment;
    playbackSpeed: number | PlaybackSpeedType;
    autoPlayActive: boolean;
    startDate: moment.Moment;
    endDate: moment.Moment;
}
/**
 * The panel combining all time slider related parts.
 */
export declare class TimeLayerSliderPanel extends React.Component<TimeLayerSliderPanelProps, TimeLayerSliderPanelState> {
    /**
     * The default props of LayerSetBaseMapChooser
     *
     * @static
     * @memberof LayerSetBaseMapChooser
     */
    static defaultProps: DefaultTimeLayerSliderPanelProps;
    private _TimeLayerAwareSlider;
    private _wmsTimeLayers;
    private _interval;
    /**
     * Constructs time panel.
     */
    constructor(props: TimeLayerSliderPanelProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TimeLayerSliderPanelProps): void;
    /**
     *
     * @param nextProps
     * @param nextState
     */
    shouldComponentUpdate(nextProps: TimeLayerSliderPanelProps, nextState: TimeLayerSliderPanelState): boolean;
    /**
     * Wraps the TimeSlider component in timeLayerAware.
     */
    wrapTimeSlider: () => void;
    /**
     * Updates slider time range depending on chosen layer set.
     */
    findRangeForLayers: () => void;
    /**
     * Handler for the time slider change behaviour
     */
    timeSliderCustomHandler: (value: any) => void;
    /**
     * makes sure that the appended time parameter in GetMap calls
     * is rounded to full hours to receive a valid response
     */
    wmsTimeHandler: (value?: any) => void;
    /**
     * start or stop auto playback
     * TODO: we should do the request for new features less aggresive,
     * e.g. a precache would be helpful
     */
    autoPlay(pressed: boolean): void;
    /**
     * handle playback speed change
     */
    onPlaybackSpeedChange: (val: string) => void;
    /**
     * Sets the slider to the current time of the user
     */
    setSliderToNow: () => void;
    /**
     *
     */
    updateDataRange([startDate, endDate]: timeRange): void;
    /**
     *
     * @param val
     */
    onTimeChanged(val: string): void;
    /**
     *
     *
     * @memberof TimeLayerSliderPanel
     */
    render: () => JSX.Element;
}
export default TimeLayerSliderPanel;
