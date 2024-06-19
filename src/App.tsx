import React from 'react';
// import {
//     HashRouter as Router, Route, Routes
// } from "react-router-dom";
import './App.css';
import Header from "./stories/Header/header";
import Sidebar from "./playground/sidebat";

function App() {
    return (
        <div className="App">
            <Header auth={true}/>
            <Sidebar/>
            <header className="App-header">
                <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                     className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default App;
