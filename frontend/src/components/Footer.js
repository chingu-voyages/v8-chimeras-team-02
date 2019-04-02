import React, { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <div style={footer}>
              Made with ♥
            </div>

        )
    }
}

const footer = {
	position: 'absolute',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  margin: '0 auto',
  color: 'white',
  paddingTop: '15px',
  paddingBottom: '15px',
  borderTop: '1px solid white'
};
