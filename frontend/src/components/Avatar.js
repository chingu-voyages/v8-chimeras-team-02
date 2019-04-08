import React, { Component } from 'react';
import { user } from '../resources/images';
import { green } from "../resources/colors";

export default class Avatar extends Component {
    render() {
        return (
            <div style={dropdown}>
                <img src={user} style={avatar} alt={user} />
                <div style={dropdownContent}>
                    <h3 style={text}>See you soon?</h3>
                    <input style={button} type="button" value="Log Out" onClick={this.props.onClick} />
                </div>
            </div>
        )
    }
}

const dropdown = {
    position: 'relative',
    display: 'inline-block'
};

const avatar = {
    height: 35,
    width: 35,
    borderRadius: 40,
    border: '30px solid #2FE090',
    borderWidth: 2,
    resizeMode: 'cover',
    marginRight: 40,
    marginLeft: 20
};

const dropdownContent = {
    display: 'none',
    position: 'absolute',
    backgroundColor: '#fff',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0, 0, 0, 0.2)',
    alignItems: 'right',
    justifyContent: 'right',
    zIndex: 1
};

const text = {
    color: 'black',
    padding: '12px 16px',
    display: 'block'
}

const button = {
    backgroundColor: green,
    width: 100,
    height: 36,
    alignItems: 'center',
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins',
    border: '0px'
}

// MISSING:
// .dropdown:hover .dropdownContent {display: block;}
// .dropdown:hover .button {background-color: #000;}
// button.props.onClick
