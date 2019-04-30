import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { green } from '../resources/colors';
import { CompleteItem, Answer, Header, Footer } from '../components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

library.add(faSpinner);

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
        user: this.props.user.currentUser._id,
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
      .then(() => {
        this.props.data.refetch();
      })
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
      return (
        <FontAwesomeIcon
          icon="spinner"
          spin
          style={{ fontSize: '50px', alignItems: 'center', margin: '0 auto', color: `${green}` }}
        />
      );
    } else {
      console.log(this.props.data);

      return (
        <CompleteItem
          title={this.props.data.question.title}
          question={this.props.data.question.question}
          user={this.props.data.question.user.name}
          date={this.props.data.question.createAt}
          likes={'0'}
        />
      );
    }
  }

  updateAnswer(_id) {
    if (this.props.user.currentUser) {
      if (this.props.user.currentUser._id === this.props.data.question.user._id) {
        this.props
          .update_answer({
            variables: {
              question_id: this.props.match.params.questionId,
              _id,
              iscorrect: true,
            },
          })
          .then(() => {
            this.props.data.refetch();
          })
          .catch(err => console.log(err));
      } else console.log("You're not the owner of this question");
    }
  }

  renderAnswers() {
    if (!this.props.data.loading && this.props.data.question.answers) {
      return this.props.data.question.answers.map(
        ({ _id, createDate, answer, iscorrect, user }) => {
          return (
            <Answer
              key={_id}
              answer={answer}
              user={user}
              date={createDate}
              iscorrect={iscorrect}
              onDelete={() => this.onAnswerDelete(_id)}
              updateAnswer={() => this.updateAnswer(_id, answer)}
              currentUser={this.props.user.currentUser ? this.props.user.currentUser._id : null}
            />
          );
        }
      );
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
            {this.props.user.currentUser ? (
              <div style={{width: '100%'}}>
                <h1 style={{ color: '#7f7f7f' }}>Your answer</h1>
                <form onSubmit={this.submitAnswer}>
                  <TextareaStyle placeholder="Enter answer..." />
                  <br />
                  <Btn type="submit">Answer</Btn>
                </form>
              </div>
            ) : null}
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
      createAt
      user {
        _id
        name
      }
      answers {
        _id
        createDate
        answer
        iscorrect
        user {
          _id
          name
        }
      }
    }
  }
`;

const CREATE_ANSWER = gql`
  mutation createAnswer($question_id: ID!, $answer: String!, $user_id: ID!) {
    createAnswer(question_id: $question_id, answer: $answer, user_id: $user_id) {
      _id
      answer
      iscorrect
      createDate
      user {
        _id
        name
      }
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
const UPDATE_ANSWER = gql`
  mutation updateAnswer($question_id: ID!, $_id: ID!, $newAnswer: String, $iscorrect: Boolean!) {
    updateAnswer(
      question_id: $question_id
      _id: $_id
      newAnswer: $newAnswer
      iscorrect: $iscorrect
    ) {
      _id
      answer
      iscorrect
      createDate
      user {
        _id
        name
      }
    }
  }
`;

const CURRENT_USER = gql`
  {
    currentUser {
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
  graphql(DELETE_ANSWER, { name: 'delete_answer' }),
  graphql(UPDATE_ANSWER, { name: 'update_answer' }),
  graphql(CURRENT_USER, { name: 'user' })
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
  width: 100%;
  height: auto;
  min-height: 150px;
  margin: 0 auto;
  box-shadow: 0px 0px 8px 4px gainsboro;
  border: 2px solid gainsboro;
  border-radius: 4px;
  resize: none;
  padding: 5px;
  box-sizing: border-box;
`;

const Btn = styled.button`
  background-color: ${green};
  width: 100px;
  height: 36px;
  margin: 5px 0 0 5px;
  align-items: center;
  font-size: 14px;
  color: white;
  border: 0px;
  float: right;
`;
