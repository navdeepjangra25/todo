import React from "react";
import { v4 as uuidv4 } from "uuid";

import "./Todos.css";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import ThemeContext from '../../Contexts/ThemeContext';
import { useContext, useEffect } from 'react';

const Todos = () => {
  const state = useContext(ThemeContext)
  const changeTodoText = (e) => {
    state.updateTodoText(e.target.value)
  };

  useEffect(()=>{
    console.log(state.todos);
  }, [state.todos])

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: state.todoText,
      isDone: false,
    };
    state.addNewTodo(newTodo)
    state.updateTodoText('')
  };

  const completeTodo = (id) =>{
      const updatedTodos = state.todos.map(todo => {
          if(todo.id === id){
              todo.isDone=true;
              return todo;
          }
          return todo;
      })
      state.updateTodos(updatedTodos)
  };

  const deleteTodo = (id) => {
    console.log(id);
   const updatedTodos = state.todos.filter(todo =>todo.id !== id);
   state.updateTodos(updatedTodos)

  };

  return (
    <div>
    <div className="card shadow">
      <div className="card-header">
          <AddItem 
          todoText={state.todoText} 
          changeTodoText={changeTodoText}
          addTodo={addTodo} />
      </div>
      <ul className="list-group list-group-flush ">
        {state.todos.map((todo) => {
          return (
            <TodoItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={todo.id}/>
          );
        })}
      </ul>
    </div>
    </div>
  );
};

export default Todos;
