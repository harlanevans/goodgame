import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange(e) {
    if (e.target.value === 'Login') {
      fetch('/user', {
        username: this.state.username,
        password: this.state.password,
      })
        .then(res => res.json())
        .then(data => {
          if (data === false)
        });
    } else {

    }
  }

  render() {
    return (
      <div>
        <h1>gg</h1>
        <form>
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="username"
            value={ this.state.username }
            placeholder="username"
          />
          <br />
          <input
            onChange={(e) => this.handleChange(e)}
            type="text"
            name="password"
            value={ this.state.password }
            placeholder="password"
          />
          <br />
          <input
            onClick={this.submitChange}
            type="submit"
            value="Login"
          />
          <input
            onClick={this.submitChange}
            type="submit"
            value="Signup"
          />
        </form>
        <Link to="/dashboard">sup bruh</Link>
      </div>
    );
  }
}

export default Login;
