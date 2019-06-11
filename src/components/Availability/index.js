/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Components
import NavigationSingleProject from 'src/containers/Navigation/NavigationSingleProject';
import AvailabilityDates from 'src/components/Availability/AvailabilityDates';

/**
 * Code
 */
const AvailabilityView = ({ project }) => (
  <div id="availabilityView">
    <NavigationSingleProject project={project} />
    <AvailabilityDates project={project} />
  </div>
);

// PropTypes validation
AvailabilityView.propTypes = {
  project: PropTypes.object.isRequired,
};

/**
 * Export
 */
export default AvailabilityView;
