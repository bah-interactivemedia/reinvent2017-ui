/*
 * StudentBodyCompRow.jsx
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

export class StudentBodyCompRow extends React.Component {
    render() {
        return (
            <div className="container student-row body-comp">
                <div className="row justify-content-md-center">
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Name:
                        </label>
                    </div>
                    <div className="col col-lg-2 col-6">
                        {this.props.name}
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Height (Feet):
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.feetInput = input} />
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Height (Inches):
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.inchesInput = input} />
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Weight:
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.weightInput = input} />
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Triceps Skinfold:
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.tricepsInput = input} />
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Calf Skinfold:
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.calfInput = input} />
                    </div>
                    <div className="col col-lg-2 col-6 student-label">
                        <label>
                            Body Fat Percentage:
                        </label>
                    </div>
                    <div className="col col-lg-1 col-6">
                        <input
                            type="tel"
                            ref={input => this.bodyFatInput = input} />
                    </div>
                </div>
            </div>
        );
    }
}

StudentBodyCompRow.propTypes = propTypes;
StudentBodyCompRow.defaultProps = defaultProps;

export default StudentBodyCompRow;
