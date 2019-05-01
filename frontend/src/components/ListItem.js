import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { green, purple } from '../resources/colors';
import { user } from '../resources/images';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);

export default class ListItem extends Component {
  render() {
    return (
      <ListContainer>
        <StyledLink key={this.props.questionId} to={`/giveanswer/${this.props.questionId}`}>
          <Title>{this.props.title}</Title>
        </StyledLink>
        <Item>
          <Avatar src={user} alt={user} />

          <div style={{ marginLeft: 15, width:'70%' }}>
            <Username>{this.props.user}</Username>
            <Date>
              {'published on ' +
                this.props.date
                  .split('')
                  .slice(0, 10)
                  .join('')}
            </Date>
          </div>

          <div style={{ right: 0, width: '30%', textAlign:'right' }}>
            <HeartFill>
              <FontAwesomeIcon
                icon="heart"
                style={{ fontSize: '25px', stroke: `${purple}`, strokeWidth: 10 }}
              />
            </HeartFill>
            <Likes>{this.props.likes + ' likes '}</Likes>
          </div>
          <span
            style={{ color: 'red', fontWeight: 'bold', cursor: 'pointer' }}
            onClick={this.props.onDelete}
          >
            {this.props.onDelete ? 'X' : null}
          </span>
        </Item>
      </ListContainer>
    );
  }
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0px 0px 8px 4px gainsboro;
  padding: 0 15px 15px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
`

const Item = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;
  max-width: 100%;
  margin-top: -15px;
  align-items: center;
`

const Likes = styled.p`
    font-size: 12px;
    color: ${purple};
    margin-top: 0;
    margin-bottom: 0;
`

const Title = styled.p`
  display: flex;
  font-size: 20px;
  color: black;
  justify-content: flex-start;
`

const Date = styled.p`
    font-size: 12px;
    color: #7f7f7f;
    margin-top: 0;
    margin-bottom: 0;
    padding-right: 5px;
    text-align: left;
`

const Username = styled.p`
    font-size: 12px;
    color: #000;
    text-align: left;
    margin: 5px 0;
`

const Avatar = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 40px;
  border: 30px solid;
  border-color: ${green};
  border-width: 6px;
  background-color: ${green};
`

const HeartFill = styled.div`
  color: white;

  &:hover {
    color: ${purple};
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
