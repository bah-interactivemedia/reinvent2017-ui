/*
 * TestSelection.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button, ButtonDropdown, ButtonGroup,
    DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const propTypes = {
    selectedNew: PropTypes.func,
    selectedExisting: PropTypes.func
};

export default class TestSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col col-lg-3">
                    <ButtonGroup>
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <Button id="caret" color="primary">New Test</Button>
                            <DropdownToggle caret>
                                Continue Existing Test
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                    05/20/2017
                                </DropdownItem>
                                <DropdownItem>
                                    10/19/2016
                                </DropdownItem>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}
