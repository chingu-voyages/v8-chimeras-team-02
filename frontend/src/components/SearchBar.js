import React, { Component } from 'react';
import { green, grey } from '../resources/colors';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

export default class SearchBar extends Component {
  render() {
    return (
      <div
        style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}
      >
        <FontAwesomeIcon
          icon="search"
          color={grey}
          style={{
            padding: '8px 5px 5px 5px',
            marginRight: '5px',
          }}
          onClick={this.props.onSearch}
        />
        <Input
          type="text"
          placeholder="Type to search"
          onChange={this.props.onChangeText}
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.props.onSearch();
            }
          }}
        />
        {/*<SearchBtn>Search</SearchBtn>*/}
      </div>
    );
  }
}

/*const SearchBtn = styled.button`
    background-color: ${green};
    width: 100px;
    height: 36px;
    align-items: center;
    font-size: 14px;
    color: white;
    border: 0px;
`*/

const Input = styled.input`
  background-color: white;
  width: 30%;
  height: 30px;
  align-items: center;
  font-size: 13px;
  color: ${grey};
  border: none;
  border-bottom: 1px solid ${'#ccc'};

  &:focus {
    outline: none;
    border-bottom: 1px solid ${green};
  }
`;
