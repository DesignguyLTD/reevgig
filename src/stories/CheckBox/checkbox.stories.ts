import type {Meta, StoryObj} from '@storybook/react';
import CheckBox from './checkbox';
import {fn} from "@storybook/test";


const meta = {
    title: 'Components/CheckBox',
    component: CheckBox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {onChange: fn()}
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        disabled: false,
        onChange: fn(),
        size: 'medium',
        checked: false
    }
};