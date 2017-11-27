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
    student: {
        name: 'Michael Bray',
        id: 1
    }
};

export class StudentRow extends React.Component {
    render() {

        return (
            <div>
                <div className="container student-row">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            {this.props.name}
                        </div>
                        <div className="col col-lg-3">
                            <Counter id={this.props.id} />
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