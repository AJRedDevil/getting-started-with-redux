import { createStore }  from 'redux';

export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

// UI Update Equivalent
const render = () => {
    console.log(store.getState());
}

store.subscribe(render);
render();

store.dispatch({ type: 'INCREMENT' });