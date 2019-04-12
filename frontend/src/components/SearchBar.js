import React, { Component } from 'react';
import { green } from "../resources/colors";
import styled from 'styled-components';

export default class SearchBar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <Input type='text' placeholder='Search anything...' />
                <SearchBtn>Search</SearchBtn>
            </div>
        )
    }
}

const SearchBtn = styled.button`
    background-color: ${green};
    width: 100px;
    height: 36px;
    align-items: center;
    font-size: 14px;
    color: white;
    font-family: Poppins;
    border: 0px;
`;

const Input = styled.input`
    background-color: white;
    width: 30%;
    height: 30px;
    align-items: center;
    font-size: 13px;
    font-family: Poppins;
    color: #ccc;
`;

