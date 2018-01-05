import { combineReducers } from 'redux';

import sittersReducers from './sitters_reducer';

const entitiesReducer = combineReducers({
  sitters: sittersReducers,
});

export default entitiesReducer;
