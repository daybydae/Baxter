import * as UserApiUtil from '../util/user_api_util';
import { receiveCurrentUser, receiveErrors } from '../util/session_api_util';


export const updateUser = (user) => dispatch => {
  return UserApiUtil.updateUser(user).then( user => {
    return dispatch(receiveCurrentUser(user));
  },
  errors => {
    return dispatch(receiveErrors(errors));
  }
  );
};
