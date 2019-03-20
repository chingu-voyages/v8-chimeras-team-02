import React, { Component } from 'react';
import { green, blue } from "../resources/colors";

export default class Section extends Component {
    state = {
        btnStyle: btn
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
                <button style={this.state.btnStyle}
                    onMouseEnter={() => this.setState({ btnStyle: btnHover })}
                    onMouseLeave={() => this.setState({ btnStyle: btn })}>
                    {this.props.title}
                </button>
            </div>

        )
    }
}

const btn = {
    fontSize: 16,
    color: 'white',
    backgroundColor: blue,
    border: '0px',
    fontFamily: 'Poppins',
    padding: 15,
}

const btnHover = {
    fontSize: 20,
    color: green,
    backgroundColor: blue,
    border: '0px',
    fontFamily: 'Poppins',
    padding: 15,
}

