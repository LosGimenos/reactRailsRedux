import React, { Component } from 'react';

export default class App extends Component {

  submitHandler(e) {
    e.preventDefault();
    const query = this.refs.query.value;
    // this.props.queryGem(query);
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
      </div>
    );
  }
}
