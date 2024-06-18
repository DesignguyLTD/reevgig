import React, {useState} from 'react'
import style from './header.module.css'


interface headerProp {
    auth: boolean,
}


const Header = ({auth}: headerProp) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }

    return (
        <nav className={style.navContainer}>
            <div className={style.upperSec}>
                <div className={style.logo} aria-label={'logo'}>
                    <img className={style.logo}
                         src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/logo_ocj4df.svg"
                         alt="logo"/>
                </div>

                {auth ?
                    <>
                        <div className={style.menuMobile}>
                            <div className={style.Item2} onClick={handleToggle}>
                                <img className={style.menuIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715021/Reev/tabler_menu-deep_g687gb.svg"
                                     alt="Harmburger"/>
                                {toggle &&
                                    <div className={style.menuMobileToggle}>
                                        <div className={style.Explore}>Explore</div>
                                        <div className={style.Explore}>Pricing</div>
                                        <div className={style.Explore}>Subscription</div>
                                    </div>
                                }

                            </div>
                            <div className={style.Item2}>
                                <img className={style.averterIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715021/Reev/avater_do28oz.svg"
                                     alt="Avater"/>
                            </div>
                            <div className={style.Item2}>
                                <img className={style.helpIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                                     alt="help"/>
                            </div>
                        </div>

                        <div className={style.menuTabDesk}>
                            <div className={style.Item2}>
                                <img className={style.notiIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame_b7xxaj.svg"
                                     alt="notification"/>
                            </div>
                            <div className={style.Item2}>
                                <img className={style.messageIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-mail_tn9jmf.svg"
                                     alt="message"/>
                            </div>
                            <div className={style.Item2}>
                                <img className={style.helpIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                                     alt="help"/>
                            </div>
                            <div className={style.Item2}>
                                <img className={style.averterIcon}
                                     src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715021/Reev/avater_do28oz.svg"
                                     alt="Avater"/>
                            </div>
                        </div>
                    </> :
                    <>
                        <div className={style.Item2}>
                            <img className={style.helpIcon}
                                 src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/Frame-help_wnnaxh.svg"
                                 alt="help"/>
                        </div>
                    </>

                }

            </div>
            {auth &&
                <div className={style.LowerSec}>
                    <div className={style.Items1}>Explore</div>
                    <div className={style.Items1}>Pricing</div>
                    <div className={style.Items1}>Subscription</div>
                </div>
            }

        </nav>
    )
};

export default Header;