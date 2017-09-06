import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './app';
import { todoApp } from './todoApp/redux/reducer';

const redux = require('redux');
const { createStore } = redux;
const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Provider extends Component {
    // Special method to provide context to children and grand-children
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    render() {
        return this.props.children;
    }
}
// Important condition
Provider.childContextTypes = {
    store:  PropTypes.object
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);