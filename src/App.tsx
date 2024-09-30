import "./App.css";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
// import Footer from "./LandingPage/Footer";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Dashboard from "./Pages/DashBoard/Dashboard";
import AccountSettings from "./Pages/DashBoard/settings/account settings/accountSettings";
import NotificationPage from "./Pages/DashBoard/settings/notification/notification";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";



function App() {
    const UserType = localStorage.getItem('userType') ? localStorage.getItem('userType') : 'Client';
    return (
        <div className="App">
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/resetpassword" element={<ResetPassword/>}/>
                    <Route path="/onboarding" element={<OnBoarding/>}/>
                    <Route path="/dashboard" element={
                        UserType === 'Client' ?
                            <Dashboard/>
                            :
                            <>Freelancers Dashboard</>
                    }/>
                    <Route path="/jobapplication" element={<JobApplicationPage/>}/>
                    <Route path="*" element={<h1>404 page <Link to={'/dashboard'}>Dashboard</Link></h1>}/>
                    <Route path="/accountSettings" element={<AccountSettings/>}/>
                    <Route path="/notification" element={<NotificationPage/>}/>
                    =
                </Routes>
            </Router>

        </div>
    );
}


export default App;
