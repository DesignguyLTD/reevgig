import React, {useState} from "react";

import JobBrief from "./JobBrief";
import JobSkills from "./JobSkills";
import JobTimeline from "./JobTimeline";
import {Link} from "react-router-dom";
import styles from "./jobs.module.css";

export default function Jobs() {
    const [activeComponent, setActiveComponent] = useState("jobs_brief");

    const renderComponent = () => {
        switch (activeComponent) {
            case "jobs_brief":
                return <JobBrief/>;
            case "jobs_timeline":
                return <JobTimeline/>;
            case "jobs_skills":
                return <JobSkills/>;
            default:
                return <JobBrief/>;
        }
    };


    return (
        <div className={styles.cover_all}>
            <div className={styles.overall_container}>
                <p className={styles.job}> Post a Project</p>
                <div className={styles.nav_container}>
                    <Link
                        to="#"
                        className={styles.nav_links}
                        onClick={() => setActiveComponent("jobs_brief")}>
                        <div className={styles.nav_numbers}>1</div>
                        <div>Share Brief Description</div>
                    </Link>
                    <Link
                        to="#"
                        onClick={() => setActiveComponent("jobs_timeline")}
                        className={styles.nav_links}>
                        <div className={styles.nav_numbers}>2</div>
                        <div>Add timeline and Budge</div>
                    </Link>
                    <Link
                        to="#"
                        className={styles.nav_links}
                        onClick={() => setActiveComponent("jobs_skills")}>
                        <div className={styles.nav_numbers}>3</div>
                        <div>Skills and Requirements</div>
                    </Link>
                </div>
                <div className={styles.component_container}>
                    {renderComponent()} {/* Render the active component */}
                </div>
            </div>
        </div>
    );
}
