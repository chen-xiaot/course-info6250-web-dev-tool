import React from 'react';

class LoginRegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateUsername=this.updateUsername.bind(this);
    this.updatePassword=this.updatePassword.bind(this);
    this.onLogin=this.onLogin.bind(this);
    this.onRegister=this.onRegister.bind(this);
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

  onRegister() {
    const { username, password } = this.state;
    this.props.onRegister({ username, password });    
  }

  render() {
    return (
      <div className='login-form'>
        <input className='login-input' onChange={this.updateUsername} placeholder="Username"/>
        <input className='login-input' onChange={this.updatePassword} placeholder="Password"/>
        <button className='login-btn' onClick={this.onLogin}> Login </button>
        <button className='login-btn' onClick={this.onRegister}> Register </button>
        <p className='login-info'>{this.props.error ? this.props.error : null}</p>
      </div>
    );
  }
}

export default LoginRegisterForm;