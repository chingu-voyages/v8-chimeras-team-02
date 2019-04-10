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
      const question = this.props.data.questions.filter(
        question => question._id === 'cdea5b19-a640-4db6-8456-955bad32c755'
      );
      const questionTitle = question[0].title;
      const questionCreateAt = question[0].createAt;

      return (
        <ListItem
          title={questionTitle}
          user={'Hanen Wahabi'}
          date={questionCreateAt}
          likes={'4'}
        />
      );
    }
  }

  render() {
    return (
      <div style={container}>
        <div style={header}>
          <Logo />
          <SearchBar />
          <Section title="Ask" />
          <Section title="Login" />
          <Section title="Signup" />

          <img src={user} style={avatar} alt={user} />
        </div>

        <div style={gridView}>
          <SideList />
          <div style={listview}>
            {this.renderQuestion()}
            {this.state.answers.length === 0 ? (
              <h1 style={{ color: 'white' }}>Your answer</h1>
            ) : (
              <h1 style={{ color: 'white' }}>
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
  {
    questions {
      _id
      title
      createAt
    }
  }
`;

// const GET_QUESTION = gql`
//   query getQuestion($question_id: ID!) {
//     getQuestion(question_id: $question_id) {
//       question_id
//     }
//   }
// `;

// const CREATE_ANSWER = gql`
//   mutation createAnswer($question_id: ID!, $answer: String!, $user: String!) {
//     createAnswer(question_id: $question_id, answer: $answer, user: $user) {
//       question_id
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
  backgroundColor: blue,
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
  marginBottom: '100px',
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
