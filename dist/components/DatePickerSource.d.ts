import { DatePickerValueFormater } from './types';
declare type DatePickerSourceItem = {
    value: number;
    text: string;
};
export declare type DatePickerSourceOptions = {
    fromDate?: Date;
    toDate?: Date;
    currentYear?: number;
    currentMonth?: number;
    formatters?: {
        year?: DatePickerValueFormater;
        month?: DatePickerValueFormater;
        day?: DatePickerValueFormater;
    };
};
declare class DatePickerSource {
    #private;
    constructor({ fromDate, toDate, currentYear, currentMonth, formatters, }?: DatePickerSourceOptions);
    init({ fromDate, toDate, currentYear, currentMonth }: DatePickerSourceOptions): void;
    setCurrent(year: number, month?: number): void;
    get years(): DatePickerSourceItem[];
    get months(): DatePickerSourceItem[];
    get days(): DatePickerSourceItem[];
}
export default DatePickerSource;
