import React, { Component } from 'react';
import './App.css';
import Home from './screens/Home';
import { createGlobalStyle } from "styled-components";
class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <Home />
      </div>
    );
  }
}

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
  }
`

export default App;
