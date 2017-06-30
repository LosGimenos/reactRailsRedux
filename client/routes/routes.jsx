import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/app.jsx';
import Nav from '../components/nav.jsx';
import Favorites from '../components/favorites.jsx';

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
  <Router>
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
  </Router>
);

export default Routes;
