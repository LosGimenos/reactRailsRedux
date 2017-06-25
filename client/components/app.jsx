import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    state = {
      gem:
        {
          name: "sapphire",
          info: "An automated web acceptance test framework for non-technical resources using selenium-wedriver.",
          dependencies: "None"
        },
      savedGems: []
    };
  }

  render() {
    return (
      <div className="wrapper__content">
        <div className="search__title">
          <h1>Search Gems</h1>
        </div>
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <div className="search__submit">
          </div>
        </div>
        <div className="search__details">
          <div className="details__name">
          </div>
          <div className="details__info">
          </div>
          <div className="details__dependencies">
          </div>
        </div>
      </div>
    );
  }
}
