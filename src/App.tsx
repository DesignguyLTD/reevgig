import React from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashboardLayout from "./DashboardLayout";
import AccountSettings from "./Pages/DashBoard/settings/account settings/accountSettings";
import NotificationPage from "./Pages/DashBoard/settings/notification/notification";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";
import ApplicantProfilePage from "./Pages/DashBoard/ApplicantProfile/ApplicantProfilePage";
import OverviewPage from "./Pages/OverView/OverviewPage";
import ProfileMain from "./Pages/Profile/ProfileMain";
import Jobs from "./Pages/Jobs/Jobs";
import PaymentPage from "./Pages/paymentPage/paymentPage";
import Settings from "./Pages/DashBoard/settings/settings";

const App: React.FC = () => {
    const location = useLocation();
    const UserType = localStorage.getItem('userType') ? localStorage.getItem('userType') : 'Client';

    // Define routes where the sidebar should not be shown
    const noSidebarRoutes = ['/', '/onboarding', '/signup', '/login', '/resetpassword'];

    return (
        <div className="App">
            {!noSidebarRoutes.includes(location.pathname) ? (
                <DashboardLayout>
                    <Routes>
                        <Route path="/accountSettings" element={<AccountSettings />} />
                        <Route path="/notification" element={<NotificationPage />} />
                        <Route path="/applicantprofile" element={<ApplicantProfilePage />} />
                        <Route path="/jobapplication" element={<JobApplicationPage />} />
                        <Route path="/overview" element={<OverviewPage />} />
                        <Route path="/profile" element={<ProfileMain />} />
                        <Route path="/postproject" element={<Jobs />} />
                        <Route path="/message" element={<h1>Development in progress ....</h1>} />
                        <Route path="/saved" element={<h1>Development in progress ....</h1>} />
                        <Route path="/review" element={<h1>Development in progress ....</h1>} />
                        <Route path="/help" element={<h1>Development in progress ....</h1>} />
                        <Route path="/payment" element={<PaymentPage />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="*" element={<h1>404 page <Link to={'/'}>Home</Link></h1>} />
                    </Routes>
                </DashboardLayout>
            ) : (
                <>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/resetpassword" element={<ResetPassword />} />
                        <Route path="/onboarding" element={<OnBoarding />} />
                        <Route path="*" element={<h1>404 page <Link to={'/'}>Home</Link></h1>} />
                    </Routes>
                </>
            )}
        </div>
    );
};

export default App;
