import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux";
import Users from "./Users";

export default function UsersContainer() {
  const users = useSelector((state) => users.users);
  const status = useSelector((state) => users.status);
  const error = useSelector((state) => users.error);

  const dispatch: any = useDispatch();

  React.useEffect(() => {
    if (status === "not loaded") {
      dispatch(getUsers());
    }
  }, [status]);

  return <Users users={{ users, status, error }} />
}
