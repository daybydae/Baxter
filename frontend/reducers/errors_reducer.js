import { combineReducers } from 'redux';

import sessionErrorsReducer from './session_errors_reducer';

// import sitterErrorsReducer from './sitter_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // sitter: sitterErrorsReducer
});

export default errorsReducer;
