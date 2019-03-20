import React, { Component } from 'react';
import { green, blue, purple } from "../resources/colors";
import { user, heart } from "../resources/images";
const WIDTH = window.innerWidth;

export default class ListItem extends Component {

    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: WIDTH / 2 - 100 }}>
                <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />

                <p style={h1}>{this.props.title}</p>
                <div style={item}>
                    <img src={user} style={avatar} alt={user} />
                    <div style={{ marginLeft: 15 }}>
                        <p style={username}>{this.props.user}</p>
                        <div style={{ display: 'flex', flexDirection: 'row', width: WIDTH / 2 - 170, justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', marginTop: -15 }}>
                                <img src={heart} style={like} alt={heart} />
                                <p style={likes}>{this.props.likes + ' likes'}</p>
                            </div>
                            <p style={date}>{"published in " + this.props.date}</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


const item = {
    display: 'flex',
    flexDirection: 'row',
    height: 80,
    background: 'linear-gradient(to top, #566EFC 0%, #080A38 1%, #080A38 100%)',
    marginTop: -15
}
const like = {
    height: 20,
    width: 20,
    resizeMode: "contain",
    marginTop: 12,
    marginRight: 8
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
    marginTop: 0
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
    backgroundColor: purple,
    marginTop: 10
}


