import { useEffect, useRef } from 'react';
import IosStylePicker, { IosStylePickerOptions } from './IosStylePicker';
import getYears from './getYears';
import getMonths from './getMonth';
import getDays from './getDays';

import './DatePicker.css';

const ONCHANGE_TIMEOUT_DELAY = 100;

export type DatePickerProps = {
  onChange: (year: number, month: number, day: number) => void;
  fromDate?: Date;
  toDate?: Date;
  initDate?: Date;
};
type DatePickerStateRef = {
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  yearSource: IosStylePickerOptions['source'];
  monthSource: IosStylePickerOptions['source'];
  daySource: IosStylePickerOptions['source'];
  onChange: DatePickerProps['onChange'];
  onChangeTimeout: NodeJS.Timeout | null;
};
function DatePicker({
  onChange,
  fromDate: _fromDate,
  toDate,
  initDate: _initDate,
}: DatePickerProps) {
  const fromDate = _fromDate ?? new Date();
  const initDate = _initDate ?? fromDate;

  const ref = useRef<DatePickerStateRef>({
    currentYear: fromDate.getFullYear(),
    currentMonth: fromDate.getMonth() + 1,
    currentDay: fromDate.getDate(),
    yearSource: getYears(fromDate, toDate),
    monthSource: getMonths(fromDate.getFullYear(), fromDate, toDate),
    daySource: getDays(fromDate.getFullYear(), fromDate.getMonth() + 1, fromDate, toDate),
    onChange,
    onChangeTimeout: null,
  });

  const yearPickerRef = useRef<HTMLDivElement>(null);
  const monthPickerRef = useRef<HTMLDivElement>(null);
  const dayPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current.onChange = onChange;
  }, [onChange]);

  useEffect(() => {
    const onChange = () => {
      // NOTE: kangseongofdk
      // 잦은 onChange 콜을 막기 위한 timeout 처리
      if (ref.current.onChangeTimeout) {
        clearTimeout(ref.current.onChangeTimeout);
      }
      ref.current.onChangeTimeout = setTimeout(() => {
        ref.current.onChange(
          ref.current.currentYear,
          ref.current.currentMonth,
          ref.current.currentDay
        );
        ref.current.onChangeTimeout = null;
      }, ONCHANGE_TIMEOUT_DELAY);
    };

    const updateMonthSource = () => {
      ref.current.monthSource = getMonths(ref.current.currentYear, fromDate, toDate);
      monthSelector.updateSource(ref.current.monthSource);
    };

    const updateDaySource = () => {
      ref.current.daySource = getDays(
        ref.current.currentYear,
        ref.current.currentMonth,
        fromDate,
        toDate
      );
      daySelector.updateSource(ref.current.daySource);
    };

    const yearSelector = new IosStylePicker(yearPickerRef.current!, {
      variant: 'normal',
      source: ref.current.yearSource,
      onChange: selected => {
        const changed = ref.current.currentYear !== selected.value;
        ref.current.currentYear = selected.value;

        if (changed) {
          updateMonthSource();
          updateDaySource();

          onChange();
        }
      },
    });

    const monthSelector = new IosStylePicker(monthPickerRef.current!, {
      variant: 'normal',
      source: ref.current.monthSource,
      onChange: selected => {
        const changed = ref.current.currentMonth !== selected.value;
        ref.current.currentMonth = selected.value;

        if (changed) {
          updateDaySource();
          onChange();
        }
      },
    });

    const daySelector = new IosStylePicker(dayPickerRef.current!, {
      variant: 'normal',
      source: ref.current.daySource,
      onChange: selected => {
        const changed = ref.current.currentDay !== selected.value;
        ref.current.currentDay = selected.value;

        if (changed) {
          onChange();
        }
      },
    });

    setTimeout(() => {
      const initYear = initDate.getFullYear();
      const initMonth = initDate.getMonth() + 1;
      const initDay = initDate.getDate();

      ref.current.monthSource = getMonths(initYear, fromDate);
      monthSelector.updateSource(ref.current.monthSource);
      ref.current.daySource = getDays(initYear, initMonth, fromDate);
      daySelector.updateSource(ref.current.daySource);

      yearSelector.select(initYear);
      monthSelector.select(initMonth);
      daySelector.select(initDay);
    }, 0);

    return () => {
      yearSelector.destroy();
      monthSelector.destroy();
      daySelector.destroy();
    };
  }, []);

  return (
    <div className="DatePicker">
      <div ref={yearPickerRef} />
      <div ref={monthPickerRef} />
      <div ref={dayPickerRef} />
    </div>
  );
}

export default DatePicker;
