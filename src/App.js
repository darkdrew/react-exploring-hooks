import React, { useState } from 'react';
import './App.css';


const Todo = ({ todo, index }) => {
  return <div className="todo">{todo.text}</div>
}

function App() {
  const [todos, setTodo] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build cool todo app',
      isCompleted: false
    }
  ]);
  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
