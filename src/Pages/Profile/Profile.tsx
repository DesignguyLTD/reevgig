import {Helmet} from "react-helmet";
import React from "react";
import style from "./profile.module.css";

import {useLocation, useNavigate} from "react-router-dom";

interface Props {
    page: number;
    setPage: (page: number) => void;
}

const Profile = ({page, setPage}: Props) => {

    interface FormValues {
        DisplayName: string;
        Firstname: string;
        Lastname: string;
        email: string;
        Country: string;
        State: string;
        City: string;
        contactNumber: string;
        countryCode: string;
        avatar: string;
    }

    const defaultFormValues: FormValues = {
        DisplayName: "James Mark",
        Firstname: "James ",
        Lastname: "Mark",
        email: "ajadimarvellousgo@gmail.com",
        Country: "Nigeria",
        State: "Osun",
        City: "Ile-Ife",
        contactNumber: "7016896419",
        countryCode: "+234",
        avatar: 'https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_9_Copy_2_iqlh3i.svg',
    };


    const savedFormValues = localStorage.getItem("profileForm");
    const finalValue = savedFormValues ? JSON.parse(savedFormValues) : defaultFormValues;


    const location = useLocation();
    const formData = location.state || {};


    const navigate = useNavigate();

    const handleNavigate = () => {
        setPage(2);
    };

    return (
        <>
            <Helmet>
                <title>Profile Saved</title>
                <meta
                    name="description"
                    content="This content of that of the already set profile"
                />
                <link
                    rel="canonical"
                    href="https://DesignguyLTD.github.io/reevgig/#/saved"
                />
                <meta property="og:title" content="Profile Saved"/>
                <meta
                    property="og:description"
                    content="This is the editable part of the profile"
                />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png"
                />
            </Helmet>
            <section className={style.container}>
                <div className={style.holder}>
                    <div className={style.avatar_container}>
                        <p className={style.avatar}>Display Avatar</p>
                        <p className={style.secondary} style={{paddingTop: "-10px"}}>
                            Select to change
                        </p>
                        <img style={{width: '100px', height: '100px'}} src={finalValue.avatar} alt="Avatar"/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="Display Name">Display Name</label>
                            <p
                                className={style.secondary}
                                style={{backgroundColor: "white"}}>
                                {finalValue.DisplayName}
                            </p>
                        </div>
                        <div className={style.names}>
                            <div>
                                <label htmlFor="First Name"> First Name</label>
                                <p className={style.secondary}>{finalValue.Firstname}</p>
                            </div>
                            <div>
                                <label htmlFor="Last Name"> Last Name</label>
                                <p className={style.secondary}>{finalValue.Lastname}</p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Email">Work email address</label>
                            <p className={style.secondary}>{finalValue.email}</p>
                        </div>
                        <div>
                            <label htmlFor="Country">Country</label>
                            <p
                                className={style.secondary}
                                style={{backgroundColor: "white"}}>
                                {finalValue.Country}
                            </p>
                        </div>
                        <div className={style.names}>
                            <div>
                                <label htmlFor="State">State</label>
                                <p
                                    className={style.secondary}
                                    style={{backgroundColor: "white"}}>
                                    {finalValue.State}
                                </p>
                            </div>
                            <div>
                                <label htmlFor="City">City</label>
                                <p
                                    className={style.secondary}
                                    style={{backgroundColor: "white"}}>
                                    {finalValue.City}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Number">Office/Work Contact Number</label>
                            <p
                                className={style.secondary}
                                style={{backgroundColor: "white"}}>
                                {finalValue.countryCode} {finalValue.contactNumber}
                            </p>
                        </div>
                    </div>
                    <div className={style.edit_holder}>
                        <button className={style.edit} onClick={handleNavigate}>Edit Profile</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Profile;
