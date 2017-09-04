var expect = require('expect');
var deepfreeze = require('deep-freeze');

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }

                return Object.assign({}, todo, {
                    completed: !todo.completed
                });
            });
        default:
            return state;
    }
};

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Log Time'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Log Time',
            completed: false
        }
    ];

    deepfreeze(stateBefore);
    deepfreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Log Time',
            completed: false
        },
        {
            id: 1,
            text: 'Break time',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE_TODO',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Log Time',
            completed: false
        },
        {
            id: 1,
            text: 'Break time',
            completed: true
        }
    ];

    deepfreeze(stateBefore);
    deepfreeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
};

testAddTodo();
testToggleTodo();
console.log('All tests passed.');