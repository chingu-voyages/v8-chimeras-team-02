import React, { Component } from 'react';
// add library
import styled from 'styled-components'
import { SearchBar, Section, ListItem, Logo, SideList, Footer } from '../components';
import { user } from '../resources/images';
import { blue } from '../resources/colors';

export default class Header extends Component {
    render() {
        return (
          <HeaderContainer>
            <h1 style={logo}>ChinguFlow</h1>
            <SearchBar />
            <Section title="Ask" />
            <Section title="Login" onClick={() => this.setState({ openModal: true })} />
            <Section title="Signup" onClick={() => this.onSignup()} />
            <img src={user} style={avatar} alt={user} />
          </HeaderContainer>

        )
    }
}

// styled component
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: #070a37;
	height: 85px;
	align-items: center;
`

const logo = {
  color: '#fff',
  padding: '15px',
  fontSize: '4vw'
}

const avatar = {
	height: 35,
	width: 35,
	borderRadius: 40,
	border: '30px solid #2FE090',
	borderWidth: 2,
	resizeMode: 'cover',
	marginRight: 40,
	marginLeft: 20,
};
