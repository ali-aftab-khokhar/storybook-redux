import React from 'react';

import { Input } from './Input';

export default {
    title: 'Todo/InputField',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    type: 'text',
    placeholder: 'What needs to be done?',
};
