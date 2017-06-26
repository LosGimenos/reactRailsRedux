import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  dependencies: PropTypes.string,
  info: PropTypes.string
};

const SearchDetailsItem = ({ name, dependencies, info }) => {
  return (
    <div className="search__details">
     <div className="details__name">
      <p>{ name }</p>
      <div className="details__star">
      </div>
     </div>
     <div className="details__info">
      <p className="details__title--color">INFORMATION</p>
      <p className="details__copy--color">{ info }</p>
     </div>
     <div className="details__dependencies">
      <p className="details__title--color">DEPENDENCIES</p>
      <p className="details__copy--color">{ dependencies }</p>
     </div>
    </div>
  );
};


SearchDetailsItem.propTypes = propTypes;

export default SearchDetailsItem;
