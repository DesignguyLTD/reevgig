import React, { useState, useRef, useEffect } from 'react';
import styles from './paymentTable.module.css';

// src/models/TableRow.ts
export interface TableRow {
    id: number;
    clientName: string;
    project: string;
    price: string;
    PayoutDate: string;
    PaymentStatus: 'Paid' | 'Pending' | 'Withheld' | 'Reversed';
    OrderID: string;
}

// Sample data for the table
const data: TableRow[] = [
    { id: 1, clientName: 'Steven Terry', project: 'Embedded system circuit', price: '$800', PayoutDate: 'May 25, 2023', PaymentStatus: 'Paid', OrderID: '#15627' },
    { id: 2, clientName: 'Audrey Jones', project: 'Landing page', price: '$300', PayoutDate: 'Jun 20, 2023', PaymentStatus: 'Pending', OrderID: '#15627' },
    { id: 3, clientName: 'Molly Mills', project: 'Landing page', price: '$180', PayoutDate: 'July 13, 2023', PaymentStatus: 'Withheld', OrderID: '#15627' },
    { id: 4, clientName: 'Orlando Vesa', project: 'Landing page', price: '$920', PayoutDate: 'Dec 20, 2023', PaymentStatus: 'Reversed', OrderID: '#15627' },
    { id: 5, clientName: 'Brian Fischer', project: 'Landing page', price: '$200', PayoutDate: 'Mar 15, 2024', PaymentStatus: 'Reversed', OrderID: '#15627' },
];

const PaymentTable: React.FC = () => {
    const [openRowId, setOpenRowId] = useState<number | null>(null);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (id: number) => {
        setOpenRowId(prevId => (prevId === id ? null : id));
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenRowId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.ctn}>
            <table className={styles.tableCtn}>
                <thead className={styles.header}>
                <tr>
                    <th style={{ borderRadius: '6px 0 0 6px' }}>Client Name</th>
                    <th>Project</th>
                    <th>Price</th>
                    <th>Payout Date</th>
                    <th>Payment Status</th>
                    <th style={{ borderRadius: '0 6px 6px 0' }}>Order ID</th>
                </tr>
                </thead>
                <tbody className={styles.body}>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <div className={styles.info}>
                                {/* Optional profile image can be added here */}
                                <div>
                                    <div className={styles.clientName}>{row.clientName}</div>
                                    <div className={styles.clientOrder}>View order</div>
                                </div>
                            </div>
                        </td>
                        <td><div className={styles.project}>{row.project}</div></td>
                        <td><div className={styles.project}>{row.price}</div></td>
                        <td><div className={styles.project}>{row.PayoutDate}</div></td>
                        <td style={{ textAlign: 'center' }}>
                                <span className={`${styles['status-badge']} ${styles[`status-${row.PaymentStatus}`]}`}>
                                    {row.PaymentStatus}
                                </span>
                        </td>
                        <td className={styles.prog}>
                            <div className={styles.project}>
                                {row.OrderID}
                                <img
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleToggle(row.id)}
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/iconamoon_menu-kebab-vertical_khgrwt.svg"
                                    alt="more"
                                />
                            </div>
                            {openRowId === row.id && (
                                <div ref={dropdownRef} className={styles.MoreCtn}>
                                    <img
                                        src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/Polygon_2_y9a0mf.svg"
                                        alt="triansgle"
                                    />
                                    <div className={styles.MoreList}>
                                        <li className={styles.MoreListli1}>
                                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/document-download_xaeinf.svg" alt="report" />
                                            Download Invoice
                                        </li>
                                        <li className={styles.MoreListli2}>
                                            <img src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/marketeq_caution-sign-circle_k7hvfj.svg" alt="report" />
                                            Report Transaction
                                        </li>
                                    </div>
                                </div>
                            )}
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentTable;
