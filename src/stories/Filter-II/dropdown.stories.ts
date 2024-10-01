import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./dropdown";

const meta = {
  title: "Components/Dropdown-II",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "selected" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    onSelect: (option) => console.log(option),
    headings: "Hardware",
  },
};
