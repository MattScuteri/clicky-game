import React, { Component } from 'react';
import Header from './components/Header';
import Score from './components/Score';
import DisplayImage from './components/GameBoard';
import emojis from './emojis.json';

class App extends Component {
  state = {
    emojis: emojis,
    currentScore: 0,
    topScore: 0
  };

  Shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  updateState = id => {
    const Emojis = this.state.emojis.find(emoji => emoji.id === id)

    if (Emojis.clicked === false) {
      console.log(this.state.currentScore);
      Emojis.clicked = true;
      this.Shuffle(emojis)

      this.setState( {emojis} );
      this.setState({currentScore: this.state.currentScore + 1})
    } else {
      const emojis = this.state.emojis

      for (let i = 0; i < emojis.length; i++) {
        emojis[i].clicked = false
      };

      if (this.state.currentScore > this.state.topScore) {
        this.setState({topScore: this.state.currentScore});
      };

      this.setState({emojis});
      this.setState({currentScore: 0});
    }
  }
  render() {
    return (
      <div className="App">
          <Header />
          <Score 
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}
          />
          {this.state.emojis.map(emoji => (
            <DisplayImage 
              updateState={this.updateState}
              id={emoji.id}
              key={emoji.id}
              image={require(`${emoji.image}`)}
              clicked={emoji.clicked}
            />
          ))}
      </div>
    );
  }
}

export default App;
