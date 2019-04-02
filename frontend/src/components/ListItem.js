import React, { Component } from 'react';
import { green, blue, purple } from "../resources/colors";
import { user, heart } from "../resources/images";

export default class ListItem extends Component {

    render() {
        return (
            <div style={listContainer}>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />

                <p style={h1}>{this.props.title}</p>

                <div style={item}>
                    <img src={user} style={avatar} alt={user} />

                    <div style={{ marginLeft: 15 }}>
                        <p style={username}>{this.props.user}</p>
                        <p style={date}>{"published on " + this.props.date}</p>
                    </div>

                    <div style={{ marginLeft: '15%' }}>
                      <div>
                        <img src={heart} style={like} alt={heart} />
                        <p style={{width: '100%', height: '20px'}}></p>
                      </div>
                      <p style={likes}>{this.props.likes + ' likes '}</p>
                    </div>
                </div>
            </div>

        )
    }
}

const listContainer = {
   display: 'flex',
   flexDirection: 'column',
   width: '100%'
}

const item = {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    maxWidth: '100%',
    marginTop: -15,
    alignItems: 'center'
}
const like = {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginTop: 12,
    marginRight: 8,
    float: 'right'
}
const likes = {
    fontSize: 14,
    color: purple,
    fontFamily: 'Poppins'
}
const h1 = {
    display: 'flex',
    fontSize: 20,
    color: 'white',
    fontFamily: 'Poppins',
    justifyContent: 'flex-start',
    paddingTop: 15
}
const date = {
    fontSize: 12,
    color: purple,
    fontFamily: 'Poppins',
    marginTop: 0,
    paddingRight: 5
}
const username = {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Poppins',
    textAlign: 'left'
}
const avatar = {
    height: 35,
    width: 35,
    borderRadius: 40,
    border: '30px solid #566EFC',
    borderWidth: 6,
    resizeMode: "cover",
    backgroundColor: purple
}
