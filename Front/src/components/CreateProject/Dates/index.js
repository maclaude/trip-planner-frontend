/**
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Date from 'src/containers/Dates/Dates';

/**
 * Code
 */
const Dates = ({ dateSuggest }) => (
  <ul>
    {dateSuggest.map(date => (
      <Date
        {...date}
      />
    ))}
  </ul>
);

Dates.propTypes = {
  dateSuggest: PropTypes.array.isRequired,
};

/**
 * Export
 */
export default Dates;
