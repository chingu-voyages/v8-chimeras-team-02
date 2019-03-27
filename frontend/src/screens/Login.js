import React, { Component } from "react";
import { green } from "../resources/colors";

export default class Login extends Component {
    constructor(props) {
        super(props);
        state = {
            useremail: "",
            userpassword: ""
        }
    }

    handleEmailChange = (event) => {
        this.setState({ useremail: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ userpassword: event.target.value });
    }

    render() {
        return (
            <form style={container}>
                <input style={inputs}
                    type="email"
                    placeholder="E-mail"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={this.handleEmailChange}
                    value={this.state.useremail}
                ></input>
                <input style={inputs}
                    type="password"
                    placeholder="Password"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={this.handlePasswordChange}
                    value={this.state.userpassword}
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
    width: 250,
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