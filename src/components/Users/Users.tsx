import * as React from "react";
import UserCard from "../UserCard";
import styles from "./Users.module.scss";


export default function Users({ users }) {
  return(
    <>
      <h1 className={styles.h1}>Список пользователей</h1>
      { users.status === "requesting" ? <div>Загрузка...</div> : null }
      { users.error ?  <div>{ users.error }</div> : null }
      <ul className={styles.users_list}>
        {
          users.users.map(user => <UserCard user={ user } key={user.id}/>)
        }
      </ul>
    </>
  )
}
