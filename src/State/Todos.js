import { useState } from 'react';

export default function useTodos() {

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
    
    return [todos, addTodo, toggleTodo, deleteTodo];
}