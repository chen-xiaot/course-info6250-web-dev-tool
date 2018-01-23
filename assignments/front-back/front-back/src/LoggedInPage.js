import React, { Component } from 'react';

class LoggedInPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>hello {this.props.username}</header>
        <button onClick={this.props.handleLogout} >Log {this.props.username} Out</button>
        <ul>
          {this.props.users.map( (user, index) => { return <li key={index}> {user} </li> } )}
        </ul>
      </div>
    );
  }
}

export default LoggedInPage;