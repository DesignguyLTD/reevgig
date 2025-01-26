import React, { useState } from "react";
import cloudImages from "../../../assets";
import styles from "./talent.module.css";

// import Sidebar from "../../../stories/SideBar/sideBar";
// import style from "../../../OverView/OverviewPage.module.css";

const talentInfos = [
    {
        name: "Freelancers Name", title: "I Design Circuits for Drones", tag: "Full time", level: "Beginner", price: "$ 50-55k", time: "29 mins ago"
    },
    {
        name: "Freelancers Name", title: "I Design Circuits for Drones", tag: "Full time", level: "Beginner", price: "$ 50-55k", time: "29 mins ago"
    },
    {
        name: "Freelancers Name", title: "I Design Circuits for Drones", tag: "Full time", level: "Beginner", price: "$ 50-55k", time: "29 mins ago"
    },
    {
        name: "Freelancers Name", title: "I Design Circuits for Drones", tag: "Full time", level: "Beginner", price: "$ 50-55k", time: "29 mins ago"
    },
    {
        name: "Freelancers Name", title: "I Design Circuits for Drones", tag: "Full time", level: "Beginner", price: "$ 50-55k", time: "29 mins ago"
    },
]

const Talent = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [viewTalentPage, setViewTalentPage] = useState<number>(10);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentPagination, setCurrentPagination] = useState<number>(1);
    const itemsPerPage: number = 2;

    interface TalentInfo {
        name: string;
        title: string;
        tag: string;
        price: string;
        level: string;
        time: string;
    }

    const [isSidebarOpen, setIsSidebarOpen] = React.useState<boolean>(false);
    const [currentPage, setCurrentPage] = React.useState<string>(
        localStorage.getItem('currentPage') || 'Overview'
    );

    const getSidebarState = (x: boolean): boolean => {
        setIsSidebarOpen(x);
        return x;
    }

    const getPage = (x: string): string => {
        setCurrentPage(x);
        localStorage.setItem('currentPage', x);
        return x;
    }

    const talentPerPage = [];
    for (let i = 9; i >= 1; i--) {
        talentPerPage.push(i);
    }


    const handleTalentPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setViewTalentPage(Number(event.target.value));
    };


    const totalPages: number = Math.ceil(talentInfos.length / itemsPerPage);

    // Get current page transactions
    const indexOfLastItem: number = currentPagination * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const indexOfNextItem: number = currentPagination + 1;
    const currentTalentInfo: TalentInfo[] = talentInfos.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPagination < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPagination > 1) {
            setCurrentPagination(currentPagination - 1);
        }
    };

    return (
        <div>
            {/* <Sidebar logo={'/'} getSidebarState={getSidebarState} getPage={getPage} /> */}
            {/* <div className={`${style.container} ${isSidebarOpen ? style.shifted : ''}`}> */}
            <div className={styles.ctn}>
                <h2 className={styles.talentHeading}>Saved Talents</h2>
                {talentInfos.map((info, id) =>
                    <div className={styles.talentCtn}>
                        <div className={styles.imgAndProfile}>
                            <img src={cloudImages.avatar} alt="avatar icon" width={35} height={35} />
                            <div className={styles.talentProfile}>
                                <p className={styles.name}>{info.name}</p>
                                <div className={styles.titleTagCtn}>
                                    <h3 className={styles.title}>{info.title}</h3>
                                    <div className={styles.tagCtn}>
                                        <p className={styles.tag}>{info.tag}</p>
                                    </div>
                                </div>
                                <div className={styles.levelPriceTimeCtn}>
                                    <p className={styles.level}>{info.level}</p>
                                    <p className={styles.price}>{info.price}</p>
                                    <div className={styles.calendarTime}>
                                        <img src={cloudImages.calendar} alt="calendar date" />
                                        <p>{info.time}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mob_btn}>
                            <button className={styles.remove}><img src={cloudImages.redExit} alt="red exit icon" /></button>
                            <button className={styles.viewProfile}><img src={cloudImages.arrowRight} alt="arrow right icon" /></button>
                        </div>
                        <div className={styles.desk_btn}>
                            <button className={styles.removeText}>Remove</button>
                            <button className={styles.viewProfileText}>View Profile <img src={cloudImages.arrowRight} alt="arrow right icon" /></button>
                        </div>
                    </div>
                )}
                <div className={styles.talentAndPaginationPages}>
                    <div className={styles.talentPage}>
                        <p>View</p>
                        <select className={styles.selectedTalentPage} value={viewTalentPage} onChange={handleTalentPage}>
                            <option>
                                10
                            </option>
                            {talentPerPage.map((pages) => (
                                <option key={pages} value={pages}>
                                    {pages}
                                </option>
                            ))}
                        </select>
                        <p>Talents per page</p>
                    </div>
                    <div className={styles.paginationControls}>
                        <button className={styles.pageControlBtn} onClick={handlePreviousPage} disabled={currentPagination === 1}>
                            <img src={cloudImages.lesserThan} alt="previous page icon" />
                        </button>
                        <div className={styles.pageIndex}>
                            <div className={styles.currentpageIndex}>
                                {currentPagination}
                            </div>
                            <div className={styles.nextpageIndex}>
                                {indexOfNextItem}
                            </div>
                        </div>
                        <button className={styles.pageControlBtn} onClick={handleNextPage} disabled={currentPagination === totalPages}>
                            <img src={cloudImages.fwdArrow} alt="next page icon" />
                        </button>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default Talent