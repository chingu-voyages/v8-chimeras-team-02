import React, { Component } from 'react';
import { SearchBar, Section, ListItem, Logo, SideList, Footer } from '../components';
import { user } from '../resources/images';
import { blue } from '../resources/colors';

export default class Header extends Component {
    render() {
        return (
          <div style={header}>
            <h1 style={logo}>ChinguFlow</h1>
            <SearchBar />
            <Section title="Ask" />
            <Section title="Login" onClick={() => this.setState({ openModal: true })} />
            <Section title="Signup" onClick={() => this.onSignup()} />
            <img src={user} style={avatar} alt={user} />
          </div>

        )
    }
}

const header = {
	display: 'flex',
	flexDirection: 'row',
	background: blue,
	height: 85,
	alignItems: 'center',
};

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
