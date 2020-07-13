import React, { useState } from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {

  const [todos, setTodos] = useState([]);
      
  const addTodo = (todoTitle) => {
    setTodos(todos.concat({_id: Date.now(), title: todoTitle, completed: false}))
  };

  const toggleTodo = (todoId) => {
    setTodos(todos.map((todo) => {
      if (todo._id === todoId)
          todo.completed = !todo.completed;
      return todo;
    }));
  };

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo._id !== todoId))
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <NavBar />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
      </Container>
    </>
  );
}

export default App;
