import React, { Component } from 'react';

class GuessInputForm extends Component {
  constructor(props) {
    super(props)
    this.state = {input: ''}
    this.updateInput = this.updateInput.bind(this)
    this.submitInput = this.submitInput.bind(this)
    this.clearInput = this.clearInput.bind(this)
  }

  updateInput(e) {
    if (e.target.value.length > this.props.wordSize) {
      e.target.value = e.target.value.substring(0, this.props.wordSize)
    }
    this.setState({input: e.target.value})
  }

  submitInput() {
    const input = this.state.input
    this.props.submitInput(input)
    this.clearInput()
  }

  clearInput() {
    this.setState({input: ''})
  }

  render() {
    return (
      <div className='guess-area'>
        <input className='guess-input' placeholder='enter guess' onChange={this.updateInput} value={this.state.input} disabled={this.props.disabled}/>
        <button className='submit-btn' onClick={this.submitInput} disabled={this.props.disabled}> submit </button>
      </div>
    )
  }
}

export default GuessInputForm;