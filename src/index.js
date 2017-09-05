import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { todoApp } from './redux/reducer';

const redux = require('redux');
const { createStore } = redux;
const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    )
};

store.subscribe(render);
render();