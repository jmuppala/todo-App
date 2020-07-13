import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%'
  },
});

function TodoItem({ todo, toggleTodo, deleteTodo }) {

  return(
    <ListItem role={undefined} dense button onClick={() => toggleTodo(todo._id)}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': todo._id }}
        />
      </ListItemIcon>
      {todo.completed ? 
        <ListItemText style={{textDecoration: 'line-through'}} primary={todo.title} />
        : <ListItemText primary={todo.title} />
      }
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="comments" onClick={() => deleteTodo(todo._id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default function TodoList ({ todos, toggleTodo, deleteTodo }) {

  const classes = useStyles();

  return (
    <React.Fragment>
      <List className={classes.root}>
        {todos.filter((todo) => !todo.completed).map((todo) => {
          return (
            <TodoItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          );
        })}
      </List>
      <List className={classes.root}>
        {todos.filter((todo) => todo.completed).map((todo) => {
          return (
            <TodoItem key={todo._id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          );
        })}
      </List>
    </React.Fragment>
  );
}

