import ColorForm from '@/components/Molecules/ColorForm';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Molecules/ColorForm',
  component: ColorForm,
} as Meta;

const Template: Story<React.ComponentProps<typeof ColorForm>> = (args) => <ColorForm {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {
  color: '#FF0000',
};
Sample1.argTypes = {
  color: {
    control: {
      type: 'color',
    },
  },
};
