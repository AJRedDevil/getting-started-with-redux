import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import TodoApp from './todoApp/app';
import todos from './reducer/todoApp';

const store = createStore(
    todos,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store: React.PropTypes.object
};

ReactDOM.render(
    <Provider store={store}>
    <TodoApp />
    </Provider>,
    document.getElementById('root')
);