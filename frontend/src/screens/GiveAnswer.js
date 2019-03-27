import React, { Component } from "react";
import { user } from "../resources/images";
import { blue, green } from "../resources/colors";
import { SearchBar, Section, ListItem, Logo, SideList } from "../components";

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
      <div style={container}>
        <div style={header}>
          <Logo />
          <SearchBar />
          <Section title="Ask" />
          <Section title="Login" />
          <Section title="Signup" />

          <img src={user} style={avatar} alt={user} />
        </div>

        <div style={gridView}>
          <SideList />
          <div style={listview}>
            <ListItem
              title={"Undefined is not an object React Native"}
              user={"Hanen Wahabi"}
              date={"16-03-2019"}
              likes={"4"}
            />
            {this.state.answers.length === 0 ? (
              <h1 style={{ color: "white" }}>Your answer</h1>
            ) : (
              <h1 style={{ color: "white" }}>
                {this.state.answers.length} Answers
              </h1>
            )}
            {this.state.answers.map(answer => (
              <ListItem
                title={answer}
                user={"TheAnswerGiver"}
                date={"Just now"}
                likes={"0"}
              />
            ))}
            <form style={{ display: "flex" }} onSubmit={this.submitAnswer}>
              <textarea style={textareaStyle} placeholder="Enter answer..." />
              <button style={btn} type="submit">
                Answer
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const container = {
  backgroundColor: blue,
};

const header = {
  display: "flex",
  flexDirection: "row",
  background: "linear-gradient(to top, #00AB90 0%, #080A38 15%, #080A38 100%)",
  height: 85,
  alignItems: "center",
};

const avatar = {
  height: 35,
  width: 35,
  borderRadius: 40,
  border: "30px solid #2FE090",
  borderWidth: 2,
  resizeMode: "cover",
  marginRight: 40,
  marginLeft: 20,
};

const listview = {
  display: "flex",
  flex: 3,
  flexDirection: "column",
};

const gridView = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  marginTop: 40,
};

const textareaStyle = {
  width: "412px",
};

const btn = {
  backgroundColor: green,
  width: 100,
  height: 36,
  alignItems: "center",
  fontSize: 14,
  color: "white",
  fontFamily: "Poppins",
  border: "0px",
};
