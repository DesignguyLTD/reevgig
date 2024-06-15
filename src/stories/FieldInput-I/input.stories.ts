import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input } from './input';
import exp from "constants";

const meta= {
    title: 'Components/Input-I',
    component: Input,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    args: {onChange:fn()}
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default :Story = {
    args:{
        size: 'large',
        label: 'Create my account',
        disabled: false,
        errorMessage: 'Username unavailable, select another',
        placeholder: 'Username',
        type: 'text',
        default: true
    }
};

export const Password :Story = {
    args:{
        size: 'large',
        label: 'Create my account',
        disabled: false,
        placeholder: 'Password',
        type: 'password',
        default: true
    }
};

export const error :Story = {
    args:{
        size: 'large',
        label: 'Username',
        disabled: false,
        placeholder: 'Username',
        type: 'text',
        error: true,
        errorMessage: 'Username unavailable, select another'
    }
};


export const disabled :Story = {
    args:{
        size: 'large',
        label: 'Create my account',
        disabled: true,
        placeholder: 'Name',
        type: 'text',
        default: true
    }
};