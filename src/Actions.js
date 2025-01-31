import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const markComplete = (id) => {
    return {
        type: ActionTypes.MARKCOMPLETE,
        id: id,
    };
};

export const delTodo = (id) => {
    return {
        type: ActionTypes.DELTODO,
        id: id
    };
};

export const addTodo = (todoData) => {
    return {
        type: ActionTypes.ADDTODO,
        data: todoData
    };
};

export const addTodos = (todoData) => {
    return {
        type: ActionTypes.REQUESTTODOS,
        data: todoData
    };
};

// Delete Todo
export const delTodoReq = (id) => {
    return (dispatch) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => {
            dispatch(delTodo(id));
        });
    };
}

// Add Todo
export const addTodoReq = (title) => {
    return (dispatch) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
            })
        .then(res => {
            dispatch(addTodo(res.data));
        });
    };
}

// Request todos from server
export const requestTodos = () => dispatch => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => {
            dispatch(addTodos(res.data));
    })
}