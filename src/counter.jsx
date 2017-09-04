import React, { Component } from 'react';
import CounterPresentation from './counter-presentation';
import { counter } from './redux/reducer';

var redux = require('redux');
const { createStore } = redux;
const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: store.getState()
        };
        this.updateState = this.updateState.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        store.subscribe(this.updateState);
    }

    updateState() {
        this.setState({
            count: store.getState()
        });
    }

    onIncrement() {
        store.dispatch({
            type: 'INCREMENT'
        });
    }

    onDecrement() {
        store.dispatch({
            type: 'DECREMENT'
        });
    }

    render() {
        return (
            <CounterPresentation
                count={this.state.count}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
            />
        );
    }
}

export default Counter;