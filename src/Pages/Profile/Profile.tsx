import { Helmet } from "react-helmet";
import React from "react";
import style from "./profile.module.css";

import { useLocation } from "react-router-dom";

const Profile: React.FC = () => {
  const location = useLocation();
  const formData = location.state || {};
import Sidebar from "../../stories/SideBar/sideBar";
import {useNavigate} from "react-router-dom";

const Profile = () => {

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/edit");
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
        <meta property="og:title" content="Profile Saved" />
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
            <p className={style.secondary} style={{ paddingTop: "-10px" }}>
              Select to change
            </p>
            <img src={formData.avatar} alt="Avatar" />
          </div>
          <div>
            <div>
              <label htmlFor="Display Name">Display Name</label>
              <p
                className={style.secondary}
                style={{ backgroundColor: "white" }}>
                {formData.DisplayName}
              </p>
            </div>
            <div className={style.names}>
              <div>
                <label htmlFor="First Name"> First Name</label>
                <p className={style.secondary}>{formData.Firstname}</p>
              </div>
              <div>
                <label htmlFor="Last Name"> Last Name</label>
                <p className={style.secondary}>{formData.Lastname}</p>
              </div>
            </div>
            <div>
              <label htmlFor="Email">Work email address</label>
              <p className={style.secondary}>{formData.email}</p>
            </div>
            <div>
              <label htmlFor="Country">Country</label>
              <p
                className={style.secondary}
                style={{ backgroundColor: "white" }}>
                {formData.Country}
              </p>
            </div>
            <div className={style.names}>
              <div>
                <label htmlFor="State">State</label>
                <p
                  className={style.secondary}
                  style={{ backgroundColor: "white" }}>
                  {formData.State}
                </p>
              </div>
              <div>
                <label htmlFor="City">City</label>
                <p
                  className={style.secondary}
                  style={{ backgroundColor: "white" }}>
                  {formData.City}
                </p>
              </div>
            </div>
            <div>
              <label htmlFor="Number">Office/Work Contact Number</label>
              <p
                className={style.secondary}
                style={{ backgroundColor: "white" }}>
                {formData.countryCode} {formData.contactNumber}
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
