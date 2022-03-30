import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Todos.css";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import ThemeState from '../../Contexts/ThemeState';
import { useContext } from 'react';

const Todos = () => {
  const state = useContext(ThemeState)
  console.log(state)


  const changeTodoText = (e) => {
    //setTodoText(e.target.value);
    state.updateTodoText(e.target.value)
};

  const addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      text: state.todoText,
      isDone: false,
    };
    //setTodos([newTodo, ...todos]);
    state.updateTodos(newTodo)
    //setTodoText("");
    state.updateTodoText('')
  };

  const completeTodo = (id) =>{
      console.log(id);
      const updatedTodos = state.todos.map(todo => {
          if(todo.id === id){
              todo.isDone=true;
              return todo;
          }
          return todo;
      })
      //console.log(updatedTodos)
      //setTodos(updatedTodos);
      state.updateTodos(updatedTodos)
  };

  const deleteTodo = (id) => {
   const updatedTodos = state.todos.filter(todo =>todo.id !== id);
   //setTodos(updatedTodos);
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
