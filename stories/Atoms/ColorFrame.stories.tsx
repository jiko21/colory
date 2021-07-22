import ColorFrame from '@/components/Atoms/ColorFrame';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Atoms/ColorFrame',
  component: ColorFrame,
} as Meta;

const Template: Story<React.ComponentProps<typeof ColorFrame>> = (args) => <ColorFrame {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  children: 'aaa',
  color: '#ff0000',
};

Sample1.argTypes = {
  color: {
    control: {
      type: 'color',
    },
  },
};
