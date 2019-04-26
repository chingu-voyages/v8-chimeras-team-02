import React, { Component } from 'react';
import { blue, grey } from '../resources/colors';
import styled from 'styled-components';

export default class Section extends Component {
  state = {
    // btnStyle: <Btn />,
  };
  render() {
    return (
      <div>
        <Btn
          // style={this.state.btnStyle}
          onClick={this.props.onClick}
          // onMouseEnter={() => this.setState({ btnStyle: <BtnHover /> })}
          // onMouseLeave={() => this.setState({ btnStyle: <Btn /> })}
        >
          {this.props.title}
        </Btn>
      </div>
    );
  }
}

const Btn = styled.button`
  font-size: 16px;
  /*color: ${grey};*/
  color: black;
  /*background-color: ${blue};*/
  border: 0px;
  padding: 10px 15px;
  margin-right: 15px;
  min-width: 80px;

  &:hover {
    cursor: pointer;
  }
`;

// TODO:
/*const BtnHover = styled.button`
  font-size: 20px;
  color: ${green};
  background-color: ${blue};
  border: 0px;
  font-family: Poppins;
  padding: 15px;
`;*/
