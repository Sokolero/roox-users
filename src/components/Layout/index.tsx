import * as React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Dashboard";
import styles from "./Layout.module.scss";

export default function Layout() {
  return(
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.dashboardContainer}>
          <Dashboard />
        </div>
        <div className={styles.mainContainer}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
