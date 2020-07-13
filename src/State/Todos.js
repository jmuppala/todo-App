import * as ActionTypes from './ActionTypes';
import { useReducer } from 'react';

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
    
    const addTodo = (todoTitle) => dispatch({
        type: ActionTypes.ADD_TODO,
        payload: todoTitle
    });
    
    const toggleTodo = (todoId) => dispatch({
        type: ActionTypes.TOGGLE_TODO,
        payload: todoId
    });
    
    const deleteTodo = (todoId) => dispatch({
        type: ActionTypes.DELETE_TODO,
        payload: todoId
    });

    return [todos, addTodo, toggleTodo, deleteTodo];
}