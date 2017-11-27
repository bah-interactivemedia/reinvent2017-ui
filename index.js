import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';
import store from './store';

import './node_modules/bootstrap/dist/css/bootstrap.css';
import './node_modules/open-iconic/font/css/open-iconic-bootstrap.css';
const history = syncHistoryWithStore(browserHistory, store);

const childRoutes = routes(store);

render(
    <Provider store={store}>
        <Router key="rec-app" history={history} children={childRoutes} />
    </Provider>,
    document.getElementById('app')
);
