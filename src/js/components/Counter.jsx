/*
 * Counter.jsx
 * Created by michaelbray on 11/27/17
 */

import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    id: PropTypes.string
};

const defaultProps = {
    studentID: 1
};

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.typedCount = this.typedCount.bind(this);
        this.changeCount = this.changeCount.bind(this);
    }

    changeCount(change) {
        // Grab the current state
        let count = this.state.count;

        // Update the appropriate count
        count += change;

        // Don't let counts go negative
        if (count < 0) {
            count = 0;
        }

        // Update the state
        this.setState({
            count
        }, () => {
            this.inputField.value = '';
        });
    }

    increaseCount() {
        this.changeCount(1);
    }

    decreaseCount() {
        this.changeCount(-1);
    }

    typedCount(e) {
        this.setState({
            count: Number(e.target.value)
        });
    }

    render() {

        return (
            <div className="counter">
                <button
                    onClick={this.decreaseCount}>
                    <span className="oi oi-minus" title="minus" aria-hidden="true"></span>
                </button>
                <input
                    type="tel"
                    ref={input => this.inputField = input}
                    onBlur={(e) => this.typedCount(e)}
                    placeholder={this.state.count} />
                <button
                    onClick={this.increaseCount}>
                    <span className="oi oi-plus" title="plus" aria-hidden="true"></span>
                </button>
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Counter;