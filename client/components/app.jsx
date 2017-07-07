import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper__content">
        <div className="search__title">
          <h1>Search Gems</h1>
        </div>
        <div className="search__bar">
          <input className="search__input" type="text" placeholder="Search" />
          <div className="search__submit">
          </div>
        </div>
      </div>
    );
  }
}
