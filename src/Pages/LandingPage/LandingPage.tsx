import React from 'react';
import styles from './LandingPage.module.css';
import Header from "../../stories/Header/header";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import Search from "../../Components/LandingPage/Search/search";
import {string} from "prop-types";

const LandingPage = () => {
    return (
        <>
            <Header auth={false}/>

            <div className={styles.mainCtn}>
                <div className={styles.heroCtn}>
                    <div className={styles.Ctn1}>
                        <div className={styles.heroText}>
                            The Hardware Marketplace for Creators & Innovators The Hardware Marketplace for Creators & Innovators
                        </div>
                        <div className={styles.heroSubText}>
                            Connect with top-tier freelance hardware engineers to bring your ideas to life.
                        </div>

                        <div className={styles.btn1}>
                            <ButtonII primary={true} hasIcon={false} isLabelVisible={true} label={'Post a Job'} onClick={() => {}}/>
                        </div>
                    </div>

                    <div className={styles.Ctn2}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093166/Reev/content_jj1uhc.svg" alt="heropics"/>

                        <div className={styles.btn2}>
                            <ButtonII primary={true} hasIcon={false} isLabelVisible={true} label={'Post a Job'} onClick={() => {}}/>
                        </div>
                    </div>


                </div>

                {/*<div className={styles.SearchCtn}>*/}
                {/*    <Search onSearch={() => {}}/>*/}
                {/*</div>*/}

            </div>

        </>
    );
};

export default LandingPage;