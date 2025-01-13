import type { Meta, StoryObj } from "@storybook/react";
import FilterTwo from "./filterTwo";
const meta = {
  title: "Components/Filter-II",
  component: FilterTwo,
  argTypes: {},
} satisfies Meta<typeof FilterTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
