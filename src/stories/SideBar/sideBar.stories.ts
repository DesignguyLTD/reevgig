import type {Meta, StoryObj} from '@storybook/react';
import Sidebar from "./sideBar";


const meta = {
    title: 'Components/SideBar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        collapse: false
    }
};