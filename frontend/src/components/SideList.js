import React, { Component } from 'react';
import { green, grey } from '../resources/colors';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faTimesCircle, faQuestionCircle);

export default class SideList extends Component {
  state = {
    selected: '',
  };
  render() {
    const { selected } = this.state;
    const { selectMyQ, selectSolved, selectUnsolved } = this.props;
    return (
      <SideListDiv>
        <SideItem
          onClick={() => {
            selectUnsolved();
            this.setState({ selected: 'Unsolved' });
          }}
          style={{
            backgroundColor: selected === 'Unsolved' ? 'rgba(47, 224, 144, .2)' : 'transparent',
            width: '80%',
            border: '1px solid transparent',
            borderRadius: '15px',
            padding: '0 10px',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            icon="times-circle"
            style={{ fontSize: '25px', color: selected === 'Unsolved' ? green : 'black' }}
          />
          <p
            style={{
              fontSize: 14,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === 'Unsolved' ? green : grey,
            }}
          >
            {'Unsolved'}
          </p>
        </SideItem>

        <SideItem
          onClick={() => {
            selectSolved();
            this.setState({ selected: 'Solved' });
          }}
          style={{
            backgroundColor: selected === 'Solved' ? 'rgba(47, 224, 144, .2)' : 'transparent',
            width: '80%',
            border: '1px solid transparent',
            borderRadius: '15px',
            padding: '0 10px',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon
            icon="check-circle"
            style={{ fontSize: '25px', color: selected === 'Solved' ? green : 'black' }}
          />
          <p
            style={{
              fontSize: 14,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === 'Solved' ? green : grey,
            }}
          >
            {'Solved'}
          </p>
        </SideItem>

        {this.props.currentUser ? (
        <SideItem
          onClick={() => {
            selectMyQ();
            this.setState({ selected: 'My Questions' });
          }}
          style={{
            backgroundColor: selected === 'My Questions' ? 'rgba(47, 224, 144, .2)' : 'transparent',
            width: '80%',
            border: '1px solid transparent',
            borderRadius: '15px',
            padding: '0 10px',
            alignItems: 'center',
          }}
        >
            <FontAwesomeIcon
              icon="question-circle"
              style={{ fontSize: '25px', color: selected === 'My Questions' ? green : 'black' }}
            />
            <p
              style={{
                fontSize: 14,
                borderRadius: 8,
                paddingLeft: 5,
                paddingRight: 5,
                color: selected === 'My Questions' ? green : grey,
              }}
            >
              {'My Questions'}
            </p>
          </SideItem>
        ) : null}
      </SideListDiv>
    );
  }
}

const SideListDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 25px;
  align-self: flex-start;
  max-width: 30%;
`

const SideItem = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 30px;
  background-color: transparent;
  border: 0px;
  outline: 0px;
  margin-bottom: 15px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
