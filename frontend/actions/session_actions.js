import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user).then( user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then( () => dispatch(receiveCurrentUser(null)), error => dispatch(receiveErrors(error)));
};

export const signup = (user) => dispatch => {
  return SessionApiUtil.signup(user).then( user => dispatch(receiveCurrentUser(user)), error => dispatch(receiveErrors(error)));
};

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (error) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    error
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};
