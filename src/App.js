import React from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import useTodos from './State/Todos';

function App() {

  const [todos, addTodo, toggleTodo, deleteTodo] = useTodos();

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
