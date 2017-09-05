import React from 'react';

// AddTodo Functional Component
// It doesn't take prop
const AddTodo = ({
    onAddClick
}) => {
    let input;
    return (
        <div>
            <input type="text" ref={node => {
                    input = node;
                }} />
                <button onClick={() => {
                    onAddClick(input.value);
                    input.value = '';
                }}>
                    Add Todo
                </button>
        </div>
    );
}

export default AddTodo;