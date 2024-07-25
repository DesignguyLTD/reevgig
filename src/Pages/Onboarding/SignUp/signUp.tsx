import React, {useState} from 'react';
import signUp from './signUp.module.css'
import {Button} from "../../../stories/Button-I/Button";
import RadioTextIcon from "../../../Components/RadioTextIcon/RadioTextIcon";
import Input from "../../../stories/FieldInput-I/input";
import Dropdown from "../../../stories/OtherInputsType/dropdown/dropdown";
import CheckBox from "../../../stories/CheckBox/checkbox";
import Modal from "../../../Components/modals/mailModal/modal";
import {countries} from "./countries";
import {Link} from "react-router-dom";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import PhoneInput from "../../../stories/OtherInputsType/PhoneInput/PhoneInput";

const SignUp = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const [stage, setStage] = React.useState(1);
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        localStorage.setItem('userType',e.target.value)
    }

    const handleNext = () => {
        if(stage !== 3) {
            setStage(stage + 1);
        }
    }

    const handleBack = () => {
        setStage(stage - 1);
    }

    const Countries = countries;

   const goToGmail = () => {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            window.location.href = 'googlegmail://';
        } else {
            window.open('https://mail.google.com', '_blank');
        }
    };

    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        sendMails: '',
        TermsAndConditon: '',
        phone: ''
    } || JSON.parse(localStorage.getItem('signUpForm') || '{}'));


    let formValuesCopy: Partial<typeof formValues> = {...formValues};
    delete formValuesCopy.password;
    localStorage.setItem('signUpForm', JSON.stringify(formValuesCopy));

    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        country: '',
        sendMails: '',
        TermsAndConditon: '',
        phone: ''

    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    const handleDropdown = (option: any) => {
        setFormValues(prevState => ({
            ...prevState,
            country: option.value
        }));
    }


    const validateForm = () => {
        let newErrors = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            country: '',
            sendMails: '',
            TermsAndConditon: '',
            phone: ''

        };

        // Validate first name
        if (!formValues.firstName) {
            newErrors.firstName = 'First name is required';
        }

        // Validate last name
        if (!formValues.lastName) {
            newErrors.lastName = 'Last name is required';
        }

        // Validate email
        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email is invalid';
        }

               // Validate password
        if (!formValues.password) {
            newErrors.password = 'Required';
        } else {
            if (formValues.password.length < 8) {
                newErrors.password = 'Min. 8 characters';
            }
            if (!/[a-z]/.test(formValues.password)) {
                newErrors.password = 'Needs lowercase';
            }
            if (!/[A-Z]/.test(formValues.password)) {
                newErrors.password = 'Needs uppercase';
            }
            if (!/\d/.test(formValues.password)) {
                newErrors.password = 'Needs a digit';
            }
            if (!/[@$!%*?&]/.test(formValues.password)) {
                newErrors.password = 'Needs special character';
            }
        }


        // Validate country
        if (!formValues.country) {
            newErrors.country = 'Country is required';
        }



        if (!formValues.TermsAndConditon) {
            newErrors.TermsAndConditon = 'You must agree to the terms of service';
        }

        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    // const checkValidity = () => {
    //     return validateForm();
    // }

    const handleSubmit = () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            console.log(formValues)
            handleNext()
        }
    };



    return (
        <div className={signUp.container}>
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
                        <ButtonII label={selectedOption ? `Apply as a ${selectedOption}` : 'Create Account'}
                                primary={true} hasIcon={false} disabled={!selectedOption} onClick={handleNext} isLabelVisible={true}/>
                    </div>

                    <div className={signUp.lowerText}>
                        Already have an account? <Link style={{textDecoration: 'none'}} to='/login'><span className={signUp.makeYellow}>Log In</span></Link>
                    </div>
                </div>
            }

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

                    <form className={signUp.formContainer}>
                        <div className={signUp.upperForm}>
                            <Input isTextArea={false} type={'text'} label='First Name' placeholder='John' size='small'
                                   onChange={handleInputChange} name={'firstName'} error={!!formErrors.firstName}
                                   errorMessage={formErrors.firstName} value={formValues.firstName}/>
                            <Input isTextArea={false} type={'text'} label='Last Name' placeholder='Doe' size='small'
                                   onChange={handleInputChange} name={'lastName'} error={!!formErrors.lastName}
                                   errorMessage={formErrors.lastName} value={formValues.lastName}/>
                        </div>

                        <Input isTextArea={false} type={'email'} label='Working Email' placeholder='reev@gmail.com'
                               size='small' onChange={handleInputChange} name={'email'} error={!!formErrors.email}
                               errorMessage={formErrors.email}
                               value={formValues.email}
                        />
                        <Input isTextArea={false} type={'password'} label='Password' placeholder='Reev100%'
                               size='small' onChange={handleInputChange} name={'password'} error={!!formErrors.password}
                               errorMessage={formErrors.password}
                               value={formValues.password}
                        />
                        <Dropdown options={Countries} defaultText='United State'
                                  label='Country' size='small' onChange={handleDropdown} error={!!formErrors.country}
                                  errorMessage={formErrors.country}/>


                        <div className={signUp.Stage2lowerText}>
                            <CheckBox size='small' checked={!!formValues.sendMails} name={'sendMails'}
                                      onChange={handleInputChange} value={formValues.sendMails}/>
                            <div className={signUp.checkBoxtext}>
                                Send me mails with tips on how to find talent that fits my needs
                            </div>
                        </div>

                        <div className={signUp.Stage2lowerText}>
                            <CheckBox size='small' checked={!!formValues.TermsAndConditon} name={'TermsAndConditon'}
                                      onChange={handleInputChange} value={formValues.TermsAndConditon}/>
                            <div className={signUp.checkBoxtext}>
                                Yes, I understand and agree to the <span className={signUp.makeYellow}>ReevGig Terms of Service</span>,
                                including the <span className={signUp.makeYellow}>User Agreement</span> and <span
                                className={signUp.makeYellow}>Privacy Policy</span>.
                            </div>
                        </div>
                        <div className={signUp.btn}>
                            <ButtonII
                                label='Create Account'
                                primary={true}
                                hasIcon={false}
                                disabled={false}
                                onClick={handleSubmit}
                                isLabelVisible={true}
                            />
                        </div>
                    </form>

                    <div className={signUp.lowerText}>
                        Already have an account? <Link to='/login' style={{textDecoration: 'none'}}><span className={signUp.makeYellow}>Log In</span></Link>
                    </div>
                </div>
            }

            {stage === 3 &&
                <div className={signUp.stage3container}>
                    <Modal handleGmail={goToGmail} handleSendAgain={handleBack} email={formValues.email}/>
                </div>
            }

            {stage === 4 &&
                <div className={signUp.stage3container}>

                </div>
            }
        </div>

    );
};

export default SignUp;