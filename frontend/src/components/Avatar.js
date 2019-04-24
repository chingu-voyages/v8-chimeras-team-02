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
          <Button type="button" value="Log Out" onClick={this.props.onClick} />
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
  align-items: right;
  justify-content: right;
  z-index: 1;
`;
const AvatarContainer = styled.div`
  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const AvatarImg = styled.img`
  height: auto;
  width: 40px;
  border-radius: 40px;
  border: 30px solid #2fe090;
  border-width: 2px;
  resize-mode: cover;
  margin-right: 15px;
  margin-left: 1.4vw;
  background-color: ${green};
  margin-top: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.h3`
  color: black;
  padding: 12px 16px;
  display: block;
  font-size: 18;
`;

const Button = styled.input`
  background-color: #2fe090;
  width: 110px;
  height: 38px;
  align-items: center;
  font-size: 18;
  color: white;
  font-family: Poppins;
  border: 0px;
  margin-bottom: 15px;
`;

// MISSING:
// .dropdown:hover .dropdownContent {display: block;}
// .dropdown:hover .button {background-color: #000;}
// button.props.onClick
