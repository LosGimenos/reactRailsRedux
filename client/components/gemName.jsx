import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  nameStyle: PropTypes.string,
  starStyle: PropTypes.string
};

const GemName = ({ name, nameStyle, starStyle }) => {
  return (
    <div className={ nameStyle }>
      <p>{ name }</p>
      <div className={ starStyle }>
      </div>
    </div>
  );
};

GemName.propTypes = propTypes;

export default GemName;
