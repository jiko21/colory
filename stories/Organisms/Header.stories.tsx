import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Header from '@/components/Organisms/Header';

export default {
  title: 'Organisms/Header',
  component: Header,
} as Meta;

const Template: Story<{}> = (args) => <Header {...args} />;

export const Sample1 = Template.bind({});

Sample1.args = {
  children: 'sample',
};
