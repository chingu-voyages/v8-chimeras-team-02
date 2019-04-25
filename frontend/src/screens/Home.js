import React, { Component } from 'react';
import { ListItem, SideList, Header, Footer } from '../components';
import styled from 'styled-components';
import { green } from '../resources/colors';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);

class Home extends Component {
  state = {
    searchText: '',
    solved: false,
    unsolved: false,
    my_questions: false,
    data: null,
  };

  onSearch() {
    const { searchText, solved, unsolved, my_questions } = this.state;

    if (my_questions)
      this.props
        .searchQuestion({
          variables: { keywords: searchText, userId: this.props.user.currentUser._id },
        })
        .then(({ data }) => {
          this.setState({ data: data.searchQuestion }, () => this.renderQuestions());
        })
        .catch(err => console.log(err));
    else if (solved)
      this.props
        .searchQuestion({
          variables: { keywords: searchText, solved: true },
        })
        .then(({ data }) =>
          this.setState({ data: data.searchQuestion }, () => this.renderQuestions())
        )
        .catch(err => console.log(err));
    else if (unsolved)
      this.props
        .searchQuestion({
          variables: { keywords: searchText, unsolved: true },
        })
        .then(({ data }) =>
          this.setState({ data: data.searchQuestion }, () => this.renderQuestions())
        )
        .catch(err => console.log(err));
    else
      this.props
        .searchQuestion({
          variables: { keywords: searchText },
        })
        .then(({ data }) =>
          this.setState({ data: data.searchQuestion }, () => this.renderQuestions())
        )
        .catch(err => console.log(err));
  }

  renderQuestions() {
    if (this.props.data.loading) {
      return (
        <FontAwesomeIcon
          icon="spinner"
          spin
          style={{ fontSize: '50px', alignItems: 'center', margin: '0 auto', color: `${green}` }}
        />
      );
    } else {
      var all_questions = this.state.data ? this.state.data : this.props.data.questions;
      return all_questions.length > 0 ? (
        all_questions.map(question => {
					const questionId = question._id;
          return (
              <ListItem
								key={questionId}
								questionId={questionId}
                title={question.title}
                user={question.user.name}
                date={question.createAt}
                likes={'4'}
              />
          );
        })
      ) : (
        <h4>0 results</h4>
      );
    }
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
          <SideList
            selectSolved={() =>
              this.setState({ solved: true, unsolved: false, my_questions: false }, () =>
                this.onSearch()
              )
            }
            selectUnsolved={() =>
              this.setState({ solved: false, unsolved: true, my_questions: false }, () =>
                this.onSearch()
              )
            }
            selectMyQ={() =>
              this.setState({ solved: false, unsolved: false, my_questions: true }, () =>
                this.onSearch()
              )
            }
          />
          <ListView>
            <h2 style={{ textAlign: 'left' }}>Top Questions</h2>
            {this.renderQuestions()}
          </ListView>
        </GridView>
        <div>
          <Footer />
        </div>
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
const CURRENT_USER = gql`
  {
    currentUser {
      _id
    }
  }
`;

const SEARCH = gql`
  mutation SearchQuestion($keywords: String!, $solved: Boolean, $unsolved: Boolean, $userId: ID) {
    searchQuestion(keywords: $keywords, solved: $solved, unsolved: $unsolved, userId: $userId) {
      _id
      title
      question
      createAt
      user {
        _id
        name
      }
      answers {
        _id
        iscorrect
      }
    }
  }
`;

export default // graphql(SEARCH, { name: 'searchQuestion' }),

// graphql(GET_QUESTION),
compose(
  graphql(GET_QUESTION),
  graphql(SEARCH, { name: 'searchQuestion' }),
  graphql(CURRENT_USER, { name: 'user' })
)(Home);

const ListView = styled.div`
  display: flex;
  flex: 3;
  flex-direction: column;
  max-width: 50%;
`;
const GridView = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 40;
`;

/* const form = styled.`
	display: flex;
	flexDirection: column;
	backgroundColor: white;
	alignItems: center;
	justifyContent: center;
	width: 30%;
	height: 400;
	borderRadius: 10;
`

const inputs = styled.`
	border: 1px solid #ccc;
	background: white;
	height: 45;
	width: 40%;
	alignItems: left;
	marginTop: 25;
	fontSize: 16;
	outlineColor: green;
`

const button = styled.`
	background: green;
	color: white;
	height: 60;
	width: 40%;
	alignItems: center;
	marginTop: 25;
	fontSize: 20;
`

const error = styled.`
	color: red;
	fontSize: 14;
	marginTop: 25;
	textAlign: center;
` */
