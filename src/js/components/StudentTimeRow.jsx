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
        name: 'Michael Bray',
        id: 1
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
        let buttonOrTime = null;
        if (this.state.finalTime !== '') {
            buttonOrTime = (
                <span className="final-time">
                    {this.state.finalTime}
                </span>
            );
        }
        else {
            buttonOrTime = (
                <button
                    className="btn"
                    disabled={this.props.disabled}
                    onClick={this.clickedFinish}>
                    Finished
                </button>
            );
        }

        return (
            <div>
                <div className="container student-row">
                    <div className="row justify-content-md-center">
                        <div className="col col-lg-3">
                            {this.props.name}
                        </div>
                        <div className="col col-lg-3">
                            {buttonOrTime}
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
