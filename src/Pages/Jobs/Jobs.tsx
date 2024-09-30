import React, {useState} from "react";
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

export default function Jobs() {
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
                return <JobBrief setActiveComponent={setActiveComponent}/>;
            case "jobs_timeline":
                return <JobTimeline setActiveComponent={setActiveComponent}/>;
            case "jobs_skills":
                return <JobSkills handlePopUp={handlePopUp}/>;
            case "payment_skills":
                return <PaymentSkills setActiveComponent={setActiveComponent}/>;
            default:
                return <JobBrief/>;
        }
    };

    const handlePayment = () => {
        setPopModal(false)
        if(selectedValue1 === 'Paid Listing'){
            setActiveComponent('payment_skills')

        }else{
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
                                alt="Close"/>
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
                                subHead={"Lorem ipsum dolor sit amet consectetur. Ipsum varius sed nunc rutrum maecenas. Nisi ultricies quis risus \n"}
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
