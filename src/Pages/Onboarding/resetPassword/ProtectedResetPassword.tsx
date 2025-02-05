import React, {useState} from 'react';
import reset from "./resetPassword.module.css";
import Input from "../../../stories/FieldInput-I/input";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import {useNavigate, useParams} from "react-router-dom";
import {userConfirmReset} from "../../../api/Services/Auth";

const ProtectedResetPassword = () => {
    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({
        password: '',
        password_confirm: '',
    });

    const [formErrors, setFormErrors] = useState({
        password: '',
        password_confirm: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    const validateForm = () => {
        let newErrors = {

            password: '',
            password_confirm: '',
        };




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


            // Validate password_confirm
            if (!formValues.password_confirm) {
                newErrors.password_confirm = 'Required';
            } else {
                if (formValues.password !== formValues.password_confirm) {
                    newErrors.password_confirm = 'Password must Match';
                }
            }
        }


        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const [error, setError] = useState<string | null>(null);

    const { token, uidb64 } = useParams<{ token: string; uidb64: string }>();
    const [loading, setLoading] = useState(false);
    // Use token and uidb64 in the handleSubmit function
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (!token || !uidb64) {
            setError('Invalid reset link.');
            return;
        }

        if(isFormValid){
            setLoading(true)
            try {
                const response = await userConfirmReset({
                    token,
                    uidb64,
                    dataP: formValues,
                });
                setLoading(false)
                console.log('Password reset successful:', response);
                navigate('/login');

            } catch (error) {
                setLoading(false)
                console.error('Password reset failed:', error);
                setError('Password reset failed. Please try again.');
            }
        }

    };


    return (
        <div className={reset.container}>
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
                           size='small' onChange={handleInputChange} name={'password_confirm'}
                           error={!!formErrors.password_confirm}
                           errorMessage={formErrors.password_confirm}
                           value={formValues.password_confirm}
                    />

                    <br/>
                    <br/>
                    <div className={reset.btn}>
                        <ButtonII
                            label={loading? 'loading...': 'Reset Password'}
                            primary={true}
                            hasIcon={false}
                            disabled={false}
                            onClick={handleSubmit}
                            isLabelVisible={true}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProtectedResetPassword;