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

export class FooterContainer extends React.Component {
    render() {
        return (
            <footer className="container-fluid">
                <div className="row">
                    <div className="footer-diagram col-6">
                        <Link to="/diagram">Architecture Diagram</Link>
                    </div>
                    <div className="copyright col-6">
                        &copy;2017 The National Fitness Foundation. All Rights Reserved.
                    </div>
                </div>
            </footer>
        );
    }
}

FooterContainer.propTypes = propTypes;

export default FooterContainer;