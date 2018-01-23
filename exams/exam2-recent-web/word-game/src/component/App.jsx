import React, { Component } from 'react';
import '../style/App.css';
import '../style/Login.css';
import '../style/Game.css'
import { login, isLoggedIn, logout, register }  from '../user-status';
import LoginRegisterForm from './LoginRegisterForm';
import GamePage from './GamePage'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.submitLogin=this.submitLogin.bind(this);
    this.submitRegister=this.submitRegister.bind(this);
    this.handleLogout=this.handleLogout.bind(this); 
  }

  componentDidMount() {
    isLoggedIn()
    .then( isLoggedInInfo => {
      if (isLoggedInInfo.username) {
        this.setState( { loggedIn: true, user: isLoggedInInfo.username } )
      }
    });
  }

  submitLogin({ username, password }) {
    login(username, password)
    .then( loginInfo => {
      if(!loginInfo.error){
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

  submitRegister({ username, password }) {
    register(username, password)
    .then( registerInfo => {
      if(!registerInfo.error){
        this.setState({
        loggedIn: true,
        user: registerInfo.username
      });
        document.cookie=`userToken=${registerInfo.token}`;
      } else {
        this.setState({error : registerInfo.error});
      }
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
          <GamePage username={this.state.user} handleLogout={this.handleLogout} /> : 
          <LoginRegisterForm onLogin={this.submitLogin} onRegister={this.submitRegister} error={this.state.error} />
        }
      </div>
    );
  }
}

export default App;
