import { combineReducers } from 'redux';

import studentsReducer from './studentsReducer';
import reportsReducer from './reportsReducer';

const appReducer = combineReducers({
    students: studentsReducer,
    reports: reportsReducer
});

export default appReducer;