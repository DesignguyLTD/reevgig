import React from "react";
import style from "./profile.module.css";
import styles from "../OverView/OverviewPage.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ButtonII } from "../../stories/Button-II/ButtonII";
import FileDisplay from "./FileDisplay";
import { toast } from "react-toastify";

interface Props {
  page: number;
  setPage: (page: number) => void;
  userType: string;
}

const Profile = ({ setPage, userType }: Props) => {
  const [header, setHeader] = React.useState("Public");

  const handleToast = () => {
    toast.warn(
      "Your personal information will not be visible to the public, this is for KYC purposes",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  const handleHeader = (value: string) => {
    setHeader(value);
    if (value === "Personal") {
      handleToast();
    }
  };
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
    avatar:
      "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611444/Group_9_Copy_2_iqlh3i.svg",
  };

  const verifiedImg = {
    unverified:
      "https://res.cloudinary.com/do5wu6ikf/image/upload/v1728354101/Reev/8th%20oct/Property_1_Not_Verified_m9l5i7.svg",
    pending:
      "https://res.cloudinary.com/do5wu6ikf/image/upload/v1728354101/Reev/8th%20oct/Property_1_Pending_j3o6ij.svg",
    verified:
      "https://res.cloudinary.com/do5wu6ikf/image/upload/v1728354102/Reev/8th%20oct/Property_1_Verified_fky5d5.svg",
  };

  const savedFormValues = localStorage.getItem("profileForm");
  const finalValue = savedFormValues
    ? JSON.parse(savedFormValues)
    : defaultFormValues;

  const location = useLocation();
  const formData = location.state || {};

  const navigate = useNavigate();

  const handleNavigate = () => {
    setPage(2);
  };

  return (
    <>
      <section className={style.container}>
        <div className={styles.headerBtn}>
          <div style={{ width: "100%" }} className={styles.Btn}>
            <div
              className={styles.header}
              style={{
                color: header === "Public" ? "black" : "",
                borderBottom: header === "Public" ? "solid 2px black" : "",
              }}
              onClick={() => handleHeader("Public")}>
              Public Profile
            </div>
            <div
              className={styles.header}
              style={{
                color: header === "Personal" ? "black" : "",
                borderBottom: header === "Personal" ? "solid 2px black" : "",
              }}
              onClick={() => handleHeader("Personal")}>
              Personal Profile
            </div>
          </div>
          {/*<div className={styles.timeFrame}>*/}
          {/*    Last 30 days <img*/}
          {/*    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725753843/Reev/Icon_Stroke_d2hmut.svg"*/}
          {/*    alt="arrowDown"/>*/}
          {/*</div>*/}
        </div>
        <div className={style.holder}>
          {header === "Public" ? (
            <div className={style.PublicCtn}>
              <div className={style.topCtn}>
                <div className={style.topAvatar}>
                  <img
                    style={{ width: "55px", height: "55px" }}
                    src={finalValue.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className={style.topUserCtn}>
                  <div className={style.topUserName}>
                    <div className={style.topUserNametext}>Username</div>
                    <div className={style.topUserNameSubtext}>Akin125</div>
                  </div>
                  <div className={style.topUserStatus}>
                    <div className={style.topUserNametext}>Status</div>
                    <div className={style.topUserStatusBtn}>
                      <div className={style.topUserStatusBtn1}>
                        {userType === "Freelancer" ? "Freelancer" : "Recruiter"}
                      </div>
                      <div className={style.topUserStatusBtn2}>
                        Verified{" "}
                        <img
                          src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728354102/Reev/8th%20oct/Vector_cqm2en.svg"
                          alt="verified"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.midCtn}>
                <div className={style.topUserNametext}>
                  About me (Professional info only)
                </div>
                <div className={style.midSubtext}>
                  For 10 years, I’ve specialised in interface, experience &
                  interaction design as well as working in user research and
                  product strategy for product agencies, big tech companies &
                  start-ups.
                </div>
              </div>
              <div className={style.bottomCtn}>
                <div className={style.bottomLanguage}>
                  <div className={style.topUserNametext}>Language Spoken</div>
                  <div className={style.profileTagsCtn}>
                    <div className={style.profileTags}>English</div>
                    <div className={style.profileTags}>Spanish</div>
                    <div className={style.profileTags}>Yoruba</div>
                  </div>
                </div>

                <div className={style.bottomIntrests}>
                  <div className={style.topUserNametext}>Intrests</div>
                  <div className={style.profileTagsCtn}>
                    <div className={style.profileTags}>Hardware</div>
                    <div className={style.profileTags}>PHP</div>
                  </div>
                </div>
              </div>

              {userType === "Freelancer" && (
                <div className={style.bottomCtn}>
                  <div className={style.bottomLanguage}>
                    <div className={style.topUserNametext}>Your CV/Resume</div>
                    <div className={style.profileTagsCtn}>
                      <FileDisplay />
                      <FileDisplay />
                    </div>
                  </div>

                  <div className={style.bottomIntrests}>
                    <div className={style.topUserNametext}>
                      Your Portfolio Link
                    </div>
                    <div className={style.profileTagsCtn}>
                      <div className={style.profileLinks}>
                        pinterest.com/portfoliolink
                      </div>
                      <div className={style.profileLinks}>
                        pinterest.com/portfoliolink
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className={style.continue}>
                <br />
                <ButtonII
                  hasIcon={false}
                  isLabelVisible={true}
                  label="Edit Profile"
                  primary={true}
                  size="medium"
                  onClick={handleNavigate}
                />
              </div>
            </div>
          ) : (
            <div className={style.PersonalCtn}>
              <div className={style.PersonaltopCtn}>
                <div className={style.PersonaltopCtnMain}>
                  <div className={style.topAvatar}>
                    <img
                      style={{ width: "60px", height: "60px" }}
                      src={finalValue.avatar}
                      alt="Avatar"
                    />
                  </div>
                  <div className={style.PersonaltopUserCtn}>
                    <div className={style.PersonaltopUserName}>
                      <div className={style.PersonaltopUserNametext}>
                        First name
                      </div>
                      <div className={style.PersonaltopUserNameSubtext}>
                        Odediran
                      </div>
                    </div>

                    <div className={style.PersonaltopUserName}>
                      <div className={style.PersonaltopUserNametext}>
                        Last name
                      </div>
                      <div className={style.PersonaltopUserNameSubtext}>
                        Philip
                      </div>
                    </div>

                    <div className={style.PersonaltopUserName}>
                      <div className={style.PersonaltopUserNametext}>
                        Gender
                      </div>
                      <div className={style.PersonaltopUserNameSubtext}>
                        Male
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.PersonaltopCtn}>
                <div className={style.PersonaltopUserCtn2}>
                  <div className={style.PersonaltopUserName}>
                    <div className={style.PersonaltopUserNametext}>Email</div>
                    <div className={style.PersonaltopUserNameSubtext}>
                      Philipoluseyi@gmail.com
                    </div>
                  </div>

                  <div className={style.PersonaltopUserName}>
                    <div className={style.PersonaltopUserNametext}>
                      Phone number
                    </div>
                    <div className={style.PersonaltopUserNameSubtext}>
                      +234 701 689 6419
                    </div>
                  </div>

                  <div className={style.PersonaltopUserName}>
                    <div className={style.PersonaltopUserNametext}>Address</div>
                    <div className={style.PersonaltopUserNameSubtext}>
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.PersonaltopCtn}>
                <div className={style.PersonalVerifyCtn}>
                  <div className={style.PersonalVerifyText}>
                    Verify Identity
                  </div>
                  <div className={style.PersonalVerifySubText}>
                    To remove all limit on your aacount, we need to verify your
                    identity
                  </div>
                </div>

                <div className={style.PersonalVerifyDocCtn}>
                  <div className={style.PersonalVerifyText}>
                    Valid Identification Document
                  </div>
                  <div className={style.PersonalVerifyStatusCtn}>
                    <div className={style.PersonalVerifyDoc}>
                      National ID{" "}
                      <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728354101/Reev/8th%20oct/ep_picture-filled_bk8wgo.svg"
                        alt="ID"
                      />
                    </div>
                    <br />
                    <img
                      src={
                        userType === "Freelancer"
                          ? verifiedImg.verified
                          : verifiedImg.unverified
                      }
                      alt="verified state"
                    />
                  </div>
                </div>
              </div>
              <div className={style.continue}>
                <br />
                <ButtonII
                  hasIcon={false}
                  isLabelVisible={true}
                  label="Edit Profile"
                  primary={true}
                  size="medium"
                  onClick={handleNavigate}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Profile;
