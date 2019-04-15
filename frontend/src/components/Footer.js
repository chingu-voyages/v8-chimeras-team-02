import React, { Component } from 'react';
import { blue } from "../resources/colors";
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return (
      <FooterDiv>
        Made with ♥
      </FooterDiv>
    )
  }
}

const FooterDiv = styled.div`
  background-color: ${blue};
  bottom: 0px;
  width: 100%;
  text-align: center;
  margin: 20px 0px 0px 0px;
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
`;
