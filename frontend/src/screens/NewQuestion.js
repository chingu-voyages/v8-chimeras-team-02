import React, { Component } from 'react';
import { user } from '../resources/images';
import { blue, green } from '../resources/colors';
import { Header, ListItem, Footer } from '../components';
import styled from 'styled-components';

export default class NewQuestion extends Component {
  state = {
    questions: [],
    newTitle: [],
  };

  askQuestion = e => {
    e.preventDefault();
    this.setState({
      questions: [...this.state.questions, this.state.newTitle],
      newTitle: [],
    });
  };

  handleChange = e => {
    this.setState({ newTitle: e.target.value });
  };

  render() {
    return (
      <div>
        <Header />
        <GridView>
          <div>
            {this.state.questions.map(question => (
              <ListItem
                title={question}
                user={'User001'}
                date={'Just now'}
                likes={'0'}
              />
            ))}
          </div>
        </GridView>

        <GridView>
          <FormView>
            <form onSubmit={this.askQuestion}>
              <NewQuestionForm
                placeholder="Add new question"
                value={this.state.newTitle}
                onChange={this.handleChange}
              />
              <br />
              <AskBtn type="submit">
                Ask
              </AskBtn>
            </form>
          </FormView>
        </GridView>

        <Footer />
      </div>
    );
  }
}

const FormView = styled.div`
  display: flex;
  flex: 3;
  justifyContent: center;
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
