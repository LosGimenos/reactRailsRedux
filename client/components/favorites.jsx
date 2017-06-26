import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteGems: ["sapphire", "rails", "ruby"]
    };
    this.gemNameStyle = "";
    this.gemStarStyle = "";
  }

  render() {

    const gemList = this.state.favoriteGems.map(( gem ) => {
      return (
        <GemName
          name={ gem }
          nameStyle={this.gemNameStyle}
          starStyle={this.gemStarStyle}
        />
      );
    })

    return (
      <div className="wrapper__content favorites">
        <h1>Your Favorite Gems</h1>
        { gemList }
      </div>
    );
  }
}
