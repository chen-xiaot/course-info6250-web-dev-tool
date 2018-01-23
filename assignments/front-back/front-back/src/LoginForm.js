import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateUsername=this.updateUsername.bind(this);
    this.updatePassword=this.updatePassword.bind(this);
    this.onLogin=this.onLogin.bind(this);
  }

  updateUsername(e) {
    this.setState({username: e.target.value});
  }

  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  onLogin() {
    this.setState({
      password: ''
    });
    const { username, password } = this.state;
    this.props.onLogin({ username, password });
  }

  render() {
    return (
      <div className='login-form'>
        <input className='login-input' onChange={this.updateUsername} placeholder="Username"/>
        <input className='login-input' onChange={this.updatePassword} placeholder="Password"/>
        <button className='login-btn' onClick={this.onLogin}> Login </button>
        <p className='login-info'>{this.props.error ? this.props.error : null}</p>
      </div>
    );
  }
}

export default LoginForm;