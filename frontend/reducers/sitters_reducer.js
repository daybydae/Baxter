import { RECEIVE_ALL_SITTERS, RECEIVE_SITTER, REMOVE_SITTER } from '../actions/sitter_actions';


const sittersReducers = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_SITTERS:
      return action.sitters;
    case RECEIVE_SITTER:
      return merge({}, oldState, {[action.sitter.id]: action.sitter});
    case REMOVE_SITTER:
      let newState = merge({}, oldState);
      delete newState[action.sitterId];
      return newState;
    default:
      return oldState;
  }
};

export default sittersReducers;
