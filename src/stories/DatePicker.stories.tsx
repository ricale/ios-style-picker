import { Story } from '@storybook/react';
import DatePicker, { DatePickerProps } from '../DatePicker';

export default {
  title: 'Example/DatePicker',
  component: DatePicker,
};

const Template: Story<DatePickerProps> = args => <DatePicker {...args} />;

export const Default = Template.bind({});
