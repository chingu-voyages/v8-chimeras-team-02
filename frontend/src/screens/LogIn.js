import React, { Component } from 'react';
import { green } from '../resources/colors';
import styled from 'styled-components';

export default class LogIn extends Component {
  render() {
    return (
      <Container>
        {/*<Close onClick={this.props.onClose} src={unsolved2} />*/}
        <Form>
          <Inputs
            type="email"
            placeholder="E-mail"
            autoComplete="off"
            autoFocus="on"
            onChange={this.props.handleEmail}
            value={this.props.email}
          />
          <Inputs
            type="password"
            placeholder="Password"
            autoComplete="off"
            autoFocus="on"
            onChange={this.props.handlePassword}
            value={this.props.password}
          />
          <Error>{this.props.error}</Error>
          <Button type="submit" value="Log In" onClick={this.props.onClick} />
        </Form>
      </Container>
    );
  }
}
const Container = styled.div`
	display: flex;
	flex: 1;
	background-color: transparent;
	justify-content: center;
`

const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	border-radius: 5px;
	padding-bottom: 10px;
	border: 1px solid #f1f1f1;
`

const Inputs = styled.input`
	border: 1px solid #ccc;
	background: white;
	height: 35px;
	width: 80%;
	align-items: left;
	margin-top: 10px;
	font-size: 16px;
	outline-color: ${green};
	padding: 5px 10px;
	border-radius: 5px;
`

const Button = styled.input`
	background: ${green};
	color: white;
	height: auto;
	width: 90%;
	padding: 10px 15px;
	align-items: center;
	font-size: 14px;
`

const Error = styled.h3`
	color: red;
	font-size: 14px;
	margin-top: 25px;
	text-align: center;
`
