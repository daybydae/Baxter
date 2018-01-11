import { TOGGLE_DROPDOWN } from '../actions/dropdown_actions';

const initialState = {
  open: false
};

const dropDownReducer = (oldState = initialState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      let newState = {open: !oldState.open};
      return newState;
    default:
      return oldState;
  }
};

export default dropDownReducer;
