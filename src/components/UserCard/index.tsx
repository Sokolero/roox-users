import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./UserCard.module.scss";

export default function UserCard({ user }) {
  return (
    <li className={styles.card}>
      <div className={styles.row}>
        <div className={styles.label_name}>ФИО:</div>
        <div className={styles.name}>{user.name}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label_city}>город:</div>
        <div className={styles.city}>{ user.address.city }</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label_company}>компания:</div>
        <div className={styles.company}>{ user.company.name }</div>
        <NavLink to={`/${user.id}`} className={styles.details_link}>Подробнее</NavLink>
      </div>
    </li>
  )
}
