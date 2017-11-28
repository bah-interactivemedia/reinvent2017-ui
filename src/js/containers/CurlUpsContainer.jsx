/*
 * CurlUpsContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentActions from '../actions/studentsAction';

import StudentRow from '../components/StudentRow';

const propTypes = {
    studentsFetchData: PropTypes.func.isRequired,
    studentsPostCurls: PropTypes.func.isRequired,
    studentList: PropTypes.array
};

const defaultProps = {
    studentList: []
};

export class CurlUpsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.submitCurls = this.submitCurls.bind(this);
    }

    componentWillMount() {
        this.getData();
    }

    getData() {
        this.props.studentsFetchData();
    }

    generateStudentRows(students) {
        const studentRows = [];

        students.forEach((student) => {
            studentRows.push(
                <StudentRow
                    {...student}
                    key={student.studentId} />
            );
        });

        return studentRows;
    }

    submitCurls() {
        this.props.studentsPostCurls(1,1,1);
        browserHistory.push('/');
    }

    render() {
        const generateStudentRows = this.generateStudentRows(this.props.studentList);

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

 export default connect(
 (state) => ({
    studentList: state.students.studentList,
 }),
    (dispatch) => bindActionCreators(studentActions, dispatch)
 )(CurlUpsContainer); 