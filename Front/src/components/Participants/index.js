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
import NavbarUser from 'src/components/NavbarUser';
import AddParticipants from './addParticipants';

/**
 * Code
 */
const Participants = ({ project }) => (
  <div id="participants">
    <NavbarUser project={project} />
    <AddParticipants />
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
