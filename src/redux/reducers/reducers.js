import { combineReducers } from 'redux';

import studentsReducer from './studentsReducer';

const appReducer = combineReducers({
    students: studentsReducer
});

export default appReducer;