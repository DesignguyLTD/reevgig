import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
    activebackgroundColor: { control: 'color' },
    borderColor: { control: "color" },
    toggleColor: { control: "color" },
    size: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    backgroundColor: "white",
    borderColor: "1px solid grey",
    activebackgroundColor: "black",
    toggleColor: "yellow",
    size: "small",
  },
};