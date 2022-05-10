import { handleActions, Action } from "redux-actions";
import { IUser } from "../models";

export interface IState {
  users: IUser[];
  status: string;
  error: string;
}

const initialState: IState = {
  users: [],
  status: "not loaded",
  error: "",
};

export const userReducer = handleActions(
  {
    GET_USERS_REQUEST: (state: IState, action: Action<any>): IState => ({
      ...state,
      status: "requesting",
      error: "",
    }),

    GET_USERS_FAILED: (state, action) => ({
      users: [],
      status: "failed",
      error: action.payload,
    }),

    GET_USERS_SUCCESS: (state, action) => ({
      users: action.payload,
      status: "success",
      error: "",
    }),
  },
  initialState
);
