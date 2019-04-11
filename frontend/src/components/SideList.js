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
import styled from 'styled-components';
export default class SideList extends Component {
  state = {
    selected: "",
  };
  render() {
    const { selected } = this.state;
    return (
      <SideListDiv>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
        <SideItem
          onClick={() => this.setState({ selected: "Unsolved" })}
        >
          <Icon
            src={selected === "Unsolved" ? unsolved2 : unsolved}
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
              color: selected === "Unsolved" ? green : "black",
              backgroundColor:
                selected === "Unsolved"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"Unsolved"}
          </p>
        </SideItem>

        <SideItem
          onClick={() => this.setState({ selected: "Solved" })}
        >
          <Icon
            src={selected === "Solved" ? solved2 : solved}
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
              color: selected === "Solved" ? green : "black",
              backgroundColor:
                selected === "Solved"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"Solved"}
          </p>
        </SideItem>

        <SideItem
          onClick={() => this.setState({ selected: "My Questions" })}
        >
          <Icon
            src={selected === "My Questions" ? myq2 : myq}
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
              color: selected === "My Questions" ? green : "black",
              backgroundColor:
                selected === "My Questions"
                  ? "rgba(47, 224, 144, .2)"
                  : "transparent",
            }}
          >
            {"My Questions"}
          </p>
        </SideItem>
      </SideListDiv>
    );
  }
}

const SideListDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
  align-self: flex-start;
  max-width: 30%;
`;

const SideItem = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 30px;
  padding-bottom: 20px;
  background-color: transparent;
  border: 0px;
  outline: 0px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  resize-mode: contain;
  margin-right: 10px;
  background-color: black;
`;
