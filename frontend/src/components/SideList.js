import React, { Component } from "react";
import { green, blue } from "../resources/colors";
import {
  myq,
  unsolved,
  unsolved2,
  solved2,
  solved,
  myq2,
} from "../resources/images";

export default class SideList extends Component {
  state = {
    selected: "",
  };
  render() {
    const { selected } = this.state;
    return (
      <div style={sideList}>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <button
          style={sideItem}
          onClick={() => this.setState({ selected: "Unsolved" })}
        >
          <img
            src={selected === "Unsolved" ? unsolved2 : unsolved}
            style={icon}
            alt={unsolved}
          />
          <p
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginTop: 0,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === "Unsolved" ? green : "white",
              backgroundColor:
                selected === "Unsolved"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"Unsolved"}
          </p>
        </button>

        <button
          style={sideItem}
          onClick={() => this.setState({ selected: "Solved" })}
        >
          <img
            src={selected === "Solved" ? solved2 : solved}
            style={icon}
            alt={solved}
          />
          <p
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginTop: 0,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === "Solved" ? green : "white",
              backgroundColor:
                selected === "Solved"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"Solved"}
          </p>
        </button>

        <button
          style={sideItem}
          onClick={() => this.setState({ selected: "My Questions" })}
        >
          <img
            src={selected === "My Questions" ? myq2 : myq}
            style={icon}
            alt={myq}
          />
          <p
            style={{
              fontSize: 14,
              fontFamily: "Poppins",
              marginTop: 0,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === "My Questions" ? green : "white",
              backgroundColor:
                selected === "My Questions"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"My Questions"}
          </p>
        </button>
      </div>
    );
  }
}
const sideList = {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  marginTop: 40,
  marginLeft: 25,
  alignSelf: "flex-start",
};
const sideItem = {
  display: "flex",
  flex: 1,
  flexDirection: "row",
  marginLeft: 30,
  paddingBottom: 20,
  backgroundColor: "transparent",
  border: "0px",
  outline: 0,
};

const icon = {
  width: 20,
  height: 20,
  resizeMode: "contain",
  marginRight: 10,
  backgroundColor: blue,
};
