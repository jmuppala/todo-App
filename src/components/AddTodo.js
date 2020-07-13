import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      '& .MuiTextField-root': {
        margin: '30px 0',
        width: '100%'
      }
    }
});

export default function  AddTodo ({ addTodo }) {
    const classes = useStyles();

    const [todoItem, setTodoItem] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addTodo(todoItem);
      setTodoItem('');
    }

    return(
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField label="Add To Do Item Here" value={todoItem} onChange={event => setTodoItem(event.target.value)} />
      </form>
    );

}
