import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { todoApp } from './todoApp/redux/reducer';

const redux = require('redux');
const { createStore } = redux;
const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);