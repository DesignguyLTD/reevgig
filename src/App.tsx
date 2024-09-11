import "./App.css";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Header from "./stories/Header/header";
import Jobs from "./Pages/Jobs/Jobs";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import Profile from "./Pages/Profile/Profile";
import ProfileSave from "./Pages/Profile/profileSave";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Sidebar from "./stories/SideBar/sideBar";
import JobApplication from "./Components/DashBoard/JobApplication";
import JobApplicationPage from "./Pages/DashBoard/JobApplication/JobApplicationPage";


function App() {
  return (
    <div className="App">
      <Header auth={true} />
      return (
      <div className="App">
        <Header auth={true} />

        <Router basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <h1>
                  <header className="App-header">
                    <img
                      src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png"
                      className="App-logo"
                      alt="logo"
                    />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/onboarding" element={<OnBoarding />} />           
            <Route path="/jobs/*" element={<Jobs />} />        
            <Route path="/edit" element={<ProfileSave />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jobapplication" element={<JobApplicationPage />} />

          </Routes>
        </Router>
      </div>
  );
}

export default App;
