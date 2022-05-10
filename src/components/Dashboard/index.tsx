import * as React from "react";
import Button from "../Button";
import styles from "./Dashboard.module.scss";

export default function Dashboard() {
  return(
    <>
      <div className={styles.row}>сортировка</div>
      <div className={styles.row}>
        <Button styled="button">по городу</Button>
      </div>
      <div className={styles.row}>
        <Button styled="button">по компании</Button>
      </div>
    </>
  )
}
