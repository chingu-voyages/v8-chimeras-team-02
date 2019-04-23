import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListItem, SideList, Header, Footer } from '../components';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends Component {
  state = {
    searchText: '',
  };
  renderQuestions() {
    if (this.props.data.loading) {
      return <h1>Loading...</h1>;
    } else {
      return this.props.data.questions.map(question => {
        return (
          <StyledLink to={`/giveanswer/${question._id}`}>
            <ListItem
              key={question._id}
              title={question.title}
              user={question.user.name}
              date={question.createAt}
              likes={'4'}
            />
          </StyledLink>
        );
      });
    }
  }
  handleSearch() {}
  render() {
    return (
      <div>
        <Header
          onSearch={() => this.handleSearch()}
          onChangeText={event => {
            this.setState({ searchText: event.target.value });
          }}
          searchText={this.state.searchText}
        />
        <GridView>
          <SideList />
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

export default graphql(GET_QUESTION)(Home);

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

const StyledLink = styled(Link)`
  text-decoration: none;
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
`;

const inputs = styled.`
	border: 1px solid #ccc;
	background: white;
	height: 45;
	width: 40%;
	alignItems: left;
	marginTop: 25;
	fontSize: 16;
	outlineColor: green;
`;

const button = styled.`
	background: green;
	color: white;
	height: 60;
	width: 40%;
	alignItems: center;
	marginTop: 25;
	fontSize: 20;
`;

const error = styled.`
	color: red;
	fontSize: 14;
	marginTop: 25;
	textAlign: center;
`; */
