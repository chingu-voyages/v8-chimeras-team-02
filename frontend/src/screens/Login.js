import React, { Component } from 'react';
import { green, blue } from '../resources/colors';
import { unsolved2 } from '../resources/images';

export default class LogIn extends Component {
	render() {
		return (
			<div style={container}>
				<img onClick={this.props.onColse} src={unsolved2} style={close} />
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
					<input style={button} type="submit" value="Log In" onClick={this.props.onClick} />
				</div>
			</div>
		);
	}
}
const container = {
	display: 'flex',
	flex: 1,
	backgroundColor: 'transparent',
	// alignItems: 'center',
	justifyContent: 'center',
};
const form = {
	display: 'flex',
	flexDirection: 'column',
	backgroundColor: blue,
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

const close = {
	width: 25,
	height: 25,
	resizeMode: 'contain',
};
