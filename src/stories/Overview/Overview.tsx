import React from "react";
import styling from "./overview.module.css";

interface OverviewProps {
  projectNumber?: string;

  experienceNumber?: string;

  skillLevel?: string;

  joinedSince?: string;

  ratingNumber?: string;

  Languages?: string[];
}

const Overview: React.FC<OverviewProps> = ({
  projectNumber,

  experienceNumber,

  skillLevel,

  joinedSince,

  ratingNumber,

  Languages,
}) => {
  return (
    <>
      <div>
        <h2>Overview</h2>
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/briefcase_dngpt1.svg"
              alt=""
            />
            <p className={styling.titles}>Projects completed</p>
            <p>{projectNumber}</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239941/Timer_uok2r5.svg"
              alt=""
            />
            <p className={styling.titles}>Experience</p>
            <p>{experienceNumber}</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/Stack_nyastz.svg"
              alt=""
            />
            <p className={styling.titles}>Experience Level</p>
            <p>{skillLevel}</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/ri_calendar-line_lkarte.svg"
              alt=""
            />
            <p className={styling.titles}>Member Since</p>
            <p>{joinedSince}</p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239943/carbon_review_sm0h4s.svg"
              alt=""
            />
            <p className={styling.titles}>Rating</p>
            <p>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728240339/Frame_1_bppbxm.svg"
                alt=""
              />
              {ratingNumber}
            </p>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/Vector_3_fgwlzt.svg"
              alt=""
            />
            <p className={styling.titles}>Language</p>
            <p>{Languages}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
