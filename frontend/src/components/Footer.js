import React, { Component } from 'react';
import { blue } from "../resources/colors";

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
  backgroundColor: blue,
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  margin: '20px 0 0 0',
  color: '#fff',
  paddingTop: '15px',
  paddingBottom: '15px',
};
