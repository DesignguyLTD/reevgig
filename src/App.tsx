import React from 'react';
import './App.css';
import Header from "./stories/Header/header";
// import {
//     HashRouter as Router, Route, Routes
// } from "react-router-dom";



function App() {

    const handleOtpComplete = (otp: string) => {
        console.log('Entered OTP:', otp);
        // Handle the OTP here (e.g., verify it)
    };
    return (
        <div className="App">
            <Header auth={false}/>
            <header className="App-header">
                <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                     className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default App;
