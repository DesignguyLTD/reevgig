import "./App.css";

import { Link, Route, HashRouter as Router, Routes } from "react-router-dom";

import Dashboard from "./Pages/DashBoard/Dashboard";
import { FullSlide } from "./stories/Fullslider/fullSlide";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";

// import Footer from "./LandingPage/Footer";

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/onboarding" element={<OnBoarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobapplication" element={<JobApplicationPage />} />
          <Route
            path="*"
            element={
              <h1>
                404 page <Link to={"/dashboard"}>Dashboard</Link>
              </h1>
            }
          />
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
