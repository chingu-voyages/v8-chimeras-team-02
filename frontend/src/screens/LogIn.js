import React, { Component } from 'react';
import { green, blue } from '../resources/colors';
import { unsolved2 } from '../resources/images';
import styled from 'styled-components';

export default class LogIn extends Component {
	render() {
		return (
			<Container>
				<Close onClick={this.props.onColse} src={unsolved2} />
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
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${blue};
	align-items: center;
	justify-content: center;
	width: 30%;
	height: 400px;
	border-radius: 10px;
`;

const Inputs = styled.input`
	border: 1px solid #ccc;
	background: white;
	height: 45px;
	width: 40%;
	align-items: left;
	margin-top: 25px;
	font-size: 16px;
	outline-color: ${green};
`;

const Button = styled.input`
	background: ${green};
	color: white;
	height: 60px;
	width: 40%;
	align-items: center;
	margin-top: 25px;
	font-size: 20px;
`;

const Error = styled.h3`
	color: red;
	font-size: 14px;
	margin-top: 25px;
	text-align: center;
`;
const Close = styled.img`
	width: 25px;
	height: 25px;
	/* resize-mode: contain; */
`;
