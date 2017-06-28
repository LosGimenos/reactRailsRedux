import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteGems: ["sapphire", "rails", "ruby", "poopy", "loopy", "stoopy", "moopy"]
    };
    this.gemNameStyle = "favorites__gem-name";
    this.gemStarStyle = "favorites__star";
  }

  render() {

    const gemList = this.state.favoriteGems.map(( gem ) => {
      return (
        <li>
          <GemName
            name={ gem }
            nameStyle={this.gemNameStyle}
            starStyle={this.gemStarStyle}
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
