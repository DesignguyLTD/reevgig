import React from 'react';
import Sidebar from "../../../stories/SideBar/sideBar";
import appstyle from "../../../Pages/DashBoard/ApplicantProfile/ApplicantProfilePage.module.css";
import style from "../../OverView/OverviewPage.module.css";

const ApplicantProfilePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );
    const UserType  = localStorage.getItem('userType') ? localStorage.getItem('userType') : 'Client';

    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', currentPage);
        return x;
    }


    return (
        <div>
            <Sidebar UserType={UserType} logo={'/'} getSidebarState={getSidebarState} getPage={getPage}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                <div className={appstyle.ApplicantCnt}>
                  <div className={appstyle.ApplicantHeaderCnt}>
                      <div className={appstyle.ApplicantHeaderText}>
                          <img src="https://res.cloudinary.com/doijevrqo/image/upload/v1725720422/ep_back_typnii.svg" alt="backarrow"/>
                          Application Details
                      </div>
                      <div className={appstyle.ApplicantHeaderUserCnt}>
                          <div className={appstyle.ApplicantHeaderUserData}>
                              <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589725/Reev/10th%20oct/Group_18_Copy_2_dsynli.svg" alt="userPic"/>
                              <div className={appstyle.ApplicantHeaderUser}>
                                  <div className={appstyle.ApplicantHeaderUserText1}>Front End Developer</div>
                                  <div className={appstyle.ApplicantHeaderUserText2}>Seyifunmi Odediran</div>
                              </div>
                          </div>
                          <div className={appstyle.ApplicantHeaderBtnCtn}>
                              <div className={appstyle.ApplicantHeaderBtn1}>Send Message</div>
                              <img className={appstyle.ApplicantHeaderBtn3} src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589724/Reev/10th%20oct/Button_m98tqy.svg" alt="messageBtn"/>
                              <div className={appstyle.ApplicantHeaderBtn2}>Place Order</div>
                              <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/entypo_dots-three-vertical_nfqlzb.svg" alt="More"/>
                          </div>
                      </div>
                      <div className={appstyle.ApplicantMainBody}>
                          <div className={appstyle.ApplicantMainBodyHeaderCtn}>
                              <div>Proposal</div>
                              <div>Resumé</div>
                          </div>

                          <div className={appstyle.ApplicantMainBodyHeaderCtn2}>

                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantProfilePage;