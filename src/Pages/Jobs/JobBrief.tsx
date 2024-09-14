import React, {ChangeEvent, useState} from "react";

import {ButtonII} from "../../stories/Button-II/ButtonII";
import CounterInput from "./CounterInput";
import CounterTextarea from "./CounterTextarea";
import FileUploadTwo from "../../Components/FileUpload/fileUploadTwo";
import RadioButton from "../../stories/RadioButton/RadioButton";
import style from "./jobs.module.css";


interface jobProps {
    setActiveComponent?:  (component: string) => void;
}
export default function JobBrief({setActiveComponent}:jobProps) {
    const [text, setText] = useState<string>("");
    const [textarea, setTextArea] = useState<string>("");
    const [fileUploaded, setFileUploaded] = useState<string | null>("");
    const [selectedValue, setSelectedValue] = useState<string>("");

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };
    const handleTextChange = (value: string) => {
        setText(value); // Update the state when the value changes
    };

    const handleTextAreaChange = (value: string) => {
        setTextArea(value); // Update the state when the value changes
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        // TODO: Implement file upload logic
        console.log("File uploaded");
    };

    const handleNext = ()=>{
        if (setActiveComponent) {
            setActiveComponent("jobs_timeline")
        }
    }

    return (
        <>
            <div className={style.brief_container}>
                <div>
                    <div>
                        <p className={style.label_text}>Give your project brief a title</p>

                        <div className={style.counting_numbers}>
                            <CounterInput
                                maxLength={70}
                                label={
                                    "Keep it short and simple - this will help us match you to the right category."
                                }
                                value={text}
                                onChange={handleTextChange}
                                placeholder="Example: Passionate Web Developer ready to bring your ideas to life."
                            />
                        </div>
                    </div>
                    <div style={{paddingTop: "1rem"}}>
                        <p className={style.label_text}>What service(s) can you provide?</p>
                        <div className={style.counting_numbers}>
                            <CounterTextarea
                                maxLength={2000}
                                label={
                                    "This will help get your brief to the right client. Specifics help here."
                                }
                                value={textarea}
                                onChange={handleTextAreaChange}
                                placeholder="I can..."
                            />
                        </div>
                    </div>

                    <div style={{marginTop: "0.6rem", marginBottom: '0.6rem'}}>
                        <FileUploadTwo
                            file={fileUploaded}
                            setFile={setFileUploaded}
                            allowedTypes={["application/pdf"]}
                            id={"Job-file-upload"}
                        />
                    </div>
                    <div>
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
            </div>
        </>
    );
}
