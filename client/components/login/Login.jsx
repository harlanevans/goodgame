import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitChange(e) {
    e.preventDefault()
    if (e.target.value === 'Login') {
      fetch('/user/login', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: { 'Content-Type': 'application/JSON' }
      })
        .then(res => res.json())
        .then(data => {
          return <Redirect to="/dashboard"/>
        }).catch(
          (err) => console.log(err)
        )
    } else {
        fetch('/user/signup', {
          method: 'POST',
          body: JSON.stringify(this.state),
          headers: { 'Content-Type': 'application/JSON' }
        })
        .then(res => res.json())
        .then(data => {
          return <Redirect to="/dashboard"/>
        })
        .catch((err) => console.log(err))
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
          <Link to="/dashboard">
          <input
          onClick={this.submitChange}
          type="submit"
          value="Login"
          />
          </Link>
          <input
            onClick={this.submitChange}
            type="submit"
            value="Signup"
          />
        </form>
      </div>
    );
  }
}

export default Login;
