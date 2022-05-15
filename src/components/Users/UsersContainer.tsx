import * as React from 'react';
import { useAppSelector } from '../../hooks';
import Users from './Users';
import { IUser } from '../../models';

export interface UsersProps {
  users: Array<IUser>;
  status: string;
  error: string;
  filter: string;
}

export default function UsersContainer() {
  const users: UsersProps = useAppSelector((state) => state.users);

  const getSortingProp = {
    city: (item) => item.address.city,
    company: (item) => item.company.name,
  };

  const userList = [...users.users];
  const { filter } = users;
  userList.sort((a, b) => (getSortingProp[filter](a) > getSortingProp[filter](b) ? 1 : -1));

  return <Users users={{ ...users, users: userList }} />;
}
