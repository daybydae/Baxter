import { combineReducers } from 'redux';

import sittersReducer from './sitters_reducer';

const entitiesReducer = combineReducers({
  sitters: sittersReducer,
});

export default entitiesReducer;
