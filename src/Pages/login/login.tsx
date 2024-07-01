import React, {useState} from 'react';
import login from './login.module.css';
import Input from "../../stories/FieldInput-I/input";
import {Button} from "../../stories/Button-I/Button";
import {Link, useNavigate} from "react-router-dom";
import CheckBox from "../../stories/CheckBox/checkbox";

const Login = () => {
    const navigate = useNavigate()
    const [stage, setStage] = React.useState(1);

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
        KeepMeLoggedIn: '',
    });

    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
        KeepMeLoggedIn: '',
    });

    const validateForm = () => {
        let newErrors = {
            email: '',
            password: '',
            KeepMeLoggedIn: '',
        };


        // Validate email
        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Validate password
        if(stage === 2){
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
        }


        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };
    const handleNext = () => {

        setStage(stage + 1);
    }

    const handleSubmit =() => {
        const isFormValid = validateForm();

        if (isFormValid) {
            handleNext()
        }

        if(stage === 2 && isFormValid){
            navigate('/')
        }
    }


    const handleBack = () => {
        if(stage > 1){
            setStage(stage - 1);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            [e.target.name]: value,
        });
    };

    return (
        <div className={login.container}>
            {stage === 1 && (
                <div className={login.headerText}>
                    <h1>Log in to ReevGig</h1>
                    <Input isTextArea={false} type={'email'} label='Working Email' placeholder='reev@gmail.com'
                           size='small' onChange={handleInputChange} name={'email'} error={!!formErrors.email}
                           errorMessage={formErrors.email}
                           value={formValues.email}
                    />

                    <br/>
                    <br/>

                    <div className={login.btn}>
                        <Button
                            label='Continue'
                            primary={true}
                            icon={false}
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    </div>

                    <div className={login.orText}>
                        <hr/>
                        <span>or</span>
                        <hr/>
                    </div>

                    <div className={login.ThirdPartiesAuthContainer}>
                        <Button label='Continue with Apple'
                                BorderColor='rgb(215, 215, 215)'
                                imgLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/apple_wj0xsn.svg'
                                primary={false} icon={true}/>
                        <Button label='Continue with Google'
                                BorderColor='rgb(215, 215, 215)'
                                imgLink='https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/google_xxh1jt.svg'
                                primary={false} icon={true}/>
                    </div>

                    <br/>
                    <br/>

                    <div className={login.lowerText}>
                        Don’t have  an account? <Link style={{textDecoration: 'none'}} to='/signup'><span className={login.makeYellow}>Create Account</span></Link>
                    </div>

                </div>
            )}

            {stage=== 2 && (
                <div className={login.headerText}>
                    <h1>Welcome</h1>
                    <p className={login.headEmail}>{formValues.email}</p>
                    <Input isTextArea={false} type={'password'} label='Password' placeholder='Password'
                           size='small' onChange={handleInputChange} name={'password'} error={!!formErrors.password}
                           errorMessage={formErrors.password}
                           value={formValues.password}
                    />

                    <div className={login.forgotKeepLogin}>
                        <div className={login.Keepmeloggedin}>
                            <CheckBox size='small' checked={!!formValues.KeepMeLoggedIn} name={'KeepMeLoggedIn'}
                                      onChange={handleInputChange} value={formValues.KeepMeLoggedIn}/>
                            <div className={login.checkBoxtext}>
                                Keep me logged in
                            </div>
                        </div>
                        <div className={login.forgotPword}><Link style={{textDecoration: 'none', color: 'rgb(254, 194, 0)'}} to='/resetpassword'>Forgot Password?</Link></div>
                    </div>

                    <br/>
                    <br/>


                    <div className={login.btn}>
                        <Button
                            label='Log in'
                            primary={true}
                            icon={false}
                            disabled={false}
                            onClick={handleSubmit}
                        />
                    </div>

                    <div className={login.lowerText2}>
                         <span className={login.makeYellow}>Not You?</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;