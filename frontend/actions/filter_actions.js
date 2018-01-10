import { fetchSitters } from './sitter_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";

export const changeFilter = (filter, value) => {

  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));

  return fetchSitters(getState().filter)(dispatch);
};
