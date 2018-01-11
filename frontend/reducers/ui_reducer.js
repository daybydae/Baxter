import { combineReducers } from 'redux';

import filterReducer from './filter_reducer';


import dropDownReducer from './drop_down_reducer';



export default combineReducers({
  dropDown: dropDownReducer
});
