import type { Meta, StoryObj } from "@storybook/react";
import { FullSlide } from "./fullSlide";

const response = {
  title: "Components/Full-slide",
  component: FullSlide,
  parameters: {
    profileImage:
      "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722501223/Avatar_display.svg",
    title: "Senior UX Designer",
    userName: "Jimmy Joe",
    duration: "Full-time",
    sponsored: "Sponsored",
  },
} satisfies Meta<typeof FullSlide>;

export default response;

type Story = StoryObj<typeof response>;

export const Primary: Story = {
  args: {
    profileImage:
      "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722501223/Avatar_display.svg",
    title: "Senior UX Designer",
    userName: "Jimmy Joe",
    duration: "Full-time",
    sponsored: "Sponsored",
  },
};
