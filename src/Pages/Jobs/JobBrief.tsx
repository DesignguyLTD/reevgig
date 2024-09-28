import React, {ChangeEvent, useState} from "react";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import CounterInput from "./CounterInput";
import CounterTextarea from "./CounterTextarea";
import FileUploadTwo from "../../Components/FileUpload/fileUploadTwo";
import style from "./jobs.module.css";


interface jobProps {
    setActiveComponent?: (component: string) => void;
}

interface UploadedFile {
    id: string;
    name: string;
    src: string;
}


export default function JobBrief({setActiveComponent}: jobProps) {
    const [text, setText] = useState<string>("");
    const [textarea, setTextArea] = useState<string>("");
    const [fileUploaded, setFileUploaded] = useState<UploadedFile[]>([]);

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

    const handleNext = () => {
        if (setActiveComponent) {
            setActiveComponent("jobs_timeline")
        }
    }

    return (
        <>
            <div className={style.brief_container}>
                <div>
                    <div>
                        <div className={style.label_text}>Give your project brief a title</div>

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
                        <div className={style.label_text}>What service(s) can you provide?</div>
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
                        <div className={style.label_text}>You can add images to help communicate better</div>
                        <div className={style.pictureUploadCont}>
                            <FileUploadTwo
                                files={fileUploaded}
                                setFiles={setFileUploaded}
                                allowedTypes={["image/png", "image/jpeg"]}
                                id={"Job-file-upload"}
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
