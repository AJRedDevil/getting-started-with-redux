import React, { Component }  from 'react';

import FilterLink from './filterLink';

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
                <input ref={node => {
                    this.input = node;
                }} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });
                    this.input.value = '';
                }}>
                    Add Todo
                </button>
                <ul>
                    {
                        visibileTodos.map(todo =>
                            <li
                                key={todo.id}
                                onClick={() => {
                                    store.dispatch({
                                        type: 'TOGGLE_TODO',
                                        id: todo.id
                                    });
                                }}
                                style={{
                                    textDecoration:
                                        todo.completed ?
                                            'line-through' :
                                            'none'
                                }}
                            >
                                {todo.text}
                            </li>
                    )}
                </ul>
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