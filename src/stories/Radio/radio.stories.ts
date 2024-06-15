import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Radio } from './radio';

const meta = {
    title: 'Components/Radio',
    component: Radio,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        labelColour: { control: 'color' },
    },
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    args: { onChange: fn() },
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof meta>;
export const radio: Story = {
    args: {
        label: 'Radio 1',
        disabled: false,
        id: 'radio-1',
        checked: false
    },
};


export const checked: Story = {
    args: {
        label: 'Radio 1',
        disabled: false,
        id: 'radio-1',
        checked: true
    },
};


export const disabled: Story = {
    args: {
        label: 'Radio 1',
        disabled: true,
        id: 'radio-1',
        checked: true
    },
};

export const disabledUnchecked: Story = {
    args: {
        label: 'Radio 1',
        disabled: true,
        id: 'radio-1',
        checked: false
    },
};

