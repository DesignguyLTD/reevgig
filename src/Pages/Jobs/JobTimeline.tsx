import React, {useState} from "react";

import RadioButton from "../../stories/RadioButton/RadioButton";
import style from "./jobs.module.css";
import {ButtonII} from "../../stories/Button-II/ButtonII";

export default function JobTimeline() {
    const [selectedValue1, setSelectedValue1] = useState<string>("");
    const [selectedValue2, setSelectedValue2] = useState<string>("");

    const handleRadioChange1 = (value: string) => {
        setSelectedValue1(value);
    };

    const handleRadioChange2 = (value: string) => {
        setSelectedValue2(value);
    };

    interface OptionType {
        value: string;
        label: string;
    }

    return (
        <>
            <p className={style.Budget}>Budget</p>
            <div className={style.rate}>
                <RadioButton
                    id={'rate'}

                    name={"Hourly rate"}
                    value={"Hourly Rate"}
                    selectedValue={selectedValue1}
                    onChange={handleRadioChange1}
                />

                <RadioButton
                    id={'rate'}
                    name={"Fixed Price"}
                    value={"Fixed Price"}
                    selectedValue={selectedValue1}
                    onChange={handleRadioChange1}
                />
            </div>

            <div>
                <p className={style.Budget}>Set Project</p>
                <div className={style.flexInput}>
                    <div className={style.labelInput}>
                        <label className={style.inpurDtext}>From</label>
                        <input placeholder="₦15,000 /hr" type="text" name="" id=""/>
                    </div>
                    {/*<hr className={style.hr1}/>*/}

                    <div className={style.labelInput}>
                        <label className={style.inpurDtext}>To</label>
                        <input placeholder='₦15,000 /hr' type="text" name="" id=""/>
                    </div>
                </div>
            </div>

            <div>
                <p className={style.Budget}>How long will your project take?</p>
                <div className={style.radios}>
                    <RadioButton
                        id={'length'}

                        name={"Less than a month"}
                        value={"Less than a month"}
                        selectedValue={selectedValue2}
                        onChange={handleRadioChange2}
                        border="2px solid #B5B6BA"
                        height="40px"
                        borderRadius="8px"
                        width="190px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        enableSelectedStyles={true}
                    />

                    <RadioButton
                        id={'length'}

                        name={"1 to 3 months"}
                        value={"1 to 3 months"}
                        selectedValue={selectedValue2}
                        onChange={handleRadioChange2}
                        border="2px solid #B5B6BA"
                        height="40px"
                        borderRadius="8px"
                        width="190px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        enableSelectedStyles={true}
                    />
                    <RadioButton
                        id={'length'}

                        name={"3 to 6 months"}
                        value={"3 to 6 months"}
                        selectedValue={selectedValue2}
                        onChange={handleRadioChange2}
                        border="2px solid #B5B6BA"
                        height="40px"
                        borderRadius="8px"
                        width="190px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        enableSelectedStyles={true}
                    />
                    <RadioButton
                        id={'length'}

                        name={"more than 6 months"}
                        value={"more than 6 months"}
                        selectedValue={selectedValue2}
                        onChange={handleRadioChange2}
                        border="2px solid #B5B6BA"
                        height="40px"
                        borderRadius="8px"
                        width="190px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        enableSelectedStyles={true}
                    />
                    <RadioButton
                        id={'length'}

                        name={"set time manually"}
                        value={"set time manually"}
                        selectedValue={selectedValue2}
                        onChange={handleRadioChange2}
                        border="2px solid #B5B6BA"
                        height="40px"
                        borderRadius="8px"
                        width="190px"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        enableSelectedStyles={true}
                    />
                    <br/>
                </div>

                <div>
                    <p className={style.Budget}>Set Project</p>
                    <div className={style.flexInput}>
                        <div className={style.labelInput}>
                            <label className={style.inpurDtext}>Start Date</label>
                            <input  type="date" name="" id=""/>
                        </div>
                        {/*<hr className={style.hr}/>*/}

                        <div className={style.labelInput}>
                            <label className={style.inpurDtext}>End Date</label>
                            <input type="date" name="" id=""/>
                        </div>
                    </div>
                </div>

                <div className={style.continue}>
                    <ButtonII
                        hasIcon={false}
                        isLabelVisible={true}
                        label="Continue"
                        primary={true}
                        size="medium"
                    />
                </div>
            </div>
        </>
    );
}
