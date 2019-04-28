import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar, Section, Logo } from '../components';
import { blue, green } from '../resources/colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from 'react-modal';
import Avatar from './Avatar';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import { getToken, setToken, resetToken } from '../utils';
import { ApolloConsumer } from 'react-apollo';

class Header extends Component {
  state = {
    rememToken: null,
    name: '',
    email: '',
    password: '',
    error: '',
    openLogIn: false,
  };

  componentWillMount() {
    getToken().then(val => {
      this.setState({ rememToken: val });
    });
  }

  onSignup() {
    let { name, email, password } = this.state;
    email = email.toLowerCase();
    if (email.length === 0 || name.length === 0 || password.length === 0) {
      this.setState({ error: 'Empty fields' });
    } else {
      this.setState({ error: '' });
      this.props
        .signup({
          variables: { name, email, password },
        })
        .then(({ data }) => {
          setToken(data.signup.rememberToken);
          this.setState({ rememToken: data.signup.rememberToken });
          this.setState({ openSignup: false });
          window.location.reload();
        })
        .catch(err => {
          this.setState({ error: err.message });
        });
    }
  }

  onLogIn() {
    let { email, password } = this.state;
    email = email.toLowerCase();
    if (email.length === 0 || password.length === 0) {
      this.setState({ error: 'Empty fields' });
    } else {
      this.setState({ error: '' });
      this.props
        .login({
          variables: { email, password },
        })
        .then(({ data }) => {
          setToken(data.login.rememberToken);
          this.setState({ rememToken: data.login.rememberToken });
          this.setState({ openLogIn: false });
          window.location.reload();
        })
        .catch(error => {
          this.setState({ error: 'Wrong email/password ' });
        });
    }
  }

  onLogout(client) {
    client
      .query({
        query: LOGOUT,
        variables: {},
      })
      .then(data => {
        this.setState({ rememToken: null });
        resetToken();
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { rememToken } = this.state;
    return (
      <HeaderContainer>
        <StyledLink exact="true" to={'/'}>
          <Logo />
        </StyledLink>
        <SearchBar onChangeText={this.props.onChangeText} onSearch={this.props.onSearch} />
        {rememToken ? (
          <StyledLink to={'/newquestion'}>
            <Section title="Ask" />
          </StyledLink>
        ) : null}
        {!rememToken ? (
          <div style={Holder}>
            <Section title="Log in" onClick={() => this.setState({ openLogIn: true })} />
            <Dropdown>
              <DropdownBtn>Sign up</DropdownBtn>
              <DropdownContent>
                <SignUp
                  handleName={event => this.setState({ name: event.target.value, error: '' })}
                  handleEmail={event => this.setState({ email: event.target.value, error: '' })}
                  handlePassword={event =>
                    this.setState({ password: event.target.value, error: '' })
                  }
                  onClick={() => {
                    this.onSignup();
                  }}
                  error={this.state.error}
                  onClose={() => this.setState({ openSignup: false })}
                />
              </DropdownContent>
            </Dropdown>
          </div>
        ) : (
          <ApolloConsumer>
            {client => <Avatar onClick={() => this.onLogout(client)} />}
          </ApolloConsumer>
        )}

        {/* For LogIn */}
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
          isOpen={this.state.openLogIn}
          onRequestClose={() => this.setState({ openLogIn: false })}
          contentLabel="Modal with image"
        >
          <LogIn
            handleEmail={event => this.setState({ email: event.target.value, error: '' })}
            handlePassword={event => this.setState({ password: event.target.value, error: '' })}
            onClick={() => this.onLogIn()}
            error={this.state.error}
            onClose={() => this.setState({ openLogIn: false })}
          />
        </Modal>

        {/* For Signup */}
        {/* <Modal
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
          isOpen={this.state.openSignup}
          onRequestClose={() => this.setState({ openSignup: false })}
          contentLabel="Modal with image"
        >
          <SignUp
            handleName={event => this.setState({ name: event.target.value })}
            handleEmail={event => this.setState({ email: event.target.value })}
            handlePassword={event => this.setState({ password: event.target.value })}
            onClick={() => {
              this.onSignup();
            }}
            error={this.state.error}
            onClose={() => this.setState({ openSignup: false })}
          />
        </Modal> */}
      </HeaderContainer>
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

const LOGOUT = gql`
  {
    logOut {
      _id
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
  /*background: ${blue};*/
  height: 85px;
  align-items: center;
  border-bottom: 1px solid #efebeb;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

/* Dropdown | Hover SignUp */
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0;
  background-color: #fff;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 35px;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const DropdownBtn = styled.button`
  border: 1px solid ${green};
  color: ${green};
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 5px;
  min-width: 90px;

  &:hover {
    cursor: pointer;
  }
`;

/*const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #fefefe;
  }
`*/

const Holder = {
  display: 'flex',
  flexDirection: 'row',
};
