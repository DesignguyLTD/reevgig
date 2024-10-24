import Toggle from "./toggle";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Toggle> = {
    component: Toggle,
    argTypes: {
        backgroundColor: { control: 'color' },
        activebackgroundColor: { control: 'color' },
        borderColor: { control: "color" },
        toggleColor: { control: "color" },
        size: { control: "text" },
        onClick: { action: 'clicked' },
    },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Primary: Story = {
    args: {
        backgroundColor: "white",
        borderColor: "1px solid #000000",
        activebackgroundColor: "#000000",
        toggleColor: "#FEC200",
        size: "small",
        onClick: action('button-click'),
    },
};