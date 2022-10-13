import React from 'react';

import { Button } from './Button';

export default {
  title: 'Todo/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' }
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};
