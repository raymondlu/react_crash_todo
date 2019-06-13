import * as ActionTypes from './ActionTypes';

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