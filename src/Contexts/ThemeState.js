import React, {useState } from 'react';
import ThemeContext from './ThemeContext';

const ThemeState = (props) =>{
    const [todoText, setTodoText] = useState('');
    const [todos, setTodos] = useState([
        {
        id: 1,
        text: "Drinking Water",
        isDone: false,
        },
        {
        id: 2,
        text: "Coding",
        isDone: false,
        },
        {
        id: 3,
        text: "Running",
        isDone: true,
        },
    ]);


    const updateTodos = (value)=>{
        setTodos([value, ...todos]);
    }

    const updateTodoText = (value)=>{
        setTodoText([value]);
    }

    return (
        <ThemeContext.provider value={todoText, todos, updateTodos, updateTodoText}>
            {props.children}
        </ThemeContext.provider>
    )
}

export default ThemeState;