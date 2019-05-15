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
import AvailabilityDates from 'src/components/Availability/AvailabilityDates';

/**
 * Code
 */
const Availabilities = ({ project }) => (
  <>
    <NavbarUser project={project} />
    <AvailabilityDates project={project} />
  </>
);

// PropTypes validation
Availabilities.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Availabilities;
