import React, { Component } from "react";
import Home from "./Home";
import { SearchBar } from "../components";

export default class GiveAnswer extends Component {
  state = {
    answer: "",
  };

  submitAnswer = e => {
    e.preventDefault();
    this.setState({ answer: "" });
  };

  handleChange = e => {
    this.setState({ answer: e.target.value });
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
