import React from 'react';
import { ITodo } from '../redux/actions';

interface f {
  onAddTodo: ( arg0: ITodo ) => void
}


export default function NewTodo ({ onAddTodo }: f) {
  return (
    <div onClick={() => onAddTodo({ title: "my todo", userId: 1 })}>
      Add new todo
    </div>
  )
}