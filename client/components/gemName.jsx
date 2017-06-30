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
  removeLocalFavorites: PropTypes.func,
  projectUri: PropTypes.string
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
        this.props.addFavorite(
          {
            name: this.props.name,
            uri: this.props.projectUri
          }
        );
        this.setState({ favorited: true })
    }
  }

  renderAnchor() {
    console.log(this.props.projectUri)
    if (this.props.projectUri) {
      return (
        <div>
          <a href={this.props.projectUri} target="_blank">
            <p>{ this.props.name }</p>
          </a>
        </div>
      );
    } else {
      return (
        <div><p>{ this.props.name }</p></div>
      );
    }
  }

  render() {
    return (
      <div className={ this.props.nameStyle }>
        { this.renderAnchor() }
        <div
          className={ this.toggleStar() }
          onClick={ this.clickHandler }>
        </div>
      </div>
    );
  }
}

GemName.propTypes = propTypes;
