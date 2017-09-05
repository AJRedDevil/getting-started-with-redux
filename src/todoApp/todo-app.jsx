import React from 'react';

import AddTodo from './add-todo';
import TodoList from './todo-list';
import Footer from './footer';

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

let nextTodoId = 0;
// TodoApp container app
const TodoApp = ({
    store,
    todos,
    visibilityFilter
}) => (
    <div>
        {/* AddTodo functional Component */}
        <AddTodo
            onAddClick={text =>
                {
                    if (text){
                        store.dispatch({
                            type: 'ADD_TODO',
                            id: nextTodoId++,
                            text
                        });
                    }
                }
            }
        />
        {/* TodoList Container that handles the action */}
        <TodoList
            todos={
                getVisibleTodos(
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