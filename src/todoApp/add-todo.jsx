import React from 'react';

let nextTodoId = 0;
// AddTodo Presentational/Functional Component
// It doesn't take prop
const AddTodo = ({
    store
}) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={() => {
                    store.dispatch({
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
}

export default AddTodo;