import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
//import { Link } from 'react-router-dom';
//import { user } from '../resources/images';
import { green } from '../resources/colors';
import { Header, Footer } from '../components';
import styled from 'styled-components';

class NewQuestion extends Component {
	state = {
		title: '',
		question: 'question from state',
	};

	createQuestion = e => {
		e.preventDefault();
		this.props
			.mutate({
				variables: {
					title: this.state.title,
					question: this.state.question,
					user_id: '48fb152f-f5a7-45bb-88bd-2ee0e9ead1ab',
					tags: [],
					answers_ids: [],
				},
			})
			.then(data => this.props.history.push(`/giveanswer/${data.data.createQuestion._id}`))
			.catch(err => console.log(err));
	};

	handleChange = e => {
		this.setState({ title: e.target.value });
	};

	render() {
		return (
			<div>
				<Header />
				<GridView>
					<FormView>
						<form onSubmit={this.createQuestion}>
							<NewQuestionForm
								placeholder="Add new question"
								value={this.state.title}
								onChange={this.handleChange}
							/>
							<br />
							<AskBtn type="submit">Ask</AskBtn>
						</form>
					</FormView>
				</GridView>

				<Footer />
			</div>
		);
	}
}

const CREATE_QUESTION = gql`
	mutation createQuestion($title: String!, $question: String!, $user_id: ID, $tags: [String], $answers_ids: [ID]) {
		createQuestion(title: $title, question: $question, user_id: $user_id, tags: $tags, answers_ids: $answers_ids) {
			_id
			title
			question
		}
	}
`;

export default graphql(CREATE_QUESTION)(NewQuestion);

const FormView = styled.div`
	display: flex;
	flex: 3;
	justify-content: center;
`;

const GridView = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	margin-top: 40;
	color: white;
	justify-content: center;
`;

const NewQuestionForm = styled.textarea`
	width: 80vw;
	height: 100px;
	margin: 0 auto;
	box-shadow: 0px 0px 8px 4px gainsboro;
	border: 2px solid gainsboro;
	border-radius: 4px;
	resize: none;
	padding: 5px;
`;

const AskBtn = styled.button`
	background-color: ${green};
	width: 100px;
	height: 36px;
	align-items: center;
	font-size: 14px;
	color: white;
	font-family: Poppins;
	border: 0px;
`;
