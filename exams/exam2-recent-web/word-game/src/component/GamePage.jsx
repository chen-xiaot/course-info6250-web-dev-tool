import React, { Component } from 'react';
import {LogoutButton} from './LogoutButton'
import GuessInputForm from './GuessInputForm'
import game from '../word-game'
import StartGameForm from './StartGameForm'
import GameInfoForm from './GameInfoForm'
import GuessHistoryForm from './GuessHistoryForm'
import MessageForm from './MessageForm'
import RuleForm from './RuleForm'

class GamePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      count: 0,
      currentDiff: 'normal',
      answer: '',
      answers: [],
      letterMatched: 0,
      letterExactMatched: 0,
      prevGuesses: [],
      win: false,
      isValidInput: true
    }

    this.startGame=this.startGame.bind(this)
    this.handleDiffSelector=this.handleDiffSelector.bind(this)
    this.submitInput=this.submitInput.bind(this)
  }

  componentDidMount() {
    this.init();
  }

  init() {
    game.start(this.state.currentDiff);
    this.setState({ 
      answer: game.answer, 
      answers: game.difficulties[this.state.currentDiff]
    })
  }

  startGame( { diff } ) {
    this.refs.GuessInputForm.clearInput();
    game.start(diff)
    this.setState({
      input: '',
      count: 0,
      currentDiff: diff,
      answer: game.answer,
      answers: game.difficulties[diff],
      letterMatched: 0,
      letterExactMatched: 0,
      prevGuesses: [],
      win: false,
      isValidInput: true
    })
    console.log(this.state.currentDiff)
  }

  handleDiffSelector( diff ) {
    const curDiff = this.state.currentDiff;
    console.log(curDiff);
    console.log(diff);
    if (curDiff !== diff) {
      this.startGame({diff});
    }
  }

  submitInput(inputWord) {
    const obj = game.guess(inputWord);
  	
    if (obj) {
      this.setState({
        input: inputWord,
        win: obj.win,
        count: obj.turns,
        letterMatched: obj.matched,
        letterExactMatched: obj.exactMatched
      })
      const newPrevGuesses = [...this.state.prevGuesses]
      newPrevGuesses.push( { input: inputWord.toUpperCase(), matched: obj.matched, exactMatched: obj.exactMatched  } )
      this.setState( { prevGuesses: newPrevGuesses, isValidInput: true } )
    } else {
      this.setState( {isValidInput: false} )
    }
  }

  render() {
    return (
      <div className='game-page'>
        <header className='game-header'>
          <span className='header-name' >Hello {this.props.username} </span>
          <LogoutButton buttonName={this.props.username} onClick={this.props.handleLogout} />
        </header>

        <RuleForm wordSize={this.state.answer.length} />
        <StartGameForm startGame={this.startGame} handleDiffSelector={this.handleDiffSelector} />
        <MessageForm isValidInput={this.state.isValidInput} win={this.state.win} />
        <GuessInputForm submitInput={this.submitInput} disabled={this.state.win} wordSize={this.state.answer.length} ref="GuessInputForm"/>

        <GameInfoForm
          difficulty={this.state.currentDiff}
          word={this.state.answer}
          guessesTimes={this.state.count}
          wordList={this.state.answers}
        />
        <GuessHistoryForm prevGuesses={this.state.prevGuesses}/>
      </div>
    )
  }
}

export default GamePage;