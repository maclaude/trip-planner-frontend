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
const Date = (debutDates, endDates) => (
  <div>
    <li>
      <p>{debutDates}</p>
      <p>{endDates}</p>
    </li>
  </div>
);

Date.propTypes = {
  debutDates: PropTypes.string.isRequired,
  endDates: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default Date;
