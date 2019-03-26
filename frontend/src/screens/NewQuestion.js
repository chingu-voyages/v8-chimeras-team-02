import React, { Component } from "react";
import { user } from "../resources/images";
import { blue, green } from "../resources/colors";
import { SearchBar, Section, Logo } from "../components";

export default class NewQuestion extends Component {
  state = {
    question: "",
  };

  askQuestion = e => {
    e.preventDefault();
    this.setState({ question: "" });
  };

  handleChange = e => {
    this.setState({ question: e.target.value });
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
          <div style={formView}>
            <form onSubmit={this.askQuestion}>
              <textarea
                style={newQuestionForm}
                placeholder="Enter question ..."
                value={this.state.question}
                onChange={this.handleChange}
              />
              <br />
              <button type="submit" style={askBtn}>Ask</button>
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
const formView = {
  display: "flex",
  flex: 3,
  justifyContent: "center",
};
const gridView = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  marginTop: 40,
};
const newQuestionForm = {
  width: "80vw",
  margin: "0 auto",
}

const askBtn = {
    backgroundColor: green,
    width: 100,
    height: 36,
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins',
    border: '0px'
}
