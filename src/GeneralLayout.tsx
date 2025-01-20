import React from 'react';
import Header from "./stories/Header/header";
import Footer from "./Components/LandingPage/Footer";


const GeneralLayout: React.FC<{ children: React.ReactNode }> = ({children}) => {

    return (
        <div >
            <Header auth={false}/>
            <div>
                {children}
            </div>
            <Footer />

        </div>
    );
};

export default GeneralLayout;
