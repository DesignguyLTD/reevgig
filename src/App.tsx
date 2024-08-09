import "./App.css";

import { Route, HashRouter as Router, Routes } from "react-router-dom";

import Header from "./stories/Header/header";
import Login from "./Pages/Onboarding/login/login";
import Profile from "./Pages/Profile/Profile";
import ProfileSave from "./Pages/Profile/profileSave";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
<<<<<<< HEAD
import SignUp from "./Pages/Onboarding/SignUp/signUp";
=======
import OnBoarding from "./Pages/Onboarding/onboarding/onBoarding";


>>>>>>> 742962e5b16ebafaf736b7fad513d363d7908ae4

function App() {
  return (
    <div className="App">
      <Header auth={true} />

<<<<<<< HEAD
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
                </header>
              </h1>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/save" element={<ProfileSave />} />
        </Routes>
      </Router>
    </div>
  );
=======

    return (
        <div className="App">
            <Header auth={true}/>

            <Router basename="/">
                <Routes>
                    <Route path="/"  element={
                        <h1>
                            <header className="App-header">
                            <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                                 className="App-logo" alt="logo"/>
                            </header>
                        </h1>}
                    />
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/resetpassword" element={<ResetPassword/>}/>
                    <Route path="/onboarding" element={<OnBoarding/>}/>
                </Routes>
            </Router>

        </div>
    );
>>>>>>> 742962e5b16ebafaf736b7fad513d363d7908ae4
}

export default App;
