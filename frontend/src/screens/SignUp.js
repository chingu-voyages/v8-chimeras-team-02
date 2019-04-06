import React, { Component } from 'react';
import { green } from '../resources/colors';

export default class SignUp extends Component {
	render() {
		return (
			<div style={container}>
				<div style={form}>
					<input
						style={inputs}
						type="email"
						placeholder="E-mail"
						autoComplete="off"
						autoFocus="on"
						onChange={this.props.handleEmail}
						value={this.props.email}
					/>
					<input
						style={inputs}
						type="password"
						placeholder="Password"
						autoComplete="off"
						autoFocus="on"
						onChange={this.props.handlePassword}
						value={this.props.password}
					/>
					<h3 style={error}>{this.props.error}</h3>
					<input style={button} type="submit" value="Sign Up" onClick={this.props.onClick} />
				</div>
			</div>
		);
	}
}
const container = {
	display: 'flex',
	flex: 1,
	backgroundColor: 'transparent',
	alignItems: 'center',
	justifyContent: 'center',
};
const form = {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
	width: '30%',
	height: 400,
	borderRadius: 10,
};

const inputs = {
	border: '1px solid #ccc',
	background: 'white',
	height: 45,
	width: '40%',
	alignItems: 'left',
	marginTop: 25,
	fontSize: 16,
	outlineColor: green,
};

const button = {
	background: green,
	color: 'white',
	height: 60,
	width: '40%',
	alignItems: 'center',
	marginTop: 25,
	fontSize: 20,
};

const error = {
	color: 'red',
	fontSize: 14,
	marginTop: 25,
	textAlign: 'center',
};
