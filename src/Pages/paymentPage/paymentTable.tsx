import React, {useEffect, useRef, useState} from 'react';
import styles from './paymentTable.module.css';
import OverFlowMenu from "../../Components/HelperComponents/OverFlowMenu";

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
    {
        id: 1,
        clientName: 'Steven Terry',
        project: 'Embedded system circuit',
        price: '$800',
        PayoutDate: 'May 25, 2023',
        PaymentStatus: 'Paid',
        OrderID: '#15627'
    },
    {
        id: 2,
        clientName: 'Audrey Jones',
        project: 'Landing page',
        price: '$300',
        PayoutDate: 'Jun 20, 2023',
        PaymentStatus: 'Pending',
        OrderID: '#15627'
    },
    {
        id: 3,
        clientName: 'Molly Mills',
        project: 'Landing page',
        price: '$180',
        PayoutDate: 'July 13, 2023',
        PaymentStatus: 'Withheld',
        OrderID: '#15627'
    },
    {
        id: 4,
        clientName: 'Orlando Vesa',
        project: 'Landing page',
        price: '$920',
        PayoutDate: 'Dec 20, 2023',
        PaymentStatus: 'Reversed',
        OrderID: '#15627'
    },
    {
        id: 5,
        clientName: 'Brian Fischer',
        project: 'Landing page',
        price: '$200',
        PayoutDate: 'Mar 15, 2024',
        PaymentStatus: 'Reversed',
        OrderID: '#15627'
    },
];

const PaymentTable: React.FC = () => {
    const [openRowId, setOpenRowId] = useState<number | null>(null);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

    const handleToggle = (id: number, buttonRef: HTMLDivElement | null) => {
        if (buttonRef) {
            const rect = buttonRef.getBoundingClientRect();
            setMenuPosition({
                top: rect.bottom + window.scrollY, // Adjust for scrolling
                left: rect.left,
            });
        }
        setOpenRowId((prevId) => (prevId === id ? null : id));
    };

    const handleKeyToggleMenu = (event: React.KeyboardEvent, id: number, buttonRef: HTMLDivElement | null) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleToggle(id, buttonRef);
        }
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (!event.target) return;
            setOpenRowId(null);
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
                {data.map((row) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const buttonRef = useRef<HTMLDivElement | null>(null);

                    return (
                        <tr key={row.id}>
                            <td>
                                <div className={styles.info}>
                                    <div>
                                        <div className={styles.clientName}>{row.clientName}</div>
                                        <div className={styles.clientOrder}>View order</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className={styles.project}>{row.project}</div>
                            </td>
                            <td>
                                <div className={styles.project}>{row.price}</div>
                            </td>
                            <td>
                                <div className={styles.project}>{row.PayoutDate}</div>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                                    <span
                                        className={`${styles['status-badge']} ${styles[`status-${row.PaymentStatus}`]}`}
                                    >
                                        {row.PaymentStatus}
                                    </span>
                            </td>
                            <td className={styles.prog}>
                                <div className={styles.project}>
                                    {row.OrderID}
                                    <div
                                        onClick={() => handleToggle(row.id, buttonRef.current)}
                                        ref={buttonRef}
                                        tabIndex={0} // Makes it focusable
                                        role="button" // Improves semantics
                                        aria-expanded={openRowId === row.id}
                                        aria-label="More options"
                                        style={{ cursor: 'pointer' }}
                                        onKeyDown={(event) => handleKeyToggleMenu(event, row.id, buttonRef.current)}
                                    >
                                        <img
                                            style={{ cursor: 'pointer' }}
                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/iconamoon_menu-kebab-vertical_khgrwt.svg"
                                            alt="more"
                                        />
                                        <OverFlowMenu
                                            isOpen={openRowId === row.id}
                                            position={menuPosition}
                                            background={true}
                                        >
                                            <div className={styles.MoreCtn}>
                                                {/*<img*/}
                                                {/*    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/Polygon_2_y9a0mf.svg"*/}
                                                {/*    alt="triangle"*/}
                                                {/*/>*/}
                                                <div className={styles.MoreList}>
                                                    <li className={styles.MoreListli1}>
                                                        <img
                                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859248/Reev/2nd%20oct/document-download_xaeinf.svg"
                                                            alt="report"
                                                        />
                                                        Download Invoice
                                                    </li>
                                                    <li className={styles.MoreListli2}>
                                                        <img
                                                            src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1727859250/Reev/2nd%20oct/marketeq_caution-sign-circle_k7hvfj.svg"
                                                            alt="report"
                                                        />
                                                        Report Transaction
                                                    </li>
                                                </div>
                                            </div>
                                        </OverFlowMenu>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentTable;
