import { handleActions, } from 'redux-actions';
import * as types from '../constants/actionTypes';

const initialState = {
  movies: [],
  logout: false,
};

const handler = {};

handler[types.RECEIVE_MOVIES] = (state, action) => {
  const { movies, } = action;
  return {
    ...state,
    movies,
  };
};

handler[types.LOGOUT_STATE] = (state, action) => {
  const { logout, } = action;
  return {
    ...state,
    logout,
  };
};

export default handleActions(handler, initialState);
