import React from "react";
import styling from "./response.module.css";

interface ResponseProp {
  userName: string;
  userImage?: string;
  star?: string[];
  starNumber?: number;
  timePeriod: string;
  review?: string;
  sellerImage?: string;
  sellerName?: string;
  feedback?: string;
}

export const Response = ({
  userName,
  userImage,
  star,
  starNumber,
  timePeriod,
  review,
  sellerImage,
  sellerName,
  feedback,
}: ResponseProp) => {
  return (
    <>
      <div className={styling.container}>
        <div className={styling.profile}>
          <div className={styling.image_holder}>M</div>
          <p>{userName}</p>
        </div>

        <div className={styling.holding}>
          <div className={styling.staring}>
            {star?.map((icon, key) => (
              <img key={key} src={icon} alt={`star icon ${key}`} />
            ))}
            <p className={styling.star_number}>
              <strong>{starNumber} </strong>
            </p>
            |<p className={styling.period}>{timePeriod}</p>
          </div>

          <p
            style={{
              margin: "0",
              width: "100%",
              textAlign: "left",
              padding: "14px 0",
            }}>
            {review}
          </p>
          <div className={styling.helpful}>
            <p>Helpful?</p>
            <button className={styling.button}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727909423/thumbsup.svg"
                alt=""
              />
              Yes
            </button>
            <button className={styling.button}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727909423/thumbsdown.svg"
                alt=""
              />
              No
            </button>
          </div>
        </div>
        <div className={styling.seller}>
          <div className={styling.seller_profile}>
            <div className={styling.seller_image}>
              <img src={sellerImage} alt="" />
            </div>
            <p>{sellerName}</p>
          </div>
          <p> {feedback}</p>
        </div>
      </div>
    </>
  );
};
