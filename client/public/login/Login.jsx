import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>gg</h1>
        <Link to="/dashboard">sup bruh</Link>
      </div>
    );
  }
}

export default Login;
