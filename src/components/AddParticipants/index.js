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
import NavigationSingleProject from 'src/containers/Navigation/NavigationSingleProject';
import AddParticipants from 'src/containers/AddParticipants/AddParticipants';

/**
 * Code
 */
const AddParticipantsView = ({ project }) => (
  <div className="user-view">
    <NavigationSingleProject project={project} />
    <AddParticipants project={project} />
  </div>
);

// PropTypes validation
AddParticipantsView.propTypes = {
  project: PropTypes.object.isRequired,
};


/**
 * Export
 */
export default AddParticipantsView;
