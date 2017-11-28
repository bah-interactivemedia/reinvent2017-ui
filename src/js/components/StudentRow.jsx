/*
 * StudentRow.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Counter from './Counter';

const propTypes = {
    student: PropTypes.object
};

const defaultProps = {
    student: {}
};

export class StudentRow extends React.Component {
    render() {
        const name = `${this.props.studentFirst} ${this.props.studentLast}`;
        return (
            <div>
                <div className="container student-row">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            {name}
                        </div>
                        <div className="col col-lg-3">
                            <Counter id={this.props.studentId} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StudentRow.propTypes = propTypes;
StudentRow.defaultProps = defaultProps;

export default StudentRow;