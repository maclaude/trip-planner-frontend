/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavbarUser from 'src/components/NavbarUser';
import AvailabilityDates from 'src/containers/Availability/availabilityDates';


/**
 * Code
 */
const Availabilities = ({ project }) => (
  <div>
    <NavbarUser project={project} />
    <AvailabilityDates project={project} />
  </div>
);

// PropTypes validation
Availabilities.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default Availabilities;
