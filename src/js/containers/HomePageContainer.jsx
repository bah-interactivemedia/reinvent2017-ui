/*
 * FooterContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ReportingContainer from './ReportingContainer';

import TestSelection from '../components/TestSelection';
import FitnessTests from '../components/FitnessTests';

const propTypes = {

};

export class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        FITNESS TESTS
                    </h1>
                    <div className="container actions-holder">
                        <FitnessTests />
                    </div>
                </div>
                <div className="container-fluid container-report">
                    <h1 className="title">REPORTS</h1>
                    <ReportingContainer />
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = propTypes;

export default HomePageContainer;