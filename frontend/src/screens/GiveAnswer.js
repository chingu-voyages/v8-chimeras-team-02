import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { green } from '../resources/colors';
import { CompleteItem, Answer, Header, Footer } from '../components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';


library.add(faSpinner)

class GiveAnswer extends Component {
  state = {
    answers: [],
  };

  submitAnswer = e => {
    e.preventDefault();
    const answer = [
      {
        question_id: this.props.match.params.questionId,
        answer: e.target[0].value,
        user: 'TheUser',
      },
    ];
    this.setState({ answers: [...this.state.answers, ...answer] });
    e.currentTarget.reset();

    this.props
      .create_answer({
        variables: {
          question_id: answer[0].question_id,
          answer: answer[0].answer,
          user_id: answer[0].user,
        },
      })
      .then(() => this.props.data.refetch())
      .catch(err => console.log(err));
  };

  onAnswerDelete = id => {
    this.props
      .delete_answer({
        variables: {
          question_id: this.props.match.params.questionId,
          _id: id,
        },
      })
      .then(() => this.props.data.refetch())
      .catch(err => console.log(err));
  };

  renderQuestion() {
    if (this.props.data.loading) {
      return <FontAwesomeIcon icon='spinner' spin style={{ fontSize: '50px', alignItems: 'center', margin: '0 auto', color: `${green}` }} />;
    } else {
      return (
        <CompleteItem
          title={this.props.data.question.title}
          question={this.props.data.question.question}
          user={'TheQuestionAsker'}
          date={'Just now'}
          likes={'0'}
        />
      );
    }
  }

  renderAnswers() {
    if (!this.props.data.loading && this.props.data.question.answers) {
      return this.props.data.question.answers.map(({ answer, _id }) => {
        return (
          <Answer
            key={_id}
            title={answer}
            user={'TheAnswerGiver'}
            date={'10000 B.C.'}
            likes={'0'}
            onDelete={() => this.onAnswerDelete(_id)}
          />
        );
      });
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <GridView>
          <Listview>
            {/* Question */}
            {this.renderQuestion()}

            {/* List of answers */}
            {this.renderAnswers()}

            {/* Submit answer form */}
            <h1 style={{ color: '#7f7f7f' }}>Your answer</h1>
            <form style={{ display: 'flex' }} onSubmit={this.submitAnswer}>
              <TextareaStyle placeholder="Enter answer..." />
              <Btn type="submit">
                Answer
              </Btn>
            </form>
          </Listview>
        </GridView>

        <Footer />
      </Container>
    );
  }
}

const GET_QUESTION = gql`
  query getQuestion($_id: ID!) {
    question(_id: $_id) {
      title
      question
      answers {
        _id
        answer
      }
    }
  }
`;

const CREATE_ANSWER = gql`
  mutation createAnswer($question_id: ID!, $answer: String!, $user_id: ID!) {
    createAnswer(question_id: $question_id, answer: $answer, user_id: $user_id) {
      _id
      answer
    }
  }
`;

const DELETE_ANSWER = gql`
  mutation deleteAnswer($question_id: ID!, $_id: ID!) {
    deleteAnswer(question_id: $question_id, _id: $_id) {
      _id
    }
  }
`;

export default compose(
  graphql(GET_QUESTION, {
    options: props => {
      return { variables: { _id: props.match.params.questionId } };
    },
  }),
  graphql(CREATE_ANSWER, { name: 'create_answer' }),
  graphql(DELETE_ANSWER, { name: 'delete_answer' })
)(GiveAnswer);

const Container = styled.div`
  color: #7f7f7f;
`;

const Listview = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  max-width: 50%;
`;
const GridView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

const TextareaStyle = styled.textarea`
  width: 140%;
  height: 100px;
  margin: 0 auto;
  boxShadow: 0px 0px 8px 4px gainsboro;
  border: 2px solid gainsboro;
  borderRadius: 4px;
  resize: none;
  padding: 5px;
`;

const Btn = styled.button`
  background-color: green;
  width: 100px;
  height: 50px;
  align-items: center;
  font-size: 17;
  color: white;
  border: 0px;
`;
