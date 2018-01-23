import React, { Component } from 'react';

class GameInfoForm extends Component {
  render() {
    return (
      <div className='game-info'>
        <span><strong>Difficulty:</strong> {this.props.difficulty} </span>
        <span><strong>Word Size:</strong> {this.props.word.length} </span>
        <span><strong>Guesses Times:</strong> {this.props.guessesTimes} </span>
        <p><strong>Word List:</strong> {this.props.wordList.map((word, index) => {return <span key={index}> {word} </span>})} </p>
      </div>
    )
  }
}

export default GameInfoForm;