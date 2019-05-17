import { combineReducers } from 'redux';
import { alert } from './alertReducer';
import { getData } from './dataReducer';

const rootReducer = combineReducers({
    getData,
    alert
})

export default rootReducer;