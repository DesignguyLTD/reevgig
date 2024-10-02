import React from 'react';
import style from "./OverviewPage.module.css";
import JobApplication from "../../Components/DashBoard/JobApplication";
import ResponsiveTable from '../DashBoard/playGround';


const OverviewPage = () => {
    const [header, setHeader] = React.useState('Overview');

    const handleHeader = (value: string) => {
        setHeader(value);
    }
    return (
        <div>
            {/*<div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>*/}
            <div className={style.headerBtnCont}>
                <div className={style.headerBtn}>
                    <div className={style.Btn}>
                        <div className={style.header} style={{
                            color: header === 'Overview' ? 'black' : '',
                            borderBottom: header === 'Overview' ? 'solid 2px black' : ''
                        }} onClick={() => handleHeader(('Overview'))}>Overview
                        </div>
                        <div className={style.header} style={{
                            color: header === 'Job' ? 'black' : '',
                            borderBottom: header === 'Job' ? 'solid 2px black' : ''
                        }} onClick={() => handleHeader(('Job'))}>Job Applications
                        </div>
                    </div>
                    <div className={style.timeFrame}>
                        Last 30 days <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725753843/Reev/Icon_Stroke_d2hmut.svg"
                        alt="arrowDown"/>
                    </div>
                </div>
                <br/>
                <div>
                    {header === 'Overview' &&
                        <div className={style.overview}>
                            <div className={style.EstiActiveCont}>
                                <div className={style.EstimateCont}>
                                    <div className={style.Estimate}>
                                        <img
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752189/Reev/Frame_1171275861_qbbiiv.svg"
                                            alt="earn"/>
                                        <div className={style.earnText}>Total money earned</div>
                                        <div className={style.earnValue}>$53,00989</div>
                                        <div className={style.increaseText}><img
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752188/Reev/Frame_1171275867_mjlidk.svg"
                                            alt="increase"/>12% increase from last month
                                        </div>
                                    </div>
                                    <div className={style.Estimate} style={{background: 'rgba(240, 194, 116, 0.15)'}}>
                                        <img
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752188/Reev/client_ibnny6.svg"
                                            alt="earn"/>
                                        <div className={style.earnText}>Clients</div>
                                        <div className={style.earnValue}>101 <span>/120</span></div>
                                        <div className={style.increaseText}>
                                            <img
                                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752188/Reev/Frame_1171275867_mjlidk.svg"
                                                alt="increase"/>2% increase from last month
                                        </div>
                                    </div>
                                </div>
                                <div className={style.ActiveProjectCont}>
                                    <div className={style.ActiveProject}>
                                        <div className={style.ActiveProjectText}>Active Projects <span className={style.ActiveProjectSpan}>(12)</span></div>
                                        <div className={style.ActiveProjectBtn}>
                                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725752188/Reev/Add_kzvi5c.svg" alt="Add"/>
                                            Add New Project
                                        </div>
                                    </div>
                                    <ResponsiveTable/>
                                </div>

                            </div>
                            {/*<div className={style.ProfileCont}>*/}
                            {/*    <ProfileNav/>*/}
                            {/*</div>*/}
                        </div>
                    }

                    {header === 'Job' && <div className={style.JobCtn}>
                        <JobApplication/>
                        <JobApplication/>
                        <JobApplication/>
                        <JobApplication/>
                    </div>
                    }

                </div>

            </div>
        </div>

        // </div>
    );
};

export default OverviewPage;