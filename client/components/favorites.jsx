import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GemName from './gemName.jsx';

const propTypes = {
  addFavorites: PropTypes.func,
  favoriteGems: PropTypes.array,
  removeFavorites: PropTypes.func,
  matchFavorites: PropTypes.func,
  favoriteGems: PropTypes.array
};

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localFavoriteGems: this.props.favoriteGems
    };
    this.gemNameStyle = "favorites__gem-name";
    this.gemStarStyle = "favorites__star";
    this.gemFavoritedStyle = "favorites__star--favorited";

    this.removeLocalFavorites = this.removeLocalFavorites.bind(this);
  }

  removeLocalFavorites(gem) {
    let favoriteGems = this.state.localFavoriteGems.filter((savedGem) => {
      return savedGem.name != gem;
    });
    this.setState({ localFavoriteGems: favoriteGems });
  }

  render() {

    const gemList = this.state.localFavoriteGems.map(( gem, index ) => {
      return (
        <li key={index}>
          <GemName
            name={ gem.name }
            nameStyle={this.gemNameStyle}
            starStyle={this.gemStarStyle}
            favoritedStyle={this.gemFavoritedStyle}
            addFavorite={this.props.addFavorites}
            removeFavorite={this.props.removeFavorites}
            isFavorited={ true }
            localFavoriteGems={this.state.localFavoriteGems}
            removeLocalFavorites={this.removeLocalFavorites}
            favoriteGems={this.props.favoriteGems}
            projectUri={ gem.uri }
          />
        </li>
      );
    })

    return (
      <div className="favorites">
        <h1>Your Favorite Gems</h1>
        <div className="favorites__gem-list">
          <ul>
            { gemList }
          </ul>
        </div>
      </div>
    );
  }
}

Favorites.propTypes = propTypes;
