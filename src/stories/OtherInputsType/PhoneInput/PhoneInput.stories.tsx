import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import PhoneInput from './PhoneInput';

const meta = {
    title: 'Components/PhoneInput',
    component: PhoneInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {onChange: fn()}
} satisfies Meta<typeof PhoneInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'small',
        label: 'Phone Number',
        disabled: false,
        errorMessage: 'Field needed',
        placeholder: 'Phone Number',
        type: 'text',
        default: true,
    }
};
