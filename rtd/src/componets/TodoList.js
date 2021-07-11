import React from "react";
import Todo from "./Todo";
const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => {
          <todo text={todo.text} id={todo.id} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
