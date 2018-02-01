import { combineReducers } from 'redux';

import sitterReducer from './sitters_reducer';

const entitiesReducer = combineReducers({
  sitters: sitterReducer,
});

export default entitiesReducer;
