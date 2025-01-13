import React from "react";
import styling from "./review.module.css";

interface ReviewProps {
  total?: number;
  five: number;
  four: number;
  three: number;
  two: number;
  one: number;
  star: string[];
  starPoint: number;
}

export const Reviews = ({
  total,
  five,
  four,
  three,
  two,
  one,
  star,
  starPoint,
}: ReviewProps) => {
  const totalPercentage = five + four + three + two + one;
  total = totalPercentage;
  const valueFive = (five / totalPercentage) * 100;
  const valueFour = (four / totalPercentage) * 100;
  const valueThree = (three / totalPercentage) * 100;
  const valueTwo = (two / totalPercentage) * 100;
  const valueOne = (one / totalPercentage) * 100;

  return (
    <>
      <div className={styling.container}>
        <p className={styling.text}>Reviews</p>
        <div className={styling.inner}>
          <p>{total} reviews for this Gig</p>
          <div className={styling.staring}>
            {star.map((icon, key) => (
              <img key={key} src={icon} alt={`star icon ${key}`} />
            ))}
            <p>
              <strong>{starPoint} </strong>
            </p>
          </div>
        </div>
        <div className={styling.star}>
          <div className={styling.fifth}>
            <label htmlFor="five">5 Stars</label>
            <progress id="five" value={valueFive} max={100}></progress>
            <label htmlFor="five">({five})</label>
          </div>
          <div className={styling.fourth}>
            <label htmlFor="four">4 Stars</label>
            <progress id="four" value={valueFour} max={100}></progress>{" "}
            <label htmlFor="four">({four})</label>
          </div>
          <div className={styling.third}>
            <label htmlFor="three">3 Stars</label>
            <progress id="three" value={valueThree} max={100}></progress>{" "}
            <label htmlFor="three">({three})</label>
          </div>
          <div className={styling.second}>
            <label htmlFor="two">2 Stars</label>
            <progress id="two" value={valueTwo} max={100}></progress>{" "}
            <label htmlFor="two">({two})</label>
          </div>
          <div className={styling.first}>
            <label htmlFor="one">1 Star</label>
            <progress id="one" value={valueOne} max={100}></progress>{" "}
            <label htmlFor="one">({one})</label>
          </div>
        </div>
      </div>
    </>
  );
};
