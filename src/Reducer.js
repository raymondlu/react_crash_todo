import * as ActionTypes from './ActionTypes';

export default (state, action) => {
    const {type} = action;
    if (type === ActionTypes.ADDTODO) {
        return { todos: [...state.todos, action.data] }
    }
    else if (type === ActionTypes.DELTODO) {
        return { todos: [...state.todos.filter(todo => todo.id !== action.id)] }
    }
    else if (type === ActionTypes.MARKCOMPLETE) {
        return { todos: state.todos.map(todo => {
            if(todo.id === action.id) {
              todo.completed = !todo.completed
            }
            return todo;
        }) }
    }
};