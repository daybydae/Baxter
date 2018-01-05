import { RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/sitter_actions';

const sitterErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.type.responseJSON;
    case REMOVE_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sitterErrorsReducer;
