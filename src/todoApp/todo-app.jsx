import React from 'react';

import AddTodo from './add-todo';
import VisibleTodoList from './todo-list';
import Footer from './footer';

// TodoApp container app
const TodoApp = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default TodoApp;