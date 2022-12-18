export declare type DatePickerProps = {
    onChange: (year: number, month: number, day: number) => void;
    fromDate?: Date;
    toDate?: Date;
    initDate?: Date;
    infinite?: boolean;
    className?: string;
};
declare function DatePicker({ onChange, fromDate: _fromDate, toDate, initDate: _initDate, infinite, className: _className, }: DatePickerProps): JSX.Element;
export default DatePicker;
