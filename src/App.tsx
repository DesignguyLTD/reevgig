import "./App.css";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Header from "./stories/Header/header";
import Login from "./Pages/Onboarding/login/login";
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";
import Profile from "./Pages/Profile/Profile";
import ProfileSave from "./Pages/Profile/profileSave";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Sidebar from "./stories/SideBar/sideBar";



function App() {


    return (
        <div className="App">
            {/**/}
            {/*<Sidebar/>*/}

            <Router basename="/">
                <Routes>
                    <Route path="/"  element={
                        <>
                            <Header auth={true}/>
                            <h1>
                                <header className="App-header">
                                    <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                                         className="App-logo" alt="logo"/>
                                </header>
                            </h1>
                        </>
                        }
                    />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/onboarding" element={<OnBoarding />} />
            <Route path="/edit" element={<ProfileSave />} />
            <Route path="/saved" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />

          </Routes>
        </Router>
      </div>
  );
}

export default App;
