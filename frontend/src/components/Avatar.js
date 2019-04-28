import React, { Component } from 'react';
import { user } from '../resources/images';
import { green } from '../resources/colors';
import styled from 'styled-components';

export default class Avatar extends Component {
  render() {
    return (
      <AvatarContainer>
        <AvatarImg src={user} alt={user} />
        <DropdownContent>
          <Text>See you soon?</Text>
          <div style={{width: '100%', margin: '0 auto'}}>
            <Button type="button" onClick={this.props.onClick}>Log Out</Button>
          </div>
        </DropdownContent>
      </AvatarContainer>
    );
  }
}

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  right: 0px;
  background-color: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
  }
`

const AvatarImg = styled.img`
  height: auto;
  width: 40px;
  border-radius: 40px;
  border: 30px solid #2fe090;
  border-width: 2px;
  margin-right: 15px;
  margin-left: 1.4vw;
  background-color: ${green};
  margin-top: 5px;

  &:hover {
    cursor: pointer;
  }
`

const Text = styled.h3`
  color: black;
  padding: 12px 16px;
  display: block;
  font-size: 18px;
`

const Button = styled.button`
  background-color: #2fe090;
  width: 110px;
  height: 38px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  border: 0px;
  margin: 15px auto;
  color: white;
  display: flex;
`

// MISSING:
// .dropdown:hover .dropdownContent {display: block;}
// .dropdown:hover .button {background-color: #000;}
// button.props.onClick
