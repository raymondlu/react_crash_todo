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

export const addTodo = (title) => {
    return {
        type: ActionTypes.ADDTODO,
        title: title
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
                dispatch(addTodo(title));
            });
        };
      }