import React, { Component }  from 'react';

let nextTodoId = 0;
class TodoApp extends Component {c
    render() {
        const { store } = this.props;
        return (
            <div>
                <input ref={node => {
                    this.input = node;
                }} />
                <button onClick={() => {
                    store.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });
                    this.input.value = '';
                }}>
                    Add Todo
                </button>
                <ul>
                    {
                        this.props.todos.map(todo =>
                            <li key={todo.id}>
                                {todo.text}
                            </li>
                    )}
                </ul>
            </div>
        );
    };
}

export default TodoApp;