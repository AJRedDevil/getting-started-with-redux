export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODOS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        default:
            return state;
    }
};