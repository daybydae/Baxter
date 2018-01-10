import { UPDATE_BOUNDS } from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  bounds: {}
};

const filterReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case UPDATE_BOUNDS:
      let newState = merge({}, oldState);
      newState.bounds = action.bounds;
      return newState;
    default:
      return oldState;
  }
};



export default filterReducer;
