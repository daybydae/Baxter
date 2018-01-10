import { UPDATE_FILTER } from '../actions/filter_actions';
import merge from 'lodash/merge';

const initialState = {
  bounds: {}
};

const filterReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case UPDATE_FILTER:
      let newFilter = {[action.filter]: action.value};
      return merge({}, oldState, newFilter);
    default:
      return oldState;
  }
};



export default filterReducer;
