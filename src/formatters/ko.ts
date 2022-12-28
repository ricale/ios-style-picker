import { DatePickerValueFormater } from '../components/types';

const ko: Record<'year' | 'month' | 'day', DatePickerValueFormater> = {
  year: value => `${value}년`,
  month: value => `${value}월`,
  day: value => `${value}일`,
};

export default ko;
