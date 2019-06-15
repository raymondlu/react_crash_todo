import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {connect} from 'react-redux';
import * as Actions from './Actions';


import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    this.props.requestToDos();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo />
                <Todos todos={this.props.todos} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state, ownProps) {
  let props = {...state, ...ownProps};
  props.todos = props.todos ? props.todos : [];
  return props;
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestToDos: () => {
      dispatch(Actions.requestTodos());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
