var expect = require('expect');
var redux = require('redux');

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const { createStore } = redux;
// var createStore = redux.createStore;
// import { createStore } from 'redux';


const store = createStore(counter);
// 3 methods
// returns current state
const render = () => {
    console.log(store.getState());
};
render();

// lets dispatch action
store.dispatch({ type: 'INCREMENT' });
render();

// lets to register a callback
store.subscribe(render);

setInterval(() => {
    store.dispatch({ type: 'INCREMENT' });
}, 1000);