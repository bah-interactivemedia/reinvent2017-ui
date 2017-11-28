/*
 * BodyCompositionContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StudentBodyCompRow from '../components/StudentBodyCompRow';

const propTypes = {
    students: PropTypes.array
};

const defaultProps = {
    students: [
        {
            name: 'Michael Bray',
            id: 1
        },
        {
            name: 'Nat Burgwyn',
            id: 2
        }
    ]
};

export class BodyCompositionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    generateStudentRows(students) {
        const studentRows = [];

        students.forEach((student) => {
            studentRows.push(
                <StudentBodyCompRow
                    {...student}
                    key={student.name} />
            );
        });

        return studentRows;
    }

    render() {
        const studentRows = this.generateStudentRows(this.props.students);

        let button = (
            <button
                className="btn btn-success start-button"
                onClick={this.startTimer}>
                Start Timer
            </button>
        );
        if (this.state.timerHasStarted) {
            button = (
                <button
                    className="btn btn-danger stop-button"
                    onClick={this.stopTimer}>
                    Stop Timer
                </button>
            );
        }

        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        BODY COMPOSITION
                    </h1>
                    <div className="container rows-container">
                        <div className="container student-headers">
                            <div className="row justify-content-md-center">
                                <div className="col col-lg-2 col-12">
                                    Name
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Height (Feet)
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Height (Inches)
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Weight
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Triceps Skinfold
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Calf Skinfold
                                </div>
                                <div className="col col-lg-1 col-12">
                                    Percent Body Fat
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container rows-container">
                        {studentRows}
                    </div>
                    <div className="submit-holder">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={this.submitTimes}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

BodyCompositionContainer.propTypes = propTypes;
BodyCompositionContainer.defaultProps = defaultProps;

export default BodyCompositionContainer;

/* export default connect(
 (state) => ({
 location: state.navigation.discover.location,
 stateName: state.navigation.discover.stateName,
 stateData: state.navigation.discover.stateData,
 stateRecommendations: state.navigation.discover.stateRecommendations,
 topDestinations: state.navigation.discover.topDestinations
 }),
 (dispatch) => bindActionCreators(discoverActions, dispatch)
 )(HomePageContainer); */