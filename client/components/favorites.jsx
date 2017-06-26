import React, { Component } from 'react';

export default class Favorites extends Component {
  constructor() {
    super();
    this.state = {
      savedGems: []
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
