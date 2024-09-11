import React, {useEffect, useRef, useState} from 'react';
import style from "../../Pages/OverView/OverviewPage.module.css";
import {useNavigate} from "react-router-dom";

const JobApplication = () => {
    const [popUp, setPopUp] = useState(false);
    const popupRef = useRef<HTMLDivElement | null>(null);
    const handlePopUp = () => {
        setPopUp(!popUp)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            popupRef.current &&
            !popupRef.current.contains(event.target as Node)
        ) {
            setPopUp(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [popUp]);

    let navigate = useNavigate()

    const handleNavigation = () => {
        navigate('/jobapplication')
    }
    return (
        <div>
            <div className={style.JobHeader}>
                <div className={style.JobHeaderCtn1}>
                    <div className={style.JobText}>Circuit Design</div>
                    <div className={style.JobPriceCtn}>
                        <div className={style.JobExp}>
                            <div className={style.JobExp1}>Full-Time</div>
                            <div className={style.JobExp2}>Intermediate</div>
                            <div className={style.JobPrice2}>
                                Pay: $20,000 - $25,000/hr
                            </div>
                        </div>
                        <div className={style.JobPrice1}>
                            Pay: $20,000 - $25,000/hr
                        </div>
                    </div>
                    <div className={style.JobApplicant1}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/Img_xttjod.svg"
                             alt="applicants"/> 234 Applicants
                    </div>
                </div>
                <div className={style.JobHeaderCtnMiddle}>
                    <div className={style.JobExp3}>Intermediate</div>
                    <div className={style.JobApplicant2}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/Img_xttjod.svg"
                             alt="applicants"/> 234 Applicants
                    </div>
                </div>
                <div className={style.JobHeaderCtn2}>
                    <button className={style.edit} onClick={handleNavigation}>Job Application<img
                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/arrow-right_bsh2zk.svg'
                        alt="Icon"/></button>
                    <img style={{cursor: 'pointer'}}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg"
                         alt="moreInfo" onClick={handlePopUp}/>
                </div>

                {popUp &&
                    <div className={style.popUp} ref={popupRef}>
                        <ul>
                            <li className={style.popList}>Promote Job</li>
                            <li className={style.popList}>Edit Job</li>
                            <li className={style.popList}>Mark as Expired</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default JobApplication;