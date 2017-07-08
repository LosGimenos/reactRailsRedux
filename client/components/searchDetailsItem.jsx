import React, { Component } from 'react';
import GemName from './gemName.jsx';

class SearchDetailsItem extends Component {
  render() {
    const { gem } = this.props;

    return (
      <div className="search__details">
          <GemName
            { ...this.props }
          />
          <div className="details__info">
            <p className="details__title--color">INFORMATION</p>
            <p className="details__copy--color">{gem.info}</p>
          </div>
          <div className="details__dependencies">
            <p className="details__title--color">DEPENDENCIES</p>
            <ul className="dependencies__list">
            </ul>
          </div>
        </div>
    );
  }
};

export default SearchDetailsItem;
