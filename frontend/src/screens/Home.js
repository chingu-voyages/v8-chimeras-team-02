import React, { Component } from 'react';
import { user } from '../resources/images';
import { blue, green } from '../resources/colors';
import { SearchBar, Section, ListItem, Logo, SideList, Header, Footer } from '../components';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Modal from 'react-modal';
import Login from './Login';

class Home extends Component {
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

	render() {
		return (
			<div style={container}>
				<Header />
				{/*<div style={header}>
					<Logo />
					<SearchBar />
					<Section title="Ask" />
					<Section title="Login" onClick={() => this.setState({ openModal: true })} />
					<Section title="Signup" onClick={() => this.onSignup()} />
					<img src={user} style={avatar} alt={user} />
				</div>*/}

				<div style={gridView}>
					<SideList />
					<div style={listview}>
						<h2 style={{textAlign:'left'}}>New Questions</h2>
						<ListItem
							title={'Undefined is not an object React Native'}
							user={'Hanen Wahabi'}
							date={'16-03-2019'}
							likes={'4'}
						/>
					</div>
				</div>

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

				<div>
					<Footer />
				</div>
			</div>
		);
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

export default graphql(LOGIN, SIGNUP)(Home);

const container = {

};
const header = {
	display: 'flex',
	flexDirection: 'row',
	background: 'linear-gradient(to top, #00AB90 0%, #080A38 15%, #080A38 100%)',
	height: 85,
	alignItems: 'center',
};

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
const listview = {
	display: 'flex',
	flex: 3,
	flexDirection: 'column',
	maxWidth:'50%'
};
const gridView = {
	display: 'flex',
	flex: 1,
	flexDirection: 'row',
	marginTop: 40
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
