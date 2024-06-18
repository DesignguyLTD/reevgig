import React from 'react';
import './App.css';
import Header from "./stories/Header/header";

function App() {
    return (
        <div className="App">
            <Header auth={true}/>
            <header className="App-header">
                <img src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1715619760/Reev/reev_nu0qvs.png'
                     className="App-logo" alt="logo"/>
            </header>
        </div>
    );
}

export default App;