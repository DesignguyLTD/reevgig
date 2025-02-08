import React, {useEffect, useState} from "react";
import JobBrief from "./JobBrief";
import JobSkills from "./JobSkills";
import JobTimeline from "./JobTimeline";
import styles from "./jobs.module.css";
import style from "./jobs.module.css";
import RadioBtnTwo from "../../stories/RadioButton/RadioBtnTwo";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import Dropdown from "../../stories/OtherInputsType/dropdown/dropdown";
import PaymentSkills from "./PaymentSkills";


interface OptionType {
    value: string;
    label: string;
}

interface propsType {
    userType: string;
}


// {
//     "project_title": "string",
//     "project_description": "string",
//     "search": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "project_images": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "project_type": "Onetime Off",
//     "experience_years": "string",
//     "skills": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "languages": {
//     "additionalProp1": "string",
//         "additionalProp2": "string",
//         "additionalProp3": "string"
// },
//     "experience_level": "Beginner",
//     "payment_type": "Hourly Rate",
//     "rate_range": "-8588",
//     "project_timeline": "string",
//     "start_date": "2025-02-08",
//     "end_date": "2025-02-08",
//     "promotion_type": "Free Listing",
//     "boost_duration": 2147483647,
//     "freelancers": [
//     0
// ]
// }

interface FormValues {
    project_title: string;
    project_description: string;
    search: string[];
    project_images: string[];
}

interface FormValues2 {
    project_type: string;
    payment_type: string;
    rate_range: string
    start_date: string;
    end_date:string;
    project_timeline: string;
}

interface FormValues3 {
    experience_level: string;
    skills: string;
    languages: string;
    experience_years: string;
    job_category: string;
    promotion_type: string;
    boost_duration: string;
    freelancers: number[];
}

export default function Jobs({userType}: propsType) {



    const defaultFormValues2: FormValues2 = {
        project_type: '',
        payment_type: '',
        rate_range: '',
        start_date: '',
        end_date:'',
        project_timeline: '',
    };


    const defaultFormValues: FormValues = {
        project_title: "",
        project_description: "",
        search: [],
        project_images: [],
    };

    const defaultFormValues3: FormValues3 = {
        experience_level: "",
        skills: "",
        languages: "",
        experience_years:"",
        job_category: "",
        promotion_type: "",
        boost_duration: "",
        freelancers: [],
    };

    const [formValues, setFormValues] = useState<FormValues>(() => {
        const savedFormValues = localStorage.getItem('poatajob1');
        return savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;
    });


    const [formErrors, setFormErrors] = useState({
        project_type: '',
        payment_type: '',
        rate_range: '',
        start_date: '',
        end_date:'',
        project_timeline: '',
    });

    const [formValues2, setFormValues2] = useState<FormValues2>(() => {
        const savedFormValues2 = localStorage.getItem('poatajob2');
        return savedFormValues2 ? JSON.parse(savedFormValues2) : defaultFormValues2;
    });
    const [formErrors2, setFormErrors2] = useState({
        project_type: '',
        payment_type: '',
        rate_range: '',
        start_date: '',
        end_date:'',
        project_timeline: '',
    });

    const [formValues3, setFormValues3] = useState<FormValues3>(() => {
        const savedFormValues3 = localStorage.getItem('poatajob3');
        return savedFormValues3 ? JSON.parse(savedFormValues3) : defaultFormValues3;
    });
    const [formErrors3, setFormErrors3] = useState({
        experience_level: "",
        skills: "",
        languages: "",
        experience_years:"",
        job_category: "",
        promotion_type: "",
        boost_duration: "",
        freelancers: '',
    });

    useEffect(() => {
        localStorage.setItem('poatajob1', JSON.stringify(formValues));
        localStorage.setItem('poatajob2', JSON.stringify(formValues2));
        localStorage.setItem('poatajob3', JSON.stringify(formValues3));
    }, [formValues, formValues2, formValues3]);


    const validateForm1 = () => {
        let newErrors = {
            project_title: "",
            project_description: "",
            search: '',
            project_images: '',
        };


        if (!formValues.project_title) {
            newErrors.project_title = 'Field is required';
        }

        if (!formValues.project_description) {
            newErrors.project_description = 'Field is required';
        }

        if (!formValues.search.length) {
            newErrors.search = 'Field is required';
        }

        if (!formValues.project_images.length) {
            newErrors.project_images = 'Field is required';
        }


        setFormErrors(newErrors as any);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const validateForm2 = () => {
        let newErrors = {
            project_type: '',
            payment_type: '',
            rate_range: '',
            start_date: '',
            end_date:'',
            project_timeline: '',
        };


        if (!formValues2.project_type) {
            newErrors.project_type = 'Field is required';
        }

        if (!formValues2.payment_type) {
            newErrors.payment_type = 'Field is required';
        }

        if (!formValues2.rate_range) {
            newErrors.rate_range = 'Field is required';
        }

        if (!formValues2.start_date) {
            newErrors.start_date = 'Field is required';
        }

        if (!formValues2.end_date) {
            newErrors.end_date = 'Field is required';
        }

        if (!formValues2.project_timeline) {
            newErrors.project_timeline = 'Field is required';
        }


        setFormErrors2(newErrors as any);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };

    const validateForm3 = () => {

        let newErrors = {
            experience_level: "",
            skills: "",
            languages: "",
            experience_years:"",
            job_category: "",
            promotion_type: "",
            boost_duration: "",
            freelancers: '',
        };


        if (!formValues3.experience_level) {
            newErrors.experience_level = 'Field is required';
        }

        if (!formValues3.skills.length) {
            newErrors.skills = 'Field is required';

        }

        if (!formValues3.languages.length) {
            newErrors.languages = 'Field is required';
        }


        if (!formValues3.experience_years) {
            newErrors.experience_years = 'Field is required';
        }

        if (!formValues3.job_category) {
            newErrors.job_category = 'Field is required';

        }

        if (!formValues3.promotion_type) {
            newErrors.promotion_type = 'Field is required';
        }

        if (!formValues3.boost_duration) {
            newErrors.boost_duration = 'Field is required';

        }



        setFormErrors3(newErrors);

        // If all values are valid, return true
        return !Object.values(newErrors).some(error => error !== '');
    };


    const handleSubmit = () => {
        const isFormValid = validateForm1();
        const isFormValid2 = validateForm2();
        const isFormValid3 = validateForm3();


        if (isFormValid || isFormValid2 || isFormValid3) {
            console.log(formValues)
        }
    };



    const [activeComponent, setActiveComponent] = useState("jobs_brief");
    const [popModal, setPopModal] = useState<boolean>(false);

    const [selectedValue1, setSelectedValue1] = useState<string>('Paid Listing');

    const handleRadioChange1 = (value: string) => {
        setSelectedValue1(value);
    };


    // Function to handle pop-up toggle
    const handlePopUp = () => {
        setPopModal(!popModal);
    };

    // Function to close the modal when clicking outside
    const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setPopModal(false);
        }
    };

    // Function to render active components
    const renderComponent = () => {
        switch (activeComponent) {
            case "jobs_brief":
                return <JobBrief userType={userType} setActiveComponent={setActiveComponent}/>;
            case "jobs_timeline":
                return <JobTimeline setActiveComponent={setActiveComponent}/>;
            case "jobs_skills":
                return <JobSkills handlePopUp={handlePopUp}/>;
            case "payment_skills":
                return <PaymentSkills setActiveComponent={setActiveComponent}/>;
            default:
                return <JobBrief userType={userType}/>;
        }
    };

    const handlePayment = () => {
        setPopModal(false)
        if (selectedValue1 === 'Paid Listing') {
            setActiveComponent('payment_skills')

        } else {
            setActiveComponent('jobs_brief')
        }

    }

    return (
        <div className={styles.cover_all}>
            {popModal && (
                <div className={styles.modal_overlay} onClick={handleCloseModal}>
                    <div className={styles.modal_content}>
                        <button onClick={handlePopUp} style={{float: 'right', border: 'none', background: "none"}}>
                            <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455543/Reev/27th%20Sept%202024/Vector_wb7jrq.svg"
                                alt="Close"
                            />
                        </button>
                        <br/>
                        <div className={styles.text1}>You are almost done!</div>
                        <div className={styles.text2}>Promote Job: Web Developer</div>
                        <div className={styles.text3}>
                            Lorem ipsum dolor sit amet consectetur. Ipsum varius sed nunc rutrum maecenas.
                            Nisi ultricies quis risus

                        </div>
                        <br/>

                        <div className={styles.radioModal}>
                            <RadioBtnTwo
                                id={'length'}
                                value={'Free Listing'}
                                name={"Less than a month"}
                                subHead={"Lorem ipsum dolor sit amet consectetur. Ipsum various sed nun rutrum nascence. Nisi ultricies quis risus \n"}
                                selectedValue={selectedValue1}
                                onChange={handleRadioChange1}
                                border="2px solid #B5B6BA"
                                height="100px"
                                borderRadius="8px"
                                width="270px"
                                display="flex"
                                padding='10px'
                                justifyContent="center"
                                alignItems="center"
                                enableSelectedStyles={true}
                            />

                            <RadioBtnTwo
                                id={'length'}
                                value={'Paid Listing'}
                                name={"Lesss than a month"}
                                subHead={"Lorem ipsum dolor wsit amet consectetur. Ipsum varius sed nunc rutrum maecenas. Nisi ultricies quis risus \n"}
                                selectedValue={selectedValue1}
                                onChange={handleRadioChange1}
                                border="2px solid #B5B6BA"
                                height="100px"
                                borderRadius="8px"
                                width="270px"
                                display="flex"
                                padding='10px'
                                justifyContent="center"
                                alignItems="center"
                                enableSelectedStyles={true}
                            />
                        </div>
                        <br/>

                        {selectedValue1 === 'Paid Listing' &&
                            <div>
                                <p style={{textAlign: 'center'}} className={style.level}>
                                    Choose period to Boost Post
                                </p>
                                <Dropdown onChange={(option: OptionType) => {
                                }} options={[{value: '1 Month', label: '1 Month'}, {
                                    value: '6 Months',
                                    label: '6 Months'
                                }]}
                                          width='280px' defaultText={"3 Days"} label={''}/>
                            </div>

                        }

                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <ButtonII
                                hasIcon={false}
                                isLabelVisible={true}
                                label="Post a Job"
                                primary={true}
                                size="medium"
                                onClick={handlePayment}
                            />
                        </div>
                    </div>
                </div>
            )}


            <div className={styles.overall_container}>
                <div className={styles.job}>Post a Project</div>
                {activeComponent !== 'payment_skills' &&
                    <div className={styles.nav_container}>
                        <div
                            className={styles.nav_links}
                            onClick={() => setActiveComponent("jobs_brief")}
                        >
                            <div className={styles.nav_numbers}>1</div>
                            <div>Share Brief Description</div>
                        </div>
                        <div
                            onClick={() => setActiveComponent("jobs_timeline")}
                            className={styles.nav_links}
                        >
                            <div className={styles.nav_numbers}>2</div>
                            <div>Add Timeline and Budget</div>
                        </div>
                        <div
                            className={styles.nav_links}
                            onClick={() => setActiveComponent("jobs_skills")}
                        >
                            <div className={styles.nav_numbers}>3</div>
                            <div>Skills and Requirements</div>
                        </div>
                    </div>
                }
                <div className={styles.component_container}>{renderComponent()}</div>
            </div>


        </div>
    );
}
