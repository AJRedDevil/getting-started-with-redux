import deepfreeze from 'deep-freeze';
import expect from 'expect';

import { todos } from '../reducer/todoList';

describe('AddTodo', () => {
    it('should add new todo', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODOS',
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepfreeze(stateBefore);
        deepfreeze(action);

        expect(
            todos(stateBefore, action)
        ).toEqual(stateAfter);
    });
});
