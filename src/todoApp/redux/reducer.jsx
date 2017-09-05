import { todos, visibilityFilter } from './todo-reducer';

const redux = require('redux');

const { combineReducers } = redux;

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

export {
    todoApp
}