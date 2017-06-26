import React, { Component } from 'react';
import GemName from './gemName.jsx';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      favoriteGems: []
    };
  }

  render() {
    return (
      <div className="wrapper__content favorites">
        <h1>Your Favorite Gems</h1>
      </div>
    );
  }
}
