import React, { Component } from 'react';

export default class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Your Favorite Gems</h1>
        <div className="favorites__gem-list">
          <ul>
          </ul>
        </div>
      </div>
    );
  }
}
