/* eslint-disable react/jsx-filename-extension */
/**
  * @desc Renders our main app, Handles routes in app
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Dashboard from './components/login/Dashboard.jsx';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
    </div>
  );
}
