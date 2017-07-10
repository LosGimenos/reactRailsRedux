import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {

  componentDidMount() {
    this.props.toggleErrorOff();
  }

  render() {
    const favoritedGems = this.props.favorites.map((gem, index) => {
      return (
        <li key={index}>
          <GemName
            favoritesList={this.props.favorites}
            removeFavorite={this.props.removeFavorite}
            dependenciesData={this.props.dependencies}
            gem={gem}
            gemStyle={'favorites__gem-name'}
            starStyle={'favorites__star'}
            favoriteStyle={'favorites__star'}
            i={index}
          />
        </li>
      );
    })

    return (
      <div className="favorites">
        <h1>Your Favorite Gems</h1>
        <div className="favorites__gem-list">
          <ul>
            {favoritedGems}
          </ul>
        </div>
      </div>
    );
  }
}
