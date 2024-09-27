// src/components/ResponsiveTable.tsx
import React from 'react';
import styles from './playGround.module.css'


// src/models/TableRow.ts
export interface TableRow {
    id: number;
    clientName: string;
    project: string;
    price: string;
    deliveredIn: string;
    status: 'Completed' | 'Delayed' | 'Overdue' | 'In progress';
    progress: number; // Progress as a percentage (0-100)
}


// Sample data for the table
const data: TableRow[] = [
    {
        id: 1,
        clientName: 'Steven Terry',
        project: 'Embedded system circuit',
        price: '$800',
        deliveredIn: 'May 25, 2023',
        status: 'Completed',
        progress: 100
    },
    {
        id: 2,
        clientName: 'Audrey Jones',
        project: 'Landing page',
        price: '$300',
        deliveredIn: 'Jun 20, 2023',
        status: 'Delayed',
        progress: 35
    },
    {
        id: 3,
        clientName: 'Molly Mills',
        project: 'Landing page',
        price: '$180',
        deliveredIn: 'July 13, 2023',
        status: 'Overdue',
        progress: 68
    },
    {
        id: 4,
        clientName: 'Orlando Vesa',
        project: 'Landing page',
        price: '$920',
        deliveredIn: 'Dec 20, 2023',
        status: 'Completed',
        progress: 100
    },
    {
        id: 5,
        clientName: 'Brian Fischer',
        project: 'Landing page',
        price: '$200',
        deliveredIn: 'Mar 15, 2024',
        status: 'In progress',
        progress: 50
    },
];

const ResponsiveTable: React.FC = () => {
    return (
        <div className={styles.ctn}>
            <table className={styles.tableCtn}>
                <thead className={styles.header}>
                <tr>
                    <th style={{borderRadius: '6px 0 0 6px'}}>Client Name</th>
                    <th>Project</th>
                    <th>Price</th>
                    <th>Delivered in</th>
                    <th>Status</th>
                    <th style={{borderRadius: '0 6px 6px 0'}}>Progress</th>
                </tr>
                </thead>
                <tbody className={styles.body}>
                {data.map((row) => (
                    <tr key={row.id}>
                        <td>
                            <div className={styles.info}>
                                <img
                                    src="https://res.cloudinary.com/do5wu6ikf/image/upload/v1725993477/Reev/Group_28_e9ifn2.svg" // Update with the correct path to the user's profile image

                                    className="avatar"/>
                                <div>
                                    <div className={styles.clientName}>{row.clientName}</div>
                                    <div className={styles.clientOrder}>View order</div>
                                </div>
                            </div>
                        </td>
                        <td>{row.project}</td>
                        <td className='width'>{row.price}</td>
                        <td>{row.deliveredIn}</td>
                        <td>
                            {/*             className={`status-badge ${row.status.toLowerCase().replace(' ', '-')}`}*/}
                            <span
                                className={`${styles['status-badge']} ${styles[`status-${row.status.toLowerCase().replace(' ', '-')}`]}`}>
                  {row.status}
                </span>
                        </td>
                        <td className={styles.prog}>
                            <div
                                className={`${styles.progressCircle} ${styles[`${row.status.toLowerCase().replace(' ', '-')}`]}`}>
                                <svg>
                                    <circle cx="25" cy="25" r="18"></circle>
                                    <circle cx="25" cy="25" r="18"
                                            style={{strokeDashoffset: `calc(82 - (82 * ${row.progress}) / 100)`}}></circle>
                                </svg>
                                <span>{row.progress}%</span>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResponsiveTable;
