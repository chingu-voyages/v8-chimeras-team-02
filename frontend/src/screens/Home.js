import React, { Component } from "react";
import { user } from "../resources/images";
import { blue } from "../resources/colors";
import { SearchBar, Section, ListItem, Logo, SideList } from "../components";

export default class Home extends Component {
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
