import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GemName from './gemName.jsx';

const propTypes = {
  name: PropTypes.string,
  dependencies: PropTypes.string,
  info: PropTypes.string,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  favoriteGems: PropTypes.array
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
        />
        <div className="details__info">
          <p className="details__title--color">INFORMATION</p>
          <p className="details__copy--color">{ this.props.info }</p>
        </div>
        <div className="details__dependencies">
          <p className="details__title--color">DEPENDENCIES</p>
          <p className="details__copy--color">{ this.props.dependencies }</p>
        </div>
      </div>
    );
  }
};


SearchDetailsItem.propTypes = propTypes;
