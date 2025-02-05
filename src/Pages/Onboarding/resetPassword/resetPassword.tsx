import React, {useState} from 'react';
import reset from './resetPassword.module.css'
import {useNavigate} from "react-router-dom";
import Input from "../../../stories/FieldInput-I/input";
import OTPInput from "../../../stories/OtherInputsType/OTPInput/OTPInput";
import signUp from "../SignUp/signUp.module.css";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import Header from "../../../stories/Header/header";
import useAuthStore from "../../../store/AuthStore";
import {toast} from "react-toastify";

const ResetPassword = () => {
    // const navigate = useNavigate()
    const [stage, setStage] = React.useState(1);


    const [formValues, setFormValues] = useState({
        email: '',

    });

    const [formErrors, setFormErrors] = useState({
        email: '',

    });


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    // const handleOTPComplete = (otp: string) => {
    //     setOtp(otp)
    //     console.log("OTP entered: ", otp);
    // };

    const handleNext = () => {

        setStage(stage + 1);
    }

    const validateForm = () => {
        let newErrors = {
            email: '',

        };


        // Validate email
        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email is invalid';
        }




        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const { loading, error, userReset } = useAuthStore();
    const handleLogin = async () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            try {
                await userReset(formValues);
                toast.success('successful!');
                handleNext();
            } catch (error) {
                toast.error((error as { message?: string })?.message || 'failed');
            }
        }
    };

    const handleSubmit = () => {
        const isFormValid = validateForm();

        if (isFormValid) {
            handleLogin()
        }

        // if (stage === 2 && isFormValid) {
        //     handleNext();
        // }
    }


    // const handleBack = () => {
    //     if (stage > 1) {
    //         setStage(stage - 1);
    //     }
    // }

    return (
        <>
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

                            <div className={reset.btn}>
                                <ButtonII
                                    label={loading? 'loading...': 'Send'}
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
                        <p>A  verification link was sent to your mail.
                            </p>

                        {/*<form>*/}
                        {/*    <OTPInput*/}
                        {/*        length={6}*/}
                        {/*        onComplete={handleOTPComplete}*/}
                        {/*        error={!!formErrors.otp}*/}
                        {/*        errorMessage={formErrors.otp}*/}
                        {/*        onChange={setOtp}*/}
                        {/*    />*/}
                        {/*    <div className={reset.lowerText}>*/}
                        {/*        Haven’t gotten a mail yet? <span onClick={handleBack} className={signUp.makeYellow}>Resend email</span>*/}
                        {/*    </div>*/}
                        {/*    <div className={reset.btn}>*/}
                        {/*        <ButtonII*/}
                        {/*            label='Verify code'*/}
                        {/*            primary={true}*/}
                        {/*            hasIcon={false}*/}
                        {/*            isLabelVisible={true}*/}
                        {/*            disabled={false}*/}
                        {/*            onClick={handleSubmit}*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*</form>*/}

                    </div>
                )
                }

                {/*{stage === 3 && (*/}
                {/*    */}
                {/*)*/}
                {/*}*/}
            </div>

        </>
    );
};

export default ResetPassword;