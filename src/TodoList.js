import React from "react";
import "./App.css";

const TodoList = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {todo.content}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );

  return <div className="todos collection z-depth-5">{todoList}</div>;
};

export default TodoList;
