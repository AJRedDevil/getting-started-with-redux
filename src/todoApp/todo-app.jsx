import React from 'react';

import AddTodo from './add-todo';
import VisibleTodoList from './todo-list';
import Footer from './footer';

// TodoApp container app
const TodoApp = ({
    store
}) => (
    <div>
        {/* AddTodo functional Component */}
        <AddTodo
            store={store}
        />
        <VisibleTodoList
            store={store}
        />
        <Footer
            store={store}
        />
    </div>
);

export default TodoApp;