import React from 'react';
import Sidebar from "./stories/SideBar/sideBar";
import style from '../src/Pages/OverView/OverviewPage.module.css'


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const UserType  = localStorage.getItem('userType') ? localStorage.getItem('userType') : 'Client';
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    return (
        <div className="dashboard-layout">
            <Sidebar UserType={UserType} logo={'/'} getSidebarState={getSidebarState} />
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                {children} {/* Render the nested routes inside */}
            </div>
        </div>
    );
};

export default DashboardLayout;
