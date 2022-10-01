import { GET, } from '../../commons/utils/request';
import { logout, } from '../constants/urls';
import * as types from '../constants/actionTypes';

const receiveMovies = data => {
  return {
    type: types.LOGOUT_STATE,
    ...data,
  };
};

const doLogout = params => {
  return dispatch => {
    return GET(logout, params).then(resp => {
      const { coming, code, } = resp;
      dispatch(
        receiveMovies({
          movies: coming,
          logout: code === 0,
        }),
      );
    });
  };
};


module.exports = {
  doLogout,
};
