import React, { Component } from 'react';
import { green } from "../resources/colors";
import { logo } from '../resources/images';


export default class Logo extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <link href="https://fonts.googleapis.com/css?family=Bad+Script" rel="stylesheet" />

                <img src={logo} style={image} alt={logo} />
                <p style={title}>flow</p>
            </div>

        )
    }
}

const image = {
    width: 37,
    height: 37,
    resizeMode: 'contain',
    marginLeft: 40,
    marginRight: 5
}
const title = {
    fontSize: 25,
    color: green,
    fontFamily: 'Bad Script',
    fontWeight: 'bold',
}

