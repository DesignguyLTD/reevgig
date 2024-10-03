import PictureSlider from "../PictureSlider/pictureSlider";
import React from "react";
import styling from "./fullSlide.module.css";

interface SlideProp {
  profileImage: string;
  title: string;
  userName: string;
  duration: string;
  sponsored: string;
  p1?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
  p2?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
}

export const FullSlide = ({
  profileImage,
  title,
  userName,
  duration,
  sponsored,
  p1,
  p2,
  ...props
}: SlideProp) => {
  return (
    <>
      <div>
        <div className={styling.profile_ctn}>
          <div className={styling.profile_image}>
            <img src={profileImage} alt={`${userName}'s profile`} />
          </div>
          <div>
            <label className={styling.title} htmlFor="title">
              {title}
            </label>
            <div className={styling.text}>
              <label className={styling.name} htmlFor="User">
                {userName}
              </label>
              <p {...p1}> {duration}</p>
              <p {...p2}>{sponsored}</p>
            </div>
          </div>
        </div>
        <PictureSlider
          images={[
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
            `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
          ]}
        />
      </div>
    </>
  );
};
