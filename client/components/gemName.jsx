import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  nameStyle: PropTypes.string,
  starStyle: PropTypes.string,
  favoritedStyle: PropTypes.string,
  addFavorite: PropTypes.func,
  removeFavorite: PropTypes.func,
  favoriteGems: PropTypes.array,
  matchFavorites: PropTypes.func,
  isFavorited: PropTypes.bool,
  localFavoriteGems: PropTypes.array,
  removeLocalFavorites: PropTypes.func
};

export default class GemName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorited: this.props.isFavorited,
    };

    this.toggleStar = this.toggleStar.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  favoritesCheck() {
    return this.state.favorited ? true : false;
  }

  toggleStar() {
    return this.favoritesCheck() ? this.props.favoritedStyle : this.props.starStyle;
  }

  clickHandler() {
    if (this.state.favorited && this.props.nameStyle == 'favorites__gem-name') {
      this.props.removeFavorite(this.props.name);
      this.props.removeLocalFavorites(this.props.name);
      this.setState({ favorited: false })
    } else if (this.state.favorited) {
        this.props.removeFavorite(this.props.name);
        this.setState({ favorited: false })
    } else if (!this.state.favorited) {
        this.props.addFavorite(this.props.name);
        this.setState({ favorited: true })
    }
  }

  render() {
    return (
      <div className={ this.props.nameStyle }>
        <p>{ this.props.name }</p>
        <div className={ this.toggleStar() } onClick={ this.clickHandler }>
        </div>
      </div>
    );
  }
}

GemName.propTypes = propTypes;
