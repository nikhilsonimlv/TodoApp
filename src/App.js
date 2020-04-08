import "./App.css";
import React, { Component } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn React" },
      { id: 2, content: "Learn Redux" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };

  render() {
    return (
      <div className="todo-app container ">
        <h1 className="center black-text">Todo App</h1>
        <AddTodo addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
