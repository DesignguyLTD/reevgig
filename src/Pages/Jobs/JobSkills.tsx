import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import React, {useState} from "react";
import {recommendedSkills} from "../Onboarding/onboarding/dataset";
import TagInput from "../../Components/TagInput/tagInput";
import style from './jobs.module.css'
import {ButtonII} from "../../stories/Button-II/ButtonII";

export default function JobSkills() {

    const [skilltags, setSkilltags] = useState<string[]>(() => {
            const savedFormValues2 = localStorage.getItem('onboardingForm2');
            return savedFormValues2 ? JSON.parse(savedFormValues2).SkillSet : [];
        }
    );

    interface OptionType {
        value: string;
        label: string;
    }


    return <div className={style.skillCont}>
        <br/>

        <div className={style.Stylecont}>
            <div>
                <Dropdown onChange={(option: OptionType) => {
                }} options={[{value: 'Hardware', label: 'Hardware'}, {value: 'Circuit', label: 'Circuit'}]}
                          defaultText={"Select"} label={'What category fits this job'}/>
            </div>
            <div>
                <Dropdown label={'Job Type'} onChange={(option: OptionType) => {
                }} options={[{value: '3D Modelling', label: '3D Modelling'}, {value: 'Circuit', label: 'Circuit'}]}
                          defaultText={"Select"}/>
            </div>
            <div>
                <TagInput
                    label='Skills' recommendedTags={recommendedSkills}
                    placeholder={'Enter preferred Languages'} maxTags={10} setTags={setSkilltags}
                    tags={skilltags}/>

            </div>
        </div>
        <div className={style.continue}>
            <ButtonII
                hasIcon={false}
                isLabelVisible={true}
                label="Post a Job"
                primary={true}
                size="medium"
            />
        </div>
    </div>;
}
