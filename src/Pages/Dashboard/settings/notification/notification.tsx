import React from 'react'
import styles from "./notification.module.css";
import { Link } from 'react-router-dom';
import { backArrow, fwdArrow } from '../../../../assets';


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
            </div>
        </div>
    )
}

export default Notification