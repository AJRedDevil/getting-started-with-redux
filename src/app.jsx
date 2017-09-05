import React, { Component }  from 'react';

import TodoApp from './todo-app';

class App extends Component {
    render() {
        return (
            <div>
                <TodoApp
                    store={this.props.store}
                    todos={this.props.store.getState().todos}
                />
            </div>
        );
    };
}

export default App;