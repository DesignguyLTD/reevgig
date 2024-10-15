import React, { useState } from "react";

import CardsOne from "../Cards/Card-I";
import Footer from "../../Components/LandingPage/Footer";
import PictureSlider from "../PictureSlider/pictureSlider";
import { Response } from "../ReviewResponse/response";
import { Reviews } from "../Review/review";
import styling from "./fullSlide.module.css";

interface SlideProp {
  profileImage?: string;
  title?: string;
  userName?: string;
  duration?: string;
  sponsored?: string;
  p1?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
  p2?: React.HtmlHTMLAttributes<HTMLParagraphElement>;
}

export const FullSlide = ({
  profileImage,
  title,
  userName,
  duration,
  sponsored,
  p1,
  p2,
  ...props
}: SlideProp) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const popUp = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className={styling.cover_up}>
      <div className={styling.container} {...props}>
        <div className={styling.profile_heading}>
          <div className={styling.profile_ctn}>
            <div className={styling.profile_image}>
              <img src={profileImage} alt={`${userName}'s profile`} />
            </div>
            <div>
              <label className={styling.title} htmlFor="title">
                {title}
              </label>
              <div className={styling.text}>
                <label className={styling.name} htmlFor="User">
                  {userName}
                </label>
                <p {...p1}> {duration}</p>
                <p {...p2}>{sponsored}</p>
              </div>
            </div>
          </div>
          <div className={styling.btn}>
            <button className={styling.send}>Send Message</button>

            <button className={styling.order}>
              Place Order
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239969/arrow-right_tdf3bn.svg"
                alt="Placing order icon"
              />
            </button>
            <button className={styling.options} onClick={popUp}>
              <img
                src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728837098/iconamoon_menu-kebab-vertical_xsrikf.svg"
                alt=""
              />
            </button>
          </div>
          {showPopup && (
            <div className={styling.talents}>
              <div className={styling.save}>
                <button className={styling.save_talent}>Save Talent</button>
              </div>
              <div className={styling.report}>
                <button className={styling.report_talent}>Report Talent</button>
              </div>
            </div>
          )}
        </div>

        <div className={styling.content}>
          <div style={{ marginBottom: "2rem" }}>
            <div>
              <PictureSlider
                images={[
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                  `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727798570/Pexels_Photo_by_Athena_Sandrini_ezoter.svg`,
                ]}
              />
            </div>
            <div className={styling.desc}>
              <h2>Description</h2>
              <div className={styling.desc_words}>
                <p className={styling.passage}>
                  Here at Velstar, we don't just make websites, we create
                  exceptional digital experiences that consumers love. Our team
                  of designers, developers, strategists, and creators work
                  together to push brands to the next level. From Platform
                  Migration, User Experience & User Interface Design, to Digital
                  Marketing, we have a proven track record in delivering
                  outstanding eCommerce solutions and driving sales for our
                  clients. <br /> Here at Velstar, we don't just make websites,
                  we create exceptional digital experiences that consumers love.
                  Our team of designers, developers, strategists, and creators
                  work together to push brands to the next level. From Platform
                  Migration, User Experience & User Interface Design, to Digital
                  Marketing, we have a proven track record in delivering
                  outstanding eCommerce solutions and driving sales for our
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div>
            {/* This is the rating */}
            <div className={styling.rate_ctn}>
              <div>
                <p className={styling.rtn}>Rate</p>
                <p className={styling.mny}>$50,000 - $80,000</p>
                <p className={styling.rtn}>Monthly</p>
              </div>
              <hr />
              <div className={styling.skill_ctn}>
                <p className={styling.skill}>Skills</p>
                <div className={styling.hold_skill}>
                  <p className={styling.sk_set}>JavaScript</p>
                  <p className={styling.sk_set}>3D Modelling</p>
                </div>
              </div>
            </div>

            {/* This is the overview */}
            <div className={styling.overview_container}>
              <h2 className={styling.over_text}>Overview</h2>
              <div className={styling.overview}>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/briefcase_dngpt1.svg"
                    alt=""
                  />
                  <p>Projects completed</p>
                  <p>55+</p>
                </div>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239941/Timer_uok2r5.svg"
                    alt=""
                  />
                  <p>Experience</p>
                  <p>3 years</p>
                </div>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/Stack_nyastz.svg"
                    alt=""
                  />
                  <p>Experience Level</p>
                  <p>Beginner</p>
                </div>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/ri_calendar-line_lkarte.svg"
                    alt=""
                  />
                  <p>Member Since</p>
                  <p>August 2019</p>
                </div>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239943/carbon_review_sm0h4s.svg"
                    alt=""
                  />
                  <p>Rating</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}>
                    <img
                      src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728240339/Frame_1_bppbxm.svg"
                      alt=""
                    />
                    <div className={styling.nmb}>4.9</div>
                  </div>
                </div>
                <div className={styling.view}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/Vector_3_fgwlzt.svg"
                    alt=""
                  />
                  <p>Language</p>
                  <p>English, Spanish</p>
                </div>
              </div>
            </div>

            {/* for the resume */}

            <div className={styling.resume}>
              <div>
                <h2>View my Resume</h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239943/Vector_4_vugymp.svg"
                    alt=""
                  />
                  <p>Jerom Bells.pdf</p>
                </div>
              </div>
              <button className={styling.resume_upload}>
                <img
                  src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728239942/download_mkreok.svg"
                  alt=""
                />
              </button>
            </div>

            {/* this is the cards section */}

            <div className={styling.recommended}>
              <h1>Recommended For You</h1>
              <div className={styling.recommend}>
                <CardsOne
                  profileImage={
                    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                  }
                  companyName={"Recruiter/Company's name"}
                  timeFrame={"Part Time"}
                  mainSkill={"Circuit Design"}
                  amount={"50-55k"}
                  time={"30 min ago"}
                  skills={"Skills"}
                  skillSet={["JavaScript", "3D Modelling"]}
                  skillWidth="74px"
                  hidePost={{
                    style: { display: "none" },
                  }}
                  width="304px"
                  text={
                    "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                  }
                />
                <CardsOne
                  width="274px"
                  profileImage={
                    "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
                  }
                  companyName={"Recruiter/Company's name"}
                  timeFrame={"Part Time"}
                  mainSkill={"Circuit Design"}
                  amount={"50-55k"}
                  time={"30 min ago"}
                  skills={"Skills"}
                  skillWidth="74px"
                  skillSet={["JavaScript", "3D Modelling"]}
                  hidePost={{
                    style: { display: "none" },
                  }}
                  text={
                    "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt...."
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className={styling.below}>
          <div className={styling.review}>
            <Reviews
              five={700}
              four={300}
              three={150}
              two={20}
              one={8}
              star={[
                `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
                `https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg`,
              ]}
              starPoint={4.9}
            />
          </div>

          <div className={styling.responseDiv}>
            <Response
              userName={"User's Name"}
              review="Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. highly satisfied. thank you!"
              timePeriod={"2 weeks ago"}
              star={[
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
              ]}
              starNumber={4}
              sellerImage="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
              sellerName="Seller's name"
            />
          </div>

          <div className={styling.responseDivTwo}>
            <Response
              userName={"User's Name"}
              review="Great work! I wanted a video to showcase my fitness app and the designer delivered an excellent job and on time. highly satisfied. thank you!"
              timePeriod={"2 weeks ago"}
              star={[
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
                "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1727817652/Frame_rpzopj.svg",
              ]}
              starNumber={4}
              sellerImage="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722611446/Group_16_Copy_2_n0jltw.svg"
              sellerName="Seller's name"
            />
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>See more</p>
            <img
              src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1728397633/arrow-right1_hktwcu.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
