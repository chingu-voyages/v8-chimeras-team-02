import React, { Component } from 'react';
import styled from 'styled-components';
import { green } from '../resources/colors';
export default class Logo extends Component {
    render() {
        return (
            <LogoStyled>ChinguFlow</LogoStyled>
        )
    }
}

const LogoStyled = styled.h1`
	color: ${green};
	padding: 15px;
	font-size: 3vw;
`
