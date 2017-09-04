var expect = require('expect');
var deepfreeze = require('deep-freeze');

const toggleTodo = (todo) => {
    // ES6 Object assign
    return Object.assign({}, todo, {
        completed: !todo.completed
    }); // last one wins override.
    // return {
    //     ...todo,
    //     completed: !todo.completed
    // };
};

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'Log time',
        completed: false
    };
    const todoAfter = {
        id: 0,
        text: 'Log time',
        completed: true
    };

    deepfreeze(todoBefore);
    
    expect(
        toggleTodo(todoBefore)
    ).toEqual(todoAfter);
};

testToggleTodo();
console.log('All tests passed.');