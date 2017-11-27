/*
 * FooterContainer.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const propTypes = {

};

export class HomePageContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="container-fluid container-track">
                    <h1 className="title">
                        FITNESS TESTS
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <Link
                                    className="track-link"
                                    to="/" >
                                    <span className="oi oi-person" title="person" aria-hidden="true"></span>
                                    <p>Body Composition</p>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link
                                    className="track-link"
                                    to="/" >
                                    <span className="oi oi-media-skip-forward" title="media-skip-forward" aria-hidden="true"></span>
                                    <p>Mile Run</p>
                                </Link>
                            </div>
                            <div className="col-4">
                                <Link
                                    className="track-link"
                                    to="/" >
                                    <span className="oi oi-data-transfer-upload" title="data-transfer-upload" aria-hidden="true"></span>
                                    <p>Curl Ups</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-report">
                    <h1 className="title">REPORTS</h1>
                    <p>Visualize results</p>
                    <Link to="/reports" className="report-link">See performance</Link>
                </div>
            </div>
        );
    }
}

HomePageContainer.propTypes = propTypes;

export default HomePageContainer;