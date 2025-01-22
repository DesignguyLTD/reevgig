import React from "react";
import styles from "./card-I.module.css";

interface CardOneProps {
  profileImage: string;
  companyName: string;
  timeFrame: string;
  mainSkill: string;
  amount: string;
  time: string;
  skills: string;
  skillSet: string[];
  text: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  padding?: string;
  display1?: string;
  containerDisplay?: string;
  containerJustify?: string;
  containerAlign?: string;
  containerGap?: string;
  skillWidth?: string;
  hidePost?: React.HTMLAttributes<HTMLLabelElement>;
  hideImage?: React.HTMLAttributes<HTMLImageElement>;
}

const CardsOne: React.FC<CardOneProps> = ({
  profileImage,
  companyName,
  timeFrame,
  amount,
  time,
  skills,
  mainSkill,
  skillSet,
  text,
  width,
  height,
  backgroundColor,
  textColor,
  borderRadius,
  padding,
  display1,
  containerDisplay,
  containerJustify,
  containerAlign,
  containerGap,
  skillWidth,
  hidePost,
  hideImage,
}) => {
  return (
    <div
      style={{
        width: width,
        height: height,
        borderRadius: borderRadius,
        padding: padding,
        display: containerDisplay,
        justifyContent: containerJustify,
        alignItems: containerAlign,
        gap: containerGap,
        backgroundColor: backgroundColor,
      }}
      className={styles.container}>
      <div className={styles.prof}>
        <div className={styles.image}>
          <img src={profileImage} alt="Profile" />
        </div>
        <div className={styles.to_hide}>
          <img
            {...hideImage}
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728240292/Vector_6_ks7j4o.svg"
            alt="save icon"
          />
          <label className={styles.new} {...hidePost} htmlFor="">
            New Post
          </label>
        </div>
      </div>
      <div>
        <div>
          <label className={styles.company}>{companyName}</label>
          <div className={styles.main_skill}>
            <label className={styles.main}> {mainSkill}</label>{" "}
            <label style={{ display: display1 }} className={styles.new}>
              New Post
            </label>
          </div>
          <div className={styles.time_frame}>
            <div className={styles.time}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012510/Clock_neascs.svg"
                alt="time icon"
              />
              <label className={styles.label}>{timeFrame}</label>
            </div>

            {/* --------------- */}
            <div className={styles.spacing}></div>
            {/* -------------------- */}
            <div className={styles.time}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012510/CurrencyDollar_ndmngk.svg"
                alt="dollar icon"
              />
              <label className={styles.label}>{amount}</label>
            </div>
            {/* ------------------------ */}
            <div className={styles.spacing}></div>
            {/* ---------------------- */}
            <div className={styles.time}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012509/CalendarBlank_zupxlc.svg"
                alt="calendar icon"
              />
              <label className={styles.label}>{time}</label>
            </div>
          </div>
          <div className={styles.skill_set}>
            <label className={styles.each_skill}>{skills}</label>{" "}
            <hr className={styles.hr} />
            <div className={styles.hold_skills}>
              {skillSet.map((skill, index) => (
                <div
                  key={index}
                  style={{ width: skillWidth }}
                  className={styles.one_skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className={styles.last_text}>{text}</p>
      </div>
    </div>
  );
};

export default CardsOne;
