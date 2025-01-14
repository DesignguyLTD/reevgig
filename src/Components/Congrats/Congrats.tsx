import React from "react";
import styling from "./congrats.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../stories/Button-I/Button";
function Congrats() {
  return (
    <>
      <div className={styling.container}>
        <img
          src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1736859473/Vector_mvu92t.svg"
          alt="Tick good"
          className={styling.tick}
        />
        <div>
          <h1 className={styling.heading}>Congratulations!</h1>
          <p className={styling.text}>Order has been placed Successfully</p>
        </div>
        <div className={styling.btns}>
          <Link to="#">
            <Button
              label={"Find more talent"}
              primary={false}
              icon={false}
              size="large"
              style={{
                border: "1px solid black	",
                fontSize: "16px",
              }}
              className={`${styling.btn_sec}`}
            />
          </Link>
          <Link to="#">
            <Button
              primary={true}
              style={{
                padding: "2px",
                fontSize: "16px",
              }}
              size="large"
              label={" Request Project Milestone"}
              icon={false}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Congrats;
