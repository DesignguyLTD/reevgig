import { Meta, StoryObj } from "@storybook/react/*";

import RadioButton from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "RadioButtons",
  component: RadioButton,
  args: {
    name: "",
    value: "",
    selectedValue: "",
    onChange: () => {},
    border: "",
    borderRadius: "",
    color: "",
    padding: "",
    width: "",
    height: "",
    backgroundColor: "",
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Beginner: Story = {
  args: {
    name: "Great",
    value: "Great",
    border: "3px solid gold",
  },
};
