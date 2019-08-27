import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';

export default () => (
  <App>
    <Switch>
      <Route path={'/'} component={HomePage} />

      <Redirect to={'/clipList'} />
    </Switch>
  </App>
);

