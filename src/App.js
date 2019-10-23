//jshint esversion: 6

import React from 'react';
import './App.css';

function Title() {
  return (
    <h1>Think of a number between 0 and 100</h1>
  )
}

function CurrentGuess(props) {
  return (
    <p>Is the number you are thinking of {props.currentGuess}?</p>
  )
}

function CorrectGuess(props) {
  return (
    <p>So your number was {props.currentGuess}, neat.</p>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      low: 0,
      high: 100,
      currentGuess: 50,
      hasBeenGuessed: false
    }
    this.guessIsHigh = this.guessIsHigh.bind(this);
    this.guessIsLow = this.guessIsLow.bind(this);
    this.guessIsCorr = this.guessIsCorr.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  guessIsHigh() {
    this.setState(state => ({
      high: state.currentGuess,
    }));

    this.setState(state => ({
      currentGuess: state.low + (Math.floor((state.high-state.low)/2))
    }));
  }

  guessIsLow() {
    this.setState(state => ({
      low: state.currentGuess,
    }));

    this.setState(state => ({
      currentGuess: state.low + (Math.floor((state.high-state.low)/2))
    }));
  }

  guessIsCorr() {
    //set hasBeenGuessed to true
    this.setState(state => ({
      hasBeenGuessed: true
    }))
  }

  resetGame() {
    this.setState(state => ({
      low: 0,
      high: 100,
      currentGuess: 50,
      hasBeenGuessed: false
    }));
  }

  render() {
    if (!this.state.hasBeenGuessed) {
      return (
        <div className="App App-header">
          <Title />
          <CurrentGuess currentGuess={this.state.currentGuess} />
          <div className="marginTop">
            <button onClick={this.guessIsHigh}>Guess is too high</button>
            <button onClick={this.guessIsLow}>Guess is too low</button>
            <button onClick={this.guessIsCorr}>You guessed it!</button>
          </div>
        </div>
      );
    }

    return (
      <div className="App App-header">
        <Title />
        <CorrectGuess className="currentGuess" currentGuess={this.state.currentGuess} />
        <button onClick={this.resetGame}>Click to try again</button>
      </div>
    );

  }
}

export default App;
