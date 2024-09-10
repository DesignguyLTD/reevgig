import React, {useState, useEffect, useRef} from 'react';
import styles from './sideBar.module.css';

interface SidebarProps {
    collapse?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ collapse }) => {
    const [isOpen, setIsOpen] = useState(collapse);
    const [show, setShow] = useState(false);
    const navSearchRef = useRef<HTMLDivElement | null>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleShowSide = () => {
        // Check if the viewport width is greater than 765px
        if (window.matchMedia('(min-width: 765px)').matches) {
            setShow(!show);
        }
    };

    const handleNavSearchDisplay = () => {
        // Ensure this only runs on screens wider than 765px
        if (window.matchMedia('(min-width: 765px)').matches && navSearchRef.current) {
            navSearchRef.current.style.display = 'block';
        }
    };

    const handleClickOutside = (event: MouseEvent) => {
        // Ensure this only runs on screens wider than 765px
        if (
            window.matchMedia('(min-width: 765px)').matches &&
            navSearchRef.current &&
            !navSearchRef.current.contains(event.target as Node)
        ) {
            navSearchRef.current.style.display = 'none';
        }
    };

    useEffect(() => {
        // Add event listener to detect clicks outside of the navSerch only on wide screens
        if (window.matchMedia('(min-width: 765px)').matches) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <>
            <div className={styles.upperNav}>
                <div style={{ cursor: 'pointer' }} onClick={handleNavSearchDisplay}>
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/pixelarticons_menu_bl8vvb.svg"
                        alt="menu"
                    />
                </div>

                <div className={styles.navSerch}>
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/icons_n8fkxi.svg"
                        alt="Search"
                    />
                    <input type="text" placeholder={'Search for anything...'} />
                </div>

                <div className={styles.lastCont}>
                    <div style={{ cursor: 'pointer' }}>
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/Auto_Layout_Horizontal_pgthlg.svg"
                            alt="bell"
                        />
                    </div>

                    <div className={styles.Userbtn}>
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/Frame_stfpal.svg"
                            alt="user"
                        />
                        <div className={styles.userName}>Alex meian</div>
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/icons_up_csqnun.svg"
                            alt="upIcon"
                        />
                    </div>
                </div>
            </div>
            <div style={{ position: 'relative' }}>
                <div ref={navSearchRef}  className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''} ${show ? styles.show : ''}`}>
                    <div className={styles.logo}>
                        <img
                            src={
                                isOpen
                                    ? 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/logo_ocj4df.svg'
                                    : 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/fa_bolt_owleb9.svg'
                            }
                            alt="logo"
                        />
                    </div>

                    <div className={isOpen ? styles.usertypeOpen : styles.usertypeClose}>
                        RECRUITER’S DASHBOARD
                    </div>

                    {/* Sidebar content */}
                    <button
                        className={isOpen ? styles.toggleBtnOpen : styles.toggleBtnClose}
                        onClick={toggleSidebar}
                    >
                        {!isOpen ? (
                            <i className="fi fi-sr-angle-right"></i>
                        ) : (
                            <i className="fi fi-sr-angle-left"></i>
                        )}
                    </button>

                    <ul className={styles.upperSideBar}>
                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-apps"></i>
                                    <div>Overview</div>
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-apps"></i>
                                    <span className={styles.tooltiptext}>Overview</span>
                                </div>
                            )}
                        </li>
                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-user"></i>
                                    Profile
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-user"></i>
                                    <span className={styles.tooltiptext}>Profile</span>
                                </div>
                            )}
                        </li>
                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-add"></i>
                                    Post a Job
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-add"></i>
                                    <span className={styles.tooltiptext}>Post a Job</span>
                                </div>
                            )}
                        </li>

                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-envelope"></i>
                                    Message
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-envelope"></i>
                                    <span className={styles.tooltiptext}>Message</span>
                                </div>
                            )}
                        </li>

                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-users"></i>
                                    Saved Employee
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-users"></i>
                                    <span className={styles.tooltiptext}>Saved Employee</span>
                                </div>
                            )}
                        </li>

                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-receipt"></i>
                                    Plan & Billings
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-receipt"></i>
                                    <span className={styles.tooltiptext}>Plan & Billings</span>
                                </div>
                            )}
                        </li>

                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-settings"></i>
                                    Settings
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-settings"></i>
                                    <span className={styles.tooltiptext}>Settings</span>
                                </div>
                            )}
                        </li>
                    </ul>

                    <ul className={styles.lowerSideBar}>
                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-interrogation"></i>
                                    Help
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-interrogation"></i>
                                    <span className={styles.tooltiptext}>Help</span>
                                </div>
                            )}
                        </li>

                        <li className={isOpen ? styles.deskTabIcon : styles.mobileIcon}>
                            {isOpen ? (
                                <div className={styles.dodo}>
                                    <i className="fi fi-sr-exit"></i>
                                    Log out
                                </div>
                            ) : (
                                <div className={styles.dodom}>
                                    <i className="fi fi-sr-exit"></i>
                                    <span className={styles.tooltiptext}>Log out</span>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
