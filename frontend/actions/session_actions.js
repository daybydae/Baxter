import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const login = (user) => dispatch => {
  return SessionApiUtil.login(user).then( user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout().then( () => dispatch(receiveCurrentUser(null)), errors => dispatch(receiveErrors(errors)));
};

export const signup = (formData) => dispatch => {
  return SessionApiUtil.signup(formData).then( user => {

    debugger
    dispatch(receiveCurrentUser(user));
  }, errors => dispatch(receiveErrors(errors)));
};

export const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  };
};

export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS
  };
};
