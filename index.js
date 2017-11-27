import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './src/js/containers/App';

render(
  <App/>,
  document.getElementById('app')
);