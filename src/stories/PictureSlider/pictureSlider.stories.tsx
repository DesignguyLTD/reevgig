import type { Meta, StoryObj } from "@storybook/react";

import PictureSlider from "./pictureSlider";

const meta: Meta<typeof PictureSlider> = {
  title: "Components/Picture-Slider",
  component: PictureSlider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    images: [
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
      `https://plus.unsplash.com/premium_photo-1676009547155-32d75ba9d089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww`,
      `https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww`,
      `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
    ],
  },
};
