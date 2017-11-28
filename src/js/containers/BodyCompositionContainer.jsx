/*
 * BodyCompositionContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as studentActions from '../actions/studentsAction';

import StudentBodyCompRow from '../components/StudentBodyCompRow';

const propTypes = {
    studentsFetchData: PropTypes.func.isRequired,
    studentsPostBodyComp: PropTypes.func.isRequired,
    studentList: PropTypes.array
};

const defaultProps = {
    studentList: []
};

export class BodyCompositionContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.submitData = this.submitData.bind(this);
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
                <StudentBodyCompRow
                    {...student}
                    key={student.studentId} />
            );
        });

        return studentRows;
    }

    submitData() {
        this.props.studentsPostBodyComp();
        browserHistory.push('/');
    }

    render() {
        const studentRows = this.generateStudentRows(this.props.studentList);

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
                            onClick={this.submitData}>
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

export default connect(
 (state) => ({
    studentList: state.students.studentList,
 }),
 (dispatch) => bindActionCreators(studentActions, dispatch)
 )(BodyCompositionContainer);