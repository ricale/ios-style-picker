import { DatePickerValueFormater } from './types';
import koFormatter from '../formatters/ko';

type DatePickerSourceItem = {
  value: number;
  text: string;
};

export type DatePickerSourceOptions = {
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

class DatePickerSource {
  #fromDate: Date;
  #toDate: Date;

  #currentYear: number;
  #currentMonth: number;

  #yearFormatter: DatePickerValueFormater;
  #monthFormatter: DatePickerValueFormater;
  #dayFormatter: DatePickerValueFormater;

  #years: DatePickerSourceItem[];
  #months: DatePickerSourceItem[];
  #days: DatePickerSourceItem[];

  constructor({
    fromDate,
    toDate,
    currentYear,
    currentMonth,
    formatters,
  }: DatePickerSourceOptions = {}) {
    this.#fromDate = fromDate ?? new Date();
    this.#toDate = toDate ?? this.#getDefaultToDate();

    this.#currentYear = currentYear ?? this.#fromDate.getFullYear();
    this.#currentMonth = currentMonth ?? this.#fromDate.getMonth() + 1;

    this.#yearFormatter = formatters?.year ?? koFormatter.year;
    this.#monthFormatter = formatters?.month ?? koFormatter.month;
    this.#dayFormatter = formatters?.day ?? koFormatter?.day;

    this.#years = this.#getYears();
    this.#months = this.#getMonths();
    this.#days = this.#getDays();
  }

  #getDefaultToDate() {
    const newDate = new Date(this.#fromDate);
    newDate.setFullYear(newDate.getFullYear() + 40);
    newDate.setMonth(11);
    newDate.setDate(31);
    return newDate;
  }

  init({ fromDate, toDate, currentYear, currentMonth }: DatePickerSourceOptions) {
    if (fromDate) {
      this.#fromDate = fromDate;
    }
    if (toDate) {
      this.#toDate = toDate;
    }

    if (currentYear) {
      this.#currentYear = currentYear;
    }
    if (currentMonth) {
      this.#currentMonth = currentMonth;
    }

    this.#years = this.#getYears();
    this.#months = this.#getMonths();
    this.#days = this.#getDays();
  }

  #getItems(from: number, to: number, formatter: (val: number) => string) {
    return [...new Array(to - from + 1)].map((_, i) => ({
      value: i + from,
      text: formatter(i + from),
    }));
  }

  #getYears() {
    return this.#getItems(
      this.#fromDate.getFullYear(),
      this.#toDate.getFullYear(),
      this.#yearFormatter
    );
  }

  #getMonths() {
    const fromMonth =
      this.#currentYear === this.#fromDate.getFullYear() ? this.#fromDate.getMonth() + 1 : 1;

    const toMonth =
      this.#currentYear === this.#toDate.getFullYear() ? this.#toDate.getMonth() + 1 : 12;

    return this.#getItems(fromMonth, toMonth, this.#monthFormatter);
  }

  #getDays() {
    const fromDay =
      this.#currentYear === this.#fromDate.getFullYear() &&
      this.#currentMonth === this.#fromDate.getMonth() + 1
        ? this.#fromDate.getDate()
        : 1;

    const toDay =
      this.#currentYear === this.#toDate.getFullYear() &&
      this.#currentMonth === this.#toDate.getMonth() + 1
        ? this.#toDate.getDate()
        : new Date(this.#currentYear, this.#currentMonth, 0).getDate();

    return this.#getItems(fromDay, toDay, this.#dayFormatter);
  }

  setCurrent(year: number, month?: number) {
    this.#currentYear = year;
    this.#months = this.#getMonths();

    if (month) {
      this.#currentMonth = month;
      this.#days = this.#getDays();
    }
  }

  get years() {
    return this.#years;
  }

  get months() {
    return this.#months;
  }

  get days() {
    return this.#days;
  }
}

export default DatePickerSource;
