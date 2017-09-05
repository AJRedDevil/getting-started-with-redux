import React, { Component }  from 'react';

import TodoApp from './todoApp/todo-app';

class App extends Component {
    render() {
        return (
            <div>
                <TodoApp
                    store={this.props.store}
                    {...this.props.store.getState()}
                />
            </div>
        );
    };
}

export default App;