import ColorPanels from '@/components/Organisms/ColorPanels';
import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

export default {
  title: 'Organisms/ColorPanels',
  component: ColorPanels,
} as Meta;

const Template: Story<React.ComponentProps<typeof ColorPanels>> = (args) => <ColorPanels {...args} />;

export const Sample1 = Template.bind({});
Sample1.args = {};
