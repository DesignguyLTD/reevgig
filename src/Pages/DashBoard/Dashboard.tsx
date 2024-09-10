import React from 'react';
import Sidebar from "../../stories/SideBar/sideBar";
import style from '../OverView/OverviewPage.module.css';
import Profile from "../Profile/Profile";
import OverviewPage from "../OverView/OverviewPage";


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
            <Sidebar logo={'/'} getSidebarState={getSidebarState} getPage={getPage}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                {currentPage === 'Overview' &&
                    <OverviewPage/>
                }

                {currentPage === 'Profile' &&
                    <Profile />
                }
            </div>
        </div>
    );
};

export default Dashboard;