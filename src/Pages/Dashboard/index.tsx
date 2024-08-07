import React from "react"
import Sidebar from "../../stories/SideBar/sideBar"
import { Outlet } from "react-router-dom"
import styles from "./index.module.css"

const DashboardRoutes: React.FC = () => {
    return (
        <div>
            <div className={styles.sidebarCollapse}>
                <Sidebar collapse={false} />
            </div>
            <Outlet />
        </div>
    )
}

export default DashboardRoutes