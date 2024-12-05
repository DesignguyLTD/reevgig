import React, { useState } from "react";
import cloudImages from "../../../../assets";
import styles from "./paymentTransact.module.css";
import { Button } from "../../../../stories/Button-I/Button";

const PaymentTransact = () => {
    const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [viewTransactPage, setViewTransactPage] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage: number = 2;


    interface Transaction {
        name: string;
        desc: string;
        project: string;
        price: string;
        payoutDate: string;
        paymentStatus: string;
        order: string;
    }


    const toggleMenu = () => {
        setDownloadMenuOpen(!downloadMenuOpen);
    };

    // const handleDownload = () => {
    //     alert("Download initiated.");
    //     setDownloadMenuOpen(false);
    // };

    // const handleReport = () => {
    //     alert("Report action initiated.");
    //     setDownloadMenuOpen(false);
    // }

    const options = [];
    for (let i = 29; i >= 1; i--) {
        options.push(i);
    }

    const transactPerPage = [];
    for (let i = 9; i >= 1; i--) {
        transactPerPage.push(i);
    }

    const handleselectedDate = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedDate(event.target.value);
    };

    const handleTransactedPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setViewTransactPage(Number(event.target.value));
    };


    const transactions = [
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Paid', order: "#15267", downloadIcon: <img src={cloudImages.downloadMenu} alt="download" /> },
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Pending', order: "#15357" },
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Witheld', order: "#15453" },
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Reversed', order: "#15326" },
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Reversed', order: "#15568" },
        { name: 'Steven Terry', desc: "View order", project: "Embedded system circuit", price: "$800", payoutDate: "May 25, 2023", paymentStatus: 'Reversed', order: "#15546" },
    ];


    const totalPages: number = Math.ceil(transactions.length / itemsPerPage);

    // Get current page transactions
    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const indexOfNextItem: number = currentPage + 1;
    const currentTransactions: Transaction[] = transactions.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleAddMoneyClick = () => {
        alert("Redirecting you to add money page");
    };


    return (
        <div className={styles.ctn}>
            <div className={styles.walletBillingCtn}>
                <div className={styles.walletCtn}>
                    <div className={styles.addMoneySect}>
                        <div className={styles.wallet}>
                            <img src={cloudImages.wallet} alt="wallet" />
                        </div>
                        <button onClick={handleAddMoneyClick} className={styles.addMoneyBtn}>
                            <img src={cloudImages.add} alt="add icon" /> Add Money
                        </button>
                    </div>
                    <div className={styles.billingMethod}>
                        <h5>Wallet Balance</h5>
                        <h2 className={styles.walletPrice}>$53,009.89</h2>
                    </div>
                </div>
                <div className={styles.billingCtn}>
                    <div className={styles.addMoneySect}>
                        <div className={styles.levelUpIcon}>
                            <img src={cloudImages.levelUp} alt="level up icon" />
                        </div>
                        <button onClick={handleAddMoneyClick} className={styles.walletBtn}>
                            <img src={cloudImages.add} alt="add icon" /> Withdrawal
                        </button>
                    </div>
                    <div className={styles.billingMethod}>
                        <h5>Billing Method</h5>
                        <div className={styles.delCard}>
                            <h2 className={styles.cardNum}>1234 **** **** ****</h2>
                            <div>
                                <img src={cloudImages.delete} alt="delete icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.withdrawBtnCtn}>
                <Button imgLink={cloudImages.add} label="Withdraw" icon={true} className={styles.withdrawBtn} style={{ color: "#FEC200" }} />
            </div>
            <div className={styles.paymentAssurance}>
                <img src={cloudImages.warning} alt="warning icon" />
                <p className={styles.assuranceText}>Be rest assured that your payment is safe in your wallet till the project is completed</p>
                <img src={cloudImages.cross} alt="exit icon" />
            </div>
            <div className={styles.projectCtn}>
                <div className={styles.transactionDate}>
                    <p>Transactions</p>
                    <select value={selectedDate} onChange={handleselectedDate}>
                        <option value="" className={styles.targetedDate}>
                            Last 30 days
                        </option>
                        {options.map((option) => (
                            <option key={option} value={option} className={styles.selectionOption}>
                                Last {option} days
                            </option>
                        ))}
                    </select>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Client Name</th>
                            <th>Project</th>
                            <th>Price</th>
                            <th>Payout Date</th>
                            <th className={styles.paymentStatusCtn}>Payment Status</th>
                            <th>Order ID</th>
                            <th><div /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transact, index) => (
                            <tr key={index}>
                                <td className={styles.nameAndDesc}>
                                    <p>{transact.name}</p>
                                    <p className={styles.desc}>{transact.desc}</p>
                                </td>
                                <td>{transact.project}</td>
                                <td>{transact.price}</td>
                                <td>{transact.payoutDate}</td>
                                <td className={styles.paymentStatusCtn}>
                                    <div className={`${styles.paymentStatus} ${transact.paymentStatus === 'Paid' ? styles.paid : transact.paymentStatus === 'Pending' ? styles.pending : transact.paymentStatus === 'Witheld' ? styles.withheld : transact.paymentStatus === 'Reversed' ? styles.reversed : ""}`}>
                                        {transact.paymentStatus}
                                    </div>
                                </td>
                                <td>{transact.order}</td>
                                <td>
                                    <div className={styles.downloadIconContainer}>
                                        <img src={cloudImages.downloadMenu}
                                            alt="download icon"
                                            className={styles.downloadIcon}
                                            onClick={toggleMenu}
                                        />
                                        {/* {downloadMenuOpen && (
                                            <div className={styles.menu}>
                                                <p onClick={handleDownload}>Download Invoice</p>
                                                <p onClick={handleReport}>Report Transaction</p>
                                            </div>
                                        )} */}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.transactAndPaginationPages}>
                <div className={styles.transactionPage}>
                    <p>View</p>
                    <select className={styles.selectedTransactPage} value={viewTransactPage} onChange={handleTransactedPage}>
                        <option>
                            10
                        </option>
                        {transactPerPage.map((pages) => (
                            <option key={pages} value={pages}>
                                {pages}
                            </option>
                        ))}
                    </select>
                    <p>Transactions per page</p>
                </div>
                <div className={styles.paginationControls}>
                    <button className={styles.pageControlBtn} onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <img src={cloudImages.lesserThan} alt="previous page icon" />
                    </button>
                    <div className={styles.pageIndex}>
                        <div className={styles.currentpageIndex}>
                            {currentPage}
                        </div>
                        <div className={styles.nextpageIndex}>
                            {indexOfNextItem}
                        </div>
                    </div>
                    <button className={styles.pageControlBtn} onClick={handleNextPage} disabled={currentPage === totalPages}>
                        <img src={cloudImages.fwdArrow} alt="next page icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentTransact;