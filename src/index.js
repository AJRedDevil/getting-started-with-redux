import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import TodoApp from './todoApp/app';
import todos from './reducer/todoApp';

const store = createStore(todos);

const render = () => {
    ReactDOM.render(
        <TodoApp
            store={store}
            {...store.getState()}
        />,
        document.getElementById('root')
    );
}

store.subscribe(render);
render();