import React, {useState} from 'react';
import Sidebar from "../../../stories/SideBar/sideBar";
import style from "../../OverView/OverviewPage.module.css";
import OverviewPage from "../../OverView/OverviewPage";
import Profile from "../../Profile/Profile";
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
    }
];
const JobApplicationPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);


    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }




    const [applications, setApplications] = useState<JobApplication[]>(jobApplications);

    const toggleShortlist = (id: number) => {
        setApplications((prevApps) =>
            prevApps.map((app) =>
                app.id === id ? { ...app, shortlisted: !app.shortlisted } : app
            )
        );
    };

    const shortlistedApps = applications.filter((app) => app.shortlisted);
    const allApps = applications.filter((app) => !app.shortlisted);

    return (
        <div>
            <Sidebar logo={'/'} getSidebarState={getSidebarState}/>
            <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}>
                <div className={JAStyles.JobHeader}>
                    Job Application
                    <div className={JAStyles.jobApplicationsContainer}>
                        <div className={JAStyles.applicationsColumn}>
                            <h3>All Applications ({allApps.length})</h3>
                            {allApps.map((app) => (
                                <JobCard key={app.id} app={app} onToggleShortlist={toggleShortlist} />
                            ))}
                        </div>

                        <div className={JAStyles.applicationsColumn}>
                            <h3>Shortlisted ({shortlistedApps.length})</h3>
                            {shortlistedApps.map((app) => (
                                <JobCard key={app.id} app={app} onToggleShortlist={toggleShortlist} />
                            ))}
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

const JobCard: React.FC<JobCardProps> = ({ app, onToggleShortlist }) => {
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
                <p>Price: {app.priceRange}</p>
                <p>Applied: {app.appliedDate}</p>
                <a href="#" className={JAStyles.downloadCv}>
                    Download CV/Resume
                </a>
                <button className={JAStyles.declineRequest}>Decline Request</button>
                <button onClick={() => onToggleShortlist(app.id)}>
                    {app.shortlisted ? 'Remove from Shortlist' : 'Shortlist'}
                </button>
            </div>
        </div>
    );
};
export default JobApplicationPage;