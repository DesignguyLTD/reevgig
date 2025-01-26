import { Meta, StoryObj } from "@storybook/react/*";
import Overview from "./Overview";

const meta = {
  title: "Components/Overview",
  component: Overview,
  tags: ["autodocs"],
  parameters: {
    projectNumber: "55+",

    experienceNumber: "3 years",

    skillLevel: "Beginner",

    joinedSince: "August 2009",

    ratingNumber: "4.9",

    Languages: ["English", "Yoruba"],
  },
} satisfies Meta<typeof Overview>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    projectNumber: "55+",

    experienceNumber: "3 years",

    skillLevel: "Beginner",

    joinedSince: "August 2019",

    ratingNumber: "4.9",

    Languages: ["English", "Yoruba"],
  },
};
