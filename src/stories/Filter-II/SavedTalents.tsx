import React from "react";
import css from "./savedTalents.module.css";

interface TalentProps {
  onClick?: () => void;

  style?: string;

  size?: "small" | "medium" | "large";

  imgLink?: string;

  label?: string;
}
export const SavedTalents = ({
  style,
  imgLink,
  size = "medium",
  onClick,
  label,
}: TalentProps) => {
  return (
    <>
      <div className={css.container}>
        <div className={css.info}>
          <div className={css.profile_image}>
            <img src="" alt="" />
          </div>
          <div>
            <div>
              <label htmlFor="Project Title">Circuit Design</label>
              <label htmlFor="period">Full time</label>
            </div>
            <div>
              <label htmlFor="expertise">Beginner</label>
              <label htmlFor="price">$50-55k</label>
              <div>
                <img src="" alt="" />
                <label htmlFor="duration">Time</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>Remove</div>
          <div>
            Apply <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
