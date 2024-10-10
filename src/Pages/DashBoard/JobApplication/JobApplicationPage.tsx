import React, {useState} from 'react';
import Sidebar from "../../../stories/SideBar/sideBar";
import style from "../../OverView/OverviewPage.module.css";
import JAStyles from "./JobApplicationPage.module.css";


type JobApplication = {
    id: number;
    name: string;
    role: string;
    status: string;
    priceRange: string;
    appliedDate: string;
    shortlisted: boolean;
};

const jobApplications: JobApplication[] = [
    {
        id: 1,
        name: 'Enny4656',
        role: 'Technical Support Specialist',
        status: 'FULL-TIME',
        priceRange: '$20,000 - $25,000/hr',
        appliedDate: 'Jan 23, 2024',
        shortlisted: false,
    },
    {
        id: 2,
        name: 'Akin125',
        role: 'Technical Support Specialist',
        status: 'FULL-TIME',
        priceRange: '$20,000 - $25,000/hr',
        appliedDate: 'Jan 23, 2024',
        shortlisted: true,
    },
    {
        id: 3,
        name: 'Seyi123',
        role: 'Technical Support Specialist',
        status: 'FULL-TIME',
        priceRange: '$20,000 - $25,000/hr',
        appliedDate: 'Jan 23, 2024',
        shortlisted: false,
    },
    {
        id: 4,
        name: 'Twin233',
        role: 'Technical Support Specialist',
        status: 'FULL-TIME',
        priceRange: '$20,000 - $25,000/hr',
        appliedDate: 'Jan 23, 2024',
        shortlisted: true,
    }
];
const JobApplicationPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );
    const [header, setHeader] = React.useState('All');
    const UserType  = localStorage.getItem('userType') ? localStorage.getItem('userType') : 'Client';

    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }


    const [applications, setApplications] = useState<JobApplication[]>(jobApplications);

    const toggleShortlist = (id: number) => {
        setApplications((prevApps) =>
            prevApps.map((app) =>
                app.id === id ? {...app, shortlisted: !app.shortlisted} : app
            )
        );
    };

    const shortlistedApps = applications.filter((app) => app.shortlisted);
    const allApps = applications.filter((app) => !app.shortlisted);
    const handleHeader = (value: string) => {
        setHeader(value);
    }
    return (
        <div>
            <Sidebar UserType={UserType} logo={'/'} getSidebarState={getSidebarState} getPage={getPage}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                <div className={JAStyles.JobHeaderText}>
                    Job Application
                </div>
                <div className={JAStyles.JobHeader}>
                    <div className={JAStyles.jobApplicationsContainer}>
                        <div className={JAStyles.applicationsColumn}>

                            <div className={JAStyles.overAllHeaderCtn}>
                                <div className={JAStyles.overAllHeaderTextCtn}>
                                    <div className={JAStyles.overAllHeaderText} style={{
                                        color: header === 'All' ? 'black' : '',
                                        borderBottom: header === 'All' ? 'solid 2px black' : ''
                                    }} onClick={() => handleHeader(('All'))}
                                    >All Applications ({allApps.length})</div>
                                    <div  className={JAStyles.overAllHeaderText}
                                          style={{
                                              color: header === 'shortlistedApps' ? 'black' : '',
                                              borderBottom: header === 'shortlistedApps' ? 'solid 2px black' : ''
                                          }} onClick={() => handleHeader(('shortlistedApps'))}
                                    >Shortlisted ({shortlistedApps.length})</div>
                                </div>
                                <div  className={JAStyles.overAllHeaderSort}>
                                    Sort <img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455544/Reev/27th%20Sept%202024/vuesax_bold_arrow-down_lbstcw.svg"
                                    alt="arrowDown"/>
                                </div>
                            </div>

                            {/*All Application*/}
                            {header === 'All' && (
                                <div>
                                    <div  className={JAStyles.allAppsHeaderCtn}>
                                        <div>
                                            <div className={JAStyles.overAllHeaderText}>All Applications ({allApps.length})</div>
                                        </div>
                                        <div className={JAStyles.overAllHeaderSort}>
                                            Sort<img
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455544/Reev/27th%20Sept%202024/vuesax_bold_arrow-down_lbstcw.svg"
                                            alt="arrowDown"/>
                                        </div>
                                    </div>

                                    {allApps.map((app) => (
                                        <div>

                                            <JobCard key={app.id} app={app} onToggleShortlist={toggleShortlist}/>
                                            <br/>
                                        </div>

                                    ))}

                                </div>
                            )}

                            {/*shortlisted mobile*/}
                            <div className={JAStyles.controlScreenDisplay1}>
                                { header === 'shortlistedApps' && (
                                    <div className={JAStyles.applicationsColumn}>
                                        <div>
                                            <div  className={JAStyles.allAppsHeaderCtn}>
                                                <div>
                                                    <div  className={JAStyles.overAllHeaderText}>Shortlisted ({shortlistedApps.length})</div>
                                                </div>
                                                <div  className={JAStyles.overAllHeaderSort}>
                                                    Sort<img
                                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455544/Reev/27th%20Sept%202024/vuesax_bold_arrow-down_lbstcw.svg"
                                                    alt="arrowDown"/>
                                                </div>
                                            </div>
                                        </div>
                                        {shortlistedApps.map((app) => (
                                            <div  >

                                                <JobCard key={app.id} app={app} onToggleShortlist={toggleShortlist}/>

                                                <br/>
                                            </div>
                                        ))}
                                    </div>

                                )}
                            </div>

                        </div>

                        {/*shortlisted tab, desktop*/}

                        <div className={JAStyles.controlScreenDisplay2}>
                            {/*{ header === 'shortlistedApps' && (*/}
                                <div className={JAStyles.applicationsColumn}>
                                    <div>
                                        <div  className={JAStyles.allAppsHeaderCtn}>
                                            <div>
                                                <div  className={JAStyles.overAllHeaderText}>Shortlisted ({shortlistedApps.length})</div>
                                            </div>
                                            <div  className={JAStyles.overAllHeaderSort}>
                                                Sort<img
                                                src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727455544/Reev/27th%20Sept%202024/vuesax_bold_arrow-down_lbstcw.svg"
                                                alt="arrowDown"/>
                                            </div>
                                        </div>
                                    </div>
                                    {shortlistedApps.map((app) => (
                                        <div >

                                            <JobCard key={app.id} app={app} onToggleShortlist={toggleShortlist}/>

                                            <br/>
                                        </div>
                                    ))}
                                </div>

                            {/*// )}*/}
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
};

type JobCardProps = {
    app: JobApplication;
    onToggleShortlist: (id: number) => void;
};

const JobCard: React.FC<JobCardProps> = ({app, onToggleShortlist}) => {
    return (
        <div className={JAStyles.jobCard}>
            <div className={JAStyles.header}>
                <img
                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg" // Update with the correct path to the user's profile image
                    alt={app.name}
                    className={JAStyles.profileImage}
                />
                <div>
                    <div className={JAStyles.nameText}>{app.name}</div>
                    <span className={JAStyles.experienceLevel}>Experience Level</span>
                </div>
            </div>
            <div className={JAStyles.jobInfo}>
                <p className={JAStyles.role}>{app.role}</p>
                <span className={`${JAStyles.status} ${JAStyles.fullTime}`}>
                   {app.status}
                </span>
                <p className={JAStyles.p}>Price: {app.priceRange}</p>
                <p className={JAStyles.p}>Applied: {app.appliedDate}</p>
                <a href="#/jobapplication" className={JAStyles.downloadCv}>
                    Download CV/Resume <img
                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993475/Reev/material-symbols-light_download_s4i16q.svg"
                    alt="Download CV"/>
                </a>

                <br/>
                <div className={JAStyles.BtnCtn}>
                    <div className={JAStyles.declineRequest}>Decline Request</div>
                    <button className={JAStyles.btn} onClick={() => onToggleShortlist(app.id)}>
                        {!app.shortlisted ? 'Shortlist' : 'View Profile'}<img
                        src='https://res.cloudinary.com/do5wu6ikf/image/upload/v1725902025/Reev/arrow-right_bsh2zk.svg'
                        alt="Icon"/>
                    </button>

                </div>

            </div>
        </div>
    );
};
export default JobApplicationPage;