var expect = require('expect');

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

expect(
    counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
    counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
    counter(2, { type: 'DECREMENT' })
).toEqual(1);

expect(
    counter(1, { type: 'DECREMENT' })
).toEqual(0);

// Handle unknown type by returning current state
expect(
    counter(1, { type: 'UNKNOWN_TYPE' })
).toEqual(1);

// Handle initial state when state is undefined
expect(
    counter(undefined, {})
).toEqual(0);

console.log('Tests passed!');