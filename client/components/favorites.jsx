import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {

  componentDidMount() {
    console.log('mounted')
    this.props.removeGem();
  }

  render() {
    const favoritedGems = this.props.favorites.map((gem, index) => {
      return (
        <li key={index}>
          <GemName
            removeFavorite={this.props.removeFavorite}
            gem={gem}
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
