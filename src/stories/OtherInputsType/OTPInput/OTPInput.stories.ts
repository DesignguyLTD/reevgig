import type {Meta, StoryObj} from '@storybook/react';
import OTPInput from './OTPInput';

const meta = {
    title: 'Components/OTPInput',
    component: OTPInput,
    parameters: {
        layout: 'centered',
    },
    args: {onComplete: (otp: string) => console.log(otp)}
} satisfies Meta<typeof OTPInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        length: 6,
        error: false,
    }
};

export const Error: Story = {
    args: {
        length: 6,
        error: true,
    }
};