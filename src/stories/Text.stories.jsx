import React from 'react';
import { Text } from './Text';

export default {
    title: 'Todo/Text',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const TestText = Template.bind({});
TestText.args = {
    label: 'Demo Text',
};
