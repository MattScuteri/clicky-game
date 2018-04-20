import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Score from './components/Score';
import Image from './components/GameBoard';
import Main from './components/Main';
import Emojis from './emojis.json';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <Score />
          <Image />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
