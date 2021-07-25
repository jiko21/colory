import ColorPanel from '@/components/Organisms/ColorPanel';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Organisms/ColorPanel',
  component: ColorPanel,
} as Meta;

const Template: Story<React.ComponentProps<typeof ColorPanel>> = (args) => <ColorPanel {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {};
