import React, { Component } from 'react';
import { user } from '../resources/images';
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
        )
    }
}

const AvatarContainer = styled.div`
    position: relative;
    display: inline-block;
`;

const AvatarImg = styled.img`
    height: 25%;
    width: 25%;
    border-radius: 40px;
    border: 30px solid #2FE090;
    border-width: 2px;
    resize-mode: cover;
    margin-right: 40px;
    margin-left: 20px;
`;

const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    align-items: right;
    justify-content: right;
    z-index: 1;
`;

const Text = styled.h3`
    color: black;
    padding: 12px 16px;
    display: block;
`;

const Button = styled.input`
    background-color: #2FE090;
    width: 100;
    height: 36;
    align-items: center;
    font-size: 14;
    color: white;
    border: 0px;
`;

// MISSING:
// .dropdown:hover .dropdownContent {display: block;}
// .dropdown:hover .button {background-color: #000;}
// button.props.onClick
