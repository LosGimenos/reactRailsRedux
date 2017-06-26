import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string
};

const GemName = ({ name }) => {
  return (
    <div className="details__name">
      <p>{ name }</p>
      <div className="details__star">
      </div>
    </div>
  );
};

GemName.propTypes = propTypes;

export default GemName;
