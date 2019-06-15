import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions';
import { connect } from "react-redux";

function AddTodo(props) {
  let title = '';

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    // TODO
    //this.setState({ title: '' });
  }

  const onChange = (e) => {title = e.target.value};

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex' }}>
      <input 
        type="text" 
        name="title" 
        style={{ flex: '10', padding: '5px' }}
        placeholder="Add Todo ..." 
        value={this.state.title}
        onChange={onChange}
      />
      <input 
        type="submit" 
        value="Submit" 
        className="btn"
        style={{flex: '1'}}
      />
    </form>
  )
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addTodo: (title) => {
      dispatch(Actions.addTodoReq(title));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
