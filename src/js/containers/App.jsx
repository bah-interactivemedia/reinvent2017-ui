import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import HomePageContainer from './HomePageContainer';

class App extends React.Component {
    render() {
        return (
            <div>
                <HomePageContainer />
            </div>
        );
    }
}

export default App;
