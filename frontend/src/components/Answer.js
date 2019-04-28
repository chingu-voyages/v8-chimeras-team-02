import React, { Component } from 'react';
import { green } from '../resources/colors';
import { user, checked, unchecked } from '../resources/images';
import styled from 'styled-components';

export default class Answer extends Component {
  render() {
    return (
      <AnswerContainer>
        <Username>{this.props.user.name}</Username>

        <Item>
          <Avatar src={user} alt={user} />

          <div style={{ marginLeft: 15 }}>
            <Body>{this.props.answer}</Body>
            <Datee>{'published on ' + this.props.date}</Datee>
          </div>
        </Item>
        <div style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {this.props.user._id === this.props.currentUser ? (
            <DeleteA onClick={this.props.onDelete}>{'delete answer'}</DeleteA>
          ) : null}

          {this.props.iscorrect ? (
            <Checked src={checked} alt={checked} onClick={this.props.updateAnswer} />
          ) : (
            <Checked src={unchecked} alt={unchecked} onClick={this.props.updateAnswer} />
          )}
        </div>
      </AnswerContainer>
    );
  }
}

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 4px 2px -2px #dbd9d9;
  padding: 0 15px 15px 15%;
  margin-bottom: 20px;
`;

const Item = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  max-width: 100%;
  margin-top: -15px;
  align-items: center;
`;

const Checked = styled.img`
  height: 40px;
  width: 40px;
  resize-mode: contain;
  margin-right: 8px;
  float: right;
  &:hover {
    cursor: pointer;
  }
`;

const Body = styled.p`
  display: flex;
  font-size: 14px;
  color: #000;
  justify-content: flex-start;
  padding-top: 15px;
`;

const Datee = styled.p`
  font-size: 12px;
  color: #7f7f7f;
  margin-top: 0px;
  padding-right: 5px;
`;
const Username = styled.p`
  font-size: 15px;
  color: #4c4b4b;
  text-align: left;
`;

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 40px;
  border: 30px solid;
  border-color: ${green};
  border-width: 6px;
  resize-mode: cover;
  background-color: ${green};
`;

const DeleteA = styled.p`
  font-size: 12px;
  color: #7f7f7f;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;
