import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Component from '../src/Component';

export default {
  title: 'Component',
  component: Component,
} as Meta;

const Template: Story<{}> = (args) => <Component {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {};
