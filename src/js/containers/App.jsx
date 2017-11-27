import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import NavbarContainer from './NavbarContainer';
import FooterContainer from './FooterContainer';

import '../../css/index.scss';

const propTypes = {
    children: PropTypes.any
};

class App extends React.Component {
    render() {
        return (
            <div className="nff">
                <NavbarContainer />
                <div
                    className="page-content"
                    id="page-content">
                    { this.props.children }
                </div>
                <FooterContainer />
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
