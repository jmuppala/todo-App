import React, { useRef } from 'react';
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

    const todoItem = useRef();

    const handleSubmit = (event) => {
      event.preventDefault();
      addTodo(todoItem.current.value);
      todoItem.current.value = '';
    }

    return(
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField inputRef={todoItem} label="Add To Do Item Here" />
      </form>
    );

}
