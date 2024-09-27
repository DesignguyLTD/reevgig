import React from 'react';
import style from "./Profile.module.css";
import {useNavigate} from "react-router-dom";

const ProfileNav = () => {

    let navigate = useNavigate();
    const handleNavigation = () => {
        // navigate('/edit');
    }
    return (
        <div>
            <div className={style.ProfileCont}>
                <div className={style.profileEdit}>
                    <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725695190/Reev/Frame_stfpal.svg"
                         alt="ProfilePic"/>
                    <div className={style.Usertext}>
                        <div className={style.UserName}>Seyi Odediran</div>
                        <div className={style.userLocation}>NG, Osun</div>
                    </div>

                    <div className={style.editBtn} onClick={handleNavigation}>
                        <img
                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725835490/Reev/mingcute_edit-2-line_rkyyvc.svg"
                            alt="editIcon"/>
                        Edit Profile
                    </div>
                </div>

                <div className={style.applicationStatus}>
                    <div className={style.applicationCtn1}>
                        <div className={style.appText}>Application status</div>
                        <div className={style.Icon}>
                            <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725838665/Reev/Group_1171275752_ta0sxm.svg"
                                alt="moreinfo"/>
                        </div>
                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>
                    <div className={style.applicationCtn2}>
                        <div className={style.applicationflex1}>
                            <div className={style.Exp}>
                                Beginner
                            </div>

                            <div className={style.date}>
                                Applied on Jan 22
                            </div>
                        </div>
                        <div className={style.applicationflex2}>
                            Chinese Translator
                        </div>
                        <div className={style.applicationflex3}>
                            <div className={style.Location}>Tech Troopsy (Jurong East, Singapore)</div>
                            <div className={style.ProjectTypeCtn}>
                                <div className={style.ProjectType}>Translation</div>
                                <div className={style.ProjectType}>Chinese</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileNav;