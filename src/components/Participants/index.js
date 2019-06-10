/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
// Style
import './add_participants.scss';
// Components
import NavigationSingleProject from 'src/containers/Navigation/navigationSingleProject';
import AddParticipants from 'src/containers/Participants/addParticipants';

/**
 * Code
 */
const Participants = ({ project }) => (
  <div id="participants">
    <NavigationSingleProject project={project} />
    <AddParticipants project={project} />
  </div>
);

// PropTypes validation
Participants.propTypes = {
  project: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default Participants;
