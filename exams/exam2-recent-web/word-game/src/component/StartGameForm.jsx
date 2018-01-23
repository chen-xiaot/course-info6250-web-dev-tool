import React, { Component } from 'react';

class StartGameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {diff: 'normal'}
    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleChange(e) {
    const diffSelected = e.target.value;
    this.setState( {diff: diffSelected} );
    const diff = diffSelected;
    this.props.handleDiffSelector(diff);
  }

  handleClick() {
    const {diff} = this.state
    this.props.startGame( { diff } )
  }

  render() {
    return (
      <div className='start-game-area'>
        <select className='diff-selector' defaultValue='normal' onChange={this.handleChange}>
          <option value="easy">Easy</option>
          <option value="normal">Normal</option>
          <option value="hard">Hard</option>
        </select>

        <button className='start-btn' onClick={this.handleClick}> start </button>
      </div>
    )
  }
}

export default StartGameForm;