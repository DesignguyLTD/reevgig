import React, { ChangeEvent, useState } from "react";

import CounterInput from "./CounterInput";
import style from "./jobs.module.css";

export default function JobBrief() {
  const [text, setText] = useState<string>("");

  // const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setText(e.target); // Update the state when the value changes
  // };

  return (
    <>
      <div className={style.brief_container}>
        <div>
          <p>Give your project brief a title</p>
          <p>
            Keep it short and simple - this will help us to match you to the
            right category
          </p>
          {/* <CounterInput
            maxLength={100}
            label={"Lets see"}
            value={text}
            // onChange={handleTextChange}
          /> */}
        </div>
      </div>
    </>
  );
}
