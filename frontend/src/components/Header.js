import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// add library
import styled from 'styled-components'
import { SearchBar, Section, ListItem, Logo, SideList } from '../components';
import { blue } from '../resources/colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from 'react-modal';
import Login from '../screens/Login';
import Avatar from './Avatar';

class Header extends Component {
    state = {
      name: '',
      email: '',
      password: '',
      error: '',
      openModal: false,
    };

    onSignup() {
  		const { name, email, password } = this.state;
  		this.props
  			.mutate({
  				variables: { name, email, password },
  			})
  			.then(data => console.log(JSON.stringify(data)))
  			.catch(err => console.log(err, password, email, name));
  	}

  	onLogin() {
  		const { email, password } = this.state;
  		if (email.length === 0 || password.length === 0) {
  			this.setState({ error: 'Empty fields' });
  		} else {
  			this.setState({ error: '' });
  			this.props
  				.mutate({
  					variables: { email, password },
  				})
  				.then(data => {
  					console.log(JSON.stringify(data));
  					this.setState({ openModal: false });
  				})
  				.catch(error => {
  					console.log(error);
  					this.setState({ error: 'Wrong email/password ' });
  				});
  		}
  	}

    onLogout() {
  		//Hannen code here
  	}

    render() {
        return (
          <HeaderContainer>
            <Link exact to={"/"} style={linkColor}>
              <h1 style={logo}>ChinguFlow</h1>
            </Link>
            <SearchBar />
            <Link to={"/newquestion"}>
              <Section title="Ask" />
            </Link>
            <Section title="Login" onClick={() => this.setState({ openModal: true })} />
            <Section title="Signup" onClick={() => this.onSignup()} />
            <Avatar />

            <Modal
    					style={{
    						overlay: {
    							backgroundColor: 'rgba(255,255,255,.2)',
    							alignItems: 'center',
    							justifyContent: 'center',
    						},
    						content: {
    							backgroundColor: 'transparent',
    							borderWidth: 0,
    							padding: 50,
    						},
    					}}
    					isOpen={this.state.openModal}
    					onRequestClose={() => this.setState({ openModal: false })}
    					contentLabel="Modal with image"
    				>
    					<Login
    						handleEmail={event => this.setState({ email: event.target.value })}
    						handlePassword={event => this.setState({ password: event.target.value })}
    						onClick={() => this.onLogin()}
    						error={this.state.error}
    					/>
    				</Modal>
          </HeaderContainer>
        )
    }
}

const SIGNUP = gql`
	mutation Signup($name: String!, $email: String!, $password: String!) {
		signup(name: $name, email: $email, password: $password) {
			_id
		}
	}
`;

const LOGIN = gql`
	mutation Login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			_id
			name
			email
			rememberToken
		}
	}
`;

export default graphql(LOGIN, SIGNUP)(Header);

// styled component
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: ${blue};
	height: 85px;
	align-items: center;
`

const logo = {
  color: '#fff',
  padding: '15px',
  fontSize: '4vw'
}

const linkColor = {
  textDecoration: 'none'
}
