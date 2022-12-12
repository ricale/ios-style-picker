export declare type DatePickerProps = {
    onChange: (year: number, month: number, day: number) => void;
    fromDate?: Date;
    toDate?: Date;
    initDate?: Date;
};
declare function DatePicker({ onChange, fromDate: _fromDate, toDate, initDate: _initDate, }: DatePickerProps): JSX.Element;
export default DatePicker;
