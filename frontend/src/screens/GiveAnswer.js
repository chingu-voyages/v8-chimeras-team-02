import React, { Component } from "react";
import Home from "./Home";

export default class GiveAnswer extends Component {
  state = {
    value: "",
  };

  submitAnswer = e => {
    e.preventDefault();
    console.log(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    return (
      <div>
        <Home />
        <form onSubmit={this.submitAnswer}>
          <textarea
            placeholder="Enter answer..."
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Answer</button>
        </form>
      </div>
    );
  }
}
