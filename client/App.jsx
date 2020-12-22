/* eslint-disable react/jsx-filename-extension */
/**
  * @desc Renders our main app, Handles routes in app
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './public/login/Login.jsx';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <div>dashboard</div>
        </Route>
      </Switch>
    </div>
  );
}
