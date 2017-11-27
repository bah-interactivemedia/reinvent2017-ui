/*
 * FooterContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {

};

export class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid container-track">
                    TRACK
                </div>
                <div className="container-fluid container-report">
                    REPORT
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = propTypes;

export default HomePageContainer;