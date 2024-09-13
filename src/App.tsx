import "./App.css";
import AccountSettings from "./Pages/Dashboard/settings/account settings/accountSettings";
import DashboardRoutes from "./Pages/Dashboard";
import Header from "./stories/Header/header";
import Login from "./Pages/Onboarding/login/login";
import Notification from "./Pages/Dashboard/settings/notification/notification";
import Payment from "./Pages/Dashboard/planAndBillings/paymentCard/payment";
import React from "react";
import ResetPassword from "./Pages/Onboarding/resetPassword/resetPassword";
import Settings from "./Pages/Dashboard/settings/settings";
import SignUp from "./Pages/Onboarding/SignUp/signUp";

import {
    HashRouter as Router, Route, Routes,
    Navigate
} from "react-router-dom";


function App() {


    return (
        <div className="App">
            <Header auth={true} />

            <Router basename="/">
                <Routes>
                    <Route path="/" element={
                        <h1>
                            <header className="App-header">
                                <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                                    className="App-logo" alt="logo" />
                            </header>
                        </h1>}
                    />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/resetpassword" element={<ResetPassword />} />
                    <Route element={<DashboardRoutes />}>
                        <Route path="*" element={<Navigate to="/" />} />

                        <Route path="/planAndBillings" element={<Payment />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/settings/accountSettings" element={<AccountSettings />} />
                        <Route path="/settings/notification" element={<Notification />} />
                        <Route path="/settings/*" element={<Navigate to="/settings" />} />
                    </Route>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
