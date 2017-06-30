import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GemName from './gemName.jsx';

const propTypes = {
  name: PropTypes.string,
  dependencies: PropTypes.array,
  info: PropTypes.string,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  favoriteGems: PropTypes.array,
  projectUri: PropTypes.string
};

export default class SearchDetailsItem extends Component {
  constructor() {
    super();
    this.gemNameStyle = "details__name";
    this.gemStarStyle = "details__star";
    this.gemFavoritedStyle = "details__star--favorited";
  }

  isFavorited() {
    let answer = false;
    this.props.favoriteGems.forEach((gem) => {
      if (gem == this.props.name) {
        answer = true
      }
    })
    return answer;
  }

  render() {
    const dependentGems = this.props.dependencies.map((gem, index) => {
      return (
        <li key={index}>
          <GemName
            key={index}
            name={ gem.name }
            nameStyle={ this.gemNameStyle }
            starStyle={ this.gemStarStyle }
            favoritedStyle={ this.gemFavoritedStyle }
            addFavorite={ this.props.addFavorite }
            removeFavorite={ this.props.removeFavorite }
            favoriteGems={ this.props.favoriteGems }
            isFavorited={ this.isFavorited() }
          />
        </li>
      );
    })

    return (
      <div className="search__details">
        <GemName
          name={ this.props.name }
          nameStyle={ this.gemNameStyle }
          starStyle={ this.gemStarStyle }
          favoritedStyle={ this.gemFavoritedStyle }
          addFavorite={ this.props.addFavorite }
          removeFavorite={ this.props.removeFavorite }
          favoriteGems={ this.props.favoriteGems }
          isFavorited={ this.isFavorited() }
          projectUri={ this.props.projectUri }
        />
        <div className="details__info">
          <p className="details__title--color">INFORMATION</p>
          <p className="details__copy--color">{ this.props.info }</p>
        </div>
        <div className="details__dependencies">
          <p className="details__title--color">DEPENDENCIES</p>
          <ul dependencies__list>
            {dependentGems}
          </ul>
        </div>
      </div>
    );
  }
};


SearchDetailsItem.propTypes = propTypes;
