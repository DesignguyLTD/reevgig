import React, {useState} from 'react';
import appstyle from "../DashBoard/ApplicantProfile/ApplicantProfilePage.module.css";
import styles from "../Onboarding/onboarding/onBoarding.module.css";
import Input from "../../stories/FieldInput-I/input";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import mainStyle from './freelancerApplication.module.css';
import style from "../Jobs/jobs.module.css";
import FileUploadTwo from "../../Components/FileUpload/fileUploadTwo";
import FileUploadThree from "../../Components/FileUpload/fileUploadThree";

interface UploadedFile {
    id: string;
    name: string;
    src: string;
}

const FreelancerApplication = () => {
    const [header, setHeader] = React.useState('Proposal');
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const [stage, setStage] = React.useState(1);
    const [doneStage, setDoneStage] = React.useState({stage1: false, stage2: false, stage3: false});
    const [textarea, setTextArea] = useState<string>("");
    const [applicationStage, setApplicationStage] = useState<number>(1);




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

    }

    const handleStage2 =()=>{
        setStage(2)

    }


    const handleStage3 =()=>{
        setStage(3)
    }

const handleApplicationStage = () => {
    if (applicationStage < 3) {
        setApplicationStage(prevStage => prevStage + 1);
        if(applicationStage === 1){
            handleStage1();
            handleDone();
        }

        if(applicationStage === 2){
            handleStage2();
            handleDone();
        }

        if(applicationStage === 3){
            handleStage3();
            handleDone();

        }
    }

};

const handleApplicationStageBack = () => {
    if (applicationStage > 1) {
        setApplicationStage(prevStage => prevStage - 1);
    }
};

    const [fileUploaded, setFileUploaded] = useState<UploadedFile[]>([]);



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
                            maxWidth: '550px',
                            width: '80%',
                            position: 'relative',
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className={mainStyle.HeaderAppliCtn}>
                            <div className={mainStyle.HeaderAppliText}>Submit your Application</div>
                            <button
                                style={{
                                    // position: 'absolute',
                                    // top: '10px',
                                    // right: '10px',
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
                        <hr/>


                        <div  style={{
                            margin: '4% auto'
                        }} className={styles.progressContainer}>
                            <div
                                className={styles.circle}
                                style={{
                                    background: stage === 1 ? '#404145' : doneStage.stage1 ? '#404145' : '',
                                    color: doneStage.stage1 ? '#fec200' : ''
                                }}
                                onClick={handleStage1}
                            >
                                {doneStage.stage1 ? <img style={{width:'10px', height:'10px'}} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737328890/Reev/17th%20Nov/Vector_zzv9sv.svg" alt="mark"/> : '1'}

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
                                {doneStage.stage2 ? <img style={{width:'10px', height:'10px'}}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737328890/Reev/17th%20Nov/Vector_zzv9sv.svg"
                                    alt="mark"/> : '2'}
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
                                        {doneStage.stage3 ? <img style={{width:'10px', height:'10px'}}
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1737328890/Reev/17th%20Nov/Vector_zzv9sv.svg"
                                            alt="mark"/> : '3'}
                                    </div>
                            </>

                            {/*}*/}

                        </div>


                        <div className={mainStyle.TextCtn}>
                            <div className={mainStyle.TextHeader}>{applicationStage === 1 ? 'Write your proposal' : applicationStage === 2 ? 'Resume/CV' : ''}</div>
                            <div  className={mainStyle.TextSub}>{applicationStage === 1 ? 'Be sure to include an updated resume' : applicationStage === 2 ? 'Be sure to include an updated resume' : ''} </div>
                        </div>

                        {(modalContent === 'Place Order' && applicationStage === 1)  && (
                            <div>
                               <Input isTextArea={true} />
                                {/* Add order form fields */}
                            </div>
                        )}

                        {(modalContent === 'Place Order' && applicationStage === 2)  && (
                            <div>
                                <div className={style.pictureUploadCont}>
                                    <FileUploadThree
                                        files={fileUploaded}
                                        setFiles={setFileUploaded}
                                        allowedTypes={["application/pdf"]}
                                        id={"Job-file-upload"}
                                    />
                                </div>
                            </div>
                        )}

                        {(modalContent === 'Place Order' && applicationStage === 3)  && (
                            <div>
                                <Input isTextArea={true} label='Proposal' />
                                {/* Add order form fields */}
                            </div>
                        )}



                        <div className={mainStyle.lowerSecCtn}>
                            <div className={mainStyle.lowerSecStepCount}>Step {applicationStage}/3</div>
                            <div className={mainStyle.lowerSec}>
                                {applicationStage !== 1 &&
                                    <button  onClick={handleApplicationStageBack} className={mainStyle.restylesec}>Back</button>

                                }

                                <button onClick={handleApplicationStage} className={mainStyle.restylePri}>Next</button>

                            </div>

                        </div>
                    </div>
                </div>
            )}
        </div>

    );
};

export default FreelancerApplication;