import React, {useState} from "react";

import {Button} from "../../../stories/Button-I/Button";
import {ButtonII} from "../../../stories/Button-II/ButtonII";
import CheckBox from "../../../stories/CheckBox/checkbox";
import Dropdown from "../../../stories/OtherInputsType/dropdown/dropdown";
import Header from "../../../stories/Header/header";
import Input from "../../../stories/FieldInput-I/input";
import {Link} from "react-router-dom";
import Modal from "../../../Components/modals/mailModal/modal";
import RadioTextIcon from "../../../Components/RadioTextIcon/RadioTextIcon";
import {countries} from "./countries";
import signUp from "./signUp.module.css";
import {createUser} from "../../../API/services/user";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {UserDataType} from "../../../API/types/userTypes";

const SignUp = () => {
    const [selectedOption, setSelectedOption] = React.useState("");
    const [stage, setStage] = React.useState(1);
    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
        console.log(e.target.value);
        localStorage.setItem("userType", e.target.value);
    };

    const handleNext = () => {
        if (stage !== 3) {
            setStage(stage + 1);
        }
    };

    const handleBack = () => {
        setStage(stage - 1);
    };

    const Countries = countries;

    const goToGmail = () => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            window.location.href = "googlegmail://";
        } else {
            window.open("https://mail.google.com", "_blank");
        }
    };

    interface FormValues {
        first_name: string;
        last_name: string;
        email: string;
        password: string;
        country: string;
        sendMails: string;
        TermsAndConditon: string;
        phone: string;
        username: string;
        user_type: string;
    }

    const defaultFormValues: FormValues = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
        sendMails: "",
        TermsAndConditon: "",
        phone: "",
        username: "",
        user_type: selectedOption
    };

    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem("signUpForm");
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });

    let formValuesCopy: Partial<typeof formValues> = {...formValues};
    delete formValuesCopy.password;
    localStorage.setItem("signUpForm", JSON.stringify(formValuesCopy));

    const [formErrors, setFormErrors] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
        sendMails: "",
        TermsAndConditon: "",
        phone: "",
        username: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormValues({
            ...formValues,
            user_type: selectedOption,
            [e.target.name]: value,
        });
    };

    const handleDropdown = (option: any) => {
        setFormValues((prevState) => ({
            ...prevState,
            country: option.value,
        }));
    };

    const validateForm = () => {
        let newErrors = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            country: "",
            sendMails: "",
            TermsAndConditon: "",
            phone: "",
            username: ''
        };

        // Validate first name
        if (!formValues.first_name) {
            newErrors.first_name = "First name is required";
        }

        if (!formValues.first_name) {
            newErrors.first_name = "First name is required";
        }

        // Validate last name
        if (!formValues.username) {
            newErrors.username = "Username is required";
        }

        // Validate email
        if (!formValues.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = "Email is invalid";
        }

        // Validate password
        if (!formValues.password) {
            newErrors.password = "Required";
        } else {
            if (formValues.password.length < 8) {
                newErrors.password = "Min. 8 characters";
            }
            if (!/[a-z]/.test(formValues.password)) {
                newErrors.password = "Needs lowercase";
            }
            if (!/[A-Z]/.test(formValues.password)) {
                newErrors.password = "Needs uppercase";
            }
            if (!/\d/.test(formValues.password)) {
                newErrors.password = "Needs a digit";
            }
            if (!/[@$!%*?&]/.test(formValues.password)) {
                newErrors.password = "Needs special character";
            }
        }

        // Validate country
        if (!formValues.country) {
            newErrors.country = "Country is required";
        }

        if (!formValues.TermsAndConditon) {
            newErrors.TermsAndConditon = "You must agree to the terms of service";
        }

        setFormErrors(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some((error) => error !== "");
    };

    // const checkValidity = () => {
    //     return validateForm();
    // }



    const handleSubmit = async () => {
        const isFormValid = validateForm(); // Assume this function checks the form

        if (isFormValid) {
            console.log(formValues); // Log form values for debugging


            // Only attempt to create the user on stage 2
            if (stage === 2) {
                try {
                    const response = await createUser(formValues); // Call to API function
                    console.log('User created successfully:', response.data);
                    if(response.status === 201){
                        handleNext();
                    }
                    return response.data; // Return the data in case it's needed later
                } catch (error: any) {
                    console.error('Error creating user:', error.response?.data || error.message);
                    throw {err: 'handle error properly'}; // Rethrow the error for further handling
                }
            }
        } else {
            console.log('Form validation failed');
        }
    };
    return (
        <>
            <Header auth={true}/>
            <div className={signUp.container}>
                {stage === 1 && (
                    <div>
                        <h1 className={signUp.headerText}>
                            Join as a client or freelancer
                        </h1>

                        <div className={signUp.RadioCont}>
                            <RadioTextIcon
                                name="userType"
                                value="CLIENT"
                                Icon="https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/client_bihjii.svg"
                                text1=" I’m a client, hiring"
                                text2=" for a project"
                                handleRadioChange={handleRadioChange}
                                selectedOption={selectedOption}
                            />
                            <br/>

                            <RadioTextIcon
                                name="userType"
                                value="FREELANCER"
                                Icon="https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/freelancer_jngxqi.svg"
                                text1=" I’m a freelancer,"
                                text2="looking for work"
                                handleRadioChange={handleRadioChange}
                                selectedOption={selectedOption}
                            />
                        </div>

                        <div className={signUp.btn}>
                            <ButtonII
                                label={
                                    selectedOption
                                        ? `Apply as a ${selectedOption}`
                                        : "Create Account"
                                }
                                primary={true}
                                hasIcon={false}
                                disabled={!selectedOption}
                                onClick={handleNext}
                                isLabelVisible={true}
                            />
                        </div>

                        <div className={signUp.lowerText}>
                            Already have an account?{" "}
                            <Link style={{textDecoration: "none"}} to="/login">
                                <span className={signUp.makeYellow}>Log In</span>
                            </Link>
                        </div>
                    </div>
                )}

                {stage === 2 && (
                    <div className={signUp.stage2Cont}>
                        <div className={signUp.ThirdPartiesAuthContainer}>
                            <Button
                                label="Continue with Apple"
                                BorderColor="rgb(215, 215, 215)"
                                imgLink="https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/apple_wj0xsn.svg"
                                primary={false}
                                icon={true}
                            />
                            <Button
                                label="Continue with Google"
                                BorderColor="rgb(215, 215, 215)"
                                imgLink="https://res.cloudinary.com/do5wu6ikf/image/upload/v1719703652/Reev/google_xxh1jt.svg"
                                primary={false}
                                icon={true}
                            />
                        </div>

                        <div className={signUp.orText}>
                            <hr/>
                            <span>or</span>
                            <hr/>
                        </div>


                        <form className={signUp.formContainer}>
                            <div className={signUp.upperForm}>
                                <Input
                                    isTextArea={false}
                                    type={"text"}
                                    label="First Name"
                                    placeholder="John"
                                    size="small"
                                    onChange={handleInputChange}
                                    name={"first_name"}
                                    error={!!formErrors.first_name}
                                    errorMessage={formErrors.first_name}
                                    value={formValues.first_name}
                                />
                                <Input
                                    isTextArea={false}
                                    type={"text"}
                                    label="Last Name"
                                    placeholder="Doe"
                                    size="small"
                                    onChange={handleInputChange}
                                    name={"last_name"}
                                    error={!!formErrors.last_name}
                                    errorMessage={formErrors.last_name}
                                    value={formValues.last_name}
                                />
                            </div>

                            <Input
                                isTextArea={false}
                                type={"text"}
                                label="Username"
                                placeholder="Reev123"
                                size="small"
                                onChange={handleInputChange}
                                name={"username"}
                                error={!!formErrors.username}
                                errorMessage={formErrors.username}
                                value={formValues.username}
                            />

                            <Input
                                isTextArea={false}
                                type={"email"}
                                label="Working Email"
                                placeholder="reev@gmail.com"
                                size="small"
                                onChange={handleInputChange}
                                name={"email"}
                                error={!!formErrors.email}
                                errorMessage={formErrors.email}
                                value={formValues.email}
                            />
                            <Input
                                isTextArea={false}
                                type={"password"}
                                label="Password"
                                placeholder="Reev100%"
                                size="small"
                                onChange={handleInputChange}
                                name={"password"}
                                error={!!formErrors.password}
                                errorMessage={formErrors.password}
                                value={formValues.password}
                            />
                            <Dropdown
                                options={Countries}
                                defaultText="United State"
                                label="Country"
                                size="small"
                                onChange={handleDropdown}
                                error={!!formErrors.country}
                                errorMessage={formErrors.country}
                            />

                            <div className={signUp.Stage2lowerText}>
                                <CheckBox
                                    size="small"
                                    checked={!!formValues.sendMails}
                                    name={"sendMails"}
                                    onChange={handleInputChange}
                                    value={formValues.sendMails}
                                />
                                <div className={signUp.checkBoxtext}>
                                    Send me mails with tips on how to find talent that fits my
                                    needs
                                </div>
                            </div>

                            <div className={signUp.Stage2lowerText}>
                                <CheckBox
                                    size="small"
                                    checked={!!formValues.TermsAndConditon}
                                    name={"TermsAndConditon"}
                                    onChange={handleInputChange}
                                    value={formValues.TermsAndConditon}
                                />
                                <div className={signUp.checkBoxtext}>
                                    Yes, I understand and agree to the{" "}
                                    <span className={signUp.makeYellow}>
                    ReevGig Terms of Service
                  </span>
                                    , including the{" "}
                                    <span className={signUp.makeYellow}>User Agreement</span> and{" "}
                                    <span className={signUp.makeYellow}>Privacy Policy</span>.
                                </div>
                            </div>
                            <div className={signUp.btn}>
                                <ButtonII
                                    label="Create Account"
                                    primary={true}
                                    hasIcon={false}
                                    disabled={false}
                                    onClick={handleSubmit}
                                    isLabelVisible={true}
                                />
                            </div>
                        </form>

                        <div className={signUp.lowerText}>
                            Already have an account?{" "}
                            <Link to="/login" style={{textDecoration: "none"}}>
                                <span className={signUp.makeYellow}>Log In</span>
                            </Link>
                        </div>
                    </div>
                )}

                {stage === 3 && (
                    <div className={signUp.stage3container}>
                        <Modal
                            handleGmail={goToGmail}
                            handleSendAgain={handleBack}
                            email={formValues.email}
                        />
                    </div>
                )}

                {stage === 4 && <div className={signUp.stage3container}></div>}
            </div>
        </>

    );
};

export default SignUp;
