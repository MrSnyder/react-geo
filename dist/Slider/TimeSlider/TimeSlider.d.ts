import * as React from 'react';
import { SliderMarks, SliderBaseProps } from 'antd/lib/slider';
interface DefaultProps {
    /**
     * Whether to allow range selection.
     */
    useRange: boolean;
    /**
     * The default value(s).
     */
    defaultValue: string | [string, string];
    /**
     * The minimum value.
     */
    min: string;
    /**
     * The maximum value.
     */
    max: string;
    /**
     * Called when the value changes.
     */
    onChange: (val: string | [string, string]) => void;
    /**
     * The current value(s).
     */
    value: string | [string, string];
    /**
     * The moment.js compliant format string for the slider tooltip.
     */
    formatString: string;
}
export interface BaseProps {
    /**
     * An optional CSS class which should be added.
     */
    className?: string;
    /**
     * Tick mark of Slider, type of key must be TimeStamp ISOString, and must in
     * closed interval min, max，each mark can declare its own style.
     */
    marks?: SliderMarks;
}
export declare type TimeSliderProps = BaseProps & Partial<DefaultProps> & Omit<SliderBaseProps, 'min' | 'max' | 'marks' | 'className'>;
/**
 * Customized slider that uses ISO 8601 time strings as input.
 *
 * @class The TimeSlider
 * @extends React.Component
 */
declare class TimeSlider extends React.Component<TimeSliderProps> {
    static defaultProps: DefaultProps;
    /**
     * The className added to this component.
     * @private
     */
    className: string;
    /**
     * The constructor.
     *
     * @constructs TimeSlider
     * @param props The properties.
     */
    constructor(props: TimeSliderProps);
    /**
     * Converts the various input strings to unix timestamps.
     * @return The converted values
     */
    convertTimestamps(): {
        min: number;
        max: number;
        defaultValue: number | [number, number];
    };
    /**
     * Convert a value to unix timestamps.
     * @param val the input value(s)
     * @return The converted value(s)
     */
    convert(val: string[] | string): number | [number, number] | undefined;
    /**
     * Convert the keys of mark values to unix timestamps.
     *
     * @param marks The marks prop.
     * @return The marks prop with converted keys.
     */
    convertMarks(marks: SliderMarks): SliderMarks;
    /**
     * Formats a timestamp for user display.
     * @param unix unix timestamps
     * @return The formatted timestamps
     */
    formatTimestamp(unix: number): string;
    /**
     * Called when the value(s) are changed. Converts the value(s) back to ISO
     * timestrings.
     * @param value the new value
     */
    valueUpdated(value: number | number[]): void;
    /**
     * The render function.
     */
    render(): JSX.Element;
}
export default TimeSlider;
