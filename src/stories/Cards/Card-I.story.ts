import {Meta, StoryObj} from "@storybook/react/";

import CardsOne from "./Card-I";

const meta: Meta<typeof CardsOne> = {
    title: "Card-One",
    component: CardsOne,
    args: {
        width: "",
        height: "",
        backgroundColor: "",
        textColor: "",
        borderRadius: "",
        padding: "",
        profileImage: "",
        companyName: "",
        timeFrame: "",
        amount: "",
        time: "",
        skills: "",
        mainSkill: "",
        skillSet: [],
        text: "",
    },
};

export default meta;

type Story = StoryObj<typeof CardsOne>;

export const CardOne: Story = {
    args: {
        companyName: "Recruiter",
        timeFrame: "2021",
        amount: "$100,000",
        time: "6 months",
        skills: "React, Node.js, Angular",
        mainSkill: "React",
        text: "This is the other text to be used",
    },
};
