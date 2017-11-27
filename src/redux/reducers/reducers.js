import { combineReducers } from 'redux';

import trackReducer from './trackReducer';

const appReducer = combineReducers({
    track: trackReducer
});

export default appReducer;