import React from 'react';
import './App.css';
import Header from "./stories/Header/header";
import {
    HashRouter as Router, Route, Routes
} from "react-router-dom";
import SignUp from "./Pages/SignUp/signUp";
import Login from "./Pages/login/login";



function App() {


    return (
        <div className="App">
            <Header auth={false}/>

            <Router basename="/">
                <Routes>
                    <Route path="/" element={
                        <h1>
                            <header className="App-header">
                            <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                                 className="App-logo" alt="logo"/>
                            </header>
                        </h1>}
                    />
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </Router>

        </div>
    );
}

export default App;
