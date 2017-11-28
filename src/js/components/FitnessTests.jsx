/*
 * FitnessTests.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const propTypes = {

};

export default class FitnessTests extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-4">
                    <Link className="track-link" to="/bodyComposition">
                        <span className="oi oi-person" title="person" aria-hidden="true"></span>
                        <p>Body Composition</p>
                    </Link>
                </div>
                <div className="col-12 col-md-4">
                    <Link className="track-link" to="/mileRun">
                        <span className="oi oi-media-skip-forward" title="media-skip-forward" aria-hidden="true"></span>
                        <p>Mile Run</p>
                    </Link>
                </div>
                <div className="col-12 col-md-4">
                    <Link className="track-link" to="/curlUps">
                        <span className="oi oi-data-transfer-upload" title="data-transfer-upload" aria-hidden="true"></span>
                        <p>Curl Ups</p>
                    </Link>
                </div>
            </div>
        );
    }
}

