import React, { useState } from 'react';
import styles from './sideBar.module.css';

interface SidebarProps {
    collapse? :boolean
}

const Sidebar: React.FC<SidebarProps> = ({collapse}) => {
    const [isOpen, setIsOpen] = useState(collapse);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ position: 'relative' }}>

            <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>

                <div className={styles.logo}>
                    <img
                        src={isOpen ? "https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/logo_ocj4df.svg" : "https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/fa_bolt_owleb9.svg"}
                        alt="logo"
                    />
                </div>

                <div className={isOpen ? styles.usertypeOpen : styles.usertypeClose}>
                    RECRUITER’S DASHBOARD
                </div>

                {/* Sidebar content */}
                <button className={isOpen ? styles.toggleBtnOpen : styles.toggleBtnClose} onClick={toggleSidebar}>
                    {!isOpen ?
                        <i className="fi fi-sr-angle-right"></i>
                        :
                        <i className="fi fi-sr-angle-left"></i>
                    }
                </button>

                <ul className={styles.upperSideBar}>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-apps"></i>
                                <div>Overview</div>
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-apps"></i>
                                <span className={styles.tooltiptext}>Overview</span>
                            </div>
                        }
                    </li>
                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-user"></i>
                                Profile
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-user"></i>
                            </div>
                        }
                    </li>
                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-add"></i>
                                Post a Job
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-add"></i>
                            </div>
                        }
                    </li>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-envelope"></i>
                                Message
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-envelope"></i>
                            </div>
                        }
                    </li>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-users"></i>
                                Saved Employee
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-users"></i>
                            </div>
                        }
                    </li>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-receipt"></i>
                                Plan & Billings
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-receipt"></i>
                            </div>
                        }
                    </li>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-settings"></i>
                                Settings
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-settings"></i>
                            </div>
                        }
                    </li>

                </ul>

                <ul className={styles.lowerSideBar}>
                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-interrogation"></i>
                                Help
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-interrogation"></i>
                            </div>
                        }
                    </li>

                    <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                        {isOpen ?
                            <div className={styles.dodo}>
                                <i className="fi fi-sr-exit"></i>
                                Log out
                            </div>
                            :
                            <div className={styles.dodom}>
                                <i className="fi fi-sr-exit"></i>
                            </div>
                        }
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
