import { createAction } from "redux-actions";
import {Action, ActionCreator, Dispatch} from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { getUsersApi } from "../api";
import { IUser } from "../models";

interface IUserState {
  users: IUser[];
  status: string;
  error: string;
}

interface IState {
  users: IUserState;
}

const getUsersRequest = createAction('GET_USERS_REQUEST');
const getUsersSuccess = createAction('GET_USERS_SUCCESS');
const getUsersFailed = createAction('GET_USERS_FAILED');

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersRequest());

  try {
    const users = await getUsersApi();
    dispatch(getUsersSuccess(users));
  } catch(err) {
    dispatch(getUsersFailed(err.message));
    console.log(err.message)
  }
};
