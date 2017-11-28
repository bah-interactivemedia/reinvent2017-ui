import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';
import studentsStore from './src/redux/studentsStore';

const initialState = {
    ...studentsStore()
};

const router = routerMiddleware(browserHistory);
let enhancer = applyMiddleware(thunk, router);

if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(enhancer)
}

const store = createStore(
    reducers,
    initialState,
    enhancer
);

export default store;