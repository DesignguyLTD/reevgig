import React from 'react';
import signUp from './signUp.module.css'
import {Button} from "../../stories/Button-I/Button";
import RadioTextIcon from "../../Components/RadioTextIcon/RadioTextIcon";

const SignUp = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const [stage, setStage] = React.useState(1);
     const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value)
     }

     const handleNext = () => {
        setStage(stage + 1);
     }

     const handleBack = () => {
        setStage(stage - 1);
     }

    return (

        <>
            {/*stage1*/}
            {stage === 1 &&
                <div className={signUp.container}>
                    <h1 className={signUp.headerText}>Join as a client or freelancer</h1>

                    <div className={signUp.RadioCont}>
                        <RadioTextIcon
                            name='userType'
                            value='Client'
                            Icon='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/client_bihjii.svg'
                            text1=' I’m a client, hiring'
                            text2=' for a project'
                            handleRadioChange={handleRadioChange}
                            selectedOption={selectedOption}

                        />
                        <br/>

                        <RadioTextIcon
                            name='userType'
                            value='Freelancer'
                            Icon='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/freelancer_jngxqi.svg'
                            text1=' I’m a freelancer,'
                            text2='looking for work'
                            handleRadioChange={handleRadioChange}
                            selectedOption={selectedOption}
                        />
                    </div>

                    <div className={signUp.btn}>
                        <Button label={selectedOption? `Apply as a ${selectedOption}` : 'Create Account'} primary={true} icon={false} disabled={!selectedOption} onClick={handleNext}/>
                    </div>

                    <div className={signUp.lowerText}>
                        Already have an account? <span className={signUp.makeYellow}>Log In</span>
                    </div>
                </div>
            }

            {stage === 2 &&
                <div onClick={handleBack}>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    stage 2
                </div>
            }
        </>

    );
};

export default SignUp;