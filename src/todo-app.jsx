import React, { Component } from 'react';

let nextTodoId = 0;
class TodoApp extends Component {
    render() {
        const store = this.props.store;
        return ( 
            <div>
                <input type="text" ref={node => {
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
                    {this.props.todos.map(todo => 
                        <li key={todo.id}
                            onClick={() => {
                                store.dispatch({
                                    type: 'TOGGLE_TODO',
                                    id: todo.id
                                });
                            }}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none'
                            }}
                            >
                            {todo.text}
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default TodoApp;