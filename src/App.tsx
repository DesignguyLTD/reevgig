import React, {Suspense} from "react";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SearchResults from "./Pages/SearchResults/searchResults";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import DashboardLayout from "./DashboardLayout";
import AccountSettings from "./Pages/DashBoard/settings/accountSettings/accountSettings";
import NotificationPage from "./Pages/DashBoard/settings/notification/notification";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";
import ApplicantProfilePage from "./Pages/DashBoard/ApplicantProfile/ApplicantProfilePage";
import OverviewPage from "./Pages/OverView/OverviewPage";
import ProfileMain from "./Pages/Profile/ProfileMain";
import Jobs from "./Pages/Jobs/Jobs";
import PaymentPage from "./Pages/paymentPage/paymentPage";
import Settings from "./Pages/DashBoard/settings/settings";
import './App.css';
import Talent from './Pages/DashBoard/savedTalents/talent';
import {FullSlide}  from "./stories/Fullslider/fullSlide";
import FreelancerApplication from "./Pages/freelancerApplication/freelancerApplication";
import GeneralLayout from "./GeneralLayout";
const LandingPage = React.lazy(() => import("./Pages/LandingPage/LandingPage"));

const App: React.FC = () => {
    const location = useLocation();


    const userType: string = localStorage.getItem('userType') ?? 'Client';

    // Define routes where the sidebar should not be shown
    const noSidebarRoutes = ['/', '/onboarding', '/signup', '/login', '/resetpassword',"/talents","/results" ];

    return (
        <div className="App">
            <Suspense
                fallback={
                    <div className="loading">
                        <div className='loading'>
                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1718715019/Reev/logo_ocj4df.svg" alt="logo" />
                        </div>
                    </div>
                }
            >
            {!noSidebarRoutes.includes(location.pathname) ? (
                <DashboardLayout>
                    <Routes>
                        <Route path="/accountSettings" element={<AccountSettings/>}/>
                        <Route path="/notification" element={<NotificationPage/>}/>
                        <Route path="/applicantprofile" element={<ApplicantProfilePage/>}/>
                        <Route path="/jobapplication" element={<JobApplicationPage/>}/>
                        <Route path="/overview" element={<OverviewPage userType={userType}/>}/>
                        <Route path="/profile" element={<ProfileMain userType={userType}/>}/>
                        <Route path="/postproject" element={<Jobs userType={userType}/>}/>
                        <Route path="/message" element={<h1>Development in progress ....</h1>}/>
                        <Route path="/saved" element={<Talent/>}/>
                        <Route path="/freelancer-application" element={<FreelancerApplication/>}/>
                        <Route path="/help" element={<h1>Development in progress ....</h1>}/>
                        <Route path="/payment" element={<PaymentPage/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="*" element={<h1>404 page <Link to={'/'}>Home</Link></h1>}/>
                    </Routes>
                </DashboardLayout>
            ) : (
                <>
                    <GeneralLayout>
                    <Routes>
                        <Route
                            path="/talents"
                            element={
                                <FullSlide
                                    profileImage={
                                        "https://res.cloudinary.com/dvjx9x8l9/image/upload/v1722501223/Avatar_display.svg"
                                    }
                                    title={"Senior UI/UX Designer"}
                                    userName={"Jimmy Joe"}
                                    duration={"Full-time"}
                                    sponsored={"Sponsored"}
                                />
                            }
                        />
                        <Route path="/results" element={<SearchResults />} />
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/resetpassword" element={<ResetPassword/>}/>
                        <Route path="/onboarding" element={<OnBoarding/>}/>
                        <Route path="*" element={<h1>404 page <Link to={'/'}>Home</Link></h1>}/>
                    </Routes>
                    </GeneralLayout>
                </>
            )}
            </Suspense>
        </div>
    );
};

export default App;
