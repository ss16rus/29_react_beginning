export const ADD_TODO_SUCCESS = "TODO_SUCCESS";
export const ADD_TODO_FAILURE = "TODO_FAILURE";
export const ADD_TODO_STARTED = "TODO_STARTED";
export const DELETE_TODO = "DELETE_TODO";

export const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
export const GET_TODO_FAILURE = "GET_TODO_FAILURE";
export const GET_TODO_STARTED = "GET_TODO_STARTED";

import axios from 'axios';
import { IState } from './reducers';

export interface ITodo {
  title: String,
  userId: Number
}


export const addTodo = ({ title, userId }: ITodo) => {
  return (
      dispatch: ( arg0: { type: string, payload?: any }) => void,
      getState: () => IState ) => {

    console.log('current state:', getState());

    dispatch( addTodoStarted());

    axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {
      title,
      userId,
      completed: false
    })
    .then( res => {
      console.log("addTodo - ADD_TODO_SUCCESS: ", res.data)
      dispatch( addTodoSuccess( res.data))
    })
    .catch( err => {
      dispatch( addTodoFailure( err.message))
    })
  }
}


const addTodoStarted = () => ({ type: ADD_TODO_STARTED });

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: { ...todo }
})

const addTodoFailure = err => ({
  type: ADD_TODO_FAILURE,
  payload: { err }
})



export const getTodos = () => {
  return ( dispatch: ( arg0: { type: string, payload?: any }) => void ) => {

    dispatch( getTodoStarted());

    axios
    .get(`https://jsonplaceholder.typicode.com/todos`)
    .then( res => {
      dispatch( getTodoSuccess( res.data))
    })
    .catch( err => {
      console.log("getTodos - GET_TODO_FAILURE: ", err.message)
      dispatch( getTodoFailure( err.message))
    })
  }
}


const getTodoStarted = () => ({ type: GET_TODO_STARTED });

const getTodoSuccess = todo => ({
  type: GET_TODO_SUCCESS,
  payload: todo
})

const getTodoFailure = err => ({
  type: GET_TODO_FAILURE,
  payload: { err }
})