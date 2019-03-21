import React, { Component } from "react";
import Home from "./Home";

export default class GiveAnswer extends Component {
  submitAnswer = e => {
    e.preventDefault();
    console.log("answer submitted");
    e.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <Home />
        <form onSubmit={this.submitAnswer}>
          <textarea placeholder="Enter answer" />
          <button type="submit">Answer</button>
        </form>
      </div>
    );
  }
}
