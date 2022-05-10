import * as React from "react";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk"
import { userReducer } from "./userReducer";
import { IUser } from "../models";

interface IUserState {
  users: IUser[];
  status: string;
  error: string;
}

interface IState {
  users: IUserState;
}

const preloadedState: IState = {
  users: {
    users: [],
    status: "not loaded",
    error: ""
  }
}

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  preloadedState
});
