import Jobs from "../Jobs/Jobs";
import OverviewPage from "../OverView/OverviewPage";
import PaymentCard from "./planAndBillings/paymentCard/paymentCard";
import ProfileMain from "../Profile/ProfileMain";
import React from "react";
import Settings from "./settings/settings";
import Sidebar from "../../stories/SideBar/sideBar";
import Talent from "./talent/talent";
import style from "../OverView/OverviewPage.module.css";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );


    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }


    return (
        <div>
            <Sidebar logo={'/'} getSidebarState={getSidebarState} getPage={getPage} />
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                {currentPage === 'Overview' &&
                    <OverviewPage />
                }

                {currentPage === 'Profile' &&
                    <>
                        <ProfileMain />
                    </>
                }

                {currentPage === 'PostAJob' &&
                    <Jobs />
                }

                {currentPage === 'Message' &&
                    <h1>Development in progress ....</h1>
                }

                {currentPage === 'SavedEmployee' &&
                    <h1>Development in progress ....</h1>
                }

                {currentPage === 'PlanBillings' &&
                    <PaymentCard />
                }

                {currentPage === 'SavedTalents' &&
                    <Talent />
                }

                {currentPage === 'Settings' &&
                    <Settings />
                }
            </div>
        </div>
    );
};

export default Dashboard;