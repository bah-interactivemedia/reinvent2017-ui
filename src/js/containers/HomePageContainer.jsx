/*
 * FooterContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
                    <p>Visualize results</p>
                    <Link to="/reports" className="report-link">See performance</Link>
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = propTypes;

export default HomePageContainer;