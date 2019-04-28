import React, { Component } from 'react';
import { green, purple } from "../resources/colors";
import { user } from "../resources/images";
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart);


export default class CompleteItem extends Component {
  render() {
    return (
      <CompleteItemContainer>
        <Title>{this.props.title}</Title>

        <Body>{this.props.question}</Body>

        <Item>
          <Avatar src={user} alt={user} />

                <hr style={{width:'100%', marginRight: '40px', color: '#7f7f7f'}} />

                    <Avatar src={user} alt={user} />

                    <div style={{ marginLeft: 15, width:'70%' }}>
                        <Username>{this.props.user}</Username>
                        <Date>{"published on " + this.props.date}</Date>
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
                </Item>
            </CompleteItemContainer>
        )
    }
}

const CompleteItemContainer = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   box-shadow: 0px 0px 8px 4px gainsboro;
   padding: 0 20px 10px 20px;
   margin-bottom: 20px;
`

const Item = styled.div`
    display: flex;
    flex-direction: row;
    height: 80px;
    width: 100%;
    margin-top: -15px;
    align-items: center;
`

const Likes = styled.p`
    font-size: 12px;
    color: ${purple};
    margin-top: 0;
    margin-bottom: 15px;
`

const Title = styled.p`
    display: flex;
    font-size: 20px;
    color: #000;
    justify-content: flex-start;
    margin-bottom: 0;
`

const Body = styled.p`
    display: flex;
    font-size: 14px;
    color: #7f7f7f;
    justify-content: flex-start;
    padding-top: 15px;
    margin-bottom: 20px;
`

const Date = styled.p`
    font-size: 12px;
    color: #7f7f7f;
    margin-top: 0;
    margin-bottom: 0;
    padding-right: 5px;
`

const Username = styled.p`
    font-size: 12px;
    color: #000;
    text-align: left;
    margin: 5px 0;
`

const Avatar = styled.img`
    height: 30px;
    width: 30px;
    border-radius: 40px;
    border: 30px solid;
    border-color: ${green};
    border-width: 6px;
    background-color: ${green};
`

const HeartFill = styled.div`
  color: white;
  padding-top: 20px;

  &:hover {
    color: ${purple};
  }
`
