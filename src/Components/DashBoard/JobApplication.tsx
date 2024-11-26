import React, {useEffect, useRef, useState} from 'react';
import style from "../../Pages/OverView/OverviewPage.module.css";
import {useNavigate} from "react-router-dom";
import OverFlowMenu from "../HelperComponents/OverFlowMenu";


interface JobApplicationProps {
    userType: string;

}

const JobApplication = ({userType}: JobApplicationProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLDivElement | null>(null);

    const handleMouseToggleMenu = () => {
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom,
                left: rect.left,
            });
        }
        setIsOpen((prev) => !prev);
    };

    const handleKeyToggleMenu = (event: React.KeyboardEvent) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault(); // Prevent default spacebar scrolling behavior
            handleMouseToggleMenu();
        }
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);




    let navigate = useNavigate()

    const handleNavigation = () => {
        if (userType === 'Freelancer') {
            navigate('/talent');
        } else {
            navigate('/jobapplication');
        }
    }
    return (
        <div>
            <div className={style.JobHeader}>
                <div className={style.JobHeaderCtn1}>
                    <div className={style.JobText}>Technical Support Specialist</div>
                    <div className={style.JobPriceCtn}>
                        <div className={style.JobExp}>
                            <div className={style.JobExp1}>Full-Time</div>
                            <div className={style.JobPrice2}>
                                Pay: $20,000 - $25,000/hr
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.JobHeaderCtnMiddle}>
                    <div className={style.JobExp3}>Active</div>
                    <div className={style.JobApplicant2}>
                        <img
                            src={userType === 'Freelancer' ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1731889747/Reev/Vector_rdfutv.svg' : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/Img_xttjod.svg"}
                            alt="applicants"/> 234 {userType === 'Freelancer' ? 'Views' : 'Applicants'}
                    </div>
                </div>
                <div className={style.JobHeaderCtn2}>
                    <button className={style.edit}
                            onClick={handleNavigation}>{userType === 'Freelancer' ? 'View Details' : 'Job Application'}<img
                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/arrow-right_bsh2zk.svg'
                        alt="Icon"/></button>

                    <div ref={buttonRef}
                         onClick={handleMouseToggleMenu}
                         onKeyDown={handleKeyToggleMenu}
                         tabIndex={0} // Makes it focusable
                         role="button" // Improves semantics
                         aria-expanded={isOpen}
                         aria-label="More options" >
                        <img style={{cursor: 'pointer'}}
                             src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg"
                             alt="moreInfo"/>
                    </div>

                </div>
                 <OverFlowMenu isOpen={isOpen} position={menuPosition}
                               background={true}

                 >
                         <div className={style.popUp}>
                             <li className={style.popList}>Promote Job</li>
                             <li className={style.popList}>Edit Job</li>
                             <li className={style.popList}>Mark as Expired</li>
                         </div>
                 </OverFlowMenu>

            </div>
        </div>
    );
};

export default JobApplication;