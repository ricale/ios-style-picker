import getYears from './getYears';
import IosSelector from './IosSelector';
import './main.css';

new IosSelector({
  el: '#year1',
  type: 'normal',
  source: getYears(),
  onChange: selected => {
    // const changed = ref.current.currentYear !== selected.value;
    // ref.current.currentYear = selected.value;
    // if (changed) {
    // updateMonthSource();
    // updateDaySource();
    // onChange();
    // }
  },
});
