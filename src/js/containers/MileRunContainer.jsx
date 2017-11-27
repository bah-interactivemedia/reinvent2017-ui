/*
 * MileRunContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getTime from 'date-fns/get_time';
import differenceInSeconds from 'date-fns/difference_in_seconds';

import StudentTimeRow from '../components/StudentTimeRow';

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

export class MileRunContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            timerHasStarted: false,
            startTime: null,
            runningTime: '00:00'
        };

        this.submitTimes = this.submitTimes.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.interval = null;
    }

    generateStudentRows(students) {
        const studentRows = [];

        students.forEach((student) => {
            studentRows.push(
                <StudentTimeRow
                    {...student}
                    disabled={!this.state.timerHasStarted}
                    time={this.state.runningTime}
                    key={student.name} />
            );
        });

        return studentRows;
    }

    submitTimes() {
        console.log("here");
    }

    updateTime() {
        const currentTime = Date.now();
        const difference = differenceInSeconds(currentTime, this.state.startTime);

        let minutes = Math.round(difference / 60);
        let seconds = difference % 60;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        this.setState({
            runningTime: `${minutes}:${seconds}`
        });
    }

    startTimer() {
        this.setState({
            timerHasStarted: true,
            startTime: getTime(Date.now())
        }, () => {
            this.interval = setInterval(() => {
                this.updateTime()
            }, 1000);
        });
    }

    stopTimer() {
        clearInterval(this.interval);

        this.setState({
            timerHasStarted: false,
            startTime: null,
            runningTime: '00:00'
        });
    }

    render() {
        const generateStudentRows = this.generateStudentRows(this.props.students);

        let button = (
            <button
                className="btn btn-success start-button"
                onClick={this.startTimer}>
                START
            </button>
        );
        if (this.state.timerHasStarted) {
            button = (
                <button
                    className="btn btn-danger stop-button"
                    onClick={this.stopTimer}>
                    STOP
                </button>
            );
        }

        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        MILE RUN
                    </h1>
                    <div className="time">
                        <h2>
                            {this.state.runningTime}
                        </h2>
                    </div>
                    <div className="start-button-holder">
                        {button}
                    </div>
                    <div className="container rows-container">
                        {generateStudentRows}
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

MileRunContainer.propTypes = propTypes;
MileRunContainer.defaultProps = defaultProps;

export default MileRunContainer;

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