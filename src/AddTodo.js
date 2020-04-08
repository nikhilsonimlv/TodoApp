import React, { Component } from "react";
import "./App.css";

export class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    this.props.addTodo(this.state);
    this.setState({
      content: "",
    });
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="hoverable" style={{ padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Todo:- </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
