import React, {Component} from 'react';

class GuessHistoryForm extends Component {
  render() {
    return (
      <ul className='guess-history' >
        {this.props.prevGuesses.map((guess, index) => {return <li key={index}> <strong>Guess:</strong> {guess.input} <strong>Matched:
        </strong>{guess.matched} <strong>ExactMatched:</strong> {guess.exactMatched} </li> })}
      </ul>
    )
  }
}

export default GuessHistoryForm;