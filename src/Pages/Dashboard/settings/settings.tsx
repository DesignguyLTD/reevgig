import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./settings.module.css";
import { backArrow, fwdArrow } from '../../../assets';

interface SettingList {
    name: string;
    path: string;
}

const settingLists: SettingList[] = [
    { name: 'Account Settings', path: '/accountSettings' },
    { name: 'Notification', path: '/notification' },
    { name: 'Privacy Policy', path: '/settings' },
    { name: 'About Us', path: '/settings' }
];

const Settings: React.FC = () => {
    return (
        <div className={styles.ctn}>
            <div className={styles.backward}>
                <Link to="/settings">
                    <img src={backArrow} alt="Back Arrow" />
                </Link>
                <p>Settings</p>
            </div>
            <ul>
                {settingLists.map((item, index) => (
                    <li key={index} className={styles.list}>
                        <Link to={item.path}>
                            {item.name}
                            <img src={fwdArrow} alt='Forward Arrow' />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Settings;
