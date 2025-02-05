import React from 'react';
import Header from './stories/Header/header';
import Footer from './Components/LandingPage/Footer';

const GeneralLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Safely get the token from localStorage
    const tk: string = typeof window !== 'undefined' ? localStorage.getItem('REEVTK') ?? '' : '';

    return (
        <>
            <Header auth={!!tk} /> {/* Convert tk to a boolean for the auth prop */}
            <main style={{ minHeight: '80vh' }}> {/* Use CSS for spacing instead of <br /> */}
                {children}
            </main>
            <Footer />
        </>
    );
};

export default GeneralLayout;