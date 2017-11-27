import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomePage from './HomePage';
import ReportingContainer from './ReportingContainer';

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <ReportingContainer />
            </div>
        );
    }
}

export default App;
