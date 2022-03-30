import React from 'react';

const TodoItem = (props) => {
    const{todo,deleteTodo,completeTodo}=props;
    return (
        <li className="list-group-item d-flex justify-content-between" >
        <div>
        <input type="checkbox" checked={todo.isDone} onChange={() => {
             completeTodo(todo.id)
         }}  />
         <span   className={todo.isDone?`completed`:null}> {todo.text}</span>
        </div>
        <i className="fas fa-trash-alt" onClick={()=> deleteTodo(todo.id)}></i>
        </li>
    );
};

export default TodoItem;
