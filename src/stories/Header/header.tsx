import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import style from './header.module.css';
import useAuthStore from "../../store/AuthStore";

interface HeaderProps {
    /**
     * Determines if the user is authenticated.
     */
    auth: boolean;
}

/**
 * Header component renders a navigation bar with different sections based on authentication status.
 * - `auth`: Specifies if the user is authenticated.
 */
const Header = ({auth}: HeaderProps) => {
    let navigate = useNavigate();
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleDashNav = () => {
        navigate('/overview')
    }

    const { userData, loading, error, fetchData } = useAuthStore() as {
        userData: any;
        loading: boolean;
        error: any;
        fetchData: () => void;
        fetchProfileData: () => void;
    };

    useEffect(() => {
        fetchData();
        localStorage.setItem('userType', userData?.user_type || '');
    }, [fetchData]);

    return (
        <nav className={style.navContainer}>
            <div className={style.upperSec}>
                <div className={style.logo} aria-label={'logo'}>
                    <Link to='/'>
                        <img
                            className={style.logo}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/logo_ocj4df.svg"
                            alt="logo"
                        />
                    </Link>

                </div>

                {auth ? (

                    <>
                        <div className={style.menuMobile}>
                            <div className={style.Item2} onClick={handleToggle}>
                                <img
                                    className={style.menuIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715021/Reev/tabler_menu-deep_g687gb.svg"
                                    alt="Hamburger"
                                />
                                {toggle && (
                                    <div className={style.menuMobileToggle}>
                                        <div className={style.Explore}>Explore</div>
                                        <div className={style.Explore}>Pricing</div>
                                        <div className={style.Explore}>Subscription</div>
                                    </div>
                                )}
                            </div>
                            <div onClick={handleDashNav} className={style.Item2}>
                                <img
                                    className={style.averterIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715021/Reev/avater_do28oz.svg"
                                    alt="Avatar"
                                />
                            </div>
                            <div className={style.Item2}>
                                <img
                                    className={style.helpIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                                    alt="Help"
                                />
                            </div>
                        </div>

                        <div className={style.menuTabDesk}>
                            <div className={style.Item2}>
                                <img
                                    onClick={()=> {navigate('/notification')}}
                                    className={style.notiIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame_b7xxaj.svg"
                                    alt="Notification"
                                />
                            </div>
                            <div className={style.Item2}>
                                <img
                                    onClick={()=> {navigate('/message')}}
                                    className={style.messageIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-mail_tn9jmf.svg"
                                    alt="Message"
                                />
                            </div>
                            <div className={style.Item2}>
                                <img
                                    className={style.helpIcon}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                                    alt="Help"
                                />
                            </div>
                            <div onClick={handleDashNav} className={style.Item2}>
                                <img
                                    src={userData?.image || "https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/Frame_stfpal.svg"}
                                    alt="user"
                                    style={{width: '30px', height: "30px", borderRadius: '50%'}}
                                />
                            </div>
                        </div>
                    </>
                ) : (

                    <div className={style.Item2}>
                        <img
                            className={style.helpIcon}
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                            alt="Help"
                        />
                    </div>
                )}

            </div>
            {/* Lower section only displayed if authenticated */}
            {auth && (
                <div className={style.LowerSec}>
                    <div className={style.Items1}>Explore</div>
                    <div className={style.Items1}>Pricing</div>
                    <div className={style.Items1}>Subscription</div>
                </div>
            )}
        </nav>
    );
};

export default Header;
