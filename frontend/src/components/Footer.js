import React, { Component } from 'react';
import { grey } from '../resources/colors';
import styled from 'styled-components';

export default class Footer extends Component {
  render() {
    return <FooterDiv>Made with <span style={{color:'red'}}>♥</span> by v8-chimeras-team-02</FooterDiv>;
  }
}

const FooterDiv = styled.div`
  bottom: 0px;
  width: 100%;
  text-align: center;
  margin: 20px 0px 0px 0px;
  color: ${grey};
  border-top: 1px solid #efebeb;
  padding-top: 15px;
  padding-bottom: 15px;
`
