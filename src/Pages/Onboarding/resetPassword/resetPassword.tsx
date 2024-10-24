import React, {useState} from 'react';
import reset from './resetPassword.module.css'
import {useNavigate} from "react-router-dom";
import Input from "../../../stories/FieldInput-I/input";
import login from "../login/login.module.css";
import OTPInput from "../../../stories/OtherInputsType/OTPInput/OTPInput";
import signUp from "../SignUp/signUp.module.css";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import Header from "../../../stories/Header/header";

const ResetPassword = () => {
    const navigate = useNavigate()
    const [stage, setStage] = React.useState(1);
    const [otp, setOtp] = React.useState('');


    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    const handleOTPComplete = (otp: string) => {
        setOtp(otp)
        console.log("OTP entered: ", otp);
    };

    const handleNext = () => {

        setStage(stage + 1);
    }

    const validateForm = () => {
        let newErrors = {
            email: '',
            password: '',
            confirmPassword: '',
            otp: '',
        };


        // Validate email
        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate otp
        if (stage === 2) {
            if (!otp) {
                newErrors.otp = 'Required';
            } else {
                if (otp.length < 6) {
                    newErrors.otp = 'Incomplete OTP';
                }

            }
        }

        if (stage === 3) {
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

            // Validate Confirmpassword
            if (!formValues.confirmPassword) {
                newErrors.confirmPassword = 'Required';
            } else {
                if (formValues.password !== formValues.confirmPassword) {
                    newErrors.confirmPassword = 'Password must Match';
                }
            }
        }


        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const handleSubmit = () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            handleNext();
        }

        if (stage === 2 && isFormValid) {
            handleNext();
        }

        if (stage === 3 && isFormValid) {
            navigate('/');
        }
    }


    const handleBack = () => {
        if (stage > 1) {
            setStage(stage - 1);
        }
    }

    return (
        <>
            <Header auth={true}/>
            <div className={reset.container}>
                {stage === 1 && (
                    <div className={reset.stageContainer}>
                        <h1>Reset Password</h1>
                        <p>Enter your email associated with your account and we will send you a 6 digit verification
                            code</p>
                        <form>
                            <Input isTextArea={false} type={'email'} label='Working Email' placeholder='reev@gmail.com'
                                   size='small' onChange={handleInputChange} name={'email'} error={!!formErrors.email}
                                   errorMessage={formErrors.email}
                                   value={formValues.email}
                            />

                            <br/>
                            <br/>

                            <div className={login.btn}>
                                <ButtonII
                                    label='Send'
                                    primary={true}
                                    hasIcon={false}
                                    isLabelVisible={true}
                                    disabled={false}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </form>


                    </div>
                )
                }

                {stage === 2 && (
                    <div className={reset.stageContainer}>
                        <h1>Check your Email</h1>
                        <p>A 6 digit verification code was sent to your mail.
                            Enter the code</p>

                        <form>
                            <OTPInput
                                length={6}
                                onComplete={handleOTPComplete}
                                error={!!formErrors.otp}
                                errorMessage={formErrors.otp}
                                onChange={setOtp}
                            />
                            <div className={reset.lowerText}>
                                Haven’t gotten a mail yet? <span onClick={handleBack} className={signUp.makeYellow}>Resend email</span>
                            </div>
                            <div className={login.btn}>
                                <ButtonII
                                    label='Verify code'
                                    primary={true}
                                    hasIcon={false}
                                    isLabelVisible={true}
                                    disabled={false}
                                    onClick={handleSubmit}
                                />
                            </div>
                        </form>

                    </div>
                )
                }

                {stage === 3 && (
                    <div className={reset.stageContainer}>
                        <h1>Reset Password</h1>
                        <p>Your new password must be different from previously used passwords.</p>

                        <form>
                            <Input isTextArea={false} type={'password'} label='New Password' placeholder='Reev100%'
                                   size='small' onChange={handleInputChange} name={'password'}
                                   error={!!formErrors.password}
                                   errorMessage={formErrors.password}
                                   value={formValues.password}
                            />

                            <Input isTextArea={false} type={'password'} label='New Password' placeholder='Reev100%'
                                   size='small' onChange={handleInputChange} name={'confirmPassword'}
                                   error={!!formErrors.confirmPassword}
                                   errorMessage={formErrors.confirmPassword}
                                   value={formValues.confirmPassword}
                            />

                            <br/>
                            <br/>
                            <div className={login.btn}>
                                <ButtonII
                                    label='Reset Password'
                                    primary={true}
                                    hasIcon={false}
                                    disabled={false}
                                    onClick={handleSubmit}
                                    isLabelVisible={true}
                                />
                            </div>
                        </form>
                    </div>
                )
                }
            </div>

        </>
    );
};

export default ResetPassword;