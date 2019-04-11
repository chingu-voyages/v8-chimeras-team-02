import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import { user } from '../resources/images';
import { blue, green } from '../resources/colors';
import { Header, Footer } from '../components';

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
        },
      })
      .then(data =>
        this.props.history.push(`/giveanswer/${data.data.createQuestion._id}`)
      )
      .catch(err => console.log(err));
  };

  handleChange = e => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div style={container}>
        <Header />
        <div style={gridView}>
          <div style={formView}>
            <form onSubmit={this.createQuestion}>
              <textarea
                style={newQuestionForm}
                placeholder="Add question title"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <br />
              <button type="submit" style={askBtn}>
                Ask
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const CREATE_QUESTION = gql`
  mutation createQuestion($title: String!, $question: String!) {
    createQuestion(title: $title, question: $question) {
      _id
      title
      question
    }
  }
`;

export default graphql(CREATE_QUESTION)(NewQuestion);

const container = {};
const formView = {
  display: 'flex',
  flex: 3,
  justifyContent: 'center',
};
const gridView = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  marginTop: 40,
  color: 'white',
  justifyContent: 'center',
};
const newQuestionForm = {
  width: '80vw',
  height: 100,
  margin: '0 auto',
  boxShadow: '0px 0px 8px 4px gainsboro',
  border: '2px solid gainsboro',
  borderRadius: '4px',
  resize: 'none',
  padding: 5,
};

const askBtn = {
  backgroundColor: green,
  width: 100,
  height: 36,
  alignItems: 'center',
  fontSize: 14,
  color: 'white',
  fontFamily: 'Poppins',
  border: '0px',
};
