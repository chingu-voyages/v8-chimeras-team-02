import React, { Component } from "react";
import { green } from "../resources/colors";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form style={container}>
                <input style={inputs}
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                    autoFocus="on"
                // onChange={this.handleChange}
                // value={this.props.value}
                ></input>
                <input style={inputs}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    autoFocus="on"
                // onChange={this.props.handleChange}
                // value={this.props.value}
                ></input>
                <input style={button}
                    type="submit"
                    value="Log In"
                ></input>
            </form>
        );
    }
}

const container = {
    backgroundColor: "white"
};

const inputs = {
    display: "flex",
    flexDirection: "row",
    border: "1px solid green",
    background: "white",
    height: 85,
    alignItems: "left",
};

const button = {
    display: "flex",
    flexDirection: "row",
    background: "green",
    color: "white";
    height: 85,
    alignItems: "center",
};