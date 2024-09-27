import React, {useState} from "react";
import Toggle from "../../../../stories/ToggleBtn/toggle";
import cloudImages from "../../../../assets";
import styles from "./notification.module.css";
import {Link} from "react-router-dom";
import Sidebar from "../../../../stories/SideBar/sideBar";
import style from "../../../OverView/OverviewPage.module.css";

const notificationTypes = [
    {
        title: "Application and Account status",
        desc: "Stay informed about any change or updates related to your active job application"
    },
    {title: "Career tips", desc: "Get visible insights and tips to help navigate your professional journey"},
    {
        title: "Recommended Jobs",
        desc: "Get personalized suggestions for jobs that align with your skills and interests."
    },
    {title: "Feedbacks", desc: "Receive request to provide feedback and participate in user studies and surveys"},
]

const Notification = () => {
    const [toggleState, setToggleState] = useState([
        false,
        false,
        false,
        false
    ])

    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );


    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }

    return (
        <div>
            <Sidebar logo={'/'} getSidebarState={getSidebarState} getPage={getPage}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                <div className={styles.ctn}>
                    <div className={styles.settingPages}>
                        <Link to="/dashboard" className={styles.backToSettings}>
                            <img src={cloudImages.backArrow} alt="Back Arrow"/>
                            <p>Settings</p>
                        </Link>
                        <div className={styles.currentPage}>
                            <img src={cloudImages.fwdArrow} alt="Forward Arrow"/>
                            <p>Notification</p>
                        </div>
                    </div>
                    <div className={styles.notify_sect}>
                        <div className={styles.notify_title}>
                    <span>
                        <img src={cloudImages.notification} alt='bell'/>
                    </span>
                            <span>
                        <p>Notification</p>
                    </span>
                        </div>
                        <div>
                            {
                                notificationTypes.map((notifyTags, id) =>
                                        <div className={styles.notify_info} key={notifyTags.title + id}>
                                <span>
                                    <h5>{notifyTags.title}</h5>
                                    <p>{notifyTags.desc}</p>
                                </span>
                                            <span>
                                    <Toggle
                                        onChange={(value) => setToggleState((prevToggleStates) => prevToggleStates.map((toggler, i) => i === id ? value : toggler))}
                                        toggleValue={toggleState[id]}
                                        backgroundColor="white"
                                        activebackgroundColor='black'
                                        borderColor="1px solid grey"
                                        toggleColor="#FEC200"
                                        size="small"
                                    />
                                </span>
                                        </div>
                                )
                            }
                        </div>
                        <div className={styles.jobNotify_title}>
                    <span>
                        <img src={cloudImages.notification} alt='bell'/>
                    </span>
                            <span>
                        <p>Job Notification</p>
                    </span>
                        </div>
                        <div className={styles.notify_alert}>
                            <h5>Job and Company alerts</h5>
                            <p>You are currently viewing alerts and notifications for freelancer@gmail.com</p>
                            <span className={styles.switch}>Switch to a different account-link</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Notification