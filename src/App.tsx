import "./App.css";

import {HashRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import Dashboard from "./Pages/DashBoard/Dashboard";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";
import LandingPage from "./Pages/LandingPage/LandingPage";


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

                </Routes>
            </Router>

        </div>
    );
};

export default App;
