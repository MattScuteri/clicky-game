import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Score from './components/Score';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <Score />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
