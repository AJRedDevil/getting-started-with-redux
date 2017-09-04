import React, { Component } from 'react';

class CounterPresentation extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.count }</h1>
                <button onClick={ this.props.onIncrement }>+</button>
                <button onClick={ this.props.onDecrement }>-</button>
            </div>
        );
    }
}

export default CounterPresentation;