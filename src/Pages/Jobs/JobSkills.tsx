import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import React, {useState} from "react";
import {recommendedSkills} from "../Onboarding/onboarding/dataset";
import  {recommendedLanguages } from "../Onboarding/onboarding/dataset";
import TagInput from "../../Components/TagInput/tagInput";
import style from './jobs.module.css'
import {ButtonII} from "../../stories/Button-II/ButtonII";
import RadioButton from "../../stories/RadioButton/RadioButton";

interface skillInt{
    handlePopUp?:() => void;
}

export default function JobSkills({handlePopUp} :skillInt) {

    const [skilltags1, setSkilltags1] = useState<string[]>(() => {
            const savedFormValues1 = localStorage.getItem('onboardingForm2');
            return savedFormValues1 ? JSON.parse(savedFormValues1).SkillSet : [];
        }
    );
    const [skilltags2, setSkilltags2] = useState<string[]>(() => {
            const savedFormValues2 = localStorage.getItem('onboardingForm2');
            return savedFormValues2 ? JSON.parse(savedFormValues2).SkillSet : [];
        }
    );


    interface OptionType {
        value: string;
        label: string;
    }

    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };




    return <div className={style.skillCont}>
        <br/>

        <div className={style.Stylecont}>
            <div>
                <p className={style.level}>
                    What category fits this job
                </p>
                <Dropdown onChange={(option: OptionType) => {
                }} options={[{value: 'Hardware', label: 'Hardware'}, {value: 'Circuit', label: 'Circuit'}]}
                          defaultText={"Select"} label={''}/>
            </div>
            <div className={style.jobskillsRadio}>
                <p className={style.level}>
                    What level of experience will you need?
                </p>
                <div className={style.radio_btn}>
                    <RadioButton
                        id={'Experience'}
                        name={"Beginner"}
                        value={"Beginner"}
                        selectedValue={selectedValue}
                        onChange={handleRadioChange}
                    />

                    <RadioButton
                        name={"Intermediate"}
                        value={"Intermediate"}
                        selectedValue={selectedValue}
                        onChange={handleRadioChange}
                        id={'Experience'}

                    />
                    <RadioButton
                        id={'Experience'}

                        name={"expert"}
                        value={"Expert"}
                        selectedValue={selectedValue}
                        onChange={handleRadioChange}
                    />
                </div>
            </div>
            <div>
                <p className={style.level}>
                    Years of Experience
                </p>
                <Dropdown label={''} onChange={(option: OptionType) => {
                }} options={[{value: '>1 Year', label: '>1 Year'}, {value: '2 Years', label: '2 Years'}]}
                          defaultText={"Select"}/>
            </div>
            <div>
                <p className={style.level}>
                    Skills
                </p>
                <TagInput
                    subLabel1={'For best results, add 3 - 5 skills'}
                    subLabel2={'Popular skills for Circuit Design'}
                    label='' recommendedTags={recommendedSkills}
                    placeholder={'Enter preferred Skills'} maxTags={10} setTags={setSkilltags1}
                    tags={skilltags1}/>

            </div>

            <div>
                <p className={style.level}>
                    Language
                </p>
                <TagInput
                    subLabel2={'Popular Languages spoken'}
                    label='' recommendedTags={recommendedLanguages}
                    placeholder={'Enter preferred Languages'} maxTags={5} setTags={setSkilltags2}
                    tags={skilltags2}/>

            </div>
        </div>
        <div className={style.continue}>
            <ButtonII
                hasIcon={false}
                isLabelVisible={true}
                label="Continue"
                primary={true}
                size="medium"
                onClick={handlePopUp}
            />
        </div>
    </div>;
}
