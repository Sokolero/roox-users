import { createAction } from 'redux-actions';
import { getUsersApi } from '../api';

const getUsersRequest = createAction('GET_USERS_REQUEST');
const getUsersSuccess = createAction('GET_USERS_SUCCESS');
const getUsersFailed = createAction('GET_USERS_FAILED');

export const getUsers = () => async (dispatch) => {
  dispatch(getUsersRequest());

  try {
    const users = await getUsersApi();
    dispatch(getUsersSuccess(users));
  } catch (err) {
    dispatch(getUsersFailed(err.message));
  }
};

export const choiceFilter = createAction('CHOICE_FILTER');
