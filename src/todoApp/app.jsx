import React, { Component }  from 'react';

import AddTodo from './addTodo';
import VisibleTodoList from './todoList';
import Footer from './footer';

const TodoApp = ({
    store
}) => (
    <div>
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