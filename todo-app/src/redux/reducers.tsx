import {
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  GET_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_STARTED,
  DELETE_TODO
} from '../redux/actions';

import { combineReducers } from 'redux';

export interface IState {
  loading: boolean,
  todos?: any[],
  error: null | string,
}

const initialState: IState = {
  loading: false,
  todos: [],
  error: null
}


function addTodo( state: IState = initialState, action: {type: string, payload?: any} ): IState {
  console.log("reducer state: ", state );
  switch ( action.type ) {

    case ADD_TODO_SUCCESS:
      console.log("reducer ADD_TODO_SUCCESS: ", action.payload)
      return {
        ...state,
        error: null,
        loading: false,
        todos: [...state.todos, action.payload]
      }

    case ADD_TODO_FAILURE:
      return {
        ...state,
        error: action.payload.error
      }

    case ADD_TODO_STARTED:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}


function getTodos( state: IState = initialState, action: {type: string, payload?: any} ): IState {
  switch ( action.type ) {

    case GET_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        todos: action.payload
      }

    case GET_TODO_STARTED:
      return {
        ...state,
        loading: true
      }

    case GET_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default combineReducers({ addTodo, getTodos });