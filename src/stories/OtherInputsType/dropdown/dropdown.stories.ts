import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import Dropdown from "./dropdown";

const meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {onChange: fn()}
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'small',
        label: 'Create my account',
        disabled: false,
        errorMessage: 'Username unavailable, select another',
        placeholder: 'Username',
        default: true,
        options: [
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
        ],
        onChange: fn(),
        defaultText: 'Gender',
        error: false,
        focused: true,
    }
};


