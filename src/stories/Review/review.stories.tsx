import type { Meta, StoryObj } from "@storybook/react";
import { Reviews } from "./review";

const meta = {
  title: "Components/Reviews",
  component: Reviews,
  args: {
    total: 100,
    five: 10,
    four: 40,
    three: 30,
    two: 20,
    one: 10,
    star: [],
    starPoint: 4.8,
  },
} satisfies Meta<typeof Reviews>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    starPoint: 4.8,
    five: 10,
    four: 40,
    three: 30,
    two: 20,
    one: 10,
    star: [
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
    ],
  },
};
