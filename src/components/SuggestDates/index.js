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
  <>
    <NavbarUser project={project} />
    <SuggestDates project={project} />
  </>
);

// PropTypes validation
Dates.propTypes = {
  project: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default Dates;
