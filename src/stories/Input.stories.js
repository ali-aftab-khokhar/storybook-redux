import React from 'react';
import { Input } from './Input';

export default {
  title: 'Todo/InputField',
  component: Input,
};

function Template(args) {
  return <Input {...args} />;
}

export const Primary = Template.bind({});
Primary.args = {
  type: 'text',
  placeholder: 'What needs to be done?',
};
