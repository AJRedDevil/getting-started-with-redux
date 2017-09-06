import React from 'react';
import { connect } from 'react-redux';

let nextTodoId = 0;
// AddTodo Presentational/Functional Component
// Receive context as 2nd argument
let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={() => {
                    dispatch({
                        type: 'ADD_TODO',
                        id: nextTodoId++,
                        text: input.value
                    })
                    input.value = '';
                }}>
                    Add Todo
                </button>
        </div>
    );
};
AddTodo = connect()(AddTodo); // dispatch injected as a prop if both state and dispatch is null

export default AddTodo;