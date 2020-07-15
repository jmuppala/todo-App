import * as ActionTypes from './ActionTypes';
import { useReducer, useEffect, useRef } from 'react';

function reducer (state, action) {
    switch(action.type) {
        case ActionTypes.ADD_TODO:
            return state.concat({_id: Date.now(), title: action.payload, completed: false});

        case ActionTypes.TOGGLE_TODO:
            return state.map((todo) => {
                if (todo._id === action.payload)
                    todo.completed = !todo.completed;
                return todo;
            });

        case ActionTypes.DELETE_TODO:
            return state.filter((todo) => todo._id !== action.payload);

        default:
            return state;
    }
}

export default function useTodos() {

    const [todos, dispatch] = useReducer(reducer, []);
    const actionRef = useRef();
    const oldStateRef = useRef();

    const myDispatch = (action) => {
        actionRef.current = action;
        oldStateRef.current = todos;
        dispatch(action);
    };

    const addTodo = (todoTitle) => myDispatch({
        type: ActionTypes.ADD_TODO,
        payload: todoTitle
    });
    
    const toggleTodo = (todoId) => myDispatch({
        type: ActionTypes.TOGGLE_TODO,
        payload: todoId
    });
    
    const deleteTodo = (todoId) => myDispatch({
        type: ActionTypes.DELETE_TODO,
        payload: todoId
    });
  
    useEffect(() => {
        const action = actionRef.current;
    
        if (action) {
          console.group('Todos');
          console.log('Prev State:', oldStateRef.current);
          console.log('Action:', action);
          console.log('Next State:', todos);
          console.groupEnd();
        }
    }, [todos]);

    return [todos, addTodo, toggleTodo, deleteTodo];
}