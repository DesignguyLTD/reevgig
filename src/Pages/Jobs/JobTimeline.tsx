import React, {useState} from "react";

import RadioButton from "../../stories/RadioButton/RadioButton";
import style from "./jobs.module.css";
import {ButtonII} from "../../stories/Button-II/ButtonII";

interface jobProps {
    setActiveComponent?: (component: string) => void;
}

export default function JobTimeline({setActiveComponent}: jobProps) {
    const [selectedValue1, setSelectedValue1] = useState<string>("");
    const [selectedValue2, setSelectedValue2] = useState<string>("");
    const [selectedValue3, setSelectedValue3] = useState<string>("");

    const handleRadioChange1 = (value: string) => {
        setSelectedValue1(value);
    };

    const handleRadioChange2 = (value: string) => {
        setSelectedValue2(value);
    };

    const handleRadioChange3 = (value: string) => {
        setSelectedValue3(value);
    };

    const handleNext = () => {
        if (setActiveComponent) {
            setActiveComponent('jobs_skills')
        }
    }

    interface OptionType {
        value: string;
        label: string;
    }

    return (
        <>

            <div className={style.paymentModeCtn}>
                <div className={style.Budget}>Project Type</div>
                <div className={style.rate}>
                    <RadioButton
                        id={'type'}

                        name={"One-time Off"}
                        value={"One-time Off"}
                        selectedValue={selectedValue3}
                        onChange={handleRadioChange3}
                    />

                    <RadioButton
                        id={'type'}
                        name={"Part Time"}
                        value={'Part Time'}
                        selectedValue={selectedValue3}
                        onChange={handleRadioChange3}
                    />
                    <RadioButton
                        id={'type'}
                        name={"Full Time"}
                        value={"Full Time"}
                        selectedValue={selectedValue3}
                        onChange={handleRadioChange3}
                    />
                </div>
            </div>
            <div className={style.paymentModeCtn}>
                <div className={style.Budget}>Payment Mode</div>
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

                    <div style={{visibility: 'hidden'}}>
                        <RadioButton
                            id={'rate'}
                            name={"Fixed Price"}
                            value={"Fixed Price"}
                            selectedValue={selectedValue1}
                            onChange={handleRadioChange1}
                        />
                    </div>
                </div>
            </div>

            <div className={style.paymentModeCtn}>
                <div className={style.Budget}>Set Project</div>
                <div className={style.flexInput}>
                    <div className={style.labelInput}>
                        <label
                            className={style.inpurDtext}>{selectedValue1 !== 'Hourly Rate' ? 'Price' : 'From'}</label>
                        <input placeholder="₦15,000 /hr" type="text" name="" id=""/>
                    </div>
                    {/*<hr className={style.hr1}/>*/}
                    {selectedValue1 === 'Hourly Rate' &&
                        <div className={style.labelInput}>
                            <label className={style.inpurDtext}>To</label>
                            <input placeholder='₦15,000 /hr' type="text" name="" id=""/>
                        </div>

                    }
                </div>
            </div>

            <div className={style.paymentModeCtn}>
                <div className={style.Budget}>How long will your project take?</div>
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

                        name={"Set time manually"}
                        value={"Set time manually"}
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

                {(selectedValue2 === 'Set time manually' || selectedValue2 === 'Less than a month') && (
                    <div className={style.paymentModeCtn}>
                        <div className={style.Budget}>Set Project timeline</div>
                        <div className={style.flexInput}>
                            <div className={style.labelInput}>
                                <label className={style.inpurDtext}>Start Date</label>
                                <input type="date" name="" id=""/>
                            </div>

                            <div className={style.labelInput}>
                                <label className={style.inpurDtext}>End Date</label>
                                <input type="date" name="" id=""/>
                            </div>
                        </div>
                    </div>
                )}


                <div className={style.continue}>
                    <ButtonII
                        onClick={handleNext}
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
