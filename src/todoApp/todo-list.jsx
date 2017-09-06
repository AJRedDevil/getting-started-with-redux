import React from 'react';
import { connect } from 'react-redux';

import Todo from './todo';

// TodoList Presentation Component
const TodoList = ({
    todos,
    onTodoClick
}) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

// maps redux store state to the props of the todo
const mapStateToProps = (
    state
) => {
    return {
        todos: getVisibleTodos(
            state.todos,
            state.visibilityFilter
        )
    };
};

// maps dispatch method to callback of component
const mapDispatchToProps = (
    dispatch
) => {
    return {
        onTodoClick: (id) => {
            dispatch({
                type: 'TOGGLE_TODO',
                id
            });
        }
    };
};

// connect generates container taking in state returning props and dispatch method to dispatch action
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList); // correct function pass presentation component that wraps props


export default VisibleTodoList;