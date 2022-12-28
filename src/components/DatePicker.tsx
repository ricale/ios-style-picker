import { useEffect, useRef } from 'react';
import IosStylePicker from './IosStylePicker';
import DatePickerSource from './DatePickerSource';

import './DatePicker.css';
import { DatePickerValueFormater } from './types';

const ONCHANGE_TIMEOUT_DELAY = 100;

export type DatePickerProps = {
  /**
   * Callback for changing values.
   */
  onChange: (year: number, month: number, day: number) => void;
  /**
   * First date of date picker.
   */
  fromDate?: Date;
  /**
   * Last date of date picker. Default to 40 years later from `fromDate`.
   */
  toDate?: Date;
  /**
   * Initial date.
   */
  initDate?: Date;
  /**
   * Scroll infinitely or not.
   */
  infinite?: boolean;
  /**
   * Formatter for picker.
   */
  formatters?: {
    year?: DatePickerValueFormater;
    month?: DatePickerValueFormater;
    day?: DatePickerValueFormater;
  };
  /**
   * Classes of container element.
   */
  className?: string;
};
type DatePickerStateRef = {
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  source: DatePickerSource;
  onChange: DatePickerProps['onChange'];
  onChangeTimeout: NodeJS.Timeout | null;
};
function DatePicker({
  onChange,
  fromDate = new Date(),
  toDate,
  initDate: _initDate,
  infinite,
  formatters,
  className: _className,
}: DatePickerProps) {
  const initDate = _initDate ?? fromDate;
  const className = 'ios-style-date-picker' + (_className ? ` ${_className}` : '');

  const ref = useRef<DatePickerStateRef>({
    currentYear: fromDate.getFullYear(),
    currentMonth: fromDate.getMonth() + 1,
    currentDay: fromDate.getDate(),
    source: new DatePickerSource({
      fromDate,
      toDate,
      currentYear: fromDate.getFullYear(),
      currentMonth: fromDate.getMonth() + 1,
      formatters,
    }),
    onChange,
    onChangeTimeout: null,
  }).current;

  const yearPickerRef = useRef<HTMLDivElement>(null);
  const monthPickerRef = useRef<HTMLDivElement>(null);
  const dayPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.source.init({
      fromDate,
      toDate,
      currentYear: ref.currentYear,
      currentMonth: ref.currentMonth,
    });
  }, [fromDate, toDate]);

  useEffect(() => {
    ref.onChange = onChange;
  }, [onChange]);

  useEffect(() => {
    const onChange = () => {
      // NOTE: kangseongofdk
      // 잦은 onChange 콜을 막기 위한 timeout 처리
      if (ref.onChangeTimeout) {
        clearTimeout(ref.onChangeTimeout);
      }
      ref.onChangeTimeout = setTimeout(() => {
        ref.onChange(ref.currentYear, ref.currentMonth, ref.currentDay);
        ref.onChangeTimeout = null;
      }, ONCHANGE_TIMEOUT_DELAY);
    };

    const updateMonthSource = () => {
      ref.source.setCurrent(ref.currentYear);
      monthSelector.updateSource(ref.source.months);
    };

    const updateDaySource = () => {
      ref.source.setCurrent(ref.currentYear, ref.currentMonth);
      daySelector.updateSource(ref.source.days);
    };

    const yearSelector = new IosStylePicker(yearPickerRef.current!, {
      variant: infinite ? 'infinite' : 'normal',
      source: ref.source.years,
      onChange: selected => {
        const changed = ref.currentYear !== selected.value;
        ref.currentYear = selected.value;

        if (changed) {
          updateMonthSource();
          updateDaySource();

          onChange();
        }
      },
    });

    const monthSelector = new IosStylePicker(monthPickerRef.current!, {
      variant: infinite ? 'infinite' : 'normal',
      source: ref.source.months,
      onChange: selected => {
        const changed = ref.currentMonth !== selected.value;
        ref.currentMonth = selected.value;

        if (changed) {
          updateDaySource();
          onChange();
        }
      },
    });

    const daySelector = new IosStylePicker(dayPickerRef.current!, {
      variant: infinite ? 'infinite' : 'normal',
      source: ref.source.days,
      onChange: selected => {
        const changed = ref.currentDay !== selected.value;
        ref.currentDay = selected.value;

        if (changed) {
          onChange();
        }
      },
    });

    setTimeout(() => {
      const initYear = initDate.getFullYear();
      const initMonth = initDate.getMonth() + 1;
      const initDay = initDate.getDate();

      ref.source.setCurrent(initYear, initMonth);
      monthSelector.updateSource(ref.source.months);
      daySelector.updateSource(ref.source.days);

      yearSelector.select(initYear);
      monthSelector.select(initMonth);
      daySelector.select(initDay);
    }, 0);

    return () => {
      yearSelector.destroy();
      monthSelector.destroy();
      daySelector.destroy();
    };
  }, [infinite]);

  return (
    <div className={className}>
      <div ref={yearPickerRef} />
      <div ref={monthPickerRef} />
      <div ref={dayPickerRef} />
    </div>
  );
}

export default DatePicker;
