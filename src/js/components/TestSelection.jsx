/*
 * TestSelection.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {
    selectedNew: PropTypes.func,
    selectedExisting: PropTypes.func
};

export default class TestSelection extends React.Component {
    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={(e) => this.props.selectedNew}>
                            New Test
                        </button>
                        <div className="btn-group" role="group">
                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Continue Test
                            </button>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={(e) => this.props.selectedExisting(e)}>
                                    05/20/17
                                </a>
                                <a className="dropdown-item" href="#">10/20/16</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
