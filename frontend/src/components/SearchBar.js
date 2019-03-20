import React, { Component } from 'react';
import { green } from "../resources/colors";


export default class SearchBar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />

                <input type='text' value='search anything...' style={input} />
                <button style={searchBtn}>Search</button>
            </div>
        )
    }
}

const searchBtn = {
    backgroundColor: green,
    width: 100,
    height: 36,
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins',
    border: '0px'
}
const input = {
    backgroundColor: 'white',
    width: '30%',
    height: 30,
    alignItems: 'center',
    fontSize: 13,
    fontFamily: 'Poppins',
    color: '#ccc'
}

