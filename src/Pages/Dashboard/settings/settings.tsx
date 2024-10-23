import React from "react";
import styles from "./settings.module.css";
import {Link} from "react-router-dom";

interface SettingList {
    name: string;
    path: string;
}

const settingLists: SettingList[] = [
    {name: 'Account Settings', path: '/accountSettings'},
    {name: 'Notification', path: '/notification'},
    {name: 'Privacy Policy', path: '/'},
    {name: 'About Us', path: '/'}
];

const Settings: React.FC = () => {
    return (
        <div className={styles.ctn}>
            <div className={styles.backward}>
                <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1725720422/ep_back_typnii.svg"
                     alt="Back Arrow"/>
                <p>Settings</p>
            </div>
            <ul>
                {settingLists.map((item, index) => (
                    <li key={index} className={styles.list}>
                        <Link to={item.path}>
                            {item.name}
                            <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1725720422/Group_weumlx.svg"
                                 alt="Forward Arrow"/>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Settings;
