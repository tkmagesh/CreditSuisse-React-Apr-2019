import { combineReducers } from 'redux';
import bugsReducer from './bugsReducer';
import spinnerReducer from './spinnerReducer';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

export default rootReducer;