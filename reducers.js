import studentsReducer from './src/redux/reducers/studentsReducer';
import reportsReducer from './src/redux/reducers/reportsReducer';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
    routing: routerReducer,
    students: studentsReducer,
    reports: reportsReducer
};

export default combineReducers(reducers);
