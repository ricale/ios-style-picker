import { Story } from '@storybook/react';
import DatePicker, { DatePickerProps } from '../components/DatePicker';
import enFormatter from '../formatters/en';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = args => <DatePicker {...args} />;

export const Default = Template.bind({});
export const Infinite = Template.bind({});
Infinite.args = {
  infinite: true,
};

export const English = Template.bind({});
English.args = {
  formatters: enFormatter,
};
