import * as ActionTypes from './ActionTypes';

export default (state, action) => {
    const {type} = action;
    if (type === ActionTypes.ADDTODO) {
        return {...state, todos: [...state.todos, action.data] }
    }
    else if (type === ActionTypes.DELTODO) {
        return {...state, todos: [...state.todos.filter(todo => todo.id !== action.id)] }
    }
    else if (type === ActionTypes.MARKCOMPLETE) {
        return {...state, todos: state.todos.map(todo => {
            if(todo.id === action.id) {
              todo.completed = !todo.completed
            }
            return todo;
        }) }
    }

    // default
    return state;
};