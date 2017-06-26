import React, { Component } from 'react';
import SearchDetailsItem from './searchDetailsItem.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
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
        <SearchDetailsItem
          name={this.state.gem.name}
          info={this.state.gem.info}
          dependencies={this.state.gem.dependencies}
        />
      </div>
    );
  }
}
