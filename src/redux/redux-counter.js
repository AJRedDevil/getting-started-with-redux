// var expect = require('expect');
var redux = require('redux');

import { counter } from './reducer';

const { createStore } = redux;

const store = createStore(counter);

const getCurrentState = () => store.getState();

const dispatchAction = (action) => store.dispatch(action);

export {
    getCurrentState,
    dispatchAction
}