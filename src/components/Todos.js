import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import * as Actions from '../Actions'
import {connect} from 'react-redux';

function Todos(props) {
  return props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={props.markComplete} delTodo={props.delTodo} />
  ));
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {value: state};
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