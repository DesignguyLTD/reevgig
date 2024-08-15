import React from 'react';
import styles from "./notification.module.css";
import { Link } from 'react-router-dom';
import Toggle from "../../../../stories/ToggleBtn/toggle";
import { backArrow, fwdArrow, notification } from '../../../../assets';


const Notification = () => {
    return (
        <div>
            <div className={styles.ctn}>
                <div className={styles.settingPages}>
                    <Link to="/settings" className={styles.backToSettings}>
                        <img src={backArrow} alt="Back Arrow" />
                        <p>Settings</p>
                    </Link>
                    <div className={styles.currentPage}>
                        <img src={fwdArrow} alt="Forward Arrow" />
                        <p>Notification</p>
                    </div>
                </div>
                <div className={styles.notify_sect}>
                    <div className={styles.notify_title}>
                        <span>
                            <img src={notification} alt='bell' />
                        </span>
                        <span>
                            <p>Notification</p>
                        </span>
                    </div>
                    <div className={styles.notify_info1}>
                        <span>
                            <h5>Application and Account status</h5>
                            <p>Stay informed about any change or updates related to your active job application</p>
                        </span>
                        <span>
                            <Toggle />
                        </span>
                    </div>
                    <div className={styles.notify_info2}>
                        <span>
                            <h5>Career tips</h5>
                            <p>Get visible insights and tips to help navigate your professional journey</p>
                        </span>
                        <span>
                            <Toggle />
                        </span>
                    </div>
                    <div className={styles.notify_info3}>
                        <span>
                            <h5>Recommended Jobs</h5>
                            <p>Get personalized suggestions for jobs that align with your skills and interests.</p>
                        </span>
                        <span>
                            <Toggle />
                        </span>
                    </div>
                    <div className={styles.notify_info4}>
                        <span>
                            <h5>Feedbacks</h5>
                            <p>Receive request to provide feedback and participate in user studies and surveys</p>
                        </span>
                        <span>
                            <Toggle />
                        </span>
                    </div>
                    <div className={styles.jobNotify_title}>
                        <span>
                            <img src={notification} alt='bell' />
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
    )
}

export default Notification