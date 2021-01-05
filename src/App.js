import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
    <header>
      <h1>Danny's Todo List </h1>
    </header>
    <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
    <TodoList />
    </div>
  );
}

export default App;
