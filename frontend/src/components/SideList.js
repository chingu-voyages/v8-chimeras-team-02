import React, { Component } from 'react';
import { green, grey } from '../resources/colors';
import { myq, unsolved, unsolved2, solved2, solved, myq2 } from '../resources/images';
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
          {/*<Icon
            src={selected === "Unsolved" ? unsolved2 : unsolved}
            alt={unsolved}
          />*/}
          <FontAwesomeIcon
            icon="times-circle"
            style={{ fontSize: '25px', color: selected === 'Unsolved' ? green : 'black' }}
          />
          <p
            style={{
              fontSize: 14,
              marginTop: 0,
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
          {/*<Icon
            src={selected === "Solved" ? solved2 : solved}
            alt={solved}
          />*/}
          <FontAwesomeIcon
            icon="check-circle"
            style={{ fontSize: '25px', color: selected === 'Solved' ? green : 'black' }}
          />
          <p
            style={{
              fontSize: 14,
              marginTop: 0,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === 'Solved' ? green : grey,
            }}
          >
            {'Solved'}
          </p>
        </SideItem>

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
          {/*<Icon
            src={selected === "My Questions" ? myq2 : myq}
            alt={myq}
          />*/}
          <FontAwesomeIcon
            icon="question-circle"
            style={{ fontSize: '25px', color: selected === 'My Questions' ? green : 'black' }}
          />
          <p
            style={{
              fontSize: 14,
              marginTop: 0,
              borderRadius: 8,
              paddingLeft: 5,
              paddingRight: 5,
              color: selected === 'My Questions' ? green : grey,
            }}
          >
            {'My Questions'}
          </p>
        </SideItem>
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
`;

const SideItem = styled.button`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-left: 30px;
  background-color: transparent;
  border: 0px;
  outline: 0px;
  margin-bottom: 15px;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  resize-mode: contain;
  margin-right: 10px;
  background-color: black;
`;
