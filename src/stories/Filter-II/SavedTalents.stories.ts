import type { Meta, StoryObj } from "@storybook/react/*";
import { fn } from "@storybook/test";
import { SavedTalents } from "./SavedTalents";

const meta = {
  title: "Components/SavedTalents",
  component: SavedTalents,
  parameters: {
    args: { onClick: fn() },
  },
} satisfies Meta<typeof SavedTalents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "This is the label",
  },
};
