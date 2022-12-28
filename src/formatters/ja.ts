import { DatePickerValueFormater } from '../components/types';

const ja: Record<'year' | 'month' | 'day', DatePickerValueFormater> = {
  year: value => `${value}年`,
  month: value => `${value}月`,
  day: value => `${value}日`,
};

export default ja;
