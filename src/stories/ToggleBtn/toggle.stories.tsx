import type { Meta, StoryObj } from '@storybook/react';

import Toggle from './toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: "color" },
    color: { control: "color" },
    width: { control: "number" },
    height: { control: "number" },
    padding: { action: "text" },
    borderRadius: { action: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
  args: {
    backgroundColor: "black",
    borderColor: "1px solid grey",
    color: "yello",
    width: "43px",
    height: "20px",
    padding: "4px",
    borderRadius: "100px",
  },
};