---
to: stories/<%= path %>/<%= component_name %>.stories.tsx
---
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import <%= component_name %> from '@/components/<%= path %>/<%= component_name %>';

export default {
  title: '<%= path %>/<%= component_name %>',
  component: <%= component_name %>,
} as Meta;

const Template: Story<{}> = (args) => <<%= component_name %> {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {};
