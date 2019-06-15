import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import * as Actions from '../Actions'
import {connect} from 'react-redux';

function Todos(props) {
  if (props.todos) {
     return props.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
    )); 
  } else {
    return <div></div>;
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {...state, ...ownProps};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    markComplete: (id) => {
      dispatch(Actions.markComplete(id));
    },
    delTodo: (id) => {
      dispatch(Actions.delTodoReq(id));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);