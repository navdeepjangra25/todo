import React from 'react';

const AddItem = (props) => {
    const{todoText,changeTodoText,addTodo}=props;
    return (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            value={todoText}
            onChange={(e) => changeTodoText(e)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={addTodo}>
              Add
            </button>
          </div>
        </div>
    );
};

export default AddItem;

