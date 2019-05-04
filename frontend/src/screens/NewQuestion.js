import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { green } from '../resources/colors';
import { Header, Footer } from '../components';
import styled from 'styled-components';

class NewQuestion extends Component {
  state = {
    title: '',
    question: '',
    searchText: '',
  };

  createQuestion = e => {
    e.preventDefault();
    this.props
      .createQuestion({
        variables: {
          title: this.state.title,
          question: this.state.question,
          user_id: this.props.data.currentUser._id,
          tags: [],
          answers_ids: [],
        },
        refetchQueries: [{ query: GET_QUESTION }],
      })
      .then(data => this.props.history.push(`/giveanswer/${data.data.createQuestion._id}`))
      .catch(err => console.log(err));
  };

  titleChange = e => {
    this.setState({ title: e.target.value });
  };

  questionChange = e => {
    this.setState({ question: e.target.value });
  };

  onSearch() {
    localStorage.setItem('SEARCH_TEXT', this.state.searchText);
    window.location = '/';
  }

  render() {
    const { searchText } = this.state;

    return (
      <div>
        <Header
          onSearch={() => this.onSearch()}
          onChangeText={event => {
            this.setState({ searchText: event.target.value });
          }}
          searchText={searchText}
        />
        <GridView>
          <FormView>
            <form onSubmit={this.createQuestion}>
              <NewQuestionFormTitle
                placeholder="Add new question title here..."
                value={this.state.title}
                onChange={this.titleChange}
              />
              <br />
              <NewQuestionFormDescription
                placeholder="Add new question description here..."
                value={this.state.question}
                onChange={this.questionChange}
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

const GET_QUESTION = gql`
  {
    questions {
      _id
      title
      createAt
      user {
        name
      }
    }
  }
`;

const CREATE_QUESTION = gql`
  mutation createQuestion(
    $title: String!
    $question: String!
    $user_id: ID!
    $tags: [String]!
    $answers_ids: [ID]!
  ) {
    createQuestion(
      title: $title
      question: $question
      user_id: $user_id
      tags: $tags
      answers_ids: $answers_ids
    ) {
      _id
      title
      question
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
  graphql(GET_QUESTION),
  graphql(CREATE_QUESTION, { name: 'createQuestion' }),
  graphql(CURRENT_USER)
)(NewQuestion);

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

const NewQuestionFormTitle = styled.textarea`
  width: 50vw;
  height: auto;
  margin: 0 auto;
  box-shadow: 0px 0px 8px 4px gainsboro;
  border: 2px solid gainsboro;
  border-radius: 4px;
  resize: none;
  padding: 5px;
`;

const NewQuestionFormDescription = styled.textarea`
  width: 50vw;
  height: auto;
  min-height: 150px;
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
  margin: 5px 0 0 5px;
  align-items: center;
  font-size: 14px;
  color: white;
  border: 0px;
  float: right;
`;
