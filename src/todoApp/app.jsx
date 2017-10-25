import React, { Component }  from 'react';

import FilterLink from './filterLink';
import TodoList from './todoList';
import AddTodo from './addTodo';
import Footer from './footer';

const getVisibileTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return  todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
}

let nextTodoId = 0;
const TodoApp = ({
    store,
    todos,
    visibilityFilter
}) => (
    <div>
        <AddTodo
            onAddClick={text =>
                store.dispatch({
                    type: 'ADD_TODO',
                    id: nextTodoId++,
                    text
                })
            }
        />
        <TodoList
            todos={
                getVisibileTodos(
                    todos,
                    visibilityFilter
                )
            }
            onTodoClick={id => 
                store.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={filter =>
                store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })
            }
        />
    </div>
);

export default TodoApp;