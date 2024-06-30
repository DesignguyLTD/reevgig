import React from 'react';
import signUp from './signUp.module.css'
import {Button} from "../../stories/Button-I/Button";
import RadioTextIcon from "../../Components/RadioTextIcon/RadioTextIcon";
import Input from "../../stories/FieldInput-I/input";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import CheckBox from "../../stories/CheckBox/checkbox";
import Modal from "../../Components/modals/modal";

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

    const contries: any = [
        {value: 'Nigeria', label: 'Nigeria'},
        {value: 'Ghana', label: 'Ghana'},
    ]

    const goToGmail = () => {
        window.open('https://mail.google.com', '_blank');
    };

    return (

        <div className={signUp.container}>

            {/*stage1*/}
            {stage === 1 &&
                <div>
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
                        <Button label={selectedOption ? `Apply as a ${selectedOption}` : 'Create Account'}
                                primary={true} icon={false} disabled={!selectedOption} onClick={handleNext}/>
                    </div>

                    <div className={signUp.lowerText}>
                        Already have an account? <span className={signUp.makeYellow}>Log In</span>
                    </div>
                </div>
            }

            {/*stage2*/}
            {stage === 2 &&
                <div className={signUp.stage2Cont}>
                    <div className={signUp.ThirdPartiesAuthContainer}>
                        <Button label='Continue with Apple'
                                BorderColor='rgb(215, 215, 215)'
                                imgLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/apple_wj0xsn.svg'
                                primary={false} icon={true}/>
                        <Button label='Continue with Google'
                                BorderColor='rgb(215, 215, 215)'
                                imgLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/google_xxh1jt.svg'
                                primary={false} icon={true}/>
                    </div>

                    <div className={signUp.orText}>
                        <hr/>
                        <span>or</span>
                        <hr/>
                    </div>

                    <div className={signUp.formContainer}>
                        <div className={signUp.upperForm}>
                            <Input isTextArea={false} type={'text'} label='First Name' placeholder='John' size='small'/>
                            <Input isTextArea={false} type={'text'} label='Last Name' placeholder='Doe' size='small'/>
                        </div>

                        <Input isTextArea={false} type={'email'} label='Working Email' placeholder='reev@gmail.com'
                               size='small'/>
                        <Input isTextArea={false} type={'password'} label='Password' placeholder='Reev100%'
                               size='small'/>
                        <Dropdown onChange={() => handleRadioChange} options={contries} defaultText='United State'
                                  label='Country' size='small'/>

                    </div>

                    <div className={signUp.Stage2lowerText}>
                        <CheckBox size='small' checked={true}/>
                        <div className={signUp.checkBoxtext}>
                            Send me mails with tips on how to find talent that fits my needs
                        </div>
                    </div>

                    <div className={signUp.Stage2lowerText}>
                        <CheckBox size='small' checked={true}/>
                        <div className={signUp.checkBoxtext}>
                            Yes, I understand and agree to the <span  className={signUp.makeYellow}>ReevGig Terms of Service</span>, including the <span  className={signUp.makeYellow}>User Agreement</span> and <span  className={signUp.makeYellow}>Privacy Policy</span>.
                        </div>
                    </div>
                    <div className={signUp.btn}>
                        <Button label='Create Account' primary={true} icon={false} disabled={false} onClick={handleNext}/>
                    </div>

                    <div className={signUp.lowerText}>
                        Already have an account? <span className={signUp.makeYellow} onClick={handleBack}>Log In</span>
                    </div>
                </div>
            }

            {/*stage3*/}
            {stage === 3 &&
                <div className={signUp.stage3container}>
                    <Modal handleGmail={goToGmail} handleSendAgain={handleBack} email='reev@dsu.com'/>
                </div>
            }
        </div>

    );
};

export default SignUp;