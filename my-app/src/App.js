import React, { useState, useEffect } from 'react';
import './App.css';

const getTodos = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(data => data.json())
};

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then(todos => setTodos(todos))
  }, []);

  return (
    <div>
      <h1>Hi</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
