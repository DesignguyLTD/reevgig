import React, {useState} from 'react';
import appstyle from "../DashBoard/ApplicantProfile/ApplicantProfilePage.module.css";
import styles from "../Onboarding/onboarding/onBoarding.module.css";
import CounterTextarea from "../Jobs/CounterTextarea";

const FreelancerApplication = () => {
    const [header, setHeader] = React.useState('Proposal');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [textarea, setTextArea] = useState<string>("");

    const handleTextAreaChange = (value: string) => {
        setTextArea(value); // Update the state when the value changes
    };

    const handleHeader = (value: string) => {
        setHeader(value);
    };

    const handleOpenModal = (content: string) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleDone = () => {
        setDoneStage(prevState => ({...prevState, [`stage${stage}`]: true}));
    }

    // const handleBack = () => {
    //     setStage(stage - 1);
    // }

    const handleStage1 =()=>{
        setStage(1)
        handleDone();
    }

    const handleStage2 =()=>{
        setStage(2)
        handleDone();
    }


    const handleStage3 =()=>{
        setStage(3)
        handleDone();
    }





    return (
        <div>

            <div>
                <div className={appstyle.ApplicantCnt}>
                    <div className={appstyle.ApplicantHeaderCnt}>
                        <div className={appstyle.ApplicantHeaderText}>
                            <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1725720422/ep_back_typnii.svg"
                                 alt="backarrow"/>
                            Project Details
                        </div>
                        <div className={appstyle.ApplicantHeaderUserMainCnt}>
                            <div className={appstyle.ApplicantHeaderUserCnt}>
                                <div className={appstyle.ApplicantHeaderUserData}>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589725/Reev/10th%20oct/Group_18_Copy_2_dsynli.svg"
                                        alt="userPic"/>
                                    <div className={appstyle.ApplicantHeaderUser}>
                                        <div className={appstyle.ApplicantHeaderUserText1}>Front End Developer</div>
                                        <div className={appstyle.ApplicantHeaderUserText2}>Seyifunmi Odediran Full Time</div>
                                    </div>
                                </div>
                                <div className={appstyle.ApplicantHeaderBtnCtn}>
                                    <button className={appstyle.ApplicantHeaderBtn1}>Send Message</button>
                                    <img className={appstyle.ApplicantHeaderBtn3}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589724/Reev/10th%20oct/Button_m98tqy.svg"
                                         alt="messageBtn"/>
                                    <button className={appstyle.ApplicantHeaderBtn2} onClick={() => handleOpenModal('Place Order')}>Place Order</button>
                                    <img style={{cursor: 'pointer'}}
                                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg"
                                         alt="More"/>
                                </div>
                            </div>
                        </div>

                        <div className={appstyle.ApplicantMainBodyLowerCtn}>
                            <div className={appstyle.ApplicantHeaderCtrl}>
                                <div className={appstyle.ApplicantHeaderCtrlText} style={{
                                    color: header === 'Proposal' ? 'black' : '',
                                    borderBottom: header === 'Proposal' ? 'solid 2px black' : ''
                                }} onClick={() => handleHeader(('Proposal'))}>Project Description
                                </div>
                                <div className={appstyle.ApplicantHeaderCtrlText} style={{
                                    color: header === 'Resumé' ? 'black' : '',
                                    borderBottom: header === 'Resumé' ? 'solid 2px black' : ''
                                }} onClick={() => handleHeader(('Resumé'))}>Project Image
                                </div>
                            </div>
                            <div className={appstyle.ApplicantMainBody}>
                                <div className={appstyle.ApplicantMainBodyHeaderCtn}>
                                    {header === 'Proposal' &&
                                        <>
                                            <div className={appstyle.ProposalCtn}>
                                                <div className={appstyle.ApplicantHeaderText}>Project Description</div>
                                                <div className={appstyle.ProposalText2}>
                                                    <p>
                                                        Here at Velstar, we don't just make websites, we create
                                                        exceptional digital experiences that consumers love. Our team of
                                                        designers, developers, strategists, and creators work together
                                                        to push brands to the next level. From Platform Migration, User
                                                        Experience & User Interface Design, to Digital Marketing, we
                                                        have a proven track record in delivering outstanding eCommerce
                                                        solutions and driving sales for our clients.

                                                    </p>

                                                    <p>
                                                        Here at Velstar, we don't just make websites, we create
                                                        exceptional digital experiences that consumers love. Our team of
                                                        designers, developers, strategists, and creators work together
                                                        to push brands to the next level. From Platform Migration, User
                                                        Experience & User Interface Design, to Digital Marketing, we
                                                        have a proven track record in delivering outstanding eCommerce
                                                        solutions and driving sales for our clients.

                                                    </p>

                                                    <p>
                                                        Here at Velstar, we don't just make websites, we create
                                                        exceptional digital experiences that consumers love. Our team of
                                                        designers, developers, strategists, and creators work together
                                                        to push brands to the next level. From Platform Migration, User
                                                        Experience & User Interface Design, to Digital Marketing, we
                                                        have a proven track record in delivering outstanding eCommerce
                                                        solutions and driving sales for our clients.

                                                    </p>

                                                    <p>
                                                        Here at Velstar, we don't just make websites, we create
                                                        exceptional digital experiences that consumers love. Our team of
                                                        designers, developers, strategists, and creators work together
                                                        to push brands to the next level. From Platform Migration, User
                                                        Experience & User Interface Design, to Digital Marketing, we
                                                        have a proven track record in delivering outstanding eCommerce
                                                        solutions and driving sales for our clients.

                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    }

                                    {header === 'Resumé' &&
                                        <>
                                            <div className={appstyle.ApplicantHeaderText}>Project Image</div>
                                            {/*<img className={appstyle.Resumé}*/}
                                            {/*     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589746/Reev/10th%20oct/YourName_CV_wtqy6k.svg"*/}
                                            {/*     alt="pdffile"/>*/}
                                            <div className={appstyle.ProposalText2}>
                                               No Image Uploaded
                                            </div>
                                        </>
                                    }
                                </div>
                                <div className={appstyle.ApplicantMainBodyHeaderCtn2}>
                                    <div className={appstyle.ApplicantMainBody2}>
                                        <div className={appstyle.ApplicantMainBodyRate}>
                                            <div className={appstyle.ApplicantMainBodyRateText1}>Project Budget</div>
                                            <div className={appstyle.ApplicantMainBodyRateText2}>$50,000 - $80,000</div>
                                            <div className={appstyle.ApplicantMainBodyRateText1}>One-time off</div>
                                        </div>
                                        <div className={appstyle.ApplicantMainBodySkill}>
                                            <div className={appstyle.ApplicantMainBodySkillTag2Ctn}>
                                                <div className={appstyle.ApplicantMainBodySkillTag1}>Skills</div>
                                            </div>
                                            <div className={appstyle.ApplicantMainBodySkillTag2Ctn}>
                                                <div className={appstyle.ApplicantMainBodySkillTag2}>Hardware</div>
                                                <div className={appstyle.ApplicantMainBodySkillTag2}>Javascript</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={appstyle.ApplicantMainBody3}>
                                    <div className={appstyle.ApplicantMainBody3Top}>
                                            <div className={appstyle.ApplicantMainBody3TopText}>Overview</div>
                                        </div>
                                        <div className={appstyle.ApplicantMainBody3Middle}>

                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>

                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589727/Reev/10th%20oct/Timer_xiouqw.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>

                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589727/Reev/10th%20oct/Stack_h3j0xz.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>

                                        </div>

                                        <div className={appstyle.ApplicantMainBody3Middle}>
                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/Vector_rf11cx.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>

                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589725/Reev/10th%20oct/ri_calendar-line_fsjrsn.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>

                                            <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                                <div className={appstyle.ApplicantMainBody3Middle1}>
                                                    <img
                                                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg'
                                                        alt="project"/>
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed
                                                </div>
                                                <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                    }}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '8px',
                            maxWidth: '500px',
                            width: '80%',
                            position: 'relative',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div>
                            <div>Submit your Application</div>
                            <button
                                style={{
                                    position: 'absolute',
                                    top: '10px',
                                    right: '10px',
                                    background: 'none',
                                    border: 'none',
                                    fontSize: '18px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => setIsModalOpen(false)}
                            >
                                <img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1736791811/Reev/Jan%2013th%202025/Vector_tqaudd.svg"
                                    alt="close"/>
                            </button>
                        </div>


                        <div className={styles.progressContainer}>
                            <div
                                className={styles.circle}
                                style={{
                                    background: stage === 1 ? '#404145' : doneStage.stage1 ? '#404145' : '',
                                    color: doneStage.stage1 ? '#fec200' : ''
                                }}
                                onClick={handleStage1}
                            >
                                {doneStage.stage1 ? '✔' : '1'}

                            </div>
                            <div className={styles.line}
                                 style={{visibility: (stage === 2 || stage === 3) ? 'visible' : doneStage.stage1 ? 'visible' : 'hidden'}}></div>
                            <div
                                className={styles.circle}
                                style={{
                                    background: stage === 2 ? '#404145' : doneStage.stage2 ? '#404145' : '',
                                    color: doneStage.stage2 ? '#fec200' : ''
                                }}
                                onClick={handleStage2}
                            >
                                {doneStage.stage2 ? '✔' : '2'}
                            </div>
                            {/*{UserType === 'Freelancer' &&*/}

                                <>
                                    <div className={styles.line}
                                         style={{visibility: stage === 3 ? 'visible' : doneStage.stage2 ? 'visible' : 'hidden'}}></div>
                                    <div
                                        className={styles.circle}
                                        style={{
                                            background: stage === 3 ? '#404145' : doneStage.stage3 ? '#404145' : '',
                                            color: doneStage.stage3 ? '#fec200' : ''
                                        }}
                                        onClick={handleStage3}
                                    >
                                        {doneStage.stage3 ? '✔' : '3'}
                                    </div>
                                </>

                            {/*}*/}

                        </div>

                        {modalContent === 'Place Order' && (
                            <div>
                                <CounterTextarea
                                    maxLength={2000}
                                    label={
                                        "This will help get your brief to the right client. Specifics help here."
                                    }
                                    value={textarea}
                                    onChange={handleTextAreaChange}
                                    placeholder="I can..."
                                />
                                {/* Add order form fields */}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>

    );
};

export default FreelancerApplication;