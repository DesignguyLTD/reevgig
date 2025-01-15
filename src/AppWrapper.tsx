import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import App from './App';
import {HelmetProvider} from "react-helmet-async";

const AppWrapper: React.FC = () => {
    return (
        <Router>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </Router>
    );
};

export default AppWrapper;
