import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/app.jsx';
import Nav from '../components/nav.jsx';
import Favorites from '../components/favorites.jsx';

const Routes = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path ="/favorites" component={Favorites} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
