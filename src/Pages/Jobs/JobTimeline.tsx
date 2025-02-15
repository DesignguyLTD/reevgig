import React, {useState} from "react";

import RadioButton from "../../stories/RadioButton/RadioButton";
import style from "./jobs.module.css";
import {ButtonII} from "../../stories/Button-II/ButtonII";

interface jobProps {
    setActiveComponent?: (component: string) => void;
    setFormValues2: (values: any) => void;
    formValues2?: any;

}

export default function JobTimeline({setActiveComponent, setFormValues2, formValues2}: jobProps) {
    const [selectedValue1, setSelectedValue1] = useState<string>(formValues2?.payment_type || "");
    const [selectedValue2, setSelectedValue2] = useState<string>(formValues2?.project_timeline || "");
    const [selectedValue3, setSelectedValue3] = useState<string>(formValues2?.project_type || "");
    const [rateFrom, setRateFrom] = useState<string>(formValues2?.rate_range?.split(' - ')[0] || "");
    const [rateTo, setRateTo] = useState<string>(formValues2?.rate_range?.split(' - ')[1] || "");

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
        const formValues = {
            project_type: selectedValue3,
            payment_type: selectedValue1,
            rate_range: selectedValue1 === 'Hourly Rate' ? `${parseFloat(rateFrom || '0').toFixed(2)} - ${parseFloat(rateTo || '0').toFixed(2)}` : parseFloat(rateFrom || '0').toFixed(2),            start_date: '',
            end_date: '',
            project_timeline: selectedValue2,
        };

        if (selectedValue2 !== 'Set time manually') {
            const startDate = new Date();
            let endDate = new Date();

            switch (selectedValue2) {
                case 'Less than a month':
                    endDate.setMonth(startDate.getMonth() + 1);
                    break;
                case '1 to 3 months':
                    endDate.setMonth(startDate.getMonth() + 3);
                    break;
                case '3 to 6 months':
                    endDate.setMonth(startDate.getMonth() + 6);
                    break;
                case 'more than 6 months':
                    endDate.setMonth(startDate.getMonth() + 7);
                    break;
            }

            formValues.start_date = startDate.toISOString().split('T')[0];
            formValues.end_date = endDate.toISOString().split('T')[0];
        }

        setFormValues2(formValues);

        if (setActiveComponent) {
            setActiveComponent('jobs_skills');
        }
    };

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

                        name={"Onetime Off"}
                        value={"Onetime Off"}
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
                        {/*<RadioButton*/}
                        {/*    id={'rate'}*/}
                        {/*    name={"Fixed Price"}*/}
                        {/*    value={"Fixed Price"}*/}
                        {/*    selectedValue={selectedValue1}*/}
                        {/*    onChange={handleRadioChange1}*/}
                        {/*/>*/}
                    </div>
                </div>
            </div>

            <div className={style.paymentModeCtn}>
                <div className={style.Budget}>Set Project</div>
                <div className={style.flexInput}>
                    <div className={style.labelInput}>
                        <label className={style.inpurDtext}>{selectedValue1 !== 'Hourly Rate' ? 'Price' : 'From'}</label>
                        <input placeholder="₦15,000 /hr" type="text" name="" id="" value={rateFrom} onChange={(e) => setRateFrom(e.target.value)} />
                    </div>
                    {selectedValue1 === 'Hourly Rate' &&
                        <div className={style.labelInput}>
                            <label className={style.inpurDtext}>To</label>
                            <input placeholder='₦15,000 /hr' type="text" name="" id="" value={rateTo} onChange={(e) => setRateTo(e.target.value)} />
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

                {(selectedValue2 === 'Set time manually' ) && (
                    <div className={style.paymentModeCtn}>
                        <div className={style.Budget}>Set Project timeline</div>
                        <div className={style.flexInput}>
                            <div className={style.labelInput}>
                                <label className={style.inpurDtext}>Start Date</label>
                                <input type="date" name="" id="" onChange={(e) => setFormValues2((prev: any) => ({
                                    ...prev,
                                    start_date: e.target.value
                                }))}/></div>

                            <div className={style.labelInput}>
                                <label className={style.inpurDtext}>End Date</label>
                                <input type="date" name="" id="" onChange={(e) => setFormValues2((prev: any) => ({
                                    ...prev,
                                    end_date: e.target.value
                                }))}/></div>
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
