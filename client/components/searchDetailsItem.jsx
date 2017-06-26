import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GemName from './gemName.jsx';

const propTypes = {
  name: PropTypes.string,
  dependencies: PropTypes.string,
  info: PropTypes.string
};

export default class SearchDetailsItem extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search__details">
        <GemName
          name={ this.propTypes.name }
        />
        <div className="details__info">
          <p className="details__title--color">INFORMATION</p>
          <p className="details__copy--color">{ this.propTypes.info }</p>
        </div>
        <div className="details__dependencies">
          <p className="details__title--color">DEPENDENCIES</p>
          <p className="details__copy--color">{ this.propTypes.dependencies }</p>
        </div>
      </div>
    );
  }
};


SearchDetailsItem.propTypes = propTypes;
