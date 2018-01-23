import React, { Component } from 'react';
import { login, logout, getUserList }  from './user-status';
import LoginForm from './LoginForm';
import LoggedInPage from './LoggedInPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {loggedIn: false, users: []};
    this.submitLogin=this.submitLogin.bind(this);
    this.handleLogout=this.handleLogout.bind(this);
    this.submitGetUserList=this.submitGetUserList.bind(this);
  }

  submitLogin({ username, password }) {
    login(username, password)
    .then( loginInfo => {
      if(!loginInfo.error) {
          this.submitGetUserList(loginInfo.username, loginInfo.token);
          this.setState({
            loggedIn: true,
            user: loginInfo.username,
            error: ''
          });
          document.cookie=`userToken=${loginInfo.token}`;
      } else {
        this.setState({error : loginInfo.error});
      }
    });
  }

  submitGetUserList( username, token ) {
    getUserList(username, token)
    .then( info => {
      console.log(info)
      const newUsers = [...this.state.users];
      for (let i = 0; i < info.length; i++) {
        newUsers.push(info[i].username);
      }
      console.log(newUsers);
      this.setState( { users: newUsers } );
    });
  }

  handleLogout() {
    logout(this.state.user)
    .then( logoutInfo => {
      this.setState({
        loggedIn: false,
        user: ''
      });
      document.cookie=`userToken=${logoutInfo.token}`;
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? 
          <LoggedInPage username={this.state.user} handleLogout={this.handleLogout} users={this.state.users}/> : 
          <LoginForm onLogin={this.submitLogin} onRegister={this.submitRegister} error={this.state.error} />
        }
      </div>
    );
  }
}

export default App;
