import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import { Provider } from 'react-redux';

// import store from '../store';
import App from '../components/app.jsx';
import Nav from '../components/nav.jsx';
import Favorites from '../components/favorites.jsx';

const history = createHistory();
const middleware = routerMiddleware(history);

let favoriteGems = [];

function addFavorites(gem) {
  favoriteGems.push(gem);
}

function removeFavorites(gem) {
  favoriteGems = favoriteGems.filter((savedGem) => {
    return savedGem.name != gem;
  });
}

const Routes = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" render={() => (<App
                                                favoriteGems={favoriteGems}
                                                addFavorites={addFavorites}
                                                removeFavorites={removeFavorites}
                                                />)} />
          <Route path ="/favorites" render={() => (<Favorites
                                                      addFavorites={addFavorites}
                                                      favoriteGems={favoriteGems}
                                                      removeFavorites={removeFavorites}
                                                    />)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default Routes;
