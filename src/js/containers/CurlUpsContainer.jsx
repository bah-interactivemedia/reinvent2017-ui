/*
 * CurlUpsContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import StudentRow from '../components/StudentRow';

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

export class CurlUpsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submitCurls = this.submitCurls.bind(this);
    }

    generateStudentRows(students) {
        const studentRows = [];

        students.forEach((student) => {
            studentRows.push(
                <StudentRow
                    {...student}
                    key={student.name} />
            );
        });

        return studentRows;
    }

    submitCurls() {
        console.log("here");
    }

    render() {
        const generateStudentRows = this.generateStudentRows(this.props.students);

        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        CURL UPS
                    </h1>
                    <div className="container rows-container">
                        {generateStudentRows}
                    </div>
                    <div className="submit-holder">
                        <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={this.submitCurls}>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

CurlUpsContainer.propTypes = propTypes;
CurlUpsContainer.defaultProps = defaultProps;

export default CurlUpsContainer;

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