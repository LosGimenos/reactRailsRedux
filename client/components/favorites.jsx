import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {

  componentDidMount() {
    this.props.removeGem();
  }

  render() {
    const favoritedGems = this.props.favorites.map((gem, index) => {
      return (
        <li key={index}>
          <GemName
            removeFavorite={this.props.removeFavorite}
            gem={gem}
            gemStyle={'favorites__gem-name'}
            starStyle={'favorites__star'}
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
