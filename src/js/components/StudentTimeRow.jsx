/*
 * StudentRow.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import Counter from './Counter';

const propTypes = {
    student: PropTypes.object,
    disabled: PropTypes.bool,
    finalTime: PropTypes.string,
    time: PropTypes.string
};

const defaultProps = {
    student: {
    },
    disabled: true,
    time: ''
};

export class StudentTimeRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            finalTime: ''
        };

        this.clickedFinish = this.clickedFinish.bind(this);
    }

    clickedFinish(e) {
        this.setState({
            finalTime: this.props.time
        })
    }

    render() {
        let finishTime = null;
        let finishButton =  (
            <button
                className="btn"
                disabled={this.props.disabled}
                onClick={this.clickedFinish}>
                Finished
            </button>
        );

        if (this.state.finalTime !== '') {
            finishTime = (
                <span className="final-time">
                    {this.state.finalTime}
                </span>
            );

            finishButton = (
                <button
                    className="btn"
                    onClick={this.clickedFinish}>
                    Update Time
                </button>
            );
        }

        const name = `${this.props.studentFirst} ${this.props.studentLast}`;

        return (
            <div>
                <div className="container student-row">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            {name}
                        </div>
                        <div className="col col-lg-3">
                            {finishTime}
                        </div>
                        <div className="col col-lg-3">
                            {finishButton}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

StudentTimeRow.propTypes = propTypes;
StudentTimeRow.defaultProps = defaultProps;

export default StudentTimeRow;
