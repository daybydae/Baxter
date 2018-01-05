import { RECEIVE_ALL_SITTERS } from '../actions/sitter_actions';


const sittersReducers = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SITTERS:
      return action.sitters;
    case RECEIVE_SITTER:
      return 
    case REMOVE_SITTER:

    case RECEIVE_ERRORS:

    case REMOVE_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sittersReducers;
