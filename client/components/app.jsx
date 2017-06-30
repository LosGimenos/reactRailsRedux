import React, { Component } from 'react';
import request from 'superagent';
import SearchDetailsItem from './searchDetailsItem.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gem:
        {
          name: "",
          info: "",
          uri: "",
          dependencies: null
        },
      favorites: this.props.favoriteGems,
      error: false,
      searched: false
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
    } else if (this.state.searched) {
        return (
          <SearchDetailsItem
            name={this.state.gem.name}
            info={this.state.gem.info}
            dependencies={this.state.gem.dependencies}
            addFavorite={this.props.addFavorites}
            removeFavorite={this.props.removeFavorites}
            favoriteGems={this.props.favoriteGems}
            projectUri={this.state.gem.uri}
          />
        );
      }
  }

  clickHandler() {
    let input = document.querySelector('.search__input');
    let query = input.value.toLowerCase();

    request
      .get('http://localhost:3000/api/v1/gems')
      .query({ query: query })
      .then((response) => {
        return JSON.parse(response.text)
      })
      .then((jsonResponse) => {
        let name = jsonResponse.name;
        let info = jsonResponse.info;
        let projectUri = jsonResponse.project_uri;
        let dependencies = [];

        jsonResponse.dependencies.development.forEach((gem) => {
          dependencies.push(gem);
        });

        jsonResponse.dependencies.runtime.forEach((gem) => {
          dependencies.push(gem);
        });

        this.setState({ gem:
          {
            name: name,
            info: info,
            dependencies: dependencies,
            uri: projectUri
          },
          error: false,
          searched: true })
      })
      .catch((err) => {
        this.setState({ error: true })
      })
  }

  render() {
    return (
      <div className="wrapper__content">
        <div className="search__title">
          <h1>Search Gems</h1>
        </div>
        <div className={this.issueSearchBarStyles()}>
          <input className="search__input" type="text" placeholder="Search" />
          <div className="search__submit" onClick={ this.clickHandler }>
          </div>
        </div>
        { this.issueResultsOrError() }
      </div>
    );
  }
}
