import React, {useEffect} from 'react';
import Sidebar from "./stories/SideBar/sideBar";
import style from '../src/Pages/OverView/OverviewPage.module.css'
import useAuthStore from "./store/AuthStore";


const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const ut = localStorage.getItem('userType') ?? 'Client';
    const userType = ut.charAt(0).toUpperCase() + ut.slice(1).toLowerCase();
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const { userData, loading, error, fetchData } = useAuthStore() as {
        userData: any;
        loading: boolean;
        error: any;
        fetchData: () => void;
        fetchProfileData: () => void;
    };

    useEffect(() => {
        fetchData();
        localStorage.setItem('userType', userData?.user_type || '');
    }, [fetchData, userData?.user_type]);


    return (
        <div className="dashboard-layout">
            <Sidebar UserType={userType} logo={'/'} getSidebarState={getSidebarState}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                {children} {/* Render the nested routes inside */}
                {/*<div>Page loader</div>*/}
            </div>

        </div>
    );
};

export default DashboardLayout;
