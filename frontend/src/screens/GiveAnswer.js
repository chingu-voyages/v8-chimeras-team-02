import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { user } from '../resources/images';
import { blue, green } from '../resources/colors';
import {
  SearchBar,
  Section,
  ListItem,
  Logo,
  SideList,
  Header,
  Footer,
} from '../components';

class GiveAnswer extends Component {
  state = {
    answers: [],
  };

  submitAnswer = e => {
    e.preventDefault();
    // const answer = [
    //   {
    //     question_id: 'id number whatever',
    //     answer: e.target[0].value,
    //     user: 'TheUser',
    //   },
    // ];
    // this.setState({ answers: [...this.state.answers, ...answer] });
    e.currentTarget.reset();

    // this.props
    //   .mutate({
    //     variables: {
    //       question_id: answer[0].question_id,
    //       answer: answer[0].answer,
    //       user: answer[0].user,
    //     },
    //   })
    //   .then(data => this.props.data.refresh)
    //   .catch(err => console.log(err));
  };

  renderQuestion() {
    if (!this.props.data.loading) {
      const questionId = this.props.history.location.pathname.split(
        /\bgiveanswer.\b/
      )[1];
      console.log(questionId);
      console.log(this.props);

      // this.props
      //   .data({
      //     variables: {
      //       _id: questionId,
      //     },
      //   })
      //   .then(data => console.log(data))
      //   .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <div style={container}>

        <Header />
        <div style={gridView}>
          <SideList />
          <div style={listview}>
            {this.renderQuestion()}
            {this.state.answers.length === 0 ? (
              <h1 style={{ color: '#7f7f7f' }}>Your answer</h1>
            ) : (
              <h1 style={{ color: '#7f7f7f' }}>
                {this.state.answers.length} Answers
              </h1>
            )}
            {this.state.answers.map(answer => (
              <ListItem
                title={answer}
                user={'TheAnswerGiver'}
                date={'Just now'}
                likes={'0'}
              />
            ))}
            <form style={{ display: 'flex' }} onSubmit={this.submitAnswer}>
              <textarea style={textareaStyle} placeholder="Enter answer..." />
              <button style={btn} type="submit">
                Answer
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const GET_QUESTION = gql`
  query getQuestion($_id: ID!) {
    question(_id: $_id) {
      title
    }
  }
`;

// const GET_QUESTION = gql`
//   query getQuestion($_id: ID!) {
// ​    question(_id: $_id) {
// ​      title
// ​    }
//   }
// `;

// const CREATE_ANSWER = gql`
//   mutation CreateAnswer($question_id: ID!, $answer: String!, $user: ID!) {
//     createAnswer(question_id: $question_id, answer: $answer, user: $user) {
//       _id
//       answer
//       user
//     }
//   }
// `;

// const updateAnswer = gql`
//   mutation updateAnswer($question_id: ID!, $_id: ID!, $newAnswer: String!) {
//     updateAnswer(question_id: $question_id, _id: $_id, newAnswer: $newAnswer) {
//       _id
//     }
//   }
// `;

// const deleteAnswer = gql`
//   mutation deleteAnswer($question_id: ID!, $_id: ID!) {
//     deleteAnswer(question_id: $question_id, _id: $_id) {
//       _id
//     }
//   }
// `;

export default graphql(GET_QUESTION)(GiveAnswer);

const container = {
  color: '#7f7f7f',
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
  maxWidth: '50%',
};
const gridView = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  marginTop: 40,
};

const textareaStyle = {
  width: '412px',
};

const btn = {
  backgroundColor: green,
  width: 100,
  height: 36,
  alignItems: 'center',
  fontSize: 14,
  color: 'white',
  fontFamily: 'Poppins',
  border: '0px',
};
