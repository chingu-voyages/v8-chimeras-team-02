import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
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

class Home extends Component {
  renderQuestions() {
    if (!this.props.data.loading) {
      return this.props.data.questions.map((question, i) => {
        return (
          <ListItem
            title={question.title}
            user={'Hanen Wahabi'}
            date={question.createAt}
            likes={'4'}
          />
        );
      });
    }
  }
  render() {
    return (
      <div>
        <Header />

        <div style={gridView}>
          <SideList />
          <div style={listview}>
            <h2 style={{ textAlign: 'left' }}>Top Questions</h2>
            {this.renderQuestions()}
          </div>
        </div>

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
    }
  }
`;

export default graphql(GET_QUESTION)(Home);

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
