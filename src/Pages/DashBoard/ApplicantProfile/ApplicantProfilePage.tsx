import React from 'react';
import Sidebar from "../../../stories/SideBar/sideBar";
import appstyle from "../../../Pages/DashBoard/ApplicantProfile/ApplicantProfilePage.module.css";
import style from "../../OverView/OverviewPage.module.css";

const ApplicantProfilePage = () => {
    const [header, setHeader] = React.useState('Proposal');

    const handleHeader = (value: string) => {
        setHeader(value);
    }

    return (
        <div>

            <div>
                <div className={appstyle.ApplicantCnt}>
                  <div className={appstyle.ApplicantHeaderCnt}>
                      <div className={appstyle.ApplicantHeaderText}>
                          <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1725720422/ep_back_typnii.svg" alt="backarrow"/>
                          Application Details
                      </div>
                      <div  className={appstyle.ApplicantHeaderUserMainCnt}>
                          <div className={appstyle.ApplicantHeaderUserCnt}>
                              <div className={appstyle.ApplicantHeaderUserData}>
                                  <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589725/Reev/10th%20oct/Group_18_Copy_2_dsynli.svg" alt="userPic"/>
                                  <div className={appstyle.ApplicantHeaderUser}>
                                      <div className={appstyle.ApplicantHeaderUserText1}>Front End Developer</div>
                                      <div className={appstyle.ApplicantHeaderUserText2}>Seyifunmi Odediran</div>
                                  </div>
                              </div>
                              <div className={appstyle.ApplicantHeaderBtnCtn}>
                                  <button className={appstyle.ApplicantHeaderBtn1}>Send Message</button>
                                  <img className={appstyle.ApplicantHeaderBtn3} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589724/Reev/10th%20oct/Button_m98tqy.svg" alt="messageBtn"/>
                                  <button className={appstyle.ApplicantHeaderBtn2}>Place Order </button>
                                  <img style={{cursor: 'pointer'}} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg" alt="More"/>
                              </div>
                          </div>
                      </div>

                      <div className={appstyle.ApplicantMainBodyLowerCtn} >
                          <div className={appstyle.ApplicantHeaderCtrl}>
                              <div className={appstyle.ApplicantHeaderCtrlText} style={{
                                  color: header === 'Proposal' ? 'black' : '',
                                  borderBottom: header === 'Proposal' ? 'solid 2px black' : ''
                              }} onClick={() => handleHeader(('Proposal'))}>Proposal</div>
                              <div className={appstyle.ApplicantHeaderCtrlText} style={{
                                  color: header === 'Resumé' ? 'black' : '',
                                  borderBottom: header === 'Resumé' ? 'solid 2px black' : ''
                              }} onClick={() => handleHeader(('Resumé'))}>Resumé</div>
                          </div>
                          <div className={appstyle.ApplicantMainBody}>
                              <div className={appstyle.ApplicantMainBodyHeaderCtn}>
                                  {header === 'Proposal' &&
                                      <>
                                          <div className={appstyle.ProposalCtn}>
                                              <div className={appstyle.ProposalText1}>About Seyi Odediran</div>
                                              <div className={appstyle.ProposalText2}>
                                                  Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
                                              </div>
                                          </div>
                                          <div className={appstyle.ProposalCtn}>
                                              <div className={appstyle.ProposalText1}>Proposal</div>
                                              <div className={appstyle.ProposalText2}>
                                                  Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
                                                  Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.
                                              </div>
                                          </div>
                                      </>
                                  }

                                  {header === 'Resumé' &&
                                      <>
                                          <img className={appstyle.Resumé} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589746/Reev/10th%20oct/YourName_CV_wtqy6k.svg" alt="pdffile"/>

                                      </>
                                  }
                              </div>
                              <div className={appstyle.ApplicantMainBodyHeaderCtn2}>
                                  <div className={appstyle.ApplicantMainBody2} >
                                      <div className={appstyle.ApplicantMainBodyRate}>
                                          <div className={appstyle.ApplicantMainBodyRateText1}>Rate</div>
                                          <div  className={appstyle.ApplicantMainBodyRateText2}>$50,000 - $80,000</div>
                                          <div  className={appstyle.ApplicantMainBodyRateText1}>Monthly</div>
                                      </div>
                                      <div className={appstyle.ApplicantMainBodySkill}>
                                          <div className={appstyle.ApplicantMainBodySkillTag2Ctn}>
                                              <div className={appstyle.ApplicantMainBodySkillTag1}>Skills</div>
                                          </div>
                                          <div className={appstyle.ApplicantMainBodySkillTag2Ctn}>
                                              <div className={appstyle.ApplicantMainBodySkillTag2}>Hardware</div>
                                              <div className={appstyle.ApplicantMainBodySkillTag2}>Javascript</div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className={appstyle.ApplicantMainBody3}>
                                      <div className={appstyle.ApplicantMainBody3Top}>
                                          <div className={appstyle.ApplicantMainBody3TopText}>Overview</div>
                                      </div>
                                      <div className={appstyle.ApplicantMainBody3Middle}>

                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>

                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>

                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>

                                      </div>

                                      <div className={appstyle.ApplicantMainBody3Middle}>
                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>

                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>

                                          <div className={appstyle.ApplicantMainBody3MiddleComp}>
                                              <div className={appstyle.ApplicantMainBody3Middle1}>
                                                  <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589728/Reev/10th%20oct/briefcase_spqoze.svg' alt="project"/>
                                              </div>
                                              <div className={appstyle.ApplicantMainBody3Middle2}>Project Completed</div>
                                              <div className={appstyle.ApplicantMainBody3Middle3}>55+</div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>

                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantProfilePage;