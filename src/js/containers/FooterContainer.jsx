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
            <footer>
                <div className="footer-diagram">
                    <Link to="/diagram">Diagram</Link>
                </div>
                <div className="copyright">
                    &copy;2017 The National Fitness Foundation. All Rights Reserved.
                </div>
            </footer>
        );
    }
}

FooterContainer.propTypes = propTypes;

export default FooterContainer;