var expect = require('expect');
var deepfreeze = require('deep-freeze');
var redux = require('redux');

const addCounter = (list) => {
    // return list.concat([0]);
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};

const testAddCounter = () => {
    const listBefore = [];
    const listAfter = [0];

    deepfreeze(listBefore);

    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
};

const testRemoveCounter = () => {
    const listBefore = [0, 1, 2];
    const listAfter = [0, 2];

    deepfreeze(listBefore);

    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

const testIncrementCounter = () => {
    const listBefore = [0, 1, 2];
    const listAfter = [0, 2, 2];

    deepfreeze(listBefore);

    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log('All tests passed.');