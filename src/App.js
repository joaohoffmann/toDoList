import { useState } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <section>
      <h1> To Do List</h1>
      <TodoList/>
    </section>
  );
}

export default App;
