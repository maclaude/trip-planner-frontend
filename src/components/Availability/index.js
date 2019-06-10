/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/navigationSingleProject';
import AvailabilityDates from 'src/components/Availability/AvailabilityDates';

/**
 * Code
 */
const Availabilities = ({ project }) => (
  <>
    <NavigationSingleProject project={project} />
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
