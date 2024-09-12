import React from 'react';
import styles from './LandingPage.module.css';
import Header from "../../stories/Header/header";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import Search from "../../Components/LandingPage/Search/search";
import {string} from "prop-types";
import CardI from "../../stories/Cards/Card-I";

const LandingPage = () => {
    // cardData.js

    const cardData = [

        {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },
        {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },{
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        },

        {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }




    ];



    return (
        <>
            <Header auth={false}/>

            <div className={styles.mainCtn}>
                <div className={styles.heroCtnMain}>
                <div className={styles.heroCtn}>
                    <div className={styles.Ctn1}>
                        <div className={styles.heroText}>
                            The Hardware Marketplace for Creators & Innovators The Hardware Marketplace for Creators & Innovators
                        </div>
                        <div className={styles.heroSubText}>
                            Connect with top-tier freelance hardware engineers to bring your ideas to life.
                        </div>

                        <div className={styles.btn1}>
                            <ButtonII  size={'large'} primary={true} hasIcon={false} isLabelVisible={true} label={'Post a Job'} onClick={() => {}}/>
                        </div>
                    </div>

                    <div className={styles.Ctn2}>
                        <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093166/Reev/content_jj1uhc.svg" alt="heropics"/>

                        <div className={styles.btn2}>
                            <ButtonII size={'large'} primary={true} hasIcon={false} isLabelVisible={true} label={'Post a Job'} onClick={() => {}}/>
                        </div>
                    </div>


                </div>

                <div className={styles.SearchCtn}>
                    <Search onSearch={() => {}}/>
                </div>
                </div>

                <div className={styles.featuredJobCtn}>
                    <div className={styles.featuredJobWrapper}>
                        <div className={styles.featuredJobTop}>
                            <div className={styles.featuredJobTitle}>
                                Featured Jobs
                            </div>
                            <div className={styles.featuredJob}>
                                See all Jobs <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093161/Reev/arrow-right_letp7w.svg" alt="arrow-icon"/>
                            </div>
                        </div>
                        <div className={styles.featuredJobCard}>
                            {cardData.map((card, index) => (
                                <CardI
                                    key={index}
                                    profileImage={card.profileImage}
                                    companyName={card.companyName}
                                    timeFrame={card.timeFrame}
                                    mainSkill={card.mainSkill}
                                    amount={card.amount}
                                    time={card.time}
                                    skills={card.skills}
                                    skillSet={card.skillSet}
                                    text={card.text}

                                />
                            ))}
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
};

export default LandingPage;