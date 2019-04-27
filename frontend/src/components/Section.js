import React, { Component } from 'react';
import styled from 'styled-components';

export default class Section extends Component {
  render() {
    return (
      <div>
        <Btn
          onClick={this.props.onClick}
        >
          {this.props.title}
        </Btn>
      </div>
    );
  }
}

const Btn = styled.button`
  font-size: 16px;
  color: black;
  border: 0px;
  padding: 10px 15px;
  margin-right: 15px;
  min-width: 80px;

  &:hover {
    cursor: pointer;
  }
`;
