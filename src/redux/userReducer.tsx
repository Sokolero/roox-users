import { handleActions, Action } from 'redux-actions';
import { IUser } from '../models';

export interface IState {
  users: IUser[];
  status: string;
  error: string;
  filter: string;
}

const initialState: IState = {
  users: [],
  status: 'not loaded',
  error: '',
  filter: 'city', // company
};

export const userReducer = handleActions(
  {
    GET_USERS_REQUEST: (state: IState, action: Action<any>): IState => ({
      ...state,
      status: 'requesting',
      error: '',
    }),

    GET_USERS_FAILED: (state: IState, action: Action<any>): IState => ({
      ...state,
      users: [],
      status: 'failed',
      error: action.payload,
    }),

    GET_USERS_SUCCESS: (state: IState, action: Action<any>): IState => ({
      ...state,
      users: action.payload,
      status: 'success',
      error: '',
    }),

    CHOICE_FILTER: (state: IState, action: Action<any>): IState => ({
      ...state,
      filter: action.payload,
    }),
  },
  initialState,
);
