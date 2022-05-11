import * as React from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getUsers } from "./redux";
import App from "./App";

export default function AppContainer() {

  const dispatch: any = useAppDispatch();
  const status: string = useAppSelector((state) => state.users.status);
  const st = useAppSelector((state) => state);
  console.log("App level", st)

  React.useEffect(() => {
    if (status === "not loaded") {
      dispatch(getUsers());
    }
  }, [dispatch, status])

  return <App />
}
