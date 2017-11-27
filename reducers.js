import trackReducers from './src/redux/reducers/reducers';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// track: trackReducers

const reducers = {
    routing: routerReducer
};

export default combineReducers(reducers);
