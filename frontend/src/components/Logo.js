import React, { Component } from 'react';
import styled from 'styled-components';
export default class Logo extends Component {
    render() {
        return (
            <LogoStyled>ChinguFlow</LogoStyled>
        )
    }
}

const LogoStyled = styled.h1`
	color: #fff;
	padding: 15px;
	font-size: 4vw;
`;

