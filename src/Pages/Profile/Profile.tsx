import React from "react";
import style from "./profile.module.css";

const Profile = () => {
  return (
    <section className={style.container}>
      <div className={style.holder}>
        <div className={style.avatar_container}>
          <p className={style.avatar}>Display Avatar</p>
          <p className={style.secondary} style={{ paddingTop: "-10px" }}>
            Select to change
          </p>
          <img
            src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722501223/Avatar_display.svg"
            alt="Avatar"
          />
        </div>
        <div>
          <div>
            <label htmlFor="Display Name"> Display Name</label>
            <p className={style.secondary}>James Mark</p>
          </div>
          <div className={style.names}>
            <div>
              <label htmlFor="First Name"> First Name</label>
              <p className={style.secondary}>James</p>
            </div>
            <div>
              <label htmlFor="Last Name"> Last Name</label>
              <p className={style.secondary}>Mark</p>
            </div>
          </div>
          <div>
            <label htmlFor="Email">Work email address</label>
            <p className={style.secondary}>ajadimarvelouse@gmail.com</p>
          </div>
          <div>
            <label htmlFor="Country">Country</label>
            <p className={style.secondary}>Nigeria</p>
          </div>
          <div className={style.names}>
            <div>
              <label htmlFor="State">State</label>
              <p className={style.secondary}>Lagos</p>
            </div>
            <div>
              <label htmlFor="City">City</label>
              <p className={style.secondary}>Ikeja</p>
            </div>
          </div>
          <div>
            <label htmlFor="Number">Office/Work Contact Number</label>
            <p className={style.secondary}>+2348109226536</p>
          </div>
        </div>
        <button className={style.edit}>Edit Profile</button>
      </div>
    </section>
  );
};

export default Profile;
