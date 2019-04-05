/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/containers/NavbarUser';
import SuggestDates from 'src/containers/SuggestDates/suggestDates';
// Style
import './dates.scss';

/**
 * Code
 */
const Dates = ({ project }) => (
  <div>
    <NavbarUser project={project} />
    <SuggestDates />
  </div>
);

// PropTypes validation
Dates.propTypes = {
  project: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default Dates;
