import React, { Component } from 'react';
import request from 'superagent';
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
      error: false
    };

    this.issueResultsOrError = this.issueResultsOrError.bind(this);
    this.issueSearchBarStyles = this.issueSearchBarStyles.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  errorTest() {
    return (this.state.error) ? true : false;
  }

  issueSearchBarStyles() {
    if (this.errorTest()) {
      return 'search__bar--error';
    } else {
      return 'search__bar';
    }
  }

  issueResultsOrError() {
    if (this.errorTest()) {
      return (
        <div className="search__error">
          <p>Oh no! Looks like that gem can't be found.</p>
        </div>
      );
    } else {
      return (
        <SearchDetailsItem
          name={this.state.gem.name}
          info={this.state.gem.info}
          dependencies={this.state.gem.dependencies}
        />
      );
    }
  }

  clickHandler() {
    request
      .get('http://localhost:3000/api/v1/gems')
      .then((response) => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="wrapper__content">
        <div className="search__title">
          <h1>Search Gems</h1>
        </div>
        <div className={this.issueSearchBarStyles()}>
          <input type="text" placeholder="Search" />
          <div className="search__submit" onClick={ this.clickHandler }>
          </div>
        </div>
        { this.issueResultsOrError() }
      </div>
    );
  }
}
