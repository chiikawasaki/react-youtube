import React from "react";

export const Todo = ({ todo,toggleTodo }) => {
    const handleTodoClick = () => {
        toggleTodo(todo.id); //自分自身を押す
    }
  return (
    <div>
      <label>
        <input 
        type="checkbox" 
        checked={todo.completed} 
        readOnly
        onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
