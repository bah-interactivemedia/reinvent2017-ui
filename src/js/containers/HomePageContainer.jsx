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
    constructor(props) {
        super(props);

        this.state = {
            selection: false
        };

        this.selectedNew = this.selectedNew.bind(this);
        this.selectedExisting = this.selectedExisting.bind(this);
    }

    selectedNew() {
        this.setState({
            selection: true
        });
    }

    selectedExisting(e) {
        this.setState({
            selection: true
        });

        console.log(e);
    }

    render() {
        let shownActions = (
            <TestSelection
                selectedNew={this.selectedNew}
                selectedExisting={this.selectedExisting} />
        );
        if (this.state.selection) {
            shownActions = (
                <FitnessTests />
            );
        }

        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        FITNESS TESTS
                    </h1>
                    <div className="container">
                        {shownActions}
                    </div>
                </div>
                <div className="container-fluid container-report">
                    <h1 className="title">
                        REPORT
                    </h1>
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = propTypes;

export default HomePageContainer;