import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';

import store from '../store.js';
import AppConnector from '../components/connectors/appConnector.js';
import Nav from '../components/nav.jsx';
import FavoritesConnector from '../components/connectors/favoritesConnector.js';

const history = createHistory();
const middleware = routerMiddleware(history);

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={AppConnector} />
          <Route path="/favorites" component={FavoritesConnector} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
