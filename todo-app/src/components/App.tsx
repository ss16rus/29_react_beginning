import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { getTodos } from '../redux/actions';
import AddTodo from './AddTodo';

const App = ({todos, getToDos}) => {
  return (
    <BrowserRouter>
      <div onClick={getToDos}>ToDos here</div>
      <ul>
        {todos && todos.map( todo =>
        <li key={todo.id}>
          №{todo.id} {todo.title} {todo.completed? "completed" : "uncompleted"}
        </li>)}
      </ul>
      <AddTodo />
    </BrowserRouter>
  )
}

function mapStateToProps (props) {
  console.log('mapStateToProps', {...props})
  return {...props};
}

function mapDispatchToProps ( dispatch ) {
  return {
    getToDos: () => dispatch( getTodos()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
