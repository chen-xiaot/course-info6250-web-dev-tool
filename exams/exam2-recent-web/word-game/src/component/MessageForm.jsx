import React, { Component } from 'react';

class MessageForm extends Component {
  render() {
    return (
      <div className='message'>
        {this.props.isValidInput ? '' : 'please enter valid input' }
        {this.props.win ? 'you win ! please restart game or change difficulty' : ''}
      </div>
    )
  }
}

export default MessageForm;