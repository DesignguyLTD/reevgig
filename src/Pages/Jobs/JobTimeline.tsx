import React, { useState } from "react";

import RadioButton from "../../stories/RadioButton/RadioButton";
import style from "./jobs.module.css";

export default function JobTimeline() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
  };

  interface OptionType {
    value: string;
    label: string;
  }
  return (
    <>
      <p>Budget</p>
      <div className={style.rate}>
        <RadioButton
          name={"Hourly rate"}
          value={"Hourly Rate"}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />

        <RadioButton
          name={"Fixed Price"}
          value={"Fixed Price"}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
        />
      </div>

      <div>
        <p>How long will your project take?</p>
        <div className={style.radios}>
          <RadioButton
            name={"Less than a month"}
            value={"Less than a month"}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
            border="2px solid #B5B6BA"
            height="56px"
            borderRadius="8px"
            width="227px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            enableSelectedStyles={true}
          />

          <RadioButton
            name={"1 to 3 months"}
            value={"1 to 3 months"}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
            border="2px solid #B5B6BA"
            height="56px"
            borderRadius="8px"
            width="227px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            enableSelectedStyles={true}
          />
          <RadioButton
            name={"3 to 6 months"}
            value={"3 to 6 months"}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
            border="2px solid #B5B6BA"
            height="56px"
            borderRadius="8px"
            width="227px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            enableSelectedStyles={true}
          />
          <RadioButton
            name={"more than 6 months"}
            value={"more than 6 months"}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
            border="2px solid #B5B6BA"
            height="56px"
            borderRadius="8px"
            width="227px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            enableSelectedStyles={true}
          />
          <RadioButton
            name={"set time manually"}
            value={"set time manually"}
            selectedValue={selectedValue}
            onChange={handleRadioChange}
            border="2px solid #B5B6BA"
            height="56px"
            borderRadius="8px"
            width="227px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            enableSelectedStyles={true}
          />
        </div>

        <div>
          <p>Set Project</p>
          <div>
            <div>
              <label>Start Date</label>
              <input placeholder="Put in here date" type="date" name="" id="" />
            </div>
            <div>
              <hr />
            </div>
            <div>
              <label>End Date</label>
              <input type="date" name="" id="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
