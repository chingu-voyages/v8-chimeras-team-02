import React, { Component } from "react";
import Home from "./Home";
import ListItem from "../components/ListItem";

export default class GiveAnswer extends Component {
  state = {
    answers: [],
  };

  submitAnswer = e => {
    e.preventDefault();
    const answer = e.target[0].value;
    this.setState({ answers: [...this.state.answers, answer] });
    e.currentTarget.reset();
  };

  render() {
    return (
      <div>
        <Home />
        {this.state.answers.map(answer => (
          <ListItem
            title={answer}
            user={"TheAnswerGiver"}
            date={"Today"}
            likes={"100"}
          />
        ))}
        <form onSubmit={this.submitAnswer}>
          <textarea placeholder="Enter answer..." />
          <button type="submit">Answer</button>
        </form>
      </div>
    );
  }
}
