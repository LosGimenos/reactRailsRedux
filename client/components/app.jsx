import React, { Component } from 'react';

import SearchDetailsItem from './searchDetailsItem.jsx';

export default class App extends Component {

  submitHandler(e) {
    e.preventDefault();
    this.props.clearDependencies();
    this.props.removeGem();
    const query = this.refs.query.value;
    this.props.queryGem(query);
  }

  errorTest() {
    return (this.props.error) ? true : false;
  }

  issueResultsOrError() {
    if (this.errorTest()) {
      return (
        <div className="search__error">
          <p>Oh no! Looks like that gem can't be found.</p>
        </div>
      );
    } else if (this.props.dependencies != '') {
        return (
          <SearchDetailsItem
            {...this.props}
          />
        );
      }
  }

  render() {
    return (
      <div className="wrapper__content">
        <div className="search__title">
          <h1>Search Gems</h1>
        </div>
        <div className="search__bar">
          <input
            className="search__input"
            ref="query"
            type="text"
            placeholder="Search" />
          <div className="search__submit" onClick={this.submitHandler.bind(this)}>
          </div>
        </div>
        { this.issueResultsOrError() }
      </div>
    );
  }
}
