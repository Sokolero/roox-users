import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './userReducer';
import { IUser } from '../models';

interface IUserState {
  users: IUser[];
  status: string;
  error: string;
  filter: string;
}

interface IState {
  users: IUserState;
}

const preloadedState: IState = {
  users: {
    users: [],
    status: 'not loaded',
    error: '',
    filter: 'city',
  },
};

export const store = createStore(
  combineReducers({
    users: userReducer,
  }),
  preloadedState,
  applyMiddleware(thunk),
);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
