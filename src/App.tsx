import "./App.css";
import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";
// import Footer from "./LandingPage/Footer";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import Dashboard from "./Pages/DashBoard/Dashboard";
import LandingPage from "./Pages/LandingPage/LandingPage";
import CreateUser from "./__tests__/play";


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
                    <Route path="/createuser" element={<CreateUser/>}/>
                </Routes>
            </Router>

        </div>
    );
};


export default App;
