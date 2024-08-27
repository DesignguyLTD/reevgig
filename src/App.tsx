import React from 'react';
import './App.css';
import Header from "./stories/Header/header";
import {
    HashRouter as Router, Route, Routes,
    Navigate
} from "react-router-dom";
import SignUp from "./Pages/Onboarding/SignUp/signUp";
import Login from "./Pages/Onboarding/login/login";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import Settings from "./Pages/Dashboard/settings/settings";
import AccountSettings from "./Pages/Dashboard/settings/account settings/accountSettings";
import Notification from './Pages/Dashboard/settings/notification/notification';
import DashboardRoutes from './Pages/Dashboard';


function App() {


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
                    <Route element={<DashboardRoutes />}>
                    <Route path="*" element={<Navigate to="/" />}/>

                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/settings/accountSettings" element={<AccountSettings/>}/>
                    <Route path="/settings/notification" element={<Notification/>}/>
                    <Route path="/settings/*" element={<Navigate to="/settings" />}/>
                    </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
