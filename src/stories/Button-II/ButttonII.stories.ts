import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import {ButtonII} from './ButtonII';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Components/Button-II',
    component: ButtonII,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // Use `userEvent` to simulate user actions, which will appear in the actions panel once invoked: https://storybook.js.org/docs/react/essentials/actions#action-args
    args: {onClick: fn()},
} satisfies Meta<typeof ButtonII>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Primary Button',
        disabled: false,
        hasIcon: true,
        isLabelVisible: true
    },
};
export const PrimaryLabel: Story = {
    args: {
        primary: true,
        label: 'Primary Button',
        disabled: false,
        hasIcon: false,
        isLabelVisible: true
    },
};
export const PrimaryIcon: Story = {
    args: {
        primary: true,
        label: 'Primary Button',
        disabled: false,
        hasIcon: true,
        isLabelVisible: false
    },
};

export const Secondary: Story = {
    args: {
        primary: false,
        label: 'Secondary Button',
        disabled: false,
        hasIcon: true,
        isLabelVisible: true
    },
};

export const SecondaryLabel: Story = {
    args: {
        primary: false,
        label: 'Secondary Button',
        disabled: false,
        hasIcon: false,
        isLabelVisible: true
    },
};
export const SecondaryIcon: Story = {
    args: {
        primary: false,
        label: 'Secondary Button',
        disabled: false,
        hasIcon: true,
        isLabelVisible: false
    },
};

export const Disabled: Story = {
    args: {
        primary: false,
        label: 'Disabled Button',
        disabled: true,
        hasIcon: true,
        isLabelVisible: true
    },
};
export const DisabledLabel: Story = {
    args: {
        primary: false,
        label: 'Disabled Button',
        disabled: true,
        hasIcon: false,
        isLabelVisible: true
    },
};
export const DisabledIcon: Story = {
    args: {
        primary: false,
        label: 'Disabled Button',
        disabled: true,
        hasIcon: true,
        isLabelVisible: false
    },
};
