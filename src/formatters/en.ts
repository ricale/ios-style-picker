import { DatePickerValueFormater } from '../components/types';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const en: Record<'year' | 'month' | 'day', DatePickerValueFormater> = {
  year: value => `${value}`,
  month: value => monthNames[value - 1],
  day: value => `${value}`,
};

export default en;
