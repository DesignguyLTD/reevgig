import React, {useState} from 'react';
import Sidebar from "../../../stories/SideBar/sideBar";
import style from "../../OverView/OverviewPage.module.css";
import JAStyles from "./JobApplicationPage.module.css";

type JobApplication = {
    id: number;
    name: string;
    role: string;
    jobType: string;
    salary: string;
    timeAgo: string;
    skills: string[];
    shortlisted: boolean;
};

const jobApplications: JobApplication[] = [
    {
        id: 1,
        name: 'Seyi Odediran',
        role: 'Technical Support Specialist',
        jobType: 'Part time',
        salary: '50k-55k',
        timeAgo: '29 mins ago',
        skills: ['Javascript', 'Hardware'],
        shortlisted: false,
    },
    {
        id: 2,
        name: 'Jane Doe',
        role: 'Frontend Developer',
        jobType: 'Full time',
        salary: '60k-65k',
        timeAgo: '2 hours ago',
        skills: ['React', 'TypeScript'],
        shortlisted: true,
    },

    {
        id: 3,
        name: 'Timi Abi',
        role: 'UI/Ux',
        jobType: 'Full time',
        salary: '60k-65k',
        timeAgo: '2 hours ago',
        skills: ['React', 'TypeScript'],
        shortlisted: true,
    },
    {
        id: 4,
        name: 'Dayo Marv',
        role: 'Full-Stack   Developer',
        jobType: 'Full time',
        salary: '60k-65k',
        timeAgo: '2 hours ago',
        skills: ['React', 'TypeScript'],
        shortlisted: true,
    },
];
const JobApplicationPage = () => {

    const [header, setHeader] = React.useState('All');


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

            <div>
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
                                    <div className={JAStyles.applicationsColumn2}>
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
                                    <div style={{width: '77%'}}>
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

const handleNav = () => {
    window.location.href = '#/applicantprofile';

}

const JobCard: React.FC<JobCardProps> = ({app, onToggleShortlist}) => {
    return (
        <div className={JAStyles.jobCard}>
            <div className={JAStyles.jobCardUserCtn}>
                <div className={JAStyles.jobCardUserPic}>
                    {/* Replace with dynamic user image if available */}
                    <img
                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728589725/Reev/10th%20oct/Group_18_Copy_2_dsynli.svg"
                        alt={`${app.name} Profile`}
                    />
                </div>
                <div className={JAStyles.jobCardUserData}>
                    <div className={JAStyles.jobCardUserDataText1}>{app.name}</div>
                    <div className={JAStyles.jobCardUserDataText2}>{app.role}</div>
                </div>
            </div>
            <div className={JAStyles.jobCardUserStatusCtn}>
                <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012510/Clock_neascs.svg"
                    alt="Clock"
                />
                <div className={JAStyles.jobCardUserStatusText}>
                    {app.jobType}
                </div>
                <div className={JAStyles.circle}></div>
                <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012510/CurrencyDollar_ndmngk.svg"
                    alt="Currency"
                />
                <div className={JAStyles.jobCardUserStatusText}>
                    {app.salary}
                </div>
                <div className={JAStyles.circle}></div>
                <img
                    src="https://res.cloudinary.com/dvjx9x8l9/image/upload/v1726012509/CalendarBlank_zupxlc.svg"
                    alt="Calendar"
                />
                <div className={JAStyles.jobCardUserStatusText}>
                    {app.timeAgo}
                </div>
            </div>
            <div className={JAStyles.jobCardUserSkillCtn}>
                <div className={JAStyles.jobCardUserSkill1Ctn}>
                    <div className={JAStyles.jobCardUserSkill1}>Skills</div>
                </div>
                {app.skills.map((skill, index) => (
                    <div key={index} className={JAStyles.jobCardUserSkill2}>
                        {skill}
                    </div>
                ))}
            </div>
            <div className={JAStyles.BtnCtn}>
                <img
                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1728665027/Reev/11th%20Oct/Button_cdcgav.svg"
                    alt="delete"
                    className={JAStyles.deleteIcon}
                    onClick={() => onToggleShortlist(app.id)}
                />
                <button
                    className={`${JAStyles.Btn} ${app.shortlisted ? JAStyles.shortlisted : ''}`}
                    onClick={app.shortlisted ? handleNav : () => onToggleShortlist(app.id)}
                >
                    {app.shortlisted ? 'View Profile' : 'Shortlist'}
                </button>
            </div>
        </div>
    );
};
export default JobApplicationPage;