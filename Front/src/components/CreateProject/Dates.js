/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */


/**
 * Code
 */
const Dates = (debutDates, endDates) => (
  <li>
    <p>{debutDates}</p>
    <p>{endDates}</p>
  </li>
);

Dates.propTypes = {
  debutDates: PropTypes.string.isRequired,
  endDates: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Dates;
