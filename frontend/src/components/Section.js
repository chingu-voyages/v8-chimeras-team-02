import React, { Component } from 'react';
import { green, blue } from "../resources/colors";
import styled from 'styled-components';

export default class Section extends Component {
    state = {
        btnStyle: <Btn />
    }
    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
                <button style={this.state.btnStyle}
                    onClick={this.props.onClick}
                    onMouseEnter={() => this.setState({ btnStyle: <BtnHover /> })}
                    onMouseLeave={() => this.setState({ btnStyle: <Btn /> })}>
                    {this.props.title}
                </button>
            </div>
        )
    }
}

const Btn = styled.button`
    fontSize: 16px;
    color: white;
    background-color: ${blue};
    border: 0px;
    font-family: Poppins;
    padding: 15px;
`;

const BtnHover = styled.button`
    font-size: 20px;
    color: ${green};
    background-color: ${blue};
    border: 0px;
    font-family: Poppins;
    padding: 15px;
`;