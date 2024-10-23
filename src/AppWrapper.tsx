import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';

const AppWrapper: React.FC = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

export default AppWrapper;
