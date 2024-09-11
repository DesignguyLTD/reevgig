import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import React from "react";

export default function JobSkills() {

    interface OptionType {
        value: string;
        label: string;
    }


    return <>

        <div>
            <div>

                <p>What category fits this job</p>
                <Dropdown onChange={(option: OptionType) => {
                }} options={[]} defaultText={""}/>
            </div>
            <div>
                <p>Job Type</p>
                <Dropdown onChange={(option: OptionType) => {
                }} options={[]} defaultText={""}/>
            </div>
            <div>
                <p>Skills</p>

            </div>
        </div>
    </>;
}
