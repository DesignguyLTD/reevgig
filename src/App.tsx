import "./App.css";
import AccountSettings from "./Pages/Dashboard/settings/account settings/accountSettings";
import Notification from "./Pages/Dashboard/settings/notification/notification";
import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
// import Footer from "./LandingPage/Footer";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";

import LandingPage from "./Pages/LandingPage/LandingPage";
import JobApplicationPage from "./Pages/Dashboard/JobApplication/JobApplicationPage";
import Dashboard from "./Pages/Dashboard/Dashboard";


function App() {
    return (
        <div className="App">
            <Router basename="/">
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/resetpassword" element={<ResetPassword/>}/>
                    <Route path="/onboarding" element={<OnBoarding/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/jobapplication" element={<JobApplicationPage/>}/>
                    <Route path="*" element={<h1>404 page <Link to={'/dashboard'}>Dashboard</Link></h1>}/>
                    <Route path="/accountSettings" element={<AccountSettings/>}/>
                    <Route path="/notification" element={<Notification/>}/>
=
                </Routes>
            </Router>

        </div>
    );
}


export default App;
