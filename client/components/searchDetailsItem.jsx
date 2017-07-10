import React, { Component } from 'react';
import GemName from './gemName.jsx';

class SearchDetailsItem extends Component {

  render() {
    const { gem } = this.props;

    const renderDependencies = gem.dependenciesList.map((dependency, index) => {
      const dependencyName = {name: dependency}

      return (
        <li key={index}>
          <GemName
            favoritesList={this.props.favorites}
            dependenciesData={this.props.dependencies}
            addFavorite={this.props.addFavorite}
            removeFavorite={this.props.removeFavorite}
            gem={dependencyName}
            gemStyle={'dependency__gem-name'}
            starStyle={'dependency__star'}
            favoriteStyle={'dependency__star--favorited'}
            i={index}
          />
        </li>
      );
    })

    return (
      <div className="search__details">
          <GemName
            { ...this.props }
            gemStyle={'details__name'}
            starStyle={'details__star'}
            favoriteStyle={'details__star--favorited'}
          />
          <div className="details__info">
            <p className="details__title--color">INFORMATION</p>
            <p className="details__copy--color">{gem.info}</p>
          </div>
          <div className="details__dependencies">
            <p className="details__title--color">DEPENDENCIES</p>
            <ul className="dependencies__list">
              { renderDependencies }
            </ul>
          </div>
        </div>
    );
  }
};

export default SearchDetailsItem;
