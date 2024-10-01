import React from 'react';
import styles from './LandingPage.module.css';
import Header from "../../stories/Header/header";
import {ButtonII} from "../../stories/Button-II/ButtonII";
import Search from "../../Components/LandingPage/Search/search";
import CardI from "../../stories/Cards/Card-I";
import FAQ from "../../Components/LandingPage/FAQ/FAQComponent";
import Footer from '../../Components/LandingPage/Footer';

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
        }, {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }, {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }, {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }, {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }, {
            profileImage: 'https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg',
            companyName: 'Tech Solutions Inc.',
            timeFrame: '3 months',
            mainSkill: 'Web Development',
            amount: '$5000',
            time: 'Full-time',
            skills: 'Skills',
            skillSet: ['JavaScript', '3D Modelling'],
            text: 'Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt....',
        }, {
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

    const [isOpen, setIsOpen] = React.useState(false);

    const CTABtn = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <Header auth={true}/>

            <div className={styles.mainCtn}>
                <div className={styles.heroCtnMain}>
                    <div className={styles.heroCtn}>
                        <div className={styles.Ctn1}>
                            <div className={styles.heroText}>
                                The Hardware <br/> Marketplace  for<br/> Creators & Innovators
                            </div>
                            <div className={styles.heroSubText}>
                                Connect with top-tier freelance <br className={styles.br}/>hardware engineers <br className={styles.br2}/> to bring your ideas to life.
                            </div>
                            {!isOpen &&
                                <div className={styles.btn1}>
                                    <ButtonII size={'large'} primary={true} hasIcon={true} icon={'https://res.cloudinary.com/do5wu6ikf/image/upload/v1727781978/Reev/1st%20oct/Frame_1618869363_t6u1mi.svg'}
                                              isLabelVisible={true}
                                              label={'Explore Freelance Talents'} onClick={CTABtn}/>
                                </div>

                            }
                        </div>



                    </div>

                    {isOpen &&
                        <div className={styles.serachCtnMain} onClick={CTABtn}>
                            <div className={styles.serchTextCtn}>
                                <div className={styles.serchText1}>Decentralized Freelancing</div>
                                <div className={styles.serchText2}>No racial profiling, just business, <br/>safe transactions</div>
                            </div>
                            <div className={styles.SearchCtn}>
                                <Search onSearch={() => {
                                }}/>
                            </div>
                        </div>
                    }


                </div>

                <div className={styles.clientTalentCtn}>
                    <div className={styles.ClientsCtn}>
                        <div className={styles.client}>
                            <div className={styles.clientTextCtn}>
                                <div className={styles.clientHeader}>
                                    <div>For Clients</div>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726092969/Reev/Vector_no9ngc.svg"
                                        alt="underline"/></div>
                                <div>
                                    <div className={styles.clientText}>
                                        Find talent your way
                                    </div>
                                    <div className={styles.clientSubText}>
                                        Work with the largest network of independent professionals and get things
                                        done—from quick turnarounds to big transformations.
                                    </div>
                                </div>
                            </div>
                            <img className={styles.clientImg}
                                 src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726092950/Reev/Group_1171275874_nfbbrx.svg"
                                 alt="clientImg"/>
                        </div>
                        <div className={styles.clientSteps}>
                            <div className={styles.stepList}>
                                <div className={styles.stepCtn}>
                                    <div className={styles.number}>1</div>
                                    <div className={styles.stepText}>Post a job and hire a professional</div>
                                </div>
                                <div className={styles.stepCtn}>
                                    <div className={styles.number}>2</div>
                                    <div className={styles.stepText}>Browse and buy some projects</div>
                                </div>
                                <div className={styles.stepCtn}>
                                    <div className={styles.number}>3</div>
                                    <div className={styles.stepText} style={{color: ' rgb(254, 194, 0)'}}>Let us help
                                        you find the right talent
                                    </div>
                                </div>
                            </div>
                            <div className={styles.clientBtn}>
                                Find Talents
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.featuredJobCtn}>
                    <div className={styles.featuredJobWrapper}>
                        <div className={styles.featuredJobTop}>
                            <div className={styles.featuredJobTitle}>
                                Featured Jobs
                            </div>
                            <div className={styles.featuredJob}>
                                See all Jobs <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093161/Reev/arrow-right_letp7w.svg"
                                alt="arrow-icon"/>
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

                <div className={styles.clientTalentCtn}>
                    <div className={styles.talentCtn}>

                        <img className={styles.talentImg}
                             src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093085/Reev/young_man_and_woman_looking_at_laptop_together_elqkop.svg"
                             alt="talentimg"/>

                        <div className={styles.talentComp}>
                            <div className={styles.talentTextCtn}>
                                <div className={styles.talentHeader}>
                                    <div>For Talent</div>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726092989/Reev/Vector2_pirfgx.svg"
                                        alt="underline"/></div>
                                <div>
                                    <div className={styles.talentText}>
                                        Find a great Job Easily!
                                    </div>
                                    <div className={styles.talentSubText}>
                                        Meet clients you’re excited to work with and take
                                        your career or business to new heights.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.talentStep}>
                                <div className={styles.talentStepList}>
                                    <div className={styles.talentStepCtn}>
                                        <div className={styles.talentNumber}>1</div>
                                        <div className={styles.talentStepText}>Find opportunities for every stage of
                                            your freelance career
                                        </div>
                                    </div>
                                    <div className={styles.talentStepCtn}>
                                        <div className={styles.talentNumber}>2</div>
                                        <div className={styles.talentStepText}>Control when, where, and how you work
                                        </div>
                                    </div>
                                    <div className={styles.talentStepCtn}>
                                        <div className={styles.talentNumber}>3</div>
                                        <div className={styles.talentStepText}>Explore different ways to earn</div>
                                    </div>

                                </div>
                                <div className={styles.talentBtn}>
                                    Find Opportunities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: '30px'}} className={styles.featuredJobCtn}>
                    <div className={styles.featuredJobWrapper}>
                        <div className={styles.featuredJobTop}>
                            <div className={styles.featuredJobTitle}>
                                <span style={{color: 'white'}}>Latest</span> Jobs Open
                            </div>
                            <div className={styles.featuredJob}>
                                See all Jobs <img
                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1726093161/Reev/arrow-right_letp7w.svg"
                                alt="arrow-icon"/>
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

                <div>
                    <FAQ/>
                </div>

                    {/*<Footer/>*/}

            </div>
            <div className={styles.footer}>
                {/*<Footer/>*/}
            </div>
        </>
    );
};

export default LandingPage;