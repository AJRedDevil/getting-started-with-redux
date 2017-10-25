import React, { Component }  from 'react';

import FilterLink from './filterLink';
import TodoList from './todoList';
import AddTodo from './addTodo';

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
class TodoApp extends Component {c
    render() {
        const {
            store,
            todos,
            visibilityFilter
        } = this.props;
        const visibileTodos = getVisibileTodos(
            todos,
            visibilityFilter
        );
        return (
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
                    todos={visibileTodos}
                    onTodoClick={id => 
                        store.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    }
                />
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        store={store}
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        store={store}
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        store={store}
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    };
}

export default TodoApp;