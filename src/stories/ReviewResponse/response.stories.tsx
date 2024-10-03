import type { Meta, StoryObj } from "@storybook/react";
import { Response } from "./response";

const response = {
  title: "Components/Response",
  component: Response,
  parameters: {
    userName: "Winner",
    userImage: "",
    star: [""],
    starNumber: 4.7,
    timePeriod: "2 weeks ago",
    review: "This is the review",
    sellerImage: "",
    sellerName: "MyDealer",
    feedback: "",
  },
} satisfies Meta<typeof Response>;

export default response;

type Story = StoryObj<typeof response>;

export const Primary: Story = {
  args: {
    userName: "Winner",
    userImage: "",
    star: [
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
    ],
    starNumber: 3.6,
    timePeriod: "3 weeks ago",
    review: `Great work! I wanted a video to showcase my fitness app and the
          designer delivered an excellent job and on time. highly satisfied.
          thank you!`,
    sellerImage:
      "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_11_Copy_fqx4li.svg",
    sellerName: "Seller's Name",
    feedback: "Thank you for buying!",
  },
};
