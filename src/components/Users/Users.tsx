import * as React from 'react';
import UserCard from '../UserCard';
import { IUser } from '../../models';
import styles from './Users.module.scss';

interface Users {
  users: Array<IUser>;
  status: string;
  error: string;
  filter: string;
}

interface UsersProps {
  users: Users;
}

export default function Users({ users }: UsersProps) {
  return (
    <>
      <h1 className={styles.h1}>Список пользователей</h1>
      { users.status === 'requesting' ? <div>Загрузка...</div> : null }
      { users.error ? <div>{ users.error }</div> : null }
      <ul className={styles.users_list}>
        {
          users.users.map((user) => <UserCard user={user} key={user.id} />)
        }
        <div className={styles.users_counter}>
          Найдено
          {' '}
          {users.users.length}
          {' '}
          пользователей
        </div>
      </ul>
    </>
  );
}
