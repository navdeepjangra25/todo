import React, {useState } from 'react';
import ThemeContext from './ThemeContext';

export const ThemeState = (props) =>{
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


    const addNewTodo = (value)=>{
        //console.log(value);
        setTodos([value, ...todos]);
    }

    const updateTodos = (value)=>{
        //console.log(value);
        setTodos(value);
    }

    const updateTodoText = (value)=>{
        setTodoText([value]);
    }

    //const state = {todoText, todos, updateTodos, updateTodoText}

    return (
        <ThemeContext.Provider value={{todoText, todos, addNewTodo, updateTodos, updateTodoText}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

//export default ThemeState;