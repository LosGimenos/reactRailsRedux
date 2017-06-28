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
    this.gemNameStyle = "details__name";
    this.gemStarStyle = "details__star";
  }

  render() {
    return (
      <div className="search__details">
        <GemName
          name={ this.props.name }
          nameStyle={ this.gemNameStyle }
          starStyle={ this.gemStarStyle }
        />
        <div className="details__info">
          <p className="details__title--color">INFORMATION</p>
          <p className="details__copy--color">{ this.props.info }</p>
        </div>
        <div className="details__dependencies">
          <p className="details__title--color">DEPENDENCIES</p>
          <p className="details__copy--color">{ this.props.dependencies }</p>
        </div>
      </div>
    );
  }
};


SearchDetailsItem.propTypes = propTypes;
