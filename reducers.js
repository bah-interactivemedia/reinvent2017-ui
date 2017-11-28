import studentsReducer from './src/redux/reducers/studentsReducer';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const reducers = {
    routing: routerReducer,
    students: studentsReducer
};

export default combineReducers(reducers);
