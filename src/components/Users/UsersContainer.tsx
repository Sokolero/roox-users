import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getUsers } from "../../redux";
import Users from "./Users";
import { IState } from "../../models";

export default function UsersContainer() {
  const st = useAppSelector((state) => state);
  console.log("users level", st)
  const users = useAppSelector((state) => state.users.users);
  const status = useAppSelector((state) => state.users.status);
  const error = useAppSelector((state) => state.users.error);

  return <Users users={{ users, status, error }} />
}
