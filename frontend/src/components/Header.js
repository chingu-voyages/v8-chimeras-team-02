import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar, Section, Logo } from '../components';
import { blue } from '../resources/colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from 'react-modal';
import Avatar from './Avatar';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';

class Header extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    error: '',
    openLogIn: false,
    openSignup: false,
  };

  onSignup() {
    const { name, email, password } = this.state;
    this.props
      .signup({
        variables: { name, email, password },
      })
      .then(data => {
        console.log(JSON.stringify(data));
        this.setState({ openSignup: false });
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  onLogIn() {
    const { email, password } = this.state;

    if (email.length === 0 || password.length === 0) {
      this.setState({ error: 'Empty fields' });
    } else {
      this.setState({ error: '' });
      this.props
        .signup({
          variables: { email, password },
        })
        .then(data => {
          console.log(JSON.stringify(data));
          this.setState({ openLogIn: false });
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
        <StyledLink exact to={'/'}>
          <Logo />
        </StyledLink>
        <SearchBar />
        <StyledLink to={'/newquestion'}>
          <Section title="Ask" />
        </StyledLink>
      </HeaderContainer>
      // <HeaderContainer>
      // 	<StyledLink exact to={'/'}>
      // 		<Logo />
      // 	</StyledLink>
      // 	<SearchBar />
      // 	<StyledLink to={'/newquestion'}>
      // 		<Section title="Ask" />
      // 	</StyledLink>
      // 	<Section title="LogIn" onClick={() => this.setState({ openLogIn: true })} />
      // 	<Section title="Signup" onClick={() => this.setState({ openSignup: true })} />
      // 	<Avatar />
      // 	{/* For LogIn */}
      // 	<Modal
      // 		style={{
      // 			overlay: {
      // 				backgroundColor: 'rgba(255,255,255,.2)',
      // 				alignItems: 'center',
      // 				justifyContent: 'center',
      // 			},
      // 			content: {
      // 				backgroundColor: 'transparent',
      // 				borderWidth: 0,
      // 				padding: 50,
      // 			},
      // 		}}
      // 		isOpen={this.state.openLogIn}
      // 		onRequestClose={() => this.setState({ openLogIn: false })}
      // 		contentLabel="Modal with image"
      // 	>
      // 		<LogIn
      // 			handleEmail={event => this.setState({ email: event.target.value })}
      // 			handlePassword={event => this.setState({ password: event.target.value })}
      // 			onClick={() => this.onLogIn()}
      // 			error={this.state.error}
      // 			onColse={() => this.setState({ openLogIn: false })}
      // 		/>
      // 	</Modal>

      // 	{/* For Signup */}
      // 	<Modal
      // 		style={{
      // 			overlay: {
      // 				backgroundColor: 'rgba(255,255,255,.2)',
      // 				alignItems: 'center',
      // 				justifyContent: 'center',
      // 			},
      // 			content: {
      // 				backgroundColor: 'transparent',
      // 				borderWidth: 0,
      // 				padding: 50,
      // 			},
      // 		}}
      // 		isOpen={this.state.openSignup}
      // 		onRequestClose={() => this.setState({ openSignup: false })}
      // 		contentLabel="Modal with image"
      // 	>
      // 		<SignUp
      // 			handleName={event => this.setState({ name: event.target.value })}
      // 			handleEmail={event => this.setState({ email: event.target.value })}
      // 			handlePassword={event => this.setState({ password: event.target.value })}
      // 			onClick={() => {
      // 				this.onSignup();
      // 			}}
      // 			error={this.state.error}
      // 			onColse={() => this.setState({ openSignup: false })}
      // 		/>
      // 	</Modal>
      // </HeaderContainer>
    );
  }
}

const SIGNUP = gql`
  mutation Signup($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      _id
      name
      rememberToken
    }
  }
`;

const LOGIN = gql`
  mutation LogIn($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      _id
      name
      email
      rememberToken
    }
  }
`;

export default compose(
  graphql(SIGNUP, { name: 'signup' }),
  graphql(LOGIN, { name: 'login' })
)(Header);

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${blue};
  height: 85px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
