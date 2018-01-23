import React, {Component} from 'react';

class RuleForm extends Component {
  render() {
    return (
      <div className='rule'>
        Valid input: contains exact {this.props.wordSize} letters, no duplicate inputs allowed
      </div>
    )
  }
}

export default RuleForm;